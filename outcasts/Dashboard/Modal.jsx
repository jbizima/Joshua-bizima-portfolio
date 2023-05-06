import React, { useState } from "react";
import img1 from "../../images/4.jpg";
import axios from "../../src/axios/axios.instance";

const Modal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  if (!open) return null;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);

  const handleCreatePost = async () => {
    await axios
      .post("articles", formData)
      .then((res) => {
        console.log(res, "RESPONSE");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreatePost();
          }}
        >
          <label>Email : </label>
          <input
            type="text"
            placeholder="Enter Title"
            name="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label>Description : </label>
          <input
            type="text"
            placeholder="Enter Description"
            name="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            required
          />
          <label htmlFor="file">
            {" "}
            <button className="form-button" type="submit">
              Upload
            </button>
          </label>
          <button className="form-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
