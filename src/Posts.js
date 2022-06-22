import React, { useEffect, useState, useRef } from "react";
import logo from './ieee_logo.jpeg';





const Posts = (props) => {
  const { id, caption, media_type, media_url,timestamp,username,permalink } = props.feed;
  let post;
  console.log(id,media_type)

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          type="video/mp4"
          controls
          playsinline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
      break;

    default:
      post = (
        <img
          width="50%"
          height="50%"
          id={id}
          src={media_url}
          alt={caption}
          className="w-full bg-cover"
        />
      );
  }
  
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  let date = new Date(timestamp).toLocaleString('en-us', options)
//   console.log(date)
  return (
    <React.Fragment>
      <div className="border rounded-xl overflow-hidden  w-full lg:w-full md:w-full bg-white mx-3 md:mx-0 lg:mx-8">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="profilepic"
              />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">{username}</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>
        <a href={permalink} target="_blank">
        {post}

        </a>
        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">{date}</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">{username}</span>{caption}
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all comments
          </div>
          {/* <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">razzle_dazzle</span> Dude! How
              cool! I went to New Zealand last summer and had a blast taking the
              tour! So much to see! Make sure you bring a good camera when you
              go!
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
