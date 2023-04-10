---
title: LSP1ReceptorDelegadoUniversalBóveda
sidebar_position: 6
---

# LSP1ReceptorDelegadoUniversalBóveda

:::info Contrato Solidity

[`LSP1ReceptorDelegadoUniversalBóveda.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateVault/LSP1UniversalReceiverDelegateVault.sol)

:::

El **LSP1ReceptorDelegadoUniversalBóveda** es un contrato llamado por la función **[`universalReceiver(...)`](./lsp9-vault.md#universalreceiver)** del contrato **[LSP9Bóveda](./lsp9-vault.md)** que:

- Escribe las claves de datos que representan activos recibidos de tipo **[LSP7-ActivoDigital](./lsp7-activo-digital.md)** y **[LSP8-ActivoDigitalIdentificable](./lsp8-activo-digital-identificable.md)** en el almacenamiento de la cuenta, y las elimina cuando el saldo es cero de acuerdo con el **[Estándar LSP5-ActivosRecibidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

Los requisitos establecidos en el contrato **[LSP1ReceptorDelegadoUniversalUP](./lsp1-universal-receiver-delegate-up.md)** no se aplican en este contrato para ejecutar la lógica anterior correctamente, ya que la dirección registrada en la clave de datos [LSP1ReceptorDelegadoUniversal](../generic-standards/lsp1-universal-receiver.md/#extension) tiene acceso de escritura al almacenamiento.

:::note
_El contrato LSP1ReceptorDelegadoUniversalBóveda también contiene los métodos del [Estándar ERC165](https://eips.ethereum.org/EIPS/eip-165):_

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

## Funciones

### universalReceiverDelegate

```solidity
function universalReceiver(
    bytes32 typeId,
    bytes memory data
) public payable returns (bytes memory result)
```

Escribe los activos **LSP7-ActivoDigital** o **LSP8-ActivoDigitalIdentificable** recibidos en el almacenamiento de la cámara acorazada de acuerdo con el estándar **LSP5-ActivosRecibidos**.

:::note
La clave de datos que representa un **activo** se borra cuando el activo deja de pertenecer a la bóveda.
:::

#### Parámetros:

| Nombre   | Tipo      | Descripción                                                                      |
| :------- | :-------- | :------------------------------------------------------------------------------- |
| `typeId` | `bytes32` | Los ganchos de token del contrato.                                               |
| `data`   | `bytes`   | Los datos que se asocian a la transferencia de activos o bóvedas (concatenados). |

> **Nota:** si la función es llamada por la función [`universalReceiver(...)`](./lsp9-vault.md#universalReceiver) de LSP9, recibirá los siguientes **datos de llamada adicionales**:
>
> - `bytes20 caller`: La dirección del contrato inteligente del token o de la bóveda.
> - `bytes32 value`: La cantidad de valor enviada a la función universalReceiver.

#### Valores Devueltos:

| Nombre   | Tipo  | Descripción  |
| :------- | :---- | :----------- |
| `result` | bytes | Bytes vacíos |

## Referencias

- [Propuestas de Estándares LUKSO: LSP1 - Receptor Universal (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
- [LSP1 Receptor Universal: implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)
