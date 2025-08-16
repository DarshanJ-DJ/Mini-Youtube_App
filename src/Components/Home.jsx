import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import Profile from "./Profile";
import Upload from "./Upload";

export default function Home({ currentUser }) {
  const [videos, setVideos] = useState([]);
  let[page,setPage]=useState("home")

  useEffect(() => {
    const fetchData=async()=>{
    try{
       let res= await axios.get("http://localhost:3000/videos")
       setVideos(res.data)
    }catch(err){
        console.log((err));  
    }
    }
    fetchData();   
}, []);

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ display: "flex", gap: "20px", background: "#eee", padding: "10px" }}>
        <button onClick={() => setPage("upload")}>Upload</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </nav>

      {page === "upload" && <Upload currentUser={currentUser} />}
      {page === "profile" && <Profile currentUser={currentUser} />}
      <h2>All Videos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} currentUser={currentUser}
          onDelete={(id)=>setVideos(videos.filter(v => v.id!==id))} />
        ))}
      </div>
    </div>
  );
}
