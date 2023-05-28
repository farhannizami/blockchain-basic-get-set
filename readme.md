# Install Truffle
If truffle is not installed, run the following command 
```
npm install -g truffle
```
# Add Ganache Network to Metamask
Open Metamask > Add Network > Add a network manually

Ganache rpc url: HTTP://127.0.0.1:7545 

Ganache chain id: 1337

# Import Ganache Account

* Launch ganache and create new workspace
* Add truffle-config.js file to truffle projects of ganache workspace
* Copy the private key of a ganache account
* Open metamask > click on account avater > import account > paste private key

# Deploy Contract

Follow the steps before deploying contract:

Open truffle-config.js and uncomment the following code under network section -
```
development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
```
To compile and deploy contract:
```
truffle migrate --network development
```

If you face any error, try changing the solc version to 0.8.0 in truffle-config.js

# Connect Blockchain With Web
* Copy the contract address from terminal and paste it in the main.js
* Copy the abi from build/UserContract.json and paste it in main.js
* Copy the account address from metamask/ganache and paste it in main.js as web3.eth.defaultAccount

## Now open liveserver and enjoy !!!