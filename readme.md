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