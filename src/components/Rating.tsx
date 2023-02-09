import {FC} from "react";
import star_regular from "../assets/star-regular.svg";
import star_solid from "../assets/star-solid.svg";

interface IRatingProps {
    value: number
}

const Rating:FC<IRatingProps> = ({value}) => {
    return (
        <div className="rating">
            <img src={value >= 1 ? star_solid : star_regular} alt="Star" width={20} height={20}/>
            <img src={value >= 2 ? star_solid : star_regular} alt="Star" width={20} height={20}/>
            <img src={value >= 3 ? star_solid : star_regular} alt="Star" width={20} height={20}/>
            <img src={value >= 4 ? star_solid : star_regular} alt="Star" width={20} height={20}/>
            <img src={value >= 5 ? star_solid : star_regular} alt="Star" width={20} height={20}/>
        </div>
    )
};

export default Rating;
