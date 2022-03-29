require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// `dotenv` makes it easier to use locally-set env vars, e.g. a `.env` file
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.7",
      },
    ],
  },
  defaultNetwork: "mainnet",
  
  // It's fairly trivial to add any new EVM-compatible network here. Note that the network name is relatively trivial.
  // `url` points to a public RPC node, typically provisioned by Alchemy or Infura.
  // `accounts` is an array of private keys (for obvious reasons, be careful with these and don't check them into any
  // version control! Given the `hot` nature, I'd recommend creating deployment-specific keys with minimal funds). 
  networks: {
    hardhat: {},
    mainnet: {
      url: process.env.ALCHEMY_MAINNET,
      accounts: [process.env.PRIVATE_KEY],
    },
    kovan: {
      url: process.env.ALCHEMY_KOVAN,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.ALCHEMY_POLYGON,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  // Variants of Etherscan exist on numerous networks. For compatibility with Hardhat's Etherscan contract verification script,
  // you can use any Etherscan-like API key under `apiKey`
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY, // or any other API key
  },
};
