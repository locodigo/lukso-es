"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8685],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),o=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(t),m=n,v=u["".concat(d,".").concat(m)]||u[m]||c[m]||s;return t?r.createElement(v,i(i({ref:a},p),{},{components:t})):r.createElement(v,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=u;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<s;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},441:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(7462),n=(t(7294),t(3905));const s={sidebar_label:"LSP10 - B\xf3vedas Recibidas",sidebar_position:8},i="LSP10 - B\xf3vedas Recibidas",l={unversionedId:"es/standards/universal-profile/lsp10-received-vaults",id:"es/standards/universal-profile/lsp10-received-vaults",title:"LSP10 - B\xf3vedas Recibidas",description:"LSP10 - B\xf3vedas Recibidas",source:"@site/docs/es/standards/universal-profile/lsp10-received-vaults.md",sourceDirName:"es/standards/universal-profile",slug:"/es/standards/universal-profile/lsp10-received-vaults",permalink:"/lukso-es/es/standards/universal-profile/lsp10-received-vaults",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/universal-profile/lsp10-received-vaults.md",tags:[],version:"current",lastUpdatedAt:1681104414,formattedLastUpdatedAt:"10 abr 2023",sidebarPosition:8,frontMatter:{sidebar_label:"LSP10 - B\xf3vedas Recibidas",sidebar_position:8},sidebar:"standardsSidebar",previous:{title:"LSP9 - B\xf3vedas",permalink:"/lukso-es/es/standards/universal-profile/lsp9-vault"},next:{title:"LSP12 - Activos Emitidos",permalink:"/lukso-es/es/standards/universal-profile/lsp12-issued-assets"}},d={},o=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"\xbfQu\xe9 representa este est\xe1ndar?",id:"qu\xe9-representa-este-est\xe1ndar",level:2},{value:"<code>LSP10Vaults[]</code>",id:"lsp10vaults",level:3},{value:"<code>LSP10VaultsMap</code>",id:"lsp10vaultsmap",level:3},{value:"Flujo",id:"flujo",level:3}],p={toc:o};function c(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp10---b\xf3vedas-recibidas"},"LSP10 - B\xf3vedas Recibidas"),(0,n.kt)("admonition",{title:"Documentp Est\xe1ndard",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md"},"LSP10 - B\xf3vedas Recibidas"))),(0,n.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("p",null,"Para realizar un seguimiento de todas las b\xf3vedas que posee una direcci\xf3n, debemos evitar el mismo problema mencionado en ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp5-received-assets"},"LSP5-ActivosRecibidos"),", que es no informar a los receptores y remitentes sobre la transferencia de propiedad de las ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp9-vault"},"B\xf3vedas LSP9"),"."),(0,n.kt)("p",null,"Una forma de evitar este problema es crear claves de metadatos gen\xe9ricas que los desarrolladores deber\xedan registrar en el almac\xe9n de contratos inteligentes, representando cu\xe1ntas b\xf3vedas diferentes se poseen, su tipo y la direcci\xf3n del contrato de b\xf3veda transferido."),(0,n.kt)("h2",{id:"qu\xe9-representa-este-est\xe1ndar"},"\xbfQu\xe9 representa este est\xe1ndar?"),(0,n.kt)("admonition",{title:"Recomendaci\xf3n",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Aseg\xfarate de comprender las normas ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Almacenamiento Gen\xe9rico de Claves/Valores"))," y ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/generic-standards/lsp2-json-schema"},"LSP2 - EsquemaJSONERC725Y"))," antes de revisar las Claves de Datos ERC725Y.")),(0,n.kt)("p",null,"Este est\xe1ndar de metadatos describe dos claves de datos que pueden a\xf1adirse a un contrato inteligente ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md"},"ERC725Y")," para realizar un seguimiento de las ","[B\xf3veda LSP9]"," recibidas y en propiedad(./lsp9-vault.md)."),(0,n.kt)("h3",{id:"lsp10vaults"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP10Vaults[]")),(0,n.kt)("p",null,"Esta clave de datos representa una lista de todas las b\xf3vedas propiedad del contrato."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP10Vaults[]",\n  "key": "0x55482936e01da86729a45d2b87a6b1d3bc582bea0ec00e38bdb340e3af6f9f06",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,n.kt)("admonition",{title:"Recomendaci\xf3n",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Se recomienda consultar la clave de datos ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"LSP10Vaults[]"))," para comprobar si un contrato inteligente es compatible con el est\xe1ndar ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp10-received-vaults"},"LSP10 - B\xf3vedasRecibidas")),".")),(0,n.kt)("h3",{id:"lsp10vaultsmap"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP10VaultsMap")),(0,n.kt)("p",null,"Esta clave de datos representa una clave de mapa que contiene tanto"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"un ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"ID de interfaz ERC165")," para identificar r\xe1pidamente el est\xe1ndar utilizado por el contrato inteligente de cada b\xf3veda (sin necesidad de consultar directamente los contratos de activos)."),(0,n.kt)("li",{parentName:"ul"},"el \xedndice en el conjunto ",(0,n.kt)("a",{parentName:"li",href:"#lsp10vaults-"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP10Vaults[]"))," donde se almacenan las direcciones de las c\xe1maras acorazadas recibidas.")),(0,n.kt)("p",null,"La clave de datos ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP10VaultsMap")," tambi\xe9n ayuda a evitar la adici\xf3n de duplicados a la matriz cuando se a\xf1ade autom\xe1ticamente a trav\xe9s de un contrato inteligente (",(0,n.kt)("em",{parentName:"p"},"e.g.,")," un ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/generic-standards/lsp1-universal-receiver-delegate"},"LSP1-ReceptorDelegadoUniversal"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP10VaultsMap:<address>",\n  "key": "0x192448c3c0f88c7f238c0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,n.kt)("h3",{id:"flujo"},"Flujo"),(0,n.kt)("admonition",{title:"Nota",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Las claves de datos tambi\xe9n se configuran en el ",(0,n.kt)("strong",{parentName:"p"},"Perfil Universal del remitente")," para eliminar la direcci\xf3n del contrato de la b\xf3veda cuando se env\xedan al destinatario.")),(0,n.kt)("p",null,"Si se establecen al transferir b\xf3vedas, estas claves de datos se actualizan autom\xe1ticamente en el almacenamiento de PerfilUniversal a trav\xe9s del contrato ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1ReceptorDelegadoUniversalUP"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vault transfer detailed flow",src:t(5746).Z,width:"2902",height:"1378"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LSP10 Received Vaults Flow",src:t(5273).Z,width:"3158",height:"1266"})))}c.isMDXComponent=!0},5746:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/detailed-vault-transfer-144754935927b72e86bc5923197010c1.jpeg"},5273:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/lsp10-received-vaults-9341f2690358fead104b130d61aa3ff5.jpeg"}}]);