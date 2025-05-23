import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./components/log-in";
import SignUp from "./components/sign-up";
import Profile from "./components/profile";
import CreatePost from "./components/CreatePost";
import { PostsProvider, PostsContext } from "./components/PostContext";


const Dashboard = () => {
  const { posts } = React.useContext(PostsContext);

  return (
    <div className="bg-gray-100 min-h-[400px] p-8 mt-8 rounded-lg max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <Link to="/create-post">
          <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition">
            Add a Post!
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-300 p-4 rounded-lg">
            <h3 className="text-white font-bold text-xl mb-2">{post.title}</h3>
            <p className="text-white/90">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const Home = () => (
  <div className="text-center mt-16">
    <h1 className="text-3xl font-bold">Welcome to Posts!</h1>
    <p className="mt-2 text-gray-600">This is your home page after login or sign-up.</p>
    <Dashboard />
  </div>
);


function App() {
  return (
    <PostsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
