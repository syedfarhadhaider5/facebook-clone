import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import "./MessageSender.css";
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [Input, SetInput] = useState("");
    const [Url, SetUrl] = useState("");

    const handleSubmic = (e) =>{
        e.preventDefault();
            const dt = new Date();
        // add record
        db.collection("posts").add({
            name: user.displayName,
            image: Url,
            profilePhoto: user.photoURL, 
            timestampss: dt,
            message: Input
        }) 
        
        SetInput("");
        SetUrl("");
    }
  return (
    <div className='messagesender'>
        <div className="MessageSender__top">
                <form>
                    <Avatar src={`${user.photoURL}`} />
                    <input 
                        type="text"
                        placeholder="What 's on your mind"
                        className='MessageSender__input'
                        value={Input}
                        onChange={(e) => SetInput(e.target.value) }
                     />
                     <input 
                        type="text"
                        placeholder="Image URL (optional)"
                        value={Url}
                        onChange={(e) => SetUrl(e.target.value) }
                     />
                     <button type='submit' onClick={handleSubmic}>submit</button>
                </form>
        </div>
        <div className="MessageSender__bottom">
            <div className="MessageSender__option">
                <VideocamIcon style={{color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="MessageSender__option">
                <PhotoLibraryIcon style={{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="MessageSender__option">
                <SentimentVerySatisfiedIcon style={{color: "#d9b43b"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender