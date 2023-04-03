---
sidebar_position: 3
---

# Contratos Solidity

Los archivos base solidity de los [contratos inteligentes LUKSO](../../standards/smart-contracts/introduction.md) están disponibles en la carpeta `/contracts`.

```solidity
import "@lukso/lsp-smart-contracts/contracts/LSP0ERC725Account/LSP0ERC725Account.sol";

contract MyAccount is LSP0ERC725Account {
  constructor(address _newOwner) LSP0ERC725Account(_newOwner) {

  }
}
```
