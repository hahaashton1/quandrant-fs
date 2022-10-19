require("dotenv").config();
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
    },
  },etherscan: {
    // apiKey: {
    //   //Polygon
    //   polygonMumbai: process.env.POLYGON_API_KEY,
    // }
    apiKey: process.env.POLYGON_API_KEY,
  }





};
