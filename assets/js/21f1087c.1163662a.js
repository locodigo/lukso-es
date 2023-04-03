"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8453],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(f,l(l({ref:a},d),{},{components:t})):r.createElement(f,l({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),n=t(6010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>P});var r=t(7462),n=t(7294),s=t(6010),l=t(2466),o=t(6775),i=t(1980),c=t(7392),d=t(12);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[i,c]=f({queryString:t,groupId:r}),[u,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,d.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=i??u;return m({value:e,tabValues:s})?e:null})();(0,n.useEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,s]),tabValues:s}}var v=t(2389);const g="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:a,block:t,selectedValue:o,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const a=e.currentTarget,t=d.indexOf(a),r=c[t].value;r!==o&&(u(a),i(r))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}null==(a=t)||a.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:r}=e;if(a){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function N(e){const a=k(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",g)},n.createElement(h,(0,r.Z)({},e,a)),n.createElement(y,(0,r.Z)({},e,a)))}function P(e){const a=(0,v.Z)();return n.createElement(N,(0,r.Z)({key:String(a)},e))}},1616:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),n=(t(7294),t(3905)),s=t(4866),l=t(5162);const o={sidebar_label:"Transferir LYX",sidebar_position:4},i="Transferir LYX",c={unversionedId:"es/guides/universal-profile/transfer-lyx",id:"es/guides/universal-profile/transfer-lyx",title:"Transferir LYX",description:"En esta gu\xeda, aprenderemos c\xf3mo transferir LYX desde nuestro Perfil Universal a cualquier direcci\xf3n (incluyendo otra ). Abordaremos:",source:"@site/docs/es/guides/universal-profile/transfer-lyx.md",sourceDirName:"es/guides/universal-profile",slug:"/es/guides/universal-profile/transfer-lyx",permalink:"/lukso-es/es/guides/universal-profile/transfer-lyx",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/es/guides/universal-profile/transfer-lyx.md",tags:[],version:"current",lastUpdatedAt:1680495619,formattedLastUpdatedAt:"3 abr 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Transferir LYX",sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"Editar un Perfil Universal",permalink:"/lukso-es/es/guides/universal-profile/edit-profile"},next:{title:"Interactuar con Contratos",permalink:"/lukso-es/es/guides/universal-profile/interact-with-contracts"}},d={},u=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Conceptos b\xe1sicos de la funci\xf3n <code>execute(...)</code>.",id:"conceptos-b\xe1sicos-de-la-funci\xf3n-execute",level:3},{value:"Interactuar a trav\xe9s del Gestor de Claves",id:"interactuar-a-trav\xe9s-del-gestor-de-claves",level:3},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Paso 1 - Consigue un poco de LYX",id:"paso-1---consigue-un-poco-de-lyx",level:2},{value:"Paso 2 - Crear las instancias de los contratos",id:"paso-2---crear-las-instancias-de-los-contratos",level:2},{value:"Paso 3 - Cifrar los calldata para transferir LYX",id:"paso-3---cifrar-los-calldata-para-transferir-lyx",level:2},{value:"Paso 4 - Ejecutar a trav\xe9s del Gestor de Claves",id:"paso-4---ejecutar-a-trav\xe9s-del-gestor-de-claves",level:2},{value:"Cargar nuestra EOA",id:"cargar-nuestra-eoa",level:3},{value:"Enviar los calldata de la transferencia de LYX",id:"enviar-los-calldata-de-la-transferencia-de-lyx",level:3},{value:"Final Code",id:"final-code",level:2}],p={toc:u};function m(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transferir-lyx"},"Transferir LYX"),(0,n.kt)("p",null,"En esta gu\xeda, aprenderemos ",(0,n.kt)("strong",{parentName:"p"},"c\xf3mo transferir LYX")," desde nuestro Perfil Universal a cualquier ",(0,n.kt)("inlineCode",{parentName:"p"},"direcci\xf3n")," (incluyendo otra \ud83c\udd99 ). Abordaremos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lo b\xe1sico de la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"li"},"execute(...)")," y c\xf3mo funciona."),(0,n.kt)("li",{parentName:"ul"},"c\xf3mo usar esta funci\xf3n para transferir LYX desde nuestro UP.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gu\xeda - C\xf3mo enviar LYX desde un Perfil Universal",src:t(5048).Z,width:"6901",height:"2318"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Un archivo JS completo ",(0,n.kt)("em",{parentName:"p"},'"listo para usar"')," est\xe1 disponible al final en la secci\xf3n ",(0,n.kt)("a",{parentName:"p",href:"#final-code"},(0,n.kt)("strong",{parentName:"a"},"C\xf3digo Final")),". Si deseas ejecutar el c\xf3digo como archivos JavaScript independientes dentro de la terminal o el navegador, puedes abrir el repositorio ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-playground"},(0,n.kt)("inlineCode",{parentName:"a"},"lukso-playground"))," o utilizar la p\xe1gina asociada ",(0,n.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/lukso-network/lukso-playground"},"StackBlitz"),". Recuerda que tendr\xe1s que proporcionar una clave de controlador (EOA) de tu perfil universal para poder transferir fondos.")),(0,n.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("p",null,"Recapitulemos lo que hemos aprendido hasta ahora."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En nuestra gu\xeda ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/guides/universal-profile/create-profile"},(0,n.kt)("strong",{parentName:"a"},"Crear un Perfil Universal")),", vimos en el ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/guides/universal-profile/create-profile#contracts-overview"},"Diagrama de arquitectura del Perfil Universal")," que el propietario de un Perfil Universal (UP) es un Gestor de Claves (KM). Este contrato inteligente act\xfaa como su controlador.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En nuestra gu\xeda ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/guides/universal-profile/edit-profile"},(0,n.kt)("strong",{parentName:"a"},"Editar un Perfil Universal")),", se explicaba c\xf3mo interactuar con nuestro UP para editar la informaci\xf3n de nuestro perfil. Lo hicimos interactuando a trav\xe9s del KM."))),(0,n.kt)("p",null,"Anteriormente, vimos c\xf3mo utilizar ",(0,n.kt)("inlineCode",{parentName:"p"},"setData(...)")," para actualizar los datos en el almacenamiento de nuestro contrato UP. Veamos ahora ",(0,n.kt)("inlineCode",{parentName:"p"},"execute(...)"),"."),(0,n.kt)("h3",{id:"conceptos-b\xe1sicos-de-la-funci\xf3n-execute"},"Conceptos b\xe1sicos de la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"h3"},"execute(...)"),"."),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/erc725-contract#execute---erc725x"},(0,n.kt)("inlineCode",{parentName:"a"},"execute(operation,to,value,data)"))," de ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/lsp-background/erc725#erc725x---generic-executor"},"ERC725X")," nos permite utilizar nuestra UP para interactuar con otras direcciones, como transferir LYX o llamar a otros contratos inteligentes. Esta funci\xf3n toma cuatro argumentos (ver ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/erc725-contract#execute---erc725x"},"ERC725 API docs"),")."),(0,n.kt)("p",null,"Podemos usar esta funci\xf3n para transferir LYX desde nuestra UP a cualquier direcci\xf3n (incluyendo otra UP). Transferir LYX desde nuestra UP es tan simple como hacer una ","[",(0,n.kt)("inlineCode",{parentName:"p"},"CALL"),"]"," est\xe1ndar(../../standards/universal-profile/lsp6-key-manager.md#permission-values) a cualquier ",(0,n.kt)("inlineCode",{parentName:"p"},"address"),", adjuntando alg\xfan ",(0,n.kt)("strong",{parentName:"p"},"valor")," a la llamada."),(0,n.kt)("p",null,"Para una transferencia LYX normal, los par\xe1metros ser\xe1n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_operation"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," (para ",(0,n.kt)("inlineCode",{parentName:"li"},"CALL"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_to"),": la ",(0,n.kt)("inlineCode",{parentName:"li"},"direcci\xf3n")," a la que queremos enviar LYX (Cuenta de Propiedad Externa o direcci\xf3n de contrato)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_value"),": la cantidad de LYX que queremos transferir (en Wei)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_data"),": vac\xedo (",(0,n.kt)("inlineCode",{parentName:"li"},"0x")," ya que s\xf3lo estamos transfiriendo LYX).")),(0,n.kt)("h3",{id:"interactuar-a-trav\xe9s-del-gestor-de-claves"},"Interactuar a trav\xe9s del Gestor de Claves"),(0,n.kt)("p",null,"La mayor\xeda de las funciones del contrato UP, como ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/erc725-contract#setdata---erc725y"},(0,n.kt)("inlineCode",{parentName:"a"},"setData(...)"))," y ","[",(0,n.kt)("inlineCode",{parentName:"p"},"execute(...)"),"]","(.. /../standards/smart-contracts/erc725-contract.md#execute---erc725x) s\xf3lo pueden ser llamados por el ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/erc725-contract#owner"},(0,n.kt)("inlineCode",{parentName:"a"},"owner")),". Por lo tanto, si queremos utilizar nuestra UP para hacer cosas significativas, ",(0,n.kt)("strong",{parentName:"p"},"todas las interacciones deben pasar por el KM"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(1606).Z,width:"1525",height:"655"})),(0,n.kt)("p",null,"Para transferir LYX desde nuestra UP, necesitamos realizar los siguientes pasos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cifrar ABI la llamada a la funci\xf3n ",(0,n.kt)("a",{parentName:"li",href:"/lukso-es/es/standards/smart-contracts/erc725-contract#execute---erc725x"},(0,n.kt)("inlineCode",{parentName:"a"},"execute(operation,to,value,data)"))," de nuestra UP."),(0,n.kt)("li",{parentName:"ol"},"pasar los ",(0,n.kt)("strong",{parentName:"li"},"calldata")," cifrados ABI a la funci\xf3n ",(0,n.kt)("a",{parentName:"li",href:"/lukso-es/es/standards/smart-contracts/lsp6-key-manager#execute"},(0,n.kt)("inlineCode",{parentName:"a"},"execute(calldata)"))," del KM.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Aseg\xfarate de entender la diferencia entre ambas funciones ",(0,n.kt)("inlineCode",{parentName:"p"},"execute(...)"),"."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execute(operation,to,value,data)"),"](/lukso-es/es/standards/smart-contracts/erc725-contract#execute---erc725x) del Perfil Universal = funci\xf3n ejecutora gen\xe9rica utilizada para llamar e interactuar con EOAs o contratos + desplegar nuevos contratos desde el UP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execute(calldata)")," desde el Gestor de Claves = se utiliza para ejecutar funciones en el Perfil Universal vinculadas al Gestor de Claves (mediante el reenv\xedo de calldata cifrada ABI), a la vez que se verifica si la persona que llama tiene los permisos adecuados para hacerlo."))),(0,n.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,n.kt)("p",null,"Para completar esta mini-gu\xeda, necesitaremos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"los contratos ABI ",(0,n.kt)("inlineCode",{parentName:"li"},"UniversalProfile")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"KeyManager")," del paquete npm ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,n.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")),"."),(0,n.kt)("li",{parentName:"ul"},"la direcci\xf3n de nuestro Perfil Universal, desde la que queremos enviar LYX."),(0,n.kt)("li",{parentName:"ul"},"una EOA con algunos LYX para las cuotas de gas y los ","[",(0,n.kt)("strong",{parentName:"li"},"permisos"),"]"," necesarios(../../standards/universal-profile/lsp6-key-manager.md#permissions) para la interacci\xf3n.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"La EOA que se elija debe tener ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#permissions"},(0,n.kt)("strong",{parentName:"a"},"TRANSFERVALUE Permission"))," junto con ","[",(0,n.kt)("strong",{parentName:"p"},"AllowedCalls"),"]","(../.. /standards/universal-profile/lsp6-key-manager.md#allowed-calls) o ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#super-permissions"},(0,n.kt)("strong",{parentName:"a"},"SUPER_TRANSFERVALUE Pemrission")))),(0,n.kt)("p",null,"Aseg\xfarate de tener instaladas las siguientes dependencias antes de empezar este tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O bien ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,n.kt)("inlineCode",{parentName:"a"},"web3.js"))," o bien ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,n.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,n.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Instala las dependencias"',title:'"Instala',las:!0,'dependencias"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,n.kt)("h2",{id:"paso-1---consigue-un-poco-de-lyx"},"Paso 1 - Consigue un poco de LYX"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Necesitas tener LYX tanto en tu EOA (que pagar\xe1 las cuotas de transacci\xf3n) como en tu Perfil Universal (desde donde se transferir\xe1 el LYX).")),(0,n.kt)("p",null,"Para poder enviar LYX desde nuestro Perfil Universal, primero solicitaremos algunos LYX de prueba gratuitos para nuestra UP a trav\xe9s del ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://faucet.l16.lukso.network/"},"Grifo L16")),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visita la p\xe1gina \u27a1\ufe0f ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://faucet.l16.lukso.network/"},"Sitio web del grifo LUKSO L16")),"."),(0,n.kt)("li",{parentName:"ol"},"Haz un ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://twitter.com"},"tweet"))," con tu direcci\xf3n UP y pega la url del tweet en el formulario y haz clic en el bot\xf3n ",(0,n.kt)("em",{parentName:"li"},'"Give me LYX"'),".")),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:t(4021).Z},"Captura de pantalla del grifo L16")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Comprueba el saldo de tu Perfil Universal en el ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://explorer.execution.l16.lukso.network/"},"Explorador de Bloques LUKSO L16"))," \u2b07\ufe0f")),(0,n.kt)("p",null,"Pega la direcci\xf3n del Perfil Universal en el campo de direcci\xf3n de la esquina superior derecha del explorador de bloques."),(0,n.kt)("p",null,"Si todo ha ido bien, deber\xedas ver que el campo ",(0,n.kt)("em",{parentName:"p"},'"Balance"')," de tu Perfil Universal se ha actualizado."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:t(4285).Z},"Explorador de bloques de red LUKSO L16 (captura de pantalla)")),(0,n.kt)("h2",{id:"paso-2---crear-las-instancias-de-los-contratos"},"Paso 2 - Crear las instancias de los contratos"),(0,n.kt)("p",null,"El primer paso es crear instancias de nuestros contratos Perfil Universal y Gestor de Claves."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2.1 - En primer lugar, utilizaremos el Perfil Universal para conseguir la direcci\xf3n del Gestor de Llaves a trav\xe9s de la funci\xf3n ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/smart-contracts/lsp0-erc725-account#owner"},(0,n.kt)("inlineCode",{parentName:"a"},"owner()")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2.2 - A continuaci\xf3n, utilizaremos el Gestor de Claves para interactuar con nuestro Perfil Universal y enviar algunos LYX."))),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst myUPAddress = '0x...';\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);\n\n// el Gestor de Claves es el propietario del Perfil Universal\n// por lo que podemos llamar a la funci\xf3n owner() para obtener la direcci\xf3n del contrato del Gestor de Claves\nconst owner = await myUP.methods.owner().call();\nconst myKM = new web3.eth.Contract(KeyManager.abi, owner);\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\n\nconst myUPAddress = '0x...';\nconst myUP = new ethers.Contract(myUPAddress, UniversalProfile.abi, provider);\n\n// el Gestor de Claves es el propietario del Perfil Universal\n// por lo que podemos llamar a la funci\xf3n owner() para obtener la direcci\xf3n del contrato del Gestor de Claves\nconst owner = await myUP.owner();\nconst myKM = new ethers.Contract(owner, KeyManager.abi, provider);\n")))),(0,n.kt)("h2",{id:"paso-3---cifrar-los-calldata-para-transferir-lyx"},"Paso 3 - Cifrar los calldata para transferir LYX"),(0,n.kt)("p",null,"Con nuestras instancias de contrato listas, ahora queremos transferir algunos LYX desde la UP usando la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"execute(...)"),".\nEl siguiente paso es cifrar ABI esta llamada de funci\xf3n con los par\xe1metros correctos, como se explica en la introducci\xf3n."),(0,n.kt)("p",null,"Podemos usar el m\xe9todo ",(0,n.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.7.4/web3-eth-contract.html#methods-mymethod-encodeabi"},(0,n.kt)("inlineCode",{parentName:"a"},"encodeABI()"))," de web3.js"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const OPERATION_CALL = 0;\nconst recipient = '0x...'; // direcci\xf3n del destinatario (cualquier direcci\xf3n, incluida otra UP)\nconst amount = web3.utils.toWei('3'); // cantidad de LYX que queremos transferir\n// calldata ejecutada en el destino (aqu\xed nada, una simple transferencia LYX)\nconst data = '0x';\n\n// cifrar los calldata para transferir 3 LYX desde el UP\nconst transferLYXCalldata = await myUP.methods[\n  'execute(uint256,address,uint256,bytes)'\n](OPERATION_CALL, recipient, amount, data).encodeABI();\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const OPERATION_CALL = 0;\nconst recipient = '0x...'; // direcci\xf3n del destinatario (cualquier direcci\xf3n, incluida otra UP)\nconst amount = ethers.parseEther('3'); // cantidad de LYX que queremos transferir\nconst data = '0x'; // calldata ejecutada en el destino (aqu\xed nada, una simple transferencia LYX)\n\n// cifrar los calldata para transferir 3 LYX desde el UP\nconst transferLYXCalldata = myUP.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [OPERATION_CALL, recipient, amount, data],\n);\n")))),(0,n.kt)("h2",{id:"paso-4---ejecutar-a-trav\xe9s-del-gestor-de-claves"},"Paso 4 - Ejecutar a trav\xe9s del Gestor de Claves"),(0,n.kt)("h3",{id:"cargar-nuestra-eoa"},"Cargar nuestra EOA"),(0,n.kt)("p",null,"Como en otras gu\xedas, un paso importante es cargar la EOA que es un controlador para nuestro Perfil Universal. En este caso la direcci\xf3n del controlador debe tener ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#permissions"},(0,n.kt)("strong",{parentName:"a"},"TRANSFERVALUE Permission"))," junto con ","[",(0,n.kt)("strong",{parentName:"p"},"AllowedCalls"),"]","(../.. /standards/universal-profile/lsp6-key-manager.md#allowed-calls) o ",(0,n.kt)("a",{parentName:"p",href:"/lukso-es/es/standards/universal-profile/lsp6-key-manager#super-permissions"},(0,n.kt)("strong",{parentName:"a"},"SUPER_TRANSFERVALUE Pemrission"))," para que la transacci\xf3n se realice correctamente."),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const PRIVATE_KEY = '0x...'; // la clave privada de la direcci\xf3n de tu controlador\n\nconst myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const PRIVATE_KEY = '0x...'; // la clave privada de la direcci\xf3n de tu controlador\n\nconst myEOA = new ethers.Wallet(PRIVATE_KEY).connect(provider);\n")))),(0,n.kt)("h3",{id:"enviar-los-calldata-de-la-transferencia-de-lyx"},"Enviar los calldata de la transferencia de LYX"),(0,n.kt)("p",null,"El \xfaltimo paso es pasar los calldata de la transferencia de LYX cifrados al Gestor de Claves. Como estamos llamando desde la direcci\xf3n de un controlador de UP (con ","[",(0,n.kt)("strong",{parentName:"p"},"permisos"),"]"," adecuados(../../standards/universal-profile/lsp6-key-manager.md#permissions)), el Gestor de Claves autorizar\xe1 y ejecutar\xe1 la transferencia de LYX."),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"await myKM.methods['execute(bytes)'](transferLYXCalldata).send({\n  from: myEOA.address,\n  gasLimit: 300_000,\n});\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"await myKM.connect(myEOA)['execute(bytes)'](transferLYXCalldata);\n")))),(0,n.kt)("h2",{id:"final-code"},"Final Code"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst PRIVATE_KEY = '0x...'; // la clave privada de la direcci\xf3n de tu controlador\nconst myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY); // cantidad de LYX que queremos transferir\n\n// 1. instanciar los contratos\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);\n\n// el Gestor de Claves es el propietario del Perfil Universal\n// por lo que podemos llamar a la funci\xf3n owner() para obtener la direcci\xf3n del contrato del Gestor de Claves\nconst owner = await myUP.methods.owner().call();\n\nconst myKM = new web3.eth.Contract(KeyManager.abi, owner);\n\nconst OPERATION_CALL = 0;\nconst recipient = '0x...'; // direcci\xf3n del destinatario (cualquier direcci\xf3n, incluida otra UP)\nconst amount = web3.utils.toWei('3');\n// calldata ejecutada en el destino (aqu\xed nada, una simple transferencia LYX)\nconst data = '0x';\n\n// 2. cifrar los calldata para transferir 3 LYX desde el UP\nconst transferLYXCalldata = await myUP.methods[\n  'execute(uint256,address,uint256,bytes)'\n](OPERATION_CALL, recipient, amount, data).encodeABI();\n\n// 3. ejecutar la transferencia de LYX a trav\xe9s del Gestor de Claves\nawait myKM.methods['execute(bytes)'](transferLYXCalldata).send({\n  from: myEOA.address,\n  gasLimit: 300_000,\n});\n"))),(0,n.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l14.lukso.network');\n\nconst myUPAddress = '0x...';\nconst myUP = new ethers.Contract(myUPAddress, UniversalProfile.abi, provider);\n\n// el Gestor de Claves es el propietario del Perfil Universal\n// por lo que podemos llamar a la funci\xf3n owner() para obtener la direcci\xf3n del contrato del Gestor de Claves\nconst owner = await myUP.owner();\n\nconst myKM = new ethers.Contract(owner, KeyManager.abi, provider);\n\nconst OPERATION_CALL = 0;\nconst recipient = '0x...'; // direcci\xf3n del destinatario (cualquier direcci\xf3n, incluida otra UP)\nconst amount = ethers.parseEther('3'); // cantidad de LYX que queremos transferir\n// calldata ejecutada en el destino (aqu\xed nada, una simple transferencia LYX)\nconst data = '0x';\n\n// cifrar los calldata para transferir 3 LYX desde el UP\nconst transferLYXCalldata = myUP.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [OPERATION_CALL, recipient, amount, data],\n);\n\nconst PRIVATE_KEY = '0x...'; // la clave privada de la direcci\xf3n de tu controlador\n\nconst myEOA = new ethers.Wallet(PRIVATE_KEY).connect(provider);\n\nawait myKM.connect(myEOA)['execute(bytes)'](transferLYXCalldata);\n")))))}m.isMDXComponent=!0},4021:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/L16-faucet-b6865fcdb7d8325ce6dccc4900442dc6.png"},4285:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/explorer-balance-cdcdf07e35e4f98915d18601c8187634.png"},5048:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/guide-LYX-transfer-1a56d65249f7fdc352da689946bc6569.jpeg"},1606:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/transfer-lyx-interaction-via-key-manager-df1452e3adf6472c71954164c340e218.jpeg"}}]);