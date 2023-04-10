---
title: LSP6GestordeClaves
sidebar_position: 8
---

# LSP6GestordeClaves

:::info Contrato Solidity

[`LSP6GestordeClaves.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP6KeyManager/LSP6KeyManager.sol)

:::

El **LSP6GestordeClaves** es un contrato que controla el contrato **[LSP0CuentaERC725](./lsp0-erc725-account.md)**. Viene con permisos predefinidos para las direcciones que podrían ir desde establecer datos, ejecutar, cambiar de propietario, etc., tal y como está escrito en la [Sección de permisos](../universal-profile/lsp6-key-manager.md#-types-of-permissions)\* del [Estándar LSP6-GestordeClaves](../universal-profile/lsp6-key-manager.md).

:::warning

La implementación actual del gestor de claves no permite la operación **[DELEGATECALL](../universal-profile/lsp6-key-manager.md#permissions-value)** en la función `execute(...)` de la CuentaERC725 vinculada, debido a su potencial impacto malicioso en el contrato de la cuenta.

:::

:::note
_El contrato LSP6GestordeClaves también contiene los métodos del [Estándar ERC165].(https://eips.ethereum.org/EIPS/eip-165):_

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

## Funciones

### constructor

```solidity
constructor(address target)
```

Vincula el GestordeClaves a la dirección de un contrato **ERC725**.

#### Parámetros:

| Nombre   | Tipo      | Descripción                                       |
| :------- | :-------- | :------------------------------------------------ |
| `target` | `address` | La dirección del contrato **ERC725** a controlar. |

### target

```solidity
function target() external view returns (address)
```

Devuelve la dirección de la cuenta vinculada a este KeyManager.

Puede ser un contrato que implemente

- [ERC725X](https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725x) solamente.
- Sólo [ERC725Y](https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y).
- cualquier contrato basado en ERC725 (que implemente tanto ERC725X como ERC725Y), como una [Cuenta ERC725](../smart-contracts/lsp0-erc725-account.md).

#### Devuelve

| Nombre   | Tipo      | Descripción                         |
| -------- | --------- | ----------------------------------- |
| `target` | `address` | la dirección de la cuenta vinculada |

### execute

```solidity
function execute(bytes memory payload) public payable returns (bytes memory result)
```

Igual que `execute(bytes)` pero ejecuta un lote de cargas útiles en la **LSP0CuentaERC725** vinculada.

Las cargas útiles deben representar las llamadas a funciones codificadas abi de una de las funciones contractuales **LSP0CuentaERC725**:

- **[`setData(bytes32,bytes)`](./lsp0-erc725-account.md#setdata)**.
- **[`setData(bytes32[],bytes[])`](./lsp0-erc725-account.md#setdata-array)**.
- **[`execute(uint256,address,uint256,bytes)`](./lsp0-erc725-account.md#execute)**.
- **[`transferOwnership(address)`](./lsp0-erc725-account.md#transferownership)**.
- **[`acceptOwnership()`](./lsp0-erc725-account.md#acceptownership)**.

_Cuando una llamada se ejecuta correctamente, se activa el evento **[Executed](#executed)**._

#### Parámetros:

| Nombre    | Tipo    | Descripción               |
| :-------- | :------ | :------------------------ |
| `payload` | `bytes` | La carga útil a ejecutar. |

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                                                          |
| :------- | :------ | :----------------------------------------------------------------------------------- |
| `result` | `bytes` | Los datos devueltos como bytes codificados ABI si la llamada a la cuenta tuvo éxito. |

### execute (Array)

```solidity
function execute(uint256[] calldata values, bytes[] calldata payloads) public payable returns (bytes memory result)
```

Igual que `execute(bytes)` pero ejecuta un lote de cargas útiles en la **LSP0CuentaERC725** vinculada.

Las cargas útiles deben representar las llamadas a funciones codificadas abi de una de las funciones contractuales **LSP0CuentaERC725**:

- **[`setData(bytes32,bytes)`](./lsp0-erc725-account.md#setdata)**.
- **[`setData(bytes32[],bytes[])`](./lsp0-erc725-account.md#setdata-array)**.
- **[`execute(uint256,address,uint256,bytes)`](./lsp0-erc725-account.md#execute)**.
- **[`transferOwnership(address)`](./lsp0-erc725-account.md#transferownership)**.
- **[`acceptOwnership()`](./lsp0-erc725-account.md#acceptownership)**.

_Activa el evento **[Executed](#executed)** cuando una llamada se ejecuta correctamente._

#### Parámetros:

| Nombre     | Tipo        | Descripción                                                   |
| :--------- | :---------- | :------------------------------------------------------------ |
| `values`   | `uint256[]` | El `msg.value` que se enviará para una carga útil específica. |
| `payloads` | `bytes[]`   | Las cargas útiles que deben ejecutarse.                       |

#### Valores Devueltos:

| Nombre    | Tipo      | Descripción                                                                                  |
| :-------- | :-------- | :------------------------------------------------------------------------------------------- |
| `results` | `bytes[]` | Los datos devueltos como bytes[] codificados ABI si las llamadas a la cuenta tuvieron éxito. |

### getNonce

```solidity
function getNonce(
    address signer,
    uint256 channel
) public view returns (uint256 nonce)
```

Devuelve el **nonce** que necesita ser firmado por una clave permitida para ser pasado a la función **[`executeRelayCall(...)`](#executerelaycall)**. Un firmante puede elegir su número de canal arbitrariamente.

:::note
Puede encontrar más información sobre **canales** aquí: **[Qué son los nonces multicanal](../faq/channel-nonce.md)**\_
:::

#### Parámetros:

| Nombre    | Tipo      | Descripción                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------- |
| `signer`  | `address` | Dirección del firmante de la transacción.                             |
| `channel` | `uint256` | El canal que el firmante desea utilizar para ejecutar la transacción. |

#### Valores Devueltos:

| Nombre  | Tipo      | Descripción   |
| :------ | :-------- | :------------ |
| `nonce` | `uint256` | Nonce actual. |

### executeRelayCall

```solidity
function executeRelayCall(
    bytes memory signature,
    uint256 nonce,
    bytes memory _calldata
) public
```

Permite a cualquiera ejecutar una carga útil en la **LSP0CuentaERC725** vinculada, si dispone de un mensaje firmado de una dirección con ciertos permisos.

Para obtener una firma válida hay que hacer lo siguiente:

1. Reunir 4 cosas:

```solidity
bytes memory payload = abi.encodeWithSignature(
    "<Signature of the method that will be executed, e.g. 'setData(bytes32[],bytes[])'>",
    ...[<A comma-separated list of parameters that will be passed to the methods>]
);

// El id de cadena de la blockchain donde se ejecutará el `payload`.
uint256 chainId = block.chainid; // o <ID de la cadena del blockchain donde interactuará con el gestor de claves>.

// La dirección del gestor de claves (el contrato inteligente donde se ejecutará el `payload`)
address keyManagerAddress = '0x...';

uint256 nonce = ILSP6KeyManager(keyManagerAddress).getNonce(...);
```

2. Una vez reunidas estas 4 informaciones, debes codificarlas utilizando `abi.encodePacked(...)`:

```solidity
bytes memory encodedMessage = abi.encodePacked(
    "\x19\x00",
    keyManagerAddress,
    6, // LSP6 VERSION
    chainId,
    nonce,
    msg.value,
    payload
);
```

3. A continuación, debes obtener el hash del `encodedMessage`:

```solidity
bytes32 encodedMessageHash = keccak256(encodedMessage);
```

4. Después puedes firmar el encodedMessageHash y voilá, ya tienes la firma lista.

5. Para ejecutar el `payload` tendrías que hacer lo siguiente:

```solidity
ILSP6KeyManager(keyManagerAddress).executeRelayCall(
    <The signature that you got from step 4.>,
    nonce, // We got it in step 1.
    payload //We got it in step 1.
);
```

_Cuando una llamada se ejecuta correctamente, se activa el evento **[Executed](#executed)**._

#### Parámetros:

| Nombre      | Tipo      | Descripción                                    |
| :---------- | :-------- | :--------------------------------------------- |
| `signature` | `bytes`   | La firma EIP191 de bytes65.                    |
| `nonce`     | `uint256` | El nonce de la dirección que firmó el mensaje. |
| `_calldata` | `bytes`   | La carga útil que se va a ejecutar.            |

#### Valor Devuelto:

| Nombre   | Tipo    | Descripción                                                                                                                               |
| :------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `result` | `bytes` | Si la carga útil en el **LSP0CuentaERC725** vinculado era `ERC725X.execute(...)`, los datos devueltos por el externo realizado por la UP. |

### executeRelayCall (Array)

```solidity
function executeRelayCall(
    bytes[] calldata signatures,
    uint256[] calldata nonces,
    uint256[] calldata values,
    bytes[] calldata payloads
) public
```

Igual que [`executeRelayCall(bytes,uint256,bytes)`](#executerelaycall), pero permite a cualquiera ejecutar un **lote de cargas útiles** en la **LSP0CuentaERC725** vinculada en nombre de otras direcciones, siempre que las direcciones que firmaron las `cargas útiles` tengan algunos permisos.

#### Parámetros:

| Nombre       | Tipo        | Descripción                                                         |
| :----------- | :---------- | :------------------------------------------------------------------ |
| `signatures` | `bytes[]`   | Un conjunto de bytes65 firmas EIP191.                               |
| `nonces`     | `uint256[]` | Un conjunto de nonces de las direcciones que firmaron los mensajes. |
| `values`     | `uint256[]` | Un conjunto de valores que se enviarán para cada carga útil.        |
| `payloads`   | `bytes[]`   | Un conjunto de cargas útiles a ejecutar.                            |

#### Valores Devueltos:

| Nombre    | Tipo      | Descripción                                                                                                                                       |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `results` | `bytes[]` | Para cada carga útil en el **LSP0CuentaERC725** vinculado que fue `ERC725X.execute(...)`, los datos devueltos por el externo realizado por la UP. |

### isValidSignature

```solidity
function isValidSignature(
    bytes32 hash,
    bytes memory signature
) public view returns (bytes4 magicValue)
```

Comprueba si una firma fue suscrita por una dirección que tenga al menos el permiso **[SIGN](../universal-profile/lsp6-key-manager.md/#permission-values)** para este GestordeClaves; en caso contrario, devolverá el valor de error.

#### Parámetros:

| Nombre      | Tipo      | Descripción                                              |
| :---------- | :-------- | :------------------------------------------------------- |
| `hash`      | `bytes32` | El hash de los datos firmados en nombre de la dirección. |
| `signature` | `bytes`   | La(s) firma(s) del propietario de los datos.             |

#### Valores Devueltos:

| Nombre       | Tipo     | Descripción                                                                            |
| :----------- | :------- | :------------------------------------------------------------------------------------- |
| `magicValue` | `bytes4` | El magicValue puede ser `0x1626ba7e` en caso de éxito o `0xffffffff` en caso de fallo. |

## Events

### Executed

```solidity
event Executed(
    uint256 value,
    bytes4 selector
)
```

_**DEBE** dispararse cuando una transacción se ha ejecutado correctamente desde la función **[execute](#execute)** o **[executeRelayCall](#executerelaycall)**._

#### Valores:

| Nombre     | Tipo      | Descripción                                                                    |
| :--------- | :-------- | :----------------------------------------------------------------------------- |
| `value`    | `uint256` | La cantidad que se enviará con la carga útil.                                  |
| `selector` | `bytes4`  | El selector bytes4 de la función ejecutada en el enlace [`target()`](#target). |

## Referencias

- [Propuestas de Estándares LUKSO: LSP6 - Gestor de Claves (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md)
- [LSP6 GestordeClaves: implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP6KeyManager)
