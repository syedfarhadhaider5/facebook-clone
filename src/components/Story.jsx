import { Avatar } from '@mui/material';
import React from 'react'
import "./Story.css";

function Story({title, image, profileSrc}) {
  return (
    <div className='story' style={{backgroundImage: `url(${image})`}}>
        <Avatar src={profileSrc} className="story__profile" />
        <h4>{title}</h4>
    </div>
  )
}

export default Story