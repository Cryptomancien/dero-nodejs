const Wallet = require('../src/Wallet')
const crypto = require('crypto')
function makePaymentId() {
    return crypto.randomBytes(32).toString('hex')
}
/**
 *
 * @type {Wallet}
 * Remember: port 20209 for mainnet 30309 for testnet
 */
const wallet = new Wallet('127.0.0.1', '30309')

let config = {
    transfer: {
        amount: 1,
        address: 'dEToXZ99LNGgQxmhdi4whWT7nUinyj23Y6kr6hdughGQTKyq8fMbwYt1142TsJziKzdsTgscWyW1t3yPf7sbd8zg2puBKBmNxX',
    },
    payment_id: makePaymentId(),
    txid: 'bc5fd1499c19eaab7b8f7c88563993ba543fdebb4395ebf54c0bedc2924b65d7'
}

describe('Wallet Tests', () => {

    test('getaddress', () => {
        wallet.getaddress().then(data => {
            expect(data).toHaveProperty('result')
        })
    })

    test('getbalance', () => {
        wallet.getbalance().then(data => {
            expect(data).toHaveProperty('result')
        })
    })

    /*
    test('query_key', () => {
        wallet.query_key().then(data => {
            expect(data).toHaveProperty('result')
        })
    })

     */

    /*
    test('transfer', () => {
        wallet.transfer(config.transfer.amount, config.transfer.address).then(data => {
            expect(data).toHaveProperty('result')
        })
    })
     */


    test('make_integrated_address', () => {
        wallet.make_integrated_address(config.payment_id).then(data => {
            expect(data).toHaveProperty('result')
        })
    })


    test('get_transfer_by_txid', () => {
        wallet.get_transfer_by_txid(config.txid).then(data => {
            expect(data).toHaveProperty('result')
        })
    })

    test('get_transfers', () => {
        wallet.get_transfers().then(data => {
            expect(data).toHaveProperty('result')
        })
    })
})