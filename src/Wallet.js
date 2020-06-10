const http = require('http');

class Wallet {
	/**
	 *
	 * @param {String} address
	 * @param {String} port
	 * Remember: port 20209 for mainnet 30306 for testnet
	 */
	constructor(address = '127.0.0.1', port = '20209') {
		this.address = address;
		this.port = port;
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

			data = JSON.stringify(data);

			const options = {
				hostname: this.address,
				port: this.port,
				path: path,
				method: verb,
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			};

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
	 *
	 * @returns {Promise<unknown>}
	 */
	getaddress() {
		return this.request('getaddress').then(data => {
			return data
		})
	}

	/**
	 * @param {Boolean} format
	 * @returns {Promise<unknown>}
	 */
	getbalance(format = false) {
		return this.request('getbalance').then(data => {


			let balance = data.result.balance.toLocaleString();
			let unlocked_balance = data.result.unlocked_balance.toLocaleString();

			data.formatNumber = {
				balance,
				unlocked_balance
			};

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
	 *	@param {Number} amount
	 *	@param {String} address
	 *	@param {Number} mixin
	 *	@param {String} payment_id
	 */
	transfer(amount, address, Mixin = 6, payment_id = '') {

		const params = {
			destinations :[
				{
					amount: amount ,
					address: address
				}
			],
			Mixin: 6,
			"unlock_time":0,
			"payment_id": payment_id,
			"get_tx_key": true,
			"priority":1.0,
			"do_not_relay": false,
			"get_tx_hex": true
		}

		//return new Promise(resolve => resolve(options))

		return this.request('transfer', params).then(data => {
			return data
		})
	}

	transfer_split() {

	}

	get_bulk_payments() {

	}

	/**
	 *
	 * @returns {Promise<unknown>}
	 */
	query_key() {
		return this.request('query_key', {key_type: 'view_key '}).then(data => {
			return data
		})
	}

	make_integrated_address() {

	}

	/**
	 *
	 * @param {String} integrated_address
	 * @returns {Promise<unknown>}
	 */
	split_integrated_address(integrated_address) {

		const params = {
			integrated_address
		}

		return this.request('split_integrated_address', params).then(data => {
			return data
		})
	}

	/**
	 *
	 * @param {String} txid
	 * @returns {Promise<unknown>}
	 */
	get_transfer_by_txid(txid) {

		const params = {
			txid
		}

		return this.request('get_transfer_by_txid', params).then(data => {
			return data
		})
	}

	/**
	 *
	 * @param {Boolean} In
	 * @param {Boolean} Out
	 * @param {Number} min_height
	 * @param {Number} max_height
	 */
	get_transfers(In = true, Out = true, min_height = 0, max_height = 0) {

		const params = {
			In,
			Out,
			min_height,
			max_height
		}

		return this.request('get_transfers', params).then(data => {
			return data
		})
	}
}

module.exports = Wallet;