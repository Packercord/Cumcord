(()=>{function le(){let e=window.webpackJsonp.push([[],{cum:(t,n,o)=>t.exports=o},[["cum"]]]);return e.m.cum=void 0,delete e.m.cum,e.c.cum=void 0,delete e.c.cum,e.c}function L(e,t){let n=[];for(let o in e)if(e.hasOwnProperty(o)){let r=e[o].exports;r&&(r.default&&r.__esModule&&t(r.default)&&n.push(r.default),t(r)&&n.push(r))}return n}var l={modules:le(),find:e=>L(l.modules,e)[0],findAll:e=>L(l.modules,e),findByProps:(...e)=>l.find(t=>e.every(n=>t[n]!==void 0)),findByPropsAll:(...e)=>l.findAll(t=>e.every(n=>t[n]!==void 0)),findByPrototypes:(...e)=>l.find(t=>t.prototype&&e.every(n=>t.prototype[n]!==void 0)),findByDisplayName:e=>l.find(t=>t.displayName===e),findByStringInPropsAll:(...e)=>l.findAll(t=>e.every(n=>Object.keys(t).some(o=>o.toLowerCase().includes(n.toLowerCase()))==!0))},ze=l.find,Ue=l.findAll,Le=l.findByProps,Re=l.findByPropsAll,Je=l.findByPrototypes,He=l.findByDisplayName,$e=l.findByStringInPropsAll,s=l;var h={constants:s.findByProps("API_HOST","APP_URL_PREFIX"),channels:s.findByProps("getChannelId","getVoiceChannelId"),Flux:s.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:s.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:s.findByProps("Messages","_requestedLocale"),React:s.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:s.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate")},i=h.React,T=h.ReactDOM,We=h.Flux,Ye=h.FluxDispatcher,qe=h.constants,Qe=h.channels,Xe=h.i18n,R=h;var ce={log:e=>{console.log(`%cCumcord%c ${e}`,"background-color: #7289da; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold","")}},C=ce;var J=s.findByProps("v4").v4,ue={instead:ge,before:me,after:he,unpatchAll:ye,unpatchAllCss:pe,injectCSS:de},p=[];function de(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),()=>{t.remove()}}function pe(){for(let e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()}function A(e,t,n,o){if(!(o=="before"||o=="instead"||o=="after"))throw new Error("Go fuck yourself.");if(typeof t[e]!="function")throw new Error(`${e} is not a function in ${t.constructor.name}`);if(Object.hasOwnProperty.bind(t)("CUMCORD_INJECTIONS")||(t.CUMCORD_INJECTIONS={}),!t.CUMCORD_INJECTIONS.hasOwnProperty(e)){let u=J();t.CUMCORD_INJECTIONS[e]=u}let r=t.CUMCORD_INJECTIONS[e];if(!p[r]){let u=Object.assign({},t)[e];p[r]={originalFunction:u,functionParent:t,functionName:e,hooks:{before:{},instead:{},after:{}}},t[e]=function(...m){return fe(r,m,this)}}let a=J();return p[r].hooks[o][a]=n,()=>H(r,a,o)}function fe(e,t,n){let o=p[e],r=o.hooks,a=t;for(let d in r.before){let x=r.before[d].call(n,a);Array.isArray(x)&&(a=x)}let u,m=Object.values(r.instead),g=(...d)=>o.originalFunction.call(n,...d);if(m.length>0){let d=w=>m[0].call(n,w,g);for(let w of m.slice(1)){let x=d;d=ae=>w.call(n,ae,x)}u=d(a)}else u=g(...a);for(let d in r.after){let x=r.after[d].call(n,a,u);typeof x!="undefined"&&(u=x)}return u}function me(e,t,n){return A(e,t,n,"before")}function ge(e,t,n){return A(e,t,n,"instead")}function he(e,t,n){return A(e,t,n,"after")}function H(e,t,n){let o=p[e];if(o){let r=o.hooks;if(r[n][t])return delete r[n][t],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName],Object.keys(r).every(u=>Object.values(r[u]).length==0)&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,p[e]=void 0,delete p[e]),!0}return!1}function ye(){C.log("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(let e in p)for(let t of Object.keys(p[e].hooks)){if(!p[e])return;let n=p[e].hooks[t];for(let o in n)H(e,o,t)}}var f=ue;function we(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(n=>{let o=()=>indexedDB.databases().finally(n);t=setInterval(o,100),o()}).finally(()=>clearInterval(t))}var $=we;function I(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function xe(e,t){let n=$().then(()=>{let o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),I(o)});return(o,r)=>n.then(a=>r(a.transaction(t,o).objectStore(t)))}var F;function V(){return F||(F=xe("keyval-store","keyval")),F}function G(e,t=V()){return t("readonly",n=>I(n.get(e)))}function v(e,t,n=V()){return n("readwrite",o=>(o.put(t,e),I(o.transaction)))}var be=eval,S={cache:"no-store"},W="https://cors.bridged.cc/",y={},c={};function Y(){for(let e of Object.keys(c))try{M(e)}catch{}}function b(e){return c[e]}function D(e,t){c[e]=t,v("CumcordCache",c)}function N(e){let t=b(e);if(!t)throw new Error(`Plugin ${e} not found`);if(y[e])throw new Error(`Plugin ${e} already loaded`);let n=be(t.js);y[e]=n;try{n.onLoad()}catch{}}function M(e){if(!b(e))throw new Error(`Plugin ${e} not found`);let n=y[e];if(n)n.onUnload(),y[e]=void 0,delete y[e];else throw new Error(`Plugin ${e} not loaded`)}function B(e){try{M(e)}catch{}c[e]=void 0,delete c[e],v("CumcordCache",c)}async function q(){let e=await G("CumcordCache");y={},e?c=e:(await v("CumcordCache",{}),c={});for(let t of Object.keys(c))P(t)}function Ce(e){let t=b(e);y[e]&&M(e),N(e),t.enabled||(t.enabled=!0,D(e,t))}function Pe(e){let t=b(e);y[e]&&M(e),t.enabled&&(t.enabled=!1,D(e,t))}function E(e){b(e).enabled?Pe(e):Ce(e)}async function P(e){let t=e.replace(/\/?$/,"/"),n=new URL("plugin.json",t),o=new URL("plugin.js",t),r=!0,a=b(t),u=!1,m,g;try{m=await fetch(n,S)}catch{u=!0,m=await fetch(W+n,S)}if(m.status!=200&&!a)throw new Error("Plugin manifest not returning success");try{g=await m.json()}catch{if(!a)throw new Error("Plugin manifest cannot be parsed")}if(a)if(r=a.enabled,g){if(a.manifest.hash==g.hash&&(a.manifest!=g&&(a.manifest=g,D(t,a)),r)){N(t);return}}else{r&&N(t);return}let d;if(u?d=await await fetch(W+o,S):d=await await fetch(o,S),d.status!=200)throw new Error("Plugin not returning success");let w=await d.text();D(t,{manifest:g,js:w,enabled:r}),r&&N(t)}var ke=i.useState,ve=s.findByDisplayName("Card"),Se=s.findByDisplayName("Header"),De=s.findByDisplayName("Text"),j=s.findByDisplayName("Flex"),Ne=s.findByDisplayName("Markdown"),Me=s.findByDisplayName("Switch"),{Separator:pt}=s.findByProps("Separator"),Q=e=>{let t=c[e.pluginId],[n,o]=ke(t.enabled);return i.createElement(ve,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},i.createElement(j,{justify:j.Justify.BETWEEN,align:j.Align.CENTER},i.createElement("div",{className:"cumcord-card-header"},i.createElement(Se,{className:"cumcord-card-title"},t.manifest.name),i.createElement(De,{className:"cumcord-card-author",tag:"h5"}," ","by ",i.createElement("strong",null,t.manifest.author))),i.createElement("div",{className:"cumcord-card-right"},i.createElement("div",{className:"cumcord-card-buttons"},i.createElement("svg",{onClick:()=>{B(e.pluginId),e.updatePlugins()},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),i.createElement(Me,{checked:n,onChange:()=>{try{E(e.pluginId),o(t.enabled)}catch{}}}))),i.createElement(Ne,null,t.manifest.description))};var X=i.useState,Be=s.findByDisplayName("FormTitle"),Ee=s.findByDisplayName("FormSection"),Oe=s.findByDisplayName("Flex"),_e=s.findByDisplayName("TextInput"),z=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),Te=s.findByDisplayName("FormDivider"),K=()=>{let[e,t]=X(""),[n,o]=X(Object.keys(c)),r=()=>{o(Object.keys(c))};return i.createElement(Ee,null,i.createElement(Be,{tag:"h1"},"Plugins"),i.createElement(Oe,{basis:"auto",grow:1,shrink:1},i.createElement(_e,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:e,onChange:a=>t(a)}),i.createElement(z,{color:z.Colors.BRAND,size:z.Sizes.MEDIUM,onClick:()=>{t(""),P(e).then(()=>{r()})}},"Add plugin")),i.createElement(Te,{className:"cumcord-plugin-divider"}),n.map(a=>i.createElement(Q,{updatePlugins:r,pluginId:a})))};var Z={initializeSettings:function(){f.injectCSS(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:20px;margin-bottom:20px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-delete{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-delete:hover{fill:var(--interactive-hover)}.cumcord-card-buttons{display:flex;margin-right:4px}");let e=s.findByDisplayName("SettingsView");f.after("getPredicateSections",e.prototype,(t,n)=>{let o=n.findIndex(a=>a.section=="changelog")-1;if(o<0)return n;let r=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:K}];return n.splice(o,0,...r),n})}};var O=[];function ee(){window.DiscordNative&&f.instead("handleConnection",s.findByProps("handleConnection").__proto__,(e,t)=>{let n=e[0];if(n.upgradeReq().url=="/cumcord")O.push(n),n.send("Welcome to the Cumcord websocket API :D"),n.on("message",o=>{n.send(`You said: ${o}`)}),n.on("close",()=>{O.splice(O.indexOf(n),1)});else return t(...e)})}function te(){if(window.DiscordNative)for(let e of O)e.close()}var Ae=s.findByDisplayName("Card"),Ie=s.findByDisplayName("Header"),Dt=s.findByDisplayName("Text"),Nt=s.findByDisplayName("Markdown"),ne=e=>i.createElement(Ae,{className:"cumcord-toast",type:"cardPrimary",outline:!1,editable:!1},i.createElement("div",{className:"cumcord-toast-header"},i.createElement(Ie,{className:"cumcord-toast-title"},e.children)));var k=document.createElement("div"),_=[];function U(){T.render(i.createElement("div",null,_),k)}function oe(){f.injectCSS(".cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{min-width:120px;min-height:50px;padding:5px;margin-right:10px;margin-bottom:10px;display:flex;justify-content:center;align-items:center;align-content:center;pointer-events:all}.cumcord-toast-title{font-size:30px;top:0;bottom:0;left:0;right:0}"),k.className="cumcord-toast-container",document.getElementById("app-mount").prepend(k),U()}function ie(){T.unmountComponentAtNode(k),k.remove()}function re(e){let t=i.createElement(ne,null,e.title);_.push(t),U();let n=()=>{_.splice(_.indexOf(t),1),U()},o=setTimeout(()=>{n(),clearTimeout(o)},e.duration);return n}function Fe(){return Y(),te(),f.unpatchAll(),ie(),f.unpatchAllCss(),window.cumcord=void 0,delete window.cumcord,!0}async function je(){C.log("Initializing Cumcord API"),window.cumcord={uninject:Fe,modules:{webpackModules:s,common:R},plugins:{importPlugin:P,removePlugin:B,togglePlugin:E},patcher:f,ui:{toasts:{showToast:re}},cum:()=>C.log("8==D ~~~")},oe(),q(),Z.initializeSettings(),ee()}var se=je;if(window.cumcord)throw new Error("Cumcord is already injected");se();})();
