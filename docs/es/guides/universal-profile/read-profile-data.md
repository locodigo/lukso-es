---
sidebar_label: 'Leer Datos del Perfil'
sidebar_position: 2
---

# Leer Datos de un Perfil Universal

En esta guía aprenderemos a leer datos de un [Perfil Universal](../../standards/universal-profile/introduction.md).

:::tip
Un archivo JS completo _"listo para usar"_ está disponible al final en la sección [**Código Final**](#final-code). Si deseas ejecutar el código como archivos JavaScript independientes dentro del terminal o el navegador, puedes abrir el repositorio [`lukso-playground`](https://github.com/lukso-network/lukso-playground) o utilizar la página asociada [StackBlitz](https://stackblitz.com/github/lukso-network/lukso-playground).
:::

<div style={{textAlign: 'center', color: 'grey'}}>
  <img
    src={require('./img/example-up.png').default}
    alt="Universal Profile example on universalprofile.cloud"
  />
<br/>
<i>Un <a href="https://universalprofile.cloud/0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e">Perfil Universal</a> tal y como se ve en UniversalProfile.cloud</i>
</div>

Utilizaremos:

- [web3.js](https://web3js.readthedocs.io/en/v1.7.0/) para la utilidad así como la conexión a la red LUKSO L16.
- librería [erc725.js](../../tools/erc725js/getting-started/) para comprobar la interfaz de un perfil.
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) para poder utilizar `fetch()` en código Node.js.

## Configuración

Abre una terminal en el directorio del proyecto que elijas e instala todas las librerías necesarias.

```shell
npm install web3 @erc725/erc725.js isomorphic-fetch
```

## Step 1 - Call the Universal Profile

:::success Recomendación
Los archivos JSON y JS completos "listos para usar" están disponibles al final en la sección [**Código final**](#final-code).
:::

Para inspeccionar la dirección y comprobar si tiene un contrato ERC725, podemos llamar a su interfaz a través de la librería `erc725.js`. La instancia del contrato necesitará la siguiente información:

-[Metadatos del Perfil Universal - LSP3](../../standards/universal-profile/lsp3-universal-profile-metadata) que describen los datos en el almacenamiento del contrato del Perfil Universal, y qué claves utilizar para recuperarlos. Podemos importar el esquema directamente desde la librería [erc725.js](../../tools/erc725js/schemas#standard-lsp-schemas).

  - `SupportedStandards` muestra la interfaz que utiliza un Estándar de Metadatos con una clave. En nuestro caso utilizamos `SupportedStandards:LSP3UniversalProfile` de para comprobar si el contrato es un Perfil Universal.
  - `LSP3Profile` muestra los datos del Perfil Universal.
  - LSP12IssuedAssets[]` muestra los activos emitidos por el Perfil Universal.
  - LSP5ReceivedAssets[]` muestra los activos recibidos por el Perfil Universal.
  - LSP1UniversalReceiverDelegate" apuntará al [Receptor Universal] (../../standards/generic-standards/lsp1-universal-receiver/) del Perfil Universal.

- `address`: la dirección del contrato.
- `provider`: un objeto [provider](../../tools/erc725js/providers). Suele utilizarse con la URL del endpoint RPC
- `config`: se utiliza para configurar la pasarela IPFS

Además del esquema, también usamos `isomorphic-fetch` para obtener la respuesta HTTP del perfil mientras usamos `node` para la ejecución. Puede que no necesites esta librería si utilizas entornos de navegador como `ReactJS` o `VueJS`.

Después de importar el objeto ERC725, podemos declarar todos los datos necesarios para instanciar el Perfil Universal como instancia del contrato ERC725.

:::info
Después de inicializar el perfil ERC725, podemos elegir entre llamar a la función `getData()` o `fetchData()`.

- La función `getData()` proporcionará la información básica del perfil con claves, nombres y valores, incluyendo su hash y URL.
- La función `fetchData()` también obtendrá los datos enlazados desde las URL de almacenamiento y los incluirá en la respuesta.

Utilizaremos la conveniente función `fetchData()` ya que sólo necesitamos un comando para devolver la lista completa de información del perfil sin tener que buscar por separado los archivos de almacenamiento.
:::

```javascript title="leer_prerfil.js"
// Importación y Configuración de la Red
import Web3 from 'web3';
import { ERC725 } from '@erc725/erc725.js';
import 'isomorphic-fetch';
import erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';

// Nuestras variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros de la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

/*
 * Intenta obtener el @param del Perfil Universal
 *
 * @param dirección del Perfil Universal
 * @return cadena JSON o error personalizado
 */
async function fetchProfile(address) {
  try {
    const profile = new ERC725(erc725schema, address, provider, config);
    return await profile.fetchData();
  } catch (error) {
    return console.log('Este no es un Contrato ERC725');
  }
}

// Depurar
fetchProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>
  console.log(JSON.stringify(profileData, undefined, 2)),
);
```

Si todo ha ido bien, ahora tenemos los [Metadatos del Perfil Universal - LSP3](../../standards/universal-profile/lsp3-universal-profile-metadata) JSON del perfil. Debería parecerse a este archivo JSON:

<details>
    <summary>Mostrar la respuesta JSON</summary>

```json
[
  {
    "key": "...",
    "name": "SupportedStandards:LSP3UniversalProfile",
    "value": null
  },
  {
    "key": "...",
    "name": "LSP3Profile",
    "value": {
      "LSP3Profile": {
        "name": "...",
        "links": [
          {
            "title": "...",
            "url": "..."
          },
          ...
        ],
        "description": "...",
        "profileImage": [
          {
            "width": 1512,
            "height": 1998,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x...",
            "url": "ipfs://..."
          },
          ...
        ],
        "backgroundImage": [
          {
            "width": 1512,
            "height": 1998,
            "hashFunction": "keccak256(bytes)",
            "hash": "0x...",
            "url": "ipfs://..."
          },
          ...
        ],
        "tags": [
          "...",
          ...
        ]
      }
    }
  },
  {
    "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",
    "name": "LSP12IssuedAssets[]",
    "value": []
  },
  {
    "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",
    "name": "LSP5ReceivedAssets[]",
    "value": []
  },
  {
    "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",
    "name": "LSP1UniversalReceiverDelegate",
    "value": "0x..."
  }
]
```

</details>

## Paso 2 - Obtener Información Específica

Con la respuesta JSON, podemos obtener todo tipo de datos, entre ellos:

- `SupportedStandards:LSP3UniversalProfile`: Comprueba si el contrato inteligente es un Perfil Universal LSP3
- `LSP3Profile`: Los datos del Perfil Universal (nombre, descripción, etiquetas, enlaces, imágenes)
- `LSP12IssuedAssets[]`: Activos emitidos por el Perfil Universal
- LSP5Activos recibidos[]`: Activos recibidos por el perfil universal
- `LSP1UniversalReceiverDelegate`: El Receptor Delegado Universal que pertenece al Perfil Universal

:::info
Para obtener sólo una parte específica de información del Perfil Universal, puedes definir un nombre específico dentro de la función `fetchData()` de la librería [erc725.js](../../tools/erc725js/getting-started/).
:::

En nuestro caso, para leer sólo la información del perfil, podemos utilizar `fetchData('LSP3Profile')`. Si no, puedes buscar en todo el conjunto JSON del paso anterior para extraer el elemento deseado.

```javascript title="leer_perfil.js"
// ...

/*
 * Obtener el @param del Perfil Universal
 * datos LSP3
 *
 * @param dirección del Perfil Universal
 * @return cadena JSON o error personalizado
 */
async function fetchProfileData(address) {
  try {
    const profile = new ERC725(erc725schema, address, provider, config);
    return await profile.fetchData('LSP3Profile');
  } catch (error) {
    return console.log('Este no es un Contrato ERC725');
  }
}

// Depurar
fetchProfileData(SAMPLE_PROFILE_ADDRESS).then((profileData) =>
  console.log(JSON.stringify(profileData, undefined, 2)),
);
```

## Código final

A continuación se muestra el fragmento de código completo de esta guía, con todos los pasos compilados juntos.

```javascript title="leer_perfil.js"
// Importación y Configuración de la Red
import Web3 from 'web3';
import { ERC725 } from '@erc725/erc725.js';
import from 'isomorphic-fetch';
import erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';

// Nuestras variables estáticas
const SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parámetros de la instancia ERC725
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

/*
 * Intenta obtener el @param del Perfil Universal
 *
 * @param dirección del Perfil Universal
 * @return cadena JSON o error personalizado
 */
async function fetchProfile(address) {
  try {
    const profile = new ERC725(erc725schema, address, provider, config);
    return await profile.fetchData();
  } catch (error) {
      return console.log('Este no es un Contrato ERC725');
  }
}

/*
 * Obtener el @param del Perfil Universal
 * datos LSP3
 *
 * @param dirección del Perfil Universal
 * @return cadena JSON o error personalizado
 */
async function fetchProfileData(address) {
  try {
    const profile = new ERC725(erc725schema, address, provider, config);
    return await profile.fetchData('LSP3Profile');
  } catch (error) {
      return console.log('Este no es un Contrato ERC725');
  }
}

// Paso 1
fetchProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>
  console.log(JSON.stringify(profileData, undefined, 2)),
);

// Paso 2
fetchProfileData(SAMPLE_PROFILE_ADDRESS).then((profileData) =>
  console.log(JSON.stringify(profileData, undefined, 2)),
);

```
