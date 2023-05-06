import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "../../src/axios/axios.instance";
import "./Dashboard.css";
import Modal from "./Modal";

const Dashboard = () => {
  const accessToken = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("articles")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { replace: true });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login", { replace: true });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`articles/${id}`)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        axios
          .get("articles")
          .then((res) => {
            setPosts(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="dash-bar">
        <div
          className="title"
          onClick={() => {
            navigate("/");
          }}
        >
          Bizima Joshua
        </div>
        <div id="logout" onClick={handleLogout}>
          <IoLogOutOutline />
        </div>
      </div>
      <button onClick={() => setOpenModal(true)} className="modalButton">
        Modal
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="dash-body">
        {posts.map((blog) => {
          return (
            <div className="dash-blog" key={blog._id}>
              <img src={blog.image} alt="" />
              <div className="dash-content">
                {" "}
                <span className="dash-title">{blog.title}</span>{" "}
                <span className="dash-date">
                  {new Date(blog.createdAt).toUTCString()}
                </span>
                <div className="dash-buttons">
                  <button className="update">Update</button>
                  <button
                    className="delete"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(blog._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
