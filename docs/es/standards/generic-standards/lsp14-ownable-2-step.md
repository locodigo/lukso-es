---
sidebar_label: 'LSP14 - Propiedad 2-Pasos'
sidebar_position: 3
---

# LSP14 - Propiedad 2-Pasos

:::info Documento Estándard

[LSP14 - Propiedad 2-Pasos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-14-Ownable2Step.md)

:::

## Introducción

En el actual estándar [EIP173 - Estándar de Propiedad de Contratos](https://eips.ethereum.org/EIPS/eip-173) (EIP173), la propiedad de un contrato se transfiere directamente en una transacción mediante `transferOwnership(...)`. Esto presenta algunos riesgos. Por ejemplo, si el nuevo propietario

- es un EOA que ha perdido su clave privada.
- es una `dirección` introducida incorrectamente.

Renunciar a la propiedad del contrato en [EIP173 - Estándar de Propiedad de Contrato](https://eips.ethereum.org/EIPS/eip-173) también se hace en una transacción. Si el propietario llama accidentalmente a `renounceOwnership()`, se pierde el acceso al contrato.

Lo que se necesita es un mecanismo más seguro para gestionar la propiedad de los contratos.

## ¿Qué representa este estándar?

**LSP14 - Propiedad 2-Pasos** es una versión extendida de [EIP173 - Estándar de Propiedad de Contratos](https://eips.ethereum.org/EIPS/eip-173) que utiliza un proceso de 2 pasos para transferir y renunciar a la propiedad.

**LSP14 - Propiedad 2-Pasos** modifica los procesos de _transferir y renunciar a la propiedad_ de la siguiente manera:

1. Para _transferir propiedad_ se modifica el método `transferOwnership(...)` de forma que la **dirección** pasada como parámetro no será el propietario directamente sino un propietario pendiente. Se introduce un nuevo método, `acceptOwnership()`, que deberá ser llamado por el **propietario pendiente** para que el proceso de _transferencia de titularidad_ se complete.

2. Para _renunciar a la propiedad_ se modifica el método `renounceOwnership()` de la siguiente manera. En primer lugar, el **propietario** del contrato debe iniciar el proceso de _renuncia a la propiedad_ que comienza una cuenta atrás de **200 bloques** que se dividen en dos _períodos distintos_. Los **100 primeros bloques** son de espera, un periodo en el que se puede reflexionar sobre el deseo de renunciar a la propiedad del contrato. Los **segundos 100 bloques** son para confirmar el proceso de renuncia a la propiedad. Después de que pasen un total de **200 bloques** desde el inicio, el proceso se reinicia.

Además, esta norma define ganchos que llaman a la función **[universalReceiver(...)](../smart-contracts/lsp0-erc725-account.md#universalreceiver)** del propietario actual y del nuevo propietario, si estas direcciones son contratos que implementan LSP1.

### Transferencia de la propiedad del contrato

El control del contrato se transfiere completamente _una vez que el nuevo propietario ha aceptado la nueva titularidad_. A continuación se describen las 2 etapas de la transferencia de propiedad:

1. El propietario anterior transfiere la propiedad a un nuevo propietario mediante la función [`transferOwnership(...)`](../smart-contracts/lsp14-ownable-2-step.md#transferownership).

![Transfer Ownership](/img/standards/lsp14/transfer-ownership.jpeg)

2. El nuevo propietario reclama la propiedad del contrato llamando a la función [`acceptOwnership()`](../smart-contracts/lsp14-ownable-2-step.md#acceptownership)`.

![Accept Ownership](/img/standards/lsp14/accept-ownership.jpeg)

Al hacer que el nuevo propietario acepte la propiedad explícitamente, **LSP14 - Propiedad 2-Pasos** garantiza que el nuevo propietario tenga acceso a su dirección.

#### Gancho de Transferencia de Propiedad

Este gancho está diseñado para _notificar al nuevo propietario_ del contrato que debe aceptar la propiedad.
El gancho se ejecuta siempre que el propietario _inicie el proceso de transferencia de propiedad_ y sólo si el nuevo propietario es un contrato que **implemente LSP1**.

![Transfer Ownership Notification](/img/standards/lsp14/transfer-ownership-notification.jpeg)

#### Ganchos de Aceptación de Propiedad

Estos ganchos están diseñados para _notificar al anterior y al nuevo propietario_ cuando la propiedad del contrato ha sido completamente transferida. Un gancho notifica al propietario anterior y el segundo notifica al nuevo propietario.
Cada gancho se ejecuta cada vez que el _nuevo propietario confirma el proceso de transferencia de propiedad_.

- El gancho que notifica al propietario anterior sólo se ejecuta si el propietario anterior es un contrato que **implemente LSP1**.
- El gancho que notifica al nuevo propietario sólo se ejecuta si el nuevo propietario es un contrato que **implemente LSP1**.

![Accept Ownership Notification](/img/standards/lsp14/accept-ownership-notification.jpeg)

### Renuncia a la titularidad del contrato

La renuncia a la titularidad del contrato se produce _una vez que el titular del contrato confirma la renuncia a la titularidad_. A continuación se describen los 2 pasos de la renuncia a la propiedad:

1. 1. El propietario inicia el proceso de renuncia a la titularidad a través de la función ['renounceOwnership()'](../smart-contracts/lsp14-ownable-2-step.md#renounceownership).

2. Después de esperar 100 bloques desde el inicio del proceso de renuncia a la propiedad, el propietario tiene una ventana de 100 bloques para confirmar la renuncia a través de ['renounceOwnership()'](../smart-contracts/lsp14-ownable-2-step.md#renounceownership). Si el propietario no confirma en esa ventana de tiempo, el proceso no puede ser confirmado y el propietario debe empezar de nuevo si su intención era renunciar a la propiedad.

![Renounce Ownership](/img/standards/lsp14/renounce-ownership.jpeg)
