---
sidebar_label: 'Otorgar permisos a terceros'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Otorgar permisos a direcciones de terceros

:::info Requisitos

Para seguir esta guía necesitarás un Perfil Universal que puedas controlar a través de su KeyManager. <br/>
Si aún no cuentas con un perfil universal, sigue nuestra guía anterior [**Create a Universal Profile**](../universal-profile/create-profile.md) o consulta la documentación [_lsp-factory.js_](../../tools/lsp-factoryjs/deployment/universal-profile.md).

:::

En esta guía, aprenderemos a conceder permisos a direcciones de terceros para que puedan interactuar con nuestro Perfil Universal. 

Al final de esta guía, sabrás:

- Cómo funcionan los permisos en el LSP6 Key Manager + cómo crearlos utilizando [_erc725.js_](../../../../tools/erc725js/getting-started).
- Cómo establecer permisos para una `dirección` de terceros en su Perfil Universal.

![Otorgar permisos a terceros resumen](/img/guides/lsp6/grant-permissions-to-3rd-parties-overview.jpeg)

## Introducción

El Gestor de Claves o Key Manager (KM) nos permite dar permisos a otras direcciones de terceros para que realicen determinadas acciones en nuestro Perfil Universal (UP), como editar los detalles de nuestro perfil o algún otro metadato..

Al conceder permisos a una nueva dirección, necesitamos actualizar tres datos clave en el almacenamiento [ERC725Y](../../standards/lsp-background/erc725.md#erc725y) de nuestro Perfil Universal:

| :file_cabinet: Clave de datos ERC725Y | :page_with_curl: Descripción | :dart: **Objetivo** |
|---|---|---|
| [`AddressPermissions[]`](../../standards/universal-profile/lsp6-key-manager.md#retrieving-addresses-with-permissions) | contiene el número de direcciones que tienen permisos en nuestra UP. | Tenemos que **aumentarla en +1**.  |
| [`AddressPermissions[index]`](../../standards/universal-profile/lsp6-key-manager.md#retrieving-addresses-with-permissions) | mantiene una dirección de controlador en un índice específico. | Tenemos que **añadir la dirección del beneficiario en el nuevo índice**.  |
| [`AddressPermissions:Permissions:<beneficiary-address>`](../../standards/universal-profile/lsp6-key-manager.md#address-permissions)  | esta clave de datos contiene los permisos de una dirección de controlador.  | Necesitamos **añadir los permisos de la dirección del beneficiario** bajo esta clave de datos.  |


## Configuración

```shell
npm install @erc725/erc725.js @lukso/lsp-smart-contracts
```

## Paso 1 - Inicializa erc725.js

El primer paso es inicializar la librería erc725.js con un schema JSON específico para el LSP6 Key Manager. Esto permitirá a la biblioteca saber cómo crear y codificar los permisos.

```js
import { ERC725 } from "@erc725/erc725.js";
import LSP6Schema from "@erc725/erc725.js/schemas/LSP6KeyManager.json";

// paso 1 -inicializar erc725.js con las claves de datos de permisos ERC725Y de LSP6 Key Manager
const erc725 = new ERC725(LSP6Schema, myUniversalProfileAddress, web3.currentProvider);
```


## Paso 2 - Codificar los permisos

:::info 

Hay más permisos disponibles en erc725.js. Consulta la documentación de la API de la función [`encodePermissions(...)`](../../tools/erc725js/classes/ERC725.md#encodepermissions) para obtener una lista completa.

:::

Ahora podemos usar erc725.js para crear los permisos para una `dirección` específica de terceros. La biblioteca proporciona funciones muy útiles, como [`encodePermissions`](../../../../../tools/erc725js/classes/ERC725#encodepermissions).

### 2.1 - Crear la autorización


Consideremos en nuestro ejemplo que queremos otorgar el permiso `SETDATA` a un `beneficiaryAddress`, para que pueda editar los detalles de nuestro Perfil Universal por nosotros.

Podemos hacer esto muy fácilmente con erc725.js, usando la función `encodePermissions(...)`.

```js
// step 2.1 - create the permissions of the beneficiary address
const beneficiaryPermissions = erc725.encodePermissions({
    SETDATA: true,
});
```

### 2.2 - Codificar el permiso para la dirección de terceros

Ahora que hemos creado el valor del permiso `SETDATA`, tenemos que asignarlo a la `beneficiaryAddress`.

Para ello, necesitamos asignar el valor del permiso creado en el paso 2.1 a la `beneficiaryAddress`, utilizando el `AddressPermissions:Permissions:<address>`, donde `<address>` será la dirección del beneficiario.

También tenemos que añadir el `beneficiaryAddress` dentro de la matriz `AddressPermissions[]`, e incrementar la longitud de la matriz `AddressPermissions[]` (+1).

```js
// paso 2.2 - codificar los datos pares clave-valor de los permisos para configurar la dirección del beneficiario
const beneficiaryAddress = "0xcafecafecafecafecafecafecafecafecafe"; // Dirección EOA de una persona de ejemplo

const addressPermissionsArray = await erc725.getData("AddressPermissions[]");
const controllers = addressPermissionsArray.value;

const permissionData = erc725.encodeData([
    // la autorización de la dirección beneficiaria
    {
        keyName: "AddressPermissions:Permissions:<address>",
        dynamicKeyParts: beneficiaryAddress,
        value: beneficiaryPermissions,
    },
    // la nueva lista de direcciones de los controladores (= direcciones con permisos establecidos en la UP)
    // + la longitud incrementada de la matriz `AddressPermissions[]`.
    {
      keyName: "AddressPermissions[]",
      value: [...controllers, beneficiaryAddress],
    },
]);
```


## Paso 3 - Añade los permisos en tu UP

Ahora tenemos todos los datos necesarios para configurar el permiso para esta dirección de terceros en nuestro Perfil Universal.

### 3.1 - Carga la dirección de tu controlador

Necesitaremos interactuar con el Key Manager desde la dirección del controlador principal (la cuenta de propiedad externa (EOA) que tiene todos los permisos sobre la UP).

El primer paso es cargar la dirección de dicho controlador principal como una EOA utilizando su clave privada.

La clave privada puede obtenerse dependiendo de cómo haya creado su Perfil Universal:

- UP creado con nuestra guía **Crear un perfil universal**: deberías haber proporcionado la clave privada y conocerla.
- UP creado con el _lsp-factory.js_: es la clave privada dada en el campo `controllerAddresses` del método [`lspFactory.UniversalProfile.deploy(...)`](../../tools/lsp-factoryjs/classes/universal-profile#deploy)
- UP creado a través de la extensión del navegador: haz clic en el icono _Configuración_ (arriba a la derecha) > y _Exportar clave privada_.


```javascript title="Load account from a private key"
import Web3 from 'web3';
const web3 = new Web3('https://rpc.l16.lukso.network');

const PRIVATE_KEY = '0x...'; // tu clave privada EOA (creada previamente)

const myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);
```

### 3.2 - Crear una instancia de contrato

El siguiente paso es crear la instancia web3 de nuestros contratos inteligentes para interactuar con ellos. Las ABIs de los contratos están disponibles en el paquete npm @lukso/lsp-smart-contracts.

Necesitarás la dirección de tu Perfil Universal desplegado en L16.

```js
import UniversalProfile from "@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json";
import KeyManager from "@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json";
import Web3 from "web3";

const RPC_ENDPOINT = "https://rpc.l16.lukso.network";
const web3 = new Web3(RPC_ENDPOINT);


// paso 1 - crear una instancia de los contratos UniversalProfile y KeyManager
const myUniversalProfileAddress = "0x4F81bFDD12c73c94222C7879C91c1B837b8adb62";
const myUniversalProfile = new web3.eth.Contract(UniversalProfile.abi, myUniversalProfileAddress);
```

Dado que el KeyManager es el propietario del Perfil Universal, su dirección puede obtenerse fácilmente consultando el `owner()` del Perfil Universal.

```js
const keyManagerAddress = await myUniversalProfile.methods.owner().call();
const myKeyManager = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);
```


### 3.3 - Define el permiso en el Perfil Universal

El último y definitivo paso es configurar los permisos del `beneficiaryAddress` en nuestro Perfil Universal.

Podemos acceder fácilmente al par clave-valor de los datos codificados obtenidos por erc725.js en el paso 2.2.

A continuación, codificaremos esta claves de datos de permisos en una carga útil `setData(...)` e interactuaremos a través del Key Manager.

```js
// paso 3.3 - codifica la carga útil para establecer los permisos y envía la transacción a través del Key Manager
const payload = myUniversalProfile.methods["setData(bytes32[],bytes[])"](data.keys, data.values).encodeABI();

  // paso 4 - enviar la transacción a través del contrato Key Manager
  await myKeyManager.methods.execute(payload).send({
    from: myEOA.address,
    gasLimit: 300_000,
  });
```

## Código final

```js
import { ERC725 } from "@erc725/erc725.js";
import LSP6Schema from "@erc725/erc725.js/schemas/LSP6KeyManager.json";
import UniversalProfile from "@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json";
import KeyManager from "@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json";
import Web3 from "web3";

// ajustes
const myUniversalProfileAddress = "0x..."; // la dirección de su Perfil Universal en la L16
const RPC_ENDPOINT = "https://rpc.l16.lukso.network";

const web3 = new Web3(RPC_ENDPOINT);
const erc725 = new ERC725(LSP6Schema, myUniversalProfileAddress, web3.currentProvider);

const PRIVATE_KEY = "0x..."; // clave privada de la dirección de su controlador principal
const myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);

async function grantPermissions() {
  // paso 1 - crear una instancia de los contratos UniversalProfile y KeyManager
  const myUniversalProfile = new web3.eth.Contract(UniversalProfile.abi, myUniversalProfileAddress);

  const keyManagerAddress = await myUniversalProfile.methods.owner().call();
  const myKeyManager = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);
  console.log("keyManagerAddress", keyManagerAddress);

  // paso 2 - configura los permisos de la dirección beneficiaria
  const beneficiaryAddress = "0xcafecafecafecafecafecafecafecafecafecafe"; // Dirección muestra de una EOA
  const beneficiaryPermissions = erc725.encodePermissions({
    SETDATA: true,
  });

  // paso 3.1 - cifra los pares de datos clave-valor de los permisos que deben establecerse
  const addressPermissionsArray = await erc725.getData("AddressPermissions[]");
  const controllers = addressPermissionsArray.value;

  const data = erc725.encodeData([
    // la autorización de la dirección del beneficiario
    {
        keyName: "AddressPermissions:Permissions:<address>",
        dynamicKeyParts: beneficiaryAddress,
        value: beneficiaryPermissions,
    },
    // las nuevas direcciones de los controladores de listas (= direcciones con permisos establecidos en la UP)
    // + el incremento de la matriz `AddressPermissions[]`.
    {
      keyName: "AddressPermissions[]",
      value: [...controllers, beneficiaryAddress],
    },
  ]);

  //   paso 3.2 - cifre la carga útil que se enviará al contrato del Key Manager
  const payload = myUniversalProfile.methods["setData(bytes32[],bytes[])"](data.keys, data.values).encodeABI();

  // paso 4 - envíe la transacción a través del contrato Key Manager
  await myKeyManager.methods.execute(payload).send({
    from: myEOA.address,
    gasLimit: 300_000,
  });

  const result = await myUniversalProfile.methods["getData(bytes32)"](data.keys[0]).call();
  console.log(
    `La dirección beneficiaria ${beneficiaryAddress} tiene ahora los siguientes permisos:`,
    erc725.decodePermissions(result)
  );
}

grantPermissions();
```


## Comprobando los permisos

Ahora podemos comprobar que los permisos se han establecido correctamente consultando la clave de datos `AddressPermissions:Permissions:<beneficiaryAddress>` en el almacenamiento ERC725Y del Perfil Universal.

Si todo ha ido bien, el siguiente fragmento de código debería devolverte un objeto con el permiso `SETDATA` establecido en `true`.

```js
const result = await myUniversalProfile.methods["getData(bytes32)"](data.keys[0]).call();
  console.log(
    `La dirección beneficiaria ${beneficiaryAddress} tiene ahora los siguientes permisos:`,
    erc725.decodePermissions(result)
  );
```

Finalmente, para probar los permisos reales, puedes hacer esta guía usando una `beneficiaryAddress` sobre la que tengas control (creada manualmente vía web3.js).

A continuación, puedes intentar hacer de nuevo la guía **Editar nuestro Perfil Universal**, utilizando esta nueva dirección de terceros sobre la que tienes control para comprobar si puede editar con éxito los detalles del perfil. Esto te garantizará que esta `beneficiaryAddress` tiene el permiso `SETDATA` funcionando.


