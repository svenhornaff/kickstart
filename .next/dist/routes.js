'use strict';

var routes = require('next-routes')();

// ':' is a wildcart to be replaced by a block address
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/details', '/campaigns/details').add('/campaigns/:address/details/tx', '/campaigns/details/tx').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0UsQUFERixJQUNNLEFBRE4sa0JBQ3dCLEFBRHhCLGtCQUVFLEFBRkYsSUFFTSxBQUZOLHVCQUU2QixBQUY3QixtQkFHRSxBQUhGLElBR00sQUFITixnQ0FHc0MsQUFIdEMsNkJBSUUsQUFKRixJQUlNLEFBSk4sK0JBSXFDLEFBSnJDLHNCQUtFLEFBTEYsSUFLTSxBQUxOLGtDQUt3QyxBQUx4Qyx5QkFNRSxBQU5GLElBTU0sQUFOTixvQ0FNMEMsQUFOMUM7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcHNub3cvV29ya3NwYWNlL2tpY2tzdGFydCJ9