import{c as As,r as it,j as he,A as Bf,X as hp,R as fp,w as br,d as Vl,L as dp,a as pp,b as mp,e as gp}from"./index-B3kuxR1U.js";const vp=As("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),xp=As("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]),_p=As("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),yp=As("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Iu=As("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Mp=As("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),wp=As("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]),Lu=3,Sp=950,bp=s=>s.flatMap(e=>{const t=e.images.map((i,r)=>({...i,collection:e.slug,name:e.name,number:r+1,total:e.images.length})),n=[];for(let i=0;i<t.length;i+=Lu)n.push({collection:e.slug,name:e.name,prints:t.slice(i,i+Lu),chapterStart:i===0});return n.length%2&&n.push({collection:e.slug,name:e.name,prints:[],chapterStart:!1}),n}),Tp=(s,e)=>{const t=Math.sin(s*12.9898+e*78.233)*43758.5453,n=t-Math.floor(t);return{turn:(n-.5)*9,shiftX:(n-.5)*6,shiftY:(n*7%1-.5)*5}};function Ep({page:s,index:e,side:t,flipped:n,onFlip:i}){return s?he.jsxs("div",{className:`journal-page journal-page-${t}`,children:[s.chapterStart&&t==="left"?he.jsx("h3",{className:"journal-chapter",children:s.name}):he.jsx("span",{className:"journal-running-head",children:s.name}),s.prints.map((r,o)=>{const{turn:a,shiftX:l,shiftY:c}=Tp(e,o),u=n.has(r.src);return he.jsx("div",{className:`journal-slot journal-slot-${o+1}`,style:{"--turn":`${a}deg`,"--shift-x":`${l}%`,"--shift-y":`${c}%`,"--deal":`${o*.14}s`},children:he.jsxs("div",{className:`journal-card${u?" is-flipped":""}`,children:[he.jsxs("figure",{className:"journal-print","aria-hidden":u||void 0,children:[o===1?he.jsx("span",{className:"journal-clip","aria-hidden":"true"}):he.jsx("span",{className:"journal-tape","aria-hidden":"true"}),he.jsx("img",{src:r.src,alt:`${r.name} artwork ${r.number} of ${r.total}`,loading:"lazy",draggable:!1,"data-preview":!0,tabIndex:u?-1:0,role:"button","aria-label":`Look closer at ${r.name} artwork ${r.number}`}),he.jsxs("figcaption",{children:[r.name," · ",r.number," / ",r.total]})]}),he.jsxs("div",{className:"journal-print-back","aria-hidden":!u||void 0,children:[he.jsx("span",{className:"journal-back-collection",children:r.name}),he.jsxs("span",{className:"journal-back-number",children:["No. ",r.number," of ",r.total]}),he.jsx("span",{className:"journal-back-stamp",children:"traced.it.bye"})]}),he.jsx("button",{type:"button",className:"journal-flip",onClick:()=>i(r.src),"aria-pressed":u,"aria-label":u?`Turn ${r.name} artwork ${r.number} face up`:`Turn ${r.name} artwork ${r.number} over`,children:he.jsx(fp,{size:12})})]})},r.src)})]}):he.jsx("div",{className:`journal-page journal-page-${t} journal-page-blank`})}function Ap({chapters:s,title:e,intro:t,startAt:n,onClose:i}){const r=it.useMemo(()=>bp(s),[s]),o=it.useRef(window.matchMedia("(prefers-reduced-motion: reduce)").matches).current,[a,l]=it.useState(()=>window.innerWidth<760),c=a?1:2,[u,h]=it.useState(()=>{const V=Math.max(0,r.findIndex(F=>F.collection===n));return V-V%(window.innerWidth<760?1:2)}),[f,d]=it.useState(o),[g,x]=it.useState(null),[m,p]=it.useState({x:0,y:0}),[_,v]=it.useState(()=>new Set),[y,C]=it.useState(!o),S=it.useRef(null),A=it.useRef(null),P=it.useRef(null);it.useEffect(()=>{const V=()=>l(window.innerWidth<760);return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),it.useEffect(()=>{const V=window.setTimeout(()=>d(!0),350),F=window.setTimeout(()=>C(!1),2600);return()=>{window.clearTimeout(V),window.clearTimeout(F)}},[]);const B=it.useCallback(V=>v(F=>{const ne=new Set(F);return ne.delete(V)||ne.add(V),ne}),[]);it.useEffect(()=>{h(V=>V-V%c)},[c]);const M=it.useCallback(V=>{const F=Math.max(0,Math.min(r.length-1,V-V%c));if(!(g||F===u)){if(o){h(F);return}x({from:u,to:F,direction:F>u?1:-1}),window.setTimeout(()=>{h(F),x(null)},Sp)}},[u,c,g,o,r.length]);it.useEffect(()=>{var ne;const V=document.activeElement;(ne=S.current)==null||ne.focus();function F(de){if(!document.querySelector(".artwork-preview")){if(de.key==="Escape")i();else if(de.key==="ArrowRight")M(u+c);else if(de.key==="ArrowLeft")M(u-c);else if(de.key==="Tab"&&A.current){const pe=Array.from(A.current.querySelectorAll('button:not(:disabled), [tabindex="0"]')),z=pe[0],Q=pe[pe.length-1];de.shiftKey&&document.activeElement===z?(de.preventDefault(),Q.focus()):!de.shiftKey&&document.activeElement===Q&&(de.preventDefault(),z.focus())}}}return document.addEventListener("keydown",F),()=>{var de;document.removeEventListener("keydown",F),(de=V==null?void 0:V.focus)==null||de.call(V)}},[u,c,M,i]);const T=it.useMemo(()=>s.map(V=>({slug:V.slug,name:V.name,page:r.findIndex(F=>F.collection===V.slug),count:V.images.length})),[s,r]),N=r[g?g.to:u].collection;let L,U,J=null;const H=(V,F)=>he.jsx(Ep,{page:r[V],index:V,side:F,flipped:_,onFlip:B});if(a){if(U=H(g?g.to:u,"right"),g){const V=g.direction>0;U=H(V?g.to:g.from,"right"),J=he.jsxs("div",{className:`journal-leaf journal-leaf-single ${V?"is-forward":"is-back"}`,children:[he.jsx("div",{className:"journal-leaf-face journal-leaf-front",children:H(V?g.from:g.to,"right")}),he.jsx("div",{className:"journal-leaf-face journal-leaf-back",children:he.jsx("div",{className:"journal-page journal-page-left journal-page-blank"})})]})}}else if(g){const V=g.direction>0;L=H(V?g.from:g.to,"left"),U=H(V?g.to+1:g.from+1,"right"),J=he.jsxs("div",{className:`journal-leaf ${V?"is-forward":"is-back"}`,children:[he.jsx("div",{className:"journal-leaf-face journal-leaf-front",children:V?H(g.from+1,"right"):H(g.from,"left")}),he.jsx("div",{className:"journal-leaf-face journal-leaf-back",children:V?H(g.to,"left"):H(g.to+1,"right")})]})}else L=H(u,"left"),U=H(u+1,"right");const X=Math.floor(u/c)+1,k=Math.ceil(r.length/c);return he.jsxs("div",{className:"journal-overlay",ref:A,role:"dialog","aria-modal":"true","aria-labelledby":"journal-title",onPointerMove:V=>{o||V.pointerType!=="mouse"||p({x:V.clientX/window.innerWidth-.5,y:V.clientY/window.innerHeight-.5})},children:[he.jsxs("aside",{className:"journal-side",children:[he.jsx("h2",{id:"journal-title",children:e}),he.jsx("p",{children:t}),he.jsx("ol",{className:"journal-chapters",children:T.map(V=>he.jsx("li",{children:he.jsxs("button",{type:"button","aria-current":V.slug===N?"true":void 0,onClick:()=>M(V.page),children:[V.name," ",he.jsx("small",{children:V.count})]})},V.slug))}),he.jsxs("ul",{className:"journal-keys","aria-label":"Controls",children:[he.jsxs("li",{children:[he.jsx("kbd",{children:"← →"}),he.jsx("span",{children:"Turn pages"})]}),he.jsxs("li",{children:[he.jsx("kbd",{children:"Click"}),he.jsx("span",{children:"Look closer"})]}),he.jsxs("li",{children:[he.jsx("kbd",{children:"↻"}),he.jsx("span",{children:"Flip a sketch over"})]}),he.jsxs("li",{children:[he.jsx("kbd",{children:"Esc"}),he.jsx("span",{children:"Back to the desk"})]})]})]}),he.jsx("div",{className:"journal-stage",onPointerDown:V=>{P.current=V.clientX},onPointerUp:V=>{if(P.current===null)return;const F=V.clientX-P.current;P.current=null,Math.abs(F)>50&&M(u+(F<0?c:-c))},children:he.jsxs("div",{className:`journal-book${a?" is-single":""}${y&&f?" is-dealing":""}${f?"":" is-closed"}`,style:{"--tilt-x":m.x,"--tilt-y":m.y},children:[he.jsx("div",{className:"journal-cover","aria-hidden":"true"}),he.jsxs("div",{className:"journal-pages",children:[!a&&L,U,J,he.jsx("span",{className:"journal-spine","aria-hidden":"true"})]}),!o&&he.jsx("div",{className:`journal-front-cover${f?" is-open":""}`,"aria-hidden":"true",children:he.jsx("span",{children:e})}),he.jsx("span",{className:"journal-binder journal-binder-top","aria-hidden":"true"}),he.jsx("span",{className:"journal-binder journal-binder-bottom","aria-hidden":"true"})]})}),he.jsxs("div",{className:"journal-nav",children:[he.jsx("button",{type:"button",onClick:()=>M(u-c),disabled:u===0||!!g,"aria-label":"Previous pages",children:he.jsx(Bf,{size:18})}),he.jsxs("span",{"aria-live":"polite",children:[X," / ",k]}),he.jsx("button",{type:"button",onClick:()=>M(u+c),disabled:u+c>=r.length||!!g,"aria-label":"Next pages",children:he.jsx(vp,{size:18})})]}),he.jsx("button",{ref:S,type:"button",className:"journal-close",onClick:i,"aria-label":"Close the sketchbook and return to the desk",children:he.jsx(hp,{size:20})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="169",Rp=0,Du=1,Cp=2,Gc=1,kf=2,Ti=3,Li=0,vn=1,It=2,Ii=0,ys=1,Ms=2,Nu=3,Uu=4,Pp=5,gs=100,Ip=101,Lp=102,Dp=103,Np=104,Up=200,Fp=201,Op=202,Bp=203,Gl=204,Wl=205,kp=206,zp=207,Hp=208,Vp=209,Gp=210,Wp=211,Xp=212,jp=213,Yp=214,Xl=0,jl=1,Yl=2,lr=3,ql=4,Kl=5,$l=6,Zl=7,Ta=0,qp=1,Kp=2,Qi=0,zf=1,Hf=2,Vf=3,Wc=4,$p=5,Gf=6,Wf=7,Fu="attached",Zp="detached",Xf=300,cr=301,ur=302,fa=303,Jl=304,Ea=306,Vn=1e3,fi=1001,da=1002,gn=1003,jf=1004,Vr=1005,An=1006,sa=1007,Ci=1008,Di=1009,Yf=1010,qf=1011,Jr=1012,Xc=1013,ws=1014,Qn=1015,pi=1016,jc=1017,Yc=1018,hr=1020,Kf=35902,$f=1021,Zf=1022,zn=1023,Jf=1024,Qf=1025,ir=1026,fr=1027,qc=1028,Kc=1029,ed=1030,$c=1031,Zc=1033,ra=33776,oa=33777,aa=33778,la=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,hc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,vc=37819,xc=37820,_c=37821,ca=36492,yc=36494,Mc=36495,td=36283,wc=36284,Sc=36285,bc=36286,Qr=2300,eo=2301,Va=2302,Ou=2400,Bu=2401,ku=2402,Jp=2500,Qp=0,nd=1,Tc=2,em=3200,id=3201,Aa=0,tm=1,Ki="",_t="srgb",rn="srgb-linear",Jc="display-p3",Ra="display-p3-linear",pa="linear",Pt="srgb",ma="rec709",ga="p3",Is=7680,zu=519,nm=512,im=513,sm=514,sd=515,rm=516,om=517,am=518,lm=519,Ec=35044,Hu="300 es",Pi=2e3,va=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const Xr=Math.PI/180,dr=180/Math.PI;function ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function Qc(s,e){return(s%e+e)%e}function cm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function um(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function hm(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function fm(s,e=1){return e-Math.abs(Qc(s,e*2)-e)}function dm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gm(s,e){return s+Math.random()*(e-s)}function vm(s){return s*(.5-Math.random())}function xm(s){s!==void 0&&(Vu=s);let e=Vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(s){return s*Xr}function ym(s){return s*dr}function Mm(s){return(s&s-1)===0&&s!==0}function wm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const un={DEG2RAD:Xr,RAD2DEG:dr,generateUUID:ti,clamp:Jt,euclideanModulo:Qc,mapLinear:cm,inverseLerp:um,lerp:jr,damp:hm,pingpong:fm,smoothstep:dm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:vm,seededRandom:xm,degToRad:_m,radToDeg:ym,isPowerOfTwo:Mm,ceilPowerOfTwo:wm,floorPowerOfTwo:Sm,setQuaternionFromProperEuler:bm,normalize:St,denormalize:Jn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,r,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],v=i[4],y=i[7],C=i[2],S=i[5],A=i[8];return r[0]=o*x+a*_+l*C,r[3]=o*m+a*v+l*S,r[6]=o*p+a*y+l*A,r[1]=c*x+u*_+h*C,r[4]=c*m+u*v+h*S,r[7]=c*p+u*y+h*A,r[2]=f*x+d*_+g*C,r[5]=f*m+d*v+g*S,r[8]=f*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new rt;function rd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function to(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tm(){const s=to("canvas");return s.style.display="block",s}const Gu={};function ua(s){s in Gu||(Gu[s]=!0,console.warn(s))}function Em(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Am(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wu=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xu=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[rn]:{transfer:pa,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[_t]:{transfer:Pt,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ra]:{transfer:pa,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Xu),fromReference:s=>s.applyMatrix3(Wu)},[Jc]:{transfer:Pt,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Xu),fromReference:s=>s.applyMatrix3(Wu).convertLinearToSRGB()}},Cm=new Set([rn,Ra]),ot={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Tr[e].toReference,i=Tr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Tr[s].primaries},getTransfer:function(s){return s===Ki?pa:Tr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Tr[e].luminanceCoefficients)}};function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class Pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=to("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Im=0;class od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xa(i[o].image)):r.push(Xa(i[o]))}else r=Xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lm=0;class $t extends vr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=fi,i=fi,r=An,o=Ci,a=zn,l=Di,c=$t.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ti(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Xf;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,C=(p+1)/2,S=(u+f)/4,A=(h+x)/4,P=(g+m)/4;return v>y&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=A/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=P/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=P/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ad extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nm extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),S=Math.atan2(C,p*_);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const y=a*_;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new w,ju=new bt;class ni{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),vo.subVectors(this.max,Er),Ds.subVectors(e.a,Er),Ns.subVectors(e.b,Er),Us.subVectors(e.c,Er),Bi.subVectors(Ns,Ds),ki.subVectors(Us,Ns),as.subVectors(Ds,Us);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-as.z,as.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-as.y,as.x,0];return!Ya(t,Ds,Ns,Us,vo)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Ds,Ns,Us,vo))?!1:(xo.crossVectors(Bi,ki),t=[xo.x,xo.y,xo.z],Ya(t,Ds,Ns,Us,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new w,new w,new w,new w,new w,new w,new w,new w],Xn=new w,go=new ni,Ds=new w,Ns=new w,Us=new w,Bi=new w,ki=new w,as=new w,Er=new w,vo=new w,xo=new w,ls=new w;function Ya(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ls.fromArray(s,r);const a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Um=new ni,Ar=new w,qa=new w;class mi{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Um.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(qa)),this.expandByPoint(Ar.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new w,Ka=new w,_o=new w,zi=new w,$a=new w,yo=new w,Za=new w;class lo{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=zi.dot(this.direction),l=-zi.dot(_o),c=zi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ka).addScaledVector(_o,f),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,r){$a.subVectors(t,e),yo.subVectors(n,e),Za.crossVectors($a,yo);let o=this.direction.dot(Za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(yo.crossVectors(zi,yo));if(l<0)return null;const c=a*this.direction.dot($a.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Om)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Hi.crossVectors(n,Tn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Hi.crossVectors(n,Tn)),Hi.normalize(),Mo.crossVectors(Tn,Hi),i[0]=Hi.x,i[4]=Mo.x,i[8]=Tn.x,i[1]=Hi.y,i[5]=Mo.y,i[9]=Tn.y,i[2]=Hi.z,i[6]=Mo.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],v=n[7],y=n[11],C=n[15],S=i[0],A=i[4],P=i[8],B=i[12],M=i[1],T=i[5],N=i[9],L=i[13],U=i[2],J=i[6],H=i[10],X=i[14],k=i[3],V=i[7],F=i[11],ne=i[15];return r[0]=o*S+a*M+l*U+c*k,r[4]=o*A+a*T+l*J+c*V,r[8]=o*P+a*N+l*H+c*F,r[12]=o*B+a*L+l*X+c*ne,r[1]=u*S+h*M+f*U+d*k,r[5]=u*A+h*T+f*J+d*V,r[9]=u*P+h*N+f*H+d*F,r[13]=u*B+h*L+f*X+d*ne,r[2]=g*S+x*M+m*U+p*k,r[6]=g*A+x*T+m*J+p*V,r[10]=g*P+x*N+m*H+p*F,r[14]=g*B+x*L+m*X+p*ne,r[3]=_*S+v*M+y*U+C*k,r[7]=_*A+v*T+y*J+C*V,r[11]=_*P+v*N+y*H+C*F,r[15]=_*B+v*L+y*X+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,C=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,S=t*_+n*v+i*y+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=_*A,e[1]=(x*f*r-h*m*r-x*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=v*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=y*A,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*A,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=C*A,e[13]=(u*x*i-g*h*i+g*n*f-t*x*f-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,_=l*c,v=l*u,y=l*h,C=n.x,S=n.y,A=n.z;return i[0]=(1-(x+p))*C,i[1]=(d+y)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(m+_)*S,i[7]=0,i[8]=(g+v)*A,i[9]=(m-_)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fs.set(i[0],i[1],i[2]).length();const o=Fs.set(i[4],i[5],i[6]).length(),a=Fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/r,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Pi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===Pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===va)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Pi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let g,x;if(a===Pi)g=(o+r)*h,x=-2*h;else if(a===va)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fs=new w,jn=new Ie,Fm=new w(0,0,0),Om=new w(1,1,1),Hi=new w,Mo=new w,Tn=new w,Yu=new Ie,qu=new bt;class Kt{constructor(e=0,t=0,n=0,i=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bm=0;const Ku=new w,Os=new bt,Mi=new Ie,wo=new w,Rr=new w,km=new w,zm=new bt,$u=new w(1,0,0),Zu=new w(0,1,0),Ju=new w(0,0,1),Qu={type:"added"},Hm={type:"removed"},Bs={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Tt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new w,t=new Kt,n=new bt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new rt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Rr,wo,this.up):Mi.lookAt(wo,Rr,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(Mi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new w(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new w,wi=new w,Qa=new w,Si=new w,ks=new w,zs=new w,eh=new w,el=new w,tl=new w,nl=new w,il=new dt,sl=new dt,rl=new dt;class Bn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yn.subVectors(i,t),wi.subVectors(n,t),Qa.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(wi),l=Yn.dot(Qa),c=wi.dot(wi),u=wi.dot(Qa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),wi.subVectors(e,t),Yn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Yn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ks.subVectors(i,n),zs.subVectors(r,n),el.subVectors(e,n);const l=ks.dot(el),c=zs.dot(el);if(l<=0&&c<=0)return t.copy(n);tl.subVectors(e,i);const u=ks.dot(tl),h=zs.dot(tl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ks,o);nl.subVectors(e,r);const d=ks.dot(nl),g=zs.dot(nl);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(zs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return eh.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(eh,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},So={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Qc(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ot.fromWorkingColorSpace(cn.copy(this),e),Math.round(Jt(cn.r*255,0,255))*65536+Math.round(Jt(cn.g*255,0,255))*256+Math.round(Jt(cn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,r=cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=_t){ot.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(So);const n=jr(Vi.h,So.h,t),i=jr(Vi.s,So.s,t),r=jr(Vi.l,So.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new ce;ce.NAMES=ld;let Vm=0;class Rn extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ys,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ot extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new w,bo=new re;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class tu extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gm=0;const Ln=new Ie,al=new Tt,Hs=new w,En=new ni,Cr=new ni,tn=new w;class Et extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rd(e)?cd:tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(En.min,Cr.min),En.expandByPoint(tn),tn.addVectors(En.max,Cr.max),En.expandByPoint(tn)):(En.expandByPoint(Cr.min),En.expandByPoint(Cr.max))}En.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),tn.add(Hs)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new w,l[P]=new w;const c=new w,u=new w,h=new w,f=new re,d=new re,g=new re,x=new w,m=new w;function p(P,B,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,B),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,B),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[P].add(x),a[B].add(x),a[M].add(x),l[P].add(m),l[B].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,B=_.length;P<B;++P){const M=_[P],T=M.start,N=M.count;for(let L=T,U=T+N;L<U;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new w,y=new w,C=new w,S=new w;function A(P){C.fromBufferAttribute(i,P),S.copy(C);const B=a[P];v.copy(B),v.sub(C.multiplyScalar(C.dot(B))).normalize(),y.crossVectors(S,B);const T=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,T)}for(let P=0,B=_.length;P<B;++P){const M=_[P],T=M.start,N=M.count;for(let L=T,U=T+N;L<U;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new At(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new Ie,cs=new lo,To=new mi,nh=new w,Eo=new w,Ao=new w,Ro=new w,ll=new w,Co=new w,ih=new w,Po=new w;class O extends Tt{constructor(e=new Et,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ll.fromBufferAttribute(h,e),o?Co.addScaledVector(ll,u):Co.addScaledVector(ll.sub(t),u))}t.add(Co)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(To.containsPoint(cs.origin)===!1&&(cs.intersectSphere(To,nh)===null||cs.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(r).invert(),cs.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,C=v;y<C;y+=3){const S=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);i=Io(this,p,e,n,c,u,h,S,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Io(this,o,e,n,c,u,h,_,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,C=v;y<C;y+=3){const S=y,A=y+1,P=y+2;i=Io(this,p,e,n,c,u,h,S,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=m,v=m+1,y=m+2;i=Io(this,o,e,n,c,u,h,_,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Wm(s,e,t,n,i,r,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Li,a),l===null)return null;Po.copy(a),Po.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:s}}function Io(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Eo),s.getVertexPosition(l,Ao),s.getVertexPosition(c,Ro);const u=Wm(s,e,t,n,Eo,Ao,Ro,ih);if(u){const h=new w;Bn.getBarycoord(ih,Eo,Ao,Ro,h),i&&(u.uv=Bn.getInterpolatedAttribute(i,a,l,c,h,new re)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new w,materialIndex:0};Bn.getNormal(Eo,Ao,Ro,f.normal),u.face=f,u.barycoord=h}return u}class nt extends Et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,p,_,v,y,C,S,A,P,B){const M=y/A,T=C/P,N=y/2,L=C/2,U=S/2,J=A+1,H=P+1;let X=0,k=0;const V=new w;for(let F=0;F<H;F++){const ne=F*T-L;for(let de=0;de<J;de++){const pe=de*M-N;V[x]=pe*_,V[m]=ne*v,V[p]=U,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=S>0?1:-1,u.push(V.x,V.y,V.z),h.push(de/A),h.push(1-F/P),X+=1}}for(let F=0;F<P;F++)for(let ne=0;ne<A;ne++){const de=f+ne+J*F,pe=f+ne+J*(F+1),z=f+(ne+1)+J*(F+1),Q=f+(ne+1)+J*F;l.push(de,pe,Q),l.push(pe,z,Q),k+=6}a.addGroup(d,k,B),d+=k,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(s){const e={};for(let t=0;t<s.length;t++){const n=pr(s[t]);for(const i in n)e[i]=n[i]}return e}function Xm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ud(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const mr={clone:pr,merge:dn};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new w,sh=new re,rh=new re;class sn extends hd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,sh,rh),t.subVectors(rh,sh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class qm extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Vs,Gs,e,t);i.layers=this.layers,this.add(i);const r=new sn(Vs,Gs,e,t);r.layers=this.layers,this.add(r);const o=new sn(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new sn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new sn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new sn(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends $t{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Km extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nt(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Ii});r.uniforms.tEquirect.value=t;const o=new O(i,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=An),new qm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cl=new w,$m=new w,Zm=new rt;class Ai{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cl.subVectors(n,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zm.getNormalMatrix(e),i=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new mi,Lo=new w;class nu{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-d,y-p).normalize(),n[1].setComponents(l+r,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+_).normalize(),n[3].setComponents(l-o,f-u,m-g,y-_).normalize(),n[4].setComponents(l-a,f-h,m-x,y-v).normalize(),t===Pi)n[5].setComponents(l+a,f+h,m+x,y+v).normalize();else if(t===va)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lo.x=i.normal.x>0?e.max.x:e.min.x,Lo.y=i.normal.y>0?e.max.y:e.min.y,Lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jm(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Ft extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*f-o;for(let v=0;v<c;v++){const y=v*h-r;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const v=_+c*p,y=_+c*(p+1),C=_+1+c*(p+1),S=_+1+c*p;d.push(v,y,S),d.push(y,C,S)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ov=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Qm,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:u0,bsdfs:h0,iridescence_fragment:f0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:_0,color_pars_vertex:y0,color_vertex:M0,common:w0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:b0,displacementmap_pars_vertex:T0,displacementmap_vertex:E0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:I0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:F0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:k0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:j0,lights_toon_pars_fragment:Y0,lights_phong_fragment:q0,lights_phong_pars_fragment:K0,lights_physical_fragment:$0,lights_physical_pars_fragment:Z0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphinstance_vertex:hg,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:_g,normal_vertex:yg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Tg,opaque_fragment:Eg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Ig,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:kg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:jg,transmission_pars_fragment:Yg,uv_pars_fragment:qg,uv_pars_vertex:Kg,uv_vertex:$g,worldpos_vertex:Zg,background_vert:Jg,background_frag:Qg,backgroundCube_vert:ev,backgroundCube_frag:tv,cube_vert:nv,cube_frag:iv,depth_vert:sv,depth_frag:rv,distanceRGBA_vert:ov,distanceRGBA_frag:av,equirect_vert:lv,equirect_frag:cv,linedashed_vert:uv,linedashed_frag:hv,meshbasic_vert:fv,meshbasic_frag:dv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:vv,meshnormal_vert:xv,meshnormal_frag:_v,meshphong_vert:yv,meshphong_frag:Mv,meshphysical_vert:wv,meshphysical_frag:Sv,meshtoon_vert:bv,meshtoon_frag:Tv,points_vert:Ev,points_frag:Av,shadow_vert:Rv,shadow_frag:Cv,sprite_vert:Pv,sprite_frag:Iv},Ee={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},hi={basic:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ce(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:dn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:dn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ce(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:dn([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:dn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:dn([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:dn([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:dn([Ee.common,Ee.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:dn([Ee.lights,Ee.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};hi.physical={uniforms:dn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Do={r:0,b:0,g:0},hs=new Kt,Lv=new Ie;function Dv(s,e,t,n,i,r,o){const a=new ce(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ea)?(u===void 0&&(u=new O(new nt(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:pr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hs.copy(v.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(hs)),u.material.toneMapped=ot.getTransfer(y.colorSpace)!==Pt,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new O(new Ft(2,2),new Vt({name:"BackgroundMaterial",uniforms:pr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==Pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Do,ud(s)),n.buffers.color.setClear(Do.r,Do.g,Do.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Nv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,T,N,L,U){let J=!1;const H=h(L,N,T);r!==H&&(r=H,c(r.object)),J=d(M,L,N,U),J&&g(M,L,N,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(M,T,N,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,T,N){const L=N.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let J=U[T.id];J===void 0&&(J={},U[T.id]=J);let H=J[L];return H===void 0&&(H=f(l()),J[L]=H),H}function f(M){const T=[],N=[],L=[];for(let U=0;U<t;U++)T[U]=0,N[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,T,N,L){const U=r.attributes,J=T.attributes;let H=0;const X=N.getAttributes();for(const k in X)if(X[k].location>=0){const F=U[k];let ne=J[k];if(ne===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),F===void 0||F.attribute!==ne||ne&&F.data!==ne.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(M,T,N,L){const U={},J=T.attributes;let H=0;const X=N.getAttributes();for(const k in X)if(X[k].location>=0){let F=J[k];F===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));const ne={};ne.attribute=F,F&&F.data&&(ne.data=F.data),U[k]=ne,H++}r.attributes=U,r.attributesNum=H,r.index=L}function x(){const M=r.newAttributes;for(let T=0,N=M.length;T<N;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const N=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;N[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),U[M]!==T&&(s.vertexAttribDivisor(M,T),U[M]=T)}function _(){const M=r.newAttributes,T=r.enabledAttributes;for(let N=0,L=T.length;N<L;N++)T[N]!==M[N]&&(s.disableVertexAttribArray(N),T[N]=0)}function v(M,T,N,L,U,J,H){H===!0?s.vertexAttribIPointer(M,T,N,U,J):s.vertexAttribPointer(M,T,N,L,U,J)}function y(M,T,N,L){x();const U=L.attributes,J=N.getAttributes(),H=T.defaultAttributeValues;for(const X in J){const k=J[X];if(k.location>=0){let V=U[X];if(V===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const F=V.normalized,ne=V.itemSize,de=e.get(V);if(de===void 0)continue;const pe=de.buffer,z=de.type,Q=de.bytesPerElement,ge=z===s.INT||z===s.UNSIGNED_INT||V.gpuType===Xc;if(V.isInterleavedBufferAttribute){const me=V.data,Be=me.stride,He=V.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)p(k.location+Ve,me.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)m(k.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ve=0;Ve<k.locationSize;Ve++)v(k.location+Ve,ne/k.locationSize,z,F,Be*Q,(He+ne/k.locationSize*Ve)*Q,ge)}else{if(V.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)p(k.location+me,V.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let me=0;me<k.locationSize;me++)m(k.location+me);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let me=0;me<k.locationSize;me++)v(k.location+me,ne/k.locationSize,z,F,ne*Q,ne/k.locationSize*me*Q,ge)}}else if(H!==void 0){const F=H[X];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(k.location,F);break;case 3:s.vertexAttrib3fv(k.location,F);break;case 4:s.vertexAttrib4fv(k.location,F);break;default:s.vertexAttrib1fv(k.location,F)}}}}_()}function C(){P();for(const M in n){const T=n[M];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[M.id]}function A(M){for(const T in n){const N=n[T];if(N[M.id]===void 0)continue;const L=N[M.id];for(const U in L)u(L[U].object),delete L[U];delete N[M.id]}}function P(){B(),o=!0,r!==i&&(r=i,c(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Uv(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==zn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:S}}function Ov(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ai,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,v=_*4;let y=p.clippingState||null;l.value=y,y=u(g,f,v,d);for(let C=0;C!==v;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Bv(s){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=cr:a===Jl&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===Jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Km(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ca extends hd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,oh=[.125,.215,.35,.446,.526,.582],vs=20,ul=new Ca,ah=new ce;let hl=null,fl=0,dl=0,pl=!1;const ms=(1+Math.sqrt(5))/2,Ws=1/ms,lh=[new w(-ms,Ws,0),new w(ms,Ws,0),new w(-Ws,0,ms),new w(Ws,0,ms),new w(0,ms,-Ws),new w(0,ms,Ws),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,fl,dl),this._renderer.xr.enabled=pl,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:pi,format:zn,colorSpace:rn,depthBuffer:!1},i=uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(r)),this._blurMaterial=zv(r,e,t)}return i}_compileMaterial(e){const t=new O(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ah),u.toneMapping=Qi,u.autoClear=!1;const d=new Ot({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new O(new nt,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(ah),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;No(i,_*v,p>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cr||e.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;No(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(i-r-1)%lh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new O(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let _=0;for(let A=0;A<vs;++A){const P=A/x,B=Math.exp(-P*P/2);p.push(B),A===0?_+=B:A<m&&(_+=2*B)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[i],C=3*y*(i>v-er?i-v+er:0),S=4*(this._cubeSize-y);No(t,C,S,3*y,2*y),l.setRenderTarget(t),l.render(h,ul)}}function kv(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-er?l=oh[o-s+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let S=0;S<d;S++){const A=S%3*2/3-1,P=S>2?0:-1,B=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(B,x*g*S),v.set(f,m*g*S);const M=[S,S,S,S,S,S];y.set(M,p*g*S)}const C=new Et;C.setAttribute("position",new At(_,x)),C.setAttribute("uv",new At(v,m)),C.setAttribute("faceIndex",new At(y,p)),e.push(C),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uh(s,e,t){const n=new Hn(s,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zv(s,e,t){const n=new Float32Array(vs),i=new w(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function hh(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===Jl,u=l===cr||l===ur;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ch(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ch(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ua("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gv(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){const C=_[v+0],S=_[v+1],A=_[v+2];f.push(C,S,S,A,A,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const C=v+0,S=v+1,A=v+2;f.push(C,S,S,A,A,C)}}else return;const m=new(rd(f)?cd:tu)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Wv(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_];for(let _=0;_<x.length;_++)t.update(p,n,x[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jv(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let B=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*C*4*h),A=new ad(S,y,C,h);A.type=Qn,A.needsUpdate=!0;const P=v*4;for(let M=0;M<h;M++){const T=m[M],N=p[M],L=_[M],U=y*C*4*M;for(let J=0;J<T.count;J++){const H=J*P;d===!0&&(i.fromBufferAttribute(T,J),S[U+H+0]=i.x,S[U+H+1]=i.y,S[U+H+2]=i.z,S[U+H+3]=0),g===!0&&(i.fromBufferAttribute(N,J),S[U+H+4]=i.x,S[U+H+5]=i.y,S[U+H+6]=i.z,S[U+H+7]=0),x===!0&&(i.fromBufferAttribute(L,J),S[U+H+8]=i.x,S[U+H+9]=i.y,S[U+H+10]=i.z,S[U+H+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new re(y,C)},n.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Yv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class pd extends $t{constructor(e,t,n,i,r,o,a,l,c,u=ir){if(u!==ir&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=ws),n===void 0&&u===fr&&(n=hr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const md=new $t,dh=new pd(1,1),gd=new ad,vd=new Nm,xd=new fd,ph=[],mh=[],gh=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function xr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ph[i];if(r===void 0&&(r=new Float32Array(i),ph[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pa(s,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function Jv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;xh.set(n),s.uniformMatrix2fv(this.addr,!1,xh),en(t,n)}}function Qv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;vh.set(n),s.uniformMatrix3fv(this.addr,!1,vh),en(t,n)}}function ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gh.set(n),s.uniformMatrix4fv(this.addr,!1,gh),en(t,n)}}function tx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(dh.compareFunction=sd,r=dh):r=md,t.setTexture2D(e||r,i)}function ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vd,i)}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xd,i)}function fx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gd,i)}function dx(s){switch(s){case 5126:return qv;case 35664:return Kv;case 35665:return $v;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return fx}}function px(s,e){s.uniform1fv(this.addr,e)}function mx(s,e){const t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function gx(s,e){const t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function vx(s,e){const t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function xx(s,e){const t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _x(s,e){const t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yx(s,e){const t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mx(s,e){s.uniform1iv(this.addr,e)}function wx(s,e){s.uniform2iv(this.addr,e)}function Sx(s,e){s.uniform3iv(this.addr,e)}function bx(s,e){s.uniform4iv(this.addr,e)}function Tx(s,e){s.uniform1uiv(this.addr,e)}function Ex(s,e){s.uniform2uiv(this.addr,e)}function Ax(s,e){s.uniform3uiv(this.addr,e)}function Rx(s,e){s.uniform4uiv(this.addr,e)}function Cx(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||md,r[o])}function Px(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vd,r[o])}function Ix(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xd,r[o])}function Lx(s,e,t){const n=this.cache,i=e.length,r=Pa(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||gd,r[o])}function Dx(s){switch(s){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return vx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return wx;case 35668:case 35672:return Sx;case 35669:case 35673:return bx;case 5125:return Tx;case 36294:return Ex;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}}class Fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function _h(s,e){s.seq.push(e),s.map[e.id]=e}function Ox(s,e,t){const n=s.name,i=n.length;for(ml.lastIndex=0;;){const r=ml.exec(n),o=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_h(t,c===void 0?new Nx(a,s,e):new Ux(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Fx(a),_h(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ox(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function yh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bx=37297;let kx=0;function zx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hx(s){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(s);let n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),s){case rn:case Ra:return[n,"LinearTransferOETF"];case _t:case Jc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Mh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zx(s.getShaderSource(e),o)}else return i}function Vx(s,e){const t=Hx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gx(s,e){let t;switch(e){case zf:t="Linear";break;case Hf:t="Reinhard";break;case Vf:t="Cineon";break;case Wc:t="ACESFilmic";break;case Gf:t="AgX";break;case Wf:t="Neutral";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new w;function Wx(){ot.getLuminanceCoefficients(Uo);const s=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function jx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Gr(s){return s!==""}function wh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(s){return s.replace(qx,$x)}const Kx=new Map;function $x(s,e){let t=lt[e];if(t===void 0){const n=Kx.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(s){return s.replace(Zx,Jx)}function Jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Th(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function e_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cr:case ur:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function n_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ta:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case Kp:e="ENVMAP_BLENDING_ADD";break}return e}function i_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function s_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Qx(t),c=e_(t),u=t_(t),h=n_(t),f=i_(t),d=Xx(t),g=jx(r),x=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Ac(o),o=wh(o,t),o=Sh(o,t),a=Ac(a),a=wh(a,t),a=Sh(a,t),o=bh(o),a=bh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+m+o,y=_+p+a,C=yh(i,i.VERTEX_SHADER,v),S=yh(i,i.FRAGMENT_SHADER,y);i.attachShader(x,C),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(T){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(C).trim(),U=i.getShaderInfoLog(S).trim();let J=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,S);else{const X=Mh(i,C,"vertex"),k=Mh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+X+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||U==="")&&(H=!1);H&&(T.diagnostics={runnable:J,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(C),i.deleteShader(S),P=new ha(i,x),B=Yx(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let B;this.getAttributes=function(){return B===void 0&&A(this),B};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Bx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=S,this}let r_=0;class o_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new a_(e),t.set(e,n)),n}}class a_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function l_(s,e,t,n,i,r,o){const a=new eu,l=new o_,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,T,N,L,U){const J=L.fog,H=U.geometry,X=M.isMeshStandardMaterial?L.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),V=k&&k.mapping===Ea?k.image.height:null,F=x[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ne!==void 0?ne.length:0;let pe=0;H.morphAttributes.position!==void 0&&(pe=1),H.morphAttributes.normal!==void 0&&(pe=2),H.morphAttributes.color!==void 0&&(pe=3);let z,Q,ge,me;if(F){const Gt=hi[F];z=Gt.vertexShader,Q=Gt.fragmentShader}else z=M.vertexShader,Q=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const Be=s.getRenderTarget(),He=U.isInstancedMesh===!0,Ve=U.isBatchedMesh===!0,We=!!M.map,je=!!M.matcap,D=!!k,Lt=!!M.aoMap,Ze=!!M.lightMap,at=!!M.bumpMap,Ge=!!M.normalMap,vt=!!M.displacementMap,Xe=!!M.emissiveMap,E=!!M.metalnessMap,b=!!M.roughnessMap,j=M.anisotropy>0,ie=M.clearcoat>0,fe=M.dispersion>0,oe=M.iridescence>0,Fe=M.sheen>0,Se=M.transmission>0,Le=j&&!!M.anisotropyMap,ct=ie&&!!M.clearcoatMap,ve=ie&&!!M.clearcoatNormalMap,De=ie&&!!M.clearcoatRoughnessMap,qe=oe&&!!M.iridescenceMap,$e=oe&&!!M.iridescenceThicknessMap,Ne=Fe&&!!M.sheenColorMap,st=Fe&&!!M.sheenRoughnessMap,Je=!!M.specularMap,Mt=!!M.specularColorMap,G=!!M.specularIntensityMap,Pe=Se&&!!M.transmissionMap,ee=Se&&!!M.thicknessMap,le=!!M.gradientMap,be=!!M.alphaMap,Ae=M.alphaTest>0,tt=!!M.alphaHash,Rt=!!M.extensions;let kt=Qi;M.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(kt=s.toneMapping);const ut={shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:Q,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:rn,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:je,envMap:D,envMapMode:D&&k.mapping,envMapCubeUVHeight:V,aoMap:Lt,lightMap:Ze,bumpMap:at,normalMap:Ge,displacementMap:d&&vt,emissiveMap:Xe,normalMapObjectSpace:Ge&&M.normalMapType===tm,normalMapTangentSpace:Ge&&M.normalMapType===Aa,metalnessMap:E,roughnessMap:b,anisotropy:j,anisotropyMap:Le,clearcoat:ie,clearcoatMap:ct,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:fe,iridescence:oe,iridescenceMap:qe,iridescenceThicknessMap:$e,sheen:Fe,sheenColorMap:Ne,sheenRoughnessMap:st,specularMap:Je,specularColorMap:Mt,specularIntensityMap:G,transmission:Se,transmissionMap:Pe,thicknessMap:ee,gradientMap:le,opaque:M.transparent===!1&&M.blending===ys&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:Ae,alphaHash:tt,combine:M.combine,mapUv:We&&m(M.map.channel),aoMapUv:Lt&&m(M.aoMap.channel),lightMapUv:Ze&&m(M.lightMap.channel),bumpMapUv:at&&m(M.bumpMap.channel),normalMapUv:Ge&&m(M.normalMap.channel),displacementMapUv:vt&&m(M.displacementMap.channel),emissiveMapUv:Xe&&m(M.emissiveMap.channel),metalnessMapUv:E&&m(M.metalnessMap.channel),roughnessMapUv:b&&m(M.roughnessMap.channel),anisotropyMapUv:Le&&m(M.anisotropyMap.channel),clearcoatMapUv:ct&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:st&&m(M.sheenRoughnessMap.channel),specularMapUv:Je&&m(M.specularMap.channel),specularColorMapUv:Mt&&m(M.specularColorMap.channel),specularIntensityMapUv:G&&m(M.specularIntensityMap.channel),transmissionMapUv:Pe&&m(M.transmissionMap.channel),thicknessMapUv:ee&&m(M.thicknessMap.channel),alphaMapUv:be&&m(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ge||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(We||be),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function _(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(T,M),y(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function C(M){const T=x[M.type];let N;if(T){const L=hi[T];N=mr.clone(L.uniforms)}else N=M.uniforms;return N}function S(M,T){let N;for(let L=0,U=u.length;L<U;L++){const J=u[L];if(J.cacheKey===T){N=J,++N.usedTimes;break}}return N===void 0&&(N=new s_(s,T,M,r),u.push(N)),N}function A(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:C,acquireProgram:S,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:B}}function c_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ah(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||u_),n.length>1&&n.sort(f||Eh),i.length>1&&i.sort(f||Eh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function h_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ah,s.set(n,[o])):i>=r.length?(o=new Ah,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ce};break;case"SpotLight":t={position:new w,direction:new w,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function d_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let p_=0;function m_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function g_(s){const e=new f_,t=d_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new Ie,o=new Ie;function a(c){let u=0,h=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,v=0,y=0,C=0,S=0,A=0;c.sort(m_);for(let B=0,M=c.length;B<M;B++){const T=c[B],N=T.color,L=T.intensity,U=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*L,h+=N.g*L,f+=N.b*L;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],L);A++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,k=t.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=T.shadow.matrix,_++}n.directional[d]=H,d++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(N).multiplyScalar(L),H.distance=U,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;const X=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,X.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[x]=X.matrix,T.castShadow){const k=t.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=J,y++}x++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(N).multiplyScalar(L),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const X=T.shadow,k=t.get(T);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=T.shadow.matrix,v++}n.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(L),H.groundColor.copy(T.groundColor).multiplyScalar(L),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=A,n.version=p_++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const v=c[p];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Rh(s){const e=new g_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Rh(s),e.set(i,[a])):r>=o.length?(a=new Rh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class _d extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x_ extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M_(s,e,t){let n=new nu;const i=new re,r=new re,o=new dt,a=new _d({depthPacking:id}),l=new x_,c={},u=t.maxTextureSize,h={[Li]:vn,[vn]:Li,[It]:It},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:__,fragmentShader:y_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new O(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let p=this.type;this.render=function(S,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const B=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ii),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=p!==Ti&&this.type===Ti,U=p===Ti&&this.type!==Ti;for(let J=0,H=S.length;J<H;J++){const X=S[J],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const V=k.getFrameExtents();if(i.multiply(V),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null||L===!0||U===!0){const ne=this.type!==Ti?{minFilter:gn,magFilter:gn}:{};k.map!==null&&k.map.dispose(),k.map=new Hn(i.x,i.y,ne),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const F=k.getViewportCount();for(let ne=0;ne<F;ne++){const de=k.getViewport(ne);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),N.viewport(o),k.updateMatrices(X,ne),n=k.getFrustum(),y(A,P,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Ti&&_(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(B,M,T)};function _(S,A){const P=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Hn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,P,d,x,null)}function v(S,A,P,B){let M=null;const T=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,L=A.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let J=U[L];J===void 0&&(J=M.clone(),U[L]=J,A.addEventListener("dispose",C)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,B===Ti?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=P}return M}function y(S,A,P,B,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ti)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const L=e.update(S),U=S.material;if(Array.isArray(U)){const J=L.groups;for(let H=0,X=J.length;H<X;H++){const k=J[H],V=U[k.materialIndex];if(V&&V.visible){const F=v(S,V,B,M);S.onBeforeShadow(s,S,A,P,L,F,k),s.renderBufferDirect(P,null,L,F,S,k),S.onAfterShadow(s,S,A,P,L,F,k)}}}else if(U.visible){const J=v(S,U,B,M);S.onBeforeShadow(s,S,A,P,L,J,null),s.renderBufferDirect(P,null,L,J,S,null),S.onAfterShadow(s,S,A,P,L,J,null)}}const N=S.children;for(let L=0,U=N.length;L<U;L++)y(N[L],A,P,B,M)}function C(S){S.target.removeEventListener("dispose",C);for(const P in c){const B=c[P],M=S.target.uuid;M in B&&(B[M].dispose(),delete B[M])}}}const w_={[Xl]:jl,[Yl]:$l,[ql]:Zl,[lr]:Kl,[jl]:Xl,[$l]:Yl,[Zl]:ql,[Kl]:lr};function S_(s){function e(){let G=!1;const Pe=new dt;let ee=null;const le=new dt(0,0,0,0);return{setMask:function(be){ee!==be&&!G&&(s.colorMask(be,be,be,be),ee=be)},setLocked:function(be){G=be},setClear:function(be,Ae,tt,Rt,kt){kt===!0&&(be*=Rt,Ae*=Rt,tt*=Rt),Pe.set(be,Ae,tt,Rt),le.equals(Pe)===!1&&(s.clearColor(be,Ae,tt,Rt),le.copy(Pe))},reset:function(){G=!1,ee=null,le.set(-1,0,0,0)}}}function t(){let G=!1,Pe=!1,ee=null,le=null,be=null;return{setReversed:function(Ae){Pe=Ae},setTest:function(Ae){Ae?ge(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!G&&(s.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(Pe&&(Ae=w_[Ae]),le!==Ae){switch(Ae){case Xl:s.depthFunc(s.NEVER);break;case jl:s.depthFunc(s.ALWAYS);break;case Yl:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case ql:s.depthFunc(s.EQUAL);break;case Kl:s.depthFunc(s.GEQUAL);break;case $l:s.depthFunc(s.GREATER);break;case Zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Ae}},setLocked:function(Ae){G=Ae},setClear:function(Ae){be!==Ae&&(s.clearDepth(Ae),be=Ae)},reset:function(){G=!1,ee=null,le=null,be=null}}}function n(){let G=!1,Pe=null,ee=null,le=null,be=null,Ae=null,tt=null,Rt=null,kt=null;return{setTest:function(ut){G||(ut?ge(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(ut){Pe!==ut&&!G&&(s.stencilMask(ut),Pe=ut)},setFunc:function(ut,Gt,zt){(ee!==ut||le!==Gt||be!==zt)&&(s.stencilFunc(ut,Gt,zt),ee=ut,le=Gt,be=zt)},setOp:function(ut,Gt,zt){(Ae!==ut||tt!==Gt||Rt!==zt)&&(s.stencilOp(ut,Gt,zt),Ae=ut,tt=Gt,Rt=zt)},setLocked:function(ut){G=ut},setClear:function(ut){kt!==ut&&(s.clearStencil(ut),kt=ut)},reset:function(){G=!1,Pe=null,ee=null,le=null,be=null,Ae=null,tt=null,Rt=null,kt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,_=null,v=null,y=null,C=null,S=new ce(0,0,0),A=0,P=!1,B=null,M=null,T=null,N=null,L=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=H>=2);let k=null,V={};const F=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),de=new dt().fromArray(F),pe=new dt().fromArray(ne);function z(G,Pe,ee,le){const be=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(G,Ae),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<ee;tt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Pe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Ae}const Q={};Q[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(s.DEPTH_TEST),r.setFunc(lr),Ze(!1),at(Du),ge(s.CULL_FACE),D(Ii);function ge(G){c[G]!==!0&&(s.enable(G),c[G]=!0)}function me(G){c[G]!==!1&&(s.disable(G),c[G]=!1)}function Be(G,Pe){return u[G]!==Pe?(s.bindFramebuffer(G,Pe),u[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(G,Pe){let ee=f,le=!1;if(G){ee=h.get(Pe),ee===void 0&&(ee=[],h.set(Pe,ee));const be=G.textures;if(ee.length!==be.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,tt=be.length;Ae<tt;Ae++)ee[Ae]=s.COLOR_ATTACHMENT0+Ae;ee.length=be.length,le=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,le=!0);le&&s.drawBuffers(ee)}function Ve(G){return d!==G?(s.useProgram(G),d=G,!0):!1}const We={[gs]:s.FUNC_ADD,[Ip]:s.FUNC_SUBTRACT,[Lp]:s.FUNC_REVERSE_SUBTRACT};We[Dp]=s.MIN,We[Np]=s.MAX;const je={[Up]:s.ZERO,[Fp]:s.ONE,[Op]:s.SRC_COLOR,[Gl]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[Hp]:s.DST_COLOR,[kp]:s.DST_ALPHA,[Bp]:s.ONE_MINUS_SRC_COLOR,[Wl]:s.ONE_MINUS_SRC_ALPHA,[Vp]:s.ONE_MINUS_DST_COLOR,[zp]:s.ONE_MINUS_DST_ALPHA,[Wp]:s.CONSTANT_COLOR,[Xp]:s.ONE_MINUS_CONSTANT_COLOR,[jp]:s.CONSTANT_ALPHA,[Yp]:s.ONE_MINUS_CONSTANT_ALPHA};function D(G,Pe,ee,le,be,Ae,tt,Rt,kt,ut){if(G===Ii){g===!0&&(me(s.BLEND),g=!1);return}if(g===!1&&(ge(s.BLEND),g=!0),G!==Pp){if(G!==x||ut!==P){if((m!==gs||v!==gs)&&(s.blendEquation(s.FUNC_ADD),m=gs,v=gs),ut)switch(G){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFunc(s.ONE,s.ONE);break;case Nu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,_=null,y=null,C=null,S.set(0,0,0),A=0,x=G,P=ut}return}be=be||Pe,Ae=Ae||ee,tt=tt||le,(Pe!==m||be!==v)&&(s.blendEquationSeparate(We[Pe],We[be]),m=Pe,v=be),(ee!==p||le!==_||Ae!==y||tt!==C)&&(s.blendFuncSeparate(je[ee],je[le],je[Ae],je[tt]),p=ee,_=le,y=Ae,C=tt),(Rt.equals(S)===!1||kt!==A)&&(s.blendColor(Rt.r,Rt.g,Rt.b,kt),S.copy(Rt),A=kt),x=G,P=!1}function Lt(G,Pe){G.side===It?me(s.CULL_FACE):ge(s.CULL_FACE);let ee=G.side===vn;Pe&&(ee=!ee),Ze(ee),G.blending===ys&&G.transparent===!1?D(Ii):D(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),i.setMask(G.colorWrite);const le=G.stencilWrite;o.setTest(le),le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){B!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),B=G)}function at(G){G!==Rp?(ge(s.CULL_FACE),G!==M&&(G===Du?s.cullFace(s.BACK):G===Cp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),M=G}function Ge(G){G!==T&&(J&&s.lineWidth(G),T=G)}function vt(G,Pe,ee){G?(ge(s.POLYGON_OFFSET_FILL),(N!==Pe||L!==ee)&&(s.polygonOffset(Pe,ee),N=Pe,L=ee)):me(s.POLYGON_OFFSET_FILL)}function Xe(G){G?ge(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function E(G){G===void 0&&(G=s.TEXTURE0+U-1),k!==G&&(s.activeTexture(G),k=G)}function b(G,Pe,ee){ee===void 0&&(k===null?ee=s.TEXTURE0+U-1:ee=k);let le=V[ee];le===void 0&&(le={type:void 0,texture:void 0},V[ee]=le),(le.type!==G||le.texture!==Pe)&&(k!==ee&&(s.activeTexture(ee),k=ee),s.bindTexture(G,Pe||Q[G]),le.type=G,le.texture=Pe)}function j(){const G=V[k];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(G){de.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),de.copy(G))}function Ne(G){pe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),pe.copy(G))}function st(G,Pe){let ee=l.get(Pe);ee===void 0&&(ee=new WeakMap,l.set(Pe,ee));let le=ee.get(G);le===void 0&&(le=s.getUniformBlockIndex(Pe,G.name),ee.set(G,le))}function Je(G,Pe){const le=l.get(Pe).get(G);a.get(Pe)!==le&&(s.uniformBlockBinding(Pe,le,G.__bindingPointIndex),a.set(Pe,le))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},k=null,V={},u={},h=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,_=null,v=null,y=null,C=null,S=new ce(0,0,0),A=0,P=!1,B=null,M=null,T=null,N=null,L=null,de.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ge,disable:me,bindFramebuffer:Be,drawBuffers:He,useProgram:Ve,setBlending:D,setMaterial:Lt,setFlipSided:Ze,setCullFace:at,setLineWidth:Ge,setPolygonOffset:vt,setScissorTest:Xe,activeTexture:E,bindTexture:b,unbindTexture:j,compressedTexImage2D:ie,compressedTexImage3D:fe,texImage2D:De,texImage3D:qe,updateUBOMapping:st,uniformBlockBinding:Je,texStorage2D:ct,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:Fe,compressedTexSubImage2D:Se,compressedTexSubImage3D:Le,scissor:$e,viewport:Ne,reset:Mt}}function Ch(s,e,t,n){const i=b_(n);switch(t){case $f:return s*e;case Jf:return s*e;case Qf:return s*e*2;case qc:return s*e/i.components*i.byteLength;case Kc:return s*e/i.components*i.byteLength;case ed:return s*e*2/i.components*i.byteLength;case $c:return s*e*2/i.components*i.byteLength;case Zf:return s*e*3/i.components*i.byteLength;case zn:return s*e*4/i.components*i.byteLength;case Zc:return s*e*4/i.components*i.byteLength;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(s,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(s,8)*Math.max(e,8)/2;case ic:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ca:case yc:case Mc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case td:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sc:case bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(s){switch(s){case Di:case Yf:return{byteLength:1,components:1};case Jr:case qf:case pi:return{byteLength:2,components:1};case jc:case Yc:return{byteLength:2,components:4};case ws:case Xc:case Qn:return{byteLength:4,components:1};case Kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function T_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return d?new OffscreenCanvas(E,b):to("canvas")}function x(E,b,j){let ie=1;const fe=Xe(E);if((fe.width>j||fe.height>j)&&(ie=j/Math.max(fe.width,fe.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const oe=Math.floor(ie*fe.width),Fe=Math.floor(ie*fe.height);h===void 0&&(h=g(oe,Fe));const Se=b?g(oe,Fe):h;return Se.width=oe,Se.height=Fe,Se.getContext("2d").drawImage(E,0,0,oe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Fe+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==gn&&E.minFilter!==An}function p(E){s.generateMipmap(E)}function _(E,b,j,ie,fe=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=b;if(b===s.RED&&(j===s.FLOAT&&(oe=s.R32F),j===s.HALF_FLOAT&&(oe=s.R16F),j===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(oe=s.R8UI),j===s.UNSIGNED_SHORT&&(oe=s.R16UI),j===s.UNSIGNED_INT&&(oe=s.R32UI),j===s.BYTE&&(oe=s.R8I),j===s.SHORT&&(oe=s.R16I),j===s.INT&&(oe=s.R32I)),b===s.RG&&(j===s.FLOAT&&(oe=s.RG32F),j===s.HALF_FLOAT&&(oe=s.RG16F),j===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(oe=s.RG8UI),j===s.UNSIGNED_SHORT&&(oe=s.RG16UI),j===s.UNSIGNED_INT&&(oe=s.RG32UI),j===s.BYTE&&(oe=s.RG8I),j===s.SHORT&&(oe=s.RG16I),j===s.INT&&(oe=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),j===s.UNSIGNED_INT&&(oe=s.RGB32UI),j===s.BYTE&&(oe=s.RGB8I),j===s.SHORT&&(oe=s.RGB16I),j===s.INT&&(oe=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),j===s.UNSIGNED_INT&&(oe=s.RGBA32UI),j===s.BYTE&&(oe=s.RGBA8I),j===s.SHORT&&(oe=s.RGBA16I),j===s.INT&&(oe=s.RGBA32I)),b===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),b===s.RGBA){const Fe=fe?pa:ot.getTransfer(ie);j===s.FLOAT&&(oe=s.RGBA32F),j===s.HALF_FLOAT&&(oe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(oe=Fe===Pt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(E,b){let j;return E?b===null||b===ws||b===hr?j=s.DEPTH24_STENCIL8:b===Qn?j=s.DEPTH32F_STENCIL8:b===Jr&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ws||b===hr?j=s.DEPTH_COMPONENT24:b===Qn?j=s.DEPTH_COMPONENT32F:b===Jr&&(j=s.DEPTH_COMPONENT16),j}function y(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==gn&&E.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function C(E){const b=E.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&u.delete(b)}function S(E){const b=E.target;b.removeEventListener("dispose",S),B(b)}function A(E){const b=n.get(E);if(b.__webglInit===void 0)return;const j=E.source,ie=f.get(j);if(ie){const fe=ie[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&P(E),Object.keys(ie).length===0&&f.delete(j)}n.remove(E)}function P(E){const b=n.get(E);s.deleteTexture(b.__webglTexture);const j=E.source,ie=f.get(j);delete ie[b.__cacheKey],o.memory.textures--}function B(E){const b=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let fe=0;fe<b.__webglFramebuffer[ie].length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[ie][fe]);else s.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ie]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=E.textures;for(let ie=0,fe=j.length;ie<fe;ie++){const oe=n.get(j[ie]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(j[ie])}n.remove(E)}let M=0;function T(){M=0}function N(){const E=M;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),M+=1,E}function L(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function U(E,b){const j=n.get(E);if(E.isVideoTexture&&Ge(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(j,E,b);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function J(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){pe(j,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function H(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){pe(j,E,b);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function X(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){z(j,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const k={[Vn]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},V={[gn]:s.NEAREST,[jf]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[sa]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},F={[nm]:s.NEVER,[lm]:s.ALWAYS,[im]:s.LESS,[sd]:s.LEQUAL,[sm]:s.EQUAL,[am]:s.GEQUAL,[rm]:s.GREATER,[om]:s.NOTEQUAL};function ne(E,b){if(b.type===Qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===sa||b.magFilter===Vr||b.magFilter===Ci||b.minFilter===An||b.minFilter===sa||b.minFilter===Vr||b.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,k[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,k[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,k[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,V[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==Vr&&b.minFilter!==Ci||b.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function de(E,b){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",C));const ie=b.source;let fe=f.get(ie);fe===void 0&&(fe={},f.set(ie,fe));const oe=L(b);if(oe!==E.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),fe[oe].usedTimes++;const Fe=fe[E.__cacheKey];Fe!==void 0&&(fe[E.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(b)),E.__cacheKey=oe,E.__webglTexture=fe[oe].texture}return j}function pe(E,b,j){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);const fe=de(E,b),oe=b.source;t.bindTexture(ie,E.__webglTexture,s.TEXTURE0+j);const Fe=n.get(oe);if(oe.version!==Fe.__version||fe===!0){t.activeTexture(s.TEXTURE0+j);const Se=ot.getPrimaries(ot.workingColorSpace),Le=b.colorSpace===Ki?null:ot.getPrimaries(b.colorSpace),ct=b.colorSpace===Ki||Se===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ve=x(b.image,!1,i.maxTextureSize);ve=vt(b,ve);const De=r.convert(b.format,b.colorSpace),qe=r.convert(b.type);let $e=_(b.internalFormat,De,qe,b.colorSpace,b.isVideoTexture);ne(ie,b);let Ne;const st=b.mipmaps,Je=b.isVideoTexture!==!0,Mt=Fe.__version===void 0||fe===!0,G=oe.dataReady,Pe=y(b,ve);if(b.isDepthTexture)$e=v(b.format===fr,b.type),Mt&&(Je?t.texStorage2D(s.TEXTURE_2D,1,$e,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,$e,ve.width,ve.height,0,De,qe,null));else if(b.isDataTexture)if(st.length>0){Je&&Mt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,st[0].width,st[0].height);for(let ee=0,le=st.length;ee<le;ee++)Ne=st[ee],Je?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,De,qe,Ne.data):t.texImage2D(s.TEXTURE_2D,ee,$e,Ne.width,Ne.height,0,De,qe,Ne.data);b.generateMipmaps=!1}else Je?(Mt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,ve.width,ve.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,De,qe,ve.data)):t.texImage2D(s.TEXTURE_2D,0,$e,ve.width,ve.height,0,De,qe,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,$e,st[0].width,st[0].height,ve.depth);for(let ee=0,le=st.length;ee<le;ee++)if(Ne=st[ee],b.format!==zn)if(De!==null)if(Je){if(G)if(b.layerUpdates.size>0){const be=Ch(Ne.width,Ne.height,b.format,b.type);for(const Ae of b.layerUpdates){const tt=Ne.data.subarray(Ae*be/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*be/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ae,Ne.width,Ne.height,1,De,tt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ve.depth,De,Ne.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,$e,Ne.width,Ne.height,ve.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ve.depth,De,qe,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,$e,Ne.width,Ne.height,ve.depth,0,De,qe,Ne.data)}else{Je&&Mt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,st[0].width,st[0].height);for(let ee=0,le=st.length;ee<le;ee++)Ne=st[ee],b.format!==zn?De!==null?Je?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,De,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,$e,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,De,qe,Ne.data):t.texImage2D(s.TEXTURE_2D,ee,$e,Ne.width,Ne.height,0,De,qe,Ne.data)}else if(b.isDataArrayTexture)if(Je){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,$e,ve.width,ve.height,ve.depth),G)if(b.layerUpdates.size>0){const ee=Ch(ve.width,ve.height,b.format,b.type);for(const le of b.layerUpdates){const be=ve.data.subarray(le*ee/ve.data.BYTES_PER_ELEMENT,(le+1)*ee/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,ve.width,ve.height,1,De,qe,be)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(b.isData3DTexture)Je?(Mt&&t.texStorage3D(s.TEXTURE_3D,Pe,$e,ve.width,ve.height,ve.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,$e,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(b.isFramebufferTexture){if(Mt)if(Je)t.texStorage2D(s.TEXTURE_2D,Pe,$e,ve.width,ve.height);else{let ee=ve.width,le=ve.height;for(let be=0;be<Pe;be++)t.texImage2D(s.TEXTURE_2D,be,$e,ee,le,0,De,qe,null),ee>>=1,le>>=1}}else if(st.length>0){if(Je&&Mt){const ee=Xe(st[0]);t.texStorage2D(s.TEXTURE_2D,Pe,$e,ee.width,ee.height)}for(let ee=0,le=st.length;ee<le;ee++)Ne=st[ee],Je?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,De,qe,Ne):t.texImage2D(s.TEXTURE_2D,ee,$e,De,qe,Ne);b.generateMipmaps=!1}else if(Je){if(Mt){const ee=Xe(ve);t.texStorage2D(s.TEXTURE_2D,Pe,$e,ee.width,ee.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,qe,ve)}else t.texImage2D(s.TEXTURE_2D,0,$e,De,qe,ve);m(b)&&p(ie),Fe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function z(E,b,j){if(b.image.length!==6)return;const ie=de(E,b),fe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+j);const oe=n.get(fe);if(fe.version!==oe.__version||ie===!0){t.activeTexture(s.TEXTURE0+j);const Fe=ot.getPrimaries(ot.workingColorSpace),Se=b.colorSpace===Ki?null:ot.getPrimaries(b.colorSpace),Le=b.colorSpace===Ki||Fe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,De=[];for(let le=0;le<6;le++)!ct&&!ve?De[le]=x(b.image[le],!0,i.maxCubemapSize):De[le]=ve?b.image[le].image:b.image[le],De[le]=vt(b,De[le]);const qe=De[0],$e=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),st=_(b.internalFormat,$e,Ne,b.colorSpace),Je=b.isVideoTexture!==!0,Mt=oe.__version===void 0||ie===!0,G=fe.dataReady;let Pe=y(b,qe);ne(s.TEXTURE_CUBE_MAP,b);let ee;if(ct){Je&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,qe.width,qe.height);for(let le=0;le<6;le++){ee=De[le].mipmaps;for(let be=0;be<ee.length;be++){const Ae=ee[be];b.format!==zn?$e!==null?Je?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Ae.width,Ae.height,$e,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,st,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Ae.width,Ae.height,$e,Ne,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,st,Ae.width,Ae.height,0,$e,Ne,Ae.data)}}}else{if(ee=b.mipmaps,Je&&Mt){ee.length>0&&Pe++;const le=Xe(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,le.width,le.height)}for(let le=0;le<6;le++)if(ve){Je?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De[le].width,De[le].height,$e,Ne,De[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,De[le].width,De[le].height,0,$e,Ne,De[le].data);for(let be=0;be<ee.length;be++){const tt=ee[be].image[le].image;Je?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,tt.width,tt.height,$e,Ne,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,st,tt.width,tt.height,0,$e,Ne,tt.data)}}else{Je?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,$e,Ne,De[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,$e,Ne,De[le]);for(let be=0;be<ee.length;be++){const Ae=ee[be];Je?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,$e,Ne,Ae.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,st,$e,Ne,Ae.image[le])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),oe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Q(E,b,j,ie,fe,oe){const Fe=r.convert(j.format,j.colorSpace),Se=r.convert(j.type),Le=_(j.internalFormat,Fe,Se,j.colorSpace);if(!n.get(b).__hasExternalTextures){const ve=Math.max(1,b.width>>oe),De=Math.max(1,b.height>>oe);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Le,ve,De,b.depth,0,Fe,Se,null):t.texImage2D(fe,oe,Le,ve,De,0,Fe,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,fe,n.get(j).__webglTexture,0,Ze(b)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,fe,n.get(j).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(E,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer){const ie=b.depthTexture,fe=ie&&ie.isDepthTexture?ie.type:null,oe=v(b.stencilBuffer,fe),Fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=Ze(b);at(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,oe,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,E)}else{const ie=b.textures;for(let fe=0;fe<ie.length;fe++){const oe=ie[fe],Fe=r.convert(oe.format,oe.colorSpace),Se=r.convert(oe.type),Le=_(oe.internalFormat,Fe,Se,oe.colorSpace),ct=Ze(b);j&&at(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Le,b.width,b.height):at(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Le,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,fe=Ze(b);if(b.depthTexture.format===ir)at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(b.depthTexture.format===fr)at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(E){const b=n.get(E),j=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const ie=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",fe)};ie.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=ie}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,E)}else if(j){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=s.createRenderbuffer(),ge(b.__webglDepthbuffer[ie],E,!1);else{const fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ge(b.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(E,b,j){const ie=n.get(E);b!==void 0&&Q(ie.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Be(E)}function Ve(E){const b=E.texture,j=n.get(E),ie=n.get(b);E.addEventListener("dispose",S);const fe=E.textures,oe=E.isWebGLCubeRenderTarget===!0,Fe=fe.length>1;if(Fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,o.memory.textures++),oe){j.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Se]=[];for(let Le=0;Le<b.mipmaps.length;Le++)j.__webglFramebuffer[Se][Le]=s.createFramebuffer()}else j.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Se=0;Se<b.mipmaps.length;Se++)j.__webglFramebuffer[Se]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Se=0,Le=fe.length;Se<Le;Se++){const ct=n.get(fe[Se]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&at(E)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Se=0;Se<fe.length;Se++){const Le=fe[Se];j.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Se]);const ct=r.convert(Le.format,Le.colorSpace),ve=r.convert(Le.type),De=_(Le.internalFormat,ct,ve,Le.colorSpace,E.isXRRenderTarget===!0),qe=Ze(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,De,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,j.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ne(s.TEXTURE_CUBE_MAP,b);for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Q(j.__webglFramebuffer[Se][Le],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le);else Q(j.__webglFramebuffer[Se],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Se=0,Le=fe.length;Se<Le;Se++){const ct=fe[Se],ve=n.get(ct);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),ne(s.TEXTURE_2D,ct),Q(j.__webglFramebuffer,E,ct,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),m(ct)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,ie.__webglTexture),ne(Se,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Q(j.__webglFramebuffer[Le],E,b,s.COLOR_ATTACHMENT0,Se,Le);else Q(j.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,Se,0);m(b)&&p(Se),t.unbindTexture()}E.depthBuffer&&Be(E)}function We(E){const b=E.textures;for(let j=0,ie=b.length;j<ie;j++){const fe=b[j];if(m(fe)){const oe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Fe=n.get(fe).__webglTexture;t.bindTexture(oe,Fe),p(oe),t.unbindTexture()}}}const je=[],D=[];function Lt(E){if(E.samples>0){if(at(E)===!1){const b=E.textures,j=E.width,ie=E.height;let fe=s.COLOR_BUFFER_BIT;const oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(E),Se=b.length>1;if(Se)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);const ct=n.get(b[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,j,ie,0,0,j,ie,fe,s.NEAREST),l===!0&&(je.length=0,D.length=0,je.push(s.COLOR_ATTACHMENT0+Le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(je.push(oe),D.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);const ct=n.get(b[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ze(E){return Math.min(i.maxSamples,E.samples)}function at(E){const b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(E){const b=o.render.frame;u.get(E)!==b&&(u.set(E,b),E.update())}function vt(E,b){const j=E.colorSpace,ie=E.format,fe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||j!==rn&&j!==Ki&&(ot.getTransfer(j)===Pt?(ie!==zn||fe!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=T,this.setTexture2D=U,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=at}function E_(s,e){function t(n,i=Ki){let r;const o=ot.getTransfer(i);if(n===Di)return s.UNSIGNED_BYTE;if(n===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yf)return s.BYTE;if(n===qf)return s.SHORT;if(n===Jr)return s.UNSIGNED_SHORT;if(n===Xc)return s.INT;if(n===ws)return s.UNSIGNED_INT;if(n===Qn)return s.FLOAT;if(n===pi)return s.HALF_FLOAT;if(n===$f)return s.ALPHA;if(n===Zf)return s.RGB;if(n===zn)return s.RGBA;if(n===Jf)return s.LUMINANCE;if(n===Qf)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===fr)return s.DEPTH_STENCIL;if(n===qc)return s.RED;if(n===Kc)return s.RED_INTEGER;if(n===ed)return s.RG;if(n===$c)return s.RG_INTEGER;if(n===Zc)return s.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===yc||n===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===td||n===wc||n===Sc||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class A_ extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ze extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new O(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends vr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=new I_,m=t.getContextAttributes();let p=null,_=null;const v=[],y=[],C=new re;let S=null;const A=new sn;A.layers.enable(1),A.viewport=new dt;const P=new sn;P.layers.enable(2),P.viewport=new dt;const B=[A,P],M=new A_;M.layers.enable(1),M.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=v[z];return Q===void 0&&(Q=new gl,v[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=v[z];return Q===void 0&&(Q=new gl,v[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=v[z];return Q===void 0&&(Q=new gl,v[z]=Q),Q.getHandSpace()};function L(z){const Q=y.indexOf(z.inputSource);if(Q===-1)return;const ge=v[Q];ge!==void 0&&(ge.update(z.inputSource,z.frame,c||o),ge.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",J);for(let z=0;z<v.length;z++){const Q=y[z];Q!==null&&(y[z]=null,v[z].disconnect(Q))}T=null,N=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Hn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ge=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?fr:ir,ge=m.stencil?hr:ws);const Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Hn(f.textureWidth,f.textureHeight,{format:zn,type:Di,depthTexture:new pd(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(z){for(let Q=0;Q<z.removed.length;Q++){const ge=z.removed[Q],me=y.indexOf(ge);me>=0&&(y[me]=null,v[me].disconnect(ge))}for(let Q=0;Q<z.added.length;Q++){const ge=z.added[Q];let me=y.indexOf(ge);if(me===-1){for(let He=0;He<v.length;He++)if(He>=y.length){y.push(ge),me=He;break}else if(y[He]===null){y[He]=ge,me=He;break}if(me===-1)break}const Be=v[me];Be&&Be.connect(ge)}}const H=new w,X=new w;function k(z,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const me=H.distanceTo(X),Be=Q.projectionMatrix.elements,He=ge.projectionMatrix.elements,Ve=Be[14]/(Be[10]-1),We=Be[14]/(Be[10]+1),je=(Be[9]+1)/Be[5],D=(Be[9]-1)/Be[5],Lt=(Be[8]-1)/Be[0],Ze=(He[8]+1)/He[0],at=Ve*Lt,Ge=Ve*Ze,vt=me/(-Lt+Ze),Xe=vt*-Lt;if(Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Xe),z.translateZ(vt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Be[10]===-1)z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const E=Ve+vt,b=We+vt,j=at-Xe,ie=Ge+(me-Xe),fe=je*We/b*E,oe=D*We/b*E;z.projectionMatrix.makePerspective(j,ie,fe,oe,E,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function V(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let Q=z.near,ge=z.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),M.near=P.near=A.near=Q,M.far=P.far=A.far=ge,(T!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,N=M.far);const me=z.parent,Be=M.cameras;V(M,me);for(let He=0;He<Be.length;He++)V(Be[He],me);Be.length===2?k(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),F(z,M,me)};function F(z,Q,ge){ge===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(ge.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=dr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ne=null;function de(z,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let me=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let He=0;He<ge.length;He++){const Ve=ge[He];let We=null;if(d!==null)We=d.getViewport(Ve);else{const D=h.getViewSubImage(f,Ve);We=D.viewport,He===0&&(e.setRenderTargetTextures(_,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(_))}let je=B[He];je===void 0&&(je=new sn,je.layers.enable(He),je.viewport=new dt,B[He]=je),je.matrix.fromArray(Ve.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ve.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(We.x,We.y,We.width,We.height),He===0&&(M.matrix.copy(je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(je)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const He=h.getDepthInformation(ge[0]);He&&He.isValid&&He.texture&&x.init(e,He,i.renderState)}}for(let ge=0;ge<v.length;ge++){const me=y[ge],Be=v[ge];me!==null&&Be!==void 0&&Be.update(me,Q,c||o)}ne&&ne(z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const pe=new dd;pe.setAnimationLoop(de),this.setAnimationLoop=function(z){ne=z},this.dispose=function(){}}}const fs=new Kt,D_=new Ie;function N_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ud(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,fs.copy(y),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(fs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=i[_.id];y===void 0&&(g(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(_,C);const S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function u(_){const v=h();_.__bindingPointIndex=v;const y=s.createBuffer(),C=_.__size,S=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=i[_.id],y=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,A=y.length;S<A;S++){const P=Array.isArray(y[S])?y[S]:[y[S]];for(let B=0,M=P.length;B<M;B++){const T=P[B];if(d(T,S,B,C)===!0){const N=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let J=0;J<L.length;J++){const H=L[J],X=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+U,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y,C){const S=_.value,A=v+"_"+y;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:C[A]=S.clone(),!0;{const P=C[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[A]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(_){const v=_.uniforms;let y=0;const C=16;for(let A=0,P=v.length;A<P;A++){const B=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,T=B.length;M<T;M++){const N=B[M],L=Array.isArray(N.value)?N.value:[N.value];for(let U=0,J=L.length;U<J;U++){const H=L[U],X=x(H),k=y%C,V=k%X.boundary,F=k+V;y+=V,F!==0&&C-F<X.storage&&(y+=C-F),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=X.storage}}}const S=y%C;return S>0&&(y+=C-S),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class F_{constructor(e={}){const{canvas:t=Tm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let y=!1,C=0,S=0,A=null,P=-1,B=null;const M=new dt,T=new dt;let N=null;const L=new ce(0);let U=0,J=t.width,H=t.height,X=1,k=null,V=null;const F=new dt(0,0,J,H),ne=new dt(0,0,J,H);let de=!1;const pe=new nu;let z=!1,Q=!1;const ge=new Ie,me=new Ie,Be=new w,He=new dt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function je(){return A===null?X:1}let D=n;function Lt(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){const W="webgl2";if(D=Lt(W,R),D===null)throw Lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ze,at,Ge,vt,Xe,E,b,j,ie,fe,oe,Fe,Se,Le,ct,ve,De,qe,$e,Ne,st,Je,Mt,G;function Pe(){Ze=new Vv(D),Ze.init(),Je=new E_(D,Ze),at=new Fv(D,Ze,e,Je),Ge=new S_(D),at.reverseDepthBuffer&&Ge.buffers.depth.setReversed(!0),vt=new Xv(D),Xe=new c_,E=new T_(D,Ze,Ge,Xe,at,Je,vt),b=new Bv(v),j=new Hv(v),ie=new Jm(D),Mt=new Nv(D,ie),fe=new Gv(D,ie,vt,Mt),oe=new Yv(D,fe,ie,vt),$e=new jv(D,at,E),ve=new Ov(Xe),Fe=new l_(v,b,j,Ze,at,Mt,ve),Se=new N_(v,Xe),Le=new h_,ct=new v_(Ze),qe=new Dv(v,b,j,Ge,oe,f,l),De=new M_(v,oe,at),G=new U_(D,vt,at,Ge),Ne=new Uv(D,Ze,vt),st=new Wv(D,Ze,vt),vt.programs=Fe.programs,v.capabilities=at,v.extensions=Ze,v.properties=Xe,v.renderLists=Le,v.shadowMap=De,v.state=Ge,v.info=vt}Pe();const ee=new L_(v,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(J,H,!1))},this.getSize=function(R){return R.set(J,H)},this.setSize=function(R,W,$=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,H=W,t.width=Math.floor(R*X),t.height=Math.floor(W*X),$===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(J*X,H*X).floor()},this.setDrawingBufferSize=function(R,W,$){J=R,H=W,X=$,t.width=Math.floor(R*$),t.height=Math.floor(W*$),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,W,$,Z){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,W,$,Z),Ge.viewport(M.copy(F).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,W,$,Z){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,$,Z),Ge.scissor(T.copy(ne).multiplyScalar(X).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){Ge.setScissorTest(de=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(R=!0,W=!0,$=!0){let Z=0;if(R){let Y=!1;if(A!==null){const _e=A.texture.format;Y=_e===Zc||_e===$c||_e===Kc}if(Y){const _e=A.texture.type,Te=_e===Di||_e===ws||_e===Jr||_e===hr||_e===jc||_e===Yc,Ue=qe.getClearColor(),I=qe.getClearAlpha(),q=Ue.r,te=Ue.g,ae=Ue.b;Te?(d[0]=q,d[1]=te,d[2]=ae,d[3]=I,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=q,g[1]=te,g[2]=ae,g[3]=I,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}W&&(Z|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Le.dispose(),ct.dispose(),Xe.dispose(),b.dispose(),j.dispose(),oe.dispose(),Mt.dispose(),G.dispose(),Fe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ui),ee.removeEventListener("sessionend",Cn),Pn.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=vt.autoReset,W=De.enabled,$=De.autoUpdate,Z=De.needsUpdate,Y=De.type;Pe(),vt.autoReset=R,De.enabled=W,De.autoUpdate=$,De.needsUpdate=Z,De.type=Y}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tt(R){const W=R.target;W.removeEventListener("dispose",tt),Rt(W)}function Rt(R){kt(R),Xe.remove(R)}function kt(R){const W=Xe.get(R).programs;W!==void 0&&(W.forEach(function($){Fe.releaseProgram($)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,$,Z,Y,_e){W===null&&(W=Ve);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=ns(R,W,$,Z,Y);Ge.setMaterial(Z,Te);let I=$.index,q=1;if(Z.wireframe===!0){if(I=fe.getWireframeAttribute($),I===void 0)return;q=2}const te=$.drawRange,ae=$.attributes.position;let we=te.start*q,ye=(te.start+te.count)*q;_e!==null&&(we=Math.max(we,_e.start*q),ye=Math.min(ye,(_e.start+_e.count)*q)),I!==null?(we=Math.max(we,0),ye=Math.min(ye,I.count)):ae!=null&&(we=Math.max(we,0),ye=Math.min(ye,ae.count));const Ye=ye-we;if(Ye<0||Ye===1/0)return;Mt.setup(Y,Z,Ue,$,I);let et,ke=Ne;if(I!==null&&(et=ie.get(I),ke=st,ke.setIndex(et)),Y.isMesh)Z.wireframe===!0?(Ge.setLineWidth(Z.wireframeLinewidth*je()),ke.setMode(D.LINES)):ke.setMode(D.TRIANGLES);else if(Y.isLine){let Me=Z.linewidth;Me===void 0&&(Me=1),Ge.setLineWidth(Me*je()),Y.isLineSegments?ke.setMode(D.LINES):Y.isLineLoop?ke.setMode(D.LINE_LOOP):ke.setMode(D.LINE_STRIP)}else Y.isPoints?ke.setMode(D.POINTS):Y.isSprite&&ke.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ke.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ke.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Me=Y._multiDrawStarts,gt=Y._multiDrawCounts,mt=Y._multiDrawCount,wn=I?ie.get(I).bytesPerElement:1,nn=Xe.get(Z).currentProgram.getUniforms();for(let on=0;on<mt;on++)nn.setValue(D,"_gl_DrawID",on),ke.render(Me[on]/wn,gt[on])}else if(Y.isInstancedMesh)ke.renderInstances(we,Ye,Y.count);else if($.isInstancedBufferGeometry){const Me=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,gt=Math.min($.instanceCount,Me);ke.renderInstances(we,Ye,gt)}else ke.render(we,Ye)};function ut(R,W,$){R.transparent===!0&&R.side===It&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,Gn(R,W,$),R.side=Li,R.needsUpdate=!0,Gn(R,W,$),R.side=It):Gn(R,W,$)}this.compile=function(R,W,$=null){$===null&&($=R),m=ct.get($),m.init(W),_.push(m),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==$&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const Z=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _e=Y.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Ue=_e[Te];ut(Ue,$,Y),Z.add(Ue)}else ut(_e,$,Y),Z.add(_e)}),_.pop(),m=null,Z},this.compileAsync=function(R,W,$=null){const Z=this.compile(R,W,$);return new Promise(Y=>{function _e(){if(Z.forEach(function(Te){Xe.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){Y(R);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Gt=null;function zt(R){Gt&&Gt(R)}function Ui(){Pn.stop()}function Cn(){Pn.start()}const Pn=new dd;Pn.setAnimationLoop(zt),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Gt=R,ee.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},ee.addEventListener("sessionstart",Ui),ee.addEventListener("sessionend",Cn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,A),m=ct.get(R,_.length),m.init(W),_.push(m),me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),pe.setFromProjectionMatrix(me),Q=this.localClippingEnabled,z=ve.init(this.clippingPlanes,Q),x=Le.get(R,p.length),x.init(),p.push(x),ee.enabled===!0&&ee.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&si(_e,W,-1/0,v.sortObjects)}si(R,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(k,V),We=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,We&&qe.addToRenderList(x,R),this.info.render.frame++,z===!0&&ve.beginShadows();const $=m.state.shadowsArray;De.render($,R,W),z===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,Y=x.transmissive;if(m.setupLights(),W.isArrayCamera){const _e=W.cameras;if(Y.length>0)for(let Te=0,Ue=_e.length;Te<Ue;Te++){const I=_e[Te];Fi(Z,Y,R,I)}We&&qe.render(R);for(let Te=0,Ue=_e.length;Te<Ue;Te++){const I=_e[Te];In(x,R,I,I.viewport)}}else Y.length>0&&Fi(Z,Y,R,W),We&&qe.render(R),In(x,R,W);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,W),Mt.resetDefaultState(),P=-1,B=null,_.pop(),_.length>0?(m=_[_.length-1],z===!0&&ve.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function si(R,W,$,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){Z&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const Te=oe.update(R),Ue=R.material;Ue.visible&&x.push(R,Te,Ue,$,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){const Te=oe.update(R),Ue=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),He.copy(Te.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Ue)){const I=Te.groups;for(let q=0,te=I.length;q<te;q++){const ae=I[q],we=Ue[ae.materialIndex];we&&we.visible&&x.push(R,Te,we,$,He.z,ae)}}else Ue.visible&&x.push(R,Te,Ue,$,He.z,null)}}const _e=R.children;for(let Te=0,Ue=_e.length;Te<Ue;Te++)si(_e[Te],W,$,Z)}function In(R,W,$,Z){const Y=R.opaque,_e=R.transmissive,Te=R.transparent;m.setupLightsView($),z===!0&&ve.setGlobalState(v.clippingPlanes,$),Z&&Ge.viewport(M.copy(Z)),Y.length>0&&ri(Y,W,$),_e.length>0&&ri(_e,W,$),Te.length>0&&ri(Te,W,$),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Fi(R,W,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?pi:Di,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const _e=m.state.transmissionRenderTarget[Z.id],Te=Z.viewport||M;_e.setSize(Te.z,Te.w);const Ue=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(L),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),We&&qe.render($);const I=v.toneMapping;v.toneMapping=Qi;const q=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),z===!0&&ve.setGlobalState(v.clippingPlanes,Z),ri(R,$,Z),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ae=0,we=W.length;ae<we;ae++){const ye=W[ae],Ye=ye.object,et=ye.geometry,ke=ye.material,Me=ye.group;if(ke.side===It&&Ye.layers.test(Z.layers)){const gt=ke.side;ke.side=vn,ke.needsUpdate=!0,Oi(Ye,$,Z,et,ke,Me),ke.side=gt,ke.needsUpdate=!0,te=!0}}te===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e))}v.setRenderTarget(Ue),v.setClearColor(L,U),q!==void 0&&(Z.viewport=q),v.toneMapping=I}function ri(R,W,$){const Z=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,_e=R.length;Y<_e;Y++){const Te=R[Y],Ue=Te.object,I=Te.geometry,q=Z===null?Te.material:Z,te=Te.group;Ue.layers.test($.layers)&&Oi(Ue,W,$,I,q,te)}}function Oi(R,W,$,Z,Y,_e){R.onBeforeRender(v,W,$,Z,Y,_e),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,W,$,Z,R,_e),Y.transparent===!0&&Y.side===It&&Y.forceSinglePass===!1?(Y.side=vn,Y.needsUpdate=!0,v.renderBufferDirect($,W,Z,Y,R,_e),Y.side=Li,Y.needsUpdate=!0,v.renderBufferDirect($,W,Z,Y,R,_e),Y.side=It):v.renderBufferDirect($,W,Z,Y,R,_e),R.onAfterRender(v,W,$,Z,Y,_e)}function Gn(R,W,$){W.isScene!==!0&&(W=Ve);const Z=Xe.get(R),Y=m.state.lights,_e=m.state.shadowsArray,Te=Y.state.version,Ue=Fe.getParameters(R,Y.state,_e,W,$),I=Fe.getProgramCacheKey(Ue);let q=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?j:b).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,q===void 0&&(R.addEventListener("dispose",tt),q=new Map,Z.programs=q);let te=q.get(I);if(te!==void 0){if(Z.currentProgram===te&&Z.lightsStateVersion===Te)return ai(R,Ue),te}else Ue.uniforms=Fe.getUniforms(R),R.onBeforeCompile(Ue,v),te=Fe.acquireProgram(Ue,I),q.set(I,te),Z.uniforms=Ue.uniforms;const ae=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ae.clippingPlanes=ve.uniform),ai(R,Ue),Z.needsLights=is(R),Z.lightsStateVersion=Te,Z.needsLights&&(ae.ambientLightColor.value=Y.state.ambient,ae.lightProbe.value=Y.state.probe,ae.directionalLights.value=Y.state.directional,ae.directionalLightShadows.value=Y.state.directionalShadow,ae.spotLights.value=Y.state.spot,ae.spotLightShadows.value=Y.state.spotShadow,ae.rectAreaLights.value=Y.state.rectArea,ae.ltc_1.value=Y.state.rectAreaLTC1,ae.ltc_2.value=Y.state.rectAreaLTC2,ae.pointLights.value=Y.state.point,ae.pointLightShadows.value=Y.state.pointShadow,ae.hemisphereLights.value=Y.state.hemi,ae.directionalShadowMap.value=Y.state.directionalShadowMap,ae.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ae.spotShadowMap.value=Y.state.spotShadowMap,ae.spotLightMatrix.value=Y.state.spotLightMatrix,ae.spotLightMap.value=Y.state.spotLightMap,ae.pointShadowMap.value=Y.state.pointShadowMap,ae.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=te,Z.uniformsList=null,te}function oi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ha.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ai(R,W){const $=Xe.get(R);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function ns(R,W,$,Z,Y){W.isScene!==!0&&(W=Ve),E.resetTextureUnits();const _e=W.fog,Te=Z.isMeshStandardMaterial?W.environment:null,Ue=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,I=(Z.isMeshStandardMaterial?j:b).get(Z.envMap||Te),q=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ae=!!$.morphAttributes.position,we=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color;let Ye=Qi;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ye=v.toneMapping);const et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ke=et!==void 0?et.length:0,Me=Xe.get(Z),gt=m.state.lights;if(z===!0&&(Q===!0||R!==B)){const hn=R===B&&Z.id===P;ve.setState(Z,R,hn)}let mt=!1;Z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==gt.state.version||Me.outputColorSpace!==Ue||Y.isBatchedMesh&&Me.batching===!1||!Y.isBatchedMesh&&Me.batching===!0||Y.isBatchedMesh&&Me.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Me.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Me.instancing===!1||!Y.isInstancedMesh&&Me.instancing===!0||Y.isSkinnedMesh&&Me.skinning===!1||!Y.isSkinnedMesh&&Me.skinning===!0||Y.isInstancedMesh&&Me.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Me.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Me.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Me.instancingMorph===!1&&Y.morphTexture!==null||Me.envMap!==I||Z.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ve.numPlanes||Me.numIntersection!==ve.numIntersection)||Me.vertexAlphas!==q||Me.vertexTangents!==te||Me.morphTargets!==ae||Me.morphNormals!==we||Me.morphColors!==ye||Me.toneMapping!==Ye||Me.morphTargetsCount!==ke)&&(mt=!0):(mt=!0,Me.__version=Z.version);let wn=Me.currentProgram;mt===!0&&(wn=Gn(Z,W,Y));let nn=!1,on=!1,wr=!1;const Nt=wn.getUniforms(),Wn=Me.uniforms;if(Ge.useProgram(wn.program)&&(nn=!0,on=!0,wr=!0),Z.id!==P&&(P=Z.id,on=!0),nn||B!==R){at.reverseDepthBuffer?(ge.copy(R.projectionMatrix),Am(ge),Rm(ge),Nt.setValue(D,"projectionMatrix",ge)):Nt.setValue(D,"projectionMatrix",R.projectionMatrix),Nt.setValue(D,"viewMatrix",R.matrixWorldInverse);const hn=Nt.map.cameraPosition;hn!==void 0&&hn.setValue(D,Be.setFromMatrixPosition(R.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,on=!0,wr=!0)}if(Y.isSkinnedMesh){Nt.setOptional(D,Y,"bindMatrix"),Nt.setOptional(D,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Nt.setValue(D,"boneTexture",hn.boneTexture,E))}Y.isBatchedMesh&&(Nt.setOptional(D,Y,"batchingTexture"),Nt.setValue(D,"batchingTexture",Y._matricesTexture,E),Nt.setOptional(D,Y,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",Y._indirectTexture,E),Nt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",Y._colorsTexture,E));const Ps=$.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&$e.update(Y,$,wn),(on||Me.receiveShadow!==Y.receiveShadow)&&(Me.receiveShadow=Y.receiveShadow,Nt.setValue(D,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Wn.envMap.value=I,Wn.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Wn.envMapIntensity.value=W.environmentIntensity),on&&(Nt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&xi(Wn,wr),_e&&Z.fog===!0&&Se.refreshFogUniforms(Wn,_e),Se.refreshMaterialUniforms(Wn,Z,X,H,m.state.transmissionRenderTarget[R.id]),ha.upload(D,oi(Me),Wn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ha.upload(D,oi(Me),Wn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(D,"center",Y.center),Nt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(D,"normalMatrix",Y.normalMatrix),Nt.setValue(D,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const hn=Z.uniformsGroups;for(let mo=0,ka=hn.length;mo<ka;mo++){const ss=hn[mo];G.update(ss,wn),G.bind(ss,wn)}}return wn}function xi(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function is(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,W,$){Xe.get(R.texture).__webglTexture=W,Xe.get(R.depthTexture).__webglTexture=$;const Z=Xe.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const $=Xe.get(R);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,$=0){A=R,C=W,S=$;let Z=!0,Y=null,_e=!1,Te=!1;if(R){const I=Xe.get(R);if(I.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(I.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(I.__hasExternalTextures)E.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ae=R.depthTexture;if(I.__boundDepthTexture!==ae){if(ae!==null&&Xe.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const q=R.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(Te=!0);const te=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[W])?Y=te[W][$]:Y=te[W],_e=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?Y=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[$]:Y=te,M.copy(R.viewport),T.copy(R.scissor),N=R.scissorTest}else M.copy(F).multiplyScalar(X).floor(),T.copy(ne).multiplyScalar(X).floor(),N=de;if(Ge.bindFramebuffer(D.FRAMEBUFFER,Y)&&Z&&Ge.drawBuffers(R,Y),Ge.viewport(M),Ge.scissor(T),Ge.setScissorTest(N),_e){const I=Xe.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,I.__webglTexture,$)}else if(Te){const I=Xe.get(R.texture),q=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,I.__webglTexture,$||0,q)}P=-1},this.readRenderTargetPixels=function(R,W,$,Z,Y,_e,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){Ge.bindFramebuffer(D.FRAMEBUFFER,Ue);try{const I=R.texture,q=I.format,te=I.type;if(!at.textureFormatReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&$>=0&&$<=R.height-Y&&D.readPixels(W,$,Z,Y,Je.convert(q),Je.convert(te),_e)}finally{const I=A!==null?Xe.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(D.FRAMEBUFFER,I)}}},this.readRenderTargetPixelsAsync=async function(R,W,$,Z,Y,_e,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){const I=R.texture,q=I.format,te=I.type;if(!at.textureFormatReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Z&&$>=0&&$<=R.height-Y){Ge.bindFramebuffer(D.FRAMEBUFFER,Ue);const ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.bufferData(D.PIXEL_PACK_BUFFER,_e.byteLength,D.STREAM_READ),D.readPixels(W,$,Z,Y,Je.convert(q),Je.convert(te),0);const we=A!==null?Xe.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(D.FRAMEBUFFER,we);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Em(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_e),D.deleteBuffer(ae),D.deleteSync(ye),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,$=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Z=Math.pow(2,-$),Y=Math.floor(R.image.width*Z),_e=Math.floor(R.image.height*Z),Te=W!==null?W.x:0,Ue=W!==null?W.y:0;E.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Te,Ue,Y,_e),Ge.unbindTexture()},this.copyTextureToTexture=function(R,W,$=null,Z=null,Y=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],W=arguments[2],Y=arguments[3]||0,$=null);let _e,Te,Ue,I,q,te;$!==null?(_e=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ue=$.min.x,I=$.min.y):(_e=R.image.width,Te=R.image.height,Ue=0,I=0),Z!==null?(q=Z.x,te=Z.y):(q=0,te=0);const ae=Je.convert(W.format),we=Je.convert(W.type);E.setTexture2D(W,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);const ye=D.getParameter(D.UNPACK_ROW_LENGTH),Ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),et=D.getParameter(D.UNPACK_SKIP_PIXELS),ke=D.getParameter(D.UNPACK_SKIP_ROWS),Me=D.getParameter(D.UNPACK_SKIP_IMAGES),gt=R.isCompressedTexture?R.mipmaps[Y]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,I),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,q,te,_e,Te,ae,we,gt.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,q,te,gt.width,gt.height,ae,gt.data):D.texSubImage2D(D.TEXTURE_2D,Y,q,te,_e,Te,ae,we,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,et),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),Y===0&&W.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,W,$=null,Z=null,Y=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],W=arguments[3],Y=arguments[4]||0);let _e,Te,Ue,I,q,te,ae,we,ye;const Ye=R.isCompressedTexture?R.mipmaps[Y]:R.image;$!==null?(_e=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ue=$.max.z-$.min.z,I=$.min.x,q=$.min.y,te=$.min.z):(_e=Ye.width,Te=Ye.height,Ue=Ye.depth,I=0,q=0,te=0),Z!==null?(ae=Z.x,we=Z.y,ye=Z.z):(ae=0,we=0,ye=0);const et=Je.convert(W.format),ke=Je.convert(W.type);let Me;if(W.isData3DTexture)E.setTexture3D(W,0),Me=D.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Me=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wn=D.getParameter(D.UNPACK_SKIP_PIXELS),nn=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,I),D.pixelStorei(D.UNPACK_SKIP_ROWS,q),D.pixelStorei(D.UNPACK_SKIP_IMAGES,te),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Me,Y,ae,we,ye,_e,Te,Ue,et,ke,Ye.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,Y,ae,we,ye,_e,Te,Ue,et,Ye.data):D.texSubImage3D(Me,Y,ae,we,ye,_e,Te,Ue,et,ke,Ye),D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),Y===0&&W.generateMipmaps&&D.generateMipmap(Me),Ge.unbindTexture()},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){C=0,S=0,A=null,Ge.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ra?"display-p3":"srgb"}}class su{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=n}clone(){return new su(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O_ extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new w;class no{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new no(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xa extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xs;const Pr=new w,js=new w,Ys=new w,qs=new re,Ir=new re,Md=new Ie,Fo=new w,Lr=new w,Oo=new w,Ph=new re,vl=new re,Ih=new re;class Rc extends Tt{constructor(e=new xa){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yd(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new no(n,3,0,!1)),Xs.setAttribute("uv",new no(n,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Ys.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Bo(Fo.set(-.5,-.5,0),Ys,o,js,i,r),Bo(Lr.set(.5,-.5,0),Ys,o,js,i,r),Bo(Oo.set(.5,.5,0),Ys,o,js,i,r),Ph.set(0,0),vl.set(1,0),Ih.set(1,1);let a=e.ray.intersectTriangle(Fo,Lr,Oo,!1,Pr);if(a===null&&(Bo(Lr.set(-.5,.5,0),Ys,o,js,i,r),vl.set(0,1),a=e.ray.intersectTriangle(Fo,Oo,Lr,!1,Pr),a===null))return;const l=e.ray.origin.distanceTo(Pr);l<e.near||l>e.far||t.push({distance:l,point:Pr.clone(),uv:Bn.getInterpolation(Pr,Fo,Lr,Oo,Ph,vl,Ih,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Bo(s,e,t,n,i,r){qs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ir.x=r*qs.x-i*qs.y,Ir.y=i*qs.x+r*qs.y):Ir.copy(qs),s.copy(e),s.x+=Ir.x,s.y+=Ir.y,s.applyMatrix4(Md)}const Lh=new w,Dh=new dt,Nh=new dt,B_=new w,Uh=new Ie,ko=new w,xl=new mi,Fh=new Ie,_l=new lo;class wd extends O{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)!==!1&&(Fh.copy(i).invert(),_l.copy(e.ray).applyMatrix4(Fh),!(this.boundingBox!==null&&_l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dh.fromBufferAttribute(i.attributes.skinIndex,e),Nh.fromBufferAttribute(i.attributes.skinWeight,e),Lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nh.getComponent(r);if(o!==0){const a=Dh.getComponent(r);Uh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(B_.copy(Lh).applyMatrix4(Uh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _a extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sd extends $t{constructor(e=null,t=1,n=1,i,r,o,a,l,c=gn,u=gn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new Ie,k_=new Ie;class Ia{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:k_;Oh.multiplyMatrices(a,t[r]),Oh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sd(t,e,e,zn,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _a),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _s extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new Ie,Bh=new Ie,zo=[],kh=new ni,z_=new Ie,Dr=new O,Nr=new mi;class Kn extends O{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),kh.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Nr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Bh.multiplyMatrices(n,Ks),Dr.matrixWorld=Bh,Dr.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){const l=zo[o];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sd(new Float32Array(i*this.count),i,this.count,qc,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class La extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new w,Ma=new w,zh=new Ie,Ur=new lo,Ho=new mi,yl=new w,Hh=new w;class co extends Tt{constructor(e=new Et,t=new La){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ya.fromBufferAttribute(t,i-1),Ma.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Ma);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;zh.copy(i).invert(),Ur.copy(e.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),_=u.getX(x+1),v=Vo(this,e,Ur,l,p,_);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Vo(this,e,Ur,l,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Vo(this,e,Ur,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Vo(this,e,Ur,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ya.fromBufferAttribute(o,i),Ma.fromBufferAttribute(o,r),t.distanceSqToSegment(ya,Ma,yl,Hh)>n)return;yl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(yl);if(!(l<e.near||l>e.far))return{distance:l,point:Hh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Vh=new w,Gh=new w;class bd extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H_ extends co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Td extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new Ie,Cc=new lo,Go=new mi,Wo=new w;class Pc extends Tt{constructor(e=new Et,t=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Wh.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);Wo.fromBufferAttribute(h,m),Xh(Wo,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Wo.fromBufferAttribute(h,g),Xh(Wo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(s,e,t,n,i,r,o){const a=Cc.distanceSqToPoint(s);if(a<t){const l=new w;Cc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ed extends $t{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new re:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,l=new Ie;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Jt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ru extends ii{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class V_ extends ru{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ou(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Xo=new w,Ml=new ou,wl=new ou,Sl=new ou;class $i extends ii{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),c=Xo);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ml.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),wl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Sl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),wl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Sl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ml.calc(l),wl.calc(l),Sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function G_(s,e){const t=1-s;return t*t*e}function W_(s,e){return 2*(1-s)*s*e}function X_(s,e){return s*s*e}function Yr(s,e,t,n){return G_(s,e)+W_(s,t)+X_(s,n)}function j_(s,e){const t=1-s;return t*t*t*e}function Y_(s,e){const t=1-s;return 3*t*t*s*e}function q_(s,e){return 3*(1-s)*s*s*e}function K_(s,e){return s*s*s*e}function qr(s,e,t,n,i){return j_(s,e)+Y_(s,t)+q_(s,n)+K_(s,i)}class Ad extends ii{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(e,i.x,r.x,o.x,a.x),qr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $_ extends ii{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(e,i.x,r.x,o.x,a.x),qr(e,i.y,r.y,o.y,a.y),qr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends ii{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends ii{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends ii{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,i.x,r.x,o.x),Yr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends ii{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,i.x,r.x,o.x),Yr(e,i.y,r.y,o.y),Yr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(jh(a,l.x,c.x,u.x,h.x),jh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Ic=Object.freeze({__proto__:null,ArcCurve:V_,CatmullRomCurve3:$i,CubicBezierCurve:Ad,CubicBezierCurve3:$_,EllipseCurve:ru,LineCurve:Rd,LineCurve3:Z_,QuadraticBezierCurve:Cd,QuadraticBezierCurve3:Pd,SplineCurve:Id});class J_ extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ic[i.type]().fromJSON(i))}return this}}class Q_ extends J_{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rd(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Cd(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Ad(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Id(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ru(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ss extends Et{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Jt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,f=new re,d=new w,g=new w,x=new w;let m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){const v=n+_*u*i,y=Math.sin(v),C=Math.cos(v);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*y,h.y=e[S].y,h.z=e[S].x*C,o.push(h.x,h.y,h.z),f.x=_/t,f.y=S/(e.length-1),a.push(f.x,f.y);const A=l[3*S+0]*y,P=l[3*S+1],B=l[3*S+0]*C;c.push(A,P,B)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){const y=v+_*e.length,C=y,S=y+e.length,A=y+e.length+1,P=y+1;r.push(C,S,P),r.push(A,P,S)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.points,e.segments,e.phiStart,e.phiLength)}}class au extends Ss{constructor(e=1,t=1,n=4,i=8){const r=new Q_;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new au(e.radius,e.length,e.capSegments,e.radialSegments)}}class Mn extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new w,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends Et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function _(){const y=new w,C=new w;let S=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const B=[],M=P/r,T=M*(t-e)+e;for(let N=0;N<=i;N++){const L=N/i,U=L*l+a,J=Math.sin(U),H=Math.cos(U);C.x=T*J,C.y=-M*n+m,C.z=T*H,h.push(C.x,C.y,C.z),y.set(J,A,H).normalize(),f.push(y.x,y.y,y.z),d.push(L,1-M),B.push(g++)}x.push(B)}for(let P=0;P<i;P++)for(let B=0;B<r;B++){const M=x[B][P],T=x[B+1][P],N=x[B+1][P+1],L=x[B][P+1];e>0&&(u.push(M,T,L),S+=3),t>0&&(u.push(T,N,L),S+=3)}c.addGroup(p,S,0),p+=S}function v(y){const C=g,S=new re,A=new w;let P=0;const B=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const T=g;for(let N=0;N<=i;N++){const U=N/i*l+a,J=Math.cos(U),H=Math.sin(U);A.x=B*H,A.y=m*M,A.z=B*J,h.push(A.x,A.y,A.z),f.push(0,M,0),S.x=J*.5+.5,S.y=H*.5*M+.5,d.push(S.x,S.y),g++}for(let N=0;N<i;N++){const L=C+N,U=T+N;y===!0?u.push(U,U+1,L):u.push(U+1,U,L),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends ft{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ei(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new w,y=new w,C=new w;for(let S=0;S<t.length;S+=3)d(t[S+0],v),d(t[S+1],y),d(t[S+2],C),l(v,y,C,_)}function l(_,v,y,C){const S=C+1,A=[];for(let P=0;P<=S;P++){A[P]=[];const B=_.clone().lerp(y,P/S),M=v.clone().lerp(y,P/S),T=S-P;for(let N=0;N<=T;N++)N===0&&P===S?A[P][N]=B:A[P][N]=B.clone().lerp(M,N/T)}for(let P=0;P<S;P++)for(let B=0;B<2*(S-P)-1;B++){const M=Math.floor(B/2);B%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function c(_){const v=new w;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const _=new w;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const y=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;o.push(y,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const v=o[_+0],y=o[_+2],C=o[_+4],S=Math.max(v,y,C),A=Math.min(v,y,C);S>.9&&A<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){const _=new w,v=new w,y=new w,C=new w,S=new re,A=new re,P=new re;for(let B=0,M=0;B<r.length;B+=9,M+=6){_.set(r[B+0],r[B+1],r[B+2]),v.set(r[B+3],r[B+4],r[B+5]),y.set(r[B+6],r[B+7],r[B+8]),S.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),C.copy(_).add(v).add(y).divideScalar(3);const T=m(C);x(S,M+0,_,T),x(A,M+2,v,T),x(P,M+4,y,T)}}function x(_,v,y,C){C<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.vertices,e.indices,e.radius,e.details)}}const ey={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ld(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=ry(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return io(r,o,t,a,l,d,0),o}};function Ld(s,e,t,n,i){let r,o;if(i===gy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Yh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Yh(r,s[r],s[r+1],o);return o&&Da(o,o.next)&&(ro(o),o=o.next),o}function bs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Da(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(s,e,t,n,i,r,o){if(!s)return;!o&&r&&uy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ny(s,n,i,r):ty(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ro(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=iy(bs(s),e,t),io(s,e,t,n,i,r,2)):o===2&&sy(s,e,t,n,i,r):io(bs(s),e,t,n,i,r,1);break}}}function ty(s){const e=s.prev,t=s,n=s.next;if(Bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&tr(i,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ny(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Bt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Lc(d,g,e,t,n),_=Lc(x,m,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&tr(a,u,l,h,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&tr(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&tr(a,u,l,h,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&tr(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function iy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Da(i,r)&&Dd(i,n,n.next,r)&&so(i,r)&&so(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ro(n),ro(n.next),n=s=r),n=n.next}while(n!==s);return bs(n)}function sy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dy(o,a)){let l=Nd(o,a);o=bs(o,o.next),l=bs(l,l.next),io(o,e,t,n,i,r,0),io(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ry(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Ld(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(fy(c));for(i.sort(oy),r=0;r<i.length;r++)t=ay(i[r],t);return t}function oy(s,e){return s.x-e.x}function ay(s,e){const t=ly(s,e);if(!t)return e;const n=Nd(t,s);return bs(n,n.next),bs(t,t.next)}function ly(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&tr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),so(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&cy(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function cy(s,e){return Bt(s.prev,s,e.prev)<0&&Bt(e.next,s,s.next)<0}function uy(s,e,t,n){let i=s;do i.z===0&&(i.z=Lc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hy(i)}function hy(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Lc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function fy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function tr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function dy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!py(s,e)&&(so(s,e)&&so(e,s)&&my(s,e)&&(Bt(s.prev,s,e.prev)||Bt(s,e.prev,e))||Da(s,e)&&Bt(s.prev,s,s.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Da(s,e){return s.x===e.x&&s.y===e.y}function Dd(s,e,t,n){const i=Yo(Bt(s,e,t)),r=Yo(Bt(s,e,n)),o=Yo(Bt(t,n,s)),a=Yo(Bt(t,n,e));return!!(i!==r&&o!==a||i===0&&jo(s,t,e)||r===0&&jo(s,n,e)||o===0&&jo(t,s,n)||a===0&&jo(t,e,n))}function jo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Yo(s){return s>0?1:s<0?-1:0}function py(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function so(s,e){return Bt(s.prev,s,s.next)<0?Bt(s,e,s.next)>=0&&Bt(s,s.prev,e)>=0:Bt(s,e,s.prev)<0||Bt(s,s.next,e)<0}function my(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Nd(s,e){const t=new Dc(s.i,s.x,s.y),n=new Dc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yh(s,e,t,n){const i=new Dc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ro(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class cu{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return cu.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];qh(e),Kh(n,e);let o=e.length;t.forEach(qh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Kh(n,t[l]);const a=ey.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Kh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class uu extends lu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uu(e.radius,e.detail)}}class Ke extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,f=new w,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const S=C/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(S+y,1-v),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const v=u[p][_+1],y=u[p][_],C=u[p+1][_],S=u[p+1][_+1];(p!==0||o>0)&&d.push(v,y,S),(p!==n-1||l<Math.PI)&&d.push(y,C,S)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new w,h=new w,f=new w;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const x=g/i*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,_=(i+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class es extends Et{constructor(e=new Pd(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new re;let u=new w;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),p()}function m(v){u=e.getPointAt(v/t,u);const y=o.normals[v],C=o.binormals[v];for(let S=0;S<=i;S++){const A=S/i*Math.PI*2,P=Math.sin(A),B=-Math.cos(A);l.x=B*y.x+P*C.x,l.y=B*y.y+P*C.y,l.z=B*y.z+P*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const C=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),A=(i+1)*v+y,P=(i+1)*(v-1)+y;g.push(C,S,P),g.push(S,A,P)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new es(new Ic[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vy extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Na extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bl extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xy extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function qo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _y(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $h(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class uo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class My extends uo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bu:r=e,a=2*t-n;break;case ku:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bu:o=e,l=2*n-t;break;case ku:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+_*o[c+C]+v*o[l+C]+y*o[h+C];return r}}class wy extends uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Sy extends uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new My(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case eo:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_y(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Va,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=eo;class _r extends vi{constructor(e,t,n){super(e,t,n)}}_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Qr;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends vi{}Fd.prototype.ValueTypeName="color";class Ts extends vi{}Ts.prototype.ValueTypeName="number";class by extends uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)bt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ts extends vi{InterpolantFactoryMethodLinear(e){return new by(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends vi{constructor(e,t,n){super(e,t,n)}}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Qr;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends vi{}Es.prototype.ValueTypeName="vector";class Od{constructor(e="",t=-1,n=[],i=Jp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ey(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(vi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=yy(l);l=$h(l,1,u),c=$h(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const m=[],p=[];Ud(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let _=0;_!==f[g].morphTargets.length;++_){const v=f[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new Ts(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Es,d+".position",f,"pos",i),n(ts,d+".quaternion",f,"rot",i),n(Es,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ty(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Fd;case"quaternion":return ts;case"bool":case"boolean":return _r;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ey(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ty(s.type);if(s.times===void 0){const t=[],n=[];Ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Bd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Ay=new Bd;class Ni{constructor(e){this.manager=e!==void 0?e:Ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class Ry extends Error{constructor(e,t){super(e),this.response=t}}class hu extends Ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){_();function _(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let S=0,A=u.length;S<A;S++){const P=u[S];P.onProgress&&P.onProgress(C)}p.enqueue(y),_()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Ry(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Zi.add(e,c);const u=bi[e];delete bi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cy extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=to("img");function l(){u(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ua extends Ni{constructor(e){super(e)}load(e,t,n,i){const r=new $t,o=new Cy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ho extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Py extends ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tl=new Ie,Zh=new w,Jh=new w;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iy extends fu{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kd extends ho{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Iy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qh=new Ie,Fr=new w,El=new w;class Ly extends fu{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),i.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class rr extends ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dy extends fu{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class du extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Dy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ny extends ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class or{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Uy extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Zi.add(e,l),r.manager.itemStart(e)}}class zd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(){return performance.now()}const pu="\\[\\]\\.:\\/",Fy=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",Oy="[^"+pu.replace("\\.","")+"]",By=/((?:WC+[\/:])*)/.source.replace("WC",mu),ky=/(WCOD+)?/.source.replace("WCOD",Oy),zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),Vy=new RegExp("^"+By+ky+zy+Hy+"$"),Gy=["material","materials","bones","map"];class Wy{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fy,"")}static parseTrackName(e){const t=Vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Wy;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tf=new Ie;class Xy{constructor(e,t,n=0,i=1/0){this.ray=new lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tf),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(nf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Nc(e[i],this,n,t);return n.sort(nf),n}}function nf(s,e){return s.distance-e.distance}function Nc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const gu=["skyTop","skyHorizon","sun","hemiSky","hemiGround","fog","water","cloud","shadowTint","highlightTint"],vu=["sunIntensity","hemiIntensity","stars","fireflies","dust","exposure","rain","wet","gloom","birds","fogNear","fogFar","saturation","rays","cloudCover"],Kr={rain:0,wet:0,gloom:0,birds:0,fogNear:60,fogFar:750,saturation:1.08,rays:.6,cloudCover:.75,shadowTint:"#00000a",highlightTint:"#060300"},Wr={...Kr,skyTop:"#0d1530",skyHorizon:"#2b3866",sun:"#9fb4ff",sunIntensity:.55,hemiSky:"#4c62a6",hemiGround:"#1a2030",hemiIntensity:.7,fog:"#222e52",water:"#16223f",cloud:"#3a4670",stars:1,fireflies:1,dust:0,exposure:1.3,fogNear:30,fogFar:520,saturation:1.05,rays:0,cloudCover:.45,shadowTint:"#000414",highlightTint:"#020208"},Ji=[{id:"golden-day",name:"Golden Day",description:"Bright daylight and warm sun",hour:15.2,swatch:["#6aa2e0","#f6d48e"],key:{...Kr,skyTop:"#3d7fd4",skyHorizon:"#c4dcea",sun:"#ffe1ae",sunIntensity:3.1,hemiSky:"#cfe0f0",hemiGround:"#8a8450",hemiIntensity:1.05,fog:"#c9dbe2",water:"#4f7f7c",cloud:"#fffaf0",stars:0,fireflies:0,dust:1,exposure:1,birds:1,rays:.5,fogNear:80,fogFar:900,highlightTint:"#0a0500"}},{id:"dreamy-dusk",name:"Dreamy Dusk",description:"Soft twilight and pink reflections",hour:18.65,swatch:["#8a86c2","#f3a283"],key:{...Kr,skyTop:"#6d76b6",skyHorizon:"#f2a585",sun:"#ff9a58",sunIntensity:1.9,hemiSky:"#bba7cb",hemiGround:"#4d463f",hemiIntensity:.85,fog:"#d5a6a6",water:"#7c6f8e",cloud:"#ffc0a6",stars:.12,fireflies:.45,dust:.5,exposure:1.08,birds:.6,fogNear:45,fogFar:650,rays:.9,shadowTint:"#06000c",highlightTint:"#0c0300"}},{id:"midnight-blue",name:"Midnight Blue",description:"Deep blue night, stars and fireflies",hour:23,swatch:["#0f1a3c","#4c62a6"],key:Wr},{id:"rainy-solitude",name:"Rainy Solitude",description:"Gentle rain and a quiet, grey lake",hour:13,swatch:["#7f8b94","#b9c2c2"],key:{...Kr,skyTop:"#7a8792",skyHorizon:"#b4bcbd",sun:"#dfe3e2",sunIntensity:.45,hemiSky:"#b3bdc2",hemiGround:"#4c5444",hemiIntensity:1.25,fog:"#a8b0b0",water:"#41575a",cloud:"#8b959b",stars:0,fireflies:0,dust:0,exposure:1.05,rain:1,wet:1,gloom:1,fogNear:14,fogFar:330,saturation:.92,rays:0,cloudCover:1,shadowTint:"#000306",highlightTint:"#000000"}}],Ko=[{hour:0,...Wr},{hour:4.6,...Wr,skyHorizon:"#3c3f70",stars:.85},{hour:6.2,...Kr,skyTop:"#9fb0da",skyHorizon:"#f6c4b2",sun:"#ffb38a",sunIntensity:1.5,hemiSky:"#e6d2d6",hemiGround:"#5d6045",hemiIntensity:.8,fog:"#e2c8c4",water:"#8d8a9a",cloud:"#ffd9cc",stars:.08,fireflies:0,dust:.6,exposure:1.05,birds:.6},{hour:9,...Ji[0].key,skyTop:"#6f9fdc",sun:"#fff0da",sunIntensity:2.6},{hour:14,...Ji[0].key},{hour:17.2,...Ji[0].key,skyTop:"#8ea6d2",skyHorizon:"#f3cfa6",sun:"#ffc283",sunIntensity:2.5,hemiSky:"#efdcc8",fog:"#e9d2b6",water:"#7f8a7a",cloud:"#ffe2c4"},{hour:18.7,...Ji[1].key},{hour:20.2,...Wr},{hour:24,...Wr}],jy=new w(-.45,.62,-.65).normalize();function Hd(s,e){const t=(s-6.25)/13*Math.PI,n=Math.sin(t);e.sunDirection.set(-Math.cos(t)*.35,n,-.95).normalize(),n<-.04?(e.light.copy(jy),e.isSun=0):(e.light.set(-Math.cos(t)*.35,Math.max(n,.02),-.95).normalize(),e.isSun=1),e.sunUp=Math.min(1,Math.max(0,e.sunDirection.y*6+.2))}function xu(){const s={light:new w(0,1,0),sunDirection:new w(0,1,0),sunUp:1,isSun:1};return gu.forEach(e=>{s[e]=new ce}),vu.forEach(e=>{s[e]=0}),s}function Vd(s,e,t,n){return gu.forEach(i=>s[i].set(e[i]).lerp(Yy.set(t[i]),n)),vu.forEach(i=>{s[i]=e[i]+(t[i]-e[i])*n}),s}const Yy=new ce;function Al(s,e=xu()){const t=Ji.find(n=>n.id===s)??Ji[0];return Vd(e,t.key,t.key,0),Hd(t.hour,e),e}function qy(s,e=xu()){const t=(s%24+24)%24;let n=Ko.findIndex(a=>a.hour>t)-1;n<0&&(n=Ko.length-2);const i=Ko[n],r=Ko[n+1],o=(t-i.hour)/(r.hour-i.hour);return Vd(e,i,r,o*o*(3-2*o)),Hd(t,e),e}function Gd(s,e,t){gu.forEach(n=>s[n].lerp(e[n],t)),vu.forEach(n=>{s[n]+=(e[n]-s[n])*t}),s.light.lerp(e.light,t).normalize(),s.sunDirection.lerp(e.sunDirection,t).normalize(),s.sunUp+=(e.sunUp-s.sunUp)*t,s.isSun+=(e.isSun-s.isSun)*t}function Ky(s,e){Gd(s,e,1)}function $y(s){const e=(s%24+24)%24;return e<5.5||e>=20?"Night":e<7.6?"Sunrise":e<12?"Morning":e<16.3?"Afternoon":e<18.1?"Golden hour":"Sunset"}const sf={"golden-day":Mp,"dreamy-dusk":wp,"midnight-blue":yp,"rainy-solitude":xp};function Zy({mood:s,hour:e,onChange:t}){const[n,i]=it.useState(!1),r=it.useRef(null),o=it.useRef(null);it.useEffect(()=>{if(!n)return;const c=h=>{var f;h.key==="Escape"&&(i(!1),(f=o.current)==null||f.focus())},u=h=>{var f;(f=r.current)!=null&&f.contains(h.target)||i(!1)};return document.addEventListener("keydown",c),document.addEventListener("pointerdown",u),()=>{document.removeEventListener("keydown",c),document.removeEventListener("pointerdown",u)}},[n]);const a=Ji.find(c=>c.id===s),l=a?sf[a.id]:Iu;return he.jsxs("div",{className:"mood",ref:r,children:[n&&he.jsxs("div",{className:"mood-panel",id:"mood-panel",role:"group","aria-label":"Moods",children:[he.jsx("p",{className:"mood-title",children:"Set the mood"}),he.jsxs("ul",{children:[Ji.map(c=>{const u=sf[c.id];return he.jsx("li",{children:he.jsxs("button",{type:"button","aria-pressed":s===c.id,onClick:()=>{t(c.id),i(!1)},children:[he.jsx("span",{className:"mood-swatch",style:{background:`linear-gradient(160deg, ${c.swatch[0]}, ${c.swatch[1]})`},"aria-hidden":"true",children:he.jsx(u,{size:13})}),he.jsxs("span",{className:"mood-name",children:[c.name,he.jsx("small",{children:c.description})]})]})},c.id)}),he.jsx("li",{children:he.jsxs("button",{type:"button","aria-pressed":s==="cycle",onClick:()=>{t("cycle"),i(!1)},children:[he.jsx("span",{className:"mood-swatch mood-swatch-cycle","aria-hidden":"true",children:he.jsx(Iu,{size:13})}),he.jsxs("span",{className:"mood-name",children:["Let the day pass",he.jsx("small",{children:"Dawn to night, in five minutes"})]})]})})]})]}),he.jsxs("button",{ref:o,type:"button",className:"mood-button","aria-expanded":n,"aria-controls":"mood-panel",onClick:()=>i(c=>!c),children:[he.jsx(l,{size:15,"aria-hidden":"true"}),he.jsx("span",{children:a?a.name:`${$y(e)}`})]})]})}const Wd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jy=new Ca(-1,1,1,-1,0,1);class Qy extends Et{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const eM=new Qy;class _u{constructor(e){this._mesh=new O(eM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Uc extends Mr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mr.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _u(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rf extends Mr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class tM extends Mr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uc(Wd),this.copyPass.material.blending=Ii,this.clock=new zd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rf!==void 0&&(o instanceof rf?n=!0:o instanceof tM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const iM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class sM extends Mr{constructor(){super();const e=iM;this.uniforms=mr.clone(e.uniforms),this.material=new vy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rM extends Mr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const oM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gr extends Mr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(r,o,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Hn(r,o,{type:pi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Hn(r,o,{type:pi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=oM;this.highPassUniforms=mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wd;this.copyUniforms=mr.clone(u.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new Ot,this.fsQuad=new _u(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=gr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}gr.BlurDirectionX=new re(1,0);gr.BlurDirectionY=new re(0,1);const aM={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},$s={min:new w(-2.9,1.1,-1.75),max:new w(2.5,2.7,3.6)},of={min:-1.05,max:.6},af=1.7,lM=1.4;function cM(s,e,t){const n={enabled:!0},i=()=>({position:new w,yaw:0,pitch:0}),r=i(),o=i(),a=i(),l=(X,k)=>{X.position.copy(k.position),X.yaw=k.yaw,X.pitch=k.pitch};function c(X){const k=Math.min(1,Math.max(0,(1.25-X)/.75));s.fov=50+k*18,s.updateProjectionMatrix();const V=new w(1.8+k*.6,.45,-3.4-k*1.2);r.position.set(1.9+k*.3,2.3+k*.4,3.9+k*.6).clamp($s.min,$s.max);const F=V.sub(r.position);r.yaw=Math.atan2(-F.x,-F.z),r.pitch=Math.atan2(F.y,Math.hypot(F.x,F.z))}function u(X=!1){l(a,r),(X||t.reducedMotion)&&l(o,r)}const h=new w,f=new w;function d(){h.set(-Math.sin(a.yaw),0,-Math.cos(a.yaw)),f.set(Math.cos(a.yaw),0,-Math.sin(a.yaw))}function g(X,k){a.yaw+=X,a.pitch=Math.min(of.max,Math.max(of.min,a.pitch+k))}function x(X,k){d(),a.position.addScaledVector(h,X).addScaledVector(f,k).clamp($s.min,$s.max),_=null}const m={forwards:0,turning:0};function p(X,k){m.forwards=X,m.turning=k}let _=null;function v(X,k){_=new w(X,a.position.y,k).clamp($s.min,$s.max)}const y=new Map;let C=0;const S=()=>{const[X,k]=[...y.values()];return Math.hypot(X.x-k.x,X.y-k.y)},A=()=>{const X=[...y.values()];return{x:X.reduce((k,V)=>k+V.x,0)/X.length,y:X.reduce((k,V)=>k+V.y,0)/X.length}},P=X=>{n.enabled&&(y.set(X.pointerId,{x:X.clientX,y:X.clientY,button:X.button}),y.size===2&&(C=S()))},B=X=>{const k=y.get(X.pointerId);if(!k||!n.enabled)return;const V=1/Math.max(320,Math.min(e.clientWidth,e.clientHeight));if(y.size>=2){const de=A();k.x=X.clientX,k.y=X.clientY;const pe=A();g((pe.x-de.x)*V*2.2,(pe.y-de.y)*V*2.2);const z=S();x((z-C)*V*3,0),C=z;return}const F=X.clientX-k.x,ne=X.clientY-k.y;if(k.x=X.clientX,k.y=X.clientY,k.button===2){g(F*V*2.2,ne*V*2.2);return}g(F*V*2.2,0),x(-ne*V*4,0)},M=X=>{y.delete(X.pointerId),y.size<2&&(C=0)},T=X=>{n.enabled&&(X.preventDefault(),x(Math.max(-.6,Math.min(.6,-X.deltaY*.004)),0))},N=X=>X.preventDefault();e.addEventListener("pointerdown",P),window.addEventListener("pointermove",B),window.addEventListener("pointerup",M),window.addEventListener("pointercancel",M),e.addEventListener("wheel",T,{passive:!1}),e.addEventListener("contextmenu",N);function L(X,k,V){g(X,-k),V!==1&&x(V<1?.4:-.4,0)}let U=!1;const J=new w;function H(X){if(n.enabled&&(m.forwards||m.turning)&&(g(m.turning*lM*X,0),x(m.forwards*af*X,0)),_){const ne=_.clone().sub(a.position),de=ne.length();de<.02?_=null:a.position.addScaledVector(ne,Math.min(1,af*X/de))}const k=t.reducedMotion?1:1-Math.exp(-X*9);o.position.lerp(a.position,k),o.yaw+=(a.yaw-o.yaw)*k,o.pitch+=(a.pitch-o.pitch)*k,s.position.copy(o.position),J.set(-Math.sin(o.yaw)*Math.cos(o.pitch),Math.sin(o.pitch),-Math.cos(o.yaw)*Math.cos(o.pitch)),s.lookAt(J.add(o.position));const F=a.position.distanceTo(r.position)+Math.abs(a.yaw-r.yaw)+Math.abs(a.pitch-r.pitch)>.3;F!==U&&(U=F,t.onMoved(U))}return{controls:n,frame:c,goHome:u,nudge:L,hold:p,walkTo:v,update:H,dispose(){e.removeEventListener("pointerdown",P),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",M),window.removeEventListener("pointercancel",M),e.removeEventListener("wheel",T),e.removeEventListener("contextmenu",N)}}}function $r(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=lf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);const g=lf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function lf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new At(o,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function cf(s,e){if(e===Qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Tc||e===nd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Tc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Fa extends O{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new sn;const n=this,i=t.color!==void 0?new ce(t.color):new ce(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Fa.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Ai,h=new w,f=new w,d=new w,g=new Ie,x=new w(0,0,-1),m=new dt,p=new w,_=new w,v=new dt,y=new Ie,C=this.camera,S=new Hn(r,o,{samples:c,type:pi}),A=new Vt({name:l.name!==void 0?l.name:"unspecified",uniforms:mr.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=S.texture,A.uniforms.color.value=i,A.uniforms.textureMatrix.value=y,this.material=A,this.onBeforeRender=function(P,B,M){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),g.extractRotation(M.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),_.subVectors(f,x),_.reflect(h).negate(),_.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(_),C.far=M.far,C.updateMatrixWorld(),C.projectionMatrix.copy(M.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(C.projectionMatrix),y.multiply(C.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const T=C.projectionMatrix;v.x=(Math.sign(m.x)+T.elements[8])/T.elements[0],v.y=(Math.sign(m.y)+T.elements[9])/T.elements[5],v.z=-1,v.w=(1+T.elements[10])/T.elements[14],m.multiplyScalar(2/m.dot(v)),T.elements[2]=m.x,T.elements[6]=m.y,T.elements[10]=m.z+1-a,T.elements[14]=m.w,n.visible=!1;const N=P.getRenderTarget(),L=P.xr.enabled,U=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(S),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(B,C),P.xr.enabled=L,P.shadowMap.autoUpdate=U,P.setRenderTarget(N);const J=M.viewport;J!==void 0&&P.state.viewport(J),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}}Fa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const ue=(s,e={})=>new Na({color:s,roughness:.88,metalness:0,...e}),oo=6,wt={uTime:{value:0},uSunDir:{value:new w(0,1,0)},uLightDir:{value:new w(0,1,0)},uSunColor:{value:new ce},uSunIntensity:{value:1},uHemiSky:{value:new ce},uHemiGround:{value:new ce},uHemiIntensity:{value:1},uFogColor:{value:new ce},uFogNear:{value:60},uFogFar:{value:750},uSkyTop:{value:new ce},uHorizon:{value:new ce},uWater:{value:new ce},uStars:{value:0},uMoonDir:{value:new w(-.45,.62,-.65).normalize()},uSunUp:{value:1},uRain:{value:0},uWet:{value:0},uGloom:{value:0},uDucks:{value:Array.from({length:oo},()=>new dt(0,0,0,0))}},fo=`
float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
}`,yu=`
vec3 applyFog(vec3 color, vec3 worldPosition){
  float distance = length(worldPosition - cameraPosition);
  // Aerial perspective: distance takes on the colour of the air, a little more quickly near the ground.
  float amount = smoothstep(uFogNear, uFogFar, distance);
  amount = 1.0 - (1.0 - amount) * (1.0 - smoothstep(uFogNear * 0.5, uFogFar * 2.0, distance) * 0.35);
  return mix(color, uFogColor, clamp(amount, 0.0, 1.0));
}`,Mu=`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uLightDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uHemiSky;
uniform vec3 uHemiGround;
uniform float uHemiIntensity;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uSunUp;
uniform float uWet;
uniform float uRain;`,Xd=`
float gust(vec2 p){ return noise(p * 0.07 + vec2(uTime * 0.22, uTime * 0.08)); }
float breeze(vec3 p){ return sin(uTime * 1.5 + p.x * 0.55 + p.z * 0.35) * 0.45 + (gust(p.xz) - 0.4) * 1.6; }`,uM=`
uniform float uTime;
uniform float uRain;
attribute float aShade;
varying float vHeight;
varying float vShade;
varying vec3 vWorld;
#ifdef USE_COLOR
varying vec3 vColor;
#endif
${fo}
${Xd}
void main(){
  vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
  float h = uv.y;
  float sway = breeze(world.xyz) * (0.11 + uRain * 0.05) * h * h;
  world.x += sway;
  world.z += sway * 0.35;
  world.y -= abs(sway) * 0.25 * h;
  vHeight = h;
  vShade = aShade;
  vWorld = world.xyz;
  #ifdef USE_COLOR
  vColor = color;
  #endif
  gl_Position = projectionMatrix * viewMatrix * world;
}`,hM=`
${Mu}
uniform vec3 uBase;
uniform vec3 uTip;
uniform vec3 uAltBase;
uniform vec3 uAltTip;
varying float vHeight;
varying float vShade;
varying vec3 vWorld;
#ifdef USE_COLOR
varying vec3 vColor;
#endif
${yu}
void main(){
  #ifdef USE_COLOR
  vec3 albedo = vColor * (0.85 + vShade * 0.3);
  #else
  vec3 albedo = mix(mix(uBase, uTip, vHeight), mix(uAltBase, uAltTip, vHeight), smoothstep(0.45, 0.7, vShade)) * (0.82 + fract(vShade * 7.3) * 0.36);
  #endif
  albedo *= 1.0 - uWet * 0.25;
  // Shade gathers at the roots, where blades crowd together.
  float occlusion = mix(0.45, 1.0, smoothstep(0.0, 0.7, vHeight));
  vec3 light = mix(uHemiGround, uHemiSky, 0.4 + vHeight * 0.6) * uHemiIntensity * 0.8 * occlusion + uSunColor * uSunIntensity * 0.3 * uSunUp * (0.55 + vHeight * 0.45);
  vec3 view = normalize(vWorld - cameraPosition);
  float back = pow(max(dot(view, normalize(uSunDir)), 0.0), 5.0) * vHeight * uSunUp;
  vec3 color = albedo * light + albedo * uSunColor * back * uSunIntensity * 0.6;
  // Wet tips catch a little sky.
  color += uHemiSky * uWet * 0.06 * vHeight;
  gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
}`;function $o(s,e,t,n,i=!1){return new Vt({uniforms:{...wt,uBase:{value:new ce(s)},uTip:{value:new ce(e)},uAltBase:{value:new ce(t)},uAltTip:{value:new ce(n)}},vertexShader:uM,fragmentShader:hM,side:It,vertexColors:i})}const fM=`
uniform float uTime;
uniform float uRain;
attribute float aOcclusion;
varying vec3 vNormalWorld;
varying vec3 vWorld;
varying vec2 vUv;
varying float vOcclusion;
varying vec3 vTint;
${fo}
${Xd}
void main(){
  mat4 model = modelMatrix * instanceMatrix;
  vec4 world = model * vec4(position, 1.0);
  float height = max(0.0, position.y - 1.0);
  float sway = breeze(world.xyz + vec3(instanceMatrix[3].x)) * (0.02 + uRain * 0.015) * height;
  world.x += sway + sin(uTime * 2.3 + position.x * 3.0 + position.z * 2.0) * 0.012 * height;
  world.z += sway * 0.5;
  vWorld = world.xyz;
  vNormalWorld = normalize(mat3(model) * normal);
  vUv = uv;
  vOcclusion = aOcclusion;
  vTint = color;
  gl_Position = projectionMatrix * viewMatrix * world;
}`,dM=`
${Mu}
uniform sampler2D uMap;
varying vec3 vNormalWorld;
varying vec3 vWorld;
varying vec2 vUv;
varying float vOcclusion;
varying vec3 vTint;
${yu}
void main(){
  vec4 leaf = texture2D(uMap, vUv);
  // Far away, fine leaves blur into their mipmaps; a lower cut-off keeps distant crowns full.
  if (leaf.a < mix(0.5, 0.12, smoothstep(12.0, 140.0, length(vWorld - cameraPosition)))) discard;
  vec3 n = normalize(vNormalWorld);
  vec3 l = normalize(uLightDir);
  float wrap = dot(n, l) * 0.5 + 0.5;
  // A soft painted terminator rather than a hard cel line.
  float lit = smoothstep(0.38, 0.72, wrap) * uSunUp;
  vec3 albedo = vTint * (0.55 + leaf.r * 0.6) * (1.0 - uWet * 0.2);
  vec3 sky = mix(uHemiGround, uHemiSky, n.y * 0.5 + 0.5) * uHemiIntensity;
  vec3 color = albedo * (sky * 0.62 * vOcclusion + uSunColor * uSunIntensity * 0.42 * lit * mix(0.55, 1.0, vOcclusion));
  vec3 view = normalize(vWorld - cameraPosition);
  float through = pow(max(dot(view, normalize(uSunDir)), 0.0), 6.0) * uSunUp * (1.0 - vOcclusion * 0.5);
  color += albedo * uSunColor * through * uSunIntensity * 0.45;
  gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
}`;function uf(s){return new Vt({uniforms:{...wt,uMap:{value:s}},vertexShader:fM,fragmentShader:dM,side:It,vertexColors:!0})}const pM={name:"LakeShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
    uniform mat4 textureMatrix;
    attribute float aDepth;
    varying vec4 vMirror;
    varying vec3 vWorld;
    varying float vDepth;
    void main(){
      vMirror = textureMatrix * vec4(position, 1.0);
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      vDepth = aDepth;
      gl_Position = projectionMatrix * viewMatrix * world;
    }`,fragmentShader:`
    ${Mu}
    uniform sampler2D tDiffuse;
    uniform vec3 uSkyTop;
    uniform vec3 uHorizon;
    uniform vec3 uWater;
    uniform vec4 uDucks[${oo}];
    varying vec4 vMirror;
    varying vec3 vWorld;
    varying float vDepth;
    ${fo}
    ${yu}
    // Rings spreading from points that appear at random, for raindrops.
    float rainRings(vec2 p){
      vec2 cell = floor(p);
      vec2 local = fract(p) - 0.5;
      float seed = hash21(cell);
      float t = fract(uTime * 0.9 + seed * 7.0);
      vec2 centre = (vec2(hash21(cell + 3.1), hash21(cell + 7.7)) - 0.5) * 0.6;
      float d = length(local - centre);
      return sin((d - t * 0.45) * 60.0) * smoothstep(0.45 * t + 0.04, 0.45 * t, d) * (1.0 - t);
    }
    void main(){
      vec2 p = vWorld.xz;
      float a = noise(p * vec2(0.18, 0.9) + vec2(uTime * 0.05, uTime * 0.22));
      float b = noise(p * vec2(0.5, 2.2) - vec2(uTime * 0.12, uTime * 0.35));
      vec2 ripple = vec2((a - 0.5) * 0.012 + (b - 0.5) * 0.006, (b - 0.5) * 0.02 + (a - 0.5) * 0.01);
      float distance = length(vWorld - cameraPosition);
      ripple *= mix(1.0, 0.25, smoothstep(10.0, 120.0, distance)) * (1.0 + uRain * 0.8);

      // Ducks: slow rings around each one, and a V of wake behind it when it swims.
      float wave = 0.0;
      for (int i = 0; i < ${oo}; i++){
        vec4 duck = uDucks[i];
        if (duck.w < 0.5) continue;
        vec2 offset = p - duck.xy;
        float d = length(offset);
        wave += sin(d * 26.0 - uTime * 3.2) * exp(-d * 2.2) * (0.35 + duck.z * 2.0);
      }
      // Lapping lines where the water meets the bank.
      float shore = sin(vDepth * 55.0 - uTime * 1.6 + noise(p * 0.8) * 4.0) * smoothstep(0.35, 0.02, vDepth);
      float rings = 0.0;
      if (uRain > 0.01 && distance < 40.0) rings = (rainRings(p * 1.6) + rainRings(p * 1.6 + 13.7)) * uRain * smoothstep(40.0, 8.0, distance);
      ripple += vec2(wave * 0.004 + rings * 0.006, wave * 0.006 + shore * 0.003 + rings * 0.006);

      vec4 coord = vMirror;
      coord.xy += ripple * coord.w;
      vec3 mirror = texture2DProj(tDiffuse, coord).rgb;
      vec3 view = normalize(cameraPosition - vWorld);
      float fresnel = pow(1.0 - max(view.y, 0.0), 4.0);
      // Depth: clear, green-gold shallows over the bed near the bank; deep, darker water further out.
      float depth = smoothstep(0.02, 0.9, vDepth);
      vec3 shallow = mix(vec3(0.42, 0.44, 0.3), uWater * 1.25, 0.45) * (0.5 + uSunUp * 0.5);
      vec3 body = mix(shallow, uWater * 0.82, depth);
      float reflectivity = mix(0.3, 0.68, depth) + 0.28 * fresnel + uWet * 0.08;
      vec3 color = mix(body, mirror, clamp(reflectivity, 0.0, 0.96));
      color += (shore * 0.5 + 0.5) * smoothstep(0.12, 0.0, vDepth) * 0.06 * (uHemiSky * uHemiIntensity);
      vec3 normal = normalize(vec3((a - 0.5) * 0.3 + wave * 0.15 + rings * 0.3, 1.0, (b - 0.5) * 0.3 + rings * 0.3));
      float glint = pow(max(dot(reflect(-view, normal), normalize(uSunDir)), 0.0), 220.0);
      color += uSunColor * glint * uSunIntensity * 0.6 * uSunUp;
      gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
    }`},mM=new Vt({uniforms:wt,side:vn,depthWrite:!1,vertexShader:`
    varying vec3 vDirection;
    void main(){
      vDirection = normalize(position);
      vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = clip.xyww;
    }`,fragmentShader:`
    uniform vec3 uSkyTop;
    uniform vec3 uHorizon;
    uniform vec3 uSunDir;
    uniform vec3 uSunColor;
    uniform vec3 uMoonDir;
    uniform float uStars;
    uniform float uTime;
    uniform float uSunUp;
    uniform float uGloom;
    varying vec3 vDirection;
    ${fo}
    float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
    // One layer of stars: the sky is divided into cells, a share (density) of which hold a star at a
    // random point; returns how much of the star covers this direction.
    float starLayer(vec3 d, float scale, float density, float size, out float seed){
      vec3 id = floor(d * scale);
      seed = hash(id);
      if (seed < 1.0 - density) return 0.0;
      vec3 jitter = vec3(hash(id + 3.1), hash(id + 7.7), hash(id + 1.3)) - 0.5;
      vec3 centre = normalize(id + 0.5 + jitter * 0.5);
      return smoothstep(size, 0.0, length(d - centre) * scale);
    }
    void main(){
      vec3 d = normalize(vDirection);
      float h = clamp(d.y, -0.2, 1.0);
      vec3 color = mix(uHorizon, uSkyTop, pow(smoothstep(-0.02, 0.65, h), 0.75));
      float sun = max(dot(d, normalize(uSunDir)), 0.0);
      float clearSky = 1.0 - uGloom * 0.85;
      color += uSunColor * (smoothstep(0.9986, 0.9991, sun) * 3.0 + pow(sun, 60.0) * 0.6 + pow(sun, 8.0) * 0.3 + pow(sun, 2.5) * 0.12) * uSunUp * clearSky;
      color = mix(color, uHorizon, smoothstep(0.18, 0.0, h) * 0.35);
      // Low, rolling rain cloud.
      vec2 q = d.xz / max(0.08, d.y + 0.12);
      float cloud = noise(q * 1.4 + vec2(uTime * 0.02, 0.0)) * 0.6 + noise(q * 3.7 - vec2(uTime * 0.03, 0.0)) * 0.4;
      color = mix(color, mix(uHorizon, uSkyTop, 0.5) * (0.82 + cloud * 0.3), uGloom * smoothstep(-0.05, 0.25, h));
      float moon = max(dot(d, uMoonDir), 0.0);
      color += vec3(0.95, 0.96, 1.0) * smoothstep(0.99935, 0.9996, moon) * uStars * 1.4 * clearSky;
      color += vec3(0.45, 0.55, 0.9) * pow(moon, 60.0) * 0.3 * uStars;
      // A sky full of stars: many faint ones, fewer brighter ones and a few bright, tinted ones, all
      // twinkling, thicker along the faint band of the Milky Way.
      float night = uStars * clearSky * smoothstep(0.0, 0.22, h);
      if (night > 0.001){
        float band = exp(-pow(dot(d, normalize(vec3(0.42, 0.5, -0.76))) / 0.2, 2.0));
        float dust = noise(vec2(atan(d.z, d.x) * 5.0, d.y * 9.0)) * 0.6 + noise(vec2(atan(d.z, d.x) * 13.0, d.y * 21.0)) * 0.4;
        color += vec3(0.55, 0.6, 0.85) * band * dust * 0.16 * night;
        float seed;
        float faint = starLayer(d, 560.0, 0.035 + band * 0.07, 0.5, seed);
        color += vec3(0.85, 0.9, 1.0) * faint * (0.3 + 0.5 * fract(seed * 91.0)) * (0.7 + 0.3 * sin(uTime * 2.3 + seed * 60.0)) * night;
        float medium = starLayer(d, 260.0, 0.02 + band * 0.02, 0.42, seed);
        color += vec3(1.0, 0.97, 0.92) * medium * (0.7 + 0.6 * fract(seed * 53.0)) * (0.65 + 0.35 * sin(uTime * 1.7 + seed * 80.0)) * night;
        float bright = starLayer(d, 110.0, 0.012, 0.32, seed);
        vec3 tint = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.85, 0.7), fract(seed * 17.0));
        color += tint * bright * 1.8 * (0.7 + 0.3 * sin(uTime * 1.3 + seed * 40.0)) * night;
      }
      gl_FragColor = vec4(color, 1.0);
    }`});function hf(s,e,t){return new Vt({uniforms:{uTime:wt.uTime,uColor:{value:new ce(s)},uOpacity:{value:0},uSize:{value:e},uPixelRatio:{value:1}},transparent:!0,depthWrite:!1,blending:Ms,vertexShader:`
      uniform float uTime;
      uniform float uSize;
      uniform float uPixelRatio;
      attribute float aSeed;
      varying float vAlpha;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * 0.25 + aSeed * 11.0) * 0.35;
        p.y += sin(uTime * 0.33 + aSeed * 7.0) * 0.22;
        p.z += cos(uTime * 0.21 + aSeed * 5.0) * 0.35;
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = min(uSize * uPixelRatio * 60.0 / -view.z, 9.0 * uPixelRatio);
        float near = smoothstep(0.8, 2.0, -view.z);
        ${t?"vAlpha = near * smoothstep(0.35, 1.0, sin(uTime * 1.1 + aSeed * 23.0) * 0.5 + 0.5);":"vAlpha = near * (0.45 + 0.55 * sin(uTime * 0.7 + aSeed * 31.0));"}
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d) * vAlpha * uOpacity;
        gl_FragColor = vec4(uColor * a, a);
      }`})}function gM(){return new Vt({uniforms:{uTime:wt.uTime,uRain:wt.uRain,uCentre:{value:new w},uColour:{value:new ce("#d8e2ea")}},transparent:!0,depthWrite:!1,blending:ys,vertexShader:`
      uniform float uTime;
      uniform vec3 uCentre;
      attribute float aSeed;
      attribute float aEnd;
      varying float vAlpha;
      void main(){
        vec3 box = vec3(26.0, 12.0, 26.0);
        vec3 p = position;
        p.y -= uTime * (9.0 + aSeed * 3.0);
        p = mod(p - uCentre + box * 0.5, box) - box * 0.5 + uCentre;
        p += vec3(0.08, 0.5, 0.03) * aEnd;
        vec4 view = viewMatrix * vec4(p, 1.0);
        vAlpha = smoothstep(0.6, 3.0, -view.z) * (0.3 + aSeed * 0.35);
        gl_Position = projectionMatrix * view;
      }`,fragmentShader:`
      uniform vec3 uColour;
      uniform float uRain;
      varying float vAlpha;
      void main(){ gl_FragColor = vec4(uColour, vAlpha * uRain * 0.55); }`})}const vM={name:"PaintedGradeShader",uniforms:{tDiffuse:{value:null},uShadowTint:{value:new ce(0,0,0)},uHighlightTint:{value:new ce(0,0,0)},uSaturation:{value:1},uSun:{value:new re(.5,.5)},uRays:{value:0},uRayColour:{value:new ce(1,1,1)},uAspect:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 uShadowTint;
    uniform vec3 uHighlightTint;
    uniform float uSaturation;
    uniform vec2 uSun;
    uniform float uRays;
    uniform vec3 uRayColour;
    uniform float uAspect;
    varying vec2 vUv;
    ${fo}
    void main(){
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      if (uRays > 0.01){
        // Light scattered towards the viewer from bright sky behind leaves, posts and the roof.
        vec2 step = (vUv - uSun) / 28.0;
        vec2 coord = vUv;
        float weight = 1.0, shafts = 0.0;
        for (int i = 0; i < 28; i++){
          coord -= step;
          vec3 s = texture2D(tDiffuse, coord).rgb;
          shafts += smoothstep(0.78, 1.0, dot(s, vec3(0.333))) * weight;
          weight *= 0.95;
        }
        vec2 toSun = (vUv - uSun) * vec2(uAspect, 1.0);
        color += uRayColour * shafts / 28.0 * uRays * 0.55 * smoothstep(1.2, 0.0, length(toSun));
      }
      float luma = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(luma), color, uSaturation);
      color += mix(uShadowTint, uHighlightTint, smoothstep(0.1, 0.8, luma));
      float grain = noise(vUv * vec2(900.0, 560.0)) * 0.6 + noise(vUv * 180.0) * 0.4;
      color *= 0.982 + grain * 0.036;
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }`},xM={body:"#7d6248",head:"#6f563e",breast:"#8a6b4c",tail:"#5f4a36"},_M={body:"#8f877a",head:"#2c4a36",breast:"#6a4130",tail:"#3a3530"};function yM(s,e){const t=new ze,n=new O(new Ke(.13,16,10),ue(s.body));n.scale.set(.82,.62,1.35),n.position.y=.04;const i=new O(new Ke(.1,14,10),ue(s.breast));i.position.set(0,.06,.11),i.scale.set(.95,.85,.8);const r=new O(new ei(.05,.12,8),ue(s.tail));r.rotation.x=-Math.PI/2-.5,r.position.set(0,.08,-.19);const o=new ze,a=new O(new Ke(.058,14,10),ue(s.head,{roughness:.6}));a.scale.set(.85,.95,1.1);const l=new O(new Ke(.03,10,6),ue("#c2a03c"));l.scale.set(.9,.38,1.6),l.position.set(0,-.012,.065),o.add(a,l),o.position.set(0,.17,.12);const c=new O(new Ke(.045,10,8),ue(s.head));c.scale.set(1,1.6,1),c.position.set(0,.11,.13);const u=new O(new Mn(.22,18),new Ot({map:e,transparent:!0,depthWrite:!1,opacity:.55}));return u.rotation.x=-Math.PI/2,u.scale.set(.8,1.3,1),u.position.y=.002,t.add(n,i,r,c,o,u),t.userData.head=o,t.traverse(h=>{h instanceof O&&h!==u&&(h.castShadow=!0)}),t}function MM(s,e,t,n,i){const r=[],o=new Ot({visible:!1});for(let c=0;c<oo-1;c++){const u=yM(c%2?xM:_M,i);u.position.set(2+(e()-.5)*9,t,n.shore(2)-5-e()*7);const h=new O(new Ke(.42,8,6),o);h.position.y=.1,u.add(h),s.add(u);const f=.12+e()*.1,d=e()*Math.PI*2;r.push({body:u,hit:h,heading:d,turnTo:d,speed:f,cruise:f,nextTurn:2+e()*6,dive:0,hurry:0,seed:e()*10})}const a=new w;function l(c,u){r.forEach((h,f)=>{h.nextTurn-=u,h.nextTurn<=0&&(h.turnTo=h.heading+(e()-.5)*(e()<.25?3:1.2),h.cruise=e()<.3?.02:.1+e()*.12,h.nextTurn=4+e()*8);const d=h.body.position;a.set(d.x+Math.sin(h.heading)*2,0,d.z+Math.cos(h.heading)*2),(a.z>n.shore(a.x)-1.8||a.z<n.far||a.x<n.minX||a.x>n.maxX)&&(h.turnTo=Math.atan2(2-d.x,n.shore(2)-8-d.z)+(e()-.5)*.6),r.forEach((p,_)=>{if(_===f)return;const v=d.x-p.body.position.x,y=d.z-p.body.position.z,C=Math.hypot(v,y);C<.7&&C>.001&&(d.x+=v/C*u*.15,d.z+=y/C*u*.15)});let g=h.turnTo-h.heading;g=Math.atan2(Math.sin(g),Math.cos(g)),h.heading+=g*Math.min(1,u*.6),h.hurry=Math.max(0,h.hurry-u);const x=h.hurry>0?.75:h.cruise;h.speed+=(x-h.speed)*Math.min(1,u*1.2),d.x+=Math.sin(h.heading)*h.speed*u,d.z+=Math.cos(h.heading)*h.speed*u,h.body.rotation.y=h.heading;let m=!1;if(h.dive>0){h.dive-=u;const p=1-h.dive/3.2;p<.2?h.body.rotation.x=p*5*1.3:p<.75?(m=!0,h.body.rotation.x=1.3):h.body.rotation.x=Math.max(0,(1-p)*4)*-.3,h.body.position.y=t-(m?.4:p<.2?p*.4:0),h.body.visible=!m}else{h.body.rotation.x=Math.sin(c*1.3+h.seed)*.03,h.body.rotation.z=Math.sin(c*1.1+h.seed*2)*.035,h.body.position.y=t+Math.sin(c*1.6+h.seed)*.008,h.body.visible=!0;const p=h.body.userData.head;p.rotation.y=Math.sin(c*.5+h.seed*3)*.4,p.rotation.x=Math.max(0,Math.sin(c*.3+h.seed))*.25}wt.uDucks.value[f].set(d.x,d.z,Math.min(1,h.speed*1.4),m?0:1)})}return{hits:r.map(c=>c.hit),update:l,disturb(c){const u=r.find(h=>h.hit===c);!u||u.dive>0||(e()<.5?u.dive=3.2:(u.hurry=3,u.turnTo=Math.PI+(e()-.5)*.8,u.heading+=(e()-.5)*.3))}}}function wM(s,e){let t=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();t.applyMatrix4(e);const n=s.material.vertexColors;for(const i of Object.keys(t.attributes))!["position","normal","uv"].includes(i)&&!(n&&i==="color")&&t.deleteAttribute(i);return t.attributes.normal||t.computeVertexNormals(),t.attributes.uv||t.setAttribute("uv",new At(new Float32Array(t.attributes.position.count*2),2)),t.morphAttributes={},t}function wa(s){s.updateMatrixWorld(!0);const e=new Map,t=new Ie().copy(s.matrixWorld).invert(),n=[],i=r=>{for(const o of[...r.children]){if(o.userData.animated){n.push(o);continue}if(o instanceof O&&!o.userData.keep&&!Array.isArray(o.material)&&o.material.visible!==!1&&!o.isInstancedMesh){const a=`${o.material.uuid}:${o.castShadow}:${o.receiveShadow}`;e.has(a)||e.set(a,{material:o.material,cast:o.castShadow,receive:o.receiveShadow,parts:[],meshes:[]});const l=e.get(a);l.parts.push(wM(o,new Ie().multiplyMatrices(t,o.matrixWorld))),l.meshes.push(o)}o.children.length&&i(o)}};i(s);for(const r of e.values()){if(r.meshes.length<2)continue;const o=$r(r.parts);if(!o)continue;r.meshes.forEach(l=>l.removeFromParent());const a=new O(o,r.material);a.castShadow=r.cast,a.receiveShadow=r.receive,s.add(a)}return n.forEach(r=>wa(r)),s}const Zo=s=>(s.userData.animated=!0,s);function Or(s,e,t=10){const n=new $i(s),i=new es(n,t,e,7,!1),r=i.attributes.position,o=i.attributes.uv,a=new w,l=new w;for(let c=0;c<r.count;c++){const u=o.getX(c);n.getPoint(u,a),l.fromBufferAttribute(r,c).sub(a).multiplyScalar(1-u*.72),r.setXYZ(c,a.x+l.x,a.y+l.y,a.z+l.z)}for(let c=0;c<o.count;c++)o.setXY(c,o.getY(c)*1.5,o.getX(c)*n.getLength()*.6);return i.computeVertexNormals(),i}function Rl(s,e,t,n,i,r,o,a){const l=new w,c=new w,u=new w,h=new w,f=new w,d=new bt,g=new w,x=new ce;for(let m=0;m<t;m++){const p=s[Math.floor(r()*s.length)],_=new w(r()*2-1,r()*2-1,r()*2-1).normalize();h.copy(p.centre).addScaledVector(_,p.radius*Math.pow(r(),.35));const v=h.clone().sub(e),y=Math.min(1,v.length()/a);u.copy(v).normalize().multiplyScalar(.65).addScaledVector(_,.35).normalize();const C=Math.max(0,(e.y-h.y)/a),S=Math.min(1,Math.max(.15,y*.85+.25-C*.35));g.set(r()*2-1,r()*2-1,r()*2-1).normalize(),d.setFromAxisAngle(g,r()*Math.PI*2),l.set(1,0,0).applyQuaternion(d),c.set(0,1,0).applyQuaternion(d);const A=n*(.75+r()*.5);x.copy(i).offsetHSL((r()-.5)*.03,(r()-.5)*.08,(r()-.5)*.07);const P=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]];for(const[B,M]of P)f.copy(h).addScaledVector(l,B*A*.5).addScaledVector(c,M*A*.5),o.position.push(f.x,f.y,f.z),o.normal.push(u.x,u.y,u.z),o.uv.push((B+1)/2,(M+1)/2),o.colour.push(x.r,x.g,x.b),o.occlusion.push(S)}}function SM(s){const e=new Et;return e.setAttribute("position",new Qe(s.position,3)),e.setAttribute("normal",new Qe(s.normal,3)),e.setAttribute("uv",new Qe(s.uv,2)),e.setAttribute("color",new Qe(s.colour,3)),e.setAttribute("aOcclusion",new Qe(s.occlusion,1)),e.computeBoundingSphere(),e}function bM(s,e,t){const n={position:[],normal:[],uv:[],colour:[],occlusion:[]},i=[],r=[],o=new w((e()-.5)*.5,0,(e()-.5)*.5);if(s==="broadleaf"||s==="willow"){const l=3.6+e()*1.6,c=new w(o.x,l,o.z);i.push(Or([new w(0,-.3,0),new w(o.x*.2,l*.35,o.z*.2),new w(o.x*.6,l*.7,o.z*.6),c],.32,12));const u=4+Math.floor(e()*3),h=new w(o.x,l+1.1,o.z);for(let d=0;d<u;d++){const g=d/u*Math.PI*2+e()*.8,x=1.8+e()*1.6,m=new w(o.x*.5,l*(.55+e()*.3),o.z*.5),p=new w(Math.cos(g)*x+o.x,l+.4+e()*1.6,Math.sin(g)*x+o.z),_=m.clone().lerp(p,.5).add(new w(0,.3,0));i.push(Or([m,_,p],.13,6)),r.push({centre:p.clone().add(new w(0,.35,0)),radius:1.1+e()*.6})}for(let d=0;d<4;d++)r.push({centre:h.clone().add(new w((e()-.5)*2.2,e()*1.6,(e()-.5)*2.2)),radius:1.2+e()*.6});if(s==="willow")for(let d=0;d<7;d++){const g=e()*Math.PI*2;r.push({centre:h.clone().add(new w(Math.cos(g)*2.4,-1.4-e()*1.2,Math.sin(g)*2.4)),radius:.7+e()*.4})}const f=new ce(s==="willow"?"#7fa35a":["#4f7f3c","#5d8a40","#47763a"][Math.floor(e()*3)]);Rl(r,h,Math.round(520*t),1.15/Math.sqrt(t),f,e,n,3.2)}if(s==="poplar"){const l=6+e()*3;i.push(Or([new w(0,-.3,0),new w(o.x*.2,l*.5,o.z*.2),new w(o.x*.4,l,o.z*.4)],.2,10));const c=new w(o.x*.4,l*.72,o.z*.4);for(let u=0;u<7;u++){const h=u/6;r.push({centre:new w(o.x*.4*h+(e()-.5)*.5,l*(.35+h*.68),o.z*.4*h+(e()-.5)*.5),radius:1.1*Math.sin(.25+h*2.6)+.35})}Rl(r,c,Math.round(360*t),1/Math.sqrt(t),new ce(["#56803e","#4a7139"][Math.floor(e()*2)]),e,n,l*.45)}if(s==="bush"){const l=new w(0,1.05,0);for(let c=0;c<3;c++){const u=e()*Math.PI*2;i.push(Or([new w(0,-.2,0),new w(Math.cos(u)*.3,.5,Math.sin(u)*.3),new w(Math.cos(u)*.5,.9,Math.sin(u)*.5)],.05,4))}for(let c=0;c<5;c++)r.push({centre:new w((e()-.5)*1.6,.9+e()*.5,(e()-.5)*1.2),radius:.55+e()*.35});Rl(r,l,Math.round(150*t),.7/Math.sqrt(t),new ce(["#557f3c","#62893f","#4c7438"][Math.floor(e()*3)]),e,n,1.2)}if(s==="palm"){const l=7+e()*3,c=(e()-.5)*1.6,u=new w(c,l,c*.3);i.push(Or([new w(0,-.3,0),new w(c*.15,l*.4,0),new w(c*.6,l*.8,c*.15),u],.2,14));const h=11,f=u.clone().add(new w(0,.2,0));for(let d=0;d<h;d++){const g=d/h*Math.PI*2+e()*.3,x=new w(Math.cos(g),0,Math.sin(g)),m=new w(-x.z,0,x.x),p=2.6+e()*.8,_=.5+e()*.4,v=6;for(let y=0;y<v;y++){const C=y/v,S=(y+1)/v,A=J=>f.clone().addScaledVector(x,J*p).add(new w(0,Math.sin(J*Math.PI*.8)*_-J*J*1.8,0)),P=A(C),B=A(S),M=.55*Math.sin(Math.min(1,C*1.3+.1)*Math.PI*.9),T=.55*Math.sin(Math.min(1,S*1.3+.1)*Math.PI*.9),N=new w(0,1,0).addScaledVector(x,.4).normalize(),L=[[P.clone().addScaledVector(m,-M),0,C],[P.clone().addScaledVector(m,M),1,C],[B.clone().addScaledVector(m,T),1,S],[P.clone().addScaledVector(m,-M),0,C],[B.clone().addScaledVector(m,T),1,S],[B.clone().addScaledVector(m,-T),0,S]],U=new ce("#557a3a").offsetHSL(0,0,(e()-.5)*.05);for(const[J,H,X]of L)n.position.push(J.x,J.y,J.z),n.normal.push(N.x,N.y,N.z),n.uv.push(H,X),n.colour.push(U.r,U.g,U.b),n.occlusion.push(.55+C*.45)}}}return{trunk:$r(i.map(l=>l.index?l.toNonIndexed():l)),leaves:SM(n)}}function TM(s,e){const t=Array.from({length:e.variants},()=>bM(e.species,e.seed,e.detail)),n=[],i=new bt,r=new w,o=new w(0,1,0);for(let l=0;l<e.count;l++){const c=e.place(l);c&&(i.setFromAxisAngle(o,c.turn),r.setScalar(c.scale),n.push({matrix:new Ie().compose(c.position,i,r),variant:l%e.variants}))}const a=[];return t.forEach((l,c)=>{const u=n.filter(d=>d.variant===c);if(!u.length)return;const h=new Kn(l.trunk,e.trunkMaterial,u.length),f=new Kn(l.leaves,e.leafMaterial,u.length);u.forEach((d,g)=>{h.setMatrixAt(g,d.matrix),f.setMatrixAt(g,d.matrix)}),h.castShadow=f.castShadow=!!e.castShadow,h.receiveShadow=!0,h.computeBoundingSphere(),f.computeBoundingSphere(),s.add(h,f),a.push(h,f)}),a}const Cl=new Ua,Pl="/assets/world/textures/";function Ri(s,e,t,n={}){const i=r=>(r.wrapS=r.wrapT=Vn,r.repeat.set(t[0],t[1]),r.anisotropy=4,r);return n.colour!==!1&&Cl.load(`${Pl}${e}_diff.webp`,r=>{r.colorSpace=_t,s.map=i(r),s.needsUpdate=!0}),Cl.load(`${Pl}${e}_nor_gl.webp`,r=>{s.normalMap=i(r),s.normalScale.setScalar(n.normal??1),s.needsUpdate=!0}),Cl.load(`${Pl}${e}_arm.webp`,r=>{i(r),s.aoMap=r,s.aoMapIntensity=.8,s.roughnessMap=r,s.needsUpdate=!0}),s}function Rs(s,e=s){const t=document.createElement("canvas");return t.width=s,t.height=e,{element:t,g:t.getContext("2d")}}function Cs(s,e=!0){const t=new Ed(s);return e&&(t.colorSpace=_t),t}function Oa(s){let e=s>>>0;return()=>(e=Math.imul(e^e>>>15,2246822507)+2654435769>>>0,e/4294967296)}function jd(){const{element:s,g:e}=Rs(256),t=Oa(5);for(let n=0;n<70;n++){const i=t()*Math.PI*2,r=Math.pow(t(),.6)*96,o=128+Math.cos(i)*r,a=128+Math.sin(i)*r*.9,l=13+t()*13,c=Math.round(150+(1-r/96)*40+t()*60);e.save(),e.translate(o,a),e.rotate(i+(t()-.5)*1.2),e.fillStyle=`rgb(${c}, ${c}, ${c})`,e.beginPath(),e.moveTo(0,-l),e.quadraticCurveTo(l*.6,-l*.2,0,l),e.quadraticCurveTo(-l*.6,-l*.2,0,-l),e.fill(),e.strokeStyle="rgba(90, 90, 90, 0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(0,-l*.85),e.lineTo(0,l*.85),e.stroke(),e.restore()}return Cs(s,!1)}function EM(){const{element:s,g:e}=Rs(128,512);e.strokeStyle="#d8d8c8",e.lineCap="round",e.lineWidth=4,e.beginPath(),e.moveTo(64,512),e.lineTo(64,6),e.stroke();for(let t=500;t>14;t-=9){const n=1-t/512,i=58*Math.sin(Math.min(1,(1-n)*1.25)*Math.PI*.9)+6;for(const r of[-1,1]){const o=180+Math.round(Math.random()*60);e.strokeStyle=`rgb(${o}, ${o}, ${o})`,e.lineWidth=7-n*3,e.beginPath(),e.moveTo(64,t),e.quadraticCurveTo(64+r*i*.55,t-6,64+r*i,t+16+n*10),e.stroke()}}return Cs(s,!1)}function ff(s="rgba(255, 220, 160, 1)",e="rgba(255, 180, 90, 0.45)"){const{element:t,g:n}=Rs(128),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(.25,e),i.addColorStop(1,"rgba(255, 160, 60, 0)"),n.fillStyle=i,n.fillRect(0,0,128,128),Cs(t)}function Ba(){const{element:s,g:e}=Rs(64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(0, 0, 0, 0.55)"),t.addColorStop(.55,"rgba(0, 0, 0, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Cs(s,!1)}function AM(){const{element:s,g:e}=Rs(256),t=Oa(9);e.fillStyle="#b48a5c",e.fillRect(0,0,256,256);for(let i=0;i<2600;i++){const r=t();e.fillStyle=r>.5?`rgba(120, 80, 45, ${.25+t()*.3})`:`rgba(215, 175, 125, ${.2+t()*.3})`,e.fillRect(t()*256,t()*256,1+t()*3,1+t()*2)}const n=Cs(s);return n.wrapS=n.wrapT=Vn,n}function Fc(s=!1){const{element:e,g:t}=Rs(128),n=Oa(s?21:17);t.fillStyle="#d6d6d6",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=3)t.fillStyle=`rgba(255, 255, 255, ${.18+n()*.16})`,t.fillRect(0,r,128,1.5);for(let r=0;r<128;r+=3)t.fillStyle=`rgba(0, 0, 0, ${.06+n()*.07})`,t.fillRect(r,0,1.5,128);for(let r=0;r<260;r++)t.fillStyle=`rgba(${n()>.5?"0, 0, 0":"255, 255, 255"}, 0.07)`,t.fillRect(n()*128,n()*128,2+n()*4,1);if(s)for(const[r,o,a]of[[18,10,"rgba(255, 250, 235, .55)"],[34,3,"rgba(40, 30, 20, .35)"],[82,6,"rgba(255, 250, 235, .45)"],[94,3,"rgba(40, 30, 20, .3)"]])t.fillStyle=a,t.fillRect(0,r,128,o);const i=Cs(e);return i.wrapS=i.wrapT=Vn,i}function RM(){const{element:s,g:e}=Rs(256),t=Oa(13);e.fillStyle="#e4d4b8",e.fillRect(0,0,256,256);for(let i=0;i<180;i++)e.fillStyle=`rgba(${t()>.5?"190, 165, 125":"245, 236, 214"}, ${.08+t()*.12})`,e.beginPath(),e.ellipse(t()*256,t()*256,10+t()*40,6+t()*20,t()*3,0,Math.PI*2),e.fill();const n=Cs(s);return n.wrapS=n.wrapT=Vn,n}function wu(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Jo(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function CM(s,e){const t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,o=i*i*(3-2*i),a=r*r*(3-2*r),l=Jo(t,n),c=Jo(t+1,n),u=Jo(t,n+1),h=Jo(t+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+h)*o*a}function _n(s,e){let t=0,n=.5;for(let i=0;i<4;i++)t+=n*CM(s,e),s*=2.03,e*=2.03,n*=.5;return t}const Wi=-.28,Qs=-132;function Xt(s){return-5.5-_n(s*.06+2,1.3)*3-Math.max(0,-s-9)*.55-Math.max(0,s-16)*.25}const Il=[[2.75,-2.1],[3.05,-3.3],[3.4,-4.6],[3.6,-5.8],[3.6,-6.6]];function Qo(s,e){let t=1/0;for(let n=0;n<Il.length-1;n++){const[i,r]=Il[n],[o,a]=Il[n+1],l=o-i,c=a-r,u=Math.max(0,Math.min(1,((s-i)*l+(e-r)*c)/(l*l+c*c)));t=Math.min(t,Math.hypot(s-i-l*u,e-r-c*u))}return t}const df=(s,e,t=0)=>s>-3.6-t&&s<2.8+t&&e>-2.05-t&&e<3.85+t,Wt={x:3.6,width:1.3,start:0,end:0},Yd=5,Su=-.02;function PM(){const s=Xt(Wt.x)+.8;let e=s;for(;e-.24>s-Yd;)e-=.24;return new w(Wt.x-.05,Su,e-.11)}function Fn(s,e){const t=Xt(s),n=Qs+(_n(s*.01,7)-.5)*10;if(e>t){const o=Math.max(0,e-6)*.05+Math.max(0,s-10)*.04*Math.min(1,Math.max(0,e-t)/6);return(_n(s*.15,e*.15)-.5)*.3*Math.min(1,(e-t)/3)-Math.max(0,1-(e-t)/1.2)*.35+o}if(e<n)return .1+(_n(s*.05,e*.05)-.5)*.5+Math.max(0,n-e-30)*.04;const i=t-e,r=e-n;return-.35-Math.min(1.6,Math.min(i*.16,r*.1))}function IM(s){const e=wu(s),t=document.createElement("canvas");t.width=512,t.height=320;const n=t.getContext("2d"),i=[];for(let a=0;a<16;a++)i.push([70+e()*372,236+e()*18,34+e()*30]);for(let a=0;a<22;a++){const l=e();i.push([256+(e()-.5)*300*(1-l*.7),236-l*170-e()*20,30+e()*34*(1-l*.4)])}i.sort((a,l)=>l[1]-a[1]);for(const[a,l,c]of i){const u=n.createRadialGradient(a,l,c*.2,a,l,c);u.addColorStop(0,"rgba(196,200,214,0.95)"),u.addColorStop(.85,"rgba(206,210,224,0.75)"),u.addColorStop(1,"rgba(210,214,228,0)"),n.fillStyle=u,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}for(const[a,l,c]of i){const u=n.createRadialGradient(a-c*.25,l-c*.35,0,a-c*.2,l-c*.3,c*.85);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.6,"rgba(255,253,248,0.85)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(a-c*.15,l-c*.2,c*.82,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-out";const r=n.createLinearGradient(0,248,0,290);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=r,n.fillRect(0,248,512,72);const o=new Ed(t);return o.colorSpace=_t,o}function Xi(s,e){const t=new ce(e),n=new Float32Array(s.attributes.position.count*3);for(let i=0;i<n.length;i+=3)n.set([t.r,t.g,t.b],i);return s.setAttribute("color",new At(n,3)),s}function LM(s,e){const t=wu(7),n=[],i=new Ie,r=new bt,o=new w,a=new w,l=new w(0,1,0),c=new Kt,u=Ba(),h=[],f=new O(new Ke(900,32,16),mM);f.renderOrder=-1,f.frustumCulled=!1,s.add(f);const d=new Ft(1,1,160,110);d.rotateX(-Math.PI/2);const g=d.attributes.position,x=d.attributes.uv,m=I=>Math.sign(I)*Math.pow(Math.abs(I),1.6);for(let I=0;I<g.count;I++){const q=g.getX(I)*2,te=g.getZ(I)+.5,ae=.73,we=500*m(q),ye=te>ae?-5+45*m((te-ae)/(1-ae)):-5-495*m((ae-te)/ae);g.setX(I,we),g.setZ(I,ye),x.setXY(I,(we+500)/1e3,(ye+500)/540)}const p=new Float32Array(g.count*3),_=new ce("#6f9a45"),v=new ce("#4f7f36"),y=new ce("#a3a25c"),C=new ce("#6b5d45"),S=new ce("#5e5a3e"),A=new ce("#55803f"),P=new ce("#8f7556"),B=new ce;for(let I=0;I<g.count;I++){const q=g.getX(I),te=g.getZ(I);g.setY(I,Fn(q,te));const ae=Xt(q);if(te<Qs+10)B.copy(A).lerp(v,_n(q*.03,te*.03)*.6);else if(te<ae)B.copy(S);else{B.lerpColors(v,_,_n(q*.12+5,te*.12)),B.lerp(y,Math.max(0,_n(q*.07+11,te*.07)-.55)*1.6);const we=te-ae;we<1.6&&B.lerp(C,1-Math.max(0,we)/1.6),B.lerp(P,Math.max(0,1-Qo(q,te)/.75))}p.set([B.r,B.g,B.b],I*3)}d.setAttribute("color",new At(p,3)),d.computeVertexNormals();const M=Ri(ue("#ffffff",{vertexColors:!0,roughness:1}),"forrest_ground_01",[220,120],{colour:!1,normal:.7}),T=new O(d,M);T.receiveShadow=!0,s.add(T),[[-230,26,"#5d8048",1],[-330,46,"#61805a",2],[-470,78,"#6f8a78",3]].forEach(([I,q,te,ae])=>{const we=new Ft(1500,140,220,8),ye=we.attributes.position;for(let et=0;et<ye.count;et++){const ke=ye.getX(et),Me=ye.getY(et),gt=(_n(ke*.006*ae+ae*9,1.7)*.9+_n(ke*.03,4.1)*.15)*q;ye.setY(et,Me<0?-20:gt),ye.setZ(et,(_n(ke*.02,ae)-.5)*20)}we.computeVertexNormals();const Ye=new O(we,ue(te,{roughness:1}));Ye.position.set(0,0,I),s.add(Ye)});const N=Math.round(1024*e.reflection),L=new Ft(1e3,200,200,90),U=new Float32Array(L.attributes.position.count),J=L.attributes.position;for(let I=0;I<J.count;I++){const q=J.getX(I),te=-J.getY(I)-60;U[I]=Math.max(0,Wi-Fn(q,te))}L.setAttribute("aDepth",new At(U,1));const H=new Fa(L,{textureWidth:N,textureHeight:Math.round(N*.6),clipBias:.003,shader:pM});Object.assign(H.material.uniforms,wt),H.rotateX(-Math.PI/2),H.position.set(0,Wi,-60),s.add(H);const X=Ri(ue("#8b7a66",{roughness:.95}),"bark_brown_02",[1,1],{normal:1.2}),k=uf(jd()),V=uf(EM()),F=new _d({depthPacking:id,map:k.uniforms.uMap.value,alphaTest:.5}),ne=e.trees,de=(I,q,te,ae,we=3,ye=!1)=>TM(s,{species:I,variants:we,detail:te,count:Math.round(q),seed:t,castShadow:ye,trunkMaterial:X,leafMaterial:I==="palm"?V:k,place:Ye=>{const et=ae(Ye);if(!et)return null;const[ke,Me,gt]=et;return{position:new w(ke,Fn(ke,Me)-.15,Me),scale:gt,turn:t()*Math.PI*2}}});de("poplar",150*ne,.2,()=>[-340+t()*300,Qs-6-t()*40,1.3+t()*.7]),de("broadleaf",100*ne,.18,()=>[-110+t()*210,Qs-6-t()*30,1.3+t()*.8],4),de("palm",120*ne,1,()=>[-20+t()*360,Qs-4-t()*36,.9+t()*.4],3),de("bush",200*ne,.22,()=>[-340+t()*680,Qs-1-t()*8,1.6+t()*1.6],3);const pe=(I,q,te,ae)=>{de(I,1,1,()=>[q,te,ae],1,!0).forEach(ye=>{ye.material===k&&(ye.customDepthMaterial=F)})};pe("willow",-13,Xt(-13)+2.2,1.05),pe("broadleaf",12.5,.5,1.15),pe("broadleaf",19,-9,1.3),pe("broadleaf",-9,9,1.2),pe("broadleaf",8,11,1),de("bush",26,1,I=>{const q=I<14?-30+t()*24:9+t()*22,te=I<14?Xt(q)+.8+t()*2:Xt(q)+1+t()*9;return Qo(q,te)<1.4||Math.abs(q-Wt.x)<2?null:[q,te,.7+t()*.5]},3,!0).forEach(I=>{I.material===k&&(I.customDepthMaterial=F)}),de("broadleaf",14,.6,()=>[-40+t()*80,14+t()*18,.9+t()*.4],3);const z=new uu(.4,2),Q=z.attributes.position,ge=new Float32Array(Q.count*3),me=new ce("#b8b0a2"),Be=new ce("#6f8a45");for(let I=0;I<Q.count;I++){a.fromBufferAttribute(Q,I);const q=1+(_n(a.x*4+3,a.z*4+a.y*3)-.5)*.5;a.multiplyScalar(q),Q.setXYZ(I,a.x,a.y*.7,a.z),B.copy(me).lerp(Be,Math.max(0,a.y/.4-.35)*1.2),ge.set([B.r,B.g,B.b],I*3)}z.setAttribute("color",new At(ge,3)),z.computeVertexNormals();const He=Ri(ue("#ffffff",{vertexColors:!0}),"rock_boulder_dry",[1,1],{normal:1.3}),Ve=e.low?90:150,We=new Kn(z,He,Ve);let je=0;const D=[];for(let I=0;je<Ve&&I<Ve*6;I++){const q=-34+t()*60;if(Math.abs(q-Wt.x)<1.2)continue;const te=Xt(q)-.4+t()*1.8;r.setFromEuler(c.set(t()*.6,t()*3,t()*.6));const ae=t()<.15?2:1;o.set((.5+t()*.9)*ae,(.4+t()*.5)*ae,(.5+t()*.9)*ae),a.set(q,Fn(q,te)-.08,te),We.setMatrixAt(je++,i.compose(a,r,o)),te>Xt(q)+.1&&D.push([q,te])}We.count=je,We.castShadow=We.receiveShadow=!0,s.add(We);const Lt=new Ft(.032,.5,1,4);Lt.translate(0,.25,0);const Ze=Lt.attributes.position;for(let I=0;I<Ze.count;I++){const q=Ze.getY(I)/.5;Ze.setX(I,Ze.getX(I)*(1-q*.9)),Ze.setZ(I,q*q*.12)}const at=Lt.clone(),Ge=new Kn(Lt,$o("#3c5f27","#9cb865","#55702e","#c3c27e"),e.grass),vt=new Float32Array(e.grass);let Xe=0;for(let I=0;Xe<e.grass&&I<e.grass*6;I++){const q=(t()-.5)*72,te=15-Math.pow(t(),1.15)*32;for(let ae=0;ae<6&&Xe<e.grass;ae++){const we=q+(t()-.5)*.5,ye=te+(t()-.5)*.5;if(df(we,ye,.05)||ye<Xt(we)+.25||Math.abs(we-Wt.x)<Wt.width/2+.1&&ye<Wt.start+.4)continue;const Ye=Qo(we,ye);if(Ye<.45||Ye<.8&&t()<.7)continue;const et=.35+_n(we*.3+2,ye*.3)*.6;r.setFromAxisAngle(l,t()*Math.PI),o.set(1+t()*.4,et*(.45+t()*.55),1),a.set(we,Fn(we,ye)-.02,ye),Ge.setMatrixAt(Xe,i.compose(a,r,o)),vt[Xe]=Math.min(1,Math.max(0,_n(we*.2+9,ye*.2)*1.3-.15+t()*.2)),Xe++}}Ge.count=Xe,Lt.setAttribute("aShade",new _s(vt,1)),Ge.frustumCulled=!1,s.add(Ge);const E=e.low?260:700,b=new Kn(at,$o("#40652c","#9fbd60","#4c6a2c","#b9b56a"),E),j=new Float32Array(E);for(let I=0;I<E;I++){const te=I<E*.65?-24+t()*18:12+t()*14,ae=Xt(te)-.2-Math.pow(t(),1.6)*4;r.setFromAxisAngle(l,t()*Math.PI),o.set(.8,1.2+t()*1.3,.8),a.set(te,Wi-.15,ae),b.setMatrixAt(I,i.compose(a,r,o)),j[I]=t()}at.setAttribute("aShade",new _s(j,1)),b.frustumCulled=!1,s.add(b);const ie=new Mn(.22,14,.25,Math.PI*2-.5);ie.rotateX(-Math.PI/2);const fe=e.low?40:80,oe=new Kn(ie,ue("#4f7a3a",{roughness:.55}),fe);for(let I=0;I<fe;I++){const q=-20+t()*13,te=Xt(q)-.8-t()*4.5;r.setFromAxisAngle(l,t()*Math.PI*2),o.setScalar(.6+t()*.8),a.set(q,Wi+.006,te),oe.setMatrixAt(I,i.compose(a,r,o))}s.add(oe);const Fe=new Ke(.06,8,4,0,Math.PI*2,0,Math.PI/2),Se=new Kn(Fe,ue("#f2c6d4"),9);for(let I=0;I<9;I++){const q=-19+t()*11,te=Xt(q)-1-t()*3.5;a.set(q,Wi+.01,te),Se.setMatrixAt(I,i.compose(a,r.identity(),o.set(1,.7,1)))}s.add(Se);const Le=new Ft(.02,.36,1,3);Le.translate(0,.18,0);const ct=new Mn(.035,8);ct.rotateX(-Math.PI/2.4),ct.translate(0,.37,.01);const ve=new Mn(.012,6);ve.rotateX(-Math.PI/2.4),ve.translate(0,.372,.013);for(const I of[ct,ve]){const q=I.attributes.uv;for(let te=0;te<q.count;te++)q.setY(te,1)}const De=[["#f4f1e6","#e8b830"],["#f2cf3a","#d99a20"],["#b9a2d8","#f0e2a0"],["#e7a1b6","#f6dbe2"]],qe=Math.round(e.flowers/De.length);De.forEach(([I,q],te)=>{const ae=$r([Xi(Le.clone(),"#56783a"),Xi(ct.clone(),I),Xi(ve.clone(),q)]),we=new Kn(ae,$o("#ffffff","#ffffff","#ffffff","#ffffff",!0),qe),ye=new Float32Array(qe);let Ye=0;for(let et=0;Ye<qe&&et<qe*40;et++){const ke=(t()-.5)*56,Me=12-t()*22;df(ke,Me,.1)||Me<Xt(ke)+.6||Qo(ke,Me)<.6||_n(ke*.22+te*7,Me*.22)<.56||(r.setFromAxisAngle(l,t()*Math.PI*2),o.setScalar(.7+t()*.6),a.set(ke,Fn(ke,Me)-.02,Me),we.setMatrixAt(Ye,i.compose(a,r,o)),ye[Ye++]=t())}we.count=Ye,ae.setAttribute("aShade",new _s(ye,1)),we.frustumCulled=!1,s.add(we),h.push(we)});const $e=.85,Ne=(I,q,te)=>{const ae=new Ft(te,I.distanceTo(q),1,3);return ae.translate(0,I.distanceTo(q)/2,0),ae.applyQuaternion(new bt().setFromUnitVectors(l,q.clone().sub(I).normalize())),ae.translate(I.x,I.y,I.z),ae},st=(I,q,te)=>{const ae=[];if(te){const ye=new Mn(q,48),Ye=ye.attributes.position;for(let ke=1;ke<Ye.count;ke++){const Me=Math.atan2(Ye.getY(ke),Ye.getX(ke)),gt=.55+.45*Math.pow(Math.abs(Math.cos(Me*4)),.6)-.12*Math.pow(Math.abs(Math.sin(Me*16)),6);Ye.setXY(ke,Math.cos(Me)*q*gt,Math.sin(Me)*q*gt)}ae.push(Xi(ye,"#f6c21c"));const et=new Mn(q*.28,10);et.translate(0,0,.002),ae.push(Xi(et,"#d9861c"))}else ae.push(Xi(new Ke(q*.35,6,4),"#7a8a3a"));const we=$r(ae.map(ye=>(ye.deleteAttribute("normal"),ye.index?ye.toNonIndexed():ye)));return we.rotateX(-.5-t()*.6),we.rotateY(t()*Math.PI*2),we.translate(I.x,I.y,I.z),we};for(let I=0;I<3;I++){const q=[];for(let ye=0;ye<3;ye++){const Ye=new w((t()-.5)*.25,0,(t()-.5)*.25),et=new w(Ye.x,$e*(.7+t()*.3),Ye.z);q.push(Xi(Ne(new w(0,0,0),et,.012),"#5f7a32")),q.push(st(et,.045+t()*.015,!0));for(let ke=0;ke<3;ke++){const Me=et.clone().multiplyScalar(.45+t()*.35),gt=Me.clone().add(new w((t()-.5)*.3,.1+t()*.15,(t()-.5)*.3));q.push(Xi(Ne(Me,gt,.008),"#5f7a32")),q.push(st(gt,.035+t()*.015,t()<.55))}}const te=$r(q.map(ye=>{const Ye=ye.index?ye.toNonIndexed():ye;Ye.attributes.normal&&Ye.deleteAttribute("normal");const et=Ye.attributes.position,ke=new Float32Array(et.count*2);for(let Me=0;Me<et.count;Me++)ke[Me*2+1]=Math.min(1,Math.max(0,et.getY(Me)/$e));return Ye.setAttribute("uv",new At(ke,2)),Ye})),ae=[];D.forEach(([ye,Ye],et)=>{if(et%3!==I||t()<.35)return;const ke=2+Math.floor(t()*4);for(let Me=0;Me<ke;Me++){const gt=ye+(t()-.5)*1.4,mt=Ye+.2+t()*.9;mt<Xt(gt)+.15||(r.setFromAxisAngle(l,t()*Math.PI*2),o.setScalar(.8+t()*.5),ae.push(new Ie().compose(a.set(gt,Fn(gt,mt)-.03,mt),r,o.clone())))}});const we=new Kn(te,$o("#ffffff","#ffffff","#ffffff","#ffffff",!0),ae.length);ae.forEach((ye,Ye)=>we.setMatrixAt(Ye,ye)),te.setAttribute("aShade",new _s(Float32Array.from(ae,()=>t()),1)),we.frustumCulled=!1,s.add(we),h.push(we)}const Je=Ri(ue("#a08466",{roughness:.9}),"weathered_planks",[1,1],{normal:1}),Mt=Ri(ue("#6f5a46"),"bark_brown_02",[1,2],{normal:.8});Wt.start=Xt(Wt.x)+.8,Wt.end=Wt.start-Yd;const G=new ze;for(let I=Wt.start;I>Wt.end;I-=.24){const q=new O(new nt(Wt.width,.05,.22),Je);q.position.set(Wt.x+(t()-.5)*.04,Su-.025+(t()-.5)*.015,I),q.rotation.y=(t()-.5)*.03,G.add(q)}for(let I=Wt.start-.3;I>Wt.end;I-=1.5)for(const q of[-1,1]){const te=new O(new ft(.07,.08,1.8,8),Mt);te.position.set(Wt.x+q*(Wt.width/2+.02),-.55,I),G.add(te)}G.traverse(I=>{I instanceof O&&(I.castShadow=!0,I.receiveShadow=!0)}),s.add(wa(G));const Pe=new Ke(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2);Pe.scale(.62,.32,1.7);const ee=new ze,le=Ri(ue("#7a5a40",{side:It}),"weathered_planks",[3,1],{normal:1});ee.add(new O(Pe,le));const be=new O(new ft(1,1,.05,24,1,!0),ue("#4f3a2a",{side:It}));be.scale.set(.63,1,1.71),ee.add(be);const Ae=new O(new Mn(1,24),le);Ae.rotation.x=-Math.PI/2,Ae.scale.set(.59,1.62,1),Ae.position.y=-.08,ee.add(Ae);for(const I of[-.5,.45]){const q=new O(new nt(1.05,.04,.22),le);q.position.set(0,-.06,I),ee.add(q)}const tt=new O(new ft(.02,.02,1.9,6),ue("#9a7a56"));tt.rotation.set(Math.PI/2,0,.15),tt.position.set(.2,-.04,.1),ee.add(tt),ee.position.set(Wt.x+1.25,Wi+.12,Wt.start-3.2),ee.rotation.y=.18,ee.traverse(I=>{I instanceof O&&(I.castShadow=!0)}),s.add(wa(ee)),n.push(I=>{ee.position.y=Wi+.12+Math.sin(I*.9)*.02,ee.rotation.z=Math.sin(I*.7)*.025,ee.rotation.x=Math.sin(I*.55+1)*.015});const Rt=[],kt=[1,2,3,4].map(I=>new xa({map:IM(I),transparent:!0,depthWrite:!1,fog:!1,opacity:.95}));for(let I=0;I<16;I++){const q=new Rc(kt[I%kt.length]),te=300+t()*340,ae=150+t()*170,we=(t()-.5)*2.6;q.position.set(Math.sin(we)*te,18+ae*.3+t()*50+te*.06,-Math.cos(we)*te),q.scale.set(ae,ae*.625,1),q.userData.speed=.5+t(),Rt.push(q),s.add(q)}n.push((I,q)=>Rt.forEach(te=>{te.position.x+=te.userData.speed*q,te.position.x>520&&(te.position.x=-520)}));const ut=new Et;ut.setAttribute("position",new Qe([0,0,.12,-.55,.05,-.05,0,0,-.12,0,0,.12,0,0,-.12,.55,.05,-.05],3)),ut.computeVertexNormals();const Gt=ue("#2f2f36",{side:It,transparent:!0}),zt=new ze,Ui=Array.from({length:6},(I,q)=>{const te=new O(ut,Gt);return te.position.set(-q*1.6+t(),q%2*.8+t()*.6,q*1.1*(q%2?1:-1)),te.scale.setScalar(1.4),zt.add(te),te});s.add(zt);let Cn=0;n.push((I,q)=>{const te=I*3.2%260;zt.position.set(-140+te,20+Math.sin(I*.2)*3,-75),zt.rotation.y=Math.PI/2,Ui.forEach((ae,we)=>{const ye=Math.sin(I*7+we*1.3);ae.scale.y=1.4*(.4+Math.abs(ye)),ae.position.y+=Math.sin(I*1.5+we)*q*.2}),Gt.opacity=Cn});const Pn=new Ft(.06,.04),si=e.low?10:22,In=new Kn(Pn,ue("#9aa64a",{side:It}),si),Fi=Array.from({length:si},()=>({x:0,y:0,z:0,seed:t()*10,speed:.25+t()*.2})),ri=I=>{const q=[[12.5,.5],[-13,Xt(-13)+2.2],[19,-9],[8,11]][Math.floor(t()*4)];I.x=q[0]+(t()-.5)*6,I.z=q[1]+(t()-.5)*6,I.y=3+t()*4};Fi.forEach(I=>{ri(I),I.y=t()*6}),In.frustumCulled=!1,s.add(In),n.push((I,q)=>{Fi.forEach((te,ae)=>{te.y-=te.speed*q,te.x+=(Math.sin(I*.8+te.seed)*.3+.25)*q,te.y<Fn(te.x,te.z)+.02&&ri(te),r.setFromEuler(c.set(I*1.7+te.seed,I*1.1+te.seed*2,Math.sin(I*2+te.seed))),In.setMatrixAt(ae,i.compose(a.set(te.x,te.y,te.z),r,o.setScalar(1)))}),In.instanceMatrix.needsUpdate=!0});function Oi(I,q){const te=new Et,ae=new Float32Array(I*3),we=new Float32Array(I);for(let ye=0;ye<I;ye++)ae.set([q.x[0]+t()*(q.x[1]-q.x[0]),q.y[0]+t()*(q.y[1]-q.y[0]),q.z[0]+t()*(q.z[1]-q.z[0])],ye*3),we[ye]=t();return te.setAttribute("position",new At(ae,3)),te.setAttribute("aSeed",new At(we,1)),te}const Gn=hf("#fff1c8",.7,!1),oi=new Pc(Oi(e.low?100:200,{x:[-4,4],y:[.6,3.2],z:[-5,0]}),Gn),ai=hf("#e6ff8a",1.8,!0),ns=new Pc(Oi(e.low?50:110,{x:[-22,24],y:[.2,2],z:[-9,12]}),ai);s.add(oi,ns);const xi=e.low?1200:2600,is=new Float32Array(xi*6),R=new Float32Array(xi*2),W=new Float32Array(xi*2);for(let I=0;I<xi;I++){const q=(t()-.5)*26,te=t()*12,ae=(t()-.5)*26;is.set([q,te,ae,q,te,ae],I*6),R.set([t(),0],I*2),R[I*2+1]=R[I*2],W.set([0,1],I*2)}const $=new Et;$.setAttribute("position",new At(is,3)),$.setAttribute("aSeed",new At(R,1)),$.setAttribute("aEnd",new At(W,1));const Z=new bd($,gM());Z.frustumCulled=!1,s.add(Z);const Y=MM(s,t,Wi,{minX:-16,maxX:20,far:-40,shore:Xt},u);n.push((I,q)=>Y.update(I,q)),h.push(Ge,b,oi,ns,In,Z);const _e=H.onBeforeRender;let Te=0;H.onBeforeRender=function(...I){Te++%2||(h.forEach(q=>{q.visible=!1}),_e.apply(this,I),h.forEach(q=>{q.visible=!0}),Z.visible=wt.uRain.value>.01)};const Ue=new ce;return{lake:H,ducks:Y,hideFromReflection(I){h.push(I)},update(I,q,te){n.forEach(ae=>ae(I,q)),Z.material.uniforms.uCentre.value.copy(te)},applyAtmosphere(I){Ue.copy(I.cloud),kt.forEach(q=>{q.color.copy(Ue),q.opacity=.95*(.35+I.cloudCover*.65)*(1-I.gloom*.35)}),Gn.uniforms.uOpacity.value=I.dust*.45,ai.uniforms.uOpacity.value=I.fireflies,Z.visible=I.rain>.01,Cn+=((I.birds>.3?1:0)-Cn)*.02,zt.visible=Cn>.02,In.visible=I.rain<.5},setPixelRatio(I){[Gn,ai].forEach(q=>{q.uniforms.uPixelRatio.value=I})},thinGrass(I){Ge.count=Math.round(Xe*I)}}}const pf=.32,Zn=ue("#f4f1ea",{roughness:.95}),mf=ue("#e2a9a6",{roughness:.7}),qd=new Ot({map:Ba(),transparent:!0,depthWrite:!1,opacity:.6}),mn=new re(1.85,-.15),yn=new re(1.12,-.12),ci=new re(2.3,.2);function Ll(s,e,t,n=.004){const i=new O(new Ft(t,t),qd);return i.rotation.x=-Math.PI/2,i.position.set(s,n,e),i}function DM(s){const e=new ze,t=Fc();t.repeat.set(4,1);const n=new O(new di(.25,.075,12,32),ue("#c9a98a",{map:t,roughness:1}));n.rotation.x=-Math.PI/2,n.scale.z=.85,n.position.set(mn.x,.065,mn.y);const i=new O(new ft(.31,.32,.03,32),ue("#8f6a52",{roughness:1}));i.position.set(mn.x,.015,mn.y);const r=new O(new ft(.25,.25,.05,28),ue("#eee3d1",{map:t,roughness:1}));r.position.set(mn.x,.035,mn.y);const o=new O(new Ft(.5,.4),ue("#a95a46",{map:t,roughness:1,side:It}));o.rotation.set(-Math.PI/2,0,0),o.position.set(mn.x+.16,.003,mn.y);const a=new O(new Ft(.46,.26),ue("#6f8b7a",{roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(yn.x,.003,yn.y);const l=(f,d,g,x)=>{const m=new O(new ft(.075,.056,.05,24,1,!0),ue(d,{roughness:.25,side:It}));m.position.set(f,.03,yn.y);const p=new O(new Mn(.056,20),ue(d,{roughness:.25}));p.rotation.x=-Math.PI/2,p.position.set(f,.007,yn.y);const _=new O(new Mn(.066,20),ue(g,x?{roughness:.05,transparent:!0,opacity:.85}:{roughness:.9}));if(_.rotation.x=-Math.PI/2,_.position.set(f,x?.04:.036,yn.y),e.add(m,p,_),!x)for(let v=0;v<9;v++){const y=v*2.4,C=.012+v%3*.016,S=new O(new Ke(.011,6,4),ue("#8a5a32"));S.position.set(f+Math.cos(y)*C,.04+(v<3?.008:0),yn.y+Math.sin(y)*C),e.add(S)}};l(yn.x-.1,"#d98e73","#6e4528",!1),l(yn.x+.1,"#ece6da","#a9cbd8",!0);const c=ue("#c4614f",{roughness:1}),u=new O(new Ke(.045,14,10),c);u.position.set(ci.x,.045,ci.y),e.add(u),[[.4,.2],[1.3,-.5],[-.6,1.1]].forEach(([f,d])=>{const g=new O(new di(.046,.0035,4,24),c);g.rotation.set(f,0,d),g.position.copy(u.position),e.add(g)});const h=new $i([new w(ci.x+.03,.01,ci.y+.03),new w(ci.x+.12,.004,ci.y+.06),new w(ci.x+.2,.004,ci.y+.02)]);e.add(new O(new es(h,12,.0035,4),c)),e.add(n,i,r,o,a),e.traverse(f=>{f instanceof O&&(f.castShadow=f!==o&&f!==a,f.receiveShadow=!0)}),e.add(Ll(mn.x,mn.y,.85,.002),Ll(yn.x,yn.y,.5,.002),Ll(ci.x,ci.y,.16,.003)),s.add(e)}function gf(s,e){const t=new ze,n=new O(new ft(.023,.019,s,8),Zn);n.position.y=-s/2;const i=new O(new Ke(e,10,8),Zn);i.scale.set(.8,1.2,1),i.position.y=-.01;const r=new O(new Ke(.025,10,6),Zn);return r.scale.set(1,.6,1.35),r.position.set(0,-s,.01),t.add(n,i,r),t}function NM(){const s=new ze,e=.17,t=new ze;t.position.set(0,e,-.15);const n=new O(new Ke(.1,18,12),Zn);n.scale.set(.9,.85,2.2),n.position.set(0,.035,.14);const i=new O(new Ke(.085,14,10),Zn);i.position.set(0,.035,.29),t.add(n,i);const r=new ze;r.position.set(0,.13,.39);const o=new O(new Ke(.072,16,12),Zn);o.scale.set(1.05,.92,.95);const a=new O(new Ke(.034,12,8),Zn);a.scale.set(1.25,.8,.9),a.position.set(0,-.026,.054);const l=new O(new Ke(.009,8,6),mf);l.position.set(0,-.012,.084),r.add(o,a,l);const c=ue("#b5c04a",{roughness:.2}),u=ue("#1c1a16",{roughness:.2}),h=[],f=[];for(const _ of[-1,1]){const v=new O(new Ke(.013,10,8),c);v.position.set(_*.03,.012,.058);const y=new O(new Ke(.006,8,6),u);y.scale.set(.45,1.5,.5),y.position.set(_*.031,.012,.07),y.userData.open=1.5,v.userData.open=1;const C=new ze;C.position.set(_*.04,.055,-.005),C.rotation.z=-_*.3;const S=new O(new ei(.028,.06,8),Zn);S.position.y=.025;const A=new O(new ei(.018,.042,8),mf);A.scale.z=.4,A.position.set(0,.02,.012),C.add(S,A),r.add(v,y,C),h.push(C),f.push(v,y)}t.add(r);const d=[-1,1].map(_=>{const v=gf(e,.035);return v.position.set(_*.045,0,.29),t.add(v),v}),g=[-1,1].map(_=>{const v=gf(e,.05);return v.position.set(_*.05,e,-.14),s.add(v),v}),x=[];let m=t;for(let _=0;_<7;_++){const v=new ze;v.position.set(0,.05,_?0:-.07);const y=.019-_*.0012,C=new O(new ft(y-.0012,y,.05,8),Zn);C.position.y=.025;const S=new O(new Ke(y,8,6),Zn);v.add(C,S),m.add(v),x.push(v),m=v}s.add(t),s.traverse(_=>{_ instanceof O&&(_.castShadow=!0)});const p=new O(new Mn(.2,18),qd);return p.rotation.x=-Math.PI/2,p.scale.set(.6,1.4,1),p.position.set(0,.004,.02),s.add(p),{root:s,torso:t,head:r,ears:h,eyes:f,fore:d,hind:g,tail:x}}function UM(s,e,t){DM(s);const n=NM();s.add(n.root);const i=new O(new Ke(.3,8,6),new Ot({visible:!1}));i.position.set(0,.2,.05),n.root.add(i);const r=Xt(3.6)+.8,o=[[2.85,-2.6],[3.1,-3.4],[3.4,-4.6],[3.6,-5.8]].filter(([,L])=>L>r+.2),a=[[-1.9,.5],[.3,.35],[yn.x,yn.y-.42],[mn.x,mn.y],[2.2,-.4],[2.55,-1.75],...o,[3.6,r-.3],[t.x+.45,t.z+1.1],[t.x+.42,t.z+.55]].map(([L,U])=>new re(L,U)),l=a.length-1,c=2,u=3,h=[0,c,u,5+Math.ceil(o.length/2),l],f=(L,U)=>Math.hypot(L-mn.x,U-mn.y)<.24?.06:L>-3.6&&L<2.8&&U>-2.05?0:U<r&&Math.abs(L-3.6)<.7?Su:Fn(L,U);let d="sleep",g=null,x=u,m=u,p=20,_=0,v=0,y=0;const C={sit:0,lie:1,eat:0};let S=-2.2;const A=new re;function P(){const L=Math.min(Math.floor(x),l-1);A.lerpVectors(a[L],a[L+1],x-L)}P(),n.root.position.set(A.x,f(A.x,A.y),A.y);function B(L){const U=m>x?1:-1;let J=U>0?Math.floor(x):Math.ceil(x);for(;L>0&&x!==m;){J=U>0?Math.floor(x):Math.ceil(x);const k=a[J].distanceTo(a[J+U]),V=k-Math.abs(x-J)*k;L>=V?(x=J+U,L-=V):(x+=U*L/k,L=0)}const H=a[J],X=a[Math.max(0,Math.min(l,J+U))];return Math.atan2(X.x-H.x,X.y-H.y)}function M(){const L=e(),U=L<.3?l:L<.55?u:L<.7?c:h[Math.floor(e()*h.length)];return U===m?h[(h.indexOf(m)+1)%h.length]:U}const T=(L,U,J)=>{C[L]+=(U-C[L])*J};function N(L,U,J){if(!U)return;const H=n.root.position;let X=S;_=Math.max(0,_-U);const k=_>0||x===m;let V=_>0?"sit":x!==m?"walk":m===u?"sleep":m===c?"eat":"sit";g&&_<=0&&(V==="sit"||V==="eat")&&(V="play"),d=V,_>0?X=Math.atan2(J.x-H.x,J.z-H.z):V==="play"&&g?X=Math.atan2(g.x-H.x,g.z-H.z):k&&(V==="eat"&&(X=Math.atan2(yn.x-H.x,yn.y-H.z)),p-=U,p<=0&&(m=M()));const F=Math.min(1,U*(k?1.4:3.5));T("sit",V==="sit"||V==="play"?1:0,F),T("lie",V==="sleep"?1:0,Math.min(1,U*(V==="sleep"?.8:3))),T("eat",V==="eat"?1:0,F);const ne=Math.max(C.sit,C.lie);y+=((k?0:pf*(1-ne))-y)*Math.min(1,U*3),!k&&ne<.3&&(X=B(y*U),x===m&&(p=m===l?18+e()*20:m===u?25+e()*20:m===c?6+e()*4:5+e()*8)),P();let de=X-S;de=Math.atan2(Math.sin(de),Math.cos(de)),S+=de*Math.min(1,U*(_>0?2.5:4)),H.x=A.x,H.z=A.y,H.y+=(f(A.x,A.y)-H.y)*Math.min(1,U*8),n.root.rotation.y=S;const{sit:pe,lie:z,eat:Q}=C,ge=y/pf;v+=U*y*26;const me=Math.sin(v)*.5*ge,Be=Math.sin(L*1.4)*.025*z;n.torso.position.y=.17-.09*pe-.105*z+Math.abs(Math.sin(v))*.006*ge,n.torso.rotation.set(-.7*pe+.12*Q,0,.1*z),n.torso.scale.set(1+Be,1+Be,1),n.fore.forEach((We,je)=>{We.rotation.x=.7*pe-1.45*z+(je?me:-me)-(je&&V==="play"?Math.max(0,Math.sin(L*6))*1.1:0),We.scale.y=1+.57*pe-.45*z}),n.hind.forEach((We,je)=>{We.position.y=.17-.09*pe-.105*z,We.rotation.x=-1.3*pe-1.4*z+(je?-me:me),We.scale.y=1-.25*pe-.35*z});const He=_>0?0:Math.sin(L*.4)*.6*pe;n.head.rotation.set(.5*pe+.75*Q+Math.sin(L*6)*.07*Q+.3*z+Math.sin(L*.7)*.05*(1-z)-(_>0?.25:0),He,_>0?Math.sin(L*1.5)*.15:.25*z),n.eyes.forEach(We=>{We.scale.y=We.userData.open*(1-.88*z)}),n.ears.forEach((We,je)=>{We.rotation.x=Math.max(0,Math.sin(L*.9+je*2.3)-.96)*8});const Ve=Math.max(pe,z);n.tail.forEach((We,je)=>{if(!je){We.rotation.set(-.9-1.6*Ve,0,0);return}const D=je>3?Math.sin(L*(_>0?6:2.5)+je*.8)*(.08+.15*pe):0;We.rotation.set(.2*(1-Ve)+Math.sin(L*2+je*.6)*.05*ge,0,.32*Ve+Math.sin(L*1.5-je*.5)*.1*(1-Ve)+D)})}return{hit:i,highlight:[Zn],update:N,greet(){_=6},position:n.root.position,bed:mn,state:()=>d,setPlaymate(L){g=L}}}const Br=.75,vf=1.5,On=ue("#fbfaf5",{roughness:1}),Oc=ue("#ece8de",{roughness:1}),xf=ue("#1b1815",{roughness:.35}),_f=ue("#e2a0a0",{roughness:.6}),FM=new Ot({map:Ba(),transparent:!0,depthWrite:!1,opacity:.6});function yf(s,e,t){const n=new ze,i=new O(new ft(.026,.022,s,8),On);i.position.y=-s/2;const r=new O(new Ke(e,10,8),On);r.scale.set(.85,1.3,1),r.position.y=-.02;const o=new O(new Ke(t,8,6),Oc);o.scale.set(.8,1.6,.8),o.position.set(0,-s*.45,-.012);const a=new O(new Ke(.028,10,6),On);return a.scale.set(1,.6,1.3),a.position.set(0,-s,.01),n.add(i,r,o,a),n}function OM(){const s=new ze,e=.25,t=new ze;t.position.set(0,e,-.17);const n=new O(new Ke(.12,18,12),On);n.scale.set(.95,.92,1.85),n.position.set(0,.04,.17);const i=new O(new Ke(.105,14,10),On);i.position.set(0,.04,.02);const r=new O(new Ke(.13,16,12),On);r.scale.set(1.12,1.08,.95),r.position.set(0,.09,.34);const o=new O(new Ke(.09,12,10),Oc);o.scale.set(1,1.2,.8),o.position.set(0,0,.42),t.add(n,i,r,o);const a=new ze;a.position.set(0,.2,.46);const l=new O(new Ke(.085,16,12),On);l.scale.set(1.05,.95,1);const c=new O(new Ke(.08,14,10),On);c.scale.set(1.3,.9,.8),c.position.set(0,-.025,-.01);const u=new O(new Ke(.04,12,8),On);u.scale.set(.85,.72,1.7),u.position.set(0,-.028,.085);const h=new O(new Ke(.014,10,8),xf);h.position.set(0,-.018,.152);const f=new O(new Ke(.018,10,6),_f);f.scale.set(.9,.35,1.3),f.position.set(0,-.058,.105),a.add(l,c,u,h,f);for(const p of[-1,1]){const _=new O(new Ke(.012,10,8),xf);_.position.set(p*.034,.018,.07);const v=new ze;v.position.set(p*.046,.075,-.01),v.rotation.set(-.15,0,-p*.28);const y=new O(new ei(.032,.075,8),On);y.position.y=.035;const C=new O(new ei(.02,.05,8),_f);C.scale.z=.4,C.position.set(0,.03,.013),v.add(y,C),a.add(_,v)}t.add(a);const d=[-1,1].map(p=>{const _=yf(e,.04,.026);return _.position.set(p*.055,0,.32),t.add(_),_}),g=[-1,1].map(p=>{const _=yf(e,.06,.032);return _.position.set(p*.062,e,-.15),s.add(_),_}),x=new ze;x.position.set(0,.1,-.06);for(let p=0;p<10;p++){const _=3.4-p*.32,v=new O(new Ke(.058-p*.002,10,8),p%2?Oc:On);v.scale.set(1.15,.9,1),v.position.set(0,.06+Math.sin(_)*.11,.06+Math.cos(_)*.11),x.add(v)}t.add(x),s.add(t),s.scale.setScalar(.85),s.traverse(p=>{p instanceof O&&(p.castShadow=!0)});const m=new O(new Mn(.22,18),FM);return m.rotation.x=-Math.PI/2,m.scale.set(.65,1.5,1),m.position.set(0,.004,.03),s.add(m),{root:s,torso:t,head:a,tongue:f,fore:d,hind:g,tail:x}}function BM(s,e,t,n){const i=OM();s.add(i.root);const r=new O(new Ke(.34,8,6),new Ot({visible:!1}));r.position.set(0,.25,.08),i.root.add(r);const o=[[-2.85,-1.45,.38],[2.8,-1.97,.18],[2.8,3.77,.18],[-2.68,2.95,.42],[2.56,3.6,.22],[-3.14,3.58,.22],[-3.05,.35,.2]];function a(S){S.x<-3.2&&S.z>-2.1&&S.z<3.9&&(S.x=-3.2),S.z=Math.min(7,Math.max(S.z,Xt(S.x)+.45)),S.x=Math.min(9,Math.max(-8,S.x));for(const[A,P,B]of o){const M=S.x-A,T=S.z-P,N=Math.hypot(M,T);N<B&&N>1e-4&&(S.x=A+M/N*B,S.z=P+T/N*B)}}const l=(S,A)=>S>-3.6&&S<2.8&&A>-2.05&&A<3.85?0:Fn(S,A),c=i.root.position;c.set(t.bed.x+.15,0,t.bed.y+.75);let u=Math.PI,h=0,f=0,d=4,g=0,x=0,m=0,p=12;const _={sit:0,lie:1,bow:0},v=new w,y=new w;function C(S,A){if(!A)return;const P=t.position,B=t.state(),M=P.z<n.y-.3;y.set(P.x-c.x,0,P.z-c.z);const T=y.length();g=Math.max(0,g-A),p-=A;let N=0,L="stand",U=null;if(g>0)U=u+A*7;else if(m>0){if(m-=A,m>2.2){const z=S*2.6;v.set(P.x+Math.cos(z)*.75,0,P.z+Math.sin(z)*.75),N=vf}else L="bow",U=Math.atan2(y.x,y.z);(m<=0||B!=="sit"&&B!=="play"&&B!=="eat")&&(m=0,p=18+e()*18,t.setPlaymate(null))}else M?(v.set(n.x+.3,0,n.y+.45),c.distanceTo(v)>.25?N=Br:(L=d>3?"lie":"sit",U=Math.atan2(P.x-c.x,P.z-c.z))):B==="sleep"?(v.set(t.bed.x+.15,0,t.bed.y+.75),c.distanceTo(v)>.25?N=Br:(L="lie",U=Math.atan2(t.bed.x-c.x,t.bed.y-c.z))):(B==="sit"||B==="eat")&&p<=0&&T<2?(m=7.5,t.setPlaymate(c)):T>1.15?(v.set(P.x,0,P.z).addScaledVector(y.normalize(),-.8),N=T>3?vf:Br):(L=d>2.5?"sit":"stand",U=Math.atan2(P.x-c.x,P.z-c.z));if(N>0){d=0;const z=v.x-c.x,Q=v.z-c.z;Math.hypot(z,Q)>.05&&(U=Math.atan2(z,Q))}else d+=A;if(U!==null){let z=U-u;z=Math.atan2(Math.sin(z),Math.cos(z)),u+=z*Math.min(1,A*(g>0?1:6)),g>0&&(u=U)}const J=Math.max(_.sit,_.lie,_.bow);h+=(N*(1-J)-h)*Math.min(1,A*4),c.x+=Math.sin(u)*h*A,c.z+=Math.cos(u)*h*A,a(c),c.y+=(l(c.x,c.z)-c.y)*Math.min(1,A*8),i.root.rotation.y=u;const H=Math.min(1,A*3);_.sit+=((L==="sit"?1:0)-_.sit)*H,_.lie+=((L==="lie"?1:0)-_.lie)*Math.min(1,A*1.5),_.bow+=((L==="bow"?1:0)-_.bow)*Math.min(1,A*6);const{sit:X,lie:k,bow:V}=_,F=Math.min(1,h/Br);f+=A*(h*17+1e-4);const ne=Math.sin(f)*.55*F,de=Math.abs(Math.sin(f))*.012*F+(g>0?Math.abs(Math.sin(S*9))*.05:0);i.torso.position.y=.25-.1*X-.17*k+de,i.torso.rotation.set(-.55*X+.42*V,0,0),i.fore.forEach((z,Q)=>{z.rotation.x=.55*X-1.45*k-1.1*V+(Q?ne:-ne),z.scale.y=1+.35*X-.45*k-.3*V}),i.hind.forEach((z,Q)=>{z.position.y=.25-.1*X-.17*k,z.rotation.x=-1.25*X-1.35*k+(Q?-ne:ne),z.scale.y=1-.25*X-.35*k});const pe=N>0||m>0?0:Math.sin(S*.5)*.4*(1-k);i.head.rotation.set(-.25*X+.35*k-.45*V+Math.sin(S*1.3)*.04,pe,m>0?Math.sin(S*3)*.2:0),i.tongue.visible=m>0||h>Br*.8||g>0,x+=A*(g>0||m>0?16:h>.1?9:k>.5?1.5:4),i.tail.rotation.z=Math.sin(x)*(g>0||m>0?.45:.18)*(1-k*.7)}return{hit:r,highlight:[On],update:C,greet(){g=1.4}}}function ui(s,e,t,n={}){const i=new $i(s,!1,"centripetal"),r=n.segments??28,o=new es(i,r,1,16,!1),a=o.attributes.position,l=o.attributes.uv,c=new w,u=new w,h=d=>{const g=d*(e.length-1),x=Math.min(e.length-2,Math.floor(g)),m=g-x,p=m*m*(3-2*m);return e[x]+(e[x+1]-e[x])*p};for(let d=0;d<a.count;d++){const g=l.getX(d),x=l.getY(d)*Math.PI*2;i.getPoint(g,c),u.fromBufferAttribute(a,d).sub(c);let m=h(g);n.folds&&(m*=1+n.folds*(Math.sin(g*34+x*2)*.6+Math.sin(g*13-x*3)*.4)),u.multiplyScalar(m),n.flatten&&(u.y*=n.flatten),a.setXYZ(d,c.x+u.x,c.y+u.y,c.z+u.z)}o.computeVertexNormals();const f=new ze;f.add(new O(o,t));for(const[d,g]of[[0,e[0]],[1,e[e.length-1]]]){const x=new O(new Ke(g*.98,16,12),t);x.position.copy(i.getPoint(d)),f.add(x)}return f}function ji(s,e,t,n=new w){const i=new O(new Ke(1,20,14),t);return i.scale.copy(s),i.position.copy(e),i.rotation.set(n.x,n.y,n.z),i}function kM(s,e,t,n,i){const r=new ze,o=e.clone().sub(s),a=o.length(),l=o.clone().normalize(),c=new w().crossVectors(l,new w(0,1,0)).normalize(),u=s.clone().addScaledVector(l,a*.35),h=new O(new Ke(1,16,12),t);h.scale.set(.032,.014,a*.36),h.position.copy(u),h.lookAt(u.clone().add(l)),r.add(h);const f=s.clone().addScaledVector(l,a*.62);for(let x=0;x<4;x++){const m=(x-1.5)*(n==="resting"?.014:.009),p=f.clone().addScaledVector(c,m),_=n==="resting"?p.clone().addScaledVector(l,a*(.36-Math.abs(x-1.5)*.04)).addScaledVector(c,m*.6).add(new w(0,-.006,0)):p.clone().addScaledVector(l,a*.12).add(new w(0,-.025,0));r.add(ui([p,_],[.009,.0075],t,{segments:6}))}const d=s.clone().addScaledVector(l,a*.3).addScaledVector(c,-.024),g=n==="resting"?d.clone().addScaledVector(l,a*.25).addScaledVector(c,-.025):d.clone().addScaledVector(l,a*.3).addScaledVector(c,.012).add(new w(0,-.01,0));if(r.add(ui([d,g],[.0105,.008],t,{segments:6})),n==="drawing"&&i){const x=f.clone().addScaledVector(l,a*.12).add(new w(0,-.02,0)),m=x.clone().addScaledVector(l,.05).add(new w(0,-.05,0)),p=x.clone().addScaledVector(l,-.07).add(new w(.02,.07,0));r.add(ui([p,m],[.0045,.0035],i,{segments:4}))}return r}function zM(s){const e=ue("#efbf4a",{roughness:.85}),t=ue("#7193c2",{roughness:.95}),n=ue("#a4bada",{roughness:.95}),i=ue("#efb995",{roughness:.55}),r=ue("#d07a6c",{roughness:.5}),o=ue("#2a1d18",{roughness:.35}),a=new Ot({color:"#ffffff"}),l=new Ot({color:"#ff8f86",transparent:!0,opacity:.38,depthWrite:!1}),c=ue("#3b2a21",{roughness:.38,side:It}),u=ue("#d9a83a"),h=new ze;h.add(ji(new w(.18,.1,.15),new w(0,.15,.02),t));for(const F of[-1,1]){const ne=F>0,de=new w(F*.08,.15,-.01),pe=new w(F*.32,.11,-.25),z=new w(-F*.07,ne?.13:.085,-.41);h.add(ui([de,new w(F*.22,.135,-.13),pe,new w(F*.16,ne?.125:.095,-.38),z],[.085,.08,.066,.062,.066],t,{folds:.035,flatten:.9}));const Q=new O(new di(.06,.022,10,22),n);Q.position.copy(z),Q.lookAt(new w(F*.16,z.y,-.38)),h.add(Q);const ge=z.clone().add(new w(-F*.06,-.035,.03)),me=ge.clone().add(new w(-F*.12,-.02,.07));h.add(ui([z.clone().add(new w(-F*.02,-.01,0)),ge,me],[.027,.03,.023],i,{flatten:.7,segments:10}))}const f=new ze;f.position.set(0,.2,0),f.rotation.x=-.5;const d=new O(new Ss([new re(0,-.05),new re(.17,-.05),new re(.16,.06),new re(.143,.15),new re(.146,.25),new re(.15,.32),new re(.138,.37),new re(.1,.41),new re(.055,.44),new re(.034,.45),new re(0,.45)],36),i);d.scale.set(1,1,.68),f.add(d);const g=new O(new Ss([new re(0,-.075),new re(.188,-.075),new re(.192,-.04),new re(.166,.06),new re(.15,.15),new re(.154,.25),new re(.158,.315),new re(.152,.335)],36),e);g.scale.set(1,1,.7),f.add(g);const x=new O(new di(.152,.006,6,36),e);x.rotation.x=Math.PI/2,x.scale.set(1,.7,1),x.position.y=.335,f.add(x);for(const F of[-1,1])f.add(ui([new w(F*.075,.33,-.098),new w(F*.095,.4,-.06),new w(F*.1,.425,0),new w(F*.095,.4,.06),new w(F*.075,.33,.098)],[.008,.008,.008,.008,.008],e,{segments:16})),f.add(ji(new w(.05,.048,.05),new w(F*.138,.37,0),i));const m=new O(new ft(.032,.037,.09,16),i);m.position.set(0,.48,-.005),m.rotation.x=-.15,f.add(m);const p=.118,_=new ze;_.position.set(0,.52+p*.95,-.02),_.rotation.x=.38;const v=new Ke(p,40,30),y=v.attributes.position;for(let F=0;F<y.count;F++){let ne=y.getX(F),de=y.getZ(F);const pe=y.getY(F);if(pe<0){const z=-pe/p;ne*=1-.24*Math.pow(z,1.8),de<0&&(de*=1-.1*z)}de>0?de*=1.05:de*=.94,y.setXYZ(F,ne*.93,pe,de)}v.computeVertexNormals(),_.add(new O(v,i));const C=(F,ne,de=0)=>{const pe=Math.sqrt(Math.max(0,1-F*F-ne*ne)),z=ne<0?1-.24*Math.pow(-ne,1.8):1,Q=ne<0?1-.1*-ne:1;return new w(F*p*.93*z,ne*p,-(pe*p*.94*Q)-de)};for(const F of[-1,1])_.add(ji(new w(p*.1,p*.115,p*.04),C(F*.36,-.06,.002),o,new w(-.25,F*.38,0))),_.add(ji(new w(p*.025,p*.025,p*.01),C(F*.33,-.02,p*.03),a)),_.add(ui([C(F*.24,.14,.003),C(F*.36,.17,.003),C(F*.48,.13,.003)],[.0028,.0034,.002],o,{segments:8})),_.add(ji(new w(p*.17,p*.1,p*.03),C(F*.5,-.3,.001),l,new w(0,F*.5,0))),_.add(ji(new w(p*.08,p*.15,p*.11),new w(F*p*.9,-p*.08,p*.06),i));_.add(ji(new w(p*.075,p*.08,p*.07),C(0,-.22,.002),i)),_.add(ji(new w(p*.12,p*.04,p*.04),C(0,-.48,0),r));const S=p*1.07,A=new Ke(S,48,28,0,Math.PI*2,0,Math.PI*.62),P=A.attributes.position;for(let F=0;F<P.count;F++){const ne=P.getX(F),de=P.getZ(F);let pe=P.getY(F);const z=Math.atan2(ne,de),Q=1+Math.sin(z*52)*.007,ge=Math.max(0,-de/S-.2)/.8,me=p*(.36-.06*Math.max(0,ne/p));ge>0&&pe<me&&(pe=me+(pe-me)*(1-ge*.9)),P.setXYZ(F,ne*.95*Q,pe,de*Q*(de>0?1.07:.98))}A.computeVertexNormals();const B=new O(A,c);B.position.y=p*.04,_.add(B);for(let F=0;F<3;F++){const ne=new w(p*(.22-F*.05),p*.98,-p*.35);_.add(ui([ne,new w(p*(.05-F*.12),p*.62,-p*.94),new w(-p*(.25+F*.15),p*(.32-F*.04),-p*.92),new w(-p*(.5+F*.12),p*(.12-F*.04),-p*.8)],[.012,.015,.01,.002],c,{flatten:1,segments:14}))}for(const F of[-1,1])for(let ne=0;ne<2;ne++)_.add(ui([new w(F*p*(.62+ne*.12),p*.55,-p*(.62-ne*.15)),new w(F*p*(.88+ne*.06),p*.05,-p*(.62-ne*.12)),new w(F*p*(.9+ne*.05),-p*.65,-p*(.48-ne*.1)),new w(F*p*(.78+ne*.06),-p*(1.45+ne*.3),-p*(.3-ne*.05))],[.013,.017,.012,.002],c,{flatten:1,segments:18}));f.add(_);const M=new ze,T=48,N=30,L=[],U=[],J=F=>.5+Math.sin(F*11.3)*.03+Math.sin(F*27.1+1)*.02-Math.pow(Math.abs(F-.5)*2,2)*.1;for(let F=0;F<=N;F++){const ne=F/N;for(let de=0;de<=T;de++){const pe=de/T,z=(pe-.5)*Math.PI*1.05,Q=ne*J(pe),ge=p*1.08+Math.min(1,Q/.18)*.04-Math.max(0,Q-.32)*.14,me=p*1.12+Math.min(1,Q/.22)*.03,Be=1+Math.sin(pe*150+s()*.4)*.022+Math.sin(pe*63)*.018;L.push(Math.sin(z)*ge*Be,p*.45-Q,Math.cos(z)*me*Be+Math.max(0,Q-.14)*.03),U.push(pe,ne)}}const H=[];for(let F=0;F<N;F++)for(let ne=0;ne<T;ne++){const de=F*(T+1)+ne,pe=de+1,z=de+T+1,Q=z+1;H.push(de,z,pe,pe,z,Q)}const X=new Et;X.setAttribute("position",new Qe(L,3)),X.setAttribute("uv",new Qe(U,2)),X.setIndex(H),X.computeVertexNormals(),M.add(new O(X,c)),M.position.copy(_.position),f.add(M),h.add(f);const k=F=>new w(F*.142,.2+.37*Math.cos(.5),-.37*Math.sin(.5)+.01),V=[];return[{side:1,elbow:new w(.225,.32,-.31),wrist:new w(.12,.115,-.47),tip:new w(.08,.045,-.6),pose:"drawing"},{side:-1,elbow:new w(-.235,.33,-.3),wrist:new w(-.17,.085,-.46),tip:new w(-.13,.03,-.62),pose:"resting"}].forEach(({side:F,elbow:ne,wrist:de,tip:pe,pose:z})=>{const Q=k(F),ge=new ze;ge.position.copy(Q);const me=Be=>Be.clone().sub(Q);ge.add(ui([me(Q),me(Q.clone().lerp(ne,.5).add(new w(F*.01,0,0))),me(ne),me(ne.clone().lerp(de,.5)),me(de)],[.041,.036,.03,.026,.021],i)),ge.add(kM(me(de),me(pe),i,z,u)),h.add(ge),V.push(ge)}),h.traverse(F=>{F instanceof O&&F.material!==l&&F.material!==a&&(F.castShadow=!0,F.receiveShadow=!0)}),{artist:h,upper:f,head:_,hairFall:M,drawingArm:V[0],update(F){f.scale.y=1+Math.sin(F*1.6)*.008,V[0].rotation.y=Math.sin(F*2.4)*.025+Math.sin(F*5.1)*.008,V[0].rotation.x=Math.sin(F*3.3)*.012,_.rotation.y=Math.sin(F*.35)*.05,M.rotation.x=Math.sin(F*.9)*.012}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var kn=Uint8Array,nr=Uint16Array,HM=Int32Array,Kd=new kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$d=new kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),VM=new kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zd=function(s,e){for(var t=new nr(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new HM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Jd=Zd(Kd,2),Qd=Jd.b,GM=Jd.r;Qd[28]=258,GM[258]=28;var WM=Zd($d,0),XM=WM.b,Bc=new nr(32768);for(var Dt=0;Dt<32768;++Dt){var Yi=(Dt&43690)>>1|(Dt&21845)<<1;Yi=(Yi&52428)>>2|(Yi&13107)<<2,Yi=(Yi&61680)>>4|(Yi&3855)<<4,Bc[Dt]=((Yi&65280)>>8|(Yi&255)<<8)>>1}var Zr=function(s,e,t){for(var n=s.length,i=0,r=new nr(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new nr(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new nr(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Bc[h]>>l]=c}else for(a=new nr(n),i=0;i<n;++i)s[i]&&(a[i]=Bc[o[s[i]-1]++]>>15-s[i]);return a},po=new kn(288);for(var Dt=0;Dt<144;++Dt)po[Dt]=8;for(var Dt=144;Dt<256;++Dt)po[Dt]=9;for(var Dt=256;Dt<280;++Dt)po[Dt]=7;for(var Dt=280;Dt<288;++Dt)po[Dt]=8;var ep=new kn(32);for(var Dt=0;Dt<32;++Dt)ep[Dt]=5;var jM=Zr(po,9,1),YM=Zr(ep,5,1),Dl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},qn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Nl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},qM=function(s){return(s+7)/8|0},KM=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new kn(s.subarray(e,t))},$M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$n=function(s,e,t){var n=new Error(e||$M[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,$n),!t)throw n;return n},ZM=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new kn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new kn(i*3));var c=function(We){var je=t.length;if(We>je){var D=new kn(Math.max(je*2,We));D.set(t),t=D}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,x=e.m,m=e.n,p=i*8;do{if(!d){u=qn(s,h,1);var _=qn(s,h+1,3);if(h+=3,_)if(_==1)d=jM,g=YM,x=9,m=5;else if(_==2){var S=qn(s,h,31)+257,A=qn(s,h+10,15)+4,P=S+qn(s,h+5,31)+1;h+=14;for(var B=new kn(P),M=new kn(19),T=0;T<A;++T)M[VM[T]]=qn(s,h+T*3,7);h+=A*3;for(var N=Dl(M),L=(1<<N)-1,U=Zr(M,N,1),T=0;T<P;){var J=U[qn(s,h,L)];h+=J&15;var v=J>>4;if(v<16)B[T++]=v;else{var H=0,X=0;for(v==16?(X=3+qn(s,h,3),h+=2,H=B[T-1]):v==17?(X=3+qn(s,h,7),h+=3):v==18&&(X=11+qn(s,h,127),h+=7);X--;)B[T++]=H}}var k=B.subarray(0,S),V=B.subarray(S);x=Dl(k),m=Dl(V),d=Zr(k,x,1),g=Zr(V,m,1)}else $n(1);else{var v=qM(h)+4,y=s[v-4]|s[v-3]<<8,C=v+y;if(C>i){l&&$n(0);break}a&&c(f+y),t.set(s.subarray(v,C),f),e.b=f+=y,e.p=h=C*8,e.f=u;continue}if(h>p){l&&$n(0);break}}a&&c(f+131072);for(var F=(1<<x)-1,ne=(1<<m)-1,de=h;;de=h){var H=d[Nl(s,h)&F],pe=H>>4;if(h+=H&15,h>p){l&&$n(0);break}if(H||$n(2),pe<256)t[f++]=pe;else if(pe==256){de=h,d=null;break}else{var z=pe-254;if(pe>264){var T=pe-257,Q=Kd[T];z=qn(s,h,(1<<Q)-1)+Qd[T],h+=Q}var ge=g[Nl(s,h)&ne],me=ge>>4;ge||$n(3),h+=ge&15;var V=XM[me];if(me>3){var Q=$d[me];V+=Nl(s,h)&(1<<Q)-1,h+=Q}if(h>p){l&&$n(0);break}a&&c(f+131072);var Be=f+z;if(f<V){var He=r-V,Ve=Math.min(V,Be);for(He+f<0&&$n(3);f<Ve;++f)t[f]=n[He+f]}for(;f<Be;++f)t[f]=t[f-V]}}e.l=d,e.p=de,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?KM(t,0,f):t.subarray(0,f)},JM=new kn(0),QM=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&$n(6,"invalid zlib data"),(s[1]>>5&1)==1&&$n(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function e1(s,e){return ZM(s.subarray(QM(s),-4),{i:2},e,e)}var t1=typeof TextDecoder<"u"&&new TextDecoder,n1=0;try{t1.decode(JM,{stream:!0}),n1=1}catch{}function tp(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function i1(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[a]=l}return i}function s1(s,e,t,n){const i=tp(s,n,e),r=i1(i,n,s,e),o=new dt(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function r1(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],x=l[h-d];a[h][d]=g+x;const m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=x*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let x=0;x<=t;++x)g[x]=r.slice(0);g[0][0]=1;for(let x=1;x<=n;++x){let m=0;const p=h-x,_=t-x;h>=x&&(g[d][0]=g[f][0]/a[_+1][p],m=g[d][0]*a[p][_]);const v=p>=-1?1:-p,y=h-1<=_?x-1:t-h;for(let S=v;S<=y;++S)g[d][S]=(g[f][S]-g[f][S-1])/a[_+1][p+S],m+=g[d][S]*a[p+S][_];h<=_&&(g[d][x]=-g[f][x-1]/a[_+1][h],m+=g[d][x]*a[h][_]),o[x][h]=m;const C=f;f=d,d=C}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function o1(s,e,t,n,i){const r=i<s?i:s,o=[],a=tp(s,n,e),l=r1(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)h.add(c[a-s+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new dt(0,0,0);return o}function a1(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function l1(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new w(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(a1(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function c1(s,e,t,n,i){const r=o1(s,e,t,n,i);return l1(r)}class u1 extends ii{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new dt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new w){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=s1(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new w){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=c1(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let ht,jt,pn;class h1 extends Ni{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?or.extractUrlBase(e):r.path,a=new hu(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(v1(e))ht=new g1().parse(e);else{const i=sp(e);if(!x1(i))throw new Error("THREE.FBXLoader: Unknown format.");if(wf(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+wf(i));ht=new m1().parse(i)}const n=new Ua(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new f1(n,this.manager).parse(ht)}}class f1{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){jt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new d1().parse(i);return this.parseScene(i,r,n),pn}parseConnections(){const e=new Map;return"Connections"in ht&&ht.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ht.Objects){const n=ht.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in ht.Objects){const n=ht.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Vn:fi,n.wrapT=a===0?Vn:fi,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new $t;const o=r.path;o||r.setPath(this.textureLoader.path);const a=jt.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in ht.Objects){const n=ht.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!jt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new bl;break;case"lambert":a=new xy;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new bl;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=ot.toWorkingColorSpace(new ce().fromArray(e.Diffuse.value),_t):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=ot.toWorkingColorSpace(new ce().fromArray(e.DiffuseColor.value),_t)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=ot.toWorkingColorSpace(new ce().fromArray(e.Emissive.value),_t):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=ot.toWorkingColorSpace(new ce().fromArray(e.EmissiveColor.value),_t)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=ot.toWorkingColorSpace(new ce().fromArray(e.Specular.value),_t):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=ot.toWorkingColorSpace(new ce().fromArray(e.SpecularColor.value),_t));const r=this;return jt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=_t);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=_t);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=fa,i.envMap.colorSpace=_t);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=_t);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in ht.Objects&&t in ht.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=jt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ht.Objects){const n=ht.Objects.Deformer;for(const i in n){const r=n[i],o=jt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ie().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=jt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){pn=new ze;const i=this.parseModels(e.skeletons,t,n),r=ht.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),jt.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&pn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),pn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=ip(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new p1().parse();pn.children.length===1&&pn.children[0].isGroup&&(pn.children[0].animations=a,pn=pn.children[0]),pn.animations=a}parseModels(e,t,n){const i=new Map,r=ht.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=jt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new _a;break;case"Null":default:u=new ze;break}u.name=l.attrName?xt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new _a,r.matrixWorld.copy(c.transformLink),r.name=i?xt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=ht.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Tt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new sn(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Tt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Tt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=ht.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Tt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=ot.toWorkingColorSpace(new ce().fromArray(n.Color.value),_t));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new rr(r,o,a,l);break;case 1:t=new du(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=un.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=un.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new kd(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new rr(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new bl({name:Ni.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new wd(r,o),i.normalizeSkinWeights()):i=new O(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new La({name:Ni.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new co(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=ao(t.RotationOrder.value):n.eulerOrder=ao(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&jt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=ht.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),pn.add(e.target)):e.lookAt(new w().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];jt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;jt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Ia(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ht.Objects){const t=ht.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ie().fromArray(r.Matrix.a)}):e[i.Node]=new Ie().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in ht){if("AmbientColor"in ht.GlobalSettings){const e=ht.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new ce().setRGB(t,n,i,_t);pn.add(new Ny(r,1))}}"UnitScaleFactor"in ht.GlobalSettings&&(pn.userData.unitScaleFactor=ht.GlobalSettings.UnitScaleFactor.value)}}}class d1{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ht.Objects){const n=ht.Objects.Geometry;for(const i in n){const r=jt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return ht.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=ao(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=ip(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Et;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Qe(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Qe(a.colors,3)),t&&(r.setAttribute("skinIndex",new tu(a.weightsIndices,4)),r.setAttribute("skinWeight",new Qe(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new rt().getNormalMatrix(i),u=new Qe(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new Qe(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let x,m=!1;d<0&&(d=d^-1,m=!0);let p=[],_=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=ea(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){_.push(v.weight),p.push(v.id)}),_.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],y=[0,0,0,0];_.forEach(function(C,S){let A=C,P=p[S];y.forEach(function(B,M,T){if(A>B){T[M]=A,A=B;const N=v[M];v[M]=P,P=N}})}),p=v,_=y}for(;_.length<4;)_.push(0),p.push(0);for(let v=0;v<4;++v)u.push(_[v]),h.push(p[v])}if(e.normal){const v=ea(g,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=ea(g,n,d,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(v,y){const C=ea(g,n,d,v);c[y]===void 0&&(c[y]=[]),c[y].push(C[0]),c[y].push(C[1])}),i++,m&&(f.genFace(t,e,o,x,a,l,c,u,h,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new w(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new w(0,1,0):new w(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new re(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,u){let h;if(u>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)f.push(new w(d[n[p]],d[n[p+1]],d[n[p+2]]));const{tangent:g,bitangent:x}=this.getNormalTangentAndBitangent(f),m=[];for(const p of f)m.push(this.flattenVertex(p,g,x));h=cu.triangulateShape(m,[])}else h=[[0,1,2]];for(const[f,d,g]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(x,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=ht.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let x=0;x<c.length;x++){const m=c[x]*3;h[m]=l[x*3],h[m+1]=l[x*3+1],h[m+2]=l[x*3+2]}const f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},d=this.genBuffers(f),g=new Qe(d.vertex,3);g.name=r||n.attrName,g.applyMatrix4(i),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new ce;o<i.length;o+=4)a.fromArray(i,o),ot.toWorkingColorSpace(a,_t),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Et;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new dt().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new u1(n,i,r,a,l).getPoints(r.length*12);return new Et().setFromPoints(u)}}class p1{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ht.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ht.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=ht.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(_1),values:t[n].KeyValueFloat.a},r=jt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=ht.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=jt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=jt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=ht.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?xt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};pn.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ie),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=jt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=jt.get(h).parents[0].ID,d=jt.get(f).parents[0].ID,g=jt.get(d).parents[0].ID,x=ht.Objects.Model[g],m={modelName:x.attrName?xt.sanitizeNodeName(x.attrName):"",morphName:ht.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=ht.Objects.AnimationStack,n={};for(const i in t){const r=jt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Od(e.name,-1,t)}generateTracks(e){const t=[];let n=new w,i=new w;if(e.transform&&e.transform.decompose(n,new bt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Es(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,r);o=f[0],a=f[1]}const l=ao(0);n!==void 0&&(n=n.map(un.degToRad),n.push(l),n=new Kt().fromArray(n),n=new bt().setFromEuler(n)),i!==void 0&&(i=i.map(un.degToRad),i.push(l),i=new Kt().fromArray(i),i=new bt().setFromEuler(i).invert());const c=new bt,u=new Kt,h=[];if(!a||!o)return new ts(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)u.set(a[f],a[f+1],a[f+2],r),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new bt().fromArray(h,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,f/3*4);return new ts(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=pn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ts(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(un.degToRad(e.values[0])),o.push(un.degToRad(t.values[0])),o.push(un.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(un.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(un.degToRad),f=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const x=Math.max(...d)/180,m=new Kt(...c,i),p=new Kt(...h,i),_=new bt().setFromEuler(m),v=new bt().setFromEuler(p);_.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const y=e.times[a-1],C=e.times[a]-y,S=new bt,A=new Kt;for(let P=0;P<1;P+=1/x)S.copy(_.clone().slerp(v.clone(),P)),r.push(y+P*C),A.setFromQuaternion(S,i),o.push(A.x),o.push(A.y),o.push(A.z)}else r.push(e.times[a]),o.push(un.degToRad(e.values[a])),o.push(un.degToRad(t.values[a])),o.push(un.degToRad(n.values[a]))}return[r,o]}}class m1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new np,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],M1(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Fl(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Fl(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Fl(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class g1{parse(e){const t=new Mf(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new np;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=e1(new Uint8Array(e.getArrayBuffer(o))),l=new Mf(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Mf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class np{add(e,t){this[e]=t}}function v1(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===sp(s,0,e.length)}function x1(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function wf(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function _1(s){return s/46186158e3}const y1=[];function ea(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return w1(y1,n.buffer,r,o)}const Ul=new Kt,Zs=new w;function ip(s){const e=new Ie,t=new Ie,n=new Ie,i=new Ie,r=new Ie,o=new Ie,a=new Ie,l=new Ie,c=new Ie,u=new Ie,h=new Ie,f=new Ie,d=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Zs.fromArray(s.translation));const g=ao(0);if(s.preRotation){const T=s.preRotation.map(un.degToRad);T.push(g),t.makeRotationFromEuler(Ul.fromArray(T))}if(s.rotation){const T=s.rotation.map(un.degToRad);T.push(s.eulerOrder||g),n.makeRotationFromEuler(Ul.fromArray(T))}if(s.postRotation){const T=s.postRotation.map(un.degToRad);T.push(g),i.makeRotationFromEuler(Ul.fromArray(T)),i.invert()}s.scale&&r.scale(Zs.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Zs.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Zs.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Zs.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Zs.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const x=t.clone().multiply(n).multiply(i),m=new Ie;m.extractRotation(u);const p=new Ie;p.copyPosition(u);const _=p.clone().invert().multiply(u),v=m.clone().invert().multiply(_),y=r,C=new Ie;if(d===0)C.copy(m).multiply(x).multiply(v).multiply(y);else if(d===1)C.copy(m).multiply(v).multiply(x).multiply(y);else{const N=new Ie().scale(new w().setFromMatrixScale(h)).clone().invert(),L=v.clone().multiply(N);C.copy(m).multiply(x).multiply(L).multiply(y)}const S=c.clone().invert(),A=o.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(S).multiply(a).multiply(o).multiply(r).multiply(A);const B=new Ie().copyPosition(P),M=u.clone().multiply(B);return f.copyPosition(M),P=f.clone().multiply(C),P.premultiply(u.invert()),P}function ao(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Fl(s){return s.split(",").map(function(t){return parseFloat(t)})}function sp(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function M1(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function w1(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}class S1 extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new R1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=or.extractUrlBase(e);o=or.resolveURL(c,this.path)}else o=or.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rp){try{o[pt.KHR_BINARY_GLTF]=new G1(e)}catch(h){i&&i(h);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new nw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:o[h]=new E1;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[h]=new W1(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[h]=new X1;break;case pt.KHR_MESH_QUANTIZATION:o[h]=new j1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function b1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class T1{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new du(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rr(u),c.distance=h;break;case"spot":c=new kd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class E1{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){const i=[];e.color=new ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(i)}}class A1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class C1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class P1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class I1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class L1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class D1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}}class N1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class U1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(r)}}class F1{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class O1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class B1{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class k1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class z1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class H1{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class V1{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const x=new Ie,m=new w,p=new bt,_=new w(1,1,1),v=new Kn(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(m,p,_));for(const y in l)if(y==="_COLOR_0"){const C=l[y];v.instanceColor=new _s(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Tt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const rp="glTF",kr=12,Sf={JSON:1313821514,BIN:5130562};class G1{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-kr,r=new DataView(e,kr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Sf.JSON){const c=new Uint8Array(e,kr+o,a);this.content=n.decode(c)}else if(l===Sf.BIN){const c=kr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class W1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=kc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=kc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ar[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,rn,f)})})}}class X1{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class j1{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class op extends uo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,_=1-m,v=p-f+h;for(let y=0;y!==a;y++){const C=o[x+y+a],S=o[x+y+l]*u,A=o[g+y+a],P=o[g+y]*u;r[y]=_*C+v*S+m*A+p*P}return r}}const Y1=new bt;class q1 extends op{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Y1.fromArray(r).normalize().toArray(r),r}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bf={9728:gn,9729:An,9984:jf,9985:sa,9986:Vr,9987:Ci},Tf={33071:fi,33648:da,10497:Vn},Ol={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K1={CUBICSPLINE:void 0,LINEAR:eo,STEP:Qr},Bl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),s.DefaultMaterial}function ds(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function J1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Q1(s){let e;const t=s.extensions&&s.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kl(t.attributes):e=s.indices+":"+kl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+kl(s.targets[n]);return e}function kl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ew(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const tw=new Ie;class nw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new b1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ua(this.options.manager):this.textureLoader=new Uy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ds(r,a,i),Ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(or.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ol[i.type],a=ar[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ol[i.type],c=ar[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(d&&d!==h){const p=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(_);v||(x=new c(a,p*d,i.count*d/u),v=new yd(x,d/u),t.cache.add(_,v)),m=new no(v,l,f%d/u,g)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new At(x,l,g);if(i.sparse!==void 0){const p=Ol.SCALAR,_=ar[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new _(o[1],v,i.sparse.count*p),S=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=C.length;A<P;A++){const B=C[A];if(m.setX(B,S[A*l]),l>=2&&m.setY(B,S[A*l+1]),l>=3&&m.setZ(B,S[A*l+2]),l>=4&&m.setW(B,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=bf[f.magFilter]||An,u.minFilter=bf[f.minFilter]||Ci,u.wrapS=Tf[f.wrapS]||Vn,u.wrapT=Tf[f.wrapT]||Vn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new $t(x);m.needsUpdate=!0,f(m)}),t.load(or.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ei(h,o),h.userData.mimeType=o.mimeType||ew(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Td,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new La,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Na}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const h=i[pt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,_t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=It);const u=r.alphaMode||Bl.OPAQUE;if(u===Bl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ot&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ot&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ot){const h=r.emissiveFactor;a.emissive=new ce().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&o!==Ot&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,_t)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(i,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ef(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Q1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ef(new Et,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?$1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=o[d];let p;const _=c[d];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new wd(x,_):new O(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?p.geometry=cf(p.geometry,nd):m.mode===Un.TRIANGLE_FAN&&(p.geometry=cf(p.geometry,Tc));else if(m.mode===Un.LINES)p=new bd(x,_);else if(m.mode===Un.LINE_STRIP)p=new co(x,_);else if(m.mode===Un.LINE_LOOP)p=new H_(x,_);else if(m.mode===Un.POINTS)p=new Pc(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&J1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ei(p,r),m.extensions&&ds(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ds(i,h[0],r),h[0];const f=new ze;r.extensions&&ds(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(un.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ia(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let _=0,v=f.length;_<v;_++){const y=f[_],C=d[_],S=g[_],A=x[_],P=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const B=n._createAnimationTracks(y,C,S,A,P);if(B)for(let M=0;M<B.length;M++)p.push(B[M])}return new Od(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,tw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new _a:c.length>1?u=new ze:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ei(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){const h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ze;n.name&&(r.name=i.createUniqueName(n.name)),Ei(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Rn||f instanceof $t)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];qi[r.path]===qi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(qi[r.path]){case qi.weights:c=Ts;break;case qi.rotation:c=ts;break;case qi.position:case qi.scale:c=Es;break;default:switch(n.itemSize){case 1:c=Ts;break;case 2:case 3:default:c=Es;break}break}const u=i.interpolation!==void 0?K1[i.interpolation]:eo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+qi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=zc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ts?q1:op;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iw(s,e,t){const n=e.attributes,i=new ni;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const u=zc(ar[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=zc(ar[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ef(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=kc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ot.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ei(s,e),iw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Z1(s,e.targets,t):s})}const sw=["/assets/world/models/artist.glb","/assets/world/models/artist.fbx"],rw=1.6;function ow(s){return/left|(^|[._\-:\s])l($|[._\-\s\d])|_l$|\.l$/i.test(s)?"l":/right|(^|[._\-:\s])r($|[._\-\s\d])|_r$|\.r$/i.test(s)?"r":null}function aw(s){return s.toLowerCase().replace(/^mixamorig\d*[:_]?/,"").replace(/^(def|org|mch)[-_.]/,"").replace(/left|right/g,"").replace(/[._\-\s](l|r)$/g,"").replace(/^(l|r)[._\-\s]/,"").replace(/[._\-\s]/g,"")}const lw=[["upperLeg",/^(upleg|thigh|upperleg0?1?|upperleg)$/],["lowerLeg",/^(leg|calf|shin|lowerleg0?1?|knee)$/],["foot",/^(foot|ankle)$/],["toe",/^(toebase|toes?|ball|toe1?1?)$/],["upperArm",/^(arm|upperarm0?1?)$/],["foreArm",/^(forearm|lowerarm0?1?|elbow)$/],["hand",/^(hand|wrist)$/],["finger",/^(handmiddle1|middle0?1|middle1?1?|finger2?1?|handindex1|index0?1|index1?1?)$/]];function cw(s){const e={upperLeg:{},lowerLeg:{},foot:{},toe:{},upperArm:{},foreArm:{},hand:{},finger:{}},t=[];s.traverse(i=>{i.isBone&&t.push(i)});const n=i=>{let r=0;for(let o=i;o;o=o.parent)r++;return r};for(const i of t){const r=aw(i.name),o=ow(i.name);if(!o){!e.hips&&/^(hips|pelvis|hip)$/.test(r)&&(e.hips=i),/^(spine|spine0?[1-5]|spine05)$/.test(r)&&(!e.spine||n(i)<n(e.spine))&&(e.spine=i),/^neck0?1?$/.test(r)&&(!e.neck||n(i)<n(e.neck))&&(e.neck=i),/^head$/.test(r)&&(e.head=i);continue}for(const[a,l]of lw)l.test(r)&&(!e[a][o]||n(i)<n(e[a][o]))&&(e[a][o]=i)}return e}const Af=new w,Rf=new w,Sa=new bt,ba=new bt;function xs(s,e,t){if(!s||!e||!s.parent)return;s.updateWorldMatrix(!0,!0),s.getWorldPosition(Af),e.getWorldPosition(Rf);const n=Rf.sub(Af).normalize();if(n.lengthSq()<1e-8)return;const i=new bt().setFromUnitVectors(n,t.clone().normalize());s.parent.getWorldQuaternion(Sa),s.getWorldQuaternion(ba),s.quaternion.copy(Sa.invert().multiply(i.multiply(ba))),s.updateWorldMatrix(!1,!0)}const Js=s=>s==null?void 0:s.children.find(e=>e.isBone);function ap(s,e){s.parent.getWorldQuaternion(Sa),s.getWorldQuaternion(ba),s.quaternion.copy(Sa.invert().multiply(e.clone().multiply(ba))),s.updateWorldMatrix(!1,!0)}function zl(s,e,t,n,i,r){if(!s||!e||!t||!s.parent)return;s.updateWorldMatrix(!0,!0);const o=r.clone().applyQuaternion(s.getWorldQuaternion(new bt).invert());xs(s,e,n);const a=e.getWorldPosition(new w).sub(s.getWorldPosition(new w)).normalize(),l=f=>f.clone().sub(a.clone().multiplyScalar(f.dot(a))).normalize(),c=l(o.applyQuaternion(s.getWorldQuaternion(new bt))),u=l(i.clone().normalize()),h=Math.atan2(a.dot(new w().crossVectors(c,u)),c.dot(u));ap(s,new bt().setFromAxisAngle(a,h)),xs(e,t,i)}const Hc=new Bd;Hc.setURLModifier(s=>s.replace(/\\/g,"/").replace(/\.png$/i,".webp"));function uw(s){return new Promise((e,t)=>{s.endsWith(".glb")?new S1(Hc).load(s,n=>e(n.scene),void 0,t):new h1(Hc).load(s,e,void 0,t)})}async function hw(){let s=null;for(const _ of sw){const v=await fetch(_,{method:"HEAD"}).catch(()=>null);if(!(!(v!=null&&v.ok)||(v.headers.get("content-type")??"").includes("text/html"))&&(s=await uw(_).catch(y=>(console.warn(`The character model ${_} could not be loaded:`,y),null)),s))break}if(!s)return null;const e=cw(s),t=e.hips&&e.upperLeg.l&&e.upperLeg.r&&e.upperArm.l&&e.upperArm.r,n=t?void 0:s.getObjectByName("pencil_at"),i=t?s.getObjectByName("jetty_pose"):void 0;if(!t&&!n)return console.warn("The character model has no recognisable skeleton, so the built-in figure stays."),null;if(s.traverse(_=>{const v=_;if(!v.isMesh)return;v.castShadow=v.receiveShadow=!0,v.frustumCulled=!1,v.userData.keep=!0;const y=Array.isArray(v.material)?v.material:[v.material];for(const C of y){const S=/hair|brow|lash|long0|ponytail|bob0|braid|short0|high-poly|eye|jeans/i.test(C.name+v.name);C.transparent=!1,C.depthWrite=!0,C.alphaTest=S?.4:0,S&&(C.side=It),C.needsUpdate=!0}}),n)return fw(s,n);if(i)return dw(s,e);const r=new ze;r.add(s),r.updateMatrixWorld(!0);const o=new ni().setFromObject(s);s.scale.multiplyScalar(rw/Math.max(.01,o.max.y-o.min.y)),r.updateMatrixWorld(!0);const a=e.foot.l??e.lowerLeg.l,l=e.toe.l??Js(a);if(l){const _=l.getWorldPosition(new w).sub(a.getWorldPosition(new w));s.rotation.y+=Math.PI-Math.atan2(_.x,_.z)}else s.rotation.y+=Math.PI;r.updateMatrixWorld(!0);const c=(_,v,y)=>new w(_,v,y);xs(e.spine,e.neck??e.head,c(0,Math.cos(.5),-Math.sin(.5))),xs(e.neck,e.head&&Js(e.head)?Js(e.head):e.head,c(0,Math.cos(.95),-Math.sin(.95)));const u=c(0,0,1),h=c(0,0,-1);for(const _ of["l","r"]){const v=_==="r"?1:-1;zl(e.upperLeg[_],e.lowerLeg[_],e.foot[_],c(v*.24,-.04,-.24),c(-v*.39,v>0?.02:-.03,-.16),u),xs(e.foot[_],e.toe[_]??Js(e.foot[_]),c(-v*.85,-.12,.45))}zl(e.upperArm.r,e.foreArm.r,e.hand.r,c(.083,-.265,-.14),c(-.105,-.205,-.16),h),xs(e.hand.r,e.finger.r??Js(e.hand.r),c(-.04,-.09,-.13)),zl(e.upperArm.l,e.foreArm.l,e.hand.l,c(-.093,-.255,-.13),c(.065,-.245,-.16),h),xs(e.hand.l,e.finger.l??Js(e.hand.l),c(.04,-.03,-.16)),r.updateMatrixWorld(!0);const f=new ni;s.traverse(_=>{const v=_;v.isSkinnedMesh&&(v.skeleton.update(),v.computeBoundingBox(),f.union(v.boundingBox.clone().applyMatrix4(v.matrixWorld)))});const d=e.hips.getWorldPosition(new w);if(s.position.x-=d.x,s.position.z-=d.z+.02,f.isEmpty()||(s.position.y-=f.min.y-.004),r.updateMatrixWorld(!0),e.hand.r){const _=e.hand.r.getWorldPosition(new w),v=new O(new ft(.0045,.003,.15,8),ue("#d9a83a"));v.position.copy(_).add(c(-.03,-.04,-.07)),v.rotation.set(-.7,0,.35),v.castShadow=!0,r.add(v),e.hand.r.attach(v)}const g=new Map;[e.spine,e.foreArm.r,e.neck].forEach(_=>{_&&g.set(_,_.quaternion.clone())});const x=new bt,m=new w,p=(_,v,y)=>{if(!_)return;const C=g.get(_);m.set(v,y,0);const S=m.length();if(S<1e-6){_.quaternion.copy(C);return}x.setFromAxisAngle(m.normalize(),S),_.quaternion.copy(C).multiply(x)};return{group:r,update(_){p(e.spine,Math.sin(_*1.6)*.012,0),p(e.foreArm.r,Math.sin(_*3.3)*.02,Math.sin(_*2.4)*.035),p(e.neck,0,Math.sin(_*.35)*.05)}}}function fw(s,e){const t=new ze;t.add(s),s.rotation.y=Math.PI,t.updateMatrixWorld(!0);const n=e.getWorldPosition(new w),i=new O(new ft(.004,.0028,.15,8),ue("#d9a83a"));return i.position.copy(n).add(new w(.012,.05,.03)),i.rotation.set(.55,0,-.35),i.castShadow=!0,t.add(i),{group:t,update(){}}}function dw(s,e){const t=new ze;t.add(s),s.rotation.y=Math.PI,t.updateMatrixWorld(!0);const n=new Map;[e.spine,e.neck,e.head,e.lowerLeg.l,e.lowerLeg.r,e.foot.l,e.foot.r].forEach(h=>{h&&n.set(h,h.quaternion.clone())});const i=new bt,r=new w,o=new bt,a=(h,f,d,g)=>{if(!h)return;h.quaternion.copy(n.get(h)),r.set(f,d,g);const x=r.length();x<1e-6||(r.normalize().applyQuaternion(t.getWorldQuaternion(i)),ap(h,o.setFromAxisAngle(r,x)))},l=wt.uDucks.value[oo-1],c=new w,u=new w;return{group:t,update(h){a(e.spine,Math.sin(h*1.4)*.012,0,Math.sin(h*.55)*.05),a(e.neck,0,Math.sin(h*.13)*.12,0),a(e.head,Math.sin(h*.21)*.07,Math.sin(h*.13)*.18+Math.sin(h*.31)*.06,Math.sin(h*.55)*-.03);for(const[f,d]of[["l",0],["r",Math.PI]])a(e.lowerLeg[f],Math.sin(h*1.05+d)*.22,0,0),a(e.foot[f],Math.sin(h*1.05+d-.8)*.18,0,0);e.foot.l&&e.foot.r&&(e.foot.l.getWorldPosition(c),e.foot.r.getWorldPosition(u),c.add(u).multiplyScalar(.5),l.set(c.x,c.z,.12+Math.abs(Math.cos(h*1.05))*.1,1))}}}const zr=new w;function Dn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;zr.copy(e),zr[n]=0,zr.normalize();const c=.5*o/(o+a),u=1-zr.angleTo(s)/l;return Math.sign(zr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Cf extends nt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new w,l=new w,c=new w(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new w,x=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Dn(g,l,"z","y",r,n),f[p+1]=1-Dn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Dn(g,l,"z","y",r,n),f[p+1]=1-Dn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Dn(g,l,"x","z",r,e),f[p+1]=Dn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Dn(g,l,"x","z",r,e),f[p+1]=1-Dn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Dn(g,l,"x","y",r,e),f[p+1]=1-Dn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Dn(g,l,"x","y",r,e),f[p+1]=1-Dn(g,l,"y","x",r,t);break}}}const Ut=wu(21),Nn=PM(),ta=new w(-.2,0,-.85),na=new w(-.17,0,-1.15),pw=Nn.clone().add(new w(-.5,.008,.45));function yt(s,e=!1){return s.traverse(t=>{t instanceof O&&(t.castShadow=!0,t.receiveShadow=e)}),s}function Hl(s,e,t,n,i=t){const r=e.clone().sub(s),o=Math.max(.001,r.length()),a=i===t?new au(t,o,6,16):new ft(i,t,o,16,1),l=new O(a,n);return l.position.copy(s).addScaledVector(r,.5),l.quaternion.setFromUnitVectors(new w(0,1,0),r.normalize()),l}function mw(){return new Vt({uniforms:{uTime:{value:0},uLevel:{value:0}},transparent:!0,depthWrite:!1,blending:Ms,vertexShader:`
      uniform float uTime;
      varying vec3 vNormalView;
      varying float vHeight;
      void main(){
        vec3 p = position;
        vHeight = clamp(p.y / 0.045 + 0.5, 0.0, 1.0);
        p.x += sin(uTime * 3.1) * 0.0025 * vHeight * vHeight + sin(uTime * 7.3) * 0.0008 * vHeight;
        vNormalView = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uLevel;
      varying vec3 vNormalView;
      varying float vHeight;
      void main(){
        float facing = abs(vNormalView.z);
        vec3 core = mix(vec3(1.0, 0.97, 0.85), vec3(1.0, 0.62, 0.2), smoothstep(0.35, 1.0, vHeight));
        vec3 colour = mix(vec3(1.0, 0.45, 0.12), core, facing);
        float alpha = (0.25 + facing * 0.75) * uLevel * smoothstep(1.0, 0.7, vHeight);
        gl_FragColor = vec4(colour * alpha * 1.6, alpha);
      }`})}const gw=jd(),Pf=["#4f8a3f","#5f9a48","#447a38"].map(s=>ue(s,{map:gw,alphaTest:.5,side:It,roughness:.7}));function ps(s,e,t,n=0){const i=new ze;for(let r=0;r<e;r++){const o=new O(new Ft(t,t),Pf[r%Pf.length]),a=Ut()*Math.PI*2,l=Ut()*2-1;o.position.set(Math.cos(a)*s*Math.sqrt(1-l*l),l*s*.7-n*Ut(),Math.sin(a)*s*Math.sqrt(1-l*l)),o.rotation.set(Ut()*Math.PI,Ut()*Math.PI,Ut()*Math.PI),i.add(o)}return i}function vw(s,e,t){const n=new ze;s.add(n);const i=new Ua,r=(K,se)=>{const xe=i.load(K,se);return xe.colorSpace=_t,xe.anisotropy=4,xe},o=(K,se,xe,Ce,Re=.03)=>(xe.userData.keep=!0,Ce&&(Ce.userData.keep=!0),r(K,Oe=>{const{width:Ht,height:Yt}=Oe.image,Ct=Ht/Yt,Zt=Ct>=1?se:se*Ct,bn=Ct>=1?se/Ct:se;xe.scale.set(Zt,bn,1),Ce==null||Ce.scale.set(Zt+Re,bn+Re,1)})),a=[],l=[],c=new Ot({visible:!1}),u=new Ot({map:Ba(),transparent:!0,depthWrite:!1,opacity:.8}),h=(K,se,xe,Ce=xe,Re=0)=>{const Oe=new O(new Ft(xe,Ce),u);Oe.rotation.x=-Math.PI/2,Oe.position.set(K,Re+.004,se),n.add(Oe)},f=(K,se,xe,Ce=0)=>(K.position.set(se,0,xe),K.rotation.y=Ce,n.add(yt(K)),K),d=Ri(ue("#f2dcc0",{roughness:.85}),"weathered_planks",[3,3],{normal:1}),g=new O(new nt(6.4,.16,5.8),d);g.position.set(-.3,-.08,.9),g.receiveShadow=!0,n.add(g);const x=Ri(ue("#d8a77c",{roughness:.7}),"oak_veneer_01",[1,1],{normal:.8}),m=Ri(ue("#6a4a32",{roughness:.85}),"weathered_planks",[1,2],{normal:1}),p=RM();p.repeat.set(3,2);const _=new O(new nt(.16,3.6,5.8),ue("#ffffff",{map:p,roughness:.95}));_.position.set(-3.45,1.8,.9),_.receiveShadow=!0,n.add(_);for(const K of[-1.95,.9,3.75]){const se=new O(new nt(.06,3.6,.12),m);se.position.set(-3.35,1.8,K),n.add(yt(se))}const v=new O(new nt(.05,.14,5.8),m);v.position.set(-3.35,.07,.9),n.add(v);const y=.4/6.6,C=new O(new nt(6.9,.08,6.3),m);C.position.set(-.25,3.36,.9),C.rotation.z=-y,n.add(yt(C));const S=K=>3.36-(K+.25)*Math.tan(y);for(const K of[-1.97,3.77]){const se=new O(new nt(6.6,.2,.16),m);se.position.set(-.2,S(-.2)-.16,K),se.rotation.z=-y,n.add(yt(se))}for(let K=-2.6;K<3;K+=1.1){const se=new O(new nt(.08,.12,5.9),m);se.position.set(K,S(K)-.1,.9),n.add(yt(se))}for(const K of[-1.97,3.77]){const se=new O(new nt(.14,S(2.8),.14),m);se.position.set(2.8,S(2.8)/2,K),n.add(yt(se))}const A=new O(new Mn(1.15,56),ue("#7f7262",{roughness:1}));A.rotation.x=-Math.PI/2,A.position.set(ta.x,.004,ta.z),A.receiveShadow=!0,n.add(A);const P=new O(new di(.98,.05,4,56),ue("#a8957a",{roughness:1}));P.rotation.x=-Math.PI/2,P.scale.z=.05,P.position.set(ta.x,.006,ta.z),n.add(P);const B=new ze,M=AM();M.repeat.set(2,1.4);const T=ue("#ffffff",{map:M,roughness:1});B.add(new O(new nt(.03,1.02,1.5),T));const N=ue("#5a3d28");[[.53,0,1.58,.05],[-.53,0,1.58,.05],[0,.77,.05,1.1],[0,-.77,.05,1.1]].forEach(([K,se,xe,Ce])=>{const Re=new O(new nt(.05,Ce,xe),N);Re.position.set(0,K,se),B.add(Re)});const L=["#c84a3a","#e0b23a","#3f6fa8","#f2efe6","#5e9a5a"],U=[[-.5,0,.44,-.05],[0,.03,.44,.04],[.5,-.01,.44,-.03]];if(t.board.images.slice(0,U.length).forEach((K,se)=>{const[xe,Ce,Re,Oe]=U[se],Ht=new ze,Yt=new O(new Ft(1,1),ue("#f6f1e4")),Ct=new O(new Ft(1,1),new Ot);Ct.material.map=o(K,Re,Ct,Yt,.025),Ct.scale.set(Re*.8,Re,1),Yt.scale.set(Re*.8+.025,Re+.025,1),Ct.position.z=.001;const Zt=new O(new Ke(.012,10,8),ue(L[se%L.length],{roughness:.4}));Zt.position.set(0,Re*.42,.012),Ht.add(Yt,Ct,Zt),Ht.rotation.set(0,Math.PI/2,Oe),Ht.position.set(.02+se*.0015,Ce,xe),B.add(Ht)}),B.position.set(-3.33,1.55,1.2),n.add(yt(B,!0)),t.board.images.length){const K=new O(new nt(.1,1.08,1.58),c);K.position.copy(B.position).add(new w(.04,0,0)),n.add(K),l.push({kind:"board",label:`See the ${t.board.name} pieces`,collection:t.board.collection,hit:K,highlight:[T,N]})}const J=Zo(new ze),H=new O(new ft(.24,.18,.42,18),ue("#a8603a"));H.position.y=.21,J.add(H);for(let K=0;K<9;K++){const se=K/9*Math.PI*2+Ut()*.4,xe=.15+Ut()*.3,Ce=.75+Ut()*.75,Re=new w(Math.cos(se)*xe,Ce,Math.sin(se)*xe);J.add(Hl(new w(0,.4,0),Re,.008,ue("#4a6a30")));const Oe=ps(.16,10,.24,.1);Oe.position.copy(Re),J.add(Oe)}J.position.set(-2.85,0,-1.45),n.add(yt(J)),a.push(K=>{J.rotation.y=Math.sin(K*.4)*.03});const X=new ze;X.add(new O(new ft(.11,.085,.2,14),ue("#b5653a"))),X.children[0].position.y=.1;const k=ps(.13,14,.18);k.position.y=.3,X.add(k),f(X,-3.05,.35);const V=Zo(new ze),F=new O(new Ke(.16,14,10,0,Math.PI*2,Math.PI*.45,Math.PI*.55),ue("#c9a27a",{side:It})),ne=ps(.16,16,.2);ne.position.y=.08,V.add(F,ne);for(let K=0;K<6;K++){const se=K/6*Math.PI*2,xe=.5+Ut()*.7,Ce=new $i([new w(Math.cos(se)*.14,.02,Math.sin(se)*.14),new w(Math.cos(se)*.22,-xe*.4,Math.sin(se)*.22),new w(Math.cos(se)*.2,-xe,Math.sin(se)*.2)]);V.add(new O(new es(Ce,12,.004,4),ue("#3f6a32")));for(let Re=1;Re<6;Re++){const Oe=ps(.04,3,.11);Oe.position.copy(Ce.getPoint(Re/6)),V.add(Oe)}}const de=new O(new ft(.006,.006,.6,4),ue("#3a2a1a"));de.position.y=.42,V.add(de),V.position.set(-2.2,2.62,-1.35),n.add(yt(V)),a.push(K=>{V.rotation.z=Math.sin(K*.7)*.03,V.rotation.x=Math.sin(K*.5+1)*.025});const pe=(K,se,xe,Ce)=>{const Re=se.clone().sub(K),Oe=new O(new nt(xe,Re.length(),xe),Ce);return Oe.position.copy(K).addScaledVector(Re,.5),Oe.quaternion.setFromUnitVectors(new w(0,1,0),Re.normalize()),yt(Oe)};for(let K=-2.6;K<3;K+=1.1){const se=new O(new nt(.08,.12,1.1),m);se.position.set(K,S(K)-.1,-2.6),n.add(yt(se))}for(let K=-2.35;K>-3.15;K-=.13){const se=new O(new nt(6.55,.035,.05),m);se.position.set(-.25,S(-.25)-.0225,K),se.rotation.z=-y,n.add(yt(se))}for(const K of[-1.97,3.77])n.add(pe(new w(2.8,S(2.8)-.85,K),new w(2.15,S(2.15)-.26,K),.07,m)),n.add(pe(new w(-3.33,S(-3.33)-.85,K),new w(-2.68,S(-2.68)-.26,K),.07,m));const z=.86,Q=-3.27,ge=new O(new nt(.2,.03,1.46),x);ge.position.set(Q,z-.015,1.2),n.add(yt(ge,!0));for(const K of[.66,1.74])n.add(pe(new w(-3.36,z-.03,K),new w(-3.36,z-.2,K),.025,m)),n.add(pe(new w(-3.36,z-.19,K),new w(-3.19,z-.03,K),.022,m));const me=ue("#efe6d2",{roughness:.9}),Be=(K,se,xe,Ce)=>{const Re=new ze;Re.add(new O(new nt(K,se,xe),ue(Ce,{roughness:.85})));const Oe=new O(new nt(K-.008,se*.7,xe+.002),me);return Oe.position.x=.004,Re.add(Oe),Re};[["#4a5d6b",.15,.21,.08],["#8a4b3a",.14,.2,-.1],["#c9b48e",.15,.21,.04]].forEach(([K,se,xe,Ce],Re)=>{const Oe=Be(se,.022,xe,K);Oe.position.set(Q+.01,z+.011+Re*.022,.62),Oe.rotation.y=Ce,n.add(yt(Oe))}),[["#5b6b4a",0],["#3d3a4f",.16]].forEach(([K,se],xe)=>{const Ce=Be(.15,.025,.21,K);Ce.rotation.set(Math.PI/2+se,0,0),Ce.position.set(Q,z+.105,.86+xe*.03),n.add(yt(Ce))});const He=K=>ue(K,{roughness:.28}),Ve=new ze,We=new O(new ft(.04,.036,.09,18),He("#d8cdb8"));We.position.y=.045,Ve.add(We);const je=ue("#e6c79a");["#2f4f6f","#a8443a","#d9a83a","#3f6a3a","#2b2b2b","#7a4a8a"].forEach((K,se)=>{const xe=new ze,Ce=new O(new ft(.0038,.0038,.16,6),ue(K,{roughness:.5})),Re=new O(new ei(.0038,.014,6),je);Re.position.y=.087,xe.add(Ce,Re),xe.position.set(Math.cos(se*1.05)*.016,.1,Math.sin(se*1.05)*.016),xe.rotation.set(Math.sin(se*1.05)*.16,0,-Math.cos(se*1.05)*.16),Ve.add(xe)}),Ve.position.set(Q,z,1.24),n.add(yt(Ve));const D=new ze,Lt=new O(new ft(.036,.034,.11,18),He("#6f8f8a"));Lt.position.y=.055,D.add(Lt);const Ze=ue("#b9b4a8",{metalness:.7,roughness:.35}),at=ue("#4a3526",{roughness:.9});["#b5793f","#2b2b2b","#c49a5a","#8a2f2a","#b5793f"].forEach((K,se)=>{const xe=new ze,Ce=new O(new ft(.0035,.0045,.17,8),ue(K,{roughness:.4})),Re=new O(new ft(.0048,.0045,.022,8),Ze);Re.position.y=.096;const Oe=new O(new ei(.0055,.024+se%2*.01,8),at);Oe.position.y=.118+se%2*.005,xe.add(Ce,Re,Oe),xe.position.set(Math.cos(se*1.26)*.014,.12+se%3*.012,Math.sin(se*1.26)*.014),xe.rotation.set(Math.sin(se*1.26)*.18,0,-Math.cos(se*1.26)*.18),D.add(xe)}),D.position.set(Q,z,1.5),n.add(yt(D));const Ge=new O(new nt(.075,.018,.13),ue("#2f3b52",{metalness:.4,roughness:.45}));Ge.position.set(Q+.01,z+.009,1.78),Ge.rotation.y=.12,n.add(yt(Ge));const vt=Fc();vt.repeat.set(3,3);const Xe=Fc(!0);Xe.repeat.set(1,1);const E=new ze,b=new O(new Cf(.62,.15,.62,3,.06),ue("#a37c4c",{map:vt,roughness:1}));b.position.y=.075;const j=new O(new Ke(.018,8,6),ue("#8f6633",{roughness:1}));j.scale.y=.4,j.position.y=.152;const ie=new O(new Cf(.4,.05,.27,2,.02),ue("#4d6b6e",{map:Xe,roughness:1}));ie.position.set(.06,.172,-.08),ie.rotation.y=.28,E.add(b,j,ie),f(E,-2.68,2.95,.18),h(-2.68,2.95,.86);const fe=ue("#4f6b33",{roughness:.8}),oe=(K,se)=>{const xe=new O(new nt(.24,.2,.2),m);xe.position.set(K.x,.1,K.y);const Ce=new O(new nt(.21,.01,.17),ue("#3b2a1e",{roughness:1}));Ce.position.set(K.x,.195,K.y),n.add(yt(xe),Ce),h(K.x,K.y,.36);const Re=new $i(se);n.add(yt(new O(new es(Re,48,.006,4),fe)));for(let Oe=1;Oe<=26;Oe++){const Ht=ps(.07,4,.15);Ht.position.copy(Re.getPoint(Oe/27)),n.add(yt(Ht))}};oe(new re(2.56,3.6),[new w(2.6,.2,3.62),...Array.from({length:10},(K,se)=>{const xe=2.6+se*1.5;return new w(2.8+Math.cos(xe)*.1,.45+se*.25,3.77+Math.sin(xe)*.1)})]),oe(new re(-3.14,3.58),[new w(-3.16,.2,3.6),...Array.from({length:10},(K,se)=>new w(-3.3,.45+se*.25,3.75+Math.sin(se*1.3)*.05))]);const Fe=["#8fa548","#7b9a3e","#a3a852","#6c8a37"].map(K=>ue(K,{roughness:.55})),Se=ue("#5e7031",{roughness:.6});[[-3.8,5.6],[-1.9,6.6],[.3,5.9],[2.4,6.8],[4.3,5.7]].forEach(([K,se],xe)=>{const Ce=Zo(new ze);Ce.position.set(K,Fn(K,se),se);const Re=e.low?6:10;for(let Oe=0;Oe<Re;Oe++){const Ht=Ut()*Math.PI*2,Yt=Math.sqrt(Ut())*.42,Ct=4.4+Ut()*2.6,Zt=.032+Ut()*.018,bn=new w(Math.cos(Ht)*.08,1,Math.sin(Ht)*.08).normalize(),an=new ze,rs=new O(new ft(Zt*.8,Zt,Ct,7,1),Fe[(xe+Oe)%Fe.length]);rs.position.y=Ct/2,an.add(rs);for(let xn=.3+Ut()*.2;xn<Ct-.2;xn+=.34+Ut()*.08){const os=new O(new ft(Zt*1.12,Zt*1.12,.022,7,1),Se);os.position.y=xn,an.add(os)}for(let xn=0;xn<3;xn++){const os=ps(.32,e.low?4:6,.42,.2);os.position.set((Ut()-.5)*.25,Ct*(.62+xn*.14),(Ut()-.5)*.25),an.add(os)}an.position.set(Math.cos(Ht)*Yt,0,Math.sin(Ht)*Yt),an.quaternion.setFromUnitVectors(new w(0,1,0),bn),Ce.add(an)}n.add(yt(Ce)),a.push(Oe=>{Ce.rotation.z=Math.sin(Oe*.55+xe*1.7)*.012,Ce.rotation.x=Math.sin(Oe*.43+xe)*.01})});const ct=[[.004,0],[.006,.022],[.011,.04],[.024,.054],[.046,.063],[.066,.067],[.074,.066]].map(([K,se])=>new re(K,se)),ve=new Ss(ct,30),De=new ce("#f0c4f2"),qe=new ce("#7c5cf0"),$e=new ce("#3b3fe0"),Ne=new ce("#e6dcff"),st=ve.attributes.position,Je=[];for(let K=0;K<st.count;K++){const se=st.getX(K),xe=st.getZ(K),Ce=Math.hypot(se,xe)/.074,Re=Ce<.45?De.clone().lerp(qe,Ce/.45):qe.clone().lerp($e,(Ce-.45)/.55);Re.lerp(Ne,Math.pow(Math.abs(Math.cos(Math.atan2(xe,se)*2.5)),10)*Math.min(1,Ce*1.6)*(1-Ce)*.9),Je.push(Re.r,Re.g,Re.b)}ve.setAttribute("color",new Qe(Je,3));const Mt=ue("#ffffff",{vertexColors:!0,side:It,roughness:.55,emissive:new ce("#3b3ad0"),emissiveIntensity:.08}),G=ue("#6f5bc8",{roughness:.6}),Pe=ue("#5f7f3a",{roughness:.8}),ee=new w(2.8,0,-1.97),le=new $i([new w(2.93,-.02,-2.1),...Array.from({length:12},(K,se)=>{const xe=.6+se*1.35;return new w(ee.x+Math.cos(xe)*.095,.12+se*.25,ee.z+Math.sin(xe)*.095)}),...Array.from({length:5},(K,se)=>{const xe=2.62-se*.3;return new w(xe,S(xe)-.3-se%2*.07,-2.07)})]);n.add(yt(new O(new es(le,90,.005,4),fe)));for(let K=1;K<=46;K++){const se=ps(.07,3,.14);se.position.copy(le.getPointAt(K/47)),n.add(yt(se))}const be=new w(0,1,0),Ae=.62;[.16,.22,.28,.34,.4,.46,.51,.56,.6,.65,.69,.73,.77,.81,.85,.89,.93,.97].forEach((K,se)=>{const xe=le.getPointAt(K),Ce=K<Ae?new w(xe.x-ee.x-.7,-.15+Ut()*.35,xe.z-ee.z+.8).normalize():new w((Ut()-.5)*.7,-.8,.45+(Ut()-.5)*.4).normalize(),Re=xe.clone().addScaledVector(Ce,.04);n.add(yt(Hl(xe,Re,.0025,Pe)));const Oe=new O(ve,Mt);if(Oe.position.copy(Re),Oe.quaternion.setFromUnitVectors(be,Ce),Oe.scale.setScalar(1.2+Ut()*.35),Oe.castShadow=!0,n.add(Oe),se%2){const Ht=le.getPointAt(Math.max(.15,K-.025)),Yt=Ce.clone().add(new w(0,.6,0)).normalize(),Ct=new O(new ei(.011,.07,6),G);Ct.position.copy(Ht).addScaledVector(Yt,.04),Ct.quaternion.setFromUnitVectors(be,Yt),Ct.rotation.y+=.6,n.add(yt(Ct))}});const tt=new ze,Rt=ue("#6b3a2a",{roughness:.8});tt.add(new O(new nt(.5,.01,.33),Rt));const kt=ue("#f6f0e2"),ut=new O(new nt(.235,.012,.31),kt);ut.position.set(-.118,.011,0),ut.rotation.z=.05;const Gt=new O(new nt(.235,.012,.31),kt);Gt.position.set(.118,.011,0),Gt.rotation.z=-.05,tt.add(ut,Gt);const zt=new O(new Ft(1,1),new Ot);zt.material.map=o(t.sketch,.21,zt),zt.scale.set(.17,.21,1),zt.rotation.set(-Math.PI/2,0,.05),zt.position.set(-.118,.019,0),tt.add(zt);const Ui=new O(new Ft(.008,.16),ue("#a8443a",{side:It}));Ui.rotation.set(-Math.PI/2+.3,0,.1),Ui.position.set(.01,.012,.2),tt.add(Ui),tt.position.set(na.x,.008,na.z),tt.rotation.y=.1,n.add(yt(tt,!0));const Cn=new O(new nt(.56,.1,.4),c);Cn.position.set(na.x,.04,na.z),Cn.rotation.y=.1,n.add(Cn),l.push({kind:"sketchbook",label:"Open the sketchbook",hit:Cn,highlight:[kt,Rt]});const Pn=[{x:-.78,z:-1.05,turn:.45},{x:.42,z:-1.18,turn:-.32},{x:-.55,z:-1.52,turn:.18},{x:.12,z:-1.62,turn:-.22}];t.papers.slice(0,Pn.length).forEach(({collection:K,name:se,src:xe},Ce)=>{const{x:Re,z:Oe,turn:Ht}=Pn[Ce],Yt=new ze,Ct=ue("#f4eee0",{side:It}),Zt=new O(new Ft(1,1),Ct),bn=new O(new Ft(1,1),new Ot);bn.material.map=o(xe,.2,bn,Zt),Zt.scale.set(.2,.26,1),bn.scale.set(.17,.23,1),bn.position.z=.0015,Yt.add(Zt,bn),Yt.rotation.set(-Math.PI/2,0,Ht),Yt.position.set(Re,.006+Ce*6e-4,Oe),Zt.receiveShadow=!0,n.add(Yt);const an=new O(new nt(.26,.05,.26),c);an.position.set(Re,.025,Oe),an.rotation.y=Ht,n.add(an),l.push({kind:"paper",label:`Open the ${se} collection`,collection:K,hit:an,highlight:[Ct]})});const si=new ze,In=new O(new ft(.055,.05,.13,16),ue("#b5653a"));In.position.y=.065,si.add(In),["#d9a83a","#3f5a6b","#a8443a","#2b2b2b","#d9a83a"].forEach((K,se)=>{const xe=new O(new ft(.006,.006,.24,6),ue(K));xe.position.set(Math.cos(se*1.3)*.022,.165,Math.sin(se*1.3)*.022),xe.rotation.set(Math.sin(se*2.1)*.18,0,Math.cos(se*1.7)*.2),si.add(xe)}),f(si,.66,-1.62),h(.66,-1.62,.17);const Fi=new ze,ri=new O(new ft(.045,.04,.1,16),ue("#e9e1cf",{roughness:.4}));ri.position.y=.05;const Oi=new O(new di(.028,.008,6,12),ue("#e9e1cf",{roughness:.4}));Oi.position.set(.05,.05,0),Fi.add(ri,Oi),f(Fi,-.88,-.66,.6),h(-.88,-.66,.14);const Gn=new O(new nt(.12,.04,.08),ue("#a8443a",{metalness:.3,roughness:.5}));Gn.position.y=.02,f(new ze().add(Gn),-1,-1.38,.4);const oi=new ze;oi.add(new O(new Ss([new re(0,0),new re(.035,0),new re(.045,.04),new re(.025,.1),new re(.03,.12)],18),ue("#7d9db0",{roughness:.3}))),[["#f4f1e6",.23,.2],["#e7a1b6",.27,-.25],["#f2cf3a",.2,.5],["#b9a2d8",.25,-.6],["#f4f1e6",.29,.05]].forEach(([K,se,xe],Ce)=>{const Re=new w(Math.sin(xe)*.07,se,Math.cos(Ce*2.1)*.04);oi.add(Hl(new w(0,.08,0),Re,.0025,ue("#56783a")));const Oe=new O(new Ke(.018,10,6),ue(K));Oe.scale.y=.55,Oe.position.copy(Re),oi.add(Oe)}),f(oi,1.02,-1.42),h(1.02,-1.42,.13);const ai=new ze,ns=ue("#55704f",{roughness:.95}),xi=new O(new nt(.3,.07,.24),ns);xi.position.y=.035;const is=new O(new nt(.285,.055,.23),ue("#efe6d2"));is.position.set(.004,.035,0);const R=new O(new Ft(.1,.05),ue("#efe2c4"));R.rotation.x=-Math.PI/2,R.position.y=.0715,ai.add(xi,is,R);const W=new O(new nt(.2,.26,.025),x);W.position.set(0,.2,-.13),W.rotation.x=-.2;const $=new O(new Ft(1,1),new Ot({color:"#d8d0c0"}));if($.scale.set(.15,.21,1),t.album[0]&&($.material.color.set("#ffffff"),$.material.map=o(t.album[0],.2,$)),$.rotation.x=-.2,$.position.set(0,.2,-.115),ai.add(W,$),f(ai,-1.12,-.32,.35),h(-1.12,-.32,.4),t.album.length){const K=new O(new nt(.42,.36,.42),c);K.position.set(-1.12,.17,-.36),n.add(K),l.push({kind:"album",label:"Leaf through the daybook",hit:K,highlight:[ns]})}const Z=new ze;Z.add(new O(new nt(.34,.012,.25),ue("#5b3a28",{roughness:.8})));const Y=new O(new nt(.32,.006,.235),ue("#f6f0e2"));Y.position.y=.009,Z.add(Y),Z.position.copy(pw),Z.rotation.set(0,.4,0),n.add(yt(Z,!0));const _e=new ze,Te=ue("#b08a4a",{metalness:.75,roughness:.35}),Ue=new O(new ft(.055,.045,.012,22),Te);Ue.position.y=.006;const I=new O(new di(.018,.004,6,14),Te);I.position.set(.062,.012,0),I.rotation.y=Math.PI/2;const q=ue("#efe6d2",{roughness:.6}),te=new O(new ft(.019,.02,.11,18),q);te.position.y=.067;const ae=new O(new ft(.0012,.0012,.012,4),ue("#222222"));ae.position.y=.128;const we=new O(new Ke(.0085,14,10),mw());we.scale.set(1,2.6,1),we.position.y=.146,we.userData.keep=!0,_e.add(Ue,I,te,ae,we);const ye=new w(.62,0,-.66);f(_e,ye.x,ye.z),we.castShadow=!1,h(ye.x,ye.z,.15);const Ye=new rr("#ffab5e",0,1.9,2);Ye.position.set(ye.x,.22,ye.z);const et=new Rc(new xa({map:ff("rgba(255, 214, 150, 0.9)","rgba(255, 160, 70, 0.3)"),blending:Ms,transparent:!0,depthWrite:!1,opacity:0}));et.position.set(ye.x,.15,ye.z),et.scale.setScalar(.13),n.add(Ye,et);const ke=new O(new nt(.2,.3,.2),c);ke.position.set(ye.x,.12,ye.z),n.add(ke),l.push({kind:"candle",label:"Light the candle",hit:ke,highlight:[q,Te]});const Me=new $i([new w(-3.3,S(-3.3)-.3,-2.02),new w(-.3,S(-.3)-.62,-2.04),new w(2.72,S(2.72)-.3,-2.02)]);n.add(new co(new Et().setFromPoints(Me.getPoints(40)),new La({color:"#2e2620"})));const gt=new Ot({color:"#ffd9a0"}),mt=new Ke(.022,8,6);for(let K=1;K<18;K++){const se=new O(mt,gt);se.position.copy(Me.getPoint(K/18)).add(new w(0,-.03,0)),n.add(se)}const wn=new ce("#ffd9a0"),nn=ue("#2f2a24",{metalness:.5,roughness:.5}),on=ue("#f3e2c0",{transparent:!0,opacity:.32,roughness:.1,depthWrite:!1}),wr=ue("#efe6d2",{roughness:.6}),Nt=new Ot({color:"#5a4630"}),Wn=[],Ps=[],hn=(K,se,xe,Ce)=>{const Re=new ze,Oe=new O(new nt(.16,.025,.16),nn);Oe.position.y=.0125;const Ht=new O(new nt(.17,.02,.17),nn);Ht.position.y=.245;const Yt=new O(new ei(.12,.08,4),nn);Yt.position.y=.295,Yt.rotation.y=Math.PI/4;const Ct=new O(new di(.035,.005,6,16),nn);Ct.position.y=.365;const Zt=new O(new nt(.13,.21,.13),on);Zt.position.y=.13;const bn=new O(new ft(.02,.02,.06,12),wr);bn.position.y=.055;const an=new O(new Ke(.011,10,8),Nt);an.scale.y=2.2,an.position.y=.105,Re.add(Oe,Ht,Yt,Ct,Zt,bn,an);for(const[xn,os]of[[-1,-1],[-1,1],[1,-1],[1,1]]){const Pu=new O(new ft(.006,.006,.21,6),nn);Pu.position.set(xn*.068,.13,os*.068),Re.add(Pu)}Re.position.set(K,se,xe),Re.rotation.y=Ut()*.6,n.add(yt(Re)),Zt.castShadow=an.castShadow=!1;const rs=new Rc(new xa({map:ff("rgba(255, 214, 150, 0.9)","rgba(255, 160, 70, 0.3)"),blending:Ms,transparent:!0,depthWrite:!1,opacity:0}));if(rs.position.set(K,se+.13,xe),rs.scale.setScalar(.6),n.add(rs),Wn.push(rs),Ce){const xn=new rr("#ffad5c",0,6,2);xn.position.set(K,se+.12,xe),xn.userData.level=Ce,n.add(xn),Ps.push(xn)}};[[-2.3,-1.78],[-.9,-1.78],[.5,-1.78],[1.9,-1.78],[2.55,-.9]].forEach(([K,se],xe)=>{const Ce=S(K)-.16,Re=.6,Oe=new O(new ft(.004,.004,Re,5),nn);Oe.position.set(K,Ce-Re/2,se),n.add(Oe),hn(K,Ce-Re-.37,se,e.low?xe===2?3.5:0:xe===1||xe===3?3.8:0)});const ka=Xt(3.6)+.8,ss=Nn.y;[[Nn.x-.6,Nn.z+.1,2.6],[Nn.x+.6,Nn.z+.1,e.low?0:2.6],[3.02,ka-.2,0]].forEach(([K,se,xe])=>{const Ce=new O(new ft(.022,.032,1.45,10),nn);Ce.position.set(K,ss+.725,se);const Re=new O(new ft(.055,.07,.06,12),nn);Re.position.set(K,ss+.03,se);const Oe=new O(new nt(.18,.015,.18),nn);Oe.position.set(K,ss+1.45,se),n.add(yt(Ce),yt(Re),yt(Oe)),hn(K,ss+1.4575,se,xe)});const lp=new ce("#5a4630"),cp=new ce("#ffcf85").multiplyScalar(1.8),Sr=new w(-.7,S(-.7)-.85,.9),Tu=ue("#f2e4c8",{roughness:.95,side:It}),za=new O(new Ke(.17,20,14),Tu);za.scale.y=.9,za.position.copy(Sr);const Eu=new O(new ft(.004,.004,.72,5),nn);Eu.position.set(Sr.x,Sr.y+.5,Sr.z),n.add(za,Eu);const Ha=new rr("#ffb871",0,9,1.4);Ha.position.copy(Sr).add(new w(0,-.2,0)),n.add(Ha);let Au=0;const li=zM(Ut);[li.artist,li.upper,li.head,li.hairFall,li.drawingArm].forEach(K=>Zo(K)),li.artist.position.copy(Nn).add(new w(0,0,.45)),li.artist.rotation.y=.05,n.add(li.artist),h(Nn.x,Nn.z+.25,.8,.6,Nn.y);let Ru=K=>li.update(K);a.push(K=>Ru(K)),hw().then(K=>{K&&(K.group.position.copy(Nn),n.remove(li.artist),n.add(K.group),Ru=K.update)}).catch(K=>console.warn("The character model could not be placed:",K));const Sn={candle:!1,candleLevel:0},Cu=we.material.uniforms,up=new ce("#ff9a40");return a.push((K,se)=>{Sn.candleLevel+=((Sn.candle?1:0)-Sn.candleLevel)*Math.min(1,se*(Sn.candle?3:8));const xe=1+Math.sin(K*2.1)*.05+Math.sin(K*5.3+1)*.03+Math.sin(K*11.7)*.015;Ye.intensity=Sn.candleLevel*.55*xe,Cu.uLevel.value=Sn.candleLevel,Cu.uTime.value=K,we.visible=Sn.candleLevel>.01,we.scale.y=2.6*(.9+.1*xe),et.material.opacity=Sn.candleLevel*.5*xe,q.emissive.copy(up).multiplyScalar(Sn.candleLevel*.12);const Ce=Math.min(1,Math.max(0,(Au-.15)/.45));Ps.forEach((Re,Oe)=>{Re.intensity=Ce*Re.userData.level*(1+Math.sin(K*2.3+Oe*1.7)*.06+Math.sin(K*6.1+Oe)*.03)}),Wn.forEach((Re,Oe)=>{Re.material.opacity=Ce*.55*(1+Math.sin(K*2.3+Oe*1.7)*.06)}),Nt.color.copy(lp).lerp(cp,Ce),on.emissive.setRGB(1,.6,.25).multiplyScalar(Ce*.45),Ha.intensity=Ce*5,Tu.emissive.setRGB(1,.7,.4).multiplyScalar(Ce*.9),Mt.emissiveIntensity=.08+Ce*.45}),wa(n),{root:n,interactives:l,update(K,se){a.forEach(xe=>xe(K,se))},toggle(K){Sn[K]=!Sn[K];const se=l.find(xe=>xe.kind===K);return se&&(se.label=Sn.candle?"Blow out the candle":"Light the candle"),Sn[K]},setDarkness(K){Au=K,gt.color.copy(wn).multiplyScalar(.35+K*1.9)}}}const xw=300;function _w(s,e){const t=Math.min(window.innerWidth,window.innerHeight)<700,n=t?{grass:16e3,flowers:360,shadows:1024,low:!0,reflection:.45,trees:.55}:{grass:36e3,flowers:800,shadows:2048,low:!1,reflection:.7,trees:1},i=new F_({canvas:s,antialias:!t,powerPreference:"high-performance"});let r=Math.min(window.devicePixelRatio||1,1.25);i.setPixelRatio(r),i.outputColorSpace=_t,i.toneMapping=Wc,i.shadowMap.enabled=!0,i.shadowMap.type=kf,i.shadowMap.autoUpdate=!1;const o=new O_;o.fog=new su("#cfe3ee",60,750);const a=new sn(50,1,.05,2e3),l=new Py("#cfe6ff","#6f8f4f",1),c=new du("#ffffff",2.5);c.castShadow=!0,c.shadow.mapSize.set(n.shadows,n.shadows),Object.assign(c.shadow.camera,{left:-9,right:12,top:9,bottom:-7,near:1,far:90}),c.shadow.bias=-6e-4,c.shadow.normalBias=.02,c.target.position.set(1,0,-1),o.add(l,c,c.target);const u=LM(o,n);u.setPixelRatio(r);const h=vw(o,n,e.content);u.hideFromReflection(h.root);const f=UM(o,Math.random,Nn),d=BM(o,Math.random,f,new re(3.6,Xt(3.6)+.8)),g=[...h.interactives,...u.ducks.hits.map(E=>({kind:"duck",label:"A duck",hit:E,highlight:[]})),{kind:"cat",label:"Say hello to the cat",hit:f.hit,highlight:f.highlight},{kind:"dog",label:"Say hello to the dog",hit:d.hit,highlight:d.highlight}],x=new nM(i);x.addPass(new rM(o,a));const m=new gr(new re(256,256),.32,.6,.86);x.addPass(m),x.addPass(new sM);const p=new Uc(vM);x.addPass(p);const _=new Uc(aM);x.addPass(_);const v=cM(a,s,{reducedMotion:e.reducedMotion,groundAt:Fn,onMoved:e.onMoved});function y(){const E=s.clientWidth||window.innerWidth,b=s.clientHeight||window.innerHeight;i.setSize(E,b,!1),x.setSize(E,b),m.resolution.set(E/2,b/2),_.material.uniforms.resolution.value.set(1/(E*r),1/(b*r)),p.uniforms.uAspect.value=E/b,a.aspect=E/b,v.frame(a.aspect)}y(),v.goHome(!0),window.addEventListener("resize",y);try{i.compile(o,a)}catch(E){console.warn("Shaders will be prepared as they are needed:",E)}const C=new Xy,S=g.map(E=>E.hit),A=[];o.traverse(E=>{E instanceof O&&E.castShadow&&!S.includes(E)&&A.push(E)});let P=null;const B=new re;function M(E,b){const j=s.getBoundingClientRect();B.set((E-j.left)/j.width*2-1,-((b-j.top)/j.height)*2+1),C.setFromCamera(B,a);const ie=C.intersectObjects(S,!1).find(Fe=>{var Se;return((Se=Fe.object.parent)==null?void 0:Se.visible)!==!1});if(!ie)return null;const fe=C.intersectObjects(A,!1)[0],oe=g.find(Fe=>Fe.hit===ie.object)??null;return fe&&fe.distance<ie.distance-.25&&(oe==null?void 0:oe.kind)!=="duck"?null:oe}function T(E,b=0,j=0){E!==P&&(P==null||P.highlight.forEach(ie=>ie.emissive.set("#000000")),P=E,P==null||P.highlight.forEach(ie=>ie.emissive.set("#3a2a12")),s.style.cursor=P?"pointer":""),e.onHover(P?{label:P.label,x:b,y:j}:null)}let N=null,L=!1;const U=E=>{N&&Math.hypot(E.clientX-N.x,E.clientY-N.y)>6&&(L=!0),E.pointerType==="mouse"&&!L?T(M(E.clientX,E.clientY),E.clientX,E.clientY):L&&T(null)},J=E=>{N={x:E.clientX,y:E.clientY,time:performance.now()},L=!1},H=E=>{const b=N;if(N=null,!b||L||performance.now()-b.time>600){L=!1;return}const j=M(E.clientX,E.clientY);j?ne(j):F(E.clientX,E.clientY)},X=()=>T(null),k=new Ai(new w(0,1,0),0),V=new w;function F(E,b){const j=s.getBoundingClientRect();if(B.set((E-j.left)/j.width*2-1,-((b-j.top)/j.height)*2+1),C.setFromCamera(B,a),!C.ray.intersectPlane(k,V)||V.x<-3.6||V.x>2.8||V.z<-2.05||V.z>3.85)return;const ie=C.intersectObjects(A,!1)[0];ie&&ie.distance<a.position.distanceTo(V)-.3||v.walkTo(V.x,V.z)}s.addEventListener("pointermove",U),s.addEventListener("pointerdown",J),s.addEventListener("pointerup",H),s.addEventListener("pointerleave",X);function ne(E){if(E.kind==="candle"){e.onLight(E.kind,h.toggle(E.kind)),P===E&&e.onHover(null);return}if(E.kind==="duck"){u.ducks.disturb(E.hit);return}if(E.kind==="cat"){f.greet();return}if(E.kind==="dog"){d.greet();return}T(null),e.onSelect({kind:E.kind,collection:E.collection})}let de=e.mood,pe=9;const z=xu(),Q=Al(e.mood),ge=new w;function me(){const E=Q;wt.uSunDir.value.copy(E.sunDirection),wt.uLightDir.value.copy(E.light),wt.uSunUp.value=E.sunUp*(1-E.gloom*.7),wt.uSunColor.value.copy(E.sun),wt.uSunIntensity.value=E.sunIntensity,wt.uHemiSky.value.copy(E.hemiSky),wt.uHemiGround.value.copy(E.hemiGround),wt.uHemiIntensity.value=E.hemiIntensity,wt.uFogColor.value.copy(E.fog),wt.uFogNear.value=E.fogNear,wt.uFogFar.value=E.fogFar,wt.uSkyTop.value.copy(E.skyTop),wt.uHorizon.value.copy(E.skyHorizon),wt.uWater.value.copy(E.water),wt.uStars.value=E.stars,wt.uRain.value=E.rain,wt.uWet.value=E.wet,wt.uGloom.value=E.gloom;const b=o.fog;b.color.copy(E.fog),b.near=E.fogNear,b.far=E.fogFar,l.color.copy(E.hemiSky),l.groundColor.copy(E.hemiGround),l.intensity=E.hemiIntensity,c.color.copy(E.sun),c.intensity=E.sunIntensity*(.55+E.isSun*.45),c.position.copy(c.target.position).addScaledVector(E.light,40),u.applyAtmosphere(E),h.setDarkness(Math.min(1,E.stars*1.2)),i.toneMappingExposure=E.exposure,p.uniforms.uShadowTint.value.copy(E.shadowTint),p.uniforms.uHighlightTint.value.copy(E.highlightTint),p.uniforms.uSaturation.value=E.saturation,p.uniforms.uRayColour.value.copy(E.sun),ge.copy(a.position).addScaledVector(E.sunDirection,500).project(a);const j=ge.z<1&&Math.abs(ge.x)<1.4&&Math.abs(ge.y)<1.4?1:0;p.uniforms.uSun.value.set(ge.x*.5+.5,ge.y*.5+.5),p.uniforms.uRays.value=E.rays*E.sunUp*j*(n.low?0:1)}let Be=0,He=0,Ve=0,We=2;function je(E){if(Ve>6||(Be+=E,He++,He<90))return;const b=Be/He;if(Be=0,He=0,b<1/48){Ve=7;return}if(Ve===6){b>1/24&&r>.7?(r=Math.max(.7,r*.88),D()):Ve=7;return}if(Ve++,Ve===1&&(i.shadowMap.type=Gc,We=3),Ve===2&&(n.low=!0,m.enabled=!1),Ve===3&&(r=Math.max(.8,r*.8),D()),Ve===4){const j=u.lake.getRenderTarget();j.setSize(Math.max(256,Math.round(j.width*.7)),Math.max(160,Math.round(j.height*.7)))}Ve===5&&u.thinGrass(.6)}function D(){i.setPixelRatio(r),x.setPixelRatio(r),u.setPixelRatio(r),y()}const Lt=new zd;let Ze=0,at=0,Ge=!1,vt=0;function Xe(){if(at=requestAnimationFrame(Xe),document.hidden||Ge){Lt.getDelta();return}const E=Lt.getDelta();je(E);const b=Math.min(E,1/20);e.reducedMotion||(Ze+=b),de==="cycle"&&(pe=(pe+b*24/xw)%24,qy(pe,z)),Gd(Q,z,e.reducedMotion?1:Math.min(1,b*1.1)),++vt%We===0&&(i.shadowMap.needsUpdate=!0),wt.uTime.value=Ze,v.update(b),me(),u.update(Ze,e.reducedMotion?0:b,a.position),f.update(Ze,e.reducedMotion?0:b,a.position),d.update(Ze,e.reducedMotion?0:b),h.update(Ze,b),x.render()}return Al(e.mood,z),Ky(Q,z),me(),i.shadowMap.needsUpdate=!0,Xe(),{setMood(E){de=E,E!=="cycle"&&Al(E,z)},getHour:()=>pe,toggle(E){e.onLight(E,h.toggle(E))},open(E,b){e.onSelect({kind:E,collection:b})},goHome(){v.goHome()},nudge(E,b,j){v.nudge(E,b,j)},hold(E,b){v.hold(E,b)},setPaused(E){Ge=E,v.controls.enabled=!E},dispose(){cancelAnimationFrame(at),window.removeEventListener("resize",y),s.removeEventListener("pointermove",U),s.removeEventListener("pointerdown",J),s.removeEventListener("pointerup",H),s.removeEventListener("pointerleave",X),v.dispose(),x.dispose(),i.dispose()}}}const bu=mp.map(s=>({slug:s.slug,name:gp[s.slug]??s.color,images:s.artworks})),If=Vl.length?[{slug:"daybook",name:"Daybook",images:Vl}]:[],ia=s=>bu.find(e=>e.slug===s);var Lf,Df,Nf,Uf,Ff,Of;const Hr={sketch:((Df=(Lf=ia(br.sketchbookPage))==null?void 0:Lf.images[0])==null?void 0:Df.src)??((Uf=(Nf=bu[0])==null?void 0:Nf.images[0])==null?void 0:Uf.src)??"",papers:br.papers.flatMap(s=>{const e=ia(s);return e!=null&&e.images[0]?[{collection:s,name:e.name,src:e.images[0].src}]:[]}),board:{collection:br.board,name:((Ff=ia(br.board))==null?void 0:Ff.name)??"",images:(((Of=ia(br.board))==null?void 0:Of.images)??[]).map(s=>s.src)},album:Vl.map(s=>s.src)};function ww(){const s=it.useRef(null),e=it.useRef(null),t=it.useRef(window.matchMedia("(prefers-reduced-motion: reduce)").matches).current,n=it.useRef(window.matchMedia("(pointer: coarse)").matches).current,[i,r]=it.useState("golden-day"),[o,a]=it.useState(9),[l,c]=it.useState({candle:!1}),[u,h]=it.useState(null),[f,d]=it.useState(null),[g,x]=it.useState(!1),[m,p]=it.useState(!1),[_,v]=it.useState(!1);it.useEffect(()=>{const S=s.current;if(!S)return;let A;try{A=_w(S,{content:Hr,mood:"golden-day",reducedMotion:t,onHover:d,onSelect:P=>{p(!0),h(P)},onLight:(P,B)=>{p(!0),c(M=>({...M,[P]:B}))},onMoved:P=>{x(P),P&&p(!0)}})}catch(P){console.error("The world could not start:",P),v(!0);return}return e.current=A,()=>{A.dispose(),e.current=null}},[t]),it.useEffect(()=>{if(i!=="cycle")return;const S=window.setInterval(()=>{var A;return a(((A=e.current)==null?void 0:A.getHour())??9)},1e3);return()=>window.clearInterval(S)},[i]),it.useEffect(()=>{var S;(S=e.current)==null||S.setMood(i)},[i]),it.useEffect(()=>{var S;(S=e.current)==null||S.setPaused(!!u)},[u]),it.useEffect(()=>{const S=window.setTimeout(()=>p(!0),15e3);return()=>window.clearTimeout(S)},[]);function y(S,A){var P;(P=e.current)==null||P.hold(S,A),(S||A)&&p(!0)}it.useEffect(()=>{const S={w:[1,0],arrowup:[1,0],s:[-1,0],arrowdown:[-1,0],a:[0,1],arrowleft:[0,1],d:[0,-1],arrowright:[0,-1]},A=new Set,P=()=>{let N=0,L=0;A.forEach(U=>{N+=S[U][0],L+=S[U][1]}),y(Math.sign(N),Math.sign(L))};function B(N){if(u||N.altKey||N.ctrlKey||N.metaKey||N.target.closest('input, textarea, [role="dialog"], .mood-panel'))return;const U=e.current;if(!U)return;const J=N.key.toLowerCase();if(S[J]){N.preventDefault(),A.has(J)||(A.add(J),P());return}const H={PageUp:[0,-.06,1],PageDown:[0,.06,1],"+":[0,0,.85],"=":[0,0,.85],"-":[0,0,1.18]};if(N.key==="Home"){U.goHome(),N.preventDefault();return}const X=H[N.key];X&&(N.preventDefault(),p(!0),U.nudge(...X))}function M(N){A.delete(N.key.toLowerCase())&&P()}function T(){A.clear(),P()}return window.addEventListener("keydown",B),window.addEventListener("keyup",M),window.addEventListener("blur",T),()=>{window.removeEventListener("keydown",B),window.removeEventListener("keyup",M),window.removeEventListener("blur",T),T()}},[u]);const C=it.useMemo(()=>u?u.kind==="album"?{chapters:If,title:"Daybook",intro:"Photographs from my days, kept in an album by my side."}:{chapters:bu,title:"Sketchbook",intro:"My work, pinned page by page. Turn the pages, or choose a collection.",startAt:u.collection}:null,[u]);return he.jsxs("div",{className:"world",children:[he.jsx("canvas",{ref:s,className:"world-canvas","aria-label":"A painted 3D world: an artist sketching at her desk beside a lake. Drag to walk and turn about the deck, click a spot on it to go there, or use the buttons that appear when you press Tab."}),he.jsx("div",{className:"world-vignette","aria-hidden":"true"}),he.jsxs("header",{className:`world-intro${m?" is-quiet":""}`,children:[he.jsx("h1",{children:"A world of my own making."}),he.jsx("p",{children:"Somewhere between little ideas, unfinished sketches, and daydreams, an artist lives in her own world."})]}),_&&he.jsx("p",{className:"world-message",role:"alert",children:"This world needs WebGL to appear. Please try another browser."}),!m&&!_&&he.jsx("p",{className:"world-hint","aria-hidden":"true",children:n?"Drag to walk and turn · tap the deck to go there · tap the things around her":"Drag to walk and turn · click the deck to go there · some things can be opened"}),f&&!u&&he.jsx("span",{className:"world-label",style:{left:f.x,top:f.y},"aria-hidden":"true",children:f.label}),he.jsxs("div",{className:"world-objects",children:[he.jsx("button",{type:"button",onClick:()=>{var S;return(S=e.current)==null?void 0:S.open("sketchbook")},children:"Open the sketchbook"}),Hr.papers.map(S=>he.jsxs("button",{type:"button",onClick:()=>{var A;return(A=e.current)==null?void 0:A.open("paper",S.collection)},children:["Open the ",S.name," collection"]},S.collection)),Hr.board.images.length>0&&he.jsxs("button",{type:"button",onClick:()=>{var S;return(S=e.current)==null?void 0:S.open("board",Hr.board.collection)},children:["See the ",Hr.board.name," pieces on the inspiration board"]}),If.length>0&&he.jsx("button",{type:"button",onClick:()=>{var S;return(S=e.current)==null?void 0:S.open("album")},children:"Leaf through the daybook"}),he.jsx("button",{type:"button",onClick:()=>{var S;return(S=e.current)==null?void 0:S.toggle("candle")},children:l.candle?"Blow out the candle":"Light the candle"})]}),he.jsx("p",{className:"world-status","aria-live":"polite",children:l.candle?"The candle is lit.":""}),he.jsxs(dp,{className:"world-menu",to:"/",children:[he.jsx(Bf,{size:14,"aria-hidden":"true"})," Menu"]}),he.jsxs("div",{className:"world-corner",children:[g&&he.jsx("button",{type:"button",className:"world-home",onClick:()=>{var S;return(S=e.current)==null?void 0:S.goHome()},"aria-label":"Return to the starting view",children:he.jsx(_p,{size:15,"aria-hidden":"true"})}),he.jsx(Zy,{mood:i,hour:o,onChange:r})]}),C&&he.jsx(Ap,{...C,onClose:()=>h(null)},`${u==null?void 0:u.kind}-${(u==null?void 0:u.collection)??""}`),he.jsx("p",{className:"world-credits",children:"Figure made with MakeHuman (CC0) · jeans by Elvaerwyn, CC BY 4.0"}),he.jsx(pp,{})]})}export{ww as default};
