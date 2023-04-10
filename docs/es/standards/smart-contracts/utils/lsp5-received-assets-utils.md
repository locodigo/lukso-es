---
title: LSP5Utils
sidebar_position: 2
---

# LSP5ReceivedAssetsUtils

:::info

[`LSP5Utils.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP5ReceivedAssets/LSP5Utils.sol)

:::

Esta librería puede utilizarse para generar pares de claves-valores de datos ERC725Y relacionados con LSP5ActivosRecibidos. Esto es útil para registrar y dar de baja direcciones de activos poseídos como tokens LSP7 o NFTs LSP8.

## Funciones

### generateReceivedAssetKeys

```solidity
function generateReceivedAssetKeys(
    address receiver,
    address asset,
    bytes32 assetMapKey,
    bytes4 interfaceID
) internal view returns (bytes32[] memory keys, bytes[] memory values);
```

Generar las claves/valores de datos que se establecerán en la dirección del receptor tras recibir los activos.

#### Parámetros:

| Nombre        | Tipo    | Descripción                                                                                                   |
| :------------ | :------ | :------------------------------------------------------------------------------------------------------------ |
| `receiver`    | address | La dirección que recibe el activo y donde deben añadirse las Claves.                                          |
| `asset`       | address | La dirección del activo que se recibe.                                                                        |
| `assetMapKey` | bytes32 | La clave de mapa del activo que se recibe, que contiene el interfaceId del activo y el índice en el conjunto. |
| `interfaceID` | bytes4  | El interfaceID del activo que se recibe.                                                                      |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                   |
| :------- | :-------- | :---------------------------- |
| `keys`   | bytes32[] | Conjunto de claves de datos.  |
| `values` | bytes[]   | Conjunto de valores de datos. |

### generateSentAssetKeys

```solidity
function generateSentAssetKeys(
    address sender,
    bytes32 assetMapKey,
    bytes memory assetInterfaceIdAndIndex
) internal view returns (bytes32[] memory keys, bytes[] memory values);
```

Generación de las claves/valores de datos que se establecerán en la dirección del remitente tras el envío de los activos.

#### Parámetros:

| Nombre                   | Tipo    | Descripción                                                                                                   |
| :----------------------- | :------ | :------------------------------------------------------------------------------------------------------------ |
| sender                   | address | La dirección que envía el activo y donde deben actualizarse las Claves.                                       |
| assetMapKey              | bytes32 | La clave de mapa del activo que se recibe, que contiene el interfaceId del activo y el índice en el conjunto. |
| assetInterfaceIdAndIndex | bytes   | El valor de la clave de mapa del activo que se envía.                                                         |

#### Valores Devueltos:

| Nombre   | Tipo      | Descripción                                                                                                                                  |
| :------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`   | bytes32[] | Conjunto de claves de datos, `LSP5RecievedAssets[]`, `LSP5RecievedAssets[index]`, `LSP5RecievedAssetsMap + asset address` para ser precisos. |
| `values` | bytes[]   | Conjunto de valores de datos.                                                                                                                |

### extractIndexFromMap

```solidity
function extractIndexFromMap(
    bytes memory mapValue
) internal pure returns (uint64);
```

Extrae el índice de un mapeo de `valueType` (bytes8,bytes4) y `valueContent` (Bytes4,Number).

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
