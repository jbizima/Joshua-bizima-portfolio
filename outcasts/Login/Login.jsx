import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "../../axios/axios.instance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const accessToken = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      await axios
        .post(`users/login`, { email, password })
        .then((res) => {
          console.log(res, "RESPONSE");
          if (res.status === 200) {
            localStorage.setItem(
              "userData",
              JSON.stringify(res.data.accessToken)
            );
            navigate("/dashboard");
            setEmail("");
            setPassword("");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <center>
        {" "}
        <h1> Admin Login </h1>{" "}
      </center>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label>Email : </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
