import React from 'react'
import "./Header.css";
import logo from "../facebook-logo.png"; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useStateValue} from "./StateProvider";

function Header() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='header'>
       <div className='header__left'>
            <img src={logo} alt="" />
            <div className="header__input">
              <SearchOutlinedIcon />
              <input type="text" placeholder='Search Facebook'/>
            </div>
       </div>
       <div className='header__middle'>
            <div className="header__option header__option__active">
              <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
              <OndemandVideoIcon fontSize="large" />
            </div>
            <div className="header__option">
              <StorefrontIcon fontSize="large" />
            </div>
            <div className="header__option">
              <PeopleAltIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SportsEsportsIcon fontSize="large" />
            </div>

       </div>
       <div className='header__right'>
            <div className="header__info">
              <Avatar src={`${user.photoURL}`} />
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