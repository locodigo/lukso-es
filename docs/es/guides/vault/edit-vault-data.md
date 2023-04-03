---
sidebar_label: 'Editar datos de una Bóveda'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Editar datos de una Bóveda

Esta guía te enseñará cómo adjuntar datos a un contrato **[LSP9Vault](../../standards/smart-contracts/lsp9-vault.md)**. Se puede adjuntar cualquier dato a la bóveda, y puesto que admite el estándar **[LSP1-UniversalReceiver](../../standards/generic-standards/lsp1-universal-receiver.md)**, estableceremos la dirección [**Receptor Delegado Universal**](../../standards/smart-contracts/lsp1-universal-receiver-delegate-vault.md) dentro del almacenamiento.

## Configuración de datos (Receptor Delegado Universal)

La implementación por defecto del **Receptor Delegado Universal** de la Bóveda que desplegaremos registrará los activos recibidos al almacenamiento y los eliminará cuando su saldo sea igual a 0.

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

## Paso 1 - Importaciones, Constantes y EOA

Para empezar necesitamos obtener los _ABIs_ de los contratos que utilizaremos y el _bytecode_ del `LSP1UniversalReceiverDelegateVault`.  
Después tenemos que almacenar la dirección de nuestro Bóveda LSP9 y nuestro Perfil Universal.  
Después inicializaremos el EOA que utilizaremos más adelante.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones, Constantes y EOA"
import LSP1UniversalReceiverDelegateVault from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateVault.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const vaultAddress = '0x...';
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones, Constantes y EOA"
import LSP1UniversalReceiverDelegateVault from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateVault.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const vaultAddress = '0x...';
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Paso 2 - Implementación del Receptor Delegado Universal (URD)

:::info

El **Perfil Universal** y la **Bóveda** no utilizan la misma implementación del Receptor Delegado Universal.
:::

### Crear una instancia de contrato

En este paso crearemos una instancia del URD de la Bóveda que posteriormente utilizaremos para desplegar una.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancia del contrato LSP9 del URD de la Bóveda "
// crear una instancia de LSP1UniversalReceiverDelegateVault
const vaultURD = new web3.eth.Contract(LSP1UniversalReceiverDelegateVault.abi);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancia del contrato LSP9 del URD de la Bóveda "
// crear una Fábrica de Contratos LSP1UniversalReceiverDelegateVault
const vaultURDFactory = new ethers.ContractFactory(
  LSP1UniversalReceiverDelegateVault.abi,
  LSP1UniversalReceiverDelegateVault.bytecode,
);
```

  </TabItem>

</Tabs>

### Enviar la transacción de despliegue del contrato

Envía la transacción de despliegue y en unos segundos obtendrás un nuevo URD de Bóveda desplegado.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar la transacción para desplegar una nuevo URD de Bóveda LSP9"
// desplegar el contrato Receptor Delegado Universal de Bóveda
await vaultURD
  .deploy({
    data: LSP1UniversalReceiverDelegateVault.bytecode,
  })
  .send({
    from: myEOA.address,
    gas: 5_000_000,
    gasPrice: '1000000000',
  });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar la transacción para desplegar una nuevo URD de Bóveda LSP9"
// desplegar el contrato Receptor Delegado Universal de Bóveda
const vaultURD = await vaultURDFactory.connect(myEOA).deploy();
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Desplegar un nuevo Delegado de Recepción Universal de Bóveda LSP9"
const deployVaultURD = async () => {
  // crear una instancia de LSP1UniversalReceiverDelegateVault
  const vaultURD = new web3.eth.Contract(
    LSP1UniversalReceiverDelegateVault.abi,
  );

  // desplegar el contrato Receptor Delegado Universal de Bóveda
  const vaultURDAddress = await vaultURD
    .deploy({
      data: LSP1UniversalReceiverDelegateVault.bytecode,
    })
    .send({
      from: myEOA.address,
      gas: 5_000_000,
      gasPrice: '1000000000',
    })
    .on('receipt', (receipt) => {
      return receipt.contractAddress;
    });

  return vaultURDAddress;
};

// desplegar un nuevo URD de Bóveda y recuperar su dirección
const vaultURDAddress = await deployVaultURD();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Desplegar un nuevo Delegado de Recepción Universal de Bóveda LSP9"
const deployVaultURD = async () => {
  // crear una Fábrica de Contratos LSP1UniversalReceiverDelegateVault
  const vaultURDFactory = new ethers.ContractFactory(
    LSP1UniversalReceiverDelegateVault.abi,
    LSP1UniversalReceiverDelegateVault.bytecode,
  );

  // desplegar el contrato Receptor Delegado Universal de Bóveda
  const vaultURD = await vaultURDFactory.connect(myEOA).deploy();

  return vaultURD.target;
};

// desplegar un nuevo URD de Bóveda y recuperar su dirección
const vaultURDAddress = await deployVaultURD();
```

  </TabItem>

</Tabs>

## Paso 3 - Establecer la dirección URD en el almacén

El propietario del Bóveda puede ser una **EOA**, o cualquier **otro contrato inteligente**. En nuestro caso, supondremos que el propietario de la Bóveda es un [Perfil Universal](../../standards/universal-profile/introduction.md) que está controlado por un Gestor de Claves.

### Crear las instancias de los contratos

En primer lugar, debemos crear instancias para los siguientes contratos:

- [**Bóveda**](../../standards/universal-profile/lsp9-vault.md)
- [**Perfil universal**](../../standards/universal-profile/lsp0-erc725account.md)
- [**Gestor de Claves**](../../standards/universal-profile/lsp6-key-manager.md)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancias de contratos para el Perfil Universal, Gestor de Claves y la Bóveda"
// crear una instancia de la LSP9Vault
const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
// crear una instancia del Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// obtener el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancias de contratos para el Perfil Universal, Gestor de Claves y la Bóveda"
// crear una instancia de la LSP9Vault
const vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);
// crear una instancia del Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// obtener el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
```

  </TabItem>

</Tabs>

### Cifrar el calldata `setData(..)`.

En segundo lugar, tenemos que cifrar un calldata que actualizará la dirección del URD de la bóveda.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Calldata para actualizar el URD de la Bóveda LSP9"
// cifrar setData Calldata en la Bóveda
const setDataCalldata = await vault.methods['setData(bytes32,bytes)'](
  ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate,
  vaultURDAddress,
).encodeABI(); // Cualquier otra información puede almacenarse aquí
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Calldata para actualizar el URD de la Bóveda LSP9"
// cifrar setData Calldata en la Bóveda
const setDataCalldata = vault.interface.encodeFunctionData(
  'setData(bytes32,bytes)',
  [ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate, vaultURDAddress],
); // Cualquier otra información puede almacenarse aquí
```

  </TabItem>

</Tabs>

### Cifrar `execute(..)` calldata

En tercer lugar, necesitamos cifrar otro calldata que activará el [calldata que actualizará los datos del URD de Vault]( #paso-32---encode-setdata-calldata).

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Calldata para ejecutar un setData(..) calldata a través del Perfil Universal"
// cifrar ejecutar Calldata en el UP
const executeCalldata = await universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](
  0, // OPERATION CALL
  vaultAddress,
  0, // valor a transferir
  setDataCalldata,
).encodeABI();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Calldata para ejecutar un setData(..) calldata a través del Perfil Universal"
// cifrar ejecutar Calldata en el UP
const executeCalldata = universalProfile.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [
    0, // OPERATION CALL
    vaultAddress,
    0, // valor a transferir
    setDataCalldata,
  ],
);
```

  </TabItem>

</Tabs>

### Enviar transacción a través del Gestor de Claves

Por último, necesitamos enviar la transacción que enviará los [`execute(..)` calldata](#paso-33---encode-execute-calldata) al Perfil Universal a través del Gestor de Claves.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Ejecutar el calldata en el Perfil Universal a través del Gestor de Claves"
// ejecutar el `executeCalldata` en el Gestor de Claves
await keyManager.methods['execute(bytes)'](executeCalldata).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Ejecutar el calldata en el Perfil Universal a través del Gestor de Claves"
// ejecutar el `executeCalldata` en el Gestor de Claves
await keyManager.connect(myEOA)['execute(bytes)'](executeCalldata);
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Actualizar el URD de Bóveda por el recién desplegado."
const updateVaultURD = async (vaultURDAddress) => {
  // crear una instancia de la LSP9Vault
  const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
  // crear una instancia del Perfil Universal
  const universalProfile = new web3.eth.Contract(
    UniversalProfile.abi,
    universalProfileAddress,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del LSP6KeyManager
  const keyManager = new web3.eth.Contract(
    LSP6KeyManager.abi,
    keyManagerAddress,
  );

  // cifrar setData Calldata en la Bóveda
  const setDataCalldata = await vault.methods['setData(bytes32,bytes)'](
    ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate,
    vaultURDAddress,
  ).encodeABI(); // Cualquier otra información puede almacenarse aquí

  // cifrar ejecutar Calldata en el UP
  const executeCalldata = await universalProfile.methods[
    'execute(uint256,address,uint256,bytes)'
  ](
    0, // OPERATION CALL
    vaultAddress,
    0, // valor a transferir
    setDataCalldata,
  ).encodeABI();

  // ejecuta el `executeCalldata` en el KM
  await keyManager.methods['execute(bytes)'](executeCalldata).send({
    from: myEOA.address,
    gasLimit: 600_000,
  });
};

// actualizar el URD de la bóveda actual
await updateVaultURD(vaultURDAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Actualizar el URD de Bóveda por el recién desplegado."
const updateVaultURD = async (vaultURDAddress) => {
  // crear una instancia de la LSP9Vault
  const vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);
  // crear una instancia del Perfil Universal
  const universalProfile = new ethers.Contract(
    universalProfileAddress,
    UniversalProfile.abi,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del LSP6KeyManager
  const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

  // cifrar setData Calldata en la Bóveda
  const setDataCalldata = vault.interface.encodeFunctionData(
    'setData(bytes32,bytes)',
    [ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate, vaultURDAddress],
  ); // Cualquier otra información puede almacenarse aquí

  // cifrar ejecutar Calldata en el UP
  const executeCalldata = universalProfile.interface.encodeFunctionData(
    'execute(uint256,address,uint256,bytes)',
    [
      0, // OPERATION CALL
      vaultAddress,
      0, // valor a transferir
      setDataCalldata,
    ],
  );

  // ejecuta el `executeCalldata` en el KM
  await keyManager.connect(myEOA)['execute(bytes)'](executeCalldata);
};

// actualizar el URD de la bóveda actual
await updateVaultURD(vaultURDAddress);
```

  </TabItem>

</Tabs>

## Código final - Implementación y Actualización

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Implementación del nuevo URD de Bóveda y actualización del URD de Bóveda"
import LSP1UniversalReceiverDelegateVault from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateVault.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const vaultAddress = '0x...';
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);

const deployVaultURD = async () => {
  // crear una instancia de LSP1UniversalReceiverDelegateVault
  const vaultURD = new web3.eth.Contract(
    LSP1UniversalReceiverDelegateVault.abi,
  );

  // desplegar el contrato Receptor Delegado Universal de Bóveda
  const vaultURDAddress = await vaultURD
    .deploy({
      data: LSP1UniversalReceiverDelegateVault.bytecode,
    })
    .send({
      from: myEOA.address,
      gas: 5_000_000,
      gasPrice: '1000000000',
    })
    .on('receipt', (receipt) => {
      return receipt.contractAddress;
    });

  return vaultURDAddress;
};

const updateVaultURD = async (vaultURDAddress) => {
  // crear una instancia de la LSP9Vault
  const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
  // crear una instancia del Perfil Universal
  const universalProfile = new web3.eth.Contract(
    UniversalProfile.abi,
    universalProfileAddress,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del LSP6KeyManager
  const keyManager = new web3.eth.Contract(
    LSP6KeyManager.abi,
    keyManagerAddress,
  );

  // cifrar setData Calldata en la Bóveda
  const setDataCalldata = await vault.methods['setData(bytes32,bytes)'](
    ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate,
    vaultURDAddress,
  ).encodeABI(); // Cualquier otra información puede almacenarse aquí

  // cifrar ejecutar Calldata en el UP
  const executeCalldata = await universalProfile.methods[
    'execute(uint256,address,uint256,bytes)'
  ](
    0, // OPERATION CALL
    vaultAddress,
    0, // valor a transferir
    setDataCalldata,
  ).encodeABI();

  // ejecuta el `executeCalldata` en el KM
  await keyManager.methods['execute(bytes)'](executeCalldata).send({
    from: myEOA.address,
    gasLimit: 600_000,
  });
};

// desplegar un nuevo URD de Bóveda y recuperar su dirección
const vaultURDAddress = await deployVaultURD();
// actualizar el URD de la bóveda actual
await updateVaultURD(vaultURDAddress);
```

  </TabItem>
  
  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Implementación del nuevo URD de Bóveda y actualización del URD de Bóveda"
import LSP1UniversalReceiverDelegateVault from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateVault.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const vaultAddress = '0x...';
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);

const deployVaultURD = async () => {
  // crear una Fábrica de Contratos LSP1UniversalReceiverDelegateVault
  const vaultURDFactory = new ethers.ContractFactory(
    LSP1UniversalReceiverDelegateVault.abi,
    LSP1UniversalReceiverDelegateVault.bytecode,
  );

  // desplegar el contrato Receptor Delegado Universal de Bóveda
  const vaultURD = await vaultURDFactory.connect(myEOA).deploy();

  return vaultURD.target;
};

const updateVaultURD = async (vaultURDAddress) => {
  // crear una instancia de la LSP9Vault
  const vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);
  // crear una instancia del Perfil Universal
  const universalProfile = new web3.eth.Contract(
    UniversalProfile.abi,
    universalProfileAddress,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del LSP6KeyManager
  const keyManager = new web3.eth.Contract(
    LSP6KeyManager.abi,
    keyManagerAddress,
  );

  // cifrar setData Calldata en la Bóveda
  const setDataCalldata = await vault.methods['setData(bytes32,bytes)'](
    ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate,
    vaultURDAddress,
  ).encodeABI(); // Cualquier otra información puede almacenarse aquí

  // cifrar ejecutar Calldata en el UP
  const executeCalldata = await universalProfile.methods[
    'execute(uint256,address,uint256,bytes)'
  ](
    0, // OPERATION CALL
    vaultAddress,
    0, // valor a transferir
    setDataCalldata,
  ).encodeABI();

  // ejecuta el `executeCalldata` en el KM
  await keyManager.methods['execute(bytes)'](executeCalldata).send({
    from: myEOA.address,
    gasLimit: 600_000,
  });
};

// desplegar un nuevo URD de Bóveda y recuperar su dirección
const vaultURDAddress = await deployVaultURD();
// actualizar el URD de la bóveda actual
await updateVaultURD(vaultURDAddress);
```

  </TabItem>

</Tabs>

## Lectura de Datos

El contrato **LSP9Vault** es un contrato **ERC725**, por lo que comparte la misma forma de lectura de datos que los Perfiles Universales y otros contratos ERC725 utilizando **[erc725.js](../../tools/erc725js/getting-started.md)**.

Puedes consultar esta **[guía anterior](../universal-profile/read-profile-data.md)** para aprender a **recopilar datos** (activos recibidos, activos emitidos, etc..). Ten en cuenta que tendrás que sustituir la dirección del **Perfil Universal** por la dirección de la **Bóveda**.
