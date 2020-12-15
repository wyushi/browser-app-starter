import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../api/client";
import Post from "./model/Post";

export const loadPosts = createAsyncThunk('post/loadPosts', async () => {
    return await client.callRemote(100, [] as Post[]);
});

export const submitPost = createAsyncThunk('post/submitPost', async (content: string) => {
    const post: Post = { content };
    return await client.callRemote(100, post);
});

export interface PostState {
    current: string,
    posts: Post[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: PostState = {
    current: "",
    posts: <Post[]> [],
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

export const selectPost = (state: any) => state.post;

export default postSlice.reducer;