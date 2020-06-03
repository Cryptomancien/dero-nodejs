const http = require('http');

class Daemon {

	constructor(address = '127.0.0.1', port = '30309', network = 'mainnet') {
		this.address = address;
		this.port = port;
		this.network = network;
	}

	async request(method, params) {

		return new Promise((resolve, reject) => {

			let data = {
				"jsonrpc": "2.0",
				"id": "1",
				"method": method
			};

			if (params) {
				data.params = params;
				// console.log(data)
			}

			data = JSON.stringify(data)

			const options = {
				hostname: this.address,
				port: this.port,
				path: '/json_rpc',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			}

			let rawData = '';

			const req = http.request(options, (res) => {
			
				res.on('data', (d) => {
					//process.stdout.write(d)
					rawData += d;
				});

				res.on('end', () => {
					try	{
						const parsedData = JSON.parse(rawData);
						resolve(parsedData);
					} 
					catch (error) {
						reject(error)
					}
				});
			});

			req.write(data);
			req.end();
		})
	}

	/**
		Returns the currently synced height of the chain
	 */
	getblockcount() {
		return this.request('getblockcount').then(data => {
			return data
		})
	}

	/**
		Returns various info about the daemon and network
	 */
	get_info() {
		return this.request('get_info').then(data => {
			return data
		})
	}

	/**
		Return a block template (used for mining a block)
		@param {Object} - {wallet_address: <your dero address>, reserve_size: 10}
	 */
	getblocktemplate(params) {
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
		Returns the latest blockheader of the currently synced height
	 */
	getlastblockheader() {
		return this.request('getlastblockheader').then(data => {
			return data
		})
	}

	/**
		Returns a blockheader from its hash
		@param {Object} - {hash: <your hash>}
	 */
	getblockheaderbyhash(params) {
		return this.request('getblockheaderbyhash', params).then(data => {
			return data
		})
	}

	/**
		Returns the blockheader from given topoheight
		@param {Object} - { topoheight: 320000 }
	 */
	getblockheaderbytopoheight(params) {
		return this.request('getblockheaderbytopoheight', params).then(data => {
			return data
		})
	}

	/**
		Returns the blockheader from given height
		@param {Object} - { height: 320000 }
	 */
	getblockheaderbyheight(params) {
		return this.request('getblockheaderbyheight', params).then(data => {
			return data
		})
	}

	/**
		Returns a block from its given hash
		@param {Object} - { hash: <your hash> }
	 */
	getblock(params) {
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

	 */
	getheight() {
		return this.request('getheight').then(data => {
			return data
		})
	}

	// TODO DEBUG

	gettransactions() {
		return this.request('gettransactions').then(data => {
			return data
		})
	}

	// TODO DEBUG
	sendrawtransaction() {
		return this.request('sendrawtransaction').then(data => {
			return data
		})
	}

	// TODO DEBUG
	is_key_image_spent() {
		return this.request('is_key_image_spent').then(data => {
			return data
		})
	}
}

module.exports = Daemon