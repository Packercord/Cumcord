(()=>{var Qe=Object.create;var X=Object.defineProperty;var Xe=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertyNames;var et=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty;var nt=e=>X(e,"__esModule",{value:!0});var D=(e,t)=>()=>(e&&(t=e(e=0)),t);var U=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ot=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ze(t))!tt.call(e,o)&&o!=="default"&&X(e,o,{get:()=>t[o],enumerable:!(n=Xe(t,o))||n.enumerable});return e},rt=e=>ot(nt(X(e!=null?Qe(et(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);function O(e,t,{walkable:n=null,ignore:o=[],limit:s=100}={}){let u=0;function m(a,c,{walkable:d=null,ignore:f=[]}={}){if(u+=1,u>s)return null;if(typeof c=="string"){if(a.hasOwnProperty(c))return a[c]}else if(c(a))return a;if(a){if(Array.isArray(a))for(let h of a){let S=m(h,c,{walkable:d,ignore:f});if(S)return S}else if(typeof a=="object")for(let h of Object.keys(a)){if(d!=null&&!d.includes(h)||f.includes(h))continue;let S=m(a[h],c,{walkable:d,ignore:f});if(S)return S}}}return m(e,t,{walkable:n,ignore:o})}var de=D(()=>{i()});function Z(e,t,n){console[n]("%cCumcord%c",`background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,"",...e)}var it,y,fe=D(()=>{i();it={log:(...e)=>{Z(e,"#7289da","log")},error:(...e)=>{Z(e,"red","error")},warn:(...e)=>{Z(e,"red","warn")}},y=it});function me(e,t){return O(e,t,{walkable:["props","children","child","sibling"]})}var z=D(()=>{i();de();fe()});function st(){let e=window.webpackJsonp.push([[],{cum:(t,n,o)=>t.exports=o},[["cum"]]]);return e.m.cum=void 0,delete e.m.cum,e.c.cum=void 0,delete e.c.cum,e.c}function pe(e,t){let n=[];for(let o in e)if(e.hasOwnProperty(o)){let s=e[o].exports;s&&(s.default&&s.__esModule&&t(s.default)&&n.push(s.default),t(s)&&n.push(s))}return n}var p,Kt,Gt,j,Wt,Vt,ee,qt,Yt,l,C=D(()=>{i();z();p={modules:st(),find:e=>pe(p.modules,e)[0],findAll:e=>pe(p.modules,e),findByProps:(...e)=>p.find(t=>e.every(n=>t[n]!==void 0)),findByPropsAll:(...e)=>p.findAll(t=>e.every(n=>t[n]!==void 0)),findByPrototypes:(...e)=>p.find(t=>t.prototype&&e.every(n=>t.prototype[n]!==void 0)),findByDisplayName:e=>p.find(t=>t.displayName===e),findByStrings:(...e)=>p.find(t=>{if(typeof t=="function"){if(e.every(n=>t.toString().includes(n)))return!0}else return O(t,n=>{if(n){for(let o of Object.values(n))if(typeof o=="function"&&e.every(s=>o.toString().includes(s)))return!0}})}),findByKeywordAll:(...e)=>p.findAll(t=>e.every(n=>Object.keys(t).some(o=>o.toLowerCase().includes(n.toLowerCase()))==!0))},Kt=p.find,Gt=p.findAll,j=p.findByProps,Wt=p.findByPropsAll,Vt=p.findByPrototypes,ee=p.findByDisplayName,qt=p.findByStrings,Yt=p.findByKeywordAll,l=p});var v,r,te,Zt,en,tn,nn,on,rn,ge,he,E=D(()=>{i();C();v={constants:l.findByProps("API_HOST","APP_URL_PREFIX"),channels:l.findByProps("getChannelId","getVoiceChannelId"),Flux:l.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:l.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:l.findByProps("Messages","_requestedLocale"),React:l.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:l.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate"),Redux:l.findByProps("createStore","__DO_NOT_USE__ActionTypes"),zustand:l.find(e=>{if(typeof e=="function"&&e.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4"))return e})},r=v.React,te=v.ReactDOM,Zt=v.Flux,en=v.FluxDispatcher,tn=v.Redux,nn=v.constants,on=v.channels,rn=v.i18n,ge=v.zustand,he=v});var i=D(()=>{E()});var se=U(ie=>{i();"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL",UPDATE:"UPDATE"})});var _e=U(A=>{i();"use strict";var ct=A&&A.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0});var Oe=ct(se()),Pe=class{constructor(){this.listeners=Object.values(Oe.default).reduce((t,n)=>(t[n]=new Set,t),{}),this.on=function(t,n){if(this.listeners[t].has(n))throw Error(`This listener on ${t} already exists.`);this.listeners[t].add(n)},this.once=function(t,n){let o=(s,u)=>{this.off(s,o),n(s,u)};this.on(t,o)},this.off=function(t,n){this.listeners[t].delete(n)},this.emit=function(t,n){for(let o of this.listeners[t])o(t,n)};for(let t of Object.values(Oe.default))this[t.toLowerCase()]=n=>{this.emit(t,n)}}};A.default=Pe});var Me=U(I=>{i();"use strict";var dt=I&&I.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(I,"__esModule",{value:!0});var ft=dt(_e());function mt(e,{nestArrays:t=!0}={}){let n=new ft.default;function o(s,u=e,m=[]){return new Proxy(s,{get(a,c){let d=[...m,c],f=a[c];return f!=null?(n.get({path:d,value:f}),!t&&Array.isArray(f)?f:typeof f=="object"?o(f,u,d):f):o(a[c]={},u,d)},set(a,c,d){return a[c]=d,n.set({path:[...m,c],value:d}),!0},deleteProperty(a,c){return delete a[c]?(n.del({path:[...m,c]}),!0):!1},has(a,c){return typeof a[c]=="object"&&Object.keys(a[c]).length===0?!1:c in a}})}return Object.assign({store:o(e),ghost:e},n)}I.default=mt});var Ee=U(b=>{i();"use strict";var De=b&&b.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(b,"__esModule",{value:!0});b.make=b.Events=void 0;var pt=se();Object.defineProperty(b,"Events",{enumerable:!0,get:function(){return De(pt).default}});var gt=Me();Object.defineProperty(b,"make",{enumerable:!0,get:function(){return De(gt).default}})});i();i();C();E();i();C();i();C();var ye=l.findByProps("v4").v4,w=[];function k(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),()=>{t.remove()}}function we(){for(let e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()}function ne(e,t,n,o){if(!(o=="before"||o=="instead"||o=="after"))throw new Error("Go fuck yourself.");if(typeof t[e]!="function")throw new Error(`${e} is not a function in ${t.constructor.name}`);if(Object.hasOwnProperty.bind(t)("CUMCORD_INJECTIONS")||(t.CUMCORD_INJECTIONS={}),!t.CUMCORD_INJECTIONS.hasOwnProperty(e)){let m=ye();t.CUMCORD_INJECTIONS[e]=m}let s=t.CUMCORD_INJECTIONS[e];if(!w[s]){let m=t[e];w[s]={originalFunction:m,functionParent:t,functionName:e,hooks:{before:{},instead:{},after:{}}},t[e]=function(...a){return at(s,a,this)}}let u=ye();return w[s].hooks[o][u]=n,()=>ve(s,u,o)}function at(e,t,n){let o=w[e],s=o.hooks,u=t;for(let d in s.before){let h=s.before[d].call(n,u);Array.isArray(h)&&(u=h)}let m,a=Object.values(s.instead),c=(...d)=>o.originalFunction.call(n,...d);if(a.length>0){let d=f=>a[0].call(n,f,c);for(let f of a.slice(1)){let h=d;d=S=>f.call(n,S,h)}m=d(u)}else m=c(...u);for(let d in s.after){let h=s.after[d].call(n,u,m);typeof h!="undefined"&&(m=h)}return m}function Ce(e,t,n){return ne(e,t,n,"before")}function F(e,t,n){return ne(e,t,n,"instead")}function L(e,t,n){return ne(e,t,n,"after")}function ve(e,t,n){let o=w[e];if(o){let s=o.hooks;if(s[n][t])return delete s[n][t],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName],Object.keys(s).every(m=>Object.values(s[m]).length==0)&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,w[e]=void 0,delete w[e]),!0}return!1}function be(){for(let e in w)for(let t of Object.keys(w[e].hooks)){if(!w[e])return;let n=w[e].hooks[t];for(let o in n)ve(e,o,t)}}i();C();i();C();i();i();i();function lt(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(n=>{let o=()=>indexedDB.databases().finally(n);t=setInterval(o,100),o()}).finally(()=>clearInterval(t))}var xe=lt;function oe(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function ut(e,t){let n=xe().then(()=>{let o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),oe(o)});return(o,s)=>n.then(u=>s(u.transaction(t,o).objectStore(t)))}var re;function Se(){return re||(re=ut("keyval-store","keyval")),re}function J(e,t=Se()){return t("readonly",n=>oe(n.get(e)))}function T(e,t,n=Se()){return n("readwrite",o=>(o.put(t,e),oe(o.transaction)))}i();var H=rt(Ee());async function ke(e){let t=await J(`${e}_CUMCORD_STORE`)||{},n=H.make(t);return n.on(H.Events.SET,()=>{T(`${e}_CUMCORD_STORE`,{...n.ghost})}),n.store}var ht=eval,$={cache:"no-store"},Te="https://cors.bridged.cc/",x={},g={};function Ne(){for(let e of Object.keys(g))try{W(e)}catch{}}function N(e){return g[e]}function K(e,t){g[e]=t,T("CumcordCache",g)}async function G(e){let t=N(e);if(!t)throw new Error(`Plugin ${e} not found`);if(x[e])throw new Error(`Plugin ${e} already loaded`);let n=ht(t.js),o=n;typeof n=="function"&&(o=n({store:await ke(e),id:e})),x[e]=o;try{o.onLoad()}catch{}}function W(e){if(!N(e))throw new Error(`Plugin ${e} not found`);let n=x[e];if(n)n.onUnload(),x[e]=void 0,delete x[e];else throw new Error(`Plugin ${e} not loaded`)}function V(e){try{W(e)}catch{}g[e]=void 0,delete g[e],T("CumcordCache",g)}async function Be(){let e=await J("CumcordCache");x={},e?g=e:(await T("CumcordCache",{}),g={});for(let t of Object.keys(g))P(t)}function yt(e){let t=N(e);x[e]&&W(e),G(e),t.enabled||(t.enabled=!0,K(e,t))}function wt(e){let t=N(e);x[e]&&W(e),t.enabled&&(t.enabled=!1,K(e,t))}function q(e){N(e).enabled?wt(e):yt(e)}async function P(e){let t=e.replace(/\/?$/,"/"),n=new URL("plugin.json",t),o=new URL("plugin.js",t),s=!0,u=N(t),m=!1,a,c;try{a=await fetch(n,$)}catch{m=!0,a=await fetch(Te+n,$)}if(a.status!=200&&!u)throw new Error("Plugin manifest not returning success");try{c=await a.json()}catch{if(!u)throw new Error("Plugin manifest cannot be parsed")}if(u)if(s=u.enabled,c){if(u.manifest.hash==c.hash&&(u.manifest!=c&&(u.manifest=c,K(t,u)),s)){G(t);return}}else{s&&G(t);return}let d;if(m?d=await await fetch(Te+o,$):d=await await fetch(o,$),d.status!=200)throw new Error("Plugin not returning success");let f=await d.text();K(t,{manifest:c,js:f,enabled:s}),s&&G(t)}var Ct=r.useState,vt=l.findByDisplayName("Card"),bt=l.findByDisplayName("Header"),xt=l.findByDisplayName("Text"),ae=l.findByDisplayName("Flex"),St=l.findByDisplayName("Markdown"),Ot=l.findByDisplayName("Switch"),{Separator:Pn}=l.findByProps("Separator"),je=e=>{let t=g[e.pluginId],[n,o]=Ct(t.enabled);return r.createElement(vt,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},r.createElement(ae,{justify:ae.Justify.BETWEEN,align:ae.Align.CENTER},r.createElement("div",{className:"cumcord-card-header"},r.createElement(bt,{className:"cumcord-card-title"},t.manifest.name),r.createElement(xt,{className:"cumcord-card-author",tag:"h5"}," ","by ",r.createElement("strong",null,t.manifest.author))),r.createElement("div",{className:"cumcord-card-right"},r.createElement("div",{className:"cumcord-card-buttons"},r.createElement("svg",{onClick:()=>{V(e.pluginId),e.updatePlugins()},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),r.createElement(Ot,{checked:n,onChange:()=>{try{q(e.pluginId),o(t.enabled)}catch{}}}))),r.createElement(St,null,t.manifest.description))};var Ae=r.useState,Pt=l.findByDisplayName("FormTitle"),_t=l.findByDisplayName("FormSection"),Mt=l.findByDisplayName("Flex"),Dt=l.findByDisplayName("TextInput"),le=l.findByProps("Sizes","Colors","Looks","DropdownSizes"),Et=l.findByDisplayName("FormDivider"),Ie=()=>{let[e,t]=Ae(""),[n,o]=Ae(Object.keys(g)),s=()=>{o(Object.keys(g))};return r.createElement(_t,null,r.createElement(Pt,{tag:"h1"},"Plugins"),r.createElement(Mt,{basis:"auto",grow:1,shrink:1},r.createElement(Dt,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:e,onChange:u=>t(u)}),r.createElement(le,{color:le.Colors.BRAND,size:le.Sizes.MEDIUM,onClick:()=>{t(""),P(e).then(()=>{s()})}},"Add plugin")),r.createElement(Et,{className:"cumcord-plugin-divider"}),n.map(u=>r.createElement(je,{updatePlugins:s,pluginId:u})))};var Re={initializeSettings:function(){k(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:20px;margin-bottom:20px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-delete{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-delete:hover{fill:var(--interactive-hover)}.cumcord-card-buttons{display:flex;margin-right:4px}");let e=l.findByDisplayName("SettingsView");L("getPredicateSections",e.prototype,(t,n)=>{let o=n.findIndex(u=>u.section=="changelog")-1;if(o<0)return n;let s=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:Ie}];return n.splice(o,0,...s),n})}};z();i();C();i();i();z();var kt=eval,_=!1,M,Ue={};function ze(e){if(_){if(M){y.log("Unloading previous plugin version...");try{M.onUnload()}catch(t){y.error("Failed to unload:",t)}}pluginObject=kt(e),M=pluginObject,typeof M=="function"&&(M=pluginObject({store:Ue,id:"FAKE_PLUGIN_ID"})),y.log("Loading new plugin version...");try{M.onLoad()}catch(t){y.error("Failed to load:",t)}}}function Fe(){_=!_,_==!1&&(M=void 0,Ue={}),y.log(`Dev mode is now ${_?"on":"off"}.`)}i();C();var Tt=j("openModal").openModal,ue=j("button","colorRed"),Nt=ee("ConfirmModal"),Bt=ee("Markdown");async function Y({header:e="Are you sure?",confirmText:t="Confirm",cancelText:n="Cancel",content:o="Are you sure you want to do that?",type:s="neutral"}={},u=()=>{}){return new Promise(m=>{var a,c=!1;switch(s.toLowerCase()){case"danger":a=ue.colorRed;break;case"confirm":a=ue.colorGreen;break;default:a=ue.colorBrandNew;break}function d(f){c||(c=!0,u(f),m(f))}Tt(f=>(f.transitionState===3&&d(!1),r.createElement(Nt,{header:e,confirmText:t,cancelText:n,transitionState:f.transitionState,confirmButtonColor:a,onClose:()=>{d(!1)},onCancel:()=>{d(!1),f.onClose()},onConfirm:()=>{d(!0),f.onClose()}},r.createElement(Bt,{editable:!1},o))))})}function ce(e,t){var n;try{n=JSON.parse(e)}catch{return}switch(n.action.toLowerCase()){case"get_info":t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return;case"install_plugin":if(n.url){if(!n.url.match(/^(http|https):\/\/[^ "]+$/)){t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Invalid URL."}));return}DiscordNative.window.focus(),Y({header:"Do you want to install this plugin?",content:`Cumcord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from \`${n.url}\`.`,confirmText:"Install",cancelText:"Cancel",type:"danger"},o=>{if(o){P(n.url),t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return}else{t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Plugin installation cancelled."}));return}})}else{t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",error:"No URL provided."}));return}return;case"install_plugin_dev":_?n.code?(ze(n.code),t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"OK"}))):t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",message:"No code provided."})):t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",message:"Dev mode not enabled."}));return;default:return}}var Q=[];function Le(){window.DiscordNative&&F("handleConnection",j("handleConnection").__proto__,(e,t)=>{let n=e[0];if(n.upgradeReq().url=="/cumcord")Q.push(n),n.on("message",o=>ce(o,n)),n.on("close",()=>{Q.splice(Q.indexOf(n),1)});else return t(...e)})}function Je(){if(window.DiscordNative)for(let e of Q)e.close()}i();E();i();C();var jt=l.findByDisplayName("Card"),At=l.findByDisplayName("Header"),Vn=l.findByDisplayName("Text"),qn=l.findByDisplayName("Markdown"),He=e=>r.createElement(jt,{className:"cumcord-toast",type:"cardPrimary",outline:!1,editable:!1},r.createElement("div",{className:"cumcord-toast-header"},r.createElement(At,{className:"cumcord-toast-title"},e.children)));i();E();i();E();var B=ge(e=>({toasts:[]}));function $e(e){let t=B.getState();B.setState({toasts:[...t.toasts,e]})}function Ke(e){let t=B.getState(),n=t.toasts.indexOf(e);n>-1&&B.setState({toasts:t.toasts.filter((o,s)=>s!==n)})}var Ge=()=>{let e=B(t=>t.toasts);return r.createElement(r.Fragment,null,e)};var R=document.createElement("div");function We(){k(".cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{min-width:120px;min-height:50px;padding:5px;margin-right:10px;margin-bottom:10px;display:flex;justify-content:center;align-items:center;align-content:center;pointer-events:all}.cumcord-toast-title{font-size:30px;top:0;bottom:0;left:0;right:0}"),R.className="cumcord-toast-container",document.getElementById("app-mount").prepend(R),te.render(r.createElement(Ge,null),R)}function Ve(){te.unmountComponentAtNode(R),R.remove()}function qe(e){let t=r.createElement(He,null,e.title);$e(t);let n=()=>{Ke(t)},o=setTimeout(()=>{n(),clearTimeout(o)},e.duration);return n}function It(){return Ne(),Je(),be(),Ve(),we(),window.cumcord=void 0,delete window.cumcord,!0}async function Rt(){y.log("Initializing Cumcord API"),window.cumcord={uninject:It,modules:{webpackModules:l,webpack:l,common:he},plugins:{importPlugin:P,removePlugin:V,togglePlugin:q},patcher:{before:Ce,after:L,instead:F,injectCSS:k},ui:{toasts:{showToast:qe},modals:{showConfirmationModal:Y}},utils:{logger:y,findInTree:O,findInReactTree:me},cum:()=>y.log("8==D ~~~~~~")},window.DiscordNative&&(window.cumcord.dev={toggleDevMode:Fe}),We(),Be(),Re.initializeSettings(),Le()}var Ye=Rt;if(window.cumcord)throw new Error("Cumcord is already injected");Ye();})();
