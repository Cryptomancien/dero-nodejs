const Daemon = require('./src/Daemon')
const Wallet = require('./src/Wallet')




exports.Daemon = require('./src/Daemon')
exports.Wallet = require('./src/Wallet')


/*
Somm TESTS

const crypto = require('crypto')

function MakePaymentId() {
    return crypto.randomBytes(32).toString('hex')
}
const daemon = new Daemon('127.0.0.1', '20206')
const wallet = new Wallet('127.0.0.1', '30309')
//daemon.getheight().then(data => console.log(data))
//wallet.getheight().then(data => console.log(data))

//d.getheight().then(data => console.log(data))
//wallet.getaddress().then(data => console.log(data))
//wallet.getbalance().then(data => console.log(data))
//wallet.getheight().then(data => console.log(data))



//wallet.query_key().then(data => console.log(data))

//wallet.make_integrated_address('')

//const d = new Daemon('127.0.0.1', '30306')


//wallet.transfer(1, 'dEToXZ99LNGgQxmhdi4whWT7nUinyj23Y6kr6hdughGQTKyq8fMbwYt1142TsJziKzdsTgscWyW1t3yPf7sbd8zg2puBKBmNxX').then(data => console.log(data))

//wallet.make_integrated_address('533f1a4dc4f0a15095d384fafab07187222b13c9f18c02e6a289e36a5d6a5049').then(data => console.log(data))


//wallet.split_integrated_address('dETinEd8Ah67t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLNaGjs3HatWKMhFQzqM5NZXfWWiv3PNZKBNQRHYm2A4FKi52fv5veZBk').then(data => console.log(data))
//wallet.get_transfer_by_txid('eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4').then(data => console.log(data))

//wallet.get_transfers().then(data => console.log(data))

*/

