const assert = require('assert');

let api;

beforeEach(async () => {
	// resgister@ https://etherscan.io/apis
	api = await require('etherscan-api')
		.init('YourApiKey','rinkeby', '3000');
});

describe ('Test etherscan-api interface', ()=> {
	it('etherscan-api initiated successful', () => {
		assert.ok(api);
	});

	// return the entire tranaction log of a contract on Rinkeby
	// a way to access the etherscan.io api using promises
	it('read tx lsit of a contacrt', function(done) {
		const txList = api.account
			.txlist('0x2Bf958dE72747b8e3c3AD69a2c55Ff66F06561da');

		txList.then(function(res){
			assert.ok(res);
			done();

			console.log(res);
		});
	});

	it('get transaction receipt', function(done){
		const txReceipt = api.proxy
			.eth_getTransactionReceipt('0x02ba02cee5d1a0efc8b8f1efe561ce62bd5d84e657dd8d22dcb37b2786e2d0ad');

		txReceipt.then(function(res){
			assert.ok(res);
			done();

			console.log(res);
		});
	});
});
