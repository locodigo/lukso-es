"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={title:"LSP1ReceptorDelegadoUniversalUP",sidebar_position:5},o="LSP1ReceptorDelegadoUniversalUP",l={unversionedId:"es/standards/smart-contracts/lsp1-universal-receiver-delegate-up",id:"es/standards/smart-contracts/lsp1-universal-receiver-delegate-up",title:"LSP1ReceptorDelegadoUniversalUP",description:"LSP1ReceptorDelegadoUniversalUP.sol",source:"@site/docs/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up.md",sourceDirName:"es/standards/smart-contracts",slug:"/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up",permalink:"/lukso-es/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up.md",tags:[],version:"current",lastUpdatedAt:1681104877,formattedLastUpdatedAt:"10 abr 2023",sidebarPosition:5,frontMatter:{title:"LSP1ReceptorDelegadoUniversalUP",sidebar_position:5},sidebar:"standardsSidebar",previous:{title:"LSP0ERC725Account",permalink:"/lukso-es/es/standards/smart-contracts/lsp0-erc725-account"},next:{title:"LSP1ReceptorDelegadoUniversalB\xf3veda",permalink:"/lukso-es/es/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"}},i={},c=[{value:"Funciones",id:"funciones",level:2},{value:"universalReceiver",id:"universalreceiver",level:3},{value:"Par\xe1metros:",id:"par\xe1metros",level:4},{value:"Valores Devueltos:",id:"valores-devueltos",level:4},{value:"Referencias",id:"referencias",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp1receptordelegadouniversalup"},"LSP1ReceptorDelegadoUniversalUP"),(0,n.kt)("admonition",{title:"Contrato Solidity",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP1ReceptorDelegadoUniversalUP.sol")))),(0,n.kt)("p",null,"El ",(0,n.kt)("strong",{parentName:"p"},"LSP1ReceptorDelegadoUniversalUP")," es un contrato llamado por la funci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,n.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)")))," del contrato ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp0-erc725-account"},"LSP0CuentaERC725"))," que:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Escribe las claves de datos que representan los activos recibidos del tipo ",(0,n.kt)("strong",{parentName:"p"},"[LSP7-ActivoDigital]","(./lsp7-activo digital.md)")," y ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8-ActivoDigitalIdentificable"))," en el almacenamiento de la cuenta, y las elimina cuando el saldo es cero de acuerdo el ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"Est\xe1ndar LSP5-ActivosRecibidos")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Escribe las claves de datos que representan las b\xf3vedas de propiedad del tipo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp9-vault"},"LSP9-B\xf3veda"))," en el almacenamiento de su cuenta, y las elimina cuando ",(0,n.kt)("strong",{parentName:"p"},"transfiere la propiedad")," a otras cuentas de acuerdo con la ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"Norma LSP10-B\xf3vedasRecibidas")),"."))),(0,n.kt)("p",null,"Los siguientes dos requisitos son necesarios para ejecutar la l\xf3gica anterior correctamente:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"El propietario del contrato ",(0,n.kt)("strong",{parentName:"li"},"LSP0CuentaERC725")," debe ser un contrato ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp6-key-manager"},"LSP6GestordeClaves")),"."),(0,n.kt)("li",{parentName:"ol"},"El contrato ",(0,n.kt)("strong",{parentName:"li"},"LSP1ReceptorDelegadoUniversalUP")," debe tener ",(0,n.kt)("strong",{parentName:"li"},"permiso para ",(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#permission-values"},(0,n.kt)("inlineCode",{parentName:"a"},"SETDATA")))," en la cuenta (de lo contrario, la transacci\xf3n se aprobar\xe1 pero no escribir\xe1 ninguna clave de datos en el almacenamiento).")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"El contrato LSP1ReceptorDelegadoUniversalUPtambi\xe9n contiene los m\xe9todos de la ",(0,n.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-165"},"Norma ERC165"),":")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceId) public view returns (bool)\n"))),(0,n.kt)("h2",{id:"funciones"},"Funciones"),(0,n.kt)("h3",{id:"universalreceiver"},"universalReceiver"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function universalReceiver(\n    bytes32 typeId,\n    bytes memory data\n) public payable returns (bytes memory result)\n")),(0,n.kt)("p",null,"Escribe las claves de datos de las direcciones de contratos ",(0,n.kt)("strong",{parentName:"p"},"LSP7ActivoDigital"),", ",(0,n.kt)("strong",{parentName:"p"},"LSP8ActivoDigitalIdentificable")," y ",(0,n.kt)("strong",{parentName:"p"},"LSP9B\xf3veda")," recibidas en el almacenamiento de la cuenta de acuerdo con los est\xe1ndares ",(0,n.kt)("strong",{parentName:"p"},"LSP5ActivosRecibidos")," y ",(0,n.kt)("strong",{parentName:"p"},"LSP10B\xf3vedasRecibidas"),"."),(0,n.kt)("p",null,"Las claves de datos que representan un activo/b\xf3veda se borran cuando el activo/b\xf3veda deja de ser propiedad de la cuenta."),(0,n.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"typeId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Los ganchos de token del contrato.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bytes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Los datos que se asocian a la transferencia de activos o b\xf3vedas (concatenados).")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Nota:")," si la funci\xf3n es llamada por la funci\xf3n ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,n.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)"))," de LSP0, recibir\xe1 los siguientes ",(0,n.kt)("strong",{parentName:"p"},"datos de llamada adicionales"),":"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bytes20 caller"),": La direcci\xf3n del contrato inteligente del token o de la b\xf3veda."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bytes32 value"),": La cantidad de valor enviada a la funci\xf3n universalReceiver."))),(0,n.kt)("h4",{id:"valores-devueltos"},"Valores Devueltos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"result")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bytes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"El valor devuelto por la funci\xf3n ",(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/smart-contracts/lsp6-key-manager#execute"},(0,n.kt)("inlineCode",{parentName:"a"},"execute(...)")))," del ",(0,n.kt)("strong",{parentName:"td"},"Gestor de Claves"),".")))),(0,n.kt)("h2",{id:"referencias"},"Referencias"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"Propuestas de Est\xe1ndar LUKSO: LSP1 - Receptor Universal (Especificaci\xf3n est\xe1ndar, GitHub)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Receptor Universal: implementaciones de Solidity (GitHub)"))))}d.isMDXComponent=!0}}]);