---
title: LSP10Utils
sidebar_position: 4
---

# LSP10Utils

:::info

[`LSP10Utils.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP10ReceivedVaults/LSP10Utils.sol)

:::

Esta librería contiene funciones de ayuda que se pueden utilizar para generar pares de claves-valores de datos ERC725Y relacionados con Bóvedas Recibidas LSP10.

## Funciones

### generateReceivedVaultKeys

```solidity
function generateReceivedVaultKeys(
    address receiver,
    address vault,
    bytes32 vaultMapKey,
    bytes4 interfaceID
) internal view returns (bytes32[] memory keys, bytes[] memory values);
```

Generar las claves/valores de datos para registrar la dirección de una `bóveda` en el almacenamiento ERC725Y del `receptor`.

#### Parámetros:

| Nombre      | Tipo    | Descripción                                                                            |
| :---------- | :------ | :------------------------------------------------------------------------------------- |
| receiver    | address | La dirección que recibe la bóveda y donde deben añadirse las Claves.                   |
| vault       | address | La dirección de la bóveda recibida.                                                    |
| vaultMapKey | bytes32 | La clave de mapa construida concatenando LSP10Vault Map Prefix y la dirección `vault`. |
| interfaceID | bytes4  | El interfaceID de la bóveda que se recibe.                                             |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                                                                                                                                |
| :------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`   | bytes32[] | Conjunto de claves de datos, `LSP10Vaults[]`, `LSP10Vaults[index]`, `LSP10VaultsMap + dirección de la cámara acorazada` para ser precisos. |
| `values` | bytes[]   | Conjunto de valores de datos.                                                                                                              |

### generateSentVaultKeys

```solidity
function generateSentVaultKeys(
    address sender,
    bytes32 vaultMapKey,
    bytes memory vaultInterfaceIdAndIndex
) internal view returns (bytes32[] memory keys, bytes[] memory values);
```

Generar las claves/valores de datos que se establecerán en la dirección del remitente tras el envío de bóvedas.

#### Parámetros:

| Nombre                   | Tipo    | Descripción                                                                                                      |
| :----------------------- | :------ | :--------------------------------------------------------------------------------------------------------------- |
| sender                   | address | La dirección que envía la bóveda y donde deben actualizarse las Claves.                                          |
| vaultMapKey              | bytes32 | La clave de mapa de la bóveda que se envía, que contiene el interfaceId de la bóveda y el índice en el conjunto. |
| vaultInterfaceIdAndIndex | bytes   | El valor de la clave de mapa de la bóveda que se envía.                                                          |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                   |
| :------- | :-------- | :---------------------------- |
| `keys`   | bytes32[] | Conjunto de claves de datos.  |
| `values` | bytes[]   | Conjunto de valores de datos. |

### extractIndexFromMap

```solidity
function extractIndexFromMap(
    bytes memory mapValue
) internal pure returns (uint64);
```

Extrae el índice de un mapeo de `valueType` (bytes8,bytes4) y `valueContent` (Bytes4,Number).
Devuelve un índice de tipo uint64.

#### Parámetros:

| Nombre   | Tipo  | Descripción                                                                      |
| :------- | :---- | :------------------------------------------------------------------------------- |
| mapValue | bytes | Un mapeo bytes12 de `valueType` (bytes8,bytes4) y `valueContent` (Bytes4,Number) |

#### Valores Devueltos:

| Nombre  | Tipo   | Descripción                |
| :------ | :----- | :------------------------- |
| `index` | uint64 | Índice extraído del mapeo. |

## Referencias

- [Implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-smart-contracts/tree/develop/contracts)
