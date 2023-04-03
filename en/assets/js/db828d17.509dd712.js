"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8326],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,s(s({ref:a},d),{},{components:t})):n.createElement(f,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5451:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={id:"getting-started",title:"Primeros Pasos",sidebar_position:1},s=void 0,l={unversionedId:"es/guides/getting-started",id:"es/guides/getting-started",title:"Primeros Pasos",description:"Aqu\xed encontrar\xe1s tutoriales y herramientas que te ayudar\xe1n a construir en LUKSO. Como LUKSO es una Blockchain basada en EVM, todas las herramientas y tutoriales para Ethereum tambi\xe9n funcionan en LUKSO. Si necesita conocimientos sobre EVM y contratos inteligentes, te recomendamos que eches un vistazo a estos magn\xedficos recursos de la Fundaci\xf3n Ethereum.",source:"@site/docs/es/guides/getting-started.md",sourceDirName:"es/guides",slug:"/es/guides/getting-started",permalink:"/lukso-es/en/es/guides/getting-started",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/guides/getting-started.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Primeros Pasos",sidebar_position:1},sidebar:"guidesSidebar",next:{title:"Instalar la extensi\xf3n UP para el navegador",permalink:"/lukso-es/en/es/guides/browser-extension/install-browser-extension"}},i={},c=[{value:"Genera una clave que controlar\xe1 tu Perfil Universal.",id:"genera-una-clave-que-controlar\xe1-tu-perfil-universal",level:4},{value:"Financie el Perfil Universal utilizando el Grifo L16.",id:"financie-el-perfil-universal-utilizando-el-grifo-l16",level:4},{value:"Implementa tus contratos inteligentes UP usando <code>@lukso/lsp-factory.js</code>.",id:"implementa-tus-contratos-inteligentes-up-usando-luksolsp-factoryjs",level:4},{value:"Leer las claves y valores del contrato inteligente UP ERC725Y con <code>@erc725/erc725.js</code>.",id:"leer-las-claves-y-valores-del-contrato-inteligente-up-erc725y-con-erc725erc725js",level:4},{value:"Interact\xfaa directamente con cualquier contrato inteligente a trav\xe9s de tu UP, cargando las ABIs de <code>@lukso/lsp-smart-contracts</code>.",id:"interact\xfaa-directamente-con-cualquier-contrato-inteligente-a-trav\xe9s-de-tu-up-cargando-las-abis-de-luksolsp-smart-contracts",level:4}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aqu\xed encontrar\xe1s tutoriales y herramientas que te ayudar\xe1n a construir en LUKSO. Como LUKSO es una Blockchain basada en EVM, todas las herramientas y tutoriales para Ethereum tambi\xe9n funcionan en LUKSO. Si necesita conocimientos sobre EVM y contratos inteligentes, te recomendamos que eches un vistazo a ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/learning-tools/"},"estos magn\xedficos recursos de la Fundaci\xf3n Ethereum"),"."),(0,r.kt)("p",null,"A diferencia de la mayor\xeda de las cadenas EVM, en LUKSO se te anima a utilizar principalmente ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/universal-profile/introduction"},"Perfiles Universales")," como soluci\xf3n para crear cuentas para las dApps y como puerta de entrada para tus usuarios a la Blockchain de LUKSO. NO se aconseja el uso de simples EOAs como cuentas, ya que son inseguras, inflexibles y no rastrean los activos entrantes. Si necesitas una comprensi\xf3n m\xe1s general de por qu\xe9 construimos nuestras cuentas a nivel de contrato inteligente, te aconsejamos que leas sobre el concepto de ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/lukso/lukso-ecosystem-part-1-4c3f5d67b081"},"Ecosistema LUKSO"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Todas las gu\xedas de esta secci\xf3n incluyen fragmentos de c\xf3digo que pueden consultarse en ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-playground"},(0,r.kt)("inlineCode",{parentName:"a"},"lukso-playground"))," para facilitar el aprendizaje. Puedes ejecutar el c\xf3digo como archivos JavaScript independientes en la terminal o en el navegador utilizando la p\xe1gina correspondiente de ",(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/lukso-network/lukso-playground"},"StackBlitz"),"."),(0,r.kt)("h2",{parentName:"admonition",id:"up-en-1-2-3"},"UP en 1-2-3"),(0,r.kt)("p",{parentName:"admonition"},"Este peque\xf1o tutorial te muestra c\xf3mo desplegar e interactuar con un Perfil Universal.\nPara maximizar el aprendizaje, puedes:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"ejecutar este tutorial en la consola del ",(0,r.kt)("a",{parentName:"li",href:"https://l16.universalprofile.cloud"},"explorador de perfiles"),","),(0,r.kt)("li",{parentName:"ul"},"clonar el repositorio ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Hugoo/up-sample-react-app"},(0,r.kt)("inlineCode",{parentName:"a"},"app-react-up-ejemplo"))," y trabajar en \xe9l,"),(0,r.kt)("li",{parentName:"ul"},"escribir tus propios fragmentos de c\xf3digo JavaScript o TypeScript encima, y"),(0,r.kt)("li",{parentName:"ul"},"consultar la ",(0,r.kt)("a",{parentName:"li",href:"https://hugoo.github.io/up-sample-react-app/"},"app demo")," y experimentar con ella."))),(0,r.kt)("p",null,"El ",(0,r.kt)("a",{parentName:"p",href:"https://l16.universalprofile.cloud"},"explorador de perfiles")," tiene todas las entidades necesarias bajo el objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"contratos"),". Echa un vistazo a los diferentes perfiles y activos con los que quieras experimentar dentro de tu c\xf3digo.\n:::"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Utilizaremos el paquete NPM ",(0,r.kt)("a",{parentName:"p",href:"../tools/erc725js/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@erc725/erc725.js"))," para acceder r\xe1pidamente a la lectura de claves, valores y ABIs.")),(0,r.kt)("h4",{id:"genera-una-clave-que-controlar\xe1-tu-perfil-universal"},"Genera una clave que controlar\xe1 tu Perfil Universal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Cargar web3"',title:'"Cargar','web3"':!0},"import Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst myDummyPassword = 'miclave';\n\n// Aqu\xed intentamos cargar una clave ya creada desde el localstorage\nweb3.eth.accounts.wallet.load(myDummyPassword);\n\n// Si no existe ninguna, creamos una nueva clave\nif (!web3.eth.accounts.wallet.length) {\n  web3.eth.accounts.wallet.create(1);\n  web3.eth.accounts.wallet.save(myDummyPassword);\n\n  // A continuaci\xf3n, registramos la direcci\xf3n y enviamos LYX de prueba desde el Grifo L16 aqu\xed: http://faucet.l16.lukso.network\n  console.log('La nueva direcci\xf3n de mi llave ', web3.eth.accounts.wallet[0].address);\n\n  // Si ya tenemos una llave creada la mostramos, con su saldo actual\n} else {\n  const myKeyAddress = web3.eth.accounts.wallet[0].address;\n\n  console.log('Loaded existing key address ', myKeyAddress);\n  console.log(\n    'Saldo ',\n    web3.utils.fromWei(await web3.eth.getBalance(myKeyAddress), 'ether'),\n    'LYXt',\n  );\n}\n\n// Alto aqu\xed si nuestra llave ya est\xe1 creada y financiada\nif (!myKeyAddress) return;\n")),(0,r.kt)("h4",{id:"financie-el-perfil-universal-utilizando-el-grifo-l16"},"Financie el Perfil Universal utilizando el ",(0,r.kt)("a",{parentName:"h4",href:"http://faucet.l16.lukso.network"},"Grifo L16"),"."),(0,r.kt)("h4",{id:"implementa-tus-contratos-inteligentes-up-usando-luksolsp-factoryjs"},"Implementa tus contratos inteligentes UP usando ",(0,r.kt)("a",{parentName:"h4",href:"../tools/lsp-factoryjs/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-factory.js")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Implementaci\xf3n y configuraci\xf3n de contratos con lsp-factory.js"',title:'"Implementaci\xf3n',y:!0,"configuraci\xf3n":!0,de:!0,contratos:!0,con:!0,'lsp-factory.js"':!0},"import { LSPFactory } from '@lukso/lsp-factory.js';\n\n// Inicializamos el LSPFactory con el endpoint RPC de la cadena correcta y una clave privada desde la que desplegaremos las UPs\nconst lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {\n  chainId: 2828, // chain Id de la L16\n  deployKey: web3.eth.accounts.wallet[0].privateKey,\n});\n\nconst deployedContracts = await lspFactory.LSP3UniversalProfile.deploy({\n  controllerAddresses: [myKeyAddress], //nuestra clave estar\xe1 controlando nuestra UP al principio\n  lsp3Profile: {\n    name: 'Mi Perfil Universal',\n    description: 'Mi Genial Perfil Universal',\n    profileImage: [fileBlob], // \xbfHas subido alguna imagen?\n    backgroundImage: [],\n    tags: ['Perfil P\xfablico'],\n    links: [\n      {\n        title: 'Mi Sitio web',\n        url: 'http://mi-sitio-web.com',\n      },\n    ],\n  },\n});\n\n// Obtener la direcci\xf3n UP\nconst myUPAddress = deployedContracts.ERC725Account.address;\n// 0xB46BBD556589565730C06bB4B7454B1596c9E70A\n")),(0,r.kt)("h4",{id:"leer-las-claves-y-valores-del-contrato-inteligente-up-erc725y-con-erc725erc725js"},"Leer las claves y valores del contrato inteligente UP ERC725Y con ",(0,r.kt)("a",{parentName:"h4",href:"../tools/erc725js/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@erc725/erc725.js")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Leer claves/valores ERC725 de Perfil Universal con erc725.js"',title:'"Leer',"claves/valores":!0,ERC725:!0,de:!0,Perfil:!0,Universal:!0,con:!0,'erc725.js"':!0},"import { ERC725 } from '@erc725/erc725.js';\n\n// Parte del LSP3-UniversalProfile Schema\n// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md\nconst schema = [\n  {\n    name: 'SupportedStandards:LSP3UniversalProfile',\n    key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',\n    keyType: 'Mapping',\n    valueContent: '0xabe425d6',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP3Profile',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n    keyType: 'Singleton',\n    valueContent: 'JSONURL',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP1UniversalReceiverDelegate',\n    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',\n    keyType: 'Singleton',\n    valueContent: 'Address',\n    valueType: 'address',\n  },\n];\n\nconst provider = new Web3.providers.HttpProvider(\n  'https://rpc.l16.lukso.network',\n);\n\nconst erc725 = new ERC725(schema, myUPAddress, provider);\nconst config = {\n  ipfsGateway: 'https://2eff.lukso.dev/ipfs/',\n};\n\nconst data = await erc725.fetchData();\n\nconsole.log(data);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="console.log(data)"',title:'"console.log(data)"'},'{\n  "SupportedStandards:LSP3UniversalProfile": "0xabe425d6",\n  "LSP3Profile": {\n    "LSP3Profile": {\n      "name": "Mi Perfil Universal",\n      "description": "Mi Genial Perfil Universal",\n      "backgroundImage": [],\n      "tags": ["Perfil P\xfablico"],\n      "links": [\n        {\n          "title": "Mi Sitio web",\n          "url": "http://my-website.com"\n        }\n      ]\n    }\n  },\n  "LSP1UniversalReceiverDelegate": "0x9A668677384CD4F5c49Cb057f0cEB2b783Ed670F"\n}\n')),(0,r.kt)("h4",{id:"interact\xfaa-directamente-con-cualquier-contrato-inteligente-a-trav\xe9s-de-tu-up-cargando-las-abis-de-luksolsp-smart-contracts"},"Interact\xfaa directamente con cualquier contrato inteligente a trav\xe9s de tu UP, cargando las ABIs de ",(0,r.kt)("a",{parentName:"h4",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Interact\xfaa directamente a trav\xe9s de tu UP"',title:'"Interact\xfaa',directamente:!0,a:!0,"trav\xe9s":!0,de:!0,tu:!0,'UP"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\n\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, erc725Address);\n\nconst keyManagerAddress = await myUP.methods.owner().call();\n\nconsole.log(keyManagerAddress);\n// e.g. 0x72662E4da74278430123cE51405c1e7A1B87C294\n\nconst myKeyManager = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);\n\n// Configura los datos en tu propia UP, a trav\xe9s del gestor de claves\nconst abi = myUP.methods\n  .setData(\n    ['0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'], // LSP3Profile\n    [\n      '0x6f357c6ad6c04598b25d41b96fb88a8c8ec4f4c3de2dc9bdaab7e71f40ed012b84d0c126697066733a2f2f516d6262447348577a4d4d724538594345766e3342633254706756793176535736414d3946376168595642573874',\n    ], // JSONURL cifrado: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl\n  )\n  .encodeABI();\n\n// env\xeda tu tx a la blockchain, desde la direcci\xf3n de la clave de control, a trav\xe9s del gestor de claves\nawait myKeyManager.methods.execute(abi).send({\n  from: web3.eth.accounts.wallet[0].address,\n  gas: 200_000,\n  gasPrice: web3.utils.toWei('20', 'gwei'),\n});\n\n// O interact\xfaa con otro contrato\nlet myOtherSC = new web3.eth.Contract(MyOtherSC.abi, myOtherSCAddress);\n\n// obt\xe9n el ABI de la llamada en el otro contrato\nlet abi = myOtherSC.methods.myCoolfunction('dummyParameter').encodeABI();\n\n// llama a la funci\xf3n ejecutar en tu UP (operation = 0 = CALL, to, value, calldata)\nabi = myUP.methods.execute(0, myOtherSCAddress, 0, abi).encodeABI();\n\n// env\xeda tu tx a la blockchain, desde la direcci\xf3n de la llave de control, a trav\xe9s del gestor de llaves\nmyKeyManager.methods.execute(abi).send({\n  from: web3.eth.accounts.wallet[0].address,\n  gas: 200_000,\n  gasPrice: web3.utils.toWei(20, 'gwei'),\n});\n")))}u.isMDXComponent=!0}}]);