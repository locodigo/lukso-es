"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),o=a(6775),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,c]=b({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var v=a(2389);const k="tabList__CuJ",f="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(p(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function P(e){const t=(0,v.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},9263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),l=a(5162);const o={sidebar_label:"Crear un Activo Digital LSP7 (Token)",sidebar_position:1},i="Crear un Activo Digital LSP7 (Token)",c={unversionedId:"es/guides/digital-assets/create-lsp7-digital-asset",id:"es/guides/digital-assets/create-lsp7-digital-asset",title:"Crear un Activo Digital LSP7 (Token)",description:"Esta gu\xeda te ense\xf1ar\xe1 a crear un [Contrato de Activos Digitales LSP7].(../../standards/nft-2.0/LSP7-Digital-Asset.md).",source:"@site/docs/es/guides/digital-assets/create-lsp7-digital-asset.md",sourceDirName:"es/guides/digital-assets",slug:"/es/guides/digital-assets/create-lsp7-digital-asset",permalink:"/lukso-es/es/guides/digital-assets/create-lsp7-digital-asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/guides/digital-assets/create-lsp7-digital-asset.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Crear un Activo Digital LSP7 (Token)",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Aceptar y Rechazar Activos Digitales",permalink:"/lukso-es/es/guides/universal-receiver-delegate/accept-reject-assets"},next:{title:"Acu\xf1ar un Activo Digital LSP7 (Token)",permalink:"/lukso-es/es/guides/digital-assets/mint-lsp7-digital-asset"}},u={},p=[{value:"Desplegar un contrato de Activos Digitales LSP7",id:"desplegar-un-contrato-de-activos-digitales-lsp7",level:2},{value:"Paso 1 - Configuraci\xf3n de importaciones y constantes",id:"paso-1---configuraci\xf3n-de-importaciones-y-constantes",level:3},{value:"Paso 2 - Instanciar contratos",id:"paso-2---instanciar-contratos",level:3},{value:"Paso 3 - Enviar la transacci\xf3n",id:"paso-3---enviar-la-transacci\xf3n",level:3},{value:"C\xf3digo final",id:"c\xf3digo-final",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crear-un-activo-digital-lsp7-token"},"Crear un Activo Digital LSP7 (Token)"),(0,r.kt)("p",null,"Esta gu\xeda te ense\xf1ar\xe1 a crear un ","[Contrato de Activos Digitales LSP7]",".(../../standards/nft-2.0/LSP7-Digital-Asset.md)."),(0,r.kt)("h2",{id:"desplegar-un-contrato-de-activos-digitales-lsp7"},"Desplegar un contrato de Activos Digitales LSP7"),(0,r.kt)("p",null,"Utilizaremos una implementaci\xf3n espec\xedfica de LSP7, denominada ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable"),". Permite al implementador del contrato acu\xf1ar nuevos tokens."),(0,r.kt)("p",null,"Aseg\xfarate de tener instaladas las siguientes dependencias:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O bien ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.js"))," o bien ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,r.kt)("h3",{id:"paso-1---configuraci\xf3n-de-importaciones-y-constantes"},"Paso 1 - Configuraci\xf3n de importaciones y constantes"),(0,r.kt)("p",null,"En este punto necesitar\xe1s una clave privada para poder desplegar un contrato ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable"),".\nImportaremos ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable")," para obtener el ",(0,r.kt)("em",{parentName:"p"},"ABI")," y el ",(0,r.kt)("em",{parentName:"p"},"bytecode")," del contrato que ser\xe1 desplegado."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\n// inicializa tu EOA\nconst privateKey = '0x...';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\n\n// configura tu EOA\nconst privateKey = '0x...';\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n")))),(0,r.kt)("h3",{id:"paso-2---instanciar-contratos"},"Paso 2 - Instanciar contratos"),(0,r.kt)("p",null,"En este punto, el contrato ",(0,r.kt)("inlineCode",{parentName:"p"},"LPS7Mintable")," se est\xe1 preparando para su implementaci\xf3n."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myToken = new web3.eth.Contract(LSP7Mintable.abi, {\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const lsp7Factory = new ethers.ContractFactory(\n  LSP7Mintable.abi,\n  LSP7Mintable.bytecode,\n);\n")))),(0,r.kt)("h3",{id:"paso-3---enviar-la-transacci\xf3n"},"Paso 3 - Enviar la transacci\xf3n"),(0,r.kt)("p",null,"Por \xfaltimo, despliega el contrato."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Implementaci\xf3n del contrato de Activos Digitales LSP7"',title:'"Implementaci\xf3n',del:!0,contrato:!0,de:!0,Activos:!0,Digitales:!0,'LSP7"':!0},"await myToken.deploy({\n    data: LSP7Mintable.bytecode,\n    arguments: [\n      'My LSP7 Token', // nombre del token\n      'LSP7', // s\xedmblo del token\n      account.address, // nuevo propietario, que acu\xf1ar\xe1 posteriormente\n      false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)\n    ],\n  })\n  .send({ from: account.address });\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Implementaci\xf3n del contrato de Activos Digitales LSP7"',title:'"Implementaci\xf3n',del:!0,contrato:!0,de:!0,Activos:!0,Digitales:!0,'LSP7"':!0},"const myToken = await lsp7Factory.connect(myEOA).deploy(\n  'My LSP7 Token', // nombre del token\n  'LSP7', // s\xedmbolo del token\n  myEOA.address, // nuevo propietario, que acu\xf1ar\xe1 posteriormente\n  false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)\n);\n")))),(0,r.kt)("h3",{id:"c\xf3digo-final"},"C\xf3digo final"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\n// inicializa tu EOA\nconst privateKey = '0x...';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\n// create a contract instance\nconst myToken = new web3.eth.Contract(LSP7Mintable.abi, {\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n\n// desplegar el contrato de token\nawait myToken.deploy({\n    data: LSP7Mintable.bytecode,\n    arguments: [\n      'My LSP7 Token', // nombre del token\n      'LSP7', // s\xedmbolo del token\n      account.address, // nuevo propietario, que acu\xf1ar\xe1 posteriormente\n      false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)\n    ],\n  })\n  .send({ from: account.address });\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\n\n// configura tu EOA\nconst privateKey = '0x...';\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n\n// create an instance of the token contract\nconst lsp7Factory = new ethers.ContractFactory(\n  LSP7Mintable.abi,\n  LSP7Mintable.bytecode,\n);\n\n// desplegar el contrato de token\nconst myToken = await lsp7Factory.connect(myEOA).deploy(\n  'My LSP7 Token', // nombre del token\n  'LSP7', // s\xedmbolo del token\n  myEOA.address, // nuevo propietario, que acu\xf1ar\xe1 posteriormente\n  false, // isNonDivisible = TRUE, significa NO divisible, decimales = 0)\n);\n")))))}m.isMDXComponent=!0}}]);