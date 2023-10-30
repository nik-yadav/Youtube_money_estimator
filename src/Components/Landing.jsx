import React, { useEffect, useState } from "react";
import Loader from "./Loader.jsx";

import "./Landing.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [value, setValue] = useState("");
  const [likes, setlikes] = useState(0);
  const [comment, setComment] = useState(0);
  const [uploaded, setUploaded] = useState('2000-10-5')
  const [view, setView] = useState(0);
  const [title, setTitle] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [chid, setchid] = useState('');
  const [subscribers, setSubscribers] = useState(0);

  useEffect(() => {
    const fetchLikesCount = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${value}&key=apikey
        &part=snippet,statistics`
      );
      setComment(response.data.items[0].statistics.commentCount);
      setView(response.data.items[0].statistics.viewCount);
      setTitle(response.data.items[0].snippet.localized.title)
      setUploaded(response.data.items[0].snippet.publishedAt)
      setchid(response.data.items[0].snippet.channelId)
      setThumbnail(response.data.items[0].snippet.thumbnails.high.url)
      setlikes(response.data.items[0].statistics.likeCount);
      console.log(response);
    };

    fetchLikesCount();
  }, [value]);

  useEffect(() => {
    const fetchChannelDetails = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${chid}&key=apikey`
      );
      setSubscribers(response.data.items[0].statistics.subscriberCount);
      console.log(subscribers);
    };
  
    fetchChannelDetails();
  }, [chid, setSubscribers]);
  

  useEffect(() => {
    console.log(likes);
  }, [likes,subscribers]);

  // const result = () => {
  //   return loading ? <Loader /> : <Result likes={likes}/>
  // }

  const handleChange = (event) => {
    const url = event.target.value;
    let videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    setValue(videoId);
  };

  const handleClick = () =>{
    navigate('/result',{ state: { likes, comment, view, title,subscribers, thumbnail } })
  };

  return (
    <div className="wrap">
      <div className="wrap-left">
        <div className="content">
          <h1>Discover Your Earning Potential</h1>
          <p>
            Turn your youtube expertise into a lucrative income through resource
            sharing
          </p>
        </div>
        <div className="working">
          <label className="link_label" htmlFor="link">
            Video Link
          </label>
          <input
            name="my_link"
            placeholder="Enter your link..."
            id="link"
            type="text"
            onChange={handleChange}
          />
          <button
            className="button_earning"
            onClick={handleClick}
          >
            Calculate your Earnings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
