# evm dapps
as one might imagine, the dapp development experience is relatively consistent across all evm-compatible networks (included are evm-_equivalent_ variants as well, aka optimism 🤝)

## the starter pack 🤠
at this point in time, there are quite a few templates you could start with:
- hardhat
- foundry
- dapptools
- ...

other frameworks/resources include:
- open zeppelin
- waffle
- remix ide + plugin
- truffle (a bit dead)

## resources on the evm itself 🤓
i would highly recommend going down the rabbithole on the [evm section](https://cypherpunks-core.github.io/ethereumbook/13evm.html) within canonical ethereum book (available [online](https://cypherpunks-core.github.io/ethereumbook/) or via [hardcopy](https://www.amazon.com/Mastering-Ethereum-Building-Smart-Contracts/dp/1491971940)). a couple of excerpts (specifically within the `Ethereum State` section):

> The job of the EVM is to update the Ethereum state by computing valid state transitions as a result of smart contract code execution, as defined by the Ethereum protocol.

> When a transaction results in smart contract code execution, an EVM is instantiated with all the information required in relation to the current block being created and the specific transaction being processed.

> At this point, you can think of the EVM running on a sandboxed copy of the Ethereum world state, with this sandboxed version being discarded completely if execution cannot complete for whatever reason. However, if execution does complete successfully, then the real-world state is updated to match the sandboxed version, including any changes to the called contract’s storage data, any new contracts created, and any ether balance transfers that were initiated.
