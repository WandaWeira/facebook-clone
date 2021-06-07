import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider"

function Header() {
    const[{user}, dispatch]= useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="data:image/png;base64,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" 
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="search organisation" type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option__active"> 
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.PhotoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header
