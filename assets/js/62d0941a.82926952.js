"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(c,s(s({ref:t},o),{},{components:a})):r.createElement(c,s({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"LSP10Utils",sidebar_position:4},s="LSP10Utils",i={unversionedId:"es/standards/smart-contracts/utils/lsp10-received-vaults-utils",id:"es/standards/smart-contracts/utils/lsp10-received-vaults-utils",title:"LSP10Utils",description:"LSP10Utils.sol",source:"@site/docs/es/standards/smart-contracts/utils/lsp10-received-vaults-utils.md",sourceDirName:"es/standards/smart-contracts/utils",slug:"/es/standards/smart-contracts/utils/lsp10-received-vaults-utils",permalink:"/lukso-es/es/standards/smart-contracts/utils/lsp10-received-vaults-utils",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/smart-contracts/utils/lsp10-received-vaults-utils.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"30 mar 2023",sidebarPosition:4,frontMatter:{title:"LSP10Utils",sidebar_position:4},sidebar:"standardsSidebar",previous:{title:"LSP6Utils",permalink:"/lukso-es/es/standards/smart-contracts/utils/lsp6-key-manager-utils"},next:{title:"\ud83d\udcec Relayer API",permalink:"/lukso-es/es/standards/relayer-api"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"generateReceivedVaultKeys",id:"generatereceivedvaultkeys",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"generateSentVaultKeys",id:"generatesentvaultkeys",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"extractIndexFromMap",id:"extractindexfrommap",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"References",id:"references",level:2}],o={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp10utils"},"LSP10Utils"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP10ReceivedVaults/LSP10Utils.sol"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP10Utils.sol")))),(0,n.kt)("p",null,"This library contains helper functions that can be used to generate ERC725Y data keys-values pairs related to LSP10 Received Vaults."),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"generatereceivedvaultkeys"},"generateReceivedVaultKeys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function generateReceivedVaultKeys(\n    address receiver,\n    address vault,\n    bytes32 vaultMapKey,\n    bytes4 interfaceID\n) internal view returns (bytes32[] memory keys, bytes[] memory values);\n")),(0,n.kt)("p",null,"Generate the data keys/values to register the address of a ",(0,n.kt)("inlineCode",{parentName:"p"},"vault")," on the ERC725Y storage of the ",(0,n.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"receiver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address receiving the vault and where the Keys should be added.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vault"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of the received vault.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vaultMapKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The map key constructed by concatenating LSP10Vault Map Prefix and ",(0,n.kt)("inlineCode",{parentName:"td"},"vault")," address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaceID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The interfaceID of the vault being received.")))),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keys")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of data keys, ",(0,n.kt)("inlineCode",{parentName:"td"},"LSP10Vaults[]"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"LSP10Vaults[index]"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"LSP10VaultsMap + vault address")," to be precise.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of data values.")))),(0,n.kt)("h3",{id:"generatesentvaultkeys"},"generateSentVaultKeys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function generateSentVaultKeys(\n    address sender,\n    bytes32 vaultMapKey,\n    bytes memory vaultInterfaceIdAndIndex\n) internal view returns (bytes32[] memory keys, bytes[] memory values);\n")),(0,n.kt)("p",null,"Generate the data keys/values to be set on the sender address after sending vaults."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address sending the vault and where the Keys should be updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vaultMapKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The map key of the vault being sent containing the interfaceId of the vault and the index in the array.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vaultInterfaceIdAndIndex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The value of the map key of the vault being sent.")))),(0,n.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keys")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of data keys.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of data values.")))),(0,n.kt)("h3",{id:"extractindexfrommap"},"extractIndexFromMap"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function extractIndexFromMap(\n    bytes memory mapValue\n) internal pure returns (uint64);\n")),(0,n.kt)("p",null,"Extracts the index from a mapping of ",(0,n.kt)("inlineCode",{parentName:"p"},"valueType")," (bytes8,bytes4) and ",(0,n.kt)("inlineCode",{parentName:"p"},"valueContent")," (Bytes4,Number).\nReturns an index of type uint64."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mapValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A bytes12 mapping of ",(0,n.kt)("inlineCode",{parentName:"td"},"valueType")," (bytes8,bytes4) and ",(0,n.kt)("inlineCode",{parentName:"td"},"valueContent")," (Bytes4,Number)")))),(0,n.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extracted index from mapping.")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/tree/develop/contracts"},"Solidity implementations (GitHub)"))))}m.isMDXComponent=!0}}]);