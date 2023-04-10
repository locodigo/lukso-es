---
title: 📬 API Retransmisor
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Estándar API del Servicio de Retransmisión de Transacciones

## POST `/execute`

Ejecuta una transacción firmada en nombre de un Perfil Universal utilizando [`executeRelayCall()`](./smart-contracts/lsp6-key-manager#executerelaycall).

- Utiliza el mensaje firmado proporcionado en la solicitud para la autenticación.
- Calcula y devuelve el hash de la transacción en la respuesta.

```json title="Cuerpo de la solicitud"
{
  "address": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD", // Dirección del Perfil Universal
  "transaction": {
    "abi": "0x7f23690c5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000596f357c6aa5a21984a83b7eef4cb0720ac1fcf5a45e9d84c653d97b71bbe89b7a728c386a697066733a2f2f516d624b43744b4d7573376741524470617744687a32506a4e36616f64346b69794e436851726d3451437858454b00000000000000",
    "signature": "0x43c958b1729586749169599d7e776f18afc6223c7da21107161477d291d497973b4fc50a724b1b2ab98f3f8cf1d5cdbbbdf3512e4fbfbdc39732229a15beb14a1b",
    "nonce": 1 // Nonce del Gestor de Claves
  }
}
```

```json title="Respuesta"
{
  "transactionHash": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD"
}
```

## POST `/quota`

Devuelve la cuota disponible que queda para un Perfil Universal registrado.

- `signature` es el valor del mensaje firmado por una clave de controlador con el [permiso `SIGN`](./universal-profile/lsp6-key-manager#permissions) del Perfil Universal. El hash para firmar debe calcularse como un hash [EIP-712](https://eips.ethereum.org/EIPS/eip-712) donde el mensaje es `keccack256(address, timestamp)`. Asegúrate de que, independientemente del idioma o la plataforma, la marca de tiempo sea de tipo `int`, `int256`, `uint` o `uint256`. En el backend el mensaje se reconstruye usando [soliditysha3()](https://web3js.readthedocs.io/en/v1.7.4/web3-utils.html#soliditysha3) para verificar la firma.

[Web3.js](https://web3js.readthedocs.io/en/v1.8.0/web3-eth-accounts.html?#sign) y [ethers.js](https://docs.ethers.io/v5/api/signer/#Signer-signMessage) hacen hash automáticamente cuando usan sus funciones de firma nativas. Puede ser necesario hacerlo manualmente si se utiliza una librería diferente.
- `timestamp` en **segundos**. Debe ser ahora +/- 5 segundos.

<details>
  <summary>Cómo generar y verificar la firma.</summary>

<Tabs>
  <TabItem value="web3" label="Web3">

```js
import { soliditySha3 } from 'web3-utils';
import Web3 from 'web3';

const address = '0x1234...'; // La dirección del Perfil Universal
const timestamp = Math.round(Date.now() / 1000);

const message = soliditySha3(address, timestamp);

/**
 *  Generar la firma - lado cliente
 */
const web3 = new Web3();
const privateKey = '0x123...'; // La clave privada de la EOA que tiene permiso SIGN sobre el Perfil Universal definido en la dirección.
const signature = web3.eth.accounts.sign(message, privateKey).signature;
// 👉 Esta firma se utiliza en la carga útil de la solicitud.

/**
 * Verificar la firma - lado del retransmisor
 */
const signer = web3.eth.accounts.recover(message, signature.signature); // Signer será la EOA que ha firmado el mensaje.
// Es necesario verificar si esta EOA tiene permiso SIGN en el Perfil Universal definido en dirección.
```

  </TabItem>
  <TabItem value="ethers" label="Ethers">

```js
// ...

const address = '0x1234...'; // La dirección del Perfil Universal
const timestamp = Math.round(Date.now() / 1000);

const message = ethers.utils.solidityKeccak256(
  ['address', 'uint'],
  [address, timestamp],
);

/**
 *  Generar la firma - lado cliente
 */
// [... ethers signer setup...]
const signature = await ethersSigner.signMessage(arrayify(message));
// 👉 Esta firma se utiliza en la carga útil de la solicitud.

/**
 * Verificar la firma - lado del retransmisor
 */
const signer = ethers.utils.verifyMessage(arrayify(message), signature); // Signer será la EOA que ha firmado el mensaje.
// Es necesario verificar si esta EOA tiene permiso SIGN en el Perfil Universal definido en dirección.
```

</TabItem>
</Tabs>

Para verificar si la firma ha sido suscrita por una EOA autorizada, consulta la guía [Iniciar Sesión con Ethereum](../guides/browser-extension/sign-in-with-ethereum#4-verify-the-signature).

</details>

```json title="Cuerpo de la solicitud"
{
  "address": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD",
  "timestamp": 1656408193,
  "signature": "0xf480c87a352d42e49112257cc6afab0ff8365bb769424bb42e79e78cd11debf24fd5665b03407d8c2ce994cf5d718031a51a657d4308f146740e17e15b9747ef1b"
}
```

```json title="Respuesta"
{
  "quota": 1543091, // Te quedan YYY
  "unit": "gas", // puede ser "lyx", "transactionCount"
  "totalQuota": 5000000, // gas total para el mes
  "resetDate": 1656408193
}
```

- `quota` muestra el saldo disponible en unidades definidas por `unit`.
- La 'unit' puede ser `gas`, `lyx` o `transactionCount` dependiendo del modelo de negocio.
- `totalQuota` refleja el límite total, es decir, la cuota disponible + la utilizada desde el restablecimiento.
- `resetDate` indica la fecha en la que se restablecerá la cuota disponible, por ejemplo, una asignación mensual.

Los sistemas de cuotas también pueden utilizar un modelo de pago por uso, en cuyo caso totalQuota y resetData pueden omitirse.

## Recursos

- [LSP-15-APIRetransmisorTransacciones (GitHub)](https://github.com/lukso-network/LIPs/pull/133)
