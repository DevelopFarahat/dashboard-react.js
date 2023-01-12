import React, { useRef, useState } from "react";
import SidebarStyles from "./sidebar.module.css";
import DashboardLogo from "../assets/images/logo.svg";
import dashboardIcon from '../assets/images/icons/dashboard.png';
import AssetsIcon from '../assets/images/icons/assets.png';
import BookingIcon from '../assets/images/icons/booking.png';
import SellCarsIcon from '../assets/images/icons/sell-cars.png';
import BuyCarsIcon from '../assets/images/icons/buy-cars.png';
import ServicesIcon from '../assets/images/icons/services.png';
import CalenderIcon from '../assets/images/icons/calender.png';
import MessagesIcon from '../assets/images/icons/comment.png';
import SettingsIcon from '../assets/images/icons/settings.png';
import LogoutIcon from '../assets/images/icons/logout.png';
import { Link } from "react-router-dom";
const Sidebar = ({isSidebarVisible,setIsSidebarVisible})=>{
    const [selectedOption,setSelectedOption] = useState(0);
    const handleSelectedOption = (id)=>{
      //  event.stopPropagation();
        console.log(id)
        setSelectedOption(Number.parseInt(id,10));
    }
    const sidebarOptions = [
        {id:0,optionName:'dashboard',icon:dashboardIcon,alt:'dashboard_icon'},
        {id:1,optionName:'assets',icon:AssetsIcon,alt:'assets_icon'},
        {id:2,optionName:'booking',icon:BookingIcon,alt:'booking_icon'},
        {id:3,optionName:'sell cars',icon:SellCarsIcon,alt:'sell_cars_icon'},
        {id:4,optionName:'buy cars',icon:BuyCarsIcon,alt:'buy_cars.icon'},
        {id:5,optionName:'services',icon:ServicesIcon,alt:'services_icon'},
        {id:6,optionName:'calender',icon:CalenderIcon,alt:'calender_icon'},
        {id:7,optionName:'messages',icon:MessagesIcon,alt:'messages_icon'},
    ];
    const sidebarBottomOptions = [
        {id:0,optionName:'settings',icon:SettingsIcon,alt:'settings_icon'},
        {id:1,optionName:'log out',icon:LogoutIcon,alt:'logout_icon'},
    ]

    return(
       <>
        <aside className={`${isSidebarVisible?SidebarStyles['sidebar-drawer']:SidebarStyles.sidebar}`}>
        <div className={`${isSidebarVisible?SidebarStyles['sidebar-drawer-content']:SidebarStyles.content}`}>
            <div>
            <div>
                <img src={DashboardLogo} alt="dashboard_logo"/>
                <span>Motiv.</span> 
            </div>
                <div className={SidebarStyles.contentsOptions}>
               
                {sidebarOptions.map((option)=>(
                    <div key={option.id} onClick={()=>handleSelectedOption(option.id)} style={{background:selectedOption === option.id?'#F3F5F8':''}}>
                    <section className={SidebarStyles.option}>
                        <img src={option.icon} alt={option.alt}/>
                        
                        <span>
                            {option.id === 0 || option.id === 2?<Link to={`/${option.optionName}`}>{option.optionName}</Link>:option.optionName}
                        </span>
                    </section>
                    </div>
                ))}
                
                </div>
                </div>
          <div className={SidebarStyles.bottomSidebar}>
                    {sidebarBottomOptions.map((bOption)=>(
                        <div key={bOption.id} className={SidebarStyles.bottomSidebarOption}>
                            <section className={SidebarStyles.option}>
                            <img src={bOption.icon} alt={bOption.alt}/>
                        <span>{bOption.optionName}</span>
                            </section>
                        </div>
                    ))}
          </div>
        </div>
        </aside>
        </>
    
        
    )
}
export default Sidebar;