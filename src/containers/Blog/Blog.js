import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
    const [blogState, setBlogState] = useState({
        posts: [],
        selectedPostId: null,
        error: false,
    });

    useEffect(() => {
        axios
            .get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map((post) => {
                    return {
                        ...post,
                        auther: "Max",
                    };
                });
                setBlogState({ posts: updatedPost });
            })
            .catch(() => {
                setBlogState({ error: true });
            });
    }, []);

    const postClickHandler = (id) => {
        setBlogState((prevState) => ({
            ...prevState,
            selectedPostId: id,
        }));
    };

    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong...!</p>;
    if (!blogState.error) {
        posts = blogState.posts.map((post) => {
            return <Post key={post.id} title={post.title} auther={post.auther} clicked={() => postClickHandler(post.id)} />;
        });
    }
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
