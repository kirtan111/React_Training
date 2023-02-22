import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
    const [blogState, setBlogState] = useState({ posts: [] });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setBlogState({ posts: response.data });
            console.log(response);
        });
    });

    const posts = blogState.posts.map((post) => {
        return <Post />;
    });
    return (
        <div>
            <section className="Posts">{posts}</section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
