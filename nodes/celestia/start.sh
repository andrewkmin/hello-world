# instance-related
sudo apt update && sudo apt upgrade -y
sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y

# go-related
ver="1.17.2"
cd $HOME
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"

echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile

go version # should return `go version go1.17.2 linux/amd64``

# node installation
git clone https://github.com/celestiaorg/celestia-node.git
cd celestia-node/
git checkout v0.2.0
make install

# running the node
celestia light init

sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service
[Unit]
Description=celestia-lightd Light Node
After=network-online.target

[Service]
User=$USER
ExecStart=$HOME/go/bin/celestia light start
Restart=on-failure
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF

# verify
cat /etc/systemd/system/celestia-lightd.service

# expected output:
# [Unit]
# Description=celestia-lightd Light Node
# After=network-online.target

# [Service]
# User=ubuntu
# ExecStart=/home/ubuntu/go/bin/celestia light start
# Restart=on-failure
# RestartSec=3
# LimitNOFILE=4096

[Install]
WantedBy=multi-user.target

# start the daemon
sudo systemctl enable celestia-lightd
sudo systemctl start celestia-lightd

# verify status
sudo systemctl status celestia-lightd

# expected output:
# ● celestia-lightd.service - celestia-lightd Light Node
#    Loaded: loaded (/etc/systemd/system/celestia-lightd.service; enabled; vendor preset: enabled)
#    Active: active (running) since Mon 2022-03-28 16:25:22 UTC; 15min ago
#  Main PID: 26635 (celestia)
#     Tasks: 7 (limit: 1140)
#    CGroup: /system.slice/celestia-lightd.service
#            └─26635 /home/ubuntu/go/bin/celestia light start

# Mar 28 16:40:23 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:23.620Z        INFO        header        header/sync.go:233        pending head        {"height": 721356, "ha
# Mar 28 16:40:23 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:23.836Z        INFO        das        das/daser.go:91        sampling successful        {"height": 721356, "h
# Mar 28 16:40:25 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:25.590Z        INFO        header        header/store.go:273        new head        {"height": 229889, "hash"
# Mar 28 16:40:30 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:30.447Z        INFO        header        header/store.go:273        new head        {"height": 230401, "hash"
# Mar 28 16:40:34 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:34.532Z        INFO        header        header/store.go:273        new head        {"height": 230913, "hash"
# Mar 28 16:40:38 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:38.159Z        INFO        header        header/store.go:273        new head        {"height": 231425, "hash"
# Mar 28 16:40:39 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:39.736Z        INFO        header        header/sync.go:233        pending head        {"height": 721357, "ha
# Mar 28 16:40:39 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:39.956Z        ERROR        engine        decision/engine.go:691        wantlist index doesn't match peer's w
# Mar 28 16:40:39 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:39.963Z        ERROR        engine        decision/engine.go:691        wantlist index doesn't match peer's w
# Mar 28 16:40:39 ip-172-31-16-189 celestia[26635]: 2022-03-28T16:40:39.964Z        INFO        das        das/daser.go:91        sampling successful        {"height": 721357, "h