---
sidebar_label: 'LSP7 - Activo Digital (Token)'
sidebar_position: 3
---

# LSP7 - Activo Digital

:::info Documento Estándard

[LSP7 - Activo Digital](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md)

:::

## Introducción

Los activos fungibles como **[ERC20](https://eips.ethereum.org/EIPS/eip-20)**, **[ERC223](https://eips.ethereum.org/EIPS/eip-223)** o **[ERC777](https://eips.ethereum.org/EIPS/eip-777)** tienen muchas limitaciones en términos de metadatos, transferencias seguras e interacción de activos. Esto causa problemas a los usuarios que buscan, **control total** sobre qué activos aceptan o no, y una **experiencia de usuario sencilla** mientras crean, compran e intercambian activos.

**[LSP7-ActivoDigital](#)** es el estándar que pretende resolver todos los problemas mencionados anteriormente mediante:

- Permitir transferencias más seguras a través del **parámetro booleano de fuerza**.
- Más metadatos de activos **mediante [LSP4-MetadatosActivoDigital](./LSP4-Digital-Asset-Metadata.md)**.
- Más interacción entre el contrato de activos y el _emisor/receptor_ de activos **mediante ganchos de token**.

![Características de LSP7DigitalAsset Introducción](/img/standards/lsp7/lsp7-intro.jpeg)

## ¿Qué representa esta Norma?

### Especificación

**[LSP7-ActivoDigital](#)** es un estándar que pretende describir activos fungibles. El término _fungible_ significa que estos activos son **mutuamente intercambiables** (*por ejemplo, *un token tiene el mismo valor que otro token).

LSP7-ActivoDigital es un estándar de interfaz que describe un conjunto de métodos que los contratos de activos fungibles deben implementar y que otros contratos y clientes pueden llamar.

Este estándar se basa en **[ERC20](https://eips.ethereum.org/EIPS/eip-20)** y **[ERC777](https://eips.ethereum.org/EIPS/eip-777)** con las características adicionales que se mencionan a continuación:

### Divisible _vs_ No Divisible

Al crear activos conformes con el estándar **LSP7-DigitalAsset**, es posible definir el token como **divisible** o **no divisible** en el constructor.

- Los activos **divisibles** pueden tener decimales (hasta 18) y los importes de los token pueden ser fraccionarios. Por ejemplo, es posible acuñar o transferir menos de una ficha (_e.g., 0.3 fichas_).
- **Activo no divisible** significa que una ficha no puede dividirse en partes fraccionarias. Por ejemplo, no se puede transferir **1/10** de una ficha, o 0,3 fichas, sino sólo una unidad entera de fichas.

Los **billetes creados como tokens** son un buen ejemplo de un caso de uso de **LSP7-ActivoDigital**. Todos los billetes tienen el mismo aspecto, son **intercambiables** y tienen la misma utilidad. Además, estos billetes pueden hacerse **no divisibles**, ya que sólo es posible vender o regalar un billete entero.

![LSP7DigitalAsset Non Divisible Assets](/img/standards/lsp7/lsp7-non-divisible.jpeg)

### Metadatos Ilimitados

:::tip Sugerencia

Para marcar la **autenticidad de los activos**, se aconseja utilizar una combinación entre **[LSP4-MetadatosActivoDigital](./LSP4-Digital-Asset-Metadata.md)** y **[LSP12-ActivosEmitidos](../universal-profile/lsp12-issued-assets.md)**.

:::

Los estándares de token actuales no permiten adjuntar metadatos al contrato de forma genérica y flexible, establecen el **nombre**, el **símbolo** y el **tokenURI**. Esto es limitante para un activo digital que puede querer listar los creadores, la comunidad detrás de él, y tener la capacidad de actualizar los metadatos del token y los tokenIds con el tiempo dependiendo de una cierta lógica (Evolving tokens).

Para garantizar una representación flexible y genérica de los activos, el contrato de tokens debería utilizar los **[LSP4-Metadados-ActivoDigital](./LSP4-Digital-Asset-Metadata.md)**. De este modo, podría adjuntarse cualquier información al contrato de token.

### Force Boolean

Se espera que en el ecosistema de LUKSO se utilicen **[cuentas basadas en contratos inteligentes](../universal-profile/lsp0-erc725account.md)** para operar en la blockchain, lo que incluye la recepción y el envío de tokens. Las EOA pueden recibir tokens, pero se utilizarán principalmente para controlar estas cuentas y no para mantenerlos.

Para garantizar una **transferencia de activos segura**, se ha añadido un parámetro booleano adicional a las funciones [transfer](../smart-contracts/lsp7-digital-asset.md#transfer) y mint:

- Si se establece en **False**, la transferencia sólo pasará si el destinatario es un contrato inteligente que implemente el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)**.

![Token Force Boolean False](/img/standards/lsp7/tokens-force-false.jpeg)

:::note

Se recomienda establecer la bool **force** como **False** al transferir o acuñar fichas para evitar enviarlas a una dirección incorrecta.

:::

- Si se establece en **TRUE**, la transferencia no dependerá del destinatario, lo que significa que los **contratos inteligentes** que no implementen el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)** y los **EOAs** podrán recibir los tokens.

![Token Force Boolean True](/img/standards/lsp7/tokens-force-true.jpeg)

Implementar el estándar **[LSP1-UniversalReceiver](../generic-standards/lsp1-universal-receiver.md)** dará una señal de que el contrato sabe cómo manejar los tokens recibidos.

### Ganchos de Tokens

:::caution

Cuando se transfieren activos LSP7, el contrato LSP7 notificará al emisor y al receptor del token utilizando [`_notifyTokenSender(...)`](../smart-contracts/lsp7-digital-asset.md#_notifytokensender) y [`_notifyTokenReceiver(...)`](../smart-contracts/lsp7-digital-asset.md#_notifytokenreceiver).

**Estos métodos realizarán llamadas externas** a las funciones [`universalReceiver(...)`](../smart-contracts/lsp0-erc725-account.md#universalreceiver) tanto del remitente como del destinatario.

Esta función podría realizar una lógica más compleja, como delegar la llamada al contrato `LSP1ReceptorDelegadoUniversal`. Este contrato puede contener lógica personalizada para cada usuario. Por ejemplo, un usuario podría decidir volver a transferir los tokens a otra dirección una vez transferidos a su UP.

:::

Los estándares de tokens actuales actúan como **contratos de registro** que mantienen un seguimiento del saldo de cada dirección. No implementan funcionalidades para **notificar al receptor** que ha recibido unos tokens o para **notificar al emisor** que ha enviado unos tokens.

Durante una **transferencia de fichas ERC20**, el saldo del remitente disminuye y el del destinatario aumenta sin más interacción.

![ERC20 Transfer](/img/standards/lsp7/erc20-transfer.jpeg)

Durante una **transferencia de tokens LSP7**, además de actualizar los saldos, tanto el emisor como el receptor son informados de la transferencia llamando a la función **[`universalReceiver(...)`](../generic-standards/lsp1-universal-receiver.md#lsp1---universal-receiver)** en sus perfiles.

![LSP7DigitalAsset Transfer](/img/standards/lsp7/lsp7-transfer.jpeg)

De este modo, los usuarios están **informados** sobre las transferencias de tokens y pueden decidir cómo **reaccionar ante la transferencia**, ya sea aceptando o rechazando los tokens, o implementando una lógica personalizada para ejecutar en cada transferencia con la ayuda de **[LSP1-ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)**.

## Referencias

- [Propuestas de Estándares LUKSO: LSP7 - Activo Digital (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md)