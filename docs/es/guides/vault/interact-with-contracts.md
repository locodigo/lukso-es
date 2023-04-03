---
sidebar_label: 'Interactuar con Contratos'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactuar con Contratos

Al igual que en nuestra **[guía anterior](./edit-vault-data.md)** sobre la configuración de datos en la Bóveda, en esta guía aprenderemos a **interactuar con otros contratos** a través de la función de ejecución de la Bóveda.

:::info

Esta guía también es muy similar a la guía: [**Interactuar con un contrato utilizando un Perfil Universal**](../universal-profile/interact-with-contracts.md).

:::

**Flujo de interacción**:

![Guía - Interactuar con otros contratos usando una Bóveda](/img/guides/lsp9/interact-with-contract-using-vaults-flow.jpg)

## Configuración

Para completar esta mini-guía, necesitaremos:

- una EOA con algunos LYX para las cuotas de gas y los [**permisos**] necesarios(../../standards/universal-profile/lsp6-key-manager.md#permissions) para la interacción.
- los contratos ABI `UniversalProfile`, `LSP6KeyManager` y `LSP9Vault` del paquete npm [`@lukso/lsp-smart-contracts`](https://www.npmjs.com/package/@lukso/lsp-smart-contracts).
- la dirección del perfil universal.
- la dirección de la Bóveda LSP9.
- la ABI `targetContract`.
- la dirección del Target Contract.

:::info

La EOA elegida debe tener [**CALL Permission**](../../standards/universal-profile/lsp6-key-manager.md#permissions) junto con [**AllowedCalls**](../.. /standards/universal-profile/lsp6-key-manager.md#allowed-calls) o [**SUPER_CALL Pemrission**](../../standards/universal-profile/lsp6-key-manager.md#super-permissions)

:::

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial.

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

## Paso 1 - Configuración de importaciones y constantes

En este paso importaremos los **contract ABIs** necesarios y guardaremos todas las **direcciones requeridas** en constantes.  
También inicializaremos nuestra **EOA** para su uso posterior.

:::caution

Guarda la ABI del Contrato de Destino en un json separado e impórtalo en el archivo principal.  
Puedes compilar rápidamente y obtener el ABI de un contrato en [**Remix IDO**](https://remix.ethereum.org/)

:::

<Tabs>

  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import TargetContractABI from './TargetContractABI.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const vaultAddress = '0x...';
const targetContractAddress = '0x...';

// configura la EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import TargetContractABI from './TargetContractABI.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const vaultAddress = '0x...';
const targetContractAddress = '0x...';

// configura la EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Paso 2 - Crear las instancias de los contratos

A continuación crearemos instancias para nuestros contratos

- Crea una instancia de contrato de Perfil Universal a partir de `universalProfileAddress`.
- Consigue el `owner()` del Perfil Universal.
- Crea una instancia de contrato Gestor de Claves a partir del propietario del Perfil Universal.
- Crea una instancia de contrato de destino a partir de la dirección `targetContractAddress`.

<Tabs>

  <TabItem value="web3js" label="web3.js">

```typescript title="Instancias de Contratos"
// Crea una instancia de contrato de Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// Obtén al propietario del Perfil Universal
const keyManagerAddress = await universalProfile.methods.owner().call();
// Crear instancia de contrato de Gestor de Claves LSP6
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
// Crear instancia de contrato Bóveda LSP9
const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
// Crear instancia de contrato de Contrato de Destino
const targetContract = new web3.eth.Contract(
  TargetContractABI,
  targetContractAddress,
);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancias de Contratos"
// Crea una instancia de contrato de Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// Obtén al propietario del Perfil Universal
const keyManagerAddress = await universalProfile.owner();
// Crear instancia de contrato de Gestor de Claves LSP6
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
// Crear instancia de contrato Bóveda LSP9
const vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);
// Crear instancia de contrato de Contrato de Destino
const targetContract = new ethers.Contract(
  targetContractAddress,
  TargetContractABI,
);
```

  </TabItem>

</Tabs>

## Step 3 - Encode the calldatas

This is the easy part, we need to create 2 calldatas:

- The _first calldata_ will be executed on the Target Contract.
- The _second calldata_ will be executed on the Vault and will trigger the _first calldata_.
- The _third calldata_ will be executed on the Universal Profile and will trigger the _second calldata_.

### Cifrar los calldata del Contrato de Destino

Cifrar los calldata que se ejecutarán en el Contrato de Destino.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="calldata de Destino"
// 1. cifrar los calldata a ejecutar en el targetContract
// suponiendo que targetContract sea una instancia de Contrato
const targetCalldata = targetContract.methods
  .myCoolfunction('dummyParameter')
  .encodeABI();
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="calldata de Destino"
// 1. cifrar los calldata a ejecutar en el targetContract
// suponiendo que targetContract sea una instancia de Contrato
const targetCalldata = targetContract.interface.encodeFunctionData(
  'myCoolfunction',
  ['dummyParameter'],
);
```

  </TabItem>

</Tabs>

### Cifrar los calldata de la Bóveda

Cifrar los calldata que se ejecutarán en la Bóveda. Estos calldata también activarán los calldata que se ejecutarán en el Contrato de Destino.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="calldata de la Bóveda"
// 2. cifrar los calldata a ejecutar en la Bóveda,
// pasando los calldata a ejecutarse en el targetContract como 4º parámetro
const vaultCalldata = await vault.methods[
  'execute(uint256,address,uint256,bytes)'
](0, targetContract.address, 0, targetCalldata).encodeABI();
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="calldata de la Bóveda"
// 2. cifrar los calldata a ejecutar en la Bóveda,
// pasando los calldata a ejecutarse en el targetContract como 4º parámetro
const vaultCalldata = vault.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [0, targetContract.address, 0, targetCalldata],
);
```

  </TabItem>

</Tabs>

### Cifrar calldata de Perfil Universal

Cifrar los calldata que se ejecutarán en el Perfil Universal. Estos calldata también activarán los calldata que se ejecutarán en la Bóveda.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="calldata de Perfil Universal"
// 3. cifrar los calldata a ejecutarse en el UP,
// pasando los calldata a ejecutarse en la Bóveda como 4º parámetro
const universalProfileCalldata = await universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](0, vaultAddress, 0, vaultCalldata).encodeABI();
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="calldata de Perfil Universal"
// 3. cifrar los calldata a ejecutarse en el UP,
// pasando los calldata a ejecutarse en la Bóveda como 4º parámetro
const universalProfileCalldata = universalProfile.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [0, vaultAddress, 0, vaultCalldata],
);
```

  </TabItem>

</Tabs>

## Paso 4 - Ejecutar a través del Gestor de Claves

El paso final es pasar los calldata cifrados al Gestor de Claves. Como estamos llamando desde la dirección de un controlador de UP (con los [**permisos**] adecuados(../../standards/universal-profile/lsp6-key-manager.md#permissions)), el Gestor de Claves autorizará y ejecutará la transacción.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar transacción"
// Ejecutar a través del Gestor de Claves, pasando los calldata del UP
await keyManager.methods['execute(bytes)'](universalProfileCalldata).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar transacción"
// Ejecutar a través del Gestor de Claves, pasando los calldata del UP
await keyManager.connect(myEOA)['execute(bytes)'](universalProfileCalldata);
```

  </TabItem>

</Tabs>

## Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Interactuar con otros contratos a través de la bóveda"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import TargetContractABI from './TargetContractABI.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const vaultAddress = '0x...';
const targetContractAddress = '0x...';

// configura la EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = web3.eth.accounts.wallet.add(privateKey);

// Crea una instancia de contrato de Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// Obtén al propietario del Perfil Universal
const keyManagerAddress = await universalProfile.methods.owner().call();
// Crear instancia de contrato de Gestor de Claves LSP6
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
// Crear instancia de contrato Bóveda LSP9
const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
// Crear instancia de contrato de Contrato de Destino
const targetContract = new web3.eth.Contract(
  TargetContractABI,
  targetContractAddress,
);

// 1. cifrar los calldata a ejecutar en el targetContract
// suponiendo que targetContract sea una instancia de Contrato
const targetCalldata = targetContract.methods
  .myCoolfunction('dummyParameter')
  .encodeABI();

// 2. cifrar los calldata a ejecutar en la Bóveda,
// pasando los calldata a ejecutarse en el targetContract como 4º parámetro
const vaultCalldata = await vault.methods[
  'execute(uint256,address,uint256,bytes)'
](0, targetContract.address, 0, targetCalldata).encodeABI();

// 3. cifrar los calldata a ejecutarse en el UP,
// pasando los calldata a ejecutarse en la Bóveda como 4º parámetro
const universalProfileCalldata = await universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](0, vaultAddress, 0, vaultCalldata).encodeABI();

// Ejecutar a través del Gestor de Claves, pasando los calldata del UP
await keyManager.methods['execute(bytes)'](universalProfileCalldata).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Interactuar con otros contratos a través de la bóveda"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import TargetContractABI from './TargetContractABI.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const vaultAddress = '0x...';
const targetContractAddress = '0x...';

// configura la EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);

// Crea una instancia de contrato de Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// Obtén al propietario del Perfil Universal
const keyManagerAddress = await universalProfile.owner();
// Crear instancia de contrato de Gestor de Claves LSP6
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
// Crear instancia de contrato Bóveda LSP9
const vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);
// Crear instancia de contrato de Contrato de Destino
const targetContract = new ethers.Contract(
  targetContractAddress,
  TargetContractABI,
);

// 1. cifrar los calldata a ejecutar en el targetContract
// suponiendo que targetContract sea una instancia de Contrato
const targetCalldata = targetContract.interface.encodeFunctionData(
  'myCoolfunction',
  ['dummyParameter'],
);

// 2. cifrar los calldata a ejecutar en la Bóveda,
// pasando los calldata a ejecutarse en el targetContract como 4º parámetro
const vaultCalldata = vault.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [0, targetContract.address, 0, targetCalldata],
);

// 3. cifrar los calldata a ejecutarse en el UP,
// pasando los calldata a ejecutarse en la Bóveda como 4º parámetro
const universalProfileCalldata = universalProfile.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [0, vaultAddress, 0, vaultCalldata],
);

// Ejecutar a través del Gestor de Claves, pasando los calldata del UP
await keyManager.connect(myEOA)['execute(bytes)'](universalProfileCalldata);
```

  </TabItem>

</Tabs>

En el fragmento de código anterior, interactuamos con la función `myCoolfunction(..)` en el contrato **targetContract** a través de la función [execute](../../standards/smart-contracts/lsp9-vault.md#execute) de la Bóveda. La llamada se cifró y ejecutó a través del Perfil Universal y el Gestor de Claves.
