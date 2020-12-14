import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent, selectPost, loadPosts, submitPost } from "./postSlice";

export function Post() {
    const post = useSelector(selectPost);
    const dispatch = useDispatch();

    useEffect(() => {
        if (post.status === 'idle') {
            dispatch(loadPosts());
        }
    }, [post.status, dispatch])

    return (
        <div>
            <div>
                {post.posts.map(post => <div>{post.content}</div>)}
            </div>
            {post.status == 'loading' ? <div>{post.status}</div> : ""}
            <div>
                <input
                    value={post.current}
                    onChange={e => dispatch(setCurrent(e.target.value))}
                />
                <button
                    onClick={_ => dispatch(submitPost(post.current))}
                > -&gt; </button>
            </div>
        </div>
    );
}