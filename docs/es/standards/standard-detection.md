---
title: 'Detección de Estándares'
sidebar_position: 3
---

# Detección de Estándares

:::caution

La clave de datos **`interfaceId`** y **`SupportedStandards:{StandardName}`** no representan la forma más segura de comprobar la existencia de un estándar, ya que podrían establecerse manualmente.

:::

Hay dos tipos de estándares **LSP** utilizados para interactuar con contratos inteligentes en la blockchain LUKSO.

| Tipo de estándar        | Descripción                                                                                                                                                | Ejemplos                                                                                                                                                                                                                                        |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interface Standards** | **Standardize a set of functions**. <br/> Define las funciones que pueden ser invocadas en un contrato inteligente y los parámetros esperados.                       | [LSP0-CuentaERC725](./universal-profile/lsp0-erc725account.md) <br/> [LSP6-GestordeClaves](./universal-profile/lsp6-key-manager.md) <br/> [LSP7-AcctivoDigital](./nft-2.0/LSP7-Digital-Asset.md)                                                     |
| **Metadata Standards**  | **Standardize a set of ERC725Y data keys**. <br/> Informa sobre los datos establecidos por defecto en el contrato y qué claves de datos consultar para recuperar dichos datos. | [LSP3-Metadatos-PerfilUniversal](./universal-profile/lsp3-universal-profile-metadata.md) <br/> [LSP4-Metadatos-ActivoDigital](./nft-2.0/LSP4-Digital-Asset-Metadata.md) <br/> [LSP10BóvedasRecibidas](./universal-profile/lsp10-received-vaults.md) |

![Interface and metadata standards](/img/standards/standard-detection/standard-detection.jpeg)

## Detección de Interfaz

:::success Tip

Consulte la página **[Implementación de contratos > ID de interfaz](./smart-contracts/interface-ids)** para obtener una lista completa de los campos `interfaceId` actuales.

:::

> Esta sección cubre cómo detectar si un contrato implementa una interfaz específica.

Podemos verificar si un contrato implementa un conjunto específico de funciones (= una **interfaz**) utilizando la función `supportsInterface(interfaceId)`, pasando el bytes4 `interfaceId` como parámetro.

La llamada a esta función devolverá **TRUE** si el contrato implementa este interfaceId específico, **FALSE** en caso contrario.

### Ejemplo de interfaz

Un **[Perfil Universal](./universal-profile/lsp3-universal-profile-metadata.md)** es un contrato basado en la [Cuenta ERC725](./universal-profile/lsp0-erc725account.md)(LSP0). Por lo tanto, el contrato DEBERÍA implementar las funciones definidas en la [Interfaz de la Cuenta ERC725](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md#interface-cheat-sheet).

<!-- prettier-ignore-start -->

```javascript
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import Web3 from 'web3';

// Conectarse a la red LUKSO L14
const web3 = new Web3('https://rpc.l14.lukso.network');

// Crear una instancia del Perfil Universal
const myUPContract = new web3.eth.Contract(UniversalProfile.abi, '<contract-address>');

const ERC725AccountInterfaceId = '0x63cb749b';
await myUPContract.methods.supportsInterface(ERC725AccountInterfaceId).call();
// true o false
```

<!-- prettier-ignore-end -->

:::info

Consulta [ERC165 - Detección de interfaz estándar](https://eips.ethereum.org/EIPS/eip-165) para más detalles.

:::

## Detección de metadatos

:::success Tip

El repositorio **[erc725.js](https://github.com/ERC725Alliance/erc725.js/tree/develop/src/schemas)** de GitHub enumera todas las claves de datos `SupportedStandards:{StandardName}` de cada esquema JSON ERC725Y.

:::

> Esta sección cubre cómo detectar si un contrato contiene un conjunto específico de ERC725Y en su almacenamiento.

Podemos verificar si un contrato contiene un conjunto específico de claves ERC725 (= **metadatos**) comprobando el valor almacenado bajo la clave `SupportedStandards:{StandardName}` en el almacenamiento del contrato, mediante la función `getData(SupportedStandards:{StandardName})`.

La llamada a esta función devolverá un valor bytes4 específico (definido en el Estándar de Metadatos) si el contrato tiene algunas claves de metadatos establecidas por defecto. En caso contrario, devolverá un valor vacío.

### Ejemplo de Metadatos

Un **[LSP7ActivoDigital](./nft-2.0/LSP7-Digital-Asset.md)** es un contrato que contiene claves de datos ERC725Y definidas en **[LSP4 - Metadatos de Activos Digitales](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md)**. Por lo tanto, el contrato **DEBERÍA** tener definidas por defecto las siguientes claves de datos ERC725Y: `LSP4TokenName`, `LSP4TokenSymbol`, `LSP4Metadata`, `LSP4CreatorsMap:<address>` y `LSP4Creators[]`.

<!-- prettier-ignore-start -->

```javascript
import LSP7DigitalAsset from '@lukso/lsp-smart-contracts/artifacts/LSP7DigitalAsset.json';
import Web3 from 'web3';

// Conectarse a la red LUKSO L14
const web3 = new Web3('https://rpc.l14.lukso.network');

// Crear una instancia del token LSP7
const myTokenContract = new web3.eth.Contract(LSP7DigitalAsset.abi, '<contract-address>');

const SupportedStandards_LSP4 =
  '0xeafec4d89fa9619884b60000a4d96624a38f7ac2d8d9a604ecf07c12c77e480c';
await myTokenContract.methods['getData(bytes32[])']([SupportedStandards_LSP4,]).call();
// 0xa4d96624 -> resultado válido de acuerdo con LSP4
```

<!-- prettier-ignore-end -->

## Para más información

-[¿Cómo comprobar si una dirección es un Perfil Universal? - (LUKSO Docs)](../guides/universal-profile/check-if-address-is-universal-profile.md)
