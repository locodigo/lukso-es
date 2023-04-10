"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8436],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return t?n.createElement(v,l(l({ref:a},u),{},{components:t})):n.createElement(v,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>P});var n=t(7462),r=t(7294),s=t(6010),l=t(2466),o=t(6775),i=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[i,c]=v({queryString:t,groupId:n}),[d,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,u.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var f=t(2389);const y="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:a,block:t,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const a=e.currentTarget,t=u.indexOf(a),n=c[t].value;n!==o&&(d(a),i(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",y)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(h,(0,n.Z)({},e,a)))}function P(e){const a=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(a)},e))}},6718:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(7462),r=(t(7294),t(3905)),s=t(4866),l=t(5162);const o={sidebar_label:"Actualizar Gestor de Claves LSP6",sidebar_position:4,describtion:"Esta gu\xeda explica c\xf3mo cambiar o actualizar el Gestor de Claves LSP6 de un Perfil Universal."},i="Actualizar Gestor de Claves LSP6",c={unversionedId:"es/guides/key-manager/upgrade-lsp6",id:"es/guides/key-manager/upgrade-lsp6",title:"Actualizar Gestor de Claves LSP6",description:"Necesitar\xe1s un Perfil Universal que puedas controlar a trav\xe9s de su KeyManager para seguir esta gu\xeda.",source:"@site/docs/es/guides/key-manager/upgrade-lsp6.md",sourceDirName:"es/guides/key-manager",slug:"/es/guides/key-manager/upgrade-lsp6",permalink:"/lukso-es/es/guides/key-manager/upgrade-lsp6",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/guides/key-manager/upgrade-lsp6.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"10 abr 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Actualizar Gestor de Claves LSP6",sidebar_position:4,describtion:"Esta gu\xeda explica c\xf3mo cambiar o actualizar el Gestor de Claves LSP6 de un Perfil Universal."},sidebar:"guidesSidebar",previous:{title:"Ejecutar Transacciones por Retransmisi\xf3n",permalink:"/lukso-es/es/guides/key-manager/execute-relay-transactions"},next:{title:"Establecer la implementaci\xf3n por defecto",permalink:"/lukso-es/es/guides/universal-receiver-delegate/set-default-implementation"}},u={},d=[{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Paso 1 - Configurar las constantes y las importaciones",id:"paso-1---configurar-las-constantes-y-las-importaciones",level:2},{value:"Paso 2 - Inicializar la cuenta del controlador",id:"paso-2---inicializar-la-cuenta-del-controlador",level:2},{value:"Paso 3 - Inicializar el Gestor de Claves LSP6 anterior",id:"paso-3---inicializar-el-gestor-de-claves-lsp6-anterior",level:2},{value:"Paso 4 - Implementar el nuevo Gestor de claves LSP6",id:"paso-4---implementar-el-nuevo-gestor-de-claves-lsp6",level:2},{value:"Paso 5 - Actualizar el Gestor de Claves",id:"paso-5---actualizar-el-gestor-de-claves",level:2},{value:"Paso 5.1 - Transferir la Propiedad a tu nuevo Gestor de Claves",id:"paso-51---transferir-la-propiedad-a-tu-nuevo-gestor-de-claves",level:3},{value:"Paso 5.2 - Aceptar la Propiedad del nuevo Gestor de Claves",id:"paso-52---aceptar-la-propiedad-del-nuevo-gestor-de-claves",level:3},{value:"C\xf3digo final",id:"c\xf3digo-final",level:2},{value:"Test the new LSP6 Key Manager",id:"test-the-new-lsp6-key-manager",level:2}],p={toc:d};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actualizar-gestor-de-claves-lsp6"},"Actualizar Gestor de Claves LSP6"),(0,r.kt)("admonition",{title:"Requisitos",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Necesitar\xe1s un Perfil Universal que puedas controlar a trav\xe9s de su ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager"},"KeyManager")," para seguir esta gu\xeda.\nSi a\xfan no cuentas con un Perfil Universal, sigue nuestra gu\xeda anterior ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/guides/universal-profile/create-profile"},(0,r.kt)("strong",{parentName:"a"},"Create a Universal Profile"))," o consulta la documentaci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/tools/lsp-factoryjs/deployment/universal-profile"},(0,r.kt)("em",{parentName:"a"},"lsp-factory.js")),".")),(0,r.kt)("p",null,"En esta gu\xeda, aprenderemos a actualizar el LSP6 Key Manager de su Perfil Universal a la \xfaltima versi\xf3n disponible."),(0,r.kt)("p",null,"Al final de esta gu\xeda, sabr\xe1s c\xf3mo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desplegar un nuevo LSP6 Key Manager con las \xfaltimas actualizaciones."),(0,r.kt)("li",{parentName:"ul"},"Actualizar su Key Manager cambiando el propietario de tu UP del anterior al nuevo Key Manager.")),(0,r.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,r.kt)("p",null,"Aseg\xfarate de tener instaladas las siguientes dependencias antes de empezar este tutorial:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O bien ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.js"))," o bien ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,r.kt)("h2",{id:"paso-1---configurar-las-constantes-y-las-importaciones"},"Paso 1 - Configurar las constantes y las importaciones"),(0,r.kt)("p",null,"Crea un archivo JavaScript y a\xf1ade las siguientes importaciones en la parte superior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateKey"),": clave privada de una direcci\xf3n de controlador, ",(0,r.kt)("strong",{parentName:"li"},"DEBE")," tener permiso ",(0,r.kt)("a",{parentName:"li",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#permissions"},(0,r.kt)("strong",{parentName:"a"},"CHANGEOWNER")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyManagerAddress"),": direcci\xf3n del gestor de claves LSP6 actual."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"universalProfileAddress"),": direcci\xf3n de su perfil universal.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst privateKey = '0x...';\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Importaciones y Constantes"',title:'"Importaciones',y:!0,'Constantes"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst privateKey = '0x...';\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Importaciones y Constantes"',title:'"Importaciones',y:!0,'Constantes"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\n\nconst privateKey = '0x...';\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n")))),(0,r.kt)("h2",{id:"paso-2---inicializar-la-cuenta-del-controlador"},"Paso 2 - Inicializar la cuenta del controlador"),(0,r.kt)("p",null,"Para poder enviar cualquier transacci\xf3n en la blockchain necesitas una EOA. En nuestro caso, esa cuenta DEBE tener permiso ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#permissions"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"CHANGEOWNER")))," en el perfil universal en el que se actualizar\xe1 el gestor de claves LSP6."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Inicializar la EOA"',title:'"Inicializar',la:!0,'EOA"':!0},"const account = web3.eth.accounts.wallet.add(privateKey);\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Inicializar la EOA"',title:'"Inicializar',la:!0,'EOA"':!0},"const account = new ethers.Wallet(privateKey).connect(provider);\n")))),(0,r.kt)("h2",{id:"paso-3---inicializar-el-gestor-de-claves-lsp6-anterior"},"Paso 3 - Inicializar el Gestor de Claves LSP6 anterior"),(0,r.kt)("p",null,"Para transferir la propiedad de tu Perfil Universal, necesitas inicializar tu Gestor de Claves LSP6 actual."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Crear una instancia del Gestor de Claves anterior"',title:'"Crear',una:!0,instancia:!0,del:!0,Gestor:!0,de:!0,Claves:!0,'anterior"':!0},"const oldKeyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Crear una instancia del Gestor de Claves anterior"',title:'"Crear',una:!0,instancia:!0,del:!0,Gestor:!0,de:!0,Claves:!0,'anterior"':!0},"const oldKeyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);\n")))),(0,r.kt)("h2",{id:"paso-4---implementar-el-nuevo-gestor-de-claves-lsp6"},"Paso 4 - Implementar el nuevo Gestor de claves LSP6"),(0,r.kt)("p",null,"Implementa un nuevo Gestor de claves LSP6 con las \xfaltimas actualizaciones."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Implementar un nuevo Gestor de Claves"',title:'"Implementar',un:!0,nuevo:!0,Gestor:!0,de:!0,'Claves"':!0},"const newKeyManager = new web3.eth.Contract(LSP6KeyManager.abi);\nawait newKeyManager\n  .deploy({\n    data: LSP6KeyManager.bytecode,\n    arguments: [universalProfileAddress],\n  })\n  .send({\n    from: account.address,\n    gas: 3_000_000,\n    gasPrice: '1000000000',\n  });\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Implementar un nuevo Gestor de Claves"',title:'"Implementar',un:!0,nuevo:!0,Gestor:!0,de:!0,'Claves"':!0},"const keyManagerFactory = new ethers.ContractFactory(\n  LSP6KeyManager.abi,\n  LSP6KeyManager.bytecode,\n);\nconst newKeyManager = await keyManagerFactory.deploy(universalProfileAddress);\n")))),(0,r.kt)("h2",{id:"paso-5---actualizar-el-gestor-de-claves"},"Paso 5 - Actualizar el Gestor de Claves"),(0,r.kt)("h3",{id:"paso-51---transferir-la-propiedad-a-tu-nuevo-gestor-de-claves"},"Paso 5.1 - Transferir la Propiedad a tu nuevo Gestor de Claves"),(0,r.kt)("p",null,"Crea un calldata para la funci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/lsp14-ownable-2-step#transferownership"},(0,r.kt)("inlineCode",{parentName:"a"},"transferOwnership(address)"))," y cambia la propiedad de tu Perfil Universal desde tu actual Gestor de Claves LSP6."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Transferir la propiedad del Perfil Universal desde el Gestor de Claves previo hacia el nuevo."',title:'"Transferir',la:!0,propiedad:!0,del:!0,Perfil:!0,Universal:!0,desde:!0,el:!0,Gestor:!0,de:!0,Claves:!0,previo:!0,hacia:!0,'nuevo."':!0},"const transferOwnershipPayload = new web3.eth.Contract(\n  UniversalProfile.abi,\n).methods\n  .transferOwnership('0xcafecafecafecafecafecafecafecafecafecafe')\n  .encodeABI();\n\nawait oldKeyManager.methods['execute(bytes)'](transferOwnershipPayload).send({\n  from: account.address,\n  gas: 1_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Transferir la propiedad del Perfil Universal desde el Gestor de Claves previo hacia el nuevo."',title:'"Transferir',la:!0,propiedad:!0,del:!0,Perfil:!0,Universal:!0,desde:!0,el:!0,Gestor:!0,de:!0,Claves:!0,previo:!0,hacia:!0,'nuevo."':!0},"const transferOwnershipPayload = new ethers.Interface(\n  UniversalProfile.abi,\n).encodeFunctionData('transferOwnership(address)', [newKeyManager._address]);\n\nawait oldKeyManager\n  .connect(account)\n  ['execute(bytes)'](transferOwnershipPayload);\n")))),(0,r.kt)("h3",{id:"paso-52---aceptar-la-propiedad-del-nuevo-gestor-de-claves"},"Paso 5.2 - Aceptar la Propiedad del nuevo Gestor de Claves"),(0,r.kt)("p",null,"Crea un calldata para la funci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/lsp14-ownable-2-step#acceptownership"},(0,r.kt)("inlineCode",{parentName:"a"},"claimOwnership()"))," y acepta la propiedad de tu Perfil Universal desde tu nuevo Gestor de Claves LSP6."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Aceptar la propiedad del Perfil Universal mediante el nuevo Gestor de Claves"',title:'"Aceptar',la:!0,propiedad:!0,del:!0,Perfil:!0,Universal:!0,mediante:!0,el:!0,nuevo:!0,Gestor:!0,de:!0,'Claves"':!0},"const acceptOwnershipCalldata = new web3.eth.Contract(UniversalProfile.abi).methods.acceptOwnership().encodeABI();\n\nawait newKeyManager.methods['execute(bytes)'](acceptOwnershipCalldata).send({\n  from: account.address,\n  gas: 1_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Aceptar la propiedad del Perfil Universal mediante el nuevo Gestor de Claves"',title:'"Aceptar',la:!0,propiedad:!0,del:!0,Perfil:!0,Universal:!0,mediante:!0,el:!0,nuevo:!0,Gestor:!0,de:!0,'Claves"':!0},"const acceptOwnershipCalldata = new ethers.Interface(UniversalProfile.abi).encodeFunctionData(\"acceptOwnership()\");\n\nawait newKeyManager.connect(account)['execute(bytes)'](acceptOwnershipCalldata);\n")))),(0,r.kt)("admonition",{title:"\ud83e\udd73",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"La actualizaci\xf3n ha finalizado correctamente.")),(0,r.kt)("h2",{id:"c\xf3digo-final"},"C\xf3digo final"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="actualizar-lsp6.js"',title:'"actualizar-lsp6.js"'},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst privateKey = '0x...';\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n\nconst upgradeLSP6 = async () => {\n  // Inicializar la cuenta del controlador\n  const account = web3.eth.accounts.wallet.add(privateKey);\n\n  // Inicializar el Gestor de Claves LSP6 actual\n  const oldKeyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);\n\n  // Implementar un nuevo Gestor de Claves LSP6\n  const newKeyManager = new web3.eth.Contract(LSP6KeyManager.abi);\n  await newKeyManager.deploy({\n    data: LSP6KeyManager.bytecode,\n    arguments: [universalProfileAddress],\n  }).send({\n    from: account.address,\n    gas: 3_000_000,\n    gasPrice: '1000000000',\n  });\n\n  // Transferir la propiedad de un Perfil Universal desde el Gestor de Claves LSP6 actual hacia el nuevo Gestor de Claves LSP6.\n  const transferOwnershipPayload = new web3.eth.Contract(\n    UniversalProfile.abi,\n  ).methods\n    .transferOwnership(newKeyManager._address)\n    .encodeABI();\n\n  await oldKeyManager.methods['execute(bytes)'](transferOwnershipPayload).send({\n    from: account.address,\n    gas: 1_000_000,\n    gasPrice: '1000000000',\n  });\n\n  // Aceptar la propiedad de un Perfil Universal desde el nuevo Gestor de Claves LSP6\n  const acceptOwnershipCalldata = new web3.eth.Contract(UniversalProfile.abi).methods.acceptOwnership().encodeABI();\n\n  await newKeyManager.methods['execute(bytes)'](acceptOwnershipCalldata).send({\n    from: account.address,\n    gas: 1_000_000,\n    gasPrice: '1000000000',\n  });\n};\n\nawait upgradeLSP6();\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="upgrade-lsp6.js"',title:'"upgrade-lsp6.js"'},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\n\nconst privateKey = '0x...';\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n\nconst upgradeLSP6 = async () => {\n  // Inicializar la cuenta del controlador\n  const account = new ethers.Wallet(privateKey).connect(provider);\n\n  // Inicializar el Gestor de Claves LSP6 actual\n  const oldKeyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);\n\n  // Implementar un nuevo Gestor de Claves LSP6\n  const keyManagerFactory = new ethers.ContractFactory(\n    LSP6KeyManager.abi,\n    LSP6KeyManager.bytecode,\n  );\n  const newKeyManager = await keyManagerFactory.deploy(universalProfileAddress);\n\n  // Transferir la propiedad de un Perfil Universal desde el Gestor de Claves LSP6 actual hacia el nuevo Gestor de Claves LSP6.\n  const transferOwnershipPayload = new ethers.Interface(\n    UniversalProfile.abi,\n  ).encodeFunctionData('transferOwnership(address)', [newKeyManager._address]);\n\n  await oldKeyManager\n    .connect(account)\n    ['execute(bytes)'](transferOwnershipPayload);\n\n  // Aceptar la propiedad de un Perfil Universal desde el nuevo Gestor de Claves LSP6\n  const acceptOwnershipCalldata = new ethers.Interface(UniversalProfile.abi).encodeFunctionData(\"acceptOwnership()\");\n\n  await newKeyManager.connect(account)['execute(bytes)'](acceptOwnershipCalldata);\n};\n\nawait upgradeLSP6();\n")))),(0,r.kt)("h2",{id:"test-the-new-lsp6-key-manager"},"Test the new LSP6 Key Manager"),(0,r.kt)("p",null,"We can now check the owner of the Universal Profile. If everything went through, the owner should be the address of the new LSP6 Key Manager.\nCreate the following file with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"prueba-nuevo-lsp6.js")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node prueba-nuevo-lsp6.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="prueba-nuevo-lsp6.js"',title:'"prueba-nuevo-lsp6.js"'},"import LSP0ERC725YAccount from '@lukso/lsp-smart-contracts/artifacts/LSP0ERC725YAccount.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst universalProfileAddress = '0x...';\nconst keyManagerAddress = '0x...';\n\nconst testLSP6 = async () => {\n  const universalProfile = new web3.eth.Contract(LSP0ERC725YAccount.abi, universalProfileAddress);\n\n  const universalProfileOwner = await universalProfile.methods.owner().call();\n\n  console.log(`The new owner of the Universal Profile is: ${universalProfileOwner}`);\n  console.log(`The old LSP6 Key Manager is at address: ${keyManagerAdderss}`);\n\n  const keyManager = new web3.eth.Contract(LSP6KeyManager.abi, universalProfileOwner);\n\n  const keyManagerTarget = await keyManager.methods.target().call();\n\n  console.log(`The address of the Universal Profile is: ${universalProfile._address}`);\n  console.log(`The target of the new LSP6 Key Manager: ${keyManagerTarget}`);\n};\n\nawait testLSP6();\n")))}m.isMDXComponent=!0}}]);