---
sidebar_position: 3
title: LSP7DigitalAsset
---

# LSP7DigitalAsset

## Despliegue

```js
lspFactory.LSP7DigitalAsset.deploy(digitalAssetProperties [, options]);
```

Despliega un [Activo digital LSP7] Acuñable (../../../standards/nft-2.0/LSP7-Digital-Asset).

:::info
Por defecto, LSPFactory despliega la implementación [`Acuñable`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP7DigitalAsset/presets/LSP7Mintable.sol) de los activos digitales LSP7. Para llamar a la función `mint` importe el abi `LSP7Mintable` de la librería [lsp-smart-contracts](https://github.com/lukso-network/lsp-smart-contracts).

:::


### Parámetros

#### 1. `digitalAssetProperties` - Objeto

Especifica las propiedades que deben establecerse en el activo digital LSP7 durante el despliegue.

| Nombre                                                                                  | Tipo             | Descripción                                                                                                                                      |
| :-------------------------------------------------------------------------------------- | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`name`](../deployment/digital-asset#digital-asset-properties)                          | Cadena           | El nombre del token. Pasado al contrato inteligente LSP7 como parámetro del constructor.                                                              |
| [`symbol`](../deployment/digital-asset#digital-asset-properties)                        | Cadena           | El símbolo del token. Pasado al contrato inteligente LSP7 como parámetro del constructor.                                                            |
| [`controllerAddress`](../deployment/digital-asset#controller-address)                   | Cadena           | El propietario del contrato. Pasado al parámetro constructor del contrato inteligente LSP7.                                                               |
| [`isNFT`](../deployment/digital-asset#lsp7-nft-20)                                      | Booleano         | Especifica si el token debe ser fungible estableciendo el valor [decimales LSP7] en 18. Pasado al contrato inteligente LSP7 como parámetro constructor. |
| [`digitalAssetMetadata`](../deployment/digital-asset#digital-asset-metadata) (opcional) | Objeto \| Cadena | Los metadatos [LSP4] que se adjuntarán al contrato inteligente.                                                                                        |
| [`creators`](../deployment/digital-asset#adding-lsp4-metadata) (opcional)               | Conjunto         | Los metadatos [LSP4] que se adjuntarán al contrato inteligente.                                                                                        |

#### 2. `options` - Objeto (opcional)

Objeto que especifica cómo se desplegará el Activo Digital LSP7

| Nombre                                                                         | Tipo             | Descripción                                                                                                                                                                           |
| :----------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`LSP7DigitalAsset`](../deployment/options.md) (opcional)                      | Cadena           | Objeto genérico de configuración del contrato. Toma los parámetros [`version`](../deployment/options.md#version) y [`deployProxy`](../deployment/options.md#version).                          |
| [`onDeployEvents`](../deployment/digital-asset#reactive-deployment) (opcional) | Objeto           | Pasa los controladores de llamada de retorno `next`, `complete` y `error` para que se ejecuten cuando se disparen los eventos de despliegue. Consulta [`Despliegue Reactivo`](../deployment/digital-asset.md#reactive-deployment). |
| [`ipfsGateway`](../deployment/digital-asset#ipfs-upload-options) (opcional)    | Cadena \| Objeto | Una URL de pasarela IPFS o un objeto que contenga opciones de configuración IPFS.                                                                                                               |

:::info
Puedes leer más sobre la especificación del objeto `options` en [su página oficial](../deployment/digital-asset.md#deployment-configuration)
:::

### Respuesta

| Tipo         | Descripción                                                                                  |
| :----------- | :------------------------------------------------------------------------------------------- |
| `Promise`    | Resuelve a un objeto que contiene detalles del contrato desplegado.                          |

### Ejemplo

```javascript title="Desplegar un Activo Digital LSP7"
await lspFactory.LSP7DigitalAsset.deploy({
  name: 'Mi token',
  symbol: 'TKN',
  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',
  isNFT: true,
});
/**
{
  LSP7DigitalAsset: {
    address: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',
    receipt: {
      to: null,
      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',
      contractAddress: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',
      transactionIndex: 0,
      gasUsed: [BigNumber],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      blockHash: '0x1b44bd472b1b202620a78847138692828149e7f692763c884d99a9adf0b8a94c',
      transactionHash: '0xe923acc3431ef24fc11103b53b4219611d0f72e59734fc3c7db8da3eb4564844',
      logs: [],
      blockNumber: 12028918,
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

#### Ejemplo de despliegue de Activos Digitales Reactivo LSP7

```javascript title="Despliegue de un Activo Digital Reactivo LSP7"
await lspFactory.LSP7DigitalAsset.deploy(
  {
    name: 'Mi token',
    symbol: 'TKN',
    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',
    isNFT: true,
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
        console.log(contracts.LSP7DigitalAsset);
      },
    },
  },
);

/**
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP7DigitalAsset',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'PROXY_DEPLOYMENT',
  contractName: 'LSP7DigitalAsset',
  status: 'COMPLETADO',
  contractAddress: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'initialize(string,string,address,bool)',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'initialize(string,string,address,bool)',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'PENDIENTE',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'setData(bytes32[],bytes[])',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACCION',
  status: 'PENDIENTE',
  contractName: 'LSP7DigitalAsset',
  functionName: 'transferOwnership(address)',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACCION',
  contractName: 'LSP7DigitalAsset',
  functionName: 'transferOwnership(address)',
  status: 'COMPLETADO',
  receipt: {
    ...
  }
}
Despliegue finalizado
{
  address: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',
  receipt: {
    ...
  },
}
*/
```

[parámetros del constructor]: ../../../../../standards/smart-contracts/lsp7-digital-asset#constructor
[opciones de despliegue del contrato]: ../deployment/digital-asset.md
[lsp4]: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md
[carga de metadatos de activos digitales lsp4]: ./lsp4-digital-asset-metadata#uploadMetadata
[contratos inteligentes lsp]: https://github.com/lukso-network/lsp-smart-contracts
[eip1167]: https://eips.ethereum.org/EIPS/eip-1167
[ipfs-http-client]: https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions
[decimales lsp7]: https://github.com/lukso-network/lsp-smart-contracts/blob/develop/docs/ILSP7DigitalAsset.md#decimals
