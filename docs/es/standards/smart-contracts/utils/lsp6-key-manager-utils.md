---
title: LSP6Utils
sidebar_position: 3
---

# LSP6KeyManagerUtils

:::info

[`LSP6Utils.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP6KeyManager/LSP6Utils.sol)

:::

Librería que contiene funciones de ayuda para consultar claves de datos ERC725Y relacionadas con LSP6. Pueden utilizarse para recuperar permisos, llamadas permitidas o claves de datos ERC725Y relacionadas con direcciones de controladores.

## Funciones

### getPermissionsFor

```solidity
function getPermissionsFor(
    IERC725Y target,
    address caller
) internal view returns (bytes32);
```

Leer los permisos de un `caller` en un contrato ERC725Y `target`.

#### Parámetros:

| Nombre | Tipo     | Descripción                                                           |
| :----- | :------- | :-------------------------------------------------------------------- |
| target | IERC725Y | Un contrato `IERC725Y` donde leer los permisos.                       |
| caller | address  | La dirección del controlador desde donde se van a leer los permisos.  |

#### Valores Devueltos

Devuelve un `bytes32` BitArray que contiene los permisos de una dirección de controlador.

### getAllowedCallsFor

```solidity
function getAllowedCallsFor(
    IERC725Y target,
    address caller
) internal view returns (bytes memory);
```

Leer las llamadas permitidas de un `caller` en un contrato ERC725Y `target`.

#### Parámetros:

| Nombre | Tipo     | Descripción                                                           |
| :----- | :------- | :-------------------------------------------------------------------- |
| target | IERC725Y | Un contrato `IERC725Y` donde leer los permisos.                       |
| caller | address  | La dirección del controlador desde donde se van a leer los permisos.  |

#### Valores Devueltos

Devuelve un CompactBytesArray que contiene las llamadas que un controlador puede realizar.

### getAllowedERC725YDataKeysFor

```solidity
function getAllowedERC725YDataKeysFor(
    IERC725Y target,
    address caller
) internal view returns (bytes memory);
```

Leer las claves de datos ERC725Y permitidas de un `caller` en un contrato ERC725Y `target`.

#### Parámetros:

| Nombre | Tipo     | Descripción                                                           |
| :----- | :------- | :-------------------------------------------------------------------- |
| target | IERC725Y | Un contrato `IERC725Y` donde leer los permisos.                       |
| caller | address  | La dirección del controlador desde donde se van a leer los permisos.  |

#### Valores Devueltos

Devuelve un CompactBytesArray que contiene las claves de datos ERC725 permitidas con las que la dirección del controlador puede interactuar.

### hasPermission

```solidity
function hasPermission(
    bytes32 addressPermission,
    bytes32 permissionToCheck
) internal pure returns (bool);
```

Compara los permisos `addressPermissions` de una dirección para comprobar si incluyen los permisos `permissionToCheck`.

#### Parámetros:

| Nombre            | Tipo    | Descripción                                                    |
| :---------------- | :------ | :------------------------------------------------------------- |
| addressPermission | bytes32 | Los permisos de una dirección almacenada en una cuenta ERC725. |
| permissionToCheck | bytes32 | Los permisos a verificar.                                      |

#### Valores Devueltos

Devuelve `true` si `addressPermission` contiene el `permissionToCheck`.

### setDataViaKeyManager

```solidity
function setDataViaKeyManager(
    address keyManagerAddress,
    bytes32[] memory keys,
    bytes[] memory values
) internal returns (bytes memory result);
```

Utiliza `setData(bytes32[],bytes[])` a través del GestordeClaves del destino.

#### Parámetros:

| Nombre            | Tipo      | Descripción                      |
| :---------------- | :-------- | :------------------------------- |
| keyManagerAddress | address   | La dirección del GestordeClaves. |
| keys              | bytes32[] | El conjunto de claves de datos.  |
| values            | bytes[]   | El conjunto de valores de datos. |

#### Valores Devueltos

Devuelve el resultado de la llamada externa.

### getPermissionName

```solidity
function getPermissionName(
    bytes32 permission
) internal pure returns (string memory errorMessage);
```

Obtiene el nombre del permiso a partir de su valor BitArray.

#### Parámetros:

| Nombre     | Tipo    | Descripción                            |
| :--------- | :------ | :------------------------------------- |
| permission | bytes32 | Permiso cuyo nombre se desea devolver. |

#### Valores Devueltos

El nombre del permiso.

## Referencias

- [Implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-smart-contracts/tree/develop/contracts)
