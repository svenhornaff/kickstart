'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepsnow/Workspace/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew(props) {
		var _this2 = this;

		(0, _classCallCheck3.default)(this, RequestNew);

		var _this = (0, _possibleConstructorReturn3.default)(this, (RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call(this, props));

		_this.onSubmit = function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, reciepient, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, reciepient = _this$state.reciepient;

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), reciepient).send({ from: accounts[0] });

							case 10:

								_routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:
								_this.setState({ loading: false });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this.state = {
			value: '',
			description: '',
			reciepient: '',
			errorMessage: '',
			loading: false
		};
		return _this;
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Back')), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.reciepient,
				onChange: function onChange(event) {
					return _this3.setState({ reciepient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			})), _react2.default.createElement(_semanticUiReact.Message, {
				error: true, header: 'Oops!',
				content: this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}), _react2.default.createElement(_semanticUiReact.Button, {
				loading: this.state.loading,
				floated: 'left',
				content: 'Submitt Request',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			})));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiTWVzc2FnZSIsIklucHV0IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3ROZXciLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiYWRkcmVzcyIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2llcGllbnQiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBUzs7QUFDaEMsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBO3FDQUNMOztxQkFBQSxBQUFZLE9BQU87ZUFBQTs7c0NBQUE7OzRJQUFBLEFBQ1o7O1FBRFksQUFpQm5CLHVCQWpCbUI7dUZBaUJSLGlCQUFBLEFBQU0sT0FBTjsrREFBQTs7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUVBOztBQUhJLG1CQUdPLHdCQUFTLE1BQUEsQUFBSyxNQUhyQixBQUdPLEFBQW9CO3NCQUNNLE1BSmpDLEFBSXNDLE9BSnRDLEFBSUYsMEJBSkUsQUFJRixhQUpFLEFBSVcsb0JBSlgsQUFJVyxPQUpYLEFBSWtCLHlCQUpsQixBQUlrQixBQUU1Qjs7Y0FBQSxBQUFLLFNBQVUsRUFBQyxTQUFELEFBQVUsTUFBTSxjQU5yQixBQU1WLEFBQWUsQUFBOEI7O3dCQU5uQzt3QkFBQTtlQVNjLGNBQUEsQUFBSyxJQVRuQixBQVNjLEFBQVM7O1lBQTFCO0FBVEcsNEJBQUE7d0JBQUE7ZUFXSCxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNMLGFBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRlosQUFFTCxBQUF3QixVQUZuQixBQUdMLFlBSEssQUFJSixLQUFLLEVBQUUsTUFBTSxTQWZOLEFBV0gsQUFJQyxBQUFRLEFBQVM7O1lBRXhCOzt1QkFBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFqQmpDO3dCQUFBO0FBQUE7O1lBQUE7d0JBQUE7d0NBbUJUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFuQnJCLEFBbUJULEFBQWMsQUFBb0I7O1lBRW5DO2NBQUEsQUFBSyxTQUFVLEVBQUMsU0FyQk4sQUFxQlYsQUFBZSxBQUFVOztZQXJCZjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0FBakJROzt3QkFBQTs0QkFBQTtBQUFBO0FBRWxCOztRQUFBLEFBQUs7VUFBUSxBQUNMLEFBQ1A7Z0JBRlksQUFFQyxBQUNiO2VBSFksQUFHRCxBQUNYO2lCQUpZLEFBSUUsQUFDZDtZQVBpQixBQUVsQixBQUFhLEFBS0g7QUFMRyxBQUNaO1NBTUQ7Ozs7OzJCQWdDUTtnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZGLEFBQ0MsQUFDQyxBQUlELDBCQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BTkQsQUFNQyxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGdDQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLHlCQUFBO1lBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFGOUQ7O2VBQUE7aUJBSEYsQUFDQyxBQUVDLEFBTUQ7QUFOQztBQUNDLHdCQUtELGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxtQ0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnhEOztlQUFBO2lCQVhGLEFBU0MsQUFFQyxBQU1EO0FBTkM7QUFDQyx3QkFLRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsOEJBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUY3RDs7ZUFBQTtpQkFuQkYsQUFpQkMsQUFFQyxBQUtEO0FBTEM7QUFDQyx3QkFJRixBQUFDO1dBQUQsTUFDTyxRQURQLEFBQ2MsQUFDYjthQUFTLEtBQUEsQUFBSyxNQUZmLEFBRXFCOztlQUZyQjtpQkF4QkQsQUF3QkMsQUFJQTtBQUpBO0FBQ0MsdUJBR0QsQUFBQzthQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ3BCO2FBRkQsQUFFUyxBQUNSO2FBSEQsQUFHUyxBQUNSO2FBSkQsQUFJVTs7ZUFKVjtpQkFwQ0gsQUFDQyxBQU9DLEFBNEJDLEFBU0g7QUFURztBQUNDOzs7OzswR0FwRXdCLEE7Ozs7O1lBQ3BCO0Esa0JBQVksTUFBTSxBLE1BQWxCLEE7MENBRUQsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmZ0IsQSxBQTJGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwc25vdy9Xb3Jrc3BhY2Uva2lja3N0YXJ0In0=