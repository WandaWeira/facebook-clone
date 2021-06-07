import { Avatar } from '@material-ui/core';
import React from 'react';
import { useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "../../../StateProvider"

function MessageSender() {
    const[{user}, dispatch]= useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit= e =>{
        e.preventDefault();
        //db stuff here
        // /db stuff here
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURl}/>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder={`What's on your mind, ${user.displayName}?`}
                        className="messageSender__input"
                    />
                    <input 
                        type="text" placeholder="ImageUrl (Optional)"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                    <button onClick={handleSubmit} type="submit">
                        HiddenSubmit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
