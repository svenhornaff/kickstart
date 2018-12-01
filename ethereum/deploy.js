// truffels needs to be installed using the command line
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const {METAMASK, INFURA_API} = require('../constant');


const provider = new HDWalletProvider(METAMASK, INFURA_API);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attemting to deploy from accout: ', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({gas: '3000000', from: accounts[0] });

	console.log('Contract deployed to: ', result.options.address);
};

deploy();
