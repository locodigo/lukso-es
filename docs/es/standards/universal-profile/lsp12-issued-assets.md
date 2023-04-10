---
sidebar_label: 'LSP12 - Activos Emitidos'
sidebar_position: 9
---

# LSP12 - Activos Emitidos

:::info Documento Estándar

[LSP12 - Activos Emitidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-12-IssuedAssets.md)

:::

## Introducción

Llevar la cuenta de todos los activos que crean las direcciones es actualmente inviable cuando la lista de activos emitidos la realizan servicios centralizados. Este inconveniente pone de manifiesto el siguiente problema: la ausencia de una forma estándar de leer los activos emitidos dentro y fuera de la cadena, lo que permite a los usuarios crear activos falsos alegando que son los originales.

Una forma de resolver este problema es crear claves de metadatos genéricas que registren en el almacén de contratos inteligentes cuántos activos diferentes ha emitido un contrato inteligente y sus direcciones. Estas claves serán una referencia para que los usuarios comprueben la autenticidad de los activos.

## ¿Qué representa este estándar?

:::tip Recomendación

Asegúrate de comprender las normas **[ERC725Y Almacenamiento Genérico de Claves/Valores](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** y **[LSP2 - EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)** antes de revisar las claves de datos ERC725Y.

:::

Este estándar de metadatos describe dos claves de datos que pueden añadirse a un contrato inteligente [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md) para realizar un seguimiento de los activos emitidos.

### `LSP12IssuedAssets[]`

Esta clave de datos representa una lista con todos los activos emitidos por el contrato.

```json
{
  "name": "LSP12IssuedAssets[]",
  "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

### `LSP12IssuedAssetsMap`

Esta clave de datos representa una clave de mapa que contiene tanto

- un [ID de interfaz ERC165](https://eips.ethereum.org/EIPS/eip-165) para identificar rápidamente el estándar utilizado por los activos emitidos. (Puede ser un activo LSP7 o LSP8)
- el índice en el conjunto [`LSP12IssuedAssets[]`](#lsp12issuedassets) donde se almacenan las direcciones de los activos emitidos.

```json
{
  "name": "LSP12IssuedAssetsMap:<address>",
  "key": "0x74ac2555c10b9349e78f0000<address>",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

### Flujo de verificación de activos

![Flujo de activos emitidos LSP12](../../../../static/img/standards/lsp12/lsp12-issuedassets1.jpeg)

El **flujo de verificación** completo de un activo debe contener una comprobación del **activo** y del contrato inteligente **emisor**.

- Paso 1:** Debes comprobar el contrato inteligente del activo, el **propietario** o la clave de datos **[LSP4Creators Array](../nft-2.0/LSP4-Digital-Asset-Metadata.md#lsp4creators)** y recuperar la dirección del creador de la matriz.

![Comprobación del Conjunto LSP4Creadores en el activo](../../../../static/img/standards/lsp12/lsp12-issuedassets2.jpeg)

- **Paso 2:** Se debe comprobar que la dirección recuperada en el **Paso 1** coincide con una de las direcciones de los activos almacenados en la matriz LSP12IssuedAssets (#lsp12issuedassets)** del Perfil Universal.

![Comprobación de la matriz LSP12IssuedAssets en UP](../../../../static/img/standards/lsp12/lsp12-issuedassets3.jpeg)

