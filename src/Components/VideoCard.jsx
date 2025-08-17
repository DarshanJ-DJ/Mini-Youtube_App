import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video, currentUser }) {
  const handleDelete = async() => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try{
        let res=await axios.delete(`http://localhost:3000/videos/${video.id}`,{method:"DELETE"})
        console.log(res.data);
        onDelete(video.id)
        alert("video deleted successfully")  
      }catch(err){
        console.log("unable to delete: ",err.message)
      }
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      {/* Thumbnail instead of full video */}
      <Link to={`/video/${video.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={video.cover || "/uploads/default_cover.jpg"}  // fallback if no cover
          alt={video.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <h4>{video.title}</h4>
      </Link>

      <p>Uploaded by: {video.uploader}</p>
      <p>Date: {new Date(video.date).toLocaleString()}</p>

      {/* Only uploader can delete */}
      {currentUser === video.uploader && (
        <button onClick={handleDelete} style={{ background: "red", color: "white" }}> Delete</button>
      )}

      {/* Download option */}
      <a href={video.url} download style={{ display: "block", marginTop: "10px" }}> Download </a>
    </div>
  );
}
