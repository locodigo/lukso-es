"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2463],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={title:"Standard Detection",sidebar_position:3},o="Standard Detection",i={unversionedId:"es/standards/standard-detection",id:"es/standards/standard-detection",title:"Standard Detection",description:"The interfaceId and the SupportedStandards: data key is not the most secure way to check for a standard, as they could be set manually.",source:"@site/docs/es/standards/standard-detection.md",sourceDirName:"es/standards",slug:"/es/standards/standard-detection",permalink:"/lukso-es/es/standards/standard-detection",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/standard-detection.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"30 mar 2023",sidebarPosition:3,frontMatter:{title:"Standard Detection",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"Hoja de ruta de los Est\xe1ndares",permalink:"/lukso-es/es/standards/standards-roadmap"},next:{title:"ERC725",permalink:"/lukso-es/es/standards/lsp-background/erc725"}},d={},l=[{value:"Interface Detection",id:"interface-detection",level:2},{value:"Interface Example",id:"interface-example",level:3},{value:"Metadata Detection",id:"metadata-detection",level:2},{value:"Metadata Example",id:"metadata-example",level:3},{value:"Further information",id:"further-information",level:2}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standard-detection"},"Standard Detection"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interfaceId"))," and the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SupportedStandards:{StandardName}"))," data key is not the most secure way to check for a standard, as they could be set manually.")),(0,r.kt)("p",null,"There are two types of ",(0,r.kt)("strong",{parentName:"p"},"LSP")," standards used to interact with smart contracts on the LUKSO blockchain."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Standard Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Interface Standards")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Standardize a set of functions"),". ",(0,r.kt)("br",null)," Defines the functions that can be called on a smart contract and their expected parameters"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/universal-profile/lsp0-erc725account"},"LSP0-ERC725Account")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager"},"LSP6-KeyManager")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/nft-2.0/LSP7-Digital-Asset"},"LSP7-DigitalAsset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Metadata Standards")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Standardize a set of ERC725Y data keys"),". ",(0,r.kt)("br",null)," Informs about the data set by default on the contract and which data keys to query to retrieve such data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3-UniversalProfile-Metadata")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4-DigitalAsset-Metadata")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/lukso-es/es/standards/universal-profile/lsp10-received-vaults"},"LSP10ReceivedVaults"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interface and metadata standards",src:a(16).Z,width:"3010",height:"1328"})),(0,r.kt)("h2",{id:"interface-detection"},"Interface Detection"),(0,r.kt)("admonition",{title:"Tip",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"See the page ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./smart-contracts/interface-ids"},"Contracts Implementation > Interface IDs"))," for a complete list of current ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaceId")," fields.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section covers how to detect if a contract implements a specific interface.")),(0,r.kt)("p",null,"We can verify if a contract implements a specific set of functions (= an ",(0,r.kt)("strong",{parentName:"p"},"interface"),") using the function ",(0,r.kt)("inlineCode",{parentName:"p"},"supportsInterface(interfaceId)"),", passing the bytes4 ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaceId")," as a parameter."),(0,r.kt)("p",null,"Calling this function will return ",(0,r.kt)("strong",{parentName:"p"},"TRUE")," if the contract implements this specific interfaceId, ",(0,r.kt)("strong",{parentName:"p"},"FALSE")," otherwise."),(0,r.kt)("h3",{id:"interface-example"},"Interface Example"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp3-universal-profile-metadata"},"Universal Profile"))," is a contract based on ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp0-erc725account"},"ERC725Account"),"(LSP0). Therefore, the contract SHOULD implement the functions defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md#interface-cheat-sheet"},"ERC725Account interface"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport Web3 from 'web3';\n\n// Connect to the LUKSO L14 network\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// Create an instance of the Universal Profile\nconst myUPContract = new web3.eth.Contract(UniversalProfile.abi, '<contract-address>');\n\nconst ERC725AccountInterfaceId = '0x63cb749b';\nawait myUPContract.methods.supportsInterface(ERC725AccountInterfaceId).call();\n// true or false\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 - Standard Interface Detection")," for more details.")),(0,r.kt)("h2",{id:"metadata-detection"},"Metadata Detection"),(0,r.kt)("admonition",{title:"Tip",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725.js/tree/develop/src/schemas"},"erc725.js"))," GitHub repository lists all the ",(0,r.kt)("inlineCode",{parentName:"p"},"SupportedStandards:{StandardName}")," data keys under each ERC725Y JSON Schema.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section covers how to detect if a contract contains a specific set of ERC725Y in its storage.")),(0,r.kt)("p",null,"We can verify if a contract contains a specific set of ERC725 keys (= ",(0,r.kt)("strong",{parentName:"p"},"metadata"),") by checking the value stored under the key ",(0,r.kt)("inlineCode",{parentName:"p"},"SupportedStandards:{StandardName}")," in the contract storage, via the function ",(0,r.kt)("inlineCode",{parentName:"p"},"getData(SupportedStandards:{StandardName})"),"."),(0,r.kt)("p",null,"Calling this function will return a specific bytes4 value (defined in the Metadata Standard) if the contract has some metadata keys set by default. Otherwise, it will return an empty value."),(0,r.kt)("h3",{id:"metadata-example"},"Metadata Example"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/nft-2.0/LSP7-Digital-Asset"},"LSP7DigitalAsset"))," is a contract that contains ERC725Y Data keys defined in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4 - Digital Asset Metadata")),". Therefore, the contract ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," have the following ERC725Y Data keys set by default: ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP4TokenName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP4TokenSymbol"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP4Metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP4CreatorsMap:<address>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP4Creators[]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7DigitalAsset from '@lukso/lsp-smart-contracts/artifacts/LSP7DigitalAsset.json';\nimport Web3 from 'web3';\n\n// Connect to the LUKSO L14 network\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// Create an instance of the LSP7 Token\nconst myTokenContract = new web3.eth.Contract(LSP7DigitalAsset.abi, '<contract-address>');\n\nconst SupportedStandards_LSP4 =\n  '0xeafec4d89fa9619884b60000a4d96624a38f7ac2d8d9a604ecf07c12c77e480c';\nawait myTokenContract.methods['getData(bytes32[])']([SupportedStandards_LSP4,]).call();\n// 0xa4d96624 -> valid result according to LSP4\n")),(0,r.kt)("h2",{id:"further-information"},"Further information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lukso-es/es/guides/universal-profile/check-if-address-is-universal-profile"},"How to check if an address is a Universal Profile? - (LUKSO Docs)"))))}p.isMDXComponent=!0},16:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/standard-detection-4c0d80cbc21fea820ec34e345dc96a8e.jpeg"}}]);