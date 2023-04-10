"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[741],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),m=s,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?t.createElement(g,i(i({ref:n},d),{},{components:a})):t.createElement(g,i({ref:n},d))}));function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4243:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(7462),s=(a(7294),a(3905));const o={sidebar_label:"LSP17 - Extensi\xf3n del Contrato",sidebar_position:4},i="LSP17 - Extensi\xf3n del Contrato",r={unversionedId:"es/standards/generic-standards/lsp17-contract-extension",id:"es/standards/generic-standards/lsp17-contract-extension",title:"LSP17 - Extensi\xf3n del Contrato",description:"LSP17 - Extensi\xf3n del Contrato",source:"@site/docs/es/standards/generic-standards/lsp17-contract-extension.md",sourceDirName:"es/standards/generic-standards",slug:"/es/standards/generic-standards/lsp17-contract-extension",permalink:"/lukso-es/es/standards/generic-standards/lsp17-contract-extension",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/generic-standards/lsp17-contract-extension.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"10 abr 2023",sidebarPosition:4,frontMatter:{sidebar_label:"LSP17 - Extensi\xf3n del Contrato",sidebar_position:4},sidebar:"standardsSidebar",previous:{title:"LSP2 - Esquema JSON ERC725Y",permalink:"/lukso-es/es/standards/generic-standards/lsp2-json-schema"},next:{title:"Introducci\xf3n",permalink:"/lukso-es/es/standards/universal-profile/introduction"}},l={},c=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"\xbfQu\xe9 representa este est\xe1ndar?",id:"qu\xe9-representa-este-est\xe1ndar",level:2},{value:"Especificaci\xf3n",id:"especificaci\xf3n",level:3},{value:"Reutilizaci\xf3n de extensiones",id:"reutilizaci\xf3n-de-extensiones",level:3},{value:"Consideraciones de seguridad",id:"consideraciones-de-seguridad",level:3},{value:"Ejemplo",id:"ejemplo",level:3}],d={toc:c};function p(e){let{components:n,...o}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp17---extensi\xf3n-del-contrato"},"LSP17 - Extensi\xf3n del Contrato"),(0,s.kt)("admonition",{title:"Documento Est\xe1ndard",type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-17-ContractExtension.md"},"LSP17 - Extensi\xf3n del Contrato"))),(0,s.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,s.kt)("p",null,"Una vez que un contrato se despliega en la blockchain, no es posible modificarlo para a\xf1adir nuevas funciones nativas o cambiar el comportamiento de las existentes. Esto puede suponer una limitaci\xf3n para los contratos inteligentes, especialmente para aquellos que con el tiempo deban adaptarse a nuevos casos de uso y est\xe1ndares."),(0,s.kt)("p",null,"Lo que se necesita es un m\xe9todo para ampliar las funcionalidades de un contrato inteligente incluso despu\xe9s de que haya sido desplegado, permiti\xe9ndole seguir soportando nuevas caracter\xedsticas con el tiempo."),(0,s.kt)("p",null,"Una posible soluci\xf3n a este problema es establecer un sistema de extensiones que puedan a\xf1adirse a un contrato inteligente, permiti\xe9ndole ",(0,s.kt)("strong",{parentName:"p"},"adquirir nuevas funcionalidades")," sin necesidad de volver a desplegarlo."),(0,s.kt)("h2",{id:"qu\xe9-representa-este-est\xe1ndar"},"\xbfQu\xe9 representa este est\xe1ndar?"),(0,s.kt)("p",null,"Este est\xe1ndar define un mecanismo para extender un contrato para soportar nuevas funciones mediante el uso de ",(0,s.kt)("strong",{parentName:"p"},"extensiones"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Normal contract Vs contract implementing LSP17",src:a(4063).Z,width:"1519",height:"658"})),(0,s.kt)("p",null,"El ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"contrato inteligente A"))," implementa 4 funciones de forma nativa. Una vez desplegado este contrato inteligente, no se pueden a\xf1adir nuevas funciones ni realizar cambios en las existentes."),(0,s.kt)("p",null,"En cambio, el ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"contrato inteligente B")),", que soporta el ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"est\xe1ndar LSP17")),", no implementa ninguna funci\xf3n nativa, sino que se basa en extensiones para la funcionalidad que sea necesaria y puede a\xf1adir m\xe1s extensiones en el futuro."),(0,s.kt)("p",null,"As\xed, el contrato inteligente B tiene la capacidad de ",(0,s.kt)("strong",{parentName:"p"},"soportar un n\xfamero ilimitado de funcionalidades")," y puede a\xf1adir nuevas funciones en el futuro si lo desea."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Normal contract Vs contract implementing LSP17",src:a(3963).Z,width:"1552",height:"644"})),(0,s.kt)("p",null,"Como se muestra en la figura anterior, el contrato inteligente B ",(0,s.kt)("strong",{parentName:"p"},"cambi\xf3 la extensi\xf3n")," de la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"execute(..)")," a una versi\xf3n m\xe1s reciente, elimin\xf3 la extensi\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"depositToken(..)")," y a\xf1adi\xf3 una nueva extensi\xf3n para la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"socialRecover(..)"),"."),(0,s.kt)("p",null,"Este sistema de extensiones permite que un contrato inteligente evolucione y se adapte a los cambios que puedan surgir en el futuro. Mediante la implementaci\xf3n de este sistema, los contratos inteligentes pueden ser m\xe1s vers\xe1tiles y capaces de soportar una gama m\xe1s amplia de funcionalidades, incluso despu\xe9s de su despliegue."),(0,s.kt)("h3",{id:"especificaci\xf3n"},"Especificaci\xf3n"),(0,s.kt)("p",null,"Este est\xe1ndar define dos tipos de contratos:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"El ",(0,s.kt)("strong",{parentName:"p"},"contrato extensible"),", que es el contrato cuya funcionalidad queremos extender.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"El ",(0,s.kt)("strong",{parentName:"p"},"contrato extensible"),", que es el contrato que proporciona la funcionalidad que se a\xf1adir\xe1 al contrato extensible."))),(0,s.kt)("p",null,"Cuando se llama al contrato extensible con una funci\xf3n que no est\xe1 implementada de forma nativa, comprueba la direcci\xf3n de la extensi\xf3n asignada a esa funci\xf3n."),(0,s.kt)("p",null,"Si no se establece ninguna extensi\xf3n para la funci\xf3n a la que se llama, la llamada ",(0,s.kt)("strong",{parentName:"p"},"DEBE revertirse"),"."),(0,s.kt)("p",null,"Pero si se establece una extensi\xf3n, el contrato extensible har\xe1 una llamada a esa extensi\xf3n utilizando el opcode ",(0,s.kt)("strong",{parentName:"p"},"CALL"),", junto con un calldata adicional de 52 bytes que contiene la direcci\xf3n del llamante (20 bytes) y el valor enviado junto con la llamada a la funci\xf3n por el llamante (32 bytes)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Calling An LSP17 Extension",src:a(8086).Z,width:"1373",height:"728"})),(0,s.kt)("p",null,"Los 52 bytes de calldata adicionales a\xf1adidos a la llamada al contrato extensible proporcionan contexto sobre el llamante y el valor enviado en la llamada, permitiendo a la extensi\xf3n validar la llamada bas\xe1ndose en estos factores si lo desea."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Este est\xe1ndar no dicta un m\xe9todo espec\xedfico para mapear selectores de funci\xf3n a extensiones o para establecer o cambiar estas extensiones en el contrato extensible, los desarrolladores pueden elegir su enfoque preferido.")),(0,s.kt)("h3",{id:"reutilizaci\xf3n-de-extensiones"},"Reutilizaci\xf3n de extensiones"),(0,s.kt)("p",null,"Mientras que los contratos pueden desplegar y personalizar sus propias extensiones, muchos contratos inteligentes ",(0,s.kt)("strong",{parentName:"p"},"comparten casi la misma l\xf3gica")," para ciertas funciones. En este caso, las mismas extensiones pueden ser reutilizadas por diferentes contratos que soporten LSP17."),(0,s.kt)("p",null,"Por ejemplo, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"contrato inteligente A y B"))," son dos contratos independientes que implementan funciones diferentes pero comparten la misma l\xf3gica para verificar firmas. Por lo tanto, pueden utilizar la misma extensi\xf3n para la validaci\xf3n de firmas para la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"isValidSignature(..)"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Two contracts sharing the same LSP17 Extension",src:a(3684).Z,width:"1367",height:"731"})),(0,s.kt)("p",null,"Este enfoque hace que se desplieguen menos contratos en la blockchain con la misma l\xf3gica, lo que provoca una menor congesti\xf3n de la cadena y simplifica el proceso de desarrollo al reutilizar contratos de extensi\xf3n ya desplegados y verificados."),(0,s.kt)("h3",{id:"consideraciones-de-seguridad"},"Consideraciones de seguridad"),(0,s.kt)("p",null,"Como las extensiones se llaman utilizando el opcode ",(0,s.kt)("strong",{parentName:"p"},"CALL")," y no ",(0,s.kt)("strong",{parentName:"p"},"DELEGATECALL"),", es seguro asumir que no hay riesgo de destruir el contrato inteligente extensible a trav\xe9s de ",(0,s.kt)("inlineCode",{parentName:"p"},"selfdestruct"),"."),(0,s.kt)("p",null,"Sin embargo, es importante tener en cuenta que ",(0,s.kt)("strong",{parentName:"p"},"a\xf1adir contratos aleatorios como extensiones por descuido")," puede ser problem\xe1tico ya que las extensiones tendr\xe1n el contrato extensible como su llamador (",(0,s.kt)("inlineCode",{parentName:"p"},"msg.sender"),"), lo que puede llevar a suplantar el contrato extensible en ciertas situaciones."),(0,s.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,s.kt)("p",null,"Una plataforma de intercambio descentralizada no puede aceptar transferencias seguras ERC721 o ERC1155 a menos que implemente funciones espec\xedficas con valores de retorno espec\xedficos. Esto asegura que el contrato sabe c\xf3mo manejar estos tokens, haciendo as\xed la transferencia segura."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Exchange receiving ERC721 and ERC1155 Tokens",src:a(5059).Z,width:"1501",height:"666"})),(0,s.kt)("p",null,"La plataforma de intercambio descentralizada o cualquier otro tipo de contrato puede recibir tokens de estos tipos, pero \xbfqu\xe9 ocurre si surge otro est\xe1ndar de tokens sobre el que la gente empieza a construir y que tiene el mismo sistema de validaci\xf3n en el que requiere la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"onERCXXXReceived(..)"),"? Esto har\xe1 que el DEX no pueda recibir este tipo de tokens porque no implement\xf3 esta funci\xf3n simplemente porque no exist\xeda en ese momento."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Exchange cannot receive ERCXXX Tokens",src:a(1090).Z,width:"1492",height:"669"})),(0,s.kt)("p",null,"As\xed que la \xfanica manera de que este DEX soporte nuevos tipos de tokens es volver a desplegar el contrato con esta nueva funci\xf3n, lo que puede ser problem\xe1tico ya que muchos protocolos dependen e interact\xfaan con este DEX en una direcci\xf3n espec\xedfica."),(0,s.kt)("p",null,"Este problema puede resolverse utilizando ",(0,s.kt)("strong",{parentName:"p"},"LSP17")," en el intercambio descentralizado (DEX). Con este est\xe1ndar, el contrato puede desplegarse con s\xf3lo las funciones ",(0,s.kt)("inlineCode",{parentName:"p"},"onERC721Received(..)")," o ",(0,s.kt)("inlineCode",{parentName:"p"},"onERC1155Received(..)")," implementadas, pero funciones adicionales como ",(0,s.kt)("inlineCode",{parentName:"p"},"onERCXXXReceived(..)")," pueden ",(0,s.kt)("strong",{parentName:"p"},"a\xf1adirse como extensiones")," m\xe1s adelante. LSP17 tambi\xe9n permite la adici\xf3n potencial de extensiones para cualquier futura funci\xf3n requerida por la norma que pueda surgir."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Exchange adding ERCXXX Token Extension",src:a(2029).Z,width:"1453",height:"687"})))}p.isMDXComponent=!0},8086:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/CallingAnLSP17Extension-3a11f2f1b8441287e38e81672e32ac11.jpeg"},5059:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/ExchangeAcceptingERCTokens-ecfcf7904fd0f58f302069a48b432b61.jpeg"},2029:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/ExchangeAddingERCTokenExtension-7bd2526a0d9654c090275871fc4f0619.jpeg"},1090:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/ExchangeCannotAcceptERCTokens-1cb218fa82aebc305704090140e9824b.jpeg"},3963:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/OneContract-e1b2f3c7631a9d6eb01288e1571e89c5.jpeg"},3684:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/ShareExtension-92b217304b15a8fc0146f23fec9c05fc.jpeg"},4063:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/TwoContracts-36663497b4ccdf90af10f3ba98fe091a.jpeg"}}]);