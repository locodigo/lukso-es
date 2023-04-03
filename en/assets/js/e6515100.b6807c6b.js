"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8778],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3736:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={title:"LSP4DigitalAssetMetadata",sidebar_position:7},i="LSP4DigitalAssetMetadata",l={unversionedId:"es/standards/smart-contracts/lsp4-digital-asset-metadata",id:"es/standards/smart-contracts/lsp4-digital-asset-metadata",title:"LSP4DigitalAssetMetadata",description:"LSP4DigitalAssetMetadata.sol",source:"@site/docs/es/standards/smart-contracts/lsp4-digital-asset-metadata.md",sourceDirName:"es/standards/smart-contracts",slug:"/es/standards/smart-contracts/lsp4-digital-asset-metadata",permalink:"/lukso-es/en/es/standards/smart-contracts/lsp4-digital-asset-metadata",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/smart-contracts/lsp4-digital-asset-metadata.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:7,frontMatter:{title:"LSP4DigitalAssetMetadata",sidebar_position:7},sidebar:"standardsSidebar",previous:{title:"LSP1UniversalReceiverDelegateVault",permalink:"/lukso-es/en/es/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},next:{title:"LSP6KeyManager",permalink:"/lukso-es/en/es/standards/smart-contracts/lsp6-key-manager"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Events",id:"events",level:2},{value:"DataChanged",id:"datachanged",level:3},{value:"Values:",id:"values",level:4},{value:"References",id:"references",level:2}],p={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp4digitalassetmetadata"},"LSP4DigitalAssetMetadata"),(0,r.kt)("admonition",{title:"Solidity contract",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP4DigitalAssetMetadata/LSP4DigitalAssetMetadata.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP4DigitalAssetMetadata.sol")))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"LSP4DigitalAssetMetadata")," is a contract that sets the ",(0,r.kt)("strong",{parentName:"p"},"Token-Metadata")," (name and symbol) for the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/smart-contracts/lsp7-digital-asset"},"LSP7DigitalAsset"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8IdentifiableDigitalAsset"))," token contracts."),(0,r.kt)("p",null,"As this contract uses ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-725"},"ERC725Y General Data Key/Value Store"))," to set the metadata, any information could be added, such as the ",(0,r.kt)("strong",{parentName:"p"},"list of creators, JSON files"),", etc."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"The LSP4DigitalAssetMetadata contract contains the methods from the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y Standard"),":")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(bytes32 key, bytes memory value) public;\n\nfunction getData(bytes32 key) public view returns (bytes memory);\n\nfunction setData(bytes32[] memory keys, bytes[] memory values) public;\n\nfunction getData(bytes32[] memory keys) public view returns (bytes[] memory);\n\n"))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(\n    string memory name_,\n    string memory symbol_,\n    address newOwner_\n) ERC725Y(newOwner_)\n")),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("strong",{parentName:"p"},"initial owner")," of the contract and the following data keys on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./lsp0-erc725-account#setdata"},"ERC725Y Data Key-Value Store")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name_"),": token's name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol_"),": token's symbol."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#supportedstandardslsp4digitalasset"},(0,r.kt)("strong",{parentName:"a"},"SupportedStandards:LSP4DigitalAsset"))," data key.")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"symbol_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The symbol of the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner of the contract.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"datachanged"},"DataChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event DataChanged(bytes32 dataKey, bytes dataValue)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"setData(...)")))," function is successfully executed.")),(0,r.kt)("h4",{id:"values"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data key which data value is set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data value to set.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataChanged")," event will emit only the first 256 bytes of ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue")," (for large values set in the ERC725Y storage).")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LUKSO Standards Proposals: LSP4 - DigitalAsset-Metadata (Standard Specification, GitHub)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/blob/develop/contracts/LSP4DigitalAssetMetadata"},"LSP4 - DigitalAsset-Metadata: Solidity implementations (GitHub)"))))}m.isMDXComponent=!0}}]);