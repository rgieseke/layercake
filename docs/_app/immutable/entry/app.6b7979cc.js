import{s as q,a as B,e as d,c as U,i as b,d as h,b as j,o as W,f as z,g as F,h as G,j as I,k as m,l as H,m as J,n as K,t as M,p as O,q as k}from"../chunks/scheduler.101db06a.js";import{S as Q,i as X,t as g,c as P,a as w,g as D,b as v,d as T,m as R,e as L}from"../chunks/index.5bc76508.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in V)return;V[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=k(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=k(s,f(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=k(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=k(s,f(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=k(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=k(s,f(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[10](null),e&&L(e,t)}}}function y(a){let e,n=a[6]&&A(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=G(e);n&&n.l(s),s.forEach(h),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function A(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(a){let e,n,i,s,f;const t=[x,$],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&y(a);return{c(){n.c(),i=B(),o&&o.c(),s=d()},l(l){n.l(l),i=U(l),o&&o.l(l),s=d()},m(l,u){r[e].m(l,u),b(l,i,u),o&&o.m(l,u),b(l,s,u),f=!0},p(l,[u]){let E=e;e=_(l),e===E?r[e].p(l,u):(D(),g(r[E],1,1,()=>{r[E]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=y(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(w(n),f=!0)},o(l){g(n),f=!1},d(l){l&&(h(i),h(s)),r[e].d(l),o&&o.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;j(i.page.notify);let l=!1,u=!1,E=null;W(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),M().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,l=!0),c});function N(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,E,i,s,N,S,C]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.91af2413.js"),["../nodes/0.91af2413.js","../chunks/index.8f2ca6db.js","../chunks/control.c2cf8273.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/each.af0871f9.js","../chunks/singletons.f4687004.js","../chunks/index.673e2a8b.js","../chunks/stores.fb4690b2.js","../chunks/GuideContents.2804f685.js","../assets/GuideContents.48e964f9.css","../chunks/_examples.d5f7eeba.js","../chunks/Brush.html.297935a8.js","../assets/Brush.6c1d38e0.css","../chunks/dots.1969b86a.js","../assets/dots.ef082192.css","../chunks/pointsFour.18de8bdc.js","../assets/_examples.3bba1895.css","../chunks/_examples_ssr.cc1afbd5.js","../chunks/ClevelandDotPlot.percent-range.html.6546bb90.js","../assets/ClevelandDotPlot.percent-range.cce3ebed.css","../assets/_examples_ssr.a9522c99.css","../assets/0.b1455c46.css"],import.meta.url),()=>p(()=>import("../nodes/1.156a854b.js"),["../nodes/1.156a854b.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/stores.fb4690b2.js","../chunks/singletons.f4687004.js","../chunks/index.673e2a8b.js"],import.meta.url),()=>p(()=>import("../nodes/2.82a199b5.js"),["../nodes/2.82a199b5.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/each.af0871f9.js","../chunks/hljsDefineSvelte.be9c3964.js","../chunks/Brush.html.297935a8.js","../chunks/index.673e2a8b.js","../assets/Brush.6c1d38e0.css","../chunks/_examples.d5f7eeba.js","../chunks/dots.1969b86a.js","../assets/dots.ef082192.css","../chunks/pointsFour.18de8bdc.js","../assets/_examples.3bba1895.css","../chunks/_examples_ssr.cc1afbd5.js","../chunks/ClevelandDotPlot.percent-range.html.6546bb90.js","../assets/ClevelandDotPlot.percent-range.cce3ebed.css","../assets/_examples_ssr.a9522c99.css","../assets/2.3a9728ad.css"],import.meta.url),()=>p(()=>import("../nodes/3.9b78e130.js"),["../nodes/3.9b78e130.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/each.af0871f9.js","../chunks/_components.f167354c.js","../chunks/Brush.html.297935a8.js","../chunks/index.673e2a8b.js","../assets/Brush.6c1d38e0.css","../chunks/dots.1969b86a.js","../assets/dots.ef082192.css","../chunks/ClevelandDotPlot.percent-range.html.6546bb90.js","../assets/ClevelandDotPlot.percent-range.cce3ebed.css","../assets/_components.0aebba1b.css","../assets/3.5524c8e4.css"],import.meta.url),()=>p(()=>import("../nodes/4.9cf9ade2.js"),["../nodes/4.9cf9ade2.js","../chunks/index.8f2ca6db.js","../chunks/control.c2cf8273.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/downloadBlob.78931817.js","../chunks/Brush.html.297935a8.js","../chunks/index.673e2a8b.js","../chunks/each.af0871f9.js","../assets/Brush.6c1d38e0.css","../chunks/hljsDefineSvelte.be9c3964.js","../chunks/_components.f167354c.js","../chunks/dots.1969b86a.js","../assets/dots.ef082192.css","../chunks/ClevelandDotPlot.percent-range.html.6546bb90.js","../assets/ClevelandDotPlot.percent-range.cce3ebed.css","../assets/_components.0aebba1b.css","../assets/4.9abfd804.css"],import.meta.url),()=>p(()=>import("../nodes/5.7b8be81d.js"),["../nodes/5.7b8be81d.js","../chunks/index.8f2ca6db.js","../chunks/control.c2cf8273.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/downloadBlob.78931817.js","../chunks/Brush.html.297935a8.js","../chunks/index.673e2a8b.js","../chunks/each.af0871f9.js","../assets/Brush.6c1d38e0.css","../chunks/hljsDefineSvelte.be9c3964.js","../chunks/cleanTitle.22e7c659.js","../assets/cleanTitle.0901854a.css","../chunks/_examples.d5f7eeba.js","../chunks/dots.1969b86a.js","../assets/dots.ef082192.css","../chunks/pointsFour.18de8bdc.js","../assets/_examples.3bba1895.css","../assets/5.351b47b3.css"],import.meta.url),()=>p(()=>import("../nodes/6.ba863a1e.js"),["../nodes/6.ba863a1e.js","../chunks/index.8f2ca6db.js","../chunks/control.c2cf8273.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/downloadBlob.78931817.js","../chunks/Brush.html.297935a8.js","../chunks/index.673e2a8b.js","../chunks/each.af0871f9.js","../assets/Brush.6c1d38e0.css","../chunks/hljsDefineSvelte.be9c3964.js","../chunks/cleanTitle.22e7c659.js","../assets/cleanTitle.0901854a.css","../chunks/_examples_ssr.cc1afbd5.js","../chunks/ClevelandDotPlot.percent-range.html.6546bb90.js","../assets/ClevelandDotPlot.percent-range.cce3ebed.css","../chunks/pointsFour.18de8bdc.js","../assets/_examples_ssr.a9522c99.css","../assets/6.478929d9.css"],import.meta.url),()=>p(()=>import("../nodes/7.be23a249.js"),["../nodes/7.be23a249.js","../chunks/index.8f2ca6db.js","../chunks/control.c2cf8273.js","../chunks/scheduler.101db06a.js","../chunks/index.5bc76508.js","../chunks/each.af0871f9.js","../chunks/GuideContents.2804f685.js","../assets/GuideContents.48e964f9.css","../assets/7.1b16e7c8.css"],import.meta.url)],le=[],fe={"/":[2],"/components":[3],"/components/[slug]":[4],"/example-ssr/[slug]":[6],"/example/[slug]":[5],"/guide":[7]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
