---
title: LSP1ReceptorDelegadoUniversalUP
sidebar_position: 5
---

# LSP1ReceptorDelegadoUniversalUP

:::info Contrato Solidity

[`LSP1ReceptorDelegadoUniversalUP.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol)

:::

El **LSP1ReceptorDelegadoUniversalUP** es un contrato llamado por la función **[`universalReceiver(...)`](./lsp0-erc725-account.md#universalreceiver)** del contrato **[LSP0CuentaERC725](./lsp0-erc725-account.md)** que:

- Escribe las claves de datos que representan los activos recibidos del tipo **[LSP7-ActivoDigital](./lsp7-activo digital.md)** y **[LSP8-ActivoDigitalIdentificable](./lsp8-activo-digital-identificable.md)** en el almacenamiento de la cuenta, y las elimina cuando el saldo es cero de acuerdo el **[Estándar LSP5-ActivosRecibidos](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

- Escribe las claves de datos que representan las bóvedas de propiedad del tipo **[LSP9-Bóveda](./lsp9-bóveda.md)** en el almacenamiento de su cuenta, y las elimina cuando **transfiere la propiedad** a otras cuentas de acuerdo con la **[Norma LSP10-BóvedasRecibidas](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

Los siguientes dos requisitos son necesarios para ejecutar la lógica anterior correctamente:

1. El propietario del contrato **LSP0CuentaERC725** debe ser un contrato **[LSP6GestordeClaves](./lsp6-key-manager.md)**.
2. El contrato **LSP1ReceptorDelegadoUniversalUP** debe tener **permiso para [`SETDATA`](../universal-profile/lsp6-key-manager.md#permission-values)** en la cuenta (de lo contrario, la transacción se aprobará pero no escribirá ninguna clave de datos en el almacenamiento).

:::note
_El contrato LSP1ReceptorDelegadoUniversalUPtambién contiene los métodos de la [Norma ERC165](https://eips.ethereum.org/EIPS/eip-165):_

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

## Funciones

### universalReceiver

```solidity
function universalReceiver(
    bytes32 typeId,
    bytes memory data
) public payable returns (bytes memory result)
```

Escribe las claves de datos de las direcciones de contratos **LSP7ActivoDigital**, **LSP8ActivoDigitalIdentificable** y **LSP9Bóveda** recibidas en el almacenamiento de la cuenta de acuerdo con los estándares **LSP5ActivosRecibidos** y **LSP10BóvedasRecibidas**.

Las claves de datos que representan un activo/bóveda se borran cuando el activo/bóveda deja de ser propiedad de la cuenta.

#### Parámetros:

| Nombre   | Tipo      | Descripción                                                                      |
| :------- | :-------- | :------------------------------------------------------------------------------- |
| `typeId` | `bytes32` | Los ganchos de token del contrato.                                               |
| `data`   | `bytes`   | Los datos que se asocian a la transferencia de activos o bóvedas (concatenados). |

> **Nota:** si la función es llamada por la función [`universalReceiver(...)`](./lsp0-erc725-account.md#universalreceiver) de LSP0, recibirá los siguientes **datos de llamada adicionales**:
>
> - `bytes20 caller`: La dirección del contrato inteligente del token o de la bóveda.
> - `bytes32 value`: La cantidad de valor enviada a la función universalReceiver.

#### Valores Devueltos:

| Nombre   | Tipo    | Descripción                                                                                                    |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------- |
| `result` | `bytes` | El valor devuelto por la función **[`execute(...)`](./lsp6-key-manager.md#execute)** del **Gestor de Claves**. |

## Referencias

- [Propuestas de Estándar LUKSO: LSP1 - Receptor Universal (Especificación estándar, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
- [LSP1 Receptor Universal: implementaciones de Solidity (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)
