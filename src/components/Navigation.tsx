import {FC} from "react";
import "./Navigation.scss";

interface INavigation {
    account: string,
    getAccount: () => void
}

const Navigation: FC<INavigation> = ({account, getAccount}) => {
    return (
        <nav>
            <div className="nav__brand">
                <h1>Dappazon</h1>
            </div>
            <input type="text" className="nav__search"/>
            {account ? (
                <button type="button"
                        className="nav__connect">{account.slice(0, 6) + "..." + account.slice(38, 42)}</button>
            ) : (
                <button type="button"
                        className="nav__connect" onClick={getAccount}>Connect</button>
            )}
            <ul className="nav__links">
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>
        </nav>
    )
};

export default Navigation;
