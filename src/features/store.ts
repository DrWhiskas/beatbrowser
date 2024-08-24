import { createSlice, configureStore } from "@reduxjs/toolkit";

interface User {
    id: number | null;
    name: string;
}

interface UserDB {
    id: number;
    email: string;
    password: string;
    name: string;
}

interface MusicState {
    user: User;
    token: string | null;
    playlist: string[];
    usersDB: UserDB[];
}

const initialState: MusicState = {
    user: {
        id: null,
        name: '',
    },
    token: null,
    playlist: [],
    usersDB: [
        {
            id: 1,
            email: 'admin@admin.com',
            password: 'admin123',
            name: 'Admin Admin',
        },
    ],
};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        createAccount: (state, action) => {
            const newUser: UserDB = {
                id: Date.now() + Math.random(),
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
            };
            state.usersDB.push(newUser);
            state.user.id = newUser.id;
            state.user.name = newUser.name;
            state.token = 'testing-token';
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.usersDB.find(user => user.email === email && user.password === password);
            if (user) {
                state.user.id = user.id;
                state.user.name = user.name;
                state.token = 'fake-jwt-token';
            } else {
                console.error('Invalid email or password');
            }
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        createPlaylist: (state, action) => {
            state.playlist = action.payload.playlist;
        },
    },
});

export const { createAccount, setToken, createPlaylist, loginUser } = musicSlice.actions;

export const store = configureStore({
    reducer: { music: musicSlice.reducer },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;