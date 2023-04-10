"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,u=m["".concat(i,".").concat(g)]||m[g]||c[g]||o;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3,title:"LSP7DigitalAsset"},s="LSP7DigitalAsset",l={unversionedId:"es/tools/lsp-factoryjs/classes/lsp7-digital-asset",id:"es/tools/lsp-factoryjs/classes/lsp7-digital-asset",title:"LSP7DigitalAsset",description:"Despliegue",source:"@site/docs/es/tools/lsp-factoryjs/classes/lsp7-digital-asset.md",sourceDirName:"es/tools/lsp-factoryjs/classes",slug:"/es/tools/lsp-factoryjs/classes/lsp7-digital-asset",permalink:"/lukso-es/en/es/tools/lsp-factoryjs/classes/lsp7-digital-asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/tools/lsp-factoryjs/classes/lsp7-digital-asset.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"LSP7DigitalAsset"},sidebar:"toolsSidebar",previous:{title:"LSP4DigitalAssetMetadata",permalink:"/lukso-es/en/es/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata"},next:{title:"LSP8IdentifiableDigitalAsset",permalink:"/lukso-es/en/es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset"}},i={},p=[{value:"Despliegue",id:"despliegue",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:3},{value:"1. <code>digitalAssetProperties</code> - Objeto",id:"1-digitalassetproperties---objeto",level:4},{value:"2. <code>options</code> - Objeto (opcional)",id:"2-options---objeto-opcional",level:4},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Ejemplo de despliegue de Activos Digitales Reactivo LSP7",id:"ejemplo-de-despliegue-de-activos-digitales-reactivo-lsp7",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp7digitalasset"},"LSP7DigitalAsset"),(0,r.kt)("h2",{id:"despliegue"},"Despliegue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"lspFactory.LSP7DigitalAsset.deploy(digitalAssetProperties [, options]);\n")),(0,r.kt)("p",null,"Despliega un ","[Activo digital LSP7]"," Acu\xf1able (../../../standards/nft-2.0/LSP7-Digital-Asset)."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Por defecto, LSPFactory despliega la implementaci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP7DigitalAsset/presets/LSP7Mintable.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Acu\xf1able"))," de los activos digitales LSP7. Para llamar a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," importe el abi ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable")," de la librer\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts"),".")),(0,r.kt)("h3",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("h4",{id:"1-digitalassetproperties---objeto"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"digitalAssetProperties")," - Objeto"),(0,r.kt)("p",null,"Especifica las propiedades que deben establecerse en el activo digital LSP7 durante el despliegue."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,r.kt)("inlineCode",{parentName:"a"},"name"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,r.kt)("td",{parentName:"tr",align:"left"},"El nombre del token. Pasado al contrato inteligente LSP7 como par\xe1metro del constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,r.kt)("inlineCode",{parentName:"a"},"symbol"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,r.kt)("td",{parentName:"tr",align:"left"},"El s\xedmbolo del token. Pasado al contrato inteligente LSP7 como par\xe1metro del constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#controller-address"},(0,r.kt)("inlineCode",{parentName:"a"},"controllerAddress"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,r.kt)("td",{parentName:"tr",align:"left"},"El propietario del contrato. Pasado al par\xe1metro constructor del contrato inteligente LSP7.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#lsp7-nft-20"},(0,r.kt)("inlineCode",{parentName:"a"},"isNFT"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Booleano"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Especifica si el token debe ser fungible estableciendo el valor ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/docs/ILSP7DigitalAsset.md#decimals"},"decimales LSP7")," en 18. Pasado al contrato inteligente LSP7 como par\xe1metro constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"digitalAssetMetadata"))," (opcional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Objeto ","|"," Cadena"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los metadatos ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," que se adjuntar\xe1n al contrato inteligente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#adding-lsp4-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"creators"))," (opcional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Conjunto"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los metadatos ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," que se adjuntar\xe1n al contrato inteligente.")))),(0,r.kt)("h4",{id:"2-options---objeto-opcional"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"options")," - Objeto (opcional)"),(0,r.kt)("p",null,"Objeto que especifica c\xf3mo se desplegar\xe1 el Activo Digital LSP7"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP7DigitalAsset"))," (opcional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Objeto gen\xe9rico de configuraci\xf3n del contrato. Toma los par\xe1metros ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," y ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"onDeployEvents"))," (opcional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Objeto"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pasa los controladores de llamada de retorno ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"complete")," y ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," para que se ejecuten cuando se disparen los eventos de despliegue. Consulta ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/digital-asset#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"Despliegue Reactivo")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#ipfs-upload-options"},(0,r.kt)("inlineCode",{parentName:"a"},"ipfsGateway"))," (opcional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cadena ","|"," Objeto"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Una URL de pasarela IPFS o un objeto que contenga opciones de configuraci\xf3n IPFS.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Puedes leer m\xe1s sobre la especificaci\xf3n del objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," en ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/digital-asset#deployment-configuration"},"su p\xe1gina oficial"))),(0,r.kt)("h3",{id:"respuesta"},"Respuesta"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resuelve a un objeto que contiene detalles del contrato desplegado.")))),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Desplegar un Activo Digital LSP7"',title:'"Desplegar',un:!0,Activo:!0,Digital:!0,'LSP7"':!0},"await lspFactory.LSP7DigitalAsset.deploy({\n  name: 'Mi token',\n  symbol: 'TKN',\n  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  isNFT: true,\n});\n/**\n{\n  LSP7DigitalAsset: {\n    address: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x1b44bd472b1b202620a78847138692828149e7f692763c884d99a9adf0b8a94c',\n      transactionHash: '0xe923acc3431ef24fc11103b53b4219611d0f72e59734fc3c7db8da3eb4564844',\n      logs: [],\n      blockNumber: 12028918,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,r.kt)("h4",{id:"ejemplo-de-despliegue-de-activos-digitales-reactivo-lsp7"},"Ejemplo de despliegue de Activos Digitales Reactivo LSP7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Despliegue de un Activo Digital Reactivo LSP7"',title:'"Despliegue',de:!0,un:!0,Activo:!0,Digital:!0,Reactivo:!0,'LSP7"':!0},"await lspFactory.LSP7DigitalAsset.deploy(\n  {\n    name: 'Mi token',\n    symbol: 'TKN',\n    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n    isNFT: true,\n  },\n  {\n    onDeployEvents: {\n      next: (deploymentEvent) => {\n        console.log(deploymentEvent);\n      },\n      error: (error) => {\n        console.error(error);\n      },\n      complete: (contracts) => {\n        console.log('Despliegue finalizado');\n        console.log(contracts.LSP7DigitalAsset);\n      },\n    },\n  },\n);\n\n/**\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP7DigitalAsset',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP7DigitalAsset',\n  status: 'COMPLETADO',\n  contractAddress: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'initialize(string,string,address,bool)',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'initialize(string,string,address,bool)',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  status: 'PENDIENTE',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'transferOwnership(address)',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'transferOwnership(address)',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\nDespliegue finalizado\n{\n  address: '0x97053C386eaa49d6eAD7477220ca04EFcD857dde',\n  receipt: {\n    ...\n  },\n}\n*/\n")))}c.isMDXComponent=!0}}]);