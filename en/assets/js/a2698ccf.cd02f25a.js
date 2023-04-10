"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2240],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,N=c["".concat(d,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"ERC725",sidebar_position:3},i="ERC725",o={unversionedId:"es/standards/smart-contracts/erc725-contract",id:"es/standards/smart-contracts/erc725-contract",title:"ERC725",description:"ERC725.sol",source:"@site/docs/es/standards/smart-contracts/erc725-contract.md",sourceDirName:"es/standards/smart-contracts",slug:"/es/standards/smart-contracts/erc725-contract",permalink:"/lukso-es/en/es/standards/smart-contracts/erc725-contract",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/smart-contracts/erc725-contract.md",tags:[],version:"current",lastUpdatedAt:1681103476,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:3,frontMatter:{title:"ERC725",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"ID de interfaces",permalink:"/lukso-es/en/es/standards/smart-contracts/interface-ids"},next:{title:"LSP0ERC725Account",permalink:"/lukso-es/en/es/standards/smart-contracts/lsp0-erc725-account"}},d={},p=[{value:"Funciones",id:"funciones",level:2},{value:"constructor",id:"constructor",level:3},{value:"Par\xe1metros:",id:"par\xe1metros",level:4},{value:"owner",id:"owner",level:3},{value:"Devuelve la direcci\xf3n del propietario actual del contrato inteligente.",id:"devuelve-la-direcci\xf3n-del-propietario-actual-del-contrato-inteligente",level:4},{value:"Valores Devueltos::",id:"valores-devueltos",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-1",level:4},{value:"execute - ERC725X",id:"execute---erc725x",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-2",level:4},{value:"Valores Devueltos:",id:"valores-devueltos-1",level:4},{value:"execute (Array) - ERC725X",id:"execute-array---erc725x",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-3",level:4},{value:"Valores Devueltos:",id:"valores-devueltos-2",level:4},{value:"setData - ERC725Y",id:"setdata---erc725y",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-4",level:4},{value:"getData - ERC725Y",id:"getdata---erc725y",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-5",level:4},{value:"Valores Devueltos:",id:"valores-devueltos-3",level:4},{value:"setData (Array) - ERC725Y",id:"setdata-array---erc725y",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-6",level:4},{value:"getData (Array) - ERC725Y",id:"getdata-array---erc725y",level:3},{value:"Par\xe1metros:",id:"par\xe1metros-7",level:4},{value:"Valores Devueltos:",id:"valores-devueltos-4",level:4},{value:"Events",id:"events",level:2},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Valores:",id:"valores",level:4},{value:"Executed",id:"executed",level:3},{value:"Valores:",id:"valores-1",level:4},{value:"ContractCreated",id:"contractcreated",level:3},{value:"Valores:",id:"valores-2",level:4},{value:"DataChanged",id:"datachanged",level:3},{value:"Valores:",id:"valores-3",level:4},{value:"Referencias",id:"referencias",level:2}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc725"},"ERC725"),(0,r.kt)("admonition",{title:"Conrtato Solidity",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/ERC725/blob/develop/implementations/contracts/ERC725.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC725.sol")))),(0,r.kt)("p",null,"El ",(0,r.kt)("strong",{parentName:"p"},"ERC725")," es el contrato que combina:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ERC725X"),": contrato que permite una ejecuci\xf3n gen\xe9rica utilizando diferentes tipos de operaciones.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ERC725Y"),": contrato que permite un almacenamiento gen\xe9rico de datos en un contrato inteligente."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"El contrato ERC725 tambi\xe9n contiene el m\xe9todo de ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceId) public view returns (bool)\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"funciones"},"Funciones"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address initialOwner)\n")),(0,r.kt)("p",null,"Establece el ",(0,r.kt)("strong",{parentName:"p"},"propietario inicial")," del contrato."),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La direcci\xf3n a establecer como propietaria del contrato.")))),(0,r.kt)("h3",{id:"owner"},"owner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() public view returns (address owner)\n")),(0,r.kt)("p",null,"Devuelve la direcci\xf3n del propietario actual del contrato inteligente."),(0,r.kt)("h4",{id:"devuelve-la-direcci\xf3n-del-propietario-actual-del-contrato-inteligente"},"Devuelve la direcci\xf3n del propietario actual del contrato inteligente."),(0,r.kt)("h4",{id:"valores-devueltos"},"Valores Devueltos::"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El actual propietario del contrato.")))),(0,r.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner) public {\n")),(0,r.kt)("p",null,"Transfiere la propiedad del contrato a la direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"newOwner"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando se transfiere la propiedad, se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#ownershiptransferred"},"OwnershipTransferred")),".")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La direcci\xf3n a establecer como propietaria del contrato.")))),(0,r.kt)("h3",{id:"execute---erc725x"},"execute - ERC725X"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function execute(\n    uint256 operationType,\n    address target,\n    uint256 value,\n    bytes memory data\n) public payable returns (bytes memory result)\n")),(0,r.kt)("p",null,"Ejecuta una llamada en cualquier otro contrato inteligente, transfiere valor o despliega un nuevo contrato inteligente."),(0,r.kt)("p",null,"El ",(0,r.kt)("inlineCode",{parentName:"p"},"operationType")," puede ser el siguiente:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," para ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," para ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," para ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3")," para ",(0,r.kt)("inlineCode",{parentName:"li"},"STATICCALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4")," para ",(0,r.kt)("inlineCode",{parentName:"li"},"DELEGATECALL"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando una llamada se ejecuta con \xe9xito mediante las operaciones ",(0,r.kt)("inlineCode",{parentName:"em"},"CALL/STATICCALL/DELEGATECALL"),", se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#executed"},"Executed")),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando se crea un contrato inteligente mediante las operaciones ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE/CREATE2")," se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#contractcreated"},"ContractCreated")),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(...)")," s\xf3lo puede ser invocada por el propietario actual del contrato."),(0,r.kt)("p",{parentName:"admonition"},"Los tipos de operaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"staticcall")," (",(0,r.kt)("inlineCode",{parentName:"p"},"3"),") y ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," (",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") no permiten transferir valor.")),(0,r.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El tipo de operaci\xf3n que debe ejecutarse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La direcci\xf3n con la que interactuar. La direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," no se utilizar\xe1 si se crea un contrato (operaciones 1 y 2).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La cantidad de tokens nativos a transferir con la transacci\xf3n (en Wei).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los calldata (carga \xfatil codificada ABI de una funci\xf3n para ejecutar en otro contrato), o el bytecode del contrato a desplegar.")))),(0,r.kt)("h4",{id:"valores-devueltos-1"},"Valores Devueltos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los datos devueltos por la funci\xf3n llamada en el contrato externo, o la direcci\xf3n del contrato creado (operaciones 1 y 2).")))),(0,r.kt)("h3",{id:"execute-array---erc725x"},"execute (Array) - ERC725X"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function execute(\n    uint256[] memory operationsType,\n    address[] memory targets,\n    uint256[] memory values,\n    bytes[] memory datas\n) public payable returns (bytes[] memory results)\n")),(0,r.kt)("p",null,"Ejecuta lotes de llamadas en cualquier otro contrato inteligente, transfiere valor o despliega un nuevo contrato inteligente."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando una llamada se ejecuta con \xe9xito mediante las operaciones ",(0,r.kt)("inlineCode",{parentName:"em"},"CALL/STATICCALL/DELEGATECALL"),", se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#executed"},"Executed"))," en cada iteraci\xf3n de llamada.")," "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando se crea un contrato inteligente mediante las operaciones ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE/CREATE2"),", se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#contractcreated"},"ContractCreated"))," en cada iteraci\xf3n de creaci\xf3n de contrato.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(...)")," s\xf3lo puede ser invocada por el propietario actual del contrato.")),(0,r.kt)("h4",{id:"par\xe1metros-3"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationsType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La lista de operaciones que deben ejecutarse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"targets")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La lista de direcciones con las que interactuar. Las direcciones ",(0,r.kt)("inlineCode",{parentName:"td"},"targets")," no se utilizar\xe1n si se crea un contrato (operaciones 1 y 2).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La lista de la cantidad de tokens nativos a transferir con la transacci\xf3n (en Wei).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"datas")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La lista de calldata (carga \xfatil codificada ABI de una funci\xf3n para ejecutar en otro contrato), o la lista de bytecodes de contratos a desplegar.")))),(0,r.kt)("h4",{id:"valores-devueltos-2"},"Valores Devueltos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La matriz de datos devuelta por las funciones invocadas en el contrato externo, o las direcciones de los contratos creados (operaciones 1 y 2).")))),(0,r.kt)("h3",{id:"setdata---erc725y"},"setData - ERC725Y"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(\n    bytes32 dataKey,\n    bytes memory dataValue\n) public\n")),(0,r.kt)("p",null,"Establece un valor en el almacenamiento de la cuenta para una clave de datos concreta."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando los datos se establecen correctamente, se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#datachanged"},"DataChanged")),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)")," s\xf3lo puede ser invocada por el propietario actual del contrato.")),(0,r.kt)("h4",{id:"par\xe1metros-4"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La clave de datos para la que se establecer\xe1n los datos.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los datos a establecer.")))),(0,r.kt)("h3",{id:"getdata---erc725y"},"getData - ERC725Y"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getData(bytes32 dataKey) public view returns (bytes memory dataValue)\n")),(0,r.kt)("p",null,"Recupera el conjunto de valores para la clave de datos dada."),(0,r.kt)("h4",{id:"par\xe1metros-5"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La clave de datos de la que recuperar los datos.")))),(0,r.kt)("h4",{id:"valores-devueltos-3"},"Valores Devueltos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Los datos de la clave solicitada.")))),(0,r.kt)("h3",{id:"setdata-array---erc725y"},"setData (Array) - ERC725Y"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(\n    bytes32[] memory dataKeys,\n    bytes[] memory dataValues\n) public\n")),(0,r.kt)("p",null,"Establece un conjunto de datos en m\xfaltiples claves de datos en el almacenamiento de la cuenta."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cuando se establece correctamente cada par clave/valor de datos, se activa el evento ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#datachanged"},"DataChanged")),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)")," s\xf3lo puede ser invocada por el propietario actual del contrato.")),(0,r.kt)("h4",{id:"par\xe1metros-6"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Las claves de datos para las que establecer datos.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValues")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El conjunto de datos a establecer.")))),(0,r.kt)("h3",{id:"getdata-array---erc725y"},"getData (Array) - ERC725Y"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getData(bytes32[] memory dataKeys) public view returns (bytes[] memory dataValues)\n")),(0,r.kt)("p",null,"Recupera un conjunto de valores para m\xfaltiples claves de datos dadas."),(0,r.kt)("h4",{id:"par\xe1metros-7"},"Par\xe1metros:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Las claves de datos de las que recuperar datos.")))),(0,r.kt)("h4",{id:"valores-devueltos-4"},"Valores Devueltos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValues")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Un conjunto de datos para las claves de datos solicitadas.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(\n    address previousOwner,\n    address newOwner,\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"DEBE")," dispararse cuando la funci\xf3n ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#transferownership"},"transferOwnership(...)"))," se ejecute correctamente.")),(0,r.kt)("h4",{id:"valores"},"Valores:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"previousOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El propietario anterior del contrato.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El nuevo propietario del contrato.")))),(0,r.kt)("h3",{id:"executed"},"Executed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Executed(\n    uint256 operationType,\n    address target,\n    uint256 value,\n    bytes4 selector\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"DEBE")," dispararse cuando la funci\xf3n ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)")))," crea una nueva llamada utilizando la operaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"em"},"CALL"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"STATICCALL"),", o ",(0,r.kt)("inlineCode",{parentName:"em"},"DELEGATECALL"),".")),(0,r.kt)("h4",{id:"valores-1"},"Valores:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Un ",(0,r.kt)("strong",{parentName:"td"},"0")," (para ",(0,r.kt)("inlineCode",{parentName:"td"},"CALL"),"), un ",(0,r.kt)("strong",{parentName:"td"},"3")," (para ",(0,r.kt)("inlineCode",{parentName:"td"},"STATICCALL"),") o un ",(0,r.kt)("strong",{parentName:"td"},"3")," (para ",(0,r.kt)("inlineCode",{parentName:"td"},"DELEGATECALL"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El contrato inteligente o la direcci\xf3n a la que se ha llamado.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El valor que se transfiere.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El selector bytes4 de la funci\xf3n llamada en la direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"target"),".")))),(0,r.kt)("h3",{id:"contractcreated"},"ContractCreated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event ContractCreated(\n    uint256 operationType,\n    address contractAddress,\n    uint256 value,\n    bytes32 salt\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"DEBE")," dispararse cuando la funci\xf3n ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)")))," crea un nuevo contrato utilizando la operaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE")," o ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE2"),".")),(0,r.kt)("h4",{id:"valores-2"},"Valores:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Un ",(0,r.kt)("strong",{parentName:"td"},"1")," (para ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE"),") o un ",(0,r.kt)("strong",{parentName:"td"},"2")," (para ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE2"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La direcci\xf3n del contrato creado.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El valor enviado al contrato.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"salt")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La sal utilizada en la operaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE2"),". Ser\xe1 ",(0,r.kt)("inlineCode",{parentName:"td"},"bytes32(0)")," en el caso de la operaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE"),".")))),(0,r.kt)("h3",{id:"datachanged"},"DataChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event DataChanged(bytes32 dataKey, bytes dataValue)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"DEBE")," dispararse cuando la funci\xf3n ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"setData(...)")))," se ejecuta con \xe9xito.")),(0,r.kt)("h4",{id:"valores-3"},"Valores:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"La clave de datos cuyo valor se establece.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El valor de los datos a establecer.")))),(0,r.kt)("h2",{id:"referencias"},"Referencias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ERC725Alliance/ERC725/blob/develop/docs/ERC-725.md"},"ERC725 (Especificaci\xf3n est\xe1ndar, GitHub)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ERC725Alliance/ERC725/tree/develop/implementations"},"Implementaciones de Solidity (GitHub)"))))}s.isMDXComponent=!0}}]);