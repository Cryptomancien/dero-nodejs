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
