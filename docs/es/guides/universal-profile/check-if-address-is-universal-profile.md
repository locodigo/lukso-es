---
sidebar_label: 'Comprobar si una dirección es un UP'
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ¿Cómo comprobar si una dirección es de un Perfil Universal?

:::info

Es posible que quieras leer primero la página [Detección estándar](../../standards/standard-detection.md).

:::

Para comprobar si una dirección es un [Perfil Universal](../../standards/universal-profile/introduction.md) necesitamos realizar 3 verificaciones:

## Configuración

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial:

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

## Paso 1 - Comprobar el formato de la dirección

Esta primera prueba básica se puede realizar mediante una expresión regular o una función de una librería de terceros. Por ejemplo, así es como podemos conseguirlo utilizando Web3.js [`isAddress`](https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html#isaddress):

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```javascript
import { isAddress } from 'web3-utils';

if (!isAddress(address)) {
  throw new Error('Dirección no válida');
}
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript
import { isAddress } from 'ethers';

if (!isAddress(address)) {
  throw new Error('Dirección no válida');
}
```

  </TabItem>

</Tabs>

## Paso 2 - Comprobar si el contrato soporta la interfaz `LSP0ERC725Account` usando ERC165

Esta es la siguiente verificación que asegura que tratamos con un contrato inteligente que soporta la interfaz `LSP0ERC725Account` ([EIP-165](https://eips.ethereum.org/EIPS/eip-165)). Para ello tenemos que crear una instancia del contrato `universalProfile` y llamar al método `supportsInterface(...)`.

:::info

Los Perfiles Universales heredan [ERC165](https://eips.ethereum.org/EIPS/eip-165), por lo que al crear una instancia del contrato de Perfil Universal se tiene acceso al método `supportsInterface(...)`.

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...'; // La dirección del contrato que estás examinando
const unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);

const supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();
// true o false -> si es false, esta dirección no es un Perfil Universal.
if (!supportsLSP0Interface) {
  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');

const universalProfileAddress = '0x...'; // La dirección del contrato que estás examinando
const unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);

const supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);
// true o false -> si es false, esta dirección no es un Perfil Universal.
if (!supportsLSP0Interface) {
  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>

## Paso 3 - Comprobar el estándar soportado

Por último, pero no menos importante, debemos comprobar el estándar `LSP3UniversalProfile`. Para ello debemos llamar a `getData` con la clave `SupportedStandards:LSP3UniversalProfile`.

:::info

Los Perfiles Universales heredan [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y), por lo que al crear una instancia del contrato de Perfil Universal se tiene acceso al método `getData(..)`.

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const universalProfileAddress = "0x..."; // La dirección del contrato que estás examinando
const unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);

const supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();

if (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {
  throw new Error('La dirección no es compatible con el estándar LSP3UniversalProfile');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');

const universalProfileAddress = '0x...'; // La dirección del contrato que estás examinando
const unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);

const supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);

if (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {
  throw new Error('La dirección no es compatible con el estándar LSP3UniversalProfile');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>

## Final Code

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

if (!web3.utils.isAddress(address)) {
  throw new Error('Dirección no válida');
}

// We assume that the contract is a Universal Profile
const universalProfileAddress = '0x...'; // La dirección del contrato que estás examinando
const unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);

const supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();
// true o false -> si es false, esta dirección no es un Perfil Universal.
if (!supportsLSP0Interface) {
  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');
}

const supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();

if (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {
  throw new Error('La dirección no es compatible con el estándar LSP3UniversalProfile');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';
import { isAddress, ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');

if (!isAddress(address)) {
  throw new Error('Dirección no válida');
}

// We assume that the contract is a Universal Profile
const universalProfileAddress = '0x...'; // La dirección del contrato que estás examinando
const unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);

const supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);
// true o false -> si es false, esta dirección no es un Perfil Universal.
if (!supportsLSP0Interface) {
  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');
}

const supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);

if (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {
  throw new Error('La dirección no es compatible con el estándar LSP3UniversalProfile');
}
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>
