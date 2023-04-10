---
title: LSP4MetadatosActivoDigital
sidebar_position: 7
---

# LSP4MetadatosActivoDigital

:::info Contrato Solidity

[`LSP4MetadatosActivoDigital.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP4DigitalAssetMetadata/LSP4DigitalAssetMetadata.sol)

:::

El **LSP4MetadatosActivoDigital** es un contrato que establece los **Token-Metadata** (nombre y símbolo) para los contratos de token **[LSP7ActivoDigital](./lsp7-digital-asset.md)** y **[LSP8ActivoDigitalIdentificable](./lsp8-identifiable-digital-asset.md)**.

Como este contrato utiliza **[ERC725Y Almacén General de Claves/Valores de Datos](https://eips.ethereum.org/EIPS/eip-725)** para establecer los metadatos, podría añadirse cualquier información, como la **lista de creadores, archivos JSON**, etc.

:::note
_El contrato LSP4MetadatosActivoDigitalcontiene los métodos del [Estándar ERC725Y](https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y):_

```solidity
function setData(bytes32 key, bytes memory value) public;

function getData(bytes32 key) public view returns (bytes memory);

function setData(bytes32[] memory keys, bytes[] memory values) public;

function getData(bytes32[] memory keys) public view returns (bytes[] memory);

```

:::

## Funciones

### constructor

```solidity
constructor(
    string memory name_,
    string memory symbol_,
    address newOwner_
) ERC725Y(newOwner_)
```

Establece el **propietario inicial** del contrato y las siguientes claves de datos en el **[ERC725Y Almacén de Datos Clave-Valor](./lsp0-erc725-account#setdata)**:

- `name_`: nombre del token.
- `symbol_`: símbolo del token.
- Clave de datos [**Estándaresadmitidos: LSP4ActivoDigital **](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#supportedstandardslsp4digitalasset).

#### Parámetros:

| Nombre      | Tipo      | Descripción                  |
| :---------- | :-------- | :--------------------------- |
| `name_`     | `string`  | El nombre del token.         |
| `symbol_`   | `string`  | El símbolo del token.        |
| `newOwner_` | `address` | El propietario del contrato. |

## Eventos

### DataChanged

```solidity
event DataChanged(bytes32 dataKey, bytes dataValue)
```

_**DEBE** dispararse cuando la función **[`setData(...)`](#setdata)** se ejecuta correctamente._

#### Values:

| Nombre      | Tipo      | Descripción                                |
| :---------- | :-------- | :----------------------------------------- |
| `dataKey`   | `bytes32` | La clave de datos cuyo valor se establece. |
| `dataValue` | `bytes`   | El valor de los datos a establecer.        |

:::info
El evento `DataChanged` emitirá sólo los primeros 256 bytes de `dataValue` (para valores grandes establecidos en el almacenamiento ERC725Y).
:::

## Referencias

- [Propuestas de Estándares LUKSO: LSP4 - Metadatos-ActivoDigital (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md)
- [LSP4 - Metadatos-ActivoDigital: Solidity implementations (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/blob/develop/contracts/LSP4DigitalAssetMetadata)
