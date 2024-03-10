import{e as Se}from"../chunks/index.oiCz_B55.js";import{s as Le,w as he,a as q,e as E,t as oe,o as Ve,f as p,g as M,c as D,b as C,d as re,u,z as me,i as F,h as _,y as De,j as Ce,v as _e,H as Ie,q as $e,A as pe}from"../chunks/scheduler.P37s_KnH.js";import{S as je,i as He,c as Z,b as ve,m as ee,a as te,e as Te,t as le,d as ae,g as qe}from"../chunks/index.GooPGtyi.js";import{M as Me,g as Pe}from"../chunks/downloadBlob.5w7X7G5B.js";import{e as Q}from"../chunks/each.zMdpk9aP.js";import{H as se,h as ge}from"../chunks/hljsDefineSvelte.U5_GHsKG.js";import{D as ze,c as J}from"../chunks/cleanTitle.QG-RcJPj.js";import{e as xe}from"../chunks/_examples_ssr.X0tHL2fc.js";async function Ae({fetch:t,params:a}){const s=`${a.slug}.json`,l=await t(s),o=await l.json();if(l.status===200)return{slug:a.slug,content:o,active:"+page"};Se(500,`Could not load ${s}: ${o.message}`)}const We=Object.freeze(Object.defineProperty({__proto__:null,load:Ae},Symbol.toStringTag,{value:"Module"})),{document:ne}=Pe;function we(t,a,s){const l=t.slice();return l[12]=a[s],l}function ke(t,a,s){const l=t.slice();return l[12]=a[s],l}function be(t){let a,s,l=t[5](t[1].dek)+"";return{c(){a=E("div"),s=new Ie(!1),this.h()},l(o){a=D(o,"DIV",{class:!0});var h=C(a);s=$e(h,!1),h.forEach(p),this.h()},h(){s.a=null,u(a,"class","dek svelte-4xax0d")},m(o,h){F(o,a,h),s.m(l,a)},p(o,h){h&2&&l!==(l=o[5](o[1].dek)+"")&&s.p(l)},d(o){o&&p(a)}}}function ye(t){let a,s=t[12].title+"",l,o,h,r;function i(){return t[9](t[12])}return{c(){a=E("li"),l=oe(s),this.h()},l(c){a=D(c,"LI",{class:!0});var v=C(a);l=re(v,s),v.forEach(p),this.h()},h(){u(a,"class",o="tab "+(t[2]===J(t[12].title)?"active":"")+" svelte-4xax0d")},m(c,v){F(c,a,v),_(a,l),h||(r=De(a,"click",i),h=!0)},p(c,v){t=c,v&8&&s!==(s=t[12].title+"")&&Ce(l,s),v&12&&o!==(o="tab "+(t[2]===J(t[12].title)?"active":"")+" svelte-4xax0d")&&u(a,"class",o)},d(c){c&&p(a),h=!1,r()}}}function Ee(t){let a,s,l,o=t[6](t[12].contents,t[12].title)+"",h;return{c(){a=E("div"),s=E("pre"),l=new Ie(!1),h=q(),this.h()},l(r){a=D(r,"DIV",{class:!0,style:!0});var i=C(a);s=D(i,"PRE",{class:!0});var c=C(s);l=$e(c,!1),c.forEach(p),h=M(i),i.forEach(p),this.h()},h(){l.a=null,u(s,"class","svelte-4xax0d"),u(a,"class","contents"),pe(a,"display",t[2]===J(t[12].title)?"block":"none")},m(r,i){F(r,a,i),_(a,s),l.m(o,s),_(a,h)},p(r,i){i&8&&o!==(o=r[6](r[12].contents,r[12].title)+"")&&l.p(o),i&12&&pe(a,"display",r[2]===J(r[12].title)?"block":"none")},d(r){r&&p(a)}}}function Oe(t){let a,s,l,o,h=t[4].title+"",r,i,c,v,R,I,f,z,U,m,g,V,j,$,H,W,S,x,X,G,L,Y,ie;ne.title=a=t[4].title;var A=t[4].component;function ce(e,w){return{}}A&&(f=he(A,ce())),g=new ze({props:{data:t[1],slug:t[0],ssr:!0}});let y=t[1].dek&&be(t),O=Q(t[3]),k=[];for(let e=0;e<O.length;e+=1)k[e]=ye(ke(t,O,e));let B=Q(t[3]),b=[];for(let e=0;e<B.length;e+=1)b[e]=Ee(we(t,B,e));return{c(){s=q(),l=E("div"),o=E("h1"),r=oe(h),i=E("a"),c=oe("Edit"),R=q(),I=E("div"),f&&Z(f.$$.fragment),U=q(),m=E("div"),Z(g.$$.fragment),V=q(),y&&y.c(),j=q(),$=E("div"),H=E("ul");for(let e=0;e<k.length;e+=1)k[e].c();W=q(),S=E("div"),x=E("div"),X=q();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){Ve("svelte-1ynzqk4",ne.head).forEach(p),s=M(e),l=D(e,"DIV",{class:!0,"data-label":!0});var d=C(l);o=D(d,"H1",{});var n=C(o);r=re(n,h),i=D(n,"A",{class:!0,href:!0,target:!0,rel:!0});var T=C(i);c=re(T,"Edit"),T.forEach(p),n.forEach(p),R=M(d),I=D(d,"DIV",{class:!0,"data-slug":!0});var de=C(I);f&&ve(f.$$.fragment,de),de.forEach(p),U=M(d),m=D(d,"DIV",{class:!0});var ue=C(m);ve(g.$$.fragment,ue),ue.forEach(p),V=M(d),y&&y.l(d),j=M(d),$=D(d,"DIV",{id:!0,class:!0});var K=C($);H=D(K,"UL",{id:!0,class:!0});var fe=C(H);for(let P=0;P<k.length;P+=1)k[P].l(fe);fe.forEach(p),W=M(K),S=D(K,"DIV",{id:!0,class:!0});var N=C(S);x=D(N,"DIV",{class:!0}),C(x).forEach(p),X=M(N);for(let P=0;P<b.length;P+=1)b[P].l(N);N.forEach(p),K.forEach(p),d.forEach(p),this.h()},h(){u(i,"class","edit-repl svelte-4xax0d"),u(i,"href",v="https://svelte.dev/repl/"+t[4].replPath),u(i,"target","_blank"),u(i,"rel","noreferrer"),u(I,"class","chart-hero svelte-4xax0d"),u(I,"data-slug",z=t[0].toLowerCase()),u(m,"class","download svelte-4xax0d"),u(H,"id","page-nav"),u(H,"class","svelte-4xax0d"),u(x,"class","copy svelte-4xax0d"),u(S,"id","contents-container"),u(S,"class","svelte-4xax0d"),u($,"id","pages"),u($,"class",G=me(t[1].dek?"has-dek":"")+" svelte-4xax0d"),u(l,"class","main svelte-4xax0d"),u(l,"data-label","Server-side")},m(e,w){F(e,s,w),F(e,l,w),_(l,o),_(o,r),_(o,i),_(i,c),_(l,R),_(l,I),f&&ee(f,I,null),_(l,U),_(l,m),ee(g,m,null),_(l,V),y&&y.m(l,null),_(l,j),_(l,$),_($,H);for(let d=0;d<k.length;d+=1)k[d]&&k[d].m(H,null);_($,W),_($,S),_(S,x),_(S,X);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(S,null);L=!0,Y||(ie=De(x,"click",t[7]),Y=!0)},p(e,[w]){if((!L||w&16)&&a!==(a=e[4].title)&&(ne.title=a),(!L||w&16)&&h!==(h=e[4].title+"")&&Ce(r,h),(!L||w&16&&v!==(v="https://svelte.dev/repl/"+e[4].replPath))&&u(i,"href",v),w&16&&A!==(A=e[4].component)){if(f){qe();const n=f;te(n.$$.fragment,1,0,()=>{ae(n,1)}),Te()}A?(f=he(A,ce()),Z(f.$$.fragment),le(f.$$.fragment,1),ee(f,I,null)):f=null}(!L||w&1&&z!==(z=e[0].toLowerCase()))&&u(I,"data-slug",z);const d={};if(w&2&&(d.data=e[1]),w&1&&(d.slug=e[0]),g.$set(d),e[1].dek?y?y.p(e,w):(y=be(e),y.c(),y.m(l,j)):y&&(y.d(1),y=null),w&12){O=Q(e[3]);let n;for(n=0;n<O.length;n+=1){const T=ke(e,O,n);k[n]?k[n].p(T,w):(k[n]=ye(T),k[n].c(),k[n].m(H,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=O.length}if(w&76){B=Q(e[3]);let n;for(n=0;n<B.length;n+=1){const T=we(e,B,n);b[n]?b[n].p(T,w):(b[n]=Ee(T),b[n].c(),b[n].m(S,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=B.length}(!L||w&2&&G!==(G=me(e[1].dek?"has-dek":"")+" svelte-4xax0d"))&&u($,"class",G)},i(e){L||(f&&le(f.$$.fragment,e),le(g.$$.fragment,e),L=!0)},o(e){f&&te(f.$$.fragment,e),te(g.$$.fragment,e),L=!1},d(e){e&&(p(s),p(l)),f&&ae(f),ae(g),y&&y.d(),_e(k,e),_e(b,e),Y=!1,ie()}}}function Be(t,a,s){let l,o;se.registerLanguage("svelte",ge),ge(se);const h=new Me({html:!0,linkify:!0});let{data:r}=a,{slug:i,content:c,active:v}=r;function R(m){return h.render(m)}function I(m,g){const V=g.split(".");let j=V[V.length-1];return j==="csv"&&(j="diff"),se.highlight(m,{language:j}).value}const f=new Map;xe.forEach(m=>{f.set(m.slug.toLowerCase(),m)});function z(){const m=l.filter(g=>J(g.title)===v)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",m);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const g=document.createElement("textarea");g.textContent=m,g.style.position="fixed",document.body.appendChild(g),g.select();try{return document.execCommand("copy")}catch(V){return console.warn("Copy to clipboard failed.",V),!1}finally{document.body.removeChild(g)}}}const U=m=>s(2,v=J(m.title));return t.$$set=m=>{"data"in m&&s(8,r=m.data)},t.$$.update=()=>{t.$$.dirty&256&&s(0,{slug:i,content:c,active:v}=r,i,(s(1,c),s(8,r)),(s(2,v),s(8,r))),t.$$.dirty&2&&s(3,l=[c.main].concat(c.components).concat(c.componentModules).concat(c.modules).concat(c.componentComponents).concat(c.jsons).concat(c.csvs)),t.$$.dirty&1&&s(4,o=f.get(i.toLowerCase()))},[i,c,v,l,o,R,I,z,r,U]}class Xe extends je{constructor(a){super(),He(this,a,Be,Oe,Le,{data:8})}}export{Xe as component,We as universal};