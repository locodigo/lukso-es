---
sidebar_label: 'LSP5 - Activos Recibdos'
sidebar_position: 5
---

# LSP5 - Activos Recibidos

:::info Documento Estándard

[LSP5 - Activos Recibidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)

:::

## Introducción

Llevar un registro de todos los tokens que posee una dirección es actualmente inviable. Si quieres saber de qué tokens eres propietario, tienes que importar manualmente la dirección del contrato de tokens y consultar el saldo de tu clave en ella cada vez para cada token. Este inconveniente pone de manifiesto el siguiente problema: poseer tokens sin ser consciente de ello porque no hay forma de ser notificado sobre los tokens que has recibido en primer lugar.

Una forma de resolver este problema es crear claves de metadatos genéricas que registrarían en el almacenamiento del contrato inteligente cuántos tokens diferentes posees y la dirección de los contratos de tokens transferidos.

## ¿Qué representa esta norma?

:::tip Recomendación

Asegúrate de comprender las normas **[ERC725Y Almacenamiento Genérico de Claves/Valores](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** y **[LSP2 - EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)** antes de revisar las claves de datos ERC725Y.

:::


Este estándar de metadatos describe dos claves de datos que pueden añadirse a un contrato inteligente [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y) para hacer referencia y realizar un seguimiento de los activos recibidos.

### `LSP5ActivosRecibidos[]`

Esta clave de datos representa una lista de todos los tokens y NFTs que posee actualmente el contrato.

```json
{
  "name": "LSP5ReceivedAssets[]",
  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

:::tip Recomendación

Se recomienda consultar la clave de datos **`LSP5ActivosRecibidos[]`** para comprobar si un contrato es compatible con el estándar **[LSP5 - ActivosRecibidos](./lsp5-received-assets.md)**.

:::

### `LSP5ReceivedAssetsMap`

Esta clave de datos representa una clave de mapa, ambas con

- un [ERC165 ID de interfaz](https://eips.ethereum.org/EIPS/eip-165) para identificar rápidamente el estándar utilizado por cada contrato inteligente de activos (sin necesidad de consultar directamente los contratos de activos).
- el índice en el conjunto [`LSP5ReceivedAssets[]`](#lsp5receivedassets-) donde se almacenan las direcciones de los activos recibidos.

La clave de datos `LSP5ReceivedAssetsMap` también ayuda a evitar que se añadan duplicaciones a dicho conjunto cuando se añaden automáticamente a través de un contrato inteligente (por ejemplo, _ un [LSP1-ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)).

```json
{
  "name": "LSP5ReceivedAssetsMap:<address>",
  "key": "0x812c4334633eb816c80d0000<address>",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

### Flujo

:::info Nota

Las claves de datos también se establecen en el **Perfil Universal del remitente** para eliminar la dirección del contrato de token si se envía todo el saldo.

:::

Si se establecen al transferir tokens, estas claves de datos se actualizan automáticamente en el almacenamiento del Perfil Universal a través del contrato [LSP1ReceptorDelegadoUniversalUP](../smart-contracts/lsp1-universal-receiver-delegate-up.md).

:::note
Consulta el [escenario de transferencia de tokens](../generic-standards/lsp1-universal-receiver-delegate#token-transfer-scenario) para más detalles.
:::

![Flujo detallado de transferencia de tokens](/img/standards/lsp5/detailed-token-transfer.jpeg)

![Flujo de activos recibidos de LSP5](/img/standards/lsp5/lsp5-received-assets.jpeg)
