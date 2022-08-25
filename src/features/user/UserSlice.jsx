import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import produce, {nothing} from 'immer';
import axios from "axios";


const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        return [...resp.data];
    } catch ( err ) {
        return err.message;
    }
    
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state, action) => (
                state.loading = true
                
            ))
            .addCase(fetchUsers.fulfilled, (state, action) => (
                state.loading = false,
                state.users = action.payload,
                state.error = ''
            ))
            .addCase(fetchUsers.rejected, (state, action) => (
                state.loading = false,
                state.users = [],
                state.error = action.error.message
            ))
    }
})
// produce(userSlice, draft => undefined)
export const selectAllUsers = (state) => state.users
export default userSlice.reducer;