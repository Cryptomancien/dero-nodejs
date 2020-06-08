const Daemon = require('./src/Daemon')
const Wallet = require('./src/Wallet')

var d = new Daemon

d.get_info().then(data => {
    console.log(data)
})

// exports.Daemon = require('./src/Daemon')




