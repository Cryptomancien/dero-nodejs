const Daemon = require('./src/Daemon')
const Wallet = require('./src/Wallet')

var w = new Wallet

w.getheight().then(data => console.log(data))

// exports.Daemon = require('./src/Daemon')




