import {FC} from "react";
import "./Section.scss";
import {IItem} from "../data/items";
import {Rating} from "./index";
import {ethers} from "ethers";

interface ISectionProps {
    title: string,
    items: ReadonlyArray<IItem>,
    togglePop: (item: IItem) => void
}

const Section: FC<ISectionProps> = ({title, items, togglePop}) => {
    return (
        <div className="cards__section">
            <h3 id={title}>{title}</h3>
            <hr/>
            <div className="cards">
                {items.map((item) => (
                    <div key={item.id} className="card" onClick={() => togglePop(item)}>
                        <div className="card__image">
                            <img src={item.image} alt={item.name}/>
                        </div>
                        <div className="card__info">
                            <h4>{item.name}</h4>
                            <Rating value={item.rating}/>
                            <p>{ethers.utils.formatUnits(item.cost, "ether")} ETH</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Section;
