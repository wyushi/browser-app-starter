import React from "react";
import Post from "./Post";

type PostItemProp = {
    post: Post;
};

type PostItemType = (props: PostItemProp) => React.ReactElement;

const PostItem: PostItemType = (props) => (
    <div>{props.post.content}</div>
);

export default PostItem;