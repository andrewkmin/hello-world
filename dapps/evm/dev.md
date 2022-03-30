# dev 🤓
## getting started
template using foundry: https://github.com/cleanunicorn/ethereum-smartcontract-template

## resources
### solidity
https://github.com/brockelmore/forge-std
https://ethfiddle.com/: test gas costs within an ide

#### compilation
https://github.com/palkeo/panoramix: python implementation of solidity decompiler (fork of https://eveem.org/)

#### testing
https://github.com/cleanunicorn/mockprovider: for mocking

#### abis
https://github.com/cleanunicorn/santoku
https://github.com/pipermerriam/ethereum-function-signature-registry // https://www.4byte.directory/

#### optimizations and gas
resources on gas costs: [spreadsheet 1](https://docs.google.com/spreadsheets/d/1m89CVujrQe5LAFJ8-YAUCcNK950dUzMQPMJBxRtGCqs/edit?usp=sharing) // [spreadsheet 2](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit?usp=sharing) (and [accompanying github repo](https://github.com/djrtwo/evm-opcode-gas-costs)) // [canonical go-ethereum constants](https://github.com/ethereum/go-ethereum/blob/master/params/protocol_params.go)
[ethereum docs on gas costs in general](https://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html)
practical tips:
- [1](https://medium.com/layerx/how-to-reduce-gas-cost-in-solidity-f2e5321e0395)
- [2 - forum](https://ethereum.stackexchange.com/questions/28813/how-to-write-an-optimized-gas-cost-smart-contract
- [3](https://dev.to/javier123454321/solidity-gas-optimization-pt1-4271)
- [4](https://medium.com/coinmonks/gas-optimization-in-solidity-part-i-variables-9d5775e43dde)
- [5 - forum](https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256)
https://github.com/brockelmore/memmove: efficient memory management
https://github.com/0xMisaka/Sol-MagicCounter: lru-cache implementation (effectively)
https://github.com/costa-group/gasol-optimizer: GASOL implementation
https://www.azuki.com/erc721a: azuki's nft minting-related optimizations

tight variable packing (with [additional](https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256?rq=1) [helpful](https://fravoll.github.io/solidity-patterns/tight_variable_packing.html) commentary): 
```
Tight variable packing should be utilized when using structs in Solidity. The Solidity language allows structs in the contract, that is used to define an abstract data type. When the storage is allotted to a struct type variable in EVM storage, it is allotted in slots. Each storage slot is 32 bytes long. When statically sized data types are used in the struct (for example, uintX, intX, and bytesX), these variables are allotted storage slots starting from 0 index. Storing and reading data from these storage slots consumes gas based on the number of storage slots written or accessed. Hence, when variables are not tightly packed in a struct, it could consume more storage slots, which would result in more gas consumption ...
```

#### deployments
https://github.com/Tenderly

### node
https://github.com/cleanunicorn/hitomi : ethereum console for a node

## dope eips
### upgrades
[berlin](https://hackmd.io/@fvictorio/gas-costs-after-berlin): with a good walkthrough on gas-related impact

### signing-related
https://eips.ethereum.org/EIPS/eip-712
https://eips.ethereum.org/EIPS/eip-2612

### token-related
https://eips.ethereum.org/EIPS/eip-20 (foundational)
https://eips.ethereum.org/EIPS/eip-721 (foundational)
https://eips.ethereum.org/EIPS/eip-1155 (foundational)
https://eips.ethereum.org/EIPS/eip-4626
- sample implementation: https://github.com/z0r0z/MultiVault 

### other
https://eips.ethereum.org/EIPS/eip-150
- [discussion](https://ethereum.stackexchange.com/questions/11312/how-was-the-state-bloat-attack-that-led-to-the-eip-150-hardfork-performed?rq=1)
https://eips.ethereum.org/EIPS/eip-165

## advanced
https://github.com/ethereum/yul-isabelle

## general tutorials
- https://stermi.medium.com/capture-the-ether-part-1-what-is-it-and-how-to-start-c44138d4b936 (links to other resources)
  - ethernaut
  - ctf
- https://www.learnweb3.io/
- https://solidity-by-example.org/
- https://docs.soliditylang.org/en/v0.8.13/
- https://ethereum.org/en/
