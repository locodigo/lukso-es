---
sidebar_label: 'LSP17 - Extensión del Contrato'
sidebar_position: 4
---

# LSP17 - Extensión del Contrato

:::info Documento Estándard

[LSP17 - Extensión del Contrato](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-17-ContractExtension.md)

:::

## Introducción

Una vez que un contrato se despliega en la blockchain, no es posible modificarlo para añadir nuevas funciones nativas o cambiar el comportamiento de las existentes. Esto puede suponer una limitación para los contratos inteligentes, especialmente para aquellos que con el tiempo deban adaptarse a nuevos casos de uso y estándares.

Lo que se necesita es un método para ampliar las funcionalidades de un contrato inteligente incluso después de que haya sido desplegado, permitiéndole seguir soportando nuevas características con el tiempo.

Una posible solución a este problema es establecer un sistema de extensiones que puedan añadirse a un contrato inteligente, permitiéndole **adquirir nuevas funcionalidades** sin necesidad de volver a desplegarlo.

## ¿Qué representa este estándar?

Este estándar define un mecanismo para extender un contrato para soportar nuevas funciones mediante el uso de **extensiones**.

![Normal contract Vs contract implementing LSP17](/img/standards/lsp17/TwoContracts.jpeg)

El **_contrato inteligente A_** implementa 4 funciones de forma nativa. Una vez desplegado este contrato inteligente, no se pueden añadir nuevas funciones ni realizar cambios en las existentes.

En cambio, el **_contrato inteligente B_**, que soporta el **[estándar LSP17](#)**, no implementa ninguna función nativa, sino que se basa en extensiones para la funcionalidad que sea necesaria y puede añadir más extensiones en el futuro.

Así, el contrato inteligente B tiene la capacidad de **soportar un número ilimitado de funcionalidades** y puede añadir nuevas funciones en el futuro si lo desea.

![Normal contract Vs contract implementing LSP17](/img/standards/lsp17/OneContract.jpeg)

Como se muestra en la figura anterior, el contrato inteligente B **cambió la extensión** de la función `execute(..)` a una versión más reciente, eliminó la extensión `depositToken(..)` y añadió una nueva extensión para la función `socialRecover(..)`.

Este sistema de extensiones permite que un contrato inteligente evolucione y se adapte a los cambios que puedan surgir en el futuro. Mediante la implementación de este sistema, los contratos inteligentes pueden ser más versátiles y capaces de soportar una gama más amplia de funcionalidades, incluso después de su despliegue.

### Especificación

Este estándar define dos tipos de contratos:

- El **contrato extensible**, que es el contrato cuya funcionalidad queremos extender.

- El **contrato extensible**, que es el contrato que proporciona la funcionalidad que se añadirá al contrato extensible.

Cuando se llama al contrato extensible con una función que no está implementada de forma nativa, comprueba la dirección de la extensión asignada a esa función.

Si no se establece ninguna extensión para la función a la que se llama, la llamada **DEBE revertirse**.

Pero si se establece una extensión, el contrato extensible hará una llamada a esa extensión utilizando el opcode **CALL**, junto con un calldata adicional de 52 bytes que contiene la dirección del llamante (20 bytes) y el valor enviado junto con la llamada a la función por el llamante (32 bytes).

![Calling An LSP17 Extension](/img/standards/lsp17/CallingAnLSP17Extension.jpeg)

Los 52 bytes de calldata adicionales añadidos a la llamada al contrato extensible proporcionan contexto sobre el llamante y el valor enviado en la llamada, permitiendo a la extensión validar la llamada basándose en estos factores si lo desea.

> Este estándar no dicta un método específico para mapear selectores de función a extensiones o para establecer o cambiar estas extensiones en el contrato extensible, los desarrolladores pueden elegir su enfoque preferido.

### Reutilización de extensiones

Mientras que los contratos pueden desplegar y personalizar sus propias extensiones, muchos contratos inteligentes **comparten casi la misma lógica** para ciertas funciones. En este caso, las mismas extensiones pueden ser reutilizadas por diferentes contratos que soporten LSP17.

Por ejemplo, **_contrato inteligente A y B_** son dos contratos independientes que implementan funciones diferentes pero comparten la misma lógica para verificar firmas. Por lo tanto, pueden utilizar la misma extensión para la validación de firmas para la función `isValidSignature(..)`.

![Two contracts sharing the same LSP17 Extension](/img/standards/lsp17/ShareExtension.jpeg)

Este enfoque hace que se desplieguen menos contratos en la blockchain con la misma lógica, lo que provoca una menor congestión de la cadena y simplifica el proceso de desarrollo al reutilizar contratos de extensión ya desplegados y verificados.

### Consideraciones de seguridad

Como las extensiones se llaman utilizando el opcode **CALL** y no **DELEGATECALL**, es seguro asumir que no hay riesgo de destruir el contrato inteligente extensible a través de `selfdestruct`.

Sin embargo, es importante tener en cuenta que **añadir contratos aleatorios como extensiones por descuido** puede ser problemático ya que las extensiones tendrán el contrato extensible como su llamador (`msg.sender`), lo que puede llevar a suplantar el contrato extensible en ciertas situaciones.

### Ejemplo

Una plataforma de intercambio descentralizada no puede aceptar transferencias seguras ERC721 o ERC1155 a menos que implemente funciones específicas con valores de retorno específicos. Esto asegura que el contrato sabe cómo manejar estos tokens, haciendo así la transferencia segura.

![Exchange receiving ERC721 and ERC1155 Tokens](/img/standards/lsp17/ExchangeAcceptingERCTokens.jpeg)

La plataforma de intercambio descentralizada o cualquier otro tipo de contrato puede recibir tokens de estos tipos, pero ¿qué ocurre si surge otro estándar de tokens sobre el que la gente empieza a construir y que tiene el mismo sistema de validación en el que requiere la función `onERCXXXReceived(..)`? Esto hará que el DEX no pueda recibir este tipo de tokens porque no implementó esta función simplemente porque no existía en ese momento.

![Exchange cannot receive ERCXXX Tokens](/img/standards/lsp17/ExchangeCannotAcceptERCTokens.jpeg)

Así que la única manera de que este DEX soporte nuevos tipos de tokens es volver a desplegar el contrato con esta nueva función, lo que puede ser problemático ya que muchos protocolos dependen e interactúan con este DEX en una dirección específica.

Este problema puede resolverse utilizando **LSP17** en el intercambio descentralizado (DEX). Con este estándar, el contrato puede desplegarse con sólo las funciones `onERC721Received(..)` o `onERC1155Received(..)` implementadas, pero funciones adicionales como `onERCXXXReceived(..)` pueden **añadirse como extensiones** más adelante. LSP17 también permite la adición potencial de extensiones para cualquier futura función requerida por la norma que pueda surgir.

![Exchange adding ERCXXX Token Extension](/img/standards/lsp17/ExchangeAddingERCTokenExtension.jpeg)
