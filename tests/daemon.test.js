const Daemon = require('../src/Daemon')

/**
 * Remember: port 20206 for mainnet 30306 for testnet
 * @type {Daemon}
 */
const daemon = new Daemon('127.0.0.1', '30306')

/**
 *
 * @type {{wallet_address: string, topoheight: number, hash: string}}
 */
const config = {
	wallet_address: 'dETom4Mu5yJ7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyeRQGsq',
	hash: '3cd28252e6eda34a8593b073ae16258fcfaca0edb7ae55b7e1d84667ce9b7633',
	topoheight: 50,
	txs_hashes: [
		'95a192e4414a9a4c92c87265e37dea208b0d8384011ae811226cf8dd5d21b5ee',
		'0415ddb5c5e14c57993496aeb08726f2fd9cbc6fb8b3be8970ce761acc0ab546'
	]
}

describe('Daemon Tests', () => {
	test('getblockcount', () => {
		daemon.getblockcount().then(data => {
			expect(data).toHaveProperty('result')
		})
	})


	test('get_info', () => {
		daemon.get_info().then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getblocktemplate', () => {
		daemon.getblocktemplate(config.wallet_address, 10).then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getlastblockheader', () => {
		daemon.getlastblockheader().then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	/*
    test('submitblock', () => {
        daemon.submitblock().then(data => {
            expect(data).toHaveProperty('result')
        });
    });
     */

	test('getblockheaderbyhash', () => {
		daemon.getblockheaderbyhash(config.hash).then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getblockheaderbytopoheight', () => {
		daemon.getblockheaderbytopoheight(config.topoheight).then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getblockheaderbyheight', () => {
		daemon.getblockheaderbyheight(config.topoheight).then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getblock', () => {
		daemon.getblock(config.hash).then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('gettxpool', () => {
		daemon.gettxpool().then(data => {
			expect(data).toHaveProperty('result')
		})
	})

	test('getheight', () => {
		daemon.getheight().then(data => {
			expect(data).toHaveProperty('height')
		})
	})
})

