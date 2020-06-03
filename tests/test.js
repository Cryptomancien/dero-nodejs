const Daemon = require('../src/Daemon')

const daemon = new Daemon

test('getblockcount', () => {

	daemon.getblockcount().then(data => {
		expect(data).toHaveProperty('result')
	})
});


test('get_info', () => {

	daemon.get_info().then(data => {
		expect(data).toHaveProperty('result')
	})
});