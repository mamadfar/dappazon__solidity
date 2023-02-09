import {useState, useEffect, useCallback} from 'react';
import {ethers} from "ethers";
import {Navigation, Section} from "./components";
import config from "./config/index.json";
import ABI from "./ABIs/dappazon.json";

import './App.scss';
import {IItem} from "./data/items";
import Product from "./components/Product";

function App() {

    const [account, setAccount] = useState<string>("");
    const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
    const [dappazon, setDappazon] = useState<ethers.Contract>();
    const [electronics, setElectronics] = useState<ReadonlyArray<IItem>>();
    const [clothing, setClothing] = useState<ReadonlyArray<IItem>>();
    const [toys, setToys] = useState<ReadonlyArray<IItem>>();
    const [item, setItem] = useState<IItem>();
    const [toggle, setToggle] = useState<boolean>(false);

    const loadBlockchainData = async () => {
        //? Connect to blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const network = await provider.getNetwork();

        //? Connect to smart contracts (Creat JS Versions)
        // @ts-ignore
        const dappazonContract = new ethers.Contract(config[network.chainId].dappazon.address, ABI, provider);
        setDappazon(dappazonContract);

        //? Load products
        const items: IItem[] = [];

        for (let i = 0; i < 9; i++) {
            const item = await dappazonContract.items(i + 1);
            items.push(item)
        }

        const electronics = items.filter(item => item.category === "electronics");
        const clothing = items.filter(item => item.category === "clothing");
        const toys = items.filter(item => item.category === "toys");
        setElectronics(electronics);
        setClothing(clothing);
        setToys(toys);
    }

    const getAccount = async () => {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
    }

    const togglePop = (item?: IItem) => {
        if (typeof item !== "undefined") setItem(item);
        setToggle(!toggle);
    };

    useEffect(() => {
        // getAccount()
        loadBlockchainData();
    }, [])

    return (
        <div>
            <Navigation account={account} getAccount={getAccount}/>
            <h2>Dappazon Best Sellers</h2>

            {(electronics && clothing && toys) && (
                <>
                    <Section title={"Clothing & Jewelry"} items={clothing} togglePop={togglePop}/>
                    <Section title={"Electronics & Gadgets"} items={electronics} togglePop={togglePop}/>
                    <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop}/>
                </>
            )}
            {toggle && (
                <Product item={item!} provider={provider} account={account} dappazon={dappazon} togglePop={togglePop}/>
            )}
        </div>
    );
}

export default App;
