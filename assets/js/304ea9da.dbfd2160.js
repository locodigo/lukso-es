"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={title:"Hoja de ruta de los Est\xe1ndares",sidebar_position:2},o="Hoja de ruta de los Est\xe1ndares",l={unversionedId:"es/standards/standards-roadmap",id:"es/standards/standards-roadmap",title:"Hoja de ruta de los Est\xe1ndares",description:"Introducci\xf3n",source:"@site/docs/es/standards/standards-roadmap.md",sourceDirName:"es/standards",slug:"/es/standards/standards-roadmap",permalink:"/lukso-es/es/standards/standards-roadmap",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/standards/standards-roadmap.md",tags:[],version:"current",lastUpdatedAt:1680497761,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:2,frontMatter:{title:"Hoja de ruta de los Est\xe1ndares",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"Introducci\xf3n",permalink:"/lukso-es/es/standards/introduction"},next:{title:"Standard Detection",permalink:"/lukso-es/es/standards/standard-detection"}},i={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Hoja de ruta de los LSP",id:"hoja-de-ruta-de-los-lsp",level:2},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hoja-de-ruta-de-los-est\xe1ndares"},"Hoja de ruta de los Est\xe1ndares"),(0,n.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("p",null,"Como se menciona en la secci\xf3n ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/introduction#lsps-foundation"},"Fundamentos de los LSP"),", los LSP no dependen del orden, lo que significa que un est\xe1ndar puede utilizar otro que le siga o le preceda en el orden. Por ejemplo, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#"},"LSP0 - ERC725Account"))," utiliza ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#"},"LSP1 - UniversalReceiver")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#"},"LSP2 - ERC725YJSONSchema"))," y podr\xeda utilizar ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#"},"LSP3 - UniversalProfileMetadata")),", etc."),(0,n.kt)("h2",{id:"hoja-de-ruta-de-los-lsp"},"Hoja de ruta de los LSP"),(0,n.kt)("p",null,"Para entender bien los LSPs, deber\xedan estudiarse en el siguiente orden:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/lsp-background/erc725"},"ERC725 - Ejecutor General y Almac\xe9n de Claves/Valores de Datos")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/generic-standards/lsp2-json-schema"},"LSP2 - Esquema ERC725YJSONS")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp0-erc725account"},"LSP0 - Cuenta ERC725")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/generic-standards/lsp1-universal-receiver"},"LSP1 - ReceptorUniversal")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager"},"LSP6 - Gestor de Claves")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 - Metadatosdeperfiluniversal")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/nft-2.0/LSP7-Digital-Asset"},"LSP7 - Activo Digital")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},"LSP8 - ActivoDigitalIdentificable")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4 - MetadatosDeActivosDigitales")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp5-received-assets"},"LSP5 - Activos recibidos")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp12-issued-assets"},"LSP12 - Activos emitidos")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp9-vault"},"LSP9 - B\xf3veda")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/lukso-es/es/standards/universal-profile/lsp10-received-vaults"},"LSP10 - B\xf3vedas recibidas"))))),(0,n.kt)("h2",{id:"m\xe1s-informaci\xf3n"},"M\xe1s informaci\xf3n"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=skA4Y-vvt5s"},"Fabian Vogelsteller habla en NFT.NYC 2021 sobre los nuevos est\xe1ndares (YouTube)"))))}u.isMDXComponent=!0}}]);