import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css";

const NewPost = (props) => {
    const [newPost, setNewPost] = useState({ title: "", content: "", author: "Max" });

    const postDataHandler = () => {
        const postData = {
            title: newPost.title,
            content: newPost.content,
            author: newPost.author,
        };
        axios.post("/posts", postData).then((response) => console.log(response));
    };

    // useEffect(() => {
    //     console.log(props);
    // }, [props]);

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
            <label>Content</label>
            <textarea rows="4" value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} />
            <label>Author</label>
            <select value={newPost.author} onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );
};

export default NewPost;
