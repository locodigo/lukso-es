"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2988],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(7294),n=t(6010);const s="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>S});var a=t(7462),n=t(7294),s=t(6010),o=t(2466),i=t(6775),l=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function d(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??p(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=d(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[l,c]=f({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=l??p;return m({value:e,tabValues:s})?e:null})();(0,n.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,s]),tabValues:s}}var b=t(2389);const h="tabList__CuJ",k="tabItem_LNqP";function P(e){let{className:r,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const r=e.currentTarget,t=u.indexOf(r),a=c[t].value;a!==i&&(p(r),l(a))},m=e=>{var r;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}null==(r=t)||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r)},c.map((e=>{let{value:r,label:t,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===r})}),t??r)})))}function w(e){let{lazy:r,children:t,selectedValue:a}=e;if(r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function g(e){const r=v(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h)},n.createElement(P,(0,a.Z)({},e,r)),n.createElement(w,(0,a.Z)({},e,r)))}function S(e){const r=(0,b.Z)();return n.createElement(g,(0,a.Z)({key:String(r)},e))}},5362:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(7462),n=(t(7294),t(3905)),s=t(4866),o=t(5162);const i={sidebar_label:"Comprobar si una direcci\xf3n es un UP",sidebar_position:6},l="\xbfC\xf3mo comprobar si una direcci\xf3n es de un Perfil Universal?",c={unversionedId:"es/guides/universal-profile/check-if-address-is-universal-profile",id:"es/guides/universal-profile/check-if-address-is-universal-profile",title:"\xbfC\xf3mo comprobar si una direcci\xf3n es de un Perfil Universal?",description:"Es posible que quieras leer primero la p\xe1gina Detecci\xf3n est\xe1ndar.",source:"@site/docs/es/guides/universal-profile/check-if-address-is-universal-profile.md",sourceDirName:"es/guides/universal-profile",slug:"/es/guides/universal-profile/check-if-address-is-universal-profile",permalink:"/lukso-es/es/guides/universal-profile/check-if-address-is-universal-profile",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/guides/universal-profile/check-if-address-is-universal-profile.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Comprobar si una direcci\xf3n es un UP",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Interactuar con Contratos",permalink:"/lukso-es/es/guides/universal-profile/interact-with-contracts"}},u={},p=[{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Paso 1 - Comprobar el formato de la direcci\xf3n",id:"paso-1---comprobar-el-formato-de-la-direcci\xf3n",level:2},{value:"Paso 2 - Comprobar si el contrato soporta la interfaz <code>LSP0ERC725Account</code> usando ERC165",id:"paso-2---comprobar-si-el-contrato-soporta-la-interfaz-lsp0erc725account-usando-erc165",level:2},{value:"Paso 3 - Comprobar el est\xe1ndar soportado",id:"paso-3---comprobar-el-est\xe1ndar-soportado",level:2},{value:"Final Code",id:"final-code",level:2}],d={toc:p};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"c\xf3mo-comprobar-si-una-direcci\xf3n-es-de-un-perfil-universal"},"\xbfC\xf3mo comprobar si una direcci\xf3n es de un Perfil Universal?"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Es posible que quieras leer primero la p\xe1gina ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/standard-detection"},"Detecci\xf3n est\xe1ndar"),".")),(0,n.kt)("p",null,"Para comprobar si una direcci\xf3n es un ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/introduction"},"Perfil Universal")," necesitamos realizar 3 verificaciones:"),(0,n.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,n.kt)("p",null,"Aseg\xfarate de tener instaladas las siguientes dependencias antes de empezar este tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O bien ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,n.kt)("inlineCode",{parentName:"a"},"web3.js"))," o bien ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,n.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,n.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,n.kt)("h2",{id:"paso-1---comprobar-el-formato-de-la-direcci\xf3n"},"Paso 1 - Comprobar el formato de la direcci\xf3n"),(0,n.kt)("p",null,"Esta primera prueba b\xe1sica se puede realizar mediante una expresi\xf3n regular o una funci\xf3n de una librer\xeda de terceros. Por ejemplo, as\xed es como podemos conseguirlo utilizando Web3.js ",(0,n.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html#isaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"isAddress")),":"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isAddress } from 'web3-utils';\n\nif (!isAddress(address)) {\n  throw new Error('Direcci\xf3n no v\xe1lida');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isAddress } from 'ethers';\n\nif (!isAddress(address)) {\n  throw new Error('Direcci\xf3n no v\xe1lida');\n}\n")))),(0,n.kt)("h2",{id:"paso-2---comprobar-si-el-contrato-soporta-la-interfaz-lsp0erc725account-usando-erc165"},"Paso 2 - Comprobar si el contrato soporta la interfaz ",(0,n.kt)("inlineCode",{parentName:"h2"},"LSP0ERC725Account")," usando ERC165"),(0,n.kt)("p",null,"Esta es la siguiente verificaci\xf3n que asegura que tratamos con un contrato inteligente que soporta la interfaz ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP0ERC725Account")," (",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"EIP-165"),"). Para ello tenemos que crear una instancia del contrato ",(0,n.kt)("inlineCode",{parentName:"p"},"universalProfile")," y llamar al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"supportsInterface(...)"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Los Perfiles Universales heredan ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165"),", por lo que al crear una instancia del contrato de Perfil Universal se tiene acceso al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"supportsInterface(...)"),".")),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst universalProfileAddress = '0x...'; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();\n// true o false -> si es false, esta direcci\xf3n no es un Perfil Universal.\nif (!supportsLSP0Interface) {\n  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nconst universalProfileAddress = '0x...'; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);\n// true o false -> si es false, esta direcci\xf3n no es un Perfil Universal.\nif (!supportsLSP0Interface) {\n  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');\n}\n")))),(0,n.kt)("h2",{id:"paso-3---comprobar-el-est\xe1ndar-soportado"},"Paso 3 - Comprobar el est\xe1ndar soportado"),(0,n.kt)("p",null,"Por \xfaltimo, pero no menos importante, debemos comprobar el est\xe1ndar ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP3UniversalProfile"),". Para ello debemos llamar a ",(0,n.kt)("inlineCode",{parentName:"p"},"getData")," con la clave ",(0,n.kt)("inlineCode",{parentName:"p"},"SupportedStandards:LSP3UniversalProfile"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Los Perfiles Universales heredan ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y"),", por lo que al crear una instancia del contrato de Perfil Universal se tiene acceso al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"getData(..)"),".")),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst universalProfileAddress = \"0x...\"; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('La direcci\xf3n no es compatible con el est\xe1ndar LSP3UniversalProfile');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nconst universalProfileAddress = '0x...'; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('La direcci\xf3n no es compatible con el est\xe1ndar LSP3UniversalProfile');\n}\n")))),(0,n.kt)("h2",{id:"final-code"},"Final Code"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nif (!web3.utils.isAddress(address)) {\n  throw new Error('Direcci\xf3n no v\xe1lida');\n}\n\n// We assume that the contract is a Universal Profile\nconst universalProfileAddress = '0x...'; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new web3.eth.Contract(UniversalProfile.abi, universalProfileAddress);\n\nconst supportsLSP0Interface = await universalProfile.methods.supportsInterface(INTERFACE_IDS.LSP0ERC725Account).call();\n// true o false -> si es false, esta direcci\xf3n no es un Perfil Universal.\nif (!supportsLSP0Interface) {\n  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');\n}\n\nconst supportedStandard = await unviersalProfile.methods['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key).call();\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('La direcci\xf3n no es compatible con el est\xe1ndar LSP3UniversalProfile');\n}\n"))),(0,n.kt)(o.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport { INTERFACE_IDS, SupportedStandards } from '@lukso/lsp-smart-contracts/constants';\nimport { isAddress, ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nif (!isAddress(address)) {\n  throw new Error('Direcci\xf3n no v\xe1lida');\n}\n\n// We assume that the contract is a Universal Profile\nconst universalProfileAddress = '0x...'; // La direcci\xf3n del contrato que est\xe1s examinando\nconst unviersalProfile = new ethers.Contract(universalProfileAddress, UniversalProfile.abi, provider);\n\nconst supportsLSP0Interface = await universalProfile.supportsInterface(INTERFACE_IDS.LSP0ERC725Account);\n// true o false -> si es false, esta direcci\xf3n no es un Perfil Universal.\nif (!supportsLSP0Interface) {\n  throw new Error('El contrato no admite la interfaz LSP0ERC725Account');\n}\n\nconst supportedStandard = await unviersalProfile['getData(bytes32)'](SupportedStandards.LSP3UniversalProfile.key);\n\nif (supportedStandard !== SupportedStandards.LSP3UniversalProfile.value) {\n  throw new Error('La direcci\xf3n no es compatible con el est\xe1ndar LSP3UniversalProfile');\n}\n")))))}m.isMDXComponent=!0}}]);