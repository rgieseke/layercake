import{S as De,i as Ie,s as Ce,v as de,a as q,k as D,q as ae,w as Y,aa as Le,h as p,c as P,l as I,m as C,r as ne,x as fe,n as h,I as he,b as F,J as _,y as Z,L as Ee,u as ye,t as x,d as He,f as ee,z as te,N as me,ad as Me,p as _e,g as Te}from"../../../../chunks/index-bab5e66b.js";import{M as Ve}from"../../../../chunks/downloadBlob-9f919364.js";import{H as le,h as pe}from"../../../../chunks/hljsDefineSvelte-185b3d8f.js";import{D as $e,c as N}from"../../../../chunks/cleanTitle-bb2b1f57.js";import{e as Se}from"../../../../chunks/_examples-e272ef73.js";const{document:se}=Me;function ve(l,s,a){const t=l.slice();return t[12]=s[a],t}function ge(l,s,a){const t=l.slice();return t[12]=s[a],t}function ke(l){let s,a=l[5](l[1].dek)+"";return{c(){s=D("div"),this.h()},l(t){s=I(t,"DIV",{class:!0});var o=C(s);o.forEach(p),this.h()},h(){h(s,"class","dek svelte-m4suor")},m(t,o){F(t,s,o),s.innerHTML=a},p(t,o){o&2&&a!==(a=t[5](t[1].dek)+"")&&(s.innerHTML=a)},d(t){t&&p(s)}}}function we(l){let s,a=l[12].title+"",t,o,r,i;function m(){return l[9](l[12])}return{c(){s=D("li"),t=ae(a),this.h()},l(d){s=I(d,"LI",{class:!0});var v=C(s);t=ne(v,a),v.forEach(p),this.h()},h(){h(s,"class",o="tab "+(l[2]===N(l[12].title)?"active":"")+" svelte-m4suor")},m(d,v){F(d,s,v),_(s,t),r||(i=Ee(s,"click",m),r=!0)},p(d,v){l=d,v&8&&a!==(a=l[12].title+"")&&ye(t,a),v&12&&o!==(o="tab "+(l[2]===N(l[12].title)?"active":"")+" svelte-m4suor")&&h(s,"class",o)},d(d){d&&p(s),r=!1,i()}}}function be(l){let s,a,t=l[6](l[12].contents,l[12].title)+"",o;return{c(){s=D("div"),a=D("pre"),o=q(),this.h()},l(r){s=I(r,"DIV",{class:!0,style:!0});var i=C(s);a=I(i,"PRE",{class:!0});var m=C(a);m.forEach(p),o=P(i),i.forEach(p),this.h()},h(){h(a,"class","svelte-m4suor"),h(s,"class","contents"),_e(s,"display",l[2]===N(l[12].title)?"block":"none")},m(r,i){F(r,s,i),_(s,a),a.innerHTML=t,_(s,o)},p(r,i){i&8&&t!==(t=r[6](r[12].contents,r[12].title)+"")&&(a.innerHTML=t),i&12&&_e(s,"display",r[2]===N(r[12].title)?"block":"none")},d(r){r&&p(s)}}}function qe(l){let s,a,t,o,r=l[4].title+"",i,m,d,v,R,H,c,U,T,u,y,M,E,V,Q,L,z,W,G,$,X,oe;se.title=s=l[4].title;var J=l[4].component;function re(e){return{}}J&&(c=de(J,re())),u=new $e({props:{data:l[1],slug:l[0]}});let g=l[1].dek&&ke(l),A=l[3],k=[];for(let e=0;e<A.length;e+=1)k[e]=we(ge(l,A,e));let B=l[3],w=[];for(let e=0;e<B.length;e+=1)w[e]=be(ve(l,B,e));return{c(){a=q(),t=D("div"),o=D("h1"),i=ae(r),m=D("a"),d=ae("Edit"),R=q(),H=D("div"),c&&Y(c.$$.fragment),U=q(),T=D("div"),Y(u.$$.fragment),y=q(),g&&g.c(),M=q(),E=D("div"),V=D("ul");for(let e=0;e<k.length;e+=1)k[e].c();Q=q(),L=D("div"),z=D("div"),W=q();for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){Le("svelte-1ynzqk4",se.head).forEach(p),a=P(e),t=I(e,"DIV",{class:!0});var f=C(t);o=I(f,"H1",{});var n=C(o);i=ne(n,r),m=I(n,"A",{class:!0,href:!0,target:!0,rel:!0});var S=C(m);d=ne(S,"Edit"),S.forEach(p),n.forEach(p),R=P(f),H=I(f,"DIV",{class:!0});var ie=C(H);c&&fe(c.$$.fragment,ie),ie.forEach(p),U=P(f),T=I(f,"DIV",{class:!0});var ce=C(T);fe(u.$$.fragment,ce),ce.forEach(p),y=P(f),g&&g.l(f),M=P(f),E=I(f,"DIV",{id:!0,class:!0});var K=C(E);V=I(K,"UL",{id:!0,class:!0});var ue=C(V);for(let j=0;j<k.length;j+=1)k[j].l(ue);ue.forEach(p),Q=P(K),L=I(K,"DIV",{id:!0,class:!0});var O=C(L);z=I(O,"DIV",{class:!0}),C(z).forEach(p),W=P(O);for(let j=0;j<w.length;j+=1)w[j].l(O);O.forEach(p),K.forEach(p),f.forEach(p),this.h()},h(){h(m,"class","edit-repl svelte-m4suor"),h(m,"href",v="https://svelte.dev/repl/"+l[4].replPath),h(m,"target","_blank"),h(m,"rel","nofollow"),h(H,"class","chart-hero svelte-m4suor"),h(T,"class","download svelte-m4suor"),h(V,"id","page-nav"),h(V,"class","svelte-m4suor"),h(z,"class","copy svelte-m4suor"),h(L,"id","contents-container"),h(L,"class","svelte-m4suor"),h(E,"id","pages"),h(E,"class",G=he(l[1].dek?"has-dek":"")+" svelte-m4suor"),h(t,"class","main svelte-m4suor")},m(e,b){F(e,a,b),F(e,t,b),_(t,o),_(o,i),_(o,m),_(m,d),_(t,R),_(t,H),c&&Z(c,H,null),_(t,U),_(t,T),Z(u,T,null),_(t,y),g&&g.m(t,null),_(t,M),_(t,E),_(E,V);for(let f=0;f<k.length;f+=1)k[f].m(V,null);_(E,Q),_(E,L),_(L,z),_(L,W);for(let f=0;f<w.length;f+=1)w[f].m(L,null);$=!0,X||(oe=Ee(z,"click",l[7]),X=!0)},p(e,[b]){if((!$||b&16)&&s!==(s=e[4].title)&&(se.title=s),(!$||b&16)&&r!==(r=e[4].title+"")&&ye(i,r),(!$||b&16&&v!==(v="https://svelte.dev/repl/"+e[4].replPath))&&h(m,"href",v),J!==(J=e[4].component)){if(c){Te();const n=c;x(n.$$.fragment,1,0,()=>{te(n,1)}),He()}J?(c=de(J,re()),Y(c.$$.fragment),ee(c.$$.fragment,1),Z(c,H,null)):c=null}const f={};if(b&2&&(f.data=e[1]),b&1&&(f.slug=e[0]),u.$set(f),e[1].dek?g?g.p(e,b):(g=ke(e),g.c(),g.m(t,M)):g&&(g.d(1),g=null),b&12){A=e[3];let n;for(n=0;n<A.length;n+=1){const S=ge(e,A,n);k[n]?k[n].p(S,b):(k[n]=we(S),k[n].c(),k[n].m(V,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=A.length}if(b&76){B=e[3];let n;for(n=0;n<B.length;n+=1){const S=ve(e,B,n);w[n]?w[n].p(S,b):(w[n]=be(S),w[n].c(),w[n].m(L,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=B.length}(!$||b&2&&G!==(G=he(e[1].dek?"has-dek":"")+" svelte-m4suor"))&&h(E,"class",G)},i(e){$||(c&&ee(c.$$.fragment,e),ee(u.$$.fragment,e),$=!0)},o(e){c&&x(c.$$.fragment,e),x(u.$$.fragment,e),$=!1},d(e){e&&p(a),e&&p(t),c&&te(c),te(u),g&&g.d(),me(k,e),me(w,e),X=!1,oe()}}}function Pe(l,s,a){let t,o;const r=new Ve({html:!0,linkfify:!0});le.registerLanguage("svelte",pe),pe(le);let{data:i}=s,{slug:m,content:d,active:v}=i;function R(u){return r.render(u)}function H(u,y){const M=y.split(".");let E=M[M.length-1];return E==="csv"&&(E="diff"),le.highlight(u,{language:E}).value}const c=new Map;Se.forEach(u=>{c.set(u.slug,u)});function U(){const u=t.filter(y=>N(y.title)===v)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",u);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const y=document.createElement("textarea");y.textContent=u,y.style.position="fixed",document.body.appendChild(y),y.select();try{return document.execCommand("copy")}catch(M){return console.warn("Copy to clipboard failed.",M),!1}finally{document.body.removeChild(y)}}}const T=u=>a(2,v=N(u.title));return l.$$set=u=>{"data"in u&&a(8,i=u.data)},l.$$.update=()=>{l.$$.dirty&256&&a(0,{slug:m,content:d,active:v}=i,m,(a(1,d),a(8,i)),(a(2,v),a(8,i))),l.$$.dirty&2&&a(3,t=[d.main].concat(d.components).concat(d.componentModules).concat(d.modules).concat(d.componentComponents).concat(d.jsons).concat(d.csvs)),l.$$.dirty&1&&a(4,o=c.get(m))},[m,d,v,t,o,R,H,U,i,T]}class Ne extends De{constructor(s){super(),Ie(this,s,Pe,qe,Ce,{data:8})}}export{Ne as default};