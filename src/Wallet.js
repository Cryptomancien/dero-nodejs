const http = require('http');

class Wallet {

	constructor(address = '127.0.0.1', port = '20209', network = 'mainnet') {
		this.address = address;
		this.port = port;
		this.network = network;
	}

	async request(method, params, verb = 'POST', path = '/json_rpc') {

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
				path: path,
				method: verb,
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

	getaddress() {
		return this.request('getaddress').then(data => {
			return data
		})
	}

	getbalance() {
		return this.request('getbalance').then(data => {
			return data
		})
	}

	/**
	 *	GET HEIGHT
	 */
	getheight() {
		return this.request('getheight').then(data => {
			return data
		})
	}

	/**
	 * 
	 *	option = {
	 *		destination
	 *	}
	 *
	 */
	transfer(options) {
		return this.request('transfer', options).then(data => {
			return data
		})
	}

	transfer_split() {

	}

	get_bulk_payments() {

	}

	query_key() {

	}

	make_integrated_address() {

	}

	split_integrated_address() {

	}

	get_transfer_by_txid() {

	}

	get_transfers() {

	}

}

module.exports = Wallet;