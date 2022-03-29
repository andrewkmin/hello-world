# celestia
generally, you'll want to read up on https://blog.celestia.org/celestia-launches-devnet/ for context but if you're here, i'd assumine you're ready to ape in. as you can see from https://github.com/celestiaorg/networks/, there are a few configurations you could run, but let's start with sum light.

## light nodes (see [guide](https://github.com/celestiaorg/networks/blob/master/celestia-light-node.md))
### infrastructure provisioning
1. navigate to AWS or your cloud infrastructure provider of choice
2. a free tier should be sufficient for this class of nodes (i went with a free tier instance running ubuntu 18)
   1. the celestia docs recommend 5gb+ of storage. to verify, after provisioning a free tier instance, run `df -h` to see your available disk space. it may hover around ~5-5.5gb
3. please make sure to put at least basic security around accessing your node. though this would be for devnet, it's a good practice to exercise at least decent security measures

### connect to your instance
generally, i recommend connecting via ssh client. following the general aws instructions here should suffice. if you do run into issues, it will most likely be around your private key. ensure that you're referring to the `.pem` file correctly, and that it is *not* publicly viewable (in which case run `chmod 400 <key name>.pem`). 

example connection script:
```
ssh -i "<your key>.pem" <your instance name>.compute-1.amazonaws.com
```

### setup
while i'd recommend you stick with the latest up-to-date instructions from [the official guide](https://github.com/celestiaorg/networks/blob/master/celestia-light-node.md), see `start.sh` for a compilation of instructions. note that cpu utilization might skyrocket, especially with free tier resources, so much so that ssh will become unusable

### interacting with the node
see https://github.com/celestiaorg/networks/blob/master/celestia-light-node.md#create-a-wallet and onward