import{t as k,e as y,b as D}from"./Bh0c0Bo_.js";import{i as x}from"./DMRkByBl.js";import{o as $,y as B,q as O,x as C,M,P as g}from"./Dc8w0MKf.js";import{p as d}from"./CwEcf403.js";import{d as q,t as z}from"./DPn4pLDi.js";import{u as I}from"./CtZ_RwMT.js";var J=k('<button title="download zip file" class="icon svelte-lkwcax" style="background-image: url(/icons/download.svg)">Download &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>');function A(p,n){$(n,!1);let s=d(n,"data",24,()=>({})),m=d(n,"slug",8),w=d(n,"ssr",8,!1),i=M(!1);function b(a=""){return(a.match(/from\s'(.+)'?/gm)||[]).map(c=>c.replace(/(from |'|"|;)/g,"")).filter(c=>!c.startsWith("."))}const f=[s().main,...s().components,...s().componentComponents].reduce((a,e)=>a.concat(b(e.contents)),[]).reduce((a,e)=>(a.includes(e)||a.push(e),a),[]);async function j(){g(i,!0);const a=new Date().getTime(),e=await(await window.fetch(`/svelte-app.json?${a}`)).json(),r=await(await window.fetch(`/deps.json?${a}`)).json();if(f.length>0){const t=e.findIndex(({path:o})=>o==="package.json"),u=JSON.parse(e[t].data),h={},v={};f.forEach(o=>{o!=="svelte"&&(h[o]=r[o],r[o]||window.alert(`Missing dependency, add "${o}" to this repo's package.json`))}),Object.assign(u.dependencies,h),Object.assign(u.devDependencies,v),e[t].data=JSON.stringify(u,null,"  ")}e.push(...s().components.map(t=>({path:`src/routes/${t.title.replace("./","")}`,data:t.contents}))),e.push(...s().modules.map(t=>({path:`src/routes/${t.title.replace("./","")}`,data:t.contents}))),e.push(...s().componentModules.map(t=>({path:`src/routes/${t.title.replace("../","")}`,data:t.contents}))),e.push(...s().componentComponents.map(t=>({path:`src/routes/${t.title}`,data:t.contents}))),e.push(...s().csvs.map(t=>({path:`src/routes/${t.title.replace("../","")}`,data:t.contents}))),e.push(...s().jsons.map(t=>({path:`src/routes/${t.title.replace("../","")}`,data:t.contents}))),e.push({path:"src/routes/+page.svelte",data:s().main.contents});const c=I(e.filter(Boolean),"path",!1);q(z(c),`layercake-${w()?"ssr-":""}${m()}.zip`),g(i,!1)}x();var l=J();B(()=>l.disabled=C(i)),y("click",l,j),D(p,l),O()}function E(p){const n=p.split("/"),s=n[n.length-1].split(".");return s.pop(),s.join(".").toLowerCase()}export{A as D,E as c};
