---
sidebar_label: 'LSP9 - Bóvedas'
sidebar_position: 7
---

# LSP9 - Bóvedas

:::info Documento Estándard

[LSP9 - Bóvedas](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-9-Vault.md)

:::

## Introducción

El uso del Gestor de Claves con el Perfil Universal permitirá a terceros hacer operaciones a través de tu perfil otorgándole permisos específicos, pero esto no eliminará el riesgo de operar maliciosamente con tus datos y pertenencias.

Se debe restringir a terceros cuando hablen con un contrato inteligente específico a través del Perfil Universal para evitar este riesgo cuando casi tiene las mismas funcionalidades y está controlado por el Perfil Universal.

## ¿Qué representa este estándar?

Este estándar define una bóveda que puede contener activos e interactuar con otros contratos. Puede **adjuntar información** a través de [ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y) a sí misma, **ejecutar, desplegar o transferir valor** a cualquier otro contrato inteligente o EOA a través de [ERC725X](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725x). Puede ser **notificado de los activos entrantes** a través de la función de [LSP1-ReceptorUniversal](https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-1-UniversalReceiver.md).

Este estándar utiliza el estándar **[ERC173](https://eips.ethereum.org/EIPS/eip-173)** para proporcionar funciones de propiedad para poseer y controlar el contrato de implementación.

### ERC725X - Ejecutor genérico

Este subestándar permite a la bóveda ejecutar una llamada en cualquier otro contrato inteligente, transferir el token nativo de la blockchain o desplegar un nuevo contrato inteligente. Sólo el propietario puede realizar estas operaciones a continuación.

DEBE existir el siguiente `operationType`:

- `0` para `CALL
- `1` para `CREATE
- `2` para "CREAR2
- `3` para "STATICCALL

Podría existir el siguiente `operationType`:

- `4` para `DELEGATECALL` - **NOTA** Se trata de una operación potencialmente peligrosa

### ERC725Y - Almacén Genérico de Datos Clave-Valor

Este subestándar permite a la bóveda contener datos arbitrarios a través de un almacén genérico de clave/valor de datos. Da flexibilidad al almacenamiento de contratos al permitir adjuntar cualquier información al contrato y actualizarla fácilmente.

:::info
Las claves y los valores de los datos se construyen de acuerdo con el estándar **[LSP2-EsquemaJSONERC725Y](../generic-standards/lsp2-json-schema.md)**.
:::

### LSP1 - ReceptorUniversal

:::info

Consulta el estándar **[LSP1-ReceptorUniversal](../generic-standards/lsp1-universal-receiver.md)** para obtener más información.

:::

:::caution

La implementación del **ReceptorDelegadoUniversal** utilizada por el Perfil Universal es diferente de la utilizada por la bóveda. Consulta [LSP1ReceptorDelegadoUniversalBóveda](../smart-contracts/lsp1-universal-receiver-delegate-vault.md)

:::

Este estándar permite notificar a la bóveda las transacciones entrantes, como transferencias de tokens, transferencias de información, etc. Las notificaciones son útiles cuando los usuarios desean personalizar la forma en que su contrato se comporta ante determinados tokens, ya sea rechazándolos u operando una llamada específica para cada token recibido.

El **[LSP9 Bóveda](#)** implementa la función `universalReceiver(..)` que:

- Emite un evento con el typeId y los datos que se le han pasado, así como parámetros adicionales como la cantidad enviada a la función, el llamante de la función y el valor de retorno de los contratos delegados.

- Reenvía la llamada a la dirección del contrato **ReceptorDelegadoUniversal** almacenada en la clave de datos adjunta a continuación, si admite [LSP1InterfazIddeUniversalReceptorDelegado](../smart-contracts/interface-ids.md).

```json
{
  "name": "LSP1UniversalReceiverDelegate",
  "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",
  "keyType": "Singleton",
  "valueType": "address",
  "valueContent": "Address"
}
```

- Reenvía la llamada a la dirección del contrato **typeId delegate** almacenada en la clave de datos adjunta a continuación, si admite [LSP1InterfazIddeUniversalReceptorDelegado](../smart-contracts/interface-ids.md).

```json
{
  "name": "LSP1UniversalReceiverDelegate:<bytes32>",
  "key": "0x0cfc51aec37c55a4d0b10000<bytes32>",
  "keyType": "Mapping",
  "valueType": "address",
  "valueContent": "Address"
}
```

> <bytes32\> es el `typeId` pasado a la función `universalReceiver(..)`.

### LSP14 - Ownable2Step

:::info

Consulta el estándar **[LSP14 - Propiedad 2-Pasos](../generic-standards/lsp14-ownable-2-step.md)** para obtener más información.

:::

Este estándar permite que la propiedad del contrato **Bóveda LSP9** sea controlada por una EOA o por otro contrato, implementando **3 métodos esenciales**:

- [`transferOwnership()`](../smart-contracts/lsp14-ownable-2-step.md#transferownership)
- [`acceptOwnership()`](../smart-contracts/lsp14-ownable-2-step.md#acceptownership)
- [`renounceOwnership()`](../smart-contracts/lsp14-ownable-2-step.md#renounceownership)

### Flujo

Los desarrolladores podrían utilizar la bóveda para guardar activos y, como se ha mencionado antes, podría utilizarse para restringir a terceros que sólo operen sobre los activos y metadatos de la bóveda y no sobre el Perfil Universal. Los metadatos y activos del Perfil Universal están a salvo si el tercero intenta actuar maliciosamente.

**1.** El **protocolo** sólo debería poder hablar con la bóveda A1 a través de [AllowedAddresses permission](./lsp6-key-manager#address-permissions).

![Bóveda LSP9 permitida en el perfil](/img/standards/lsp9/vault-flow.jpeg)

**2.** Todas las **transacciones de protocolo** deben enrutarse a través de la bóveda. De lo contrario, la transacción se **revertirá**.

![Bóveda LSP9 con flujo de terceros](/img/standards/lsp9/lsp9-vault-flow.jpeg)
