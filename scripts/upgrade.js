const { ethers, upgrades } = require("hardhat");

async function main() {

    // Make sure to change this if you ever deploy a new core contract
    const proxyAddress = "0xBF12a1a0D869C1b9Bb0Be7a352232BF8ea36d517";

    const EGameCore = await ethers.getContractFactory("EGameCore");
    await upgrades.upgradeProxy(proxyAddress, EGameCore);
    console.log("Contract upgraded");

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    console.log("Implementation deployed to:", implementationAddress);
}

main();