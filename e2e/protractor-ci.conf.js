const config = require('./protractor.conf').config

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    // args: ['--headless', '--no-sandbox', '--versions.chrome 76.0.3809.6']
    args: ['--headless', '--no-sandbox']
  }
}

exports.config = config
