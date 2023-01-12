import React, { useState } from 'react';
import BookingStyles from "./booking.module.css";
import InlineIcon from "../assets/images/icons/inline.png";
import GridIcon from "../assets/images/icons/grid.png";
import Car from "../car/car";
import HeartIcon from "../assets/images/icons/heart.png";
import RedHeartIcon from "../assets/images/icons/red-heart.png";
import PersonIcon from "../assets/images/icons/person.png";
import transimissionIcon from "../assets/images/icons/colored-retweet.png";
import Car1Image from "../assets/images/car-1.png";
import Car2Image from "../assets/images/car-2.png";
import Car3Image from "../assets/images/car-3.png";
import Car4Image from "../assets/images/car-4.png";
import Car5Image from "../assets/images/car-5.png";
import Car6Image from "../assets/images/car-6.png";
import Car7Image from "../assets/images/car-7.png";
import Car8Image from "../assets/images/car-8.png";
import Car9Image from "../assets/images/car-9.png";
import { Dropdown, Space } from 'antd';
import RectangleIcon from "../assets/images/icons/Rectangle.png";
const CarTypeDropDown = () => {
    const items = [
        {
            label: 'New',
            key: '0',
        },
        {
            label: 'Old',
            key: '1',
        },

    ];
      const [selectedCarType,setSelectedCarType] = useState(items[0].label);
      const handleMenuClick = (e) => {
          let newlySelectedMenuOption =  items.find(item => item.key === e.key);
          setSelectedCarType(newlySelectedMenuOption.label);
        };
        const menuProps = {
            items,
            onClick:handleMenuClick
          
          };
    return (
        <Dropdown
            menu={menuProps}
            className={BookingStyles.dropdown}
            trigger={['click']}
        >
            <Space>
                <span>{selectedCarType}</span>
                <img src={RectangleIcon} alt="Rectangle_icon" />
            </Space>

        </Dropdown>
    )
}
const CarModelDropdown = () => {
    const items = [
        {
            label: 'Toyota',
            key: '0',
        },
        {
            label: 'Porshe',
            key: '1',
        },

    ];
    const [selectedCarType,setSelectedCarType] = useState(items[0].label);
    const handleMenuClick = (e) => {
        let newlySelectedMenuOption =  items.find(item => item.key === e.key);
        setSelectedCarType(newlySelectedMenuOption.label);
      };
    const menuProps = {
        items,
        onClick:handleMenuClick
      
      };
    return (
        <Dropdown
            menu={menuProps}
            className={BookingStyles.dropdown}
            trigger={['click']}
        >
            <Space>
                <span >{selectedCarType}</span>
                <img src={RectangleIcon} alt="Rectangle_icon" />
            </Space>

        </Dropdown>
    )
}
const Booking = () => {
    const cars = [
        {
            "id": 0,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car1Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"

        },

        {
            "id": 1,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": RedHeartIcon,
            "additionalInfo": "Coupe",
            "image": Car2Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 2,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car3Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 3,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car4Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 4,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car5Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 5,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car6Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 6,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car7Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 7,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car8Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        },
        {
            "id": 8,
            "model": "Porshe 718 Cayman S",
            "favoritIcon": HeartIcon,
            "additionalInfo": "Coupe",
            "image": Car9Image,
            "capacity": "4",
            "capacityIcon": PersonIcon,
            "transmission": "Manual",
            "transmissionIcon": transimissionIcon,
            "cost": "$400"
        }
    ]
    return (
        <>
            <div className={BookingStyles.bookingMainContainer}>
                <div className={BookingStyles.bookingHeader}>
                    <span>Booking</span>
                </div>
                <div className={BookingStyles.bookingControls}>
                    <section>
                        <CarTypeDropDown />
                        <CarModelDropdown />
                    </section>

                    <section>
                        <div>
                            <img src={GridIcon} alt="line_icon" />
                        </div>
                        <div>
                            <img src={InlineIcon} alt="grid_icon" />
                        </div>
                    </section>
                </div>

                <div className={BookingStyles.carModels}>
                    {cars.map((car) => (
                        <Car key={car.id} car={car} />
                    ))}
                </div>

            </div>
        </>
    )
}
export default Booking;