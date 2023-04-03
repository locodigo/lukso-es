---
sidebar_label: 'Ejecutar Transacciones por Retransmisión'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ejecutar Transacciones por Retransmisión

El estándar [LSP6 KeyManager](../../standards/universal-profile/lsp6-key-manager.md) permite a cualquiera ejecutar una transacción en representación de un perfil universal, siempre que disponga de una transacción válida que haya sido firmada por una clave que controle el Perfil Universal.

La ejecución por retransmisión permite casos de uso como los Servicios de Retransmisión de Transacciones, en los que los usuarios pueden enviar los detalles de sus transacciones a un tercero para que las ejecute, lo que aleja la carga de los costes de gas del usuario propietario del Perfil Universal.

Por ejemplo, Alice puede enviar una transacción cifrada que actualice la imagen [LSP3Profile](../../standards/universal-profile/lsp3-universal-profile-metadata.md) de su Perfil Universal a un segundo usuario, Bob, que ejecuta la transacción y paga el coste de gas de la transacción en representación de Alice.

Para ejecutar la transacción, Bob necesita saber:

- la ABI cifrada de la transacción que se ejecutará,
- la firma de la transacción,
- el nonce de la clave que firmó la transacción.

A continuación, la transacción se ejecuta a través de la función `executeRelayCall` del [LSP6KeyManager](../../standards/universal-profile/lsp6-key-manager.md).

## Generar la carga útil de la transacción firmada

Este ejemplo muestra cómo preparar una transacción para que la ejecute un tercero. Esta lógica puede ser implementada del lado del cliente y luego enviada a una aplicación o servicio de terceros, como un servicio de Transaction Relay, para ser ejecutada.

Asegúrate de tener instaladas las siguientes dependencias antes de comenzar este tutorial:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)
- [`@lukso/eip191-signer.js`](https://github.com/lukso-network/tools-eip191-signer)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```shell title="Instala las dependencias"
npm install web3 @lukso/lsp-smart-contracts @lukso/eip191-signer.js
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instala las dependencias"
npm install ethers @lukso/lsp-smart-contracts @lukso/eip191-signer.js
```

  </TabItem>

</Tabs>

### Paso 1 - Configurar importaciones y constantes

Para cifrar una transacción, necesitamos la dirección del contrato inteligente de Perfil Universal y la clave privada de una de las claves del controlador con suficientes [permisos LSP6](../../standards/universal-profile/lsp6-key-manager.md#permissions) para ejecutar la transacción.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones y Constantes"
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { EIP191Signer } from '@lukso/eip191-signer.js';
import { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const msgValue = 0; // Cantidad de tokens nativos que se enviarán

// configurar la cuenta del controlador de perfil universal
const controllerPrivateKey = '0x...';
const controllerAccount = web3.eth.accounts.wallet.add(controllerPrivateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones y Constantes"
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { EIP191Signer } from '@lukso/eip191-signer.js';
import { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const msgValue = 0; // Cantidad de tokens nativos que se enviarán

// configurar la cuenta del controlador de perfil universal
const controllerPrivateKey = '0x...';
const controllerAccount = new ethers.Wallet(controllerPrivateKey).connect(
  provider,
);
```

  </TabItem>

</Tabs>

### Paso 2 - Preparar las instancias de contacto

Obtendremos las instancias de contrato para el [Perfil universal](../../standards/universal-profile/lsp0-erc725account.md) y el [Gestor de claves](../../standards/universal-profile/lsp6-key-manager.md) para utilizarlas posteriormente en esta guía.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```typescript title="Instancias del contrato"
const universalProfile = new web3.eth.Contract(UniversalProfileContract.abi, universalProfileAddress);

const keyManagerAddress = await universalProfile.methods.owner().call();
const keyManager = new web3.eth.Contract(KeyManagerContract.abi, keyManagerAddress);
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

<!-- prettier-ignore-start -->

```typescript title="Instancias del contrato"
const universalProfile = new ethers.Contract(universalProfileAddress, UniversalProfileContract.abi);

const keyManagerAddress = await universalProfile.owner();
const keyManager = new ethers.Contract(keyManagerAddress, KeyManagerContract.abi);
```

<!-- prettier-ignore-end -->

  </TabItem>

</Tabs>

### Paso 3 - Obtener nonce de la dirección del controlador

Obtén el `nonce` de la clave del controlador desde el KeyManager instanciando la instancia del contrato inteligente KeyManager y llamando a la función [`getNonce`](../../standards/smart-contracts/lsp6-key-manager.md#getnonce).

El `channelId` se utiliza para evitar conflictos de nonce cuando varias aplicaciones envían transacciones al mismo KeyManager al mismo tiempo. Más información sobre [ejecución fuera de orden aquí](../../standards/universal-profile/lsp6-key-manager.md#out-of-order-execution).

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

<!-- prettier-ignore-start -->

```typescript title="Obtener el nonce de la clave del controlador"
const channelId = 0;
const nonce = await keyManager.methods.getNonce(controllerAccount.address, channelId).call();
```

<!-- prettier-ignore-end -->

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Obtener el nonce de la clave del controlador"
const channelId = 0;
const nonce = await keyManager.getNonce(controllerAccount.address, channelId);
```

  </TabItem>

</Tabs>

### Paso 4 - Cifrar el ABI de una transacción

Cifra el ABI de la transacción que quieres que se ejecute. En este caso, una transferencia LYX a una dirección de destinatario.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Cifrar ABI de transacciones"
const abiPayload = universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](
  0, // Operation type: CALL
  '0x...', // Recipient address
  web3.utils.toWei('1'), // Value
  '0x', // Data
).encodeABI();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Cifrar ABI de transacciones"
const abiPayload = universalProfile.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [
    0, // Operation type: CALL
    '0x...', // Recipient address
    web3.utils.toWei('1'), // Value
    '0x', // Data
  ],
);
```

  </TabItem>

</Tabs>

:::tip ERC725X execute

Puedes encontrar más información sobre la [llamada ERC725X `execute` aquí].(../../standards/smart-contracts/erc725-contract#execute---erc725x).

:::

###Paso 5 - Firmar la transacción

A continuación, firma el mensaje de transacción a partir de la clave de controlador del Perfil Universal.

El mensaje se construye firmando la `keyManagerAddress`, `keyManagerVersion`, `chainId`, `nonce` del firmante, `value` y `abiPayload`.

:::tip ERC725X execute

Para más información, consulta: [¿Cómo firmar transacciones de retransmisión?](../../standards/universal-profile/lsp6-key-manager.md#how-to-sign-relay-transactions)

:::

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Firmar la transacción"
const chainId = await web3.eth.getChainId(); // will be 2828 on L16

let encodedMessage = web3.utils.encodePacked(
  { value: LSP6_VERSION, type: 'uint256' },
  { value: chainId, type: 'uint256' },
  { value: nonce, type: 'uint256' },
  { value: msgValue, type: 'uint256' },
  { value: abiPayload, type: 'bytes' },
);

let eip191Signer = new EIP191Signer();

let { signature } = await eip191Signer.signDataWithIntendedValidator(
  keyManagerAddress,
  encodedMessage,
  controllerPrivateKey,
);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Firmar la transacción"
const { chainId } = await provider.getNetwork(); // will be 2828 on L16

let encodedMessage = web3.utils.encodePacked(
  { value: LSP6_VERSION, type: 'uint256' },
  { value: chainId, type: 'uint256' },
  { value: nonce, type: 'uint256' },
  { value: msgValue, type: 'uint256' },
  { value: abiPayload, type: 'bytes' },
);

let eip191Signer = new EIP191Signer();

let { signature } = await eip191Signer.signDataWithIntendedValidator(
  keyManagerAddress,
  encodedMessage,
  controllerPrivateKey,
);
```

  </TabItem>

</Tabs>

Ahora la `signature`, `abiPayload`, `nonce` y `keyManagerAddress` pueden ser enviados a un tercero para ejecutar la transacción usando [`executeRelayCall`](../../standards/smart-contracts/lsp6-key-manager#executerelaycall).

## Ejecutar mediante `executeRelayCall`

:::info
Este ejemplo muestra cómo un tercero puede ejecutar una transacción en nombre de otro usuario.
:::

Para ejecutar una transacción firmada, la carga útil ABI requiere:

- la **dirección del contrato KeyManager**
- la **carga útil ABI de la transacción**
- la **carga útil de la transacción firmada**
- el **nonce** de la clave del controlador que firmó la transacción.

:::note

Para obtener la dirección de KeyManager a partir de la dirección de UniversalProfile, llama a la función `owner` del contrato de Perfil Universal.

:::

<Tabs>

  <TabItem value="web3js" label="web3.js">

```javascript title="Enviar la transacción"
const executeRelayCallTransaction = await keyManager.methods[
  'executeRelayCall(bytes,uint256,bytes)'
](signature, nonce, abiPayload).send({
  from: controllerAccount.address,
  gasLimit: 300_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript title="Enviar la transacción"
const executeRelayCallTransaction = await keyManager
  .connect(controllerAccount)
  ['executeRelayCall(bytes,uint256,bytes)'](signature, nonce, abiPayload);
```

  </TabItem>

</Tabs>

:::tip LSP6KeyManager executeRelayCall

Puedes encontrar más información sobre el [LSP6KeyManager `executeRelayCall` aquí](../../standards/smart-contracts/lsp6-key-manager#executerelaycall).

:::

## Código final

<Tabs>

  <TabItem value="web3js" label="web3.js">

```javascript title="Final code"
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { EIP191Signer } from '@lukso/eip191-signer.js';
import { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const msgValue = 0; // Cantidad de tokens nativos que se enviarán

// configurar la cuenta del controlador de perfil universal
const controllerPrivateKey = '0x...';
const controllerAccount = web3.eth.accounts.wallet.add(controllerPrivateKey);

const universalProfile = new web3.eth.Contract(
  UniversalProfileContract.abi,
  universalProfileAddress,
);

const keyManagerAddress = await universalProfile.methods.owner().call();
const keyManager = new web3.eth.Contract(
  KeyManagerContract.abi,
  keyManagerAddress,
);

const channelId = 0;
const nonce = await keyManager.methods
  .getNonce(controllerAccount.address, channelId)
  .call();

const abiPayload = universalProfile.methods[
  'execute(uint256,address,uint256,bytes)'
](
  0, // Tipo de operación: CALL
  '0x...', // Dirección del destinatario
  web3.utils.toWei('1'), // Valor
  '0x', // Datos
).encodeABI();

const chainId = await web3.eth.getChainId(); // será 2828 en la L16

let encodedMessage = web3.utils.encodePacked(
  { value: LSP6_VERSION, type: 'uint256' },
  { value: chainId, type: 'uint256' },
  { value: nonce, type: 'uint256' },
  { value: msgValue, type: 'uint256' },
  { value: abiPayload, type: 'bytes' },
);

let eip191Signer = new EIP191Signer();

let { signature } = await eip191Signer.signDataWithIntendedValidator(
  keyManagerAddress,
  encodedMessage,
  controllerPrivateKey,
);

const executeRelayCallTransaction = await keyManager.methods[
  'executeRelayCall(bytes,uint256,bytes)'
](signature, nonce, abiPayload).send({
  from: controllerAccount.address,
  gasLimit: 300_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```javascript title="Final code"
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { EIP191Signer } from '@lukso/eip191-signer.js';
import { LSP6_VERSION } from '@lukso/lsp-smart-contracts/constants';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const universalProfileAddress = '0x...';
const msgValue = 0; // Cantidad de tokens nativos que se enviarán

// configurar la cuenta del controlador de perfil universal
const controllerPrivateKey = '0x...';
const controllerAccount = new ethers.Wallet(controllerPrivateKey).connect(
  provider,
);

const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfileContract.abi,
);

const keyManagerAddress = await universalProfile.owner();
const keyManager = new ethers.Contract(
  keyManagerAddress,
  KeyManagerContract.abi,
);

const channelId = 0;
const nonce = await keyManager.getNonce(controllerAccount.address, channelId);

const abiPayload = universalProfile.interface.encodeFunctionData(
  'execute(uint256,address,uint256,bytes)',
  [
    0, // Tipo de operación:: CALL
    '0x...', // Dirección del destinatario
    web3.utils.toWei('1'), // Valor
    '0x', // Datos
  ],
);

const { chainId } = await provider.getNetwork(); // será 2828 en la L16

let encodedMessage = web3.utils.encodePacked(
  { value: LSP6_VERSION, type: 'uint256' },
  { value: chainId, type: 'uint256' },
  { value: nonce, type: 'uint256' },
  { value: msgValue, type: 'uint256' },
  { value: abiPayload, type: 'bytes' },
);

let eip191Signer = new EIP191Signer();

let { signature } = await eip191Signer.signDataWithIntendedValidator(
  keyManagerAddress,
  encodedMessage,
  controllerPrivateKey,
);

const executeRelayCallTransaction = await keyManager
  .connect(controllerAccount)
  ['executeRelayCall(bytes,uint256,bytes)'](signature, nonce, abiPayload);
```

  </TabItem>

</Tabs>
