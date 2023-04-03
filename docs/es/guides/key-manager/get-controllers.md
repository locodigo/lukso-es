---
sidebar_label: 'Obtener direcciones del controlador'
sidebar_position: 2
---

# Obtener direcciones del controlador

En esta guía aprenderás a:

- recuperar todas las direcciones que tienen algún permiso establecido en un Perfil Universal,
- recuperar el permiso de cada una de estas **direcciones de controlador**.

![Obtener direcciones del controlador](/img/standards/lsp6/lsp6-address-permissions-array.jpeg)

Utilizaremos la librería [_erc725.js_](../../tools/erc725js/getting-started.md) para hacerlo con poco más de 30 líneas de código.

## Configuración

```bash
npm install @erc725/erc725.js
```

## Paso 1 - Configurar web3.js y erc725.js

El primer paso es configurar tanto _web3.js_ como _erc725.js_, y conectarnos a la red L16 de LUKSO. También necesitaremos la dirección del Perfil Universal del cual queremos obtener las direcciones de los controladores.

```js
import { ERC725 } from '@erc725/erc725.js';
import LSP6Schema from '@erc725/erc725.js/schemas/LSP6KeyManager.json';
import Web3 from 'web3';

// ajustes
const myUniversalProfileAddress = '0xC26508178c4D7d3Ad43Dcb9F9bb1fab9ceeD58B5';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';

// paso 1 - configura erc725.js
const web3 = new Web3(RPC_ENDPOINT);
const erc725 = new ERC725(
  LSP6Schema,
  myUniversalProfileAddress,
  web3.currentProvider,
);
```

## Paso 2 - Obtener la lista de direcciones del controlador

El siguiente paso es obtener la lista de direcciones de los controladores. En otras palabras, las direcciones con algunos permisos para interactuar con el Perfil Universal.

Todas las direcciones de los controladores aparecen en la clave de datos `AddressPermissions[]`. Podemos obtenerlas mediante:

1. consultar el `AddressPermissions[]` para obtener el tamaño de la matriz y saber **cuántas direcciones de controlador** cuentan con permisos en el UP.
2. consulta cada índice de la matriz `AddressPermissions[index]` para recuperar cada dirección individualmente.

Gracias a _erc725.js_, podemos hacerlo muy fácilmente. La librería hará ambos pasos por nosotros y nos devolverá la lista completa de direcciones de controladores.

```js
// paso 2 - obtener la lista de direcciones que tienen permisos en el Perfil Universal
const result = await erc725.getData('AddressPermissions[]');
console.log(result);

// {
//   key: '0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3',
//   name: 'AddressPermissions[]',
//   value: [
//     '0x5F606b5b237623463a90F63230F9b929321dbCBa',
//     '0xa1061408e55c971fD129eF5561dFB953d598dAD7'
//   ]
// }
```

## Paso 3 - Obtener los permisos de cada controlador

Obtener las direcciones de cada controlador no es suficiente. Necesitamos recuperar los permisos de cada una de estas direcciones de controlador, para saber lo que tienen permitido hacer en nuestro Perfil Universal.

Podemos hacerlo fácilmente con las funciones [`getData(...)`](../../tools/erc725js/classes/ERC725#getdata) y [`decodePermissions(...)`](../../tools/erc725js/classes/ERC725#decodepermissions) de _erc725.js_.

### 3.1 - Recuperar los permisos del controlador

Utilizando `getData(...)` con la clave de datos `AddressPermissions:Permissions:<address>`, podemos pasar la dirección del controlador como la parte dinámica `<address>` en la clave de datos.

```js
// paso 3.1 - obtener los permisos de cada dirección
const addressPermission = await erc725.getData({
  keyName: 'AddressPermissions:Permissions:<address>',
  dynamicKeyParts: address,
});
console.log(addressPermission);

// {
//   key: '0x4b80742de2bf82acb3630000a1061408e55c971fd129ef5561dfb953d598dad7',
//   name: 'AddressPermissions:Permissions:a1061408e55c971fD129eF5561dFB953d598dAD7',
//   value: '0x0000000000000000000000000000000000000000000000000000000000000008'
// }
```

### 3.2 - Descifrar los permisos del controlador

Como puedes ver en el paso 3.1, el permiso que obtenemos para una dirección de controlador sigue cifrado en `bytes32` como un [`BitArray`](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#BitArray).

Para leer los permisos del controlador en un formato humanamente comprensible, podemos utilizar la función [`decodePermissions(...)`](../../tools/erc725js/classes/ERC725#decodepermissions) de _erc725.js_.

```js
// paso 3.2 - decodifica la autorización de cada dirección
const decodedPermission = erc725.decodePermissions(addressPermission.value);

// utilizamos JSON.stringify para mostrar el permiso en un formato legible
console.log(
  `decoded permission for ${address} = ` +
    JSON.stringify(decodedPermission, null, 2),
);

// decoded permission for 0x5F606b5b237623463a90F63230F9b929321dbCBa = {
//   "CHANGEOWNER": true,
//   "CHANGEPERMISSIONS": true,
//   "ADDPERMISSIONS": true,
//   "SETDATA": true,
//   "CALL": true,
//   "STATICCALL": true,
//   "DELEGATECALL": false,
//   "DEPLOY": true,
//   "TRANSFERVALUE": true,
//   "SIGN": true,
//   "SUPER_SETDATA": false,
//   "SUPER_TRANSFERVALUE": true,
//   "SUPER_CALL": true,
//   "SUPER_STATICCALL": true,
//   "SUPER_DELEGATECALL": false
// }
```

## Código Final

```js
import { ERC725 } from '@erc725/erc725.js';
import LSP6Schema from '@erc725/erc725.js/schemas/LSP6KeyManager.json';
import Web3 from 'web3';

// ajustes
const myUniversalProfileAddress = '0xC26508178c4D7d3Ad43Dcb9F9bb1fab9ceeD58B5';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';

const web3 = new Web3(RPC_ENDPOINT);

// paso 1 - configura erc725.js
const erc725 = new ERC725(
  LSP6Schema,
  myUniversalProfileAddress,
  web3.currentProvider,
);

async function getPermissionedAddresses() {
  // paso 2 - consigue la lista de direcciones que tienen permisos en el Perfil Universal
  const result = await erc725.getData('AddressPermissions[]');

  for (let ii = 0; ii < result.value.length; ii++) {
    const address = result.value[ii];

    // paso 3.1 - obtener los permisos de cada dirección
    const addressPermission = await erc725.getData({
      keyName: 'AddressPermissions:Permissions:<address>',
      dynamicKeyParts: address,
    });

    // paso 3.2 - decodificar el permiso de cada dirección
    const decodedPermission = erc725.decodePermissions(addressPermission.value);

    // utilizamos JSON.stringify para mostrar el permiso en un formato legible
    console.log(
      `decoded permission for ${address} = ` +
        JSON.stringify(decodedPermission, null, 2),
    );
  }
}

getPermissionedAddresses();
```