const Wallet = require('../src/Wallet')

/**
 *
 * @type {Wallet}
 * Remember: port 20209 for mainnet 30309 for testnet
 */
const wallet = new Wallet('127.0.0.1', '30309')


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
})