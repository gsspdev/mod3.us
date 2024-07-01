(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const q={},we=[],yt=()=>{},us=()=>!1,Hn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kr=t=>t.startsWith("onUpdate:"),at=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ds=Object.prototype.hasOwnProperty,U=(t,e)=>ds.call(t,e),R=Array.isArray,ke=t=>Bn(t)==="[object Map]",ja=t=>Bn(t)==="[object Set]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Ie=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",$a=t=>(J(t)||F(t))&&F(t.then)&&F(t.catch),za=Object.prototype.toString,Bn=t=>za.call(t),ms=t=>Bn(t).slice(8,-1),Da=t=>Bn(t)==="[object Object]",Xr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$e=Vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hs=/-(\w)/g,Rt=Yn(t=>t.replace(hs,(e,n)=>n?n.toUpperCase():"")),ps=/\B([A-Z])/g,Te=Yn(t=>t.replace(ps,"-$1").toLowerCase()),Wn=Yn(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=Yn(t=>t?`on${Wn(t)}`:""),Jt=(t,e)=>!Object.is(t,e),lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ni;const Ua=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=nt(r)?_s(r):qr(r);if(i)for(const a in i)e[a]=i[a]}return e}else if(nt(t)||J(t))return t}const vs=/;(?![^(]*\))/g,bs=/:([^]+)/,ys=/\/\*[^]*?\*\//g;function _s(t){const e={};return t.replace(ys,"").split(vs).forEach(n=>{if(n){const r=n.split(bs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tn(t){let e="";if(nt(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=tn(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ws=Vr(xs);function Ha(t){return!!t||t===""}const oe=t=>nt(t)?t:t==null?"":R(t)||J(t)&&(t.toString===za||!F(t.toString))?JSON.stringify(t,Ba,2):String(t),Ba=(t,e)=>e&&e.__v_isRef?Ba(t,e.value):ke(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],a)=>(n[fr(r,a)+" =>"]=i,n),{})}:ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fr(n))}:Ie(e)?fr(e):J(e)&&!R(e)&&!Da(e)?String(e):e,fr=(t,e="")=>{var n;return Ie(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class ks{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function As(t,e=xt){e&&e.active&&e.effects.push(t)}function Os(){return xt}let ce;class Jr{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,As(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pe();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Es(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ge()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Xt,n=ce;try{return Xt=!0,ce=this,this._runnings++,Mi(this),this.fn()}finally{Ri(this),this._runnings--,ce=n,Xt=e}}stop(){var e;this.active&&(Mi(this),Ri(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Es(t){return t.value}function Mi(t){t._trackId++,t._depsLength=0}function Ri(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ya(t.deps[e],t);t.deps.length=t._depsLength}}function Ya(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Xt=!0,xr=0;const Wa=[];function pe(){Wa.push(Xt),Xt=!1}function ge(){const t=Wa.pop();Xt=t===void 0?!0:t}function Zr(){xr++}function Qr(){for(xr--;!xr&&wr.length;)wr.shift()()}function Va(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ya(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wr=[];function Ka(t,e,n){Zr();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i??(i=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&wr.push(r.scheduler)))}Qr()}const Ga=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},kr=new WeakMap,ue=Symbol(""),Ar=Symbol("");function mt(t,e,n){if(Xt&&ce){let r=kr.get(t);r||kr.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ga(()=>r.delete(n))),Va(ce,i)}}function $t(t,e,n,r,i,a){const o=kr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Ie(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?Xr(n)&&s.push(o.get("length")):(s.push(o.get(ue)),ke(t)&&s.push(o.get(Ar)));break;case"delete":R(t)||(s.push(o.get(ue)),ke(t)&&s.push(o.get(Ar)));break;case"set":ke(t)&&s.push(o.get(ue));break}Zr();for(const l of s)l&&Ka(l,4);Qr()}const Ss=Vr("__proto__,__v_isRef,__isVue"),Xa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ie)),Li=Cs();function Cs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let a=0,o=this.length;a<o;a++)mt(r,"get",a+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(B)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pe(),Zr();const r=B(this)[e].apply(this,n);return Qr(),ge(),r}}),t}function Ps(t){const e=B(this);return mt(e,"has",t),e.hasOwnProperty(t)}class qa{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Hs:to:a?Qa:Za).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!i){if(o&&U(Li,n))return Reflect.get(Li,n,r);if(n==="hasOwnProperty")return Ps}const s=Reflect.get(e,n,r);return(Ie(n)?Xa.has(n):Ss(n))||(i||mt(e,"get",n),a)?s:ht(s)?o&&Xr(n)?s:s.value:J(s)?i?eo(s):ni(s):s}}class Ja extends qa{constructor(e=!1){super(!1,e)}set(e,n,r,i){let a=e[n];if(!this._shallow){const l=Se(a);if(!Mn(r)&&!Se(r)&&(a=B(a),r=B(r)),!R(e)&&ht(a)&&!ht(r))return l?!1:(a.value=r,!0)}const o=R(e)&&Xr(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,i);return e===B(i)&&(o?Jt(r,a)&&$t(e,"set",n,r):$t(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&$t(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Ie(n)||!Xa.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",R(e)?"length":ue),Reflect.ownKeys(e)}}class Is extends qa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ts=new Ja,Ns=new Is,Ms=new Ja(!0),ti=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function cn(t,e,n=!1,r=!1){t=t.__v_raw;const i=B(t),a=B(e);n||(Jt(e,a)&&mt(i,"get",e),mt(i,"get",a));const{has:o}=Vn(i),s=r?ti:n?ii:We;if(o.call(i,e))return s(t.get(e));if(o.call(i,a))return s(t.get(a));t!==i&&t.get(e)}function un(t,e=!1){const n=this.__v_raw,r=B(n),i=B(t);return e||(Jt(t,i)&&mt(r,"has",t),mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function dn(t,e=!1){return t=t.__v_raw,!e&&mt(B(t),"iterate",ue),Reflect.get(t,"size",t)}function Fi(t){t=B(t);const e=B(this);return Vn(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function ji(t,e){e=B(e);const n=B(this),{has:r,get:i}=Vn(n);let a=r.call(n,t);a||(t=B(t),a=r.call(n,t));const o=i.call(n,t);return n.set(t,e),a?Jt(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function $i(t){const e=B(this),{has:n,get:r}=Vn(e);let i=n.call(e,t);i||(t=B(t),i=n.call(e,t)),r&&r.call(e,t);const a=e.delete(t);return i&&$t(e,"delete",t,void 0),a}function zi(){const t=B(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function mn(t,e){return function(r,i){const a=this,o=a.__v_raw,s=B(o),l=e?ti:t?ii:We;return!t&&mt(s,"iterate",ue),o.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function hn(t,e,n){return function(...r){const i=this.__v_raw,a=B(i),o=ke(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ti:e?ii:We;return!e&&mt(a,"iterate",l?Ar:ue),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rs(){const t={get(a){return cn(this,a)},get size(){return dn(this)},has:un,add:Fi,set:ji,delete:$i,clear:zi,forEach:mn(!1,!1)},e={get(a){return cn(this,a,!1,!0)},get size(){return dn(this)},has:un,add:Fi,set:ji,delete:$i,clear:zi,forEach:mn(!1,!0)},n={get(a){return cn(this,a,!0)},get size(){return dn(this,!0)},has(a){return un.call(this,a,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:mn(!0,!1)},r={get(a){return cn(this,a,!0,!0)},get size(){return dn(this,!0)},has(a){return un.call(this,a,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=hn(a,!1,!1),n[a]=hn(a,!0,!1),e[a]=hn(a,!1,!0),r[a]=hn(a,!0,!0)}),[t,n,e,r]}const[Ls,Fs,js,$s]=Rs();function ei(t,e){const n=e?t?$s:js:t?Fs:Ls;return(r,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const zs={get:ei(!1,!1)},Ds={get:ei(!1,!0)},Us={get:ei(!0,!1)},Za=new WeakMap,Qa=new WeakMap,to=new WeakMap,Hs=new WeakMap;function Bs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ys(t){return t.__v_skip||!Object.isExtensible(t)?0:Bs(ms(t))}function ni(t){return Se(t)?t:ri(t,!1,Ts,zs,Za)}function Ws(t){return ri(t,!1,Ms,Ds,Qa)}function eo(t){return ri(t,!0,Ns,Us,to)}function ri(t,e,n,r,i){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const o=Ys(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return i.set(t,s),s}function Ae(t){return Se(t)?Ae(t.__v_raw):!!(t&&t.__v_isReactive)}function Se(t){return!!(t&&t.__v_isReadonly)}function Mn(t){return!!(t&&t.__v_isShallow)}function no(t){return Ae(t)||Se(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function ro(t){return Object.isExtensible(t)&&Nn(t,"__v_skip",!0),t}const We=t=>J(t)?ni(t):t,ii=t=>J(t)?eo(t):t;class io{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Jr(()=>e(this._value),()=>On(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=B(this);return(!e._cacheable||e.effect.dirty)&&Jt(e._value,e._value=e.effect.run())&&On(e,4),ao(e),e.effect._dirtyLevel>=2&&On(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Vs(t,e,n=!1){let r,i;const a=F(t);return a?(r=t,i=yt):(r=t.get,i=t.set),new io(r,i,a||!i,n)}function ao(t){var e;Xt&&ce&&(t=B(t),Va(ce,(e=t.dep)!=null?e:t.dep=Ga(()=>t.dep=void 0,t instanceof io?t:void 0)))}function On(t,e=4,n){t=B(t);const r=t.dep;r&&Ka(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Rn(t){return Ks(t,!1)}function Ks(t,e){return ht(t)?t:new Gs(t,e)}class Gs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:We(e)}get value(){return ao(this),this._value}set value(e){const n=this.__v_isShallow||Mn(e)||Se(e);e=n?e:B(e),Jt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:We(e),On(this,4))}}function Xs(t){return ht(t)?t.value:t}const qs={get:(t,e,n)=>Xs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ht(i)&&!ht(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function oo(t){return Ae(t)?t:new Proxy(t,qs)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qt(t,e,n,r){try{return r?t(...r):t()}catch(i){Kn(i,e,n)}}function Et(t,e,n,r){if(F(t)){const a=qt(t,e,n,r);return a&&$a(a)&&a.catch(o=>{Kn(o,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(Et(t[a],e,n,r));return i}function Kn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){qt(l,null,10,[t,o,s]);return}}Js(t,n,i,r)}function Js(t,e,n,r=!0){console.error(t)}let Ve=!1,Or=!1;const ot=[];let Tt=0;const Oe=[];let Vt=null,se=0;const so=Promise.resolve();let ai=null;function Zs(t){const e=ai||so;return t?e.then(this?t.bind(this):t):e}function Qs(t){let e=Tt+1,n=ot.length;for(;e<n;){const r=e+n>>>1,i=ot[r],a=Ke(i);a<t||a===t&&i.pre?e=r+1:n=r}return e}function oi(t){(!ot.length||!ot.includes(t,Ve&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?ot.push(t):ot.splice(Qs(t.id),0,t),lo())}function lo(){!Ve&&!Or&&(Or=!0,ai=so.then(co))}function tl(t){const e=ot.indexOf(t);e>Tt&&ot.splice(e,1)}function el(t){R(t)?Oe.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?se+1:se))&&Oe.push(t),lo()}function Di(t,e,n=Ve?Tt+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function fo(t){if(Oe.length){const e=[...new Set(Oe)].sort((n,r)=>Ke(n)-Ke(r));if(Oe.length=0,Vt){Vt.push(...e);return}for(Vt=e,se=0;se<Vt.length;se++)Vt[se]();Vt=null,se=0}}const Ke=t=>t.id==null?1/0:t.id,nl=(t,e)=>{const n=Ke(t)-Ke(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function co(t){Or=!1,Ve=!0,ot.sort(nl);try{for(Tt=0;Tt<ot.length;Tt++){const e=ot[Tt];e&&e.active!==!1&&qt(e,null,14)}}finally{Tt=0,ot.length=0,fo(),Ve=!1,ai=null,(ot.length||Oe.length)&&co()}}function rl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let i=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||q;v&&(i=n.map(k=>nt(k)?k.trim():k)),m&&(i=n.map(gs))}let s,l=r[s=sr(e)]||r[s=sr(Rt(e))];!l&&a&&(l=r[s=sr(Te(e))]),l&&Et(l,t,6,i);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Et(c,t,6,i)}}function uo(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const a=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=uo(c,e,!0);u&&(s=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(J(t)&&r.set(t,null),null):(R(a)?a.forEach(l=>o[l]=null):at(o,a),J(t)&&r.set(t,o),o)}function Gn(t,e){return!t||!Hn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Te(e))||U(t,e))}let wt=null,mo=null;function Ln(t){const e=wt;return wt=t,mo=t&&t.type.__scopeId||null,e}function il(t,e=wt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ji(-1);const a=Ln(e);let o;try{o=t(...i)}finally{Ln(a),r._d&&Ji(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:k,ctx:j,inheritAttrs:N}=t;let D,w;const S=Ln(t);try{if(n.shapeFlag&4){const $=i||r,H=$;D=It(u.call(H,$,m,a,k,v,j)),w=l}else{const $=e;D=It($.length>1?$(a,{attrs:l,slots:s,emit:c}):$(a,null)),w=e.props?l:al(l)}}catch($){Ue.length=0,Kn($,t,1),D=tt(de)}let P=D;if(w&&N!==!1){const $=Object.keys(w),{shapeFlag:H}=P;$.length&&H&7&&(o&&$.some(Kr)&&(w=ol(w,o)),P=Ce(P,w))}return n.dirs&&(P=Ce(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),D=P,Ln(S),D}const al=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hn(n))&&((e||(e={}))[n]=t[n]);return e},ol=(t,e)=>{const n={};for(const r in t)(!Kr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sl(t,e,n){const{props:r,children:i,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ui(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Gn(c,v))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ui(r,o,c):!0:!!o;return!1}function Ui(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(e[a]!==t[a]&&!Gn(n,a))return!0}return!1}function ll({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ho="components";function si(t,e){return cl(ho,t,!0,e)||t}const fl=Symbol.for("v-ndc");function cl(t,e,n=!0,r=!1){const i=wt||st;if(i){const a=i.type;if(t===ho){const s=lf(a,!1);if(s&&(s===e||s===Rt(e)||s===Wn(Rt(e))))return a}const o=Hi(i[t]||a[t],e)||Hi(i.appContext[t],e);return!o&&r?a:o}}function Hi(t,e){return t&&(t[e]||t[Rt(e)]||t[Wn(Rt(e))])}const ul=t=>t.__isSuspense;function dl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):el(t)}const ml=Symbol.for("v-scx"),hl=()=>Cn(ml),pn={};function En(t,e,n){return po(t,e,n)}function po(t,e,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=q){if(e&&a){const L=e;e=(...et)=>{L(...et),H()}}const l=st,c=L=>r===!0?L:ye(L,r===!1?1:void 0);let u,m=!1,v=!1;if(ht(t)?(u=()=>t.value,m=Mn(t)):Ae(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(L=>Ae(L)||Mn(L)),u=()=>t.map(L=>{if(ht(L))return L.value;if(Ae(L))return c(L);if(F(L))return qt(L,l,2)})):F(t)?e?u=()=>qt(t,l,2):u=()=>(k&&k(),Et(t,l,3,[j])):u=yt,e&&r){const L=u;u=()=>ye(L())}let k,j=L=>{k=P.onStop=()=>{qt(L,l,4),k=P.onStop=void 0}},N;if(Zn)if(j=yt,e?n&&Et(e,l,3,[u(),v?[]:void 0,j]):u(),i==="sync"){const L=hl();N=L.__watcherHandles||(L.__watcherHandles=[])}else return yt;let D=v?new Array(t.length).fill(pn):pn;const w=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(v?L.some((et,ct)=>Jt(et,D[ct])):Jt(L,D)))&&(k&&k(),Et(e,l,3,[L,D===pn?void 0:v&&D[0]===pn?[]:D,j]),D=L)}else P.run()};w.allowRecurse=!!e;let S;i==="sync"?S=w:i==="post"?S=()=>dt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),S=()=>oi(w));const P=new Jr(u,yt,S),$=Os(),H=()=>{P.stop(),$&&Gr($.effects,P)};return e?n?w():D=P.run():i==="post"?dt(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(H),H}function pl(t,e,n){const r=this.proxy,i=nt(t)?t.includes(".")?go(r,t):()=>r[t]:t.bind(r,r);let a;F(e)?a=e:(a=e.handler,n=e);const o=en(this),s=po(i,a.bind(r),n);return o(),s}function go(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ye(t,e,n=0,r){if(!J(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))ye(t.value,e,n,r);else if(R(t))for(let i=0;i<t.length;i++)ye(t[i],e,n,r);else if(ja(t)||ke(t))t.forEach(i=>{ye(i,e,n,r)});else if(Da(t))for(const i in t)ye(t[i],e,n,r);return t}function re(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(pe(),Et(l,n,8,[t.el,s,t,e]),ge())}}/*! #__NO_SIDE_EFFECTS__ */function gl(t,e){return F(t)?at({name:t.name},e,{setup:t}):t}const Sn=t=>!!t.type.__asyncLoader,vo=t=>t.type.__isKeepAlive;function vl(t,e){bo(t,"a",e)}function bl(t,e){bo(t,"da",e)}function bo(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xn(e,r,n),n){let i=n.parent;for(;i&&i.parent;)vo(i.parent.vnode)&&yl(r,e,n,i),i=i.parent}}function yl(t,e,n,r){const i=Xn(e,t,r,!0);yo(()=>{Gr(r[e],i)},n)}function Xn(t,e,n=st,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pe();const s=en(n),l=Et(e,n,t,o);return s(),ge(),l});return r?i.unshift(a):i.push(a),a}}const Ht=t=>(e,n=st)=>(!Zn||t==="sp")&&Xn(t,(...r)=>e(...r),n),_l=Ht("bm"),li=Ht("m"),xl=Ht("bu"),wl=Ht("u"),kl=Ht("bum"),yo=Ht("um"),Al=Ht("sp"),Ol=Ht("rtg"),El=Ht("rtc");function Sl(t,e=st){Xn("ec",t,e)}function Cl(t,e,n,r){let i;const a=n&&n[r];if(R(t)||nt(t)){i=new Array(t.length);for(let o=0,s=t.length;o<s;o++)i[o]=e(t[o],o,void 0,a&&a[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,a&&a[o])}else if(J(t))if(t[Symbol.iterator])i=Array.from(t,(o,s)=>e(o,s,void 0,a&&a[s]));else{const o=Object.keys(t);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];i[s]=e(t[c],c,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const Er=t=>t?To(t)?di(t)||t.proxy:Er(t.parent):null,ze=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$emit:t=>t.emit,$options:t=>fi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,oi(t.update)}),$nextTick:t=>t.n||(t.n=Zs.bind(t.proxy)),$watch:t=>pl.bind(t)}),ur=(t,e)=>t!==q&&!t.__isScriptSetup&&U(t,e),Pl={get({_:t},e){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(ur(r,e))return o[e]=1,r[e];if(i!==q&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,a[e];if(n!==q&&U(n,e))return o[e]=4,n[e];Sr&&(o[e]=0)}}const u=ze[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:a}=t;return ur(i,e)?(i[e]=n,!0):r!==q&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||t!==q&&U(t,o)||ur(e,o)||(s=a[0])&&U(s,o)||U(r,o)||U(ze,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bi(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function Il(t){const e=fi(t),n=t.proxy,r=t.ctx;Sr=!1,e.beforeCreate&&Yi(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:k,updated:j,activated:N,deactivated:D,beforeDestroy:w,beforeUnmount:S,destroyed:P,unmounted:$,render:H,renderTracked:L,renderTriggered:et,errorCaptured:ct,serverPrefetch:bt,expose:Lt,inheritAttrs:Me,components:on,directives:sn,filters:rr}=e;if(c&&Tl(c,r,null),o)for(const Z in o){const W=o[Z];F(W)&&(r[Z]=W.bind(n))}if(i){const Z=i.call(n,n);J(Z)&&(t.data=ni(Z))}if(Sr=!0,a)for(const Z in a){const W=a[Z],ee=F(W)?W.bind(n,n):F(W.get)?W.get.bind(n,n):yt,ln=!F(W)&&F(W.set)?W.set.bind(n):yt,ne=ae({get:ee,set:ln});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ne.value,set:St=>ne.value=St})}if(s)for(const Z in s)_o(s[Z],r,n,Z);if(l){const Z=F(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(W=>{jl(W,Z[W])})}u&&Yi(u,t,"c");function lt(Z,W){R(W)?W.forEach(ee=>Z(ee.bind(n))):W&&Z(W.bind(n))}if(lt(_l,m),lt(li,v),lt(xl,k),lt(wl,j),lt(vl,N),lt(bl,D),lt(Sl,ct),lt(El,L),lt(Ol,et),lt(kl,S),lt(yo,$),lt(Al,bt),R(Lt))if(Lt.length){const Z=t.exposed||(t.exposed={});Lt.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:ee=>n[W]=ee})})}else t.exposed||(t.exposed={});H&&t.render===yt&&(t.render=H),Me!=null&&(t.inheritAttrs=Me),on&&(t.components=on),sn&&(t.directives=sn)}function Tl(t,e,n=yt){R(t)&&(t=Cr(t));for(const r in t){const i=t[r];let a;J(i)?"default"in i?a=Cn(i.from||r,i.default,!0):a=Cn(i.from||r):a=Cn(i),ht(a)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Yi(t,e,n){Et(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _o(t,e,n,r){const i=r.includes(".")?go(n,r):()=>n[r];if(nt(t)){const a=e[t];F(a)&&En(i,a)}else if(F(t))En(i,t.bind(n));else if(J(t))if(R(t))t.forEach(a=>_o(a,e,n,r));else{const a=F(t.handler)?t.handler.bind(n):e[t.handler];F(a)&&En(i,a,t)}}function fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Fn(l,c,o,!0)),Fn(l,e,o)),J(e)&&a.set(e,l),l}function Fn(t,e,n,r=!1){const{mixins:i,extends:a}=e;a&&Fn(t,a,n,!0),i&&i.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Nl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Nl={data:Wi,props:Vi,emits:Vi,methods:Fe,computed:Fe,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Fe,directives:Fe,watch:Rl,provide:Wi,inject:Ml};function Wi(t,e){return e?t?function(){return at(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Ml(t,e){return Fe(Cr(t),Cr(e))}function Cr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Fe(t,e){return t?at(Object.create(null),t,e):e}function Vi(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:at(Object.create(null),Bi(t),Bi(e??{})):e}function Rl(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function xo(){return{app:null,config:{isNativeTag:us,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function Fl(t,e){return function(r,i=null){F(r)||(r=at({},r)),i!=null&&!J(i)&&(i=null);const a=xo(),o=new WeakSet;let s=!1;const l=a.app={_uid:Ll++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:uf,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!s){const v=tt(r,i);return v.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,di(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){const u=De;De=l;try{return c()}finally{De=u}}};return l}}let De=null;function jl(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=st||wt;if(r||De){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:De._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function $l(t,e,n,r=!1){const i={},a={};Nn(a,Jn,1),t.propsDefaults=Object.create(null),wo(t,e,i,a);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Ws(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function zl(t,e,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=t,s=B(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Gn(t.emitsOptions,v))continue;const k=e[v];if(l)if(U(a,v))k!==a[v]&&(a[v]=k,c=!0);else{const j=Rt(v);i[j]=Pr(l,s,j,k,t,!1)}else k!==a[v]&&(a[v]=k,c=!0)}}}else{wo(t,e,i,a)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Te(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Pr(l,s,m,void 0,t,!0)):delete i[m]);if(a!==s)for(const m in a)(!e||!U(e,m))&&(delete a[m],c=!0)}c&&$t(t,"set","$attrs")}function wo(t,e,n,r){const[i,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if($e(l))continue;const c=e[l];let u;i&&U(i,u=Rt(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:Gn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=B(n),c=s||q;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Pr(i,l,m,c[m],t,!U(c,m))}}return o}function Pr(t,e,n,r,i,a){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=en(i);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Te(n))&&(r=!0))}return r}function ko(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const a=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[v,k]=ko(m,e,!0);at(o,v),k&&s.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return J(t)&&r.set(t,we),we;if(R(a))for(let u=0;u<a.length;u++){const m=Rt(a[u]);Ki(m)&&(o[m]=q)}else if(a)for(const u in a){const m=Rt(u);if(Ki(m)){const v=a[u],k=o[m]=R(v)||F(v)?{type:v}:at({},v);if(k){const j=qi(Boolean,k.type),N=qi(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return J(t)&&r.set(t,c),c}function Ki(t){return t[0]!=="$"&&!$e(t)}function Gi(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Xi(t,e){return Gi(t)===Gi(e)}function qi(t,e){return R(e)?e.findIndex(n=>Xi(n,t)):F(e)&&Xi(e,t)?0:-1}const Ao=t=>t[0]==="_"||t==="$stable",ci=t=>R(t)?t.map(It):[It(t)],Dl=(t,e,n)=>{if(e._n)return e;const r=il((...i)=>ci(e(...i)),n);return r._c=!1,r},Oo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ao(i))continue;const a=t[i];if(F(a))e[i]=Dl(i,a,r);else if(a!=null){const o=ci(a);e[i]=()=>o}}},Eo=(t,e)=>{const n=ci(e);t.slots.default=()=>n},Ul=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Nn(e,"_",n)):Oo(e,t.slots={})}else t.slots={},e&&Eo(t,e);Nn(t.slots,Jn,1)},Hl=(t,e,n)=>{const{vnode:r,slots:i}=t;let a=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(at(i,e),!n&&s===1&&delete i._):(a=!e.$stable,Oo(e,i)),o=e}else e&&(Eo(t,e),o={default:1});if(a)for(const s in i)!Ao(s)&&o[s]==null&&delete i[s]};function Ir(t,e,n,r,i=!1){if(R(t)){t.forEach((v,k)=>Ir(v,e&&(R(e)?e[k]:e),n,r,i));return}if(Sn(r)&&!i)return;const a=r.shapeFlag&4?di(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ht(c)&&(c.value=null)),F(l))qt(l,s,12,[o,u]);else{const v=nt(l),k=ht(l);if(v||k){const j=()=>{if(t.f){const N=v?U(m,l)?m[l]:u[l]:l.value;i?R(N)&&Gr(N,a):R(N)?N.includes(a)||N.push(a):v?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,dt(j,n)):j()}}}const dt=dl;function Bl(t){return Yl(t)}function Yl(t,e){const n=Ua();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:k=yt,insertStaticContent:j}=t,N=(f,d,h,p=null,g=null,_=null,A=void 0,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!Le(f,d)&&(p=fn(f),St(f,g,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:T}=d;switch(b){case qn:D(f,d,h,p);break;case de:w(f,d,h,p);break;case mr:f==null&&S(d,h,p,A);break;case gt:on(f,d,h,p,g,_,A,y,x);break;default:T&1?H(f,d,h,p,g,_,A,y,x):T&6?sn(f,d,h,p,g,_,A,y,x):(T&64||T&128)&&b.process(f,d,h,p,g,_,A,y,x,ve)}E!=null&&g&&Ir(E,f&&f.ref,_,d||f,!d)},D=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},S=(f,d,h,p)=>{[f.el,f.anchor]=j(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let g;for(;f&&f!==d;)g=v(f),r(f,h,p),f=g;r(d,h,p)},$=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),i(f),f=h;i(d)},H=(f,d,h,p,g,_,A,y,x)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?L(d,h,p,g,_,A,y,x):bt(f,d,g,_,A,y,x)},L=(f,d,h,p,g,_,A,y)=>{let x,b;const{props:E,shapeFlag:T,transition:I,dirs:M}=f;if(x=f.el=o(f.type,_,E&&E.is,E),T&8?u(x,f.children):T&16&&ct(f.children,x,null,p,g,dr(f,_),A,y),M&&re(f,null,p,"created"),et(x,f,f.scopeId,A,p),E){for(const Y in E)Y!=="value"&&!$e(Y)&&a(x,Y,null,E[Y],_,f.children,p,g,Ft);"value"in E&&a(x,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&Pt(b,p,f)}M&&re(f,null,p,"beforeMount");const z=Wl(g,I);z&&I.beforeEnter(x),r(x,d,h),((b=E&&E.onVnodeMounted)||z||M)&&dt(()=>{b&&Pt(b,p,f),z&&I.enter(x),M&&re(f,null,p,"mounted")},g)},et=(f,d,h,p,g)=>{if(h&&k(f,h),p)for(let _=0;_<p.length;_++)k(f,p[_]);if(g){let _=g.subTree;if(d===_){const A=g.vnode;et(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ct=(f,d,h,p,g,_,A,y,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=y?Kt(f[b]):It(f[b]);N(null,E,d,h,p,g,_,A,y)}},bt=(f,d,h,p,g,_,A)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=d;x|=f.patchFlag&16;const T=f.props||q,I=d.props||q;let M;if(h&&ie(h,!1),(M=I.onVnodeBeforeUpdate)&&Pt(M,h,d,f),E&&re(d,f,h,"beforeUpdate"),h&&ie(h,!0),b?Lt(f.dynamicChildren,b,y,h,p,dr(d,g),_):A||W(f,d,y,null,h,p,dr(d,g),_,!1),x>0){if(x&16)Me(y,d,T,I,h,p,g);else if(x&2&&T.class!==I.class&&a(y,"class",null,I.class,g),x&4&&a(y,"style",T.style,I.style,g),x&8){const z=d.dynamicProps;for(let Y=0;Y<z.length;Y++){const X=z[Y],it=T[X],_t=I[X];(_t!==it||X==="value")&&a(y,X,it,_t,g,f.children,h,p,Ft)}}x&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Me(y,d,T,I,h,p,g);((M=I.onVnodeUpdated)||E)&&dt(()=>{M&&Pt(M,h,d,f),E&&re(d,f,h,"updated")},p)},Lt=(f,d,h,p,g,_,A)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],E=x.el&&(x.type===gt||!Le(x,b)||x.shapeFlag&70)?m(x.el):h;N(x,b,E,null,p,g,_,A,!0)}},Me=(f,d,h,p,g,_,A)=>{if(h!==p){if(h!==q)for(const y in h)!$e(y)&&!(y in p)&&a(f,y,h[y],null,A,d.children,g,_,Ft);for(const y in p){if($e(y))continue;const x=p[y],b=h[y];x!==b&&y!=="value"&&a(f,y,b,x,A,d.children,g,_,Ft)}"value"in p&&a(f,"value",h.value,p.value,A)}},on=(f,d,h,p,g,_,A,y,x)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,h,p),r(E,h,p),ct(d.children||[],h,E,g,_,A,y,x)):T>0&&T&64&&I&&f.dynamicChildren?(Lt(f.dynamicChildren,I,h,g,_,A,y),(d.key!=null||g&&d===g.subTree)&&So(f,d,!0)):W(f,d,h,E,g,_,A,y,x)},sn=(f,d,h,p,g,_,A,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,h,p,A,x):rr(d,h,p,g,_,A,x):Ei(f,d,x)},rr=(f,d,h,p,g,_,A)=>{const y=f.component=nf(f,p,g);if(vo(f)&&(y.ctx.renderer=ve),rf(y),y.asyncDep){if(g&&g.registerDep(y,lt),!f.el){const x=y.subTree=tt(de);w(null,x,d,h)}}else lt(y,f,d,h,g,_,A)},Ei=(f,d,h)=>{const p=d.component=f.component;if(sl(f,d,h))if(p.asyncDep&&!p.asyncResolved){Z(p,d,h);return}else p.next=d,tl(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},lt=(f,d,h,p,g,_,A)=>{const y=()=>{if(f.isMounted){let{next:E,bu:T,u:I,parent:M,vnode:z}=f;{const be=Co(f);if(be){E&&(E.el=z.el,Z(f,E,A)),be.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=E,X;ie(f,!1),E?(E.el=z.el,Z(f,E,A)):E=z,T&&lr(T),(X=E.props&&E.props.onVnodeBeforeUpdate)&&Pt(X,M,E,z),ie(f,!0);const it=cr(f),_t=f.subTree;f.subTree=it,N(_t,it,m(_t.el),fn(_t),f,g,_),E.el=it.el,Y===null&&ll(f,it.el),I&&dt(I,g),(X=E.props&&E.props.onVnodeUpdated)&&dt(()=>Pt(X,M,E,z),g)}else{let E;const{el:T,props:I}=d,{bm:M,m:z,parent:Y}=f,X=Sn(d);if(ie(f,!1),M&&lr(M),!X&&(E=I&&I.onVnodeBeforeMount)&&Pt(E,Y,d),ie(f,!0),T&&or){const it=()=>{f.subTree=cr(f),or(T,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&it()):it()}else{const it=f.subTree=cr(f);N(null,it,h,p,f,g,_),d.el=it.el}if(z&&dt(z,g),!X&&(E=I&&I.onVnodeMounted)){const it=d;dt(()=>Pt(E,Y,it),g)}(d.shapeFlag&256||Y&&Sn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&dt(f.a,g),f.isMounted=!0,d=h=p=null}},x=f.effect=new Jr(y,yt,()=>oi(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,ie(f,!0),b()},Z=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,zl(f,d.props,p,h),Hl(f,d.children,h),pe(),Di(f),ge()},W=(f,d,h,p,g,_,A,y,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){ln(b,T,h,p,g,_,A,y,x);return}else if(I&256){ee(b,T,h,p,g,_,A,y,x);return}}M&8?(E&16&&Ft(b,g,_),T!==b&&u(h,T)):E&16?M&16?ln(b,T,h,p,g,_,A,y,x):Ft(b,g,_,!0):(E&8&&u(h,""),M&16&&ct(T,h,p,g,_,A,y,x))},ee=(f,d,h,p,g,_,A,y,x)=>{f=f||we,d=d||we;const b=f.length,E=d.length,T=Math.min(b,E);let I;for(I=0;I<T;I++){const M=d[I]=x?Kt(d[I]):It(d[I]);N(f[I],M,h,null,g,_,A,y,x)}b>E?Ft(f,g,_,!0,!1,T):ct(d,h,p,g,_,A,y,x,T)},ln=(f,d,h,p,g,_,A,y,x)=>{let b=0;const E=d.length;let T=f.length-1,I=E-1;for(;b<=T&&b<=I;){const M=f[b],z=d[b]=x?Kt(d[b]):It(d[b]);if(Le(M,z))N(M,z,h,null,g,_,A,y,x);else break;b++}for(;b<=T&&b<=I;){const M=f[T],z=d[I]=x?Kt(d[I]):It(d[I]);if(Le(M,z))N(M,z,h,null,g,_,A,y,x);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,z=M<E?d[M].el:p;for(;b<=I;)N(null,d[b]=x?Kt(d[b]):It(d[b]),h,z,g,_,A,y,x),b++}}else if(b>I)for(;b<=T;)St(f[b],g,_,!0),b++;else{const M=b,z=b,Y=new Map;for(b=z;b<=I;b++){const pt=d[b]=x?Kt(d[b]):It(d[b]);pt.key!=null&&Y.set(pt.key,b)}let X,it=0;const _t=I-z+1;let be=!1,Pi=0;const Re=new Array(_t);for(b=0;b<_t;b++)Re[b]=0;for(b=M;b<=T;b++){const pt=f[b];if(it>=_t){St(pt,g,_,!0);continue}let Ct;if(pt.key!=null)Ct=Y.get(pt.key);else for(X=z;X<=I;X++)if(Re[X-z]===0&&Le(pt,d[X])){Ct=X;break}Ct===void 0?St(pt,g,_,!0):(Re[Ct-z]=b+1,Ct>=Pi?Pi=Ct:be=!0,N(pt,d[Ct],h,null,g,_,A,y,x),it++)}const Ii=be?Vl(Re):we;for(X=Ii.length-1,b=_t-1;b>=0;b--){const pt=z+b,Ct=d[pt],Ti=pt+1<E?d[pt+1].el:p;Re[b]===0?N(null,Ct,h,Ti,g,_,A,y,x):be&&(X<0||b!==Ii[X]?ne(Ct,h,Ti,2):X--)}}},ne=(f,d,h,p,g=null)=>{const{el:_,type:A,transition:y,children:x,shapeFlag:b}=f;if(b&6){ne(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){A.move(f,d,h,ve);return}if(A===gt){r(_,d,h);for(let T=0;T<x.length;T++)ne(x[T],d,h,p);r(f.anchor,d,h);return}if(A===mr){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,d,h),dt(()=>y.enter(_),g);else{const{leave:T,delayLeave:I,afterLeave:M}=y,z=()=>r(_,d,h),Y=()=>{T(_,()=>{z(),M&&M()})};I?I(_,z,Y):Y()}else r(_,d,h)},St=(f,d,h,p=!1,g=!1)=>{const{type:_,props:A,ref:y,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:T,dirs:I}=f;if(y!=null&&Ir(y,null,h,f,!0),E&256){d.ctx.deactivate(f);return}const M=E&1&&I,z=!Sn(f);let Y;if(z&&(Y=A&&A.onVnodeBeforeUnmount)&&Pt(Y,d,f),E&6)cs(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}M&&re(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,h,g,ve,p):b&&(_!==gt||T>0&&T&64)?Ft(b,d,h,!1,!0):(_===gt&&T&384||!g&&E&16)&&Ft(x,d,h),p&&Si(f)}(z&&(Y=A&&A.onVnodeUnmounted)||M)&&dt(()=>{Y&&Pt(Y,d,f),M&&re(f,null,d,"unmounted")},h)},Si=f=>{const{type:d,el:h,anchor:p,transition:g}=f;if(d===gt){fs(h,p);return}if(d===mr){$(f);return}const _=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,x=()=>A(h,_);y?y(f.el,_,x):x()}else _()},fs=(f,d)=>{let h;for(;f!==d;)h=v(f),i(f),f=h;i(d)},cs=(f,d,h)=>{const{bum:p,scope:g,update:_,subTree:A,um:y}=f;p&&lr(p),g.stop(),_&&(_.active=!1,St(A,f,d,h)),y&&dt(y,d),dt(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ft=(f,d,h,p=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)St(f[A],d,h,p,g)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let ir=!1;const Ci=(f,d,h)=>{f==null?d._vnode&&St(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,h),ir||(ir=!0,Di(),fo(),ir=!1),d._vnode=f},ve={p:N,um:St,m:ne,r:Si,mt:rr,mc:ct,pc:W,pbc:Lt,n:fn,o:t};let ar,or;return e&&([ar,or]=e(ve)),{render:Ci,hydrate:ar,createApp:Fl(Ci,ar)}}function dr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function So(t,e,n=!1){const r=t.children,i=e.children;if(R(r)&&R(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Kt(i[a]),s.el=o.el),n||So(o,s)),s.type===qn&&(s.el=o.el)}}function Vl(t){const e=t.slice(),n=[0];let r,i,a,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}function Co(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Co(e)}const Kl=t=>t.__isTeleport,gt=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),de=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Ue=[];let kt=null;function At(t=!1){Ue.push(kt=t?null:[])}function Gl(){Ue.pop(),kt=Ue[Ue.length-1]||null}let Ge=1;function Ji(t){Ge+=t}function Po(t){return t.dynamicChildren=Ge>0?kt||we:null,Gl(),Ge>0&&kt&&kt.push(t),t}function Nt(t,e,n,r,i,a){return Po(V(t,e,n,r,i,a,!0))}function Xl(t,e,n,r,i){return Po(tt(t,e,n,r,i,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function Le(t,e){return t.type===e.type&&t.key===e.key}const Jn="__vInternal",Io=({key:t})=>t??null,Pn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||ht(t)||F(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,i=null,a=t===gt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Io(e),ref:e&&Pn(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wt};return s?(ui(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Ge>0&&!o&&kt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&kt.push(l),l}const tt=ql;function ql(t,e=null,n=null,r=0,i=null,a=!1){if((!t||t===fl)&&(t=de),Tr(t)){const s=Ce(t,e,!0);return n&&ui(s,n),Ge>0&&!a&&kt&&(s.shapeFlag&6?kt[kt.indexOf(t)]=s:kt.push(s)),s.patchFlag|=-2,s}if(ff(t)&&(t=t.__vccOpts),e){e=Jl(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=tn(s)),J(l)&&(no(l)&&!R(l)&&(l=at({},l)),e.style=qr(l))}const o=nt(t)?1:ul(t)?128:Kl(t)?64:J(t)?4:F(t)?2:0;return V(t,e,n,r,i,o,a,!0)}function Jl(t){return t?no(t)||Jn in t?at({},t):t:null}function Ce(t,e,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=t,s=e?Ql(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Io(s),ref:e&&e.ref?n&&i?R(i)?i.concat(Pn(e)):[i,Pn(e)]:Pn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function He(t=" ",e=0){return tt(qn,null,t,e)}function Zl(t="",e=!1){return e?(At(),Xl(de,null,t)):tt(de,null,t)}function It(t){return t==null||typeof t=="boolean"?tt(de):R(t)?tt(gt,null,t.slice()):typeof t=="object"?Kt(t):tt(qn,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ce(t)}function ui(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ui(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Jn in e)?e._ctx=wt:i===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[He(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ql(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=tn([e.class,r.class]));else if(i==="style")e.style=qr([e.style,r.style]);else if(Hn(i)){const a=e[i],o=r[i];o&&a!==o&&!(R(a)&&a.includes(o))&&(e[i]=a?[].concat(a,o):o)}else i!==""&&(e[i]=r[i])}return e}function Pt(t,e,n,r=null){Et(t,e,7,[n,r])}const tf=xo();let ef=0;function nf(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||tf,a={uid:ef++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ko(r,i),emitsOptions:uo(r,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=rl.bind(null,a),t.ce&&t.ce(a),a}let st=null,jn,Nr;{const t=Ua(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};jn=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Nr=e("__VUE_SSR_SETTERS__",n=>Zn=n)}const en=t=>{const e=st;return jn(t),t.scope.on(),()=>{t.scope.off(),jn(e)}},Zi=()=>{st&&st.scope.off(),jn(null)};function To(t){return t.vnode.shapeFlag&4}let Zn=!1;function rf(t,e=!1){e&&Nr(e);const{props:n,children:r}=t.vnode,i=To(t);$l(t,n,i,e),Ul(t,r);const a=i?af(t,e):void 0;return e&&Nr(!1),a}function af(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ro(new Proxy(t.ctx,Pl));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?sf(t):null,a=en(t);pe();const o=qt(r,t,0,[t.props,i]);if(ge(),a(),$a(o)){if(o.then(Zi,Zi),e)return o.then(s=>{Qi(t,s,e)}).catch(s=>{Kn(s,t,0)});t.asyncDep=o}else Qi(t,o,e)}else No(t,e)}function Qi(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=oo(e)),No(t,n)}let ta;function No(t,e,n){const r=t.type;if(!t.render){if(!e&&ta&&!r.render){const i=r.template||fi(t).template;if(i){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=at(at({isCustomElement:a,delimiters:s},o),l);r.render=ta(i,c)}}t.render=r.render||yt}{const i=en(t);pe();try{Il(t)}finally{ge(),i()}}}function of(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function sf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return of(t)},slots:t.slots,emit:t.emit,expose:e}}function di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oo(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ze)return ze[n](t)},has(e,n){return n in e||n in ze}}))}function lf(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function ff(t){return F(t)&&"__vccOpts"in t}const ae=(t,e)=>Vs(t,e,Zn);function cf(t,e,n){const r=arguments.length;return r===2?J(e)&&!R(e)?Tr(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),tt(t,e,n))}const uf="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const df="http://www.w3.org/2000/svg",mf="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,ea=Gt&&Gt.createElement("template"),hf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Gt.createElementNS(df,t):e==="mathml"?Gt.createElementNS(mf,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,a){const o=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ea.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ea.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pf=Symbol("_vtc");function gf(t,e,n){const r=t[pf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const na=Symbol("_vod"),vf=Symbol(""),bf=/(^|;)\s*display\s*:/;function yf(t,e,n){const r=t.style,i=nt(n),a=r.display;let o=!1;if(n&&!i){if(e&&!nt(e))for(const s in e)n[s]==null&&Mr(r,s,"");for(const s in n)s==="display"&&(o=!0),Mr(r,s,n[s])}else if(i){if(e!==n){const s=r[vf];s&&(n+=";"+s),r.cssText=n,o=bf.test(n)}}else e&&t.removeAttribute("style");na in t&&(t[na]=o?r.display:"",r.display=a)}const ra=/\s*!important$/;function Mr(t,e,n){if(R(n))n.forEach(r=>Mr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_f(t,e);ra.test(n)?t.setProperty(Te(r),n.replace(ra,""),"important"):t[r]=n}}const ia=["Webkit","Moz","ms"],hr={};function _f(t,e){const n=hr[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return hr[e]=r;r=Wn(r);for(let i=0;i<ia.length;i++){const a=ia[i]+r;if(a in t)return hr[e]=a}return e}const aa="http://www.w3.org/1999/xlink";function xf(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(aa,e.slice(6,e.length)):t.setAttributeNS(aa,e,n);else{const a=ws(e);n==null||a&&!Ha(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function wf(t,e,n,r,i,a,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ha(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function kf(t,e,n,r){t.addEventListener(e,n,r)}function Af(t,e,n,r){t.removeEventListener(e,n,r)}const oa=Symbol("_vei");function Of(t,e,n,r,i=null){const a=t[oa]||(t[oa]={}),o=a[e];if(r&&o)o.value=r;else{const[s,l]=Ef(e);if(r){const c=a[e]=Pf(r,i);kf(t,s,c,l)}else o&&(Af(t,s,o,l),a[e]=void 0)}}const sa=/(?:Once|Passive|Capture)$/;function Ef(t){let e;if(sa.test(t)){e={};let r;for(;r=t.match(sa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Te(t.slice(2)),e]}let pr=0;const Sf=Promise.resolve(),Cf=()=>pr||(Sf.then(()=>pr=0),pr=Date.now());function Pf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Et(If(r,n.value),e,5,[r])};return n.value=t,n.attached=Cf(),n}function If(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const la=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tf=(t,e,n,r,i,a,o,s,l)=>{const c=i==="svg";e==="class"?gf(t,r,c):e==="style"?yf(t,n,r):Hn(e)?Kr(e)||Of(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nf(t,e,r,c))?wf(t,e,r,a,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xf(t,e,r,c))};function Nf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&la(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return la(e)&&nt(n)?!1:e in t}const Mf=at({patchProp:Tf},hf);let fa;function Rf(){return fa||(fa=Bl(Mf))}const Lf=(...t)=>{const e=Rf().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=jf(r);if(!i)return;const a=e._component;!F(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Ff(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ff(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jf(t){return nt(t)?document.querySelector(t):t}const $f={class:"font-sans font-black text-5xl"},zf={class:"flex gap-10 mt-5 text-xl"},Df={href:"https://github.com/gsspdev/",target:"_blank"},Uf={href:"https://www.linkedin.com/in/gssp/",target:"_blank"},Hf={__name:"Header",setup(t){const e=Rn("text-gruvbox-gray");return Rn(null),(n,r)=>{const i=si("font-awesome-icon");return At(),Nt(gt,null,[V("div",$f,[He(" mod3us"),V("span",{class:tn(["text-2xl",e.value])},".dev",2)]),V("div",zf,[V("a",Df,[tt(i,{icon:["fab","github"]})]),V("a",Uf,[tt(i,{icon:["fab","linkedin"]})])])],64)}}},Bf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Yf={},Wf=V("div",{class:"mb-2 font-black text-2xl"},"uses/",-1),Vf=V("img",{src:"https://skillicons.dev/icons?i=linux,git,docker,vscode,discord,figma,github,mongodb",class:"select-none mb-2"},null,-1),Kf=V("img",{src:"https://skillicons.dev/icons?i=c,python,html,css,tailwind,javascript,vue,django,flask",class:"select-none"},null,-1);function Gf(t,e){return At(),Nt(gt,null,[Wf,Vf,Kf],64)}const Xf=Bf(Yf,[["render",Gf]]),qf=V("div",{class:"mb-2 font-black text-2xl"},"projects/",-1),Jf={class:"grid md:grid-cols-2 gap-2"},Zf={key:0},Qf=["href"],tc={class:"flex items-center gap-1 text-gruvbox-gray"},ec=["src"],nc={class:"flex mt-2 gap-5"},rc={__name:"Projects",setup(t){const e=["lareii.github.io","autopull","ytm-discord-rpc","cubot"],n=Rn([]);return li(async()=>{await fetch("https://api.github.com/users/lareii/repos").then(r=>r.json()).then(r=>{r.sort((i,a)=>a.stargazers_count-i.stargazers_count),r.forEach(i=>{e.includes(i.name)&&n.value.push(i)})}).catch(()=>{})}),(r,i)=>{const a=si("font-awesome-icon");return At(),Nt(gt,null,[qf,V("div",Jf,[n.value.length?Zl("",!0):(At(),Nt("div",Zf,"projects could not be retrieved.")),(At(!0),Nt(gt,null,Cl(n.value,o=>(At(),Nt("a",{href:o.html_url,target:"_blank",class:"flex flex-col justify-between px-5 py-3 bg-[#202020]/[.3] border-[#504945] border-[0.5px] rounded-lg text-sm"},[V("div",tc,[V("img",{src:o.owner.avatar_url,class:"rounded-full w-4"},null,8,ec),He(" "+oe(o.owner.login),1)]),V("div",{class:tn(["font-bold","text-lg",o.archived?"line-through":""])},oe(o.name),3),V("div",null,oe(o.description),1),V("div",nc,[V("div",null,[tt(a,{icon:["fas","star"]}),He(" "+oe(o.stargazers_count),1)]),V("div",null,[tt(a,{icon:["fas","code-branch"]}),He(" "+oe(o.forks_count),1)])])],8,Qf))),256))])],64)}}},ic={class:"flex justify-between mt-10 gap-5 text-sm text-gruvbox-gray"},ac={class:"flex gap-2"},oc={key:0},sc={key:1},lc=V("a",{href:"https://github.com/lareii/lareii.github.io",target:"_blank",class:"whitespace-nowrap underline"},"gimme a ⭐",-1),fc={__name:"Footer",setup(t){const e=Rn(null);return li(async()=>{await fetch("https://api.github.com/repos/lareii/lareii.github.io/commits").then(n=>n.json()).then(n=>{e.value=n[0]}).catch(()=>{})}),(n,r)=>{const i=si("font-awesome-icon");return At(),Nt("div",ic,[V("div",ac,[tt(i,{icon:["fas","code-branch"],class:"mt-[3px]"}),e.value?(At(),Nt("div",oc,oe(e.value.sha.slice(0,7))+" — "+oe(e.value.commit.message),1)):(At(),Nt("div",sc,"latest commit could not be retrieved."))]),lc])}}},cc={class:"sm:pt-20 max-w-screen-lg mx-auto p-5 relative"},uc=V("div",{class:"z-0 absolute -mt-10 right-0 text-[10rem] opacity-10 select-none"},"✨",-1),dc={class:"relative mb-10"},mc={class:"mb-10"},hc=V("div",{class:"z-0 absolute mt-10 text-[10rem] opacity-10 select-none"},"👨‍💻",-1),pc={class:"relative mb-10"},gc={__name:"App",setup(t){return(e,n)=>(At(),Nt("div",cc,[uc,V("div",dc,[tt(Hf)]),V("div",mc,[tt(Xf)]),hc,V("div",pc,[tt(rc)]),tt(fc)]))}};function ca(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ca(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function vc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ua(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bc(t,e,n){return e&&ua(t.prototype,e),n&&ua(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mi(t,e){return _c(t)||wc(t,e)||Mo(t,e)||Ac()}function nn(t){return yc(t)||xc(t)||Mo(t)||kc()}function yc(t){if(Array.isArray(t))return Rr(t)}function _c(t){if(Array.isArray(t))return t}function xc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Mo(t,e){if(t){if(typeof t=="string")return Rr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(t,e)}}function Rr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var da=function(){},hi={},Ro={},Lo=null,Fo={mark:da,measure:da};try{typeof window<"u"&&(hi=window),typeof document<"u"&&(Ro=document),typeof MutationObserver<"u"&&(Lo=MutationObserver),typeof performance<"u"&&(Fo=performance)}catch{}var Oc=hi.navigator||{},ma=Oc.userAgent,ha=ma===void 0?"":ma,Zt=hi,G=Ro,pa=Lo,gn=Fo;Zt.document;var Bt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",jo=~ha.indexOf("MSIE")||~ha.indexOf("Trident/"),vn,bn,yn,_n,xn,zt="___FONT_AWESOME___",Lr=16,$o="fa",zo="svg-inline--fa",me="data-fa-i2svg",Fr="data-fa-pseudo-element",Ec="data-fa-pseudo-element-pending",pi="data-prefix",gi="data-icon",ga="fontawesome-i2svg",Sc="async",Cc=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),K="classic",Q="sharp",vi=[K,Q];function rn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Xe=rn((vn={},rt(vn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(vn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),vn)),qe=rn((bn={},rt(bn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(bn,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bn)),Je=rn((yn={},rt(yn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(yn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),yn)),Pc=rn((_n={},rt(_n,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(_n,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_n)),Ic=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Uo="fa-layers-text",Tc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nc=rn((xn={},rt(xn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(xn,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xn)),Ho=[1,2,3,4,5,6,7,8,9,10],Mc=Ho.concat([11,12,13,14,15,16,17,18,19,20]),Rc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ze=new Set;Object.keys(qe[K]).map(Ze.add.bind(Ze));Object.keys(qe[Q]).map(Ze.add.bind(Ze));var Lc=[].concat(vi,nn(Ze),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(Ho.map(function(t){return"".concat(t,"x")})).concat(Mc.map(function(t){return"w-".concat(t)})),Be=Zt.FontAwesomeConfig||{};function Fc(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var $c=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$c.forEach(function(t){var e=mi(t,2),n=e[0],r=e[1],i=jc(Fc(n));i!=null&&(Be[r]=i)})}var Bo={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:zo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Pe=O(O({},Bo),Be);Pe.autoReplaceSvg||(Pe.observeMutations=!1);var C={};Object.keys(Bo).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Pe[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Pe[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Pe.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Pe.cssPrefix}});Zt.FontAwesomeConfig=C;var Ye=[];function zc(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Wt=Lr,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dc(t){if(!(!t||!Bt)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(e,r),t}}var Uc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qe(){for(var t=12,e="";t-- >0;)e+=Uc[Math.random()*62|0];return e}function Ne(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bi(t){return t.classList?Ne(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Yo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Yo(t[n]),'" ')},"").trim()}function Qn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function yi(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function Bc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Yc(t){var e=t.transform,n=t.width,r=n===void 0?Lr:n,i=t.height,a=i===void 0?Lr:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&jo?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Wc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wo(){var t=$o,e=zo,n=C.cssPrefix,r=C.replacementClass,i=Wc;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var va=!1;function gr(){C.autoAddCss&&!va&&(Dc(Wo()),va=!0)}var Vc={mixout:function(){return{dom:{css:Wo,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},Dt=Zt||{};Dt[zt]||(Dt[zt]={});Dt[zt].styles||(Dt[zt].styles={});Dt[zt].hooks||(Dt[zt].hooks={});Dt[zt].shims||(Dt[zt].shims=[]);var Ot=Dt[zt],Vo=[],Kc=function t(){G.removeEventListener("DOMContentLoaded",t),zn=1,Vo.map(function(e){return e()})},zn=!1;Bt&&(zn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),zn||G.addEventListener("DOMContentLoaded",Kc));function Gc(t){Bt&&(zn?setTimeout(t,0):Vo.push(t))}function an(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?Yo(t):"<".concat(e," ").concat(Hc(r),">").concat(a.map(an).join(""),"</").concat(e,">")}function ba(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xc=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},vr=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?Xc(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[a[0]]):(l=0,u=r);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function qc(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function jr(t){var e=qc(t);return e.length===1?e[0].toString(16):null}function Jc(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ya(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function $r(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ya(e);typeof Ot.hooks.addPack=="function"&&!i?Ot.hooks.addPack(t,ya(e)):Ot.styles[t]=O(O({},Ot.styles[t]||{}),a),t==="fas"&&$r("fa",e)}var wn,kn,An,_e=Ot.styles,Zc=Ot.shims,Qc=(wn={},rt(wn,K,Object.values(Je[K])),rt(wn,Q,Object.values(Je[Q])),wn),_i=null,Ko={},Go={},Xo={},qo={},Jo={},tu=(kn={},rt(kn,K,Object.keys(Xe[K])),rt(kn,Q,Object.keys(Xe[Q])),kn);function eu(t){return~Lc.indexOf(t)}function nu(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!eu(i)?i:null}var Zo=function(){var e=function(a){return vr(_e,function(o,s,l){return o[l]=vr(s,a,{}),o},{})};Ko=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Go=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Jo=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in _e||C.autoFetchSvg,r=vr(Zc,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Xo=r.names,qo=r.unicodes,_i=tr(C.styleDefault,{family:C.familyDefault})};zc(function(t){_i=tr(t.styleDefault,{family:C.familyDefault})});Zo();function xi(t,e){return(Ko[t]||{})[e]}function ru(t,e){return(Go[t]||{})[e]}function fe(t,e){return(Jo[t]||{})[e]}function Qo(t){return Xo[t]||{prefix:null,iconName:null}}function iu(t){var e=qo[t],n=xi("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return _i}var wi=function(){return{prefix:null,iconName:null,rest:[]}};function tr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,i=Xe[r][t],a=qe[r][t]||qe[r][i],o=t in Ot.styles?t:null;return a||o||null}var _a=(An={},rt(An,K,Object.keys(Je[K])),rt(An,Q,Object.keys(Je[Q])),An);function er(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},rt(e,K,"".concat(C.cssPrefix,"-").concat(K)),rt(e,Q,"".concat(C.cssPrefix,"-").concat(Q)),e),o=null,s=K;(t.includes(a[K])||t.some(function(c){return _a[K].includes(c)}))&&(s=K),(t.includes(a[Q])||t.some(function(c){return _a[Q].includes(c)}))&&(s=Q);var l=t.reduce(function(c,u){var m=nu(C.cssPrefix,u);if(_e[u]?(u=Qc[s].includes(u)?Pc[s][u]:u,o=u,c.prefix=u):tu[s].indexOf(u)>-1?(o=u,c.prefix=tr(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==a[K]&&u!==a[Q]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var v=o==="fa"?Qo(c.iconName):{},k=fe(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_e.far&&_e.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},wi());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(_e.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=fe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var au=function(){function t(){vc(this,t),this.definitions={}}return bc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),$r(s,o[s]);var l=Je[K][s];l&&$r(l,o[s]),Zo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),xa=[],xe={},Ee={},ou=Object.keys(Ee);function su(t,e){var n=e.mixoutsTo;return xa=t,xe={},Object.keys(Ee).forEach(function(r){ou.indexOf(r)===-1&&delete Ee[r]}),xa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$n(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(a[o])})}r.provides&&r.provides(Ee)}),n}function zr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=xe[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function he(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xe[t]||[];i.forEach(function(a){a.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ee[t]?Ee[t].apply(null,e):void 0}function Dr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=fe(n,e)||e,ba(ts.definitions,n,e)||ba(Ot.styles,n,e)}var ts=new au,lu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,he("noAuto")},fu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(he("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Gc(function(){uu({autoReplaceSvgRoot:n}),he("watch",e)})}},cu={icon:function(e){if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=tr(e[0]);return{prefix:r,iconName:fe(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(Ic))){var i=er(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qt(),iconName:fe(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=Qt();return{prefix:a,iconName:fe(a,e)||e}}}},vt={noAuto:lu,config:C,dom:fu,parse:cu,library:ts,findIconDefinition:Dr,toHtml:an},uu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ot.styles).length>0||C.autoFetchSvg)&&Bt&&C.autoReplaceSvg&&vt.dom.i2svg({node:r})};function nr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return an(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bt){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function du(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(yi(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Qn(O(O({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function mu(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function ki(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,k=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,w=i==="fak",S=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),P={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},$=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};k&&(P.attributes[me]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Qe())},children:[l]}),delete P.attributes.title);var H=O(O({},P),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},$),m.styles)}),L=r.found&&n.found?Ut("generateAbstractMask",H)||{children:[],attributes:{}}:Ut("generateAbstractIcon",H)||{children:[],attributes:{}},et=L.children,ct=L.attributes;return H.children=et,H.attributes=ct,s?mu(H):du(H)}function wa(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[me]="");var u=O({},o.styles);yi(i)&&(u.transform=Yc({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Qn(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function hu(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Qn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var br=Ot.styles;function Ur(t){var e=t[0],n=t[1],r=t.slice(4),i=mi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var pu={found:!1,width:512,height:512};function gu(t,e){!Do&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=Qt()),new Promise(function(r,i){if(Ut("missingIconAbstract"),n==="fa"){var a=Qo(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&br[e]&&br[e][t]){var o=br[e][t];return r(Ur(o))}gu(t,e),r(O(O({},pu),{},{icon:C.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var ka=function(){},Br=C.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:ka,measure:ka},je='FA "6.5.1"',vu=function(e){return Br.mark("".concat(je," ").concat(e," begins")),function(){return es(e)}},es=function(e){Br.mark("".concat(je," ").concat(e," ends")),Br.measure("".concat(je," ").concat(e),"".concat(je," ").concat(e," begins"),"".concat(je," ").concat(e," ends"))},Ai={begin:vu,end:es},In=function(){};function Aa(t){var e=t.getAttribute?t.getAttribute(me):null;return typeof e=="string"}function bu(t){var e=t.getAttribute?t.getAttribute(pi):null,n=t.getAttribute?t.getAttribute(gi):null;return e&&n}function yu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function _u(){if(C.autoReplaceSvg===!0)return Tn.replace;var t=Tn[C.autoReplaceSvg];return t||Tn.replace}function xu(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function wu(t){return G.createElement(t)}function ns(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?xu:wu:n;if(typeof t=="string")return G.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(ns(o,{ceFn:r}))}),i}function ku(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Tn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ns(i),n)}),n.getAttribute(me)===null&&C.keepOriginalSource){var r=G.createComment(ku(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bi(n).indexOf(C.replacementClass))return Tn.replace(e);var i=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(me,""),n.innerHTML=o}};function Oa(t){t()}function rs(t,e){var n=typeof e=="function"?e:In;if(t.length===0)n();else{var r=Oa;C.mutateApproach===Sc&&(r=Zt.requestAnimationFrame||Oa),r(function(){var i=_u(),a=Ai.begin("mutate");t.map(i),a(),n()})}}var Oi=!1;function is(){Oi=!0}function Yr(){Oi=!1}var Dn=null;function Ea(t){if(pa&&C.observeMutations){var e=t.treeCallback,n=e===void 0?In:e,r=t.nodeCallback,i=r===void 0?In:r,a=t.pseudoElementsCallback,o=a===void 0?In:a,s=t.observeMutationsRoot,l=s===void 0?G:s;Dn=new pa(function(c){if(!Oi){var u=Qt();Ne(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Aa(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Aa(m.target)&&~Rc.indexOf(m.attributeName))if(m.attributeName==="class"&&bu(m.target)){var v=er(bi(m.target)),k=v.prefix,j=v.iconName;m.target.setAttribute(pi,k||u),j&&m.target.setAttribute(gi,j)}else yu(m.target)&&i(m.target)})}}),Bt&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Au(){Dn&&Dn.disconnect()}function Ou(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Eu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=er(bi(t));return i.prefix||(i.prefix=Qt()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ru(i.prefix,t.innerText)||xi(i.prefix,jr(t.innerText))),!i.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Su(t){var e=Ne(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Qe()):(e["aria-hidden"]="true",e.focusable="false")),e}function Cu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Eu(t),r=n.iconName,i=n.prefix,a=n.rest,o=Su(t),s=zr("parseNodeAttributes",{},t),l=e.styleParser?Ou(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Pu=Ot.styles;function as(t){var e=C.autoReplaceSvg==="nest"?Sa(t,{styleParser:!1}):Sa(t);return~e.extra.classes.indexOf(Uo)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}var te=new Set;vi.map(function(t){te.add("fa-".concat(t))});Object.keys(Xe[K]).map(te.add.bind(te));Object.keys(Xe[Q]).map(te.add.bind(te));te=nn(te);function Ca(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(ga,"-").concat(m))},i=function(m){return n.remove("".concat(ga,"-").concat(m))},a=C.autoFetchSvg?te:vi.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Pu));a.includes("fa")||a.push("fa");var o=[".".concat(Uo,":not([").concat(me,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(me,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ne(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ai.begin("onTree"),c=s.reduce(function(u,m){try{var v=as(m);v&&u.push(v)}catch(k){Do||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){rs(v,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Iu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;as(t).then(function(n){n&&rs([n],e)})}function Tu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Dr(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dr(i||{})),t(r,O(O({},n),{},{mask:i}))}}var Nu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Mt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,D=N===void 0?[]:N,w=n.attributes,S=w===void 0?{}:w,P=n.styles,$=P===void 0?{}:P;if(e){var H=e.prefix,L=e.iconName,et=e.icon;return nr(O({type:"icon"},e),function(){return he("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?S["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||Qe()):(S["aria-hidden"]="true",S.focusable="false")),ki({icons:{main:Ur(et),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:L,transform:O(O({},Mt),i),symbol:o,title:v,maskId:u,titleId:j,extra:{attributes:S,styles:$,classes:D}})})}},Mu={mixout:function(){return{icon:Tu(Nu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ca,n.nodeCallback=Iu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,o=a===void 0?function(){}:a;return Ca(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,j){Promise.all([Hr(i,s),u.iconName?Hr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=mi(N,2),w=D[0],S=D[1];k([n,ki({icons:{main:w,mask:S},prefix:s,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(i.style=l);var c;return yi(o)&&(c=Ut("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Ru={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return nr({type:"layer"},function(){he("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(nn(a)).join(" ")},children:o}]})}}}},Lu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return nr({type:"counter",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),hu({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},Fu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Mt:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,k=v===void 0?{}:v;return nr({type:"text",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),wa({content:n,transform:O(O({},Mt),a),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(jo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},ju=new RegExp('"',"ug"),Pa=[1105920,1112319];function $u(t){var e=t.replace(ju,""),n=Jc(e,0),r=n>=Pa[0]&&n<=Pa[1],i=e.length===2?e[0]===e[1]:!1;return{value:jr(i?e[0]:e),isSecondary:r||i}}function Ia(t,e){var n="".concat(Ec).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Ne(t.children),o=a.filter(function(et){return et.getAttribute(Fr)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Tc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qe[v][l[2].toLowerCase()]:Nc[v][c],j=$u(m),N=j.value,D=j.isSecondary,w=l[0].startsWith("FontAwesome"),S=xi(k,N),P=S;if(w){var $=iu(N);$.iconName&&$.prefix&&(S=$.iconName,k=$.prefix)}if(S&&!D&&(!o||o.getAttribute(pi)!==k||o.getAttribute(gi)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var H=Cu(),L=H.extra;L.attributes[Fr]=e,Hr(S,k).then(function(et){var ct=ki(O(O({},H),{},{icons:{main:et,mask:wi()},prefix:k,iconName:P,extra:L,watchable:!0})),bt=G.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=ct.map(function(Lt){return an(Lt)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function zu(t){return Promise.all([Ia(t,"::before"),Ia(t,"::after")])}function Du(t){return t.parentNode!==document.head&&!~Cc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Fr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ta(t){if(Bt)return new Promise(function(e,n){var r=Ne(t.querySelectorAll("*")).filter(Du).map(zu),i=Ai.begin("searchPseudoElements");is(),Promise.all(r).then(function(){i(),Yr(),e()}).catch(function(){i(),Yr(),n()})})}var Uu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ta,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;C.searchPseudoElements&&Ta(i)}}},Na=!1,Hu={mixout:function(){return{dom:{unwatch:function(){is(),Na=!0}}}},hooks:function(){return{bootstrap:function(){Ea(zr("mutationObserverCallbacks",{}))},noAuto:function(){Au()},watch:function(n){var r=n.observeMutationsRoot;Na?Yr():Ea(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ma=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Bu={mixout:function(){return{parse:{transform:function(n){return Ma(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ma(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Ra(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Yu(t){return t.tag==="g"?t.children:[t]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?er(i.split(" ").map(function(o){return o.trim()})):wi();return a.prefix||(a.prefix=Qt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,m=o.width,v=o.icon,k=Bc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},yr),{},{fill:"white"})},N=u.children?{children:u.children.map(Ra)}:{},D={tag:"g",attributes:O({},k.inner),children:[Ra(O({tag:u.tag,attributes:O(O({},u.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[D]},S="mask-".concat(s||Qe()),P="clip-".concat(s||Qe()),$={tag:"mask",attributes:O(O({},yr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Yu(v)},$]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},yr)}),{children:r,attributes:i}}}},Vu={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ku={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Gu=[Vc,Mu,Ru,Lu,Fu,Uu,Hu,Bu,Wu,Vu,Ku];su(Gu,{mixoutsTo:vt});vt.noAuto;vt.config;var Xu=vt.library;vt.dom;var Wr=vt.parse;vt.findIconDefinition;vt.toHtml;var qu=vt.icon;vt.layer;vt.text;vt.counter;function La(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?La(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):La(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function ut(t,e,n){return e=td(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ju(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Zu(t,e){if(t==null)return{};var n=Ju(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Qu(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function td(t){var e=Qu(t,"string");return typeof e=="symbol"?e:String(e)}var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},os={exports:{}};(function(t){(function(e){var n=function(w,S,P){if(!c(S)||m(S)||v(S)||k(S)||l(S))return S;var $,H=0,L=0;if(u(S))for($=[],L=S.length;H<L;H++)$.push(n(w,S[H],P));else{$={};for(var et in S)Object.prototype.hasOwnProperty.call(S,et)&&($[w(et,P)]=n(w,S[et],P))}return $},r=function(w,S){S=S||{};var P=S.separator||"_",$=S.split||/(?=[A-Z])/;return w.split($).join(P)},i=function(w){return j(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,P){return P?P.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var S=i(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},j=function(w){return w=w-0,w===w},N=function(w,S){var P=S&&"process"in S?S.process:S;return typeof P!="function"?w:function($,H){return P($,w,H)}},D={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(w,S){return n(N(i,S),w)},decamelizeKeys:function(w,S){return n(N(o,S),w,S)},pascalizeKeys:function(w,S){return n(N(a,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(ed)})(os);var nd=os.exports,rd=["class","style"];function id(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=nd.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return e[i]=a,e},{})}function ad(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ss(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ss(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ad(u);break;case"style":l.style=id(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Zu(n,rd);return cf(t.tag,jt(jt(jt({},e),{},{class:i.class,style:jt(jt({},i.style),o)},i.attrs),s),r)}var ls=!1;try{ls=!0}catch{}function od(){if(!ls&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _r(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function sd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(e,"fa-".concat(t.size),t.size!==null),ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ut(e,"fa-pull-".concat(t.pull),t.pull!==null),ut(e,"fa-swap-opacity",t.swapOpacity),ut(e,"fa-bounce",t.bounce),ut(e,"fa-shake",t.shake),ut(e,"fa-beat",t.beat),ut(e,"fa-fade",t.fade),ut(e,"fa-beat-fade",t.beatFade),ut(e,"fa-flash",t.flash),ut(e,"fa-spin-pulse",t.spinPulse),ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fa(t){if(t&&Un(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wr.icon)return Wr.icon(t);if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ld=gl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ae(function(){return Fa(e.icon)}),a=ae(function(){return _r("classes",sd(e))}),o=ae(function(){return _r("transform",typeof e.transform=="string"?Wr.transform(e.transform):e.transform)}),s=ae(function(){return _r("mask",Fa(e.mask))}),l=ae(function(){return qu(i.value,jt(jt(jt(jt({},a.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});En(l,function(u){if(!u)return od("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=ae(function(){return l.value?ss(l.value.abstract[0],{},r):null});return function(){return c.value}}}),fd={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},cd={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},ud={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},dd={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},md={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},hd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},pd={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Xu.add(hd,md,ud,dd,pd,fd,cd);Lf(gc).component("font-awesome-icon",ld).mount("#app");
