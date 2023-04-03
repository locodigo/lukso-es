"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=s.createContext({}),l=function(e){var t=s.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return s.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||n;return a?s.createElement(k,o(o({ref:t},c),{},{components:a})):s.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<n;l++)o[l]=a[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=a(7462),r=(a(7294),a(3905));const n={sidebar_label:"LSP5 - Received Assets",sidebar_position:5},o="LSP5 - Received Assets",i={unversionedId:"es/standards/universal-profile/lsp5-received-assets",id:"es/standards/universal-profile/lsp5-received-assets",title:"LSP5 - Received Assets",description:"LSP5 - Received Assets",source:"@site/docs/es/standards/universal-profile/lsp5-received-assets.md",sourceDirName:"es/standards/universal-profile",slug:"/es/standards/universal-profile/lsp5-received-assets",permalink:"/lukso-es/en/es/standards/universal-profile/lsp5-received-assets",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/universal-profile/lsp5-received-assets.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"LSP5 - Received Assets",sidebar_position:5},sidebar:"standardsSidebar",previous:{title:"LSP3 - Universal Profile Metadata",permalink:"/lukso-es/en/es/standards/universal-profile/lsp3-universal-profile-metadata"},next:{title:"LSP6 - Key Manager",permalink:"/lukso-es/en/es/standards/universal-profile/lsp6-key-manager"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent?",id:"what-does-this-standard-represent",level:2},{value:"<code>LSP5ReceivedAssets[]</code>",id:"lsp5receivedassets",level:3},{value:"<code>LSP5ReceivedAssetsMap</code>",id:"lsp5receivedassetsmap",level:3},{value:"Flow",id:"flow",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp5---received-assets"},"LSP5 - Received Assets"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5 - Received Assets"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Keeping track of all the tokens that an address owns is currently unfeasible. If you want to know from which tokens you own, you need to manually import the token contract address and query the balance of your key in it each time for each token. This inconvenience brings light to the following problem: owning tokens without being aware because there are no ways of being notified about the tokens you have received in the first place."),(0,r.kt)("p",null,"One way to solve this problem is to create generic metadata keys that would register in the smart contract storage how many different tokens you own and the address of the transferred token contracts."),(0,r.kt)("h2",{id:"what-does-this-standard-represent"},"What does this standard represent?"),(0,r.kt)("admonition",{title:"Recommendation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to understand the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Generic Key/Value Store"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," Standards before going through the ERC725Y Data Keys.")),(0,r.kt)("p",null,"This Metadata standard describes two data keys that can be added to an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," smart contract to reference and keep track of received assets."),(0,r.kt)("h3",{id:"lsp5receivedassets"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP5ReceivedAssets[]")),(0,r.kt)("p",null,"This data key represents a list of all tokens and NFTs currently owned by the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssets[]",\n  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("admonition",{title:"Recommendation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is advised to query the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"LSP5ReceivedAssets[]"))," data key to verify if a contract supports the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/lukso-es/en/es/standards/universal-profile/lsp5-received-assets"},"LSP5 - ReceivedAsset"))," standard.")),(0,r.kt)("h3",{id:"lsp5receivedassetsmap"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP5ReceivedAssetsMap")),(0,r.kt)("p",null,"This data key represents a map key, both holding:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 interface ID")," to quickly identify the standard used by each asset smart contract (without the need to query the asset contracts directly)."),(0,r.kt)("li",{parentName:"ul"},"the index in the ",(0,r.kt)("a",{parentName:"li",href:"#lsp5receivedassets-"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP5ReceivedAssets[]"))," Array where the received asset addresses are stored.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP5ReceivedAssetsMap")," data key also helps to prevent adding duplications to the array when automatically added via smart contract (",(0,r.kt)("em",{parentName:"p"},"e.g., ")," an ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/generic-standards/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssetsMap:<address>",\n  "key": "0x812c4334633eb816c80d0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The data keys are also set on the ",(0,r.kt)("strong",{parentName:"p"},"sender Universal Profile")," to remove the token contract address if all the balance is sent.")),(0,r.kt)("p",null,"If set when transferring tokens, these data keys are automatically updated in the Universal Profile storage via the ",(0,r.kt)("a",{parentName:"p",href:"/lukso-es/en/es/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")," contract."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check the ",(0,r.kt)("a",{parentName:"p",href:"../generic-standards/lsp1-universal-receiver-delegate#token-transfer-scenario"},"token transfer scenario")," for more details.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Token transfer detailed flow",src:a(8173).Z,width:"2933",height:"1363"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP5 Received Assets Flow",src:a(385).Z,width:"3198",height:"1250"})))}p.isMDXComponent=!0},8173:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/detailed-token-transfer-683af83aa3a6726c1cd27f496d436583.jpeg"},385:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/lsp5-received-assets-ead4e9740c47a3bcfd989049a3aeb853.jpeg"}}]);