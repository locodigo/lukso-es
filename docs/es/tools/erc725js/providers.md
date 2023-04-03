---
sidebar_position: 3
---

# Proveedores

El proveedor mediante el cual `@erc725/erc725.js` solicitará los datos de la blockchain se establece en la instanciación de la clase a través del objeto de configuración.

Se soportan los siguientes tipos de proveedores:

## URL RPC

Se puede pasar una URL RPC al instanciar la clase `ERC725`.

```javascript
import ERC725 from '@erc725/erc725.js';

const RPC_URL = 'https://rpc.l16.lukso.network';

const erc725 = new ERC725([], '0x...', RPC_URL);
```

## Ethereum (proveedor inyectado desde la extensión)

```javascript
import ERC725 from '@erc725/erc725.js';

const ethereumProvider = window.ethereum;

const erc725 = new ERC725([], '0x...', ethereumProvider);
```

## Web3

El siguiente fragmento de código utilizará el proveedor web3 disponible en web3.providers de la librería `web3` correspondiente.

:::caution Advertencia

Los proveedores Web3.js están obsoletos. Por favor, proporciona una URL RPC o un proveedor Ethereum inyectado en su lugar.

:::

El siguiente fragmento de código utilizará el proveedor web3 disponible en web3.providers de la librería `web3` correspondiente.

```javascript
import Web3 from 'web3';
import ERC725 from '@erc725/erc725.js';

const web3provider = new Web3(
  new Web3.providers.HttpProvider('https://rpc.l16.lukso.network'),
);

const erc725 = new ERC725([], '0x...', web3provider);
```
