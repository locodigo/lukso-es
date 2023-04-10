---
sidebar_label: 'LSP1 - Receptor Universal'
sidebar_position: 1
---

# LSP1 - Receptor Universal

:::info Documento Estándard

[LSP1 - Receptor Universal](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)

:::

## Introducción
A menudo existe la necesidad de que los contratos inteligentes **estén al tanto de las transacciones entrantes**, especialmente la recepción de tokens.

Un buen ejemplo son las transferencias de tokens **[ERC20](https://eips.ethereum.org/EIPS/eip-20)**. Cuando un contrato inteligente recibe un token, no tiene una forma genérica de **ser notificado** sobre ello. Durante la transferencia de tokens, el saldo del emisor disminuye, y el saldo del receptor aumenta. No hay **más interacciones**, y el contrato de tokens ERC20 sólo actúa como un registro.

![Smart contract recipient outside interaction](/img/standards/lsp1/token-contract-registry.jpeg)

Una solución a este problema podría ser escuchar todos los eventos de transferencia de tokens ERC20 en la red. Sin embargo, esto requiere el uso de un tercero de confianza para escuchar los eventos. Este método limita la autonomía de los contratos inteligentes e introduce un único punto de fallo.

Estándares como **[ERC223](https://eips.ethereum.org/EIPS/eip-223)**, **[ERC721](https://eips.ethereum.org/EIPS/eip-712)**, y **[ERC1155](https://eips.ethereum.org/EIPS/eip-1155)** requieren tener funciones específicas para recibir y ser notificado sobre el token como `tokenReceived(..)`, `onERC721Received(..)`, y `onERC1155Received(..)` respectivamente.

Estas funciones tienen diferentes contextos, parámetros y eventos que hacen que el contrato inteligente no sea interoperable. Si más adelante en el futuro, se adopta un estándar de token **ERCXXXX**, el contrato inteligente (cuenta, DEXs) no será capaz de recibir este tipo de tokens porque ya fue desplegado en la red y **no soporta** la función `onERCXXXXReceived(..)`.

![On token received functions](/img/standards/lsp1/on-received-functions.jpeg)

Una forma de resolver este problema es crear una **función estándar y unificada** que cualquier contrato inteligente pueda implementar. DEXs, Wallets, o perfiles podrían utilizar esta función para ser notificados sobre un activo entrante, información, seguidores, etc.

![Unified notification function to call](/img/standards/lsp1/unified-notification-function.jpeg)

## ¿Qué representa esta norma?

### Especificación

:::success sugerencia

Los contratos inteligentes que implementen el estándar [LSP1-ReceporUniversal](#) DEBERÍAN **registrar** el **[ID-de-interfaz de LSP1ReceporUniversa](../smart-contracts/interface-ids.md) utilizando ERC165**. De esta forma, otros contratos pueden saber que el contrato soporta el estándar LSP1.

:::

Este estándar define una única función llamada `universalReceiver(...)` que puede recibir **cualquier información arbitraria**. Toma dos parámetros:

- bytes32 `typeId`: Hash o Hook de un estándar específico.
- bytes `data`: Cualquier dato arbitrario.

> Los contratos receptores deben tener en cuenta el parámetro `typeId` para **descifrar los datos correctamente**.

La función `universalReceiver(...)` **emite un evento con los datos que se le pasan y algunos datos adicionales**.

![universalReceiver function emits an event](/img/standards/lsp1/universal-receiver-event.jpeg)

Por ejemplo, **para notificar al receptor que está a punto de recibir tokens**, durante una transferencia de tokens, el contrato de tokens puede llamar a la función `universalReceiver(..)` del receptor con:

- bytes32 `typeId`: **Hash**('ERCXXXXTokenReceived')
- bytes `data`: **packedData**(cantidad de token enviado, la dirección del remitente, la marca de tiempo del bloque)

De esta forma, en lugar de **escuchar todos los eventos de los contratos de tokens en la red**, y comprobar cuál de estas transferencias es relativa al receptor, los usuarios pueden escuchar el evento **[ReceptorUniversal](../smart-contracts/lsp0-erc725-account.md#universalreceiver-1)** del contrato que implementa el `receptoruniversal(..)` y conocer los detalles de la transferencia del token.  


Además de emitir un evento, la función `universalReceiver(...)` puede implementar **lógica personalizada** para hacer que el contrato se comporte de forma diferente en función de los datos recibidos. Algunas ideas incluyen:

- Revertir en las llamadas para desautorizar completamente que el contrato inteligente reciba activos, información, etc. :x:
- Registrar los activos recibidos dentro del almacenamiento del contrato (ver [LSP5 - Activos Recibidos](../universal-profile/lsp5-received-assets.md)). :heavy_plus_sign:
- No permitir la recepción de tokens específicos de direcciones de contratos de tokens específicos, por ejemplo (p. ej.: tokens de spam).
- Reenvío de todos los activos recibidos a una bóveda externa o a un contrato de participaciones.
- Reenviar tokens específicos en un contrato detrás de un protocolo o dApp (por ejemplo: liquidez o fondo de préstamos para ganar intereses).
- Dependiendo del typeId, guardar un porcentaje % de tokens recibidos (tokens nativos o no), colocándolos en una bóveda por ejemplo.

![universalReceiver function execute custom logic](/img/standards/lsp1/universal-receiver-logic.jpeg)



## Extensión

:::info

See the **[LSP1-ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)** standard for more details.

:::

Sobreescribir y personalizar la función `universalReceiver(..)` es una opción para que los usuarios permitan **comportamientos diferentes dependiendo de los datos recibidos**. Sin embargo, no es aconsejable codificar la lógica de reacción a acciones específicas dentro de la función porque **esta lógica puede necesitar cambiar en el futuro** dependiendo de varios factores (por ejemplo, la bóveda donde se reenvían los tokens se ve comprometida, se despliega un nuevo contrato de estaca, se decide revertir sobre tokens específicos más tarde). 

**[LSP1-ReceptorDelegadoUnviersal](../generic-standards/lsp1-universal-receiver-delegate.md)** es una **extensión opcional** del estándar **[LSP1-ReceptorUniversal](#)**. Además de notificar a un contrato sobre las transacciones entrantes y salientes emitiendo un evento, puede delegar la llamada a un contrato externo que puede **manejar y reaccionar a llamadas específicas** con su lógica personalizada.

![Universal Receiver Delegate contract](/img/standards/lsp1/universal-receiver-delegate.jpeg)


dirección del **contrato externo** puede almacenarse y cambiarse dentro del almacén de contratos. De esta forma, los usuarios pueden personalizar dichos contratos para implementar una lógica específica que sea modificable en cualquier momento.

![Multiple Universal Receiver Delegate](/img/standards/lsp1/multiple-urd.jpeg)

Si el contrato que implementa el `universalReceiver(..)` admite **[ERC725Y Almacén de Datos clave-valor](https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y)**, la dirección del **contrato externo** DEBE establecerse como valor para la **clave de datos LSP1ReceptorDelegadoUniversal** que se muestra a continuación para habilitar la extensión opcional. Este par clave-valor actuará como referencia, haciendo que este contrato externo sea actualizable en caso necesario.

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

## Referencias

- [Propuestas de Estándares LUKSO: LSP1 - Receptor Delegado Universal (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
