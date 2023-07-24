// Borrowed from https://gist.github.com/miguelmota/9099b705cf433336036065ab748c8404
// RLP encoded transaction
const rawTxHex = '0xed8205fc843b9aca00825208944592d8f8d7b001e72cb26a73e4fa1806a51ac79d88016345785d8a000080808080'

// using ethereumjs to decode to transaction object
const { Transaction } = require('@ethereumjs/tx')
// const tx = Transaction.fromRlpSerializedTx(rawTxHex) // deprecated as of v4.0.0
const tx = Transaction.fromSerializedTx(rawTxHex)
console.log(tx.toJSON())
/*
{ nonce: '0x5fc',
  gasPrice: '0x3b9aca00',
  gasLimit: '0x5208',
  to: '0x4592d8f8d7b001e72cb26a73e4fa1806a51ac79d',
  value: '0x16345785d8a0000',
  data: '0x',
  v: '0x0',
  r: '0x0',
  s: '0x0' }
*/
