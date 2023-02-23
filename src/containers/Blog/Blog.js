import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import axios from "../../axios";
// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const Blog = () => {
    return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: "/new-post",
                                    hash: "submit",
                                    search: "?quick-submit=true",
                                }}
                            >
                                New Post
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route exact path="/" element={<Posts />}>
                    {" "}
                </Route>
                <Route path="/new-post" element={<NewPost />}>
                    {" "}
                </Route>
            </Routes>
        </div>
    );
};

export default Blog;
