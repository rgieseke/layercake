import{e as a}from"./index.2defaa64.js";async function r({fetch:n,params:e}){const o=`${e.slug}.json`,t=await n(o),s=await t.json();if(t.status===200)return{slug:e.slug,content:s,active:"+page"};throw a(500,`Could not load ${o}: ${s.message}`)}const u=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{u as _,r as l};