import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	user: {
		id: null,
		name: '',
	},
	token: null,
	playlist: [],
	usersDB: [
		{
			id: 1,
			email: 'test@example.com',
			password: 'password123',
			name: 'John Doe',
		},
	],
};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        createAccount:(state, action) => {
            state.user.id = action.payload.id
            state.user.name = action.payload.name
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.usersDB.find(user => user.email === email && user.password === password);
            if (user) {
                state.user.id = user.id;
                state.user.name = user.name;
                state.token = 'fake-jwt-token'; // Token fictif pour la simulation
            } else {
                // Gérer le cas où l'authentification échoue
                console.error('Invalid email or password');
            }
        },
        setToken:(state, action ) =>  {
            state.token = action.payload.token
        }, 
        createPlaylist: (state, action) => {
            state.playlist = action.payload.playlist
        }
    }
})

export const { createAccount, setToken, createPlaylist, loginUser } = musicSlice.actions;

export const store = configureStore({
	reducer: { music: musicSlice.reducer},
    devTools: true
});

export default store