"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||s;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_label:"LSP17 - Contract Extension",sidebar_position:4},i="LSP17 - Contract Extension",r={unversionedId:"es/standards/generic-standards/lsp17-contract-extension",id:"es/standards/generic-standards/lsp17-contract-extension",title:"LSP17 - Contract Extension",description:"LSP17 - Contract Extension",source:"@site/docs/es/standards/generic-standards/lsp17-contract-extension.md",sourceDirName:"es/standards/generic-standards",slug:"/es/standards/generic-standards/lsp17-contract-extension",permalink:"/lukso-es/en/es/standards/generic-standards/lsp17-contract-extension",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/generic-standards/lsp17-contract-extension.md",tags:[],version:"current",lastUpdatedAt:1680197874,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"LSP17 - Contract Extension",sidebar_position:4},sidebar:"standardsSidebar",previous:{title:"LSP2 - ERC725Y JSON Schema",permalink:"/lukso-es/en/es/standards/generic-standards/lsp2-json-schema"},next:{title:"Introduction",permalink:"/lukso-es/en/es/standards/universal-profile/introduction"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"Specification",id:"specification",level:3},{value:"Extension Re-usability",id:"extension-re-usability",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Example",id:"example",level:3}],d={toc:l};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lsp17---contract-extension"},"LSP17 - Contract Extension"),(0,o.kt)("admonition",{title:"Standard Document",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-17-ContractExtension.md"},"LSP17 - Contract Extension"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Once a contract is deployed on the blockchain, it is not possible to modify the contract to add new native functions or change the behavior of existing ones. This can be a limitation for smart contracts, particularly those that may need to adapt to new use cases and standards over time."),(0,o.kt)("p",null,"What is required is a method to extend the functionalities of a smart contract even after it has been deployed, allowing it to continue to support new features over time."),(0,o.kt)("p",null,"A possible solution to this problem is to establish a system of extensions that can be added to a smart contract, enabling it to ",(0,o.kt)("strong",{parentName:"p"},"acquire new functionalities")," without the need for redeployment."),(0,o.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,o.kt)("p",null,"This standard defines a mechanism for extending a contract to support new functions through the use of ",(0,o.kt)("strong",{parentName:"p"},"extensions"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Normal contract Vs contract implementing LSP17",src:n(4063).Z,width:"1519",height:"658"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"smart contract A"))," implements 4 functions natively. Once this smart contract is deployed, no new functions can be added or changes made to the existing ones."),(0,o.kt)("p",null,"In contrast, the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"smart contract B")),", which supports the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#"},"LSP17 standard")),", does not implement any native functions but rather relies on extensions for the functionality that is needed and can add more extensions in the future."),(0,o.kt)("p",null,"Thus, smart contract B has the ability ",(0,o.kt)("strong",{parentName:"p"},"to support an unlimited number of functionalities")," and can add new functions in the future if desired."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Normal contract Vs contract implementing LSP17",src:n(3963).Z,width:"1552",height:"644"})),(0,o.kt)("p",null,"As shown in the figure above, smart contract B ",(0,o.kt)("strong",{parentName:"p"},"changed the extension")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute(..)")," function to a newer version, removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"depositToken(..)")," extension, and added new extension for ",(0,o.kt)("inlineCode",{parentName:"p"},"socialRecover(..)")," function."),(0,o.kt)("p",null,"This system of extensions allows for a smart contract to evolve and adapt to changes that may arise in the future. By implementing this system, smart contracts can become more versatile and capable of supporting a broader range of functionalities, even after deployment."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("p",null,"This standard defines two types of contracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"extendable contract"),", which is the contract whose functionality we want to extend.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"extension contract"),", which is the contract providing the functionality to be added to the extendable contract."))),(0,o.kt)("p",null,"When the extendable contract is called with a function that is not natively implemented, it checks the address of the extension mapped to that function."),(0,o.kt)("p",null,"If no extension is set for the function being called, the call ",(0,o.kt)("strong",{parentName:"p"},"MUST revert"),"."),(0,o.kt)("p",null,"But if an extension is set, the extendable contract will make a call to that extension using the ",(0,o.kt)("strong",{parentName:"p"},"CALL")," opcode, along with an additional calldata of 52 bytes containing the address of the caller (20 bytes) and the value sent along calling the function by the caller (32 bytes)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Calling An LSP17 Extension",src:n(8086).Z,width:"1373",height:"728"})),(0,o.kt)("p",null,"The 52 bytes of additional calldata appended to the call to the extension contract provides context about the caller and the value sent in the call, allowing the extension to validate the call based on these factors if desired."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This standard does not dictate a specific method for mapping function selectors to extensions or for setting or changing these extensions in the extendable contract, developers can choose their preferred approach.")),(0,o.kt)("h3",{id:"extension-re-usability"},"Extension Re-usability"),(0,o.kt)("p",null,"While contracts can deploy and customize their own extensions, many smart contracts ",(0,o.kt)("strong",{parentName:"p"},"share almost the same logic")," for certain functions. In this case, the same extensions can be re-used by different contracts supporting LSP17."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"smart contract A & B"))," are two independant contracts that implement different functions but share the same logic for verifying signatures. Therefore, they can use the same extension for signature validation for the ",(0,o.kt)("inlineCode",{parentName:"p"},"isValidSignature(..)")," function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Two contracts sharing the same LSP17 Extension",src:n(3684).Z,width:"1367",height:"731"})),(0,o.kt)("p",null,"This approach leads to fewer contracts being deployed on the blockchain with the same logic, resulting in less chain congestion and simplifying the development process by reusing already deployed and verified extension contracts."),(0,o.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,o.kt)("p",null,"As the extensions are called using the ",(0,o.kt)("strong",{parentName:"p"},"CALL")," opcode not ",(0,o.kt)("strong",{parentName:"p"},"DELEGATECALL"),", it' safe to assume that there is no risk of destroying the extendable smart contract through ",(0,o.kt)("inlineCode",{parentName:"p"},"selfdestruct"),"."),(0,o.kt)("p",null,"However, it is important to be aware that ",(0,o.kt)("strong",{parentName:"p"},"adding random contracts as extensions carelessly")," can be problematic as the extensions will have the extendable contract as their caller (",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender"),"), which can lead to impersonating the extendable contract in certain situations."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"A decentralized exchange cannot accept safe ERC721 or ERC1155 transfers unless it implements specific functions with specific return values. This ensures that the contract knows how to handle these tokens, thus making the transfer safe."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exchange receiving ERC721 and ERC1155 Tokens",src:n(5059).Z,width:"1501",height:"666"})),(0,o.kt)("p",null,"The decentralized exchange or any other type of contract can receive tokens of these types, but what happens if another token standard emerges that people start building on and that has the same validation system where it requires the function ",(0,o.kt)("inlineCode",{parentName:"p"},"onERCXXXReceived(..)")," ? This will make the DEX unable to receive these kinds of tokens because it did not implement this function simply because it did not exist at the time."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exchange cannot receive ERCXXX Tokens",src:n(1090).Z,width:"1492",height:"669"})),(0,o.kt)("p",null,"So the only way for this DEX to support new types of tokens is to redeploy the contract with this new function, which can be problematic as many protocols depend and interact with this DEX on a specific address."),(0,o.kt)("p",null,"This problem can be resolved by utilizing ",(0,o.kt)("strong",{parentName:"p"},"LSP17")," in the decentralized exchange (DEX). With this standard, the contract can be deployed with only the ",(0,o.kt)("inlineCode",{parentName:"p"},"onERC721Received(..)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onERC1155Received(..)")," functions implemented, but additional functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"onERCXXXReceived(..)")," can be ",(0,o.kt)("strong",{parentName:"p"},"added as extensions")," later. LSP17 also allows for the potential addition of extensions for any future standard-required functions that may arise."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exchange adding ERCXXX Token Extension",src:n(2029).Z,width:"1453",height:"687"})))}p.isMDXComponent=!0},8086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CallingAnLSP17Extension-3a11f2f1b8441287e38e81672e32ac11.jpeg"},5059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExchangeAcceptingERCTokens-ecfcf7904fd0f58f302069a48b432b61.jpeg"},2029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExchangeAddingERCTokenExtension-7bd2526a0d9654c090275871fc4f0619.jpeg"},1090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExchangeCannotAcceptERCTokens-1cb218fa82aebc305704090140e9824b.jpeg"},3963:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OneContract-e1b2f3c7631a9d6eb01288e1571e89c5.jpeg"},3684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ShareExtension-92b217304b15a8fc0146f23fec9c05fc.jpeg"},4063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/TwoContracts-36663497b4ccdf90af10f3ba98fe091a.jpeg"}}]);