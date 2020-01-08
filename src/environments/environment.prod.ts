const package_json = require('../../package.json')

export const environment = {
  production: true,

  // Fill in your own online server API url here
  apiUrl: 'https://node-persons-server.herokuapp.com',

  version: package_json.version
}
