const Wallet = require('../src/Wallet')

/**
 *
 * @type {Wallet}
 * Remember: port 20209 for mainnet 30309 for testnet
 */
const wallet = new Wallet('127.0.0.1', '30309')

let config = {
    transfer: {
        amount: 1,
        address: 'dEToXZ99LNGgQxmhdi4whWT7nUinyj23Y6kr6hdughGQTKyq8fMbwYt1142TsJziKzdsTgscWyW1t3yPf7sbd8zg2puBKBmNxX'
    }
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

    test('getheight', () => {
        wallet.getheight().then(data => {
            expect(data).toHaveProperty('result')
        })
    })

    test('transfer', () => {
        wallet.transfer(config.transfer.amount, config.transfer.address)
    })
})