const routes = require('next-routes')();

// ':' is a wildcart to be replaced by a block address
routes
	.add('/campaigns/new', '/campaigns/new')
	.add('/campaigns/:address', '/campaigns/show')
	.add('/campaigns/:address/requests', '/campaigns/requests/index')
	.add('/campaigns/:address/details', '/campaigns/details')
	.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
