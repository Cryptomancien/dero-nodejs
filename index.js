const Daemon = require('./src/Daemon')

var d = new Daemon

// 3e7eadbfc1244e7ccbd0d232cb23c78de77de7aaf60b4991f82a7748c482309c
d.is_key_image_spent({
	key_images: '7ab535bac7d0900cc4b71362e7a303'
}).then((data) => {
	console.log(data)
})

// exports.Daemon = require('./src/Daemon')




/*
d.getblocktemplate({ wallet_address: 'dERojRT5ikiV93iUavzr29HyYgqMMPBUR6AAiRBCSawLLZUSpzWenxEe47u8N2NBmRRDJbU8dYxbWY7D9Xj3Xs2P6cLiu53NuR', "reserve_size": 10 }).then((data) => {
	console.log(data)
})
*/