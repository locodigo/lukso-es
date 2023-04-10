---
id: getting-started
title: Primeros Pasos
sidebar_position: 1
---

Aquí encontrarás tutoriales y herramientas que te ayudarán a construir en LUKSO. Como LUKSO es una Blockchain basada en EVM, todas las herramientas y tutoriales para Ethereum también funcionan en LUKSO. Si necesita conocimientos sobre EVM y contratos inteligentes, te recomendamos que eches un vistazo a [estos magníficos recursos de la Fundación Ethereum](https://ethereum.org/en/developers/learning-tools/).

A diferencia de la mayoría de las cadenas EVM, en LUKSO se te anima a utilizar principalmente [Perfiles Universales](../standards/universal-profile/introduction.md) como solución para crear cuentas para las dApps y como puerta de entrada para tus usuarios a la Blockchain de LUKSO. NO se aconseja el uso de simples EOAs como cuentas, ya que son inseguras, inflexibles y no rastrean los activos entrantes. Si necesitas una comprensión más general de por qué construimos nuestras cuentas a nivel de contrato inteligente, te aconsejamos que leas sobre el concepto de [Ecosistema LUKSO](https://medium.com/lukso/lukso-ecosystem-part-1-4c3f5d67b081).

:::tip
Todas las guías de esta sección incluyen fragmentos de código que pueden consultarse en [`área-de-pruebas-Lukso`](https://github.com/lukso-network/lukso-playground) para facilitar el aprendizaje. Puedes ejecutar el código como archivos JavaScript independientes en la terminal o en el navegador utilizando la página correspondiente de [StackBlitz](https://stackblitz.com/github/lukso-network/lukso-playground).


## UP en 1-2-3

Este pequeño tutorial te muestra cómo desplegar e interactuar con un Perfil Universal.
Para maximizar el aprendizaje, puedes:

- ejecutar este tutorial en la consola del [explorador de perfiles](https://l16.universalprofile.cloud),
- clonar el repositorio [`app-react-up-ejemplo`](https://github.com/Hugoo/up-sample-react-app) y trabajar en él,
- escribir tus propios fragmentos de código JavaScript o TypeScript encima, y
- consultar la [app demo](https://hugoo.github.io/up-sample-react-app/) y experimentar con ella.

:::info
El [explorador de perfiles](https://l16.universalprofile.cloud) tiene todas las entidades necesarias bajo el objeto `contratos`. Echa un vistazo a los diferentes perfiles y activos con los que quieras experimentar dentro de tu código.
:::

:::note
Utilizaremos el paquete NPM [`@erc725/erc725.js`](../tools/erc725js/getting-started) para acceder rápidamente a la lectura de claves, valores y ABIs.
:::

#### Genera una clave que controlará tu Perfil Universal.

```js title="Cargar web3"
import Web3 from 'web3';

const web3 = new Web3('https://rpc.l16.lukso.network');

const myDummyPassword = 'miclave';

// Aquí intentamos cargar una clave ya creada desde el localstorage
web3.eth.accounts.wallet.load(myDummyPassword);

// Si no existe ninguna, creamos una nueva clave
if (!web3.eth.accounts.wallet.length) {
  web3.eth.accounts.wallet.create(1);
  web3.eth.accounts.wallet.save(myDummyPassword);

  // A continuación, registramos la dirección y enviamos LYX de prueba desde el Grifo L16 aquí: http://faucet.l16.lukso.network
  console.log('La nueva dirección de mi llave ', web3.eth.accounts.wallet[0].address);

  // Si ya tenemos una llave creada la mostramos, con su saldo actual
} else {
  const myKeyAddress = web3.eth.accounts.wallet[0].address;

  console.log('Loaded existing key address ', myKeyAddress);
  console.log(
    'Saldo ',
    web3.utils.fromWei(await web3.eth.getBalance(myKeyAddress), 'ether'),
    'LYXt',
  );
}

// Alto aquí si nuestra llave ya está creada y financiada
if (!myKeyAddress) return;
```

#### Financie el Perfil Universal utilizando el [Grifo L16](http://faucet.l16.lukso.network).

#### Implementa tus contratos inteligentes UP usando [`@lukso/lsp-factory.js`](../tools/lsp-factoryjs/getting-started).

```js title="Implementación y configuración de contratos con lsp-factory.js"
import { LSPFactory } from '@lukso/lsp-factory.js';

// Inicializamos el LSPFactory con el endpoint RPC de la cadena correcta y una clave privada desde la que desplegaremos las UPs
const lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {
  chainId: 2828, // chain Id de la L16
  deployKey: web3.eth.accounts.wallet[0].privateKey,
});

const deployedContracts = await lspFactory.LSP3UniversalProfile.deploy({
  controllerAddresses: [myKeyAddress], //nuestra clave estará controlando nuestra UP al principio
  lsp3Profile: {
    name: 'Mi Perfil Universal',
    description: 'Mi Genial Perfil Universal',
    profileImage: [fileBlob], // ¿Has subido alguna imagen?
    backgroundImage: [],
    tags: ['Perfil Público'],
    links: [
      {
        title: 'Mi Sitio web',
        url: 'http://mi-sitio-web.com',
      },
    ],
  },
});

// Obtener la dirección UP
const myUPAddress = deployedContracts.ERC725Account.address;
// 0xB46BBD556589565730C06bB4B7454B1596c9E70A
```

#### Leer las claves y valores del contrato inteligente UP ERC725Y con [`@erc725/erc725.js`](../tools/erc725js/getting-started).

```js title="Leer claves/valores ERC725 de Perfil Universal con erc725.js"
import { ERC725 } from '@erc725/erc725.js';

// Parte del LSP3-UniversalProfile Schema
// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md
const schema = [
  {
    name: 'SupportedStandards:LSP3UniversalProfile',
    key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',
    keyType: 'Mapping',
    valueContent: '0xabe425d6',
    valueType: 'bytes',
  },
  {
    name: 'LSP3Profile',
    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    keyType: 'Singleton',
    valueContent: 'JSONURL',
    valueType: 'bytes',
  },
  {
    name: 'LSP1UniversalReceiverDelegate',
    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',
    keyType: 'Singleton',
    valueContent: 'Address',
    valueType: 'address',
  },
];

const provider = new Web3.providers.HttpProvider(
  'https://rpc.l16.lukso.network',
);

const erc725 = new ERC725(schema, myUPAddress, provider);
const config = {
  ipfsGateway: 'https://2eff.lukso.dev/ipfs/',
};

const data = await erc725.fetchData();

console.log(data);
```

```json title="console.log(data)"
{
  "SupportedStandards:LSP3UniversalProfile": "0xabe425d6",
  "LSP3Profile": {
    "LSP3Profile": {
      "name": "Mi Perfil Universal",
      "description": "Mi Genial Perfil Universal",
      "backgroundImage": [],
      "tags": ["Perfil Público"],
      "links": [
        {
          "title": "Mi Sitio web",
          "url": "http://my-website.com"
        }
      ]
    }
  },
  "LSP1UniversalReceiverDelegate": "0x9A668677384CD4F5c49Cb057f0cEB2b783Ed670F"
}
```

#### Interactúa directamente con cualquier contrato inteligente a través de tu UP, cargando las ABIs de [`@lukso/lsp-smart-contracts`](https://www.npmjs.com/package/@lukso/lsp-smart-contracts).

```js title="Interactúa directamente a través de tu UP"
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';

const myUP = new web3.eth.Contract(UniversalProfile.abi, erc725Address);

const keyManagerAddress = await myUP.methods.owner().call();

console.log(keyManagerAddress);
// e.g. 0x72662E4da74278430123cE51405c1e7A1B87C294

const myKeyManager = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);

// Configura los datos en tu propia UP, a través del gestor de claves
const abi = myUP.methods
  .setData(
    ['0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'], // LSP3Profile
    [
      '0x6f357c6ad6c04598b25d41b96fb88a8c8ec4f4c3de2dc9bdaab7e71f40ed012b84d0c126697066733a2f2f516d6262447348577a4d4d724538594345766e3342633254706756793176535736414d3946376168595642573874',
    ], // JSONURL cifrado: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl
  )
  .encodeABI();

// envía tu tx a la blockchain, desde la dirección de la clave de control, a través del gestor de claves
await myKeyManager.methods.execute(abi).send({
  from: web3.eth.accounts.wallet[0].address,
  gas: 200_000,
  gasPrice: web3.utils.toWei('20', 'gwei'),
});

// O interactúa con otro contrato
let myOtherSC = new web3.eth.Contract(MyOtherSC.abi, myOtherSCAddress);

// obtén el ABI de la llamada en el otro contrato
let abi = myOtherSC.methods.myCoolfunction('dummyParameter').encodeABI();

// llama a la función ejecutar en tu UP (operation = 0 = CALL, to, value, calldata)
abi = myUP.methods.execute(0, myOtherSCAddress, 0, abi).encodeABI();

// envía tu tx a la blockchain, desde la dirección de la llave de control, a través del gestor de llaves
myKeyManager.methods.execute(abi).send({
  from: web3.eth.accounts.wallet[0].address,
  gas: 200_000,
  gasPrice: web3.utils.toWei(20, 'gwei'),
});
```