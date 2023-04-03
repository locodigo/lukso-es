"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:5},a="Registros, Estad\xedsticas y Monitorizaci\xf3n",i={unversionedId:"es/networks/l16-testnet/logs-stats-monitoring",id:"es/networks/l16-testnet/logs-stats-monitoring",title:"Registros, Estad\xedsticas y Monitorizaci\xf3n",description:"Registros de ejecuci\xf3n",source:"@site/docs/es/networks/l16-testnet/logs-stats-monitoring.md",sourceDirName:"es/networks/l16-testnet",slug:"/es/networks/l16-testnet/logs-stats-monitoring",permalink:"/lukso-es/en/es/networks/l16-testnet/logs-stats-monitoring",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/networks/l16-testnet/logs-stats-monitoring.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"networksSidebar",previous:{title:"Copia de seguridad y recuperaci\xf3n",permalink:"/lukso-es/en/es/networks/l16-testnet/node-backup"},next:{title:"Soluci\xf3n de problemas",permalink:"/lukso-es/en/es/networks/l16-testnet/troubleshooting"}},l={},c=[{value:"Registros de ejecuci\xf3n",id:"registros-de-ejecuci\xf3n",level:2},{value:"Registros de consenso",id:"registros-de-consenso",level:2},{value:"Estad\xedsticas",id:"estad\xedsticas",level:2},{value:"Exploradores",id:"exploradores",level:2},{value:"Monitoreo",id:"monitoreo",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registros-estad\xedsticas-y-monitorizaci\xf3n"},"Registros, Estad\xedsticas y Monitorizaci\xf3n"),(0,o.kt)("h2",{id:"registros-de-ejecuci\xf3n"},"Registros de ejecuci\xf3n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo lukso network log execution -f\n")),(0,o.kt)("p",null,"Puedes cerrar los registros pulsando ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+c"),"."),(0,o.kt)("h2",{id:"registros-de-consenso"},"Registros de consenso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo lukso network log consensus -f\n")),(0,o.kt)("p",null,"Puedes cerrar los registros pulsando ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+c"),"."),(0,o.kt)("h2",{id:"estad\xedsticas"},"Estad\xedsticas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Estad\xedsticas de ejecuci\xf3n](",(0,o.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network"),")"),(0,o.kt)("li",{parentName:"ul"},"Estad\xedsticas de consenso](",(0,o.kt)("a",{parentName:"li",href:"https://stats.consensus.l16.lukso.network"},"https://stats.consensus.l16.lukso.network"),")")),(0,o.kt)("h2",{id:"exploradores"},"Exploradores"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explorador de ejecuci\xf3n](",(0,o.kt)("a",{parentName:"li",href:"https://explorer.execution.l16.lukso.network"},"https://explorer.execution.l16.lukso.network"),")"),(0,o.kt)("li",{parentName:"ul"},"Explorador de consenso](",(0,o.kt)("a",{parentName:"li",href:"https://explorer.consensus.l16.lukso.network"},"https://explorer.consensus.l16.lukso.network"),")")),(0,o.kt)("h2",{id:"monitoreo"},"Monitoreo"),(0,o.kt)("p",null,"Puedes encontrar una gu\xeda de la comunidad sobre c\xf3mo configurar tu panel de control Grafana en Linux ",(0,o.kt)("a",{parentName:"p",href:"https://docs.luksoverse.io/docs/the-guide/monitoring"},"aqu\xed"),"."))}p.isMDXComponent=!0}}]);