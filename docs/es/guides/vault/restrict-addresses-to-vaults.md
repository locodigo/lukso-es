---
sidebar_label: 'Restringir las Direcciones a las Bóvedas'
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restringir las Direcciones a las Bóvedas

Como se menciona en la [primera guía sobre el Vault](./create-a-vault.md), el **Vault** se puede utilizar para restringir diferentes direcciones (protocolos, otros dispositivos, etc..) a que ejecuten y establezcan datos en él en lugar de hacerlo directamente en el Perfil Universal. 

De esta forma, al **otorgar permisos a un tercero** de ejecución a través de tu perfil, este tercero sólo podrá interactuar con la Bóveda, y todos los demás activos estarán a salvo.

![Guía - Restringir direcciones a un LSP9Vault](/img/guides/lsp9/restrict-protocol-to-vault.jpeg)

## Conceder Permisos a Terceros

:::note

Asegúrate de no conceder a la dirección de terceros los **SUPER Permissions**. De lo contrario, **la restricción AllowedAddresses** no funcionará.

:::

Consulta la guía de **[concesión de permisos a terceros](../key-manager/give-permissions.md)**, y asegúrate de conceder a la dirección del tercero el **Permiso de LLAMADA (Call Permission)**.

## Utilizar el permiso AllowedAddresses para Terceras Partes

En este paso, después de conceder a la 3ª parte el permiso **LLAMAR**, necesitaremos **restringir la dirección de la 3ª parte** para que sólo interactúe con la **dirección de la Bóveda**. Utilizaremos el permiso [AllowedCalls permission](../../standards/universal-profile/lsp6-key-manager.md#allowed-calls) del Key Manager.

## Configuración

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial.

- Puedes usar [`web3.js`](https://github.com/web3/web3.js) o [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- DEBES instalar [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)
- DEBERÍAS instalar [`@erc725/erc725.js`](https://github.com/ERC725Alliance/erc725.js)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Instala las dependencias"
npm install web3 @lukso/lsp-smart-contracts @erc725/erc725.js
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instala las dependencias"
npm install ethers @lukso/lsp-smart-contracts @erc725/erc725.js
```

  </TabItem>

</Tabs>

## Paso 1 - Importaciones, Constantes y EOA

Para esta guía primero necesitaremos e importaremos los _ABIs_ para los contratos de Perfil Universal y Gestor de Claves. También importaremos el `ERC725YDataKeys` para recuperar la clave de datos para el [permiso AllowedCalls](../../standards/universal-profile/lsp6-key-manager.md#allowed-calls).  
Como constantes necesitaremos almacenar las direcciones para el Perfil Universal, la Bóveda y el tercero restringido.  
Por último, necesitaremos una clave privada con los _permisos_ adecuados, en nuestro caso [**ADDCONTROLLER permission**](../../standards/universal-profile/lsp6-key-manager.md#permissions).

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { encodeKey } from '@erc725/erc725.js/build/main/src/lib/utils.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x..'; // dirección del UP
const vaultAddress = '0x..'; // dirección de la Bóveda
const thirdPartyAddress = '0x..'; // dirección del tercero al que desea restringir

// configura tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { encodeKey } from '@erc725/erc725.js/build/main/src/lib/utils.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x..'; // dirección del UP
const vaultAddress = '0x..'; // dirección de la Bóveda
const thirdPartyAddress = '0x..'; // dirección del tercero al que desea restringir

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

## Paso 2 - Crear instancias de contrato

En este punto crearemos instancias para los siguientes contratos:

- [**Perfil Universal**](../../standards/universal-profile/lsp0-erc725account.md)
- [**Gestor de Claves**](../../standards/universal-profile/lsp6-key-manager.md)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancias de contrato de Perfil Universal y Gestor de Claves"
// crear una instancia del UP
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);

// obtener la dirección del Gestor de Claves del UP
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del Gestor de Claves
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancias de contrato de Perfil Universal y Gestor de Claves"
// crear una instancia del UP
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);

// obtener la dirección del Gestor de Claves del UP
const keyManagerAddress = await universalProfile.owner();
// crear una instancia del Gestor de Claves
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
```

  </TabItem>

</Tabs>

## Paso 3 - Cifrar los calldata para cifrar [`AllowedCalls`](../../standards/universal-profile/lsp6-key-manager.md#allowed-calls)

Ahora tenemos que cifrar las **Llamadas Permitidas** que queremos para la _Dirección de Terceros_. Una vez hecho esto, cifraremos un calldata que actualizará la clave de datos _Allowed Calls_ con las **Allowed Calls** cifradas.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Calldata que actualizará las Llamadas Permitidas de una dirección de Controlador"
const allowedCallsDataKey = // construcción de la clave de datos de las direcciones permitidas
  ERC725YDataKeys.LSP6['AddressPermissions:AllowedCalls'] +
  thirdPartyAddress.substring(2); // de la tercera parte

const allowedCallsSchema = {
  name: 'AddressPermissions:AllowedCalls:<address>',
  key: '0x4b80742de2bf393a64c70000<address>',
  keyType: 'MappingWithGrouping',
  valueType: '(bytes4,address,bytes4)[CompactBytesArray]',
  valueContent: '(Bytes4,Address,Bytes4)',
};

const allowedCallsDataValue = encodeKey(allowedCallsSchema, [
  '0xffffffff',
  vaultAddress,
  '0xffffffff',
]);

// cifrar setData calldata en el UP
const setDataCalldata = await universalProfile.methods[
  'setData(bytes32,bytes)'
](allowedCallsDataKey, allowedCallsDataValue).encodeABI();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Calldata que actualizará las Llamadas Permitidas de una dirección de Controlador"
const allowedCallsDataKey = // construcción de la clave de datos de las direcciones permitidas
  ERC725YDataKeys.LSP6['AddressPermissions:AllowedCalls'] +
  thirdPartyAddress.substring(2); // de la tercera parte

const allowedCallsSchema = {
  name: 'AddressPermissions:AllowedCalls:<address>',
  key: '0x4b80742de2bf393a64c70000<address>',
  keyType: 'MappingWithGrouping',
  valueType: '(bytes4,address,bytes4)[CompactBytesArray]',
  valueContent: '(Bytes4,Address,Bytes4)',
};

const allowedCallsDataValue = encodeKey(allowedCallsSchema, [
  '0xffffffff',
  vaultAddress,
  '0xffffffff',
]);

// cifrar setData calldata en el UP
const setDataCalldata = universalProfile.interface.encodeFunctionData(
  'setData(bytes32,bytes)',
  [allowedCallsDataKey, allowedCallsDataValue],
);
```

  </TabItem>

</Tabs>

## Paso 4 - Ejecutar a través del Gestor de Claves

Finalmente enviaremos una transacción que ejecutará el calldata `setData(...)` en el Perfil Universal a través del Gestor de Claves.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Enviar transacción a ser ejecutada en el contrato del Perfil Universal a través del Gestor de Claves"
// ejecutar el setDataCalldata en el Gestor de Claves
await keyManager.methods['execute(bytes)'](setDataCalldata).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Enviar transacción a ser ejecutada en el contrato del Perfil Universal a través del Gestor de Claves"
// ejecutar el setDataCalldata en el Gestor de Claves
await myKM.connect(myEOA)['execute(bytes)'](setDataCalldata);
```

  </TabItem>

</Tabs>

## Código final

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Establecer las Direcciones Permitidas en la dirección de terceros"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { encodeKey } from '@erc725/erc725.js/build/main/src/lib/utils.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x..'; // dirección del UP
const vaultAddress = '0x..'; // dirección de la Bóveda
const thirdPartyAddress = '0x..'; // dirección del tercero al que desea restringir

// configura tu EOA
const privateKey = '0x...';
const myEOA = web3.eth.accounts.wallet.add(privateKey);

// crear una instancia del UP
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);

// obtener la dirección del Gestor de Claves del UP
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del Gestor de Claves
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);

const allowedCallsDataKey = // construcción de la clave de datos de las direcciones permitidas
  ERC725YDataKeys.LSP6['AddressPermissions:AllowedCalls'] +
  thirdPartyAddress.substring(2); // de la tercera parte

const allowedCallsSchema = {
  name: 'AddressPermissions:AllowedCalls:<address>',
  key: '0x4b80742de2bf393a64c70000<address>',
  keyType: 'MappingWithGrouping',
  valueType: '(bytes4,address,bytes4)[CompactBytesArray]',
  valueContent: '(Bytes4,Address,Bytes4)',
};

const allowedCallsDataValue = encodeKey(allowedCallsSchema, [
  '0xffffffff',
  vaultAddress,
  '0xffffffff',
]);

// cifrar setData calldata en el UP
const setDataCalldata = await universalProfile.methods[
  'setData(bytes32,bytes)'
](allowedCallsDataKey, allowedCallsDataValue).encodeABI();

// ejecutar el setDataCalldata en el Gestor de Claves
await keyManager.methods['execute(bytes)'](setDataCalldata).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Establecer las Direcciones Permitidas en la dirección de terceros"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { encodeKey } from '@erc725/erc725.js/build/main/src/lib/utils.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x..'; // dirección del UP
const vaultAddress = '0x..'; // dirección de la Bóveda
const thirdPartyAddress = '0x..'; // dirección del tercero al que desea restringir

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const myEOA = new ethers.Wallet(privateKey).connect(provider);

// crear una instancia del UP
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);

// obtener la dirección del Gestor de Claves del UP
const keyManagerAddress = await universalProfile.owner();
// crear una instancia del Gestor de Claves
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

const allowedCallsDataKey = // construcción de la clave de datos de las direcciones permitidas
  ERC725YDataKeys.LSP6['AddressPermissions:AllowedCalls'] +
  thirdPartyAddress.substring(2); // de la tercera parte

const allowedCallsSchema = {
  name: 'AddressPermissions:AllowedCalls:<address>',
  key: '0x4b80742de2bf393a64c70000<address>',
  keyType: 'MappingWithGrouping',
  valueType: '(bytes4,address,bytes4)[CompactBytesArray]',
  valueContent: '(Bytes4,Address,Bytes4)',
};

const allowedCallsDataValue = encodeKey(allowedCallsSchema, [
  '0xffffffff',
  vaultAddress,
  '0xffffffff',
]);

// cifrar setData calldata en el UP
const setDataCalldata = universalProfile.interface.encodeFunctionData(
  'setData(bytes32,bytes)',
  [allowedCallsDataKey, allowedCallsDataValue],
);

// ejecutar el setDataCalldata en el Gestor de Claves
await myKM.connect(myEOA)['execute(bytes)'](setDataCalldata);
```

  </TabItem>

</Tabs>
