const util = require("./util");
const web3js = require("web3");
const ethjs = require("@ethereumjs/tx");
const prompts = require("prompts");
const { bufArrToArr } = require("@ethereumjs/util");
const { RLP } = require("@ethereumjs/rlp");

const client = "https://goerli.infura.io/v3/839f97a038e14586af870bba4ba8743b"; // for Goerli, use goerli.infura.io...
const web3Client = new web3js(client);

async function createUnsignedDynamicTransaction(to, from, data, value) {
  const chainId = await util.getChainId(web3Client);
  const baseFee = await util.getBaseFee(web3Client);
  const nonce = await util.getNonce(web3Client, from);
  const gas = await util.estimateGas(web3Client, to, from, data || "0x");
  const tip = await util.getMaxPriorityFee(web3Client);
  // Unsure why, but this needs to be specified even for EIP1559 txs
  const gasLimit = gas;

  const txData = {
    to: to,
    value: value,
    data: data,
    gas: gas,
    gasLimit: gasLimit,
    maxPriorityFeePerGas: tip,
    maxFeePerGas: baseFee + tip,
    nonce: nonce,
    chainId: chainId,
  };

  const tx = ethjs.FeeMarketEIP1559Transaction.fromTxData(txData);
  const unsignedTx = tx.getMessageToSign(false);

  return unsignedTx.toString("hex");
}

async function createUnsignedLegacyTransaction(to, from, data, value) {
  const nonce = await util.getNonce(web3Client, from);
  const gas = await util.estimateGas(web3Client, to, from, data || "0x");
  const gasPrice = await util.getGasPrice(web3Client);
  // Unsure why, but this needs to be specified even for EIP1559 txs
  const gasLimit = gas;

  const txData = {
    to: to,
    value: value,
    data: data,
    gasPrice: web3js.utils.toHex(gasPrice),
    gasLimit: gasLimit,
    nonce: nonce,
    // chainId: chainId,
  };

  console.log("tx data", txData);

  const tx = ethjs.Transaction.fromTxData(txData); // alternative: `fromValuesArray`
  console.log("tx", tx);
  const unsignedTx = tx.getMessageToSign(false);
  unsignedTx[6] = Buffer.from(""); // manually set `v` to 0
  console.log("unsignedTx", unsignedTx);
  const sliced = unsignedTx.slice(0, 6);
  console.log("sliced", sliced);
  // const serializedMessage = Buffer.from(RLP.encode(bufArrToArr(sliced)));
  const serializedMessage = Buffer.from(RLP.encode(bufArrToArr(sliced)));

  return serializedMessage.toString("hex");
}

async function run() {
  const cliPrompts = [
    {
      type: "text",
      name: "type",
      message: `Transaction type ("legacy" or "dynamic")`,
    },
    {
      type: "text",
      name: "destination",
      message: "Destination address (0x-prefixed)",
    },
    {
      type: "text",
      name: "source",
      message: "Transaction source (used for nonce / gas computing)",
    },
  ];

  // e.g. "0x40f008f4c17075EFcA092aE650655f6693AECEd0"
  const { type, destination, source } = await prompts(cliPrompts);

  // Not doing contract calls here, only simple sends!
  const data = null;

  // This is 1 wei, the smallest amount we can possibly send
  const value = 1;

  const unsignedTx =
    type === "legacy"
      ? await createUnsignedLegacyTransaction(destination, source, data, value)
      : await createUnsignedDynamicTransaction(
          destination,
          source,
          data,
          value
        ); // default to dynamic

  return unsignedTx;
}

run().then((res) => console.log(res));

// using 0x8a22831dDAfB7230e56cC028cdDECd5eeC95B1F3 as source address
