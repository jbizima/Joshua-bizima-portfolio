import React, { useEffect, useState } from "react";
import axios from "../../axios/axios.instance";
import "./Blog.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  const urlId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    axios.get(`articles/${urlId}`).then((res) => {
      setPost(res.data.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <div className="back-arrow">
        <BsArrowLeft
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="blog-container">
        <h1>{post.title}</h1>
        <img src={post.image} alt="Post Image" />
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Blog;
