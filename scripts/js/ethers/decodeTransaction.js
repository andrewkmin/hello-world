// RLP encoded transaction
const rawTxHex = '0xed8205fc843b9aca00825208944592d8f8d7b001e72cb26a73e4fa1806a51ac79d88016345785d8a000080808080'

// using ethers package to decode values
const ethers = require('ethers')
const decoded = ethers.utils.RLP.decode(rawTxHex)
console.log(decoded)
/*
[ '0x05fc',
  '0x3b9aca00',
  '0x5208',
  '0x4592d8f8d7b001e72cb26a73e4fa1806a51ac79d',
  '0x016345785d8a0000',
  '0x',
  '0x',
  '0x',
  '0x' ]
*/
