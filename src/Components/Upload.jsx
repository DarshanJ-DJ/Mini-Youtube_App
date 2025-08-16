import axios from "axios";
import React, { useState } from "react";

export default function Upload({ currentUser }) {
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");

  const handleUpload = () => {
    if (!title || !fileName) {
      alert("Please enter title and select video");
      return;
    }

    const newVideo = {
      title,
      uploader: currentUser,
      date: new Date().toISOString(),
      url: `/uploads/${fileName}`, // Link to public/uploads
    };

    let saveVideos=async()=>{
          try{
            await axios.post("http://localhost:3000/videos",newVideo)
            alert("video uploaded sucessful")
            setTitle("")
            setFileName("")
          }catch(err){
            alert("error during uploading the file")
          }
    }
    saveVideos()
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Video</h2>
      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFileName(e.target.files[0]?.name)}
      />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
