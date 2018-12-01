'use strict';

var routes = require('next-routes')();

// ':' is a wildcart to be replaced by a block address
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/details', '/campaigns/details').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0UsQUFERixJQUNNLEFBRE4sa0JBQ3dCLEFBRHhCLGtCQUVFLEFBRkYsSUFFTSxBQUZOLHVCQUU2QixBQUY3QixtQkFHRSxBQUhGLElBR00sQUFITixnQ0FHc0MsQUFIdEMsNkJBSUUsQUFKRixJQUlNLEFBSk4sK0JBSXFDLEFBSnJDLHNCQUtFLEFBTEYsSUFLTSxBQUxOLG9DQUswQyxBQUwxQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwc25vdy9Xb3Jrc3BhY2Uva2lja3N0YXJ0ZXIifQ==