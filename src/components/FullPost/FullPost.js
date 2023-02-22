import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FullPost.css";

const FullPost = (props) => {
    const [fullPost, setFullPost] = useState({ loadedPost: null });

    useEffect(() => {
        if (props.id) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + props.id).then((response) => {
                // console.log(response);
                setFullPost({ loadedPost: response.data });
            });
        }
    }, [props.id]);

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (props.id) {
        <p style={{ textAlign: "center" }}>Loading ...</p>;
    }
    if (fullPost.loadedPost) {
        post = (
            <div className="FullPost">
                <h1>{fullPost.loadedPost.title}</h1>
                <p>{fullPost.loadedPost.content}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
        );
    }
    return post;
};

export default FullPost;
