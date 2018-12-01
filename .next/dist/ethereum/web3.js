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
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/2c1f7b3ba5444b85af407be223028de4');
	web3 = new _web2.default(provider);
	console.log('Web3 initiaction using Infura: ' + provider);

	web3Etherscan = require('etherscan-api').init('YourApiKey', 'rinkeby', '3000');
	console.log(web3Etherscan);

	getCurrentAccount();
}

exports.default = web3;

//https://rinkeby.infura.io/v3/2c1f7b3ba5444b85af407be223028de4
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3VycmVudEFjY291bnQiLCJXZWIzIiwiZmFjdG9yeSIsIndlYjNFdGhlcnNjYW4iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsInJlcXVpcmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7cUZBOEJwQixtQkFBQTtNQUFBO2dFQUFBO2FBQUE7cUNBQUE7VUFBQTtzQkFBQTthQUM4QixLQUFBLEFBQUssSUFEbkMsQUFDOEIsQUFBUzs7VUFBaEM7QUFEUCxnQ0FFQzs7Y0FBQSxBQUFRLElBQUksMkRBQTJELGVBRnhFLEFBRUMsQUFBdUUsQUFBZTt1Q0FDL0UsZUFIUixBQUdRLEFBQWU7O1VBSHZCO1VBQUE7c0JBQUE7O0FBQUE7Y0FBQTtBOztpQixBQUFlOzs7OztBQTVCZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxZQUFKO0FBQ0EsSUFBSSxxQkFBSjs7QUFFQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUN4RTtBQUNBO1FBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM1QjtTQUFBLEFBQVEsSUFBSSxzQ0FBb0MsT0FBQSxBQUFPLEtBQXZELEFBQTRELEFBQzVEO0FBSkQsT0FJTyxBQUNOO0FBQ0E7S0FBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDaEIsQUFFRDtRQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2hCO1NBQUEsQUFBUSxJQUFJLG9DQUFaLEFBQStDLEFBRS9DOztpQkFBZ0IseUJBQUEsQUFBeUIsS0FBekIsQUFBOEIsY0FBOUIsQUFBMkMsV0FBM0QsQUFBZ0IsQUFBc0QsQUFDdEU7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztBQUNBO0FBUUQ7O2tCQUFBLEFBQWU7O0FBR2YiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcHNub3cvV29ya3NwYWNlL2tpY2tzdGFydGVyIn0=