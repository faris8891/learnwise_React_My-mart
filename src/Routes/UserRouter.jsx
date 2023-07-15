import React from "react";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../Axios/axios";

export default function UserRouter() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const handleSelectFile = (e) => setFile(e.target.files[0]);
  const handleUpload = async (e) => {
    e.preventDefault()
    console.log(e.target.user.value);
    const aaa = {
      user1:e.target.user.value,
      user2:e.target.user2.value
    }
    try {
      const data = new FormData();
      data.append("my_file", file);
      data.append("values", aaa);
      console.log(data);
      const res = await axios.post(
        "http://127.0.0.1:3011/dealers/products",data
      );
      setRes(res.data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>UserRouter</div>
      <div className="App">
        {file && <center> {file.name}</center>}
        <form id="asd" onSubmit={handleUpload}>
          <input
            id="file"
            type="file"
            onChange={handleSelectFile}
            multiple={false}
          />
          <input name="user" type="text"></input>
          <input name="user2" type="text"></input>
          <button type="submit" className="btn-green">
            send
          </button>
        </form>
      </div>
    </>
  );
}
