---
sidebar_position: 1.1
---

# Primeros Pasos

El paquete `@lukso/lsp-factory.js` permite implementaciones sencillas de [ERC725-UniversalProfiles](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md), [LSP7-DigitalAssets](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md) y [LSP8-IdentifiableDigitalAssets](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md).

- [Repositorio GitHub](https://github.com/lukso-network/tools-lsp-factory)
- [Paquete NPM](https://www.npmjs.com/package/@lukso/lsp-factory.js)

## Instalación

```bash
npm install @lukso/lsp-factory.js
```

## Instanciación

```javascript
import { LSPFactory } from '@lukso/lsp-factory.js';

const provider = 'https://rpc.l16.lukso.network';

const lspFactory = new LSPFactory(provider, {
  deployKey: '0x...', // Clave privada de la cuenta que desplegará los contratos inteligentes
  chainId: 2828,
});
```

## Uso de LSPFactory en una dApp

Si se utiliza en el navegador desde la página de una dApp, hay que pasar el objeto ethereum como parámetro de proveedor para conectar con una extensión del navegador como la extensión de navegador UniversalProfile o MetaMask. La extensión de navegador pedirá a los usuarios que firmen las transacciones a medida que **LSPFactory** despliega los contratos inteligentes.

```javascript
await ethereum.request({ method: 'eth_requestAccounts', params: [] });

const lspFactory = new LSPFactory(ethereum, {
  chainId: 2828,
});
```

## Uso

Desplegar un perfil universal es tan sencillo como ejecutarlo:

```javascript
const myContracts = await lspFactory.UniversalProfile.deploy({
  controllerAddresses: ['0x...'], // Direcciones de cuentas que controlarán el UP
  lsp3Profile: myLSP3MetaData,
});
```

La clave `lsp3Profile` contiene los [Metadatos LSP3](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#JSONURL) de tu Perfil Universal. Esta es la "cara" de tu Perfil Universal y contiene toda la información pública que la gente verá cuando vean tu UP, tales como tu nombre, descripción e imagen de perfil.

```javascript
const myLSP3MetaData = {
  name: 'Mi Perfil Universal',
  description: 'My fantástico Perfil Universal',
  profileImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      // bytes32 cadena hexadecimal del hash de la imagen
      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
    },
  ],
  backgroundImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      // bytes32 cadena hexadecimal del hash de la imagen
      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
    },
  ],
  tags: ['perfil público', 'creador'],
  links: [
    {
      title: 'Mi Sitio web',
      url: 'www.mi-sitioweb.com',
    },
  ],
  ...
};
```

Al desplegar tu Perfil Universal, tus datos LSP3 se cargarán automáticamente en IPFS.

:::note
Si ya tiene cargados datos LSP3, puede pasar una URL IPFS:

```javascript
const myLSP3MetaData = 'ipfs://QmPzUfdKhY6vfcTNDnitwKnnpm5GqjYSmw9todNVmi4bqy';
```

:::

Para crear un Perfil Universal anónimo, omite el valor `lsp3Profile`.

:::info
Los perfiles anónimos también pueden ser útiles si más tarde quieres crear los metadatos LSP3.
:::

Ahora puedes seguir utilizando tu dirección UP dentro de la dApp:

```javascript
const myUPAddress = myContracts.LSP0ERC725Account.address;
```

## Opciones

Al instanciar LSPFactory se pueden pasar opciones para especificar parámetros como `chainId` y `ipfsGateway`.

```javascript title="Instanciación de LSPFactory con opciones personalizadas"
const lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {
  deployKey: '0x...',
  chainId: 2828,
  ipfsGateway: 'https://ipfs.infura.io:5001',
});
```

####Clave de Despliegue

`deployKey` es la clave privada que debe firmar las transacciones enviadas por LSPFactory. Esta cuenta debe tener suficiente gas para realizar las transacciones.

Si no se establece ningún valor aquí, LSPFactory intentará firmar las transacciones a través de una extensión del navegador.

#### Id de cadena

`chainId` se utiliza para especificar la red con la que LSPFactory está interactuando. El `chainId` proporcionado se utilizará para determinar qué contratos base utilizar cuando se utilice [despliegue proxy](./deployment/options.md#deploy-proxy). Las direcciones de contratos base desplegados previamente se almacenan en el [archivo de versiones](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json) y se accede a ellas usando el chainId proporcionado. El valor predeterminado es 22 (l14 testnet).

#### Pasarela IPFS

`ipfsGateway` se utiliza para especificar el nodo IPFS con el que se debe interactuar para cargar y recuperar metadatos. `ipfsGateway` puede ser una cadena URL o un objeto definido por la librería [IPFS-HTTP Client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions) que se utiliza internamente para interactuar con el nodo IPFS.

```javascript title="Instanciación de LSPFactory con opciones ipfsGateway personalizadas establecidas"
const lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {
  deployKey: '0x...',
  chainId: 2828,
  ipfsGateway: {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  },
});
```
