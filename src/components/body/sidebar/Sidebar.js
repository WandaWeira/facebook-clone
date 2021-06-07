import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"
import { useStateValue } from "../../../StateProvider"

function Sidebar() {
    const[{user}, dispatch]= useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            {/* <SidebarRow src="https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.6435-9/178642632_3844972702257895_8287870376742434205_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHfRWwyf87tWo4SqC0qOASVs0gGaUiKYaGzSAZpSIphodsCHBBZZs_sYgkL_-BBnqCzzW6coKFaDji9rTo39OiV&_nc_ohc=QBqlWDGT4loAX_mPdv4&_nc_ht=scontent.fjnb10-1.fna&oh=d4ee6bd34733e97724136c783efbcc8d&oe=60E03C58" title={"Wanda"}/> */}
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 infomation Center"/>
            <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SidebarRow Icon={ChatIcon} title="Chat"/>
            <SidebarRow Icon={StorefrontIcon} title="Donate"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Certificates"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Organisations"/>
        </div>
    )
}

export default Sidebar
