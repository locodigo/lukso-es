---
sidebar_label: 'LSP4 - Metadatos Activo Digital'
sidebar_position: 2
---

# LSP4 - Metadatos Activo Digital

:::info Documento Estándard

[LSP4 - Metadatos Activo Digital](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md)

:::

## Introducción

Los estándares existentes de tokens y NFTs ofrecen funcionalidades limitadas para adjuntar información a los propios contratos. Por ejemplo, las normas ERC20 y ERC721 sólo definen las funciones **`name()`**, **`symbol()`** y **`tokenURI()`**. Esto dificulta añadir información más específica sobre el activo (por ejemplo, un icono, el creador o creadores del activo, la utilidad o motivo del token, la comunidad que lo respalda, etc.). Dicha información es crucial para que cada token o NFT sea descriptivo y personalizado.

**LSP4-Metadatos-ActivoDigital** resuelve este problema definiendo un conjunto de claves de datos para describir un **Activo Digital** utilizando [ERC725Y](https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y) como columna vertebral. ERC725Y permite que los contratos inteligentes tengan un almacenamiento muy flexible y extensible. Con ERC725Y, se puede adjuntar cualquier información o metadatos al token o NFT.

![Diagrama de metadatos de activos digitales LSP4](/img/standards/lsp4/lsp4-digital-asset-metadata-diagram.png)

## Claves de datos ERC725Y

:::tip Sugerencia

Asegúrate de comprender los estándares **[ERC725Y Almacenamiento Genérico de Claves/Valores](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** y **[LSP2 - EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)** antes de revisar las Claves de Datos ERC725Y.

:::

### `SupportedStandards:LSP4DigitalAsset`

```json
{
  "name": "SupportedStandards:LSP4DigitalAsset",
  "key": "0xeafec4d89fa9619884b60000a4d96624a38f7ac2d8d9a604ecf07c12c77e480c",
  "keyType": "Mapping",
  "valueType": "bytes4",
  "valueContent": "0xa4d96624"
}
```

Esta clave se utiliza para saber si el contrato representa un **Activo Digital**.

### `LSP4TokenName`

```json
{
  "name": "LSP4TokenName",
  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",
  "keyType": "Singleton",
  "valueType": "string",
  "valueContent": "String"
}
```

El valor asociado a esta clave de datos representa el nombre del activo digital.

### `LSP4TokenSymbol`

```json
{
  "name": "LSP4TokenSymbol",
  "key": "0x2f0a68ab07768e01943a599e73362a0e17a63a72e94dd2e384d2c1d4db932756",
  "keyType": "Singleton",
  "valueType": "string",
  "valueContent": "String"
}
```

El valor asociado a esta clave de datos representa el símbolo del activo digital.

### `LSP4Metadata`

```json
{
  "name": "LSP4Metadata",
  "key": "0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e",
  "keyType": "Singleton",
  "valueType": "bytes",
  "valueContent": "JSONURL"
}
```

El valor asociado a esta clave de datos es un [`JSONURL`](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl). Representa una referencia a un [archivo JSON que describe el **activo digital**](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#lsp4metadata). El archivo puede almacenarse de forma centralizada o descentralizada.

### `LSP4Creators`

Esta clave de datos se refiere a la(s) **dirección(es)** del (de los) **creador(es)** del activo digital. Puede ayudar a comprobar la **autenticidad del activo** cuando se combina con **[LSP12-ActivosEmitidos](../universal-profile/lsp12-issued-assets.md)**.

```json
{
  "name": "LSP4Creators[]",
  "key": "0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

```json
{
  "name": "LSP4CreatorsMap:<address>",
  "key": "0x6de85eaf5d982b4e5da00000<address>",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

## Referencias

- [Propuestas de Estándares LUKSO: LSP4 - Metadatos de activos digitales (Especificación Estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md)
