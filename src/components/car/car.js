import React from "react";
import CarStyles from "./car.module.css";


const Car = ({car})=>{

    return(
        
       <div className={CarStyles.carMincontainer}>
            <div className={CarStyles.frame}>
            <section>
            <span>{car.model}</span>
            <img src={car.favoritIcon} alt={car.favoritIcon.split("/")[car.favoritIcon.split("/").length-1].split(".")[0]+"_icon"}/>
            </section>
            <section>
            <span>{car.additionalInfo}</span>
            <img src={car.image} alt={car.image.split("/")[car.image.split("/").length-1].split(".")[0]+"_icon"}/>
            </section>
            <section>
                <div>
                <img src={car.capacityIcon} alt={car.capacityIcon.split("/")[car.capacityIcon.split("/").length-1].split(".")[0]+"_icon"}/>
            <span>{car.capacity}</span>
            <img src={car.transmissionIcon} alt={car.transmissionIcon.split("/")[car.transmissionIcon.split("/").length-1].split(".")[0]+"_icon"}/>
            <span>{car.transmission}</span>
                </div>
            <span>{car.cost}<span>/d</span></span>
            </section>
        </div>
        </div>
    
    

    )
}
export default Car;