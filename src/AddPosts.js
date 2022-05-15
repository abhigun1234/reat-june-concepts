import React, { useEffect, useState } from 'react';
import axios from 'axios'
function AddPosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };

  return (
      <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" >
           Create Post
          </button>
        </form>
      </div>
  );
}
export default AddPosts;