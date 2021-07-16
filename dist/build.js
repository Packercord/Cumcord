(function(){"use strict";const logger={log:e=>{console.log(`%cCumcord%c ${e}`,"background-color: #7289da; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold","")}};function getModules(){const e=window.webpackJsonp.push([[],{__extra_id__:(e,t,o)=>e.exports=o},[["__extra_id__"]]]);return delete e.m.__extra_id__,delete e.c.__extra_id__,e.c}function filterModules(e,t){let o=[];for(const n in e)if(e.hasOwnProperty(n)){const r=e[n].exports;r&&(r.default&&r.__esModule&&t(r.default)&&o.push(r.default),t(r)&&o.push(r))}return o}const webpackModules={modules:getModules(),find:e=>filterModules(webpackModules.modules,e)[0],findAll:e=>filterModules(webpackModules.modules,e),findByProps:(...e)=>webpackModules.find((t=>e.every((e=>void 0!==t[e])))),findByPropsAll:(...e)=>webpackModules.findAll((t=>e.every((e=>void 0!==t[e])))),findByPrototypes:(...e)=>webpackModules.find((t=>t.prototype&&e.every((e=>void 0!==t.prototype[e])))),findByDisplayName:e=>webpackModules.find((t=>t.displayName===e)),findByStringInPropsAll:(...e)=>webpackModules.findAll((t=>e.every((e=>1==Object.keys(t).some((t=>t.toLowerCase().includes(e.toLowerCase())))))))};webpackModules.find,webpackModules.findAll,webpackModules.findByProps,webpackModules.findByPropsAll,webpackModules.findByPrototypes,webpackModules.findByDisplayName,webpackModules.findByStringInPropsAll;const commonModules={constants:webpackModules.findByProps("API_HOST","APP_URL_PREFIX"),channels:webpackModules.findByProps("getChannelId","getVoiceChannelId"),Flux:webpackModules.findByProps("CachedStore","Store","connectStores"),FluxDispatcher:webpackModules.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:webpackModules.findByProps("getLanguages","_requestedLocale","languages"),React:webpackModules.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:webpackModules.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate")};var getRandomValues;commonModules.React,commonModules.ReactDOM,commonModules.Flux,commonModules.FluxDispatcher,commonModules.constants,commonModules.channels,commonModules.i18n;var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(e){return"string"==typeof e&&REGEX.test(e)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(byteToHex[e[t+0]]+byteToHex[e[t+1]]+byteToHex[e[t+2]]+byteToHex[e[t+3]]+"-"+byteToHex[e[t+4]]+byteToHex[e[t+5]]+"-"+byteToHex[e[t+6]]+byteToHex[e[t+7]]+"-"+byteToHex[e[t+8]]+byteToHex[e[t+9]]+"-"+byteToHex[e[t+10]]+byteToHex[e[t+11]]+byteToHex[e[t+12]]+byteToHex[e[t+13]]+byteToHex[e[t+14]]+byteToHex[e[t+15]]).toLowerCase();if(!validate(o))throw TypeError("Stringified UUID is invalid");return o}function v4(e,t,o){var n=(e=e||{}).random||(e.rng||rng)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=n[r];return t}return stringify(n)}let patches={};function hook(e,t){var o,n=!1;for(const r of patches[e].hooks)r.runInstead?(o=r.callback(t),n=!0):(n||(o=patches[e].originalFunction(...t),n=!0),r.callback(t,o));return o}function unpatch(e,t){const o=patches[e];var n=!1;if(o){const r=o.hooks;for(const e in r)r[e].id==t&&(o.functionParent[o.functionName]=o.originalFunction,delete r[e],n=!0);o.hooks[0]||delete patches[e]}return n}function unpatchAll(){logger.log("If you're a plugin developer and you ran this because you're curious as to what it does, I highly recommend you refresh your client because unfortunately everything that relies on the patcher has been unpatched.");for(const e in patches){const t=patches[e].hooks;for(const o in t)unpatch(e,t[o].id)}}const patcher={patch:(e,t,o,n=!1)=>{if("function"!=typeof t[e])throw new Error(`${e} is not a function in ${t.constructor.name}`);if(t.hasOwnProperty("CUMCORD_INJECTIONS")||(t.CUMCORD_INJECTIONS={}),!t.CUMCORD_INJECTIONS.hasOwnProperty(e)){const o=v4();t.CUMCORD_INJECTIONS[e]=o}const r=t.CUMCORD_INJECTIONS[e];if(!patches[r]){const o=Object.assign({},t)[e];patches[r]={originalFunction:o,functionParent:t,functionName:e,hooks:[]},t[e]=(...e)=>hook(r,e)}const i=v4();return patches[r].hooks.push({id:i,instead:n,callback:o}),()=>unpatch(r,i)},unpatchAll:unpatchAll,patches:patches};function promisifyRequest(e){return new Promise(((t,o)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>o(e.error)}))}function createStore(e,t){const o=indexedDB.open(e);o.onupgradeneeded=()=>o.result.createObjectStore(t);const n=promisifyRequest(o);return(e,o)=>n.then((n=>o(n.transaction(t,e).objectStore(t))))}let defaultGetStoreFunc;function defaultGetStore(){return defaultGetStoreFunc||(defaultGetStoreFunc=createStore("keyval-store","keyval")),defaultGetStoreFunc}function get(e,t=defaultGetStore()){return t("readonly",(t=>promisifyRequest(t.get(e))))}function set(e,t,o=defaultGetStore()){return o("readwrite",(o=>(o.put(t,e),promisifyRequest(o.transaction))))}var storage={getPlugin:e=>window.cumcord.pluginStore[e],removePlugin:e=>{delete window.cumcord.pluginStore[e],set("CumcordStore",window.cumcord.pluginStore)},setPlugin:(e,t)=>{window.cumcord.pluginStore[e]=t,set("CumcordStore",window.cumcord.pluginStore)}};const noStore={cache:"no-store"},corsProxyUrl="https://cors.bridged.cc/";function startPlugin(baseUrl){let plugin=storage.getPlugin(baseUrl);plugin.enabled=!0,storage.setPlugin(baseUrl,plugin);const pluginJs=eval(plugin.plugin);pluginJs.onLoad()}function stopPlugin(baseUrl){let plugin=storage.getPlugin(baseUrl);plugin.enabled=!1,storage.setPlugin(baseUrl,plugin);const pluginJs=eval(plugin.plugin);pluginJs.onUnload()}function togglePlugin(e){storage.getPlugin(e).enabled?stopPlugin(e):startPlugin(e)}async function importPlugin(e){const t=new URL("",e).href.replace(/\/?$/,"/"),o=new URL("plugin.json",t).href.replace(/\/?$/,"/"),n=new URL("plugin.js",t).href.replace(/\/?$/,"/");let r,i=!0;const s=storage.getPlugin(t);let a,u,c=!1;try{a=await fetch(o,noStore)}catch{c=!0;try{a=await fetch(corsProxyUrl+o,noStore)}catch{}}if(s&&(r=s.manifest,i=s.enabled,s.manifest.hash==r.hash))return void(i&&startPlugin(t));if(200!=a.status)throw new Error("Plugin manifest not returning success");try{r=await a.json()}catch{throw new Error("Plugin manifest cannot be parsed")}if(u=c?await await fetch(corsProxyUrl+n,noStore):await await fetch(n,noStore),200!=u.status)throw new Error("Plugin not returning success");const l=await u.text();return storage.setPlugin(t,{manifest:r,plugin:l,enabled:i}),i&&startPlugin(t),!0}function uninject(){return delete window.cumcord,logger.log("Uninjecting Cumcord"),patcher.unpatchAll(),!0}async function initializeAPI(){logger.log("Initializing Cumcord API"),window.cumcord={uninject:uninject,modules:{webpackModules:webpackModules,common:commonModules},plugins:{startPlugin:startPlugin,stopPlugin:stopPlugin,togglePlugin:togglePlugin,importPlugin:importPlugin},patcher:patcher,storage:storage};let e=await get("CumcordStore");e?window.cumcord.pluginStore=e:(await set("CumcordStore",{}),window.cumcord.pluginStore={});for(let e of Object.keys(window.cumcord.pluginStore))importPlugin(e)}if(window.cumcord)throw new Error("Cumcord is already injected");initializeAPI()})();