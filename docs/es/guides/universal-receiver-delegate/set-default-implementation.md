---
sidebar_label: 'Establecer la implementación por defecto'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Establecer la implementación por defecto

:::note

Los usuarios que desplieguen sus Perfiles Universales siguiendo las guías que utilizan **[lsp-factory](../universal-profile/create-profile.md)** o la **[Extensión del navegador](../browser-extension/create-a-universal-profile.md)** pueden saltarse esta guía, ya que este contrato ya está desplegado y configurado para sus perfiles.

:::

Esta guía te enseñará cómo implementar y establecer la implementación predeterminada del **[Receptor Delegado Universal](../../standards/smart-contracts/lsp1-universal-receiver-delegate-up.md)** (URD) utilizado por el Perfil Universal. Este contrato registrará las direcciones de los **[activos recibidos](../../standards/universal-profile/lsp5-received-assets.md)** y **[bóvedas](../../standards/universal-profile/lsp10-received-vaults. md)** y los eliminará cuando el saldo sea igual a 0. Este contrato requiere el permiso [**`SUPER_SETDATA` Permission**](../../standards/universal-profile/lsp6-key-manager.md#super-permissions) para interactuar con el perfil a través del Gestor de Claves.

![UniversalReceiverDelegate estableciendo claves de datos en el perfil](/img/standards/lsp1delegate/token-transfer-4.jpg)

## Configuración

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Instalar las dependencias"
npm install web3 @lukso/lsp-smart-contracts
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instalar las dependencias"
npm install ethers @lukso/lsp-smart-contracts
```

  </TabItem>

</Tabs>

## Paso 1 - Importaciones, Constantes y EOA

Para empezar necesitamos obtener los _ABIs_ de los contratos que vamos a utilizar y el _bytecode_ del `LSP1UniversalReceiverDelegateUP`.  
A continuación almacenaremos la dirección de nuestro perfil universal.  
Luego inicializaremos el EOA que utilizaremos más adelante.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones, Constantes y EOA"
import LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import {
  ERC725YDataKeys,
  PERMISSIONS,
} from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const EOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones, Constantes y EOA"
import LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import {
  ERC725YDataKeys,
  PERMISSIONS,
} from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';

// configura tu  EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Step 2 - Deploy the default Universal Receiver Delegate contract

:::info

El **Perfil Universal** y la **Bóveda** no utilizan la misma implementación del Receptor Delegado Universal.
:::

### Crear una instancia de contrato

En este paso crearemos una instancia del URD del Perfil Universal que posteriormente utilizaremos para desplegar uno.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancia de contrato del URD del Perfil Universal"
// crear una instancia del LSP1UniversalReceiverDelegateUP
let universalProfileURD = new web3.eth.Contract(
  LSP1UniversalReceiverDelegateUP.abi,
);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancia de contrato del URD del Perfil Universal"
// crear una Fábrica de Contratos LSP1UniversalReceiverDelegateUP
let universalProfileURDFactory = new ethers.ContractFactory(
  LSP1UniversalReceiverDelegateUP.abi,
  LSP1UniversalReceiverDelegateUP.bytecode,
);
```

  </TabItem>

</Tabs>

### Enviar la transacción de despliegue del contrato

Envía la transacción de despliegue para obtener un URD recién desplegado.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar la transacción para desplegar un nuevo URD del Perfil Universal"
// desplegar el contrato del Receptor Delegado Universal UP
await universalProfileURD
  .deploy({
    data: LSP1UniversalReceiverDelegateUP.bytecode,
  })
  .send({
    from: EOA.address,
    gas: 5_000_000,
    gasPrice: '1000000000',
  });
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar la transacción para desplegar un nuevo URD del Perfil Universal"
// desplegar el contrato del Receptor Delegado Universal UP
const universalProfileURD = await universalProfileURDFactory
  .connect(EOA)
  .deploy();
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Desplegar un Receptor Delegado Universal para el Perfil Universal"
const deployUniversalProfileURD = async () => {
  // crear una instancia del LSP1UniversalReceiverDelegateUP
  let universalProfileURD = new web3.eth.Contract(
    LSP1UniversalReceiverDelegateUP.abi,
  );

  // desplegar el contrato del Receptor Delegado Universal UP
  const universalProfileURDAddress = await universalProfileURD
    .deploy({
      data: LSP1UniversalReceiverDelegateUP.bytecode,
    })
    .send({
      from: EOA.address,
      gas: 5_000_000,
      gasPrice: '1000000000',
    })
    .on('receipt', (receipt) => {
      return receipt.contractAddress;
    });

  return universalProfileURDAddress;
};

// desplegar un nuevo URD del Perfil Universal y recuperar su dirección
const universalProfileURDAddress = await deployUniversalProfileURD();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Desplegar un Receptor Delegado Universal para el Perfil Universal"
const deployUniversalProfileURD = async () => {
  // crear una Fábrica de Contratos LSP1UniversalReceiverDelegateUP
  let universalProfileURDFactory = new ethers.ContractFactory(
    LSP1UniversalReceiverDelegateUP.abi,
    LSP1UniversalReceiverDelegateUP.bytecode,
  );

  // desplegar el contrato del Receptor Delegado Universal UP
  const universalProfileURD = await universalProfileURDFactory
    .connect(EOA)
    .deploy();

  return universalProfileURD.target;
};

// desplegar un nuevo URD del Perfil Universal y recuperar su dirección
const universalProfileURDAddress = await deployUniversalProfileURD();
```

  </TabItem>

</Tabs>

## Step 3 - Set the address of the URD in the storage

After deploying the contract, we need to set its address under the **[LSP1-UniversalReceiverDelegate Data Key](../../standards/generic-standards/lsp1-universal-receiver.md#extension)** and grant it the **[SUPER_SETDATA](../../standards/universal-profile/lsp6-key-manager.md#super-permissions)** permission.

### Crear las instancias de los contratos

En primer lugar necesitamos crear instancias para los siguientes contratos:

- [**Perfil universal**](../../standards/universal-profile/lsp0-erc725account.md)
- [**Gestor de Claves**](../../standards/universal-profile/lsp6-key-manager.md)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancias de Contratos para el Perfil Universal y Gestor de Claves"
// crear una instancia del Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// obtener el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del Gestor de Claves
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancias de Contratos para el Perfil Universal y Gestor de Claves"
// crear una instancia del Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// obtener el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del Gestor de Claves
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
```

  </TabItem>

</Tabs>

### Registrar el URD en el UP + establecer los permisos del URD

Generar _Claves y Valores de Datos_ para [**añadir un URD**](../../standards/generic-standards/lsp1-universal-receiver-delegate.md/#how-delegation-works) al Perfil Universal y para conceder [**SUPER_SETDATA**](../../standards/universal-profile/lsp6-key-manager.md#super-permissions) permiso al **URD**.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Cifrar Claves y Valores de Datos para actualizar el URD y sus permisos"
const addressPermissionsOldArrayLengthHex = await myUP.methods[
  'getData(bytes32)'
](ERC725YDataKeys.LSP6['AddressPermissions[]'].length).call();

const addressPermissionsNewArrayLength =
  web3.utils.hexToNumber(addressPermissionsOldArrayLengthHex) + 1;

const addressPermissionsNewArrayLengthHex = web3.utils.padLeft(
  web3.utils.numberToHex(addressPermissionsNewArrayLength),
  64,
);

// el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
const newElementIndexInArrayHex = addressPermissionsOldArrayLengthHex.substring(
  34,
  66,
);

const dataKeys = [
  URD_DATA_KEY,
  ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
  ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
    newElementIndexInArrayHex,
  ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
    universalProfileURDAddress.substring(2),
];
const dataValues = [
  universalProfileURDAddress,
  addressPermissionsNewArrayLengthHex,
  universalProfileURDAddress,
  PERMISSIONS.SUPER_SETDATA,
];
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Cifrar Claves y Valores de Datos para actualizar el URD y sus permisos"
const addressPermissionsOldArrayLengthHex = await myUP['getData(bytes32)'](
  ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
);

const addressPermissionsNewArrayLength =
  ethers.toNumber(addressPermissionsOldArrayLengthHex) + 1;

const addressPermissionsNewArrayLengthHex =
  '0x' + addressPermissionsNewArrayLength2.toString(16).padStart(64, '0');

// el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
const newElementIndexInArrayHex = addressPermissionsOldArrayLengthHex.substring(
  34,
  66,
);

const dataKeys = [
  URD_DATA_KEY,
  ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
  ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
    newElementIndexInArrayHex,
  ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
    universalProfileURDAddress.substring(2),
];
const dataValues = [
  universalProfileURDAddress,
  addressPermissionsNewArrayLengthHex,
  universalProfileURDAddress,
  PERMISSIONS.SUPER_SETDATA,
];
```

  </TabItem>

</Tabs>

### Cifrar datos de llamada `setData(..)`.

Cifra un calldata para `setData(bytes32[],bytes[])` usando las _dataKeys_ & _dataValues_ generadas en el [**paso anterior**](#paso-32---encode-new-permissions-data-keys--values).

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Cifrar un calldata que actualizará el URD y sus permisos"
// cifrar setData Calldata en el Perfil Universal
const setDataCalldata = await universalProfile.methods[
  'setData(bytes32[],bytes[])'
](dataKeys, dataValues).encodeABI();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Cifrar un calldata que actualizará el URD y sus permisos"
// cifrar setData Calldata en el Perfil Universal
const setDataCalldata = await universalProfile.interface.encodeFunctionData(
  'setData(bytes32[],bytes[])',
  [dataKeys, dataValues],
);
```

  </TabItem>

</Tabs>

### Enviar transacción a través del Gestor de Claves

Por último, debemos enviar la transacción que actualizará el URD y sus permisos en el Perfil Universal a través del Gestor de Claves.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Ejecutar el calldata en el Perfil Universal a través del Gestor de Claves"
// ejecutar el `setDataCalldata` en el Gestor de Claves
await keyManager.methods['execute(bytes)'](setDataCalldata).send({
  from: EOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Ejecutar el calldata en el Perfil Universal a través del Gestor de Claves"
// ejecutar el `setDataCalldata` en el Gestor de Claves
await keyManager.connect(EOA)['execute(bytes)'](setDataCalldata);
```

  </TabItem>

</Tabs>

### Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Actualizar el URD del Perfil Universal y sus permisos"
const updateUniversalProfileURD = async (vaultURDAddress) => {
  // crear una instancia del Perfil Universal
  const universalProfile = new web3.eth.Contract(
    UniversalProfile.abi,
    universalProfileAddress,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del Gestor de Claves
  const keyManager = new web3.eth.Contract(
    LSP6KeyManager.abi,
    keyManagerAddress,
  );

  const addressPermissionsOldArrayLengthHex = await myUP.methods[
    'getData(bytes32)'
  ](ERC725YDataKeys.LSP6['AddressPermissions[]'].length).call();

  const addressPermissionsNewArrayLength =
    web3.utils.hexToNumber(addressPermissionsOldArrayLengthHex) + 1;

  const addressPermissionsNewArrayLengthHex = web3.utils.padLeft(
    web3.utils.numberToHex(addressPermissionsNewArrayLength),
    64,
  );

  // el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
  const newElementIndexInArrayHex =
    addressPermissionsOldArrayLengthHex.substring(34, 66);

  const dataKeys = [
    URD_DATA_KEY,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
      newElementIndexInArrayHex,
    ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
      universalProfileURDAddress.substring(2),
  ];
  const dataValues = [
    universalProfileURDAddress,
    addressPermissionsNewArrayLengthHex,
    universalProfileURDAddress,
    PERMISSIONS.SUPER_SETDATA,
  ];

  // cifrar setData Calldata en el Perfil Universal
  const setDataCalldata = await universalProfile.methods[
    'setData(bytes32[],bytes[])'
  ](dataKeys, dataValues).encodeABI();

  // ejecutar el `setDataCalldata` en el Gestor de Claves
  await keyManager.methods['execute(bytes)'](setDataCalldata).send({
    from: EOA.address,
    gasLimit: 600_000,
  });
};

// actualizar el URD del Perfil Universal
await updateUniversalProfileURD(vaultURDAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Actualizar el URD del Perfil Universal y sus permisos"
const updateUniversalProfileURD = async (vaultURDAddress) => {
  // crear una instancia del Perfil Universal
  const universalProfile = new ethers.Contract(
    universalProfileAddress,
    UniversalProfile.abi,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del Gestor de Claves
  const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

  const addressPermissionsOldArrayLengthHex = await myUP['getData(bytes32)'](
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
  );

  const addressPermissionsNewArrayLength =
    ethers.toNumber(addressPermissionsOldArrayLengthHex) + 1;

  const addressPermissionsNewArrayLengthHex =
    '0x' + addressPermissionsNewArrayLength2.toString(16).padStart(64, '0');

  // el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
  const newElementIndexInArrayHex =
    addressPermissionsOldArrayLengthHex.substring(34, 66);

  const dataKeys = [
    URD_DATA_KEY,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
      newElementIndexInArrayHex,
    ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
      universalProfileURDAddress.substring(2),
  ];
  const dataValues = [
    universalProfileURDAddress,
    addressPermissionsNewArrayLengthHex,
    universalProfileURDAddress,
    PERMISSIONS.SUPER_SETDATA,
  ];

  // cifrar setData Calldata en el Perfil Universal
  const setDataCalldata = await universalProfile.interface.encodeFunctionData(
    'setData(bytes32[],bytes[])',
    [dataKeys, dataValues],
  );

  // ejecutar el `setDataCalldata` en el Gestor de Claves
  await keyManager.connect(EOA)['execute(bytes)'](setDataCalldata);
};

// actualizar el URD del Perfil Universal
await updateUniversalProfileURD(vaultURDAddress);
```

  </TabItem>

</Tabs>

## Final code - Deploy & Update

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Desplegar un URD de Perfil Universal, actualizar sus permisos y añadirlo al Perfil Universal."
import LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import {
  ERC725YDataKeys,
  PERMISSIONS,
} from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const EOA = web3.eth.accounts.wallet.add(privateKey);

const deployUniversalProfileURD = async () => {
  // crear una instancia del LSP1UniversalReceiverDelegateUP
  let universalProfileURD = new web3.eth.Contract(
    LSP1UniversalReceiverDelegateUP.abi,
  );

  // desplegar el contrato del Receptor Delegado Universal UP
  const universalProfileURDAddress = await universalProfileURD
    .deploy({
      data: LSP1UniversalReceiverDelegateUP.bytecode,
    })
    .send({
      from: EOA.address,
      gas: 5_000_000,
      gasPrice: '1000000000',
    })
    .on('receipt', (receipt) => {
      return receipt.contractAddress;
    });

  return universalProfileURDAddress;
};

const updateUniversalProfileURD = async (vaultURDAddress) => {
  // crear una instancia del Perfil Universal
  const universalProfile = new web3.eth.Contract(
    UniversalProfile.abi,
    universalProfileAddress,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del Gestor de Claves
  const keyManager = new web3.eth.Contract(
    LSP6KeyManager.abi,
    keyManagerAddress,
  );

  const addressPermissionsOldArrayLengthHex = await myUP.methods[
    'getData(bytes32)'
  ](ERC725YDataKeys.LSP6['AddressPermissions[]'].length).call();

  const addressPermissionsNewArrayLength =
    web3.utils.hexToNumber(addressPermissionsOldArrayLengthHex) + 1;

  const addressPermissionsNewArrayLengthHex = web3.utils.padLeft(
    web3.utils.numberToHex(addressPermissionsNewArrayLength),
    64,
  );

  // el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
  const newElementIndexInArrayHex =
    addressPermissionsOldArrayLengthHex.substring(34, 66);

  const dataKeys = [
    URD_DATA_KEY,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
      newElementIndexInArrayHex,
    ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
      universalProfileURDAddress.substring(2),
  ];
  const dataValues = [
    universalProfileURDAddress,
    addressPermissionsNewArrayLengthHex,
    universalProfileURDAddress,
    PERMISSIONS.SUPER_SETDATA,
  ];

  // cifrar setData Calldata en el Perfil Universal
  const setDataCalldata = await universalProfile.methods[
    'setData(bytes32[],bytes[])'
  ](dataKeys, dataValues).encodeABI();

  // ejecutar el `setDataCalldata` en el Gestor de Claves
  await keyManager.methods['execute(bytes)'](setDataCalldata).send({
    from: EOA.address,
    gasLimit: 600_000,
  });
};

// desplegar un nuevo URD del Perfil Universal y recuperar su dirección
const universalProfileURDAddress = await deployUniversalProfileURD();

// actualizar el URD del Perfil Universal
await updateUniversalProfileURD(vaultURDAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Desplegar un URD de Perfil Universal, actualizar sus permisos y añadirlo al Perfil Universal."
import LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import {
  ERC725YDataKeys,
  PERMISSIONS,
} from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';

// configura tu  EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(privateKey).connect(provider);

const deployUniversalProfileURD = async () => {
  // crear una Fábrica de Contratos LSP1UniversalReceiverDelegateUP
  let universalProfileURDFactory = new ethers.ContractFactory(
    LSP1UniversalReceiverDelegateUP.abi,
    LSP1UniversalReceiverDelegateUP.bytecode,
  );

  // desplegar el contrato del Receptor Delegado Universal UP
  const universalProfileURD = await universalProfileURDFactory
    .connect(EOA)
    .deploy();

  return universalProfileURD.target;
};

const updateUniversalProfileURD = async (vaultURDAddress) => {
  // crear una instancia del Perfil Universal
  const universalProfile = new ethers.Contract(
    universalProfileAddress,
    UniversalProfile.abi,
  );
  // obtener el propietario del Perfil Universal
  // en nuestro caso debería ser la dirección del Gestor de Claves
  const keyManagerAddress = await universalProfile.methods.owner().call();
  // crear una instancia del Gestor de Claves
  const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

  const addressPermissionsOldArrayLengthHex = await myUP['getData(bytes32)'](
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
  );

  const addressPermissionsNewArrayLength =
    ethers.toNumber(addressPermissionsOldArrayLengthHex) + 1;

  const addressPermissionsNewArrayLengthHex =
    '0x' + addressPermissionsNewArrayLength2.toString(16).padStart(64, '0');

  // el índice bytes16 `addressPermissionsOldArrayLengthHex` servirá como índice
  const newElementIndexInArrayHex =
    addressPermissionsOldArrayLengthHex.substring(34, 66);

  const dataKeys = [
    URD_DATA_KEY,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].index +
      newElementIndexInArrayHex,
    ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
      universalProfileURDAddress.substring(2),
  ];
  const dataValues = [
    universalProfileURDAddress,
    addressPermissionsNewArrayLengthHex,
    universalProfileURDAddress,
    PERMISSIONS.SUPER_SETDATA,
  ];

  // cifrar setData Calldata en el Perfil Universal
  const setDataCalldata = await universalProfile.interface.encodeFunctionData(
    'setData(bytes32[],bytes[])',
    [dataKeys, dataValues],
  );

  // ejecutar el `setDataCalldata` en el Gestor de Claves
  await keyManager.connect(EOA)['execute(bytes)'](setDataCalldata);
};

// desplegar un nuevo URD del Perfil Universal y recuperar su dirección
const universalProfileURDAddress = await deployUniversalProfileURD();

// actualizar el URD del Perfil Universal
await updateUniversalProfileURD(vaultURDAddress);
```

  </TabItem>

</Tabs>
