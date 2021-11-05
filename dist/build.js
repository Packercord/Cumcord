(()=>{var St=Object.create;var de=Object.defineProperty;var Mt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var Pt=Object.getPrototypeOf,Dt=Object.prototype.hasOwnProperty;var _t=e=>de(e,"__esModule",{value:!0});var w=(e,t)=>()=>(e&&(t=e(e=0)),t);var W=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Tt=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of kt(t))!Dt.call(e,r)&&r!=="default"&&de(e,r,{get:()=>t[r],enumerable:!(o=Mt(t,r))||o.enumerable});return e},L=e=>Tt(_t(de(e!=null?St(Pt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);function P(e,t,{walkable:o=null,ignore:r=[],limit:a=100}={}){let s=0;function u(l,d,{walkable:p=null,ignore:f=[]}={}){if(s+=1,s>a)return null;if(typeof d=="string"){if(l.hasOwnProperty(d))return l[d]}else if(d(l))return l;if(l){if(Array.isArray(l))for(let y of l){let N=u(y,d,{walkable:p,ignore:f});if(N)return N}else if(typeof l=="object")for(let y of Object.keys(l)){if(p!=null&&!p.includes(y)||f.includes(y))continue;let N=u(l[y],d,{walkable:p,ignore:f});if(N)return N}}}return u(e,t,{walkable:o,ignore:r})}var fe=w(()=>{i()});function q(e,t){return P(e,t,{walkable:["props","children","child","sibling"]})}var Ne=w(()=>{i();fe()});function pe(e,t,o){console[o]("%cCumcord%c",`background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,"",...e)}var Nt,h,Oe=w(()=>{i();Nt={log:(...e)=>{pe(e,"#7289da","log")},error:(...e)=>{pe(e,"red","error")},warn:(...e)=>{pe(e,"#debf18","warn")}},h=Nt});var ge=W(me=>{i();"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.default=Object.freeze({GET:"GET",SET:"SET",DELETE:"DELETE",UPDATE:"UPDATE"})});var je=W(J=>{i();"use strict";var Ot=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(J,"__esModule",{value:!0});var Be=Ot(ge()),Ie=class{constructor(){this.listeners=Object.values(Be.default).reduce((t,o)=>(t[o]=new Set,t),{}),this.on=function(t,o){if(this.listeners[t].has(o))throw Error(`This listener on ${t} already exists.`);this.listeners[t].add(o)},this.once=function(t,o){let r=(a,s)=>{this.off(a,r),o(a,s)};this.on(t,r)},this.off=function(t,o){this.listeners[t].delete(o)},this.emit=function(t,o){for(let r of this.listeners[t])r(t,o)};for(let t of Object.values(Be.default))this[t.toLowerCase()]=o=>{this.emit(t,o)}}};J.default=Ie});var Ae=W(K=>{i();"use strict";var Bt=K&&K.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(K,"__esModule",{value:!0});var It=Bt(je());function jt(e,{nestArrays:t=!0}={}){let o=new It.default;function r(a,s=e,u=[]){return new Proxy(a,{get(l,d){let p=[...u,d],f=l[d];return f!=null?(o.get({path:p,value:f}),!t&&Array.isArray(f)?f:typeof f=="object"?r(f,s,p):f):r(l[d]={},s,p)},set(l,d,p){return l[d]=p,o.set({path:[...u,d],value:p}),!0},deleteProperty(l,d){return delete l[d]?(o.delete({path:[...u,d]}),!0):!1},has(l,d){return typeof l[d]=="object"&&Object.keys(l[d]).length===0?!1:d in l}})}return Object.assign({store:r(e),ghost:e},o)}K.default=jt});var O=W(D=>{i();"use strict";var ze=D&&D.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});D.make=D.Events=void 0;var At=ge();Object.defineProperty(D,"Events",{enumerable:!0,get:function(){return ze(At).default}});var zt=Ae();Object.defineProperty(D,"make",{enumerable:!0,get:function(){return ze(zt).default}})});function E(e,t=!1,o=()=>!0){let r=n.useRef(e.ghost),[,a]=n.useReducer(s=>~s,0);n.useEffect(()=>{function s(u,l){o(u,l)&&a()}return e.on(I.Events.UPDATE,s),t||(e.on(I.Events.SET,s),e.on(I.Events.DELETE,s)),()=>{e.off(I.Events.UPDATE,s),t||(e.off(I.Events.SET,s),e.off(I.Events.DELETE,s))}},[])}var I,Le=w(()=>{i();B();I=L(O())});function U(e){window.DiscordNative?DiscordNative.clipboard.copy(e):navigator.clipboard.writeText(e).then(()=>{},()=>{let t=document.createElement("textarea");t.style.visibility="hidden",t.style.position="fixed",t.style.top="0",t.style.left="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(o){console.error(o)}document.body.removeChild(t)})}var Ue=w(()=>{i()});function F(e){return e.__reactFiber$}var he=w(()=>{i()});function Z(e){for(let t=F(e);t;t=t.return){let o=t.stateNode;if(o&&o.forceUpdate)return o}}var Fe=w(()=>{i();he()});function Q(e){return new Promise(t=>setTimeout(t,e))}var Re=w(()=>{i()});var j=w(()=>{i();fe();Ne();Oe();Le();Ue();he();Fe();Re()});function Lt(){let e;return webpackChunkdiscord_app.push([[Math.random().toString(36)],{},t=>{e=t}]),e.c}function He(e,t,o=!1){let r=[];for(let a in e)if(e.hasOwnProperty(a)){let s=e[a].exports;s&&(s.default&&s.__esModule&&t(s.default)&&r.push(s.default),t(s)&&r.push(s))}return r}var m,$e,Bo,Io,R,jo,Ao,Y,X,zo,Lo,c,x=w(()=>{i();j();m={modules:Lt(),find:e=>He(m.modules,e)[0],findAll:e=>He(m.modules,e),getModule:e=>{for(let t in m.modules){let o=m.modules[t]?.exports;if(o===e||o?.default===e)return o}},findByProps:(...e)=>m.find(t=>e.every(o=>t[o]!==void 0)),findByPropsAll:(...e)=>m.findAll(t=>e.every(o=>t[o]!==void 0)),findByPrototypes:(...e)=>m.find(t=>t.prototype&&e.every(o=>t.prototype[o]!==void 0)),findByDisplayName:(e,t=!0)=>t?m.find(o=>o.displayName===e):m.find(o=>o?.default?.displayName===e),findByDisplayNameAll:e=>m.findAll(t=>t.displayName===e),findByStrings:(...e)=>m.find(t=>{if(typeof t=="function"){if(e.every(o=>t.toString().includes(o)))return!0}else return P(t,o=>{if(o){for(let r of Object.values(o))if(typeof r=="function"&&e.every(a=>r.toString().includes(a)))return!0}})}),findByKeywordAll:(...e)=>m.findAll(t=>e.every(o=>Object.keys(t).some(r=>r.toLowerCase().includes(o.toLowerCase()))==!0))},$e=m.find,Bo=m.findAll,Io=m.getModule,R=m.findByProps,jo=m.findByPropsAll,Ao=m.findByPrototypes,Y=m.findByDisplayName,X=m.findByDisplayNameAll,zo=m.findByStrings,Lo=m.findByKeywordAll,c=m});var C,n,ye,Ro,Ho,$o,Jo,Ko,Go,Vo,we,Je,B=w(()=>{i();x();C={constants:c.findByProps("API_HOST","APP_URL_PREFIX"),channels:c.findByProps("getChannelId","getVoiceChannelId"),Flux:c.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:c.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:c.findByProps("Messages","_requestedLocale"),React:c.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:c.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate"),Redux:c.findByProps("createStore","__DO_NOT_USE__ActionTypes"),zustand:c.find(e=>{if(typeof e=="function"&&e.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4"))return e}),uuid:{v4:c.findByProps("v4","v1")}},n=C.React,ye=C.ReactDOM,Ro=C.Flux,Ho=C.FluxDispatcher,$o=C.Redux,Jo=C.constants,Ko=C.channels,Go=C.i18n,Vo=C.zustand,we=C.uuid,Je=C});var i=w(()=>{B()});i();i();x();B();i();var Ve=L(O());i();i();function Ut(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(o=>{let r=()=>indexedDB.databases().finally(o);t=setInterval(r,100),r()}).finally(()=>clearInterval(t))}var Ke=Ut;function ee(e){return new Promise((t,o)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>o(e.error)})}function Ft(e,t){let o=Ke().then(()=>{let r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),ee(r)});return(r,a)=>o.then(s=>a(s.transaction(t,r).objectStore(t)))}var ve;function xe(){return ve||(ve=Ft("keyval-store","keyval")),ve}function te(e,t=xe()){return t("readonly",o=>ee(o.get(e)))}function oe(e,t,o=xe()){return o("readwrite",r=>(r.put(t,e),ee(r.transaction)))}function Ge(e,t=xe()){return t("readwrite",o=>(o.delete(e),ee(o.transaction)))}var We={nests:Ve.default,idbKeyval:{get:te,set:oe}};i();x();i();x();B();var b=[];function A(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),o=>{typeof o=="undefined"?t.remove():t.textContent=o}}function qe(){for(let e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()}var _=Symbol("_CUMCORD_INJECTIONS");function Ce(e,t,o,r){if(!(r=="before"||r=="instead"||r=="after"))throw new Error("Go fuck yourself.");if(typeof t[e]!="function")throw new Error(`${e} is not a function in ${t.constructor.name}`);if(Object.hasOwnProperty.bind(t)(_)||(t[_]={}),!t[_].hasOwnProperty(e)){let u=we.v4();t[_][e]=u}let a=t[_][e];if(!b[a]){let u=t[e];b[a]={originalFunction:u,functionParent:t,functionName:e,hooks:{before:{},instead:{},after:{}}},t[e]=function(){return Rt(a,arguments,this)},Object.assign(t[e],u),t[e].toString=u.toString}let s=we.v4();return b[a].hooks[r][s]=o,()=>Qe(a,s,r)}function Rt(e,t,o){let r=b[e],a=r.hooks,s=t;for(let p in a.before){let y=a.before[p].apply(o,[s]);Array.isArray(y)&&(s=y)}let u,l=Object.values(a.instead);function d(p){return r.originalFunction.apply(o,p)}if(l.length>0){let p=f=>l[0].apply(o,[f,d]);for(let f of l.slice(1)){let y=p;p=N=>f.apply(o,[N,y])}u=p(s)}else u=d(s);for(let p in a.after){let y=a.after[p].apply(o,[s,u]);typeof y!="undefined"&&(u=y)}return u}function Ze(e,t,o){return Ce(e,t,o,"before")}function ne(e,t,o){return Ce(e,t,o,"instead")}function re(e,t,o){return Ce(e,t,o,"after")}function Qe(e,t,o){let r=b[e];if(r){let a=r.hooks;if(a[o][t])return delete a[o][t],r.functionParent[_][r.functionName]=void 0,delete r.functionParent[_][r.functionName],Object.keys(a).every(u=>Object.values(a[u]).length==0)&&(r.functionParent[r.functionName]=r.originalFunction,delete r.functionParent[_],b[e]=void 0,delete b[e]),!0}return!1}function Ye(){for(let e in b)for(let t of Object.keys(b[e].hooks)){if(!b[e])continue;let o=b[e].hooks[t];for(let r in o)Qe(e,r,t)}}i();i();x();i();x();i();i();B();var M=class extends n.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?n.createElement("div",{className:"cumcord-error-handler"},n.createElement("h1",{className:"cumcord-error-handler-title"},"Oops, we had a fucky wucky. (Cumcord)"),n.createElement("code",{className:"cumcord-error-handler-code"},`${this.state.error}`)):this.props.children}};var ie=R("ModalCloseButton"),Xe=X("Header")[1],et=Y("Flex"),{openModal:Ht}=R("openModal","openModalLazy");function se(e,t){Ht(o=>n.createElement(ie.ModalRoot,{transitionState:o.transitionState,size:"large",className:"cumcord-settings-modal"},n.createElement(M,null,n.createElement(ie.ModalHeader,{separator:!1},n.createElement(et.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},n.createElement(Xe,{tag:"h2",size:Xe.Sizes.SIZE_20},e)),n.createElement(et.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},n.createElement(ie.ModalCloseButton,{onClick:o.onClose}))),n.createElement(ie.ModalContent,null,t))))}j();i();x();var{openModal:$t}=R("openModal","openModalLazy"),be=R("button","colorRed"),Jt=Y("ConfirmModal"),Kt=X("Markdown")[1];async function H({header:e="Are you sure?",confirmText:t="Confirm",cancelText:o="Cancel",content:r="Are you sure you want to do that?",type:a="neutral"}={},s=()=>{}){return new Promise(u=>{var l,d=!1;switch(a.toLowerCase()){case"danger":l=be.colorRed;break;case"confirm":l=be.colorGreen;break;default:l=be.colorBrandNew;break}function p(f){d||(d=!0,s(f),u(f))}$t(f=>(f.transitionState===3&&p(!1),n.createElement(Jt,{header:e,confirmText:t,cancelText:o,transitionState:f.transitionState,confirmButtonColor:l,onClose:()=>{p(!1)},onCancel:()=>{p(!1),f.onClose()},onConfirm:()=>{p(!0),f.onClose()}},n.createElement(Kt,{editable:!1},r))))})}i();B();i();x();var Gt=c.findByDisplayNameAll("Header")[1],tt=c.findByDisplayName("Text"),ot=e=>n.createElement("div",{onClick:e.onClick,className:"cumcord-toast"+(e.className?` ${e.className}`:"")},e.title?n.createElement(Gt,{className:"cumcord-toast-title"},e.title):null,e.content?n.createElement("div",{className:"cumcord-toast-content"},n.createElement(tt,{size:tt.Sizes.SIZE_16},e.content)):null);i();j();i();var nt=L(O()),k=nt.make({toasts:[]});var rt=()=>(E(k),n.createElement(n.Fragment,null,k.ghost.toasts.map(e=>e())));var G=document.createElement("div");function it(){A("@keyframes cumcord-fadeIn{0%{opacity:0}100%{opacity:1}}.cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:cumcord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.cumcord-toast-title{font-size:22px;line-height:1}"),G.className="cumcord-toast-container",document.getElementById("app-mount").prepend(G),ye.render(n.createElement(rt,null),G)}function st(){ye.unmountComponentAtNode(G),G.remove()}function $({title:e,content:t,onClick:o=()=>{},className:r,duration:a=3e3}){let s=()=>n.createElement(ot,{onClick:o,className:r,title:e,content:t});k.ghost.toasts.push(s),k.update();function u(){let l=k.ghost.toasts.indexOf(s);l>-1&&(k.ghost.toasts.splice(l,1),k.update())}return a!=1/0&&setTimeout(u,a),u}i();i();var V=L(O());async function Ee(e){let t=await te(`${e}_CUMCORD_STORE`)||{},o=V.make(t),r=()=>oe(`${e}_CUMCORD_STORE`,{...o.ghost});return o.on(V.Events.SET,r),o.on(V.Events.DELETE,r),o}var at=L(O()),Vt=eval,lt={cache:"no-store"},v=at.make({}),g={};function Se(e,t){let o=Vt(e+`
//# sourceURL=${t.id}`),r=o;return typeof o=="function"&&(r=o(t)),r}async function ae(e){let t=g.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(v.ghost[e])throw new Error(`Plugin ${e} already loaded`);let o=Se(t.js,{persist:await Ee(e),id:e});try{o.onLoad&&o.onLoad()}catch{}v.store[e]=o}function Me(e){let t=v.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(!v.ghost[e])throw new Error(`Plugin ${e} isn't loaded`);try{t.onUnload()}catch{}delete v.store[e]}function le(e){let t=g.store[e];if(!g.ghost[e])throw new Error(`Plugin ${e} not found`);t.enabled?(Me(e),t.enabled=!1):(ae(e),t.enabled=!0)}async function z(e){let t=e.replace(/\/?$/,"/"),o=new URL("plugin.json",t),r=new URL("plugin.js",t),a=g.ghost[t],s;a&&(s=g.store[t]);let u=a?s.enabled:!0,l;try{let f=await fetch(o,lt);if(l=await f.json(),f.status!=200&&!a)throw new Error("Plugin manifest not returning success")}catch{if(!a)throw new Error("Plugin manifest cannot be parsed")}if(a)if(l){if(s.manifest.hash==l.hash){s.manifest!=l&&(s.manifest=l),u&&ae(t);return}}else{u&&ae(t);return}let d=await await fetch(r,lt);if(d.status!=200)throw new Error("Plugin not returning success");let p=await d.text();g.store[t]={manifest:l,js:p,enabled:u},u&&await ae(t)}function ue(e){try{Me(e)}catch{}delete g.store[e]}async function ut(){g=await Ee("PLUGIN_CACHE")}async function ct(){for(let e of Object.keys(g.ghost))z(e)}function dt(){for(let e of Object.keys(g.ghost))try{Me(e)}catch{}}var Wt=c.findByDisplayName("Card"),qt=c.findByDisplayNameAll("Header")[1],Zt=c.findByDisplayName("Text"),ke=c.findByDisplayName("Flex"),Qt=c.findByDisplayNameAll("Markdown")[1],Yt=c.findByDisplayName("Switch"),Pe=e=>{let t=g.ghost[e.pluginId];if(!t.manifest)return null;E(v,!1,(r,a)=>{if(a.path[0]==e.pluginId)return!0});let o=null;return v.ghost[e.pluginId]&&v.ghost[e.pluginId].settings&&(o=n.createElement("svg",{onClick:()=>{se(t.manifest.name,v.ghost[e.pluginId].settings)},className:"cumcord-card-settings",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},n.createElement("g",null,n.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),n.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})))),n.createElement(Wt,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},n.createElement(ke,{justify:ke.Justify.BETWEEN,align:ke.Align.CENTER},n.createElement("div",{className:"cumcord-card-header"},n.createElement(qt,{className:"cumcord-card-title"},t.manifest.name),n.createElement(Zt,{className:"cumcord-card-author",tag:"h5"}," ","by ",n.createElement("strong",null,t.manifest.author))),n.createElement("div",{className:"cumcord-card-right"},n.createElement("div",{className:"cumcord-card-buttons"},o,n.createElement("svg",{onClick:()=>{$({content:"Copied plugin URL to clipboard.",duration:1300}),U(e.pluginId)},className:"cumcord-card-copy",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"none"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"})),n.createElement("svg",{onClick:()=>{H({header:"Do you want to remove this plugin?",content:`All of ${t.manifest.name}'s data will be deleted and cannot be recovered.`,type:"danger",confirmText:"Delete"},r=>{r&&(ue(e.pluginId),Ge(`${e.pluginId}_CUMCORD_STORE`))})},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),n.createElement(Yt,{checked:t.enabled,onChange:()=>{try{le(e.pluginId)}catch{}}}))),n.createElement(Qt,{className:"cumcord-card-description"},t.manifest.description))};x();j();var ft=n.useState,Xt=c.findByDisplayName("FormTitle"),eo=c.findByDisplayName("FormSection"),to=c.findByDisplayName("Flex"),oo=c.findByDisplayName("TextInput"),De=c.findByProps("Sizes","Colors","Looks","DropdownSizes"),no=c.findByDisplayName("FormDivider"),pt=c.findByDisplayName("SearchBar");function mt(e,t){return e.toLowerCase().split(t.toLowerCase()).length-1}var gt=()=>{let[e,t]=ft(""),[o,r]=ft("");function a(){r(""),z(o).then(()=>{}).catch(s=>$({title:"Failed to import plugin",content:s.message,duration:3e3}))}return E(g),n.createElement(M,null,n.createElement(eo,null,n.createElement(Xt,{tag:"h1"},"Plugins"),n.createElement(to,{basis:"auto",grow:1,shrink:1},n.createElement(oo,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:o,onChange:s=>r(s),onKeyDown:s=>{s.key==="Enter"&&a()}}),n.createElement(De,{color:De.Colors.BRAND,size:De.Sizes.MEDIUM,onClick:a},"Add plugin")),n.createElement(pt,{className:"cumcord-plugin-search",query:e,onQueryChange:s=>{t(s)},placeholder:"Search...",size:pt.Sizes.MEDIUM}),n.createElement(no,{className:"cumcord-plugin-divider"}),e?Object.keys(g.ghost).sort((s,u)=>{let l=Object.values(g.ghost[s].manifest).join(""),d=Object.values(g.ghost[u].manifest).join("");return mt(d,e)-mt(l,e)}).map(s=>n.createElement(Pe,{pluginId:s})):Object.keys(g.ghost).map(s=>n.createElement(Pe,{pluginId:s}))))};var ht={initializeSettings:function(){A(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:10px;margin-bottom:10px}.cumcord-plugin-search{margin-top:10px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-buttons{display:flex;margin-right:4px}.cumcord-card-buttons>*{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-buttons>*:hover{fill:var(--interactive-hover)}.cumcord-card-description{padding-top:3px;overflow-wrap:break-word}.cumcord-card-copy{width:18px}");let e=c.findByDisplayName("SettingsView");re("getPredicateSections",e.prototype,(t,o)=>{let r=o.findIndex(s=>s.section=="changelog")-1;if(r<0)return o;let a=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:gt}];return o.splice(r,0,...a),o})}};j();i();x();i();i();j();var _e=L(O()),T=!1,S,yt=_e.make({});async function wt(){if(T){if(S){h.log("Unloading previous plugin version...");try{S.onUnload()}catch(e){h.error("Failed to unload:",e)}}h.log("Loading new plugin version...");try{let e=await(await fetch("http://127.0.0.1:42069")).text();S=Se(e,{persist:yt,id:"FAKE_PLUGIN_ID"}),S.onLoad&&S.onLoad()}catch(e){h.error("Failed to load:",e)}}}function vt(){T=!T,T==!1&&(S.onUnload(),S=void 0,yt=_e.make({})),h.log(`Dev mode is now ${T?"on":"off"}.`)}function xt(){T?S?S.settings?se("Fake Dev Plugin",S.settings):h.log("No settings for this plugin."):h.error("No plugin loaded!"):h.error("Dev mode is off!")}function Te(e,t){var o;try{o=JSON.parse(e)}catch{return}switch(o.action.toLowerCase()){case"get_info":t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"OK"}));return;case"install_plugin":if(o.url){if(!o.url.match(/^(http|https):\/\/[^ "]+$/)){t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"ERROR",error:"Invalid URL."}));return}DiscordNative.window.focus(),H({header:"Do you want to install this plugin?",content:`Cumcord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from \`${o.url}\`.`,confirmText:"Install",cancelText:"Cancel",type:"danger"},r=>{if(r){z(o.url),t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"OK"}));return}else{t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"ERROR",error:"Plugin installation cancelled."}));return}})}else{t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"ERROR",error:"No URL provided."}));return}return;case"update_plugin_dev":T?(wt(),t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"OK"}))):t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"ERROR",message:"Dev mode not enabled."}));return;default:return}}var ce=[];function Ct(){window.DiscordNative&&ne("handleConnection",$e(e=>e.Z?.__proto__?.handleConnection).Z,(e,t)=>{let o=e[0];if(o.upgradeReq().url=="/cumcord")ce.push(o),o.on("message",r=>Te(r,o)),o.on("close",()=>{ce.splice(ce.indexOf(o),1)});else return t(...e)})}function bt(){if(window.DiscordNative)for(let e of ce)e.close()}function ro(){return dt(),bt(),Ye(),st(),qe(),window.cumcord=void 0,delete window.cumcord,!0}async function io(){h.log("Initializing Cumcord API"),window.cumcord={uninject:ro,modules:{webpackModules:c,webpack:c,common:Je,internal:We},plugins:{importPlugin:z,removePlugin:ue,togglePlugin:le},patcher:{before:Ze,after:re,instead:ne,injectCSS:A},ui:{toasts:{showToast:$},modals:{showConfirmationModal:H},components:{ErrorBoundary:M}},utils:{logger:h,findInTree:P,findInReactTree:q,getReactInstance:F,getOwnerInstance:Z,sleep:Q,useNest:E,copyText:U},cum:()=>h.log("8==D ~~~~~~")},window.DiscordNative&&(window.cumcord.dev={toggleDevMode:vt,showSettings:xt}),A(".cumcord-error-handler{font-family: var(--font-display);color:var(--text-normal);padding:16px}.cumcord-error-handler-title{margin-bottom:7px;font-weight:bold;font-size:24px}.cumcord-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text}"),it(),await ut(),ht.initializeSettings(),window.cumcord.plugins.installed=g,window.cumcord.plugins.loaded=v,await ct(),Ct(),h.log("Cumcord is injected!")}var Et=io;if(window.cumcord)throw new Error("Cumcord is already injected");Et();})();
//# sourceURL=Cumcord