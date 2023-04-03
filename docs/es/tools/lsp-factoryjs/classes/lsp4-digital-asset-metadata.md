---
sidebar_position: 2
title: LSP4DigitalAssetMetadata
---

# LSP4DigitalAssetMetadata

## uploadMetadata

```js
LSP4DigitalAssetMetadata.uploadMetadata(lsp4Metadata [, options]);
```

Uploads and processes passed assets and images, and uploads the [LSP4 Digital Asset Metadata](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md) to IPFS.
The `uploadMetadata` function is available as a static or non-static function callable on the `LSPFactory` library instance.

If `options` are not specified in the function call, and the function is used on an `LSPFactory` instance, the specified `options` that were passed to the LSPFactory during instantiation will be used.

### Parameters

#### 1. `metaData` - Object (optional)

| Nombre              | Tipo                | Descripción                                                                                                                                          |
| :------------------ | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`       | Cadena              | Una descripción del conjunto digital.                                                                                                                  |
| `links` (opcional)  | Conjunto            | Un conjunto de objetos que contienen título y url parameters.                                                                                             |
| `icon` (opcional)   | Archivo \| Conjunto | El icono del activo digital pasado como un objeto Archivo JavaScript o un Conjunto de objetos de metadatos de imagen para diferentes tamaños de la misma imagen.        |
| `images` (opcional) | Conjunto            | Un conjunto de imágenes donde cada elemento de la imagen es un objeto de archivo JavaScript o un conjunto de objetos de metadatos de imagen para diferentes tamaños de la misma imagen. |
| `assets` (opcional) | Conjunto            | Un conjunto de activos donde cada activo es un objeto de archivo JavaScript o un objeto de metadatos de activos.                                                         |

O

| Nombre         | Tipo   | Descripción                                                                                               |
| :------------- | :----- | :-------------------------------------------------------------------------------------------------------- |
| `LSP4Metadata` | Objeto | Objeto que contiene `description`, `links`, `icon`, `images`, `assets` como se ha descrito anteriormente. |

#### 2. `options` - Objeto (opcional)

| Nombre                                                                      | Tipo             | Descripción                                                                                                 |
| :-------------------------------------------------------------------------- | :--------------- | :---------------------------------------------------------------------------------------------------------- |
| [`ipfsGateway`](../deployment/digital-asset#ipfs-upload-options) (opcional) | Cadena \| Objeto | ipfsGateway Cadena URL u opciones de cliente IPFS definidas por la [librería ipfs-http-client] utilizada internamente. |

#### Respuesta

| Tipo      | Descripción                                    |
| :-------- | :--------------------------------------------- |
| `Promise` | Los datos [LSP4] procesados y la URL de carga. |

### Ejemplos

```javascript title="Cargar LSP4Metadata"
const image = new File();
const icon = new File();
const asset = new File();

await LSP4DigitalAssetMetadata.uploadMetadata(
  {
      description: "Activo Digital",
      assets: [asset],
      images: [image],
      icon: icon,
      links: [{ title: "Documentación de LUKSO", url: "https://docs.lukso.tech"}],
  };
);
/**
{
  json: {
    LSP4Metadata: {
      description: 'Activo Digital',
      assets: [
        {
          "hashFunction": "keccak256(bytes)",
          "hash": "0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11",
          "url": "ipfs://QmWkAki4mLq2cshpbKs4HFCaZdpUX1jLKKfb5y8YMATkwk",
          "fileType": "image/jpeg"
        }
      ],
      images: [
        [
          {
            "width": 1800,
            "height": 1800,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",
            "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"
          },
          {
            "width": 1024,
            "height": 1024,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",
            "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"
          },
          {
            "width": 640,
            "height": 640,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",
            "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"
          },
          {
            "width": 320,
            "height": 320,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",
            "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"
          },
          {
            "width": 180,
            "height": 180,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",
            "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"
          }
        ]
      ],
      icon: [
        {
          "width": 256,
          "height": 256,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x0b3eb5393a45081071ed39c167d65faef9fd7a4dfada9e513770537f5cf1707b",
          "url": "ipfs://QmNuLsjDJNKR9xSKXZUB6wJBwChcXLfDnCVEY8XvS3Pxvw"
        },
        {
          "width": 32,
          "height": 32,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x8038199254ab33c9248e09301f01fafb9ca704fce33b484e60153ba6b0e9ce41",
          "url": "ipfs://QmbaNRFxwiCNoKCNyBTPSThwBE6uqA1voD2i2vEGcHKUwy"
        }
      ],
      links: [
        {
          "title": "Documentación de LUKSO",
          "url": "https://docs.lukso.tech"
        }
      ]
    },
  },
  url: 'ipfs://QmXJxJePjs6A9TSC4m32GN6h3PknVYsC4HqNaBEF6EeuGB'
}
*/
```

```javascript title="Carga de LSP4Metadata con la clave LSP4Metadata"
const image = new File();
const icon = new File();
const asset = new File();

await LSP4DigitalAssetMetadata.uploadMetadata(
    {
      LSP4Metadata: {
        description: "Activo Digital",
        assets: [asset],
        images: [image],
        icon: icon,
        links: [{ title: "Documentación de LUKSO", url: "https://docs.lukso.tech"}],
      }
    };
);
/**
{
  json: {
    LSP4Metadata: {
      description: 'Activo Digital',
      assets: [
        {
          "hashFunction": "keccak256(bytes)",
          "hash": "0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11",
          "url": "ipfs://QmWkAki4mLq2cshpbKs4HFCaZdpUX1jLKKfb5y8YMATkwk",
          "fileType": "image/jpeg"
        }
      ],
      images: [
        [
          {
            "width": 1800,
            "height": 1800,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",
            "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"
          },
          {
            "width": 1024,
            "height": 1024,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",
            "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"
          },
          {
            "width": 640,
            "height": 640,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",
            "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"
          },
          {
            "width": 320,
            "height": 320,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",
            "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"
          },
          {
            "width": 180,
            "height": 180,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",
            "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"
          }
        ]
      ],
      icon: [
        {
          "width": 256,
          "height": 256,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x0b3eb5393a45081071ed39c167d65faef9fd7a4dfada9e513770537f5cf1707b",
          "url": "ipfs://QmNuLsjDJNKR9xSKXZUB6wJBwChcXLfDnCVEY8XvS3Pxvw"
        },
        {
          "width": 32,
          "height": 32,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x8038199254ab33c9248e09301f01fafb9ca704fce33b484e60153ba6b0e9ce41",
          "url": "ipfs://QmbaNRFxwiCNoKCNyBTPSThwBE6uqA1voD2i2vEGcHKUwy"
        }
      ],
      links: [
        {
          "title": "Documentación de LUKSO",
          "url": "https://docs.lukso.tech"
        }
      ]
    },
  },
  url: 'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB'
}
*/
```

#### Ejemplo de carga de Metadatos Personalizados LSP4

```javascript title="Carga de LSP4Metadata mediante opciones de carga personalizadas"
await LSP4DigitalAssetMetadata.uploadMetadata(
  {
    description: 'Activo Digital',
    assets: [asset],
    images: [image],
    icon: icon,
    links: [{ title: 'Documentación de LUKSO', url: 'https://docs.lukso.tech' }],
  },
  {
    ipfsGateway: {
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
    },
  }
);
/**
{
  json: {
    LSP4Metadata: {
      description: 'Activo Digital',
      assets: [
        {
          "hashFunction": "keccak256(bytes)",
          "hash": "0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11",
          "url": "ipfs://QmWkAki4mLq2cshpbKs4HFCaZdpUX1jLKKfb5y8YMATkwk",
          "fileType": "image/jpeg"
        }
      ],
      images: [
        [
          {
            "width": 1800,
            "height": 1800,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",
            "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"
          },
          {
            "width": 1024,
            "height": 1024,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",
            "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"
          },
          {
            "width": 640,
            "height": 640,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",
            "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"
          },
          {
            "width": 320,
            "height": 320,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",
            "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"
          },
          {
            "width": 180,
            "height": 180,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",
            "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"
          }
        ]
      ],
      icon: [
        {
          "width": 256,
          "height": 256,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x0b3eb5393a45081071ed39c167d65faef9fd7a4dfada9e513770537f5cf1707b",
          "url": "ipfs://QmNuLsjDJNKR9xSKXZUB6wJBwChcXLfDnCVEY8XvS3Pxvw"
        },
        {
          "width": 32,
          "height": 32,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x8038199254ab33c9248e09301f01fafb9ca704fce33b484e60153ba6b0e9ce41",
          "url": "ipfs://QmbaNRFxwiCNoKCNyBTPSThwBE6uqA1voD2i2vEGcHKUwy"
        }
      ],
      links: [
        {
          "title": "Documentación de LUKSO",
          "url": "https://docs.lukso.tech"
        }
      ]
    },
  },
  url: 'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB'
}
*/
```

```javascript title="Carga de LSP4Metadata utilizando las opciones de carga pasadas al instanciar LSPFactory"
const lspFactory = new LSPFactory(provider, {
  deployKey: myDeployKey,
  chainId: myChainId,
  ipfsGateway: {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  },
});

await lspFactory.LSP4DigitalAssetMetadata.uploadMetadata({
  description: 'Activo Digital',
  assets: [asset],
  images: [image],
  icon: icon,
  links: [{ title: 'Documentación de LUKSO', url: 'https://docs.lukso.tech' }],
});
/**
{
  json: {
    LSP4Metadata: {
      description: 'Activo Digital',
      assets: [
        {
          "hashFunction": "keccak256(bytes)",
          "hash": "0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11",
          "url": "ipfs://QmWkAki4mLq2cshpbKs4HFCaZdpUX1jLKKfb5y8YMATkwk",
          "fileType": "image/jpeg"
        }
      ],
      images: [
        [
          {
            "width": 1800,
            "height": 1800,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",
            "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"
          },
          {
            "width": 1024,
            "height": 1024,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",
            "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"
          },
          {
            "width": 640,
            "height": 640,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",
            "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"
          },
          {
            "width": 320,
            "height": 320,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",
            "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"
          },
          {
            "width": 180,
            "height": 180,
            "hashFunction": "keccak256(bytes)",
            "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",
            "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"
          }
        ]
      ],
      icon: [
        {
          "width": 256,
          "height": 256,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x0b3eb5393a45081071ed39c167d65faef9fd7a4dfada9e513770537f5cf1707b",
          "url": "ipfs://QmNuLsjDJNKR9xSKXZUB6wJBwChcXLfDnCVEY8XvS3Pxvw"
        },
        {
          "width": 32,
          "height": 32,
          "hashFunction": "keccak256(bytes)",
          "hash": "0x8038199254ab33c9248e09301f01fafb9ca704fce33b484e60153ba6b0e9ce41",
          "url": "ipfs://QmbaNRFxwiCNoKCNyBTPSThwBE6uqA1voD2i2vEGcHKUwy"
        }
      ],
      links: [
        {
          "title": "Documentación de LUKSO",
          "url": "https://docs.lukso.tech"
        }
      ]
    },
  },
  url: 'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB'
}
*/
```

[librería ipfs-http-client]: https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions
[lsp4]: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md
