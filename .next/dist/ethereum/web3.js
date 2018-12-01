'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentAccount = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var currentAccount;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return web3.eth.getAccounts();

					case 2:
						currentAccount = _context.sent;

						console.log('getCurrentAccount has resolved, returning a value of: ' + currentAccount[0]);
						return _context.abrupt('return', currentAccount[0]);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getCurrentAccount() {
		return _ref.apply(this, arguments);
	};
}();

// window is only available in the browser ... with Joia and server
// side rendering in NEXT this is not doabel ... the belwo line of code is only
// working if the browser is already there e.g with create-react-app and Metamask
// installed: const web3 = new Web3(window.web3.currentProvider);

// in a real world project we have to take care of that .... the below if
// statement solves it
var web3 = void 0;
var web3Etherscan = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// we are in the browser and Metamask is running
	web3 = new _web2.default(window.web3.currentProvider);
	console.log('Web3 initiaction using Metamask: ' + window.web3.currentProvider);
} else {
	// we are on the server *OR* the user is not running Metamask
	var provider = new _web2.default.providers.HttpProvider(_constant.INFURA_API);
	web3 = new _web2.default(provider);
	console.log('Web3 initiaction using Infura: ' + provider);

	web3Etherscan = require('etherscan-api').init(_constant.ETHERSCAN_API_KEY, 'rinkeby', '3000');
	console.log(web3Etherscan);

	getCurrentAccount();
}

exports.default = web3;

//https://rinkeby.infura.io/v3/2c1f7b3ba5444b85af407be223028de4
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3VycmVudEFjY291bnQiLCJXZWIzIiwiZmFjdG9yeSIsIklORlVSQV9BUEkiLCJFVEhFUlNDQU5fQVBJX0tFWSIsIndlYjNFdGhlcnNjYW4iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsInJlcXVpcmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBUyxBQUFZLEFBQXlCOzs7OztxRkE0QjlDLG1CQUFBO01BQUE7Z0VBQUE7YUFBQTtxQ0FBQTtVQUFBO3NCQUFBO2FBQzhCLEtBQUEsQUFBSyxJQURuQyxBQUM4QixBQUFTOztVQUFoQztBQURQLGdDQUVDOztjQUFBLEFBQVEsSUFBSSwyREFBMkQsZUFGeEUsQUFFQyxBQUF1RSxBQUFlO3VDQUMvRSxlQUhSLEFBR1EsQUFBZTs7VUFIdkI7VUFBQTtzQkFBQTs7QUFBQTtjQUFBO0E7O2lCQUFlLEE7Ozs7O0FBMUJmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLFlBQUo7QUFDQSxJQUFJLHFCQUFKOztBQUVBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBQ3hFO0FBQ0E7UUFBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzVCO1NBQUEsQUFBUSxJQUFJLHNDQUFvQyxPQUFBLEFBQU8sS0FBdkQsQUFBNEQsQUFDNUQ7QUFKRCxPQUlPLEFBQ047QUFDQTtLQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBMUIsQUFBaUIsQUFBbUIsQUFBYSxBQUNqRDtRQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2hCO1NBQUEsQUFBUSxJQUFJLG9DQUFaLEFBQStDLEFBRS9DOztpQkFBZ0IseUJBQUEsQUFBeUIsQUFBSyxrQ0FBOUIsQUFBZ0QsV0FBaEUsQUFBZ0IsQUFBMkQsQUFDM0U7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztBQUNBO0FBUUQ7O2tCQUFBLEFBQWU7O0FBR2YiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcHNub3cvV29ya3NwYWNlL2tpY2tzdGFydGVyIn0=