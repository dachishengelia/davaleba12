import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "./PostContext";

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addPost({ title, description });
    navigate("/"); 
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-left font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left font-semibold mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter post description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
