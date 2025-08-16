import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";

export default function Profile({ currentUser }) {
  const [myVideos, setMyVideos] = useState([]);

  useEffect(() => {
    const fetchVideos=async()=>{
        try{
        let res=await axios.get(`http://localhost:3000/videos?uploader=${currentUser}`)
        setMyVideos(res.data)
    }catch(err){
        console.log(err)
    }
    }
    fetchVideos();
  }, [currentUser]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Uploaded Videos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {myVideos.map(video => (
          <VideoCard key={video.id} video={video} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
}
