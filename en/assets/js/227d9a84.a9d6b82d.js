"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),f=i,g=m["".concat(o,".").concat(f)]||m[f]||c[f]||l;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:4,title:"LSP8IdentifiableDigitalAsset"},r="LSP8IdentifiableDigitalAsset",s={unversionedId:"es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",id:"es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",title:"LSP8IdentifiableDigitalAsset",description:"Despliegue",source:"@site/docs/es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset.md",sourceDirName:"es/tools/lsp-factoryjs/classes",slug:"/es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",permalink:"/lukso-es/en/es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"LSP8IdentifiableDigitalAsset"},sidebar:"toolsSidebar",previous:{title:"LSP7DigitalAsset",permalink:"/lukso-es/en/es/tools/lsp-factoryjs/classes/lsp7-digital-asset"},next:{title:"Primeros Pasos",permalink:"/lukso-es/en/es/tools/eip191-signerjs/getting-started"}},o={},d=[{value:"Despliegue",id:"despliegue",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:3},{value:"1. <code>digitalAssetProperties</code> - Objeto",id:"1-digitalassetproperties---objeto",level:4},{value:"2. <code>options</code> - Objeto (opcional)",id:"2-options---objeto-opcional",level:4},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Ejemplo de despliegue de Activos Digitales Reactivos LSP8",id:"ejemplo-de-despliegue-de-activos-digitales-reactivos-lsp8",level:4}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp8identifiabledigitalasset"},"LSP8IdentifiableDigitalAsset"),(0,i.kt)("h2",{id:"despliegue"},"Despliegue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"lspFactory.LSP8IdentifiableDigitalAsset.deploy(digitalAssetProperties [, options]);\n")),(0,i.kt)("p",null,"Despliega un ",(0,i.kt)("a",{parentName:"p",href:"../../../standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},"Activo Digital Identificable LSP8")," Acu\xf1able."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Por defecto, LSPFactory despliega la implementaci\xf3n ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol"},(0,i.kt)("inlineCode",{parentName:"a"},"Mintable"))," de los activos digitales LSP8. Para llamar a la funci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," importe el abi ",(0,i.kt)("inlineCode",{parentName:"p"},"LSP8Mintable")," de la librer\xeda ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts"),".")),(0,i.kt)("h3",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("h4",{id:"1-digitalassetproperties---objeto"},"1. ",(0,i.kt)("inlineCode",{parentName:"h4"},"digitalAssetProperties")," - Objeto"),(0,i.kt)("p",null,"Especifica las propiedades que se establecer\xe1n en el Activo Digital LSP8 durante el despliegue."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,i.kt)("td",{parentName:"tr",align:"left"},"El nombre del token. Pasado al contrato inteligente LSP8 como par\xe1metro del constructor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"symbol"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,i.kt)("td",{parentName:"tr",align:"left"},"El s\xedmbolo del token. Pasado al contrato inteligente LSP8 como par\xe1metro del constructor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#controller-address"},(0,i.kt)("inlineCode",{parentName:"a"},"controllerAddress"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,i.kt)("td",{parentName:"tr",align:"left"},"El propietario del contrato. Pasado al par\xe1metro constructor del contrato inteligente LSP8.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"digitalAssetMetadata"))," (opcional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Objeto ","|"," Cadena"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Los metadatos ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," que se adjuntar\xe1n al contrato inteligente.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#adding-lsp4-metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"creators"))," (opcional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Conjunto"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Los metadatos ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," que se adjuntar\xe1n al contrato inteligente.")))),(0,i.kt)("h4",{id:"2-options---objeto-opcional"},"2. ",(0,i.kt)("inlineCode",{parentName:"h4"},"options")," - Objeto (opcional)"),(0,i.kt)("p",null,"Objeto que especifica c\xf3mo se desplegar\xe1 el Activo Digital LSP8"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options"},(0,i.kt)("inlineCode",{parentName:"a"},"LSP8IdentifiableDigitalAsset"))," (opcional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cadena"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Objeto gen\xe9rico de configuraci\xf3n del contrato. Toma los par\xe1metros ",(0,i.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options#version"},(0,i.kt)("inlineCode",{parentName:"a"},"version"))," y ",(0,i.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/options#version"},(0,i.kt)("inlineCode",{parentName:"a"},"deployProxy")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#reactive-deployment"},(0,i.kt)("inlineCode",{parentName:"a"},"onDeployEvents"))," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Objeto"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pasa los controladores de llamada de retorno ",(0,i.kt)("inlineCode",{parentName:"td"},"next"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"complete")," y ",(0,i.kt)("inlineCode",{parentName:"td"},"error")," para que se ejecuten cuando se disparen los eventos de despliegue. Consulta ",(0,i.kt)("a",{parentName:"td",href:"/lukso-es/en/es/tools/lsp-factoryjs/deployment/digital-asset#reactive-deployment"},(0,i.kt)("inlineCode",{parentName:"a"},"Despliegue Reactivo")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../deployment/digital-asset#ipfs-upload-options"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfsGateway"))," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cadena ","|"," Objeto"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Una URL de pasarela IPFS o un objeto que contenga opciones de configuraci\xf3n IPFS.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Puedes leer m\xe1s sobre la especificaci\xf3n del objeto ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," en ","[su p\xe1gina oficial]",".(../deployment/digital-asset.md#deployment-configuration)")),(0,i.kt)("h3",{id:"respuesta"},"Respuesta"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resuelve a un objeto que contiene detalles del contrato desplegado.")))),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Despliegue de un Activo Digital Identificable LSP8"',title:'"Despliegue',de:!0,un:!0,Activo:!0,Digital:!0,Identificable:!0,'LSP8"':!0},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy({\n  name: 'Mi token',\n  symbol: 'TKN',\n  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  digitalAssetMetadata: {\n      description: \"Activo Digital\",\n      assets: [asset],\n      images: [image],\n      icon: icon,\n      links: [{ title: \"MiActivoDigital\", url: \"mi-activo.com\" }],\n  };\n});\n/**\n{\n  LSP8IdentifiableDigitalAsset: {\n    address: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x7c7a8a2723bbdfd257f3bc0bd27edcf98d9d119f70971f80a6066449ea5922ae',\n      transactionHash: '0x05c791245a29b8cd2167bab41f56fbaf79d7a64814c1e161a2de352cead9c3fd',\n      logs: [],\n      blockNumber: 12028969,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,i.kt)("h4",{id:"ejemplo-de-despliegue-de-activos-digitales-reactivos-lsp8"},"Ejemplo de despliegue de Activos Digitales Reactivos LSP8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Despliegue de un Activo Digital Identificable Reactivo LSP8"',title:'"Despliegue',de:!0,un:!0,Activo:!0,Digital:!0,Identificable:!0,Reactivo:!0,'LSP8"':!0},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy(\n  {\n    name: 'Mi token',\n    symbol: 'TKN',\n    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  },\n  {\n    onDeployEvents: {\n      next: (deploymentEvent) => {\n        console.log(deploymentEvent);\n      },\n      error: (error) => {\n        console.error(error);\n      },\n      complete: (contracts) => {\n        console.log('Despliegue finalizado');\n        console.log(contracts.LSP8IdentifiableDigitalAsset);\n      },\n    },\n  },\n);\n\n/**\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  status: 'COMPLETADO',\n  contractAddress: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'initialize(string,string,address)',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'initialize(string,string,address)',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'PENDIENTE',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  status: 'PENDIENTE',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'transferOwnership(address)',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACCION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'transferOwnership(address)',\n  status: 'COMPLETADO',\n  receipt: {\n    ...\n  }\n}\nDespliegue finalizado\n{\n  address: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',\n  receipt: {\n    ...\n  },\n}\n*/\n")))}c.isMDXComponent=!0}}]);