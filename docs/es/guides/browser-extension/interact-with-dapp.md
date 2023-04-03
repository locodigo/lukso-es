---
sidebar_label: 'Interactuar con una dApp'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactuar con una dApp

:::danger

La Extensión del Navegador UP está actualmente en la versión **alfa de desarrollo**. ¡NO la utilices en producción!

:::

:::note

Si tienes **MetaMask** instalado, *haz click derecho en ambos* MetaMask y Extensión UP y selecciona "Esto puede leer y cambiar datos del sitio > cuando haces click en la extensión". De esta manera puedes seleccionar por pestaña, que extensión puede leer tu sitio. Puedes restablecerlo cerrando la pestaña.

<img width="400" src="https://user-images.githubusercontent.com/232662/192822200-392b19f1-321b-4a59-928a-f71876bec6f3.png" />

:::

## Configuración

La extensión inyecta un objeto `ethereum` en una página web como `window.ethereum` para interactuar con la extensión.

### 1. Inicializar un proveedor de blockchain.

<Tabs>
  <TabItem value="web3" label="web3">

```js
import Web3 from 'web3';
const web3 = new Web3(window.ethereum);
```

  </TabItem>
  <TabItem value="etherjs" label="etherjs">

```js
import { ethers } from 'ethers';
const etherProvider = new ethers.providers.Web3Provider(window.ethereum);
```

  </TabItem>
</Tabs>

### 2. Obtener acceso a la dirección UP en uso.

Una llamada a `requestAccounts` abrirá una ventana emergente con la extensión para autorizar una cuenta..

<Tabs>
  <TabItem value="web3" label="web3">

```js
const accountsRequest: string[] = await web3.eth.requestAccounts();
const accounts: string[] = await web3.eth.getAccounts(); //también debería arrojar la misma dirección
```

  </TabItem>
  <TabItem value="etherjs" label="etherjs">

```js
const accountsRequest: string[] = await etherProvider.send(
  'eth_requestAccounts',
  [],
);
const signer = etherProvider.getSigner();
await signer.getAddress(); //también debería arrojar la misma dirección
```

  </TabItem>
  <TabItem value="raw" label="raw">

```js
const accountsRequest: string[] = await window.ethereum.request({
  method: 'eth_requestAccounts',
  params: [],
});
const accounts: string[] = await window.ethereum.request({
  method: 'eth_accounts',
  params: [],
}); //también debería arrojar la misma dirección
```

  </TabItem>
</Tabs>

## Operaciones

Cada operación abrirá una ventana emergente con la extensión para que el usuario confirme la transacción o firme el mensaje..

:::note
Si no dispones de fondos en tu EOA, la aplicación utilizará de forma predeterminada el servicio de retransmisión para pagar las cuotas de gas (ignorando así las propiedades de gas).
:::

### Enviar una transacción

Puedes enviar cualquier transacción (una transferencia de valor o una interacción de contrato inteligente con o sin valor).

<Tabs>
  <TabItem value="web3" label="web3">

```js
await web3.eth.sendTransaction({
  from: UP_ADDRESS,
  to: RECIPIENT_ADDRESS,
  value: 100,
  data: '0x',
  gas: 5_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>
  <TabItem value="etherjs" label="etherjs">

```js
await signer.sendTransaction({
  from: UP_ADDRESS,
  to: RECIPIENT_ADDRESS,
  value: 100,
  gas: 5_000_000,
  gasPrice: '1000000000',
});
```

  </TabItem>
  <TabItem value="raw" label="raw">

```js
await window.ethereum.request({
  method: 'eth_sendTransaction',
  params: [
    {
      from: UP_ADDRESS,
      to: RECIPIENT_ADDRESS,
      value: '0xB1A2BC2EC50000',
      gas: '0x76c0',
      gasPrice: '0x9184e72a000',
    },
  ],
});
```

  </TabItem>
</Tabs>

También puedes añadir un parámetro `chainId`, por ejemplo, `chaidId: '0x16'`, para garantizar que la transacción se ejecute en la red especificada..

### Firmar un mensaje

<Tabs>
  <TabItem value="web3" label="web3">

```js
await web3.eth.sign('message', UP_ADDRESS);
```

  </TabItem>
  <TabItem value="etherjs" label="etherjs">

```js
await signer.signMessage('message');
```

  </TabItem>
  <TabItem value="raw" label="raw">

```js
await window.ethereum.request({
  method: 'eth_sign',
  params: [UP_ADDRESS, '0xdeadbeaf'],
});
```

  </TabItem>
</Tabs>

## Interactuar con tu perfil universal

```shell
  npm install @lukso/lsp-smart-contracts
```

```js
import UniversalProfile from "@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json";

const contract = new web3.eth.Contract(
  UniversalProfile.abi as unknown, UP_ADDRESS, {
    gas: 5_000_000,
    gasPrice: '1000000000',
  })
```

**Ejemlpo**: Utilizando la función `setData`:

```js
await contract.methods
  ["setData(bytes32,bytes)"](key, value)
  .send({
      from: UP_ADDRESS,
  })
  .on("receipt", (receipt: TransactionReceipt) => {
      ...
  })
  .once("sending", (payload: unknown) => {
      ...
  })
);
```

## Eventos

**Ejemplo**: Escucha de eventos de modificación de cuentas:

```js
window.ethereum.on('accountsChanged', (addresses: string[]) => {
  const newAddress = addresses[0];
  ...
}
```

## dApp Muestra

- Consulta el [Ejemplo de dApp](https://up-sample-web-app.staging.lukso.dev/) para ver más ejemplos en el navegador..
- Consulta el [Repositorio](https://github.com/lukso-network/universalprofile-sample-web-app) para obtener fragmentos de código.