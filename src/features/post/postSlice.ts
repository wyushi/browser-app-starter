import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../api/client";

export const loadPosts = createAsyncThunk('post/loadPosts', async () => {
    const response = await client.get("/post");
    return response.posts;
});

export const submitPost = createAsyncThunk('post/submitPost', async (content: string) => {
    const response = await client.post("/post", { content });
    return response.post;
})

interface PostState {
    current: string,
    posts: any[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: PostState = {
    current: "",
    posts: <string[]> [],
    status: 'idle',
    error: null
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loadPosts.pending, (state: PostState, action) => {
            state.status = 'loading';
        });
        builder.addCase(loadPosts.fulfilled, (state: PostState, action) => {
            state.status = "succeeded";
            state.posts = state.posts.concat(action.payload);
        });
        builder.addCase(loadPosts.rejected, (state: PostState, action) => {
            state.status = "failed";
        });
        builder.addCase(submitPost.fulfilled, (state: PostState, action) => {
            state.posts.push(action.payload);
            state.current = "";
        });
    }
});

export const { setCurrent } = postSlice.actions;

export const selectPost = state => state.post;

export default postSlice.reducer;