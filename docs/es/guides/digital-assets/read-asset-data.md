---
sidebar_label: 'Leer Datos de Activos'
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Leer Datos de Activos

En esta guía, aprenderemos cómo:

- Obtener todos los activos propiedad de un Perfil Universal.
- Obtener los metadatos de todos los activos en cartera.

:::tip
Un archivo JS completo _"listo para usar"_ está disponible al final en la sección [**Código Final**](#final-code). Si deseas ejecutar el código como archivos JavaScript independientes dentro de la terminal o el navegador, puedes abrir el repositorio [`lukso-playground`](https://github.com/lukso-network/lukso-playground) o utilizar la página correlacionada [StackBlitz](https://stackblitz.com/github/lukso-network/lukso-playground).
:::

<div style={{textAlign: 'center', color: 'grey'}}>
  <img
    src={require('./img/example-asset.png').default}
    alt="Asset example on universalprofile.cloud"
  />
<br/>
<i>El activo <a href="https://universalprofile.cloud/asset/0xbD14F48DDDe851b812D95431906E629fb9514Db4">Lambada Dyed Red White Blue</a> como se muestra en UniversalProfile.cloud</i>
</div>

Utilizaremos:

- [web3.js](https://web3js.readthedocs.io/en/v1.7.0/) para la utilidad así como la conexión a la red LUKSO L14 o L16.
- librería [erc725.js](../../tools/erc725js/getting-started/) para obtener los metadatos de los activos.
- lsp-smart-contracts](https://github.com/lukso-network/lsp-smart-contracts) para integrar las ABI de los estándares LUKSO.

## Configuración

Abre una terminal en la carpeta del proyecto que elijas e instala todas las librerías necesarias.

```shell
npm install web3 @erc725/erc725.js @lukso/lsp-smart-contracts
```

## Paso 1 - Obtener todos los bienes en propiedad

<Tabs>
  <TabItem value="Current Standard" label="Current Standard">

En la guía [**Leer datos del perfil**](../universal-profile/read-profile-data), aprendimos a leer las propiedades del Perfil Universal y a utilizar los nombres de las claves de datos con la función `fetchData()` de la librería [erc725.js](../../tools/erc725js/getting-started/). Del mismo modo, ahora podemos obtener todos los activos que posee el Perfil Universal llamando a `fetchData` y pasando la clave `LSP5ReceivedAssets[]`.

:::info
Este mismo método también se puede utilizar para obtener todos los activos que ha emitido un Perfil Universal mediante la clave `LSP12IssuedAssets[]`.

:::

:::caution
Si utilizas erc725.js en un entorno NodeJS puede que necesites instalar e importar [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) para utilizar el método `fetchData()`.

:::

```javascript title="read_assets.js"
// Importación y Configuración de red
import { ERC725 } from '@erc725/erc725.js';
import UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import Web3 from 'web3';

// Variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros para la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

// Consultar los datos LSP5 del Perfil Universal para obtener los activos que posee.
const profile = new ERC725(
  UniversalProfileSchema,
  SAMPLE_PROFILE_ADDRESS,
  provider,
  config,
);

const result = await profile.fetchData('LSP5ReceivedAssets[]');
const ownedAssets = result.value;

console.log(ownedAssets);
```

  </TabItem>

  <TabItem value="Legacy Standard" label="Legacy Standard">

En la [guía anterior](../universal-profile/read-profile-data), aprendimos a leer las propiedades del perfil universal y a utilizar los nombres de las claves de datos con la función `fetchData()` de la librería [erc725.js](../../tools/erc725js/getting-started/). Del mismo modo, ahora podemos obtener la dirección del [Receptor Universal](../../standards/generic-standards/lsp1-universal-receiver/) utilizando `fetchData("LSP1UniversalReceiverDelegate")`.

:::caution
Si utilizas erc725.js en un entorno NodeJS puede que necesites instalar e importar [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) para utilizar el método `fetchData()`.

:::

```javascript title="read_assets.js"
// Importación y Configuración de red
import { ERC725 } from '@erc725/erc725.js';
import UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import Web3 from 'web3';

// Variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';
const RPC_ENDPOINT = 'https://rpc.l14.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros para la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

// Consultar los datos LSP5 del Perfil Universal para obtener los activos que posee.
const profile = new ERC725(
  UniversalProfileSchema,
  SAMPLE_PROFILE_ADDRESS,
  provider,
  config,
);

const result = await profile.fetchData('LSP1UniversalReceiverDelegate');
const universalReceiverAddress = result.value;
```

Usando la dirección del Receptor Delegado Universal, ahora podemos llamar a la función `getAllRawValues()` en este contrato para recuperar un conjunto de activos recibidos.

<details>
    <summary>LSP1 ABI Legacy</summary>

```json title="lsp1_legacy_minimal_abi.json"
[
  {
    "inputs": [],
    "name": "getAllRawValues",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```

</details>

```javascript title="read_assets.js"
// ABI para el Receptor Delegado Universal
import LSP1MinimalABI from './lsp1_legacy_minimal_abi.json';

// ...

const web3 = new Web3('https://rpc.l14.lukso.network');

// Obtener todos los activos recibidos desde el Receptor Delegado Universal del Perfil Universal.
const universalReceiver = new web3.eth.Contract(
  LSP1MinimalABI,
  receiverAddress,
);


// Consultar todos los valores brutos
const rawValues = await universalReceiver.methods.getAllRawValues().call();

// Convertir valores brutos en direcciones
const receivedAssets = rawValues.map((returnedRawValue) => {
  return web3.utils.toChecksumAddress(returnedRawValue.substr(26));
});

console.log(receivedAssets),

```

  </TabItem>
</Tabs>

## Paso 2 - Obtener los metadatos del activo

Ahora podemos recuperar los metadatos de la dirección del activo. Los metadatos [LSP4](../../standards/nft-2.0/LSP4-Digital-Asset-Metadata) se guardan en el almacén de valores clave ERC725Y del activo digital. Debemos introducir la clave de datos correcta para obtener el valor asociado. Existen varias [claves LSP4](../../standards/nft-2.0/LSP4-Digital-Asset-Metadata) para distintas propiedades.

- `LSP4TokenName`
- `LSP4TokenSymbol`
- `LSP4Metadata`
- `LSP4Creators[]`

En esta guía, utilizaremos la clave `LSP4Metadata` para leer los metadatos de los activos.

```javascript title="read_assets.js"
// ABIs
import LSP4schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';

// ...

// Instanciar el activo
const digitalAsset = new ERC725(LSP4Schema, ownedAssets[0], provider, config);

// Obtener los datos cifrados
const decodedAssetMetadata = await digitalAsset.fetchData('LSP4Metadata');
```

Para obtener los metadatos de todos los activos en propiedad, podemos iterar a través del conjunto `ownedAssets`.

```javascript
const ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {
  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);

  return await digitalAsset.fetchData('LSP4Metadata');
});
```

## Código final

A continuación se muestra el fragmento de código completo de esta guía, con todos los pasos compilados juntos.

<Tabs>
  
  <TabItem value="Current Standards" label="Current Standards">

```javascript title="read_assets.js"
// Importación y Configuración de red
import { ERC725 } from '@erc725/erc725.js';
import UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import LSP4Schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';
import Web3 from 'web3';

// Variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros para la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

// Consultar los datos LSP5 del Perfil Universal para obtener los activos que posee.
const profile = new ERC725(
  UniversalProfileSchema,
  SAMPLE_PROFILE_ADDRESS,
  provider,
  config,
);

const result = await profile.fetchData('LSP5ReceivedAssets[]');
const ownedAssets = result.value;

const ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {
  // Instanciar el activo
  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);

  // Obtener los datos cifrados
  return await digitalAsset.fetchData('LSP4Metadata');
});

console.log(ownedAssetsMetadata);
```

  </TabItem>

  <TabItem value="Legacy Standards" label="Legacy Standards">

<details>
    <summary>LSP1 ABI Legacy</summary>

```json title="lsp1_legacy_minimal_abi.json"
[
  {
    "inputs": [],
    "name": "getAllRawValues",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```

</details>

```javascript title="read_assets.js"
// Importación y Configuración de red
import { ERC725 } from '@erc725/erc725.js';
import UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import LSP4Schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';
import Web3 from 'web3';
import LSP1MinimalABI from './lsp1_legacy_minimal_abi.json';

// Variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';
const RPC_ENDPOINT = 'https://rpc.l14.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros para la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

// Consultar los datos LSP5 del Perfil Universal para obtener los activos que posee.
const profile = new ERC725(
  UniversalProfileSchema,
  SAMPLE_PROFILE_ADDRESS,
  provider,
  config,
);

const result = await profile.fetchData('LSP1UniversalReceiverDelegate');
const universalReceiverAddress = result.value;

const web3 = new Web3(RPC_ENDPOINT);

// Obtener todos los activos recibidos desde el Receptor Delegado Universal del Perfil Universal.
const universalReceiver = new web3.eth.Contract(
  LSP1MinimalABI,
  receiverAddress,
);

// Consultar todos los valores brutos
const rawValues = await universalReceiver.methods.getAllRawValues().call();

// Convertir valores brutos en direcciones
const ownedAssets = rawValues.map((returnedRawValue) => {
  return web3.utils.toChecksumAddress(returnedRawValue.substr(26));
});

const ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {
  // Instanciar el activo
  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);

  // Obtener los datos cifrados
  return await digitalAsset.fetchData('LSP4Metadata');
});

console.log(ownedAssetsMetadata);
```

  </TabItem>

</Tabs>
