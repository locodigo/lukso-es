"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=s,h=m["".concat(l,".").concat(k)]||m[k]||c[k]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_label:"LSP7 - Digital Asset (Token)",sidebar_position:3},i="LSP7 - Digital Asset",o={unversionedId:"es/standards/nft-2.0/LSP7-Digital-Asset",id:"es/standards/nft-2.0/LSP7-Digital-Asset",title:"LSP7 - Digital Asset",description:"LSP7 - Digital Asset",source:"@site/docs/es/standards/nft-2.0/LSP7-Digital-Asset.md",sourceDirName:"es/standards/nft-2.0",slug:"/es/standards/nft-2.0/LSP7-Digital-Asset",permalink:"/lukso-es/en/es/standards/nft-2.0/LSP7-Digital-Asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/nft-2.0/LSP7-Digital-Asset.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"LSP7 - Digital Asset (Token)",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP4 - Digital Asset Metadata",permalink:"/lukso-es/en/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},next:{title:"LSP8 - Identifiable Digital Asset (NFT)",permalink:"/lukso-es/en/es/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What does this Standard represent?",id:"what-does-this-standard-represent",level:2},{value:"Specification",id:"specification",level:3},{value:"Divisible <em>vs</em> Non-Divisible",id:"divisible-vs-non-divisible",level:3},{value:"Unlimited Metadata",id:"unlimited-metadata",level:3},{value:"Force Boolean",id:"force-boolean",level:3},{value:"Token Hooks",id:"token-hooks",level:3},{value:"References",id:"references",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp7---digital-asset"},"LSP7 - Digital Asset"),(0,s.kt)("admonition",{title:"Standard Document",type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7 - Digital Asset"))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Fungible assets such as ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC20")),", ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-223"},"ERC223"))," or ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-777"},"ERC777"))," tokens have a lot of limitations in terms of metadata, secure transfers, and asset interaction. This causes problems for users seeking, ",(0,s.kt)("strong",{parentName:"p"},"full control")," over which assets they accept or not, and a ",(0,s.kt)("strong",{parentName:"p"},"simple user experience")," while creating, buying, and exchanging assets."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"LSP7-DigitalAsset"))," is the standard that aims to solve all problems mentioned above by:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Allowing more secure transfers via ",(0,s.kt)("strong",{parentName:"li"},"force boolean parameter"),"."),(0,s.kt)("li",{parentName:"ul"},"More asset metadata ",(0,s.kt)("strong",{parentName:"li"},"via ",(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4-DigitalAssetMetadata")),"."),(0,s.kt)("li",{parentName:"ul"},"More interaction between the asset contract and the asset ",(0,s.kt)("em",{parentName:"li"},"sender/recipient")," ",(0,s.kt)("strong",{parentName:"li"},"via token hooks"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP7DigitalAsset features Introduction",src:a(4938).Z,width:"2919",height:"1370"})),(0,s.kt)("h2",{id:"what-does-this-standard-represent"},"What does this Standard represent?"),(0,s.kt)("h3",{id:"specification"},"Specification"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"LSP7-DigitalAsset"))," is a standard that aims to describe fungible assets. The term ",(0,s.kt)("em",{parentName:"p"},"fungible")," means that these assets are ",(0,s.kt)("strong",{parentName:"p"},"mutually interchangeable")," (",(0,s.kt)("em",{parentName:"p"},"e.g., "),"one token has the same value as another token)."),(0,s.kt)("p",null,"LSP7-DigitalAsset is an interface standard which describes a set of methods that fungible asset contracts should implement which other contracts and clients can call."),(0,s.kt)("p",null,"This standard was based on ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC20"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-777"},"ERC777"))," with additional features mentioned below:"),(0,s.kt)("h3",{id:"divisible-vs-non-divisible"},"Divisible ",(0,s.kt)("em",{parentName:"h3"},"vs")," Non-Divisible"),(0,s.kt)("p",null,"When creating assets compliant with ",(0,s.kt)("strong",{parentName:"p"},"LSP7-DigitalAsset")," standard, it is possible to define the token as ",(0,s.kt)("strong",{parentName:"p"},"divisible")," or ",(0,s.kt)("strong",{parentName:"p"},"non-divisible")," in the constructor."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Divisible")," asset can have decimals (up to 18) and token amounts can be fractional. For instance, it is possible to mint or transfer less than one token (",(0,s.kt)("em",{parentName:"li"},"e.g., 0.3 tokens"),")."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Non-divisible")," asset means that a token cannot be divided into fractional parts. For instance, you cannot transfer ",(0,s.kt)("strong",{parentName:"li"},"1/10th")," of a token, or 0.3 tokens, but only a whole token unit.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tickets created as tokens")," are a great example of a use case of ",(0,s.kt)("strong",{parentName:"p"},"LSP7-DigitalAsset"),". All tickets look the same, are ",(0,s.kt)("strong",{parentName:"p"},"interchangeable")," and have the same utility. Moreover, such tickets can be made as ",(0,s.kt)("strong",{parentName:"p"},"non-divisible")," as it is only possible to sell or give away a whole ticket."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP7DigitalAsset Non Divisible Assets",src:a(6204).Z,width:"3254",height:"1229"})),(0,s.kt)("h3",{id:"unlimited-metadata"},"Unlimited Metadata"),(0,s.kt)("admonition",{title:"Recommendation",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To mark the ",(0,s.kt)("strong",{parentName:"p"},"asset authenticity"),", it's advised to use a combination between ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4-DigitalAssetMetadata"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/universal-profile/lsp12-issued-assets"},"LSP12-IssuedAssets")),".")),(0,s.kt)("p",null,"The current token standards don't enable attaching metadata to the contract in a generic and flexible way, they set the ",(0,s.kt)("strong",{parentName:"p"},"name"),", ",(0,s.kt)("strong",{parentName:"p"},"symbol"),", and ",(0,s.kt)("strong",{parentName:"p"},"tokenURI"),". This is limiting for a digital asset that may want to list the creators, the community behind it, and to have the ability to update the metadata of the token and the tokenIds over time depending on a certain logic (Evolving tokens)."),(0,s.kt)("p",null,"To ensure a flexible and generic asset representation, the token contract should use the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4-DigitalAsset-Metadata")),". In this way, any information could be attached to the token contract."),(0,s.kt)("h3",{id:"force-boolean"},"Force Boolean"),(0,s.kt)("p",null,"It is expected in the LUKSO's ecosystem to use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/universal-profile/lsp0-erc725account"},"smart contract-based accounts"))," to operate on the blockchain, which includes receiving and sending tokens. EOAs can receive tokens, but they will be used mainly to control these accounts and not to hold them."),(0,s.kt)("p",null,"To ensure a ",(0,s.kt)("strong",{parentName:"p"},"safe asset transfer"),", an additional boolean parameter was added to the ",(0,s.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp7-digital-asset#transfer"},"transfer")," and mint functions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If set to ",(0,s.kt)("strong",{parentName:"li"},"False"),", the transfer will only pass if the recipient is a smart contract that implements the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Token Force Boolean False",src:a(2299).Z,width:"3012",height:"1328"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It's advised to set the ",(0,s.kt)("strong",{parentName:"p"},"force")," bool as ",(0,s.kt)("strong",{parentName:"p"},"False")," when transferring or minting tokens to avoid sending them to the wrong address.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If set to ",(0,s.kt)("strong",{parentName:"li"},"TRUE"),", the transfer will not be dependent on the recipient, meaning ",(0,s.kt)("strong",{parentName:"li"},"smart contracts")," not implementing the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard and ",(0,s.kt)("strong",{parentName:"li"},"EOAs")," will be able to receive the tokens.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Token Force Boolean True",src:a(451).Z,width:"3005",height:"1330"})),(0,s.kt)("p",null,"Implementing the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard will give a sign that the contract knows how to handle the tokens received."),(0,s.kt)("h3",{id:"token-hooks"},"Token Hooks"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"When LSP7 assets are transfered, the LSP7 contract will notify the token sender and recipient using ",(0,s.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp7-digital-asset#_notifytokensender"},(0,s.kt)("inlineCode",{parentName:"a"},"_notifyTokenSender(...)"))," and ",(0,s.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp7-digital-asset#_notifytokenreceiver"},(0,s.kt)("inlineCode",{parentName:"a"},"_notifyTokenReceiver(...)")),"."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"These methods will make external calls")," to the ",(0,s.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,s.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)"))," functions of both the sender and recipient."),(0,s.kt)("p",{parentName:"admonition"},"This function could perform more complex logic, like delegating the call to the ",(0,s.kt)("inlineCode",{parentName:"p"},"LSP1UniversalReceiverDelegate")," contract. This contract can contain custom logic for each user. For instance, a user could decide to re-transfer the tokens to another address once they are transferred to his UP.")),(0,s.kt)("p",null,"The current token standards act as ",(0,s.kt)("strong",{parentName:"p"},"registry contracts")," that keep track of each address's balance. They do not implement functionalities to ",(0,s.kt)("strong",{parentName:"p"},"notify the recipient")," that it has received some tokens or to ",(0,s.kt)("strong",{parentName:"p"},"notify the sender")," that it has sent some tokens."),(0,s.kt)("p",null,"During an ",(0,s.kt)("strong",{parentName:"p"},"ERC20 token transfer"),", the sender's balance is decreased, and the recipient's balance is increased without further interaction."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ERC20 Transfer",src:a(3491).Z,width:"3000",height:"1333"})),(0,s.kt)("p",null,"During an ",(0,s.kt)("strong",{parentName:"p"},"LSP7 token transfer"),", as well as updating the balances, both the sender and recipient are informed of the transfer by calling the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver#lsp1---universal-receiver"},(0,s.kt)("inlineCode",{parentName:"a"},"universalReceiever(...)")))," function on their profiles."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP7DigitalAsset Transfer",src:a(9409).Z,width:"2920",height:"1369"})),(0,s.kt)("p",null,"In this way, users are ",(0,s.kt)("strong",{parentName:"p"},"informed")," about the token transfers and can decide how to ",(0,s.kt)("strong",{parentName:"p"},"react on the transfer"),", either by accepting or rejecting the tokens, or implementing a custom logic to run on each transfer with the help of ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate")),"."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LUKSO Standards Proposals: LSP7 - Digital Asset (Standard Specification, GitHub)"))))}c.isMDXComponent=!0},3491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-transfer-d5292ddbe85494f0109fb16eb6852264.jpeg"},4938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp7-intro-a6d1f1b3ab59fac7b1903df814f432af.jpeg"},6204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp7-non-divisible-e894009433838a73f8ef6a3f96cced35.jpeg"},9409:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp7-transfer-2ffa3fabeb00dfd8c18dfbcba422449f.jpeg"},2299:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tokens-force-false-faf1dea383def36585a7c2a183c5a784.jpeg"},451:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tokens-force-true-ce4b5638b7f5e3b63d72a733471aaca4.jpeg"}}]);