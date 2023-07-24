// Borrowed from https://gist.github.com/miguelmota/9099b705cf433336036065ab748c8404
// RLP encoded transaction
const rawTxHex = '0xed8205fc843b9aca00825208944592d8f8d7b001e72cb26a73e4fa1806a51ac79d88016345785d8a000080808080'

// using rlp package to decode values
const rlp = require('rlp')
const decoded = rlp.decode(rawTxHex)
console.log(decoded)
/*
[ <Buffer 05 fc>,
  <Buffer 3b 9a ca 00>,
  <Buffer 52 08>,
  <Buffer 45 92 d8 f8 d7 b0 01 e7 2c b2 6a 73 e4 fa 18 06 a5 1a c7 9d>,
  <Buffer 01 63 45 78 5d 8a 00 00>,
  <Buffer >,
  <Buffer >,
  <Buffer >,
  <Buffer > ]
*/