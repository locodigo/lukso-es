---
sidebar_position: 1
---

# Primeros Pasos

:::caution
Este paquete se encuentra actualmente en las primeras fases de desarrollo. Utilízalo sólo con propósitos de prueba o experimentación.
:::

El paquete `@erc725/erc725.js` permite interactuar fácilmente con los esquemas ERC-725.

- repositorio GitHub: https://github.com/ERC725Alliance/erc725.js
- NPM: https://www.npmjs.com/package/@erc725/erc725.js

## Instalación

```bash
npm install @erc725/erc725.js
```

:::info

Si lo instalas en el backend, puede que necesites instalar también [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch).

:::

## Instanciación

```js
import { ERC725 } from '@erc725/erc725.js';
import Web3 from 'web3';

// Parte del esquema LSP3-UniversalProfile
// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md
const schemas = [
  {
    name: 'SupportedStandards:LSP3UniversalProfile',
    key: '0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38',
    keyType: 'Mapping',
    valueType: 'bytes',
    valueContent: '0xabe425d6',
  },
  {
    name: 'LSP3Profile',
    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    keyType: 'Singleton',
    valueType: 'bytes',
    valueContent: 'JSONURL',
  },
  {
    name: 'LSP1UniversalReceiverDelegate',
    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',
    keyType: 'Singleton',
    valueType: 'address',
    valueContent: 'Address',
  },
];

const address = '0x0c03fba782b07bcf810deb3b7f0595024a444f4e';
const RPC_URL = 'https://rpc.l16.lukso.network';
const config = {
  ipfsGateway: 'https://YOUR-IPFS-GATEWAY/ipfs/',
};

const erc725 = new ERC725(schemas, address, RPC_URL, config);
```

## Uso

```js
await erc725.getOwner();
// > '0x28D25E70819140daF65b724158D00c373D1a18ee'

await erc725.getData('SupportedStandards:LSP3UniversalProfile');
/**
{
  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6'
}
*/

await erc725.getData([
  'LSP3Profile',
  'SupportedStandards:LSP3UniversalProfile',
]);
/**
{
  LSP3Profile: {
    url: 'ipfs://QmXybv2LdJWscy1C6yRKUjvnaj6aqKktZX4g4xmz2nyYj2',
    hash: '0xb4f9d72e83bbe7e250ed9ec80332c493b7b3d73e0d72f7b2c7ab01c39216eb1a',
    hashFunction: 'keccak256(utf8)'
  },
  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6'
}
*/

await erc725.fetchData('LSP3Profile'); // descarga y verifica el JSON vinculado
/**
{
  LSP3Profile: {
    LSP3Profile: {
        nombre: 'frozeman',
        descripcion: 'El inventor del ERC725 y el ERC20...',
        links: [
            { title: 'Twitter', url: 'https://twitter.com/feindura' },
            { title: 'lukso.network', url: 'https://lukso.network' }
        ],
        ...
    }
  }
}
*/
```

:::tip Pruébalo
Puede ejecutar el fragmento de código en su navegador utilizando el [ejemplo StackBlitz](https://stackblitz.com/edit/erc725js-instantiation?devtoolsheight=66&file=index.js) correspondiente.

:::note
Siempre que puedas, deberías importar `ERC725` a través de la exportación con nombre. Sin embargo, actualmente también ofrecemos una exportación por defecto.

```javascript
import ERC725 from 'erc725.js';
```

:::

Una vez creada la instancia, sigue siendo posible cambiar la configuración a través de la propiedad de opciones.

```javascript
myERC725.options.schema = '<schema>' // modificar esquema
myERC725.options.address '<address>' // cambiar dirección
myERC725.options.ipfsGateway = '<url>' // utilizado para fetchData(), por defecto: 'https://cloudflare-ipfs.com/ipfs/'

// NOTA: ERC725.provider no se puede cambiar
```
