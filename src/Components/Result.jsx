import React from "react";
import { useLocation } from 'react-router-dom';
import cat from "../assets/image.png";
import { FaRegComment, FaRegThumbsUp, FaRegEye } from 'react-icons/fa';

import "./Result.css"

const Result = () => {

  const location = useLocation();
  const { likes, comment, view, title, subscribers, thumbnail} = location.state;

  const earning = Math.min(subscribers, view) + 10 * comment + 5 * likes;
  return (
    <div>
      <div className="wrap-top">
        <div className="left">
          <img src={cat} alt="" />
          <div>
            Uploaded On - 
          </div>
        </div>
        <div className="center">
          <h6>{title}</h6>
          <div className="icons">
            <div><FaRegThumbsUp /> {likes}</div>
            <div><FaRegComment /> {comment}</div> 
            <div><FaRegEye /> {view}</div> 
          </div>
        </div>
        <div className="right">
          <h4>Earning</h4>
          <p>₹{earning}</p>
        </div>
      </div>
      <div className="wrap-bottom">
      </div>
    </div>
  );
};


export default Result;
