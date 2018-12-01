import Web3 from 'web3';
import factory from './factory';

import { INFURA_API, ETHERSCAN_API_KEY } from '../constant'

// window is only available in the browser ... with Joia and server
// side rendering in NEXT this is not doabel ... the belwo line of code is only
// working if the browser is already there e.g with create-react-app and Metamask
// installed: const web3 = new Web3(window.web3.currentProvider);

// in a real world project we have to take care of that .... the below if
// statement solves it
let web3;
let web3Etherscan;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// we are in the browser and Metamask is running
	web3 = new Web3(window.web3.currentProvider);
	console.log('Web3 initiaction using Metamask: '+window.web3.currentProvider);
} else {
	// we are on the server *OR* the user is not running Metamask
	const provider = new Web3.providers.HttpProvider(INFURA_API);
	web3 = new Web3(provider);
	console.log('Web3 initiaction using Infura: '+ provider);

	web3Etherscan = require('etherscan-api').init(ETHERSCAN_API_KEY,'rinkeby', '3000');
	console.log(web3Etherscan);

	getCurrentAccount();
}

async function getCurrentAccount() {
	const currentAccount = await web3.eth.getAccounts();
	console.log('getCurrentAccount has resolved, returning a value of: ' + currentAccount[0]);
	return currentAccount[0];
}

export default web3;


//https://rinkeby.infura.io/v3/2c1f7b3ba5444b85af407be223028de4
