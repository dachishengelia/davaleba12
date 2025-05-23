import React, { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", description: "This is a short description of the post card." },
    { title: "Post Title 2", description: "This is a short description of the post card." },
    { title: "Post Title 3", description: "This is a short description of the post card." },
  ]);

  const addPost = (post) => setPosts((prev) => [...prev, post]);

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};
