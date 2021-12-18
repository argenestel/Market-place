require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testnet: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    }
  }
}

module.exports = {
  solidity: "0.8.4",
};
