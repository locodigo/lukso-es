---
sidebar_label: 'Aceptar y Rechazar Activos Digitales'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Aceptar y Rechazar Activos Digitales

Cada usuario puede crear su propio contrato **Universal Receiver Delegate personalizado** que contenga su propia lógica que se ejecutará una vez que se llame a la función **[`universalReceiver(..)`](../../standards/smart-contracts/lsp0-erc725-account.md#universalreceiver)** de su perfil.. 

![LSP1UniversalReceiverDelegate-Guía](/img/guides/lsp1/UniversalReceiverDelegate-Guide.jpeg)

## Rechazar todos los activos

Para **rechazar todos los activos** que se están transfiriendo al perfil, necesitamos crear un contrato de Universal Receiver Delegate que revierta cuando se trate de una transferencia de activos (LSP7 & LSP8). El [`typeId`](../../standards//smart-contracts/lsp0-erc725-account.md#universalreceiver) es el parámetro que nos dará más contexto sobre la llamada que se está realizando.


*ejemplo*
- Si `typeId` es **[`0xdbe2c314e1aee2970c72666f2ebe8933a8575263ea71e5ff6a9178e95d47a26f` _TYPEID_LSP7_TOKENSRECIPIENT](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP7DigitalAsset/LSP7Constants.sol#L13)**, entonces sabemos que estamos recibiendo un Token LSP7.

- Si `typeId` es **[`0xc7a120a42b6057a0cbed111fbbfbd52fcd96748c04394f77fc2c3adbe0391e01` _TYPEID_LSP8_TOKENSRECIPIENT](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol#L21)**, entonces sabemos que estamos recibiendo un Token LSP8.



### Desplegar el contrato con Remix

El primer paso es navegar al **[sitio web de Remix](https://remix.ethereum.org/)** y crear un nuevo archivo solidity en la carpeta **contracts**..

![Creando Universal Receiver Delegate con Remix](/img/guides/lsp1/remix-creating-file.jpeg)

Después de crear el archivo **UniversalReceiverDelegate.sol**, copia el fragmento de código que aparece a continuación dentro del archivo creado. Este fragmento de código se encargará de rechazar todos los activos LSP7 y LSP8 que se transfieran a su perfil..

```sol title="UniversalReceiverDelegate.sol - Solidity Code snippet of the URD that reject all assets"
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Este código sólo se utiliza como guía, funciona pero no ha sido verificado ni auditado.

// interfaces
import {LSP1UniversalReceiverDelegateUP} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol";

// constantes
import {_TYPEID_LSP7_TOKENSRECIPIENT} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP7DigitalAsset/LSP7Constants.sol";
import {_TYPEID_LSP8_TOKENSRECIPIENT} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

contract CustomUniversalReceiverDelegate is LSP1UniversalReceiverDelegateUP  {

    /**
    * @param asset La dirección del activo que se transfiere al UniversalProfile.
    * @param asset La dirección que impide recibir activos.
    */
    error ReceivingAssetsNotAllowed(address asset, address recipient);

    /**
    * @dev Revierte cuando el typeId es referente a la recepción de tokens (LSP7 & LSP8) 
    * @param caller La dirección del activo que informa a la función `universalReceiver(..)` en el UniversalProfile.
    * @param value La cantidad de tokens nativos enviados por la persona que llama al universalReceiver en el UniversalProfile..
    * @param typeId El typeId que representa el contexto de la llamada a la función universalReceiver en el UniversalProfile.
    * @param typeId Los datos enviados a la función universalReceiver en el UniversalProfile.
    */
    function universalReceiverDelegate(
        address caller,
        uint256 value,
        bytes32 typeId,
        bytes memory data
    ) public override returns (bytes memory result) {
        if (typeId == _TYPEID_LSP7_TOKENSRECIPIENT || typeId == _TYPEID_LSP8_TOKENSRECIPIENT){
            revert ReceivingAssetsNotAllowed(caller, msg.sender);
        }
    }
}

```

:::note

Por favor, asegúrate de desbloquear MetaMask y desactivar la extensión del navegador mientras realizas este paso.
![Desactivar la extensión del navegador para utilizar Remix Injected Provider](/img/guides/lsp1/turn-off-browser-extension.jpeg)

:::

Después de copiar el código, navega a la pestaña **Solidity Compiler** y pulsa el botón Compile UniversalReceiverDelegate.sol. A continuación, navega a la pestaña **Deploy & Run Transactions** y elige _Injected Provider_ como entorno.


![Compilando contrato en Remix](/img/guides/lsp1/remix-compiling-contract.jpeg)

Es necesario estar conectado a L16 en MetaMask y Remix y tener suficiente LYXt en el EOA utilizado para desplegar el URD.

![Conéctate a LUKSO L16 en Remix](/img/guides/lsp1/remix-connect-l16.jpeg)

Después de elegir el contrato **CustomUniversalReceiverDelegate** en la sección *CONTRACT* y desplegarlo, tendrás que validar la transacción y esperar a que se confirme y el contrato se despliegue en la red. Una vez desplegado, puedes copiar la dirección del contrato para utilizarla más tarde al establecer la dirección dentro del almacenamiento.

![Despliega y Copia la dirección en Remix](/img/guides/lsp1/remix-deploy-copy-address.jpeg)


### Fijar la dirección del URD en el almacén

Después de desplegar el contrato, tenemos que establecer su dirección en el **[LSP1-UniversalReceiverDelegate Data Key](../../standards/generic-standards/lsp1-universal-receiver.md#extension)**.

### Instalar dependencias

Asegúrate de tener instaladas las siguientes dependencias antes de empezar este tutorial:

- O bien [`web3.js`](https://github.com/web3/web3.js) o bien [`ethers.js`](https://github.com/ethers-io/ethers.js/)
- [`@lukso/lsp-smart-contracts`](https://github.com/lukso-network/lsp-smart-contracts/)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">
Instalar las dependencias
```shell title="Install the dependencies"
npm install web3 @lukso/lsp-smart-contracts
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```shell title="Instalar las dependencias"
npm install ethers @lukso/lsp-smart-contracts
```

  </TabItem>

</Tabs>

### Importaciones, Constantes y EOA

En primer lugar, necesitamos obtener los _ABIs_ de los contratos que utilizaremos más adelante.
Después necesitamos almacenar la dirección de nuestro Perfil Universal y la nueva dirección URD.  
Después inicializaremos la dirección del controlador que se utilizará más tarde.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';
const universalProfileURDAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const EOA = web3.eth.accounts.wallet.add(privateKey);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';
const universalProfileURDAddress = '0x...';

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(privateKey).connect(provider);
```

  </TabItem>

</Tabs>

### Crear instancias de contratos

En este punto necesitamos crear instancias de los siguientes contratos:

- [**Perfil Universal**](../../standards/universal-profile/lsp0-erc725account.md)
- [**Gestor de Claves**](../../standards/universal-profile/lsp6-key-manager.md)

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Instancias de contratos para el Gestor de Claves y el Perfil Universal"
// crear una instancia del Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// obtén el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Instancias de contratos para el Gestor de Claves y el Perfil Universal"
// crear una instancia del Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// obtén el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);
```

  </TabItem>

</Tabs>

### Cifrar el calldata `setData(...)`.

Cifra un calldata para `setData(bytes32,bytes)` que actualizará el URD del Perfil Universal.

<Tabs>
  
  <TabItem value="web3js" label="web3.js">

```typescript title="Cifrar un calldata que actualizará el URD y sus permisos"
// cifrar setData Calldata en el Perfil Universal
const setDataCalldata = await universalProfile.methods[
  'setData(bytes32,bytes)'
](URD_DATA_KEY, universalProfileURDAddress).encodeABI();
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Cifrar un calldata que actualizará el URD y sus permisos"
// cifrar setData Calldata en el Perfil Universal
const setDataCalldata = await universalProfile.interface.encodeFunctionData(
  'setData(bytes32,bytes)',
  [URD_DATA_KEY, universalProfileURDAddress],
);
```

  </TabItem>

</Tabs>

### Ejecutar a través del Gestor de Claves

Por último, tenemos que enviar la transacción que actualizará el URD del Perfil Universal a través del Gestor de Claves.

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

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import Web3 from 'web3';

// constantes
const web3 = new Web3('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';
const universalProfileURDAddress = '0x...';

// configura tu EOA
const privateKey = '0x...';
const EOA = web3.eth.accounts.wallet.add(privateKey);

// crear una instancia del Perfil Universal
const universalProfile = new web3.eth.Contract(
  UniversalProfile.abi,
  universalProfileAddress,
);
// obtén el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);

// cifrar setData Calldata en la Bóveda
const setDataCalldata = await universalProfile.methods[
  'setData(bytes32,bytes)'
](URD_DATA_KEY, universalProfileURDAddress).encodeABI();

// ejecutar el executeCalldata en el Gestor de Claves
await keyManager.methods['execute(bytes)'](executeCalldata).send({
  from: EOA.address,
  gasLimit: 600_000,
});
```

  </TabItem>

  <TabItem value="ethersjs" label="ethers.js">

```typescript title="Importaciones, Constantes y EOA"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import { ethers } from 'ethers';

// constantes
const provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');
const URD_DATA_KEY = ERC725YDataKeys.LSP1.LSP1UniversalReceiverDelegate;
const universalProfileAddress = '0x...';
const universalProfileURDAddress = '0x...';

// configura tu EOA
const privateKey = '0x...'; // tu clave privada EOA (dirección del controlador)
const EOA = new ethers.Wallet(privateKey).connect(provider);

// crear una instancia del Perfil Universal
const universalProfile = new ethers.Contract(
  universalProfileAddress,
  UniversalProfile.abi,
);
// obtén el propietario del Perfil Universal
// en nuestro caso debería ser la dirección del Gestor de Claves
const keyManagerAddress = await universalProfile.methods.owner().call();
// crear una instancia del LSP6KeyManager
const keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);

// cifrar setData Calldata en la Bóveda
const setDataCalldata = await universalProfile.interface.encodeFunctionData(
  'setData(bytes32,bytes)',
  [URD_DATA_KEY, universalProfileURDAddress],
);

// ejecutar el executeCalldata en el Gestor de Claves
await keyManager.connect(EOA)['execute(bytes)'](executeCalldata);
```

  </TabItem>

</Tabs>

## Aceptar Activos específicos

Para aceptar activos específicos, debes diferenciar entre los distintos activos que se te transfieren. Una forma de hacerlo es tener un mapeo dentro del contrato URD que establezca si el activo que se transfiere **puede ser recibido o no**. Sólo el propietario debería poder añadir estas direcciones de activos. Para simplificar, el propietario podría ser la dirección EOA que despliega el contrato.

Repite los pasos de implementación en la sección **[Rechazar todos los activos](#rejecting-all-assets)** y sustituye el código de solidity por el que se escribe a continuación.

```sol title="Fragmento de código Solidity del URD personalizado que acepta activos específicos"
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Este código sólo se utiliza a modo de guía, funciona pero no ha sido verificado ni auditado..

// mdulos
import {LSP1UniversalReceiverDelegateUP} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol";

// constantés
import {_TYPEID_LSP7_TOKENSRECIPIENT} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP7DigitalAsset/LSP7Constants.sol";
import {_TYPEID_LSP8_TOKENSRECIPIENT} from "https://github.com/lukso-network/lsp-smart-contracts/blob/v0.6.2/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.sol";

contract CustomUniversalReceiverDelegate is LSP1UniversalReceiverDelegateUP  {

    address immutable public owner;
    mapping (address => bool) public allowedAssets;

    constructor(address _owner){
        owner = _owner;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "CustomUniversalReceiverDelegate : El que llama no es el propietario");
        _;
    }


    function setAllowedAssets(address assets) public onlyOwner {
        allowedAssets[assets] = true;
    }
    /**
    * @dev Se revierte cuando el activo que se transfiere no está permitido. Si se permite, la dirección del activo
    * se registrará dentro del almacén, y se eliminará cuando el saldo del activo sea igual a 0, según
    * el estándar LSP5-ReceivedAssers.
    *
    * @param caller La dirección del activo que informa a la función `universalReceiver(..)` en el UniversalProfile.
    * @param value La cantidad de tokens nativos enviados por el emisor de la llamada a la función universalReceiver en el UniversalProfile.
    * @param typeId El typeId que representa el contexto de la llamada a la función universalReceiver en el UniversalProfile.
    * @param typeId Los datos enviados a la función universalReceiver en el UniversalProfile.
    */
    function universalReceiverDelegate(
        address caller,
        uint256 value,
        bytes32 typeId,
        bytes memory data
    ) public override returns (bytes memory result){
        // comprobar si el activo que se transfiere está permitido o no.
        if(typeId == _TYPEID_LSP8_TOKENSRECIPIENT || typeId == _TYPEID_LSP7_TOKENSRECIPIENT){
            require(allowedAssets[caller], "No se ha autorizado la recepción del activo que se transfiere");
        }
        // utilizando el código de implementación por defecto para registrar la dirección de los activos recibidos
        result = super.universalReceiverDelegate(caller, value, typeId, data);
    }
}
```

El código de arriba registrará la dirección de los activos permitidos y los eliminará cuando el saldo de la UP para este activo sea igual a 0. También rechazará los activos que no estén permitidos. Como este código necesitará **[Permiso SUPER_SETDATA](../../standards/universal-profile/lsp6-key-manager. md#super-permissions)**, después de desplegar establecerá la dirección del URD en el almacenamiento usando el código de la sección **[Establecer la dirección del URD en el almacenamiento](./set-default-implementation.md#set-the-address-of-the-urd-in-the-storage)**.