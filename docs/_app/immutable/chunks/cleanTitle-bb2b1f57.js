import{S as y,i as k,s as D,k as v,q as B,l as x,m as O,r as C,h as m,n as g,p as S,b as T,J as q,L as J,B as w}from"./index-bab5e66b.js";import{d as L,t as N}from"./downloadBlob-9f919364.js";import{u as z}from"./Brush.html-da7ecbd3.js";function E(i){let t,o,e,p;return{c(){t=v("button"),o=B("Download      "),this.h()},l(l){t=x(l,"BUTTON",{title:!0,class:!0,style:!0});var c=O(t);o=C(c,"Download      "),c.forEach(m),this.h()},h(){t.disabled=i[0],g(t,"title","download zip file"),g(t,"class","icon svelte-1gef78k"),S(t,"background-image","url(/icons/download.svg)")},m(l,c){T(l,t,c),q(t,o),e||(p=J(t,"click",i[1]),e=!0)},p(l,[c]){c&1&&(t.disabled=l[0])},i:w,o:w,d(l){l&&m(t),e=!1,p()}}}function I(i=""){return(i.match(/from\s'(.+)'?/gm)||[]).map(e=>e.replace(/(from |'|"|;)/g,"")).filter(e=>!e.startsWith("."))}function M(i,t,o){let{data:e={}}=t,{slug:p}=t,{ssr:l=!1}=t,c=!1;const u=[e.main,...e.components,...e.componentComponents].reduce((a,n)=>a.concat(I(n.contents)),[]).reduce((a,n)=>(a.includes(n)||a.push(n),a),[]);async function _(){o(0,c=!0),console.log("downloading");const a=new Date().getTime(),n=await(await window.fetch(`/svelte-app.json?${a}`)).json(),h=await(await window.fetch(`/deps.json?${a}`)).json();if(u.length>0){const s=n.findIndex(({path:r})=>r==="package.json"),d=JSON.parse(n[s].data),f={},j={};u.forEach(r=>{r!=="svelte"&&(f[r]=h[r],h[r]||window.alert(`Missing dependency, add "${r}" to this repo's package.json`))}),Object.assign(d.dependencies,f),Object.assign(d.devDependencies,j),n[s].data=JSON.stringify(d,null,"  ")}n.push(...e.components.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),n.push(...e.modules.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),n.push(...e.componentModules.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push(...e.componentComponents.map(s=>({path:`src/routes/${s.title}`,data:s.contents}))),n.push(...e.csvs.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push(...e.jsons.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push({path:"src/routes/+page.svelte",data:e.main.contents}),console.log("here",n);const b=z(n.filter(Boolean),"path",!1);L(N(b),`layercake-${l?"ssr-":""}${p}.zip`),o(0,c=!1)}return i.$$set=a=>{"data"in a&&o(2,e=a.data),"slug"in a&&o(3,p=a.slug),"ssr"in a&&o(4,l=a.ssr)},[c,_,e,p,l]}class U extends y{constructor(t){super(),k(this,t,M,E,D,{data:2,slug:3,ssr:4})}}function W(i){const t=i.split("/"),o=t[t.length-1].split(".");return o.pop(),o.join(".").toLowerCase()}export{U as D,W as c};
