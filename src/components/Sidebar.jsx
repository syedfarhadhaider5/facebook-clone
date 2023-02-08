import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useStateValue} from "./StateProvider";

export default function Sidebar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
        <SidebarRow  title={user.displayName}  src={user.photoURL}  />
        <SidebarRow  title="Pages" Icon={PeopleAltIcon}  />
        <SidebarRow  title="Friend" Icon={PeopleAltIcon}  />
        <SidebarRow  title="Messenger" Icon={MessageIcon}  />
        <SidebarRow  title="Videos" Icon={OndemandVideoIcon}  />
        <SidebarRow  title="Marketplace" Icon={StorefrontIcon}  />
        <SidebarRow  title="COVID-19 Information Center" Icon={AddBoxIcon}  />
    </div>
  )
}
