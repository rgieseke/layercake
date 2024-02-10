import{e as it}from"../chunks/index.8f2ca6db.js";import{s as Ze,p as $e,f as v,a as J,l as ie,e as Ve,g as m,h as g,d as i,c as K,m as re,r as Z,j as _,u as L,v as rt,w as oe,i as N,x as f,y as He,z as F,n as ct,A as ut,B as qe,C as _t,D as ft,E as xe,F as pt,G as ht,H as vt,I as mt,J as dt}from"../chunks/scheduler.101db06a.js";import{S as et,i as tt,f as gt,b as st,d as lt,m as nt,a as Ie,t as Ne,e as at}from"../chunks/index.5bc76508.js";import{e as de}from"../chunks/each.af0871f9.js";import{j as yt}from"../chunks/singletons.1d050b2c.js";import{p as bt}from"../chunks/stores.edc8e944.js";import{G as kt}from"../chunks/GuideContents.2804f685.js";import{e as ze}from"../chunks/_examples.d5f7eeba.js";import{e as Ue}from"../chunks/_examples_ssr.cc1afbd5.js";const Ct=!0;async function Et({fetch:t}){const e=await t("/api/guide-sections.json"),l=await e.json();if(e.status===200)return{sections:l};it(500,`Could not load guide sections: ${l.message}`)}const Ht=Object.freeze(Object.defineProperty({__proto__:null,load:Et,prerender:Ct},Symbol.toStringTag,{value:"Module"}));const Ot=yt("goto");function Be(t,e,l){const a=t.slice();return a[19]=e[l],a}function Fe(t,e,l){const a=t.slice();return a[19]=e[l],a}function Je(t){let e,l;return{c(){e=v("option"),l=ie("Select..."),this.h()},l(a){e=m(a,"OPTION",{});var n=g(e);l=re(n,"Select..."),n.forEach(i),this.h()},h(){e.__value=t[1],L(e,e.__value),e.disabled=!0},m(a,n){N(a,e,n),f(e,l)},p(a,n){n&2&&(e.__value=a[1],L(e,e.__value))},d(a){a&&i(e)}}}function Ke(t){let e,l;return{c(){e=v("option"),l=ie("Select..."),this.h()},l(a){e=m(a,"OPTION",{});var n=g(e);l=re(n,"Select..."),n.forEach(i),this.h()},h(){e.__value=t[1],L(e,e.__value),e.disabled=!0},m(a,n){N(a,e,n),f(e,l)},p(a,n){n&2&&(e.__value=a[1],L(e,e.__value))},d(a){a&&i(e)}}}function Qe(t){let e,l=t[4](t[19].title)+"",a;return{c(){e=v("option"),a=ie(l),this.h()},l(n){e=m(n,"OPTION",{});var u=g(e);a=re(u,l),u.forEach(i),this.h()},h(){e.__value="/example/"+t[19].slug,L(e,e.__value)},m(n,u){N(n,e,u),f(e,a)},p:xe,d(n){n&&i(e)}}}function Re(t){let e,l=t[4](t[19].title)+"",a;return{c(){e=v("option"),a=ie(l),this.h()},l(n){e=m(n,"OPTION",{});var u=g(e);a=re(u,l),u.forEach(i),this.h()},h(){e.__value="/example-ssr/"+t[19].slug,L(e,e.__value)},m(n,u){N(n,e,u),f(e,a)},p:xe,d(n){n&&i(e)}}}function It(t){let e,l,a,n,u,r=t[2]?"Close":"Menu",o,p,O,j,_e="Layer Cake",$,V,U,d,ce=t[1].startsWith("/components"),x,ue=t[1].startsWith("/guide"),T,I="All",H,S,Te="Client-side",A,P,Se="Server-side",fe,w,M,ee,G,Q,Pe="Component gallery",R,we="Components",pe,ge,te,q,ye,he,be,X,Le='<a id="github-link" target="_blank" rel="noreferrer" href="https://github.com/mhkeller/layercake" class="svelte-6iinyn"></a>',ke,se,z,Ce,ve,W,Ee,je,k=ce&&Je(t),C=ue&&Ke(t),le=de(ze.slice().sort(Xe)),y=[];for(let s=0;s<le.length;s+=1)y[s]=Qe(Fe(t,le,s));let ne=de(Ue.slice().sort(Ye)),b=[];for(let s=0;s<ne.length;s+=1)b[s]=Re(Be(t,ne,s));function ot(s){t[15](s)}let Ae={sections:t[0]};return t[2]!==void 0&&(Ae.open=t[2]),z=new kt({props:Ae}),$e.push(()=>gt(z,"open",ot)),{c(){e=v("div"),a=J(),n=v("div"),u=v("span"),o=ie(r),O=J(),j=v("a"),j.textContent=_e,$=J(),V=v("ul"),U=v("li"),d=v("select"),k&&k.c(),x=Ve(),C&&C.c(),T=v("option"),T.textContent=I,H=v("option"),S=v("option"),S.textContent=Te;for(let s=0;s<y.length;s+=1)y[s].c();A=v("option"),P=v("option"),P.textContent=Se;for(let s=0;s<b.length;s+=1)b[s].c();fe=J(),w=v("nav"),M=v("ul"),ee=v("li"),G=v("a"),Q=v("span"),Q.textContent=Pe,R=v("span"),R.textContent=we,ge=J(),te=v("li"),q=v("a"),ye=ie("Guide"),be=J(),X=v("li"),X.innerHTML=Le,ke=J(),se=v("div"),st(z.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0}),g(e).forEach(i),a=K(s),n=m(s,"DIV",{class:!0});var c=g(n);u=m(c,"SPAN",{class:!0});var E=g(u);o=re(E,r),E.forEach(i),O=K(c),j=m(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),Z(j)!=="svelte-j5mpno"&&(j.textContent=_e),c.forEach(i),$=K(s),V=m(s,"UL",{class:!0});var h=g(V);U=m(h,"LI",{class:!0});var B=g(U);d=m(B,"SELECT",{class:!0});var D=g(d);k&&k.l(D),x=Ve(),C&&C.l(D),T=m(D,"OPTION",{"data-svelte-h":!0}),Z(T)!=="svelte-q9tf6m"&&(T.textContent=I),H=m(D,"OPTION",{class:!0}),g(H).forEach(i),S=m(D,"OPTION",{class:!0,"data-svelte-h":!0}),Z(S)!=="svelte-800ygd"&&(S.textContent=Te);for(let Y=0;Y<y.length;Y+=1)y[Y].l(D);A=m(D,"OPTION",{class:!0}),g(A).forEach(i),P=m(D,"OPTION",{class:!0,"data-svelte-h":!0}),Z(P)!=="svelte-7g1m7d"&&(P.textContent=Se);for(let Y=0;Y<b.length;Y+=1)b[Y].l(D);D.forEach(i),B.forEach(i),h.forEach(i),fe=K(s),w=m(s,"NAV",{class:!0});var me=g(w);M=m(me,"UL",{class:!0});var ae=g(M);ee=m(ae,"LI",{class:!0});var Me=g(ee);G=m(Me,"A",{class:!0,href:!0});var Oe=g(G);Q=m(Oe,"SPAN",{class:!0,"data-svelte-h":!0}),Z(Q)!=="svelte-1rlx56j"&&(Q.textContent=Pe),R=m(Oe,"SPAN",{class:!0,"data-svelte-h":!0}),Z(R)!=="svelte-v7gob7"&&(R.textContent=we),Oe.forEach(i),Me.forEach(i),ge=K(ae),te=m(ae,"LI",{class:!0});var Ge=g(te);q=m(Ge,"A",{class:!0,href:!0});var We=g(q);ye=re(We,"Guide"),We.forEach(i),Ge.forEach(i),be=K(ae),X=m(ae,"LI",{class:!0,"data-svelte-h":!0}),Z(X)!=="svelte-135sx5w"&&(X.innerHTML=Le),ae.forEach(i),ke=K(me),se=m(me,"DIV",{class:!0});var De=g(se);lt(z.$$.fragment,De),De.forEach(i),me.forEach(i),this.h()},h(){_(e,"class",l=(t[2]?"open":"closed")+" mousecatcher svelte-6iinyn"),_(u,"class",p="menu-link "+(t[2]?"menu-open":"menu-closed")+" svelte-6iinyn"),_(j,"href","/"),_(j,"class","logo svelte-6iinyn"),_(n,"class","container svelte-6iinyn"),T.__value="/",L(T,T.__value),_(H,"class","header svelte-6iinyn"),H.disabled=!0,H.__value="",L(H,H.__value),_(S,"class","header svelte-6iinyn"),S.disabled=!0,S.__value="Client-side",L(S,S.__value),_(A,"class","header svelte-6iinyn"),A.disabled=!0,A.__value="",L(A,A.__value),_(P,"class","header svelte-6iinyn"),P.disabled=!0,P.__value="Server-side",L(P,P.__value),_(d,"class","svelte-6iinyn"),t[1]===void 0&&rt(()=>t[12].call(d)),_(U,"class","svelte-6iinyn"),_(V,"class","dropdown svelte-6iinyn"),_(Q,"class","wide-name svelte-6iinyn"),_(R,"class","short-name svelte-6iinyn"),_(G,"class",pe=oe(t[1]==="/components"?"active":"")+" svelte-6iinyn"),_(G,"href","/components"),_(ee,"class","svelte-6iinyn"),_(q,"class",he=oe(t[1]==="/guide"?"active":"")+" svelte-6iinyn"),_(q,"href","/guide"),_(te,"class","svelte-6iinyn"),_(X,"class","svelte-6iinyn"),_(M,"class","primary svelte-6iinyn"),_(se,"class","secondary svelte-6iinyn"),_(w,"class",ve=oe(t[2]?"open":"closed")+" svelte-6iinyn")},m(s,c){N(s,e,c),N(s,a,c),N(s,n,c),f(n,u),f(u,o),f(n,O),f(n,j),N(s,$,c),N(s,V,c),f(V,U),f(U,d),k&&k.m(d,null),f(d,x),C&&C.m(d,null),f(d,T),f(d,H),f(d,S);for(let E=0;E<y.length;E+=1)y[E]&&y[E].m(d,null);f(d,A),f(d,P);for(let E=0;E<b.length;E+=1)b[E]&&b[E].m(d,null);He(d,t[1],!0),N(s,fe,c),N(s,w,c),f(w,M),f(M,ee),f(ee,G),f(G,Q),f(G,R),f(M,ge),f(M,te),f(te,q),f(q,ye),f(M,be),f(M,X),f(w,ke),f(w,se),nt(z,se,null),t[16](w),W=!0,Ee||(je=[F(e,"click",t[10]),F(e,"keypress",t[11]),F(u,"click",t[6]),F(u,"keypress",t[6]),F(d,"change",t[5]),F(d,"change",t[12]),F(G,"click",t[13]),F(q,"click",t[14])],Ee=!0)},p(s,[c]){if((!W||c&4&&l!==(l=(s[2]?"open":"closed")+" mousecatcher svelte-6iinyn"))&&_(e,"class",l),(!W||c&4)&&r!==(r=s[2]?"Close":"Menu")&&ct(o,r),(!W||c&4&&p!==(p="menu-link "+(s[2]?"menu-open":"menu-closed")+" svelte-6iinyn"))&&_(u,"class",p),c&2&&(ce=s[1].startsWith("/components")),ce?k?k.p(s,c):(k=Je(s),k.c(),k.m(d,x)):k&&(k.d(1),k=null),c&2&&(ue=s[1].startsWith("/guide")),ue?C?C.p(s,c):(C=Ke(s),C.c(),C.m(d,T)):C&&(C.d(1),C=null),c&16){le=de(ze.slice().sort(Xe));let h;for(h=0;h<le.length;h+=1){const B=Fe(s,le,h);y[h]?y[h].p(B,c):(y[h]=Qe(B),y[h].c(),y[h].m(d,A))}for(;h<y.length;h+=1)y[h].d(1);y.length=le.length}if(c&16){ne=de(Ue.slice().sort(Ye));let h;for(h=0;h<ne.length;h+=1){const B=Be(s,ne,h);b[h]?b[h].p(B,c):(b[h]=Re(B),b[h].c(),b[h].m(d,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=ne.length}c&2&&He(d,s[1]),(!W||c&2&&pe!==(pe=oe(s[1]==="/components"?"active":"")+" svelte-6iinyn"))&&_(G,"class",pe),(!W||c&2&&he!==(he=oe(s[1]==="/guide"?"active":"")+" svelte-6iinyn"))&&_(q,"class",he);const E={};c&1&&(E.sections=s[0]),!Ce&&c&4&&(Ce=!0,E.open=s[2],ut(()=>Ce=!1)),z.$set(E),(!W||c&4&&ve!==(ve=oe(s[2]?"open":"closed")+" svelte-6iinyn"))&&_(w,"class",ve)},i(s){W||(Ie(z.$$.fragment,s),W=!0)},o(s){Ne(z.$$.fragment,s),W=!1},d(s){s&&(i(e),i(a),i(n),i($),i(V),i(fe),i(w)),k&&k.d(),C&&C.d(),qe(y,s),qe(b,s),at(z),t[16](null),Ee=!1,_t(je)}}}const Xe=(t,e)=>t.title<e.title?-1:1,Ye=(t,e)=>t.title<e.title?-1:1;function Nt(t,e,l){let a,n;ft(t,bt,I=>l(9,n=I));let{sections:u}=e,r,o="",p=!1,O;const j=I=>I.split(" (")[0];function _e(){l(2,p=!1),Ot(this.value||"/")}function $(){p?setTimeout(()=>{p||l(3,O.scrollTop=0,O)},350):l(3,O.scrollTop=0,O),l(2,p=!p)}const V=()=>l(2,p=!1),U=()=>l(2,p=!1);function d(){o=pt(this),l(1,o),l(8,a),l(9,n),l(7,r)}const ce=()=>l(2,p=!1),x=()=>l(2,p=!1);function ue(I){p=I,l(2,p)}function T(I){$e[I?"unshift":"push"](()=>{O=I,l(3,O)})}return t.$$set=I=>{"sections"in I&&l(0,u=I.sections)},t.$$.update=()=>{t.$$.dirty&512&&l(8,a=n.url.pathname==="/service-worker.js"),t.$$.dirty&896&&(a||(l(7,r=n.url.pathname),r.split("/")[1],l(1,o=`/${r.replace("/","")}`),r.replace(/\/$/,"").split("/").pop()))},[u,o,p,O,j,_e,$,r,a,n,V,U,d,ce,x,ue,T]}class Tt extends et{constructor(e){super(),tt(this,e,Nt,It,Ze,{sections:0})}}function St(t){let e,l,a,n;e=new Tt({props:{sections:t[0].sections}});const u=t[2].default,r=ht(u,t,t[1],null);return{c(){st(e.$$.fragment),l=J(),a=v("main"),r&&r.c()},l(o){lt(e.$$.fragment,o),l=K(o),a=m(o,"MAIN",{});var p=g(a);r&&r.l(p),p.forEach(i)},m(o,p){nt(e,o,p),N(o,l,p),N(o,a,p),r&&r.m(a,null),n=!0},p(o,[p]){const O={};p&1&&(O.sections=o[0].sections),e.$set(O),r&&r.p&&(!n||p&2)&&vt(r,u,o,o[1],n?dt(u,o[1],p,null):mt(o[1]),null)},i(o){n||(Ie(e.$$.fragment,o),Ie(r,o),n=!0)},o(o){Ne(e.$$.fragment,o),Ne(r,o),n=!1},d(o){o&&(i(l),i(a)),at(e,o),r&&r.d(o)}}}function Pt(t,e,l){let{$$slots:a={},$$scope:n}=e,{data:u}=e;return t.$$set=r=>{"data"in r&&l(0,u=r.data),"$$scope"in r&&l(1,n=r.$$scope)},[u,n,a]}class qt extends et{constructor(e){super(),tt(this,e,Pt,St,Ze,{data:0})}}export{qt as component,Ht as universal};
