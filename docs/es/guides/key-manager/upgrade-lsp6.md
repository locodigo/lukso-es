---
sidebar_label: 'Actualizar Gestor de Claves LSP6'
sidebar_position: 4
describtion: 'Esta guía explica cómo cambiar o actualizar el Gestor de Claves LSP6 de un Perfil Universal.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actualizar Gestor de Claves LSP6

:::info Requisitos

Necesitarás un Perfil Universal que puedas controlar a través de su [KeyManager](../../standards/universal-profile/lsp6-key-manager.md) para seguir esta guía.
Si aún no cuentas con un Perfil Universal, sigue nuestra guía anterior [**Create a Universal Profile**](../universal-profile/create-profile.md) o consulta la documentación [_lsp-factory.js_](../../tools/lsp-factoryjs/deployment/universal-profile.md).

:::

En esta guía, aprenderemos a actualizar el LSP6 Key Manager de su Perfil Universal a la última versión disponible.

Al final de esta guía, sabrás cómo:

- Desplegar un nuevo LSP6 Key Manager con las últimas actualizaciones.
- Actualizar su Key Manager cambiando el propietario de tu UP del anterior al nuevo Key Manager.

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

## Paso 1 - Configurar las constantes y las importaciones

Crea un archivo JavaScript y añade las siguientes importaciones en la parte superior:

- `privateKey`: clave privada de una dirección de controlador, **DEBE** tener permiso [**CHANGEOWNER**](../../standards/universal-profile/lsp6-key-manager.md#permissions).
- `keyManagerAddress`: dirección del gestor de claves LSP6 actual.
- `universalProfileAddress`: dirección de su perfil universal.

```js
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const privateKey = '0x...';
const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';
```

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const privateKey = '0x...';
const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Importaciones y Constantes"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

const privateKey = '0x...';
const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';
```

  </TabItem>

</Tabs>

## Paso 2 - Inicializar la cuenta del controlador

Para poder enviar cualquier transacción en la blockchain necesitas una EOA. En nuestro caso, esa cuenta DEBE tener permiso [**`CHANGEOWNER`**](../../standards/universal-profile/lsp6-key-manager.md#permissions) en el perfil universal en el que se actualizará el gestor de claves LSP6.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Inicializar la EOA"
const account = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Inicializar la EOA"
const account = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Paso 3 - Inicializar el Gestor de Claves LSP6 anterior

Para transferir la propiedad de tu Perfil Universal, necesitas inicializar tu Gestor de Claves LSP6 actual.

<!-- prettier-ignore-start -->

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Crear una instancia del Gestor de Claves anterior"
const oldKeyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Crear una instancia del Gestor de Claves anterior"
const oldKeyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
```

  </TabItem>

</Tabs>

<!-- prettier-ignore-end -->

## Paso 4 - Implementar el nuevo Gestor de claves LSP6

Implementa un nuevo Gestor de claves LSP6 con las últimas actualizaciones.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Implementar un nuevo Gestor de Claves"
const newKeyManager = new web3.eth.Contract(LSP6KeyManager.abi);
await newKeyManager
  .deploy({
    data: LSP6KeyManager.bytecode,
    arguments: [universalProfileAddress],
  })
  .send({
    from: account.address,
    gas: 3_000_000,
    gasPrice: '1000000000',
  });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Implementar un nuevo Gestor de Claves"
const keyManagerFactory = new ethers.ContractFactory(
  LSP6KeyManager.abi,
  LSP6KeyManager.bytecode,
);
const newKeyManager = await keyManagerFactory.deploy(universalProfileAddress);
```

  </TabItem>

</Tabs>

## Paso 5 - Actualizar el Gestor de Claves

### Paso 5.1 - Transferir la Propiedad a tu nuevo Gestor de Claves

Crea un calldata para la función [`transferOwnership(address)`](../../standards/smart-contracts/lsp14-ownable-2-step.md#transferownership) y cambia la propiedad de tu Perfil Universal desde tu actual Gestor de Claves LSP6.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Transferir la propiedad del Perfil Universal desde el Gestor de Claves previo hacia el nuevo."
const transferOwnershipPayload = new web3.eth.Contract(
  UniversalProfile.abi,
).methods
  .transferOwnership('0xcafecafecafecafecafecafecafecafecafecafe')
  .encodeABI();

await oldKeyManager.methods['execute(bytes)'](transferOwnershipPayload).send({
  from: account.address,
  gas: 1_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Transferir la propiedad del Perfil Universal desde el Gestor de Claves previo hacia el nuevo."
const transferOwnershipPayload = new ethers.Interface(
  UniversalProfile.abi,
).encodeFunctionData('transferOwnership(address)', [newKeyManager._address]);

await oldKeyManager
  .connect(account)
  ['execute(bytes)'](transferOwnershipPayload);
```

  </TabItem>

</Tabs>

### Paso 5.2 - Aceptar la Propiedad del nuevo Gestor de Claves

Crea un calldata para la función [`claimOwnership()`](../../standards/smart-contracts/lsp14-ownable-2-step.md#acceptownership) y acepta la propiedad de tu Perfil Universal desde tu nuevo Gestor de Claves LSP6.

<!-- prettier-ignore-start -->

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```js title="Aceptar la propiedad del Perfil Universal mediante el nuevo Gestor de Claves"
const acceptOwnershipCalldata = new web3.eth.Contract(UniversalProfile.abi).methods.acceptOwnership().encodeABI();

await newKeyManager.methods['execute(bytes)'](acceptOwnershipCalldata).send({
  from: account.address,
  gas: 1_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```js title="Aceptar la propiedad del Perfil Universal mediante el nuevo Gestor de Claves"
const acceptOwnershipCalldata = new ethers.Interface(UniversalProfile.abi).encodeFunctionData("acceptOwnership()");

await newKeyManager.connect(account)['execute(bytes)'](acceptOwnershipCalldata);
```

  </TabItem>

</Tabs>

<!-- prettier-ignore-end -->

:::success 🥳

La actualización ha finalizado correctamente.

:::

## Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```javascript title="upgrade-lsp6.js"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';
const web3 = new Web3('https://rpc.l16.lukso.network');

const privateKey = '0x...';
const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';

const upgradeLSP6 = async () => {
  // Inicializar la cuenta del controlador
  const account = web3.eth.accounts.wallet.add(privateKey);

  // Inicializar el Gestor de Claves LSP6 actual
  const oldKeyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);

  // Implementar un nuevo Gestor de Claves LSP6
  const newKeyManager = new web3.eth.Contract(LSP6KeyManager.abi);
  await newKeyManager.deploy({
    data: LSP6KeyManager.bytecode,
    arguments: [universalProfileAddress],
  }).send({
    from: account.address,
    gas: 3_000_000,
    gasPrice: '1000000000',
  });

  // Transferir la propiedad de un Perfil Universal desde el Gestor de Claves LSP6 actual hacia el nuevo Gestor de Claves LSP6.
  const transferOwnershipPayload = new web3.eth.Contract(
    UniversalProfile.abi,
  ).methods
    .transferOwnership(newKeyManager._address)
    .encodeABI();

  await oldKeyManager.methods['execute(bytes)'](transferOwnershipPayload).send({
    from: account.address,
    gas: 1_000_000,
    gasPrice: '1000000000',
  });

  // Aceptar la propiedad de un Perfil Universal desde el nuevo Gestor de Claves LSP6
  const acceptOwnershipCalldata = new web3.eth.Contract(UniversalProfile.abi).methods.acceptOwnership().encodeABI();

  await newKeyManager.methods['execute(bytes)'](acceptOwnershipCalldata).send({
    from: account.address,
    gas: 1_000_000,
    gasPrice: '1000000000',
  });
};

await upgradeLSP6();
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```js title="upgrade-lsp6.js"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');

const privateKey = '0x...';
const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';

const upgradeLSP6 = async () => {
  // Inicializar la cuenta del controlador
  const account = new ethers.Wallet(privateKey).connect(provider);

  // Inicializar el Gestor de Claves LSP6 actual
  const oldKeyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

  // Implementar un nuevo Gestor de Claves LSP6
  const keyManagerFactory = new ethers.ContractFactory(
    LSP6KeyManager.abi,
    LSP6KeyManager.bytecode,
  );
  const newKeyManager = await keyManagerFactory.deploy(universalProfileAddress);

  // Transferir la propiedad de un Perfil Universal desde el Gestor de Claves LSP6 actual hacia el nuevo Gestor de Claves LSP6.
  const transferOwnershipPayload = new ethers.Interface(
    UniversalProfile.abi,
  ).encodeFunctionData('transferOwnership(address)', [newKeyManager._address]);

  await oldKeyManager
    .connect(account)
    ['execute(bytes)'](transferOwnershipPayload);

  // Aceptar la propiedad de un Perfil Universal desde el nuevo Gestor de Claves LSP6
  const acceptOwnershipCalldata = new ethers.Interface(UniversalProfile.abi).encodeFunctionData("acceptOwnership()");

  await newKeyManager.connect(account)['execute(bytes)'](acceptOwnershipCalldata);
};

await upgradeLSP6();
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>

## Test the new LSP6 Key Manager

We can now check the owner of the Universal Profile. If everything went through, the owner should be the address of the new LSP6 Key Manager.
Create the following file with the name `prueba-nuevo-lsp6.js` and run:

```shell
node prueba-nuevo-lsp6.js
```

<!-- prettier-ignore-start -->

```javascript title="prueba-nuevo-lsp6.js"
import LSP0ERC725YAccount from '@lukso/lsp-smart-contracts/artifacts/LSP0ERC725YAccount.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const universalProfileAddress = '0x...';
const keyManagerAddress = '0x...';

const testLSP6 = async () => {
  const universalProfile = new web3.eth.Contract(LSP0ERC725YAccount.abi, universalProfileAddress);

  const universalProfileOwner = await universalProfile.methods.owner().call();

  console.log(`The new owner of the Universal Profile is: ${universalProfileOwner}`);
  console.log(`The old LSP6 Key Manager is at address: ${keyManagerAdderss}`);

  const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, universalProfileOwner);

  const keyManagerTarget = await keyManager.methods.target().call();

  console.log(`The address of the Universal Profile is: ${universalProfile._address}`);
  console.log(`The target of the new LSP6 Key Manager: ${keyManagerTarget}`);
};

await testLSP6();
```

<!-- prettier-ignore-end -->
