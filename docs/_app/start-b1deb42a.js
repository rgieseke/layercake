var at=Object.defineProperty,lt=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var W=(n,t,e)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,k=(n,t)=>{for(var e in t||(t={}))G.call(t,e)&&W(n,e,t[e]);if(N)for(var e of N(t))x.call(t,e)&&W(n,e,t[e]);return n},X=(n,t)=>lt(n,ct(t));var F=(n,t)=>{var e={};for(var s in n)G.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&N)for(var s of N(n))t.indexOf(s)<0&&x.call(n,s)&&(e[s]=n[s]);return e};import{S as ut,i as ft,s as ht,e as dt,c as _t,a as pt,d as R,b as D,f as S,t as mt,g as gt,h as wt,j as A,k as yt,l as v,m as K,n as bt,o as O,p as Y,q as z,r as I,u as E,v as P,w as C,x as w,y as vt,z as Et,A as Rt,B as J,C as B}from"./chunks/vendor-6b10cf27.js";import{i as $t}from"./chunks/singletons-12a22614.js";function Q(n){let t,e,s;const r=[n[2]||{}];var o=n[0][1];function i(a){let l={$$slots:{default:[kt]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return o&&(t=new o(i(n))),{c(){t&&A(t.$$.fragment),e=v()},l(a){t&&K(t.$$.fragment,a),e=v()},m(a,l){t&&O(t,a,l),S(a,e,l),s=!0},p(a,l){const c=l&4?Y(r,[z(a[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:a}),o!==(o=a[0][1])){if(t){I();const u=t;E(u.$$.fragment,1,0,()=>{P(u,1)}),C()}o?(t=new o(i(a)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(a){s||(t&&w(t.$$.fragment,a),s=!0)},o(a){t&&E(t.$$.fragment,a),s=!1},d(a){a&&R(e),t&&P(t,a)}}}function Z(n){let t,e,s;const r=[n[3]||{}];var o=n[0][2];function i(a){let l={};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return o&&(t=new o(i())),{c(){t&&A(t.$$.fragment),e=v()},l(a){t&&K(t.$$.fragment,a),e=v()},m(a,l){t&&O(t,a,l),S(a,e,l),s=!0},p(a,l){const c=l&8?Y(r,[z(a[3]||{})]):{};if(o!==(o=a[0][2])){if(t){I();const u=t;E(u.$$.fragment,1,0,()=>{P(u,1)}),C()}o?(t=new o(i()),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(a){s||(t&&w(t.$$.fragment,a),s=!0)},o(a){t&&E(t.$$.fragment,a),s=!1},d(a){a&&R(e),t&&P(t,a)}}}function kt(n){let t,e,s=n[0][2]&&Z(n);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,o){s&&s.m(r,o),S(r,t,o),e=!0},p(r,o){r[0][2]?s?(s.p(r,o),o&1&&w(s,1)):(s=Z(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(I(),E(s,1,1,()=>{s=null}),C())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&R(t)}}}function Lt(n){let t,e,s=n[0][1]&&Q(n);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,o){s&&s.m(r,o),S(r,t,o),e=!0},p(r,o){r[0][1]?s?(s.p(r,o),o&1&&w(s,1)):(s=Q(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(I(),E(s,1,1,()=>{s=null}),C())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&R(t)}}}function tt(n){let t,e=n[5]&&et(n);return{c(){t=dt("div"),e&&e.c(),this.h()},l(s){t=_t(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=pt(t);e&&e.l(r),r.forEach(R),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),D(t,"class","svelte-1j55zn5")},m(s,r){S(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=et(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&R(t),e&&e.d()}}}function et(n){let t;return{c(){t=mt(n[6])},l(e){t=gt(e,n[6])},m(e,s){S(e,t,s)},p(e,s){s&64&&wt(t,e[6])},d(e){e&&R(t)}}}function St(n){let t,e,s,r;const o=[n[1]||{}];var i=n[0][0];function a(c){let u={$$slots:{default:[Lt]},$$scope:{ctx:c}};for(let h=0;h<o.length;h+=1)u=J(u,o[h]);return{props:u}}i&&(t=new i(a(n)));let l=n[4]&&tt(n);return{c(){t&&A(t.$$.fragment),e=yt(),l&&l.c(),s=v()},l(c){t&&K(t.$$.fragment,c),e=bt(c),l&&l.l(c),s=v()},m(c,u){t&&O(t,c,u),S(c,e,u),l&&l.m(c,u),S(c,s,u),r=!0},p(c,[u]){const h=u&2?Y(o,[z(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){I();const f=t;E(f.$$.fragment,1,0,()=>{P(f,1)}),C()}i?(t=new i(a(c)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else i&&t.$set(h);c[4]?l?l.p(c,u):(l=tt(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&w(t.$$.fragment,c),r=!0)},o(c){t&&E(t.$$.fragment,c),r=!1},d(c){t&&P(t,c),c&&R(e),l&&l.d(c),c&&R(s)}}}function qt(n,t,e){let{stores:s}=t,{page:r}=t,{components:o}=t,{props_0:i=null}=t,{props_1:a=null}=t,{props_2:l=null}=t;vt("__svelte__",s),Et(s.page.notify);let c=!1,u=!1,h=null;return Rt(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),n.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,r=f.page),"components"in f&&e(0,o=f.components),"props_0"in f&&e(1,i=f.props_0),"props_1"in f&&e(2,a=f.props_1),"props_2"in f&&e(3,l=f.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[o,i,a,l,c,u,h,s,r]}class Ut extends ut{constructor(t){super();ft(this,t,qt,St,ht,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const At="modulepreload",st={},Ot="/_app/",L=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${Ot}${s}`,s in st)return;st[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":At,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",l)})})).then(()=>t())},d=[()=>L(()=>import("./pages/__layout.svelte-bdc2fca8.js"),["pages/__layout.svelte-bdc2fca8.js","assets/pages/__layout.svelte-ee5e16f5.css","chunks/vendor-6b10cf27.js","chunks/singletons-12a22614.js","chunks/GuideContents-f72d3062.js","assets/GuideContents-1848e154.css","chunks/_examples-4c9692e7.js","assets/_examples-998eb4dc.css","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/dots-43cef725.js","assets/dots-7506ddde.css","chunks/pointsFour-680d2b5e.js","chunks/_examples_ssr-f1c9be77.js","assets/_examples_ssr-78e05840.css","chunks/ClevelandDotPlot.percent-range.html-afcb90ad.js","assets/ClevelandDotPlot.percent-range.html-1e347309.css"]),()=>L(()=>import("./error.svelte-414b6374.js"),["error.svelte-414b6374.js","chunks/vendor-6b10cf27.js"]),()=>L(()=>import("./pages/index.svelte-042f2714.js"),["pages/index.svelte-042f2714.js","assets/pages/index.svelte-bf81c8f5.css","chunks/vendor-6b10cf27.js","chunks/_examples-4c9692e7.js","assets/_examples-998eb4dc.css","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/dots-43cef725.js","assets/dots-7506ddde.css","chunks/pointsFour-680d2b5e.js","chunks/_examples_ssr-f1c9be77.js","assets/_examples_ssr-78e05840.css","chunks/ClevelandDotPlot.percent-range.html-afcb90ad.js","assets/ClevelandDotPlot.percent-range.html-1e347309.css","chunks/hljsDefineSvelte-18bb4212.js"]),()=>L(()=>import("./pages/example-ssr/_slug_.svelte-4d56bac5.js"),["pages/example-ssr/_slug_.svelte-4d56bac5.js","assets/pages/example-ssr/_slug_.svelte-b2e27e46.css","chunks/vendor-6b10cf27.js","chunks/cleanTitle-549a2868.js","assets/cleanTitle-6421f29e.css","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/downloadBlob-afd0ad1c.js","chunks/hljsDefineSvelte-18bb4212.js","chunks/_examples_ssr-f1c9be77.js","assets/_examples_ssr-78e05840.css","chunks/ClevelandDotPlot.percent-range.html-afcb90ad.js","assets/ClevelandDotPlot.percent-range.html-1e347309.css","chunks/pointsFour-680d2b5e.js"]),()=>L(()=>import("./pages/components/index.svelte-f3c826a5.js"),["pages/components/index.svelte-f3c826a5.js","assets/pages/components/index.svelte-b22e44fc.css","chunks/vendor-6b10cf27.js","chunks/_components-79dd9bc1.js","assets/_components-cbb6a663.css","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/dots-43cef725.js","assets/dots-7506ddde.css","chunks/ClevelandDotPlot.percent-range.html-afcb90ad.js","assets/ClevelandDotPlot.percent-range.html-1e347309.css"]),()=>L(()=>import("./pages/components/_slug_.svelte-c86880a8.js"),["pages/components/_slug_.svelte-c86880a8.js","assets/pages/components/_slug_.svelte-6baf86d9.css","chunks/vendor-6b10cf27.js","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/downloadBlob-afd0ad1c.js","chunks/hljsDefineSvelte-18bb4212.js","chunks/_components-79dd9bc1.js","assets/_components-cbb6a663.css","chunks/dots-43cef725.js","assets/dots-7506ddde.css","chunks/ClevelandDotPlot.percent-range.html-afcb90ad.js","assets/ClevelandDotPlot.percent-range.html-1e347309.css"]),()=>L(()=>import("./pages/example/_slug_.svelte-05e62c48.js"),["pages/example/_slug_.svelte-05e62c48.js","assets/pages/example/_slug_.svelte-05adeb3d.css","chunks/vendor-6b10cf27.js","chunks/cleanTitle-549a2868.js","assets/cleanTitle-6421f29e.css","chunks/Brush.html-552f78d6.js","assets/Brush.html-3e420c8b.css","chunks/downloadBlob-afd0ad1c.js","chunks/hljsDefineSvelte-18bb4212.js","chunks/_examples-4c9692e7.js","assets/_examples-998eb4dc.css","chunks/dots-43cef725.js","assets/dots-7506ddde.css","chunks/pointsFour-680d2b5e.js"]),()=>L(()=>import("./pages/guide/index.svelte-f151345a.js"),["pages/guide/index.svelte-f151345a.js","assets/pages/guide/index.svelte-0095eb17.css","chunks/vendor-6b10cf27.js","chunks/GuideContents-f72d3062.js","assets/GuideContents-1848e154.css"])],H=decodeURIComponent,Pt=[[/^\/$/,[d[0],d[2]],[d[1]]],,[/^\/example-ssr\/([^/]+?)\/?$/,[d[0],d[3]],[d[1]],n=>({slug:H(n[1])})],[/^\/components\/?$/,[d[0],d[4]],[d[1]]],,[/^\/components\/([^/]+?)\/?$/,[d[0],d[5]],[d[1]],n=>({slug:H(n[1])})],,[/^\/example\/([^/]+?)\/?$/,[d[0],d[6]],[d[1]],n=>({slug:H(n[1])})],,[/^\/guide\/?$/,[d[0],d[7]],[d[1]]]],Tt=[d[0](),d[1]()];function It(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}let rt="";function Ct(n){rt=n.base,n.assets}function M(){return{x:pageXOffset,y:pageYOffset}}function nt(n){return n.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()==="A")}function it(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class Vt{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const o=X(k({},history.state||{}),{"sveltekit:scroll":M()});history.replaceState(o,document.title,window.location.href)},200)});const e=o=>{const i=nt(o);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(i))};let s;const r=o=>{clearTimeout(s),s=setTimeout(()=>{e(o)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",o=>{if(!this.enabled||o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const i=nt(o);if(!i||!i.href)return;const a=it(i),l=a.toString();if(l===location.href){location.hash||o.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(a))return;const u=i.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),b=h>=0?l.substring(0,h):l,m=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",a.href),b===m&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(a,u?M():null,!1,[],a.hash),o.preventDefault()}),addEventListener("popstate",o=>{if(o.state&&this.enabled){const i=new URL(location.href);this._navigate(i,o.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([a])=>a.test(s)),o=new URLSearchParams(t.search);return{id:`${e}?${o}`,routes:r,path:e,decoded_path:s,query:o}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:o={}}={},i){const a=new URL(t,It(document));return this.enabled&&this.owns(a)?(history[s?"replaceState":"pushState"](o,"",t),this._navigate(a,e?M():null,r,i,a.hash)):(location.href=a.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,o){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const a=i.path.endsWith("/");(a&&this.trailing_slash==="never"||!a&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=a?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,r,!1,{hash:o,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function ot(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Nt(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function Dt(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function jt(n){const t=B(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function o(i){let a;return t.subscribe(l=>{(a===void 0||e&&l!==a)&&i(a=l)})}return{notify:s,set:r,subscribe:o}}function Ht(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Nt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const o=JSON.parse(r.textContent),{body:i}=o,a=F(o,["body"]);return Promise.resolve(new Response(i,a))}return fetch(n,t)}class Mt{constructor({Root:t,fallback:e,target:s,session:r,host:o}){this.Root=t,this.fallback=e,this.host=o,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:jt({}),navigating:B(null),session:B(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async a=>{if(this.$session=a,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const o=[];let i={},a,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:i,status:u?t:void 0,error:u?e:void 0});if(o.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(i=k(k({},i),h.loaded.stuff))}a=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:o})}catch(c){if(e)throw c;a=await this._load_error({status:500,error:ot(c),path:r.path,query:r.query})}if(a.redirect){location.href=new URL(a.redirect,location.href).href;return}this._init(a)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){var l;const o=this.token={};let i=await this._get_navigation_result(t,s);if(o!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),r){const{hash:c,scroll:u,keepfocus:h}=r;h||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const f=Math.round(pageYOffset),b=document.documentElement.scrollHeight-innerHeight;await 0;const m=Math.round(pageYOffset),$=document.documentElement.scrollHeight-innerHeight;if(m===Math.min(f,$)||b-f===$-m){const q=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):q?q.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const a=i.state.branch[i.state.branch.length-1];a&&a.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:k({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let o=s+1;for(;o<t.routes.length;){const a=t.routes[o];if(a[0].toString()===r[0].toString())a[1].forEach(l=>l()),o+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),o={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;o.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(o.props.page=t);const i=s[s.length-1],a=i.loaded&&i.loaded.maxage;if(a){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===o&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,a*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,o)}return o}async _load_node({status:t,error:e,module:s,page:r,stuff:o}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:o},a={};for(const c in r.params)Object.defineProperty(a,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:a,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,k({},o)},fetch(f,b){const m=typeof f=="string"?f:f.url,{href:$}=new URL(m,new URL(r.path,document.baseURI));return i.uses.dependencies.push($),c?fetch(f,b):Ht(f,b)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;i.loaded=Dt(h),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},o){const i=`${s}?${r}`;if(!o){const _=this.cache.get(i);if(_)return _}const[a,l,c,u]=t,h=u?u(a.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(_=>this.current.page.params[_]!==h[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},b={host:this.host,path:e,query:r,params:h};let m=[],$={},j=!1,q=200,T;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const y=await l[_](),g=this.current.branch[_];if(!g||y!==g.module||f.path&&g.uses.path||f.params.some(U=>g.uses.params.has(U))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(U=>this.invalid.has(U))||j&&g.uses.stuff){p=await this._load_node({module:y,page:b,stuff:$});const U=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(q=p.loaded.status,T=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(j=!0)}else if(U&&y.load)return}else p=g}catch(y){q=500,T=ot(y)}if(T){for(;_--;)if(c[_]){let y,g,V=_;for(;!(g=m[V]);)V-=1;try{if(y=await this._load_node({status:q,error:T,module:await c[_](),page:b,stuff:g.stuff}),y&&y.loaded&&y.loaded.error)continue;m=m.slice(0,V+1).concat(y);break t}catch{continue}}return await this._load_error({status:q,error:T,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&($=k(k({},$),p.loaded.stuff)),m.push(p)}return await this._get_navigation_result_from_branch({page:b,branch:m})}async _load_error({status:t,error:e,path:s,query:r}){const o={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:o,stuff:{}}),a=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:o,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:o,branch:a})}}async function zt({paths:n,target:t,session:e,host:s,route:r,spa:o,trailing_slash:i,hydrate:a}){const l=new Mt({Root:Ut,fallback:Tt,target:t,session:e,host:s}),c=r?new Vt({base:n.base,routes:Pt,trailing_slash:i,renderer:l}):null;$t(c),Ct(n),a&&await l.start(a),c&&(o&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{zt as start};