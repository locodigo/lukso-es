---
sidebar_label: 'LSP10 - Bóvedas Recibidas'
sidebar_position: 8
---

# LSP10 - Bóvedas Recibidas

:::info Documentp Estándard

[LSP10 - Bóvedas Recibidas](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md)

:::

## Introducción

Para realizar un seguimiento de todas las bóvedas que posee una dirección, debemos evitar el mismo problema mencionado en [LSP5-ActivosRecibidos](./lsp5-received-assets.md), que es no informar a los receptores y remitentes sobre la transferencia de propiedad de las [Bóvedas LSP9](./lsp9-vault.md).

Una forma de evitar este problema es crear claves de metadatos genéricas que los desarrolladores deberían registrar en el almacén de contratos inteligentes, representando cuántas bóvedas diferentes se poseen, su tipo y la dirección del contrato de bóveda transferido.

## ¿Qué representa este estándar?

:::tip Recomendación

Asegúrate de comprender las normas **[ERC725Y Almacenamiento Genérico de Claves/Valores](../lsp-background/erc725.md#erc725y---generic-data-keyvalue-store)** y **[LSP2 - EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)** antes de revisar las Claves de Datos ERC725Y.

:::


Este estándar de metadatos describe dos claves de datos que pueden añadirse a un contrato inteligente [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md) para realizar un seguimiento de las [Bóveda LSP9] recibidas y en propiedad(./lsp9-vault.md).

### `LSP10Vaults[]`

Esta clave de datos representa una lista de todas las bóvedas propiedad del contrato.

```json
{
  "name": "LSP10Vaults[]",
  "key": "0x55482936e01da86729a45d2b87a6b1d3bc582bea0ec00e38bdb340e3af6f9f06",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```


:::tip Recomendación

Se recomienda consultar la clave de datos **`LSP10Vaults[]`** para comprobar si un contrato inteligente es compatible con el estándar **[LSP10 - BóvedasRecibidas](./lsp10-received-vaults.md)**.

:::

### `LSP10VaultsMap`

Esta clave de datos representa una clave de mapa que contiene tanto

- un [ID de interfaz ERC165](https://eips.ethereum.org/EIPS/eip-165) para identificar rápidamente el estándar utilizado por el contrato inteligente de cada bóveda (sin necesidad de consultar directamente los contratos de activos).
- el índice en el conjunto [`LSP10Vaults[]`](#lsp10vaults-) donde se almacenan las direcciones de las cámaras acorazadas recibidas.

La clave de datos `LSP10VaultsMap` también ayuda a evitar la adición de duplicados a la matriz cuando se añade automáticamente a través de un contrato inteligente (_e.g.,_ un [LSP1-ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)).

```json
{
  "name": "LSP10VaultsMap:<address>",
  "key": "0x192448c3c0f88c7f238c0000<address>",
  "keyType": "Mapping",
  "valueType": "(bytes4,bytes8)",
  "valueContent": "(Bytes4,Number)"
}
```

### Flujo

:::info Nota

Las claves de datos también se configuran en el **Perfil Universal del remitente** para eliminar la dirección del contrato de la bóveda cuando se envían al destinatario.

:::

Si se establecen al transferir bóvedas, estas claves de datos se actualizan automáticamente en el almacenamiento de PerfilUniversal a través del contrato [LSP1ReceptorDelegadoUniversalUP](../smart-contracts/lsp1-universal-receiver-delegate-up.md).

![Vault transfer detailed flow](/img/standards/lsp10/detailed-vault-transfer.jpeg)

![LSP10 Received Vaults Flow](/img/standards/lsp10/lsp10-received-vaults.jpeg)
