---
sidebar_label: 'Firmar mensajes arbitrarios'
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmar mensajes arbitrarios

:::tip

Si quieres autenticar a un usuario, consulta la página [Iniciar sesión con Ethereum](./sign-in-with-ethereum.md).

:::

Este artículo explica cómo solicitar una firma a la [Extensión de navegador LUKSO](../browser-extension/install-browser-extension.md).

<div style={{textAlign: 'center'}}>
<img
    src="/img/extension/lukso-extension-sign.webp"
    alt="Ejemplo de pantalla de inicio de sesión con Ethereum"
/>
</div>

## 1. Inicializar un proveedor blockchain

La extensión del navegador inyecta una API global en el sitio web que se visita. Esta API está disponible en `window.ethereum`. Puede utilizar este objeto para inicializar su librería [web3.js](https://web3js.readthedocs.io/en/v1.8.0/) o [Ethers.js](https://docs.ethers.io/v5/).

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

```js
import { ethers } from 'ethers';

const etherProvider = new ethers.providers.Web3Provider(window.ethereum);
```

  </TabItem>
  <TabItem value="web3" label="web3.js">

```js
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
```

  </TabItem>
</Tabs>

## 2. Obtener la dirección del perfil universal

Una llamada a `requestAccounts` abrirá la ventana emergente de la extensión y pedirá al usuario que seleccione su perfil universal para interactuar con la aplicación. La extensión de LUKSO enviará la dirección del perfil universal a su aplicación (que es la dirección del contrato inteligente [`LSP0 - ERC725 Account`](../../standards/universal-profile/lsp0-erc725account.md)).

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

```js
const accountsRequest = await etherProvider.send('eth_requestAccounts', []);
const signer = etherProvider.getSigner();
const upAddress = await signer.getAddress();
// 0x3E39275Ed3B370E074534edeE13a166512AD32aB
```

  </TabItem>
  <TabItem value="web3" label="web3.js">

```js
const accountsRequest = await web3.eth.requestAccounts();
const accounts = await web3.eth.getAccounts();
const upAddress = accounts[0];
// 0x3E39275Ed3B370E074534edeE13a166512AD32aB
```

  </TabItem>
  <TabItem value="raw" label="raw">

```js
const accountsRequest = await window.ethereum.request({
  method: 'eth_requestAccounts',
  params: [],
});
const accounts = await window.ethereum.request({
  method: 'eth_accounts',
  params: [],
});

const upAddress = accounts[0];
```

  </TabItem>
</Tabs>

## 3. Firmar el mensaje

Una vez que dispongas de la dirección del perfil universal, podrás solicitar una firma. La extensión del navegador firmará el mensaje con la clave de controlador utilizada por la extensión (un contrato inteligente no puede firmar).

<Tabs groupId="provider">
  <TabItem value="ethers" label="Ethers.js">

:::caution

Cuando se llama a Ethers.js [`signer.signMessage( message )`](https://docs.ethers.io/v5/api/signer/#Signer-signMessage), utiliza la llamada RPC `personal_sign` bajo el capó. Sin embargo, nuestra extensión sólo soporta la última versión de [`eth_sign`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign). Por lo tanto, es necesario utilizar `provider.send("eth_sign", [upAddress, message])` como alternativa.

Puedes obtener más información [aquí](https://github.com/MetaMask/metamask-extension/issues/15857) y [aquí](https://github.com/ethers-io/ethers.js/issues/1544).

:::

<!-- prettier-ignore-start -->

```js
const message = 'Por favor, firme este mensaje 😊';
const signature = await etherProvider.send('eth_sign', [upAddress, message]);
// 0x38c53...
```

<!-- prettier-ignore-end -->

  </TabItem>
  <TabItem value="web3" label="web3.js">

```js
const message = 'Por favor, firme este mensaje 😊';
const signature = await web3.eth.sign(message, upAddress);
// 0x38c53...
```

  </TabItem>
</Tabs>

## 4. Validar la firma

La aplicación ha recibido un mensaje firmado por la dirección del controlador del perfil universal. Para finalizar el inicio de sesión, es necesario verificar si el mensaje fue firmado por una dirección que tiene la autorización `SIGN` para este perfil universal.

El proceso de verificación es el mismo que para [Sign-In with Ethereum](./sign-in-with-ethereum.md#4-verify-the-signature), allí puedes consultar cómo se hace.