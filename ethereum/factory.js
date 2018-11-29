import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x2cD424A00393e86ae7e3f434c5650a7fbc2c38D1'
);

export default instance;
