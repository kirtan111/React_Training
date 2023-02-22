import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
    const [blogState, setBlogState] = useState({ posts: [], selectedPostId: null });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map((post) => {
                return {
                    ...post,
                    auther: "Max",
                };
            });
            setBlogState({ posts: updatedPost });
        });
    }, []);

    const postClickHandler = (id) => {
        setBlogState((prevState) => ({
            ...prevState,
            selectedPostId: id,
        }));
    };

    const posts = blogState.posts.map((post) => {
        return <Post key={post.id} title={post.title} auther={post.auther} clicked={() => postClickHandler(post.id)} />;
    });
    return (
        <div>
            <section className="Posts">{posts}</section>
            <section>
                <FullPost id={blogState.selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
