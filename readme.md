# Dero Nodejs 

## Installation

``
npm install dero-nodejs
``

## Usage

### Daemon

```js
import {Daemon} from 'dero-nodejs'
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
d.getblocktemplate({
    wallet_address: 'dERojUsrUxg7t3BujwkWUj4DYACZNNByEL9vVbykjigkS6HmSxFfL9zeVwXU7uW3qnbGkrDwNoqgQFhBJH5KwjLN8YCyd33XKM',
    reserve_size: 10
}).then(data => {
    console.log(data)
})

/*
Response
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
d.getblockheaderbyhash({
    hash: '63678e7807cefa25b718c11cfbaf0567d4373cadb3de3265d8014046274bdcdf'
}).then(data => console.log(data))
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
d.getblockheaderbytopoheight({
    topoheight: 12000
}).then(data => console.log(data))
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
d.getblockheaderbyheight({
    height: 12000
}).then(data => console.log(data))
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
d.getblock({
    hash: '9477c7e449ecb2c0ae7ae983bdbd58db5c8e62a20a0a12251ad33b439759510f'
}).then(data => console.log(data))
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