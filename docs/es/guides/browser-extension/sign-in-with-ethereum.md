---
sidebar_label: 'Iniciar sesión con Ethereum'
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Iniciar sesión con Ethereum

La [Extensión de navegador LUKSO](./install-browser-extension.md) es compatible con [EIP-4361: Inicio de sesión con Ethereum](https://eips.ethereum.org/EIPS/eip-4361).
Por lo tanto, si el mensaje que desea firmar cumple esta norma, la Extensión de navegador LUKSO mostrará una pantalla de inicio de sesión personalizada.

<div style={{textAlign: 'center'}}>
<img
    src="/img/extension/lukso-extension-siwe.webp"
    alt="Ejemplo de pantalla de acceso con Ethereum"
/>
</div>

## 1. Obtener la dirección del perfil universal

La extensión del navegador inyecta la dirección del contrato del perfil universal en la página. Necesitamos esta dirección para generar el mensaje a firmar.

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

```js
import { ethers } from 'ethers';

const etherProvider = new ethers.providers.Web3Provider(window.ethereum);

const accountsRequest = await etherProvider.send('eth_requestAccounts', []);
const signer = etherProvider.getSigner();
const upAddress = await signer.getAddress();
// 0x3E39275Ed3B370E074534edeE13a166512AD32aB
```

  </TabItem>
  <TabItem value="web3" label="web3.js">

```js
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const accountsRequest = await web3.eth.requestAccounts();
const accounts = await web3.eth.getAccounts();
const upAddress = accounts[0];
// 0x3E39275Ed3B370E074534edeE13a166512AD32aB
```

  </TabItem>
</Tabs>

## 2. Preparar el mensaje

Para activar la pantalla de inicio de sesión con Ethereum (SIWE), deberás preparar un mensaje con un formato específico, como puedes ver en la [página estándar](https://eips.ethereum.org/EIPS/eip-4361) o a continuación.

<details>
<summary>Plantilla SIWE</summary>

<!-- prettier-ignore-start -->

```
${domain} quiere que inicies sesión con tu cuenta de Ethereum:
${address}

${statement}

URI: ${uri}
Version: ${version}
Chain ID: ${chain-id}
Nonce: ${nonce}
Issued At: ${issued-at}
Expiration Time: ${expiration-time}
Not Before: ${not-before}
Request ID: ${request-id}
Resources:
- ${resources[0]}
- ${resources[1]}
  ...
- ${resources[n]}
```

<!-- prettier-ignore-end -->

</details>

En JavaScript, puedes utilizar la librería [`siwe`](https://www.npmjs.com/package/siwe).

<Tabs>
  <TabItem value="siwe" label="Con la librería siwe">

```js
import { SiweMessage } from 'siwe';

// ...

const message = new SiweMessage({
  domain: window.location.host,
  address: upAddress,
  statement: 'Al iniciar sesión, está aceptando los términos y condiciones',
  uri: window.location.origin,
  version: '1',
  chainId: '2828', // Para LUKSO L16
  resources: ['https://terms.website.com'],
});

const siweMessage = message.prepareMessage();
```

  </TabItem>
   <TabItem value="plain" label="Sin librería siwe">

<!-- prettier-ignore-start -->

```js
// ...

const domain = window.location.host;
const origin = window.location.origin;
const LUKSO_L16_CHAIN_ID = '2828';
const nonce = 'm97bdsjo'; // un token aleatorio de al menos 8 caracteres alfanuméricos
const date = new Date();
const issuedAt = date.toISOString();

const siweMessage = `${domain} quiere que inicies sesión con tu cuenta de Ethereum:

${upAddress}

Al iniciar sesión, está aceptando los términos y condiciones.

URI: ${origin}
Versión: 1
Chain ID: ${LUKSO_L16_CHAIN_ID}
Nonce: ${nonce}
Emitido en: ${issuedAt}
Recursos:
- https://terms.website.com`;
```
<!-- prettier-ignore-end -->

</TabItem>
</Tabs>

## 3. Firmar el mensaje

Una vez que dispongas de la dirección del perfil universal, podrás solicitar una firma. La extensión del navegador firmará el mensaje con la clave de controlador utilizada por la extensión (un contrato inteligente no puede firmar).

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

:::caution

Cuando se llama a Ethers.js [`signer.signMessage( message )`](https://docs.ethers.io/v5/api/signer/#Signer-signMessage), utiliza la llamada RPC `personal_sign` bajo el capó. Sin embargo, nuestra extensión sólo soporta la última versión de [`eth_sign`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign). Por lo tanto, es necesario utilizar `provider.send("eth_sign", [upAddress, message])` como sustituto..

Puedes obtener más información [aquí](https://github.com/MetaMask/metamask-extension/issues/15857) y [aquí](https://github.com/ethers-io/ethers.js/issues/1544).

:::

<!-- prettier-ignore-start -->

```js
const signature = await etherProvider.send('eth_sign', [upAddress, siweMessage]);
// 0x38c53...
```

<!-- prettier-ignore-end -->

  </TabItem>
   <TabItem value="web3" label="web3.js">

```js
const signature = await web3.eth.sign(siweMessage, upAddress);
// 0x38c53...
```

</TabItem>
</Tabs>

🎉 Has recibido el mensaje firmado. Ahora, debes validarlo.

## 4. Validar la firma

La aplicación ha recibido un mensaje firmado por la dirección del controlador del perfil universal. Para finalizar el inicio de sesión, es necesario verificar si el mensaje fue firmado por una dirección que cuenta con la autorización `SIGN` para este UP.

Para ello, puedes utilizar la función [`isValidSignature(...)`](../../standards/smart-contracts/lsp0-erc725-account#isvalidsignature) para comprobar si la firma ha sido suscrita ([EIP-1271](https://eips.ethereum.org/EIPS/eip-1271)) por un EOA que tenga el permiso [`SIGN`](../../standards/universal-profile/lsp6-key-manager#permissions) sobre el perfil universal.

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

<!-- prettier-ignore-start -->

```js
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';

// ...

const myUniversalProfileContract = new ethers.Contract(upAddress, UniversalProfileContract.abi, signer);

const hashedMessage = ethers.utils.hashMessage(siweMessage);

const isValidSignature = await myUniversalProfileContract.isValidSignature(hashedMessage, signature);

const MAGIC_VALUE = '0x1626ba7e'; // https://eips.ethereum.org/EIPS/eip-1271

if (isValidSignature === MAGIC_VALUE) {
  console.log('🎉 ¡Registro exitoso!');
} else {
  // La EOA que firmó el mensaje no cuenta con autorización SIGN sobre este UP.
  console.log('😭 Falló el inicio de sesión');
}
```

<!-- prettier-ignore-end -->

  </TabItem>
  <TabItem value="web3" label="web3.js">

<!-- prettier-ignore-start -->

```js
import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';

// ...

const myUniversalProfileContract = new web3.eth.Contract(UniversalProfileContract.abi, upAddress);

const hashedMessage = web3.eth.accounts.hashMessage(siweMessage);

const MAGIC_VALUE = '0x1626ba7e'; // https://eips.ethereum.org/EIPS/eip-1271

// si la firma es válida debería devolver el valor mágico 0x1626ba7e
const isValidSignature = await myUniversalProfileContract.methods.isValidSignature(hashedMessage, signature).call();

if (isValidSignature === MAGIC_VALUE) {
  console.log('🎉 ¡Registro exitoso!');
} else {
  // La EOA que firmó el mensaje no cuenta con autorización SIGN sobre este UP.
  console.log('😭 Falló el inico de sesión');
}
```

<!-- prettier-ignore-end -->

  </TabItem>
</Tabs>

Si `isValidSignature` devuelve el valor mágico: `0x1626ba7e`, entonces, el mensaje fue firmado por un EOA que cuenta con autorización `SIGN` para este Perfil Universal.