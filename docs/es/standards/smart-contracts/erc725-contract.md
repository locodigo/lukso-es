---
title: ERC725
sidebar_position: 3
---

# ERC725

:::info Conrtato Solidity

[`ERC725.sol`](https://github.com/ERC725Alliance/ERC725/blob/develop/implementations/contracts/ERC725.sol)

:::

El **ERC725** es el contrato que combina:

- **ERC725X**: contrato que permite una ejecución genérica utilizando diferentes tipos de operaciones.

- **ERC725Y**: contrato que permite un almacenamiento genérico de datos en un contrato inteligente.

:::note
El contrato ERC725 también contiene el método de [ERC165](https://eips.ethereum.org/EIPS/eip-165):

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

Establece el **propietario inicial** del contrato.

#### Parámetros:

| Nombre         | Tipo      | Descripción                                              |
| :------------- | :-------- | :------------------------------------------------------- |
| `initialOwner` | `address` | La dirección a establecer como propietaria del contrato. |

### owner

```solidity
function owner() public view returns (address owner)
```

Devuelve la dirección del propietario actual del contrato inteligente.

#### Devuelve la dirección del propietario actual del contrato inteligente.

#### Valores Devueltos::

| Nombre  | Tipo      | Descripción                         |
| :------ | :-------- | :---------------------------------- |
| `owner` | `address` | El actual propietario del contrato. |

### transferOwnership

```solidity
function transferOwnership(address newOwner) public {
```

Transfiere la propiedad del contrato a la dirección `newOwner`.

_Cuando se transfiere la propiedad, se activa el evento **[OwnershipTransferred](#ownershiptransferred)**._

#### Parámetros:

| Nombre     | Tipo      | Descripción                                              |
| :--------- | :-------- | :------------------------------------------------------- |
| `newOwner` | `address` | La dirección a establecer como propietaria del contrato. |

### execute - ERC725X

```solidity
function execute(
    uint256 operationType,
    address target,
    uint256 value,
    bytes memory data
) public payable returns (bytes memory result)
```

Ejecuta una llamada en cualquier otro contrato inteligente, transfiere valor o despliega un nuevo contrato inteligente.

El `operationType` puede ser el siguiente:

- `0` para `CALL`
- `1` para `CREATE`
- `2` para `CREATE2`
- `3` para `STATICCALL`
- `4` para `DELEGATECALL`

_Cuando una llamada se ejecuta con éxito mediante las operaciones `CALL/STATICCALL/DELEGATECALL`, se activa el evento **[Executed](#executed)**._

_Cuando se crea un contrato inteligente mediante las operaciones `CREATE/CREATE2` se activa el evento **[ContractCreated](#contractcreated)**._

:::note
La función `execute(...)` sólo puede ser invocada por el propietario actual del contrato.

Los tipos de operación `staticcall` (`3`) y `delegatecall` (`4`) no permiten transferir valor.
:::

#### Parámetros:

| Nombre          | Tipo      | Descripción                                                                                                                     |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `operationType` | `uint256` | El tipo de operación que debe ejecutarse.                                                                                       |
| `target`        | `address` | La dirección con la que interactuar. La dirección `to` no se utilizará si se crea un contrato (operaciones 1 y 2).              |
| `value`         | `uint256` | La cantidad de tokens nativos a transferir con la transacción (en Wei).                                                         |
| `data`          | `bytes`   | Los calldata (carga útil codificada ABI de una función para ejecutar en otro contrato), o el bytecode del contrato a desplegar. |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                                                                                                |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------- |
| `result` | `bytes` | Los datos devueltos por la función llamada en el contrato externo, o la dirección del contrato creado (operaciones 1 y 2). |

### execute (Array) - ERC725X

```solidity
function execute(
    uint256[] memory operationsType,
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory datas
) public payable returns (bytes[] memory results)
```

Ejecuta lotes de llamadas en cualquier otro contrato inteligente, transfiere valor o despliega un nuevo contrato inteligente.

_Cuando una llamada se ejecuta con éxito mediante las operaciones `CALL/STATICCALL/DELEGATECALL`, se activa el evento **[Executed](#executed)** en cada iteración de llamada._ 

_Cuando se crea un contrato inteligente mediante las operaciones `CREATE/CREATE2`, se activa el evento **[ContractCreated](#contractcreated)** en cada iteración de creación de contrato._

:::note
La función `execute(...)` sólo puede ser invocada por el propietario actual del contrato.
:::

#### Parámetros:

| Nombre           | Tipo        | Descripción                                                                                                                                       |
| :--------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operationsType` | `uint256[]` | La lista de operaciones que deben ejecutarse.                                                                                                     |
| `targets`        | `address[]` | La lista de direcciones con las que interactuar. Las direcciones `targets` no se utilizarán si se crea un contrato (operaciones 1 y 2).           |
| `values`         | `uint256[]` | La lista de la cantidad de tokens nativos a transferir con la transacción (en Wei).                                                               |
| `datas`          | `bytes[]`   | La lista de calldata (carga útil codificada ABI de una función para ejecutar en otro contrato), o la lista de bytecodes de contratos a desplegar. |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                                                                                                                                     |
| :------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `result` | `bytes[]` | La matriz de datos devuelta por las funciones invocadas en el contrato externo, o las direcciones de los contratos creados (operaciones 1 y 2). |

### setData - ERC725Y

```solidity
function setData(
    bytes32 dataKey,
    bytes memory dataValue
) public
```

Establece un valor en el almacenamiento de la cuenta para una clave de datos concreta.

_Cuando los datos se establecen correctamente, se activa el evento **[DataChanged](#datachanged)**._

:::note
La función `setData(...)` sólo puede ser invocada por el propietario actual del contrato.
:::

#### Parámetros:

| Nombre      | Tipo      | Descripción                                              |
| :---------- | :-------- | :------------------------------------------------------- |
| `dataKey`   | `bytes32` | La clave de datos para la que se establecerán los datos. |
| `dataValue` | `bytes`   | Los datos a establecer.                                  |

### getData - ERC725Y

```solidity
function getData(bytes32 dataKey) public view returns (bytes memory dataValue)
```

Recupera el conjunto de valores para la clave de datos dada.

#### Parámetros:

| Nombre    | Tipo      | Descripción                                      |
| :-------- | :-------- | :----------------------------------------------- |
| `dataKey` | `bytes32` | La clave de datos de la que recuperar los datos. |

#### Valores Devueltos:

| Nombre      | Tipo    | Descripción                       |
| :---------- | :------ | :-------------------------------- |
| `dataValue` | `bytes` | Los datos de la clave solicitada. |

### setData (Array) - ERC725Y

```solidity
function setData(
    bytes32[] memory dataKeys,
    bytes[] memory dataValues
) public
```

Establece un conjunto de datos en múltiples claves de datos en el almacenamiento de la cuenta.

_Cuando se establece correctamente cada par clave/valor de datos, se activa el evento **[DataChanged](#datachanged)**._

:::note
La función `setData(...)` sólo puede ser invocada por el propietario actual del contrato.
:::

#### Parámetros:

| Nombre       | Tipo        | Descripción                                        |
| :----------- | :---------- | :------------------------------------------------- |
| `dataKeys`   | `bytes32[]` | Las claves de datos para las que establecer datos. |
| `dataValues` | `bytes[]`   | El conjunto de datos a establecer.                 |

### getData (Array) - ERC725Y

```solidity
function getData(bytes32[] memory dataKeys) public view returns (bytes[] memory dataValues)
```

Recupera un conjunto de valores para múltiples claves de datos dadas.

#### Parámetros:

| Nombre     | Tipo        | Descripción                                     |
| :--------- | :---------- | :---------------------------------------------- |
| `dataKeys` | `bytes32[]` | Las claves de datos de las que recuperar datos. |

#### Valores Devueltos:

| Nombre       | Tipo      | Descripción                                                |
| :----------- | :-------- | :--------------------------------------------------------- |
| `dataValues` | `bytes[]` | Un conjunto de datos para las claves de datos solicitadas. |

## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(
    address previousOwner,
    address newOwner,
)
```

_**DEBE** dispararse cuando la función **[transferOwnership(...)](#transferownership)** se ejecute correctamente._

#### Valores:

| Nombre          | Tipo      | Descripción                           |
| :-------------- | :-------- | :------------------------------------ |
| `previousOwner` | `address` | El propietario anterior del contrato. |
| `newOwner`      | `address` | El nuevo propietario del contrato.    |

### Executed

```solidity
event Executed(
    uint256 operationType,
    address target,
    uint256 value,
    bytes4 selector
)
```

_**DEBE** dispararse cuando la función **[`execute(...)`](#execute)** crea una nueva llamada utilizando la operación `CALL`, `STATICCALL`, o `DELEGATECALL`._

#### Valores:

| Nombre          | Tipo      | Descripción                                                                            |
| :-------------- | :-------- | :------------------------------------------------------------------------------------- |
| `operationType` | `uint256` | Un **0** (para `CALL`), un **3** (para `STATICCALL`) o un **3** (para `DELEGATECALL`). |
| `target`        | `address` | El contrato inteligente o la dirección a la que se ha llamado.                         |
| `value`         | `uint256` | El valor que se transfiere.                                                            |
| `selector`      | `bytes4`  | El selector bytes4 de la función llamada en la dirección `target`.                     |

### ContractCreated

```solidity
event ContractCreated(
    uint256 operationType,
    address contractAddress,
    uint256 value,
    bytes32 salt
)
```

_**DEBE** dispararse cuando la función **[`execute(...)`](#execute)** crea un nuevo contrato utilizando la operación `CREATE` o `CREATE2`._

#### Valores:

| Nombre          | Tipo      | Descripción                                                                                        |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------- |
| `operationType` | `uint256` | Un **1** (para `CREATE`) o un **2** (para `CREATE2`).                                              |
| `to`            | `address` | La dirección del contrato creado.                                                                  |
| `value`         | `uint256` | El valor enviado al contrato.                                                                      |
| `salt`          | `bytes32` | La sal utilizada en la operación `CREATE2`. Será `bytes32(0)` en el caso de la operación `CREATE`. |

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

## Referencias

- [ERC725 (Especificación estándar, GitHub)](https://github.com/ERC725Alliance/ERC725/blob/develop/docs/ERC-725.md)
- [Implementaciones de Solidity (GitHub)](https://github.com/ERC725Alliance/ERC725/tree/develop/implementations)
