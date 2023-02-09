import {FC, useCallback, useEffect, useState} from "react";
import "./Product.scss";
import {IItem} from "../data/items";
import {Rating} from "./index";
import {ethers} from "ethers";
import close from "../assets/close.svg";

interface IProductProps {
    item: IItem,
    provider?: ethers.providers.Web3Provider,
    account: string,
    dappazon?: ethers.Contract,
    togglePop: () => void
}

const Product: FC<IProductProps> = ({item, provider, account, dappazon, togglePop}) => {
    const [order, setOrder] = useState<any>();
    const [hasBought, setHasBought] = useState(false);

    const fetchDetails = useCallback(async () => {
        const events = await dappazon?.queryFilter("Buy");
        const orders = events?.filter(event => event?.args?.buyer === account && event?.args?.itemId.toString() === item.id.toString());
        if (!orders?.length) return
        const order = await dappazon?.orders(account, orders[0].args?.orderId);
        setOrder(order);
    }, [])

    const buyHandler = async () => {
        const signer = await provider?.getSigner();

        let transaction = await dappazon?.connect(signer || "").buy(item.id, {value: item.cost});
        await transaction.wait();
        setHasBought(true);
    }

    useEffect(()=> {
        fetchDetails();
    }, [hasBought])

    return (
        <div className="product">
            <div className="product__details">
                <div className="product__image">
                    <img src={item.image} alt={item.image}/>
                </div>
                <div className="product__overview">
                    <h1>{item.name}</h1>
                    <Rating value={item.rating}/>
                    <hr/>
                    {/*<p>{item.address}</p>*/}
                    <h2>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h2>
                    <hr/>
                    <h2>Overview</h2>
                    <p>
                        {/*{item.description}*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta dolor ducimus enim
                        eos fugiat libero quasi, recusandae rem? Aspernatur debitis doloribus dolorum illo laudantium
                        perferendis quaerat quo, rem unde.
                    </p>
                </div>
                <div className="product__order">
                    <h1>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h1>
                    <p>
                        FREE delivery <br/>
                        <strong>
                            {new Date(Date.now() + 345600000).toLocaleDateString(undefined, {
                                weekday: "long",
                                month: "long",
                                day: "numeric"
                            })}
                        </strong>
                    </p>
                    {item.stock > 0 ? (
                        <p>In Stock.</p>
                    ) : (
                        <p>Out of Stock.</p>
                    )}
                    <button className="product__buy" onClick={buyHandler}>Buy Now</button>
                    <p><small>Ships from</small> Dappazon</p>
                    <p><small>Sold by</small> Dappazon</p>

                    {order && (
                        <div className="product__bought">
                            Item bought on <br/>
                            <strong>
                                {new Date(Number(order.time.toString() + "000")).toLocaleDateString(undefined, {
                                    weekday: "long",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric"
                                })}
                            </strong>
                        </div>
                    )}
                </div>
                <button className="product__close" onClick={togglePop}>
                    <img src={close} alt="Close"/>
                </button>
            </div>
        </div>
    )
};

export default Product;
