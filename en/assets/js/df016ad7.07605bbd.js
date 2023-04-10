"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4024],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(k,s(s({ref:a},d),{},{components:t})):n.createElement(k,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8413:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"ERC725",sidebar_position:1},s="ERC725",i={unversionedId:"es/standards/lsp-background/erc725",id:"es/standards/lsp-background/erc725",title:"ERC725",description:"ERC725 - Ejecutor General y Almac\xe9n de Claves/Valores de Datos",source:"@site/docs/es/standards/lsp-background/erc725.md",sourceDirName:"es/standards/lsp-background",slug:"/es/standards/lsp-background/erc725",permalink:"/lukso-es/en/es/standards/lsp-background/erc725",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/lsp-background/erc725.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"ERC725",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"Detecci\xf3n de Est\xe1ndares",permalink:"/lukso-es/en/es/standards/standard-detection"},next:{title:"LSP1 - Receptor Universal",permalink:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver"}},c={},l=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"ERC725X",id:"erc725x",level:2},{value:"Especificaci\xf3n",id:"especificaci\xf3n",level:3},{value:"ERC725Y Almacenamiento Gen\xe9rico de Claves/Valores de Datos",id:"erc725y-almacenamiento-gen\xe9rico-de-clavesvalores-de-datos",level:2},{value:"Especificaci\xf3n",id:"especificaci\xf3n-1",level:3},{value:"Contrato normal vs ERC725Y",id:"contrato-normal-vs-erc725y",level:4},{value:"Representaci\xf3n de datos ERC725Y",id:"representaci\xf3n-de-datos-erc725y",level:4},{value:"Propiedad",id:"propiedad",level:2}],d={toc:l};function p(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc725"},"ERC725"),(0,r.kt)("admonition",{title:"Documento Est\xe1ndard",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/ERC725/blob/develop/docs/ERC-725.md"},"ERC725 - Ejecutor General y Almac\xe9n de Claves/Valores de Datos"))),(0,r.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,r.kt)("p",null,"Las EOAs (Externally Owned Accounts - Cuentas de Propiedad Externa) est\xe1n controladas por claves privadas y pueden realizar operaciones espec\xedficas como ",(0,r.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f1"},(0,r.kt)("strong",{parentName:"a"},"CALL"))," para interactuar con otras direcciones y ",(0,r.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f0"},(0,r.kt)("strong",{parentName:"a"},"CREATE"))," para crear otros contratos inteligentes. Sin embargo, no tienen ninguna l\xf3gica interna ni capacidad de almacenamiento."),(0,r.kt)("p",null,"Los contratos inteligentes, por otro lado, pueden ser controlados por EOAs u otros contratos inteligentes, que proporcionan un mecanismo flexible de gesti\xf3n de la propiedad. Pueden almacenar datos y realizar operaciones m\xe1s complejas, lo que los hace \xfatiles para una amplia gama de casos de uso, incluidos activos digitales, aplicaciones descentralizadas, DAO y cuentas basadas en contratos inteligentes."),(0,r.kt)("h2",{id:"erc725x"},"ERC725X"),(0,r.kt)("p",null,"Existe una creciente necesidad de m\xe1s funcionalidades m\xe1s all\xe1 de las b\xe1sicas ",(0,r.kt)("strong",{parentName:"p"},"CALL")," y ",(0,r.kt)("strong",{parentName:"p"},"CREATE")," que pueden hacer las cuentas de propiedad externa (EOA). Estos dos opcodes permiten interactuar con otras direcciones en la blockchain para realizar tareas como llamar a funciones, transferir tokens nativos y crear nuevos contratos. A medida que aumenta el n\xfamero de casos de uso de los contratos inteligentes, tambi\xe9n lo hace la necesidad de funciones adicionales."),(0,r.kt)("p",null,"Una de ellas es la capacidad de manipular el almacenamiento de un contrato y ejecutar la l\xf3gica de otros contratos en el contexto de quien llama (delegatecall), lo que no es posible con EOA pero puede ser \xfatil para ampliar la l\xf3gica de un contrato. Adem\xe1s, la capacidad de crear contratos en direcciones predeterminadas (CREATE2), as\xed como, la realizaci\xf3n de llamadas sin causar ning\xfan cambio de estado (staticcall) son tambi\xe9n caracter\xedsticas importantes que actualmente no est\xe1n disponibles para EOA."),(0,r.kt)("p",null,"La necesidad de estas operaciones adicionales pone de manifiesto la importancia de tener m\xe1s funcionalidad incorporada en los contratos inteligentes. Este est\xe1ndar tiene como objetivo proporcionar esta funcionalidad y permitir la creaci\xf3n de contratos inteligentes m\xe1s avanzados y vers\xe1tiles."),(0,r.kt)("h3",{id:"especificaci\xf3n"},"Especificaci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ERC725X")," es un est\xe1ndar que proporciona cuatro tipos de operaciones que se pueden realizar en un contrato inteligente. Estas operaciones se definen como sigue:"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"La operaci\xf3n DELEGATECALL es muy peligrosa ya que puede alterar el estado del contrato y tambi\xe9n cambiar variables propietarias a voluntad. Adem\xe1s, puede destruir el contrato llamando a la autodestrucci\xf3n de otros contratos.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"N\xfamero de operaci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Tipo de operaci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f1"},(0,r.kt)("inlineCode",{parentName:"a"},"CALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transfiere tokens nativos o llama a funciones de contratos inteligentes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f0"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Crea un nuevo contrato inteligente basado en la direcci\xf3n del contrato y el nonce.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1014"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Crea un nuevo contrato inteligente basado en la direcci\xf3n del contrato, el c\xf3digo de bytes y la sal. La direcci\xf3n puede estar predeterminada.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-214"},(0,r.kt)("inlineCode",{parentName:"a"},"STATICCALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Llama a otro contrato inteligente sin permitir ninguna modificaci\xf3n del estado durante la llamada.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-7"},(0,r.kt)("inlineCode",{parentName:"a"},"DELEGATECALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ejecuta la funci\xf3n desde otro contrato, pero utiliza el contexto del contrato actual.")))),(0,r.kt)("h2",{id:"erc725y-almacenamiento-gen\xe9rico-de-clavesvalores-de-datos"},"ERC725Y Almacenamiento Gen\xe9rico de Claves/Valores de Datos"),(0,r.kt)("p",null,"Utilizar contratos inteligentes para almacenar datos en la blockchain puede ser ventajoso cuando esos datos ser\xe1n utilizados o referenciados por otros contratos inteligentes."),(0,r.kt)("p",null,"Una limitaci\xf3n de este enfoque es que una vez que un contrato inteligente se despliega con un conjunto espec\xedfico de variables que contienen datos, no puede modificarse para incluir nuevas variables. Esto puede suponer un problema si es necesario almacenar datos adicionales en el futuro, ya que requerir\xeda desplegar una nueva versi\xf3n del contrato."),(0,r.kt)("p",null,"Por ejemplo, si un contrato de tokens se despliega con variables para el nombre del token, el s\xedmbolo y los decimales, no es posible a\xf1adir nuevas variables para los creadores o futuros colaboradores."),(0,r.kt)("p",null,"Lo que se necesita es una forma din\xe1mica de adjuntar datos a un contrato incluso despu\xe9s de que se haya desplegado."),(0,r.kt)("h3",{id:"especificaci\xf3n-1"},"Especificaci\xf3n"),(0,r.kt)("p",null,"ERC725Y resuelve este problema estandarizando un mapeo de ",(0,r.kt)("strong",{parentName:"p"},"claves de datos")," a ",(0,r.kt)("strong",{parentName:"p"},"valores de datos")," para almacenar datos din\xe1micamente y tener la capacidad de a\xf1adir o eliminar datos a lo largo del tiempo sin necesidad de volver a desplegar el contrato."),(0,r.kt)("p",null,"En lugar de representar la variable con un nombre espec\xedfico como ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),", o ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", etc . Se hace referencia a ellos como ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," clave de datos. Igual que solidity trata las variables bajo el cap\xf3."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Consulta la secci\xf3n ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/internals/layout_in_storage.html"},'"Disposici\xf3n de las variables de estado en el almacenamiento"'))," de la documentaci\xf3n de Solidity para obtener m\xe1s informaci\xf3n sobre la estructura del almacenamiento de contratos inteligentes.")),(0,r.kt)("h4",{id:"contrato-normal-vs-erc725y"},"Contrato normal vs ERC725Y"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Smart contract vs ERC725Y",src:t(8578).Z,width:"1431",height:"698"})),(0,r.kt)("p",null,"Gracias al ERC725Y, los contratos son m\xe1s interoperables, ya que su almacenamiento se representa de la misma manera. Los contratos y las interfaces pueden entonces leer y escribir datos desde o hacia el almacenamiento de la misma manera a trav\xe9s de las funciones ",(0,r.kt)("inlineCode",{parentName:"p"},"getData(...)")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)"),"."),(0,r.kt)("h4",{id:"representaci\xf3n-de-datos-erc725y"},"Representaci\xf3n de datos ERC725Y"),(0,r.kt)("p",null,"Dado que los datos se establecen en el almacenamiento del contrato como ",(0,r.kt)("strong",{parentName:"p"},"bytes32"),"/",(0,r.kt)("strong",{parentName:"p"},"bytes")," par clave/valor de datos, se debe estandarizar una representaci\xf3n de estos datos para evitar que cada usuario escriba los datos de una forma diferente y para tener la capacidad de getData del almacenamiento del contrato de otras personas de una forma unificada."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp2-json-schema"},"LSP2 - EsquemaJSONERC725Y"))," es el est\xe1ndar utilizado por los LSP para organizar c\xf3mo deben representarse los datos como pares ",(0,r.kt)("strong",{parentName:"p"},"bytes32"),"/",(0,r.kt)("strong",{parentName:"p"},"bytes"),"."),(0,r.kt)("h2",{id:"propiedad"},"Propiedad"),(0,r.kt)("p",null,"Una EOA (Externally Owned Account, Cuenta de Propiedad Externa) est\xe1 controlada por una clave privada, lo que significa que s\xf3lo el titular de esta ",(0,r.kt)("strong",{parentName:"p"},"clave privada")," puede ejecutar transacciones y realizar operaciones ",(0,r.kt)("strong",{parentName:"p"},"CALL o CREATE")," desde esta EOA. Esto puede ser limitante en ciertos casos de uso, como cuando es necesario compartir la capacidad de interactuar con la direcci\xf3n de m\xfaltiples individuos o entidades. Compartir la clave privada, sin embargo, comprometer\xeda la seguridad del EOA ya que cualquiera con acceso a la clave privada podr\xeda ejecutar transacciones desde el EOA."),(0,r.kt)("p",null,"Una soluci\xf3n a este problema es utilizar un contrato inteligente, que puede programarse para tener direcciones espec\xedficas que puedan ejecutar transacciones."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("strong",{parentName:"a"},"ERC725"))," utiliza el est\xe1ndar ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},(0,r.kt)("strong",{parentName:"a"},"ERC173"))," para la gesti\xf3n de la propiedad. Bajo este est\xe1ndar, una direcci\xf3n es designada como propietaria del contrato, y es la \xfanica capaz de interactuar con otras direcciones y crear contratos usando las funciones ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(..)"),". El propietario es tambi\xe9n el \xfanico capaz de establecer datos en el contrato utilizando la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(..)"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Owner ERC725",src:t(1172).Z,width:"1360",height:"735"})),(0,r.kt)("p",null,"Este m\xe9todo proporciona un control significativo sobre qui\xe9n puede acceder y operar el contrato, y elimina la necesidad de compartir claves privadas. El propietario del contrato se define como una direcci\xf3n, que puede ser una EOA (Externally Owned Account) u otro contrato con caracter\xedsticas espec\xedficas, como un contrato de votaci\xf3n DAO o un GestordeClaves."))}p.isMDXComponent=!0},1172:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ERC725Owner-456d267de2e1f0f91b09a4cb582bd38b.jpeg"},8578:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/SmartContractVsERC725Y-5fb112871420acaa92febe949762bbfb.jpeg"}}]);