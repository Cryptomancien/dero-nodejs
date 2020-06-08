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

