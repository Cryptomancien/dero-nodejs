# Dero Nodejs 

Module to use the Dero daemon RPC

<a href="https://git.dero.io/gfox/DeroProject_Documentation/src/branch/master/DEV-1.md">More info</a> 

## Installation

``
npm install dero-nodejs
``

## Usage

In a first terminal launch the daemon

In a second terminal launch the wallet with --rpc-server

### Daemon

```js
const dero_nodejs = require('dero-nodejs')
const Daemon = dero_nodejs.Daemon

const daemon = new Daemon('127.0.0.1', '20206')
```

#### Methods

##### getblockcount
```js
daemon.getblockcount().then(data => {
    console.log(data)
})
/*
Response:
{ 
    id: '1', 
    jsonrpc: '2.0', 
    result: { 
        count: 3057, 
        status: 'OK' 
    } 
}
*/
```
##### get_info
```js
daemon.get_info().then(data => {
    console.log(data)
})
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    alt_blocks_count: 0,
    difficulty: 1,
    grey_peerlist_size: 0,
    height: 13357,
    stableheight: 13349,
    topoheight: 13357,
    averageblocktime50: 0.06,
    incoming_connections_count: 0,
    outgoing_connections_count: 0,
    target: 12,
    target_height: 0,
    testnet: false,
    top_block_hash: 'f2689d8295600ab7ccaee8813504118bd243d15d74119ef9662b6a86d2ff43c9',
    tx_count: 0,
    tx_pool_size: 0,
    dynamic_fee_per_kb: 1000000000,
    total_supply: 3739990,
    median_block_size: 1310720,
    white_peerlist_size: 0,
    version: '2.2.0-5.Atlantis.Astrobwt+07032020',
    status: 'OK'
  }
}
*/
```
##### getblocktemplate
```js
d.getblocktemplate('dERojUsrUxg7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyd33XKM', 10).then(data => {
    console.log(data)
})
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    blocktemplate_blob: '010186a6f9f6059bfc24cd000000000000000000000000000000000000000000000000000000000000000002fb8d0101ffbf8d01010002a8de526e19161b65220d3c36dc01b7c108bd66b3289e86697ee192552af1572821017d5155288aed82a3fb1d57d2bb6c851f
a7c4d4fa9a5230c16315ff6b69f86100000000000000000000000000000000000000000000000000000000000000000000016836dd528cb6b5c0cccc8380c5c77ec1238eabb510468bc2afc99b8e6583bf3900',
    blockhashing_blob: '01010653de5e0053fd0fe0391f810f0ae501a7be7f30f0f879c59a4b51b267fb6f2b61724348f79bfc24cd000000000000000000000000000000000000000000000000000000000000000000',
    expected_reward: 0,
    difficulty: 1,
    height: 18111,
    prev_hash: '6836dd528cb6b5c0cccc8380c5c77ec1238eabb510468bc2afc99b8e6583bf39',
    reserved_offset: 43,
    epoch: 1591628562,
    status: 'OK'
  }
}
*/
```
##### getlastblockheader
```js
d.getlastblockheader().then(data => console.log(data))
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    block_header: {
      depth: 0,
      difficulty: '1',
      hash: '9a1beb190a514e7228cb61fe83f3812b9db5054aa48935a2a07c7179ba4caf69',
      height: 21927,
      topoheight: 21927,
      major_version: 1,
      minor_version: 1,
      nonce: 1873444292,
      orphan_status: false,
      syncblock: false,
      txcount: 0,
      reward: 30084946041699,
      tips: [Array],
      timestamp: 1530080646
    },
    status: 'OK'
  }
}
*/
```
##### getblockheaderbyhash
```js 
d.getblockheaderbyhash('63678e7807cefa25b718c11cfbaf0567d4373cadb3de3265d8014046274bdcdf').then(data => console.log(data))
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    block_header: {
      depth: 705,
      difficulty: '1',
      hash: '63678e7807cefa25b718c11cfbaf0567d4373cadb3de3265d8014046274bdcdf',
      height: 24201,
      topoheight: 24201,
      major_version: 1,
      minor_version: 1,
      nonce: 4103597245,
      orphan_status: false,
      syncblock: true,
      txcount: 0,
      reward: 29954744314228,
      tips: [Array],
      timestamp: 1530080874
    },
    status: 'OK'
  }
}
*/
```

##### getblockheaderbytopoheight
```js
d.getblockheaderbytopoheight(12000).then(data => console.log(data))
/*
Responsive:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    block_header: {
      depth: 18817,
      difficulty: '1',
      hash: '9477c7e449ecb2c0ae7ae983bdbd58db5c8e62a20a0a12251ad33b439759510f',
      height: 12000,
      topoheight: 12000,
      major_version: 1,
      minor_version: 1,
      nonce: 790296397,
      orphan_status: false,
      syncblock: true,
      txcount: 0,
      reward: 30659963690322,
      tips: [Array],
      timestamp: 1530079724
    },
    status: 'OK'
  }
}
*/
```

##### getblockheaderbyheight
```js
d.getblockheaderbyheight(12000).then(data => console.log(data))
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    block_header: {
      depth: 22991,
      difficulty: '1',
      hash: '9477c7e449ecb2c0ae7ae983bdbd58db5c8e62a20a0a12251ad33b439759510f',
      height: 12000,
      topoheight: 12000,
      major_version: 1,
      minor_version: 1,
      nonce: 790296397,
      orphan_status: false,
      syncblock: true,
      txcount: 0,
      reward: 30659963690322,
      tips: [Array],
      timestamp: 1530079724
    },
    status: 'OK'
  }
}

*/
```

##### getblock
```js 
d.getblock('9477c7e449ecb2c0ae7ae983bdbd58db5c8e62a20a0a12251ad33b439759510f').then(data => console.log(data))
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    blob: '0101ecd3ccd9054df71a2f0000000000000000000000000000000000000000000000000000000000000000029c5e01ffe05d01d2bafaa1a9fc0602aff30c4232281d2ac1c574314419773194f6fcc6898d88e90c186be34520522b2b01c9ce6b58fd2815851f8a80d8fd2fab304e7535
effb5bfcd1b8e634b4765d874d0208000000000380e083000000000000000000000000000000000000000000000000000000000000000000016adf072a5cb255c324feb9d628e9742d17bf94a3855da70f881791884eaff9a000',
    json: '{"major_version":1,"minor_version":1,"timestamp":1530079724,"nonce":790296397,"miner_tx":{"version":2,"unlock_time":12060,"Vin":[{"Height":12000}],"Vout":[{"Amount":30659963690322,"Target":{"Key":"aff30c4232281d2ac1c57431441
9773194f6fcc6898d88e90c186be34520522b"}}],"Extra":"AcnOa1j9KBWFH4qA2P0vqzBOdTXv+1v80bjmNLR2XYdNAggAAAAAA4Dggw==","RctSignature":{"Message":"0000000000000000000000000000000000000000000000000000000000000000","MixRing":null,"ECdhInfo":nul
l,"OutPk":null,"Txid":"0000000000000000000000000000000000000000000000000000000000000000","BulletSigs":null,"MlsagSigs":null}},"tips":["6adf072a5cb255c324feb9d628e9742d17bf94a3855da70f881791884eaff9a0"],"tx_hashes":null}',
    block_header: {
      depth: 23586,
      difficulty: '1',
      hash: '9477c7e449ecb2c0ae7ae983bdbd58db5c8e62a20a0a12251ad33b439759510f',
      height: 12000,
      topoheight: 12000,
      major_version: 1,
      minor_version: 1,
      nonce: 790296397,
      orphan_status: false,
      syncblock: true,
      txcount: 0,
      reward: 30659963690322,
      tips: [Array],
      timestamp: 1530079724
    },
    status: 'OK'
  }
}

*/
```

##### gettxpool
```js
d.gettxpool().then(data => console.log(data))
/*
Response:
{ id: '1', jsonrpc: '2.0', result: { status: 'OK' } }
*/
```

##### getheight
```js
d.getheight().then(data => console.log(data))
/*
Response:
{ height: 42200, stableheight: 42192, topoheight: 42200, status: 'OK' }
*/
```

##### gettransactions
```js
d.gettransactions({
    txs_hashes: [
        'db408453b56de5e9973ce4b0fd46edd6b0460437602f84e2bd7861c2a0ca4468',
        '0c237ebf3daaab36acde2cfbbad31e5d5435a114d691abeaf2b407d3c03560ac'
    ]
}).then(data => console.log(data))
```

- - - 

### Wallet

#### Methods

##### getaddress
```js
wallet.getaddress().then(data => console.log(data))
/*
Response:
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    address: 'dETom4Mu5yJ7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyeRQGsq'
  }
}

*/
```

##### getbalance
```js 
wallet.getbalance().then(data => console.log(data))
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: { balance: 288855164418785, unlocked_balance: 148105867196468 },
  formatNumber: {
    balance: '288 855 164 418 785',
    unlocked_balance: '148 105 867 196 468'
  }
}
*/
```

##### getheight
```js
wallet.getheight().then(data => console.log(data))
/*
Response
{ id: '1', jsonrpc: '2.0', result: { height: 124 } }
*/
```

##### transfer
```js
wallet.transfer(2, 'dEToXZ99LNGgQxmhdi4whWT7nUinyj23Y6kr6hdughGQTKyq8fMbwYt1142TsJziKzdsTgscWyW1t3yPf7sbd8zg2puBKBmNxX', 6, '')
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    fee: 4500000000,
    tx_key: '09df33aaa532af88ee08c68b6cad5cd904344eebd6ea4cc6cd0c9e5bfff18d0b',
    tx_hash: '5891d08f48c7e700d5f4f988d855a4f78e160c30f998dac5122d917b41b6663a',
    tx_blob: '02000102000612022733021ddb0d18be85d042615df810db499ffa5c82b1629d83d2ff2c5b4a5b1d93193ec6020002921add59cd099d954901c5c2b66dd452c4d345981877878a5d3142f5a07bc69500021312b971a7b57eb4e7c8520085e7a69a2db158981743372505bf737b601
400f8440189b7e9032a3d31d315a3d80b9e50af0fc7947e8dbf85e9ef97069584cc5eb3f402210013b2e1aa5559468c31cd4ba686a1fb8ad08b7b38216ddc5cb7716f5fba8b75f2'
  }
}

*/
```

##### make_integrated_address
```js
wallet.make_integrated_address('533f1a4dc4f0a15095d384fafab07187222b13c9f18c02e6a289e36a5d6a5049').then(data => console.log(data))
/*
Responsive
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    integrated_address: 'dETinEd8Ah67t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLNaGjs3HatWKMhFQzqM5NZXfWWiv3PNZKBNQRHYm2A4FKi52fv5veZBk',
    payment_id: '533f1a4dc4f0a15095d384fafab07187222b13c9f18c02e6a289e36a5d6a5049'
  }
}
*/
```
##### get_transfer_by_txid
```js
wallet.get_transfer_by_txid('eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4').then(data => console.log(data))
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    payments: {
      tx_hash: 'eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4',
      block_height: 25,
      amount: 2345617349393,
      unlock_time: 0,
      destinations: null,
      type: 'in'
    }
  }
}
*/
```

##### split_integrated_address
```js
wallet.split_integrated_address('dETinEd8Ah67t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLNaGjs3HatWKMhFQzqM5NZXfWWiv3PNZKBNQRHYm2A4FKi52fv5veZBk').then(data => console.log(data))
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    standard_address: 'dETom4Mu5yJ7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyeRQGsq',
    payment_id: '533f1a4dc4f0a15095d384fafab07187222b13c9f18c02e6a289e36a5d6a5049'
  }
}
*/
```

##### get_transfer_by_txid
```js
wallet.get_transfer_by_txid('eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4').then(data => console.log(data))
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    payments: {
      tx_hash: 'eddc10d9c10a70a6a2538327bfa8b57f8faa29113d9ed55ae04306fcb695b6e4',
      block_height: 25,
      amount: 2345617349393,
      unlock_time: 0,
      destinations: null,
      type: 'in'
    }
  }
}
*/
```

##### get_transfers
```js
wallet.get_transfers().then(data => console.log(data))
/*
Response
{
  id: '1',
  jsonrpc: '2.0',
  result: {
    in: [
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      ... 113 more items
    ],
    out: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
*/
```