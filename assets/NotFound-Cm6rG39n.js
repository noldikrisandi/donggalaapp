import{f as g,o as j,u as v,j as l,d as _,e as A,g as E,r as p,h as L,i as x,k as b,l as O,B as C,V as w,H as B,T as S,L as V,m as M}from"./index-Cwf2ZISG.js";var k=g(function(r,o){const{className:t,centerContent:i,...n}=j(r),c=v("Container",r);return l.jsx(_.div,{ref:o,className:A("chakra-container",t),...n,__css:{...c,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});k.displayName="Container";function N(e,r={}){const{ssr:o=!0,fallback:t}=r,{getWindow:i}=E(),n=Array.isArray(e)?e:[e];let c=Array.isArray(t)?t:[t];c=c.filter(a=>a!=null);const[u,d]=p.useState(()=>n.map((a,m)=>({media:a,matches:o?!!c[m]:i().matchMedia(a).matches})));return p.useEffect(()=>{const a=i();d(n.map(s=>({media:s,matches:a.matchMedia(s).matches})));const m=n.map(s=>a.matchMedia(s)),f=s=>{d(y=>y.slice().map(h=>h.media===s.media?{...h,matches:s.matches}:h))};return m.forEach(s=>{typeof s.addListener=="function"?s.addListener(f):s.addEventListener("change",f)}),()=>{m.forEach(s=>{typeof s.removeListener=="function"?s.removeListener(f):s.removeEventListener("change",f)})}},[i]),u.map(a=>a.matches)}function T(e,r,o=L){let t=Object.keys(e).indexOf(r);if(t!==-1)return e[r];let i=o.indexOf(r);for(;i>=0;){const n=o[i];if(e.hasOwnProperty(n)){t=i;break}i-=1}if(t!==-1){const n=o[t];return e[n]}}function z(e){var r,o;const t=b(e)?e:{fallback:e??"base"},n=x().__breakpoints.details.map(({minMaxQuery:a,breakpoint:m})=>({breakpoint:m,query:a.replace("@media screen and ","")})),c=n.map(a=>a.breakpoint===t.fallback),d=N(n.map(a=>a.query),{fallback:c,ssr:t.ssr}).findIndex(a=>a==!0);return(o=(r=n[d])==null?void 0:r.breakpoint)!=null?o:t.fallback}function W(e,r){var o;const t=b(r)?r:{fallback:"base"},i=z(t),n=x();if(!i)return;const c=Array.from(((o=n.__breakpoints)==null?void 0:o.keys)||[]),u=Array.isArray(e)?Object.fromEntries(Object.entries(O(e,c)).map(([d,a])=>[d,a])):e;return T(u,i,c)}const I=()=>{const e=W({base:"md",md:"lg"});return l.jsx(C,{as:"section",bg:"gray.800",color:"white",py:{base:16,md:20},px:4,children:l.jsx(k,{maxW:"lg",textAlign:"center",children:l.jsxs(w,{spacing:6,children:[l.jsx(B,{as:"h1",size:"4xl",fontWeight:"extrabold",color:"red.500",children:"404"}),l.jsx(S,{fontSize:"xl",color:"gray.300",maxW:"lg",mx:"auto",children:"Halaman yang Anda cari tidak ditemukan. Mungkin linknya salah atau halaman sudah tidak ada."}),l.jsx(V,{to:"/",children:l.jsx(M,{colorScheme:"teal",size:e,variant:"solid",_hover:{bg:"teal.400"},px:{base:6,md:8},py:6,children:"Kembali ke Beranda"})})]})})})};export{I as default};
