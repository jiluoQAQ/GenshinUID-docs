if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>l(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(i(...s),a)))}}define(["./workbox-00b24671"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.fa0da537.js",revision:null},{url:"assets/chunks/Badge.f3e0fe65.js",revision:null},{url:"assets/chunks/commonjsHelpers.725317a4.js",revision:null},{url:"assets/chunks/framework.4d23d1ec.js",revision:null},{url:"assets/chunks/PageInfo.vue_vue_type_script_setup_true_lang.13c3af49.js",revision:null},{url:"assets/chunks/pwa.a429c587.js",revision:null},{url:"assets/chunks/theme.32da26d2.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/grid.e967678d.svg",revision:null},{url:"assets/index.md.ad8967d4.js",revision:null},{url:"assets/index.md.ad8967d4.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/style.839727e9.css",revision:null},{url:"assets/安装插件_InstallPlugins.md.0206659d.js",revision:null},{url:"assets/安装插件_InstallPlugins.md.0206659d.lean.js",revision:null},{url:"assets/安装插件_PluginsList.md.9caed5cb.js",revision:null},{url:"assets/安装插件_PluginsList.md.9caed5cb.lean.js",revision:null},{url:"assets/快速开始_CoreConfig.md.acf2a3bc.js",revision:null},{url:"assets/快速开始_CoreConfig.md.acf2a3bc.lean.js",revision:null},{url:"assets/快速开始_EnvCheck.md.335d7dc2.js",revision:null},{url:"assets/快速开始_EnvCheck.md.335d7dc2.lean.js",revision:null},{url:"assets/快速开始_InstallCore.md.653ae5a7.js",revision:null},{url:"assets/快速开始_InstallCore.md.653ae5a7.lean.js",revision:null},{url:"assets/快速开始_StartCore.md.0120739d.js",revision:null},{url:"assets/快速开始_StartCore.md.0120739d.lean.js",revision:null},{url:"assets/编写插件_Class.md.5a5d2f07.js",revision:null},{url:"assets/编写插件_Class.md.5a5d2f07.lean.js",revision:null},{url:"assets/编写插件_Exsample.md.03076100.js",revision:null},{url:"assets/编写插件_Exsample.md.03076100.lean.js",revision:null},{url:"assets/编写插件_GetDataPath.md.0cb48eaf.js",revision:null},{url:"assets/编写插件_GetDataPath.md.0cb48eaf.lean.js",revision:null},{url:"assets/编写插件_PluginsConfig.md.c463519a.js",revision:null},{url:"assets/编写插件_PluginsConfig.md.c463519a.lean.js",revision:null},{url:"assets/编写插件_PluginsDataBase.md.da0ba7f0.js",revision:null},{url:"assets/编写插件_PluginsDataBase.md.da0ba7f0.lean.js",revision:null},{url:"assets/编写插件_Scheduler.md.46be3309.js",revision:null},{url:"assets/编写插件_Scheduler.md.46be3309.lean.js",revision:null},{url:"assets/编写插件_Simple.md.089cc7e9.js",revision:null},{url:"assets/编写插件_Simple.md.089cc7e9.lean.js",revision:null},{url:"assets/编写插件_Start.md.d6d1b694.js",revision:null},{url:"assets/编写插件_Start.md.d6d1b694.lean.js",revision:null},{url:"assets/编写适配器_Pack.md.73b9cccf.js",revision:null},{url:"assets/编写适配器_Pack.md.73b9cccf.lean.js",revision:null},{url:"assets/编写适配器_Protocol.md.17dc0bf0.js",revision:null},{url:"assets/编写适配器_Protocol.md.17dc0bf0.lean.js",revision:null},{url:"assets/进阶介绍_BaseInfo.md.a34ebb2c.js",revision:null},{url:"assets/进阶介绍_BaseInfo.md.a34ebb2c.lean.js",revision:null},{url:"assets/进阶介绍_DataStruct.md.44562528.js",revision:null},{url:"assets/进阶介绍_DataStruct.md.44562528.lean.js",revision:null},{url:"assets/进阶介绍_ExportAndImport.md.b781932a.js",revision:null},{url:"assets/进阶介绍_ExportAndImport.md.b781932a.lean.js",revision:null},{url:"assets/进阶介绍_WebConsole.md.2d3dfd05.js",revision:null},{url:"assets/进阶介绍_WebConsole.md.2d3dfd05.lean.js",revision:null},{url:"assets/链接支持Bot_AdapterList.md.722bebd0.js",revision:null},{url:"assets/链接支持Bot_AdapterList.md.722bebd0.lean.js",revision:null},{url:"assets/链接支持Bot_HoshinoBot.md.148ea831.js",revision:null},{url:"assets/链接支持Bot_HoshinoBot.md.148ea831.lean.js",revision:null},{url:"assets/链接支持Bot_NoneBot2.md.4a5f350f.js",revision:null},{url:"assets/链接支持Bot_NoneBot2.md.4a5f350f.lean.js",revision:null},{url:"assets/额外介绍_AddCK.md.ca05d41a.js",revision:null},{url:"assets/额外介绍_AddCK.md.ca05d41a.lean.js",revision:null},{url:"assets/额外介绍_CommandList.md.26367739.js",revision:null},{url:"assets/额外介绍_CommandList.md.26367739.lean.js",revision:null},{url:"assets/额外介绍_FAQ.md.df334c7d.js",revision:null},{url:"assets/额外介绍_FAQ.md.df334c7d.lean.js",revision:null},{url:"assets/额外介绍_ResourceDownload.md.6360d4fe.js",revision:null},{url:"assets/额外介绍_ResourceDownload.md.6360d4fe.lean.js",revision:null},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"manifest.webmanifest",revision:"42cc81492e00ec87f91282ffdad4fc8c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new s.CacheFirst({cacheName:"google-font-style-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*/i,new s.CacheFirst({cacheName:"jsdelivr-cdn-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/(((raw|user-images|camo).githubusercontent.com))\/.*/i,new s.CacheFirst({cacheName:"githubusercontent-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));