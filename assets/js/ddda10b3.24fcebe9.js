"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[701],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:e},p),{},{components:r})):n.createElement(f,s({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2556:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},s="ABI de contratos",c={unversionedId:"es/tools/lsp-smart-contracts/contracts-abi",id:"es/tools/lsp-smart-contracts/contracts-abi",title:"ABI de contratos",description:"Puedes importar la ABI contratos inteligentes LUKSO desde la carpeta /artifacts:",source:"@site/docs/es/tools/lsp-smart-contracts/contracts-abi.md",sourceDirName:"es/tools/lsp-smart-contracts",slug:"/es/tools/lsp-smart-contracts/contracts-abi",permalink:"/lukso-es/es/tools/lsp-smart-contracts/contracts-abi",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/tools/lsp-smart-contracts/contracts-abi.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolsSidebar",previous:{title:"Primeros Pasos",permalink:"/lukso-es/es/tools/lsp-smart-contracts/getting-started"},next:{title:"Contratos Solidity",permalink:"/lukso-es/es/tools/lsp-smart-contracts/solidity-contracts"}},i={},l=[],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"abi-de-contratos"},"ABI de contratos"),(0,o.kt)("p",null,"Puedes importar la ABI ",(0,o.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/introduction"},"contratos inteligentes LUKSO")," desde la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"/artifacts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP0ERC725Account from '@lukso/lsp-smart-contracts/artifacts/LSP0ERC725Account.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';\n// etc.\n\nconst accountContract = new web3.contract(LSP0ERC725Account.abi, \"<contract-address>\")\n")))}u.isMDXComponent=!0}}]);