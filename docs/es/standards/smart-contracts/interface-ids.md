---
title: ID de interfaces
sidebar_position: 2
---

# ID de interfaces

**Los ID de interfaz** ayudan a comprobar si un contrato admite una interfaz específica, por ejemplo, su metainterfaz. Son útiles si queremos interactuar con un contrato pero no sabemos si admite una interfaz como **[ERC725Y](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y)**, **[LSP1ReceptorUniversal](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)**, etc.

La función **supportsInterface** del estándar **[ERC165](https://eips.ethereum.org/EIPS/eip-165)** devuelve `true` si el estándar es compatible, `false` en caso contrario.

:::note
_Los ID de interfaz no son la forma más segura de garantizar que un contrato implementa un conjunto específico de funciones, ya que se establecen manualmente y pueden tener cualquier valor._
:::

Se puede acceder fácilmente a los ID de interfaz en su código utilizando el [paquete NPM de contratos inteligentes LSP](https://www.npmjs.com/package/@lukso/lsp-smart-contracts) de la siguiente manera. Los ID de interfaz accesibles se encuentran en el archivo [constants.js](https://github.com/lukso-network/lsp-smart-contracts/blob/main/constants.js)

```js
import { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants.js';

const ERC725X_ID = INTERFACE_IDS.ERC725X;
```

| Contract                           | Description InterfaceId |
| :--------------------------------- | :---------------------- | :----------------------------------------------------------------------------------------------------------- |
| **ERC165**                         | `0x01ffc9a7`            | Detección de interfaz estándar.                                                                              |
| **ERC1271**                        | `0x1626ba7e`            | Método estándar de validación de firmas para contratos.                                                      |
| **ERC725X**                        | `0x570ef073`            | Ejecutor general.                                                                                            |
| **ERC725Y**                        | `0x714df77c`            | Almacén de Valores Clave de Datos Generales.                                                                 |
| **LSP0CuentaERC725**               | `0x66767497`            | Cuenta que representa una identidad on-chain.                                                                |
| **LSP1ReceptorUniversal**          | `0x6bb56a14`            | Receptor Universal con función de entrada.                                                                   |
| **LSP6GestordeClaves**             | `0xfb437414`            | Controlador de la CuentaERC725.                                                                              |
| **LSP7ActivoDigital**              | `0xda1f85e4`            | Activos digitales fungibles o no fungibles. _similares a ERC20_                                              |
| **LSP8ActivoDigitalIdentificable** | `0x622e7a01`            | Activos Digitales Identificables (NFT). _similares a ERC721_                                                 |
| **LSP9Bóveda**                     | `0x7050cee9`            | Bóveda que puede contener activos e interactuar con otros contratos inteligentes.                            |
| **LSP11RecuperaciónSocialBásca**   | `0x049a28f1`            | Mecanismo para recuperar el control de acceso a una cuenta.                                                  |
| **LSP17Extendible**                | `0xa918fa6b`            | Módulo para añadir más funcionalidades a un contrato mediante extensiones.                                   |
| **LSP17Extensión**                 | `0xcee78b40`            | Módulo para crear un contrato que pueda actuar como extensión.                                               |
| **LSP14Propiedad2-Pasos**          | `0x94be5999`            | Versión ampliada de [EIP173] (Ownable) con un proceso de 2 pasos para transferir o renunciar a la propiedad. |

[eip173]: https://eips.ethereum.org/EIPS/eip-173
