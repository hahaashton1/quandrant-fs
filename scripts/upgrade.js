const { ethers, upgrades } = require("hardhat");

async function main() {

    // Make sure to change this if you ever deploy a new core contract
    const proxyAddress = "0x3bA3952faca093737C747BD2e5641C692D43a69a";

    const EGameCore = await ethers.getContractFactory("EGameCore");
    await upgrades.upgradeProxy(proxyAddress, EGameCore);
    console.log("Contract upgraded");

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    console.log("Implementation deployed to:", implementationAddress);
}

main();