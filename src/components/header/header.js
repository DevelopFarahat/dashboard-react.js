import React, {useState } from "react";
import HeaderSetyles from "./header.module.css";
import SearchIcon from "../assets/images/icons/search.png";
import NotificationIcon from "../assets/images/icons/notification.png";
import ProfilePortraitImg from "../assets/images/profile-portrait.png";
import SiteLogo from "../assets/images/logo.svg";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
const Header = ({setIsSidebarVisible,isSidebarVisible})=>{
   const [isSearchInputVisible,setIsSearchInputVisible] = useState(false);
   // to display the search box on mobile screen
    const displaySearchBar = ()=>{
       setIsSearchInputVisible(true);
    }
     // to hide the search box on mobile screen
    const HideSearchBar = ()=>{
        setIsSearchInputVisible(false);
    }
    // to display sidebar on mobile screen
    const showSidebar = ()=>{
        setIsSidebarVisible(true);
    }
    return(
        <header style={{zIndex:isSidebarVisible?'0':'1'}}>
            {!isSearchInputVisible?
            <div>
            <AiOutlineUnorderedList size={30} className={HeaderSetyles.sidebarOpenIcon} style={{cursor:'pointer'}} onClick={showSidebar}/>
            <main>
                <img src={SiteLogo} alt="Site_logo" />
                <span>Motiv.</span> 
            </main>
                <section>
                    <div>
                        <img src={SearchIcon} alt="search_icon"/>
                        <div className={HeaderSetyles.searchContainer}>
                        <div className={HeaderSetyles.rectangle}></div>
                        <input type="text" name="search" placeholder="Search or type"/>
                        </div>
                    </div>
                </section>
                <div>
                    <AiOutlineSearch size={20} className={HeaderSetyles.searchIcon} style={{cursor:'pointer'}} onClick={displaySearchBar}/>
                    <img src={NotificationIcon} alt="notification_icon"/>
                    <img src={ProfilePortraitImg} alt="profile_portrait" />
                </div>
            </div>: <section className={HeaderSetyles.search}>
                    <div>
                        <img src={SearchIcon} alt="search_icon"/>
                        <div className={HeaderSetyles.searchContainer}>
                        <div className={HeaderSetyles.rectangle}></div>
                        <input type="text" name="search" placeholder="Search or type"/>
                        <AiOutlineClose size={25} color={"#7C7C8D"} style={{cursor:'pointer'}} onClick={HideSearchBar}/>
                        </div>
                    </div>
                </section>}
        </header>
    )
}
export default Header;