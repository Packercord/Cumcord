(function(){"use strict";const e=e=>{console.log(`%cCumcord%c ${e}`,"background-color: #7289da; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold","")};function n(e,n){let t=[];for(const o in e)if(e.hasOwnProperty(o)){const c=e[o].exports;c&&(c.default&&c.__esModule&&n(c.default)&&t.push(c.default),n(c)&&t.push(c))}return t}const t={modules:function(){const e=window.webpackJsonp.push([[],{cum:(e,n,t)=>e.exports=t},[["cum"]]]);return e.m.cum=void 0,delete e.m.cum,e.c.cum=void 0,delete e.c.cum,e.c}(),find:e=>n(t.modules,e)[0],findAll:e=>n(t.modules,e),findByProps:(...e)=>t.find((n=>e.every((e=>void 0!==n[e])))),findByPropsAll:(...e)=>t.findAll((n=>e.every((e=>void 0!==n[e])))),findByPrototypes:(...e)=>t.find((n=>n.prototype&&e.every((e=>void 0!==n.prototype[e])))),findByDisplayName:e=>t.find((n=>n.displayName===e)),findByStringInPropsAll:(...e)=>t.findAll((n=>e.every((e=>1==Object.keys(n).some((n=>n.toLowerCase().includes(e.toLowerCase())))))))};t.find,t.findAll,t.findByProps,t.findByPropsAll,t.findByPrototypes,t.findByDisplayName,t.findByStringInPropsAll;const o={constants:t.findByProps("API_HOST","APP_URL_PREFIX"),channels:t.findByProps("getChannelId","getVoiceChannelId"),Flux:t.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:t.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:t.findByProps("Messages","_requestedLocale"),React:t.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:t.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate")},c=o.React,i=o.ReactDOM;o.Flux;const r=t.findByProps("v4").v4,a={instead:function(e,n,t){return s(e,n,t,"instead")},before:function(e,n,t){return s(e,n,t,"before")},after:function(e,n,t){return s(e,n,t,"after")},unpatchAll:function(){e("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(const e in window.cumcord.patcher.patches)for(const n of Object.keys(window.cumcord.patcher.patches[e].hooks)){if(!window.cumcord.patcher.patches[e])return;const t=window.cumcord.patcher.patches[e].hooks[n];for(const o in t)l(e,o,n)}},unpatchAllCss:function(){for(const e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()},patches:{},injectCSS:function(e){const n=document.createElement("style");return n.className="CUMCORD_INJECTED_CSS",n.textContent=e,document.head.appendChild(n),()=>{n.remove()}}};function s(e,n,t,o){if("before"!=o&&"instead"!=o&&"after"!=o)throw new Error("Go fuck yourself.");if("function"!=typeof n[e])throw new Error(`${e} is not a function in ${n.constructor.name}`);if(n.hasOwnProperty("CUMCORD_INJECTIONS")||(n.CUMCORD_INJECTIONS={}),!n.CUMCORD_INJECTIONS.hasOwnProperty(e)){const t=r();n.CUMCORD_INJECTIONS[e]=t}const c=n.CUMCORD_INJECTIONS[e];if(!window.cumcord.patcher.patches[c]){const t=Object.assign({},n)[e];window.cumcord.patcher.patches[c]={originalFunction:t,functionParent:n,functionName:e,hooks:{before:{},instead:{},after:{}}},n[e]=function(...e){return function(e,n,t){const o=window.cumcord.patcher.patches[e],c=o.hooks;let i,r=n;for(const e in c.before){const n=c.before[e].call(t,r);Array.isArray(n)&&(r=n)}let a=Object.values(c.instead),s=(...e)=>o.originalFunction.call(t,...e);if(a.length>0){let e=e=>a[0].call(t,e,s);for(const n of a.slice(1)){let o=e;e=e=>n.call(t,e,o)}i=e(r)}else i=s(...r);for(const e in c.after){const n=c.after[e].call(t,r,i);void 0!==n&&(i=n)}return i}(c,e,this)}}const i=r();return window.cumcord.patcher.patches[c].hooks[o][i]=t,()=>l(c,i,o)}function l(e,n,t){const o=window.cumcord.patcher.patches[e];if(o){const c=o.hooks;if(c[t][n]){delete c[t][n],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName];return Object.keys(c).every((e=>0==Object.values(c[e]).length))&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,window.cumcord.patcher.patches[e]=void 0,delete window.cumcord.patcher.patches[e]),!0}}return!1}const u=t.findByProps("v4").v4,d={instead:function(e,n,t){return p(e,n,t,"instead")},before:function(e,n,t){return p(e,n,t,"before")},after:function(e,n,t){return p(e,n,t,"after")},unpatchAll:function(){e("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(const e in window.cumcord.patcher.patches)for(const n of Object.keys(window.cumcord.patcher.patches[e].hooks)){if(!window.cumcord.patcher.patches[e])return;const t=window.cumcord.patcher.patches[e].hooks[n];for(const o in t)m(e,o,n)}},unpatchAllCss:function(){for(const e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()},patches:{},injectCSS:function(e){const n=document.createElement("style");return n.className="CUMCORD_INJECTED_CSS",n.textContent=e,document.head.appendChild(n),()=>{n.remove()}}};function p(e,n,t,o){if("before"!=o&&"instead"!=o&&"after"!=o)throw new Error("Go fuck yourself.");if("function"!=typeof n[e])throw new Error(`${e} is not a function in ${n.constructor.name}`);if(n.hasOwnProperty("CUMCORD_INJECTIONS")||(n.CUMCORD_INJECTIONS={}),!n.CUMCORD_INJECTIONS.hasOwnProperty(e)){const t=u();n.CUMCORD_INJECTIONS[e]=t}const c=n.CUMCORD_INJECTIONS[e];if(!window.cumcord.patcher.patches[c]){const t=Object.assign({},n)[e];window.cumcord.patcher.patches[c]={originalFunction:t,functionParent:n,functionName:e,hooks:{before:{},instead:{},after:{}}},n[e]=function(...e){return function(e,n,t){const o=window.cumcord.patcher.patches[e],c=o.hooks;let i,r=n;for(const e in c.before){const n=c.before[e].call(t,r);Array.isArray(n)&&(r=n)}let a=Object.values(c.instead),s=(...e)=>o.originalFunction.call(t,...e);if(a.length>0){let e=e=>a[0].call(t,e,s);for(const n of a.slice(1)){let o=e;e=e=>n.call(t,e,o)}i=e(r)}else i=s(...r);for(const e in c.after){const n=c.after[e].call(t,r,i);void 0!==n&&(i=n)}return i}(c,e,this)}}const i=u();return window.cumcord.patcher.patches[c].hooks[o][i]=t,()=>m(c,i,o)}function m(e,n,t){const o=window.cumcord.patcher.patches[e];if(o){const c=o.hooks;if(c[t][n]){delete c[t][n],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName];return Object.keys(c).every((e=>0==Object.values(c[e]).length))&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,window.cumcord.patcher.patches[e]=void 0,delete window.cumcord.patcher.patches[e]),!0}}return!1}const f=c.useState,h=t.findByDisplayName("Card"),g=t.findByDisplayName("Header"),w=t.findByDisplayName("Text"),y=t.findByDisplayName("Flex"),C=t.findByDisplayName("Markdown"),E=t.findByDisplayName("Switch");t.findByProps("Separator");var N=e=>{const n=window.cumcord.plugins.pluginCache[e.pluginId],[t,o]=f(n.enabled);return c.createElement(h,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},c.createElement(y,{justify:y.Justify.BETWEEN,align:y.Align.CENTER},c.createElement("div",{className:"cumcord-card-header"},c.createElement(g,{className:"cumcord-card-title"},n.manifest.name),c.createElement(w,{className:"cumcord-card-author",tag:"h5"}," ","by ",c.createElement("strong",null,n.manifest.author))),c.createElement("div",{className:"cumcord-card-right"},c.createElement("div",{className:"cumcord-card-buttons"},c.createElement("svg",{onClick:()=>{window.cumcord.plugins.removePlugin(e.pluginId),e.updatePlugins()},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),c.createElement(E,{checked:t,onChange:()=>{try{window.cumcord.plugins.togglePlugin(e.pluginId),o(n.enabled)}catch{}}}))),c.createElement(C,null,n.manifest.description))};const P=c.useState,v=t.findByDisplayName("FormTitle"),b=t.findByDisplayName("FormSection"),O=t.findByDisplayName("Flex"),I=t.findByDisplayName("TextInput"),D=t.findByProps("Sizes","Colors","Looks","DropdownSizes"),S=t.findByDisplayName("FormDivider");var _=()=>{const[e,n]=P(""),[t,o]=P(Object.keys(window.cumcord.plugins.pluginCache)),i=()=>{o(Object.keys(window.cumcord.plugins.pluginCache))};return c.createElement(b,null,c.createElement(v,{tag:"h1"},"Plugins"),c.createElement(O,{basis:"auto",grow:1,shrink:1},c.createElement(I,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:e,onChange:e=>n(e)}),c.createElement(D,{color:D.Colors.BRAND,size:D.Sizes.MEDIUM,onClick:()=>{n(""),window.cumcord.plugins.importPlugin(e).then((()=>{i()}))}},"Add plugin")),c.createElement(S,{className:"cumcord-plugin-divider"}),t.map((e=>c.createElement(N,{updatePlugins:i,pluginId:e}))))},x=function(){d.injectCSS("\n    .cumcord-plugin-card {\n      padding: 16px;\n      margin-bottom: 10px;\n    }\n\n    .cumcord-plugin-import {\n      flex-grow: 1;\n      margin-right: 20px;\n    }\n\n    .cumcord-plugin-divider {\n      margin-top: 20px;\n      margin-bottom: 20px;\n    }\n\n    .cumcord-card-header {\n      display: inline-block;\n    }\n\n    .cumcord-card-title, .cumcord-card-author {\n      display: inline;\n    }\n\n    .cumcord-card-right {\n      display: flex;\n    }\n\n    .cumcord-card-delete {\n      fill: var(--interactive-normal);\n      cursor: pointer;\n      width: 20px;\n    }\n\n    .cumcord-card-delete:hover {\n      fill: var(--interactive-hover);\n    }\n\n    .cumcord-card-buttons {\n      display: flex;\n      margin-right: 4px;\n    }\n    ");const e=t.findByDisplayName("SettingsView");d.after("getPredicateSections",e.prototype,((e,n)=>{const t=n.findIndex((e=>"changelog"==e.section))-1;if(t<0)return n;const o=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:_}];return n.splice(t,0,...o),n}))};const B=t.findByDisplayName("Card"),R=t.findByDisplayName("Header");t.findByDisplayName("Text"),t.findByDisplayName("Markdown");var T=e=>c.createElement(B,{className:"cumcord-toast",type:"cardPrimary",outline:!1,editable:!1},c.createElement("div",{className:"cumcord-toast-header"},c.createElement(R,{className:"cumcord-toast-title"},e.children)));let k=document.createElement("div"),A=[];function M(){i.render(c.createElement("div",null,A),k)}var U={initializeToasts(){d.injectCSS("\n    .cumcord-toast-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      pointer-events: none;\n      display: flex;\n      flex-direction: column-reverse;\n      align-items: flex-end;\n      z-index: 999999;\n    }\n\n    .cumcord-toast {\n      min-width: 120px;\n      min-height: 50px;\n      padding: 5px;\n      margin-right: 10px;\n      margin-bottom: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      pointer-events: all;\n    }\n\n    .cumcord-toast-title {\n      font-size: 30px;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    "),k.className="cumcord-toast-container",document.getElementById("app-mount").prepend(k),M()},uninitializeToasts(){i.unmountComponentAtNode(k),k.remove()},apis:{showToast(e){const n=c.createElement(T,null,e.title);A.push(n),M();const t=()=>{A.splice(A.indexOf(n),1),M()};let o=setTimeout((()=>{t(),clearTimeout(o)}),e.duration);return t}}};function j(e){return new Promise(((n,t)=>{e.oncomplete=e.onsuccess=()=>n(e.result),e.onabort=e.onerror=()=>t(e.error)}))}function J(e,n){const t=function(){if(navigator.userAgentData||!/Safari\//.test(navigator.userAgent)||/Chrom(e|ium)\//.test(navigator.userAgent)||!indexedDB.databases)return Promise.resolve();let e;return new Promise((n=>{const t=()=>indexedDB.databases().finally(n);e=setInterval(t,100),t()})).finally((()=>clearInterval(e)))}().then((()=>{const t=indexedDB.open(e);return t.onupgradeneeded=()=>t.result.createObjectStore(n),j(t)}));return(e,o)=>t.then((t=>o(t.transaction(n,e).objectStore(n))))}let L;function z(){return L||(L=J("keyval-store","keyval")),L}function F(e,n,t=z()){return t("readwrite",(t=>(t.put(n,e),j(t.transaction))))}const $=eval,H={cache:"no-store"},V="https://cors.bridged.cc/";function q(e){const n=Z.getPlugin(e);if(!n)throw new Error(`Plugin ${e} not found`);if(window.cumcord.plugins.loadedPlugins[e])throw new Error(`Plugin ${e} already loaded`);const t=$(n.js);window.cumcord.plugins.loadedPlugins[e]=t;try{t.onLoad()}catch{}}function G(e){if(!Z.getPlugin(e))throw new Error(`Plugin ${e} not found`);const n=window.cumcord.plugins.loadedPlugins[e];if(!n)throw new Error(`Plugin ${e} not loaded`);n.onUnload(),window.cumcord.plugins.loadedPlugins[e]=void 0,delete window.cumcord.plugins.loadedPlugins[e]}function W(e){const n=Z.getPlugin(e);window.cumcord.plugins.loadedPlugins[e]&&G(e),q(e),n.enabled||(n.enabled=!0,Z.setPlugin(e,n))}function Y(e){const n=Z.getPlugin(e);window.cumcord.plugins.loadedPlugins[e]&&G(e),n.enabled&&(n.enabled=!1,Z.setPlugin(e,n))}function Q(e){Z.getPlugin(e).enabled?Y(e):W(e)}async function X(e){const n=e.replace(/\/?$/,"/"),t=new URL("plugin.json",n),o=new URL("plugin.js",n);let c=!0;const i=Z.getPlugin(n);let r,a,s,l=!1;try{r=await fetch(t,H)}catch{l=!0,r=await fetch(V+t,H)}if(200!=r.status&&!i)throw new Error("Plugin manifest not returning success");try{a=await r.json()}catch{if(!i)throw new Error("Plugin manifest cannot be parsed")}if(i){if(c=i.enabled,!a)return c&&q(n),void 0;if(i.manifest.hash==a.hash&&(i.manifest!=a&&(i.manifest=a,Z.setPlugin(n,i)),c))return q(n),void 0}if(s=l?await await fetch(V+o,H):await await fetch(o,H),200!=s.status)throw new Error("Plugin not returning success");const u=await s.text();Z.setPlugin(n,{manifest:a,js:u,enabled:c}),c&&q(n)}function K(e){try{G(e)}catch{}window.cumcord.plugins.pluginCache[e]=void 0,delete window.cumcord.plugins.pluginCache[e],F("CumcordCache",window.cumcord.plugins.pluginCache)}var Z={initializePlugins:async()=>{let e=await function(e,n=z()){return n("readonly",(n=>j(n.get(e))))}("CumcordCache");window.cumcord.plugins.loadedPlugins={},e?window.cumcord.plugins.pluginCache=e:(await F("CumcordCache",{}),window.cumcord.plugins.pluginCache={});for(let e of Object.keys(window.cumcord.plugins.pluginCache))X(e);window.cumcord.plugins.importPlugin=X,window.cumcord.plugins.removePlugin=K,window.cumcord.plugins.enablePlugin=W,window.cumcord.plugins.disablePlugin=Y,window.cumcord.plugins.togglePlugin=Q},getPlugin:e=>window.cumcord.plugins.pluginCache[e],setPlugin:(e,n)=>{window.cumcord.plugins.pluginCache[e]=n,F("CumcordCache",window.cumcord.plugins.pluginCache)},removePlugin:K};function ee(){for(let e of Object.keys(window.cumcord.plugins.pluginCache))try{G(e)}catch{}return a.unpatchAll(),U.uninitializeToasts(),a.unpatchAllCss(),window.cumcord=void 0,delete window.cumcord,!0}if(window.cumcord)throw new Error("Cumcord is already injected");(async function(){e("Initializing Cumcord API"),window.cumcord={uninject:ee,modules:{webpackModules:t,common:o},plugins:{},patcher:a,ui:{toasts:U.apis},cum:()=>{e("8==D ~~~")}},U.initializeToasts(),await Z.initializePlugins(),x()})()})();