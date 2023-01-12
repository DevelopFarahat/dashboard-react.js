import React from "react";
import DashboardStyles from "./dashboard.module.css";
import EnergyIcon from "../assets/images/icons/energy.png";
import RangeIcon from "../assets/images/icons/range.png";
import BreakFluidIcon from "../assets/images/icons/break-fluid.png";
import TireWearIcon from "../assets/images/icons/tire_wear.png";
import { Progress, Space } from 'antd';
import MilesStatistics from "../miles_statistics_chart/milesStatistics";
import CarStatistics from "../car_statistics_chart/carStatistics";
import CarImg from "../assets/images/car.png";
import SuzukiImg from "../assets/images/maruti-suzuki.png";
import BmwImg from "../assets/images/mini-countryman-car-bmw.png";
import RecommendIcon from "../assets/images/icons/recommend.png";
import RetweetIcon from "../assets/images/icons/retweet.png";
import StarIcon from "../assets/images/icons/star.png";
import InsightIcon from "../assets/images/icons/insight.png";




const Dashboard = ()=>{

    const carEngineDetailsArr = [
        {id:0,enginDetails:'energy',detailsInNumber:'45%',icon:EnergyIcon,alt:'energy_icon',color:'#FFFFFF',value:''},
        {id:1,enginDetails:'range',detailsInNumber:'157K%',icon:RangeIcon,alt:'range_icon',color:'#FF7E86',value:''},
        {id:2,enginDetails:'break fluid',detailsInNumber:'9%',icon:BreakFluidIcon,alt:'break_fluid_icon',color:'#A162F7',value:''},
        {id:3,enginDetails:'tire wear',detailsInNumber:'25%',icon:TireWearIcon,alt:'tire_wear_icon',color:'#F6CC0D',value:''}
    ];
    const cars = [
        {id:0,recommendedPercent:'64%',recommendedIcon:RecommendIcon,recommendedIconAlt:'recommed_icon',CarName:'mini cooper',retweetIcon:RetweetIcon,retweetIconAlt:'retweet_icon',retweetNumbers:'132K',starIcon:StarIcon,starIconAlt:'star_icon',insightIcon:InsightIcon,insightIconAlt:'insight_icon',fees:'$32/h',carImage:CarImg,carImageAlt:'mini_cooper_img'},
        {id:1,recommendedPercent:'74%',recommendedIcon:RecommendIcon,recommendedIconAlt:'recommed_icon',CarName:'porsche 911 carrera',retweetIcon:RetweetIcon,retweetIconAlt:'retweet_icon',retweetNumbers:'130K',starIcon:StarIcon,starIconAlt:'star_icon',insightIcon:InsightIcon,insightIconAlt:'insight_icon',fees:'$28/h',carImage:SuzukiImg,carImageAlt:'suzuki_img'},
        {id:2,recommendedPercent:'74%',recommendedIcon:RecommendIcon,recommendedIconAlt:'recommed_icon',CarName:'porsche 911 carrera',retweetIcon:RetweetIcon,retweetIconAlt:'retweet_icon',retweetNumbers:'139K',starIcon:StarIcon,starIconAlt:'star_icon',insightIcon:InsightIcon,insightIconAlt:'insight_icon',fees:'$28/h',carImage:BmwImg,carImageAlt:'bmw_img'}
    ]
        return(
        <div className={DashboardStyles.dashboardContainer}>
            <div className={DashboardStyles.carEngine}>
                {carEngineDetailsArr.map((carEngD,index)=>(
                    <div key={carEngD.id}>
                        <img src={carEngD.icon} alt={carEngD.alt} />
                        <span>{carEngD.enginDetails}</span>
                        <Space wrap>
                        <Progress strokeLinecap="butt" status="active" type="dashboard" percent={index === 1?'55':Number.parseInt(carEngD.detailsInNumber)}  format={() => <span style={{color:index === 0 ? '#FFFFFF':'#242731'}}>{`${carEngD.detailsInNumber}`}</span>} gapDegree={100} trailColor={`${index === 0?'#B37EFC':'#F4F5F9'}`}  strokeWidth={"9"} strokeColor={carEngD.color}/>
                        </Space>    
                    </div>
                ))}
            </div>
            <div className={DashboardStyles.chartsContainer}>
            <MilesStatistics/>
            <CarStatistics/>
            </div>
            <div className={DashboardStyles.carsContainer}>
            {cars.map((car)=>(
                <div className={DashboardStyles.car} key={car.id}>
                    <section className={DashboardStyles.head}>
                        <img src={car.recommendedIcon} alt={car.recommendedIconAlt}/>
                        <span>{car.recommendedPercent}Recommend</span>
                    </section>
                    <section className={DashboardStyles.meiddle}>
                        <img src={car.carImage} alt={car.carImageAlt}/>
                    </section>
                    <section className={DashboardStyles.bottom}>
                        <span>{car.CarName}</span>
                        <div>
                            <section>
                                <img src={car.retweetIcon} alt={car.retweetIcon}/>
                                <span>{car.retweetNumbers}</span>
                                <img src={car.starIcon} alt={car.starIconAlt}/>
                            </section>
                            <span>{car.fees}</span>
                        </div>
                    </section>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Dashboard;