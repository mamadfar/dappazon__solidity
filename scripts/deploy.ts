import {ethers} from "hardhat";
import hre from "hardhat";
import ITEMS from "../src/data/items"; //? Products

const tokens = (n: string | number) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
}

async function main() {
    //? Setup accounts
    const [deployer] = await ethers.getSigners();

    //? Deploy Dappazon
    const Dappazon = await hre.ethers.getContractFactory("Dappazon");
    const dappazon = await Dappazon.deploy();
    await dappazon.deployed();

    console.log(`Deployed Dappazon Contract at: ${dappazon.address}\n`);

    //? List items...
    for (let i = 0; i < ITEMS.length; i++) {
        const transaction = await dappazon.connect(deployer).list(
            ITEMS[i].id,
            ITEMS[i].name,
            ITEMS[i].category,
            ITEMS[i].image,
            tokens(ITEMS[i].cost),
            ITEMS[i].rating,
            ITEMS[i].stock
        )
        await transaction.wait();

        console.log(`Listed item ${ITEMS[i].id}: ${ITEMS[i].name}`);
    }
    // const network = await ethers.getDefaultProvider().getNetwork();
    // console.log(`Network name: ${network.name}`);
    // console.log(`Network Chain ID: ${network.chainId}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
