"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=s,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_label:"LSP4 - Digital Asset Metadata",sidebar_position:2},o="LSP4 - Digital Asset Metadata",i={unversionedId:"es/standards/nft-2.0/LSP4-Digital-Asset-Metadata",id:"es/standards/nft-2.0/LSP4-Digital-Asset-Metadata",title:"LSP4 - Digital Asset Metadata",description:"LSP4 - Digital Asset Metadata",source:"@site/docs/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata.md",sourceDirName:"es/standards/nft-2.0",slug:"/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata",permalink:"/lukso-es/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"30 mar 2023",sidebarPosition:2,frontMatter:{sidebar_label:"LSP4 - Digital Asset Metadata",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"Introduction",permalink:"/lukso-es/es/standards/nft-2.0/introduction"},next:{title:"LSP7 - Digital Asset (Token)",permalink:"/lukso-es/es/standards/nft-2.0/LSP7-Digital-Asset"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"ERC725Y Data Keys",id:"erc725y-data-keys",level:2},{value:"<code>SupportedStandards:LSP4DigitalAsset</code>",id:"supportedstandardslsp4digitalasset",level:3},{value:"<code>LSP4TokenName</code>",id:"lsp4tokenname",level:3},{value:"<code>LSP4TokenSymbol</code>",id:"lsp4tokensymbol",level:3},{value:"<code>LSP4Metadata</code>",id:"lsp4metadata",level:3},{value:"<code>LSP4Creators</code>",id:"lsp4creators",level:3},{value:"References",id:"references",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp4---digital-asset-metadata"},"LSP4 - Digital Asset Metadata"),(0,s.kt)("admonition",{title:"Standard Document",type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4 - Digital Asset Metadata"))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"The existing tokens and NFTs standards offer limited functionalities to attach information to the contracts themselves. As an example, the ERC20 and ERC721 standards only define a ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"name()")),", ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"symbol()")),", and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"tokenURI()"))," functions. This makes it difficult to add information more specific to the asset (_e.g., an icon, the asset creator(s) , the utility or motive of the token, the community behind it, etc...). Such information is crucial to make each token or NFT descriptive and customised."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"LSP4-DigitalAsset-Metadata")," solves this problem by defining a set of data keys to describe a ",(0,s.kt)("strong",{parentName:"p"},"Digital Asset")," using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y")," as a backbone. ERC725Y enables smart contracts to have very flexible and extensible storage. With ERC725Y, any information or metadata can be attached to the token or NFT."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP4 Digital Asset Metadata diagram",src:a(2298).Z,width:"1846",height:"605"})),(0,s.kt)("h2",{id:"erc725y-data-keys"},"ERC725Y Data Keys"),(0,s.kt)("admonition",{title:"Recommendation",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Make sure to understand the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Generic Key/Value Store"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," Standards before going through the ERC725Y Data Keys.")),(0,s.kt)("h3",{id:"supportedstandardslsp4digitalasset"},(0,s.kt)("inlineCode",{parentName:"h3"},"SupportedStandards:LSP4DigitalAsset")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SupportedStandards:LSP4DigitalAsset",\n  "key": "0xeafec4d89fa9619884b60000a4d96624a38f7ac2d8d9a604ecf07c12c77e480c",\n  "keyType": "Mapping",\n  "valueType": "bytes4",\n  "valueContent": "0xa4d96624"\n}\n')),(0,s.kt)("p",null,"This key is used to know if the contract represents a ",(0,s.kt)("strong",{parentName:"p"},"Digital Asset"),"."),(0,s.kt)("h3",{id:"lsp4tokenname"},(0,s.kt)("inlineCode",{parentName:"h3"},"LSP4TokenName")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenName",\n  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,s.kt)("p",null,"The value attached to this data key represents the name of the digital asset."),(0,s.kt)("h3",{id:"lsp4tokensymbol"},(0,s.kt)("inlineCode",{parentName:"h3"},"LSP4TokenSymbol")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenSymbol",\n  "key": "0x2f0a68ab07768e01943a599e73362a0e17a63a72e94dd2e384d2c1d4db932756",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,s.kt)("p",null,"The value attached to this data key represents the symbol of the digital asset."),(0,s.kt)("h3",{id:"lsp4metadata"},(0,s.kt)("inlineCode",{parentName:"h3"},"LSP4Metadata")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4Metadata",\n  "key": "0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e",\n  "keyType": "Singleton",\n  "valueType": "bytes",\n  "valueContent": "JSONURL"\n}\n')),(0,s.kt)("p",null,"The value attached to this data key is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl"},(0,s.kt)("inlineCode",{parentName:"a"},"JSONURL")),". It represents a reference to a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#lsp4metadata"},"JSON file describing the ",(0,s.kt)("strong",{parentName:"a"},"Digital Asset")),". The file can be stored on centralized or decentralized storage."),(0,s.kt)("h3",{id:"lsp4creators"},(0,s.kt)("inlineCode",{parentName:"h3"},"LSP4Creators")),(0,s.kt)("p",null,"This data key refers to the ",(0,s.kt)("strong",{parentName:"p"},"address(es)")," of the ",(0,s.kt)("strong",{parentName:"p"},"creator(s)")," of the digital asset. It can help to check the ",(0,s.kt)("strong",{parentName:"p"},"asset authenticity")," when combined with ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp12-issued-assets"},"LSP12-IssuedAssets")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4Creators[]",\n  "key": "0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4CreatorsMap:<address>",\n  "key": "0x6de85eaf5d982b4e5da00000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LUKSO Standards Proposals: LSP4 - Digital Asset Metadata (Standard Specification, GitHub)"))))}c.isMDXComponent=!0},2298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp4-digital-asset-metadata-diagram-a03d5aa31f3c44a072f069b378968e19.png"}}]);