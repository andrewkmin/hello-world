// https://medium.com/@blockchain101/crafting-an-ethereum-transaction-step-by-step-138453521ab4

const { ethers, utils } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/839f97a038e14586af870bba4ba8743b"
);
// Our fake wallet address
let from_address = "0x8b1e710D40BE6c3d8Db89B5a05E8e72ceDA204c5";
// The fake wallet that we want to transfer our BUSD to
let to_address = "0x6072257E80d54C5b739893358752d81E16c38E75";
// Amt of fake BUSD to transfer
let amt = utils.parseEther("0.01");
// The nonce of our wallet
let nonce = await provider.getTransactionCount(from_address, "latest");
// EIP-1559 - new way of estimating gasprice
let gasPrice = await provider.getFeeData();
// ABI of the famous transfer function
let abi = ["function transfer(address to, uint amount)"];
// Address of the BUSD smart contract
let busd = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
// Set a temporary high gas limit
let gasLimit = 250000;
// Amt of fake BNB to transfer
let value = 0;
// BSC testnet chain ID
let chainId = 97;
// create the data
let iface = new ethers.utils.Interface(abi);
let data = iface.encodeFunctionData("transfer", [
  // to
  to_address,
  // val
  amt,
]);

const tx = {
  nonce: nonce,
  gasPrice: gasPrice.gasPrice,
  gasLimit: gasLimit,
  // EIP-1559 fields
  // maxFeePerGas: gasPrice.maxFeePerGas,
  // maxPriorityFeePerGas: gasPrice.maxPriorityFeePerGas,
  to: busd,
  value: value,
  data: data,
  chainId: chainId,
  // EIP-2718
  // type: 0
};

console.log(utils.serializeTransaction(tx));
// Raw Tx 0xf86a8085028fa6ae008303d09094e9e7cea3dedca5984780bafc599bd69add087d5680b844a9059cbb0000000000000000000000006072257e80d54c5b739893358752d81e16c38e75000000000000000000000000000000000000000000000000002386f26fc10000618080;

// decode the tx to get unsigned
console.log(utils.parseTransaction(rawTx))
// Decoded Unsigned Tx
// {
// nonce: 0,
// gasPrice: BigNumber { _hex: '0x028fa6ae00', _isBigNumber: true },
// gasLimit: BigNumber { _hex: '0x03d090', _isBigNumber: true },
// to: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
// value: BigNumber { _hex: '0x00', _isBigNumber: true },
// data: '0xa9059cbb0000000000000000000000006072257e80d54c5b739893358752d81e16c38e75000000000000000000000000000000000000000000000000002386f26fc10000',
// chainId: 97,
// v: 0,
// r:'0x0000000000000000000000000000000000000000000000000000000000000000',
// s:'0x0000000000000000000000000000000000000000000000000000000000000000',
// type: null
// }

// decode signed tx
console.log(utils.parseTransaction(signedTx))
// Decoded Signed Tx
// {
// nonce: 0,
// gasPrice: BigNumber { _hex: '0x0342770c00', _isBigNumber: true },
// gasLimit: BigNumber { _hex: '0x03d090', _isBigNumber: true },
// to: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
// value: BigNumber { _hex: '0x00', _isBigNumber: true },
// data: '0xa9059cbb0000000000000000000000006072257e80d54c5b739893358752d81e16c38e75000000000000000000000000000000000000000000000000002386f26fc10000',
// chainId: 97,
// v: 230,
// r: '0x50a40a380cef2db3938cabf8dc0f3a713164bbc0ce67726a73bd66575a3b0f73',
// s: '0x2efa87514b68b050cd1c93374780dd22254866304c8d7151b306839c636fd90c',
// from: '0x8b1e710D40BE6c3d8Db89B5a05E8e72ceDA204c5',
// hash: '0x55c19f72eda65c1bad692c6620bd0949bb71787a9fcf3f9acca39a36941a7976',
// type: null
// }