---
sidebar_label: 'LSP1 - Receptor Delegado Universal'
sidebar_position: 2
---

# LSP1 - Receptor Delegado Universal

:::info Documento Estándard

[LSP1 - Receptor Delegado Universal](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md#specification-of-the-universalreceiverdelegate)

:::

:::success Sugerencia

Para comprender mejor este estándar, se recomienda consultar primero el estándar de origen **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)**.

:::

## Introducción

Una vez desplegado, el código de un contrato inteligente **no puede ser modificado**. Sin embargo, los constructores pueden decidir cómo sus contratos inteligentes implementan la función [`universalReceiver(...)`](../smart-contracts/lsp0-erc725-account.md#universalreceiver). Este estándar permite a cualquier contrato inteligente externo cambiar las relaciones del contrato principal para cambiar el comportamiento de la función.

Por lo tanto, se aconseja no programar cómo el contrato inteligente debe manejar y reaccionar a llamadas específicas dentro de la función `universalReceiver(...)`. En su lugar, debería delegar esta funcionalidad a otro contrato externo. Los desarrolladores podrían entonces personalizar dichos contratos para implementar una lógica específica que sea **canjeable en cualquier momento a través de una actualización**.

## ¿Qué representa esta norma?

### Especificación

:::success Sugerencia

Los contratos inteligentes que implementen el estándar [LSP1-ReceptorDelegadoUniversal](#) DEBERÍAN **registrar** el **[IdDeInterfazDeReceptorDelegadoUniversalLSP1](../smart-contracts/interface-ids.md) utilizando ERC165**. De esta forma, otros contratos pueden saber que el contrato soporta el estándar LSP1.

:::

Este estándar define un contrato llamado **ReceptorDelegadoUniversal** que contiene una única función llamada `universalReceiverDelegate(...)` que debe ser llamada por la función `universalReceiver(..)` con:

- address `caller`: la dirección que llamó inicialmente a la función `universalReceiver(...)`.

- uint256 `value`: la cantidad de valor enviada a la función `universalReceiver(...)`.

- bytes32 `typeId`: el typeId pasado a la función `universalReceiver(...)`.

- bytes `data`: los datos pasados a la función `universalReceiver(...)`.




### Cómo funciona la delegación

La dirección del contrato **[ReceptorDelegadoUniversal](../smart-contracts/lsp1-universal-receiver-delegate-up.md)** puede almacenarse dentro del almacenamiento del contrato que delega su funcionalidad `universalReceiver(...)`. Esto permite la actualización del **ReceptorDelegadoUniversal** simplemente cambiando la dirección (en el almacenamiento) a otro ReceptorDelegadoUniversal que contenga una nueva lógica.

Si el contrato que implementa el `universalReceiver(..)` admite **[Almacén de clave-valor de datos ERC725Y](https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y)**, la dirección del **contrato externo** DEBE establecerse como valor para la **clave de datos LSP1ReceptorDelegadoUniversal** que se muestra a continuación para habilitar la ampliación opcional. Este par clave-valor actuará como referencia, haciendo que este contrato externo sea actualizable en caso necesario.

```json
{
  "name": "LSP1UniversalReceiverDelegate",
  "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",
  "keyType": "Singleton",
  "valueType": "address",
  "valueContent": "Address"
}
```
Consulta **[LSP2-EsquemaJSONERC725Y](./lsp2-json-schema.md)** para obtener más información sobre el esquema JSON.

## Implementaciones

Existen varias implementaciones del estándar. El contrato **[LSP1ReceptorDelegadoUniversalUP](../smart-contracts/lsp1-universal-receiver-delegate-up.md)** es una de ellas y se utiliza como delegado de la función `universalReceiver(...)` del contrato **PerfilUniversal**.

Por el momento, este contrato permite

- recibir y enviar tokens y vaults
- registrar las claves de datos que los representan según las normas **[LSP5-ActivosRecibidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)** y **[LSP10-BóvedasRecibidas](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md)**.

### Escenario de transferencia de Tokens

Un escenario posible es el de una transferencia de tokens entre Alice y Bob. Alice quiere transferir un token propiedad de su Perfil Universal al Perfil Universal de su amigo Bob.

**1.** Llama a la función **`transfer(...)`** en el contrato de token a través del [Gestor de Claves](../smart-contracts/lsp6-key-manager.md).

![executing transfer function](/img/standards/lsp1delegate/token-transfer-1.jpg)

**2.** La función `transfer(...)` del contrato de tokens **activará directamente un gancho** que llamará a la función `universalReceiver(...)` de los Perfiles Universales del remitente y del destinatario.

![token contract hooks calling universalReceiver function](/img/standards/lsp1delegate/token-transfer-2.jpg)

**3.** Si se establece el contrato **ReceptorDelegadoUniversal**, será llamado por la función `universalReceiver(...)` y ejecutará su lógica personalizada.

![universalReceiver function calling UniversalReceiverDelegate contract](/img/standards/lsp1delegate/token-transfer-3.jpg)

**4.** El **ReceptorDelegadoUniversal** del **Perfil Universal** permite transferir y establecer **[LSP5-ActivosRecibidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)** claves de datos en ambos Perfiles a través del Gestor de Claves.

![UniversalReceiverDelegate setting data keys on profile](/img/standards/lsp1delegate/token-transfer-4.jpg)

## Referencias

- [Propuestas de Estándares LUKSO: LSP1 - Receptor Delegado Universal (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
- [LSP1 Receptor Delegado Universal: implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)
