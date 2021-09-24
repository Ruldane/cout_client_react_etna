const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} =require('./compile');

const provider = new HDWalletProvider (
    // newmoneik account
    'very hello near own cushion jeans damp proud frost scale sword neither',
    // infuria.io api
    'https://rinkeby.infura.io/v3/3736217f33f849cd926c7f09ce11ffda'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hello everyone!']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('contract deployed to ', result.options.address);
}

deploy();
