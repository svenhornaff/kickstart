const { ETHERSCAN_API_KEY } = require('../constant');
let etherscan_api;

etherscan_api = require('etherscan-api').init(ETHERSCAN_API_KEY,'rinkeby', '3000');

export default etherscan_api;
