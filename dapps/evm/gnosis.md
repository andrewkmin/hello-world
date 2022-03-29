# gnosis
the backbone of DAOs; for all your safe needs

## context
here's a great [guide](https://medium.com/gauntlet-networks/multisig-transactions-with-gnosis-safe-f5dbe67c1c2d) published by the gauntlet team, which reviews multisig at a high level, as well as the implementation details. this should be all you need to get a contract up and running.

## code
### deployment
you can find the latest deployed contracts as of v1.3.0 [here](https://github.com/gnosis/safe-deployments/tree/main/src/assets/v1.3.0). in general, gnosis' contracts are very well documented, so any doubts about invocations can be cleared up by checking the code directly. for example, see `setup` function [here](https://github.com/gnosis/safe-contracts/blob/da66b45ec87d2fb6da7dfd837b29eacdb9a604c5/contracts/GnosisSafe.sol#L66-L97), and `execTransaction` [here](https://github.com/gnosis/safe-contracts/blob/da66b45ec87d2fb6da7dfd837b29eacdb9a604c5/contracts/GnosisSafe.sol#L99-L194).

another ethersjs-based implementation can be found [here](https://forum.openzeppelin.com/t/creating-gnosis-safes-via-the-api/12031)

### invocation
see the gnosis frontend code [here](https://github.com/gnosis/safe-react/blob/5020c0daa31ecc0f26520f206deda5393502ad30/src/logic/safe/store/actions/createTransaction.ts#L53) for how one might go about this using js

## tutorial
TODO: a full-on tutorial of setting up a gnosis safe and executing a transation, all programatically (i.e. entirely without the ui)
