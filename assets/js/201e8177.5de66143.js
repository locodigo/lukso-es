"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const a={sidebar_position:2},o="Esquemas",i={unversionedId:"es/tools/erc725js/schemas",id:"es/tools/erc725js/schemas",title:"Esquemas",description:"La librer\xeda @erc725/erc725.js contiene una serie de esquemas est\xe1ndar LSP ERC725 JSON schemas.",source:"@site/docs/es/tools/erc725js/schemas.md",sourceDirName:"es/tools/erc725js",slug:"/es/tools/erc725js/schemas",permalink:"/lukso-es/es/tools/erc725js/schemas",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/tools/erc725js/schemas.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolsSidebar",previous:{title:"Primeros Pasos",permalink:"/lukso-es/es/tools/erc725js/getting-started"},next:{title:"Proveedores",permalink:"/lukso-es/es/tools/erc725js/providers"}},l={},c=[{value:"Esquemas est\xe1ndar LSP",id:"esquemas-est\xe1ndar-lsp",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"esquemas"},"Esquemas"),(0,s.kt)("p",null,"La librer\xeda ",(0,s.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," contiene una serie de esquemas est\xe1ndar ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md"},"LSP ERC725 JSON schemas"),"."),(0,s.kt)("p",null,"Los esquemas permiten a erc725.js saber c\xf3mo decodificar y codificar los datos escritos en un contrato inteligente ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-725"},"ERC725Y"),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"A continuaci\xf3n se puede ver una referencia r\xe1pida de las claves utilizadas en las definiciones de esquemas.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md"},"Documentaci\xf3n oficial"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),": Un nombre arbitrario"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key"),": El hash sha3 del nombre"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"keyType"),": Uno de los keyType soportados por erc725"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"valueType"),": El tipo de los datos de contenido almacenados para su descodificaci\xf3n"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"valueContent"),": El tipo de contenido descrito para el an\xe1lisis sint\xe1ctico")),(0,s.kt)("h2",{id:"esquemas-est\xe1ndar-lsp"},"Esquemas est\xe1ndar LSP"),(0,s.kt)("p",null,"Los esquemas m\xe1s comunes de las ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/tree/main/LSPs"},"Propuestas de Est\xe1ndares LUKSO")," est\xe1n disponibles en la carpeta ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/erc725.js/tree/develop/schemas"},(0,s.kt)("inlineCode",{parentName:"a"},"schemas/")),"."),(0,s.kt)("p",null,"Los LSP que se proporcionan actualmente son:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LSP1UniversalReceiverDelegate.json\nLSP3UniversalProfileMetadata.json\nLSP4DigitalAssetLegacy.json\nLSP4DigitalAsset.json\nLSP5ReceivedAssets.json\nLSP6KeyManager.json\nLSP9Vault.json\nLSP10ReceivedVaults.json\nLSP12IssuedAssets.json\n")),(0,s.kt)("p",null,"Puedes importarlos desde:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import LSP3 from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\nimport LSP5 from '@erc725/erc725.js/schemas/LSP5ReceivedAssets.json';\n// ...\n\n// Util\xedzalos posteriormente en la instanciaci\xf3n\nconst myErc725Contract = new ERC725js(LSP3, address, web3.currentProvider);\n")))}u.isMDXComponent=!0}}]);