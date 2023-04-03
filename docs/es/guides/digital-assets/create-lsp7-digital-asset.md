---
sidebar_label: 'Crear un Activo Digital LSP7 (Token)'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear un Activo Digital LSP7 (Token)

Esta guía te enseñará a crear un [Contrato de Activos Digitales LSP7].(../../standards/nft-2.0/LSP7-Digital-Asset.md).

## Desplegar un contrato de Activos Digitales LSP7

Utilizaremos una implementación específica de LSP7, denominada `LSP7Mintable`. Permite al implementador del contrato acuñar nuevos tokens.

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

### Paso 1 - Configuración de importaciones y constantes

En este punto necesitarás una clave privada para poder desplegar un contrato `LSP7Mintable`.
Importaremos `LSP7Mintable` para obtener el _ABI_ y el _bytecode_ del contrato que será desplegado.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

// inicializa tu EOA
const privateKey = '0x...';
const account = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

// configura tu EOA
const privateKey = '0x...';
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

### Paso 2 - Instanciar contratos

En este punto, el contrato `LPS7Mintable` se está preparando para su implementación.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
const myToken = new web3.eth.Contract(LSP7Mintable.abi, {
  gas: 5_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
const lsp7Factory = new ethers.ContractFactory(
  LSP7Mintable.abi,
  LSP7Mintable.bytecode,
);
```

  </TabItem>

</Tabs>

### Paso 3 - Enviar la transacción

Por último, despliega el contrato.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript title="Implementación del contrato de Activos Digitales LSP7"
await myToken.deploy({
    data: LSP7Mintable.bytecode,
    arguments: [
      'My LSP7 Token', // nombre del token
      'LSP7', // símblo del token
      account.address, // nuevo propietario, que acuñará posteriormente
      false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)
    ],
  })
  .send({ from: account.address });
```
<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript title="Implementación del contrato de Activos Digitales LSP7"
const myToken = await lsp7Factory.connect(myEOA).deploy(
  'My LSP7 Token', // nombre del token
  'LSP7', // símbolo del token
  myEOA.address, // nuevo propietario, que acuñará posteriormente
  false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)
);
```

  </TabItem>

</Tabs>

### Código final

<!-- prettier-ignore-start -->

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

// inicializa tu EOA
const privateKey = '0x...';
const account = web3.eth.accounts.wallet.add(privateKey);

// create a contract instance
const myToken = new web3.eth.Contract(LSP7Mintable.abi, {
  gas: 5_000_000,
  gasPrice: '1000000000',
});

// desplegar el contrato de token
await myToken.deploy({
    data: LSP7Mintable.bytecode,
    arguments: [
      'My LSP7 Token', // nombre del token
      'LSP7', // símbolo del token
      account.address, // nuevo propietario, que acuñará posteriormente
      false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)
    ],
  })
  .send({ from: account.address });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

// configura tu EOA
const privateKey = '0x...';
const myEOA = new ethers.Wallet(privateKey).connect(provider);

// create an instance of the token contract
const lsp7Factory = new ethers.ContractFactory(
  LSP7Mintable.abi,
  LSP7Mintable.bytecode,
);

// desplegar el contrato de token
const myToken = await lsp7Factory.connect(myEOA).deploy(
  'My LSP7 Token', // nombre del token
  'LSP7', // símbolo del token
  myEOA.address, // nuevo propietario, que acuñará posteriormente
  false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)
);
```

  </TabItem>

</Tabs>

<!-- prettier-ignore-end -->
