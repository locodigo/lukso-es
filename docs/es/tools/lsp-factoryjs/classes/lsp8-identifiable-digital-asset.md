---
sidebar_position: 4
title: LSP8IdentifiableDigitalAsset
---

# LSP8IdentifiableDigitalAsset

## Despliegue

```js
lspFactory.LSP8IdentifiableDigitalAsset.deploy(digitalAssetProperties [, options]);
```

Despliega un [Activo Digital Identificable LSP8](../../../standards/nft-2.0/LSP8-Identifiable-Digital-Asset) Acuñable.

:::info
Por defecto, LSPFactory despliega la implementación [`Mintable`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol) de los activos digitales LSP8. Para llamar a la función `mint` importe el abi `LSP8Mintable` de la librería [lsp-smart-contracts](https://github.com/lukso-network/lsp-smart-contracts).

:::

### Parámetros

#### 1. `digitalAssetProperties` - Objeto

Especifica las propiedades que se establecerán en el Activo Digital LSP8 durante el despliegue.

| Nombre                                                                              | Tipo             | Descripción                                                                           |
| :-------------------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------------------------ |
| [`name`](../deployment/digital-asset#digital-asset-properties)                          | Cadena           | El nombre del token. Pasado al contrato inteligente LSP8 como parámetro del constructor.   |
| [`symbol`](../deployment/digital-asset#digital-asset-properties)                        | Cadena           | El símbolo del token. Pasado al contrato inteligente LSP8 como parámetro del constructor. |
| [`controllerAddress`](../deployment/digital-asset#controller-address)                   | Cadena           | El propietario del contrato. Pasado al parámetro constructor del contrato inteligente LSP8.    |
| [`digitalAssetMetadata`](../deployment/digital-asset#digital-asset-metadata) (opcional) | Objeto \| Cadena | Los metadatos [LSP4] que se adjuntarán al contrato inteligente.                             |
| [`creators`](../deployment/digital-asset#adding-lsp4-metadata) (opcional)               | Conjunto         | Los metadatos [LSP4] que se adjuntarán al contrato inteligente.                             |

#### 2. `options` - Objeto (opcional)

Objeto que especifica cómo se desplegará el Activo Digital LSP8

| Nombre                                                                         | Tipo             | Descripción                                                                                                                                                                           |
| :----------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`LSP8IdentifiableDigitalAsset`](../deployment/options.md) (opcional)          | Cadena           | Objeto genérico de configuración del contrato. Toma los parámetros [`version`](../deployment/options.md#version) y [`deployProxy`](../deployment/options.md#version).                          |
| [`onDeployEvents`](../deployment/digital-asset#reactive-deployment) (optional) | Objeto           |Pasa los controladores de llamada de retorno `next`, `complete` y `error` para que se ejecuten cuando se disparen los eventos de despliegue. Consulta [`Despliegue Reactivo`](../deployment/digital-asset.md#reactive-deployment). |
| [`ipfsGateway`](../deployment/digital-asset#ipfs-upload-options) (optional)    | Cadena \| Objeto | Una URL de pasarela IPFS o un objeto que contenga opciones de configuración IPFS.                                                                                                               |

:::info
Puedes leer más sobre la especificación del objeto `options` en [su página oficial].(../deployment/digital-asset.md#deployment-configuration)
:::

### Respuesta

| Tipo         | Descripción                                                                                  |
| :----------- | :------------------------------------------------------------------------------------------- |
| `Promise`    | Resuelve a un objeto que contiene detalles del contrato desplegado.                          |

### Ejemplo

```javascript title="Despliegue de un Activo Digital Identificable LSP8"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
  name: 'Mi token',
  symbol: 'TKN',
  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',
  digitalAssetMetadata: {
      description: "Activo Digital",
      assets: [asset],
      images: [image],
      icon: icon,
      links: [{ title: "MiActivoDigital", url: "mi-activo.com" }],
  };
});
/**
{
  LSP8IdentifiableDigitalAsset: {
    address: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',
    receipt: {
      to: null,
      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',
      contractAddress: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',
      transactionIndex: 0,
      gasUsed: [BigNumber],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      blockHash: '0x7c7a8a2723bbdfd257f3bc0bd27edcf98d9d119f70971f80a6066449ea5922ae',
      transactionHash: '0x05c791245a29b8cd2167bab41f56fbaf79d7a64814c1e161a2de352cead9c3fd',
      logs: [],
      blockNumber: 12028969,
      confirmations: 1,
      cumulativeGasUsed: [BigNumber],
      status: 1,
      type: 0,
      byzantium: true,
      events: []
    }
  }
}
*/
```

#### Ejemplo de despliegue de Activos Digitales Reactivos LSP8

```javascript title="Despliegue de un Activo Digital Identificable Reactivo LSP8"
await lspFactory.LSP8IdentifiableDigitalAsset.deploy(
  {
    name: 'Mi token',
    symbol: 'TKN',
    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',
  },
  {
    onDeployEvents: {
      next: (deploymentEvent) => {
        console.log(deploymentEvent);
      },
      error: (error) => {
        console.error(error);
      },
      complete: (contracts) => {
        console.log('Despliegue finalizado');
        console.log(contracts.LSP8IdentifiableDigitalAsset);
      },
    },
  },
);

/**
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP8IdentifiableDigitalAsset',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP8IdentifiableDigitalAsset',
  status: 'COMPLETADO',
  contractAddress: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'initialize(string,string,address)',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'initialize(string,string,address)',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  status: 'PENDIENTE',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'transferOwnership(address)',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP8IdentifiableDigitalAsset',
  functionName: 'transferOwnership(address)',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
Despliegue finalizado
{
  address: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',
  receipt: {
    ...
  },
}
*/
```

[opciones de despliegue del contrato]: ../deployment/digital-asset/#deployment-configuration
[parámetros del constructor]: ../../../../../standards/smart-contracts/lsp7-digital-asset#constructor
[opciones de despliegue del contrato]: ../deployment/digital-asset.md
[lsp4]: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md
[carga de metadatos de activos digitales lsp4]: ./lsp4-digital-asset-metadata#uploadMetadata
[contratos inteligentes lsp]: https://github.com/lukso-network/lsp-smart-contracts
[eip1167]: https://eips.ethereum.org/EIPS/eip-1167
[ipfs-http-client]: https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions
