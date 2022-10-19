const { ethers, upgrades } = require("hardhat");

async function main() {
  const EGameCore = await ethers.getContractFactory("EGameCore");
  console.log("Deploying EGameCore contract...");
  const contract = await upgrades.deployProxy(EGameCore, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.deployed();
  console.log("EGameCore deployed to:", contract.address);
}

main();