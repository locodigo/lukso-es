---
title: Introducción
sidebar_position: 1
---

# Implementación de Contratos Inteligentes

:::success Documentación

Los contratos inteligentes son públicos y de código abierto. Se pueden encontrar [en GitHub](https://github.com/lukso-network/lsp-smart-contracts) y en el paquete NPM [`@lukso/lsp-smart-contracts`](https://www.npmjs.com/package/@lukso/lsp-smart-contracts).

:::

Esta sección contiene las implementaciones de contratos de referencia de **[Propuestas de Estándares LUKSO](../introduction.md)**.

Algunos de estos estándares no tienen una implementación de contrato, ya que representan **Estándares de metadatos** que se utilizarán en la implementación de contratos.

Se recomienda a los desarrolladores que deseen comprender los estándares en términos de código y las ventajas y desventajas, que lean estos documentos junto con el código de Solidity.

---

## Instalación

```bash
npm install @lukso/lsp-smart-contracts
```

## Visión general

Los contratos pueden dividirse según su uso. Algunos están relacionados con **Perfiles Universales**, mientras que otros lo están con **Activos Digitales y NFT 2.0**. Por último, algunas normas se refieren a **casos de uso más general**.

### Perfil Universal

Los contratos del **Perfil Universal** permiten una mejor representación de la identidad en la blockchain y un mejor control sobre ella.

- **[LSP0CuentaERC725](./lsp0-erc725-account.md)**: contrato que puede utilizarse como cuenta y representa una **identidad on-chain**.
- **[LSP1ReceptorDelegadoUniversalUP](./lsp1-universal-receiver-delegate-up.md)**: contrato que permite a la cuenta reaccionar a las llamadas que recibe (transacción normal, transferencia de tokens, transferencia de bóvedas, etc.).
- **[LSP6GestordeClaves](./lsp6-key-manager.md)**: un contrato que permite **multicontrol** sobre la cuenta utilizando diferentes permisos.

### Activos digitales

Los contratos de **Activos Digitales (Token y NFT 2.0)** son la versión avanzada más reciente de los estándares de token existentes. Vienen con muchas características que mejoran la seguridad y la experiencia general del usuario y la compatibilidad con las [CuentasERC725](../universal-profile/lsp0-erc725account.md) y los [Receptores Universales](../generic-standards/lsp1-universal-receiver.md).

- **[LSP4MetadatosActivoDigital](./lsp4-digital-asset-metadata)**: contrato que establece los **metadatos** del **activo digital**.
- **[LSP7ActivoDigital](./lsp7-activo-digital.md)**: contrato que representa un token fungible o no fungible (NFT).
- **[LSP8ActivoDigitalIdentificable](./lsp8-identifiable-digital-asset.md)**: contrato que representa un token no fungible (NFT). Utiliza un bytes32 tokenId para permitir muchos usos de la identificación de tokens, incluidos números, direcciones de contrato y valores hash (por ejemplo, números de serie).

### Periferia

Estos contratos no están relacionados únicamente con una sección específica y podrían utilizarse con los contratos **Universal Profile**, **Digital Asset** y **NFT 2.0**.

- **[LSP9Bóveda](./lsp9-vault.md)**: un contrato que representa una **Bóveda** capaz de ejecutar y mantener activos podría ser propiedad de un contrato LSP0ERC725Account.
- **[LSP1ReceptorDelegadoUniversalBóveda](./lsp1-universal-receiver-delegate-vault.md)**: contrato que permite a la cámara acorazada reaccionar a las llamadas que recibe (transacción normal, transferencia de tokens, etc.).

## Uso

### Crear un Perfil Universal

```solidity
// MyUP.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@lukso/lsp-smart-contracts/contracts/UniversalProfile.sol";

contract MyUP is UniversalProfile {

    constructor() UniversalProfile(msg.sender) {
        // ..
    }
}
```

### Crear un Token Fungible

```solidity
// MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";

contract MyToken is LSP7DigitalAsset {
    // 4th argument (false) marks that this contract serves as a Fungible Token and not as a NFT.
    constructor() LSP7DigitalAsset("MyToken","MTKN",msg.sender,false) {
        // ..
    }

    function mint() public {
        _mint(...);
    }
}
```

## Más información

- [Paquete NPM @lukso/lsp-smart-contracts](../../tools/lsp-smart-contracts/getting-started.md)
- [Sección UniversalProfile & Identity](https://youtu.be/SbTo_e3l_Lk?t=1727)
- [Sección NFT 2.0](https://youtu.be/hg1Ow6u9QVk)
