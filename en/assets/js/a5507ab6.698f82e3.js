"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4100],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(f,s(s({ref:a},c),{},{components:t})):n.createElement(f,s({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),r=t(6010);const i="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(7462),r=t(7294),i=t(6010),s=t(2466),l=t(6775),o=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[o,u]=f({queryString:t,groupId:n}),[d,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),h=(()=>{const e=o??d;return m({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=t(2389);const g="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:a,block:t,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==l&&(d(a),o(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,i.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":l===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(y,(0,n.Z)({},e,a)))}function w(e){const a=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(a)},e))}},6823:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=t(7462),r=(t(7294),t(3905)),i=t(4866),s=t(5162);const l={title:"\ud83d\udcec API Retransmisor",sidebar_position:9},o="Est\xe1ndar API del Servicio de Retransmisi\xf3n de Transacciones",u={unversionedId:"es/standards/relayer-api",id:"es/standards/relayer-api",title:"\ud83d\udcec API Retransmisor",description:"POST /execute",source:"@site/docs/es/standards/relayer-api.md",sourceDirName:"es/standards",slug:"/es/standards/relayer-api",permalink:"/lukso-es/en/es/standards/relayer-api",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/relayer-api.md",tags:[],version:"current",lastUpdatedAt:1681105145,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:9,frontMatter:{title:"\ud83d\udcec API Retransmisor",sidebar_position:9},sidebar:"standardsSidebar",previous:{title:"LSP10Utils",permalink:"/lukso-es/en/es/standards/smart-contracts/utils/lsp10-received-vaults-utils"},next:{title:"\ud83c\udd99 API RPC",permalink:"/lukso-es/en/es/standards/rpc-api"}},c={},d=[{value:"POST <code>/execute</code>",id:"post-execute",level:2},{value:"POST <code>/quota</code>",id:"post-quota",level:2},{value:"Recursos",id:"recursos",level:2}],p={toc:d};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"est\xe1ndar-api-del-servicio-de-retransmisi\xf3n-de-transacciones"},"Est\xe1ndar API del Servicio de Retransmisi\xf3n de Transacciones"),(0,r.kt)("h2",{id:"post-execute"},"POST ",(0,r.kt)("inlineCode",{parentName:"h2"},"/execute")),(0,r.kt)("p",null,"Ejecuta una transacci\xf3n firmada en nombre de un Perfil Universal utilizando ",(0,r.kt)("a",{parentName:"p",href:"./smart-contracts/lsp6-key-manager#executerelaycall"},(0,r.kt)("inlineCode",{parentName:"a"},"executeRelayCall()")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliza el mensaje firmado proporcionado en la solicitud para la autenticaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Calcula y devuelve el hash de la transacci\xf3n en la respuesta.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Cuerpo de la solicitud"',title:'"Cuerpo',de:!0,la:!0,'solicitud"':!0},'{\n  "address": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD", // Direcci\xf3n del Perfil Universal\n  "transaction": {\n    "abi": "0x7f23690c5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000596f357c6aa5a21984a83b7eef4cb0720ac1fcf5a45e9d84c653d97b71bbe89b7a728c386a697066733a2f2f516d624b43744b4d7573376741524470617744687a32506a4e36616f64346b69794e436851726d3451437858454b00000000000000",\n    "signature": "0x43c958b1729586749169599d7e776f18afc6223c7da21107161477d291d497973b4fc50a724b1b2ab98f3f8cf1d5cdbbbdf3512e4fbfbdc39732229a15beb14a1b",\n    "nonce": 1 // Nonce del Gestor de Claves\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Respuesta"',title:'"Respuesta"'},'{\n  "transactionHash": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD"\n}\n')),(0,r.kt)("h2",{id:"post-quota"},"POST ",(0,r.kt)("inlineCode",{parentName:"h2"},"/quota")),(0,r.kt)("p",null,"Devuelve la cuota disponible que queda para un Perfil Universal registrado."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature")," es el valor del mensaje firmado por una clave de controlador con el ",(0,r.kt)("a",{parentName:"li",href:"./universal-profile/lsp6-key-manager#permissions"},"permiso ",(0,r.kt)("inlineCode",{parentName:"a"},"SIGN"))," del Perfil Universal. El hash para firmar debe calcularse como un hash ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," donde el mensaje es ",(0,r.kt)("inlineCode",{parentName:"li"},"keccack256(address, timestamp)"),". Aseg\xfarate de que, independientemente del idioma o la plataforma, la marca de tiempo sea de tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int256"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uint")," o ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),". En el backend el mensaje se reconstruye usando ",(0,r.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.7.4/web3-utils.html#soliditysha3"},"soliditysha3()")," para verificar la firma.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.8.0/web3-eth-accounts.html?#sign"},"Web3.js")," y ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer-signMessage"},"ethers.js")," hacen hash autom\xe1ticamente cuando usan sus funciones de firma nativas. Puede ser necesario hacerlo manualmente si se utiliza una librer\xeda diferente."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," en ",(0,r.kt)("strong",{parentName:"li"},"segundos"),". Debe ser ahora +/- 5 segundos.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"C\xf3mo generar y verificar la firma."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3",label:"Web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { soliditySha3 } from 'web3-utils';\nimport Web3 from 'web3';\n\nconst address = '0x1234...'; // La direcci\xf3n del Perfil Universal\nconst timestamp = Math.round(Date.now() / 1000);\n\nconst message = soliditySha3(address, timestamp);\n\n/**\n *  Generar la firma - lado cliente\n */\nconst web3 = new Web3();\nconst privateKey = '0x123...'; // La clave privada de la EOA que tiene permiso SIGN sobre el Perfil Universal definido en la direcci\xf3n.\nconst signature = web3.eth.accounts.sign(message, privateKey).signature;\n// \ud83d\udc49 Esta firma se utiliza en la carga \xfatil de la solicitud.\n\n/**\n * Verificar la firma - lado del retransmisor\n */\nconst signer = web3.eth.accounts.recover(message, signature.signature); // Signer ser\xe1 la EOA que ha firmado el mensaje.\n// Es necesario verificar si esta EOA tiene permiso SIGN en el Perfil Universal definido en direcci\xf3n.\n"))),(0,r.kt)(s.Z,{value:"ethers",label:"Ethers",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\nconst address = '0x1234...'; // La direcci\xf3n del Perfil Universal\nconst timestamp = Math.round(Date.now() / 1000);\n\nconst message = ethers.utils.solidityKeccak256(\n  ['address', 'uint'],\n  [address, timestamp],\n);\n\n/**\n *  Generar la firma - lado cliente\n */\n// [... ethers signer setup...]\nconst signature = await ethersSigner.signMessage(arrayify(message));\n// \ud83d\udc49 Esta firma se utiliza en la carga \xfatil de la solicitud.\n\n/**\n * Verificar la firma - lado del retransmisor\n */\nconst signer = ethers.utils.verifyMessage(arrayify(message), signature); // Signer ser\xe1 la EOA que ha firmado el mensaje.\n// Es necesario verificar si esta EOA tiene permiso SIGN en el Perfil Universal definido en direcci\xf3n.\n")))),(0,r.kt)("p",null,"Para verificar si la firma ha sido suscrita por una EOA autorizada, consulta la gu\xeda ",(0,r.kt)("a",{parentName:"p",href:"../guides/browser-extension/sign-in-with-ethereum#4-verify-the-signature"},"Iniciar Sesi\xf3n con Ethereum"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Cuerpo de la solicitud"',title:'"Cuerpo',de:!0,la:!0,'solicitud"':!0},'{\n  "address": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD",\n  "timestamp": 1656408193,\n  "signature": "0xf480c87a352d42e49112257cc6afab0ff8365bb769424bb42e79e78cd11debf24fd5665b03407d8c2ce994cf5d718031a51a657d4308f146740e17e15b9747ef1b"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Respuesta"',title:'"Respuesta"'},'{\n  "quota": 1543091, // Te quedan YYY\n  "unit": "gas", // puede ser "lyx", "transactionCount"\n  "totalQuota": 5000000, // gas total para el mes\n  "resetDate": 1656408193\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota")," muestra el saldo disponible en unidades definidas por ",(0,r.kt)("inlineCode",{parentName:"li"},"unit"),"."),(0,r.kt)("li",{parentName:"ul"},"La 'unit' puede ser ",(0,r.kt)("inlineCode",{parentName:"li"},"gas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lyx")," o ",(0,r.kt)("inlineCode",{parentName:"li"},"transactionCount")," dependiendo del modelo de negocio."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"totalQuota")," refleja el l\xedmite total, es decir, la cuota disponible + la utilizada desde el restablecimiento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resetDate")," indica la fecha en la que se restablecer\xe1 la cuota disponible, por ejemplo, una asignaci\xf3n mensual.")),(0,r.kt)("p",null,"Los sistemas de cuotas tambi\xe9n pueden utilizar un modelo de pago por uso, en cuyo caso totalQuota y resetData pueden omitirse."),(0,r.kt)("h2",{id:"recursos"},"Recursos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/pull/133"},"LSP-15-APIRetransmisorTransacciones (GitHub)"))))}m.isMDXComponent=!0}}]);