import React, {useEffect, useState} from 'react'
import "./Feed.css";
import RealStory from './RealStory';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";

function Feed() {
 // to keep track of the post
 const[posts, setPosts] = useState([]);

 useEffect(() => {
     db.collection('posts').orderBy("timestampss", "desc").onSnapshot(snapshot => {
       setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
     })
   }, [])

  return (
    <div className='feed'>
        <RealStory />
        <MessageSender />
        {posts.map((post) => (
            <Post
            key={post.data.id}
            profilePic={post.data.profilePhoto}
            message={post.data.message}
            timestamp={post.data.timestampss}
            userName={post.data.name}
            image={post.data.image}
            />
        ))}
        
    </div>
  )
}

export default Feed