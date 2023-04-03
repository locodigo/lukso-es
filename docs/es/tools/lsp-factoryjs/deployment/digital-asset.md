---
sidebar_position: 2
title: Activo Digital
---

# Despliegue de un Activo Digital

LSPFactory permite a los desarrolladores implementar fácilmente contratos inteligentes de Activos Digitales [LSP7] y [LSP8] para sus casos de uso de [token fungible](./digital-asset.md#fungible-token) o [NFT 2.0](./digital-asset.md#deploying-nft-20).

Para desplegar un Activo Digital Acuñable [LSP7]:

```javascript
await lspFactory.LSP7DigitalAsset.deploy(digitalAssetProperties [, options]);
```

Para desplegar un Activo Digital Identificable Acuñable LSP8:

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy(digitalAssetProperties [, options]);
```

:::info
Por defecto, LSPFactory despliega la implementación [`Acuñable`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP7DigitalAsset/presets/LSP7Mintable.sol) de los activos digitales LSP7 y LSP8. Para llamar a la función `mint` importe el abi `LSP7Mintable` o `LSP8Mintable` de la librería [lsp-smart-contracts](https://github.com/lukso-network/lsp-smart-contracts).

:::

## Despliegue de un NFT 2.0

Los estándares de Activos Digitales [LSP7](./digital-asset.md#lsp7-nft-20) y [LSP8](./digital-asset.md#lsp8-nft-20) pueden utilizarse ambos para contratos NFT 2.0.

#### LSP7 NFT 2.0

El estándar [LSP7] puede ser útil para colecciones NFT en las que se pretende que todos los tokens tengan los mismos [metadatos](./digital-asset.md#adding-lsp4-metadata). Por ejemplo, una colección de prendas de vestir digitales.

[LSP7] se basa en el estándar de tokens [ERC20] y puede utilizarse como contrato NFT 2.0 estableciendo el valor `isNFT` del constructor en `true` al desplegar. Esto establecerá el valor [decimales](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md#decimals) del contrato en 0 para que todos los tokens sean indivisibles.

```javascript
await lspFactory.LSP7DigitalAsset.deploy({
    isNFT: true,
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MITOKEN'
    symbol: 'DEMO',
});
```

:::info
Para desplegar un contrato inteligente NFT 2.0 [LSP7], el parámetro `isNFT` debe establecerse en `true` al hacer el despliegue. Si `isNFT` se establece en false, el valor de los decimales de los tokens se establecerá en 18, lo que significa que pueden fraccionarse.
:::

#### LSP8 NFT 2.0

[LSP8] puede ser útil para casos en los que todos los NFT de una colección son únicos y tienen sus propios [metadatos](./digital-asset.md#adding-lsp4-metadata). Por ejemplo, una colección de avatares en la que todos los tokens tienen una apariencia diferente.

[LSP8] se basa en el estándar de tokens [ERC721](https://eips.ethereum.org/EIPS/eip-721) utilizado para los contratos NFT. Cada token [LSP8] tiene su propio `tokenId` único y metadatos que describen su unicidad.

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MITOKEN'
    symbol: 'DEMO',
});
```

## Despliegue de un Token Fungible

Para desplegar un contrato de token fungible utiliza el estándar [LSP7]. [LSP7] se basa en el estándar de tokens [ERC20], aunque está mejorado al permitir que los contratos de tokens tengan sus propios metadatos a través de su almacén de valores clave [ERC725Y] y [Metadatos de Activos Digitales LSP4](./digital-asset.md#adding-lsp4-metadata).

```javascript
await lspFactory.LSP7DigitalAsset.deploy(digitalAssetProperties [, options]);
```

```javascript
await lspFactory.LSP7DigitalAsset.deploy({
  isNFT: false,
  controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
  name: 'MITOKEN',
  symbol: 'DEMO',
});
```

Al desplegar, establece el valor `isNFT` en `false`. Esto establecerá el valor [decimales](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md#decimals) en el contrato de tokens a 18, permitiendo fraccionar los tokens.

## Propiedades de los Activos Digitales

Dentro del objeto `digitalAssetProperties`, puedes establecer opciones de configuración de activos digitales como la [dirección del controlador](./digital-asset.md#controller-address) y los [metadatos LSP4](./digital-asset.md#adding-lsp4-metadata).

[LSP7] y [LSP8] comparten los mismos parámetros de construcción, sin embargo LSP7 tiene un parámetro adicional `isNFT` utilizado para establecer el valor de los decimales en el contrato a 0 o 18.

```javascript
await lspFactory.LSP7DigitalAsset.deploy({
    isNFT: false,
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MITOKEN'
    symbol: 'DEMO',
});
```

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MITOKEN'
    symbol: 'DEMO',
});
```

:::info
utiliza el parámetro `isNFT` en [LSP7] para desplegar un [NFT 2.0](./digital-asset.md#deploying-an-nft-20) o un [contrato token](./digital-asset.md#deploying-a-fungible-token).
:::

### Dirección del controlador

Establece la dirección que debe poseer tu contrato de activo digital pasando el parámetro `controllerAddress`. LSPFactory transferirá el contrato token a la dirección especificada aquí después de establecer los [metadatos LSP4](./digital-asset.md#adding-lsp4-metadata) en el contrato inteligente.

### Añadir metadatos LSP4

Tanto [LSP7] como [LSP8] se adhieren al [estándar de Metadatos de Activos Digitales LSP4](../../../standards/nft-2.0/LSP4-Digital-Asset-Metadata.md). Los desarrolladores pueden especificar los LSP4Metadata estableciendo las claves `name`, `symbol`, `digitalAssetMetadata` y `creators` al desplegar con LSPFactory.

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MITOKEN'
    symbol: 'DEMO',
    creators: ['0x7Ab53a0C861fb955050A8DA109eEeA5E61fd8Aa4', '0x6c1F3Ed2F99054C88897e2f32187ef15c62dC560'],
    digitalAssetMetadata: {
      description: 'Mi NFT 2.0'
      ...
    }
});
```

Las claves `name` y `symbol` se pasan como parámetros del constructor de despliegue. Estos valores establecerán las claves [`LSP4TokenName`](../../../standards/nft-2.0/LSP4-Digital-Asset-Metadata.md#lsp4tokenname) y [`LSP4TokenSymbol`](../../../standards/nft-2.0/LSP4-Digital-Asset-Metadata.md#lsp4tokensymbol) [ERC725Y] directamente en el contrato durante el despliegue.

Las direcciones pasadas dentro de la matriz `creators` se establecerán bajo la clave [LSP4Creators[]](../../../standards/nft-2.0/LSP4-Digital-Asset-Metadata#lsp4creators) [ERC725Y].

:::warning
LSPFactory no establece la [clave LSP3IssuedAssets](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3issuedassets) en ningún Perfil universal al desplegar un activo digital. Esta clave deberá actualizarse por separado.

:::

#### Metadatos de Activos Digitales

Se pueden añadir más Metadatos de Activos Digitales pasando el parámetro `digitalAssetMetadata`. Se trata de metadatos almacenados como JSON en un servidor y referenciados desde el contrato mediante la clave [`LSP4Metadata`](../../../standards/nft-2.0/LSP4-Digital-Asset-Metadata.md#lsp4metadata) [ERC725Y].

:::info Info
Los Metadatos de Activos Digitales pueden pasarse como un objeto JSON que contenga los [LSP4Metadata](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md) que quieres subir o como una URL de tus metadatos previamente subidos.
:::

Si LSP4Metadata se pasa como un objeto, LSPFactory procesará y cargará los metadatos en IPFS.

:::info
Consulta [Opciones de carga](././universal-profile#ipfs-upload-options) para obtener más información sobre cómo especificar una pasarela IPFS personalizada.
:::

```javascript title="Despliegue de un Activo Digital LSP8 con descripción y enlaces establecidos en el JSON de LSP4Metadata"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    description: "Mi Activo Digital",
    links: [{
      title: "Documentación LUKSO",
      url: "https://docs.lukso.tech"
    }],
  },
  ...
});
```

Los metadatos LSP4 también se pueden pasar con la clave `LSP4Metadata`:

```javascript title="Pasando la clave LSP4Metadata"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    LSP4Metadata: {
      description: "Mi Activo Digital",
    links: [{
      title: "Documentación LUKSO",
        url: "https://docs.lukso.tech"
      }],
    },
  }
  ...
});
```

Alternativamente, `digitalAssetMetadata` puede pasarse como una URL en la que se almacena el archivo JSON de LSP4Metadata. LSPFactory descargará el archivo JSON antes de realizar el hash y generará el valor [JSONURL](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#JSONURL) que se almacenará en la clave [ERC725Y] `LSP4Metadata` del contrato del token.

```javascript title='Proporcionar una URL IPFS de metadatos LSP4 cargada previamente'
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: 'ipfs://QmQ7Wq4y2gWiuzB4a4Wd6UiidKNpzCJRpgzFqQwzyq6SsV',
  ...
});
```

```javascript title='Proporcionar una URL de metadatos LSP4 cargada previamente'
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: 'https://mycoolserver.com/myProfile.json',
  ...
});
```

También puedes proporcionar tú mismo el archivo JSON para generar el valor hash:

```javascript title='Proporcionar una URL de metadatos LSP4 previamente cargada y el archivo JSON mismo'
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    json: lsp3ProfileJson,
    url: 'https://mycoolserver.com/myProfile.json'
  },
  ...
});
```

O puedes proporcionar el valor hash y luego la URL del archivo subido:

```javascript title='Proporcionar una URL de metadatos LSP4 previamente cargada y valores hash'
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
    hashFunction: 'keccak256(utf8)',
    url: 'https://mycoolserver.com/file.json'
  },
  ...
});
```

### Añadir Imágenes y Activos

Las imágenes y los activos pueden incluirse en el archivo de metadatos LSP4 pasándolos a los parámetros `images` y `assets` del objeto `digitalAssetMetadata`.

#### Imágenes precargadas

Si ya tienes imágenes y activos cargados en IPFS, puedes pasar los metadatos directamente al objeto `digitalAssetMetadata`. Estos metadatos se establecerán en el archivo JSON de metadatos de LSP4DigitalAsset y se cargarán en IPFS.

Las imágenes pueden introducirse en el parámetro `images`. Éste debe contener un conjunto de imágenes relacionadas con el activo digital en varios tamaños. La imagen 0 debe ser la imagen principal.

:::info
Cada elemento del conjunto `images` debe ser a su vez un conjunto en el que cada elemento son los metadatos de diferentes tamaños de imagen.
:::

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    images: [
      [
        {
          width: 500,
          height: 500,
          hashFunction: 'keccak256(bytes)',
          hash: '0xfdafad027ecfe57eb4ad044b938805d1dec209d6e9f960fc320d7b9b11cced14',
          url: 'ipfs://QmPLqMFDxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrajSGp',
        }
        ... // Deben incluirse varios tamaños de la imagen
      ],
      ... // Pueden incluirse varias imágenes
    ]
  },
  ...
});
```

También se puede pasar un icono para el Activo Digital. Debe tratarse de varios tamaños de la misma imagen de icono.

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    icon: [
      {
        width: 256,
        height: 256,
        hashFunction: 'keccak256(bytes)',
        hash: '0xfdafad027ecfe57eb4ad044b938805d1dec209d6e9f960fc320d7b9b11cced14',
        url: 'ipfs://QmPLqMFDxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrajSGp',
      }
      ... // Deben incluirse varios tamaños de la imagen del icono
    ]
  },
  ...
});
```

#### Activos precargados

Los activos cargados previamente pueden incluirse pasando un conjunto de metadatos de activos en el parámetro `assets`.

```javascript
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  digitalAssetMetadata: {
    assets: [
        {
          hashFunction: 'keccak256(bytes)',
          hash: '0xfdafad027ecfe57eb4ad044b938805d1dec209d6e9f960fc320d7b9b11cced14',
          url: 'ipfs://QmPLqMFDxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrajSGp',
          fileType: 'fbx'
        }
      ...
    ]
  },
  ...
});
```

#### Pasar un objeto JavaScript File

JavaScript ofrece un objeto `File` para facilitar el manejo de archivos dentro de un navegador. Los desarrolladores pueden pasarlo a los campos `images`, `assets` y `icon` para permitir arrastrar y soltar imágenes fácilmente desde una interfaz de usuario.

:::caution
El objeto `File` de JavaScript sólo está disponible cuando se utiliza JavaScript en el navegador. Si se utiliza LSPFactory en un entorno Node.js, se deben pasar los metadatos de la imagen.
:::

```javascript
<input type="file" id="asset">
<input type="file" id="image">
<input type="file" id="icon">

<script>
  const myLocalAsset = document.getElementById('asset').files[0];
  const myLocalImage = document.getElementById('image').files[0];
  const myLocalIcon = document.getElementById('icon').files[0];

  await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
    digitalAssetMetadata: {
      assets: [
          myLocalAsset
        ...
      ],
      images: [
        myLocalImage
      ],
      ...
      icon: myLocalIcon
    },
    ...
  });
<script/>
```

LSPFactory creará cinco versiones redimensionadas de cualquier imagen pasada, con tamaños máximos de `1800x1800`, `1024x1024`, `640x640`, `320x320`, `180x180`, o `256x256` y `32x32` si se pasa como un `icon`. Estas imágenes redimensionadas se establecerán dentro de los metadatos JSON de LSP4 cargados en IPFS y adjuntos al contrato de token.

## Configuración del Despliegue

Los desarrolladores pueden seleccionar una configuración de despliegue única para su contrato de Activos Digitales utilizando el parámetro `options`. Esto permite un fácil despliegue de una versión o implementación específica de un contrato inteligente de Activos Digitales pasando el parámetro [`version`](./options.md#version).

Bajo el parámetro [version](./options.md#version) los desarrolladores pueden pasar un [número de versión](./options.md#version), [custom bytecode](./options.md#deploying-custom-bytecode) o una [base contract address](./options.md#custom-base-contract-address) para ser utilizada durante el despliegue. Estableciendo el parámetro [`deployProxy`](./options.md#deploy-proxy) los desarrolladores pueden especificar si el contrato debe desplegarse utilizando el despliegue proxy.

:::info
Más información sobre la configuración del despliegue de proxy y el versionado de contratos [aquí](../deployment/options.md).

:::

```js title="Pasar opciones de contrato LSP7DigitalAsset"
await lspFactory.LSP7DigitalAsset.deploy({...}, {
    LSP7DigitalAsset: {
        version: '0x...', // Código byte personalizado
        deployProxy: false
    },
})
```

```js title="Pasar opciones de contrato LSP8IdentifiableDigitalAsset"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {
    LSP8IdentifiableDigitalAsset: {
        version: '0x87cd003F9Ac7d6eBcd811f7b427c7dBF6f6ba132', // Dirección del contrato tipo personalizado
        deployProxy: true
    },
})
```

### Despliegue Proxy

Pasando el parámetro [`deployProxy`](./options.md#deploy-proxy) los desarrolladores pueden determinar si su contrato inteligente de activos digitales debe desplegarse como un **contrato proxy mínimo** basado en [EIP1167](https://eips.ethereum.org/EIPS/eip-1167) o como un contrato completo con un constructor.

:::info
El valor predeterminado de `deployProxy` es `true` tanto para LSP7 como para LSP8. Si `deployProxy` se establece en false, se desplegará un contrato completo con un constructor en la última versión.
:::

### Opciones de carga IPFS

Puedes especificar cómo quieres que se carguen los metadatos de tu perfil pasando el `ipfsGateway` dentro del objeto `options`. Aquí puedes establecer la pasarela IPFS donde quieres que se carguen los metadatos.

:::note
El procedimiento toma una cadena URL o un objeto definido por la librería [IPFS-HTTP Client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions) que se utiliza internamente para interactuar con el nodo IPFS especificado.
:::

Si se pasa una URL y no se especifica ningún puerto, se utilizará el puerto estándar 5001.

```javascript title="Pasar la URL de ipfsGateway"
lspFactory.LSP7DigitalAsset.deploy({...}, {
  ipfsGateway: 'https://ipfs.infura.io:5001'
})
```

```javascript title="Pasar cadena URL ipfsGateway con puerto establecido"
lspFactory.LSP7DigitalAsset.deploy({...}, {
  ipfsGateway: 'https://ipfs.infura.io' // No se ha configurado ningún puerto. Se utilizará el puerto 5001
})
```

```javascript
await lspFactory.LSP7DigitalAsset.deploy({...}, {
  ipfsGateway: {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  }
});
```

Si se proporciona el parámetro `ipfsGateway`, se sobrescribirá el objeto `ipfsGateway` pasado durante la instanciación del LSPFactory sólo para esta llamada a la función.

### Despliegue Reactivo

LSPFactory emite eventos para cada paso del proceso de despliegue. Estos eventos pueden ser enganchados pasando el objeto `onDeployEvents` dentro del objeto `options`.

El objeto `onDeployEvents` recibe tres parámetros de llamada de retorno:

- `next` será llamado una vez por cada evento de despliegue que se dispare.
- `complete` será llamado una vez que el despliegue haya finalizado con los detalles de despliegue del contrato completado.
- `error` se llamará una vez si se produce un error durante el despliegue.

Esto permite utilizar LSPFactory para ciertos comportamientos reactivos. Por ejemplo, para dar una mejor retroalimentación a los usuarios durante el despliegue desde una interfaz de usuario como una barra de carga, o mostrar actualizaciones en vivo con los detalles y direcciones de los contratos a medida que se despliegan.

:::info
El callback `complete` será llamado con el mismo objeto contract que es devuelto cuando se resuelve la función `deploy`.

:::

#### Eventos de despliegue de LSP7

```javascript title="Despliegue reactivo de un Activo Digital LSP7"
const contracts = lspFactory.LSP7DigitalAsset.deploy({...}, {
  onDeployEvents: {
    next: (deploymentEvent) => {
      console.log(deploymentEvent);
    },
    error: (error) => {
      console.error(error);
    },
    complete: (contracts) => {
      console.log('Despliegue de Activos Digitales completado');
      console.log(contracts.LSP7DigitalAsset);
    },
  }
});

/**
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP7DigitalAsset',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP7DigitalAsset',
  status: 'COMPLETE',
  contractAddress: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'initialize(string,string,address,bool)',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'initialize(string,string,address,bool)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  status: 'PENDING',
  contractName: 'LSP7DigitalAsset',
  functionName: 'transferOwnership(address)',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'transferOwnership(address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
Despliegue de Activos Digitales completado
{
  address: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',
  receipt: {
    ...
  },
}
*/
```

#### Eventos de Despliegue de LSP8

```typescript title="Despliegue reactivo de un Activo Digital Identificable LSP8"
const contracts = lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {
  onDeployEvents: {
    next: (deploymentEvent) => {
      console.log(deploymentEvent);
    },
    error: (error) => {
      console.error(error);
    },
    complete: (contracts) => {
      console.log('Despliegue de Activos Digitales completado');
      console.log(contracts.LSP8IdentifiableDigitalAsset);
    },
  }
});

/**
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP8IdentifiableDigitalAsset',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP8IdentifiableDigitalAsset',
  status: 'COMPLETE',
  contractAddress: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'initialize(string,string,address)',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'initialize(string,string,address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  status: 'PENDING',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'transferOwnership(address)',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'transferOwnership(address)',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
Despliegue de Activos Digitales completado
{
  address: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',
  receipt: {
    ...
  },
}
*/

```

[lsp7]: ../../../standards/nft-2.0/LSP7-Digital-Asset
[lsp8]: ../../../standards/nft-2.0/LSP8-Identifiable-Digital-Asset
[erc20]: https://eips.ethereum.org/EIPS/eip-20
[erc725y]: ../../../standards/generic-standards/lsp2-json-schema.md
