import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState ={
    user:{
        id: null,
        name: '',
    },
    token: null,
    playlist: []
}

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        createAccount:(state, action) => {
            state.user.id = action.payload.id
            state.user.name = action.payload.name
        },
        setToken:(state, action ) =>  {
            state.token = action.payload.token
        }, 
        createPlaylist: (state, action) => {
            state.playlist = action.payload.playlist
        }
    }
})

export const { createAccount, setToken, createPlaylist } = musicSlice.actions;

export const store = configureStore({
	reducer: { music: musicSlice.reducer},
    devTools: true
});

export default store