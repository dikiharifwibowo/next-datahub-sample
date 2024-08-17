const path = require('path')

module.exports = {
  port: 5678,
  hostname: '127.0.0.1',
  store: path.join(__dirname, 'data'),
};
