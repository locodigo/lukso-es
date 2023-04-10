"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[7311],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),d=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=d(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(f,i(i({ref:a},l),{},{components:t})):r.createElement(f,i({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2882:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_label:"LSP14 - Propiedad 2-Pasos",sidebar_position:3},i="LSP14 - Propiedad 2-Pasos",s={unversionedId:"es/standards/generic-standards/lsp14-ownable-2-step",id:"es/standards/generic-standards/lsp14-ownable-2-step",title:"LSP14 - Propiedad 2-Pasos",description:"LSP14 - Propiedad 2-Pasos",source:"@site/docs/es/standards/generic-standards/lsp14-ownable-2-step.md",sourceDirName:"es/standards/generic-standards",slug:"/es/standards/generic-standards/lsp14-ownable-2-step",permalink:"/lukso-es/en/es/standards/generic-standards/lsp14-ownable-2-step",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/generic-standards/lsp14-ownable-2-step.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"LSP14 - Propiedad 2-Pasos",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP1 - Receptor Delegado Universal",permalink:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver-delegate"},next:{title:"LSP2 - Esquema JSON ERC725Y",permalink:"/lukso-es/en/es/standards/generic-standards/lsp2-json-schema"}},p={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"\xbfQu\xe9 representa este est\xe1ndar?",id:"qu\xe9-representa-este-est\xe1ndar",level:2},{value:"Transferencia de la propiedad del contrato",id:"transferencia-de-la-propiedad-del-contrato",level:3},{value:"Gancho de Transferencia de Propiedad",id:"gancho-de-transferencia-de-propiedad",level:4},{value:"Ganchos de Aceptaci\xf3n de Propiedad",id:"ganchos-de-aceptaci\xf3n-de-propiedad",level:4},{value:"Renuncia a la titularidad del contrato",id:"renuncia-a-la-titularidad-del-contrato",level:3}],l={toc:d};function c(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp14---propiedad-2-pasos"},"LSP14 - Propiedad 2-Pasos"),(0,n.kt)("admonition",{title:"Documento Est\xe1ndard",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-14-Ownable2Step.md"},"LSP14 - Propiedad 2-Pasos"))),(0,n.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("p",null,"En el actual est\xe1ndar ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Est\xe1ndar de Propiedad de Contratos")," (EIP173), la propiedad de un contrato se transfiere directamente en una transacci\xf3n mediante ",(0,n.kt)("inlineCode",{parentName:"p"},"transferOwnership(...)"),". Esto presenta algunos riesgos. Por ejemplo, si el nuevo propietario"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"es un EOA que ha perdido su clave privada."),(0,n.kt)("li",{parentName:"ul"},"es una ",(0,n.kt)("inlineCode",{parentName:"li"},"direcci\xf3n")," introducida incorrectamente.")),(0,n.kt)("p",null,"Renunciar a la propiedad del contrato en ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Est\xe1ndar de Propiedad de Contrato")," tambi\xe9n se hace en una transacci\xf3n. Si el propietario llama accidentalmente a ",(0,n.kt)("inlineCode",{parentName:"p"},"renounceOwnership()"),", se pierde el acceso al contrato."),(0,n.kt)("p",null,"Lo que se necesita es un mecanismo m\xe1s seguro para gestionar la propiedad de los contratos."),(0,n.kt)("h2",{id:"qu\xe9-representa-este-est\xe1ndar"},"\xbfQu\xe9 representa este est\xe1ndar?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LSP14 - Propiedad 2-Pasos")," es una versi\xf3n extendida de ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Est\xe1ndar de Propiedad de Contratos")," que utiliza un proceso de 2 pasos para transferir y renunciar a la propiedad."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LSP14 - Propiedad 2-Pasos")," modifica los procesos de ",(0,n.kt)("em",{parentName:"p"},"transferir y renunciar a la propiedad")," de la siguiente manera:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Para ",(0,n.kt)("em",{parentName:"p"},"transferir propiedad")," se modifica el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"transferOwnership(...)")," de forma que la ",(0,n.kt)("strong",{parentName:"p"},"direcci\xf3n")," pasada como par\xe1metro no ser\xe1 el propietario directamente sino un propietario pendiente. Se introduce un nuevo m\xe9todo, ",(0,n.kt)("inlineCode",{parentName:"p"},"acceptOwnership()"),", que deber\xe1 ser llamado por el ",(0,n.kt)("strong",{parentName:"p"},"propietario pendiente")," para que el proceso de ",(0,n.kt)("em",{parentName:"p"},"transferencia de titularidad")," se complete.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Para ",(0,n.kt)("em",{parentName:"p"},"renunciar a la propiedad")," se modifica el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"renounceOwnership()")," de la siguiente manera. En primer lugar, el ",(0,n.kt)("strong",{parentName:"p"},"propietario")," del contrato debe iniciar el proceso de ",(0,n.kt)("em",{parentName:"p"},"renuncia a la propiedad")," que comienza una cuenta atr\xe1s de ",(0,n.kt)("strong",{parentName:"p"},"200 bloques")," que se dividen en dos ",(0,n.kt)("em",{parentName:"p"},"per\xedodos distintos"),". Los ",(0,n.kt)("strong",{parentName:"p"},"100 primeros bloques")," son de espera, un periodo en el que se puede reflexionar sobre el deseo de renunciar a la propiedad del contrato. Los ",(0,n.kt)("strong",{parentName:"p"},"segundos 100 bloques")," son para confirmar el proceso de renuncia a la propiedad. Despu\xe9s de que pasen un total de ",(0,n.kt)("strong",{parentName:"p"},"200 bloques")," desde el inicio, el proceso se reinicia."))),(0,n.kt)("p",null,"Adem\xe1s, esta norma define ganchos que llaman a la funci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},"universalReceiver(...)"))," del propietario actual y del nuevo propietario, si estas direcciones son contratos que implementan LSP1."),(0,n.kt)("h3",{id:"transferencia-de-la-propiedad-del-contrato"},"Transferencia de la propiedad del contrato"),(0,n.kt)("p",null,"El control del contrato se transfiere completamente ",(0,n.kt)("em",{parentName:"p"},"una vez que el nuevo propietario ha aceptado la nueva titularidad"),". A continuaci\xf3n se describen las 2 etapas de la transferencia de propiedad:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"El propietario anterior transfiere la propiedad a un nuevo propietario mediante la funci\xf3n ",(0,n.kt)("a",{parentName:"li",href:"/lukso-es/en/es/standards/smart-contracts/lsp14-ownable-2-step#transferownership"},(0,n.kt)("inlineCode",{parentName:"a"},"transferOwnership(...)")),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transfer Ownership",src:t(1714).Z,width:"1938",height:"515"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"El nuevo propietario reclama la propiedad del contrato llamando a la funci\xf3n ",(0,n.kt)("a",{parentName:"li",href:"/lukso-es/en/es/standards/smart-contracts/lsp14-ownable-2-step#acceptownership"},(0,n.kt)("inlineCode",{parentName:"a"},"acceptOwnership()")),"`.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Accept Ownership",src:t(8082).Z,width:"2648",height:"849"})),(0,n.kt)("p",null,"Al hacer que el nuevo propietario acepte la propiedad expl\xedcitamente, ",(0,n.kt)("strong",{parentName:"p"},"LSP14 - Propiedad 2-Pasos")," garantiza que el nuevo propietario tenga acceso a su direcci\xf3n."),(0,n.kt)("h4",{id:"gancho-de-transferencia-de-propiedad"},"Gancho de Transferencia de Propiedad"),(0,n.kt)("p",null,"Este gancho est\xe1 dise\xf1ado para ",(0,n.kt)("em",{parentName:"p"},"notificar al nuevo propietario")," del contrato que debe aceptar la propiedad.\nEl gancho se ejecuta siempre que el propietario ",(0,n.kt)("em",{parentName:"p"},"inicie el proceso de transferencia de propiedad")," y s\xf3lo si el nuevo propietario es un contrato que ",(0,n.kt)("strong",{parentName:"p"},"implemente LSP1"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transfer Ownership Notification",src:t(5928).Z,width:"2413",height:"932"})),(0,n.kt)("h4",{id:"ganchos-de-aceptaci\xf3n-de-propiedad"},"Ganchos de Aceptaci\xf3n de Propiedad"),(0,n.kt)("p",null,"Estos ganchos est\xe1n dise\xf1ados para ",(0,n.kt)("em",{parentName:"p"},"notificar al anterior y al nuevo propietario")," cuando la propiedad del contrato ha sido completamente transferida. Un gancho notifica al propietario anterior y el segundo notifica al nuevo propietario.\nCada gancho se ejecuta cada vez que el ",(0,n.kt)("em",{parentName:"p"},"nuevo propietario confirma el proceso de transferencia de propiedad"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El gancho que notifica al propietario anterior s\xf3lo se ejecuta si el propietario anterior es un contrato que ",(0,n.kt)("strong",{parentName:"li"},"implemente LSP1"),"."),(0,n.kt)("li",{parentName:"ul"},"El gancho que notifica al nuevo propietario s\xf3lo se ejecuta si el nuevo propietario es un contrato que ",(0,n.kt)("strong",{parentName:"li"},"implemente LSP1"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Accept Ownership Notification",src:t(7966).Z,width:"2475",height:"908"})),(0,n.kt)("h3",{id:"renuncia-a-la-titularidad-del-contrato"},"Renuncia a la titularidad del contrato"),(0,n.kt)("p",null,"La renuncia a la titularidad del contrato se produce ",(0,n.kt)("em",{parentName:"p"},"una vez que el titular del contrato confirma la renuncia a la titularidad"),". A continuaci\xf3n se describen los 2 pasos de la renuncia a la propiedad:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"El propietario inicia el proceso de renuncia a la titularidad a trav\xe9s de la funci\xf3n ",(0,n.kt)("a",{parentName:"li",href:"/lukso-es/en/es/standards/smart-contracts/lsp14-ownable-2-step#renounceownership"},"'renounceOwnership()'"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Despu\xe9s de esperar 100 bloques desde el inicio del proceso de renuncia a la propiedad, el propietario tiene una ventana de 100 bloques para confirmar la renuncia a trav\xe9s de ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp14-ownable-2-step#renounceownership"},"'renounceOwnership()'"),". Si el propietario no confirma en esa ventana de tiempo, el proceso no puede ser confirmado y el propietario debe empezar de nuevo si su intenci\xf3n era renunciar a la propiedad."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Renounce Ownership",src:t(3923).Z,width:"5981",height:"2674"})))}c.isMDXComponent=!0},7966:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/accept-ownership-notification-28add1b54eaf7a199b67acd33f66aa9a.jpeg"},8082:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/accept-ownership-7af5143013ef19d31ec8fd54d85bbdce.jpeg"},3923:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/renounce-ownership-d04c5c5463c72c0e405489eaaf6f6cad.jpeg"},5928:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/transfer-ownership-notification-c7512e54088f107acc3b65d9adc98de3.jpeg"},1714:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/transfer-ownership-896f04977f780d018400d7f7e2e5ce70.jpeg"}}]);