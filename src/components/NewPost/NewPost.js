import React, { useState } from "react";
import "./NewPost.css";

const NewPost = () => {
    const [newPost, setNewPost] = useState({ title: "", content: "", author: "Max" });

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={newPost.title} onChange={(event) => setNewPost({ title: event.target.value })} />
            <label>Content</label>
            <textarea rows="4" value={newPost.content} onChange={(event) => setNewPost({ content: event.target.value })} />
            <label>Author</label>
            <select value={newPost.author} onChange={(event) => setNewPost({ author: event.target.value })}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button>Add Post</button>
        </div>
    );
};

export default NewPost;
