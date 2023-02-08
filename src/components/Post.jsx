import { Avatar } from '@mui/material';
import React from 'react'
import "./Post.css";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function Post({userName, image, profilePic,timestamp, message}) {
  return (
    <div className='post'>
        <div className="post__top">
          <Avatar 
              src={`${profilePic}`}
              className="post__avatar"
              />
              <div className="post__topinfo">
                <h3>{userName}</h3>
                <p>{new Date(timestamp?.toDate()).toGMTString()}</p>
              </div>
        </div>
        <div className="post__bottom">
          {message}
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
        <div className="post__options">
          <div className='post__option'>
             <ThumbUpOffAltOutlinedIcon />
             <p>Like</p>
          </div>
          <div className='post__option'>
             <InsertCommentIcon />
             <p>Comment</p>
          </div>
          <div className='post__option'>
             <SendOutlinedIcon />
             <p>Share</p>
          </div>
        </div>

    </div>
  )
}

export default Post