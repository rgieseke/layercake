import{e as Se}from"../chunks/index.CzR0xuCU.js";import{e as z,a as m,t as h,h as Ce,s as j,d as Te}from"../chunks/disclose-version.DNYiTfVC.js";import{p as de,t as b,a as ve,w as t,O as $,v as p,P as x,Q as Ie,$ as qe,s as v,c as r,r as o,K as L,f as N}from"../chunks/runtime.B7mK2QHg.js";import{i as D}from"../chunks/if.DfQvOzx6.js";import{e as S,i as C,a as re,s as le}from"../chunks/class.w-fjc9ue.js";import{h as Q}from"../chunks/html.BoZhowlm.js";import{c as Me}from"../chunks/svelte-component.Cg80y6Fz.js";import{i as ue}from"../chunks/lifecycle.VwM39mxy.js";import{p as V}from"../chunks/index-client.BSwEoech.js";import{d as ie,t as Pe,M as Re}from"../chunks/downloadBlob.DPn4pLDi.js";import{H as U,h as ce}from"../chunks/hljsDefineSvelte.DGdUdlmg.js";import{u as Be}from"../chunks/Brush.html.CzO9ncG6.js";import{c as Ee}from"../chunks/_components.CkB6MHDU.js";async function He({fetch:w,params:f}){const{slug:c}=f,d=`${c}.json`,g=await w(d),l=await g.json();if(g.status===200)return{slug:c,content:l,active:c};Se(500,`Could not load ${d}: ${l.message}`)}const it=Object.freeze(Object.defineProperty({__proto__:null,load:He},Symbol.toStringTag,{value:"Module"}));var Oe=h('<button title="download zip file" class="icon svelte-lkwcax" style="background-image: url(/icons/download.svg)">Download &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>');function Ae(w,f){de(f,!1);let c=V(f,"data",24,()=>({})),d=V(f,"slug",8),g=$(!1);async function l(){p(g,!0);const _=[];_.push(...c().modules.map(u=>({path:u.slug.replace("./",""),data:u.contents}))),_.push({path:d(),data:c().main.contents});const n=Be(_.filter(Boolean),"path",!1);if(n.length===1)ie(n[0].data,`layercake-${d()}`,!0);else{const u=d().split(".");ie(Pe(n),`layercake-${u[0]}.zip`)}p(g,!1)}ue();var y=Oe();b(()=>y.disabled=t(g)),z("click",y,l),m(w,y),ve()}var Fe=h('<div id="params-table" class="svelte-7in5zh"><!></div>'),Je=h('<h3 class="svelte-7in5zh">SSR Examples:</h3>'),Ke=h('<li><a class="svelte-7in5zh"> </a></li>'),Le=h('<!> <ul class="svelte-7in5zh"></ul>',1),Ne=h('<h3 class="svelte-7in5zh"> </h3> <!>',1),Qe=h("<li> </li>"),Ue=h('<div class="contents"><pre class="svelte-7in5zh"><!></pre></div>'),Ve=h('<div class="main svelte-7in5zh"><div class="all-components svelte-7in5zh"><a href="/components" class="svelte-7in5zh">← View all components</a></div> <h1 class="svelte-7in5zh"> </h1> <div class="chart-hero svelte-7in5zh"><!></div> <div class="download svelte-7in5zh"><!></div> <div class="dek svelte-7in5zh"><!></div> <!> <div id="used-in" class="svelte-7in5zh"><!></div> <div id="pages"><ul id="page-nav" class="svelte-7in5zh"></ul> <div id="contents-container" class="svelte-7in5zh"><div class="copy svelte-7in5zh"></div> <!></div></div></div>');function ct(w,f){de(f,!1);const c=$(),d=$(),g=new Re({html:!0,linkify:!0});U.registerLanguage("svelte",ce),ce(U);let l=V(f,"data",8),y=l(),_=$(y.slug),n=$(y.content),u=$(y.active);function G(e){return g.render(e)}function me(e,a){const s=a.split(".");let i=s[s.length-1];return i==="csv"&&(i="diff"),U.highlight(e,{language:i}).value}const W=new Map;Ee.flatMap(e=>e.components).forEach(e=>{W.set(e.slug,e)});function pe(e){const a=s=>s.map(i=>`\`${i.name}\``).join(" &vert; ");if(e.name)return`\`${e.name}\``;if(e.type.elements)return`(${a(e.type.elements)})`;if(e.expression){if(e.expression.name)return`\`${e.expression.name}\``;if(e.expression.elements)return`(${a(e.expression.elements)})`}}function he(e){return e?`\`${e}\``:"None"}function fe(e){return`<center>${e.type!=="OptionalType"?"yes":"no"}</center>`}const ge=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let X="",Y=$("");t(n).hasjsDoctable===!0&&(X=`${t(n).jsdocParsed.tags.map(e=>{var a;return`**${e.name}** ${pe(e.type)}|${he(e.default)}|${fe(e.type)}|${(a=e.description)==null?void 0:a.replace(/^(-|–|—)/g,"").trim()}`}).join(`
`)}`,p(Y,t(n).jsdocParsed.tags.length?`${ge}
${X}`:""));function Z(){const e=t(c)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const a=document.createElement("textarea");a.textContent=e,a.style.position="fixed",document.body.appendChild(a),a.select();try{return document.execCommand("copy")}catch(s){return console.warn("Copy to clipboard failed.",s),!1}finally{document.body.removeChild(a)}}}x(()=>L(l()),()=>{p(_,l().slug)}),x(()=>L(l()),()=>{p(n,l().content)}),x(()=>L(l()),()=>{p(u,l().active)}),x(()=>t(n),()=>{p(c,[t(n).main].concat(t(n).modules))}),x(()=>t(_),()=>{p(d,W.get(t(_)))}),Ie(),ue();var T=Ve();Ce(e=>{b(()=>qe.title=`${t(d).slug??""} component`)});var I=v(r(T),2),_e=r(I);o(I);var q=v(I,2),be=r(q);Me(be,()=>t(d).component,(e,a)=>{a(e,{})}),o(q);var M=v(q,2),ye=r(M);Ae(ye,{get data(){return t(n)},get slug(){return t(_)}}),o(M);var P=v(M,2),$e=r(P);Q($e,()=>G(t(n).componentDescription)),o(P);var ee=v(P,2);D(ee,()=>t(n).hasjsDoctable===!0,e=>{var a=Fe(),s=r(a);Q(s,()=>G(t(Y))),o(a),m(e,a)});var R=v(ee,2),we=r(R);D(we,()=>t(n).usedIn[0].matches.length>0||t(n).usedIn[1].matches.length>0,e=>{var a=Ne(),s=N(a),i=r(s);o(s);var O=v(s,2);S(O,1,()=>t(n).usedIn,C,(ze,A)=>{var ae=Te(),ke=N(ae);D(ke,()=>t(A).matches.length>0,je=>{var se=Le(),ne=N(se);D(ne,()=>t(A).group==="SSR"&&t(n).usedIn[0].matches.length>0,F=>{var k=Je();m(F,k)});var oe=v(ne,2);S(oe,5,()=>t(A).matches,C,(F,k)=>{var J=Ke(),K=r(J),De=r(K);b(()=>j(De,t(k).split("/").pop())),o(K),o(J),b(()=>le(K,"href",t(k))),m(F,J)}),o(oe),m(je,se)}),m(ze,ae)}),b(()=>j(i,`Used in these${(t(n).usedIn[0].matches.length===0&&t(n).usedIn[1].matches.length>0?" SSR":"")??""} examples:`)),m(e,a)}),o(R);var B=v(R,2),E=r(B);S(E,5,()=>t(c),C,(e,a)=>{var s=Qe(),i=r(s);o(s),b(()=>{re(s,`tab ${(t(u)===t(a).slug?"active":"")??""} svelte-7in5zh`),j(i,t(a).slug)}),z("click",s,()=>p(u,t(a).slug)),z("keypress",s,()=>p(u,t(a).slug)),m(e,s)}),o(E);var te=v(E,2),H=r(te),xe=v(H,2);S(xe,1,()=>t(c),C,(e,a)=>{var s=Ue(),i=r(s),O=r(i);Q(O,()=>me(t(a).contents,t(a).slug)),o(i),o(s),b(()=>le(s,"style",`display: ${(t(u)===t(a).slug?"block":"none")??""};`)),m(e,s)}),o(te),o(B),o(T),b(()=>{j(_e,`${t(d).slug??""} component`),re(B,`${(t(n).dek?"has-dek":"")??""} svelte-7in5zh`)}),z("click",H,Z),z("keypress",H,Z),m(w,T),ve()}export{ct as component,it as universal};
