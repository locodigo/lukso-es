---
sidebar_label: 'Interactuar con Contratos'
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactuar con otros contratos

En esta guía aprenderemos a utilizar nuestro Perfil Universal para interactuar con cualquier otro contrato inteligente (como si utilizáramos una Cuenta de Propiedad Externa normal).

**Flujo de interacción**:

![Guía - Interactuar con otros contratos usando un Perfil Universal](/img/guides/lsp0/interact-with-contracts-using-universal-profile-flow.jpg)

## Introducción

Hemos visto en el ejemplo anterior como enviar LYX desde nuestro UP a través de la función [`execute(...)`](../../standards/smart-contracts/lsp0-erc725-account.md#execute).

Esta función ofrece un cuarto parámetro: `_data`, que proporciona mucha flexibilidad a la hora de interactuar desde nuestro UP. El parámetro `_data` es útil cuando el destinatario `_to` es un contrato inteligente.

Si quieres llamar a un contrato inteligente específico que fue desplegado en la red por el Perfil Universal, los parámetros de la función `execute(...)` serán los siguientes:

- `_operation`: `0` (para `CALL`).
- `_to`: la `dirección` del contrato inteligente con el que queremos interactuar.
- `_value_`: vacío (0).
- `_data`: el nombre de la función cifrada ABI y los argumentos, que se ejecutarán en la dirección del contrato `_to`.

Supongamos que un contrato inteligente `targetContract` fue desplegado en la red y queremos que nuestra UP llame a la función `myCoolFunction` en este contrato. Tendremos que

1. [cifrar-ABI](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-encodeabi) la llamada a la función con los parámetros que queramos pasar.
2. 2. Pasar el calldata codificado como argumento `_data` de la función `execute(...)`.

## Configuración

Para completar esta guía, necesitaremos

- una EOA con algunos LYX para las cuotas de gas y los [permisos] necesarios(../../standards/universal-profile/lsp6-key-manager.md#permissions) para la interacción.
- los contratos ABI `UniversalProfile` y `KeyManager` del paquete npm [`@lukso/lsp-smart-contracts`](../../tools/lsp-smart-contracts/getting-started.md).
- la dirección de nuestro Perfil Universal.
- la ABI `targetContract`.
- la dirección del Contrato Destino.

:::info

La EOA elegida necesita tener [**CALL Permission**](../../standards/universal-profile/lsp6-key-manager.md#permissions) junto con [**Allowed Calls**](../../standards/universal-profile/lsp6-key-manager.md#allowed-calls) o [**SUPER_CALL Permission**](../../standards/universal-profile/lsp6-key-manager.md#super-permissions)

:::

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

## Paso 1 - Crear las instancias de los contratos

El primer paso es crear instancias de nuestros contratos de Perfil Universal, Gestor de Claves y el Contrato de Destino.

- Crea una instancia de contrato de Perfil Universal a partir de `universalProfileAddress`.
- Obtén el `owner()` del Perfil Universal.
- Crea una instancia de contrato Gestor de Claves a partir del propietario del Perfil Universal.
- Crea una instancia de contrato de destino a partir de "targetContractAddress".

:::caution

Guarda el ABI del Contrato de Destino en un JSON separado e impórtalo en el archivo principal.  
Puedes compilar rápidamente y obtener el ABI de un contrato en [Remix IDE](https://remix.ethereum.org/).

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

import TargetContractABI from './TargetContractABI.json';

const web3 = new Web3('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...';
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);

// el Gestor de Claves es el propietario del Perfil Universal
// por lo que podemos llamar a la función owner() para obtener la dirección del Gestor de Claves
const owner = await universalProfile.methods.owner().call();
const keyManager = new web3.eth.Contract(KeyManager.abi, owner);

const targetContractAddress = '0x...';
const targetContract = new web3.eth.Contract(
  TargetContractABI,
  targetContractAddress,
);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ethers } from 'ethers';

import TargetContractABI from './TargetContractABI.json';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...';
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
  provider,
);

// el Gestor de Claves es el propietario del Perfil Universal
// por lo que podemos llamar a la función owner() para obtener la dirección del Gestor de Claves
const owner = await universalProfile.owner();
const keyManager = new ethers.Contract(owner, KeyManager.abi, provider);

const targetContractAddress = '0x...';
const targetContract = new ethers.Contract(
  targetContractAddress,
  TargetContractABI,
  provider,
);
```

  </TabItem>

</Tabs>

## Paso 2 - Cifrar los calldata

Esta es la parte fácil, necesitamos crear 2 calldata:

- El _primer calldata_ se ejecutará en el Contrato de destino.
- El _segundo calldata_ se ejecutará en el Perfil Universal y activará el _primer calldata_.

### Cifrar calldata del Contrato Destino

Cifrar los calldata que se ejecutarán en el Contrato Destino.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="calldata de Destino"
// 1. cifrar los calldata a ejecutar en el targetContract
// asumiendo que targetContract es una instancia de Contract
const targetCalldata = targetContract.methods
  .myCoolfunction('dummyParameter')
  .encodeABI();
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="calldata de Destino"
// 1. cifrar los calldata a ejecutar en el targetContract
// asumiendo que targetContract es una instancia de Contract
const targetCalldata = targetContract.interface.encodeFunctionData(
  'myCoolfunction',
  ['dummyParameter'],
);
```

  </TabItem>

</Tabs>

### Cifrar calldata de Perfil Universal

Cifrar el calldata que se ejecutará en el Perfil Universal. Estos calldata también activarán los calldata que se ejecutarán en el Contrato Destino.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="calldata del Perfil Universal"
const OPERATION_CALL = 0;

// 2. cifrar los calldata a ejecutar en el UP,
// pasando los calldata a ejecutar en el targetContract como 4º parámetro
const abiCalldata = await universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](OPERATION_CALL, targetContract.address, 0, targetCalldata).encodeABI();
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="calldata del Perfil Universal"
const OPERATION_CALL = 0;

// 2. cifrar los calldata a ejecutar en el UP,
// pasando los calldata a ejecutar en el targetContract como 4º parámetro
const abiCalldata = universalProfile.interface.encodeFunctionData('execute', [
  OPERATION_CALL,
  targetContract.address,
  0,
  targetCalldata,
]);
```

  </TabItem>

</Tabs>

## Paso 3 - Ejecutar a través del Gestor de Claves

### Cargar la EOA

Como en otras guías, un paso importante es cargar nuestra EOA que es un controlador para nuestro Perfil Universal. En este caso la dirección del controlador debe tener [**CALL Permission**](../../standards/universal-profile/lsp6-key-manager.md#permissions) junto con [**Allowed Calls**](../.. /standards/universal-profile/lsp6-key-manager.md#allowed-calls) o [**SUPER_CALL Permission**](../../standards/universal-profile/lsp6-key-manager.md#super-permissions) para que la transacción se realice correctamente.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Configura la EOA"
const PRIVATE_KEY = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Configura la EOA"
const PRIVATE_KEY = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(PRIVATE_KEY).connect(provider);
```

  </TabItem>

</Tabs>

### Enviar la ejecución de calldata

El paso final es pasar los calldata cifrados al Gestor de Claves. Como estamos llamando desde la dirección de un controlador de UP (con los [**permisos**] adecuados(../../standards/universal-profile/lsp6-key-manager.md#permissions)), el Gestor de Claves autorizará y ejecutará la transacción.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar transacción"
// 3. ejecutar a través del KeyManager, pasando el calldata del UP
await keyManager.methods['execute(bytes)'](abiCalldata).send({
  from: EOA.address,
  gasLimit: 300_000,
});
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar transacción"
// 3. ejecutar a través del KeyManager, pasando el calldata del UP
await keyManager.connect(EOA)['execute(bytes)'](abiCalldata);
```

  </TabItem>

</Tabs>

## Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Código final"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import TargetContractABI from './TargetContractABI.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...';
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);

// el Gestor de Claves es el propietario del Perfil Universal
// por lo que podemos llamar a la función owner() para obtener la dirección del Gestor de Claves
const owner = await universalProfile.methods.owner().call();
const keyManager = new web3.eth.Contract(KeyManager.abi, owner);

const targetContractAddress = '0x...';
const targetContract = new web3.eth.Contract(
  TargetContractABI,
  targetContractAddress,
);

// 1. cifrar los calldata a ejecutar en el targetContract
// asumiendo que targetContract es una instancia de Contract
const targetCalldata = targetContract.methods
  .myCoolfunction('dummyParameter')
  .encodeABI();

const OPERATION_CALL = 0;

//2. cifrar los calldata a ejecutar en el UP,
// pasando los calldata a ejecutar en el targetContract como 4º parámetro
let abiCalldata = await universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](OPERATION_CALL, targetContract.address, 0, targetCalldata).encodeABI();

const PRIVATE_KEY = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);

// 3. ejecutar a través del KeyManager, pasando el calldata del UP
await keyManager.methods['execute(bytes)'](abiCalldata).send({
  from: EOA.address,
  gasLimit: 300_000,
});
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Código final"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import TargetContractABI from './TargetContractABI.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...';
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
  provider,
);

// el Gestor de Claves es el propietario del Perfil Universal
// por lo que podemos llamar a la función owner() para obtener la dirección del Gestor de Claves
const owner = await universalProfile.owner();
const keyManager = new ethers.Contract(owner, KeyManager.abi, provider);

const targetContractAddress = '0x...';
const targetContract = new ethers.Contract(
  targetContractAddress,
  TargetContractABI,
  provider,
);

// 1. cifrar los calldata a ejecutar en el targetContract
// asumiendo que targetContract es una instancia de Contract
const targetCalldata = targetContract.interface.encodeFunctionData(
  'myCoolfunction',
  ['dummyParameter'],
);

const OPERATION_CALL = 0;

// 2. cifrar los calldata a ejecutar en el UP,
// pasando los calldata a ejecutar en el targetContract como 4º parámetro
let abiCalldata = universalProfile.interface.encodeFunctionData('execute', [
  OPERATION_CALL,
  targetContract.address,
  0,
  targetCalldata,
]);

const PRIVATE_KEY = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(PRIVATE_KEY).connect(provider);

// 3. ejecutar a través del KeyManager, pasando el calldata del UP
await keyManager.connect(EOA)['execute(bytes)'](abiCalldata);
```

  </TabItem>

</Tabs>
