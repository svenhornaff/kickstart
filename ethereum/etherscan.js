
let etherscan_api;

etherscan_api = require('etherscan-api')
	.init('TR9HXEUZ5RXA8WV1FYNZ6WAK8S7RQ65TI7','rinkeby', '3000');

console.log(etherscan_api);

export default etherscan_api;
