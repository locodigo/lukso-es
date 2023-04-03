---
sidebar_label: 'Acuñar un Activo Digital LSP7 (Token)'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear un Adtivo Digital LSP7 (Token)

Esta guía te enseñará cómo acuñar algunos tokens [Activo Digital LSP7](../../standards/nft-2.0/LSP7-Digital-Asset.md) a tu [Pefil Universal](../../standards/universal-profile/lsp0-erc725account.md).

## Acuñar tokens para tu Perfil Universal

El siguiente fragmento de código ilustra cómo acuñar 100 tokens con tu Perfil Universal como beneficiario.

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Install the dependencies"
npm install web3 @lukso/lsp-smart-contracts
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instala la dependencias"
npm install ethers @lukso/lsp-smart-contracts
```

  </TabItem>

</Tabs>

### Paso 1 - Configurar importaciones y constantes

En este punto necesitarás una clave privada para poder acuñar algunos tokens así como la _dirección del contrato del token_ `LSP7Mintable`.
Importaremos `LSP7Mintable` para obtener el _ABI_ del contrato con el que interactuaremos.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const account = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

### Paso 2 - Instanciar contratos

En este punto, el contrato `LPS7Mintable` está siendo preparado para la siguiente intercación. Construimos una instancia de un contrato, utilizando _contract ABI_ y _contract address_.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
const myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
const myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);
```

  </TabItem>

</Tabs>

### Paso 3 - Enviar transacción

Por último, enviamos la transacción y acuñamos algunos tokens al Perfil Universal de tu elección.

:::warning

El contrato que estamos utilizando como ejemplo en esta guía permite acuñar Activos Digitales **sólo al propietario** del contrato. Pueden existir contratos que no tengan este _requisito_.

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
await myToken.methods.mint('<up-address>', 100, false, '0x').send({ from: myEOA });
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const account = web3.eth.accounts.wallet.add(privateKey);

const myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);

await myToken.methods.mint('<up-address>', 100, false, '0x').send({ from: myEOA });
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const myEOA = new ethers.Wallet(privateKey).connect(provider);

const myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);

await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');
```

  </TabItem>

</Tabs>
