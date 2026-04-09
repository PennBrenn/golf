var yu=s=>{throw TypeError(s)};var ss=(s,e,t)=>e.has(s)?yu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function Su(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qo="162",Si={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eu=0,_a=1,Mu=2,Tl=1,Cl=2,Cn=3,qn=0,Wt=1,An=2,Hn=0,Xi=1,va=2,xa=3,ya=4,bu=5,ai=100,Tu=101,Cu=102,Sa=103,Ea=104,Au=200,wu=201,Ru=202,Pu=203,Mo=204,bo=205,Lu=206,Iu=207,Du=208,Nu=209,Uu=210,Ou=211,Fu=212,Bu=213,zu=214,ku=0,Gu=1,Hu=2,mr=3,Vu=4,Wu=5,Xu=6,qu=7,Al=0,ju=1,Yu=2,Vn=0,$u=1,Ku=2,Zu=3,Ju=4,Qu=5,ed=6,td=7,wl=300,$i=301,Ki=302,To=303,Co=304,br=306,Ao=1e3,rn=1001,wo=1002,Ot=1003,Ma=1004,rs=1005,Ht=1006,Nr=1007,ui=1008,Wn=1009,nd=1010,id=1011,jo=1012,Rl=1013,kn=1014,wn=1015,xs=1016,Pl=1017,Ll=1018,fi=1020,sd=1021,on=1023,rd=1024,od=1025,pi=1026,Zi=1027,ad=1028,Il=1029,cd=1030,Dl=1031,Nl=1033,Ur=33776,Or=33777,Fr=33778,Br=33779,ba=35840,Ta=35841,Ca=35842,Aa=35843,Ul=36196,wa=37492,Ra=37496,Pa=37808,La=37809,Ia=37810,Da=37811,Na=37812,Ua=37813,Oa=37814,Fa=37815,Ba=37816,za=37817,ka=37818,Ga=37819,Ha=37820,Va=37821,zr=36492,Wa=36494,Xa=36495,ld=36283,qa=36284,ja=36285,Ya=36286,hd=3200,ud=3201,Ol=0,dd=1,zn="",dn="srgb",$n="srgb-linear",Yo="display-p3",Tr="display-p3-linear",gr="linear",ot="srgb",_r="rec709",vr="p3",Mi=7680,$a=519,fd=512,pd=513,md=514,Fl=515,gd=516,_d=517,vd=518,xd=519,Ka=35044,Za="300 es",Ro=1035,Rn=2e3,xr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,Po=180/Math.PI;function bs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function yd(s,e){return(s%e+e)%e}function kr(s,e,t){return(1-t)*s+t*e}function Ja(s){return(s&s-1)===0&&s!==0}function Lo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function os(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Sd={DEG2RAD:ar};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],v=i[1],x=i[4],M=i[7],w=i[2],C=i[5],b=i[8];return r[0]=o*_+a*v+c*w,r[3]=o*f+a*x+c*C,r[6]=o*p+a*M+c*b,r[1]=l*_+h*v+d*w,r[4]=l*f+h*x+d*C,r[7]=l*p+h*M+d*b,r[2]=u*_+m*v+g*w,r[5]=u*f+m*x+g*C,r[8]=u*p+m*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,m=l*r-o*c,g=t*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new We;function Bl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ed(){const s=yr("canvas");return s.style.display="block",s}const Qa={};function Md(s){s in Qa||(Qa[s]=!0,console.warn(s))}const ec=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[$n]:{transfer:gr,primaries:_r,toReference:s=>s,fromReference:s=>s},[dn]:{transfer:ot,primaries:_r,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Tr]:{transfer:gr,primaries:vr,toReference:s=>s.applyMatrix3(tc),fromReference:s=>s.applyMatrix3(ec)},[Yo]:{transfer:ot,primaries:vr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(tc),fromReference:s=>s.applyMatrix3(ec).convertLinearToSRGB()}},bd=new Set([$n,Tr]),et={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ds[e].toReference,i=Ds[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ds[s].primaries},getTransfer:function(s){return s===zn?gr:Ds[s].transfer}};function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class zl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=yr("canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Td=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vr(i[o].image)):r.push(Vr(i[o]))}else r=Vr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class Xt extends _i{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=rn,i=rn,r=Ht,o=ui,a=on,c=Wn,l=Xt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=bs(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=wl;Xt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(m+1)/2,w=(p+1)/2,C=(h+u)/4,b=(d+_)/4,N=(g+f)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=b/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=C/i,r=N/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=b/r,i=N/r),this.set(n,i,r,t),this}let v=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ad extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gl extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wd extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let jn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==m||h!==g){let f=1-a;const p=c*u+l*m+h*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,p*v);f=Math.sin(f*C)/w,a=Math.sin(a*C)/w}const M=a*v;if(c=c*f+u*M,l=l*f+m*M,h=h*f+g*M,d=d*f+_*M,f===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*m-l*u,e[t+1]=c*g+h*u+l*d-a*m,e[t+2]=l*g+h*m+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new F,nc=new jn;class Ts{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Us.subVectors(this.max,as),Ti.subVectors(e.a,as),Ci.subVectors(e.b,as),Ai.subVectors(e.c,as),Ln.subVectors(Ci,Ti),In.subVectors(Ai,Ci),Qn.subVectors(Ti,Ai);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Qn.z,Qn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Qn.z,0,-Qn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Qn.y,Qn.x,0];return!Xr(t,Ti,Ci,Ai,Us)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Ti,Ci,Ai,Us))?!1:(Os.crossVectors(Ln,In),t=[Os.x,Os.y,Os.z],Xr(t,Ti,Ci,Ai,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new F,new F,new F,new F,new F,new F,new F,new F],en=new F,Ns=new Ts,Ti=new F,Ci=new F,Ai=new F,Ln=new F,In=new F,Qn=new F,as=new F,Us=new F,Os=new F,ei=new F;function Xr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rd=new Ts,cs=new F,qr=new F;let $o=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(qr)),this.expandByPoint(cs.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const vn=new F,jr=new F,Fs=new F,Dn=new F,Yr=new F,Bs=new F,$r=new F;let Hl=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jr.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(jr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fs),a=Dn.dot(this.direction),c=-Dn.dot(Fs),l=Dn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(jr).addScaledVector(Fs,u),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,r){Yr.subVectors(t,e),Bs.subVectors(n,e),$r.crossVectors(Yr,Bs);let o=this.direction.dot($r),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const c=a*this.direction.dot(Bs.crossVectors(Dn,Bs));if(c<0)return null;const l=a*this.direction.dot(Yr.cross(Dn));if(l<0||c+l>o)return null;const h=-a*Dn.dot($r);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ht{constructor(e,t,n,i,r,o,a,c,l,h,d,u,m,g,_,f){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,m,g,_,f)}set(e,t,n,i,r,o,a,c,l,h,d,u,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,m=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,m=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,m=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,m=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Ld)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Nn.crossVectors(n,jt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Nn.crossVectors(n,jt)),Nn.normalize(),zs.crossVectors(jt,Nn),i[0]=Nn.x,i[4]=zs.x,i[8]=jt.x,i[1]=Nn.y,i[5]=zs.y,i[9]=jt.y,i[2]=Nn.z,i[6]=zs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],v=n[3],x=n[7],M=n[11],w=n[15],C=i[0],b=i[4],N=i[8],j=i[12],y=i[1],A=i[5],q=i[9],U=i[13],R=i[2],O=i[6],I=i[10],J=i[14],k=i[3],X=i[7],Q=i[11],ie=i[15];return r[0]=o*C+a*y+c*R+l*k,r[4]=o*b+a*A+c*O+l*X,r[8]=o*N+a*q+c*I+l*Q,r[12]=o*j+a*U+c*J+l*ie,r[1]=h*C+d*y+u*R+m*k,r[5]=h*b+d*A+u*O+m*X,r[9]=h*N+d*q+u*I+m*Q,r[13]=h*j+d*U+u*J+m*ie,r[2]=g*C+_*y+f*R+p*k,r[6]=g*b+_*A+f*O+p*X,r[10]=g*N+_*q+f*I+p*Q,r[14]=g*j+_*U+f*J+p*ie,r[3]=v*C+x*y+M*R+w*k,r[7]=v*b+x*A+M*O+w*X,r[11]=v*N+x*q+M*I+w*Q,r[15]=v*j+x*U+M*J+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*m-n*c*m)+_*(+t*c*m-t*l*u+r*o*u-i*o*m+i*l*h-r*c*h)+f*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+p*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],v=d*f*l-_*u*l+_*c*m-a*f*m-d*c*p+a*u*p,x=g*u*l-h*f*l-g*c*m+o*f*m+h*c*p-o*u*p,M=h*_*l-g*d*l+g*a*m-o*_*m-h*a*p+o*d*p,w=g*d*c-h*_*c-g*a*u+o*_*u+h*a*f-o*d*f,C=t*v+n*x+i*M+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(_*u*r-d*f*r-_*i*m+n*f*m+d*i*p-n*u*p)*b,e[2]=(a*f*r-_*c*r+_*i*l-n*f*l-a*i*p+n*c*p)*b,e[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*m-n*c*m)*b,e[4]=x*b,e[5]=(h*f*r-g*u*r+g*i*m-t*f*m-h*i*p+t*u*p)*b,e[6]=(g*c*r-o*f*r-g*i*l+t*f*l+o*i*p-t*c*p)*b,e[7]=(o*u*r-h*c*r+h*i*l-t*u*l-o*i*m+t*c*m)*b,e[8]=M*b,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*p-t*d*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*m-t*a*m)*b,e[12]=w*b,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*f+t*d*f)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*f-t*a*f)*b,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,m=r*h,g=r*d,_=o*h,f=o*d,p=a*d,v=c*l,x=c*h,M=c*d,w=n.x,C=n.y,b=n.z;return i[0]=(1-(_+p))*w,i[1]=(m+M)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(u+p))*C,i[6]=(f+v)*C,i[7]=0,i[8]=(g+x)*b,i[9]=(f-v)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const l=1/r,h=1/o,d=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Rn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(a===Rn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*l,m=(n+i)*h;let g,_;if(a===Rn)g=(o+r)*d,_=-2*d;else if(a===xr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new F,tn=new ht,Pd=new F(0,0,0),Ld=new F(1,1,1),Nn=new F,zs=new F,jt=new F,ic=new ht,sc=new jn;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const rc=new F,Ri=new jn,xn=new ht,ks=new F,ls=new F,Dd=new F,Nd=new jn,oc=new F(1,0,0),ac=new F(0,1,0),cc=new F(0,0,1),Ud={type:"added"},Od={type:"removed"},Kr={type:"childadded",child:null},Zr={type:"childremoved",child:null};class wt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new F,t=new cn,n=new jn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ls,ks,this.up):xn.lookAt(ks,ls,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(xn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new F(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new F,yn=new F,Jr=new F,Sn=new F,Pi=new F,Li=new F,lc=new F,Qr=new F,eo=new F,to=new F;class pn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),yn.subVectors(n,t),Jr.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(yn),c=nn.dot(Jr),l=yn.dot(yn),h=yn.dot(Jr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),yn.subVectors(e,t),nn.cross(yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Pi.subVectors(i,n),Li.subVectors(r,n),Qr.subVectors(e,n);const c=Pi.dot(Qr),l=Li.dot(Qr);if(c<=0&&l<=0)return t.copy(n);eo.subVectors(e,i);const h=Pi.dot(eo),d=Li.dot(eo);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Pi,o);to.subVectors(e,r);const m=Pi.dot(to),g=Li.dot(to);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Li,a);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return lc.subVectors(r,i),a=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(lc,a);const p=1/(f+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function no(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=yd(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=no(o,r,e+1/3),this.g=no(o,r,e),this.b=no(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return et.fromWorkingColorSpace(It.copy(this),e),Math.round(Ft(It.r*255,0,255))*65536+Math.round(Ft(It.g*255,0,255))*256+Math.round(Ft(It.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=dn){et.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Gs);const n=kr(Un.h,Gs.h,t),i=kr(Un.s,Gs.s,t),r=kr(Un.l,Gs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ze;Ze.NAMES=Wl;let Fd=0,Cs=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Xi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=bo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Xl extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,Hs=new Ie;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Md("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class ql extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jl extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bd=0;const Jt=new ht,io=new wt,Ii=new F,Yt=new Ts,hs=new Ts,Ct=new F;class Pn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bl(e)?jl:ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Yt.min,hs.min),Yt.expandByPoint(Ct),Ct.addVectors(Yt.max,hs.max),Yt.expandByPoint(Ct)):(Yt.expandByPoint(hs.min),Yt.expandByPoint(hs.max))}Yt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(Ii.fromBufferAttribute(e,l),Ct.add(Ii)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new F,c[N]=new F;const l=new F,h=new F,d=new F,u=new Ie,m=new Ie,g=new Ie,_=new F,f=new F;function p(N,j,y){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,j),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,N),m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),m.sub(u),g.sub(u);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(A),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[N].add(_),a[j].add(_),a[y].add(_),c[N].add(f),c[j].add(f),c[y].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,j=v.length;N<j;++N){const y=v[N],A=y.start,q=y.count;for(let U=A,R=A+q;U<R;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new F,M=new F,w=new F,C=new F;function b(N){w.fromBufferAttribute(i,N),C.copy(w);const j=a[N];x.copy(j),x.sub(w.multiplyScalar(w.dot(j))).normalize(),M.crossVectors(C,j);const A=M.dot(c[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,A)}for(let N=0,j=v.length;N<j;++N){const y=v[N],A=y.start,q=y.count;for(let U=A,R=A+q;U<R;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[m++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ht,ti=new Hl,Vs=new $o,uc=new F,Di=new F,Ni=new F,Ui=new F,so=new F,Ws=new F,Xs=new Ie,qs=new Ie,js=new Ie,dc=new F,fc=new F,pc=new F,Ys=new F,$s=new F;class Vt extends wt{constructor(e=new Pn,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(so.fromBufferAttribute(d,e),o?Ws.addScaledVector(so,h):Ws.addScaledVector(so.sub(t),h))}t.add(Ws)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Vs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Vs,uc)===null||ti.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(hc.copy(r).invert(),ti.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const f=u[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=v,w=x;M<w;M+=3){const C=a.getX(M),b=a.getX(M+1),N=a.getX(M+2);i=Ks(this,p,e,n,l,h,d,C,b,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=a.getX(f),x=a.getX(f+1),M=a.getX(f+2);i=Ks(this,o,e,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const f=u[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=v,w=x;M<w;M+=3){const C=M,b=M+1,N=M+2;i=Ks(this,p,e,n,l,h,d,C,b,N),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=f,x=f+1,M=f+2;i=Ks(this,o,e,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function zd(s,e,t,n,i,r,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===qn,a),c===null)return null;$s.copy(a),$s.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo($s);return l<t.near||l>t.far?null:{distance:l,point:$s.clone(),object:s}}function Ks(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Di),s.getVertexPosition(c,Ni),s.getVertexPosition(l,Ui);const h=zd(s,e,t,n,Di,Ni,Ui,Ys);if(h){i&&(Xs.fromBufferAttribute(i,a),qs.fromBufferAttribute(i,c),js.fromBufferAttribute(i,l),h.uv=pn.getInterpolation(Ys,Di,Ni,Ui,Xs,qs,js,new Ie)),r&&(Xs.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,c),js.fromBufferAttribute(r,l),h.uv1=pn.getInterpolation(Ys,Di,Ni,Ui,Xs,qs,js,new Ie)),o&&(dc.fromBufferAttribute(o,a),fc.fromBufferAttribute(o,c),pc.fromBufferAttribute(o,l),h.normal=pn.getInterpolation(Ys,Di,Ni,Ui,dc,fc,pc,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new F,materialIndex:0};pn.getNormal(Di,Ni,Ui,d.normal),h.face=d}return h}class rt extends Pn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function g(_,f,p,v,x,M,w,C,b,N,j){const y=M/b,A=w/N,q=M/2,U=w/2,R=C/2,O=b+1,I=N+1;let J=0,k=0;const X=new F;for(let Q=0;Q<I;Q++){const ie=Q*A-U;for(let te=0;te<O;te++){const Ae=te*y-q;X[_]=Ae*v,X[f]=ie*x,X[p]=R,l.push(X.x,X.y,X.z),X[_]=0,X[f]=0,X[p]=C>0?1:-1,h.push(X.x,X.y,X.z),d.push(te/b),d.push(1-Q/N),J+=1}}for(let Q=0;Q<N;Q++)for(let ie=0;ie<b;ie++){const te=u+ie+O*Q,Ae=u+ie+O*(Q+1),$=u+(ie+1)+O*(Q+1),re=u+(ie+1)+O*Q;c.push(te,Ae,re),c.push(Ae,$,re),k+=6}a.addGroup(m,k,j),m+=k,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=Ji(s[t]);for(const i in n)e[i]=n[i]}return e}function kd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yl(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}const Gd={clone:Ji,merge:Ut};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new F,mc=new Ie,gc=new Ie;class Qt extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Fi=1;class Wd extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qt(Oi,Fi,e,t);i.layers=this.layers,this.add(i);const r=new Qt(Oi,Fi,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Oi,Fi,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Oi,Fi,e,t);a.layers=this.layers,this.add(a);const c=new Qt(Oi,Fi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Oi,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Xt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xd extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Hn});r.uniforms.tEquirect.value=t;const o=new Vt(i,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Ht),new Wd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ro=new F,qd=new F,jd=new We;class Bn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ro.subVectors(n,t).cross(qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jd.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new $o,Zs=new F;class Ko{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,u-l,f-m,M-p).normalize(),n[1].setComponents(c+r,u+l,f+m,M+p).normalize(),n[2].setComponents(c+o,u+h,f+g,M+v).normalize(),n[3].setComponents(c-o,u-h,f-g,M-v).normalize(),n[4].setComponents(c-a,u-d,f-_,M-x).normalize(),t===Rn)n[5].setComponents(c+a,u+d,f+_,M+x).normalize();else if(t===xr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zs.x=i.normal.x>0?e.max.x:e.min.x,Zs.y=i.normal.y>0?e.max.y:e.min.y,Zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const u=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class Cr extends Pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const v=p*u-o;for(let x=0;x<l;x++){const M=x*d-r;g.push(M,-v,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,M=v+l*(p+1),w=v+1+l*(p+1),C=v+1+l*p;m.push(x,M,C),m.push(M,w,C)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Kf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
	#endif
}`,sm=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,Mm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:$d,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:cf,iridescence_fragment:lf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Mf,emissivemap_fragment:bf,emissivemap_pars_fragment:Tf,colorspace_fragment:Cf,colorspace_pars_fragment:Af,envmap_fragment:wf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Vf,envmap_vertex:If,fog_vertex:Df,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Of,gradientmap_pars_fragment:Ff,lightmap_fragment:Bf,lightmap_pars_fragment:zf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:qf,lights_phong_pars_fragment:jf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:cp,morphinstance_vertex:lp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Mp,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:Cp,project_vertex:Ap,dithering_fragment:wp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Dp,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Gp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:jp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:em,cube_frag:tm,depth_vert:nm,depth_frag:im,distanceRGBA_vert:sm,distanceRGBA_frag:rm,equirect_vert:om,equirect_frag:am,linedashed_vert:cm,linedashed_frag:lm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:ym,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:Mm,points_vert:bm,points_frag:Tm,shadow_vert:Cm,shadow_frag:Am,sprite_vert:wm,sprite_frag:Rm},ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ut([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ut([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ut([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ut([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ut([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ut([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ut([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ut([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ut([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ut([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ut([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ut([ue.lights,ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Js={r:0,b:0,g:0},ii=new cn,Pm=new ht;function Lm(s,e,t,n,i,r,o){const a=new Ze(0);let c=r===!0?0:1,l,h,d=null,u=0,m=null;function g(f,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===br)?(h===void 0&&(h=new Vt(new rt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(p.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(ii)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,(d!==x||u!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Vt(new Cr(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(Js,Yl(s)),n.buffers.color.setClear(Js.r,Js.g,Js.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function Im(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,h=!1;function d(R,O,I,J,k){let X=!1;if(o){const Q=_(J,I,O);l!==Q&&(l=Q,m(l.object)),X=p(R,J,I,k),X&&v(R,J,I,k)}else{const Q=O.wireframe===!0;(l.geometry!==J.id||l.program!==I.id||l.wireframe!==Q)&&(l.geometry=J.id,l.program=I.id,l.wireframe=Q,X=!0)}k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,N(R,O,I,J),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,O,I){const J=I.wireframe===!0;let k=a[R.id];k===void 0&&(k={},a[R.id]=k);let X=k[O.id];X===void 0&&(X={},k[O.id]=X);let Q=X[J];return Q===void 0&&(Q=f(u()),X[J]=Q),Q}function f(R){const O=[],I=[],J=[];for(let k=0;k<i;k++)O[k]=0,I[k]=0,J[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:J,object:R,attributes:{},index:null}}function p(R,O,I,J){const k=l.attributes,X=O.attributes;let Q=0;const ie=I.getAttributes();for(const te in ie)if(ie[te].location>=0){const $=k[te];let re=X[te];if(re===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;Q++}return l.attributesNum!==Q||l.index!==J}function v(R,O,I,J){const k={},X=O.attributes;let Q=0;const ie=I.getAttributes();for(const te in ie)if(ie[te].location>=0){let $=X[te];$===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),k[te]=re,Q++}l.attributes=k,l.attributesNum=Q,l.index=J}function x(){const R=l.newAttributes;for(let O=0,I=R.length;O<I;O++)R[O]=0}function M(R){w(R,0)}function w(R,O){const I=l.newAttributes,J=l.enabledAttributes,k=l.attributeDivisors;I[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),k[R]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),k[R]=O)}function C(){const R=l.newAttributes,O=l.enabledAttributes;for(let I=0,J=O.length;I<J;I++)O[I]!==R[I]&&(s.disableVertexAttribArray(I),O[I]=0)}function b(R,O,I,J,k,X,Q){Q===!0?s.vertexAttribIPointer(R,O,I,k,X):s.vertexAttribPointer(R,O,I,J,k,X)}function N(R,O,I,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=J.attributes,X=I.getAttributes(),Q=O.defaultAttributeValues;for(const ie in X){const te=X[ie];if(te.location>=0){let Ae=k[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),Ae!==void 0){const $=Ae.normalized,re=Ae.itemSize,pe=t.get(Ae);if(pe===void 0)continue;const Pe=pe.buffer,be=pe.type,ve=pe.bytesPerElement,$e=n.isWebGL2===!0&&(be===s.INT||be===s.UNSIGNED_INT||Ae.gpuType===Rl);if(Ae.isInterleavedBufferAttribute){const De=Ae.data,H=De.stride,St=Ae.offset;if(De.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)w(te.location+Ce,De.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)M(te.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Ce=0;Ce<te.locationSize;Ce++)b(te.location+Ce,re/te.locationSize,be,$,H*ve,(St+re/te.locationSize*Ce)*ve,$e)}else{if(Ae.isInstancedBufferAttribute){for(let De=0;De<te.locationSize;De++)w(te.location+De,Ae.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let De=0;De<te.locationSize;De++)M(te.location+De);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let De=0;De<te.locationSize;De++)b(te.location+De,re/te.locationSize,be,$,re*ve,re/te.locationSize*De*ve,$e)}}else if(Q!==void 0){const $=Q[ie];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(te.location,$);break;case 3:s.vertexAttrib3fv(te.location,$);break;case 4:s.vertexAttrib4fv(te.location,$);break;default:s.vertexAttrib1fv(te.location,$)}}}}C()}function j(){q();for(const R in a){const O=a[R];for(const I in O){const J=O[I];for(const k in J)g(J[k].object),delete J[k];delete O[I]}delete a[R]}}function y(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const I in O){const J=O[I];for(const k in J)g(J[k].object),delete J[k];delete O[I]}delete a[R.id]}function A(R){for(const O in a){const I=a[O];if(I[R.id]===void 0)continue;const J=I[R.id];for(const k in J)g(J[k].object),delete J[k];delete I[R.id]}}function q(){U(),h=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:q,resetDefaultState:U,dispose:j,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function Dm(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Nm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||e.has("OES_texture_float"),w=x&&M,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:C}}function Um(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Bn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?h(null):l();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;c.value=M,M=h(g,u,x,m);for(let w=0;w!==x;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Om(s){let e=new WeakMap;function t(o,a){return a===To?o.mapping=$i:a===Co&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Co)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xd(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Jl extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,_c=[.125,.215,.35,.446,.526,.582],ci=20,oo=new Jl,vc=new Ze;let ao=null,co=0,lo=0;const oi=(1+Math.sqrt(5))/2,Bi=1/oi,xc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,oi,Bi),new F(0,oi,-Bi),new F(Bi,0,oi),new F(-Bi,0,oi),new F(oi,Bi,0),new F(-oi,Bi,0)];class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,co,lo),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:xs,format:on,colorSpace:$n,depthBuffer:!1},i=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(r)),this._blurMaterial=Bm(r,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(vc),h.toneMapping=Vn,h.autoClear=!1;const m=new Xl({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Vt(new rt,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(vc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Qs(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xc[(i-1)%xc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Vt(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):ci;f>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ci}`);const p=[];let v=0;for(let b=0;b<ci;++b){const N=b/_,j=Math.exp(-N*N/2);p.push(j),b===0?v+=j:b<f&&(v+=2*j)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[i],w=3*M*(i>x-Hi?i-x+Hi:0),C=4*(this._cubeSize-M);Qs(t,w,C,3*M,2*M),c.setRenderTarget(t),c.render(d,oo)}}function Fm(s){const e=[],t=[],n=[];let i=s;const r=s-Hi+1+_c.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Hi?c=_c[o-s+Hi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,f=2,p=1,v=new Float32Array(_*g*m),x=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,N=C>2?0:-1,j=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];v.set(j,_*g*C),x.set(u,f*g*C);const y=[C,C,C,C,C,C];M.set(y,p*g*C)}const w=new Pn;w.setAttribute("position",new mn(v,_)),w.setAttribute("uv",new mn(x,f)),w.setAttribute("faceIndex",new mn(M,p)),e.push(w),i>Hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bm(s,e,t){const n=new Float32Array(ci),i=new F(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ec(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Mc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function zm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===To||c===Co,h=c===$i||c===Ki;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new yc(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new yc(s));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function km(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gm(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}u.removeEventListener("dispose",o),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],s.ARRAY_BUFFER)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],C=v[x+1],b=v[x+2];u.push(w,C,C,b,b,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,C=x+1,b=x+2;u.push(w,C,C,b,b,w)}}else return;const f=new(Bl(u)?jl:ql)(u,1);f.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,f)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Hm(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*c),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*c,_),t.update(g,r,_)}function u(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Vm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wm(s,e){return s[0]-e[0]}function Xm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function qm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=r.get(h);if(f===void 0||f.count!==_){let U=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const p=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),v===!0&&(b=2),x===!0&&(b=3);let N=h.attributes.position.count*b,j=1;N>e.maxTextureSize&&(j=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const y=new Float32Array(N*j*4*_),A=new Gl(y,N,j,_);A.type=wn,A.needsUpdate=!0;const q=b*4;for(let R=0;R<_;R++){const O=M[R],I=w[R],J=C[R],k=N*j*4*R;for(let X=0;X<O.count;X++){const Q=X*q;p===!0&&(o.fromBufferAttribute(O,X),y[k+Q+0]=o.x,y[k+Q+1]=o.y,y[k+Q+2]=o.z,y[k+Q+3]=0),v===!0&&(o.fromBufferAttribute(I,X),y[k+Q+4]=o.x,y[k+Q+5]=o.y,y[k+Q+6]=o.z,y[k+Q+7]=0),x===!0&&(o.fromBufferAttribute(J,X),y[k+Q+8]=o.x,y[k+Q+9]=o.y,y[k+Q+10]=o.z,y[k+Q+11]=J.itemSize===4?o.w:1)}}f={count:_,texture:A,size:new Ie(N,j)},r.set(h,f),h.addEventListener("dispose",U)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",u)}d.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const w=_[M];w[0]=M,w[1]=u[M]}_.sort(Xm);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Wm);const f=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const w=a[M],C=w[0],b=w[1];C!==Number.MAX_SAFE_INTEGER&&b?(f&&h.getAttribute("morphTarget"+M)!==f[C]&&h.setAttribute("morphTarget"+M,f[C]),p&&h.getAttribute("morphNormal"+M)!==p[C]&&h.setAttribute("morphNormal"+M,p[C]),i[M]=b,v+=b):(f&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function jm(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Ql extends Xt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:pi,h!==pi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=kn),n===void 0&&h===Zi&&(n=fi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eh=new Xt,th=new Ql(1,1);th.compareFunction=Fl;const nh=new Gl,ih=new wd,sh=new Kl,bc=[],Tc=[],Cc=new Float32Array(16),Ac=new Float32Array(9),wc=new Float32Array(4);function ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=bc[i];if(r===void 0&&(r=new Float32Array(i),bc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ar(s,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function Km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function Jm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),bt(t,n)}}function Qm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Ac.set(n),s.uniformMatrix3fv(this.addr,!1,Ac),bt(t,n)}}function eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Cc.set(n),s.uniformMatrix4fv(this.addr,!1,Cc),bt(t,n)}}function tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function lg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?th:eh;t.setTexture2D(e||r,i)}function hg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ih,i)}function ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sh,i)}function dg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nh,i)}function fg(s){switch(s){case 5126:return Ym;case 35664:return $m;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(s,e){s.uniform1fv(this.addr,e)}function mg(s,e){const t=ts(e,this.size,2);s.uniform2fv(this.addr,t)}function gg(s,e){const t=ts(e,this.size,3);s.uniform3fv(this.addr,t)}function _g(s,e){const t=ts(e,this.size,4);s.uniform4fv(this.addr,t)}function vg(s,e){const t=ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xg(s,e){const t=ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yg(s,e){const t=ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sg(s,e){s.uniform1iv(this.addr,e)}function Eg(s,e){s.uniform2iv(this.addr,e)}function Mg(s,e){s.uniform3iv(this.addr,e)}function bg(s,e){s.uniform4iv(this.addr,e)}function Tg(s,e){s.uniform1uiv(this.addr,e)}function Cg(s,e){s.uniform2uiv(this.addr,e)}function Ag(s,e){s.uniform3uiv(this.addr,e)}function wg(s,e){s.uniform4uiv(this.addr,e)}function Rg(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||eh,r[o])}function Pg(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ih,r[o])}function Lg(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sh,r[o])}function Ig(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nh,r[o])}function Dg(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return Cg;case 36295:return Ag;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fg(t.type)}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}}class Og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Rc(s,e){s.seq.push(e),s.map[e.id]=e}function Fg(s,e,t){const n=s.name,i=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Rc(t,l===void 0?new Ng(a,s,e):new Ug(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Og(a),Rc(t,d)),t=d}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bg=37297;let zg=0;function kg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gg(s){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s);let n;switch(e===t?n="":e===vr&&t===_r?n="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),s){case $n:case Tr:return[n,"LinearTransferOETF"];case dn:case Yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Lc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+kg(s.getShaderSource(e),o)}else return i}function Hg(s,e){const t=Gg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vg(s,e){let t;switch(e){case $u:t="Linear";break;case Ku:t="Reinhard";break;case Zu:t="OptimizedCineon";break;case Ju:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function Xg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function qg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Vi(s){return s!==""}function Ic(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(s){return s.replace(Yg,Kg)}const $g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kg(s,e){let t=Ve[e];if(t===void 0){const n=$g.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(s){return s.replace(Zg,Jg)}function Jg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
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
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function e_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Ki:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function n_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Al:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function i_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function s_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qg(t),l=e_(t),h=t_(t),d=n_(t),u=i_(t),m=t.isWebGL2?"":Wg(t),g=Xg(t),_=qg(r),f=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),p.length>0&&(p+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),v.length>0&&(v+=`
`)):(p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),v=[m,Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=Io(o),o=Ic(o,t),o=Dc(o,t),a=Io(a),a=Ic(a,t),a=Dc(a,t),o=Nc(o),a=Nc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+o,w=x+v+a,C=Pc(i,i.VERTEX_SHADER,M),b=Pc(i,i.FRAGMENT_SHADER,w);i.attachShader(f,C),i.attachShader(f,b),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function N(q){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(f).trim(),R=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(b).trim();let I=!0,J=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,C,b);else{const k=Lc(i,C,"vertex"),X=Lc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+U+`
`+k+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(R===""||O==="")&&(J=!1);J&&(q.diagnostics={runnable:I,programLog:U,vertexShader:{log:R,prefix:p},fragmentShader:{log:O,prefix:v}})}i.deleteShader(C),i.deleteShader(b),j=new cr(i,f),y=jg(i,f)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(f,Bg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=b,this}let r_=0;class o_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new a_(e),t.set(e,n)),n}}class a_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function c_(s,e,t,n,i,r,o){const a=new Vl,c=new o_,l=new Set,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,A,q,U,R){const O=U.fog,I=R.geometry,J=y.isMeshStandardMaterial?U.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),X=k&&k.mapping===br?k.image.height:null,Q=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=ie!==void 0?ie.length:0;let Ae=0;I.morphAttributes.position!==void 0&&(Ae=1),I.morphAttributes.normal!==void 0&&(Ae=2),I.morphAttributes.color!==void 0&&(Ae=3);let $,re,pe,Pe;if(Q){const Qe=fn[Q];$=Qe.vertexShader,re=Qe.fragmentShader}else $=y.vertexShader,re=y.fragmentShader,c.update(y),pe=c.getVertexShaderID(y),Pe=c.getFragmentShaderID(y);const be=s.getRenderTarget(),ve=R.isInstancedMesh===!0,$e=R.isBatchedMesh===!0,De=!!y.map,H=!!y.matcap,St=!!k,Ce=!!y.aoMap,Be=!!y.lightMap,we=!!y.bumpMap,Ye=!!y.normalMap,ze=!!y.displacementMap,Ge=!!y.emissiveMap,nt=!!y.metalnessMap,P=!!y.roughnessMap,E=y.anisotropy>0,Z=y.clearcoat>0,ee=y.iridescence>0,ae=y.sheen>0,se=y.transmission>0,Ue=E&&!!y.anisotropyMap,Re=Z&&!!y.clearcoatMap,he=Z&&!!y.clearcoatNormalMap,de=Z&&!!y.clearcoatRoughnessMap,Oe=ee&&!!y.iridescenceMap,le=ee&&!!y.iridescenceThicknessMap,ut=ae&&!!y.sheenColorMap,Xe=ae&&!!y.sheenRoughnessMap,Te=!!y.specularMap,xe=!!y.specularColorMap,Ee=!!y.specularIntensityMap,L=se&&!!y.transmissionMap,ne=se&&!!y.thicknessMap,Se=!!y.gradientMap,D=!!y.alphaMap,ce=y.alphaTest>0,V=!!y.alphaHash,oe=!!y.extensions;let fe=Vn;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(fe=s.toneMapping);const je={isWebGL2:d,shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:re,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:Pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:$e,instancing:ve,instancingColor:ve&&R.instanceColor!==null,instancingMorph:ve&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:$n,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:H,envMap:St,envMapMode:St&&k.mapping,envMapCubeUVHeight:X,aoMap:Ce,lightMap:Be,bumpMap:we,normalMap:Ye,displacementMap:m&&ze,emissiveMap:Ge,normalMapObjectSpace:Ye&&y.normalMapType===dd,normalMapTangentSpace:Ye&&y.normalMapType===Ol,metalnessMap:nt,roughnessMap:P,anisotropy:E,anisotropyMap:Ue,clearcoat:Z,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:ee,iridescenceMap:Oe,iridescenceThicknessMap:le,sheen:ae,sheenColorMap:ut,sheenRoughnessMap:Xe,specularMap:Te,specularColorMap:xe,specularIntensityMap:Ee,transmission:se,transmissionMap:L,thicknessMap:ne,gradientMap:Se,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:ce,alphaHash:V,combine:y.combine,mapUv:De&&f(y.map.channel),aoMapUv:Ce&&f(y.aoMap.channel),lightMapUv:Be&&f(y.lightMap.channel),bumpMapUv:we&&f(y.bumpMap.channel),normalMapUv:Ye&&f(y.normalMap.channel),displacementMapUv:ze&&f(y.displacementMap.channel),emissiveMapUv:Ge&&f(y.emissiveMap.channel),metalnessMapUv:nt&&f(y.metalnessMap.channel),roughnessMapUv:P&&f(y.roughnessMap.channel),anisotropyMapUv:Ue&&f(y.anisotropyMap.channel),clearcoatMapUv:Re&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&f(y.sheenRoughnessMap.channel),specularMapUv:Te&&f(y.specularMap.channel),specularColorMapUv:xe&&f(y.specularColorMap.channel),specularIntensityMapUv:Ee&&f(y.specularIntensityMap.channel),transmissionMapUv:L&&f(y.transmissionMap.channel),thicknessMapUv:ne&&f(y.thicknessMap.channel),alphaMapUv:D&&f(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ye||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(De||D),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function v(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)A.push(q),A.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(x(A,y),M(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),y.push(a.mask)}function w(y){const A=_[y.type];let q;if(A){const U=fn[A];q=Gd.clone(U.uniforms)}else q=y.uniforms;return q}function C(y,A){let q;for(let U=0,R=h.length;U<R;U++){const O=h[U];if(O.cacheKey===A){q=O,++q.usedTimes;break}}return q===void 0&&(q=new s_(s,A,y,r),h.push(q)),q}function b(y){if(--y.usedTimes===0){const A=h.indexOf(y);h[A]=h[h.length-1],h.pop(),y.destroy()}}function N(y){c.remove(y)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:w,acquireProgram:C,releaseProgram:b,releaseShaderCache:N,programs:h,dispose:j}}function l_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function h_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Oc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,m,g,_,f){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=f),e++,p}function a(d,u,m,g,_,f){const p=o(d,u,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function c(d,u,m,g,_,f){const p=o(d,u,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||h_),n.length>1&&n.sort(u||Oc),i.length>1&&i.sort(u||Oc)}function h(){for(let d=e,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function u_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fc,s.set(n,[o])):i>=r.length?(o=new Fc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function d_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let p_=0;function m_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function g_(s,e){const t=new d_,n=f_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const r=new F,o=new ht,a=new ht;function c(h,d){let u=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,f=0,p=0,v=0,x=0,M=0,w=0,C=0,b=0,N=0,j=0;h.sort(m_);const y=d===!0?Math.PI:1;for(let q=0,U=h.length;q<U;q++){const R=h[q],O=R.color,I=R.intensity,J=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*I*y,m+=O.g*I*y,g+=O.b*I*y;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],I);j++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const Q=R.shadow,ie=n.get(R);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=X,_++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(O).multiplyScalar(I*y),X.distance=J,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[p]=X;const Q=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,Q.updateMatrices(R),R.castShadow&&N++),i.spotLightMatrix[p]=Q.matrix,R.castShadow){const ie=n.get(R);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.spotShadow[p]=ie,i.spotShadowMap[p]=k,C++}p++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(O).multiplyScalar(I),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=X,v++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*y),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Q=R.shadow,ie=n.get(R);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=k,i.pointShadowMatrix[f]=R.shadow.matrix,w++}i.point[f]=X,f++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(I*y),X.groundColor.copy(R.groundColor).multiplyScalar(I*y),i.hemi[x]=X,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==f||A.spotLength!==p||A.rectAreaLength!==v||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==C||A.numSpotMaps!==b||A.numLightProbes!==j)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=j,A.directionalLength=_,A.pointLength=f,A.spotLength=p,A.rectAreaLength=v,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=C,A.numSpotMaps=b,A.numLightProbes=j,i.version=p_++)}function l(h,d){let u=0,m=0,g=0,_=0,f=0;const p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:i}}function Bc(s,e){const t=new g_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function __(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Bc(s,e),t.set(r,[c])):o>=a.length?(c=new Bc(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class v_ extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x_ extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`;function E_(s,e,t){let n=new Ko;const i=new Ie,r=new Ie,o=new At,a=new v_({depthPacking:ud}),c=new x_,l={},h=t.maxTextureSize,d={[qn]:Wt,[Wt]:qn,[An]:An},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:y_,fragmentShader:S_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(C,b,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const j=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Hn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const U=p!==Cn&&this.type===Cn,R=p===Cn&&this.type!==Cn;for(let O=0,I=C.length;O<I;O++){const J=C[O],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||U===!0||R===!0){const ie=this.type!==Cn?{minFilter:Ot,magFilter:Ot}:{};k.map!==null&&k.map.dispose(),k.map=new gi(i.x,i.y,ie),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const Q=k.getViewportCount();for(let ie=0;ie<Q;ie++){const te=k.getViewport(ie);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),q.viewport(o),k.updateMatrices(J,ie),n=k.getFrustum(),M(b,N,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Cn&&v(k,N),k.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(j,y,A)};function v(C,b){const N=e.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(b,null,N,u,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(b,null,N,m,_,null)}function x(C,b,N,j){let y=null;const A=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)y=A;else if(y=N.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=y.uuid,U=b.uuid;let R=l[q];R===void 0&&(R={},l[q]=R);let O=R[U];O===void 0&&(O=y.clone(),R[U]=O,b.addEventListener("dispose",w)),y=O}if(y.visible=b.visible,y.wireframe=b.wireframe,j===Cn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=s.properties.get(y);q.light=N}return y}function M(C,b,N,j,y){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const U=e.update(C),R=C.material;if(Array.isArray(R)){const O=U.groups;for(let I=0,J=O.length;I<J;I++){const k=O[I],X=R[k.materialIndex];if(X&&X.visible){const Q=x(C,X,j,y);C.onBeforeShadow(s,C,b,N,U,Q,k),s.renderBufferDirect(N,null,U,Q,C,k),C.onAfterShadow(s,C,b,N,U,Q,k)}}}else if(R.visible){const O=x(C,R,j,y);C.onBeforeShadow(s,C,b,N,U,O,null),s.renderBufferDirect(N,null,U,O,C,null),C.onAfterShadow(s,C,b,N,U,O,null)}}const q=C.children;for(let U=0,R=q.length;U<R;U++)M(q[U],b,N,j,y)}function w(C){C.target.removeEventListener("dispose",w);for(const N in l){const j=l[N],y=C.target.uuid;y in j&&(j[y].dispose(),delete j[y])}}}function M_(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const ce=new At;let V=null;const oe=new At(0,0,0,0);return{setMask:function(fe){V!==fe&&!D&&(s.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){D=fe},setClear:function(fe,je,Qe,tt,dt){dt===!0&&(fe*=tt,je*=tt,Qe*=tt),ce.set(fe,je,Qe,tt),oe.equals(ce)===!1&&(s.clearColor(fe,je,Qe,tt),oe.copy(ce))},reset:function(){D=!1,V=null,oe.set(-1,0,0,0)}}}function r(){let D=!1,ce=null,V=null,oe=null;return{setTest:function(fe){fe?ve(s.DEPTH_TEST):$e(s.DEPTH_TEST)},setMask:function(fe){ce!==fe&&!D&&(s.depthMask(fe),ce=fe)},setFunc:function(fe){if(V!==fe){switch(fe){case ku:s.depthFunc(s.NEVER);break;case Gu:s.depthFunc(s.ALWAYS);break;case Hu:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case Vu:s.depthFunc(s.EQUAL);break;case Wu:s.depthFunc(s.GEQUAL);break;case Xu:s.depthFunc(s.GREATER);break;case qu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=fe}},setLocked:function(fe){D=fe},setClear:function(fe){oe!==fe&&(s.clearDepth(fe),oe=fe)},reset:function(){D=!1,ce=null,V=null,oe=null}}}function o(){let D=!1,ce=null,V=null,oe=null,fe=null,je=null,Qe=null,tt=null,dt=null;return{setTest:function(Ke){D||(Ke?ve(s.STENCIL_TEST):$e(s.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!D&&(s.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,it,Rt){(V!==Ke||oe!==it||fe!==Rt)&&(s.stencilFunc(Ke,it,Rt),V=Ke,oe=it,fe=Rt)},setOp:function(Ke,it,Rt){(je!==Ke||Qe!==it||tt!==Rt)&&(s.stencilOp(Ke,it,Rt),je=Ke,Qe=it,tt=Rt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){dt!==Ke&&(s.clearStencil(Ke),dt=Ke)},reset:function(){D=!1,ce=null,V=null,oe=null,fe=null,je=null,Qe=null,tt=null,dt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],f=null,p=!1,v=null,x=null,M=null,w=null,C=null,b=null,N=null,j=new Ze(0,0,0),y=0,A=!1,q=null,U=null,R=null,O=null,I=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=X>=2);let ie=null,te={};const Ae=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),re=new At().fromArray(Ae),pe=new At().fromArray($);function Pe(D,ce,V,oe){const fe=new Uint8Array(4),je=s.createTexture();s.bindTexture(D,je),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<V;Qe++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ce,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ce+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return je}const be={};be[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ve(s.DEPTH_TEST),c.setFunc(mr),ze(!1),Ge(_a),ve(s.CULL_FACE),we(Hn);function ve(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function $e(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function De(D,ce){return m[D]!==ce?(s.bindFramebuffer(D,ce),m[D]=ce,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(D,ce){let V=_,oe=!1;if(D){V=g.get(ce),V===void 0&&(V=[],g.set(ce,V));const fe=D.textures;if(V.length!==fe.length||V[0]!==s.COLOR_ATTACHMENT0){for(let je=0,Qe=fe.length;je<Qe;je++)V[je]=s.COLOR_ATTACHMENT0+je;V.length=fe.length,oe=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,oe=!0);if(oe)if(t.isWebGL2)s.drawBuffers(V);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function St(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Ce={[ai]:s.FUNC_ADD,[Tu]:s.FUNC_SUBTRACT,[Cu]:s.FUNC_REVERSE_SUBTRACT};if(n)Ce[Sa]=s.MIN,Ce[Ea]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ce[Sa]=D.MIN_EXT,Ce[Ea]=D.MAX_EXT)}const Be={[Au]:s.ZERO,[wu]:s.ONE,[Ru]:s.SRC_COLOR,[Mo]:s.SRC_ALPHA,[Uu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Lu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[bo]:s.ONE_MINUS_SRC_ALPHA,[Nu]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Ou]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[zu]:s.ONE_MINUS_CONSTANT_ALPHA};function we(D,ce,V,oe,fe,je,Qe,tt,dt,Ke){if(D===Hn){p===!0&&($e(s.BLEND),p=!1);return}if(p===!1&&(ve(s.BLEND),p=!0),D!==bu){if(D!==v||Ke!==A){if((x!==ai||C!==ai)&&(s.blendEquation(s.FUNC_ADD),x=ai,C=ai),Ke)switch(D){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case va:s.blendFunc(s.ONE,s.ONE);break;case xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ya:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case va:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ya:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,w=null,b=null,N=null,j.set(0,0,0),y=0,v=D,A=Ke}return}fe=fe||ce,je=je||V,Qe=Qe||oe,(ce!==x||fe!==C)&&(s.blendEquationSeparate(Ce[ce],Ce[fe]),x=ce,C=fe),(V!==M||oe!==w||je!==b||Qe!==N)&&(s.blendFuncSeparate(Be[V],Be[oe],Be[je],Be[Qe]),M=V,w=oe,b=je,N=Qe),(tt.equals(j)===!1||dt!==y)&&(s.blendColor(tt.r,tt.g,tt.b,dt),j.copy(tt),y=dt),v=D,A=!1}function Ye(D,ce){D.side===An?$e(s.CULL_FACE):ve(s.CULL_FACE);let V=D.side===Wt;ce&&(V=!V),ze(V),D.blending===Xi&&D.transparent===!1?we(Hn):we(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const oe=D.stencilWrite;l.setTest(oe),oe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),P(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):$e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){q!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),q=D)}function Ge(D){D!==Eu?(ve(s.CULL_FACE),D!==U&&(D===_a?s.cullFace(s.BACK):D===Mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$e(s.CULL_FACE),U=D}function nt(D){D!==R&&(k&&s.lineWidth(D),R=D)}function P(D,ce,V){D?(ve(s.POLYGON_OFFSET_FILL),(O!==ce||I!==V)&&(s.polygonOffset(ce,V),O=ce,I=V)):$e(s.POLYGON_OFFSET_FILL)}function E(D){D?ve(s.SCISSOR_TEST):$e(s.SCISSOR_TEST)}function Z(D){D===void 0&&(D=s.TEXTURE0+J-1),ie!==D&&(s.activeTexture(D),ie=D)}function ee(D,ce,V){V===void 0&&(ie===null?V=s.TEXTURE0+J-1:V=ie);let oe=te[V];oe===void 0&&(oe={type:void 0,texture:void 0},te[V]=oe),(oe.type!==D||oe.texture!==ce)&&(ie!==V&&(s.activeTexture(V),ie=V),s.bindTexture(D,ce||be[D]),oe.type=D,oe.texture=ce)}function ae(){const D=te[ie];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(D){re.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Ee(D){pe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function L(D,ce){let V=d.get(ce);V===void 0&&(V=new WeakMap,d.set(ce,V));let oe=V.get(D);oe===void 0&&(oe=s.getUniformBlockIndex(ce,D.name),V.set(D,oe))}function ne(D,ce){const oe=d.get(ce).get(D);h.get(ce)!==oe&&(s.uniformBlockBinding(ce,oe,D.__bindingPointIndex),h.set(ce,oe))}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ie=null,te={},m={},g=new WeakMap,_=[],f=null,p=!1,v=null,x=null,M=null,w=null,C=null,b=null,N=null,j=new Ze(0,0,0),y=0,A=!1,q=null,U=null,R=null,O=null,I=null,re.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ve,disable:$e,bindFramebuffer:De,drawBuffers:H,useProgram:St,setBlending:we,setMaterial:Ye,setFlipSided:ze,setCullFace:Ge,setLineWidth:nt,setPolygonOffset:P,setScissorTest:E,activeTexture:Z,bindTexture:ee,unbindTexture:ae,compressedTexImage2D:se,compressedTexImage3D:Ue,texImage2D:Xe,texImage3D:Te,updateUBOMapping:L,uniformBlockBinding:ne,texStorage2D:le,texStorage3D:ut,texSubImage2D:Re,texSubImage3D:he,compressedTexSubImage2D:de,compressedTexSubImage3D:Oe,scissor:xe,viewport:Ee,reset:Se}}function b_(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ie,d=new WeakMap;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return g?new OffscreenCanvas(P,E):yr("canvas")}function f(P,E,Z,ee){let ae=1;const se=nt(P);if((se.width>ee||se.height>ee)&&(ae=ee/Math.max(se.width,se.height)),ae<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ue=E?Lo:Math.floor,Re=Ue(ae*se.width),he=Ue(ae*se.height);u===void 0&&(u=_(Re,he));const de=Z?_(Re,he):u;return de.width=Re,de.height=he,de.getContext("2d").drawImage(P,0,0,Re,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Re+"x"+he+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function p(P){const E=nt(P);return Ja(E.width)&&Ja(E.height)}function v(P){return a?!1:P.wrapS!==rn||P.wrapT!==rn||P.minFilter!==Ot&&P.minFilter!==Ht}function x(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ot&&P.minFilter!==Ht}function M(P){s.generateMipmap(P)}function w(P,E,Z,ee,ae=!1){if(a===!1)return E;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=E;if(E===s.RED&&(Z===s.FLOAT&&(se=s.R32F),Z===s.HALF_FLOAT&&(se=s.R16F),Z===s.UNSIGNED_BYTE&&(se=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.R8UI),Z===s.UNSIGNED_SHORT&&(se=s.R16UI),Z===s.UNSIGNED_INT&&(se=s.R32UI),Z===s.BYTE&&(se=s.R8I),Z===s.SHORT&&(se=s.R16I),Z===s.INT&&(se=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(se=s.RG32F),Z===s.HALF_FLOAT&&(se=s.RG16F),Z===s.UNSIGNED_BYTE&&(se=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.RG8UI),Z===s.UNSIGNED_SHORT&&(se=s.RG16UI),Z===s.UNSIGNED_INT&&(se=s.RG32UI),Z===s.BYTE&&(se=s.RG8I),Z===s.SHORT&&(se=s.RG16I),Z===s.INT&&(se=s.RG32I)),E===s.RGBA){const Ue=ae?gr:et.getTransfer(ee);Z===s.FLOAT&&(se=s.RGBA32F),Z===s.HALF_FLOAT&&(se=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(se=Ue===ot?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(P,E,Z){return x(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==Ot&&P.minFilter!==Ht?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){return P===Ot||P===Ma||P===rs?s.NEAREST:s.LINEAR}function N(P){const E=P.target;E.removeEventListener("dispose",N),y(E),E.isVideoTexture&&d.delete(E)}function j(P){const E=P.target;E.removeEventListener("dispose",j),q(E)}function y(P){const E=n.get(P);if(E.__webglInit===void 0)return;const Z=P.source,ee=m.get(Z);if(ee){const ae=ee[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(P),Object.keys(ee).length===0&&m.delete(Z)}n.remove(P)}function A(P){const E=n.get(P);s.deleteTexture(E.__webglTexture);const Z=P.source,ee=m.get(Z);delete ee[E.__cacheKey],o.memory.textures--}function q(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ae=0;ae<E.__webglFramebuffer[ee].length;ae++)s.deleteFramebuffer(E.__webglFramebuffer[ee][ae]);else s.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)s.deleteFramebuffer(E.__webglFramebuffer[ee]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let ee=0,ae=Z.length;ee<ae;ee++){const se=n.get(Z[ee]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(Z[ee])}n.remove(P)}let U=0;function R(){U=0}function O(){const P=U;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function I(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){const Z=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,P,E);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function k(P,E){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function X(P,E){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,E);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function Q(P,E){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){Pe(Z,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ie={[Ao]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},te={[Ot]:s.NEAREST,[Ma]:s.NEAREST_MIPMAP_NEAREST,[rs]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[Nr]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},Ae={[fd]:s.NEVER,[xd]:s.ALWAYS,[pd]:s.LESS,[Fl]:s.LEQUAL,[md]:s.EQUAL,[vd]:s.GEQUAL,[gd]:s.GREATER,[_d]:s.NOTEQUAL};function $(P,E,Z){if(E.type===wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ht||E.magFilter===Nr||E.magFilter===rs||E.magFilter===ui||E.minFilter===Ht||E.minFilter===Nr||E.minFilter===rs||E.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(s.texParameteri(P,s.TEXTURE_WRAP_S,ie[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ie[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ie[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,te[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,te[E.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==rn||E.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(E.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==Ot&&E.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ot||E.minFilter!==rs&&E.minFilter!==ui||E.type===wn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===xs&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function re(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const ee=E.source;let ae=m.get(ee);ae===void 0&&(ae={},m.set(ee,ae));const se=I(E);if(se!==P.__cacheKey){ae[se]===void 0&&(ae[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ae[se].usedTimes++;const Ue=ae[P.__cacheKey];Ue!==void 0&&(ae[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(E)),P.__cacheKey=se,P.__webglTexture=ae[se].texture}return Z}function pe(P,E,Z){let ee=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=s.TEXTURE_3D);const ae=re(P,E),se=E.source;t.bindTexture(ee,P.__webglTexture,s.TEXTURE0+Z);const Ue=n.get(se);if(se.version!==Ue.__version||ae===!0){t.activeTexture(s.TEXTURE0+Z);const Re=et.getPrimaries(et.workingColorSpace),he=E.colorSpace===zn?null:et.getPrimaries(E.colorSpace),de=E.colorSpace===zn||Re===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Oe=v(E)&&p(E.image)===!1;let le=f(E.image,Oe,!1,i.maxTextureSize);le=Ge(E,le);const ut=p(le)||a,Xe=r.convert(E.format,E.colorSpace);let Te=r.convert(E.type),xe=w(E.internalFormat,Xe,Te,E.colorSpace,E.isVideoTexture);$(ee,E,ut);let Ee;const L=E.mipmaps,ne=a&&E.isVideoTexture!==!0&&xe!==Ul,Se=Ue.__version===void 0||ae===!0,D=se.dataReady,ce=C(E,le,ut);if(E.isDepthTexture)xe=s.DEPTH_COMPONENT,a?E.type===wn?xe=s.DEPTH_COMPONENT32F:E.type===kn?xe=s.DEPTH_COMPONENT24:E.type===fi?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:E.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===pi&&xe===s.DEPTH_COMPONENT&&E.type!==jo&&E.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=kn,Te=r.convert(E.type)),E.format===Zi&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,E.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=fi,Te=r.convert(E.type))),Se&&(ne?t.texStorage2D(s.TEXTURE_2D,1,xe,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,xe,le.width,le.height,0,Xe,Te,null));else if(E.isDataTexture)if(L.length>0&&ut){ne&&Se&&t.texStorage2D(s.TEXTURE_2D,ce,xe,L[0].width,L[0].height);for(let V=0,oe=L.length;V<oe;V++)Ee=L[V],ne?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Ee.width,Ee.height,Xe,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,V,xe,Ee.width,Ee.height,0,Xe,Te,Ee.data);E.generateMipmaps=!1}else ne?(Se&&t.texStorage2D(s.TEXTURE_2D,ce,xe,le.width,le.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,Xe,Te,le.data)):t.texImage2D(s.TEXTURE_2D,0,xe,le.width,le.height,0,Xe,Te,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,xe,L[0].width,L[0].height,le.depth);for(let V=0,oe=L.length;V<oe;V++)Ee=L[V],E.format!==on?Xe!==null?ne?D&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Ee.width,Ee.height,le.depth,Xe,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,xe,Ee.width,Ee.height,le.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Ee.width,Ee.height,le.depth,Xe,Te,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,xe,Ee.width,Ee.height,le.depth,0,Xe,Te,Ee.data)}else{ne&&Se&&t.texStorage2D(s.TEXTURE_2D,ce,xe,L[0].width,L[0].height);for(let V=0,oe=L.length;V<oe;V++)Ee=L[V],E.format!==on?Xe!==null?ne?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Ee.width,Ee.height,Xe,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,V,xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Ee.width,Ee.height,Xe,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,V,xe,Ee.width,Ee.height,0,Xe,Te,Ee.data)}else if(E.isDataArrayTexture)ne?(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,xe,le.width,le.height,le.depth),D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Xe,Te,le.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,le.width,le.height,le.depth,0,Xe,Te,le.data);else if(E.isData3DTexture)ne?(Se&&t.texStorage3D(s.TEXTURE_3D,ce,xe,le.width,le.height,le.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Xe,Te,le.data)):t.texImage3D(s.TEXTURE_3D,0,xe,le.width,le.height,le.depth,0,Xe,Te,le.data);else if(E.isFramebufferTexture){if(Se)if(ne)t.texStorage2D(s.TEXTURE_2D,ce,xe,le.width,le.height);else{let V=le.width,oe=le.height;for(let fe=0;fe<ce;fe++)t.texImage2D(s.TEXTURE_2D,fe,xe,V,oe,0,Xe,Te,null),V>>=1,oe>>=1}}else if(L.length>0&&ut){if(ne&&Se){const V=nt(L[0]);t.texStorage2D(s.TEXTURE_2D,ce,xe,V.width,V.height)}for(let V=0,oe=L.length;V<oe;V++)Ee=L[V],ne?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Xe,Te,Ee):t.texImage2D(s.TEXTURE_2D,V,xe,Xe,Te,Ee);E.generateMipmaps=!1}else if(ne){if(Se){const V=nt(le);t.texStorage2D(s.TEXTURE_2D,ce,xe,V.width,V.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Te,le)}else t.texImage2D(s.TEXTURE_2D,0,xe,Xe,Te,le);x(E,ut)&&M(ee),Ue.__version=se.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Pe(P,E,Z){if(E.image.length!==6)return;const ee=re(P,E),ae=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);const se=n.get(ae);if(ae.version!==se.__version||ee===!0){t.activeTexture(s.TEXTURE0+Z);const Ue=et.getPrimaries(et.workingColorSpace),Re=E.colorSpace===zn?null:et.getPrimaries(E.colorSpace),he=E.colorSpace===zn||Ue===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,Oe=E.image[0]&&E.image[0].isDataTexture,le=[];for(let V=0;V<6;V++)!de&&!Oe?le[V]=f(E.image[V],!1,!0,i.maxCubemapSize):le[V]=Oe?E.image[V].image:E.image[V],le[V]=Ge(E,le[V]);const ut=le[0],Xe=p(ut)||a,Te=r.convert(E.format,E.colorSpace),xe=r.convert(E.type),Ee=w(E.internalFormat,Te,xe,E.colorSpace),L=a&&E.isVideoTexture!==!0,ne=se.__version===void 0||ee===!0,Se=ae.dataReady;let D=C(E,ut,Xe);$(s.TEXTURE_CUBE_MAP,E,Xe);let ce;if(de){L&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,D,Ee,ut.width,ut.height);for(let V=0;V<6;V++){ce=le[V].mipmaps;for(let oe=0;oe<ce.length;oe++){const fe=ce[oe];E.format!==on?Te!==null?L?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,fe.width,fe.height,Te,xe,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,Ee,fe.width,fe.height,0,Te,xe,fe.data)}}}else{if(ce=E.mipmaps,L&&ne){ce.length>0&&D++;const V=nt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,D,Ee,V.width,V.height)}for(let V=0;V<6;V++)if(Oe){L?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,le[V].width,le[V].height,Te,xe,le[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ee,le[V].width,le[V].height,0,Te,xe,le[V].data);for(let oe=0;oe<ce.length;oe++){const je=ce[oe].image[V].image;L?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,je.width,je.height,Te,xe,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,Ee,je.width,je.height,0,Te,xe,je.data)}}else{L?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Te,xe,le[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ee,Te,xe,le[V]);for(let oe=0;oe<ce.length;oe++){const fe=ce[oe];L?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,Te,xe,fe.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,Ee,Te,xe,fe.image[V])}}}x(E,Xe)&&M(s.TEXTURE_CUBE_MAP),se.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function be(P,E,Z,ee,ae,se){const Ue=r.convert(Z.format,Z.colorSpace),Re=r.convert(Z.type),he=w(Z.internalFormat,Ue,Re,Z.colorSpace);if(!n.get(E).__hasExternalTextures){const Oe=Math.max(1,E.width>>se),le=Math.max(1,E.height>>se);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,se,he,Oe,le,E.depth,0,Ue,Re,null):t.texImage2D(ae,se,he,Oe,le,0,Ue,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ye(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ae,n.get(Z).__webglTexture,0,we(E)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ae,n.get(Z).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(P,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||Ye(E)){const ae=E.depthTexture;ae&&ae.isDepthTexture&&(ae.type===wn?ee=s.DEPTH_COMPONENT32F:ae.type===kn&&(ee=s.DEPTH_COMPONENT24));const se=we(E);Ye(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,ee,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,se,ee,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const ee=we(E);Z&&Ye(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,E.width,E.height):Ye(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ee=E.textures;for(let ae=0;ae<ee.length;ae++){const se=ee[ae],Ue=r.convert(se.format,se.colorSpace),Re=r.convert(se.type),he=w(se.internalFormat,Ue,Re,se.colorSpace),de=we(E);Z&&Ye(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,he,E.width,E.height):Ye(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,ae=we(E);if(E.depthTexture.format===pi)Ye(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Zi)Ye(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(P){const E=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");$e(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function H(P,E,Z){const ee=n.get(P);E!==void 0&&be(ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&De(P)}function St(P){const E=P.texture,Z=n.get(P),ee=n.get(E);P.addEventListener("dispose",j);const ae=P.textures,se=P.isWebGLCubeRenderTarget===!0,Ue=ae.length>1,Re=p(P)||a;if(Ue||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=E.version,o.memory.textures++),se){Z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[he]=[];for(let de=0;de<E.mipmaps.length;de++)Z.__webglFramebuffer[he][de]=s.createFramebuffer()}else Z.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Z.__webglFramebuffer[he]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ue)if(i.drawBuffers)for(let he=0,de=ae.length;he<de;he++){const Oe=n.get(ae[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ye(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const de=ae[he];Z.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[he]);const Oe=r.convert(de.format,de.colorSpace),le=r.convert(de.type),ut=w(de.internalFormat,Oe,le,de.colorSpace,P.isXRRenderTarget===!0),Xe=we(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Z.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),$(s.TEXTURE_CUBE_MAP,E,Re);for(let he=0;he<6;he++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)be(Z.__webglFramebuffer[he][de],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else be(Z.__webglFramebuffer[he],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(E,Re)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let he=0,de=ae.length;he<de;he++){const Oe=ae[he],le=n.get(Oe);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),$(s.TEXTURE_2D,Oe,Re),be(Z.__webglFramebuffer,P,Oe,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),x(Oe,Re)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?he=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ee.__webglTexture),$(he,E,Re),a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)be(Z.__webglFramebuffer[de],P,E,s.COLOR_ATTACHMENT0,he,de);else be(Z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,he,0);x(E,Re)&&M(he),t.unbindTexture()}P.depthBuffer&&De(P)}function Ce(P){const E=p(P)||a,Z=P.textures;for(let ee=0,ae=Z.length;ee<ae;ee++){const se=Z[ee];if(x(se,E)){const Ue=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(se).__webglTexture;t.bindTexture(Ue,Re),M(Ue),t.unbindTexture()}}}function Be(P){if(a&&P.samples>0&&Ye(P)===!1){const E=P.textures,Z=P.width,ee=P.height;let ae=s.COLOR_BUFFER_BIT;const se=[],Ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(P),he=E.length>1;if(he)for(let de=0;de<E.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let de=0;de<E.length;de++){se.push(s.COLOR_ATTACHMENT0+de),P.depthBuffer&&se.push(Ue);const Oe=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Oe===!1&&(P.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[de]),Oe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),he){const le=n.get(E[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ae,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let de=0;de<E.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,Re.__webglColorRenderbuffer[de]);const Oe=n.get(E[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function we(P){return Math.min(i.maxSamples,P.samples)}function Ye(P){const E=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(P){const E=o.render.frame;d.get(P)!==E&&(d.set(P,E),P.update())}function Ge(P,E){const Z=P.colorSpace,ee=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ro||Z!==$n&&Z!==zn&&(et.getTransfer(Z)===ot?a===!1?e.has("EXT_sRGB")===!0&&ee===on?(P.format=Ro,P.minFilter=Ht,P.generateMipmaps=!1):E=zl.sRGBToLinear(E):(ee!==on||ae!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=H,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function T_(s,e,t){const n=t.isWebGL2;function i(r,o=zn){let a;const c=et.getTransfer(o);if(r===Wn)return s.UNSIGNED_BYTE;if(r===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ll)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nd)return s.BYTE;if(r===id)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===Rl)return s.INT;if(r===kn)return s.UNSIGNED_INT;if(r===wn)return s.FLOAT;if(r===xs)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sd)return s.ALPHA;if(r===on)return s.RGBA;if(r===rd)return s.LUMINANCE;if(r===od)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===Zi)return s.DEPTH_STENCIL;if(r===Ro)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ad)return s.RED;if(r===Il)return s.RED_INTEGER;if(r===cd)return s.RG;if(r===Dl)return s.RG_INTEGER;if(r===Nl)return s.RGBA_INTEGER;if(r===Ur||r===Or||r===Fr||r===Br)if(c===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ba||r===Ta||r===Ca||r===Aa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ba)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Aa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ul)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wa||r===Ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wa)return c===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ra)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pa||r===La||r===Ia||r===Da||r===Na||r===Ua||r===Oa||r===Fa||r===Ba||r===za||r===ka||r===Ga||r===Ha||r===Va)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===La)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ia)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Da)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Na)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ua)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ba)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===za)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ka)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ga)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ha)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Va)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zr||r===Wa||r===Xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===zr)return c===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ld||r===qa||r===ja||r===Ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===zr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class C_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class er extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new er;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Xt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Yn({extensions:{fragDepth:!0},vertexShader:w_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Cr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class L_ extends _i{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null;const _=new P_,f=t.getContextAttributes();let p=null,v=null;const x=[],M=[],w=new Ie;let C=null;const b=new Qt;b.layers.enable(1),b.viewport=new At;const N=new Qt;N.layers.enable(2),N.viewport=new At;const j=[b,N],y=new C_;y.layers.enable(1),y.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=x[$];return re===void 0&&(re=new uo,x[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=x[$];return re===void 0&&(re=new uo,x[$]=re),re.getGripSpace()},this.getHand=function($){let re=x[$];return re===void 0&&(re=new uo,x[$]=re),re.getHandSpace()};function U($){const re=M.indexOf($.inputSource);if(re===-1)return;const pe=x[re];pe!==void 0&&(pe.update($.inputSource,$.frame,l||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function R(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",O);for(let $=0;$<x.length;$++){const re=M[$];re!==null&&(M[$]=null,x[$].disconnect(re))}A=null,q=null,_.reset(),e.setRenderTarget(p),m=null,u=null,d=null,i=null,v=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",R),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new gi(m.framebufferWidth,m.framebufferHeight,{format:on,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let re=null,pe=null,Pe=null;f.depth&&(Pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=f.stencil?Zi:pi,pe=f.stencil?fi:kn);const be={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new gi(u.textureWidth,u.textureHeight,{format:on,type:Wn,depthTexture:new Ql(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const ve=e.properties.get(v);ve.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O($){for(let re=0;re<$.removed.length;re++){const pe=$.removed[re],Pe=M.indexOf(pe);Pe>=0&&(M[Pe]=null,x[Pe].disconnect(pe))}for(let re=0;re<$.added.length;re++){const pe=$.added[re];let Pe=M.indexOf(pe);if(Pe===-1){for(let ve=0;ve<x.length;ve++)if(ve>=M.length){M.push(pe),Pe=ve;break}else if(M[ve]===null){M[ve]=pe,Pe=ve;break}if(Pe===-1)break}const be=x[Pe];be&&be.connect(pe)}}const I=new F,J=new F;function k($,re,pe){I.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const Pe=I.distanceTo(J),be=re.projectionMatrix.elements,ve=pe.projectionMatrix.elements,$e=be[14]/(be[10]-1),De=be[14]/(be[10]+1),H=(be[9]+1)/be[5],St=(be[9]-1)/be[5],Ce=(be[8]-1)/be[0],Be=(ve[8]+1)/ve[0],we=$e*Ce,Ye=$e*Be,ze=Pe/(-Ce+Be),Ge=ze*-Ce;re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const nt=$e+ze,P=De+ze,E=we-Ge,Z=Ye+(Pe-Ge),ee=H*De/P*nt,ae=St*De/P*nt;$.projectionMatrix.makePerspective(E,Z,ee,ae,nt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function X($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),y.near=N.near=b.near=$.near,y.far=N.far=b.far=$.far,(A!==y.near||q!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,q=y.far,b.near=A,b.far=q,N.near=A,N.far=q,b.updateProjectionMatrix(),N.updateProjectionMatrix(),$.updateProjectionMatrix());const re=$.parent,pe=y.cameras;X(y,re);for(let Pe=0;Pe<pe.length;Pe++)X(pe[Pe],re);pe.length===2?k(y,b,N):y.projectionMatrix.copy(b.projectionMatrix),Q($,y,re)};function Q($,re,pe){pe===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Po*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function te($,re){if(h=re.getViewerPose(l||o),g=re,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Pe=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,Pe=!0);for(let ve=0;ve<pe.length;ve++){const $e=pe[ve];let De=null;if(m!==null)De=m.getViewport($e);else{const St=d.getViewSubImage(u,$e);De=St.viewport,ve===0&&(e.setRenderTargetTextures(v,St.colorTexture,u.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(v))}let H=j[ve];H===void 0&&(H=new Qt,H.layers.enable(ve),H.viewport=new At,j[ve]=H),H.matrix.fromArray($e.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray($e.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(De.x,De.y,De.width,De.height),ve===0&&(y.matrix.copy(H.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Pe===!0&&y.cameras.push(H)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const ve=d.getDepthInformation(pe[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,i.renderState)}}for(let pe=0;pe<x.length;pe++){const Pe=M[pe],be=x[pe];Pe!==null&&be!==void 0&&be.update(Pe,re,l||o)}_.render(e,y),ie&&ie($,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ae=new Zl;Ae.setAnimationLoop(te),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}const si=new cn,I_=new ht;function D_(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Yl(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,v,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Wt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Wt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,M=v.envMapRotation;if(x&&(f.envMap.value=x,si.copy(M),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),f.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(si)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,v,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const v=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N_(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",f));const w=x.program;n.updateUBOMapping(v,w);const C=e.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){const x=d();v.__bindingPointIndex=x;const M=s.createBuffer(),w=v.__size,C=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],M=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,b=M.length;C<b;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let j=0,y=N.length;j<y;j++){const A=N[j];if(m(A,C,j,w)===!0){const q=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let R=0;for(let O=0;O<U.length;O++){const I=U[O],J=_(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,q+R,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,R),R+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,x,M,w){const C=v.value,b=x+"_"+M;if(w[b]===void 0)return typeof C=="number"||typeof C=="boolean"?w[b]=C:w[b]=C.clone(),!0;{const N=w[b];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return w[b]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(v){const x=v.uniforms;let M=0;const w=16;for(let b=0,N=x.length;b<N;b++){const j=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,A=j.length;y<A;y++){const q=j[y],U=Array.isArray(q.value)?q.value:[q.value];for(let R=0,O=U.length;R<O;R++){const I=U[R],J=_(I),k=M%w;k!==0&&w-k<J.boundary&&(M+=w-k),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=J.storage}}}const C=M%w;return C>0&&(M+=w-C),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function f(v){const x=v.target;x.removeEventListener("dispose",f);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class rh{constructor(e={}){const{canvas:t=Ed(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;const x=this;let M=!1,w=0,C=0,b=null,N=-1,j=null;const y=new At,A=new At;let q=null;const U=new Ze(0);let R=0,O=t.width,I=t.height,J=1,k=null,X=null;const Q=new At(0,0,O,I),ie=new At(0,0,O,I);let te=!1;const Ae=new Ko;let $=!1,re=!1,pe=null;const Pe=new ht,be=new Ie,ve=new F,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return b===null?J:1}let H=n;function St(T,B){for(let Y=0;Y<T.length;Y++){const K=T[Y],W=t.getContext(K,B);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ce,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),H=St(B,T),H===null)throw St(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Be,we,Ye,ze,Ge,nt,P,E,Z,ee,ae,se,Ue,Re,he,de,Oe,le,ut,Xe,Te,xe,Ee;function L(){Ce=new km(H),Be=new Nm(H,Ce,e),Ce.init(Be),Te=new T_(H,Ce,Be),we=new M_(H,Ce,Be),Ye=new Vm(H),ze=new l_,Ge=new b_(H,Ce,we,ze,Be,Te,Ye),nt=new Om(x),P=new zm(x),E=new Yd(H,Be),xe=new Im(H,Ce,E,Be),Z=new Gm(H,E,Ye,xe),ee=new jm(H,Z,E,Ye),le=new qm(H,Be,Ge),he=new Um(ze),ae=new c_(x,nt,P,Ce,Be,xe,he),se=new D_(x,ze),Ue=new u_,Re=new __(Ce,Be),Oe=new Lm(x,nt,P,we,ee,u,c),de=new E_(x,ee,Be),Ee=new N_(H,Ye,Be,we),ut=new Dm(H,Ce,Ye,Be),Xe=new Hm(H,Ce,Ye,Be),Ye.programs=ae.programs,x.capabilities=Be,x.extensions=Ce,x.properties=ze,x.renderLists=Ue,x.shadowMap=de,x.state=we,x.info=Ye}L();const ne=new L_(x,H);this.xr=ne,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(O,I,!1))},this.getSize=function(T){return T.set(O,I)},this.setSize=function(T,B,Y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,I=B,t.width=Math.floor(T*J),t.height=Math.floor(B*J),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(O*J,I*J).floor()},this.setDrawingBufferSize=function(T,B,Y){O=T,I=B,J=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,B,Y,K){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,B,Y,K),we.viewport(y.copy(Q).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,B,Y,K){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,B,Y,K),we.scissor(A.copy(ie).multiplyScalar(J).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){we.setScissorTest(te=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(T=!0,B=!0,Y=!0){let K=0;if(T){let W=!1;if(b!==null){const me=b.texture.format;W=me===Nl||me===Dl||me===Il}if(W){const me=b.texture.type,Me=me===Wn||me===kn||me===jo||me===fi||me===Pl||me===Ll,Le=Oe.getClearColor(),Ne=Oe.getClearAlpha(),qe=Le.r,Fe=Le.g,ke=Le.b;Me?(m[0]=qe,m[1]=Fe,m[2]=ke,m[3]=Ne,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=qe,g[1]=Fe,g[2]=ke,g[3]=Ne,H.clearBufferiv(H.COLOR,0,g))}else K|=H.COLOR_BUFFER_BIT}B&&(K|=H.DEPTH_BUFFER_BIT),Y&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ue.dispose(),Re.dispose(),ze.dispose(),nt.dispose(),P.dispose(),ee.dispose(),xe.dispose(),Ee.dispose(),ae.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",dt),ne.removeEventListener("sessionend",Ke),pe&&(pe.dispose(),pe=null),it.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ye.autoReset,B=de.enabled,Y=de.autoUpdate,K=de.needsUpdate,W=de.type;L(),Ye.autoReset=T,de.enabled=B,de.autoUpdate=Y,de.needsUpdate=K,de.type=W}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function V(T){const B=T.target;B.removeEventListener("dispose",V),oe(B)}function oe(T){fe(T),ze.remove(T)}function fe(T){const B=ze.get(T).programs;B!==void 0&&(B.forEach(function(Y){ae.releaseProgram(Y)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,K,W,me){B===null&&(B=$e);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Le=gu(T,B,Y,K,W);we.setMaterial(K,Me);let Ne=Y.index,qe=1;if(K.wireframe===!0){if(Ne=Z.getWireframeAttribute(Y),Ne===void 0)return;qe=2}const Fe=Y.drawRange,ke=Y.attributes.position;let gt=Fe.start*qe,qt=(Fe.start+Fe.count)*qe;me!==null&&(gt=Math.max(gt,me.start*qe),qt=Math.min(qt,(me.start+me.count)*qe)),Ne!==null?(gt=Math.max(gt,0),qt=Math.min(qt,Ne.count)):ke!=null&&(gt=Math.max(gt,0),qt=Math.min(qt,ke.count));const Tt=qt-gt;if(Tt<0||Tt===1/0)return;xe.setup(W,K,Le,Y,Ne);let gn,lt=ut;if(Ne!==null&&(gn=E.get(Ne),lt=Xe,lt.setIndex(gn)),W.isMesh)K.wireframe===!0?(we.setLineWidth(K.wireframeLinewidth*De()),lt.setMode(H.LINES)):lt.setMode(H.TRIANGLES);else if(W.isLine){let He=K.linewidth;He===void 0&&(He=1),we.setLineWidth(He*De()),W.isLineSegments?lt.setMode(H.LINES):W.isLineLoop?lt.setMode(H.LINE_LOOP):lt.setMode(H.LINE_STRIP)}else W.isPoints?lt.setMode(H.POINTS):W.isSprite&&lt.setMode(H.TRIANGLES);if(W.isBatchedMesh)lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)lt.renderInstances(gt,Tt,W.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pr=Math.min(Y.instanceCount,He);lt.renderInstances(gt,Tt,Pr)}else lt.render(gt,Tt)};function je(T,B,Y){T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,Is(T,B,Y),T.side=qn,T.needsUpdate=!0,Is(T,B,Y),T.side=An):Is(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),f=Re.get(Y),f.init(),v.push(f),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(x._useLegacyLights);const K=new Set;return T.traverse(function(W){const me=W.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const Le=me[Me];je(Le,Y,W),K.add(Le)}else je(me,Y,W),K.add(me)}),v.pop(),f=null,K},this.compileAsync=function(T,B,Y=null){const K=this.compile(T,B,Y);return new Promise(W=>{function me(){if(K.forEach(function(Me){ze.get(Me).currentProgram.isReady()&&K.delete(Me)}),K.size===0){W(T);return}setTimeout(me,10)}Ce.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Qe=null;function tt(T){Qe&&Qe(T)}function dt(){it.stop()}function Ke(){it.start()}const it=new Zl;it.setAnimationLoop(tt),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(T){Qe=T,ne.setAnimationLoop(T),T===null?it.stop():it.start()},ne.addEventListener("sessionstart",dt),ne.addEventListener("sessionend",Ke),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,b),f=Re.get(T,v.length),f.init(),v.push(f),Pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ae.setFromProjectionMatrix(Pe),re=this.localClippingEnabled,$=he.init(this.clippingPlanes,re),_=Ue.get(T,p.length),_.init(),p.push(_),Rt(T,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,X),this.info.render.frame++,$===!0&&he.beginShadows();const Y=f.state.shadowsArray;if(de.render(Y,T,B),$===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1)&&Oe.render(_,T),f.setupLights(x._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let W=0,me=K.length;W<me;W++){const Me=K[W];Kn(_,T,Me,Me.viewport)}}else Kn(_,T,B);b!==null&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,B),xe.resetDefaultState(),N=-1,j=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Rt(T,B,Y,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ae.intersectsSprite(T)){K&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);const Me=ee.update(T),Le=T.material;Le.visible&&_.push(T,Me,Le,Y,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ae.intersectsObject(T))){const Me=ee.update(T),Le=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ve.copy(Me.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(Le)){const Ne=Me.groups;for(let qe=0,Fe=Ne.length;qe<Fe;qe++){const ke=Ne[qe],gt=Le[ke.materialIndex];gt&&gt.visible&&_.push(T,Me,gt,Y,ve.z,ke)}}else Le.visible&&_.push(T,Me,Le,Y,ve.z,null)}}const me=T.children;for(let Me=0,Le=me.length;Me<Le;Me++)Rt(me[Me],B,Y,K)}function Kn(T,B,Y,K){const W=T.opaque,me=T.transmissive,Me=T.transparent;f.setupLightsView(Y),$===!0&&he.setGlobalState(x.clippingPlanes,Y),me.length>0&&Ps(W,me,B,Y),K&&we.viewport(y.copy(K)),W.length>0&&Ls(W,B,Y),me.length>0&&Ls(me,B,Y),Me.length>0&&Ls(Me,B,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ps(T,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const me=Be.isWebGL2;pe===null&&(pe=new gi(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?xs:Wn,minFilter:ui,samples:me?4:0})),x.getDrawingBufferSize(be),me?pe.setSize(be.x,be.y):pe.setSize(Lo(be.x),Lo(be.y));const Me=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(U),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Vn,Ls(T,Y,K),Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe);let Ne=!1;for(let qe=0,Fe=B.length;qe<Fe;qe++){const ke=B[qe],gt=ke.object,qt=ke.geometry,Tt=ke.material,gn=ke.group;if(Tt.side===An&&gt.layers.test(K.layers)){const lt=Tt.side;Tt.side=Wt,Tt.needsUpdate=!0,da(gt,Y,K,qt,Tt,gn),Tt.side=lt,Tt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe)),x.setRenderTarget(Me),x.setClearColor(U,R),x.toneMapping=Le}function Ls(T,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let W=0,me=T.length;W<me;W++){const Me=T[W],Le=Me.object,Ne=Me.geometry,qe=K===null?Me.material:K,Fe=Me.group;Le.layers.test(Y.layers)&&da(Le,B,Y,Ne,qe,Fe)}}function da(T,B,Y,K,W,me){T.onBeforeRender(x,B,Y,K,W,me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(x,B,Y,K,T,me),W.transparent===!0&&W.side===An&&W.forceSinglePass===!1?(W.side=Wt,W.needsUpdate=!0,x.renderBufferDirect(Y,B,K,W,T,me),W.side=qn,W.needsUpdate=!0,x.renderBufferDirect(Y,B,K,W,T,me),W.side=An):x.renderBufferDirect(Y,B,K,W,T,me),T.onAfterRender(x,B,Y,K,W,me)}function Is(T,B,Y){B.isScene!==!0&&(B=$e);const K=ze.get(T),W=f.state.lights,me=f.state.shadowsArray,Me=W.state.version,Le=ae.getParameters(T,W.state,me,B,Y),Ne=ae.getProgramCacheKey(Le);let qe=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?P:nt).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",V),qe=new Map,K.programs=qe);let Fe=qe.get(Ne);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===Me)return pa(T,Le),Fe}else Le.uniforms=ae.getUniforms(T),T.onBuild(Y,Le,x),T.onBeforeCompile(Le,x),Fe=ae.acquireProgram(Le,Ne),qe.set(Ne,Fe),K.uniforms=Le.uniforms;const ke=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=he.uniform),pa(T,Le),K.needsLights=vu(T),K.lightsStateVersion=Me,K.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function fa(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function pa(T,B){const Y=ze.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function gu(T,B,Y,K,W){B.isScene!==!0&&(B=$e),Ge.resetTextureUnits();const me=B.fog,Me=K.isMeshStandardMaterial?B.environment:null,Le=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$n,Ne=(K.isMeshStandardMaterial?P:nt).get(K.envMap||Me),qe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,qt=!!Y.morphAttributes.color;let Tt=Vn;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=gn!==void 0?gn.length:0,He=ze.get(K),Pr=f.state.lights;if($===!0&&(re===!0||T!==j)){const Zt=T===j&&K.id===N;he.setState(K,T,Zt)}let ct=!1;K.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Pr.state.version||He.outputColorSpace!==Le||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ne||K.fog===!0&&He.fog!==me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Fe||He.morphTargets!==ke||He.morphNormals!==gt||He.morphColors!==qt||He.toneMapping!==Tt||Be.isWebGL2===!0&&He.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,He.__version=K.version);let Zn=He.currentProgram;ct===!0&&(Zn=Is(K,B,W));let ma=!1,is=!1,Lr=!1;const Pt=Zn.getUniforms(),Jn=He.uniforms;if(we.useProgram(Zn.program)&&(ma=!0,is=!0,Lr=!0),K.id!==N&&(N=K.id,is=!0),ma||j!==T){Pt.setValue(H,"projectionMatrix",T.projectionMatrix),Pt.setValue(H,"viewMatrix",T.matrixWorldInverse);const Zt=Pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(H,ve.setFromMatrixPosition(T.matrixWorld)),Be.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,is=!0,Lr=!0)}if(W.isSkinnedMesh){Pt.setOptional(H,W,"bindMatrix"),Pt.setOptional(H,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(Be.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Zt.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Pt.setOptional(H,W,"batchingTexture"),Pt.setValue(H,"batchingTexture",W._matricesTexture,Ge));const Ir=Y.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&Be.isWebGL2===!0)&&le.update(W,Y,Zn),(is||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Pt.setValue(H,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Jn.envMap.value=Ne,Jn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),is&&(Pt.setValue(H,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&_u(Jn,Lr),me&&K.fog===!0&&se.refreshFogUniforms(Jn,me),se.refreshMaterialUniforms(Jn,K,J,I,pe),cr.upload(H,fa(He),Jn,Ge)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(cr.upload(H,fa(He),Jn,Ge),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pt.setValue(H,"center",W.center),Pt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(H,"normalMatrix",W.normalMatrix),Pt.setValue(H,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Zt=K.uniformsGroups;for(let Dr=0,xu=Zt.length;Dr<xu;Dr++)if(Be.isWebGL2){const ga=Zt[Dr];Ee.update(ga,Zn),Ee.bind(ga,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function _u(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function vu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,Y){ze.get(T.texture).__webglTexture=B,ze.get(T.depthTexture).__webglTexture=Y;const K=ze.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Y=ze.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Y=0){b=T,w=B,C=Y;let K=!0,W=null,me=!1,Me=!1;if(T){const Ne=ze.get(T);Ne.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):Ne.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):Ne.__hasExternalTextures&&Ge.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Me=!0);const Fe=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?W=Fe[B][Y]:W=Fe[B],me=!0):Be.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?W=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[Y]:W=Fe,y.copy(T.viewport),A.copy(T.scissor),q=T.scissorTest}else y.copy(Q).multiplyScalar(J).floor(),A.copy(ie).multiplyScalar(J).floor(),q=te;if(we.bindFramebuffer(H.FRAMEBUFFER,W)&&Be.drawBuffers&&K&&we.drawBuffers(T,W),we.viewport(y),we.scissor(A),we.setScissorTest(q),me){const Ne=ze.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,Y)}else if(Me){const Ne=ze.get(T.texture),qe=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,Y||0,qe)}N=-1},this.readRenderTargetPixels=function(T,B,Y,K,W,me,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){we.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Ne=T.texture,qe=Ne.format,Fe=Ne.type;if(qe!==on&&Te.convert(qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===xs&&(Ce.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Fe!==Wn&&Te.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===wn&&(Be.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&Y>=0&&Y<=T.height-W&&H.readPixels(B,Y,K,W,Te.convert(qe),Te.convert(Fe),me)}finally{const Ne=b!==null?ze.get(b).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,B,Y=0){const K=Math.pow(2,-Y),W=Math.floor(B.image.width*K),me=Math.floor(B.image.height*K);Ge.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,T.x,T.y,W,me),we.unbindTexture()},this.copyTextureToTexture=function(T,B,Y,K=0){const W=B.image.width,me=B.image.height,Me=Te.convert(Y.format),Le=Te.convert(Y.type);Ge.setTexture2D(Y,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,T.x,T.y,W,me,Me,Le,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,T.x,T.y,Me,Le,B.image),K===0&&Y.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Y,K,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=Math.round(T.max.x-T.min.x),Me=Math.round(T.max.y-T.min.y),Le=T.max.z-T.min.z+1,Ne=Te.convert(K.format),qe=Te.convert(K.type);let Fe;if(K.isData3DTexture)Ge.setTexture3D(K,0),Fe=H.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)Ge.setTexture2DArray(K,0),Fe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const ke=H.getParameter(H.UNPACK_ROW_LENGTH),gt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qt=H.getParameter(H.UNPACK_SKIP_PIXELS),Tt=H.getParameter(H.UNPACK_SKIP_ROWS),gn=H.getParameter(H.UNPACK_SKIP_IMAGES),lt=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,lt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Fe,W,B.x,B.y,B.z,me,Me,Le,Ne,qe,lt.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Fe,W,B.x,B.y,B.z,me,Me,Le,Ne,lt.data):H.texSubImage3D(Fe,W,B.x,B.y,B.z,me,Me,Le,Ne,qe,lt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gn),W===0&&K.generateMipmaps&&H.generateMipmap(Fe),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){w=0,C=0,b=null,we.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yo?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Tr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class U_ extends rh{}U_.prototype.isWebGL1Renderer=!0;class Jo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new Jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O_ extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class di extends Pn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],m=[];let g=0;const _=[],f=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(m,2));function v(){const M=new F,w=new F;let C=0;const b=(t-e)/n;for(let N=0;N<=r;N++){const j=[],y=N/r,A=y*(t-e)+e;for(let q=0;q<=i;q++){const U=q/i,R=U*c+a,O=Math.sin(R),I=Math.cos(R);w.x=A*O,w.y=-y*n+f,w.z=A*I,d.push(w.x,w.y,w.z),M.set(O,b,I).normalize(),u.push(M.x,M.y,M.z),m.push(U,1-y),j.push(g++)}_.push(j)}for(let N=0;N<i;N++)for(let j=0;j<r;j++){const y=_[j][N],A=_[j+1][N],q=_[j+1][N+1],U=_[j][N+1];h.push(y,A,U),h.push(A,q,U),C+=6}l.addGroup(p,C,0),p+=C}function x(M){const w=g,C=new Ie,b=new F;let N=0;const j=M===!0?e:t,y=M===!0?1:-1;for(let q=1;q<=i;q++)d.push(0,f*y,0),u.push(0,y,0),m.push(.5,.5),g++;const A=g;for(let q=0;q<=i;q++){const R=q/i*c+a,O=Math.cos(R),I=Math.sin(R);b.x=j*I,b.y=f*y,b.z=j*O,d.push(b.x,b.y,b.z),u.push(0,y,0),C.x=O*.5+.5,C.y=I*.5*y+.5,m.push(C.x,C.y),g++}for(let q=0;q<i;q++){const U=w+q,R=A+q;M===!0?h.push(R,R+1,U):h.push(R+1,R,U),N+=3}l.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class As extends Pn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new F,u=new F,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const C=w/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),f.push(C+M,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],M=h[p][v],w=h[p+1][v],C=h[p+1][v+1];(p!==0||o>0)&&m.push(x,M,C),(p!==n-1||c<Math.PI)&&m.push(M,w,C)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wr extends Cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fo=new ht,zc=new F,kc=new F;class F_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B_ extends F_{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z_ extends oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new B_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k_ extends oh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class G_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gc(){return(typeof performance>"u"?Date:performance).now()}class Hc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);class an{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new S);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new S);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new an);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],_=i[0],f=i[1],p=i[2],v=i[3],x=i[4],M=i[5],w=i[6],C=i[7],b=i[8];return r[0]=o*_+a*v+c*w,r[1]=o*f+a*x+c*C,r[2]=o*p+a*M+c*b,r[3]=l*_+h*v+d*w,r[4]=l*f+h*x+d*C,r[5]=l*p+h*M+d*b,r[6]=u*_+m*v+g*w,r[7]=u*f+m*x+g*C,r[8]=u*p+m*M+g*b,t}scale(e,t){t===void 0&&(t=new an);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new S);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){const m=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*m;while(--h)}}while(--c);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new an);const t=3,n=6,i=H_;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=h;do d=h-l,i[d+n*r]+=i[d+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){const u=i[r+n*o]/i[r+n*r];l=h;do d=h-l,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];l=n;do d=n-l,i[d+n*r]=i[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,c=i+i,l=t*o,h=t*a,d=t*c,u=n*a,m=n*c,g=i*c,_=r*o,f=r*a,p=r*c,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-p,v[3*0+2]=d+f,v[3*1+0]=h+p,v[3*1+1]=1-(l+g),v[3*1+2]=m-_,v[3*2+0]=d-f,v[3*2+1]=m+_,v[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new an);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const H_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*r-c*i,t.y=c*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new an([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new S);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new S);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new S),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new S),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new S),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=V_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=W_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Vc),Vc.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const V_=new S,W_=new S,Vc=new S;class Kt{constructor(e){e===void 0&&(e={}),this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,Wc),l=Wc),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Kt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=Xc,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Xc,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const Wc=new S,Xc=[new S,new S,new S,new S,new S,new S,new S,new S];class qc{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ah{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class yt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new S),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=X_,i=q_;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new yt);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+i*l-r*c,t.y=i*h+o*c+r*a-n*l,t.z=r*h+o*l+n*c-i*a,t.w=o*h-n*a-i*c-r*l,t}inverse(e){e===void 0&&(e=new yt);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new yt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,m=-o*n-a*i-c*r;return t.x=h*l+m*-o+d*-c-u*-a,t.y=d*l+m*-a+u*-o-h*-c,t.z=u*l+m*-c+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,m=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*m),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new yt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new yt);const i=this.x,r=this.y,o=this.z,a=this.w;let c=e.x,l=e.y,h=e.z,d=e.w,u,m,g,_,f;return m=i*c+r*l+o*h+a*d,m<0&&(m=-m,c=-c,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),_=Math.sin((1-t)*u)/g,f=Math.sin(t*u)/g):(_=1-t,f=t),n.x=_*i+f*c,n.y=_*r+f*l,n.z=_*o+f*h,n.w=_*a+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new yt);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}}const X_=new S,q_=new S,j_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ge{constructor(e){e===void 0&&(e={}),this.id=ge.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ge.idCounter=0;ge.types=j_;class Je{constructor(e){e===void 0&&(e={}),this.position=new S,this.quaternion=new yt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),n.vsub(e,i),t.conjugate(jc),jc.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new S),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new S),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const jc=new yt;class ji extends ge{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:ge.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;t[o[c]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];ji.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new S,o=new S;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,c,l){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],f=new S;f.copy(_),r.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,e,t,m,a,c,l)}findSeparatingAxis(e,t,n,i,r,o,a,c){const l=new S,h=new S,d=new S,u=new S,m=new S,g=new S;let _=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let p=0;p!==f.uniqueAxes.length;p++){n.vmult(f.uniqueAxes[p],l);const v=f.testSepAxis(l,e,t,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(l))}else{const p=a?a.length:f.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;l.copy(f.faceNormals[x]),n.vmult(l,l);const M=f.testSepAxis(l,e,t,n,i,r);if(M===!1)return!1;M<_&&(_=M,o.copy(l))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],h);const v=f.testSepAxis(h,e,t,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=c?c.length:e.faces.length;for(let v=0;v<p;v++){const x=c?c[v]:v;h.copy(e.faceNormals[x]),r.vmult(h,h);const M=f.testSepAxis(h,e,t,n,i,r);if(M===!1)return!1;M<_&&(_=M,o.copy(h))}}for(let p=0;p!==f.uniqueEdges.length;p++){n.vmult(f.uniqueEdges[p],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=f.testSepAxis(g,e,t,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;ji.project(a,e,n,i,po),ji.project(t,e,r,o,mo);const c=po[0],l=po[1],h=mo[0],d=mo[1];if(c<d||h<l)return!1;const u=c-d,m=h-l;return u<m?u:m}calculateLocalInertia(e,t){const n=new S,i=new S;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const c=new S,l=new S,h=new S,d=new S,u=new S,m=new S,g=new S,_=new S,f=this,p=[],v=i,x=p;let M=-1,w=Number.MAX_VALUE;for(let y=0;y<f.faces.length;y++){c.copy(f.faceNormals[y]),n.vmult(c,c);const A=c.dot(e);A<w&&(w=A,M=y)}if(M<0)return;const C=f.faces[M];C.connectedFaces=[];for(let y=0;y<f.faces.length;y++)for(let A=0;A<f.faces[y].length;A++)C.indexOf(f.faces[y][A])!==-1&&y!==M&&C.connectedFaces.indexOf(y)===-1&&C.connectedFaces.push(y);const b=C.length;for(let y=0;y<b;y++){const A=f.vertices[C[y]],q=f.vertices[C[(y+1)%b]];A.vsub(q,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(A),n.vmult(m,m),t.vadd(m,m);const U=C.connectedFaces[y];g.copy(this.faceNormals[U]);const R=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const O=R-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,O);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[M]);const N=this.getPlaneConstantOfFace(M);_.copy(g),n.vmult(_,_);const j=N-_.dot(t);for(let y=0;y<v.length;y++){let A=_.dot(v[y])+j;if(A<=r&&(console.log(`clamped: depth=${A} to minDist=${r}`),A=r),A<=o){const q=v[y];if(A<=1e-6){const U={point:q,normal:_,depth:A};a.push(U)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];r=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],o=n.dot(l)+i,r<0)if(o<0){const d=new S;d.copy(l),t.push(d)}else{const d=new S;c.lerp(l,r/(r-o),d),t.push(d)}else if(o<0){const d=new S;c.lerp(l,r/(r-o),d),t.push(d),t.push(l)}c=l,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,c,l,h,d,u=new S;for(let m=0;m<r.length;m++){u.copy(r[m]),t.vmult(u,u),e.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new S);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=new S;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=t[n[o][0]],l=new S;e.vsub(c,l);const h=a.dot(l),d=new S;r.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,n,i,r){const o=e.vertices.length,a=Y_;let c=0,l=0;const h=$_,d=e.vertices;h.setZero(),Je.vectorToLocalFrame(n,i,t,a),Je.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let m=1;m<o;m++){const g=d[m].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const m=l;l=c,c=m}r[0]=c,r[1]=l}}const po=[],mo=[];new S;const Y_=new S,$_=new S;class ys extends ge{constructor(e){super({type:ge.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=S,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ji({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new S),ys.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Fn.set(r[o][0],r[o][1],r[o][2]),t.vmult(Fn,Fn),e.vadd(Fn,Fn),n(Fn.x,Fn.y,Fn.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;ln[0].set(r.x,r.y,r.z),ln[1].set(-r.x,r.y,r.z),ln[2].set(-r.x,-r.y,r.z),ln[3].set(-r.x,-r.y,-r.z),ln[4].set(r.x,-r.y,-r.z),ln[5].set(r.x,r.y,-r.z),ln[6].set(-r.x,r.y,-r.z),ln[7].set(r.x,-r.y,r.z);const o=ln[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=ln[a];t.vmult(c,c),e.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Fn=new S,ln=[new S,new S,new S,new S,new S,new S,new S,new S],Qo={DYNAMIC:1,STATIC:2,KINEMATIC:4},ea={AWAKE:0,SLEEPY:1,SLEEPING:2};class _e extends ah{constructor(e){e===void 0&&(e={}),super(),this.id=_e.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?_e.STATIC:_e.DYNAMIC,typeof e.type==typeof _e.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=_e.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new yt,this.initQuaternion=new yt,this.previousQuaternion=new yt,this.interpolatedQuaternion=new yt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new an,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new an,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Kt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=_e.AWAKE,this.wakeUpAfterNarrowphase=!1,e===_e.SLEEPING&&this.dispatchEvent(_e.wakeupEvent)}sleep(){this.sleepState=_e.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===_e.AWAKE&&n<i?(this.sleepState=_e.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(_e.sleepyEvent)):t===_e.SLEEPY&&n>i?this.wakeUp():t===_e.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(_e.sleepEvent))}}updateSolveMassProperties(){this.sleepState===_e.SLEEPING||this.type===_e.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new S),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new S),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new S,r=new yt;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=K_,o=Z_,a=this.quaternion,c=this.aabb,l=J_;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Q_,i=e0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new S),this.type!==_e.DYNAMIC)return;this.sleepState===_e.SLEEPING&&this.wakeUp();const n=t0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new S),this.type!==_e.DYNAMIC)return;const n=n0,i=i0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===_e.DYNAMIC&&(this.sleepState===_e.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new S),this.type!==_e.DYNAMIC)return;this.sleepState===_e.SLEEPING&&this.wakeUp();const n=t,i=s0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=r0;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new S),this.type!==_e.DYNAMIC)return;const n=o0,i=a0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=c0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ys.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new S;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===_e.DYNAMIC||this.type===_e.KINEMATIC)||this.sleepState===_e.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*e;i.x+=a.x*m*u.x,i.y+=a.y*m*u.y,i.z+=a.z*m*u.z;const g=d.elements,_=this.angularFactor,f=c.x*_.x,p=c.y*_.y,v=c.z*_.z;r.x+=e*(g[0]*f+g[1]*p+g[2]*v),r.y+=e*(g[3]*f+g[4]*p+g[5]*v),r.z+=e*(g[6]*f+g[7]*p+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}_e.idCounter=0;_e.COLLIDE_EVENT_NAME="collide";_e.DYNAMIC=Qo.DYNAMIC;_e.STATIC=Qo.STATIC;_e.KINEMATIC=Qo.KINEMATIC;_e.AWAKE=ea.AWAKE;_e.SLEEPY=ea.SLEEPY;_e.SLEEPING=ea.SLEEPING;_e.wakeupEvent={type:"wakeup"};_e.sleepyEvent={type:"sleepy"};_e.sleepEvent={type:"sleep"};const K_=new S,Z_=new yt,J_=new Kt,Q_=new an,e0=new an;new an;const t0=new S,n0=new S,i0=new S,s0=new S,r0=new S,o0=new S,a0=new S,c0=new S;class ch{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&_e.STATIC||e.sleepState===_e.SLEEPING)&&(t.type&_e.STATIC||t.sleepState===_e.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=l0;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=h0,i=u0,r=d0,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(r[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new S;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const l0=new S;new S;new yt;new S;const h0={keys:[]},u0=[],d0=[];new S;new S;new S;class f0 extends ch{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Ss{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let lh,hh,uh,dh,fh,ph,mh;const ta={CLOSEST:1,ANY:2,ALL:4};lh=ge.types.SPHERE;hh=ge.types.PLANE;uh=ge.types.BOX;dh=ge.types.CYLINDER;fh=ge.types.CONVEXPOLYHEDRON;ph=ge.types.HEIGHTFIELD;mh=ge.types.TRIMESH;class pt{get[lh](){return this._intersectSphere}get[hh](){return this._intersectPlane}get[uh](){return this._intersectBox}get[dh](){return this._intersectConvex}get[fh](){return this._intersectConvex}get[ph](){return this._intersectHeightfield}get[mh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=pt.ANY,this.result=new Ss,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||pt.ANY,this.result=t.result||new Ss,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Yc),go.length=0,e.broadphase.aabbQuery(e,Yc,go),this.intersectBodies(go),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=p0,r=m0;for(let o=0,a=e.shapes.length;o<a;o++){const c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(R0(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,c=this.direction,l=new S(0,0,1);t.vmult(l,l);const h=new S;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const m=l.dot(c);if(Math.abs(m)<this.precision)return;const g=new S,_=new S,f=new S;o.vsub(n,g);const p=-l.dot(g)/m;c.scale(p,_),o.vadd(_,f),this.reportIntersection(l,f,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=g0;o.from.copy(this.from),o.to.copy(this.to),Je.pointToLocalFrame(n,t,o.from,o.from),Je.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=_0;let c,l,h,d;c=l=0,h=d=e.data.length-1;const u=new Kt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let m=c;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),Je.pointToWorldFrame(n,t,e.pillarOffset,tr),this._intersectConvex(e.pillarConvex,t,tr,i,r,$c),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Je.pointToWorldFrame(n,t,e.pillarOffset,tr),this._intersectConvex(e.pillarConvex,t,tr,i,r,$c)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,m=v0,g=x0;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1);else{const _=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(_>=0&&_<=1&&(o.lerp(a,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=y0,c=Kc,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,m=this.direction,g=this.from,_=this.to,f=g.distanceTo(_),p=l?l.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const M=l?l[x]:x,w=h[M],C=u[M],b=t,N=n;c.copy(d[w[0]]),b.vmult(c,c),c.vadd(N,c),c.vsub(g,c),b.vmult(C,a);const j=m.dot(a);if(Math.abs(j)<this.precision)continue;const y=a.dot(c)/j;if(!(y<0)){m.scale(y,kt),kt.vadd(g,kt),sn.copy(d[w[0]]),b.vmult(sn,sn),N.vadd(sn,sn);for(let A=1;!v.shouldStop&&A<w.length-1;A++){hn.copy(d[w[A]]),un.copy(d[w[A+1]]),b.vmult(hn,hn),b.vmult(un,un),N.vadd(hn,hn),N.vadd(un,un);const q=kt.distanceTo(g);!(pt.pointInTriangle(kt,sn,hn,un)||pt.pointInTriangle(kt,hn,sn,un))||q>f||this.reportIntersection(a,kt,r,i,M)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=S0,c=A0,l=w0,h=Kc,d=E0,u=M0,m=b0,g=C0,_=T0,f=e.indices;e.vertices;const p=this.from,v=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(t),Je.vectorToLocalFrame(n,t,x,d),Je.pointToLocalFrame(n,t,p,u),Je.pointToLocalFrame(n,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);e.tree.rayQuery(this,l,c);for(let w=0,C=c.length;!this.result.shouldStop&&w!==C;w++){const b=c[w];e.getNormal(b,a),e.getVertex(f[b*3],sn),sn.vsub(u,h);const N=d.dot(a),j=a.dot(h)/N;if(j<0)continue;d.scale(j,kt),kt.vadd(u,kt),e.getVertex(f[b*3+1],hn),e.getVertex(f[b*3+2],un);const y=kt.distanceSquared(u);!(pt.pointInTriangle(kt,hn,sn,un)||pt.pointInTriangle(kt,sn,hn,un))||y>M||(Je.vectorToWorldFrame(t,a,_),Je.pointToWorldFrame(n,t,kt,g),this.reportIntersection(_,g,r,i,b))}c.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case pt.ALL:this.hasHit=!0,l.set(o,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case pt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c));break;case pt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,li),n.vsub(t,us),e.vsub(t,_o);const r=li.dot(li),o=li.dot(us),a=li.dot(_o),c=us.dot(us),l=us.dot(_o);let h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}}pt.CLOSEST=ta.CLOSEST;pt.ANY=ta.ANY;pt.ALL=ta.ALL;const Yc=new Kt,go=[],us=new S,_o=new S,p0=new S,m0=new yt,kt=new S,sn=new S,hn=new S,un=new S;new S;new Ss;const $c={faceList:[0]},tr=new S,g0=new pt,_0=[],v0=new S,x0=new S,y0=new S;new S;new S;const Kc=new S,S0=new S,E0=new S,M0=new S,b0=new S,T0=new S,C0=new S;new Kt;const A0=[],w0=new Je,li=new S,nr=new S;function R0(s,e,t){t.vsub(s,li);const n=li.dot(e);return e.scale(n,nr),nr.vadd(s,nr),t.distanceTo(nr)}class Wi extends ch{static checkBounds(e,t,n){let i,r;n===0?(i=e.position.x,r=t.position.x):n===1?(i=e.position.y,r=t.position.y):n===2&&(i=e.position.z,r=t.position.z);const o=e.boundingRadius,a=t.boundingRadius,c=i+o;return r-a<c}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const l=i[a];for(c=a+1;c<r;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!Wi.checkBounds(l,h,o))break;this.intersectionTest(l,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const r=e[i];r.aabbNeedsUpdate&&r.updateAABB()}t===0?Wi.insertionSortX(e):t===1?Wi.insertionSortY(e):t===2&&Wi.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,r=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let m=0;m!==c;m++){const g=a[m],_=g.position.x;e+=_,t+=_*_;const f=g.position.y;n+=f,i+=f*f;const p=g.position.z;r+=p,o+=p*p}const h=t-e*e*l,d=i-n*n*l,u=o-r*r*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(t)&&n.push(c)}return n}}class P0{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Zc{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ws{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ws.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Zc,this.jacobianElementB=new Zc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,Jc),a.scale(h,Qc),n.invInertiaWorldSolve.vmult(o,el),i.invInertiaWorldSolve.vmult(c,tl),e.multiplyVectors(Jc,el)+t.multiplyVectors(Qc,tl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=r+o;return a.vmult(e.rotational,ir),l+=ir.dot(e.rotational),c.vmult(t.rotational,ir),l+=ir.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=L0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ws.idCounter=0;const Jc=new S,Qc=new S,el=new S,tl=new S,ir=new S,L0=new S;class I0 extends ws{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=D0,l=N0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,m=r.angularVelocity;r.force,r.torque;const g=U0,_=this.jacobianElementA,f=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(_.spatial),c.negate(_.rotational),f.spatial.copy(p),f.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),x=this.restitution+1,M=x*u.dot(p)-x*h.dot(p)+m.dot(l)-d.dot(c),w=this.computeGiMf();return-v*t-M*n-e*w}getImpactVelocityAlongNormal(){const e=O0,t=F0,n=B0,i=z0,r=k0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const D0=new S,N0=new S,U0=new S,O0=new S,F0=new S,B0=new S,z0=new S,k0=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class nl extends ws{constructor(e,t,n){super(e,t,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=G0,o=H0,a=this.t;n.cross(a,r),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const G0=new S,H0=new S;class Rs{constructor(e,t,n){n=P0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Rs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Rs.idCounter=0;class ns{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ns.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ns.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new pt;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class gh extends ge{constructor(e){if(super({type:ge.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new S);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=e[c]-r,i[c]=e[c]+r}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class V0 extends ji{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new S(-t*u(0),-n*.5,t*d(0))),l.push(0),o.push(new S(-e*u(0),n*.5,e*d(0))),h.push(1);for(let g=0;g<r;g++){const _=2*Math.PI/r*(g+1),f=2*Math.PI/r*(g+.5);g<r-1?(o.push(new S(-t*u(_),-n*.5,t*d(_))),l.push(2*g+2),o.push(new S(-e*u(_),n*.5,e*d(_))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new S(-u(f),0,d(f)))}c.push(l),a.push(new S(0,1,0));const m=[];for(let g=0;g<h.length;g++)m.push(h[h.length-g-1]);c.push(m),super({vertices:o,faces:c,axes:a}),this.type=ge.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Kt;new S;new Kt;new S;new S;new S;new S;new S;new S;new S;new Kt;new S;new Je;new Kt;class W0{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class X0 extends W0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=t.bodies,l=c.length,h=e;let d,u,m,g,_,f;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const p=j0,v=Y0,x=q0;p.length=a,v.length=a,x.length=a;for(let M=0;M!==a;M++){const w=o[M];x[M]=0,v[M]=w.computeB(h),p[M]=1/w.computeC()}if(a!==0){for(let C=0;C!==l;C++){const b=c[C],N=b.vlambda,j=b.wlambda;N.set(0,0,0),j.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==a;C++){const b=o[C];d=v[C],u=p[C],f=x[C],_=b.computeGWlambda(),m=u*(d-_-b.eps*f),f+m<b.minForce?m=b.minForce-f:f+m>b.maxForce&&(m=b.maxForce-f),x[C]+=m,g+=m>0?m:-m,b.addToWlambda(m)}if(g*g<r)break}for(let C=0;C!==l;C++){const b=c[C],N=b.velocity,j=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),N.vadd(b.vlambda,N),b.wlambda.vmul(b.angularFactor,b.wlambda),j.vadd(b.wlambda,j)}let M=o.length;const w=1/h;for(;M--;)o[M].multiplier=x[M]*w}return n}}const q0=[],j0=[],Y0=[];class $0{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class K0 extends $0{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const st={sphereSphere:ge.types.SPHERE,spherePlane:ge.types.SPHERE|ge.types.PLANE,boxBox:ge.types.BOX|ge.types.BOX,sphereBox:ge.types.SPHERE|ge.types.BOX,planeBox:ge.types.PLANE|ge.types.BOX,convexConvex:ge.types.CONVEXPOLYHEDRON,sphereConvex:ge.types.SPHERE|ge.types.CONVEXPOLYHEDRON,planeConvex:ge.types.PLANE|ge.types.CONVEXPOLYHEDRON,boxConvex:ge.types.BOX|ge.types.CONVEXPOLYHEDRON,sphereHeightfield:ge.types.SPHERE|ge.types.HEIGHTFIELD,boxHeightfield:ge.types.BOX|ge.types.HEIGHTFIELD,convexHeightfield:ge.types.CONVEXPOLYHEDRON|ge.types.HEIGHTFIELD,sphereParticle:ge.types.PARTICLE|ge.types.SPHERE,planeParticle:ge.types.PLANE|ge.types.PARTICLE,boxParticle:ge.types.BOX|ge.types.PARTICLE,convexParticle:ge.types.PARTICLE|ge.types.CONVEXPOLYHEDRON,cylinderCylinder:ge.types.CYLINDER,sphereCylinder:ge.types.SPHERE|ge.types.CYLINDER,planeCylinder:ge.types.PLANE|ge.types.CYLINDER,boxCylinder:ge.types.BOX|ge.types.CYLINDER,convexCylinder:ge.types.CONVEXPOLYHEDRON|ge.types.CYLINDER,heightfieldCylinder:ge.types.HEIGHTFIELD|ge.types.CYLINDER,particleCylinder:ge.types.PARTICLE|ge.types.CYLINDER,sphereTrimesh:ge.types.SPHERE|ge.types.TRIMESH,planeTrimesh:ge.types.PLANE|ge.types.TRIMESH};class Z0{get[st.sphereSphere](){return this.sphereSphere}get[st.spherePlane](){return this.spherePlane}get[st.boxBox](){return this.boxBox}get[st.sphereBox](){return this.sphereBox}get[st.planeBox](){return this.planeBox}get[st.convexConvex](){return this.convexConvex}get[st.sphereConvex](){return this.sphereConvex}get[st.planeConvex](){return this.planeConvex}get[st.boxConvex](){return this.boxConvex}get[st.sphereHeightfield](){return this.sphereHeightfield}get[st.boxHeightfield](){return this.boxHeightfield}get[st.convexHeightfield](){return this.convexHeightfield}get[st.sphereParticle](){return this.sphereParticle}get[st.planeParticle](){return this.planeParticle}get[st.boxParticle](){return this.boxParticle}get[st.convexParticle](){return this.convexParticle}get[st.cylinderCylinder](){return this.convexConvex}get[st.sphereCylinder](){return this.sphereConvex}get[st.planeCylinder](){return this.planeConvex}get[st.boxCylinder](){return this.boxConvex}get[st.convexCylinder](){return this.convexConvex}get[st.heightfieldCylinder](){return this.heightfieldCylinder}get[st.particleCylinder](){return this.particleCylinder}get[st.sphereTrimesh](){return this.sphereTrimesh}get[st.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new K0,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new I0(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new nl(n,i,u*m),f=g.length?g.pop():new nl(n,i,u*m);return _.bi=f.bi=n,_.bj=f.bj=i,_.minForce=f.minForce=-u*m,_.maxForce=f.maxForce=u*m,_.ri.copy(e.ri),_.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(_.t,f.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=f.enabled=e.enabled,t.push(_,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ri.setZero(),zi.setZero(),ki.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(ri.vadd(t.ni,ri),zi.vadd(t.ri,zi),ki.vadd(t.rj,ki)):(ri.vsub(t.ni,ri),zi.vadd(t.rj,zi),ki.vadd(t.ri,ki));const o=1/e;zi.scale(o,n.ri),ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ri.normalize(),ri.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=ev,l=tv,h=J0,d=Q0;for(let u=0,m=e.length;u!==m;u++){const g=e[u],_=t[u];let f=null;g.material&&_.material&&(f=n.getContactMaterial(g.material,_.material)||null);const p=g.type&_e.KINEMATIC&&_.type&_e.STATIC||g.type&_e.STATIC&&_.type&_e.KINEMATIC||g.type&_e.KINEMATIC&&_.type&_e.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],l),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const w=_.shapes[M];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let C=null;x.material&&w.material&&(C=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=C||f||n.defaultContactMaterial;const b=x.type|w.type,N=this[b];if(N){let j=!1;x.type<w.type?j=N.call(this,x,w,h,d,c,l,g,_,x,w,p):j=N.call(this,w,x,d,h,l,c,_,g,x,w,p),j&&p&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,c,l,h,d){const u=this.createContactEquation(a,c,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,sr),u.ni.scale(u.ni.dot(sr),il),sr.vsub(il,u.rj),-sr.dot(u.ni)<=e.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,c,e,t,d)}sphereBox(e,t,n,i,r,o,a,c,l,h,d){const u=this.v3pool,m=Av;n.vsub(i,rr),t.getSideNormals(m,o);const g=e.radius;let _=!1;const f=Rv,p=Pv,v=Lv;let x=null,M=0,w=0,C=0,b=null;for(let I=0,J=m.length;I!==J&&_===!1;I++){const k=bv;k.copy(m[I]);const X=k.length();k.normalize();const Q=rr.dot(k);if(Q<X+g&&Q>0){const ie=Tv,te=Cv;ie.copy(m[(I+1)%3]),te.copy(m[(I+2)%3]);const Ae=ie.length(),$=te.length();ie.normalize(),te.normalize();const re=rr.dot(ie),pe=rr.dot(te);if(re<Ae&&re>-Ae&&pe<$&&pe>-$){const Pe=Math.abs(Q-X-g);if((b===null||Pe<b)&&(b=Pe,w=re,C=pe,x=X,f.copy(k),p.copy(ie),v.copy(te),M++,d))return!0}}}if(M){_=!0;const I=this.createContactEquation(a,c,e,t,l,h);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(x,f),p.scale(w,p),f.vadd(p,f),v.scale(C,v),f.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let N=u.get();const j=wv;for(let I=0;I!==2&&!_;I++)for(let J=0;J!==2&&!_;J++)for(let k=0;k!==2&&!_;k++)if(N.set(0,0,0),I?N.vadd(m[0],N):N.vsub(m[0],N),J?N.vadd(m[1],N):N.vsub(m[1],N),k?N.vadd(m[2],N):N.vsub(m[2],N),i.vadd(N,j),j.vsub(n,j),j.lengthSquared()<g*g){if(d)return!0;_=!0;const X=this.createContactEquation(a,c,e,t,l,h);X.ri.copy(j),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(N),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(c.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(N),N=null;const y=u.get(),A=u.get(),q=u.get(),U=u.get(),R=u.get(),O=m.length;for(let I=0;I!==O&&!_;I++)for(let J=0;J!==O&&!_;J++)if(I%3!==J%3){m[J].cross(m[I],y),y.normalize(),m[I].vadd(m[J],A),q.copy(n),q.vsub(A,q),q.vsub(i,q);const k=q.dot(y);y.scale(k,U);let X=0;for(;X===I%3||X===J%3;)X++;R.copy(n),R.vsub(U,R),R.vsub(A,R),R.vsub(i,R);const Q=Math.abs(k),ie=R.length();if(Q<m[X].length()&&ie<g){if(d)return!0;_=!0;const te=this.createContactEquation(a,c,e,t,l,h);A.vadd(U,te.rj),te.rj.copy(te.rj),R.negate(te.ni),te.ni.normalize(),te.ri.copy(te.rj),te.ri.vadd(i,te.ri),te.ri.vsub(n,te.ri),te.ri.normalize(),te.ri.scale(g,te.ri),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),te.rj.vadd(i,te.rj),te.rj.vsub(c.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}}u.release(y,A,q,U,R)}planeBox(e,t,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,c,e,t,d)}convexConvex(e,t,n,i,r,o,a,c,l,h,d,u,m){const g=qv;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,g,u,m)){const _=[],f=jv;e.clipAgainstHull(n,r,t,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,c,e,t,l,h),M=x.ri,w=x.rj;g.negate(x.ni),_[v].normal.negate(f),f.scale(_[v].depth,f),_[v].point.vadd(f,M),w.copy(_[v].point),M.vsub(n,M),w.vsub(i,w),M.vadd(n,M),M.vsub(a.position,M),w.vadd(i,w),w.vsub(c.position,w),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,r,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,Iv);const m=t.faceNormals,g=t.faces,_=t.vertices,f=e.radius;let p=!1;for(let v=0;v!==_.length;v++){const x=_[v],M=Ov;o.vmult(x,M),i.vadd(M,M);const w=Uv;if(M.vsub(n,w),w.lengthSquared()<f*f){if(d)return!0;p=!0;const C=this.createContactEquation(a,c,e,t,l,h);C.ri.copy(w),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(f,C.ri),M.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(c.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&p===!1;v++){const M=m[v],w=g[v],C=Fv;o.vmult(M,C);const b=Bv;o.vmult(_[w[0]],b),b.vadd(i,b);const N=zv;C.scale(-f,N),n.vadd(N,N);const j=kv;N.vsub(b,j);const y=j.dot(C),A=Gv;if(n.vsub(b,A),y<0&&A.dot(C)>0){const q=[];for(let U=0,R=w.length;U!==R;U++){const O=u.get();o.vmult(_[w[U]],O),i.vadd(O,O),q.push(O)}if(Mv(q,C,n)){if(d)return!0;p=!0;const U=this.createContactEquation(a,c,e,t,l,h);C.scale(-f,U.ri),C.negate(U.ni);const R=u.get();C.scale(-y,R);const O=u.get();C.scale(-f,O),n.vsub(i,U.rj),U.rj.vadd(O,U.rj),U.rj.vadd(R,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),u.release(R),u.release(O),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let I=0,J=q.length;I!==J;I++)u.release(q[I]);return}else for(let U=0;U!==w.length;U++){const R=u.get(),O=u.get();o.vmult(_[w[(U+1)%w.length]],R),o.vmult(_[w[(U+2)%w.length]],O),i.vadd(R,R),i.vadd(O,O);const I=Dv;O.vsub(R,I);const J=Nv;I.unit(J);const k=u.get(),X=u.get();n.vsub(R,X);const Q=X.dot(J);J.scale(Q,k),k.vadd(R,k);const ie=u.get();if(k.vsub(n,ie),Q>0&&Q*Q<I.lengthSquared()&&ie.lengthSquared()<f*f){if(d)return!0;const te=this.createContactEquation(a,c,e,t,l,h);k.vsub(i,te.rj),k.vsub(n,te.ni),te.ni.normalize(),te.ni.scale(f,te.ri),te.rj.vadd(i,te.rj),te.rj.vsub(c.position,te.rj),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult);for(let Ae=0,$=q.length;Ae!==$;Ae++)u.release(q[Ae]);u.release(R),u.release(O),u.release(k),u.release(ie),u.release(X);return}u.release(R),u.release(O),u.release(k),u.release(ie),u.release(X)}for(let U=0,R=q.length;U!==R;U++)u.release(q[U])}}}planeConvex(e,t,n,i,r,o,a,c,l,h,d){const u=Hv,m=Vv;m.set(0,0,1),r.vmult(m,m);let g=0;const _=Wv;for(let f=0;f!==t.vertices.length;f++)if(u.copy(t.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,c,e,t,l,h),x=Xv;m.scale(m.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,c,l,h,d){const u=t.data,m=e.radius,g=t.elementSize,_=rx,f=sx;Je.pointToLocalFrame(i,o,n,f);let p=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,x=Math.floor((f.y-m)/g)-1,M=Math.ceil((f.y+m)/g)+1;if(v<0||M<0||p>u.length||x>u[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const w=[];t.getRectMinMax(p,x,v,M,w);const C=w[0],b=w[1];if(f.z-m>b||f.z+m<C)return;const N=this.result;for(let j=p;j<v;j++)for(let y=x;y<M;y++){const A=N.length;let q=!1;if(t.getConvexTrianglePillar(j,y,!1),Je.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,c,e,t,d)),d&&q||(t.getConvexTrianglePillar(j,y,!0),Je.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,_,r,o,a,c,e,t,d)),d&&q))return!0;if(N.length-A>2)return}}boxHeightfield(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,c,l,h,d){const u=t.data,m=t.elementSize,g=e.boundingSphereRadius,_=nx,f=ix,p=tx;Je.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/m)-1,x=Math.ceil((p.x+g)/m)+1,M=Math.floor((p.y-g)/m)-1,w=Math.ceil((p.y+g)/m)+1;if(x<0||w<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const C=[];t.getRectMinMax(v,M,x,w,C);const b=C[0],N=C[1];if(!(p.z-g>N||p.z+g<b))for(let j=v;j<x;j++)for(let y=M;y<w;y++){let A=!1;if(t.getConvexTrianglePillar(j,y,!1),Je.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(A=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,c,null,null,d,f,null)),d&&A||(t.getConvexTrianglePillar(j,y,!0),Je.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(A=this.convexConvex(e,t.pillarConvex,n,_,r,o,a,c,null,null,d,f,null)),d&&A))return!0}}sphereParticle(e,t,n,i,r,o,a,c,l,h,d){const u=Zv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(c,a,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,c,l,h,d){const u=Yv;u.set(0,0,1),a.quaternion.vmult(u,u);const m=$v;if(i.vsub(a.position,m),u.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(c,a,t,e,l,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const f=Kv;u.scale(u.dot(i),f),i.vsub(f,f),_.rj.copy(f),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}convexParticle(e,t,n,i,r,o,a,c,l,h,d){let u=-1;const m=Qv,g=ex;let _=null;const f=Jv;if(f.copy(i),f.vsub(n,f),r.conjugate(sl),sl.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,v=e.faces.length;p!==v;p++){const x=[e.worldVertices[e.faces[p][0]]],M=e.worldFaceNormals[p];i.vsub(x[0],rl);const w=-M.dot(rl);if(_===null||Math.abs(w)<Math.abs(_)){if(d)return!0;_=w,u=p,m.copy(M)}}if(u!==-1){const p=this.createContactEquation(c,a,t,e,l,h);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),m.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(c.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(t,e,i,n,o,r,c,a,l,h,d)}particleCylinder(e,t,n,i,r,o,a,c,l,h,d){return this.convexParticle(t,e,i,n,o,r,c,a,l,h,d)}sphereTrimesh(e,t,n,i,r,o,a,c,l,h,d){const u=lv,m=hv,g=uv,_=dv,f=fv,p=pv,v=vv,x=cv,M=ov,w=xv;Je.pointToLocalFrame(i,o,n,f);const C=e.radius;v.lowerBound.set(f.x-C,f.y-C,f.z-C),v.upperBound.set(f.x+C,f.y+C,f.z+C),t.getTrianglesInAABB(v,w);const b=av,N=e.radius*e.radius;for(let U=0;U<w.length;U++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[w[U]*3+R],b),b.vsub(f,M),M.lengthSquared()<=N){if(x.copy(b),Je.pointToWorldFrame(i,o,x,b),b.vsub(n,M),d)return!0;let O=this.createContactEquation(a,c,e,t,l,h);O.ni.copy(M),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(e.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(b),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let U=0;U<w.length;U++)for(let R=0;R<3;R++){t.getVertex(t.indices[w[U]*3+R],u),t.getVertex(t.indices[w[U]*3+(R+1)%3],m),m.vsub(u,g),f.vsub(m,p);const O=p.dot(g);f.vsub(u,p);let I=p.dot(g);if(I>0&&O<0&&(f.vsub(u,p),_.copy(g),_.normalize(),I=p.dot(_),_.scale(I,p),p.vadd(u,p),p.distanceTo(f)<e.radius)){if(d)return!0;const k=this.createContactEquation(a,c,e,t,l,h);p.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Je.pointToWorldFrame(i,o,p,p),p.vsub(c.position,k.rj),Je.vectorToWorldFrame(o,k.ni,k.ni),Je.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const j=mv,y=gv,A=_v,q=rv;for(let U=0,R=w.length;U!==R;U++){t.getTriangleVertices(w[U],j,y,A),t.getNormal(w[U],q),f.vsub(j,p);let O=p.dot(q);if(q.scale(O,p),f.vsub(p,p),O=p.distanceTo(f),pt.pointInTriangle(p,j,y,A)&&O<e.radius){if(d)return!0;let I=this.createContactEquation(a,c,e,t,l,h);p.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),Je.pointToWorldFrame(i,o,p,p),p.vsub(c.position,I.rj),Je.vectorToWorldFrame(o,I.ni,I.ni),Je.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,r,o,a,c,l,h,d){const u=new S,m=nv;m.set(0,0,1),r.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const _=new S;_.copy(u),Je.pointToWorldFrame(i,o,_,u);const f=iv;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(a,c,e,t,l,h);v.ni.copy(m);const x=sv;m.scale(f.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ri=new S,zi=new S,ki=new S,J0=new S,Q0=new S,ev=new yt,tv=new yt,nv=new S,iv=new S,sv=new S,rv=new S,ov=new S;new S;const av=new S,cv=new S,lv=new S,hv=new S,uv=new S,dv=new S,fv=new S,pv=new S,mv=new S,gv=new S,_v=new S,vv=new Kt,xv=[],sr=new S,il=new S,yv=new S,Sv=new S,Ev=new S;function Mv(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=yv;s[(r+1)%i].vsub(o,a);const c=Sv;a.cross(e,c);const l=Ev;t.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const rr=new S,bv=new S,Tv=new S,Cv=new S,Av=[new S,new S,new S,new S,new S,new S],wv=new S,Rv=new S,Pv=new S,Lv=new S,Iv=new S,Dv=new S,Nv=new S,Uv=new S,Ov=new S,Fv=new S,Bv=new S,zv=new S,kv=new S,Gv=new S;new S;new S;const Hv=new S,Vv=new S,Wv=new S,Xv=new S,qv=new S,jv=new S,Yv=new S,$v=new S,Kv=new S,Zv=new S,sl=new yt,Jv=new S;new S;const Qv=new S,rl=new S,ex=new S,tx=new S,nx=new S,ix=[0],sx=new S,rx=new S;class ol{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let c=0;c<r;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||al(e,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||al(t,h)}}}function al(s,e){s.push((e&4294901760)>>16,e&65535)}const vo=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class ox{constructor(){this.data={keys:[]}}get(e,t){const n=vo(e,t);return this.data[n]}set(e,t,n){const i=vo(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=vo(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class ax extends ah{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new f0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new X0,this.constraints=[],this.narrowphase=new Z0(this),this.collisionMatrix=new qc,this.collisionMatrixPrevious=new qc,this.bodyOverlapKeeper=new ol,this.shapeOverlapKeeper=new ol,this.contactmaterials=[],this.contactMaterialTable=new ox,this.defaultMaterial=new ns("default"),this.defaultContactMaterial=new Rs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Ss?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.ALL,n.from=e,n.to=t,n.callback=i,xo.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.ANY,n.from=e,n.to=t,n.result=i,xo.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.CLOSEST,n.from=e,n.to=t,n.result=i,xo.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof _e&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Et.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Et.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Et.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=dx,i=fx,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=_e.DYNAMIC;let u=-1/0;const m=this.constraints,g=ux;c.length();const _=c.x,f=c.y,p=c.z;let v=0;for(l&&(u=Et.now()),v=0;v!==r;v++){const U=o[v];if(U.type===d){const R=U.force,O=U.mass;R.x+=O*_,R.y+=O*f,R.z+=O*p}}for(let U=0,R=this.subsystems.length;U!==R;U++)this.subsystems[U].update();l&&(u=Et.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Et.now()-u);let x=m.length;for(v=0;v!==x;v++){const U=m[v];if(!U.collideConnected)for(let R=n.length-1;R>=0;R-=1)(U.bodyA===n[R]&&U.bodyB===i[R]||U.bodyB===n[R]&&U.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),l&&(u=Et.now());const M=hx,w=t.length;for(v=0;v!==w;v++)M.push(t[v]);t.length=0;const C=this.frictionEquations.length;for(v=0;v!==C;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,M,this.frictionEquations,g),l&&(h.narrowphase=Et.now()-u),l&&(u=Et.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=t.length;for(let U=0;U!==b;U++){const R=t[U],O=R.bi,I=R.bj,J=R.si,k=R.sj;let X;if(O.material&&I.material?X=this.getContactMaterial(O.material,I.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,O.material&&I.material&&(O.material.friction>=0&&I.material.friction>=0&&O.material.friction*I.material.friction,O.material.restitution>=0&&I.material.restitution>=0&&(R.restitution=O.material.restitution*I.material.restitution)),a.addEquation(R),O.allowSleep&&O.type===_e.DYNAMIC&&O.sleepState===_e.SLEEPING&&I.sleepState===_e.AWAKE&&I.type!==_e.STATIC){const Q=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),ie=I.sleepSpeedLimit**2;Q>=ie*2&&(O.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===_e.DYNAMIC&&I.sleepState===_e.SLEEPING&&O.sleepState===_e.AWAKE&&O.type!==_e.STATIC){const Q=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),ie=O.sleepSpeedLimit**2;Q>=ie*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,I,!0),this.collisionMatrixPrevious.get(O,I)||(ds.body=I,ds.contact=R,O.dispatchEvent(ds),ds.body=O,I.dispatchEvent(ds)),this.bodyOverlapKeeper.set(O.id,I.id),this.shapeOverlapKeeper.set(J.id,k.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Et.now()-u,u=Et.now()),v=0;v!==r;v++){const U=o[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const U=m[v];U.update();for(let R=0,O=U.equations.length;R!==O;R++){const I=U.equations[R];a.addEquation(I)}}a.solve(e,this),l&&(h.solve=Et.now()-u),a.removeAllEquations();const N=Math.pow;for(v=0;v!==r;v++){const U=o[v];if(U.type&d){const R=N(1-U.linearDamping,e),O=U.velocity;O.scale(R,O);const I=U.angularVelocity;if(I){const J=N(1-U.angularDamping,e);I.scale(J,I)}}}this.dispatchEvent(lx),l&&(u=Et.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,A=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,y,A);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Et.now()-u),this.stepnumber+=1,this.dispatchEvent(cx);let q=!0;if(this.allowSleep)for(q=!1,v=0;v!==r;v++){const U=o[v];U.sleepTick(this.time),U.sleepState!==_e.SLEEPING&&(q=!0)}this.hasActiveBodies=q}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(En,Mn),e){for(let r=0,o=En.length;r<o;r+=2)fs.bodyA=this.getBodyById(En[r]),fs.bodyB=this.getBodyById(En[r+1]),this.dispatchEvent(fs);fs.bodyA=fs.bodyB=null}if(t){for(let r=0,o=Mn.length;r<o;r+=2)ps.bodyA=this.getBodyById(Mn[r]),ps.bodyB=this.getBodyById(Mn[r+1]),this.dispatchEvent(ps);ps.bodyA=ps.bodyB=null}En.length=Mn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(En,Mn),n){for(let r=0,o=En.length;r<o;r+=2){const a=this.getShapeById(En[r]),c=this.getShapeById(En[r+1]);bn.shapeA=a,bn.shapeB=c,a&&(bn.bodyA=a.body),c&&(bn.bodyB=c.body),this.dispatchEvent(bn)}bn.bodyA=bn.bodyB=bn.shapeA=bn.shapeB=null}if(i){for(let r=0,o=Mn.length;r<o;r+=2){const a=this.getShapeById(Mn[r]),c=this.getShapeById(Mn[r+1]);Tn.shapeA=a,Tn.shapeB=c,a&&(Tn.bodyA=a.body),c&&(Tn.bodyB=c.body),this.dispatchEvent(Tn)}Tn.bodyA=Tn.bodyB=Tn.shapeA=Tn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Kt;const xo=new pt,Et=globalThis.performance||{};if(!Et.now){let s=Date.now();Et.timing&&Et.timing.navigationStart&&(s=Et.timing.navigationStart),Et.now=()=>Date.now()-s}new S;const cx={type:"postStep"},lx={type:"preStep"},ds={type:_e.COLLIDE_EVENT_NAME,body:null,contact:null},hx=[],ux=[],dx=[],fx=[],En=[],Mn=[],fs={type:"beginContact",bodyA:null,bodyB:null},ps={type:"endContact",bodyA:null,bodyB:null},bn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Tn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},cl={type:"change"},yo={type:"start"},ll={type:"end"},or=new Hl,hl=new Bn,px=Math.cos(70*Sd.DEG2RAD);class mx extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Re),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cl),n.update(),r=i.NONE},this.update=function(){const L=new F,ne=new jn().setFromUnitVectors(e.up,new F(0,1,0)),Se=ne.clone().invert(),D=new F,ce=new jn,V=new F,oe=2*Math.PI;return function(je=null){const Qe=n.object.position;L.copy(Qe).sub(n.target),L.applyQuaternion(ne),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&q(y(je)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let tt=n.minAzimuthAngle,dt=n.maxAzimuthAngle;isFinite(tt)&&isFinite(dt)&&(tt<-Math.PI?tt+=oe:tt>Math.PI&&(tt-=oe),dt<-Math.PI?dt+=oe:dt>Math.PI&&(dt-=oe),tt<=dt?a.theta=Math.max(tt,Math.min(dt,a.theta)):a.theta=a.theta>(tt+dt)/2?Math.max(tt,a.theta):Math.min(dt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ke=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=Q(a.radius);else{const it=a.radius;a.radius=Q(a.radius*l),Ke=it!=a.radius}if(L.setFromSpherical(a),L.applyQuaternion(Se),Qe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&C){let it=null;if(n.object.isPerspectiveCamera){const Rt=L.length();it=Q(Rt*l);const Kn=Rt-it;n.object.position.addScaledVector(M,Kn),n.object.updateMatrixWorld(),Ke=!!Kn}else if(n.object.isOrthographicCamera){const Rt=new F(w.x,w.y,0);Rt.unproject(n.object);const Kn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ke=Kn!==n.object.zoom;const Ps=new F(w.x,w.y,0);Ps.unproject(n.object),n.object.position.sub(Ps).add(Rt),n.object.updateMatrixWorld(),it=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(or.origin.copy(n.object.position),or.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(or.direction))<px?e.lookAt(n.target):(hl.setFromNormalAndCoplanarPoint(n.object.up,n.target),or.intersectPlane(hl,n.target))))}else if(n.object.isOrthographicCamera){const it=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),it!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ke=!0)}return l=1,C=!1,Ke||D.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o||V.distanceToSquared(n.target)>o?(n.dispatchEvent(cl),D.copy(n.object.position),ce.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Oe),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",P),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",P),n.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Re),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Hc,c=new Hc;let l=1;const h=new F,d=new Ie,u=new Ie,m=new Ie,g=new Ie,_=new Ie,f=new Ie,p=new Ie,v=new Ie,x=new Ie,M=new F,w=new Ie;let C=!1;const b=[],N={};let j=!1;function y(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(L){const ne=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*ne)}function q(L){c.theta-=L}function U(L){c.phi-=L}const R=function(){const L=new F;return function(Se,D){L.setFromMatrixColumn(D,0),L.multiplyScalar(-Se),h.add(L)}}(),O=function(){const L=new F;return function(Se,D){n.screenSpacePanning===!0?L.setFromMatrixColumn(D,1):(L.setFromMatrixColumn(D,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Se),h.add(L)}}(),I=function(){const L=new F;return function(Se,D){const ce=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;L.copy(V).sub(n.target);let oe=L.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),R(2*Se*oe/ce.clientHeight,n.object.matrix),O(2*D*oe/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(Se*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),O(D*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L,ne){if(!n.zoomToCursor)return;C=!0;const Se=n.domElement.getBoundingClientRect(),D=L-Se.left,ce=ne-Se.top,V=Se.width,oe=Se.height;w.x=D/V*2-1,w.y=-(ce/oe)*2+1,M.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ie(L){d.set(L.clientX,L.clientY)}function te(L){X(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function Ae(L){g.set(L.clientX,L.clientY)}function $(L){u.set(L.clientX,L.clientY),m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ne=n.domElement;q(2*Math.PI*m.x/ne.clientHeight),U(2*Math.PI*m.y/ne.clientHeight),d.copy(u),n.update()}function re(L){v.set(L.clientX,L.clientY),x.subVectors(v,p),x.y>0?J(A(x.y)):x.y<0&&k(A(x.y)),p.copy(v),n.update()}function pe(L){_.set(L.clientX,L.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),I(f.x,f.y),g.copy(_),n.update()}function Pe(L){X(L.clientX,L.clientY),L.deltaY<0?k(A(L.deltaY)):L.deltaY>0&&J(A(L.deltaY)),n.update()}function be(L){let ne=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),ne=!0;break}ne&&(L.preventDefault(),n.update())}function ve(L){if(b.length===1)d.set(L.pageX,L.pageY);else{const ne=xe(L),Se=.5*(L.pageX+ne.x),D=.5*(L.pageY+ne.y);d.set(Se,D)}}function $e(L){if(b.length===1)g.set(L.pageX,L.pageY);else{const ne=xe(L),Se=.5*(L.pageX+ne.x),D=.5*(L.pageY+ne.y);g.set(Se,D)}}function De(L){const ne=xe(L),Se=L.pageX-ne.x,D=L.pageY-ne.y,ce=Math.sqrt(Se*Se+D*D);p.set(0,ce)}function H(L){n.enableZoom&&De(L),n.enablePan&&$e(L)}function St(L){n.enableZoom&&De(L),n.enableRotate&&ve(L)}function Ce(L){if(b.length==1)u.set(L.pageX,L.pageY);else{const Se=xe(L),D=.5*(L.pageX+Se.x),ce=.5*(L.pageY+Se.y);u.set(D,ce)}m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ne=n.domElement;q(2*Math.PI*m.x/ne.clientHeight),U(2*Math.PI*m.y/ne.clientHeight),d.copy(u)}function Be(L){if(b.length===1)_.set(L.pageX,L.pageY);else{const ne=xe(L),Se=.5*(L.pageX+ne.x),D=.5*(L.pageY+ne.y);_.set(Se,D)}f.subVectors(_,g).multiplyScalar(n.panSpeed),I(f.x,f.y),g.copy(_)}function we(L){const ne=xe(L),Se=L.pageX-ne.x,D=L.pageY-ne.y,ce=Math.sqrt(Se*Se+D*D);v.set(0,ce),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),J(x.y),p.copy(v);const V=(L.pageX+ne.x)*.5,oe=(L.pageY+ne.y)*.5;X(V,oe)}function Ye(L){n.enableZoom&&we(L),n.enablePan&&Be(L)}function ze(L){n.enableZoom&&we(L),n.enableRotate&&Ce(L)}function Ge(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",P)),!Xe(L)&&(le(L),L.pointerType==="touch"?he(L):E(L)))}function nt(L){n.enabled!==!1&&(L.pointerType==="touch"?de(L):Z(L))}function P(L){switch(ut(L),b.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",P),n.dispatchEvent(ll),r=i.NONE;break;case 1:const ne=b[0],Se=N[ne];he({pointerId:ne,pageX:Se.x,pageY:Se.y});break}}function E(L){let ne;switch(L.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Si.DOLLY:if(n.enableZoom===!1)return;te(L),r=i.DOLLY;break;case Si.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Ae(L),r=i.PAN}else{if(n.enableRotate===!1)return;ie(L),r=i.ROTATE}break;case Si.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ie(L),r=i.ROTATE}else{if(n.enablePan===!1)return;Ae(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yo)}function Z(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(L);break;case i.DOLLY:if(n.enableZoom===!1)return;re(L);break;case i.PAN:if(n.enablePan===!1)return;pe(L);break}}function ee(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(yo),Pe(ae(L)),n.dispatchEvent(ll))}function ae(L){const ne=L.deltaMode,Se={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ne){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return L.ctrlKey&&!j&&(Se.deltaY*=10),Se}function se(L){L.key==="Control"&&(j=!0,n.domElement.getRootNode().addEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ue(L){L.key==="Control"&&(j=!1,n.domElement.getRootNode().removeEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Re(L){n.enabled===!1||n.enablePan===!1||be(L)}function he(L){switch(Te(L),b.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;ve(L),r=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;$e(L),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(L),r=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(L),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yo)}function de(L){switch(Te(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Be(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(L),n.update();break;default:r=i.NONE}}function Oe(L){n.enabled!==!1&&L.preventDefault()}function le(L){b.push(L.pointerId)}function ut(L){delete N[L.pointerId];for(let ne=0;ne<b.length;ne++)if(b[ne]==L.pointerId){b.splice(ne,1);return}}function Xe(L){for(let ne=0;ne<b.length;ne++)if(b[ne]==L.pointerId)return!0;return!1}function Te(L){let ne=N[L.pointerId];ne===void 0&&(ne=new Ie,N[L.pointerId]=ne),ne.set(L.pageX,L.pageY)}function xe(L){const ne=L.pointerId===b[0]?b[1]:b[0];return N[ne]}n.domElement.addEventListener("contextmenu",Oe),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",P),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}class gx extends wt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ie(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Gi=new F,ul=new ht,dl=new ht,fl=new F,pl=new F;class _x{constructor(e={}){const t=this;let n,i,r,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),ul.copy(g.matrixWorldInverse),dl.multiplyMatrices(g.projectionMatrix,ul),l(m,m,g),u(m)},this.setSize=function(m,g){n=m,i=g,r=n/2,o=i/2,c.style.width=m+"px",c.style.height=g+"px"};function l(m,g,_){if(m.isCSS2DObject){Gi.setFromMatrixPosition(m.matrixWorld),Gi.applyMatrix4(dl);const f=m.visible===!0&&Gi.z>=-1&&Gi.z<=1&&m.layers.test(_.layers)===!0;if(m.element.style.display=f===!0?"":"none",f===!0){m.onBeforeRender(t,g,_);const v=m.element;v.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Gi.x*r+r)+"px,"+(-Gi.y*o+o)+"px)",v.parentNode!==c&&c.appendChild(v),m.onAfterRender(t,g,_)}const p={distanceToCameraSquared:h(_,m)};a.objects.set(m,p)}for(let f=0,p=m.children.length;f<p;f++)l(m.children[f],g,_)}function h(m,g){return fl.setFromMatrixPosition(m.matrixWorld),pl.setFromMatrixPosition(g.matrixWorld),fl.distanceToSquared(pl)}function d(m){const g=[];return m.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function u(m){const g=d(m).sort(function(f,p){if(f.renderOrder!==p.renderOrder)return p.renderOrder-f.renderOrder;const v=a.objects.get(f).distanceToCameraSquared,x=a.objects.get(p).distanceToCameraSquared;return v-x}),_=g.length;for(let f=0,p=g.length;f<p;f++)g[f].element.style.zIndex=_-f}}}class vx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return xx(e).buffer}}function xx(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function _h(s){return new yx(s).unpack()}function vh(s){const e=new Sx,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class yx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Sx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new vx,this._textEncoder=new TextEncoder}}let xh=!0,yh=!0;function gs(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function vi(s,e,t){if(!s.RTCPeerConnection)return;const n=s.RTCPeerConnection.prototype,i=n.addEventListener;n.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);const c=l=>{const h=t(l);h&&(a.handleEvent?a.handleEvent(h):a(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};const r=n.removeEventListener;n.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return r.apply(this,arguments);if(!this._eventMap[e].has(a))return r.apply(this,arguments);const c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,r.apply(this,[o,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Ex(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(xh=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function Mx(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(yh=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Sh(){if(typeof window=="object"){if(xh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function na(s,e){yh&&console.warn(s+" is deprecated, please use "+e+" instead.")}function bx(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n)return{browser:"chrome",version:parseInt(n.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(gs(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(gs(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(gs(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=gs(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function ml(s){return Object.prototype.toString.call(s)==="[object Object]"}function Eh(s){return ml(s)?Object.keys(s).reduce(function(e,t){const n=ml(s[t]),i=n?Eh(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function Do(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Do(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{Do(s,s.get(i),t)})}))}function gl(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{s.forEach(a=>{a.type===n&&a.trackId===o.id&&Do(s,a,i)})}),i}const _l=Sh;function Mh(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const d=function(u,m){return u?u+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(h.ideal!==void 0){c.optional=c.optional||[];let u={};typeof h.ideal=="number"?(u[d("min",l)]=h.ideal,c.optional.push(u),u={},u[d("max",l)]=h.ideal,c.optional.push(u)):(u[d("",l)]=h.ideal,c.optional.push(u))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[d("",l)]=h.exact):["min","max"].forEach(u=>{h[u]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[d(u,l)]=h[u])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,d,u){d in h&&!(u in h)&&(h[u]=h[d],delete h[d])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let d;if(l.exact==="environment"||l.ideal==="environment"?d=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(d=["front"]),d)return t.mediaDevices.enumerateDevices().then(u=>{u=u.filter(g=>g.kind==="videoinput");let m=u.find(g=>d.some(_=>g.label.toLowerCase().includes(_)));return!m&&u.length&&d.includes("back")&&(m=u[u.length-1]),m&&(a.video.deviceId=l.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),_l("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return _l("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,h=>{t.webkitGetUserMedia(h,c,d=>{l&&l(r(d))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function bh(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Th(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",i=>{let r;s.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(a=>a.track&&a.track.id===i.track.id):r={track:i.track};const o=new Event("track");o.track=i.track,o.receiver=r,o.transceiver={receiver:r},o.streams=[n.stream],this.dispatchEvent(o)}),n.stream.getTracks().forEach(i=>{let r;s.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(a=>a.track&&a.track.id===i.id):r={track:i};const o=new Event("track");o.track=i,o.receiver=r,o.transceiver={receiver:r},o.streams=[n.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else vi(s,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function Ch(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Ah(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const t=s.RTCPeerConnection.prototype.getSenders;t&&(s.RTCPeerConnection.prototype.getSenders=function(){const r=t.apply(this,[]);return r.forEach(o=>o._pc=this),r});const n=s.RTCPeerConnection.prototype.addTrack;n&&(s.RTCPeerConnection.prototype.addTrack=function(){const r=n.apply(this,arguments);return r._pc=this,r}),s.RTCRtpSender.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>gl(o,r.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const t=s.RTCPeerConnection.prototype.getReceivers;t&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=t.apply(this,[]);return i.forEach(r=>r._pc=this),i}),vi(s,"track",n=>(n.receiver._pc=n.srcElement,n)),s.RTCRtpReceiver.prototype.getStats=function(){const i=this;return this._pc.getStats().then(r=>gl(r,i.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const e=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const n=arguments[0];let i,r,o;return this.getSenders().forEach(a=>{a.track===n&&(i?o=!0:i=a)}),this.getReceivers().forEach(a=>(a.track===n&&(r?o=!0:r=a),a.track===n)),o||i&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):i?i.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function wh(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(d=>d.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function Rh(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return wh(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(d=>this._reverseStreams[d.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(d=>{if(this.getSenders().find(m=>m.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const d=new s.MediaStream(h.getTracks());this._streams[h.id]=d,this._reverseStreams[d.id]=h,h=d}n.apply(this,[h])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},s.RTCPeerConnection.prototype.addTrack=function(h,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const u=[].slice.call(arguments,1);if(u.length!==1||!u[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[d.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new s.MediaStream([h]);this._streams[d.id]=_,this._reverseStreams[_.id]=d,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const m=l._reverseStreams[u],g=l._streams[m.id];d=d.replace(new RegExp(g.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:d})}function o(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const m=l._reverseStreams[u],g=l._streams[m.id];d=d.replace(new RegExp(m.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:d})}["createOffer","createAnswer"].forEach(function(l){const h=s.RTCPeerConnection.prototype[l],d={[l](){const u=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);u[0].apply(null,[_])},g=>{u[1]&&u[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};s.RTCPeerConnection.prototype[l]=d[l]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),s.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let u;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(_=>h.track===_)&&(u=this._streams[m])}),u&&(u.getTracks().length===1?this.removeStream(this._reverseStreams[u.id]):u.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function No(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function Ph(s,e){vi(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const vl=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Ph,shimAddTrackRemoveTrack:Rh,shimAddTrackRemoveTrackWithNative:wh,shimGetSendersWithDtmf:Ch,shimGetUserMedia:Mh,shimMediaStream:bh,shimOnTrack:Th,shimPeerConnection:No,shimSenderReceiverGetStats:Ah},Symbol.toStringTag,{value:"Module"}));function Lh(s,e){const t=s&&s.navigator,n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,o){na("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Tx(s,e){s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||s.navigator.mediaDevices&&(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)})}function Ih(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Uo(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection))return;!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const r=s.RTCPeerConnection.prototype[i],o={[i](){return arguments[0]=new(i==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)}};s.RTCPeerConnection.prototype[i]=o[i]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,d)=>{c.set(d,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function Dh(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Nh(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),vi(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Uh(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){na("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Oh(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Fh(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.addTransceiver;e&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const i=n.length>0;i&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const r=e.apply(this,arguments);if(i){const{sender:o}=r,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return r})}function Bh(s){if(!(typeof s=="object"&&s.RTCRtpSender))return;const e=s.RTCRtpSender.prototype.getParameters;e&&(s.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function zh(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function kh(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const xl=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Fh,shimCreateAnswer:kh,shimCreateOffer:zh,shimGetDisplayMedia:Tx,shimGetParameters:Bh,shimGetUserMedia:Lh,shimOnTrack:Ih,shimPeerConnection:Uo,shimRTCDataChannel:Oh,shimReceiverGetStats:Nh,shimRemoveStream:Uh,shimSenderGetStats:Dh},Symbol.toStringTag,{value:"Module"}));function Gh(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Hh(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Vh(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],u=t.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u},e.createAnswer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],u=n.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u};let a=function(c,l,h){const d=i.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d};e.setLocalDescription=a,a=function(c,l,h){const d=r.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.setRemoteDescription=a,a=function(c,l,h){const d=o.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.addIceCandidate=a}function Wh(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Xh(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}).bind(e))}function Xh(s){return s&&s.video!==void 0?Object.assign({},s,{video:Eh(s.video)}):s}function qh(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(na("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function jh(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Yh(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function $h(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const yl=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:$h,shimCallbacksAPI:Vh,shimConstraints:Xh,shimCreateOfferLegacy:Yh,shimGetUserMedia:Wh,shimLocalStreamsAPI:Gh,shimRTCIceServerUrls:qh,shimRemoteStreamsAPI:Hh,shimTrackEventTransceiver:jh},Symbol.toStringTag,{value:"Module"}));function Cx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kh={exports:{}};(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,r)=>(r>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":i.relatedAddress=n[r+1];break;case"rport":i.relatedPort=parseInt(n[r+1],10);break;case"tcptype":i.tcpType=n[r+1];break;case"ufrag":i.ufrag=n[r+1],i.usernameFragment=n[r+1];break;default:i[n[r]]===void 0&&(i[n[r]]=n[r+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)i=r[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+i+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+i+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(i.attribute=t.substring(n+1,r),i.value=t.substring(r+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{i+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&r?{usernameFragment:i.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),d=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=d.length?e.parseFmtp(d[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(i+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(u=>e.parseSsrcMedia(u)).filter(u=>u.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(u=>u.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),i.codecs.forEach(u=>{if(u.name.toUpperCase()==="RTX"&&u.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(u.parameters.apt,10)};c&&l&&(m.rtx={ssrc:l}),n.push(m),r&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let d=e.matchPrefix(t,"b=");return d.length&&(d[0].indexOf("b=TIAS:")===0?d=parseInt(d[0].substring(7),10):d[0].indexOf("b=AS:")===0?d=parseInt(d[0].substring(5),10)*1e3*.95-50*40*8:d=void 0,n.forEach(u=>{u.maxBitrate=d})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let r;i.length>0&&(r=parseInt(i[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(Kh);var Zh=Kh.exports;const Yi=Cx(Zh),Ax=Su({__proto__:null,default:Yi},[Zh]);function lr(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=Yi.parseCandidate(n.candidate);for(const o in r)o in i||Object.defineProperty(i,o,{value:r[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,vi(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Oo(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||vi(s,"icecandidate",e=>{if(e.candidate){const t=Yi.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function hr(s,e){if(!s.RTCPeerConnection)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Yi.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Yi.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Yi.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),h=r(arguments[0],c);let d;l===0&&h===0?d=Number.POSITIVE_INFINITY:l===0||h===0?d=Math.max(l,h):d=Math.min(l,h);const u={};Object.defineProperty(u,"maxMessageSize",{get(){return d}}),this._sctp=u}return o.apply(this,arguments)}}function ur(s){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype))return;function e(n,i){const r=n.send;n.send=function(){const a=arguments[0],c=a.length||a.size||a.byteLength;if(n.readyState==="open"&&i.sctp&&c>i.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+i.sctp.maxMessageSize+" bytes)");return r.apply(n,arguments)}}const t=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const i=t.apply(this,arguments);return e(i,this),i},vi(s,"datachannel",n=>(e(n.channel,n.target),n))}function Fo(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",i);r.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Bo(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function dr(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function fr(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const wx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Bo,shimAddIceCandidateNullOrEmpty:dr,shimConnectionState:Fo,shimMaxMessageSize:hr,shimParameterlessSetLocalDescription:fr,shimRTCIceCandidate:lr,shimRTCIceCandidateRelayProtocol:Oo,shimSendThrowTypeError:ur},Symbol.toStringTag,{value:"Module"}));function Rx({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Sh,n=bx(s),i={browserDetails:n,commonShim:wx,extractVersion:gs,disableLog:Ex,disableWarnings:Mx,sdp:Ax};switch(n.browser){case"chrome":if(!vl||!No||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=vl,dr(s,n),fr(s),Mh(s,n),bh(s),No(s,n),Th(s),Rh(s,n),Ch(s),Ah(s),Ph(s,n),lr(s),Oo(s),Fo(s),hr(s,n),ur(s),Bo(s,n);break;case"firefox":if(!xl||!Uo||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=xl,dr(s,n),fr(s),Lh(s,n),Uo(s,n),Ih(s),Uh(s),Dh(s),Nh(s),Oh(s),Fh(s),Bh(s),zh(s),kh(s),lr(s),Fo(s),hr(s,n),ur(s);break;case"safari":if(!yl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=yl,dr(s,n),fr(s),qh(s),Yh(s),Vh(s),Gh(s),Hh(s),jh(s),Wh(s),$h(s),lr(s),Oo(s),hr(s,n),ur(s),Bo(s,n);break;default:t("Unsupported browser!");break}return i}const Sl=Rx({window:typeof window>"u"?void 0:window});function xi(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Jh{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:i};t.push(l),o=a,r++}return this._dataCount++,t}}}function Px(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const So=Sl.default||Sl,ms=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return So.browserDetails.browser}getVersion(){return So.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=So.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Lx=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),Qh=()=>Math.random().toString(36).slice(2),El={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Ix extends Jh{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=El,this.browser=ms.getBrowser(),this.browserVersion=ms.getVersion(),this.pack=vh,this.unpack=_h,this.supports=function(){const t={browser:ms.isBrowserSupported(),webRTC:ms.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(El),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!ms.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=Lx,this.randomToken=Qh}}const Gt=new Ix,Dx="PeerJS: ";class Nx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Dx,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ye=new Nx,ia={},Ux=Object.prototype.hasOwnProperty,Bt="~";function Es(){}Object.create&&(Es.prototype=Object.create(null),new Es().__proto__||(Bt=!1));function Ox(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function eu(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Ox(t,n||s,i),o=Bt?Bt+e:e;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],r]:s._events[o].push(r):(s._events[o]=r,s._eventsCount++),s}function pr(s,e){--s._eventsCount===0?s._events=new Es:delete s._events[e]}function Nt(){this._events=new Es,this._eventsCount=0}Nt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Ux.call(t,n)&&e.push(Bt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Nt.prototype.listeners=function(e){var t=Bt?Bt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o};Nt.prototype.listenerCount=function(e){var t=Bt?Bt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Nt.prototype.emit=function(e,t,n,i,r,o){var a=Bt?Bt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c.fn.apply(c.context,h)}else{var u=c.length,m;for(d=0;d<u;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!h)for(m=1,h=new Array(l-1);m<l;m++)h[m-1]=arguments[m];c[d].fn.apply(c[d].context,h)}}return!0};Nt.prototype.on=function(e,t,n){return eu(this,e,t,n,!1)};Nt.prototype.once=function(e,t,n){return eu(this,e,t,n,!0)};Nt.prototype.removeListener=function(e,t,n,i){var r=Bt?Bt+e:e;if(!this._events[r])return this;if(!t)return pr(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&pr(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:pr(this,r)}return this};Nt.prototype.removeAllListeners=function(e){var t;return e?(t=Bt?Bt+e:e,this._events[t]&&pr(this,t)):(this._events=new Es,this._eventsCount=0),this};Nt.prototype.off=Nt.prototype.removeListener;Nt.prototype.addListener=Nt.prototype.on;Nt.prefixed=Bt;Nt.EventEmitter=Nt;ia=Nt;var yi={};xi(yi,"ConnectionType",()=>Xn);xi(yi,"PeerErrorType",()=>xt);xi(yi,"BaseConnectionErrorType",()=>zo);xi(yi,"DataConnectionErrorType",()=>sa);xi(yi,"SerializationType",()=>Rr);xi(yi,"SocketEventType",()=>Gn);xi(yi,"ServerMessageType",()=>Dt);var Xn=function(s){return s.Data="data",s.Media="media",s}({}),xt=function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s}({}),zo=function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s}({}),sa=function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s}({}),Rr=function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s}({}),Gn=function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s}({}),Dt=function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s}({});const tu="1.5.5";class Fx extends ia.EventEmitter{constructor(e,t,n,i,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+tu),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),ye.log("Server message received:",r)}catch{ye.log("Invalid server message",i.data);return}this.emit(Gn.Message,r)},this._socket.onclose=i=>{this._disconnected||(ye.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Gn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ye.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ye.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Dt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Gn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class nu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Xn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ye.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;ye.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(ye.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:Dt.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ye.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(zo.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ye.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(zo.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ye.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ye.log("Listening for data channel"),e.ondatachannel=o=>{ye.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},ye.log("Listening for remote stream"),e.ontrack=o=>{ye.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Xn.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){ye.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ye.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ye.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Xn.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Dt.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(xt.WebRTC,i),ye.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(xt.WebRTC,n),ye.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ye.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ye.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Dt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(xt.WebRTC,i),ye.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(xt.WebRTC,n),ye.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;ye.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ye.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){i.emitError(xt.WebRTC,o),ye.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){ye.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ye.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(xt.WebRTC,t),ye.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ye.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ye.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ye.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class iu extends ia.EventEmitter{emitError(e,t){ye.error("Error:",t),this.emit("error",new Bx(`${e}`,t))}}class Bx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class su extends iu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Ho;const _s=class _s extends su{get type(){return Xn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||_s.ID_PREFIX+Gt.randomToken(),this._negotiator=new nu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ye.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ye.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ye.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Dt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Dt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ye.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ye.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Ho=new WeakMap,ss(_s,Ho,_s.ID_PREFIX="mc_");let Sr=_s;class zx{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${i}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",tu),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ye.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Gt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Gt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ye.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Vo,Wo;const hi=class hi extends su{get type(){return Xn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||hi.ID_PREFIX+Qh(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new nu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ye.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ye.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ye.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(sa.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Dt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Dt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ye.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Vo=new WeakMap,Wo=new WeakMap,ss(hi,Vo,hi.ID_PREFIX="dc_"),ss(hi,Wo,hi.MAX_BUFFERED_AMOUNT=8388608);let Er=hi;class ra extends Er{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Er.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ye.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Eo extends ra{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Jh,this.serialization=Rr.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=_h(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=Px(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=vh(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ye.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class kx extends ra{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Rr.None}}class Gx extends ra{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Gt.chunkedMTU){this.emitError(sa.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Rr.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Xo;const vs=class vs extends iu{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:kx,json:Gx,binary:Eo,"binary-utf8":Eo,default:Eo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Gt.CLOUD_HOST,port:Gt.CLOUD_PORT,path:"/",key:vs.DEFAULT_KEY,token:Gt.randomToken(),config:Gt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Gt.CLOUD_HOST?this._options.secure=Gt.isSecure():this._options.host==Gt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ye.setLogFunction(this._options.logFunction),ye.logLevel=this._options.debug||0,this._api=new zx(t),this._socket=this._createServerConnection(),!Gt.supports.audioVideo&&!Gt.supports.data){this._delayedAbort(xt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Gt.validateId(n)){this._delayedAbort(xt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(xt.ServerError,i))}_createServerConnection(){const e=new Fx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Gn.Message,t=>{this._handleMessage(t)}),e.on(Gn.Error,t=>{this._abort(xt.SocketError,t)}),e.on(Gn.Disconnected,()=>{this.disconnected||(this.emitError(xt.Network,"Lost connection to server."),this.disconnect())}),e.on(Gn.Close,()=>{this.disconnected||this._abort(xt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case Dt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Dt.Error:this._abort(xt.ServerError,n.msg);break;case Dt.IdTaken:this._abort(xt.UnavailableID,`ID "${this.id}" is taken`);break;case Dt.InvalidKey:this._abort(xt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Dt.Leave:ye.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case Dt.Expire:this.emitError(xt.PeerUnavailable,`Could not connect to peer ${i}`);break;case Dt.Offer:{const r=n.connectionId;let o=this.getConnection(i,r);if(o&&(o.close(),ye.warn(`Offer received for existing Connection ID:${r}`)),n.type===Xn.Media){const c=new Sr(i,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Xn.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{ye.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){ye.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(i,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):ye.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ye.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(xt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ye.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(xt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ye.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new Sr(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){ye.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ye.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ye.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ye.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ye.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ye.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(xt.ServerError,t))}};Xo=new WeakMap,ss(vs,Xo,vs.DEFAULT_KEY="peerjs");let ko=vs;var ru=ko;const Ml=["FROG","LAMP","BIRD","CAKE","DESK","FISH","GOLF","HAZE","IRIS","JUMP","KITE","LION","MOON","NEST","OVAL","PINE","QUIZ","RAIN","STAR","TREE","UNIT","VINE","WOLF","YARD","ZINC","ARCH","BARK","CLAM","DUSK","ECHO","FERN","GLOW","HAWK","IRON","JADE","KELP","LARK","MIST","NEON","OPAL","PALM","REEF","SILK","TUSK","URGE","VALE","WASP","APEX","BOLT","COVE","DAWN","EDGE","FLUX","GRIT","HUSK","ISLE","JAZZ","KNOT","LUSH","MAZE","NOVA","ONYX","PEAK","RAFT","SAGE","TIDE","USED","VEIL","WREN","AXLE","BEAM","CORD","DOME","EMIT","FOAM","GLEN","HARP","ITCH","JOLT","KERN","LILY","MOTH","NOOK","ORBS","PLUM","RAMP","SLAB","TURF","UNDO","VAST","WILT","YARN","ZEAL","ACRE","BLOT","CUBE","DART","EMIT","FLAG","GUST","HELM","ICON","JURY","KING","LOOM","MINT","NOTE","OATH","PIER","RIND","SWAN","TRAP","UPON","VENT","WISH","YAWN","ZONE","ARID","BRIM","CLAP","DUNE","EPIC","FOLD","GRIP","HOOF","IBIS","JERK","KNOB","LACE","MULE","NAIL","ORCA","PELT","ROBE","SNAG","TWIG","UDON","VOID","WICK","YOGI","ZEST","ALLY","BULB","COAL","DIME","FAWN","GALE","HOOK","IOTA","JAWS","KIWI","LYNX","MARS","NEWT","OXEN","PAWN","RUBY","SLUG","TACO","VASE","WADE","YELL","AGED","BYTE","CROW","DEFT","EPIC","FUNK","GAZE","HALO","IGLU","JIBE","KALE","LUMP","MALT","NUMB","OPUS","PUMA","RUNE","SOOT","THAW","UMPS","VIAL","WISP","YOKE","BUZZ","AQUA","BALE","CHOP","DILL","ELMS","FLAX","GRIM","HULL","INKS","JAMB","KEEL","LAVA","MUTT","NODE"];function Hx(){return Ml[Math.floor(Math.random()*Ml.length)]}const at={WELCOME:"welcome",PLAYER_JOINED:"playerJoined",PLAYER_LEFT:"playerLeft",LOBBY_STATE:"lobbyState",GAME_START:"gameStart",BALL_UPDATE:"ballUpdate",REMOTE_BALL_UPDATE:"remoteBallUpdate",WIN:"win",PLAY_AGAIN:"playAgain",CHAT:"chat"},ou=4,Vx=1/20,Mr=[16729156,4491519,16763904,4508740],G={peer:null,isHost:!1,roomCode:null,localName:"Player",localId:null,connections:{},players:[],syncTimer:0,gameActive:!1,onPlayerListChanged:null,onGameStart:null,onRemoteBallUpdate:null,onWin:null,onPlayAgain:null,onDisconnect:null,onChat:null};function Qi(s){for(const e of Object.values(G.connections))e.open&&e.send(s)}function au(s){const e=G.connections.host;e&&e.open&&e.send(s)}function Wx(){return G.players.map(s=>({id:s.id,name:s.name,colorIndex:s.colorIndex,isHost:s.isHost}))}function Xx(){const s=new Set(G.players.map(e=>e.colorIndex));for(let e=0;e<ou;e++)if(!s.has(e))return e;return 0}function qx(s){return G.localName=s||"Player 1",G.isHost=!0,G.roomCode=Hx(),G.players=[],G.connections={},G.gameActive=!1,new Promise((e,t)=>{const n="golf-"+G.roomCode;G.peer=new ru(n),G.peer.on("open",i=>{G.localId=i,G.players.push({id:G.localId,name:G.localName,colorIndex:0,isHost:!0}),G.onPlayerListChanged&&G.onPlayerListChanged(G.players),e(G.roomCode)}),G.peer.on("connection",i=>{jx(i)}),G.peer.on("error",i=>{console.error("PeerJS host error:",i),t(i)})})}function jx(s){s.on("open",()=>{if(G.players.length>=ou){s.send({type:at.WELCOME,rejected:!0,reason:"Game is full"}),setTimeout(()=>s.close(),100);return}if(G.gameActive){s.send({type:at.WELCOME,rejected:!0,reason:"Game in progress"}),setTimeout(()=>s.close(),100);return}G.connections[s.peer]=s;const e=s.metadata&&s.metadata.name||"Player",t=Xx(),n={id:s.peer,name:e,colorIndex:t,isHost:!1};G.players.push(n),s.send({type:at.WELCOME,rejected:!1,yourColorIndex:t,players:Wx()});for(const[i,r]of Object.entries(G.connections))i!==s.peer&&r.open&&r.send({type:at.PLAYER_JOINED,player:n});G.onPlayerListChanged&&G.onPlayerListChanged(G.players),s.on("data",i=>Yx(s.peer,i)),s.on("close",()=>{$x(s.peer)})})}function Yx(s,e){switch(e.type){case at.BALL_UPDATE:for(const[t,n]of Object.entries(G.connections))t!==s&&n.open&&n.send({type:at.REMOTE_BALL_UPDATE,playerId:s,position:e.position,velocity:e.velocity,timestamp:e.timestamp});G.onRemoteBallUpdate&&G.onRemoteBallUpdate(s,e.position,e.velocity,e.timestamp);break;case at.WIN:Qi({type:at.WIN,playerId:e.playerId,playerName:e.playerName}),G.onWin&&G.onWin(e.playerId,e.playerName);break;case at.CHAT:Qi({type:at.CHAT,name:e.name,text:e.text}),G.onChat&&G.onChat(e.name,e.text);break}}function $x(s){delete G.connections[s],G.players=G.players.filter(e=>e.id!==s),Qi({type:at.PLAYER_LEFT,playerId:s}),G.onPlayerListChanged&&G.onPlayerListChanged(G.players)}function Kx(s,e){return G.localName=s||"Player",G.isHost=!1,G.roomCode=e.toUpperCase().trim(),G.players=[],G.connections={},G.gameActive=!1,new Promise((t,n)=>{G.peer=new ru(void 0),G.peer.on("open",i=>{G.localId=i;const r=G.peer.connect("golf-"+G.roomCode,{metadata:{name:G.localName},reliable:!0});r.on("open",()=>{G.connections.host=r,r.on("data",o=>Zx(o)),r.on("close",()=>{G.onDisconnect&&G.onDisconnect("Host left the game"),Go()})}),r.on("error",o=>{console.error("Guest connection error:",o),n(o)}),setTimeout(()=>{G.connections.host||(n(new Error("Could not connect to room "+G.roomCode)),Go())},8e3)}),G.peer.on("error",i=>{console.error("PeerJS guest error:",i),n(i)}),G._resolveJoin=t,G._rejectJoin=n})}function Zx(s){switch(s.type){case at.WELCOME:if(s.rejected){G.onDisconnect&&G.onDisconnect(s.reason||"Rejected"),Go(),G._rejectJoin&&G._rejectJoin(new Error(s.reason||"Rejected"));return}G.players=s.players;const e=G.players.find(t=>t.id===G.localId);e&&(e.colorIndex=s.yourColorIndex),G.onPlayerListChanged&&G.onPlayerListChanged(G.players),G._resolveJoin&&G._resolveJoin(G.roomCode),G._resolveJoin=null,G._rejectJoin=null;break;case at.PLAYER_JOINED:G.players.push(s.player),G.onPlayerListChanged&&G.onPlayerListChanged(G.players);break;case at.PLAYER_LEFT:G.players=G.players.filter(t=>t.id!==s.playerId),G.onPlayerListChanged&&G.onPlayerListChanged(G.players);break;case at.LOBBY_STATE:G.players=s.players,G.onPlayerListChanged&&G.onPlayerListChanged(G.players);break;case at.GAME_START:G.gameActive=!0,G.onGameStart&&G.onGameStart();break;case at.REMOTE_BALL_UPDATE:G.onRemoteBallUpdate&&G.onRemoteBallUpdate(s.playerId,s.position,s.velocity,s.timestamp);break;case at.WIN:G.onWin&&G.onWin(s.playerId,s.playerName);break;case at.PLAY_AGAIN:G.gameActive=!1,G.onPlayAgain&&G.onPlayAgain();break;case at.CHAT:G.onChat&&G.onChat(s.name,s.text);break}}function Jx(){G.isHost&&(G.gameActive=!0,Qi({type:at.GAME_START}),G.onGameStart&&G.onGameStart())}function Qx(s,e){const t={type:at.BALL_UPDATE,position:{x:s.x,y:s.y,z:s.z},velocity:{x:e.x,y:e.y,z:e.z},timestamp:Date.now()};if(G.isHost)for(const[n,i]of Object.entries(G.connections))i.open&&i.send({type:at.REMOTE_BALL_UPDATE,playerId:G.localId,position:t.position,velocity:t.velocity,timestamp:t.timestamp});else au(t)}function ey(){const s={type:at.WIN,playerId:G.localId,playerName:G.localName};G.isHost?(Qi(s),G.onWin&&G.onWin(G.localId,G.localName)):au(s)}function ty(){G.isHost&&(G.gameActive=!1,Qi({type:at.PLAY_AGAIN}),G.onPlayAgain&&G.onPlayAgain())}function ny(s,e){!G.peer||!G.gameActive||!e||(G.syncTimer+=s,G.syncTimer>=Vx&&(G.syncTimer=0,Qx(e.position,e.velocity)))}function Go(){for(const s of Object.values(G.connections))try{s.close()}catch{}if(G.connections={},G.players=[],G.gameActive=!1,G.syncTimer=0,G.peer){try{G.peer.destroy()}catch{}G.peer=null}}function iy(){return G.players.find(s=>s.id===G.localId)||null}function sy(s){return G.players.find(e=>e.id===s)||null}const z={scene:null,camera:null,renderer:null,labelRenderer:null,controls:null,world:null,clock:null,ball:null,ballBody:null,ballMaterial:null,remoteBalls:{},courseMeshes:[],courseBodies:[],holePosition:new F(0,0,0),holeRadius:.6,startPosition:new F(0,1.5,0),charging:!1,chargeTime:0,maxCharge:2,maxPower:18,canJump:!0,hasWon:!1,onChargeChanged:null,onWinHole:null},Ms=.2,cu=new ns("ground"),lu=new ns("ball"),ry=1/60;function oy(s){z.renderer=new rh({antialias:!0}),z.renderer.setSize(window.innerWidth,window.innerHeight),z.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.renderer.shadowMap.enabled=!0,z.renderer.shadowMap.type=Cl,z.renderer.setClearColor(8900331),s.appendChild(z.renderer.domElement),z.labelRenderer=new _x,z.labelRenderer.setSize(window.innerWidth,window.innerHeight),z.labelRenderer.domElement.style.position="absolute",z.labelRenderer.domElement.style.top="0",z.labelRenderer.domElement.style.pointerEvents="none",s.appendChild(z.labelRenderer.domElement),z.scene=new O_,z.scene.fog=new Jo(8900331,40,120),z.camera=new Qt(60,window.innerWidth/window.innerHeight,.1,200),z.camera.position.set(0,8,12),z.controls=new mx(z.camera,z.renderer.domElement),z.controls.enableDamping=!0,z.controls.dampingFactor=.1,z.controls.maxPolarAngle=Math.PI/2-.05,z.controls.minDistance=3,z.controls.maxDistance=25;const e=new k_(16777215,.5);z.scene.add(e);const t=new z_(16777215,1);t.position.set(15,25,15),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,t.shadow.camera.near=.5,t.shadow.camera.far=80,z.scene.add(t),z.clock=new G_,z.world=new ax({gravity:new S(0,-15,0)}),z.world.broadphase=new Wi(z.world),z.world.allowSleep=!1;const n=new Rs(cu,lu,{friction:.4,restitution:.3});z.world.addContactMaterial(n),window.addEventListener("resize",ay)}function ay(){z.camera.aspect=window.innerWidth/window.innerHeight,z.camera.updateProjectionMatrix(),z.renderer.setSize(window.innerWidth,window.innerHeight),z.labelRenderer.setSize(window.innerWidth,window.innerHeight)}function _t(s,e,t,n,i=!0){const r=new Vt(s,e);if(r.position.copy(t),n&&r.rotation.set(n.x,n.y,n.z),r.castShadow=!0,r.receiveShadow=!0,z.scene.add(r),z.courseMeshes.push(r),i){const o=cy(s);if(o){const a=new _e({mass:0,material:cu});if(a.addShape(o),a.position.set(t.x,t.y,t.z),n){const c=new jn().setFromEuler(new cn(n.x,n.y,n.z));a.quaternion.set(c.x,c.y,c.z,c.w)}z.world.addBody(a),z.courseBodies.push(a)}}return r}function cy(s,e){if(s instanceof rt){const t=s.parameters;return new ys(new S(t.width/2,t.height/2,t.depth/2))}if(s instanceof di){const t=s.parameters;return new V0(t.radiusTop,t.radiusBottom,t.height,t.radialSegments||16)}return s instanceof As?new gh(s.parameters.radius):new ys(new S(.5,.5,.5))}function ft(s){return new wr({color:s,flatShading:!0})}function ly(){const s=new rt(100,.2,100);_t(s,ft(4890186),new F(0,-.1,0)),_t(new rt(4,.5,4),ft(7063915),new F(0,.25,0)),z.startPosition.set(0,1.5,0),_t(new rt(4,.5,10),ft(5945434),new F(0,.25,-7)),_t(new rt(.3,.8,10),ft(9136404),new F(-2.15,.6,-7)),_t(new rt(.3,.8,10),ft(9136404),new F(2.15,.6,-7)),_t(new rt(1.8,1,.8),ft(14701909),new F(0,1,-5)),_t(new rt(1.2,.8,.8),ft(13936707),new F(-1,1,-8)),_t(new rt(1.2,.8,.8),ft(13936707),new F(1,1,-10)),_t(new rt(4,.5,5),ft(8308862),new F(0,1.25,-14.5),{x:-Math.atan2(1.5,5),y:0,z:0}),_t(new rt(4,.5,8),ft(5945434),new F(0,2.25,-21)),_t(new rt(.3,.8,8),ft(9136404),new F(-2.15,2.9,-21)),_t(new rt(.3,.8,8),ft(9136404),new F(2.15,2.9,-21)),_t(new di(.4,.4,1.5,8),ft(5605580),new F(-.8,3.25,-19)),_t(new di(.4,.4,1.5,8),ft(5605580),new F(.8,3.25,-22)),_t(new rt(5,.5,4),ft(7063915),new F(2,2.25,-27)),_t(new rt(.3,.8,4),ft(9136404),new F(4.65,2.9,-27)),_t(new rt(5,.5,4),ft(5945434),new F(4,2.25,-33)),_t(new rt(.3,.8,4),ft(9136404),new F(6.65,2.9,-33)),_t(new rt(4,.5,5),ft(8308862),new F(4,1,-37.5),{x:Math.atan2(2,5),y:0,z:0}),_t(new rt(5,.5,5),ft(7063915),new F(4,.25,-42));const e=new di(z.holeRadius,z.holeRadius,.02,32),t=new wr({color:1118481,flatShading:!0}),n=new Vt(e,t);n.position.set(4,.51,-42),n.receiveShadow=!0,z.scene.add(n),z.holePosition.set(4,.5,-42),_t(new di(.04,.04,2,8),ft(13421772),new F(4,1.5,-42));const i=new rt(.6,.35,.02),r=new Vt(i,ft(16724787));r.position.set(4.3,2.3,-42),r.castShadow=!0,z.scene.add(r)}function hy(s){const e=Mr[s]||Mr[0],t=new As(Ms,16,16),n=new wr({color:e,flatShading:!0});z.ball=new Vt(t,n),z.ball.castShadow=!0,z.scene.add(z.ball),z.ballBody=new _e({mass:1,shape:new gh(Ms),material:lu,linearDamping:.3,angularDamping:.4}),z.ballBody.position.set(z.startPosition.x,z.startPosition.y,z.startPosition.z),z.world.addBody(z.ballBody),z.hasWon=!1}function uy(){z.ballBody&&(z.ballBody.position.set(z.startPosition.x,z.startPosition.y,z.startPosition.z),z.ballBody.velocity.setZero(),z.ballBody.angularVelocity.setZero()),z.charging=!1,z.chargeTime=0,z.hasWon=!1}function oa(s,e,t){if(z.remoteBalls[s])return;const n=Mr[e]||Mr[1],i=new As(Ms,16,16),r=new wr({color:n,flatShading:!0}),o=new Vt(i,r);o.castShadow=!0,o.position.copy(z.startPosition),z.scene.add(o);const a=document.createElement("div");a.className="player-label",a.textContent=t||"Player",a.style.color="#"+n.toString(16).padStart(6,"0");const c=new gx(a);c.position.set(0,Ms+.5,0),o.add(c),z.remoteBalls[s]={mesh:o,label:c,targetPos:new F().copy(z.startPosition),targetVel:new F,lastUpdate:Date.now()}}function hu(s){const e=z.remoteBalls[s];e&&(z.scene.remove(e.mesh),delete z.remoteBalls[s])}function dy(s,e,t,n){const i=z.remoteBalls[s];i&&(i.targetPos.set(e.x,e.y,e.z),i.targetVel.set(t.x,t.y,t.z),i.lastUpdate=n||Date.now())}function fy(s){const e=Date.now();for(const[t,n]of Object.entries(z.remoteBalls)){const i=(e-n.lastUpdate)/1e3,r=n.targetPos.clone().add(n.targetVel.clone().multiplyScalar(i));n.mesh.position.lerp(r,Math.min(1,s*12))}}function py(){window.addEventListener("keydown",s=>{z.hasWon||(s.code==="Space"&&!z.charging&&!s.repeat&&(z.charging=!0,z.chargeTime=0),(s.code==="KeyW"||s.code==="ArrowUp")&&my())}),window.addEventListener("keyup",s=>{s.code==="Space"&&z.charging&&(gy(),z.charging=!1,z.chargeTime=0,z.onChargeChanged&&z.onChargeChanged(0))})}function my(){if(!z.ballBody||z.hasWon)return;const s=new S(z.ballBody.position.x,z.ballBody.position.y,z.ballBody.position.z),e=new S(z.ballBody.position.x,z.ballBody.position.y-Ms-.15,z.ballBody.position.z),t=new pt(s,e);t.mode=pt.CLOSEST,t.skipBackfaces=!0;const n=new Ss;t.intersectWorld(z.world,{result:n,skipBackfaces:!0}),n.hasHit&&(z.ballBody.velocity.y=6)}function gy(){if(!z.ballBody||z.hasWon)return;const e=Math.min(z.chargeTime/z.maxCharge,1)*z.maxPower;if(e<.5)return;const t=new F;z.camera.getWorldDirection(t),t.y=0,t.normalize(),z.ballBody.velocity.x+=t.x*e,z.ballBody.velocity.z+=t.z*e}function _y(){if(z.hasWon||!z.ballBody)return;const s=z.ballBody.position.x,e=z.ballBody.position.y,t=z.ballBody.position.z,n=s-z.holePosition.x,i=t-z.holePosition.z;Math.sqrt(n*n+i*i)<z.holeRadius&&e<z.holePosition.y&&(z.hasWon=!0,z.onWinHole&&z.onWinHole())}function vy(s){if(z.charging){z.chargeTime=Math.min(z.chargeTime+s,z.maxCharge);const e=z.chargeTime/z.maxCharge;z.onChargeChanged&&z.onChargeChanged(e)}z.world.step(ry,s,3),z.ball&&z.ballBody&&(z.ball.position.copy(z.ballBody.position),z.ball.quaternion.copy(z.ballBody.quaternion),z.ballBody.position.y<-5&&uy()),fy(s),z.ball&&z.controls.target.lerp(z.ball.position,.1),z.controls.update(),_y()}function xy(){z.renderer.render(z.scene,z.camera),z.labelRenderer.render(z.scene,z.camera)}function aa(){for(const s of Object.keys(z.remoteBalls))hu(s);z.ball&&(z.scene.remove(z.ball),z.ball=null),z.ballBody&&(z.world.removeBody(z.ballBody),z.ballBody=null),z.charging=!1,z.chargeTime=0,z.hasWon=!1}const mt={screens:{},onCreateGame:null,onJoinGame:null,onStartGame:null,onPlayAgain:null};function yy(){mt.screens={mainMenu:document.getElementById("screen-main-menu"),lobby:document.getElementById("screen-lobby"),countdown:document.getElementById("screen-countdown"),hud:document.getElementById("screen-hud"),win:document.getElementById("screen-win"),toast:document.getElementById("toast")},document.getElementById("btn-create").addEventListener("click",()=>{const s=document.getElementById("input-name").value.trim()||"Player 1";mt.onCreateGame&&mt.onCreateGame(s)}),document.getElementById("btn-join").addEventListener("click",()=>{const s=document.getElementById("input-name").value.trim()||"Player",e=document.getElementById("input-code").value.trim().toUpperCase();if(!e){es("Please enter a room code");return}mt.onJoinGame&&mt.onJoinGame(s,e)}),document.getElementById("btn-start-game").addEventListener("click",()=>{mt.onStartGame&&mt.onStartGame()}),document.getElementById("btn-copy-code").addEventListener("click",()=>{const s=document.getElementById("lobby-code").textContent;navigator.clipboard.writeText(s).then(()=>{es("Code copied!")})}),document.getElementById("btn-play-again").addEventListener("click",()=>{mt.onPlayAgain&&mt.onPlayAgain()})}function ca(){for(const s of Object.values(mt.screens))s&&s.classList.add("hidden")}function uu(){ca(),mt.screens.mainMenu.classList.remove("hidden")}function la(s,e){ca(),mt.screens.lobby.classList.remove("hidden"),document.getElementById("lobby-code").textContent=s,document.getElementById("btn-start-game").style.display=e?"inline-block":"none",document.getElementById("lobby-waiting").style.display=e?"none":"block",ua(!1)}function ha(s){var n,i;const e=document.getElementById("player-list");e.innerHTML="";for(const r of s){const o=document.createElement("li"),a="#"+(r.colorIndex!==void 0?(n=[16729156,4491519,16763904,4508740][r.colorIndex])==null?void 0:n.toString(16).padStart(6,"0"):"ffffff");o.innerHTML=`<span class="player-dot" style="background:${a}"></span> ${bl(r.name)}${r.isHost?" (Host)":""}`,e.appendChild(o)}const t=document.getElementById("hud-players");if(t){t.innerHTML="";for(const r of s){const o=document.createElement("div"),a="#"+(r.colorIndex!==void 0?(i=[16729156,4491519,16763904,4508740][r.colorIndex])==null?void 0:i.toString(16).padStart(6,"0"):"ffffff");o.innerHTML=`<span class="player-dot" style="background:${a}"></span> ${bl(r.name)}`,t.appendChild(o)}}}function ua(s){const e=document.getElementById("btn-start-game");e.disabled=!s}function Sy(s){ca(),mt.screens.countdown.classList.remove("hidden");const e=document.getElementById("countdown-text"),t=["3","2","1","GO!"];let n=0;e.textContent=t[0],e.className="countdown-number countdown-animate";const i=setInterval(()=>{if(n++,n>=t.length){clearInterval(i),setTimeout(()=>{mt.screens.countdown.classList.add("hidden"),Ey(),s&&s()},600);return}e.textContent=t[n],e.className="countdown-number",e.offsetWidth,e.className="countdown-number countdown-animate"},1e3)}function Ey(){mt.screens.hud.classList.remove("hidden")}function du(){mt.screens.hud.classList.add("hidden")}function My(s){const e=document.getElementById("charge-fill");e&&(e.style.width=s*100+"%",s<.5?e.style.background=`rgb(${Math.floor(s*2*255)}, 200, 50)`:e.style.background=`rgb(255, ${Math.floor((1-s)*2*200)}, 50)`)}function fu(s,e){du(),mt.screens.win.classList.remove("hidden"),document.getElementById("winner-name").textContent=s+" wins!",document.getElementById("btn-play-again").style.display=e?"inline-block":"none",document.getElementById("win-waiting").style.display=e?"none":"block"}function es(s,e=3e3){const t=mt.screens.toast;t.textContent=s,t.classList.remove("hidden"),t.classList.add("toast-show"),setTimeout(()=>{t.classList.remove("toast-show"),t.classList.add("hidden")},e)}function bl(s){const e=document.createElement("div");return e.textContent=s,e.innerHTML}let mi=!1;function by(){const s=document.getElementById("game-container");oy(s),ly(),py(),yy(),mt.onCreateGame=Ty,mt.onJoinGame=Cy,mt.onStartGame=Ay,mt.onPlayAgain=Ly,z.onChargeChanged=My,z.onWinHole=Py,uu(),pu()}function pu(){requestAnimationFrame(pu);const s=Math.min(z.clock.getDelta(),.05);mi&&(vy(s),ny(s,z.ballBody)),xy()}function mu(){G.onPlayerListChanged=s=>{ha(s),G.isHost&&ua(s.length>=2),mi&&Ry(s)},G.onGameStart=()=>{wy()},G.onRemoteBallUpdate=(s,e,t,n)=>{const i=sy(s);i&&!z.remoteBalls[s]&&oa(s,i.colorIndex,i.name),dy(s,e,t,n)},G.onWin=(s,e)=>{mi=!1,fu(e,G.isHost)},G.onPlayAgain=()=>{Iy()},G.onDisconnect=s=>{mi=!1,aa(),es(s,4e3),setTimeout(()=>{uu()},1500)},G.onChat=(s,e)=>{es(`${s}: ${e}`,3e3)}}async function Ty(s){try{mu();const e=await qx(s);la(e,!0),ha(G.players)}catch(e){es("Failed to create game: "+e.message),console.error(e)}}async function Cy(s,e){try{mu(),await Kx(s,e),la(e,!1)}catch(t){es("Failed to join: "+t.message),console.error(t)}}function Ay(){G.isHost&&Jx()}function wy(){Sy(()=>{aa();const s=iy(),e=s?s.colorIndex:0;hy(e);for(const t of G.players)t.id!==G.localId&&oa(t.id,t.colorIndex,t.name);mi=!0})}function Ry(s){for(const t of s)t.id!==G.localId&&!z.remoteBalls[t.id]&&oa(t.id,t.colorIndex,t.name);const e=new Set(s.map(t=>t.id));for(const t of Object.keys(z.remoteBalls))e.has(t)||hu(t)}function Py(){ey(),mi=!1,fu(G.localName,G.isHost)}function Ly(){G.isHost&&ty()}function Iy(){mi=!1,aa(),du(),la(G.roomCode,G.isHost),ha(G.players),G.isHost&&ua(G.players.length>=2)}by();
