---
sidebar_position: 2
---

# Esquemas

La librería `@erc725/erc725.js` contiene una serie de esquemas estándar [LSP ERC725 JSON schemas](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md).

Los esquemas permiten a erc725.js saber cómo decodificar y codificar los datos escritos en un contrato inteligente [ERC725Y](https://eips.ethereum.org/EIPS/eip-725).

_A continuación se puede ver una referencia rápida de las claves utilizadas en las definiciones de esquemas._

[Documentación oficial](https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md).

- `name`: Un nombre arbitrario
- `key`: El hash sha3 del nombre
- `keyType`: Uno de los keyType soportados por erc725
- `valueType`: El tipo de los datos de contenido almacenados para su descodificación
- `valueContent`: El tipo de contenido descrito para el análisis sintáctico

## Esquemas estándar LSP

Los esquemas más comunes de las [Propuestas de Estándares LUKSO](https://github.com/lukso-network/LIPs/tree/main/LSPs) están disponibles en la carpeta [`schemas/`](https://github.com/ERC725Alliance/erc725.js/tree/develop/schemas).

Los LSP que se proporcionan actualmente son:

```
LSP1UniversalReceiverDelegate.json
LSP3UniversalProfileMetadata.json
LSP4DigitalAssetLegacy.json
LSP4DigitalAsset.json
LSP5ReceivedAssets.json
LSP6KeyManager.json
LSP9Vault.json
LSP10ReceivedVaults.json
LSP12IssuedAssets.json
```

Puedes importarlos desde:

```js
import LSP3 from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import LSP5 from '@erc725/erc725.js/schemas/LSP5ReceivedAssets.json';
// ...

// Utilízalos posteriormente en la instanciación
const myErc725Contract = new ERC725js(LSP3, address, web3.currentProvider);
```
