---
sidebar_label: 'LSP8 - Activo Digital Identificable (NFT)'
sidebar_position: 4
---

# LSP8 - Activo Digital Identificable

:::info Documento Estándard

[LSP8 - Activo Digital Identificable](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md)

:::

## Introducción

Los activos no fungibles como **[ERC721](https://eips.ethereum.org/EIPS/eip-721)** y **[ERC1155](https://eips.ethereum.org/EIPS/eip-1155)** tienen muchas limitaciones en términos de metadatos, transferencias seguras, representación de activos e interacción de activos. Esto causa problemas a los usuarios que buscan, **control total** sobre qué activos aceptan o no, **funcionalidad NFT más compleja**, y una **experiencia de usuario sencilla** mientras crean, compran e intercambian activos.

**[LSP8-ActivoDigitalIdentificable](#)** es el estándar que pretende resolver todos los problemas mencionados anteriormente mediante:

- Permitiendo transferencias más seguras mediante **parámetro booleano de fuerza**.
- Más metadatos de activos **mediante [LSP4-Metadados-ActivoDigital](./LSP4-Digital-Asset-Metadata.md)**.
- Más representación de activos **a través de bytes32 tokenIds**.
- Más interacción entre el contrato de activos y el _emisor/receptor_ de activos **mediante ganchos de token**.

![LSP8IdentifiableDigitalAsset features Introduction](/img/standards/lsp8/lsp8-intro.jpeg)

## ¿Qué representa esta Norma?

### Especificación

**[LSP8-ActivoDigitalIdentificable](#)** es un estándar cuyo objetivo es describir activos _no fungibles_. El término _no fungible_ significa que cada activo es **único y diferente**. Se distinguen unos de otros y, por tanto, no son intercambiables.

Este estándar se basa en **[ERC721](https://eips.ethereum.org/EIPS/eip-20)** y **[ERC1155](https://eips.ethereum.org/EIPS/eip-777)** con las características adicionales que se mencionan a continuación:

### Bytes32 TokenId

Los estándares NFT actuales como **[ERC721](https://eips.ethereum.org/EIPS/eip-721)** y **[ERC1155](https://eips.ethereum.org/EIPS/eip-1155)** ** carecen de representación de activos** ya que definen los tokenIds **como Números** `(uint256)`. Cada token de la colección NFT se definirá y consultará en función de este tokenId, que normalmente es incremental.

![ERC721 TokenIds Representation](/img/standards/lsp8/erc721-tokenIds.jpeg)

**[LSP8-ActivoDigitalIdentificable](#)** define los tokenIds como **bytes32**. La elección de **bytes32 tokenIds** permite una amplia variedad de aplicaciones, incluidos números, direcciones de contratos y valores hash (es decir, números de serie).

El **bytes32 tokenId** puede interpretarse como un:

- <u><b>Número:</b></u>

![LSP8 Number TokenIds Representation](/img/standards/lsp8/lsp8-tokenId-number.jpeg)

- <u><b>Valor Hasheado:</b></u>:

![LSP8 Hashed Value TokenIds Representation](/img/standards/lsp8/lsp8-tokenId-hashed.jpeg)

- <u><b>Dirección de Contrato:</b></u>

![LSP8 Address TokenIds Representation](/img/standards/lsp8/lsp8-tokenId-address.jpeg)

Los TokenIds representados como **dirección de contrato inteligente** permiten la creación de NFT más **complejas**. Cuando cada tokenId es un contrato que tiene su propio **[ERC725Y](../lsp-background//erc725.md#erc725y---generic-data-keyvalue-store)** almacenamiento. Por ejemplo, en un videojuego, cambiando las características y metadatos del tokenId en función de las **reglas del juego**.

![LSP8 Game Nested NFTs TokenIds Representation](/img/standards/lsp8/lsp8-game.jpeg)

### Metadatos ilimitados

:::tip Recommendation

Para marcar la **autenticidad de los activos**, se aconseja utilizar una combinación entre **[LSP4-Metadatos-ActivoDigital](./LSP4-Digital-Asset-Metadata.md)** y **[LSP12-ActivosEmitidos](../universal-profile/lsp12-issued-assets.md)**.

:::

Los estándares de token actuales no permiten adjuntar metadatos al contrato de forma genérica y flexible, establecen el **nombre**, el **símbolo** y el **tokenURI**. Esto es limitante para un activo digital que puede querer listar los creadores, la comunidad detrás de él, y tener la capacidad de actualizar los metadatos del token y los tokenIds con el tiempo dependiendo de una cierta lógica (Evolving tokens).

Para garantizar una representación flexible y genérica de los activos, el contrato de tokens debería utilizar los **[LSP4-Metadatos-ActivoDigital](./LSP4-Digital-Asset-Metadata.md)**. De este modo, podrá adjuntarse cualquier información al contrato de tokens.

:::note Aviso

Los metadatos definidos por las **Claves de Datos ERC725Y** pueden establecerse para **cada tokenId**, no sólo para toda la colección NFT. Consulte **[LSP8 Claves de Datos ERC725Y](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md#erc725y-data-keys)** en el Documento del Estándar LSP8.

:::

### Force Boolean

En el ecosistema de LUKSO se espera utilizar **cuentas basadas en contratos inteligentes** para operar en la blockchain, lo que incluye recibir y enviar tokens. Las EOA pueden recibir tokens, pero se utilizarán principalmente para controlar estas cuentas y no para mantener tokens.

Para garantizar una **transferencia de activos segura**, se ha añadido un parámetro booleano adicional a las funciones [transfer](../smart-contracts//lsp8-identifiable-digital-asset.md#transfer) y mint:

- Si se establece en **False**, la transferencia sólo pasará si el destinatario es un contrato inteligente que implemente el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)**.

![Token Force Boolean False](/img/standards/lsp7/tokens-force-false.jpeg)

:::note

Se recomienda establecer la bool **force** como **False** al transferir o acuñar tokens para evitar enviarlos a una dirección incorrecta.

:::

- Si se establece en **True**, la transferencia no dependerá del destinatario, lo que significa que los **contratos inteligentes** que no implementen el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)** y los **EOAs** podrán recibir los tokens.

![Token Force Boolean True](/img/standards/lsp7/tokens-force-true.jpeg)

Implementar el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)** dará una señal de que el contrato sabe cómo manejar los tokens recibidos.

### Ganchos de Tokens

:::caution

Cuando se transfieren activos LSP8, el contrato LSP8 notificará al emisor y al receptor del token utilizando [`_notifyTokenSender(...)`](../smart-contracts/lsp8-identifiable-digital-asset.md#_notifytokensender) y [`_notifyTokenReceiver(...)`](../smart-contracts/lsp8-identifiable-digital-asset.md#_notifytokenreceiver).

**Estos métodos realizarán llamadas externas** a las funciones [`universalReceiver(...)`](../smart-contracts/lsp0-erc725-account.md#universalreceiver) tanto del remitente como del destinatario.

Esta función podría realizar una lógica más compleja, como delegar la llamada al contrato `LSP1ReceptorDelegadoUniversal`. Este contrato puede contener lógica personalizada para cada usuario. Por ejemplo, un usuario podría decidir volver a transferir los tokens a otra dirección una vez transferidos a su UP.

:::

Los estándares NFT actuales actúan como **contratos de registro** que mantienen un registro de la propiedad de cada tokenId. No implementan funcionalidades para **notificar al receptor** que ha recibido unos tokens o para **notificar al emisor** que ha enviado unos tokens.

Durante una **transferencia de tokens ERC721**, la propiedad del tokenId pasa de la dirección del remitente a la del destinatario sin más interacción.

![ERC721 Transfer](/img/standards/lsp8/erc721-transfer.jpeg)

Durante una **transferencia de token LSP8**, además de actualizar la propiedad del tokenId, tanto el remitente como el destinatario son informados de la transferencia llamando a la función **[`universalReceiver(...)`](../generic-standards/lsp1-universal-receiver.md#lsp1---universal-receiver)** en sus perfiles.

![LSP8 Transfer](/img/standards/lsp8/lsp8-transfer.jpeg)

De este modo, los usuarios están **informados** sobre las transferencias NFT y pueden decidir cómo **reaccionar ante la transferencia**, ya sea aceptando o rechazando los tokens, o implementando una lógica personalizada para ejecutar en cada transferencia con la ayuda de **[LSP1-ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)**.

## Referencias

- [Propuestas de Estándares LUKSO: LSP8 - Activo Digital Identificable (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md)