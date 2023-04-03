---
sidebar_label: 'Transferir un Activo Digital LSP7 (Token)'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear un Activo Digital LSP7 (Token)

Esta guía te enseñará cómo transferir un [Activo Digital LSP7](../../standards/nft-2.0/LSP7-Digital-Asset.md) existente desde un [Perfil Universal](../../standards/universal-profile/lsp0-erc725account.md) controlado por un [Gestor de Claves](../../standards//universal-profile/lsp6-key-manager.md) hacia otro Perfil Universal.

## Transferir tokens a otro Perfil Universal

El siguiente fragmento de código muestra cómo transferir 15 tokens desde tu Perfil Universal hacia otro Perfil Universal.

Asegúrate de tener instaladas las siguientes dependencias:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Instala las dependencias"
npm install web3 @lukso/lsp-smart-contracts
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instala las dependencias"
npm install ethers @lukso/lsp-smart-contracts
```

  </TabItem>

</Tabs>

### Paso 1 - Configurar importaciones y constantes

En este punto necesitarás una clave privada para poder transferir algunos tokens, así como la _dirección del contrato de token_ de `LSP7Mintable` y la _dirección del Perfil Universal_ que tiene algunos tokens.
Importaremos `LSP7Mintable`, `UniversalProfile`, `KeyManager` para obtener los _ABIs_ de los contratos con los que interactuaremos.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myUniversalProfileAddress = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const account = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myUniversalProfileAddress = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

### Paso 2 - Instanciar contratos

En este punto, los contratos `LSP7Mintable`, `UniversalProfile`, `KeyManager` están siendo preparados para las siguientes interacciones. Construye una instancia de un contrato, utilizando _contract ABI_ y _contract address_.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
const myUniversalProfile = new web3.eth.Contract(UniversalProfile.abi, myUniversalProfileAddress);

const owner = await myUniversalProfile.methods.owner();
const myKeyManager = new web3.eth.Contract(KeyManager.abi, owner);

const myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```javascript
const myUniversalProfile = new ethers.Contract(myUniversalProfileAddress, UniversalProfile.abi);

const owner = await myUniversalProfile.methods.owner();
const myKeyManager = new ethers.Contract(owner, KeyManager.abi);

const myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>

### Paso 3 - Preparar los calldatas

Ahora necesitamos preparar los calldatas que utilizaremos para transferir tokens de un Perfil Universal a otro. El primer calldata es una transferencia de tokens. El segundo calldata es una interacción del Perfil Universal con el contrato de tokens.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
// 1. generar los calldata para transferir los tokens
const tokenCalldata = myToken.methods
  .transfer(myUniversalProfileAddress, '<receiver-up-address>', 15, false, '0x')
  .encodeABI();

// 2. generar calldata para que Universal Profile ejecute la transferencia de tokens en el contrato de tokens
const upCalldata = myUniversalProfile.methods['execute(uint256,address,uint256,bytes)'](
  0, // operation 0 CALL
  myToken._address,
  0, // 0  LYX enviados
  tokenCalldata,
).encodeABI();
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
// 1. generar los calldata para transferir los tokens
const tokenCalldata = myToken.interface.encodeFunctionData('transfer', [
  myUniversalProfileAddress,
  '<receiver-up-address>',
  15,
  false,
  '0x',
]);

// 2. generar calldata para que Universal Profile ejecute la transferencia de tokens en el contrato de tokens
const upCalldata = myUniversalProfile.interface.encodeFunctionData('execute', [
  0, // operation 0 CALL
  myToken._address,
  0, // 0  LYX enviados
  tokenCalldata,
]);
```

  </TabItem>

</Tabs>

### Paso 4 - Enviar transacción

Por último, enviamos la transacción y transferimos los tokens de un Perfil Universal a otro.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
// 3. ejecutar a través del KeyManager
await myKeyManager.methods['execute(bytes)'](upCalldata).send({
  from: myEOA,
  gas: 5_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
// 3. ejecutar a través del KeyManager
await myKeyManager.connect(myEOA)['execute(bytes)'](upCalldata);
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myUniversalProfileAddress = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const account = web3.eth.accounts.wallet.add(privateKey);

const myUniversalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  myUniversalProfileAddress,
);

const owner = await myUniversalProfile.methods.owner();
const myKeyManager = new web3.eth.Contract(KeyManager.abi, owner);

const myToken = new web3.eth.Contract(LSP7Mintable.abi, myTokenAddress);

// 1. generar los calldata para transferir los tokens
const tokenCalldata = myToken.methods
  .transfer(myUniversalProfileAddress, '<receiver-up-address>', 15, false, '0x')
  .encodeABI();

// 2. generar calldata para que Universal Profile ejecute la transferencia de tokens en el contrato de tokens
const upCalldata = myUniversalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](
  0, // operation 0 CALL
  myToken._address,
  0, // 0  LYX enviados
  tokenCalldata,
).encodeABI();

// 3. ejecutar a través del KeyManager
await myKeyManager.methods['execute(bytes)'](upCalldata).send({
  from: myEOA,
  gas: 5_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const privateKey = '0x...';
const myUniversalProfileAddress = '0x...';
const myTokenAddress = '0x...';

// configura tu EOA
const myEOA = new ethers.Wallet(privateKey).connect(provider);

const myUniversalProfile = new ethers.Contract(
  myUniversalProfileAddress,
  UniversalProfile.abi,
);

const owner = await myUniversalProfile.methods.owner();
const myKeyManager = new ethers.Contract(owner, KeyManager.abi);

const myToken = new ethers.Contract(myTokenAddress, LSP7Mintable.abi);

// 1. generar los calldata para transferir los tokens
const tokenCalldata = myToken.interface.encodeFunctionData('transfer', [
  myUniversalProfileAddress,
  '<receiver-up-address>',
  15,
  false,
  '0x',
]);

// 2. generar calldata para que Universal Profile ejecute la transferencia de tokens en el contrato de tokens
const upCalldata = myUniversalProfile.interface.encodeFunctionData('execute', [
  0, // operation 0 CALL
  myToken._address,
  0, // 0  LYX enviados
  tokenCalldata,
]);

// 3. ejecutar a través del KeyManager
await myKeyManager.connect(myEOA)['execute(bytes)'](upCalldata);
```

  </TabItem>

</Tabs>
