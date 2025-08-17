// src/VideoPlayer.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VideoPlayer({ currentUser }) {
  const { id } = useParams(); // video id from URL
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:3000/videos/${id}`);
      setVideo(res.data);

      const all = await axios.get("http://localhost:3000/videos");
      setRelated(all.data.filter((v) => v.id !== Number(id)));
    };
    fetchVideo();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="video-player-page" style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 2 }}>
        <video width="100%" height="400" controls poster={video.cover}>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>{video.title}</h2>
        <p>Uploaded by: {video.uploader}</p>
      </div>

      <div style={{ flex: 1 }}>
        <h3>Related Videos</h3>
        {related.map((rv) => (
          <Link key={rv.id} to={`/video/${rv.id}`} style={{ textDecoration: "none" }}>
            <div style={{ marginBottom: "15px" }}>
              <img src={rv.cover} alt={rv.title} width="200" />
              <p>{rv.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
