(function(){"use strict";const e=e=>{console.log(`%cCumcord%c ${e}`,"background-color: #7289da; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold","")};function n(e,n){let t=[];for(const o in e)if(e.hasOwnProperty(o)){const c=e[o].exports;c&&(c.default&&c.__esModule&&n(c.default)&&t.push(c.default),n(c)&&t.push(c))}return t}const t={modules:function(){const e=window.webpackJsonp.push([[],{__extra_id__:(e,n,t)=>e.exports=t},[["__extra_id__"]]]);return e.m.__extra_id__=void 0,delete e.m.__extra_id__,e.c.__extra_id__=void 0,delete e.c.__extra_id__,e.c}(),find:e=>n(t.modules,e)[0],findAll:e=>n(t.modules,e),findByProps:(...e)=>t.find((n=>e.every((e=>void 0!==n[e])))),findByPropsAll:(...e)=>t.findAll((n=>e.every((e=>void 0!==n[e])))),findByPrototypes:(...e)=>t.find((n=>n.prototype&&e.every((e=>void 0!==n.prototype[e])))),findByDisplayName:e=>t.find((n=>n.displayName===e)),findByStringInPropsAll:(...e)=>t.findAll((n=>e.every((e=>1==Object.keys(n).some((n=>n.toLowerCase().includes(e.toLowerCase())))))))};t.find,t.findAll,t.findByProps,t.findByPropsAll,t.findByPrototypes,t.findByDisplayName,t.findByStringInPropsAll;const o={constants:t.findByProps("API_HOST","APP_URL_PREFIX"),channels:t.findByProps("getChannelId","getVoiceChannelId"),Flux:t.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:t.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:t.findByProps("getLanguages","_requestedLocale","languages"),React:t.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:t.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate")},c=o.React;o.ReactDOM;const r=t.findByProps("v4").v4,i={instead:function(e,n,t){return a(e,n,t,"instead")},before:function(e,n,t){return a(e,n,t,"before")},after:function(e,n,t){return a(e,n,t,"after")},unpatchAll:function(){e("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(const e in window.cumcord.patcher.patches)for(const n of Object.keys(window.cumcord.patcher.patches[e].hooks)){if(!window.cumcord.patcher.patches[e])return;const t=window.cumcord.patcher.patches[e].hooks[n];for(const o in t)s(e,o,n)}},unpatchAllCss:function(){for(const e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()},patches:{},injectCSS:function(e){const n=document.createElement("style");return n.className="CUMCORD_INJECTED_CSS",n.textContent=e,document.head.appendChild(n),()=>{n.remove()}}};function a(e,n,t,o){if("before"!=o&&"instead"!=o&&"after"!=o)throw new Error("Go fuck yourself.");if("function"!=typeof n[e])throw new Error(`${e} is not a function in ${n.constructor.name}`);if(n.hasOwnProperty("CUMCORD_INJECTIONS")||(n.CUMCORD_INJECTIONS={}),!n.CUMCORD_INJECTIONS.hasOwnProperty(e)){const t=r();n.CUMCORD_INJECTIONS[e]=t}const c=n.CUMCORD_INJECTIONS[e];if(!window.cumcord.patcher.patches[c]){const t=Object.assign({},n)[e];window.cumcord.patcher.patches[c]={originalFunction:t,functionParent:n,functionName:e,hooks:{before:{},instead:{},after:{}}},n[e]=function(...e){return function(e,n,t){const o=window.cumcord.patcher.patches[e],c=o.hooks;let r,i=n;for(const e in c.before){const n=c.before[e].call(t,i);Array.isArray(n)&&(i=n)}let a=Object.values(c.instead),s=e=>o.originalFunction.call(t,e);if(a.length>0){let e=e=>a[0].call(t,e,s);for(const n of a.slice(1)){let o=e;e=e=>n.call(t,e,o)}r=e(i)}else r=s(...i);for(const e in c.after){const n=c.after[e].call(t,i,r);void 0!==n&&(r=n)}return r}(c,e,this)}}const i=r();return window.cumcord.patcher.patches[c].hooks[o][i]=t,()=>s(c,i,o)}function s(e,n,t){const o=window.cumcord.patcher.patches[e];if(o){const c=o.hooks;if(c[t][n]){delete c[t][n],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName];return Object.keys(c).every((e=>0==Object.values(c[e]).length))&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,window.cumcord.patcher.patches[e]=void 0,delete window.cumcord.patcher.patches[e]),!0}}return!1}const u=t.findByProps("v4").v4,l={instead:function(e,n,t){return d(e,n,t,"instead")},before:function(e,n,t){return d(e,n,t,"before")},after:function(e,n,t){return d(e,n,t,"after")},unpatchAll:function(){e("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(const e in window.cumcord.patcher.patches)for(const n of Object.keys(window.cumcord.patcher.patches[e].hooks)){if(!window.cumcord.patcher.patches[e])return;const t=window.cumcord.patcher.patches[e].hooks[n];for(const o in t)p(e,o,n)}},unpatchAllCss:function(){for(const e of document.querySelectorAll(".CUMCORD_INJECTED_CSS"))e.remove()},patches:{},injectCSS:function(e){const n=document.createElement("style");return n.className="CUMCORD_INJECTED_CSS",n.textContent=e,document.head.appendChild(n),()=>{n.remove()}}};function d(e,n,t,o){if("before"!=o&&"instead"!=o&&"after"!=o)throw new Error("Go fuck yourself.");if("function"!=typeof n[e])throw new Error(`${e} is not a function in ${n.constructor.name}`);if(n.hasOwnProperty("CUMCORD_INJECTIONS")||(n.CUMCORD_INJECTIONS={}),!n.CUMCORD_INJECTIONS.hasOwnProperty(e)){const t=u();n.CUMCORD_INJECTIONS[e]=t}const c=n.CUMCORD_INJECTIONS[e];if(!window.cumcord.patcher.patches[c]){const t=Object.assign({},n)[e];window.cumcord.patcher.patches[c]={originalFunction:t,functionParent:n,functionName:e,hooks:{before:{},instead:{},after:{}}},n[e]=function(...e){return function(e,n,t){const o=window.cumcord.patcher.patches[e],c=o.hooks;let r,i=n;for(const e in c.before){const n=c.before[e].call(t,i);Array.isArray(n)&&(i=n)}let a=Object.values(c.instead),s=e=>o.originalFunction.call(t,e);if(a.length>0){let e=e=>a[0].call(t,e,s);for(const n of a.slice(1)){let o=e;e=e=>n.call(t,e,o)}r=e(i)}else r=s(...i);for(const e in c.after){const n=c.after[e].call(t,i,r);void 0!==n&&(r=n)}return r}(c,e,this)}}const r=u();return window.cumcord.patcher.patches[c].hooks[o][r]=t,()=>p(c,r,o)}function p(e,n,t){const o=window.cumcord.patcher.patches[e];if(o){const c=o.hooks;if(c[t][n]){delete c[t][n],o.functionParent.CUMCORD_INJECTIONS[o.functionName]=void 0,delete o.functionParent.CUMCORD_INJECTIONS[o.functionName];return Object.keys(c).every((e=>0==Object.values(c[e]).length))&&(o.functionParent[o.functionName]=o.originalFunction,delete o.functionParent.CUMCORD_INJECTIONS,window.cumcord.patcher.patches[e]=void 0,delete window.cumcord.patcher.patches[e]),!0}}return!1}const f=c.useState,m=t.findByDisplayName("Card"),h=t.findByDisplayName("Header"),g=t.findByDisplayName("Text"),w=t.findByDisplayName("Flex"),y=t.findByDisplayName("Markdown"),C=t.findByDisplayName("Switch");t.findByProps("Separator");var P=e=>{const n=window.cumcord.plugins.pluginCache[e.pluginId],[t,o]=f(n.enabled);return c.createElement(m,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},c.createElement(w,{justify:w.Justify.BETWEEN,align:w.Align.CENTER},c.createElement("div",{className:"cumcord-card-header"},c.createElement(h,{className:"cumcord-card-title"},n.manifest.name),c.createElement(g,{className:"cumcord-card-author",tag:"h5"}," ","by ",c.createElement("strong",null,n.manifest.author))),c.createElement("div",{className:"cumcord-card-right"},c.createElement("div",{className:"cumcord-card-buttons"},c.createElement("svg",{onClick:()=>{window.cumcord.plugins.removePlugin(e.pluginId),e.updatePlugins()},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),c.createElement(C,{checked:t,onChange:()=>{try{window.cumcord.plugins.togglePlugin(e.pluginId),o(n.enabled)}catch{}}}))),c.createElement(y,null,n.manifest.description))};const _=c.useState,E=t.findByDisplayName("FormTitle"),N=t.findByDisplayName("FormSection"),v=t.findByDisplayName("Flex"),O=t.findByDisplayName("TextInput"),b=t.findByProps("Sizes","Colors","Looks","DropdownSizes"),I=t.findByDisplayName("FormDivider");var D=()=>{const[e,n]=_(""),[t,o]=_(Object.keys(window.cumcord.plugins.pluginCache)),r=()=>{o(Object.keys(window.cumcord.plugins.pluginCache))};return c.createElement(N,null,c.createElement(E,{tag:"h1"},"Plugins"),c.createElement(v,{basis:"auto",grow:1,shrink:1},c.createElement(O,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:e,onChange:e=>n(e)}),c.createElement(b,{color:b.Colors.BRAND,size:b.Sizes.MEDIUM,onClick:()=>{n(""),window.cumcord.plugins.importPlugin(e).then((()=>{r()}))}},"Add plugin")),c.createElement(I,{className:"cumcord-plugin-divider"}),t.map((e=>c.createElement(P,{updatePlugins:r,pluginId:e}))))},S=function(){l.injectCSS("\n    .cumcord-plugin-card {\n      padding: 16px;\n      margin-bottom: 10px;\n    }\n\n    .cumcord-plugin-import {\n      flex-grow: 1;\n      margin-right: 20px;\n    }\n\n    .cumcord-plugin-divider {\n      margin-top: 20px;\n      margin-bottom: 20px;\n    }\n\n    .cumcord-card-header {\n      display: inline-block;\n    }\n\n    .cumcord-card-title, .cumcord-card-author {\n      display: inline;\n    }\n\n    .cumcord-card-right {\n      display: flex;\n    }\n\n    .cumcord-card-delete {\n      fill: var(--interactive-normal);\n      cursor: pointer;\n      width: 20px;\n    }\n\n    .cumcord-card-delete:hover {\n      fill: var(--interactive-hover);\n    }\n\n    .cumcord-card-buttons {\n      display: flex;\n      margin-right: 4px;\n    }\n    ");const e=t.findByDisplayName("SettingsView");l.after("getPredicateSections",e.prototype,((e,n)=>{const t=n.findIndex((e=>"changelog"==e.section))-1;if(t<0)return n;const o=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:D}];return n.splice(t,0,...o),n}))};function x(e){return new Promise(((n,t)=>{e.oncomplete=e.onsuccess=()=>n(e.result),e.onabort=e.onerror=()=>t(e.error)}))}function B(e,n){const t=function(){if(navigator.userAgentData||!/Safari\//.test(navigator.userAgent)||/Chrom(e|ium)\//.test(navigator.userAgent)||!indexedDB.databases)return Promise.resolve();let e;return new Promise((n=>{const t=()=>indexedDB.databases().finally(n);e=setInterval(t,100),t()})).finally((()=>clearInterval(e)))}().then((()=>{const t=indexedDB.open(e);return t.onupgradeneeded=()=>t.result.createObjectStore(n),x(t)}));return(e,o)=>t.then((t=>o(t.transaction(n,e).objectStore(n))))}let R;function k(){return R||(R=B("keyval-store","keyval")),R}function A(e,n,t=k()){return t("readwrite",(t=>(t.put(n,e),x(t.transaction))))}const T=eval,M={cache:"no-store"},U="https://cors.bridged.cc/";function j(e){const n=V.getPlugin(e);if(!n)throw new Error(`Plugin ${e} not found`);if(window.cumcord.plugins.loadedPlugins[e])throw new Error(`Plugin ${e} already loaded`);const t=T(n.js);window.cumcord.plugins.loadedPlugins[e]=t;try{t.onLoad()}catch{}}function J(e){if(!V.getPlugin(e))throw new Error(`Plugin ${e} not found`);const n=window.cumcord.plugins.loadedPlugins[e];if(!n)throw new Error(`Plugin ${e} not loaded`);n.onUnload(),window.cumcord.plugins.loadedPlugins[e]=void 0,delete window.cumcord.plugins.loadedPlugins[e]}function L(e){const n=V.getPlugin(e);window.cumcord.plugins.loadedPlugins[e]&&J(e),j(e),n.enabled||(n.enabled=!0,V.setPlugin(e,n))}function F(e){const n=V.getPlugin(e);window.cumcord.plugins.loadedPlugins[e]&&J(e),n.enabled&&(n.enabled=!1,V.setPlugin(e,n))}function z(e){V.getPlugin(e).enabled?F(e):L(e)}async function $(e){const n=e.replace(/\/?$/,"/"),t=new URL("plugin.json",n),o=new URL("plugin.js",n);let c=!0;const r=V.getPlugin(n);let i,a,s,u=!1;try{i=await fetch(t,M)}catch{u=!0,i=await fetch(U+t,M)}if(200!=i.status&&!r)throw new Error("Plugin manifest not returning success");try{a=await i.json()}catch{if(!r)throw new Error("Plugin manifest cannot be parsed")}if(r){if(c=r.enabled,!a)return c&&j(n),void 0;if(r.manifest.hash==a.hash&&(r.manifest!=a&&(r.manifest=a,V.setPlugin(n,r)),c))return j(n),void 0}if(s=u?await await fetch(U+o,M):await await fetch(o,M),200!=s.status)throw new Error("Plugin not returning success");const l=await s.text();V.setPlugin(n,{manifest:a,js:l,enabled:c}),c&&j(n)}function H(e){try{J(e)}catch{}window.cumcord.plugins.pluginCache[e]=void 0,delete window.cumcord.plugins.pluginCache[e],A("CumcordCache",window.cumcord.plugins.pluginCache)}var V={initializePlugins:async()=>{let e=await function(e,n=k()){return n("readonly",(n=>x(n.get(e))))}("CumcordCache");window.cumcord.plugins.loadedPlugins={},e?window.cumcord.plugins.pluginCache=e:(await A("CumcordCache",{}),window.cumcord.plugins.pluginCache={});for(let e of Object.keys(window.cumcord.plugins.pluginCache))$(e);window.cumcord.plugins.importPlugin=$,window.cumcord.plugins.removePlugin=H,window.cumcord.plugins.enablePlugin=L,window.cumcord.plugins.disablePlugin=F,window.cumcord.plugins.togglePlugin=z},getPlugin:e=>window.cumcord.plugins.pluginCache[e],setPlugin:(e,n)=>{window.cumcord.plugins.pluginCache[e]=n,A("CumcordCache",window.cumcord.plugins.pluginCache)},removePlugin:H};function q(){for(let e of Object.keys(window.cumcord.plugins.pluginCache))try{J(e)}catch{}return i.unpatchAll(),i.unpatchAllCss(),window.cumcord=void 0,delete window.cumcord,!0}if(window.cumcord)throw new Error("Cumcord is already injected");(async function(){e("Initializing Cumcord API"),window.cumcord={uninject:q,modules:{webpackModules:t,common:o},plugins:{},patcher:i,cum:()=>{e("8==D ~~~")}},await V.initializePlugins(),S()})()})();