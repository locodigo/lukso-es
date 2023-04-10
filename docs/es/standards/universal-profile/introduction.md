---
sidebar_label: 'Introducción'
sidebar_position: 1
---

# Perfiles Universales

:::success Consejo útil

La [Sección de Guías](../../guides/universal-profile/create-profile) te llevará a través del proceso de creación de un Perfil Universal y su despliegue en la [red de pruebas L14](../../networks/l14-testnet.md).  
También puede consultar los Perfiles Universales ya desplegados en [universalprofile.cloud](https://universalprofile.cloud/).

:::

## Introducción

Construir una identidad a partir de claves es casi imposible porque es probable que dichas claves se filtren o se pierdan para siempre. Mantener activos y construir una reputación sobre estas claves lo empeora. Una mejor representación de la identidad sería con cuentas basadas en blockchain.

Las cuentas basadas en blockchain pueden cambiar la forma de interactuar on-chain, permitiendo el uso de múltiples componentes juntos. Usadas en combinación con un Controlador (ver **[LSP6 - Gestor de Claves](./lsp6-key-manager.md)**), podrían permitir a cualquier entidad ejecutar o establecer algunos datos en tu perfil directamente o vía ejecución por retransmisión. Por último, los desarrolladores podrían utilizar contratos para la recuperación social en caso de pérdida de claves. Todos estos componentes juntos pueden mejorar la experiencia de blockchain.

## Arquitectura del Perfil Universal

El siguiente diagrama muestra la arquitectura estándar utilizada por LUKSO para el Perfil Universal.

![Arquitectura del Perfil Universal](/img/standards/universal-profile-architecture.jpeg)

## Estándares de los Perfiles Universales

| Estándard                                                                                                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![LSP0-ERC725Account](/img/standards/lsp0/lsp0-erc725account-contract.jpeg)                                     | **[LSP0 - CuentaERC725](./lsp0-erc725account.md)**: Este estándar representa el contrato de cuenta principal. Se compone de [ERC725X](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725x), que permite a un contrato interactuar con cualquier dirección o contrato inteligente en la cadena de bloques, y de [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y), un almacén genérico de valores clave que permite almacenar una cantidad ilimitada de datos en el contrato inteligente. También contiene [ERC1271](https://eips.ethereum.org/EIPS/eip-1271) para verificar si los mensajes fueron firmados por el propietario de la ERC725Account. Si el propietario es un Gestor de Claves que soporta ERC1271, delegará la llamada al Gestor de Claves. Por último, contiene el [LSP1 - ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md), que permite notificar a este contrato cualquier activo entrante. Usando la lógica [LSP1 - ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md), puedes delegar la llamada al receptor universal que hará un activo a un contrato externo, personalizando el comportamiento que desees hacia el activo. Más información a continuación. |
| ![LSP6-KeyManager](/img/standards/lsp6/lsp6-key-manager-contract.jpeg)                                          | **[LSP6 - Gestor de Claves](./lsp6-key-manager.md)**: Un estándar que representa un contrato inteligente que puede actuar como propietario de una [LSP0 - CuentaERC725](./lsp0-erc725account.md). Lee los permisos de las direcciones del almacén de valores clave de la CuentaERC725 y restringe el acceso en función de estos permisos. Las transacciones pueden ser ejecutadas directamente por usuarios con permiso o por cualquiera con la ayuda de un mensaje firmado por usuarios con permiso.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ![LSP1 - UniversalReceiverDelegate](/img/standards/lsp1delegate/lsp1-universal-receiver-delegate-contract.jpeg) | **[LSP1 - ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver-delegate.md)**: Al establecer la clave de datos **[`LSP1 - UniversalReceiverDelegate`](.../generic-standards/lsp1-universal-receiver#extension)** de su CuentaERC725 en una dirección de contrato, se puede delegar cualquier llamada a la función `universalReceiver(...)` de la cuenta en este contrato, lo que permite revertir en determinados activos entrantes o añadir otra lógica. La [implementación estándar **LSP1 - ReceptorDelegadoUniversal**](../smart-contracts/lsp1-universal-receiver-delegate-up.md) escribirá cada activo [LSP7 y LSP8](../nft-2.0/introduction.md) que reciba en su CuentaERC725 utilizando el estándar [LSP5 - ActivoRecibido](./lsp5-received-assets.md). Esto permite a cualquier interfaz listar todos los contratos de tokens que tienen un saldo de su cuenta, directamente desde el contrato inteligente.                                                                                                                                                                                                                                                                                        |

:::note

Una cuenta LSP0-CuentaERC725 puede funcionar de forma autónoma y no requiere un Gestor de Claves o un Receptor Delegado Universal, pero esto limitará la experiencia del usuario.

:::

## Añadir información de perfil

El estándar **[LSP0 - CuentaERC725](./lsp0-erc725account.md)** representa una cuenta basada en blockchain que no contiene ningún metadato que describa la cuenta. Es importante estandarizar claves de datos específicas para dar a la cuenta un carácter único y parecerse a un perfil típico de **Web2**.

**[LSP3 - UniversalProfile Metadata](./lsp3-universal-profile-metadata.md)** es un estándar utilizado para añadir información de perfil mediante el establecimiento de sus claves de datos definidas en el almacenamiento de la cuenta. La combinación de estos dos estándares forma un **Perfil Universal**.

:::tip

La guía [¿cómo comprobar si una dirección es un Perfil Universal?](../../guides/universal-profile/check-if-address-is-universal-profile.md) puede ser de tu interés.

:::

## Referencias

- [Propuestas de estándares LUKSO: LSP0 - Cuenta ERC725 (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md)
- [Propuestas de normas LUKSO: LSP3 - Metadatos de Perfil Universal (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md)
- [Propuestas de normas LUKSO: LSP6 - Gestor de Claves (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md)
- [Receptor Delegado Universal LSP1: implementaciones de solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)