---
title: LSP9Bóveda
sidebar_position: 11
---

# LSP9Bóveda

:::info Contrato Solidity

[`LSP9Bóveda.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP9Vault/LSP9Vault.sol)

:::

El contrato **LSP9Bóveda** es una implementación del **[Estándar LSP9-Bóveda](#)**.

Este contrato puede utilizarse como una **bóveda** que puede **conservar activos** e **interactuar con otros contratos inteligentes**, ya que tiene todas las funciones del contrato **[LSP0CuentaERC725](./lsp0-erc725-account.md)**, excepto la función **`isValidSignature(...)`**.

:::note
_El contrato LSP9Bóveda también contiene los métodos del [Estándar ERC165](https://eips.ethereum.org/EIPS/eip-165):_

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

---

## Funciones

### constructor

```solidity
constructor(address initialOwner)
```

Establece el **propietario inicial** del contrato, la clave de datos **[EstándaresSuportados: LSP9Bóveda ](#)** en el almacenamiento de la bóveda.

Si el `initialOwner` es un contrato **[LSP0CuentaERC725](./lsp0-erc725-account.md)**, se llamará a la función **[`universalReceiver(...)`](./lsp0-erc725-account.md#universalreceiver)** en el contrato **LSP0CuentaERC725** para informar a la cuenta sobre la **nueva propiedad de la bóveda**.

#### Parámetros:

| Nombre         | Tipo      | Descripción                                              |
| :------------- | :-------- | :------------------------------------------------------- |
| `initialOwner` | `address` | La dirección a establecer como propietaria del contrato. |

### owner

```solidity
function owner() public view returns (address owner)
```

Devuelve la dirección del propietario actual de la bóveda.

#### Valores Devueltos:

| Nombre  | Tipo      | Descripción                         |
| :------ | :-------- | :---------------------------------- |
| `owner` | `address` | El propietario actual de la bóveda. |

### pendingOwner

```solidity
function pendingOwner() public view returns (address)
```

Devuelve la dirección del propietario pendiente que fue iniciado por [`transferOwnership(address)`](#transferownership).

> **NB:** si no hay ninguna transferencia de propiedad en curso, el `pendingOwner` DEBE ser `address(0)`.

#### Valores Devueltos:

| Nombre         | Tipo      | Descripción                            |
| :------------- | :-------- | :------------------------------------- |
| `pendingOwner` | `address` | La dirección del propietario pendiente |

### transferOwnership

```solidity
function transferOwnership(address newOwner) public
```

Iniciar una transferencia de propiedad estableciendo el `newOwner` como `pendingOwner`.

Requisitos:

- Sólo puede ser llamado por el propietario actual.
- El `newOwner` a establecer como `pendingOwner` no puede ser `address(this)`.

#### Parámetros:

| Nombre     | Tipo      | Descripción                                    |
| :--------- | :-------- | :--------------------------------------------- |
| `newOwner` | `address` | La dirección a establecer como `pendingOwner`. |

### acceptOwnership

```solidity
function acceptOwnership() public
```

Transfiere la propiedad del contrato a la dirección `pendingOwner`. Sólo puede ser invocado por el `pendingOwner`.

_Activa el evento **[OwnershipTransferred](#ownershiptransferred)** una vez que el nuevo propietario ha reclamado la propiedad._

### renounceOwnership

```solidity
function renounceOwnership() public
```

Dado que renunciar a la propiedad es una operación delicada, se realiza como un proceso de dos pasos llamando a `renounceOwnership(..)` dos veces. La primera para iniciar el proceso, la segunda como confirmación.

El número de bloque actual se guarda como parte de la iniciación porque se desea el siguiente comportamiento:

- Los primeros 100 bloques después del bloque guardado es el periodo pendiente, si llama a `renounceOwnership(..)` durante este periodo, la transacción será revertida.
- los siguientes 100 bloques es el periodo en el que puedes confirmar la renuncia al contrato llamando a `renounceOwnership(..)` por segunda vez.

_Activa el evento **[RenunciaPropiedadIniciada]("#renounceownershipinitiated")** en la primera llamada._

_Activa el evento **[TitularidadTransferida](#ownershiptransferred)** después de renunciar con éxito a la titularidad._

:::warning
Deja el contrato sin propietario. Una vez que se renuncia a la propiedad del contrato, no será posible llamar a las funciones restringidas únicamente al propietario.
:::

### fallback

```solidity
fallback() external payable
```

Se ejecuta cuando el valor se transfiere al contrato o cuando el identificador de función no coincide con ninguna de las funciones disponibles.

_Activa el evento **[ValorRecibido]( #valuereceived)** cuando se recibe un token nativo._

### execute

```solidity
function execute(
    uint256 operationType,
    address target,
    uint256 value,
    bytes memory data
) public payable returns (bytes memory result)
```

Ejecuta una llamada en cualquier otro contrato inteligente, transfiere valor o despliega un nuevo contrato inteligente.

DEBE existir el siguiente `operationType`:

- `0` para `CALL`
- `1` para `CREATE`
- `2` para `CREATE2`
- `3` para `STATICCALL`

_Activa el evento **[Executed](#ejecutado)** cuando se ejecuta con éxito una llamada mediante las operaciones `CALL/STATICCALL`._

_Activa el evento **[ContractCreated](#contractcreated)** cuando se crea un contrato inteligente mediante las operaciones `CREATE/CREATE2`._

:::note
La función `execute(...)` sólo puede ser invocada por el propietario actual de la bóveda.

El tipo de operación `staticcall` (`3`) no permite transferir valor.
:::

#### Parámetros:

| Nombre          | Tipo      | Descripción                                                                                                                     |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `operationType` | `uint256` | El tipo de operación que debe ejecutarse.                                                                                       |
| `target`        | `address` | La dirección con la que interactuar. `target` no se utilizará si se crea un contrato (operación 1 y 2).                         |
| `value`         | `uint256` | La cantidad de tokens nativos a transferir con la transacción (en Wei).                                                         |
| `data`          | `bytes`   | Los calldata (carga útil codificada ABI de una función para ejecutar en otro contrato), o el bytecode del contrato a desplegar. |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                                                                      |
| :------- | :------ | :----------------------------------------------------------------------------------------------- |
| `result` | `bytes` | Los datos devueltos de la función llamada, o la dirección del contrato creado (operación 1 y 2). |

### setData

```solidity
function setData(
    bytes32 key,
    bytes memory value
) public
```

Establece los datos de una única `clave` de datos como **bytes** en el almacenamiento de la bóveda.

_Activa el evento **[DataChanged](#datachanged)** cuando se establecen correctamente los datos._

:::note
La función `setData(...)` sólo puede ser invocada por el propietario actual del contrato y del contrato LSP1ReceptorDelegadoUnviersalBóveda
:::

#### Parámetros:

| Nombre  | Tipo      | Descripción                                         |
| :------ | :-------- | :-------------------------------------------------- |
| `key`   | `bytes32` | La clave de datos para la que establecer los datos. |
| `value` | `bytes`   | Los datos a establecer en bytes.                    |

### getData

```solidity
function getData(bytes32 key) public view returns (bytes memory value)
```

Recupera los datos que se establecieron para una `clave` de datos concreta.

#### Parámetros:

| Nombre | Tipo      | Descripción                                            |
| :----- | :-------- | :----------------------------------------------------- |
| `key`  | `bytes32` | La clave de datos de la cual se recuperarán los datos. |

#### Valores Devueltos:

| Nombre  | Tipo    | Descripción                       |
| :------ | :------ | :-------------------------------- |
| `value` | `bytes` | Los datos de la clave solicitada. |

### execute (Array)

```solidity
function execute(
    uint256[] memory operationsType,
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory memory datas
) public payable returns (bytes memory result)
```

Igual que [`execute(uint256,address,uint256,bytes)`](#execute---erc725x) pero ejecuta un lote de llamadas en cualquier otro contrato inteligente, transfiriendo valores, o desplegando nuevos contratos inteligentes.

Los valores de la lista de `operationsType` pueden ser uno de los siguientes:

- `0` para `CALL`
- `1` para `CREATE`
- `2` para `CREATE2`
- `3` para `STATICCALL`
- `4` para `DELEGATECALL`

_Activa el evento **[Executed](#executed)** en cada llamada realizada con éxito en la que se haya utilizado el tipo de operación `CALL`, `STATICCALL` o `DELEGATECALL`._

_Activa el evento **[ContractCreated](#contractcreated)** en cada contrato inteligente recién creado que haya utilizado la operación `CREATE` o `CREATE2`._

:::note
La función `execute(uint256[],address[],uint256[],bytes[])` sólo puede ser invocada por el propietario actual del contrato.

Los tipos de operación `staticcall` (`3`) y `delegatecall` (`4`) no permiten transferir valor.
:::

#### Parámetros:

| Nombre           | Tipo        | Descripción                                                                                                                                |
| :--------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `operationsType` | `uint256[]` | El tipo de operaciones que deben ejecutarse.                                                                                               |
| `targets`        | `address[]` | Las direcciones con las que interactuar. No se utiliza si se crea un contrato (operaciones 1 y 2).                                         |
| `values`         | `uint256[]` | La cantidad de tokens nativos a transferir con la transacción (en Wei).                                                                    |
| `datas`          | `bytes[]`   | Los calldatas (cargas útiles codificadas ABI de funciones para ejecutar en otros contratos), o los bytecodes de los contratos a desplegar. |

#### Valores Devueltos:

| Nombre    | Tipo      | Descripción                                                                                                                               |
| :-------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `results` | `bytes[]` | Los datos devueltos por las funciones llamadas en los contratos externos, o las direcciones de los contratos creados (operaciones 1 y 2). |

### setData (Array)

```solidity
function setData(
    bytes32[] memory keys,
    bytes[] memory values
) public
```

Establece un conjunto de datos en múltiples claves de datos en el almacenamiento de la bóveda.

_Activa el evento **[DataChanged](#datachanged)** cuando se establecen correctamente los datos._

:::note
La función `setData(...)` sólo puede ser invocada por el propietario actual del contrato y del contrato LSP1ReceptorDelegadoUnviersalBóveda.
:::

#### Parámetros:

| Nombre   | Tipo        | Descripción                                        |
| :------- | :---------- | :------------------------------------------------- |
| `keys`   | `bytes32[]` | Las claves de datos para las que establecer datos. |
| `values` | `bytes[]`   | El conjunto de datos a establecer.                 |

### getData (Array)

```solidity
function getData(bytes32[] memory keys) public view returns (bytes[] memory values)
```

Recupera un conjunto de datos para múltiples claves de datos dadas.

#### Parámetros:

| Nombre | Tipo        | Descripción                                                 |
| :----- | :---------- | :---------------------------------------------------------- |
| `keys` | `bytes32[]` | Las claves de datos de las cuales se recuperarán los datos. |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                                                |
| :------- | :-------- | :--------------------------------------------------------- |
| `values` | `bytes[]` | Un conjunto de datos para las claves de datos solicitadas. |

### universalReceiver

```solidity
function universalReceiver(
    bytes32 typeId,
    bytes memory data
) public payable returns (bytes memory result)
```

Reenvía la llamada al contrato **ReceptorDelegadoUniversal** si su dirección está almacenada en la clave de datos [LSP1ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver.md#extension).
Se espera que el contrato al que se llama sea un **[LSP1ReceptorDelegadoUniversalBóveda](./lsp1-universal-receiver-delegate-vault.md)**, compatible con [LSP1ReceptorDelegadoUniversal InterfaceId](./interface-ids.md) utilizando ERC165.

_Activa el evento **[ReceptorUniversal](#universalreceiver-1)** cuando esta función se ejecuta correctamente._

#### Parámetros:

| Nombre   | Tipo      | Descripción                     |
| :------- | :-------- | :------------------------------ |
| `typeId` | `bytes32` | Tipo de transferencia recibida. |
| `data`   | `bytes`   | Los datos recibidos             |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                           |
| :------- | :------ | :---------------------------------------------------- |
| `result` | `bytes` | Puede utilizarse para codificar valores de respuesta. |

## Eventos

### OwnershipTransferStarted

```solidity
event OwnershipTransferred(
    address indexed currentOwner,
    address indexed newOwner,
)
```

_**DEBE** dispararse cuando la función **[`transferOwnership(...)`](#transferownership)** se inicia con éxito._

#### Valores:

| Nombre         | Tipo      | Descripción                                  |
| :------------- | :-------- | :------------------------------------------- |
| `currentOwner` | `address` | El propietario actual del contrato.          |
| `newOwner`     | `address` | El potencial nuevo propietario del contrato. |

### OwnershipTransferred

```solidity
event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner,
)
```

_**DEBE** dispararse cuando la función **[`transferOwnership(...)`](#transferownership)** se ejecuta con éxito._

#### Valores:

| Nombre          | Tipo      | Descripción                           |
| :-------------- | :-------- | :------------------------------------ |
| `previousOwner` | `address` | El propietario anterior del contrato. |
| `newOwner`      | `address` | El nuevo propietario del contrato.    |

### RenounceOwnershipStarted

```solidity
event RenounceOwnershipStarted()
```

_**DEBE** dispararse cuando se inicia el proceso **[`renounceOwnership()`](#renounceownership)**._

### OwnershipRenounced

```solidity
event OwnershipRenounced()
```

_**DEBE** activarse cuando se confirma el proceso **[`renounceOwnership()`](#renounceownership)**.._

### ValueReceived

```solidity
event ValueReceived(
    address sender,
    uint256 value
)
```

_**DEBE** dispararse cuando se recibe un token nativo a través de la función **[`fallback(...)`](#fallback)**._

#### Valores:

| Nombre   | Tipo      | Descripción                 |
| :------- | :-------- | :-------------------------- |
| `sender` | `address` | La dirección del remitente. |
| `value`  | `uint256` | Cantidad enviada.           |

### Executed

```solidity
event Executed(
    uint256 operation,
    address target,
    uint256 value,
    bytes4 selector
)
```

_**DEBE** dispararse cuando la función **[`execute(...)`](#execute)** crea una nueva llamada utilizando la operación `CALL` o `STATICCALL`._

#### Valores:

| Nombre      | Tipo      | Descripción                                                      |
| :---------- | :-------- | :--------------------------------------------------------------- |
| `operation` | `uint256` | La operación ejecutada.                                          |
| `target`    | `address` | El contrato inteligente o la dirección con la que se interactúa. |
| `value`     | `uint256` | Valor transferido.                                               |
| `selector`  | `bytes4`  | El selector bytes4 de la función ejecutada en la dirección `to`. |

### ContractCreated

```solidity
event ContractCreated(
    uint256 operation,
    address contractAddress,
    uint256 value
)
```

_**DEBE** dispararse cuando la función **[`execute(...)`](#execute)** crea un nuevo contrato utilizando la operación `CREATE` o `CREATE2`._

#### Valores:

| Nombre      | Tipo      | Descripción                        |
| :---------- | :-------- | :--------------------------------- |
| `operation` | `uint256` | La operación ejecutada.            |
| `to`        | `address` | La dirección del contrato creado.  |
| `value`     | `uint256` | El valor que se envía al contrato. |

### DataChanged

```solidity
event DataChanged(bytes32 dataKey, bytes dataValue)
```

_**DEBE** dispararse cuando la función **[`setData(...)`](#setdata)** se ejecuta con éxito._

#### Valores:

| Nombre      | Tipo      | Descripción                                |
| :---------- | :-------- | :----------------------------------------- |
| `dataKey`   | `bytes32` | La clave de datos cuyo valor se establece. |
| `dataValue` | `bytes`   | El valor de los datos a establecer.        |

:::info
El evento `DataChanged` emitirá sólo los primeros 256 bytes de `dataValue` (para valores grandes establecidos en el almacenamiento ERC725Y).
:::

### UniversalReceiver

```solidity
event UniversalReceiver(
    address from,
    uint256 value,
    bytes32 typeId,
    bytes receivedData
    bytes returnedValue,
)
```

_**DEBE** dispararse cuando la función **[`universalReceiver(...)`](#universalreceiver)** se ejecuta correctamente._

#### Valores:

| Nombre          | Tipo      | Descripción                                                       |
| :-------------- | :-------- | :---------------------------------------------------------------- |
| `from`          | `address` | La dirección que llama a la función **universalReceiver**.        |
| `value`         | `uint256` | La cantidad de valor enviada a la función **universalReceiver**.  |
| `typeId`        | `bytes32` | El hash de un estándar específico o un gancho.                    |
| `receivedData`  | `bytes`   | Los datos arbitrarios pasados a la función **universalReceiver**. |
| `returnedValue` | `bytes`   | El valor devuelto por la función **universalReceiver**.           |

## References

- [Solidity implementations (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts)
