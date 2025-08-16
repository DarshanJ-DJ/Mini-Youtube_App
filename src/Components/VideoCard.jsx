import axios from "axios";
import React from "react";

export default function VideoCard({ video, currentUser }) {
  const handleDelete = async() => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try{
        let res=await axios.delete(`http://localhost:3000/videos/${video.id}`,{method:"DELETE"})
        console.log(res.data);
        alert("video deleted successfully")  
      }catch(err){
        console.log("unable to delete: ",err.message)
      }
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <video src={video.url} controls style={{ width: "100%" }} />
      <h4>{video.title}</h4>
      <p>Uploaded by: {video.uploader}</p>
      <p>Date: {new Date(video.date).toLocaleString()}</p>
      {currentUser === video.uploader && (
        <button onClick={handleDelete} style={{ background: "red", color: "white" }}>Delete</button>
      )}
      <a href={video.url} download style={{ display: "block", marginTop: "10px" }}>Download</a>
    </div>
  );
}
