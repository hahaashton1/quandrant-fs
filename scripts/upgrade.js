const { ethers, upgrades } = require("hardhat");

async function main() {

    // Make sure to change this if you ever deploy a new core contract
    const proxyAddress = "0xE06e7244d9Bf85c501E5834f38f089b16f032631";

    const EGameCore = await ethers.getContractFactory("EGameCore");
    await upgrades.upgradeProxy(proxyAddress, EGameCore);
    console.log("Contract upgraded");

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    console.log("Implementation deployed to:", implementationAddress);
}

main();