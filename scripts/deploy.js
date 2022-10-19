const { ethers, upgrades } = require("hardhat");

async function main() {
  const EGameCore = await ethers.getContractFactory("EGameCore");
  console.log("Deploying EGameCore contract...");
  const contract = await upgrades.deployProxy(EGameCore, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.deployed();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(contract.address);
  console.log("Proxy deployed to:", contract.address);
  console.log("Implementation deployed to:", implementationAddress);
}

main();