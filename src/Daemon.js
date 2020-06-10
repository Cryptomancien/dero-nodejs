const http = require('http')

class Daemon {

	/**
	 * @param {string} address
	 * @param {String} port
	 * Remember: port 20206 for mainnet 30306 for testnet
	 */
	constructor(address = '127.0.0.1', port = '20206') {
		this.address = address
		this.port = port
	}

	/**
	 *
	 * @param {String} method
	 * @param {Object} params
	 * @param {String} verb
	 * @param {String} path
	 * @returns {Promise<unknown>}
	 */
	async request(method, params, verb = 'POST', path = '/json_rpc') {

		return new Promise((resolve, reject) => {

			let data = {
				"jsonrpc": "2.0",
				"id": "1",
				"method": method
			}

			if (params) {
				data.params = params
				// console.log(data)
			}

			data = JSON.stringify(data)

			const options = {
				hostname: this.address,
				port: this.port,
				path: path,
				method: verb,
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			}

			let rawData = ''

			const req = http.request(options, (res) => {
			
				res.on('data', (d) => {
					//process.stdout.write(d)
					rawData += d
				})

				res.on('end', () => {
					try	{
						const parsedData = JSON.parse(rawData)
						resolve(parsedData)
					} 
					catch (error) {
						reject(error)
					}
				})
			})

			req.write(data)
			req.end()
		})
	}

	/**
	 * Returns the currently synced height of the chain
	 * @returns {Promise<unknown>}
	 */
	getblockcount() {
		return this.request('getblockcount').then(data => {
			return data
		})
	}

	/**
	 * Returns various info about the daemon and network
	 * @returns {Promise<unknown>}
	 */
	get_info() {
		return this.request('get_info').then(data => {
			return data
		})
	}


	/**
	 *
	 *  Return a block template (used for mining a block)
	 * @param wallet_address
	 * @param reserve_size
	 * @returns {Promise<unknown>}
	 */
	getblocktemplate(wallet_address, reserve_size = 10) {

		const params = {
			wallet_address,
			reserve_size
		}

		return this.request('getblocktemplate', params).then(data => {
			return data
		})
	}

	/**
		Submits a mined block to the network
		Carefull: method not tested yet
		// TODO TEST
	 */
	submitblock(block) {

	}

	/**
	 * Returns the latest blockheader of the currently synced height
	 * @returns {Promise<unknown>}
	 */
	getlastblockheader() {
		return this.request('getlastblockheader').then(data => {
			return data
		})
	}

	/**
	 * Returns a blockheader from its hash
	 * @param {String} hash
	 * @returns {Promise<unknown>}
	 */
	getblockheaderbyhash(hash) {

		const params = {
			hash
		}

		return this.request('getblockheaderbyhash', params).then(data => {
			return data
		})
	}

	/**
	 *Returns the blockheader from given topoheight
	 * @param {Number} topoheight - { topoheight: 320000 }
	 * @returns {Promise<unknown>}
	 */
	getblockheaderbytopoheight(topoheight = 32000) {

		const params = {
			topoheight
		}

		return this.request('getblockheaderbytopoheight', params).then(data => {
			return data
		})
	}

	/**
	 * Returns the blockheader from given height
	 * @param {Number} height-
	 * @returns {Promise<unknown>}
	 */
	getblockheaderbyheight(height = 32000) {

		const params = {
			height
		}

		return this.request('getblockheaderbyheight', params).then(data => {
			return data
		})
	}

	/**
	 * Returns a block from its given hash
	 * @param {String} - hash
	 */
	getblock(hash) {

		const params = {
			hash
		}

		return this.request('getblock', params).then(data => {
			return data
		})
	}

	/**
		Returns a list of all the pending txhashes in the mempool
	 */
	gettxpool() {
		return this.request('gettxpool').then(data => {
			return data
		})
	}

	/**
		The method “getheight” returns the different heights of the blockchain. It is called without parameters.
		Returns the currently synced height and topoheight of the chain
	 */
	getheight() {
		return this.request(null, null, 'get', '/getheight').then(data => {
			return data
		})
	}
	/**
		The method “gettransactions” returns the transaction data for a list of transaction IDs in hex and JSON format.
		Returns the specified transactions from either the blockchain or mempool
	 */
	gettransactions(params) {
		return this.request(null, params, 'get', '/gettransactions').then(data => {
			return data
		})
	}

	// TODO DEBUG
	sendrawtransaction(params) {
		return this.request(null, params, 'get', '/sendrawtransaction').then(data => {
			return data
		})
	}

	// TODO DEBUG
	is_key_image_spent(params) {
		return this.request(null, params, 'get', '/is_key_image_spent').then(data => {
			return data
		})
	}
}

module.exports = Daemon