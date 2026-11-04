(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Yo="187",pd=0,Fl=1,md=2,La=1,jc=2,Ms=3,si=0,Ht=1,Tt=2,vi=0,Wi=1,Vn=2,Ol=3,Bl=4,gd=5,ki=100,vd=101,_d=102,xd=103,yd=104,Md=200,Sd=201,bd=202,wd=203,eh=204,th=205,Ed=206,Td=207,Ad=208,Rd=209,Cd=210,Pd=211,Ld=212,Id=213,Dd=214,jr=0,eo=1,to=2,Rs=3,no=4,io=5,so=6,ao=7,nh=0,Nd=1,Ud=2,kn=0,Ko=1,Zo=2,Jo=3,ir=4,Qo=5,jo=6,el=7,ih=300,qi=301,Cs=302,mr=303,gr=304,Ha=1e3,zn=1001,ro=1002,kt=1003,Fd=1004,Zs=1005,tn=1006,vr=1007,ti=1008,hn=1009,sh=1010,ah=1011,Ps=1012,tl=1013,Pn=1014,Rn=1015,nn=1016,nl=1017,il=1018,Yi=1020,rh=35902,oh=35899,lh=1021,ch=1022,Cn=1023,ai=1026,ni=1027,hh=1028,sl=1029,xi=1030,al=1031,rl=1033,Ia=33776,Da=33777,Na=33778,Ua=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Va=37490,vo=37491,_o=37808,xo=37809,yo=37810,Mo=37811,So=37812,bo=37813,wo=37814,Eo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Io=36492,Do=36494,No=36495,Uo=36283,Fo=36284,Wa=36285,Oo=36286,Od=3200,Bo=0,Bd=1,ei="",zt="srgb",Xa="srgb-linear",$a="linear",st="srgb",_r=7680,zd=519,kd=512,Gd=513,Hd=514,dh=515,Vd=516,Wd=517,uh=518,fh=519,ph=35044,zl="300 es",Mn=2e3,Ls=2001;function Xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){const i=qa("canvas");return i.style.display="block",i}const kl={};function Ya(...i){const e="THREE."+i.shift();console.log(e,...i)}function mh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=mh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=mh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fa(...i){const e=i.join(" ");e in kl||(kl[e]=!0,Be(...i))}function qd(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Yd={[jr]:jr,[to]:so,[no]:no,[Rs]:io,[eo]:eo,[so]:to,[ao]:ao,[io]:Rs};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xr=Math.PI/180,zo=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Kd(i,e){return(i%e+e)%e}function yr(i,e,t){return(1-t)*i+t*e}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gh(i,e){if(e.constructor===Float32Array)return i;const t=sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vh(i,e){if(e.constructor===Float32Array)return i;const t=sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Ml=class Ml{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ml.prototype.isVector2=!0;let le=Ml;class ns{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),b=Math.sin(x);p=Math.sin(p*x)/b,o=Math.sin(o*x)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),d=l(n/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sl=class Sl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sl.prototype.isVector3=!0;let U=Sl;const Mr=new U,Gl=new ns,bl=class bl{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],b=s[4],y=s[7],R=s[2],E=s[5],v=s[8];return a[0]=r*_+o*x+l*R,a[3]=r*m+o*b+l*E,a[6]=r*p+o*y+l*v,a[1]=c*_+h*x+u*R,a[4]=c*m+h*b+u*E,a[7]=c*p+h*y+u*v,a[2]=d*_+f*x+g*R,a[5]=d*m+f*b+g*E,a[8]=d*p+f*y+g*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*a,f=c*a-r*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*r)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*a-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Fa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return Fa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return Fa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;let ke=bl;const Sr=new ke,Hl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const i={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===st&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===st&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xa]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const je=Jd();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=qa("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Gn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class ol{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(br(s[r].image)):a.push(br(s[r]))}else a=br(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let eu=0;const wr=new U;class Yt extends Mi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=zn,s=zn,a=tn,r=ti,o=Cn,l=hn,c=Yt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=oi(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=ih;Yt.DEFAULT_ANISOTROPY=1;const wl=class wl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,R=(p+1)/2,E=(h+d)/4,v=(u+_)/4,w=(g+m)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=E/n,a=v/n):y>R?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=E/s,a=w/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=v/a,s=w/a),this.set(n,s,a,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wl.prototype.isVector4=!0;let yt=wl;class tu extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=new Yt({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ol(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _h extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nr=class nr{constructor(e,t,n,s,a,r,o,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,a,r,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),a=1/bi.setFromMatrixColumn(e,1).length(),r=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=r*h,f=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=_-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,su)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),qn.crossVectors(n,ln),qn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),qn.crossVectors(n,ln)),qn.normalize(),Js.crossVectors(ln,qn),s[0]=qn.x,s[4]=Js.x,s[8]=ln.x,s[1]=qn.y,s[5]=Js.y,s[9]=ln.y,s[2]=qn.z,s[6]=Js.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],b=n[7],y=n[11],R=n[15],E=s[0],v=s[4],w=s[8],N=s[12],P=s[1],L=s[5],I=s[9],F=s[13],T=s[2],A=s[6],G=s[10],O=s[14],H=s[3],k=s[7],K=s[11],te=s[15];return a[0]=r*E+o*P+l*T+c*H,a[4]=r*v+o*L+l*A+c*k,a[8]=r*w+o*I+l*G+c*K,a[12]=r*N+o*F+l*O+c*te,a[1]=h*E+u*P+d*T+f*H,a[5]=h*v+u*L+d*A+f*k,a[9]=h*w+u*I+d*G+f*K,a[13]=h*N+u*F+d*O+f*te,a[2]=g*E+_*P+m*T+p*H,a[6]=g*v+_*L+m*A+p*k,a[10]=g*w+_*I+m*G+p*K,a[14]=g*N+_*F+m*O+p*te,a[3]=x*E+b*P+y*T+R*H,a[7]=x*v+b*L+y*A+R*k,a[11]=x*w+b*I+y*G+R*K,a[15]=x*N+b*F+y*O+R*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],x=l*f-c*d,b=o*f-c*u,y=o*d-l*u,R=r*f-c*h,E=r*d-l*h,v=r*u-o*h;return t*(_*x-m*b+p*y)-n*(g*x-m*R+p*E)+s*(g*b-_*R+p*v)-a*(g*y-_*E+m*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=t*o-n*r,b=t*l-s*r,y=t*c-a*r,R=n*l-s*o,E=n*c-a*o,v=s*c-a*l,w=h*_-u*g,N=h*m-d*g,P=h*p-f*g,L=u*m-d*_,I=u*p-f*_,F=d*p-f*m,T=x*F-b*I+y*L+R*P-E*N+v*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=(o*F-l*I+c*L)*A,e[1]=(s*I-n*F-a*L)*A,e[2]=(_*v-m*E+p*R)*A,e[3]=(d*E-u*v-f*R)*A,e[4]=(l*P-r*F-c*N)*A,e[5]=(t*F-s*P+a*N)*A,e[6]=(m*y-g*v-p*b)*A,e[7]=(h*v-d*y+f*b)*A,e[8]=(r*I-o*P+c*w)*A,e[9]=(n*P-t*I-a*w)*A,e[10]=(g*E-_*y+p*x)*A,e[11]=(u*y-h*E-f*x)*A,e[12]=(o*N-r*L-l*w)*A,e[13]=(t*L-n*N+s*w)*A,e[14]=(_*b-g*R-m*x)*A,e[15]=(h*R-u*b+d*x)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,u=o+o,d=a*c,f=a*h,g=a*u,_=r*h,m=r*u,p=o*u,x=l*c,b=l*h,y=l*u,R=n.x,E=n.y,v=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+y)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+b)*v,s[9]=(m-x)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=bi.set(s[0],s[1],s[2]).length();const o=bi.set(s[4],s[5],s[6]).length(),l=bi.set(s[8],s[9],s[10]).length();a<0&&(r=-r),_n.copy(this);const c=1/r,h=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=Mn,l=!1){const c=this.elements,h=2*a/(t-e),u=2*a/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===Mn)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Ls)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Mn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===Mn)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Ls)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nr.prototype.isMatrix4=!0;let ut=nr;const bi=new U,_n=new ut,iu=new U(0,0,0),su=new U(1,1,1),qn=new U,Js=new U,ln=new U,Wl=new ut,Xl=new ns;class Gt{constructor(e=0,t=0,n=0,s=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const $l=new U,wi=new ns,Nn=new ut,Qs=new U,ds=new U,ru=new U,ou=new ns,ql=new U(1,0,0),Yl=new U(0,1,0),Kl=new U(0,0,1),Zl={type:"added"},lu={type:"removed"},Ei={type:"childadded",child:null},Er={type:"childremoved",child:null};class At extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,t=new Gt,n=new ns,s=new U(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ds,Qs,this.up):Nn.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(Nn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),Er.child=e,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class we extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cu={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},js={h:0,s:0,l:0};function Ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Kd(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Ar(r,a,e+1/3),this.g=Ar(r,a,e),this.b=Ar(r,a,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(a){a!==void 0&&parseFloat(a)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return je.workingToColorSpace($t.copy(this),e),Math.round(Ye($t.r*255,0,255))*65536+Math.round(Ye($t.g*255,0,255))*256+Math.round(Ye($t.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,a=$t.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=zt){je.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(js);const n=yr(Yn.h,js.h,t),s=yr(Yn.s,js.s,t),a=yr(Yn.l,js.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Le;Le.NAMES=yh;class is{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new is(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ki extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new U,Un=new U,Rr=new U,Fn=new U,Ti=new U,Ai=new U,Jl=new U,Cr=new U,Pr=new U,Lr=new U,Ir=new yt,Dr=new yt,Nr=new yt;class gn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){xn.subVectors(s,t),Un.subVectors(n,t),Rr.subVectors(e,t);const r=xn.dot(xn),o=xn.dot(Un),l=xn.dot(Rr),c=Un.dot(Un),h=Un.dot(Rr),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Ir.setScalar(0),Dr.setScalar(0),Nr.setScalar(0),Ir.fromBufferAttribute(e,t),Dr.fromBufferAttribute(e,n),Nr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Ir,a.x),r.addScaledVector(Dr,a.y),r.addScaledVector(Nr,a.z),r}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Un.subVectors(e,t),xn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),xn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Ti.subVectors(s,n),Ai.subVectors(a,n),Cr.subVectors(e,n);const l=Ti.dot(Cr),c=Ai.dot(Cr);if(l<=0&&c<=0)return t.copy(n);Pr.subVectors(e,s);const h=Ti.dot(Pr),u=Ai.dot(Pr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(n).addScaledVector(Ti,r);Lr.subVectors(e,a);const f=Ti.dot(Lr),g=Ai.dot(Lr);if(g>=0&&f<=g)return t.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ai,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jl.subVectors(a,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Jl,o);const p=1/(m+_+d);return r=_*p,o=d*p,t.copy(n).addScaledVector(Ti,r).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,yn):yn.fromBufferAttribute(a,r),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),ta.subVectors(this.max,us),Ri.subVectors(e.a,us),Ci.subVectors(e.b,us),Pi.subVectors(e.c,us),Kn.subVectors(Ci,Ri),Zn.subVectors(Pi,Ci),ui.subVectors(Ri,Pi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ui.y,ui.x,0];return!Ur(t,Ri,Ci,Pi,ta)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,Ri,Ci,Pi,ta))?!1:(na.crossVectors(Kn,Zn),t=[na.x,na.y,na.z],Ur(t,Ri,Ci,Pi,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],yn=new U,ea=new Bs,Ri=new U,Ci=new U,Pi=new U,Kn=new U,Zn=new U,ui=new U,us=new U,ta=new U,na=new U,fi=new U;function Ur(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){fi.fromArray(i,a);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Et=new U,ia=new le;let hu=0;class an extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=e!==void 0?sr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):gh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vh(e,this.array)}}class Mh extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sh extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const du=new Bs,fs=new U,Fr=new U;class zs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Fr)),this.expandByPoint(fs.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uu=0;const mn=new ut,Or=new At,Li=new U,cn=new Bs,ps=new Bs,Ft=new U;class mt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?Sh:Mh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(cn.min,ps.min),cn.expandByPoint(Ft),Ft.addVectors(cn.max,ps.max),cn.expandByPoint(Ft)):(cn.expandByPoint(ps.min),cn.expandByPoint(ps.max))}cn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Ft.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Ft.add(Li)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new U,l[N]=new U;const h=new U,u=new U,d=new U,f=new le,g=new le,_=new le,m=new U,p=new U;function x(N,P,L){c[N]=c[P]=c[L]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,L),f.fromBufferAttribute(a,N),g.fromBufferAttribute(a,P),_.fromBufferAttribute(a,L),u.sub(h),d.sub(h),g.sub(f),_.sub(f);const I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(I),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(I),o[N].add(m),o[P].add(m),o[L].add(m),l[N].add(p),l[P].add(p),l[L].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,P=b.length;N<P;++N){const L=b[N],I=L.start,F=L.count;for(let T=I,A=I+F;T<A;T+=3)x(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const y=new U,R=new U,E=new U,v=new U;function w(N){E.fromBufferAttribute(s,N),v.copy(E);const P=o[N];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),R.crossVectors(v,P);const I=R.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,P=n.count;N<P;++N)c[N]&&w(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new an(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ql(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ql(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ql(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Zt=new U;class Ka{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?sr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):gh(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vh(e,this.data.array)}}const Br=new U,pu=new U,mu=new ke;class jn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Br.subVectors(n,t).cross(pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Br),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mu.getNormalMatrix(e),s=this.coplanarPoint(Br).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gu=0;class li extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Wi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ar extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ii;const ms=new U,Di=new U,Ni=new U,Ui=new le,gs=new le,bh=new ut,sa=new U,vs=new U,aa=new U,jl=new le,zr=new le,ec=new le;class ll extends At{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fu(t,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Ka(n,3,0,!1)),Ii.setAttribute("uv",new Ka(n,2,3,!1))}this.geometry=Ii,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ni.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;ra(sa.set(-.5,-.5,0),Ni,r,Di,s,a),ra(vs.set(.5,-.5,0),Ni,r,Di,s,a),ra(aa.set(.5,.5,0),Ni,r,Di,s,a),jl.set(0,0),zr.set(1,0),ec.set(1,1);let o=e.ray.intersectTriangle(sa,vs,aa,!1,ms);if(o===null&&(ra(vs.set(-.5,.5,0),Ni,r,Di,s,a),zr.set(0,1),o=e.ray.intersectTriangle(sa,aa,vs,!1,ms),o===null))return;const l=e.ray.origin.distanceTo(ms);l<e.near||l>e.far||t.push({distance:l,point:ms.clone(),uv:gn.getInterpolation(ms,sa,vs,aa,jl,zr,ec,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ra(i,e,t,n,s,a){Ui.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(gs.x=a*Ui.x-s*Ui.y,gs.y=s*Ui.x+a*Ui.y):gs.copy(Ui),i.copy(e),i.x+=gs.x,i.y+=gs.y,i.applyMatrix4(bh)}const Bn=new U,kr=new U,oa=new U,la=new U;class cl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kr.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),la.copy(this.origin).sub(kr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(oa),o=la.dot(this.direction),l=-la.dot(oa),c=la.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kr).addScaledVector(oa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,f=e.z-r.z,g=t.x-r.x,_=t.y-r.y,m=t.z-r.z,p=n.x-r.x,x=n.y-r.y,b=n.z-r.z,y=Math.abs(l),R=Math.abs(c),E=Math.abs(h);let v,w,N,P,L,I,F,T,A,G,O,H;if(y>=R&&y>=E?(N=l,I=u,A=g,H=p,l>=0?(v=c,w=h,P=d,L=f,F=_,T=m,G=x,O=b):(v=h,w=c,P=f,L=d,F=m,T=_,G=b,O=x)):R>=E?(N=c,I=d,A=_,H=x,c>=0?(v=h,w=l,P=f,L=u,F=m,T=g,G=b,O=p):(v=l,w=h,P=u,L=f,F=g,T=m,G=p,O=b)):(N=h,I=f,A=m,H=b,h>=0?(v=l,w=c,P=u,L=d,F=g,T=_,G=p,O=x):(v=c,w=l,P=d,L=u,F=_,T=g,G=x,O=p)),N===0)return null;const k=v/N,K=w/N,te=1/N,be=P-k*I,Ge=L-K*I,Q=F-k*A,ye=T-K*A,Re=G-k*H,Ue=O-K*H,Me=Re*ye-Ue*Q,Ve=be*Ue-Ge*Re,bt=Q*Ge-ye*be;if(s){if(Me<0||Ve<0||bt<0)return null}else if((Me<0||Ve<0||bt<0)&&(Me>0||Ve>0||bt>0))return null;const Oe=Me+Ve+bt;if(Oe===0)return null;const at=te*(Me*I+Ve*A+bt*H);return(Oe>0?at<0:at>0)?null:this.at(at/Oe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ss extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tc=new ut,pi=new cl,ca=new zs,nc=new U,ha=new U,da=new U,ua=new U,Gr=new U,fa=new U,ic=new U,pa=new U;class re extends At{constructor(e=new mt,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){fa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Gr.fromBufferAttribute(u,e),r?fa.addScaledVector(Gr,h):fa.addScaledVector(Gr.sub(t),h))}t.add(fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(a),pi.copy(e.ray).recast(e.near),!(ca.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ca,nc)===null||pi.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(a).invert(),pi.copy(e.ray).applyMatrix4(tc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,R=b;y<R;y+=3){const E=o.getX(y),v=o.getX(y+1),w=o.getX(y+2);s=ma(this,p,e,n,c,h,u,E,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=ma(this,r,e,n,c,h,u,x,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,R=b;y<R;y+=3){const E=y,v=y+1,w=y+2;s=ma(this,p,e,n,c,h,u,E,v,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,b=m+1,y=m+2;s=ma(this,r,e,n,c,h,u,x,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function vu(i,e,t,n,s,a,r,o){let l;if(e.side===Ht?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===si,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,ha),i.getVertexPosition(l,da),i.getVertexPosition(c,ua);const h=vu(i,e,t,n,ha,da,ua,ic);if(h){const u=new U;gn.getBarycoord(ic,ha,da,ua,u),s&&(h.uv=gn.getInterpolatedAttribute(s,o,l,c,u,new le)),a&&(h.uv1=gn.getInterpolatedAttribute(a,o,l,c,u,new le)),r&&(h.normal=gn.getInterpolatedAttribute(r,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};gn.getNormal(ha,da,ua,d.normal),h.face=d,h.barycoord=u}return h}class _u extends Yt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=kt,h=kt,u,d){super(null,r,o,l,c,h,s,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mi=new zs,xu=new le(.5,.5),ga=new U;class Is{constructor(e=new jn,t=new jn,n=new jn,s=new jn,a=new jn,r=new jn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],d=a[6],f=a[7],g=a[8],_=a[9],m=a[10],p=a[11],x=a[12],b=a[13],y=a[14],R=a[15];if(s[0].setComponents(c-r,f-h,p-g,R-x).normalize(),s[1].setComponents(c+r,f+h,p+g,R+x).normalize(),s[2].setComponents(c+o,f+u,p+_,R+b).normalize(),s[3].setComponents(c-o,f-u,p-_,R-b).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-y).normalize(),t===Mn)s[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(t===Ls)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=xu.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const sc=new ut;class hl{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const a=t[s];sc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[s]===void 0&&(n[s]=new Is),n[s].setFromProjectionMatrix(sc,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Is),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new hl().copy(this)}}class wh extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new U,Ja=new U,ac=new ut,_s=new cl,va=new zs,Hr=new U,rc=new U;class yu extends At{constructor(e=new mt,t=new wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Za.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new Ke(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=a,e.ray.intersectsSphere(va)===!1)return;ac.copy(s).invert(),_s.copy(e.ray).applyMatrix4(ac);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),b=_a(this,e,_s,l,p,x,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=_a(this,e,_s,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=_a(this,e,_s,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=_a(this,e,_s,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function _a(i,e,t,n,s,a,r){const o=i.geometry.attributes.position;if(Za.fromBufferAttribute(o,s),Ja.fromBufferAttribute(o,a),t.distanceSqToSegment(Za,Ja,Hr,rc)>n)return;Hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hr);if(!(c<e.near||c>e.far))return{distance:c,point:rc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class as extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oc=new ut,ko=new cl,xa=new zs,ya=new U;class ks extends At{constructor(e=new mt,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=a,e.ray.intersectsSphere(xa)===!1)return;oc.copy(s).invert(),ko.copy(e.ray).applyMatrix4(oc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ya.fromBufferAttribute(u,m),lc(ya,m,l,s,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,_=f;g<_;g++)ya.fromBufferAttribute(u,g),lc(ya,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function lc(i,e,t,n,s,a,r){const o=ko.distanceSqToPoint(i);if(o<t){const l=new U;ko.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Eh extends Yt{constructor(e=[],t=qi,n,s,a,r,o,l,c,h){super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rr extends Yt{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Yt{constructor(e,t,n=Pn,s,a,r,o=kt,l=kt,c,h=ai,u=1){if(h!==ai&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Th extends Zi{constructor(e,t=Pn,n=qi,s,a,r=kt,o=kt,l,c=ai){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ah extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ln extends mt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,p,x,b,y,R,E,v,w,N){const P=y/v,L=R/w,I=y/2,F=R/2,T=E/2,A=v+1,G=w+1;let O=0,H=0;const k=new U;for(let K=0;K<G;K++){const te=K*L-F;for(let be=0;be<A;be++){const Ge=be*P-I;k[_]=Ge*x,k[m]=te*b,k[p]=T,c.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[p]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push(be/v),u.push(1-K/w),O+=1}}for(let K=0;K<w;K++)for(let te=0;te<v;te++){const be=d+te+A*K,Ge=d+te+A*(K+1),Q=d+(te+1)+A*(K+1),ye=d+(te+1)+A*K;l.push(be,Ge,ye),l.push(Ge,Q,ye),H+=6}o.addGroup(f,H,N),f+=H,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dl extends mt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+a,_=s+1,m=new U,p=new U;for(let x=0;x<=g;x++){let b=0,y=0,R=0,E=0;if(x<=n){const N=x/n,P=N*Math.PI/2;y=-h-e*Math.cos(P),R=e*Math.sin(P),E=-e*Math.cos(P),b=N*u}else if(x<=n+a){const N=(x-n)/a;y=-h+N*t,R=e,E=0,b=u+N*d}else{const N=(x-n-a)/n,P=N*Math.PI/2;y=h+e*Math.sin(P),R=e*Math.cos(P),E=e*Math.sin(P),b=u+d+N*u}const v=Math.max(0,Math.min(1,b/f));let w=0;x===0?w=.5/s:x===g&&(w=-.5/s);for(let N=0;N<=s;N++){const P=N/s,L=P*Math.PI*2,I=Math.sin(L),F=Math.cos(L);p.x=-R*F,p.y=y,p.z=R*I,o.push(p.x,p.y,p.z),m.set(-R*F,E,R*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+w,v)}if(x>0){const N=(x-1)*_;for(let P=0;P<s;P++){const L=N+P,I=N+P+1,F=x*_+P,T=x*_+P+1;r.push(L,I,F),r.push(I,T,F)}}}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Gs extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new U,h=new le;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lt extends mt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function x(){const y=new U,R=new U;let E=0;const v=(t-e)/n;for(let w=0;w<=a;w++){const N=[],P=w/a,L=P*(t-e)+e;for(let I=0;I<=s;I++){const F=I/s,T=F*l+o,A=Math.sin(T),G=Math.cos(T);R.x=L*A,R.y=-P*n+m,R.z=L*G,u.push(R.x,R.y,R.z),y.set(A,v,G).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-P),N.push(g++)}_.push(N)}for(let w=0;w<s;w++)for(let N=0;N<a;N++){const P=_[N][w],L=_[N+1][w],I=_[N+1][w+1],F=_[N][w+1];(e>0||N!==0)&&(h.push(P,L,F),E+=3),(t>0||N!==a-1)&&(h.push(L,I,F),E+=3)}c.addGroup(p,E,0),p+=E}function b(y){const R=g,E=new le,v=new U;let w=0;const N=y===!0?e:t,P=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;const L=g;for(let I=0;I<=s;I++){const T=I/s*l+o,A=Math.cos(T),G=Math.sin(T);v.x=N*G,v.y=m*P,v.z=N*A,u.push(v.x,v.y,v.z),d.push(0,P,0),E.x=A*.5+.5,E.y=G*.5*P+.5,f.push(E.x,E.y),g++}for(let I=0;I<s;I++){const F=R+I,T=L+I;y===!0?h.push(T,T+1,F):h.push(T+1,T,F),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sn extends lt{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Sn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(a.slice(),3)),this.setAttribute("uv",new Ke(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new U,y=new U,R=new U;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],y),f(t[E+2],R),l(b,y,R,x)}function l(x,b,y,R){const E=R+1,v=[];for(let w=0;w<=E;w++){v[w]=[];const N=x.clone().lerp(y,w/E),P=b.clone().lerp(y,w/E),L=E-w;for(let I=0;I<=L;I++)I===0&&w===E?v[w][I]=N:v[w][I]=N.clone().lerp(P,I/L)}for(let w=0;w<E;w++)for(let N=0;N<2*(E-w)-1;N++){const P=Math.floor(N/2);N%2===0?(d(v[w][P+1]),d(v[w+1][P]),d(v[w][P])):(d(v[w][P+1]),d(v[w+1][P+1]),d(v[w+1][P]))}}function c(x){const b=new U;for(let y=0;y<a.length;y+=3)b.x=a[y+0],b.y=a[y+1],b.z=a[y+2],b.normalize().multiplyScalar(x),a[y+0]=b.x,a[y+1]=b.y,a[y+2]=b.z}function h(){const x=new U;for(let b=0;b<a.length;b+=3){x.x=a[b+0],x.y=a[b+1],x.z=a[b+2];const y=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;r.push(y,1-R)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const b=r[x+0],y=r[x+2],R=r[x+4],E=Math.max(b,y,R),v=Math.min(b,y,R);E>.9&&v<.1&&(b<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),R<.2&&(r[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function f(x,b){const y=x*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){const x=new U,b=new U,y=new U,R=new U,E=new le,v=new le,w=new le;for(let N=0,P=0;N<a.length;N+=9,P+=6){x.set(a[N+0],a[N+1],a[N+2]),b.set(a[N+3],a[N+4],a[N+5]),y.set(a[N+6],a[N+7],a[N+8]),E.set(r[P+0],r[P+1]),v.set(r[P+2],r[P+3]),w.set(r[P+4],r[P+5]),R.copy(x).add(b).add(y).divideScalar(3);const L=m(R);_(E,P+0,x,L),_(v,P+2,b,L),_(w,P+4,y,L)}}function _(x,b,y,R){R<0&&x.x===1&&(r[b]=x.x-1),y.x===0&&y.z===0&&(r[b]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.vertices,e.indices,e.radius,e.detail)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new le:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,s=[],a=[],r=[],o=new U,l=new ut;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}a[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(Ye(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ul extends In{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mu extends ul{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,f*=h,s(r,o,d,f)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const cc=new U,hc=new U,Vr=new fl,Wr=new fl,Xr=new fl;class Su extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(hc.subVectors(s[0],s[1]).add(s[0]),c=hc);const u=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(cc.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=cc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Xr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vr.calc(l),Wr.calc(l),Xr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dc(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function bu(i,e){const t=1-i;return t*t*e}function wu(i,e){return 2*(1-i)*i*e}function Eu(i,e){return i*i*e}function ws(i,e,t,n){return bu(i,e)+wu(i,t)+Eu(i,n)}function Tu(i,e){const t=1-i;return t*t*t*e}function Au(i,e){const t=1-i;return 3*t*t*i*e}function Ru(i,e){return 3*(1-i)*i*i*e}function Cu(i,e){return i*i*i*e}function Es(i,e,t,n,s){return Tu(i,e)+Au(i,t)+Ru(i,n)+Cu(i,s)}class Rh extends In{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Es(e,s.x,a.x,r.x,o.x),Es(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pu extends In{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Es(e,s.x,a.x,r.x,o.x),Es(e,s.y,a.y,r.y,o.y),Es(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ch extends In{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends In{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends In{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(ws(e,s.x,a.x,r.x),ws(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends In{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(ws(e,s.x,a.x,r.x),ws(e,s.y,a.y,r.y),ws(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lh extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(dc(o,l.x,c.x,h.x,u.x),dc(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:Mu,CatmullRomCurve3:Su,CubicBezierCurve:Rh,CubicBezierCurve3:Pu,EllipseCurve:ul,LineCurve:Ch,LineCurve3:Lu,QuadraticBezierCurve:Ph,QuadraticBezierCurve3:Iu,SplineCurve:Lh});class Du extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new uc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class fc extends Du{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ch(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new Ph(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){const o=new Rh(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,a,r,o,l),this}absellipse(e,t,n,s,a,r,o,l){const c=new ul(e,t,n,s,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ds extends fc{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new fc().fromJSON(s))}return this}}function Nu(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=Ih(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=zu(i,e,a,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ns(a,r,t,o,l,c,0),r}function Ih(i,e,t,n,s){let a;if(s===Zu(i,e,t,n)>0)for(let r=e;r<t;r+=n)a=pc(r/n|0,i[r],i[r+1],a);else for(let r=t-n;r>=e;r-=n)a=pc(r/n|0,i[r],i[r+1],a);return a&&Ji(a,a.next)&&(Fs(a),a=a.next),a}function yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,a,r){if(!i)return;!r&&a&&Wu(i,n,s,a);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?Fu(i,n,s,a):Uu(i)){e.push(l.i,i.i,c.i),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=Ou(yi(i),e),Ns(i,e,t,n,s,a,2)):r===2&&Bu(i,e,t,n,s,a):Ns(yi(i),e,t,n,s,a,1);break}}}function Uu(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,a,r),u=Math.min(o,l,c),d=Math.max(s,a,r),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(s,o,a,l,r,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fu(i,e,t,n){const s=i.prev,a=i,r=i.next;if(Mt(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,u=a.y,d=r.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=Go(f,g,e,t,n),x=Go(_,m,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==r&&Ss(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ss(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==r&&Ss(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ss(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ou(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ji(n,s)&&Nh(n,t,t.next,s)&&Us(n,s)&&Us(s,n)&&(e.push(n.i,t.i,s.i),Fs(t),Fs(t.next),t=i=s),t=t.next}while(t!==i);return yi(t)}function Bu(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&qu(r,o)){let l=Uh(r,o);r=yi(r,r.next),l=yi(l,l.next),Ns(r,e,t,n,s,a,0),Ns(l,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function zu(i,e,t,n){const s=[];for(let a=0,r=e.length;a<r;a++){const o=e[a]*n,l=a<r-1?e[a+1]*n:i.length,c=Ih(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($u(c))}s.sort(ku);for(let a=0;a<s.length;a++)t=Gu(s[a],t);return t}function ku(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gu(i,e){const t=Hu(i,e);if(!t)return e;const n=Uh(t,i);return yi(n,n.next),yi(t,t.next)}function Hu(i,e){let t=e;const n=i.x,s=i.y;let a=-1/0,r;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>a&&(a=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dh(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Us(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&Vu(r,t)))&&(r=t,h=u)}t=t.next}while(t!==o);return r}function Vu(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Wu(i,e,t,n){let s=i;do s.z===0&&(s.z=Go(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xu(s)}function Xu(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,t*=2}while(e>1);return i}function Go(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $u(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Dh(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Ss(i,e,t,n,s,a,r,o){return!(i===r&&e===o)&&Dh(i,e,t,n,s,a,r,o)}function qu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yu(i,e)&&(Us(i,e)&&Us(e,i)&&Ku(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Ji(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function Nh(i,e,t,n){const s=Sa(Mt(i,e,t)),a=Sa(Mt(i,e,n)),r=Sa(Mt(t,n,i)),o=Sa(Mt(t,n,e));return!!(s!==a&&r!==o||s===0&&Ma(i,t,e)||a===0&&Ma(i,n,e)||r===0&&Ma(t,i,n)||o===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sa(i){return i>0?1:i<0?-1:0}function Yu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Us(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Ku(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uh(i,e){const t=Ho(i.i,i.x,i.y),n=Ho(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function pc(i,e,t,n){const s=Ho(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ho(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zu(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class Ju{static triangulate(e,t,n=2){return Nu(e,t,n)}}class Ts{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Ts.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];mc(e),gc(n,e);let r=e.length;t.forEach(mc);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,gc(n,t[l]);const o=Ju.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function mc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class rn extends or{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rn(e.radius,e.detail)}}class $i extends or{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $i(e.radius,e.detail)}}class rs extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-r;for(let b=0;b<c;b++){const y=b*u-a;g.push(y,-x,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const b=x+c*p,y=x+c*(p+1),R=x+1+c*(p+1),E=x+1+c*p;f.push(b,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qi extends mt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new U,g=new le;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,b=x,y=x+n+1,R=x+n+2,E=x+1;o.push(b,y,E),o.push(y,R,E)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ji extends mt{constructor(e=new Ds([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],a=[],r=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(r,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Ts.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Ts.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Ts.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),a.push(0,0,1),r.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],b=x[0]+u,y=x[1]+u,R=x[2]+u;n.push(b,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qu(t,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const r=t[e.shapes[s]];n.push(r)}return new ji(n,e.curveSegments)}}function Qu(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class on extends mt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n,y=r+b*o,R=e*Math.cos(y),E=Math.sqrt(e*e-R*R);let v=0;p===0&&r===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const N=w/t,P=s+N*a;u.x=-E*Math.cos(P),u.y=R,u.z=E*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(N+v,1-b),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=h[p][x+1],y=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||r>0)&&f.push(b,y,E),(p!==n-1||l<Math.PI)&&f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class St extends mt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new U,f=new U,g=new U;for(let _=0;_<=n;_++){const m=r+_/n*o;for(let p=0;p<=s;p++){const x=p/s*a;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,x=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(p,x,y),l.push(x,b,y)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(vc(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(vc(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const s in n)e[s]=n[s]}return e}function vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Os={clone:es,merge:Jt};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Oh extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nf extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sf extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pl extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class lr extends pl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const $r=new ut,_c=new U,xc=new U;class Bh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($r,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ba=new U,wa=new ns,wn=new U;class zh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,wa,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,wa,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,wa,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,wa,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new U,yc=new le,Mc=new le;class qt extends zh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,yc,Mc),t.subVectors(Mc,yc)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class af extends Bh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Wn extends pl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new af}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ml extends zh{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rf extends Bh{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ri extends pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new rf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Fi=-90,Oi=1;class Vo extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const a=new qt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const r=new qt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const o=new qt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new qt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new qt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class of extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class lf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cf(){this._document.hidden===!1&&this.reset()}class hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sc(i,e,t,n){const s=df(n);switch(t){case lh:return i*e;case hh:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case ch:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case rl:return i*e*4/s.components*s.byteLength;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case uo:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case Va:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Do:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wa:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function df(i){switch(i){case hn:case sh:return{byteLength:1,components:1};case Ps:case ah:case nn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Pn:case tl:case Rn:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function kh(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function uf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,hp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ym=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
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
}`,Um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,km=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:yf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Ef,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:If,color_pars_fragment:Df,color_pars_vertex:Nf,color_vertex:Uf,common:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:kf,emissivemap_pars_fragment:Gf,colorspace_fragment:Hf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:$f,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sp,envmap_vertex:Yf,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:ap,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:up,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Gp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:jp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:am,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:dm,background_vert:um,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:vm,depth_vert:_m,depth_frag:xm,distance_vert:ym,distance_frag:Mm,equirect_vert:Sm,equirect_frag:bm,linedashed_vert:wm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Im,meshnormal_frag:Dm,meshphong_vert:Nm,meshphong_frag:Um,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:km,points_frag:Gm,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},xe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},An={basic:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Jt([xe.common,xe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Jt([xe.lights,xe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};An.physical={uniforms:Jt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ea={r:0,b:0,g:0},$m=new ut,Gh=new ke;Gh.set(-1,0,0,0,1,0,0,0,1);function qm(i,e,t,n,s,a){const r=new Le(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(x){let b=!1;const y=f(x);y===null?m(r,o):y&&y.isColor&&(m(y,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,b){const y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new re(new Ln(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:es(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gh),c.material.toneMapped=je.getTransfer(y.colorSpace)!==st,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new re(new rs(2,2),new jt({name:"BackgroundMaterial",uniforms:es(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(Ea,Fh(i)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,b,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,b=1){r.set(x),o=b,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(r,o)},render:g,addToRenderList:_,dispose:p}}function Ym(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(L,I,F,T,A){let G=!1;const O=u(L,T,F,I);a!==O&&(a=O,c(a.object)),G=f(L,T,F,A),G&&g(L,T,F,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,y(L,I,F,T),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,I,F,T){const A=T.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const O=L.isInstancedMesh===!0?L.id:0;let H=G[O];H===void 0&&(H={},G[O]=H);let k=H[F.id];k===void 0&&(k={},H[F.id]=k);let K=k[A];return K===void 0&&(K=d(l()),k[A]=K),K}function d(L){const I=[],F=[],T=[];for(let A=0;A<t;A++)I[A]=0,F[A]=0,T[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:T,object:L,attributes:{},index:null}}function f(L,I,F,T){const A=a.attributes,G=I.attributes;let O=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){const te=A[k];let be=G[k];if(be===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;O++}return a.attributesNum!==O||a.index!==T}function g(L,I,F,T){const A={},G=I.attributes;let O=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){let te=G[k];te===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const be={};be.attribute=te,te&&te.data&&(be.data=te.data),A[k]=be,O++}a.attributes=A,a.attributesNum=O,a.index=T}function _(){const L=a.newAttributes;for(let I=0,F=L.length;I<F;I++)L[I]=0}function m(L){p(L,0)}function p(L,I){const F=a.newAttributes,T=a.enabledAttributes,A=a.attributeDivisors;F[L]=1,T[L]===0&&(i.enableVertexAttribArray(L),T[L]=1),A[L]!==I&&(i.vertexAttribDivisor(L,I),A[L]=I)}function x(){const L=a.newAttributes,I=a.enabledAttributes;for(let F=0,T=I.length;F<T;F++)I[F]!==L[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function b(L,I,F,T,A,G,O){O===!0?i.vertexAttribIPointer(L,I,F,A,G):i.vertexAttribPointer(L,I,F,T,A,G)}function y(L,I,F,T){_();const A=T.attributes,G=F.getAttributes(),O=I.defaultAttributeValues;for(const H in G){const k=G[H];if(k.location>=0){let K=A[H];if(K===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const te=K.normalized,be=K.itemSize,Ge=e.get(K);if(Ge===void 0)continue;const Q=Ge.buffer,ye=Ge.type,Re=Ge.bytesPerElement,Ue=ye===i.INT||ye===i.UNSIGNED_INT||K.gpuType===tl;if(K.isInterleavedBufferAttribute){const Me=K.data,Ve=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,bt=K.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Oe=0;Oe<k.locationSize;Oe++)p(k.location+Oe,Me.meshPerAttribute);L.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Oe=0;Oe<k.locationSize;Oe++)m(k.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Oe=0;Oe<k.locationSize;Oe++)b(k.location+Oe,be/k.locationSize,ye,te,Ve*Re,(bt+be/k.locationSize*Oe)*Re,Ue)}else{if(K.isInstancedBufferAttribute){for(let Me=0;Me<k.locationSize;Me++)p(k.location+Me,K.meshPerAttribute);L.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<k.locationSize;Me++)m(k.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Me=0;Me<k.locationSize;Me++)b(k.location+Me,be/k.locationSize,ye,te,be*Re,be/k.locationSize*Me*Re,Ue)}}else if(O!==void 0){const te=O[H];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(k.location,te);break;case 3:i.vertexAttrib3fv(k.location,te);break;case 4:i.vertexAttrib4fv(k.location,te);break;default:i.vertexAttrib1fv(k.location,te)}}}}x()}function R(){N();for(const L in n){const I=n[L];for(const F in I){const T=I[F];for(const A in T){const G=T[A];for(const O in G)h(G[O].object),delete G[O];delete T[A]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const I=n[L.id];for(const F in I){const T=I[F];for(const A in T){const G=T[A];for(const O in G)h(G[O].object),delete G[O];delete T[A]}}delete n[L.id]}function v(L){for(const I in n){const F=n[I];for(const T in F){const A=F[T];if(A[L.id]===void 0)continue;const G=A[L.id];for(const O in G)h(G[O].object),delete G[O];delete A[L.id]}}}function w(L){for(const I in n){const F=n[I],T=L.isInstancedMesh===!0?L.id:0,A=F[T];if(A!==void 0){for(const G in A){const O=A[G];for(const H in O)h(O[H].object),delete O[H];delete A[G]}delete F[T],Object.keys(F).length===0&&delete n[I]}}}function N(){P(),r=!0,a!==s&&(a=s,c(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Km(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Zm(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(v){return!(v!==Cn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const w=v===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==hn&&v!==Rn&&!w&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:R,samples:E}}function Jm(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new jn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const x=a?0:n,b=x*4;let y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let R=0;R!==b;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)r.copy(u[b]).applyMatrix4(x,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}class gl extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:vi});a.uniforms.tEquirect.value=t;const r=new re(s,a),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=tn),new Vo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const bc=256,Qm=3,jm=20,Hh=256,Vh=16,e0=3,t0=new U,n0=new Le;class Qa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vo(1,10,null),this._boxMesh=new re(new Ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=t0}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(n0));const m=new Vo(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bc,Zd(e))}_fromTexture(e,t){e.mapping===qi||e.mapping===Cs?this._setSize(e.image.length===0?bc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=wc(e,!1,!1),n=Math.log2(e)-Qm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,a=this._cubeCamera;s.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qi||e.mapping===Cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ec()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=i0(),this._integrationMaterial=s0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/Vh);for(let r=0;r<=n;r++){const o=Qa.lodToRoughness(r,n);if(r>n-e0)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Hh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a0());const n=this._blurMaterial,s=n.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(a,0,n)}}function wc(i,e,t){return new gl(i,{minFilter:ti,generateMipmaps:e,type:nn,colorSpace:Xa,depthBuffer:t})}function Vs(i,e,t){return new jt({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Ht,blending:vi,depthTest:!1,depthWrite:!1})}function i0(){return Vs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function s0(){return Vs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function a0(){return Vs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ec(){return Vs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tc(){return Vs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function r0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){const f=d.mapping;if(f===mr||f===gr)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new gl(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===mr||f===gr,_=f===qi||f===Cs;if(g||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Qa(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return g&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Qa(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===mr?d.mapping=qi:f===gr&&(d.mapping=Cs),d}function l(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function o0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fa("WebGLRenderer: "+n+" extension not supported."),s}}}function l0(i,e,t,n){const s={},a=new WeakMap,r=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],r.unregister(g);const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),r.register(_,_.id,_),t.memory.geometries++),_}function h(g){const _=g.attributes;for(const m in _)e.update(_[m],i.ARRAY_BUFFER)}function u(g){const _=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const x=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?Sh:Mh,y=new b(Math.ceil(x/3)*6,1),R=y.array;if(_!==null){const v=_.array;p=_.version;for(let w=0,N=0;w<x;w+=3){const P=v[w+0],L=v[w+1],I=v[w+2];R[N++]=P,R[N++]=L,R[N++]=L,R[N++]=I,R[N++]=I,R[N++]=P}}else{p=m.version;for(let v=0,w=0;v<x;v+=3){const N=v+0,P=v+1,L=v+2;R[w++]=N,R[w++]=P,R[w++]=P,R[w++]=L,R[w++]=L,R[w++]=N}}y.version=p;const E=a.get(g);E&&e.remove(E),a.set(g,y)}function d(g){const _=a.get(g);if(_){const m=g.index;m!==null&&_.version<m.version&&u(g)}else u(g);return a.get(g)}function f(){for(const g in s){const _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function c0(i,e,t){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,d){i.drawElements(n,d,a,u*r),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,a,u*r,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function h0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:nt("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d0(i,e,t){const n=new WeakMap,s=new yt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let P=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const v=new Float32Array(R*E*4*u),w=new _h(v,R,E,u);w.type=Rn,w.needsUpdate=!0;const N=y*4;for(let L=0;L<u;L++){const I=p[L],F=x[L],T=b[L],A=R*E*4*L;for(let G=0;G<I.count;G++){const O=G*N;g===!0&&(s.fromBufferAttribute(I,G),v[A+O+0]=s.x,v[A+O+1]=s.y,v[A+O+2]=s.z,v[A+O+3]=0),_===!0&&(s.fromBufferAttribute(F,G),v[A+O+4]=s.x,v[A+O+5]=s.y,v[A+O+6]=s.z,v[A+O+7]=0),m===!0&&(s.fromBufferAttribute(T,G),v[A+O+8]=s.x,v[A+O+9]=s.y,v[A+O+10]=s.z,v[A+O+11]=T.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new le(R,E)},n.set(o,d),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function u0(i,e,t,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,u=c.geometry,d=e.get(c,u);if(a.get(d)!==h&&(e.update(d),a.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return d}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const f0={[Ko]:"LINEAR_TONE_MAPPING",[Zo]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[jo]:"AGX_TONE_MAPPING",[el]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function p0(i,e,t,n,s,a){const r=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new mt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const u=new Oh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new re(h,u),f=new ml(-1,1,1,-1,0,1);let g=null,_=null,m=!1,p,x=null,b=[],y=!1;this.setSize=function(R,E){r.setSize(R,E),o!==null&&o.setSize(R,E),l!==null&&l.setSize(R,E);for(let v=0;v<b.length;v++){const w=b[v];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){b=R,y=b.length>0&&b[0].isRenderPass===!0;const E=r.width,v=r.height;b.length>0&&o===null&&(o=new sn(E,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new sn(E,v,{type:nn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&b.some(N=>N.needsDepthTexture===!0);w!==(r.depthTexture!==null)&&(w===!0&&c===null&&(c=new Zi(E,v),a===!0&&(c.format=ni,c.type=Yi)),r.dispose(),r.depthTexture=w?c:null,r.resolveDepthBuffer=w,r.storeMultisampledDepthBuffer=w);for(let N=0;N<b.length;N++){const P=b[N];P.setSize&&P.setSize(E,v),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,E){if(m||R.toneMapping===kn&&b.length===0)return!1;if(x=E,E!==null){const v=E.width,w=E.height;(r.width!==v||r.height!==w)&&this.setSize(v,w)}return y===!1&&R.setRenderTarget(r),p=R.toneMapping,R.toneMapping=kn,!0},this.hasRenderPass=function(){return y},this.end=function(R,E){R.toneMapping=p,m=!0;let v=r,w=o;for(let N=0;N<b.length;N++){const P=b[N];P.enabled!==!1&&(P.render(R,w,v,E),P.needsSwap!==!1&&(v=w,w=w===o?l:o))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,u.defines={},je.getTransfer(g)===st&&(u.defines.SRGB_TRANSFER="");const N=f0[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(x),R.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Wh=new Yt,Xh=new Zi(1,1),$h=new Th(1),qh=new _h,Yh=new nu,Kh=new Eh,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Ac[s];if(a===void 0&&(a=new Float32Array(s),Ac[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cr(i,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function m0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function x0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),It(t,n)}}function y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),It(t,n)}}function M0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),It(t,n)}}function S0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function T0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function hr(i){return i.version===0&&(i.compareFunction=fh,i.needsUpdate=!0),i}function P0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?a=hr(Xh):a=Wh,t.setTexture2D(e||a,s)}function L0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yh,s)}function I0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=hr($h):a=Kh,t.setTextureCube(e||a,s)}function D0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qh,s)}function N0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return v0;case 35666:return _0;case 35674:return x0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return b0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return D0}}function U0(i,e){i.uniform1fv(this.addr,e)}function F0(i,e){const t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function O0(i,e){const t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function B0(i,e){const t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function z0(i,e){const t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function k0(i,e){const t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G0(i,e){const t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H0(i,e){i.uniform1iv(this.addr,e)}function V0(i,e){i.uniform2iv(this.addr,e)}function W0(i,e){i.uniform3iv(this.addr,e)}function X0(i,e){i.uniform4iv(this.addr,e)}function $0(i,e){i.uniform1uiv(this.addr,e)}function q0(i,e){i.uniform2uiv(this.addr,e)}function Y0(i,e){i.uniform3uiv(this.addr,e)}function K0(i,e){i.uniform4uiv(this.addr,e)}function Z0(i,e,t){const n=this.cache,s=e.length,a=cr(t,s);Lt(n,a)||(i.uniform1iv(this.addr,a),It(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=hr(Xh):r=Wh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function J0(i,e,t){const n=this.cache,s=e.length,a=cr(t,s);Lt(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Yh,a[r])}function Q0(i,e,t){const n=this.cache,s=e.length,a=cr(t,s);Lt(n,a)||(i.uniform1iv(this.addr,a),It(n,a));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=hr($h):r=Kh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r,a[o])}function j0(i,e,t){const n=this.cache,s=e.length,a=cr(t,s);Lt(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||qh,a[r])}function eg(i){switch(i){case 5126:return U0;case 35664:return F0;case 35665:return O0;case 35666:return B0;case 35674:return z0;case 35675:return k0;case 35676:return G0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return $0;case 36294:return q0;case 36295:return Y0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return j0}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=N0(t.type)}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}}class ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Ic(i,e){i.seq.push(e),i.map[e.id]=e}function sg(i,e,t){const n=i.name,s=n.length;for(qr.lastIndex=0;;){const a=qr.exec(n),r=qr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Ic(t,c===void 0?new tg(o,i,e):new ng(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ig(o),Ic(t,u)),t=u}}}class Oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);sg(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Dc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ag=37297;let rg=0;function og(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Nc=new ke;function lg(i){je._getMatrix(Nc,je.workingColorSpace,i);const e=`mat3( ${Nc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+og(i.getShaderSource(e),o)}else return a}function cg(i,e){const t=lg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const hg={[Ko]:"Linear",[Zo]:"Reinhard",[Jo]:"Cineon",[ir]:"ACESFilmic",[jo]:"AgX",[el]:"Neutral",[Qo]:"Custom"};function dg(i,e){const t=hg[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ta=new U;function ug(){je.getLuminanceCoefficients(Ta);const i=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function pg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function bs(i){return i!==""}function Fc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Oc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(gg,vg)}function vg(i,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wo(t)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(_g,xg)}function xg(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function zc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yg={[La]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function Mg(i){return yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sg={[Cs]:"ENVMAP_MODE_REFRACTION"};function bg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Sg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wg={[nh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function Eg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wg[i.combine]||"ENVMAP_BLENDING_NONE"}function Tg(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Mg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=bg(t),u=Eg(t),d=fg(t),f=pg(a),g=s.createProgram();let _,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bs).join(`
`),m.length>0&&(m+=`
`)):(_=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),m=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?$e.tonemapping_pars_fragment:"",t.toneMapping!==kn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),r=Wo(r),r=Fc(r,t),r=Oc(r,t),o=Wo(o),o=Fc(o,t),o=Oc(o,t),r=Bc(r),o=Bc(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=p+_+r,b=p+m+o,y=Dc(s,s.VERTEX_SHADER,x),R=Dc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,y),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(R)||"",T=L.trim(),A=I.trim(),G=F.trim();let O=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,R);else{const k=Uc(s,y,"vertex"),K=Uc(s,R,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+T+`
`+k+`
`+K)}else T!==""?Be("WebGLProgram: Program Info Log:",T):(A===""||G==="")&&(H=!1);H&&(P.diagnostics={runnable:O,programLog:T,vertexShader:{log:A,prefix:_},fragmentShader:{log:G,prefix:m}})}s.deleteShader(y),s.deleteShader(R),v=new Oa(s,g),w=mg(s,g)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,ag)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=R,this}let Ag=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cg(e),t.set(e,n)),n}}class Cg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Pg(i){return i===xi||i===Va||i===Wa}function Lg(i,e,t,n,s,a){const r=new xh,o=new Rg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,w,N,P,L,I){const F=P.fog,T=L.geometry,A=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||A,G),H=d[v.type];let k=n.precision;v.precision!==null&&(k=n.getMaxPrecision(v.precision),k!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",k,"instead."));const K=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,te=K!==void 0?K.length:0;let be=0;T.morphAttributes.position!==void 0&&(be=1),T.morphAttributes.normal!==void 0&&(be=2),T.morphAttributes.color!==void 0&&(be=3);let Ge,Q,ye,Re;if(H){const ve=An[H];Ge=ve.vertexShader,Q=ve.fragmentShader}else{Ge=v.vertexShader,Q=v.fragmentShader;const ve=o.getVertexShaderStage(v),rt=o.getFragmentShaderStage(v);o.update(v,ve,rt),ye=ve.id,Re=rt.id}const Ue=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ve=L.isInstancedMesh===!0,bt=L.isBatchedMesh===!0,Oe=!!v.map,at=!!v.matcap,ct=!!O,Ze=ct&&O.isPMREMTexture===!0,Ot=!!v.aoMap,Rt=!!v.lightMap,en=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,bn=!!v.displacementMap,Dt=!!v.emissiveMap,dn=!!v.metalnessMap,un=!!v.roughnessMap,fn=v.anisotropy>0,z=v.clearcoat>0,pn=v.diffuseRoughness>0,gt=v.dispersion>0,vt=v.retroreflectivity>0,ge=v.iridescence>0,Ct=v.sheen>0,Fe=v.transmission>0,ze=fn&&!!v.anisotropyMap,C=z&&!!v.clearcoatMap,M=z&&!!v.clearcoatNormalMap,W=z&&!!v.clearcoatRoughnessMap,se=pn&&!!v.diffuseRoughnessMap,ee=ge&&!!v.iridescenceMap,ce=ge&&!!v.iridescenceThicknessMap,pe=Ct&&!!v.sheenColorMap,Z=Ct&&!!v.sheenRoughnessMap,J=!!v.specularMap,de=!!v.specularColorMap,D=!!v.specularIntensityMap,j=Fe&&!!v.transmissionMap,Y=Fe&&!!v.thicknessMap,ue=!!v.gradientMap,oe=!!v.alphaMap,he=v.alphaTest>0,De=!!v.alphaHash,Xe=!!v.extensions;let ae=kn;v.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ne=Ze?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,We={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:Q,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:k,batching:bt,batchingColor:bt&&L._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&L.instanceColor!==null,instancingMorph:Ve&&L.morphTexture!==null,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:at,envMap:ct,envMapMode:ct&&O.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Ne.length-1:null,envMapSize:Ze?Ne[0].width:null,aoMap:Ot,lightMap:Rt,bumpMap:en,normalMap:_t,displacementMap:bn,emissiveMap:Dt,normalMapObjectSpace:_t&&v.normalMapType===Bd,normalMapTangentSpace:_t&&v.normalMapType===Bo,packedNormalMap:_t&&v.normalMapType===Bo&&Pg(v.normalMap.format),metalnessMap:dn,roughnessMap:un,anisotropy:fn,anisotropyMap:ze,clearcoat:z,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:W,diffuseRoughness:pn,diffuseRoughnessMap:se,dispersion:gt,retroreflection:vt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:Ct,sheenColorMap:pe,sheenRoughnessMap:Z,specularMap:J,specularColorMap:de,specularIntensityMap:D,transmission:Fe,transmissionMap:j,thicknessMap:Y,gradientMap:ue,opaque:v.transparent===!1&&v.blending===Wi&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:De,combine:v.combine,mapUv:Oe&&f(v.map.channel),aoMapUv:Ot&&f(v.aoMap.channel),lightMapUv:Rt&&f(v.lightMap.channel),bumpMapUv:en&&f(v.bumpMap.channel),normalMapUv:_t&&f(v.normalMap.channel),displacementMapUv:bn&&f(v.displacementMap.channel),emissiveMapUv:Dt&&f(v.emissiveMap.channel),metalnessMapUv:dn&&f(v.metalnessMap.channel),roughnessMapUv:un&&f(v.roughnessMap.channel),anisotropyMapUv:ze&&f(v.anisotropyMap.channel),clearcoatMapUv:C&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(v.sheenRoughnessMap.channel),specularMapUv:J&&f(v.specularMap.channel),specularColorMapUv:de&&f(v.specularColorMap.channel),specularIntensityMapUv:D&&f(v.specularIntensityMap.channel),transmissionMapUv:j&&f(v.transmissionMap.channel),thicknessMapUv:Y&&f(v.thicknessMap.channel),alphaMapUv:oe&&f(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(_t||fn),vertexNormals:!!T.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!T.attributes.uv&&(Oe||oe),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||T.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.filter(ve=>ve.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tt,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&v.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(w,v),p(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function p(v,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.diffuseRoughness&&r.enable(25),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function x(v){const w=d[v.type];let N;if(w){const P=An[w];N=Os.clone(P.uniforms)}else N=v.uniforms;return N}function b(v,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new Tg(i,w,v,s),c.push(N),h.set(w,N)),N}function y(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:R,programs:c,dispose:E}}function Ig(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gc(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:r(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=r(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function l(d,f,g,_,m,p,x){x.reversedDepth===!0&&(m=-m);const b=o(d,f,g,_,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(d,f,g,_,m,p){const x=o(d,f,g,_,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Dg),n.length>1&&n.sort(f||kc),s.length>1&&s.sort(f||kc)}function u(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:u,sort:h}}function Ng(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Gc,i.set(n,[r])):s>=a.length?(r=new Gc,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Og=0;function Bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zg(i){const e=new Ug,t=Fg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,a=new ut,r=new ut;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,b=0,y=0,R=0,E=0,v=0,w=0,N=0,P=0;c.sort(Bg);for(let I=0,F=c.length;I<F;I++){const T=c[I],A=T.color,G=T.intensity,O=T.distance;let H=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===xi?H=T.shadow.map.texture:H=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=A.r*G,u+=A.g*G,d+=A.b*G;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],G);P++}else if(T.isSunLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,te=t.get(T);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=H;const be=K.getViewportCount();for(let Ge=0;Ge<be;Ge++)n.sunShadowMatrix[_+Ge]=K.getMatrix(Ge),n.sunShadowCascade[_+Ge]=K._cascadeData[Ge];_+=be,g++}n.sun[f]=k,f++}else if(T.isDirectionalLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,te=t.get(T);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=T.shadow.matrix,R++}n.directional[m]=k,m++}else if(T.isSpotLight){const k=e.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(A).multiplyScalar(G),k.distance=O,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[x]=k;const K=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,K.updateMatrices(T),T.castShadow&&N++),n.spotLightMatrix[x]=K.matrix,T.castShadow){const te=t.get(T);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.spotShadow[x]=te,n.spotShadowMap[x]=H,v++}x++}else if(T.isRectAreaLight){const k=e.get(T);k.color.copy(A).multiplyScalar(G),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[b]=k,b++}else if(T.isPointLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){const K=T.shadow,te=t.get(T);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=T.shadow.matrix,E++}n.point[p]=k,p++}else if(T.isHemisphereLight){const k=e.get(T);k.skyColor.copy(T.color).multiplyScalar(G),k.groundColor.copy(T.groundColor).multiplyScalar(G),n.hemi[y]=k,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==R||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+w-N,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=x,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=R,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=P,n.version=Og++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){const y=c[x];if(y.isSunLight){const R=n.sun[u];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),u++}else if(y.isDirectionalLight){const R=n.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(y.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(r),R.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const R=n.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Hc(i){const e=new zg(i),t=[],n=[],s=[];function a(u){h.camera=u,t.length=0,n.length=0,s.length=0}function r(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function kg(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Hc(i),e.set(s,[o])):a>=r.length?(o=new Hc(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Wg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Vc=new ut,xs=new U,Yr=new U;function Xg(i,e,t){let n=new Is;const s=new le,a=new le,r=new yt,o=new nf,l=new sf,c={},h=t.maxTextureSize,u={[si]:Ht,[Ht]:si,[Tt]:Tt},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Gg,fragmentShader:Hg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let p=this.type;this.render=function(E,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===jc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(vi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&v.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(A=>A.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,A=E.length;T<A;T++){const G=E[T],O=G.shadow;if(O===void 0){Be("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const H=O.getFrameExtents();s.multiply(H),a.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/H.x),s.x=a.x*H.x,O.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/H.y),s.y=a.y*H.y,O.mapSize.y=a.y));const k=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ms){if(G.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new sn(s.x,s.y,{format:xi,type:nn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Zi(s.x,s.y,Rn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=ai,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt}else G.isPointLight?(O.map=new gl(s.x),O.map.depthTexture=new Th(s.x,Pn)):(O.map=new sn(s.x,s.y),O.map.depthTexture=new Zi(s.x,s.y,Pn)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=ai,this.type===La?(O.map.depthTexture.compareFunction=k?uh:dh,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const K=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,w);const te=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let be=0;be<K;be++){const Ge=O.getCamera(be);if(G.isPointLight){const Q=O.camera,ye=O.matrix,Re=G.distance||Q.far;Re!==Q.far&&(Q.far=Re,Q.updateProjectionMatrix()),xs.setFromMatrixPosition(G.matrixWorld),Q.position.copy(xs),Yr.copy(Q.position),Yr.add(Vg[be]),Q.up.copy(Wg[be]),Q.lookAt(Yr),Q.updateMatrixWorld(),ye.makeTranslation(-xs.x,-xs.y,-xs.z),Vc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Vc,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,be),i.clear();else{be===0&&(i.setRenderTarget(O.map),i.clear());const Q=O.getViewport(be);r.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),I.viewport(r)}n=O.getFrustum(be),y(v,w,Ge,G,te,this.type)}O.isPointLightShadow!==!0&&this.type===Ms&&x(O,w),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,P,L)};function x(E,v){const w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new sn(s.x,s.y,{format:xi,type:nn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,w,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,w,f,_,null)}function b(E,v,w,N){let P=null;const L=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=w.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const I=P.uuid,F=v.uuid;let T=c[I];T===void 0&&(T={},c[I]=T);let A=T[F];A===void 0&&(A=P.clone(),T[F]=A,v.addEventListener("dispose",R)),P=A}if(P.visible=v.visible,P.wireframe=v.wireframe,N===Ms?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:u[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=i.properties.get(P);I.light=w}return P}function y(E,v,w,N,P,L){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ms)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const T=e.update(E),A=E.material;if(Array.isArray(A)){const G=T.groups;for(let O=0,H=G.length;O<H;O++){const k=G[O],K=A[k.materialIndex];if(K&&K.visible){const te=b(E,K,N,L);E.onBeforeShadow(i,E,v,w,T,te,k),i.renderBufferDirect(w,null,T,te,E,k),E.onAfterShadow(i,E,v,w,T,te,k)}}}else if(A.visible){const G=b(E,A,N,L);E.onBeforeShadow(i,E,v,w,T,G,null),i.renderBufferDirect(w,null,T,G,E,null),E.onAfterShadow(i,E,v,w,T,G,null)}}const F=E.children;for(let T=0,A=F.length;T<A;T++)y(F[T],v,w,N,P,L)}function R(E){E.target.removeEventListener("dispose",R);for(const w in c){const N=c[w],P=E.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function $g(i,e){function t(){let D=!1;const j=new yt;let Y=null;const ue=new yt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!D&&(i.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){D=oe},setClear:function(oe,he,De,Xe,ae){ae===!0&&(oe*=Xe,he*=Xe,De*=Xe),j.set(oe,he,De,Xe),ue.equals(j)===!1&&(i.clearColor(oe,he,De,Xe),ue.copy(j))},reset:function(){D=!1,Y=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,Y=null,ue=null,oe=null;return{setReversed:function(he){if(j!==he){const De=e.get("EXT_clip_control");he?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),j=he;const Xe=oe;oe=null,this.setClear(Xe)}},getReversed:function(){return j},setTest:function(he){he?Me(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(he){Y!==he&&!D&&(i.depthMask(he),Y=he)},setFunc:function(he){if(j&&(he=Yd[he]),ue!==he){switch(he){case jr:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=he}},setLocked:function(he){D=he},setClear:function(he){oe!==he&&(oe=he,j&&(he=1-he),i.clearDepth(he))},reset:function(){D=!1,Y=null,ue=null,oe=null,j=!1}}}function s(){let D=!1,j=null,Y=null,ue=null,oe=null,he=null,De=null,Xe=null,ae=null;return{setTest:function(Ne){D||(Ne?Me(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Ne){j!==Ne&&!D&&(i.stencilMask(Ne),j=Ne)},setFunc:function(Ne,We,ve){(Y!==Ne||ue!==We||oe!==ve)&&(i.stencilFunc(Ne,We,ve),Y=Ne,ue=We,oe=ve)},setOp:function(Ne,We,ve){(he!==Ne||De!==We||Xe!==ve)&&(i.stencilOp(Ne,We,ve),he=Ne,De=We,Xe=ve)},setLocked:function(Ne){D=Ne},setClear:function(Ne){ae!==Ne&&(i.clearStencil(Ne),ae=Ne)},reset:function(){D=!1,j=null,Y=null,ue=null,oe=null,he=null,De=null,Xe=null,ae=null}}}const a=new t,r=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,x=null,b=null,y=null,R=null,E=null,v=null,w=new Le(0,0,0),N=0,P=!1,L=null,I=null,F=null,T=null,A=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=H>=2);let K=null,te={};const be=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Q=new yt().fromArray(be),ye=new yt().fromArray(Ge);function Re(D,j,Y,ue){const oe=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Y;De++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(j+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return he}const Ue={};Ue[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(Rs),en(!1),_t(Fl),Me(i.CULL_FACE),Ot(vi);function Me(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ve(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function bt(D,j){return d[D]!==j?(i.bindFramebuffer(D,j),d[D]=j,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Oe(D,j){let Y=g,ue=!1;if(D){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));const oe=D.textures;if(Y.length!==oe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let he=0,De=oe.length;he<De;he++)Y[he]=i.COLOR_ATTACHMENT0+he;Y.length=oe.length,ue=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Y)}function at(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const ct={[ki]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};ct[xd]=i.MIN,ct[yd]=i.MAX;const Ze={[Md]:i.ZERO,[Sd]:i.ONE,[bd]:i.SRC_COLOR,[eh]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[th]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Ld]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(D,j,Y,ue,oe,he,De,Xe,ae,Ne){if(D===vi){m===!0&&(Ve(i.BLEND),m=!1);return}if(m===!1&&(Me(i.BLEND),m=!0),D!==gd){if(D!==p||Ne!==P){if((x!==ki||R!==ki)&&(i.blendEquation(i.FUNC_ADD),x=ki,R=ki),Ne)switch(D){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",D);break}b=null,y=null,E=null,v=null,w.set(0,0,0),N=0,p=D,P=Ne}return}oe=oe||j,he=he||Y,De=De||ue,(j!==x||oe!==R)&&(i.blendEquationSeparate(ct[j],ct[oe]),x=j,R=oe),(Y!==b||ue!==y||he!==E||De!==v)&&(i.blendFuncSeparate(Ze[Y],Ze[ue],Ze[he],Ze[De]),b=Y,y=ue,E=he,v=De),(Xe.equals(w)===!1||ae!==N)&&(i.blendColor(Xe.r,Xe.g,Xe.b,ae),w.copy(Xe),N=ae),p=D,P=!1}function Rt(D,j){D.side===Tt?Ve(i.CULL_FACE):Me(i.CULL_FACE);let Y=D.side===Ht;j&&(Y=!Y),en(Y),D.blending===Wi&&D.transparent===!1?Ot(vi):Ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function en(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function _t(D){D!==pd?(Me(i.CULL_FACE),D!==I&&(D===Fl?i.cullFace(i.BACK):D===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),I=D}function bn(D){D!==F&&(O&&i.lineWidth(D),F=D)}function Dt(D,j,Y){D?(Me(i.POLYGON_OFFSET_FILL),(T!==j||A!==Y)&&(T=j,A=Y,r.getReversed()&&(j=-j,Y=-Y),i.polygonOffset(j,Y))):Ve(i.POLYGON_OFFSET_FILL)}function dn(D){D?Me(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function un(D){D===void 0&&(D=i.TEXTURE0+G-1),K!==D&&(i.activeTexture(D),K=D)}function fn(D,j,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+G-1:Y=K);let ue=te[Y];ue===void 0&&(ue={type:void 0,texture:void 0},te[Y]=ue),(ue.type!==D||ue.texture!==j)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(D,j||Ue[D]),ue.type=D,ue.texture=j)}function z(){const D=te[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pn(){try{i.compressedTexImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function vt(){try{i.texSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function ge(){try{i.texSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ze(){try{i.texStorage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function C(){try{i.texStorage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function M(){try{i.texImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function W(){try{i.texImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function se(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function ee(D,j){u[D]!==j&&(i.pixelStorei(D,j),u[D]=j)}function ce(D){Q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function pe(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function Z(D,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ue=Y.get(D);ue===void 0&&(ue=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,ue,ue),Y.set(D,ue))}function J(D,j,Y){const oe=c.get(j).get(D);l[oe]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,Y),l[oe]=Y)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,te={},d={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,x=null,b=null,y=null,R=null,E=null,v=null,w=new Le(0,0,0),N=0,P=!1,L=null,I=null,F=null,T=null,A=null,Q.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Me,disable:Ve,bindFramebuffer:bt,drawBuffers:Oe,useProgram:at,setBlending:Ot,setMaterial:Rt,setFlipSided:en,setCullFace:_t,setLineWidth:bn,setPolygonOffset:Dt,setScissorTest:dn,activeTexture:un,bindTexture:fn,unbindTexture:z,compressedTexImage2D:pn,compressedTexImage3D:gt,texImage2D:M,texImage3D:W,pixelStorei:ee,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:ze,texStorage3D:C,texSubImage2D:vt,texSubImage3D:ge,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Fe,scissor:ce,viewport:pe,reset:de}}function qg(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(C=>g.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,M){return m?new OffscreenCanvas(C,M):qa("canvas")}function x(C,M,W){let se=1;const ee=ze(C);if((ee.width>W||ee.height>W)&&(se=W/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(se*ee.width),pe=Math.floor(se*ee.height);d===void 0&&(d=p(ce,pe));const Z=M?p(ce,pe):d;return Z.width=ce,Z.height=pe,Z.getContext("2d").drawImage(C,0,0,ce,pe),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+pe+")."),Z}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function b(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,M,W,se,ee,ce=!1){if(C!==null){if(i[C]!==void 0)return i[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(W===i.FLOAT&&(Z=i.R32F),W===i.HALF_FLOAT&&(Z=i.R16F),W===i.UNSIGNED_BYTE&&(Z=i.R8),W===i.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),W===i.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.R8UI),W===i.UNSIGNED_SHORT&&(Z=i.R16UI),W===i.UNSIGNED_INT&&(Z=i.R32UI),W===i.BYTE&&(Z=i.R8I),W===i.SHORT&&(Z=i.R16I),W===i.INT&&(Z=i.R32I)),M===i.RG&&(W===i.FLOAT&&(Z=i.RG32F),W===i.HALF_FLOAT&&(Z=i.RG16F),W===i.UNSIGNED_BYTE&&(Z=i.RG8),W===i.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),W===i.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RG8UI),W===i.UNSIGNED_SHORT&&(Z=i.RG16UI),W===i.UNSIGNED_INT&&(Z=i.RG32UI),W===i.BYTE&&(Z=i.RG8I),W===i.SHORT&&(Z=i.RG16I),W===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),W===i.UNSIGNED_INT&&(Z=i.RGB32UI),W===i.BYTE&&(Z=i.RGB8I),W===i.SHORT&&(Z=i.RGB16I),W===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),W===i.UNSIGNED_INT&&(Z=i.RGBA32UI),W===i.BYTE&&(Z=i.RGBA8I),W===i.SHORT&&(Z=i.RGBA16I),W===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),W===i.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){const J=ce?$a:je.getTransfer(ee);W===i.FLOAT&&(Z=i.RGBA32F),W===i.HALF_FLOAT&&(Z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Z=J===st?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),W===i.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(C,M){let W;return C?M===null||M===Pn||M===Yi?W=i.DEPTH24_STENCIL8:M===Rn?W=i.DEPTH32F_STENCIL8:M===Ps&&(W=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pn||M===Yi?W=i.DEPTH_COMPONENT24:M===Rn?W=i.DEPTH_COMPONENT32F:M===Ps&&(W=i.DEPTH_COMPONENT16),W}function w(C,M){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function N(C){const M=new WeakRef(C);n.get(C).__ref=M,g.add(M),_.register(C,M,M)}function P(C){const M=n.get(C).__ref;M!==void 0&&(g.delete(M),_.unregister(M))}function L(C){F(C.target)}function I(C){T(C.target)}function F(C){C.removeEventListener("dispose",L),P(C),G(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function T(C){C.removeEventListener("dispose",I),P(C),H(C)}function A(){for(const C of g){const M=C.deref();M!==void 0&&(M.isRenderTarget===!0?T(M):F(M))}g.clear(),u.clear()}function G(C){const M=n.get(C);if(M.__webglInit===void 0)return;const W=C.source,se=f.get(W);if(se){const ee=se[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(C),Object.keys(se).length===0&&f.delete(W)}n.remove(C)}function O(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const W=C.source,se=f.get(W);delete se[M.__cacheKey],r.memory.textures--}function H(C){const M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();const W=C.depthTexture;if(W&&W.renderTarget===C&&F(W),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ce=0;ce<M.__webglFramebuffer[ee].length;ce++)i.deleteFramebuffer(M.__webglFramebuffer[ee][ce]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=C.textures;for(let ee=0,ce=se.length;ee<ce;ee++){const pe=n.get(se[ee]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),r.memory.textures--),n.remove(se[ee])}n.remove(C)}let k=0;function K(){k=0}function te(){return k}function be(C){k=C}function Ge(){const C=k;return C>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function Q(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ye(C,M){const W=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const se=C.image;if(se===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(W,C,M);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Re(C,M){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Rt(W,C,M);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Ue(C,M){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Rt(W,C,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function Me(C,M){const W=n.get(C);if(C.version>0&&W.__version!==C.version){en(W,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const Ve={[Ha]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},bt={[kt]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Oe={[kd]:i.NEVER,[fh]:i.ALWAYS,[Gd]:i.LESS,[dh]:i.LEQUAL,[Hd]:i.EQUAL,[uh]:i.GEQUAL,[Vd]:i.GREATER,[Wd]:i.NOTEQUAL};function at(C,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===vr||M.magFilter===Zs||M.magFilter===ti||M.minFilter===tn||M.minFilter===vr||M.minFilter===Zs||M.minFilter===ti)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ve[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ve[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ve[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,bt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==Zs&&M.minFilter!==ti||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",L),N(M));const se=M.source;let ee=f.get(se);ee===void 0&&(ee={},f.set(se,ee));const ce=Q(M);if(ce!==C.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ee[ce].usedTimes++;const pe=ee[C.__cacheKey];pe!==void 0&&(ee[C.__cacheKey].usedTimes--,pe.usedTimes===0&&O(M)),C.__cacheKey=ce,C.__webglTexture=ee[ce].texture}return W}function Ze(C,M,W){return Math.floor(Math.floor(C/W)/M)}function Ot(C,M,W,se){const ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,se,M.data);else{ce.sort((D,j)=>D.start-j.start);let pe=0;for(let D=1;D<ce.length;D++){const j=ce[pe],Y=ce[D],ue=j.start+j.count,oe=Ze(Y.start,M.width,4),he=Ze(j.start,M.width,4);Y.start<=ue+1&&oe===he&&Ze(Y.start+Y.count-1,M.width,4)===oe?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++pe,ce[pe]=Y)}ce.length=pe+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let D=0,j=ce.length;D<j;D++){const Y=ce[D],ue=Math.floor(Y.start/4),oe=Math.ceil(Y.count/4),he=ue%M.width,De=Math.floor(ue/M.width),Xe=oe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,he,De,Xe,ae,W,se,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function Rt(C,M,W){let se=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=i.TEXTURE_3D);const ee=ct(C,M),ce=M.source;t.bindTexture(se,C.__webglTexture,i.TEXTURE0+W);const pe=n.get(ce);if(ce.version!==pe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ae=je.getPrimaries(je.workingColorSpace),Ne=M.colorSpace===ei?null:je.getPrimaries(M.colorSpace),We=M.colorSpace===ei||ae===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let J=x(M.image,!1,s.maxTextureSize);J=Fe(M,J);const de=a.convert(M.format,M.colorSpace),D=a.convert(M.type);let j=E(M.internalFormat,de,D,M.normalized,M.colorSpace,M.isVideoTexture);at(se,M);let Y;const ue=M.mipmaps,oe=M.isVideoTexture!==!0,he=pe.__version===void 0||ee===!0,De=ce.dataReady,Xe=w(M,J);if(M.isDepthTexture)j=v(M.format===ni,M.type),he&&(oe?t.texStorage2D(i.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,j,J.width,J.height,0,de,D,null));else if(M.isDataTexture)if(ue.length>0){oe&&he&&t.texStorage2D(i.TEXTURE_2D,Xe,j,ue[0].width,ue[0].height);for(let ae=0,Ne=ue.length;ae<Ne;ae++)Y=ue[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,de,D,Y.data):t.texImage2D(i.TEXTURE_2D,ae,j,Y.width,Y.height,0,de,D,Y.data);M.generateMipmaps=!1}else oe?(he&&t.texStorage2D(i.TEXTURE_2D,Xe,j,J.width,J.height),De&&Ot(M,J,de,D)):t.texImage2D(i.TEXTURE_2D,0,j,J.width,J.height,0,de,D,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,j,ue[0].width,ue[0].height,J.depth);for(let ae=0,Ne=ue.length;ae<Ne;ae++)if(Y=ue[ae],M.format!==Cn)if(de!==null)if(oe){if(De)if(M.layerUpdates.size>0){const We=Sc(Y.width,Y.height,M.format,M.type);for(const ve of M.layerUpdates){const rt=Y.data.subarray(ve*We/Y.data.BYTES_PER_ELEMENT,(ve+1)*We/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ve,Y.width,Y.height,1,de,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,J.depth,de,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,J.depth,de,D,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,j,Y.width,Y.height,J.depth,0,de,D,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(i.TEXTURE_2D,Xe,j,ue[0].width,ue[0].height);for(let ae=0,Ne=ue.length;ae<Ne;ae++)Y=ue[ae],M.format!==Cn?de!==null?oe?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,de,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,j,Y.width,Y.height,0,Y.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,de,D,Y.data):t.texImage2D(i.TEXTURE_2D,ae,j,Y.width,Y.height,0,de,D,Y.data)}else if(M.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,j,J.width,J.height,J.depth),De)if(M.layerUpdates.size>0){const ae=Sc(J.width,J.height,M.format,M.type);for(const Ne of M.layerUpdates){const We=J.data.subarray(Ne*ae/J.data.BYTES_PER_ELEMENT,(Ne+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,J.width,J.height,1,de,D,We)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,de,D,J.data);else if(M.isData3DTexture)oe?(he&&t.texStorage3D(i.TEXTURE_3D,Xe,j,J.width,J.height,J.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)):t.texImage3D(i.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,de,D,J.data);else if(M.isFramebufferTexture){if(he)if(oe)t.texStorage2D(i.TEXTURE_2D,Xe,j,J.width,J.height);else{let ae=J.width,Ne=J.height;for(let We=0;We<Xe;We++)t.texImage2D(i.TEXTURE_2D,We,j,ae,Ne,0,de,D,null),ae>>=1,Ne>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),u.add(M),ae.onpaint=Ne=>{const We=Ne.changedElements;for(const ve of u)We.includes(ve.image)&&(ve.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const We=i.RGBA,ve=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,ve,rt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&he){const ae=ze(ue[0]);t.texStorage2D(i.TEXTURE_2D,Xe,j,ae.width,ae.height)}for(let ae=0,Ne=ue.length;ae<Ne;ae++)Y=ue[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,de,D,Y):t.texImage2D(i.TEXTURE_2D,ae,j,de,D,Y);M.generateMipmaps=!1}else if(oe){if(he){const ae=ze(J);t.texStorage2D(i.TEXTURE_2D,Xe,j,ae.width,ae.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,D,J)}else t.texImage2D(i.TEXTURE_2D,0,j,de,D,J);b(M)&&M.mipmapsAutoUpdate===!0&&y(se),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function en(C,M,W){if(M.image.length!==6)return;const se=ct(C,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);const ce=n.get(ee);if(ee.version!==ce.__version||se===!0){t.activeTexture(i.TEXTURE0+W);const pe=je.getPrimaries(je.workingColorSpace),Z=M.colorSpace===ei?null:je.getPrimaries(M.colorSpace),J=M.colorSpace===ei||pe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,j=[];for(let ve=0;ve<6;ve++)!de&&!D?j[ve]=x(M.image[ve],!0,s.maxCubemapSize):j[ve]=D?M.image[ve].image:M.image[ve],j[ve]=Fe(M,j[ve]);const Y=j[0],ue=a.convert(M.format,M.colorSpace),oe=a.convert(M.type);let he=E(M.internalFormat,ue,oe,M.normalized,M.colorSpace);const De=M.isVideoTexture!==!0,Xe=ce.__version===void 0||se===!0,ae=ee.dataReady;let Ne=w(M,Y);at(i.TEXTURE_CUBE_MAP,M);let We;if(M.isDepthTexture){if(he=v(M.format===ni,M.type),Xe)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,Y.width,Y.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,Y.width,Y.height,0,ue,oe,null)}else if(de){De&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,he,Y.width,Y.height);for(let ve=0;ve<6;ve++){We=j[ve].mipmaps;for(let rt=0;rt<We.length;rt++){const Nt=We[rt];M.format!==Cn?ue!==null?De?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt,0,0,Nt.width,Nt.height,ue,Nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt,he,Nt.width,Nt.height,0,Nt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt,0,0,Nt.width,Nt.height,ue,oe,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt,he,Nt.width,Nt.height,0,ue,oe,Nt.data)}}}else{if(We=M.mipmaps,De&&Xe){We.length>0&&Ne++;const ve=ze(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,he,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(D){De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,j[ve].width,j[ve].height,ue,oe,j[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,j[ve].width,j[ve].height,0,ue,oe,j[ve].data);for(let rt=0;rt<We.length;rt++){const Xn=We[rt].image[ve].image;De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt+1,0,0,Xn.width,Xn.height,ue,oe,Xn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt+1,he,Xn.width,Xn.height,0,ue,oe,Xn.data)}}else{De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ue,oe,j[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,ue,oe,j[ve]);for(let rt=0;rt<We.length;rt++){const Nt=We[rt];De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt+1,0,0,ue,oe,Nt.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,rt+1,he,ue,oe,Nt.image[ve])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ce.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _t(C,M,W,se,ee,ce){const pe=a.convert(W.format,W.colorSpace),Z=a.convert(W.type),J=E(W.internalFormat,pe,Z,W.normalized,W.colorSpace),de=n.get(M),D=n.get(W);if(D.__renderTarget=M,!de.__hasExternalTextures){const j=Math.max(1,M.width>>ce),Y=Math.max(1,M.height>>ce);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,J,j,Y,M.depth,0,pe,Z,null):t.texImage2D(ee,ce,J,j,Y,0,pe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ge(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,D.__webglTexture,0,vt(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,D.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function bn(C,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const se=M.depthTexture,ee=se&&se.isDepthTexture?se.type:null,ce=v(M.stencilBuffer,ee),pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(M),ce,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(M),ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{const se=M.textures;for(let ee=0;ee<se.length;ee++){const ce=se[ee],pe=a.convert(ce.format,ce.colorSpace),Z=a.convert(ce.type),J=E(ce.internalFormat,pe,Z,ce.normalized,ce.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(M),J,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(M),J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(C,M,W){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(M.depthTexture);ee.__renderTarget=M;const ce=se?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),se?Me(M.depthTexture,0):ye(M.depthTexture,0);const pe=ee.__webglTexture,Z=vt(M),J=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,de=M.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ai)ge(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,pe,0);else if(M.depthTexture.format===ni)ge(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dn(C){const M=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const se=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=se}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let se=0;se<6;se++)Dt(M.__webglFramebuffer[se],C,se);else C.texture.mipmaps.length>0?Dt(M.__webglFramebuffer[0],C,0):Dt(M.__webglFramebuffer,C,0);else if(W){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=i.createRenderbuffer(),bn(M.__webglDepthbuffer[se],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),bn(M.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function un(C,M,W){const se=n.get(C);M!==void 0&&_t(se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&dn(C)}function fn(C){const M=C.texture,W=n.get(C),se=n.get(M);C.addEventListener("dispose",I),N(C);const ee=C.textures,ce=C.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=M.version,r.memory.textures++),ce){W.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){W.__webglFramebuffer[Z]=[];for(let J=0;J<M.mipmaps.length;J++)W.__webglFramebuffer[Z][J]=i.createFramebuffer()}else W.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)W.__webglFramebuffer[Z]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Z=0,J=ee.length;Z<J;Z++){const de=n.get(ee[Z]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&ge(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const J=ee[Z];W.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Z]);const de=a.convert(J.format,J.colorSpace),D=a.convert(J.type),j=E(J.internalFormat,de,D,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),Y=vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,W.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),bn(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),at(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)_t(W.__webglFramebuffer[Z][J],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else _t(W.__webglFramebuffer[Z],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);b(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Z=0,J=ee.length;Z<J;Z++){const de=ee[Z],D=n.get(de);let j=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,D.__webglTexture),at(j,de),_t(W.__webglFramebuffer,C,de,i.COLOR_ATTACHMENT0+Z,j,0),b(de)&&y(j)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),at(Z,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)_t(W.__webglFramebuffer[J],C,M,i.COLOR_ATTACHMENT0,Z,J);else _t(W.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,Z,0);b(M)?y(Z):M.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&dn(C)}function z(C){const M=C.textures;for(let W=0,se=M.length;W<se;W++){const ee=M[W];if(b(ee)&&ee.mipmapsAutoUpdate===!0){const ce=R(C),pe=n.get(ee).__webglTexture;t.bindTexture(ce,pe),y(ce),t.unbindTexture()}}}const pn=[];function gt(C){if(C.samples>0){if(ge(C)===!1){const M=C.textures,W=C.width,se=C.height;let ee=i.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),Z=M.length>1;if(Z)for(let de=0;de<M.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const D=n.get(M[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,W,se,0,0,W,se,ee,i.NEAREST),l===!0&&(pn.length=0,pn.push(i.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&pn.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let de=0;de<M.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const D=n.get(M[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function ge(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(C){const M=r.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Fe(C,M){const W=C.colorSpace,se=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Xa&&W!==ei&&(je.getTransfer(W)===st?(se!==Cn||ee!==hn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",W)),M}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=ye,this.setTexture2DArray=Re,this.setTexture3D=Ue,this.setTextureCube=Me,this.rebindTextures=un,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ge,this.dispose=A}function Yg(i,e){function t(n,s=ei){let a;const r=je.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return i.BYTE;if(n===ah)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===Cn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===al)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Ia||n===Da||n===Na||n===Ua)if(r===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Va||n===vo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===uo||n===fo)return r===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return a.COMPRESSED_R11_EAC;if(n===go)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Va)return a.COMPRESSED_RG11_EAC;if(n===vo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===_o)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===No)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Io)return r===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Wa||n===Oo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qg extends Mi{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Jg,p={},x=t.getContextAttributes();let b=null,y=null;const R=[],E=[],v=new le;let w=null,N=null;const P=new qt;P.viewport=new yt;const L=new qt;L.viewport=new yt;const I=[P,L],F=new of;let T=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ye=R[Q];return ye===void 0&&(ye=new Tr,R[Q]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Q){let ye=R[Q];return ye===void 0&&(ye=new Tr,R[Q]=ye),ye.getGripSpace()},this.getHand=function(Q){let ye=R[Q];return ye===void 0&&(ye=new Tr,R[Q]=ye),ye.getHandSpace()};function G(Q){const ye=E.indexOf(Q.inputSource);if(ye===-1)return;const Re=R[ye];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,c||r),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<R.length;Q++){const ye=E[Q];ye!==null&&(E[Q]=null,R[Q].disconnect(ye))}T=null,A=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),N!==null){const Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ue=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=x.stencil?ni:ai,Ue=x.stencil?Yi:Pn);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new sn(d.textureWidth,d.textureHeight,{format:Cn,type:hn,depthTexture:new Zi(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new sn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let ye=0;ye<Q.removed.length;ye++){const Re=Q.removed[ye],Ue=E.indexOf(Re);Ue>=0&&(E[Ue]=null,R[Ue].disconnect(Re))}for(let ye=0;ye<Q.added.length;ye++){const Re=Q.added[ye];let Ue=E.indexOf(Re);if(Ue===-1){for(let Ve=0;Ve<R.length;Ve++)if(Ve>=E.length){E.push(Re),Ue=Ve;break}else if(E[Ve]===null){E[Ve]=Re,Ue=Ve;break}if(Ue===-1)break}const Me=R[Ue];Me&&Me.connect(Re)}}function k(Q,ye){ye===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ye.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ye=Q.near,Re=Q.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),F.near=L.near=P.near=ye,F.far=L.far=P.far=Re,(T!==F.near||A!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),T=F.near,A=F.far),F.layers.mask=Q.layers.mask|6,P.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Ue=Q.parent,Me=F.cameras;k(F,Ue);for(let Ve=0;Ve<Me.length;Ve++)k(Me[Ve],Ue);F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),K(Q,F,Ue)};function K(Q,ye,Re){Re===null?Q.matrix.copy(ye.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ye.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ye.projectionMatrix),Q.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let te=null;function be(Q,ye){if(h=ye.getViewerPose(c||r),g=ye,h!==null){const Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;Re.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Oe=0;Oe<Re.length;Oe++){const at=Re[Oe];let ct=null;if(f!==null)ct=f.getViewport(at);else{const Ot=u.getViewSubImage(d,at);ct=Ot.viewport,Oe===0&&(e.setRenderTargetTextures(y,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(y))}let Ze=I[Oe];Ze===void 0&&(Ze=new qt,Ze.layers.enable(Oe),Ze.viewport=new yt,I[Oe]=Ze),Ze.matrix.fromArray(at.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(at.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ct.x,ct.y,ct.width,ct.height),Oe===0&&(F.matrix.copy(Ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Ze)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Oe=u.getDepthInformation(Re[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<Re.length;Oe++){const at=Re[Oe].camera;if(at){let ct=p[at];ct||(ct=new Ah,p[at]=ct);const Ze=u.getCameraImage(at);ct.sourceTexture=Ze}}}}for(let Re=0;Re<R.length;Re++){const Ue=E[Re],Me=R[Re];Ue!==null&&Me!==void 0&&Me.update(Ue,ye,c||r)}te&&te(Q,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),g=null}const Ge=new kh;Ge.setAnimationLoop(be),this.setAnimationLoop=function(Q){te=Q},this.dispose=function(){}}}const jg=new ut,Zh=new ke;Zh.set(-1,0,0,0,1,0,0,0,1);function ev(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,y=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,e,t,n){let s={},a={};function r(x,b){const y=b.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,b){let y=s[x.id];y===void 0&&(g(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(x,R);const E=e.render.frame;a[x.id]!==E&&(c(x),a[x.id]=E)}function l(x){const b=i.createBuffer(),y=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,R),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(x){const b=s[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,v=y.length;E<v;E++){const w=y[E];if(Array.isArray(w))for(let N=0,P=w.length;N<P;N++)h(w[N],E,N,R);else h(w,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,b,y,R){if(d(x,b,y,R)===!0){const E=x.__offset,v=x.value;if(Array.isArray(v)){let w=0;for(let N=0;N<v.length;N++){const P=v[N],L=_(P,!0);u(P,x.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function u(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function d(x,b,y,R){const E=x.value,v=b+"_"+y;if(Array.isArray(E)){R[v]===void 0&&(R[v]=[]);const w=R[v];let N=!1;for(let P=0;P<E.length;P++)f(E[P],w,P)===!0&&(N=!0);return N}return f(E,R,v)}function f(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{const R=b[y];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(x){const b=x.uniforms;let y=0;const R=16;for(let v=0,w=b.length;v<w;v++){const N=Array.isArray(b[v])?b[v]:[b[v]];for(let P=0,L=N.length;P<L;P++){const I=N[P],F=Array.isArray(I.value)?I.value:[I.value],T=Array.isArray(b[v])||Array.isArray(I.value);let A=y;for(let O=0,H=F.length;O<H;O++){const k=F[O],K=_(k,T),te=y%R,be=te%K.boundary,Ge=te+be;y+=be,Ge!==0&&R-Ge<K.storage&&(y+=R-Ge),O===0&&(A=y),y+=K.storage}const G=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new G((y-A)/Float32Array.BYTES_PER_ELEMENT),I.__offset=A}}const E=y%R;return E>0&&(y+=R-E),x.__size=y,x.__cache={},this}function _(x,b){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){const b=x.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);s={},a={}}return{bind:r,update:o,dispose:p}}const nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function iv(){return En===null&&(En=new _u(nv,16,16,xi,nn),En.name="DFG_LUT",En.minFilter=tn,En.magFilter=tn,En.wrapS=zn,En.wrapT=zn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class sv{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=f,m=new Set([rl,al,sl]),p=new Set([hn,Pn,Ps,Yi,nl,il]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let R=null,E=null;const v=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,I=null,F=null,T=null,A=null;this._outputColorSpace=zt;let G=0,O=0,H=null,k=-1,K=null;const te=new yt,be=new yt;let Ge=null;const Q=new Le(0);let ye=0,Re=t.width,Ue=t.height,Me=1,Ve=null,bt=null;const Oe=new yt(0,0,Re,Ue),at=new yt(0,0,Re,Ue);let ct=!1;const Ze=new Is,Ot=new hl;let Rt=!1,en=!1;const _t=new ut,bn=new U,Dt=new yt,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function fn(){return H===null?Me:1}let z=n;function pn(S,B){return t.getContext(S,B)}let gt,vt,ge,Ct,Fe,ze,C,M,W,se,ee,ce,pe,Z,J,de,D,j,Y,ue,oe,he,De;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const B="webgl2";if(z=pn(B,S),z===null)throw pn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(S){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),nt("WebGLRenderer: "+S.message),S}function Xe(){gt=new o0(z),gt.init(),oe=new Yg(z,gt),vt=new Zm(z,gt,e,oe),ge=new $g(z,gt),vt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),F=z.createFramebuffer(),T=z.createFramebuffer(),A=z.createFramebuffer(),Ct=new h0(z),Fe=new Ig,ze=new qg(z,gt,ge,Fe,vt,oe,Ct),C=new r0(P),M=new uf(z),he=new Ym(z,M),W=new l0(z,M,Ct,he),se=new u0(z,W,M,he,Ct),j=new d0(z,vt,ze),J=new Jm(Fe),ee=new Lg(P,C,gt,vt,he,J),ce=new ev(P,Fe),pe=new Ng,Z=new kg(gt),D=new qm(P,C,ge,se,g,l),de=new Xg(P,se,vt),De=new tv(z,Ct,vt,ge),Y=new Km(z,gt,Ct),ue=new c0(z,gt,Ct),Ct.programs=ee.programs,P.capabilities=vt,P.extensions=gt,P.properties=Fe,P.renderLists=pe,P.shadowMap=de,P.state=ge,P.info=Ct}_!==hn&&(N=new p0(_,t.width,t.height,o,s,a));const ae=new Qg(P,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(S){S!==void 0&&(Me=S,this.setSize(Re,Ue,!1))},this.getSize=function(S){return S.set(Re,Ue)},this.setSize=function(S,B,$=!0){if(ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=S,Ue=B,t.width=Math.floor(S*Me),t.height=Math.floor(B*Me),$===!0&&(t.style.width=S+"px",t.style.height=B+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Re*Me,Ue*Me).floor()},this.setDrawingBufferSize=function(S,B,$){Re=S,Ue=B,Me=$,t.width=Math.floor(S*$),t.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(_===hn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,B,$,V){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,B,$,V),ge.viewport(te.copy(Oe).multiplyScalar(fn()).round())},this.getScissor=function(S){return S.copy(at)},this.setScissor=function(S,B,$,V){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,B,$,V),ge.scissor(be.copy(at).multiplyScalar(fn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){ge.setScissorTest(ct=S)},this.setOpaqueSort=function(S){Ve=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,$=!0){let V=0;if(S){let X=!1;if(H!==null){const me=H.texture.format;X=m.has(me)}if(X){const me=H.texture.type,Ee=p.has(me),fe=D.getClearColor(),Se=D.getClearAlpha(),Ie=fe.r,He=fe.g,Je=fe.b;Ee?(x[0]=Ie,x[1]=He,x[2]=Je,x[3]=Se,z.clearBufferuiv(z.COLOR,0,x)):(b[0]=Ie,b[1]=He,b[2]=Je,b[3]=Se,z.clearBufferiv(z.COLOR,0,b))}else V|=z.COLOR_BUFFER_BIT}B&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),D.dispose(),pe.dispose(),Z.dispose(),ze.dispose(),Fe.dispose(),C.dispose(),se.dispose(),W.dispose(),he.dispose(),De.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Tl),ae.removeEventListener("sessionend",Al),ci.stop()};function Ne(S){S.preventDefault(),Ya("WebGLRenderer: Context Lost."),L=!0}function We(){Ya("WebGLRenderer: Context Restored."),L=!1;const S=Ct.autoReset,B=de.enabled,$=de.autoUpdate,V=de.needsUpdate,X=de.type;Xe(),Ct.autoReset=S,de.enabled=B,de.autoUpdate=$,de.needsUpdate=V,de.type=X}function ve(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){const B=S.target;B.removeEventListener("dispose",rt),Nt(B)}function Nt(S){Xn(S),Fe.remove(S)}function Xn(S){const B=Fe.get(S).programs;B!==void 0&&(B.forEach(function($){ee.releaseProgram($)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,V,X,me){B===null&&(B=dn);const Ee=X.isMesh&&X.matrixWorld.determinantAffine()<0,fe=dd(S,B,$,V,X);ge.setMaterial(V,Ee);let Se=$.index,Ie=1;if(V.wireframe===!0){if(Se=W.getWireframeAttribute($),Se===void 0)return;Ie=2}const He=$.drawRange,Je=$.attributes.position;let Ce=He.start*Ie,Qe=(He.start+He.count)*Ie;me!==null&&(Ce=Math.max(Ce,me.start*Ie),Qe=Math.min(Qe,(me.start+me.count)*Ie)),Se!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Se.count)):Je!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Je.count));const wt=Qe-Ce;if(wt<0||wt===1/0)return;he.setup(X,V,fe,$,Se);let ft,ht=Y;if(Se!==null&&(ft=M.get(Se),ht=ue,ht.setIndex(ft)),X.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*fn()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(X.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),ge.setLineWidth(Vt*fn()),X.isLineSegments?ht.setMode(z.LINES):X.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else X.isPoints?ht.setMode(z.POINTS):X.isSprite&&ht.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,Pe=X._multiDrawCounts,Kt=X._multiDrawCount,it=Se?M.get(Se).bytesPerElement:1,hi=Fe.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<Kt;Wt++)hi.setValue(z,"_gl_DrawID",Wt),ht.render(Vt[Wt]/it,Pe[Wt])}else if(X.isInstancedMesh)ht.renderInstances(Ce,wt,X.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,Vt);ht.renderInstances(Ce,wt,Pe)}else ht.render(Ce,wt)};function El(S,B,$,V){I!==null&&S.isNodeMaterial&&I.setObject(V,S),Rt===!0&&J.setState(S,$,!1),S.transparent===!0&&S.side===Tt&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,hs(S,B,V),S.side=si,S.needsUpdate=!0,hs(S,B,V),S.side=Tt):hs(S,B,V)}this.compile=function(S,B,$=null){$===null&&($=S),I!==null&&I.renderStart(S,B,$),E=Z.get($),E.init(B),w.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),S!==$&&S.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),en=this.localClippingEnabled,Rt=J.init(this.clippingPlanes,en),Rt===!0&&J.setGlobalState(this.clippingPlanes,B),I!==null&&de.render(E.state.shadowsArray,$,B);const V=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const fe=me[Ee];El(fe,$,B,X),V.add(fe)}else El(me,$,B,X),V.add(me)}),E=w.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(S,B,$=null){const V=this.compile(S,B,$);return new Promise(X=>{function me(){if(V.forEach(function(Ee){const Se=Fe.get(Ee).currentProgram;(Se===void 0||Se.isReady())&&V.delete(Ee)}),V.size===0){X(S);return}setTimeout(me,10)}gt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fr=null;function cd(S){fr&&fr(S)}function Tl(){ci.stop()}function Al(){ci.start()}const ci=new kh;ci.setAnimationLoop(cd),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){fr=S,ae.setAnimationLoop(S),S===null?ci.stop():ci.start()},ae.addEventListener("sessionstart",Tl),ae.addEventListener("sessionend",Al),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(S,B);const $=ae.enabled===!0&&ae.isPresenting===!0,V=N!==null&&(H===null||$)&&N.begin(P,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,B,H),E=Z.get(S,w.length),E.init(B),E.state.textureUnits=ze.getTextureUnits(),w.push(E),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ot.setFromArrayCamera(B):Ze.setFromProjectionMatrix(_t,Mn,B.reversedDepth),en=this.localClippingEnabled,Rt=J.init(this.clippingPlanes,en),R=pe.get(S,v.length),R.init(),v.push(R),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&pr(Ee,B,-1/0,P.sortObjects)}pr(S,B,0,P.sortObjects),R.finish(),I!==null&&I.updateLights(E.state.lightsArray),P.sortObjects===!0&&R.sort(Ve,bt),un=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,un&&D.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&J.beginShadows();const X=E.state.shadowsArray;if(de.render(X,S,B),Rt===!0&&J.endShadows(),(V&&N.hasRenderPass())===!1){const Ee=R.opaque,fe=R.transmissive;if(E.setupLights(),B.isArrayCamera){const Se=B.cameras;if(fe.length>0)for(let Ie=0,He=Se.length;Ie<He;Ie++){const Je=Se[Ie];Cl(Ee,fe,S,Je)}un&&D.render(S);for(let Ie=0,He=Se.length;Ie<He;Ie++){const Je=Se[Ie];Rl(R,S,Je,Je.viewport)}}else fe.length>0&&Cl(Ee,fe,S,B),un&&D.render(S),Rl(R,S,B)}H!==null&&O===0&&(ze.updateMultisampleRenderTarget(H),ze.updateRenderTargetMipmap(H)),V&&N.end(P),S.isScene===!0&&S.onAfterRender(P,S,B),he.resetDefaultState(),k=-1,K=null,w.pop(),w.length>0?(E=w[w.length-1],ze.setTextureUnits(E.state.textureUnits),Rt===!0&&J.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,I!==null&&I.renderEnd()};function pr(S,B,$,V){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){const Ee=B.isArrayCamera?Ot:Ze;if(!S.frustumCulled||S.intersectsFrustum(Ee)){V&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const fe=se.update(S),Se=S.material;Se.visible&&R.push(S,fe,Se,$,Dt.z,null,B)}}else if(S.isMesh||S.isLine||S.isPoints){const Ee=B.isArrayCamera?Ot:Ze;if(!S.frustumCulled||S.intersectsFrustum(Ee)){const fe=se.update(S),Se=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Dt.copy(fe.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(Se)){const Ie=fe.groups;for(let He=0,Je=Ie.length;He<Je;He++){const Ce=Ie[He],Qe=Se[Ce.materialIndex];Qe&&Qe.visible&&R.push(S,fe,Qe,$,Dt.z,Ce,B)}}else Se.visible&&R.push(S,fe,Se,$,Dt.z,null,B)}}}const me=S.children;for(let Ee=0,fe=me.length;Ee<fe;Ee++)pr(me[Ee],B,$,V)}function Rl(S,B,$,V){const{opaque:X,transmissive:me,transparent:Ee}=S;E.setupLightsView($),Rt===!0&&J.setGlobalState(P.clippingPlanes,$),V&&ge.viewport(te.copy(V)),X.length>0&&Ys(X,B,$),me.length>0&&Ys(me,B,$),Ee.length>0&&Ys(Ee,B,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Cl(S,B,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Ce=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new sn(1,1,{generateMipmaps:!0,type:Ce?nn:hn,minFilter:ti,samples:Math.max(4,vt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const me=E.state.transmissionRenderTarget[V.id],Ee=V.viewport||te;me.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),Se=P.getActiveCubeFace(),Ie=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(Q),ye=P.getClearAlpha(),ye<1&&P.setClearColor(16777215,.5),P.clear(),un&&D.render($);const He=P.toneMapping;P.toneMapping=kn;const Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Rt===!0&&J.setGlobalState(P.clippingPlanes,V),Ys(S,$,V),ze.updateMultisampleRenderTarget(me),ze.updateRenderTargetMipmap(me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,wt=B.length;Qe<wt;Qe++){const ft=B[Qe],{object:ht,geometry:Vt,material:Pe,group:Kt}=ft;if(Pe.side===Tt&&ht.layers.test(V.layers)){const it=Pe.side;Pe.side=Ht,Pe.needsUpdate=!0,Pl(ht,$,V,Vt,Pe,Kt),Pe.side=it,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(ze.updateMultisampleRenderTarget(me),ze.updateRenderTargetMipmap(me))}P.setRenderTarget(fe,Se,Ie),P.setClearColor(Q,ye),Je!==void 0&&(V.viewport=Je),P.toneMapping=He}function Ys(S,B,$){const V=B.isScene===!0?B.overrideMaterial:null;for(let X=0,me=S.length;X<me;X++){const Ee=S[X],{object:fe,geometry:Se,group:Ie}=Ee;let He=Ee.material;He.allowOverride===!0&&V!==null&&(He=V),fe.layers.test($.layers)&&Pl(fe,B,$,Se,He,Ie)}}function Pl(S,B,$,V,X,me){I!==null&&X.isNodeMaterial&&I.setObject(S,X),S.onBeforeRender(P,B,$,V,X,me),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(P,B,$,V,S,me),X.transparent===!0&&X.side===Tt&&X.forceSinglePass===!1?(X.side=Ht,X.needsUpdate=!0,P.renderBufferDirect($,B,V,X,S,me),X.side=si,X.needsUpdate=!0,P.renderBufferDirect($,B,V,X,S,me),X.side=Tt):P.renderBufferDirect($,B,V,X,S,me),S.onAfterRender(P,B,$,V,X,me)}function Ll(S){let B=0;for(const $ of S)$.texture!==null&&B++;return B}function hs(S,B,$){B.isScene!==!0&&(B=dn);const V=Fe.get(S),X=E.state.lights,me=E.state.shadowsArray,Ee=X.state.version,fe=ee.getParameters(S,X.state,me,B,$,E.state.lightProbeGridArray),Se=ee.getProgramCacheKey(fe);let Ie=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const He=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=C.get(S.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",rt),Ie=new Map,V.programs=Ie,V.programVariants=new Map);let Je=Ie.get(Se);if(Je!==void 0){if(V.currentProgram===Je&&V.lightsStateVersion===Ee)return Dl(S,fe),Je}else fe.uniforms=ee.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,$,fe),S.onBeforeCompile(fe,P),Je=ee.acquireProgram(fe,Se),Ie.set(Se,Je),V.uniforms=fe.uniforms;const Ce=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=J.uniform),Dl(S,fe),V.needsLights=fd(S),V.lightsStateVersion=Ee,V.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Ll(E.state.lightProbeGridArray),V.currentProgram=Je,V.uniformsList=null,Je}function hd(S,B,$,V,X){const me=Fe.get(S),Ee=me.currentProgram.id+","+V+","+X;let fe=me.programVariants.get(Ee);return fe===void 0?(fe=hs(S,B,$),me.programVariants.set(Ee,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=V,me.toneMapping=X),fe}function Il(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=Oa.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Dl(S,B){const $=Fe.get(S);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function dd(S,B,$,V,X){B.isScene!==!0&&(B=dn),ze.resetTextureUnits();const me=B.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,fe=H===null?P.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:je.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ie=C.get(V.envMap||Ee,Se),He=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let ft=kn;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ft=P.toneMapping);const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Vt=ht!==void 0?ht.length:0,Pe=Fe.get(V),Kt=E.state.lights;if(Rt===!0&&(en===!0||S!==K)){const xt=S===K&&V.id===k;J.setState(V,S,xt)}let it=!1,hi=!1;V.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Kt.state.version||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ie||V.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==J.numPlanes||Pe.numIntersection!==J.numIntersection)||Pe.vertexAlphas!==He||Pe.vertexTangents!==Je||Pe.morphTargets!==Ce||Pe.morphNormals!==Qe||Pe.morphColors!==wt||Pe.morphTargetsCount!==Vt||Pe.numLightProbeGrids!==Ll(E.state.lightProbeGridArray)?it=!0:(Pe.outputColorSpace!==fe||Pe.toneMapping!==ft)&&(hi=!0):(it=!0,Pe.__version=V.version);let Wt=Pe.currentProgram;(it===!0||hi===!0)&&(Wt=hi===!0?hd(V,B,X,fe,ft):hs(V,B,X),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Wt,Pe));let Ks=!1,$n=!1,di=!1;const et=Wt.getUniforms(),Bt=Pe.uniforms;if(ge.useProgram(Wt.program)&&(Ks=!0,$n=!0,di=!0),V.id!==k&&(k=V.id,$n=!0),Ks||K!==S){ge.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),et.setValue(z,"projectionMatrix",S.projectionMatrix),et.setValue(z,"viewMatrix",S.matrixWorldInverse);const Ut=et.map.cameraPosition;Ut!==void 0&&Ut.setValue(z,bn.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&et.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&et.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,$n=!0,di=!0)}if(Pe.needsLights&&(Kt.state.sunShadowMap.length>0&&et.setValue(z,"sunShadowMap",Kt.state.sunShadowMap,ze),Kt.state.directionalShadowMap.length>0&&et.setValue(z,"directionalShadowMap",Kt.state.directionalShadowMap,ze),Kt.state.spotShadowMap.length>0&&et.setValue(z,"spotShadowMap",Kt.state.spotShadowMap,ze),Kt.state.pointShadowMap.length>0&&et.setValue(z,"pointShadowMap",Kt.state.pointShadowMap,ze)),X.isSkinnedMesh){et.setOptional(z,X,"bindMatrix"),et.setOptional(z,X,"bindMatrixInverse");const xt=X.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),et.setValue(z,"boneTexture",xt.boneTexture,ze))}X.isBatchedMesh&&(et.setOptional(z,X,"batchingTexture"),et.setValue(z,"batchingTexture",X._matricesTexture,ze),et.setOptional(z,X,"batchingIdTexture"),et.setValue(z,"batchingIdTexture",X._indirectTexture,ze),et.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&et.setValue(z,"batchingColorTexture",X._colorsTexture,ze));const vn=$.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&j.update(X,$,Wt),($n||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,et.setValue(z,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=iv()),$n){if(et.setValue(z,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&ud(Bt,di),me&&V.fog===!0&&ce.refreshFogUniforms(Bt,me),ce.refreshMaterialUniforms(Bt,V,Me,Ue,E.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const xt=y;let Ut=0;for(const Dn of E.state.lightProbeGridArray)Dn.texture!==null&&(xt.textures[Ut]=Dn.texture,xt.min[Ut]=Dn.boundingBox.min,xt.max[Ut]=Dn.boundingBox.max,xt.resolution[Ut]=Dn.resolution,Ut++);for(const Dn in xt)xt[Dn].length=Ut;Bt.probesSH.value=xt.textures,Bt.probesMin.value=xt.min,Bt.probesMax.value=xt.max,Bt.probesResolution.value=xt.resolution}Oa.upload(z,Il(Pe),Bt,ze)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Oa.upload(z,Il(Pe),Bt,ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&et.setValue(z,"center",X.center),et.setValue(z,"modelViewMatrix",X.modelViewMatrix),et.setValue(z,"normalMatrix",X.normalMatrix),et.setValue(z,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const xt=V.uniformsGroups;for(let Ut=0,Dn=xt.length;Ut<Dn;Ut++){const Ul=xt[Ut];De.update(Ul,Wt),De.bind(Ul,Wt)}}return Wt}function ud(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function fd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,B,$){const V=Fe.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Fe.get(S.texture).__webglTexture=B,Fe.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const $=Fe.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,$=0){H=S,G=B,O=$;let V=null,X=!1,me=!1;if(S){const fe=Fe.get(S);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(z.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(S.viewport),be.copy(S.scissor),Ge=S.scissorTest,ge.viewport(te),ge.scissor(be),ge.setScissorTest(Ge),k=-1;return}else if(fe.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(fe.__hasExternalTextures)ze.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const He=S.depthTexture;if(fe.__boundDepthTexture!==He){if(He!==null&&Fe.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Ie=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?V=Ie[B][$]:V=Ie[B],X=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?V=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?V=Ie[$]:V=Ie,te.copy(S.viewport),be.copy(S.scissor),Ge=S.scissorTest}else te.copy(Oe).multiplyScalar(Me).floor(),be.copy(at).multiplyScalar(Me).floor(),Ge=ct;if($!==0&&(V=F),ge.bindFramebuffer(z.FRAMEBUFFER,V)&&ge.drawBuffers(S,V),ge.viewport(te),ge.scissor(be),ge.setScissorTest(Ge),X){const fe=Fe.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe.__webglTexture,$)}else if(me){const fe=B;for(let Se=0;Se<S.textures.length;Se++){const Ie=Fe.get(S.textures[Se]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Se,Ie.__webglTexture,$,fe)}}else if(S!==null&&$!==0){const fe=Fe.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fe.__webglTexture,$)}k=-1};function Nl(S){const B=Fe.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=vt.textureFormatReadable(S.format),B.__typeReadable=vt.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,$,V,X,me,Ee,fe=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se){ge.bindFramebuffer(z.FRAMEBUFFER,Se);try{const Ie=S.textures[fe],He=Ie.format,Je=Ie.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+fe);const Ce=Nl(Ie);if(Ce.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-V&&$>=0&&$<=S.height-X&&z.readPixels(B,$,V,X,oe.convert(He),oe.convert(Je),me)}finally{const Ie=H!==null?Fe.get(H).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,B,$,V,X,me,Ee,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se)if(B>=0&&B<=S.width-V&&$>=0&&$<=S.height-X){ge.bindFramebuffer(z.FRAMEBUFFER,Se);const Ie=S.textures[fe],He=Ie.format,Je=Ie.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+fe);const Ce=Nl(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.bufferData(z.PIXEL_PACK_BUFFER,me.byteLength,z.STREAM_READ),z.readPixels(B,$,V,X,oe.convert(He),oe.convert(Je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const wt=H!==null?Fe.get(H).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,wt);const ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qd(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,me),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Qe),z.deleteSync(ft),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,$=0){const V=Math.pow(2,-$),X=Math.floor(S.image.width*V),me=Math.floor(S.image.height*V),Ee=B!==null?B.x:0,fe=B!==null?B.y:0;ze.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ee,fe,X,me),ge.unbindTexture()},this.copyTextureToTexture=function(S,B,$=null,V=null,X=0,me=0){let Ee,fe,Se,Ie,He,Je,Ce,Qe,wt;const ft=S.isCompressedTexture?S.mipmaps[me]:S.image;if($!==null)Ee=$.max.x-$.min.x,fe=$.max.y-$.min.y,Se=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,He=$.min.y,Je=$.isBox3?$.min.z:0;else{const et=Math.pow(2,-X);Ee=Math.floor(ft.width*et),fe=Math.floor(ft.height*et),S.isDataArrayTexture?Se=ft.depth:S.isData3DTexture?Se=Math.floor(ft.depth*et):Se=1,Ie=0,He=0,Je=0}V!==null?(Ce=V.x,Qe=V.y,wt=V.z):(Ce=0,Qe=0,wt=0);const ht=oe.convert(B.format),Vt=oe.convert(B.type);let Pe;B.isData3DTexture?(ze.setTexture3D(B,0),Pe=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ze.setTexture2DArray(B,0),Pe=z.TEXTURE_2D_ARRAY):(ze.setTexture2D(B,0),Pe=z.TEXTURE_2D),ge.activeTexture(z.TEXTURE0),ge.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),ge.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ge.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const Kt=ge.getParameter(z.UNPACK_ROW_LENGTH),it=ge.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=ge.getParameter(z.UNPACK_SKIP_PIXELS),Wt=ge.getParameter(z.UNPACK_SKIP_ROWS),Ks=ge.getParameter(z.UNPACK_SKIP_IMAGES);ge.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,Ie),ge.pixelStorei(z.UNPACK_SKIP_ROWS,He),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);const $n=S.isDataArrayTexture||S.isData3DTexture,di=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const et=Fe.get(S),Bt=Fe.get(B),vn=Fe.get(et.__renderTarget),xt=Fe.get(Bt.__renderTarget);ge.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ut=0;Ut<Se;Ut++)$n&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get(S).__webglTexture,X,Je+Ut),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get(B).__webglTexture,me,wt+Ut)),z.blitFramebuffer(Ie,He,Ie+Ee,He+fe,Ce,Qe,Ce+Ee,Qe+fe,z.DEPTH_BUFFER_BIT,z.NEAREST);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Fe.has(S)){const et=Fe.get(S),Bt=Fe.get(B);ge.bindFramebuffer(z.READ_FRAMEBUFFER,T),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,A);for(let vn=0;vn<Se;vn++)$n?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.__webglTexture,X,Je+vn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,et.__webglTexture,X),di?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,me,wt+vn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,me),X!==0?z.blitFramebuffer(Ie,He,Ie+Ee,He+fe,Ce,Qe,Ce+Ee,Qe+fe,z.COLOR_BUFFER_BIT,z.NEAREST):di?z.copyTexSubImage3D(Pe,me,Ce,Qe,wt+vn,Ie,He,Ee,fe):z.copyTexSubImage2D(Pe,me,Ce,Qe,Ie,He,Ee,fe);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else di?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Pe,me,Ce,Qe,wt,Ee,fe,Se,ht,Vt,ft.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,me,Ce,Qe,wt,Ee,fe,Se,ht,ft.data):z.texSubImage3D(Pe,me,Ce,Qe,wt,Ee,fe,Se,ht,Vt,ft):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,me,Ce,Qe,Ee,fe,ht,Vt,ft.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,me,Ce,Qe,ft.width,ft.height,ht,ft.data):z.texSubImage2D(z.TEXTURE_2D,me,Ce,Qe,Ee,fe,ht,Vt,ft);ge.pixelStorei(z.UNPACK_ROW_LENGTH,Kt),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Wt),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,Ks),me===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&z.generateMipmap(Pe),ge.unbindTexture()},this.initRenderTarget=function(S){Fe.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){G=0,O=0,H=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const av=new ml(-1,1,1,-1,0,1);class rv extends mt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}const ov=new rv;class vl{constructor(e){this._mesh=new re(ov,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lv extends ls{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Os.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wc extends ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class cv extends ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lv(Ba),this.copyPass.material.blending=vi,this.timer=new lf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wc!==void 0&&(r instanceof Wc?n=!0:r instanceof cv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dv extends ls{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ts extends ls{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(a,r,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new sn(a,r,{type:nn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new sn(a,r,{type:nn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}const o=uv;this.highPassUniforms=Os.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Os.clone(Ba.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,premultipliedAlpha:!0,blending:Vn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new ss,this._fsQuad=new vl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);const s=[],a=[];for(let r=1;r<e;r+=2){const o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new jt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ts.BlurDirectionX=new le(1,0);ts.BlurDirectionY=new le(0,1);const Aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class fv extends ls{constructor(){super(),this.isOutputPass=!0,this.uniforms=Os.clone(Aa.uniforms),this.material=new Oh({name:Aa.name,uniforms:this.uniforms,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._fsQuad=new vl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ko?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===el?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const tt={bloom:{name:"Bloom",color:"#67e8a2",dark:"#124d38",icon:"❧",glyph:"✿"},ember:{name:"Ember",color:"#ff8659",dark:"#5c1f14",icon:"♨",glyph:"🔥"},tide:{name:"Tide",color:"#59d8ff",dark:"#123d57",icon:"≈",glyph:"🌊"},frost:{name:"Frost",color:"#b8f4ff",dark:"#1e4c63",icon:"❄",glyph:"❄"},storm:{name:"Storm",color:"#ffe066",dark:"#554112",icon:"ϟ",glyph:"⚡"},stone:{name:"Stone",color:"#d4b08a",dark:"#4b382a",icon:"▲",glyph:"⛰"},umbra:{name:"Umbra",color:"#c4a5ff",dark:"#37254f",icon:"☾",glyph:"☾"},aether:{name:"Aether",color:"#ffd98b",dark:"#5a4626",icon:"✦",glyph:"✦"}},pv={bloom:["tide","stone"],ember:["bloom","frost"],tide:["ember","stone"],frost:["bloom","storm"],storm:["tide","frost"],stone:["ember","storm"],umbra:["storm","aether"],aether:["umbra"]},mv={bloom:["ember","frost"],ember:["tide","stone"],tide:["bloom","storm"],frost:["ember","stone"],storm:["stone","umbra"],stone:["bloom","tide"],umbra:["bloom","aether"],aether:["aether","storm"]};function Xc(i,e){return pv[i]?.includes(e)?1.55:mv[i]?.includes(e)?.68:1}const Gi={petal_lash:{name:"Petal Lash",type:"bloom",power:54,cost:1,acc:.97,desc:"A whipping arc of razor petals."},thorn_guard:{name:"Thorn Guard",type:"bloom",power:0,cost:2,desc:"Bristle and raise defense.",selfStatus:"guard"},bloom_burst:{name:"Bloom Burst",type:"bloom",power:82,cost:4,acc:.94,desc:"An exploding blossom.",status:{id:"root",chance:.28}},verdant_crown:{name:"Verdant Crown",type:"bloom",power:108,cost:6,acc:.9,desc:"Ancient roots drain life.",drain:.3,signature:!0},ember_nip:{name:"Ember Nip",type:"ember",power:54,cost:1,acc:.97,desc:"A searing bite."},cinder_rush:{name:"Cinder Rush",type:"ember",power:76,cost:3,acc:.95,desc:"A blazing charge.",selfStatus:"haste"},flame_ward:{name:"Flame Ward",type:"ember",power:0,cost:2,desc:"A mantle of coals raises attack.",selfStatus:"fury"},magma_fang:{name:"Magma Fang",type:"ember",power:104,cost:6,acc:.9,desc:"Molten fangs that scorch.",status:{id:"scorch",chance:.38},signature:!0},ember_lash:{name:"Inferno Lash",type:"ember",power:86,cost:4,acc:.93,desc:"A whip of living fire.",status:{id:"scorch",chance:.24}},ripple_slam:{name:"Ripple Slam",type:"tide",power:54,cost:1,acc:.98,desc:"A crushing wave."},mist_veil:{name:"Mist Veil",type:"tide",power:0,cost:2,desc:"Cool mist sharpens speed.",selfStatus:"haste"},tidal_crush:{name:"Tidal Crush",type:"tide",power:84,cost:4,acc:.93,desc:"A pressure wave that chills.",status:{id:"chill",chance:.3}},abyss_pulse:{name:"Abyss Pulse",type:"tide",power:106,cost:6,acc:.9,desc:"Light drinks the foe’s strength.",drain:.28,signature:!0},frost_bite:{name:"Frost Bite",type:"frost",power:55,cost:1,acc:.97,desc:"A flash of frozen fangs."},hail_guard:{name:"Hail Guard",type:"frost",power:0,cost:2,desc:"A shell of ice raises defense.",selfStatus:"guard"},glacial_fang:{name:"Glacial Fang",type:"frost",power:88,cost:4,acc:.92,desc:"Ice that bites to the bone.",status:{id:"chill",chance:.38}},permafrost:{name:"Permafrost",type:"frost",power:110,cost:6,acc:.88,desc:"The air itself freezes.",status:{id:"static",chance:.25},signature:!0},spark_peck:{name:"Spark Peck",type:"storm",power:55,cost:1,acc:.98,desc:"A crackling jab."},static_field:{name:"Static Field",type:"storm",power:0,cost:2,desc:"Charge the air and gain speed.",selfStatus:"haste"},thunderclap:{name:"Thunderclap",type:"storm",power:86,cost:4,acc:.92,desc:"A deafening thunderstrike.",status:{id:"static",chance:.3}},storm_surge:{name:"Storm Surge",type:"storm",power:112,cost:7,acc:.88,desc:"A crown of living lightning.",signature:!0},boulder_bash:{name:"Boulder Bash",type:"stone",power:58,cost:1,acc:.95,desc:"A hurled slab of rock."},stonewall:{name:"Stonewall",type:"stone",power:0,cost:2,desc:"Settle into an unbreakable stance.",selfStatus:"guard"},quake_slam:{name:"Quake Slam",type:"stone",power:86,cost:4,acc:.92,desc:"The ground buckles."},titan_fall:{name:"Titan Fall",type:"stone",power:114,cost:7,acc:.87,desc:"A mountain answers the call.",signature:!0},shade_tap:{name:"Shade Tap",type:"umbra",power:54,cost:1,acc:.98,desc:"A cold touch from the dark."},veil_of_night:{name:"Veil of Night",type:"umbra",power:0,cost:2,desc:"Wrap in shadow and sharpen attack.",selfStatus:"fury"},void_gaze:{name:"Void Gaze",type:"umbra",power:82,cost:4,acc:.93,desc:"A gaze that saps strength.",status:{id:"chill",chance:.32}},night_terror:{name:"Night Terror",type:"umbra",power:108,cost:6,acc:.89,desc:"A dream turned inside out.",status:{id:"static",chance:.28},signature:!0},star_shard:{name:"Star Shard",type:"aether",power:58,cost:1,acc:.98,desc:"A shard of fallen starlight."},prism_guard:{name:"Prism Guard",type:"aether",power:0,cost:2,desc:"Light bends around you.",selfStatus:"guard"},radiant_beam:{name:"Radiant Beam",type:"aether",power:90,cost:4,acc:.93,desc:"A beam of pure dawn."},celestial_judgment:{name:"Celestial Judgment",type:"aether",power:118,cost:7,acc:.88,desc:"The heavens deliver their verdict.",status:{id:"scorch",chance:.2},signature:!0},fungal_spore:{name:"Fungal Spore",type:"umbra",power:60,cost:2,acc:.96,desc:"A cloud of dreaming spores.",status:{id:"chill",chance:.35}},tidal_embrace:{name:"Tidal Embrace",type:"tide",power:94,cost:5,acc:.91,desc:"The deep pulls you under.",drain:.2},molten_shell:{name:"Molten Shell",type:"ember",power:70,cost:3,acc:.95,desc:"A shell of cooling lava.",selfStatus:"guard"},sky_rend:{name:"Sky Rend",type:"storm",power:94,cost:5,acc:.92,desc:"Talons carve the thunderhead."},frost_lance:{name:"Frost Lance",type:"frost",power:92,cost:5,acc:.93,desc:"A spear of ancient ice."},stone_roots:{name:"Stone Roots",type:"stone",power:74,cost:3,acc:.95,desc:"Stone tendrils grasp the foe.",status:{id:"root",chance:.3}},radiant_mend:{name:"Radiant Mend",type:"aether",power:0,cost:4,desc:"Starlight knits the body together.",heal:.24}},Bi={sunpetal:{name:"Sunpetal",icon:"✾",color:"#ffd86b",desc:"Warm petals that turn to face any light."},embercap:{name:"Embercap",icon:"🍄",color:"#ff7d54",desc:"A mushroom that smolders without ash."},pearlkelp:{name:"Pearlkelp",icon:"🪸",color:"#6fe4ff",desc:"Glass-bright kelp from tideglass pools."},frostberry:{name:"Frostberry",icon:"🫐",color:"#b9f4ff",desc:"A berry wrapped in permanent rime."},gloomcap:{name:"Gloomcap",icon:"☾",color:"#b78cff",desc:"It glows brightest in the deepest shade."},stormglass:{name:"Stormglass",icon:"ϟ",color:"#ffe066",desc:"Sand fused by a lightning strike."},ashsalt:{name:"Ash Salt",icon:"◇",color:"#e6c2a3",desc:"Mineral crust from a dead caldera."},starfruit:{name:"Starfruit",icon:"✦",color:"#ffe5a3",desc:"A fruit that only ripens under starlight."},wildgrain:{name:"Wildgrain",icon:"⋮",color:"#d8c58a",desc:"Hardy grain that binds every trail treat."}},ja={bloom:{name:"Sunpetal Tart",type:"bloom",recipe:{sunpetal:2,wildgrain:1},icon:"🥧",desc:"A fragrant tart that bloom titans adore.",bonus:1.45,yield:2},ember:{name:"Ember Jerky",type:"ember",recipe:{embercap:2,wildgrain:1},icon:"🍖",desc:"Smoked over a sleeping vent. Savory and warm.",bonus:1.45,yield:2},tide:{name:"Tide Pop",type:"tide",recipe:{pearlkelp:2,wildgrain:1},icon:"🍬",desc:"A salty-sweet candy that fizzes like surf.",bonus:1.45,yield:2},frost:{name:"Rime Honey",type:"frost",recipe:{frostberry:2,wildgrain:1},icon:"🍯",desc:"Crystal honey that stays cold on the tongue.",bonus:1.45,yield:2},umbra:{name:"Gloom Truffle",type:"umbra",recipe:{gloomcap:2,wildgrain:1},icon:"🍫",desc:"Bitter, velvety, and faintly luminous.",bonus:1.45,yield:2},storm:{name:"Storm Snap",type:"storm",recipe:{stormglass:2,wildgrain:1},icon:"🍪",desc:"A crackling biscuit with a citrus bite.",bonus:1.45,yield:2},stone:{name:"Ash Crunch",type:"stone",recipe:{ashsalt:2,wildgrain:1},icon:"🥨",desc:"Dense, smoky, and satisfyingly crunchy.",bonus:1.45,yield:2},aether:{name:"Star Candy",type:"aether",recipe:{starfruit:2,wildgrain:1},icon:"⭐",desc:"It tastes like the moment before dawn.",bonus:1.45,yield:2}},Pt=(i,e,t,n,s=1,a=4,r=9,o=14)=>[{id:i,level:s},{id:e,level:a},{id:t,level:r},{id:n,level:o}],Te={mossling:{name:"Mossling",epithet:"The Dawn Fawn",type:"bloom",rarity:1,size:2.9,catchRate:.42,desc:"A gentle colossus whose antlers bloom with the seasons. It hums to seeds until they sprout.",stats:{hp:64,atk:52,def:57,spd:54},favorite:"bloom",moves:Pt("petal_lash","thorn_guard","bloom_burst","verdant_crown"),art:{form:"stag",body:"#4f8d64",belly:"#b7d49a",accent:"#8ff0b5",glow:"#c8ff8f",horns:"antlers",eye:"#f4ffcf",pattern:"spots",mane:"#b6e3a3"}},cindercub:{name:"Cindercub",epithet:"The Hearth Prowler",type:"ember",rarity:1,size:3.1,catchRate:.42,desc:"A lion-hearted cub with a mane of warm cinders. It purrs at the temperature of a forge.",stats:{hp:68,atk:61,def:48,spd:56},favorite:"ember",moves:Pt("ember_nip","flame_ward","ember_lash","magma_fang"),art:{form:"lion",body:"#c75a3f",belly:"#f2b27b",accent:"#ffb04e",glow:"#ff6b2e",horns:"none",eye:"#ffe7a3",pattern:"stripes",mane:"#ff9b4a"}},ripplefin:{name:"Ripplefin",epithet:"The River Comet",type:"tide",rarity:1,size:2.9,catchRate:.42,desc:"A sleek river guardian that swims through air as easily as water, leaving rings of light behind.",stats:{hp:62,atk:54,def:52,spd:64},favorite:"tide",moves:Pt("ripple_slam","mist_veil","tidal_embrace","abyss_pulse"),art:{form:"otter",body:"#2a7899",belly:"#98e3e8",accent:"#5ff2e0",glow:"#73fff2",horns:"fins",eye:"#d9ffff",pattern:"rings",mane:"#9ff7ef"}},thornox:{name:"Thornox",epithet:"The Bramble King",type:"bloom",rarity:2,size:4.3,catchRate:.28,desc:"An ancient stag whose antlers carry a small forest. Entire flocks nest between its branches.",stats:{hp:86,atk:68,def:73,spd:45},favorite:"bloom",moves:Pt("petal_lash","thorn_guard","bloom_burst","verdant_crown"),art:{form:"stag",body:"#3e7450",belly:"#a9c788",accent:"#69f0a1",glow:"#b6ff7a",horns:"antlers",eye:"#eaffb5",pattern:"moss",mane:"#8fce8b",big:!0}},glimmerwing:{name:"Glimmerwing",epithet:"The Lantern Moth",type:"bloom",rarity:2,size:2.8,catchRate:.33,desc:"Its wings hold tiny galaxies of pollen. At dusk, whole valleys shimmer when it takes flight.",stats:{hp:58,atk:59,def:46,spd:78},favorite:"bloom",moves:Pt("petal_lash","thorn_guard","bloom_burst","verdant_crown"),art:{form:"moth",body:"#5b6f3c",belly:"#e4d79a",accent:"#ffd86b",glow:"#ffe58f",horns:"feather",eye:"#fff7c2",pattern:"eyes",mane:"#f5e7a0",wings:"#a5f3b9"}},cindermaw:{name:"Cindermaw",epithet:"The Cinder Hound",type:"ember",rarity:2,size:3.6,catchRate:.27,desc:"A furnace with legs. Its jaw glows white-hot when it catches the scent of stormglass.",stats:{hp:78,atk:82,def:56,spd:64},favorite:"ember",moves:Pt("ember_nip","cinder_rush","ember_lash","magma_fang"),art:{form:"hound",body:"#8f3f31",belly:"#e6a067",accent:"#ff9c3f",glow:"#ff4d1f",horns:"spikes",eye:"#ffd36e",pattern:"stripes",mane:"#c85b32"}},obsidrake:{name:"Obsidrake",epithet:"The Glass Volcano",type:"ember",rarity:3,size:4.8,catchRate:.18,desc:"Its scales cool into black glass between eruptions. A single wingbeat scatters molten sand.",stats:{hp:88,atk:91,def:74,spd:58},favorite:"ember",moves:Pt("ember_nip","molten_shell","ember_lash","magma_fang"),art:{form:"drake",body:"#352b31",belly:"#8c4a34",accent:"#ff7a35",glow:"#ff4a1c",horns:"crown",eye:"#ffe36e",pattern:"lava",mane:"#ff6a2c",wings:"#33242d"}},tideback:{name:"Tideback",epithet:"The Wandering Reef",type:"tide",rarity:2,size:4.6,catchRate:.24,desc:"A living island. Tide pools gather on its shell, and tiny creatures make homes in the grooves.",stats:{hp:94,atk:60,def:92,spd:32},favorite:"tide",moves:Pt("ripple_slam","mist_veil","tidal_crush","tidal_embrace"),art:{form:"turtle",body:"#3b7890",belly:"#c8e0c2",accent:"#61e4da",glow:"#7dfff0",horns:"none",eye:"#c9ffff",pattern:"shell",mane:"#a5ece4"}},abyssalume:{name:"Abyssalume",epithet:"The Drowned Lantern",type:"tide",rarity:3,size:3.8,catchRate:.2,desc:"A drifting bell of cold light. Fishermen say its song is the sound of the sea remembering.",stats:{hp:82,atk:72,def:58,spd:76},favorite:"tide",moves:Pt("ripple_slam","mist_veil","abyss_pulse","tidal_embrace"),art:{form:"jelly",body:"#2f5a88",belly:"#a6f7ff",accent:"#77ffe9",glow:"#68fff6",horns:"none",eye:"#ffffff",pattern:"glow",mane:"#b5ffff"}},glacierhorn:{name:"Glacierhorn",epithet:"The Avalanche Shepherd",type:"frost",rarity:2,size:4.4,catchRate:.24,desc:"It walks ahead of blizzards, carving safe paths with horns that have never known thaw.",stats:{hp:96,atk:77,def:84,spd:39},favorite:"frost",moves:Pt("frost_bite","hail_guard","glacial_fang","permafrost"),art:{form:"yak",body:"#6d8d9e",belly:"#d7ebea",accent:"#a9f4ff",glow:"#8eecff",horns:"ice",eye:"#e9ffff",pattern:"snow",mane:"#ddf8f5",big:!0}},rimewing:{name:"Rimewing",epithet:"The Snow Owl",type:"frost",rarity:2,size:3.3,catchRate:.3,desc:"A silent hunter with feathers like splintered glass. It sees the heat of a heartbeat through snow.",stats:{hp:70,atk:72,def:58,spd:82},favorite:"frost",moves:Pt("frost_bite","hail_guard","frost_lance","permafrost"),art:{form:"bird",body:"#9ab5c4",belly:"#e6f8ff",accent:"#bff7ff",glow:"#9ceeff",horns:"feather",eye:"#f7ffff",pattern:"snow",mane:"#e9ffff",wings:"#d5f6ff"}},bogmaw:{name:"Bogmaw",epithet:"The Sunken Bell",type:"umbra",rarity:2,size:3.8,catchRate:.26,desc:"A patient titan that lets travelers mistake it for a mossy hill. Its croak sounds like a temple bell.",stats:{hp:100,atk:70,def:86,spd:33},favorite:"umbra",moves:Pt("shade_tap","veil_of_night","fungal_spore","night_terror"),art:{form:"toad",body:"#3d5243",belly:"#9baa72",accent:"#b48cff",glow:"#a471ff",horns:"none",eye:"#f4d76a",pattern:"moss",mane:"#748b58"}},sporequeen:{name:"Sporequeen",epithet:"The Hollow Bloom",type:"umbra",rarity:3,size:4.1,catchRate:.18,desc:"A walking cathedral of fungus. Its spores show sleepers the futures they almost chose.",stats:{hp:84,atk:76,def:66,spd:65},favorite:"umbra",moves:Pt("shade_tap","veil_of_night","fungal_spore","night_terror"),art:{form:"mushroom",body:"#5e4a68",belly:"#c2a8d8",accent:"#c78cff",glow:"#b36bff",horns:"crown",eye:"#ffe4a8",pattern:"spots",mane:"#b68fe0",wings:"#8a6fa0"}},voltaur:{name:"Voltaur",epithet:"The Thunder Falcon",type:"storm",rarity:2,size:3.7,catchRate:.26,desc:"It nests in storm cells and dives on lightning. Its feathers ring like struck copper.",stats:{hp:74,atk:84,def:55,spd:91},favorite:"storm",moves:Pt("spark_peck","static_field","sky_rend","storm_surge"),art:{form:"bird",body:"#66552f",belly:"#f0d38a",accent:"#ffe45c",glow:"#ffd633",horns:"crest",eye:"#fff8bf",pattern:"bolts",mane:"#e6b94f",wings:"#b08f3b"}},thunderhoof:{name:"Thunderhoof",epithet:"The Storm Runner",type:"storm",rarity:3,size:4.3,catchRate:.2,desc:"A wild mare of the high plateau. Each hoofbeat leaves a little thunder rolling under the grass.",stats:{hp:88,atk:88,def:66,spd:86},favorite:"storm",moves:Pt("spark_peck","static_field","thunderclap","storm_surge"),art:{form:"yak",body:"#4f4b58",belly:"#c1b4e4",accent:"#ffe45c",glow:"#ffd633",horns:"bolt",eye:"#fff2a8",pattern:"bolts",mane:"#d6c4ff"}},ashclaw:{name:"Ashclaw",epithet:"The Cinder Reaper",type:"ember",rarity:3,size:4,catchRate:.19,desc:"A scorpion the size of a caravan. Its claws are glass; its sting is a memory of the first fire.",stats:{hp:86,atk:93,def:72,spd:63},favorite:"ember",moves:Pt("ember_nip","molten_shell","ember_lash","magma_fang"),art:{form:"scorpion",body:"#4b3431",belly:"#b67050",accent:"#ff9650",glow:"#ff5b22",horns:"spikes",eye:"#ffe16a",pattern:"lava",mane:"#8e4f35"}},nullgazer:{name:"Nullgazer",epithet:"The Quiet Star",type:"umbra",rarity:3,size:3.4,catchRate:.17,desc:"No one agrees on what it is. It drifts above the ash flats, watching something behind the sky.",stats:{hp:78,atk:86,def:60,spd:84},favorite:"umbra",moves:Pt("shade_tap","veil_of_night","void_gaze","night_terror"),art:{form:"eye",body:"#33264e",belly:"#a888d9",accent:"#c49bff",glow:"#ac6cff",horns:"rings",eye:"#f0d7ff",pattern:"glow",mane:"#b08cff"}},astraleon:{name:"Astraleon",epithet:"The Crown of Dawn",type:"aether",rarity:3,size:4.9,catchRate:.14,desc:"The last light of a dying star, wearing the shape of a lion. It has guarded the Apex since before names.",stats:{hp:98,atk:96,def:82,spd:88},favorite:"aether",moves:Pt("star_shard","prism_guard","radiant_beam","celestial_judgment"),art:{form:"lion",body:"#d8c49a",belly:"#fff4d6",accent:"#ffe391",glow:"#ffd56b",horns:"crown",eye:"#fffbd8",pattern:"constellation",mane:"#f5e6b8",big:!0}},orreryn:{name:"Orreryn",epithet:"The Clockwork Sun",type:"aether",rarity:3,size:4.5,catchRate:.15,desc:"A vast stone orrery given a will. It turns slowly, and the stars keep its time.",stats:{hp:102,atk:86,def:96,spd:52},favorite:"aether",moves:Pt("star_shard","prism_guard","radiant_beam","celestial_judgment"),art:{form:"golem",body:"#b7a878",belly:"#f5e7b4",accent:"#ffeaa2",glow:"#ffd56b",horns:"rings",eye:"#fff6c8",pattern:"constellation",mane:"#e9d79b"}}},$c=["mossling","cindercub","ripplefin"],Qn=i=>i.map(([e,t])=>({species:e,level:t})),er=[{id:"verdant",number:1,name:"Verdant Hollow",subtitle:"Where ancient roots dream",type:"bloom",danger:1,levelRange:[3,6],desc:"A cradle of colossal trees and luminous fungus. The air tastes of rain and honey.",palette:{skyTop:"#183d45",skyBottom:"#e7a86c",fog:"#7ea887",ground:"#426e4e",ground2:"#71975a",rock:"#56624b",accent:"#7bf0a9",glow:"#d5ff8a",sun:"#ffd8a0",ambient:"#9ccfa1",water:"#5bc8b1"},creatures:["thornox","glimmerwing"],material:"sunpetal",gym:{name:"Amberstep Grove",leader:"Wren Thistle",title:"Rootbound Warden",badge:"Verdant Sigil",sigil:"❧",quote:"Every giant was once a seed that refused to give up.",team:Qn([["glimmerwing",6],["thornox",8]]),reward:{materials:{sunpetal:3},xp:60}}},{id:"ember",number:2,name:"Emberreach",subtitle:"The mountain that breathes",type:"ember",danger:2,levelRange:[7,10],desc:"Basalt terraces glow above a slow river of fire. Cinder blooms crack open at dusk.",palette:{skyTop:"#2c1725",skyBottom:"#ef6d44",fog:"#8d4d3d",ground:"#4a3731",ground2:"#765045",rock:"#3b3030",accent:"#ff9d52",glow:"#ff6a2a",sun:"#ffbb73",ambient:"#d17e5e",water:"#ff7a36"},creatures:["cindermaw","obsidrake"],material:"embercap",gym:{name:"The Caldera Ring",leader:"Kael Ashford",title:"Forgeheart",badge:"Ember Brand",sigil:"♨",quote:"A heart is just a furnace with better manners.",team:Qn([["cindermaw",10],["obsidrake",12]]),reward:{materials:{embercap:3},xp:90}}},{id:"tide",number:3,name:"Tideglass Coast",subtitle:"A sea that remembers",type:"tide",danger:3,levelRange:[11,14],desc:"Glass reefs rise from turquoise shallows. At night, the water mirrors a sky no one can see.",palette:{skyTop:"#10334e",skyBottom:"#f4b5a2",fog:"#4b8d9a",ground:"#836f58",ground2:"#bca98a",rock:"#4d7180",accent:"#5fe7e2",glow:"#7dfff0",sun:"#ffe0b5",ambient:"#7bcfd3",water:"#32cfd1"},creatures:["tideback","abyssalume"],material:"pearlkelp",gym:{name:"The Glass Tide",leader:"Mira Sable",title:"Tidecaller",badge:"Tidal Pearl",sigil:"≈",quote:"The sea keeps every promise it ever made.",team:Qn([["abyssalume",14],["tideback",16]]),reward:{materials:{pearlkelp:3},xp:120}}},{id:"frost",number:4,name:"Frostspire",subtitle:"The white silence",type:"frost",danger:4,levelRange:[15,18],desc:"A staircase of glacier and black pine. Somewhere above, the aurora rings like a bell.",palette:{skyTop:"#1a3152",skyBottom:"#b9dbe4",fog:"#8cabb9",ground:"#b9cfd2",ground2:"#e6f1ef",rock:"#728794",accent:"#a9f4ff",glow:"#d0fbff",sun:"#e2f7ff",ambient:"#a8d9e6",water:"#79dce8"},creatures:["rimewing","glacierhorn"],material:"frostberry",gym:{name:"The Rime Hold",leader:"Bjorn Halvard",title:"Avalanche Shepherd",badge:"Rime Crown",sigil:"❄",quote:"Stand still long enough and even winter will respect you.",team:Qn([["rimewing",18],["glacierhorn",20]]),reward:{materials:{frostberry:3},xp:150}}},{id:"sunken",number:5,name:"Sunken Wilds",subtitle:"The garden beneath",type:"umbra",danger:5,levelRange:[19,22],desc:"A drowned temple swallowed by violet moss. The trees lean close to hear you breathe.",palette:{skyTop:"#1d1937",skyBottom:"#7f5b8b",fog:"#51536b",ground:"#3e4a3f",ground2:"#62725a",rock:"#4f4a5e",accent:"#b78cff",glow:"#a471ff",sun:"#d8b7ff",ambient:"#8e86a8",water:"#6f5f97"},creatures:["bogmaw","sporequeen"],material:"gloomcap",gym:{name:"The Hollow Nave",leader:"Sable Vey",title:"Keeper of Quiet",badge:"Hollow Eye",sigil:"☾",quote:"Listen. The dark is not empty. It is full of things that waited.",team:Qn([["bogmaw",22],["sporequeen",24]]),reward:{materials:{gloomcap:3},xp:180}}},{id:"storm",number:6,name:"Stormcrest",subtitle:"Where the sky breaks",type:"storm",danger:6,levelRange:[23,26],desc:"Shattered highlands float above a sea of cloud. Lightning walks from peak to peak.",palette:{skyTop:"#1b213d",skyBottom:"#c6b07a",fog:"#6c718c",ground:"#58634f",ground2:"#8a8b62",rock:"#575568",accent:"#ffe066",glow:"#ffef9e",sun:"#fff0b0",ambient:"#a7a7c7",water:"#6b7bc4"},creatures:["voltaur","thunderhoof"],material:"stormglass",gym:{name:"The Thunder Seat",leader:"Zephyra Vane",title:"Stormwarden",badge:"Storm Fang",sigil:"ϟ",quote:"A storm does not hate the mountain. It simply insists on being heard.",team:Qn([["voltaur",26],["thunderhoof",28]]),reward:{materials:{stormglass:3},xp:220}}},{id:"cinder",number:7,name:"Cinder Wastes",subtitle:"The ashen quiet",type:"stone",danger:7,levelRange:[27,30],desc:"A dead caldera under a red sun. Every footprint stays, because nothing remains to erase it.",palette:{skyTop:"#2b1b1d",skyBottom:"#b55742",fog:"#76544d",ground:"#5b4a42",ground2:"#897061",rock:"#3c3534",accent:"#ff9650",glow:"#ff5b22",sun:"#ffc27d",ambient:"#bb8b71",water:"#a64c32"},creatures:["ashclaw","obsidrake"],material:"ashsalt",gym:{name:"The Last Furnace",leader:"Vulcan Rook",title:"Ash Sovereign",badge:"Ashen Sun",sigil:"▲",quote:"Everything ends in ash. The trick is deciding what to make from it.",team:Qn([["ashclaw",30],["obsidrake",32]]),reward:{materials:{ashsalt:3},xp:260}}},{id:"celestial",number:8,name:"Celestial Apex",subtitle:"The edge of the map",type:"aether",danger:8,levelRange:[31,34],desc:"An island adrift above the world. Broken constellations drift between white pillars.",palette:{skyTop:"#11122c",skyBottom:"#e9b98b",fog:"#8385a6",ground:"#b8ac91",ground2:"#e0d5b7",rock:"#8d88a0",accent:"#ffe391",glow:"#ffd56b",sun:"#fff2c7",ambient:"#c5bde3",water:"#9fd9ff"},creatures:["astraleon","orreryn"],material:"starfruit",gym:{name:"The Orrery",leader:"Astra Vale",title:"The Last Light",badge:"Astral Star",sigil:"✦",quote:"We are all small things trying to carry a little light home.",team:Qn([["orreryn",34],["astraleon",37]]),reward:{materials:{starfruit:3},xp:320}}}],gv=er.map(i=>({id:i.id,name:i.gym.badge,sigil:i.gym.sigil,type:i.type,leader:i.gym.leader})),Ra=["#f2c6a0","#e0a778","#c68654","#9b5f3b","#6c402d","#43291f"],Ca=["#241d1b","#56372a","#9a6a3a","#d8b869","#b9c1c8","#7c4dc4","#d45b5b","#3d7a72"],Pa=["#e5b85f","#4fc2a2","#6f8fe8","#d76b6b","#a57ae0","#e6e0cf","#5f6a7d","#cf7f48"],qc=["Short","Windswept","Long","Braids","Curls","Topknot"];function Xo(i){return Math.floor(28+i*i*1.9+i*8)}function vv(i,e){return Math.floor(i.stats.hp*(1+.115*(e-1))+e*2.5)}function Qt(i,e){const t=i.stats,n=1+.075*(e-1);return{hp:vv(i,e),atk:Math.floor(t.atk*n),def:Math.floor(t.def*n),spd:Math.floor(t.spd*n)}}function Vi(i,e){return i.moves.filter(t=>e>=t.level).map(t=>t.id)}function Jh(i,e=5,t={}){const n=Te[i],s=Qt(n,e);return{uid:t.uid||`${i}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,speciesId:i,level:e,xp:t.xp||0,hp:t.hp??s.hp,maxHp:s.hp,nature:t.nature||["Bold","Curious","Gentle","Fierce","Calm","Mischievous"][Math.floor(Math.random()*6)]}}function tr(i){return er.find(e=>e.id===i)||er[0]}const pt=U;function ie(i,e={}){return new Hs({color:new Le(i),roughness:e.roughness??.72,metalness:e.metalness??.04,emissive:new Le(e.emissive||"#000000"),emissiveIntensity:e.emissiveIntensity??1,flatShading:e.flatShading??!0,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??si,depthWrite:e.depthWrite??!0})}const Kr=new Map;function Qh(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function jh(i){let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function _v(i,e,t,n,s,a){const r=i.createRadialGradient(t,n,0,t,n,s);r.addColorStop(0,e),r.addColorStop(.55,e),r.addColorStop(1,"rgba(255,255,255,0)"),i.globalAlpha=a,i.fillStyle=r,i.beginPath(),i.arc(t,n,s,0,Math.PI*2),i.fill(),i.globalAlpha=1}function xv(i,e="body"){const t=e==="belly"?i.belly:e==="mane"?i.mane||i.belly:e==="accent"?i.accent:i.body,n=`${i.body}|${i.belly}|${i.accent}|${i.glow}|${i.pattern}|${e}`;if(Kr.has(n))return Kr.get(n);const s=document.createElement("canvas");s.width=256,s.height=256;const a=s.getContext("2d"),r=jh(Qh(n));a.fillStyle=t,a.fillRect(0,0,256,256);const o=e==="belly"?[i.body,i.belly,i.accent,"#fffdf4"]:[i.belly,i.accent,i.glow,i.body,"#fffdf4"];for(let h=0;h<30;h++)_v(a,o[Math.floor(r()*o.length)],r()*256,r()*256,18+r()*72,.045+r()*.07);for(let h=0;h<170;h++){a.globalAlpha=.06+r()*.15,a.fillStyle=r()>.52?i.accent:i.belly;const u=.6+r()*2.2;a.beginPath(),a.ellipse(r()*256,r()*256,u,u*(.5+r()),r()*3,0,Math.PI*2),a.fill()}if(a.globalAlpha=1,e==="body"){const h=i.pattern;if(h==="stripes"){a.strokeStyle=i.belly,a.globalAlpha=.46,a.lineWidth=12+r()*7;for(let u=0;u<8;u++){a.beginPath();const d=8+u*33+r()*6;a.moveTo(d,-20),a.bezierCurveTo(d+18,55,d-18,150,d+12,276),a.stroke()}}else if(h==="spots"){a.fillStyle=i.belly;for(let u=0;u<24;u++){a.globalAlpha=.42+r()*.28;const d=4+r()*11;a.beginPath(),a.arc(r()*256,r()*256,d,0,Math.PI*2),a.fill()}}else if(h==="rings"||h==="shell"){a.strokeStyle=i.accent,a.globalAlpha=.34,a.lineWidth=5;for(let u=0;u<10;u++)a.beginPath(),a.ellipse(r()*256,r()*256,10+r()*34,8+r()*26,r()*3,0,Math.PI*2),a.stroke()}else if(h==="lava"||h==="glow"||h==="constellation"){a.strokeStyle=i.glow,a.globalAlpha=.58,a.lineWidth=2.5;for(let u=0;u<9;u++){a.beginPath();let d=r()*256,f=r()*256;a.moveTo(d,f);for(let g=0;g<4;g++)d+=(r()-.5)*55,f+=(r()-.5)*55,a.lineTo(d,f);a.stroke()}}else if(h==="moss"||h==="snow"){a.fillStyle=h==="snow"?"#f7ffff":"#6f9657";for(let u=0;u<30;u++){a.globalAlpha=.22+r()*.3;const d=2+r()*7;a.beginPath(),a.ellipse(r()*256,r()*256,d,d*.7,r()*3,0,Math.PI*2),a.fill()}}a.globalAlpha=1}const l=a.createLinearGradient(0,0,0,256);l.addColorStop(0,"rgba(255,250,220,0.14)"),l.addColorStop(.45,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(20,45,32,0.10)"),a.fillStyle=l,a.fillRect(0,0,256,256);const c=new rr(s);return c.colorSpace=zt,c.wrapS=c.wrapT=Ha,c.anisotropy=4,Kr.set(n,c),c}function qe(i,e="body",t={}){e==="belly"?i.belly:e==="mane"?i.mane||i.belly:e==="accent"?i.accent:e==="wing"?i.wings||i.accent:i.body;const n=ie("#ffffff",{roughness:t.roughness??.8,metalness:0,flatShading:!1,transparent:t.transparent,opacity:t.opacity,side:t.side,emissive:t.emissive||i.glow,emissiveIntensity:t.emissiveIntensity??.035});return n.map=xv(i,e),n.color.set("#ffffff"),n.needsUpdate=!0,n}function ed(i=.5,e=.2){const t=new Ds;return t.moveTo(0,0),t.bezierCurveTo(-e,i*.22,-e*.9,i*.72,0,i),t.bezierCurveTo(e*.9,i*.72,e,i*.22,0,0),new ji(t,8)}function ii(i,e,t={}){const n=new we,s=t.count??6,a=qe(e,t.kind||"accent",{side:Tt,roughness:.85}),r=jh(Qh(`${e.body}-${t.seed||1}`));for(let o=0;o<s;o++){const l=new re(ed((t.length||.46)*(.75+r()*.5),(t.width||.2)*(.75+r()*.45)),a),c=o/s*Math.PI*2+r()*.4,h=t.radius??.62;l.position.set(Math.cos(c)*h,r()*.18,Math.sin(c)*h),l.rotation.set(-.3+r()*.6,c+Math.PI/2,(r()-.5)*.5),l.castShadow=!0,n.add(l)}return n.position.copy(t.position||new pt(0,0,0)),n.rotation.copy(t.rotation||new Gt),i.add(n),n}function q(i,e,t=0,n=0,s=0,a=0,r=0,o=0){const l=new re(i,e);return l.position.set(t,n,s),l.rotation.set(a,r,o),l.castShadow=!0,l.receiveShadow=!0,l}function Ae(i,e=1){const t=10+e*4,n=7+e*3;return new on(i,t,n)}function dt(i,e,t,n=7){return new lt(i,e,t,n)}function ot(i,e,t=7){return new Sn(i,e,t)}function yv(i,e,t=7){return new dl(i,e,4,t)}function Hn(i,e,t){return new Ln(i,e,t)}function gi(i,e,t,n,s=6){const a=new pt().subVectors(e,i),r=a.length(),o=new re(dt(t*.82,t,r,s),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new pt(0,1,0),a.normalize()),o.castShadow=!0,o}function cs(i,e,t={}){const n=new we,s=ie("#fffdf2",{flatShading:!1,roughness:.2}),a=ie(e.eye||e.glow,{flatShading:!1,roughness:.28,emissive:e.eye||e.glow,emissiveIntensity:.18}),r=ie("#17141a",{flatShading:!1,roughness:.06}),o=ie("#ffffff",{flatShading:!1,roughness:.05,emissive:"#ffffff",emissiveIntensity:.3}),l=t.positions||[[-.25,.11,.39],[.25,.11,.39]],c=t.size||.15;for(const[h,u,d]of l){const f=q(Ae(c,2),s,h,u,d);f.castShadow=!1;const g=q(Ae(c*.64,2),a,h,u,d+c*.7),_=q(Ae(c*.34,2),r,h,u,d+c*1.03),m=q(Ae(c*.12,1),o,h-c*.18,u+c*.2,d+c*1.18);g.castShadow=!1,_.castShadow=!1,m.castShadow=!1,n.add(f,g,_,m)}return i.add(n),n}function $o(i,e,t=-.2,n=.47,s=.3){const a=ie("#241a1a",{roughness:.4}),r=q(Hn(s,.055,.06),a,0,t,n);i.add(r);const o=ie("#f2ead2",{roughness:.3});for(const l of[-s*.38,s*.38]){const c=q(ot(.035,.14,4),o,l,t+.02,n+.03,Math.PI,0,0);i.add(c)}return r}function Ws(i,e,t,n={}){const s=ie(e.hornsColor||e.accent,{roughness:.55,emissive:e.glow,emissiveIntensity:n.emissive??.08}),a=ie(e.hornDark||"#4d3c2d",{roughness:.8});if(t==="antlers"){const r=new we,o=new we;r.position.set(-.3,.25,-.08),o.position.set(.3,.25,-.08),r.rotation.z=.22,o.rotation.z=-.22;const l=(c,h,u,d,f,g,_,m)=>{const p=new pt(h+Math.sin(f)*g,u+Math.cos(f)*g,d+.08);c.add(gi(new pt(h,u,d),p,_,s)),m>0&&(l(c,p.x+.1,p.y,p.z,f+.5,g*.62,_*.68,m-1),l(c,p.x-.1,p.y,p.z,f-.55,g*.5,_*.62,m-1))};l(r,0,0,0,-.04,.7,.075,2),l(o,0,0,0,.04,.7,.075,2),i.add(r,o),ii(r,e,{count:6,radius:.17,length:.34,width:.12,position:new pt(0,.72,0),rotation:new Gt(-.5,.2,0)}),ii(o,e,{count:6,radius:.17,length:.34,width:.12,position:new pt(0,.72,0),rotation:new Gt(-.5,-.2,0)});for(let c=0;c<6;c++){const h=q(Ae(.14,0),qe(e,c%2?"belly":"accent",{roughness:.82}),c%2?.11:-.1,-.5+c*.13,.61);h.scale.set(.42,1.55,.22),h.rotation.z=c%2?-.4:.4,i.add(h)}}else if(t==="ice")for(const r of[-1,1]){const o=new we;o.position.set(.3*r,.25,0),o.rotation.z=-.65*r,o.add(q(ot(.16,.85,5),s,0,.42,0)),o.add(q(ot(.09,.5,5),s,.1*r,.7,0,0,0,.22*r)),i.add(o)}else if(t==="spikes")for(let r=0;r<4;r++){const o=q(ot(.1,.38,5),a,-.36+r*.24,.35,-.06-r*.1,-.2,0,0);i.add(o)}else if(t==="crown")for(let r=0;r<5;r++){const o=r/5*Math.PI-Math.PI/2,l=q(ot(.1,.5+r%2*.18,4),s,Math.sin(o)*.33,.38+Math.cos(o)*.06,Math.cos(o)*.2,.1,0,Math.sin(o)*.35);l.material=ie(e.accent,{emissive:e.glow,emissiveIntensity:.9,roughness:.3}),i.add(l)}else if(t==="feather")for(let r=0;r<3;r++){const o=q(ot(.06,.55-r*.1,4),s,0,.3+r*.08,-.1-r*.12,-.45-r*.12,0,0);o.scale.set(.6,1,.4),i.add(o)}else if(t==="crest")for(let r=0;r<4;r++){const o=q(ot(.055,.5,4),s,0,.3,.1-r*.18,-.1-r*.15,0,0);o.material=ie(e.accent,{emissive:e.glow,emissiveIntensity:1.4}),i.add(o)}else if(t==="fins"){for(const o of[-1,1]){const l=q(ot(.2,.55,4),s,.32*o,.18,-.05,0,0,.6*o);l.scale.set(.28,1,.6),i.add(l)}const r=q(ot(.12,.5,4),s,0,.42,0,-.25,0,0);r.scale.set(.4,1,.7),i.add(r)}else if(t==="rings")for(let r=0;r<2;r++){const o=q(new St(.55+r*.24,.025,5,28),ie(e.accent,{emissive:e.glow,emissiveIntensity:.55,roughness:.3,flatShading:!1}),0,.48,0,Math.PI/2,0,r*.35);o.castShadow=!1,i.add(o)}else if(t==="bolt")for(const r of[-1,1]){const o=new we;o.position.set(.28*r,.3,0),o.add(q(dt(.045,.07,.35,5),s,0,.17,0,0,0,-.3*r)),o.add(q(dt(.035,.055,.32,5),s,.13*r,.44,0,0,0,.34*r)),o.add(q(dt(.02,.035,.26,5),s,.05*r,.67,0,0,0,-.3*r)),i.add(o)}else if(t==="curved")for(const r of[-1,1]){const o=new we;o.position.set(.34*r,.24,0),o.rotation.z=-.6*r,o.add(q(dt(.07,.16,.7,6),s,0,.35,0));const l=q(ot(.08,.38,5),s,.14*r,.76,0,0,0,-.7*r);o.add(l),i.add(o)}}function Xs(i,e,t){const n=new we;if(t==="spots"){const s=ie(e.belly,{roughness:.8});for(let a=0;a<9;a++){const r=q(Ae(.09+a%3*.025,0),s,-.7+a%3*.62,.15+Math.sin(a)*.28,-.8+Math.floor(a/3)*.7);r.scale.set(1,.3,1),n.add(r)}}else if(t==="stripes"){const s=ie(e.belly,{roughness:.85});for(let a=0;a<5;a++){const r=q(Ae(.14+a%2*.03,0),s,a%2?.34:-.34,.28+a%2*.1,-.9+a*.42);r.scale.set(.34,1.08,1.5),r.rotation.z=a%2?-.2:.2,n.add(r)}}else if(t==="lava"){const s=ie(e.glow,{emissive:e.glow,emissiveIntensity:2.2,roughness:.2});for(let a=0;a<6;a++){const r=q(Hn(.045,.035,.5+a%3*.2),s,-.55+a%3*.52,.3+a%2*.22,-.6+Math.floor(a/3)*.85,0,.3,0);r.castShadow=!1,n.add(r)}}else if(t==="constellation"){const s=ie(e.glow,{emissive:e.glow,emissiveIntensity:3,roughness:.1}),a=[[-.5,.45,.7],[.1,.5,.9],[.55,.3,.6],[-.25,.35,-.4],[.35,.55,-.2],[.65,.2,-.7]];for(const[c,h,u]of a){const d=q(Ae(.045,0),s,c,h,u);d.castShadow=!1,n.add(d)}const r=new wh({color:e.glow,transparent:!0,opacity:.55}),o=a.slice(0,5).map(c=>new pt(c[0],c[1]+.03,c[2])),l=new yu(new mt().setFromPoints(o),r);n.add(l)}else if(t==="snow"){const s=ie("#f7ffff",{roughness:.6});for(let a=0;a<7;a++){const r=q(Ae(.055+a%2*.03,0),s,-.55+a%4*.38,.42+a%3*.18,-.75+Math.floor(a/4)*.8);n.add(r)}}else if(t==="moss"){const s=ie("#6f9657",{roughness:.95});for(let a=0;a<8;a++){const r=q(Ae(.1+a%3*.04,0),s,-.62+a%4*.4,.45+a%2*.24,-.6+Math.floor(a/4)*.95);r.scale.set(1.2,.35,1.2),n.add(r)}}else if(t==="bolts"){const s=ie(e.glow,{emissive:e.glow,emissiveIntensity:2.8,roughness:.2});for(let a=0;a<3;a++){const r=new we;r.position.set(-.4+a*.32,.25+a%2*.2,.82),r.add(q(dt(.022,.03,.25,4),s,0,0,0,0,0,.45)),r.add(q(dt(.018,.024,.22,4),s,.08,.19,.02,0,0,-.5)),n.add(r)}}else if(t==="rings"){const s=ie(e.accent,{emissive:e.glow,emissiveIntensity:1.2,roughness:.35});for(let a=0;a<3;a++){const r=q(new St(.72+a*.08,.025,4,16),s,0,.1,.1+a*.42,0,.3,0);n.add(r)}}i.add(n)}function Mv(i,e,t=.75){const n=qe(e,"mane",{roughness:.95}),s=new we;for(let a=0;a<14;a++){const r=a/14*Math.PI*2,o=q(ot(.12,.48,5),n,Math.cos(r)*t,.03+Math.sin(a*2.2)*.05,Math.sin(r)*t,Math.cos(r)*.55,0,Math.sin(r)*.55);s.add(o)}return i.add(s),s}function _l(i,e,t="tuft"){const n=new we;if(t==="flame"){n.position.set(0,.15,-1.55),n.add(gi(new pt(0,0,0),new pt(0,.25,-.55),.12,qe(e,"body")));const s=q(ot(.3,.7,6),ie(e.glow,{emissive:e.glow,emissiveIntensity:1.8,transparent:!0,opacity:.9,flatShading:!1}),0,.35,-.62);s.rotation.x=-.4,n.add(s)}else if(t==="fin"){n.position.set(0,.1,-1.55),n.add(gi(new pt(0,0,0),new pt(0,.2,-1),.14,qe(e,"body")));const s=q(ot(.55,.8,3),ie(e.accent,{emissive:e.glow,emissiveIntensity:.3,transparent:!0,opacity:.75,flatShading:!1}),0,.16,-1.1,Math.PI/2,0,0);s.scale.set(1,1,.22),n.add(s)}else if(t==="leaf"){n.position.set(0,.1,-1.55),n.add(gi(new pt(0,0,0),new pt(0,.35,-.55),.09,ie("#5f7040")));const s=q(Ae(.32,0),qe(e,"accent",{emissiveIntensity:.08}),0,.5,-.7);s.scale.set(.8,1.5,.25),s.rotation.x=-.45,n.add(s)}else if(t==="chain"){n.position.set(0,.1,-1.45);for(let s=0;s<4;s++){const a=q(Ae(.17-s*.02,0),qe(e,"accent",{emissiveIntensity:.08}),0,.2+s*.12,-.35-s*.28);n.add(a)}}else{n.position.set(0,.1,-1.5),n.add(gi(new pt(0,0,0),new pt(0,.38,-.8),.12,qe(e,"body")));const s=q(Ae(.25,0),qe(e,"mane",{roughness:.95}),0,.4,-.86);s.scale.set(.7,.7,1.2),n.add(s)}return i.add(n),n}function xl(i,e,t){const n=[];for(const s of[-1,1]){const a=new we;if(a.position.set(s*.72,.08,-.35),t==="moth"){const r=new Ds;r.moveTo(0,0),r.bezierCurveTo(s*.9,1,s*2,1.45,s*2.15,.35),r.bezierCurveTo(s*1.5,.18,s*.7,-.2,0,0);const o=new ji(r,12),l=new re(o,qe(e,"wing",{emissiveIntensity:.2,transparent:!0,opacity:.88,side:Tt,roughness:.55}));l.castShadow=!0,a.add(l);const c=q(Ae(.14,0),ie(e.glow,{emissive:e.glow,emissiveIntensity:1.4,flatShading:!1}),s*.7,.55,.02);c.scale.set(1,1,.2),a.add(c)}else if(t==="bird")for(let r=0;r<5;r++){const o=q(ot(.13-r*.014,1.15-r*.09,4),qe(e,r%2?"wing":"belly",{roughness:.9}),s*(.28+r*.25),.14-r*.05,-.1-r*.06,0,0,s*(1.12+r*.11));o.scale.set(.5,1,.18),a.add(o)}else{const r=new Ds;r.moveTo(0,0),r.bezierCurveTo(s*.85,.75,s*1.55,.7,s*1.95,.05),r.bezierCurveTo(s*1.4,-.15,s*.8,-.72,0,-.3);const o=new ji(r,10),l=new re(o,qe(e,"wing",{emissiveIntensity:.09,transparent:!0,opacity:.94,side:Tt,roughness:.78}));l.castShadow=!0,a.add(l);const c=ie(e.accent,{emissive:e.glow,emissiveIntensity:.6});for(let h=0;h<3;h++){const u=.35+h*.35;a.add(gi(new pt(0,0,0),new pt(s*Math.cos(u)*1.75,Math.sin(u)*.7,.02),.035,c))}}i.add(a),n.push(a)}return n}function Sv(i,e,t=18,n=1.5,s=1.8){const a=new Float32Array(t*3);for(let c=0;c<t;c++){const h=Math.random()*Math.PI*2,u=n*(.45+Math.random()*.7);a[c*3]=Math.cos(h)*u,a[c*3+1]=s+(Math.random()-.3)*2.2,a[c*3+2]=Math.sin(h)*u}const r=new mt;r.setAttribute("position",new an(a,3));const o=new as({color:e,size:.075,transparent:!0,opacity:.8,depthWrite:!1,blending:Vn}),l=new ks(r,o);return l.userData.base=a.slice(),l.userData.phase=Math.random()*10,i.add(l),l}function Yc(i,e,t,n){const{body:s,belly:a,accent:r,glow:o,mane:l}=e,c=qe(e,"body"),h=qe(e,"belly"),u=qe(e,"accent",{emissiveIntensity:.07}),d=ie(o,{emissive:o,emissiveIntensity:2}),f=t==="stag",g=t==="hound",_=t==="yak",m=t==="lion",p=t==="turtle",x=t==="otter",b=t==="toad";let y=2.15;(p||b)&&(y=1.85),_&&(y=2.35);const R=q(Ae(1,1),c,0,y,0);R.scale.set(_?1.5:g?1.15:1.25,b?1:p?.82:1.05,x?2:1.8),i.root.add(R),i.body=R;const E=q(Ae(.9,1),h,0,y-.28,.2);if(E.scale.set(.9,.65,1.28),i.root.add(E),p){const A=q(new on(1.35,12,7,0,Math.PI*2,0,Math.PI/2),ie(e.mane,{roughness:.55}),0,y+.22,-.05);A.scale.set(1.2,.72,1.55),i.root.add(A);for(let G=0;G<8;G++){const O=G/8*Math.PI*2,H=q(new lt(.24,.28,.06,6),ie(e.accent,{emissive:o,emissiveIntensity:.5}),Math.cos(O)*.8,y+.9,-.05+Math.sin(O)*1,0,0,0);i.root.add(H)}}if(_){const A=q(Ae(.9,1),c,0,y+.7,-.1);A.scale.set(1,.7,1.25),i.root.add(A);const G=ie(l,{roughness:1});for(let O=0;O<9;O++){const H=q(ot(.18,.6,4),G,-.8+O%3*.8,y-.1+O%2*.1,.8-Math.floor(O/3)*.5,.2,0,0);H.scale.set(.8,1,.6),i.root.add(H)}}const v=p||b?y+.48:y+.52,w=p?1.6:b?1.35:1.28,N=q(dt(.32,.46,b?.25:.8,7),c,0,v,w,.42,0,0);if(i.root.add(N),m||_){const A=Mv(i.root,e,m?.72:.55);A.position.set(0,v+.22,w+.18),A.rotation.x=.18,i.mane=A}const P=new we;P.position.set(0,v+(b?.35:.6),w+.34),i.head=P,i.root.add(P);const L=q(Ae(b?.62:.48,1),c,0,0,0);if(L.scale.set(g?1.12:1,b?.72:.94,b?1.25:1.08),P.add(L),f){const A=q(dt(.2,.32,.6,6),h,0,-.1,.48,Math.PI/2,0,0);P.add(A);const G=q(Ae(.11,0),ie("#2d2624"),0,-.1,.78);P.add(G)}else if(g){const A=q(Hn(.42,.28,.48),c,0,-.12,.5);P.add(A),$o(P,e,-.2,.73,.34)}else if(b){const A=q(Hn(.82,.08,.06),ie("#251c25"),0,-.2,.7);P.add(A)}else if(m){const A=q(Hn(.38,.26,.42),h,0,-.12,.48);P.add(A),$o(P,e,-.2,.69,.26)}else if(p){const A=q(ot(.18,.32,5),u,0,-.1,.5,Math.PI/2,0,0);P.add(A)}else{const A=q(Ae(.3,0),h,0,-.12,.4);A.scale.set(1,.7,1.1),P.add(A)}if(cs(P,e,{size:b?.2:.15,positions:b?[[-.32,.22,.38],[.32,.22,.38]]:void 0}),Ws(P,e,e.horns,{}),m){const A=q(new St(.47,.045,4,16),u,0,.36,.05,Math.PI/2,0,0);P.add(A)}e.horns!=="antlers"&&ii(P,e,{count:3,radius:.28,length:.34,width:.12,position:new pt(0,.29,-.18),rotation:new Gt(-.9,.35,0)}),Xs(R,e,e.pattern),ii(i.root,e,{count:_||m?8:6,radius:.72,length:.58,width:.22,position:new pt(0,y+.38,w-.12),rotation:new Gt(-.28,0,0)}),ii(i.root,e,{count:7,radius:.62,length:.7,width:.27,position:new pt(0,y+.82,-.42),rotation:new Gt(-.48,0,0)});const I=[],F=b?[-.85,.85]:p?[-.85,.85]:[-.68,.68],T=b?[-.75,.75]:p?[-.8,.8]:[-1.02,1.02];for(const A of F)for(const G of T){const O=G>0,H=new we;H.position.set(A,y-.35,G);const k=q(dt(.19,.22,1.35,6),c,0,-.62,0);k.scale.z=p||b?1.4:1;const K=q(Ae(.26,0),p?u:ie(e.body),0,-1.33,O?.08:0);K.scale.set(1,.5,1.35),H.add(k,K),b&&(k.scale.set(1.3,.7,1.3),H.position.y=y-.55),i.root.add(H),I.push({leg:H,front:O,side:Math.sign(A)})}if(i.legs=I,i.tail=_l(i.root,e,g?"flame":x?"fin":f?"leaf":b?"chain":"tuft"),ii(i.tail,e,{count:3,radius:.2,length:.42,width:.18,position:new pt(0,.28,-.5),rotation:new Gt(-.8,0,0)}),g)for(let A=0;A<5;A++){const G=q(ot(.1,.32,4),d,0,y+.7,-.9+A*.38,-.2,0,0);i.root.add(G)}if(x){const A=q(ot(.16,.65,4),u,0,y+.5,.5,-.2,0,0);A.scale.set(.4,1,.9),i.root.add(A);for(let O=0;O<4;O++){const H=q(ot(.14-O*.015,.6-O*.06,4),u,0,y+.72-O*.03,.12-O*.36,-.25,0,0);H.scale.set(.24,1,.58),i.root.add(H)}const G=qe(e,"accent",{side:Tt,roughness:.72});for(const O of[-1,1]){const H=new re(ed(.38,.14),G);H.position.set(O*.34,v+.34,w+.52),H.rotation.set(-.6,O*.8,O*.55),P.add(H)}}}function bv(i,e,t){const n=qe(e,"body"),s=qe(e,"belly"),a=qe(e,"accent",{emissiveIntensity:.08}),r=q(Ae(1,1),n,0,2.3,-.15);r.scale.set(1.2,1.1,1.75),i.root.add(r),i.body=r;const o=q(Ae(.86,1),s,0,2.05,.12);o.scale.set(.86,.78,1.42),i.root.add(o),Xs(r,e,e.pattern);const l=new we;l.position.set(0,2.82,1.05),l.rotation.x=.6,i.root.add(l),l.add(q(dt(.3,.42,1.05,7),n,0,0,0));const c=new we;c.position.set(0,.66,.52),c.rotation.x=-.4,l.add(c),i.head=c;const h=q(Ae(.52,1),n,0,0,.1);h.scale.set(1,.85,1.25),c.add(h);const u=q(Hn(.44,.32,.55),n,0,-.1,.57);c.add(u),$o(c,e,-.2,.86,.35),cs(c,e),Ws(c,e,e.horns,{}),ii(i.root,e,{count:5,radius:.68,length:.48,width:.18,position:new pt(0,2.92,.78),rotation:new Gt(-.6,0,0)});const d=[];for(const _ of[-.75,.75])for(const m of[-.95,1.02]){const p=new we;p.position.set(_,1.85,m);const x=q(dt(.2,.28,1.7,6),n,0,-.8,0),b=q(Ae(.3,0),n,0,-1.63,m>0?.15:0);b.scale.set(1,.45,1.5),p.add(x,b),i.root.add(p),d.push({leg:p,front:m>0,side:Math.sign(_)})}i.legs=d;const f=new we;f.position.set(0,2.1,-1.7);for(let _=0;_<5;_++){const m=q(Ae(.35-_*.05,0),n,0,-.08*_,-_*.42);f.add(m)}const g=q(ot(.18,.8,4),a,0,-.4,-2.5,-1.35,0,0);f.add(g),i.root.add(f),i.tail=f,i.wings=xl(i.root,e,"drake"),i.wings.forEach(_=>{_.position.y=2.85})}function wv(i,e,t){const n=qe(e,"body"),s=qe(e,"belly"),a=qe(e,"accent",{emissiveIntensity:.08}),r=q(Ae(.85,1),n,0,2.2,0);r.scale.set(1,1.3,1.1),i.root.add(r),i.body=r;const o=q(Ae(.6,1),s,0,2.05,.35);o.scale.set(.8,1.05,.7),i.root.add(o);const l=new we;l.position.set(0,3.25,.22),i.root.add(l),i.head=l,l.add(q(Ae(.45,1),n));const c=q(ot(.2,.42,4),a,0,-.03,.52,Math.PI/2,0,0);l.add(c),cs(l,e,{positions:[[-.22,.13,.33],[.22,.13,.33]],size:.14}),Ws(l,e,e.horns,{}),Xs(r,e,e.pattern),ii(i.root,e,{count:5,radius:.48,length:.42,width:.16,position:new pt(0,2.55,-.28),rotation:new Gt(-1.15,0,0)});const h=xl(i.root,e,"bird");h.forEach((d,f)=>{d.position.set(f?.7:-.7,2.45,0),d.rotation.z=f?.1:-.1}),i.wings=h;const u=[];for(const d of[-1,1]){const f=new we;f.position.set(d*.32,1.65,0),f.add(q(dt(.055,.08,.9,5),a,0,-.38,0));const g=q(ot(.12,.3,4),a,0,-.87,.1,1.4,0,0);f.add(g),i.root.add(f),u.push({leg:f,front:!0,side:d})}i.legs=u,i.tail=_l(i.root,e,"feather"),i.tail.position.set(0,1.75,-.55)}function Ev(i,e){const t=qe(e,"body"),n=qe(e,"belly"),s=qe(e,"accent",{emissiveIntensity:.1}),a=new we;a.position.set(0,3,.25),i.root.add(a),i.head=a,a.add(q(Ae(.4,1),t)),cs(a,e,{positions:[[-.2,.1,.31],[.2,.1,.31]],size:.14});for(const c of[-1,1]){const h=new we;h.position.set(c*.2,.28,.15),h.rotation.z=-.55*c,h.add(q(dt(.02,.03,.55,4),s,0,.28,0)),h.add(q(Ae(.07,0),s,0,.58,0)),a.add(h)}const r=q(Ae(.55,1),t,0,2.35,0);r.scale.set(.78,1.35,.8),i.root.add(r),i.body=r;for(let c=0;c<3;c++){const h=q(Ae(.36-c*.06,0),n,0,1.75-c*.4,-.1);h.scale.set(.82,.72,.7),i.root.add(h)}const o=q(Ae(.55,1),ie(e.mane,{roughness:1}),0,2.05,.1);o.scale.set(.95,1.2,.75),i.root.add(o),Xs(r,e,e.pattern);const l=xl(i.root,e,"moth");l.forEach((c,h)=>{c.position.set(h?.45:-.45,2.55,0),c.rotation.z=h?.15:-.15}),i.wings=l,i.legs=[],i.tail=null}function Tv(i,e){const t=qe(e,"body",{transparent:!0,opacity:.92,roughness:.42,emissiveIntensity:.28}),n=ie(e.glow,{emissive:e.glow,emissiveIntensity:1.3,flatShading:!1}),s=q(new on(1.05,20,14,0,Math.PI*2,0,Math.PI/2),t,0,3,0);s.scale.y=.9,i.root.add(s),i.body=s;const a=q(Ae(.45,1),qe(e,"belly",{emissiveIntensity:.5,transparent:!0,opacity:.55}),0,3.15,0);i.root.add(a);for(let l=0;l<5;l++){const c=l/5*Math.PI*2,h=new we;h.position.set(Math.cos(c)*.55,2.78,Math.sin(c)*.55);const u=q(dt(.05,.07,1.2,5),n,0,-.6,0);u.material=ie(e.belly,{emissive:e.glow,emissiveIntensity:.9,transparent:!0,opacity:.65});const d=q(dt(.025,.045,.9,5),u.material,.1,-1.5,.1,.2,0,.3);h.add(u,d),h.userData.phase=l,i.root.add(h),i.tentacles||(i.tentacles=[]),i.tentacles.push(h)}const r=q(new St(.9,.035,4,32),n,0,3.22,0,Math.PI/2,0,0);i.root.add(r);const o=new we;o.position.set(0,2.95,.85),i.root.add(o);for(const l of[-1,1]){const c=q(Ae(.12,1),ie("#ffffff",{emissive:"#ffffff",emissiveIntensity:.4,flatShading:!1}),l*.3,0,0),h=q(Ae(.05,1),ie("#1c2d44",{flatShading:!1}),l*.3,0,.1);o.add(c,h)}i.head=o,i.legs=[],i.tail=null}function Av(i,e){const t=qe(e,"body"),n=qe(e,"belly"),s=qe(e,"mane",{roughness:.72,emissiveIntensity:.08}),a=ie(e.glow,{emissive:e.glow,emissiveIntensity:2.2}),r=q(dt(.42,.7,2,7),t,0,1.6,0);i.root.add(r),i.body=r;const o=q(ot(.95,.7,8),n,0,1.05,0);o.rotation.x=Math.PI,i.root.add(o);const l=q(new on(1.35,14,8,0,Math.PI*2,0,Math.PI/2),s,0,2.65,0);l.scale.y=.72,i.root.add(l);for(let d=0;d<8;d++){const f=d/8*Math.PI*2,g=q(Ae(.13+d%2*.06,0),a,Math.cos(f)*.9,3.06+d%3*.04,Math.sin(f)*.9);g.scale.y=.25,i.root.add(g)}const c=new we;c.position.set(0,2.2,.55),i.root.add(c),i.head=c;const h=q(Ae(.38,1),t,0,0,0);h.scale.set(1,.9,.8),c.add(h),cs(c,e,{positions:[[-.18,.08,.27],[.18,.08,.27]],size:.1}),Ws(c,e,"crown",{});const u=[];for(const d of[-1,1]){const f=new we;f.position.set(d*.65,2,.1),f.rotation.z=d*.4,f.add(q(dt(.1,.16,.9,5),t,0,-.42,0)),f.add(q(Ae(.18,0),n,0,-.9,.05)),i.root.add(f),u.push(f)}i.arms=u,i.legs=[],i.tail=_l(i.root,e,"chain"),i.tail.position.set(0,1.25,-.7)}function Rv(i,e){const t=qe(e,"body");qe(e,"belly");const n=qe(e,"accent",{emissiveIntensity:.08}),s=ie(e.glow,{emissive:e.glow,emissiveIntensity:.9,flatShading:!1}),a=q(Ae(.95,1),t,0,1.65,-.2);a.scale.set(1.25,.58,1.65),i.root.add(a),i.body=a,Xs(a,e,e.pattern);const r=new we;r.position.set(0,1.6,1.05),i.root.add(r),i.head=r;const o=q(Ae(.48,0),t);o.scale.set(1.1,.72,1),r.add(o),cs(r,e,{positions:[[-.22,.18,.34],[.22,.18,.34]],size:.085});for(const d of[-1,1]){const f=q(ot(.09,.4,4),n,d*.2,-.12,.48,Math.PI/2,0,0);r.add(f)}const l=[];for(const d of[-1,1]){const f=new we;f.position.set(d*.85,1.65,.45),f.rotation.x=-.75,f.add(q(dt(.11,.17,.9,5),t,d*.3,-.05,.45,0,0,d*.7));const g=q(Ae(.35,0),n,d*.55,-.05,.95);g.scale.set(1.4,.8,1.8),f.add(g);const _=q(ot(.18,.55,4),n,d*.58,-.06,1.35,Math.PI/2,0,0);_.scale.set(.3,1,.8),f.add(_),i.root.add(f),l.push(f)}i.arms=l;const c=[];for(const d of[-1,1])for(let f=0;f<4;f++){const g=new we;g.position.set(d*.8,1.55,.5-f*.42),g.rotation.z=d*.75,g.add(q(dt(.05,.08,.95,4),t,0,-.4,0)),g.add(q(dt(.04,.06,.7,4),t,0,-.82,.16,.4,0,0)),i.root.add(g),c.push({leg:g,front:f<2,side:d})}i.legs=c;const h=new we;h.position.set(0,1.85,-1.35);let u=h;for(let d=0;d<5;d++){const f=new we;if(f.position.set(0,d===0?0:.18,d===0?0:-.42),f.rotation.x=d<3?.35:-1.1,f.add(q(Ae(.3-d*.035,0),t,0,0,0)),d===4){const g=q(ot(.16,.75,5),s,0,.45,.05,.3,0,0);f.add(g)}u.add(f),u=f}i.root.add(h),i.tail=h}function Cv(i,e){const t=ie(e.glow,{emissive:e.glow,emissiveIntensity:1.5,flatShading:!1}),n=qe(e,"body",{roughness:.42,emissiveIntensity:.12}),s=q(Ae(.85,2),n,0,3,0);i.root.add(s),i.body=s;const a=q(Ae(.6,2),qe(e,"belly",{emissiveIntensity:.45}),0,3,.38);a.scale.set(1,1,.5),i.root.add(a);const r=q(Ae(.26,2),ie("#161221",{flatShading:!1}),0,3,.77);r.scale.set(.48,1.2,.35),i.root.add(r);const o=q(Ae(.08,1),ie("#ffffff",{emissive:"#ffffff",emissiveIntensity:1.5}),-.12,3.16,.93);i.root.add(o);const l=[];for(let h=0;h<3;h++){const u=new we;u.position.y=3,u.rotation.set(Math.PI/2+h*.55,h*.8,h*.4),u.add(q(new St(1.15+h*.22,.028,4,36),t)),i.root.add(u),l.push(u)}i.rings=l;const c=[];for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=new we;d.position.set(Math.cos(u)*.65,2.55,Math.sin(u)*.5),d.add(gi(new pt(0,0,0),new pt(Math.cos(u)*.4,-1.1,Math.sin(u)*.4),.04,t)),d.userData.phase=h,i.root.add(d),c.push(d)}i.tentacles=c,i.head=s,i.legs=[],i.tail=null}function Pv(i,e){const t=qe(e,"body",{roughness:.62}),n=qe(e,"belly",{roughness:.55}),s=qe(e,"accent",{emissiveIntensity:.2}),a=ie(e.glow,{emissive:e.glow,emissiveIntensity:1.2,flatShading:!1}),r=q(Ae(.62,1),a,0,2.55,0);i.root.add(r),i.body=r;for(let u=0;u<7;u++){const d=u/7*Math.PI*2,f=q(Ae(.3+u%2*.18,0),u%2?t:n,Math.cos(d)*1.15,2.45+Math.sin(u*1.4)*.6,Math.sin(d)*1.15);f.scale.set(1.1,.8,.75),f.rotation.set(u,u*.7,u*.2),f.userData.orbit={a:d,r:1.15,y:f.position.y,speed:.2+u*.03},i.root.add(f),i.chunks||(i.chunks=[]),i.chunks.push(f)}const o=new we;o.position.set(0,3.45,0),i.root.add(o),i.head=o;const l=q(new St(.72,.035,4,30),s,0,.18,0,Math.PI/2,0,0);o.add(l);const c=q(Ae(.42,0),n,0,0,.08);c.scale.set(.9,.72,.7),o.add(c);for(const u of[-1,1]){const d=q(Ae(.075,1),a,u*.14,.02,.4);o.add(d)}Ws(o,e,"rings",{});const h=[];for(const u of[-1,1]){const d=new we;d.position.set(u*.95,2.75,0),d.rotation.z=u*.35,d.add(q(dt(.12,.2,1.05,6),t,0,-.5,0));const f=q(Ae(.3,0),t,0,-1.05,0);f.scale.set(.8,.6,1.1),d.add(f),i.root.add(d),h.push(d)}i.arms=h,i.legs=[],i.tail=null}function _i(i,e={}){const t=Te[i],n=t.art,s=new we,a=new we;s.add(a);const r=t.size/4*(e.scale||1);a.scale.setScalar(r);const o={root:a,limbs:[],wings:null,tail:null,legs:[]};switch(n.form){case"stag":case"hound":case"yak":case"lion":case"turtle":case"otter":case"toad":Yc(o,n,n.form);break;case"drake":bv(o,n);break;case"bird":wv(o,n);break;case"moth":Ev(o,n);break;case"jelly":Tv(o,n);break;case"mushroom":Av(o,n);break;case"scorpion":Rv(o,n);break;case"eye":Cv(o,n);break;case"golem":Pv(o,n);break;default:Yc(o,n,"stag")}e.aura!==!1&&(o.aura=Sv(s,n.glow,16,1.6,2));const l=["jelly","eye","golem","moth"].includes(n.form)?.35:0,c=0;return a.position.y=c,s.userData.species=i,s.userData.kind="creature",s.userData.height=t.size*.86,s.userData.parts=o,s.userData.floatOffset=l,s.userData.phase=Math.random()*Math.PI*2,s.userData.update=(h,u=!1)=>{const d=s.userData.phase,f=u?7.5:1.6,g=Math.sin(h*f+d)*(u?.06:.035);if(a.position.y=c+g+(l?Math.sin(h*1.1+d)*.12:0),a.rotation.z=u?Math.sin(h*f+d)*.025:Math.sin(h*.7+d)*.012,o.legs)for(const _ of o.legs)_.leg.rotation.x=u?Math.sin(h*8+(_.front?Math.PI:0)+(_.side>0?.4:0))*.45:Math.sin(h*1.6+d+_.side)*.035;if(o.arms)for(let _=0;_<o.arms.length;_++)o.arms[_].rotation.x=Math.sin(h*1.4+_*1.7+d)*.12;if(o.head&&(o.head.rotation.y=Math.sin(h*.7+d)*(u?.05:.16),o.head.rotation.x=Math.sin(h*.9+d)*.04),o.wings)for(let _=0;_<o.wings.length;_++){const m=_?1:-1,p=Math.sin(h*(u?8:2.2)+d)*.22;o.wings[_].rotation.z=m*(.12+p),o.wings[_].rotation.x=Math.sin(h*1.4+d)*.05}if(o.tail&&(o.tail.rotation.y=Math.sin(h*1.5+d)*.22,o.tail.rotation.x=Math.sin(h*1.1+d)*.06),o.tentacles)for(const _ of o.tentacles)_.rotation.x=Math.sin(h*1.3+_.userData.phase+d)*.18,_.rotation.z=Math.cos(h*1.1+_.userData.phase+d)*.14;if(o.rings)for(let _=0;_<o.rings.length;_++)o.rings[_].rotation.z+=.0025+_*.001,o.rings[_].rotation.y+=.0015;if(o.chunks)for(const _ of o.chunks){const m=_.userData.orbit,p=m.a+h*m.speed;_.position.x=Math.cos(p)*m.r,_.position.z=Math.sin(p)*m.r,_.position.y=m.y+Math.sin(h*.8+m.a)*.15,_.rotation.y+=.004}if(o.aura){const _=o.aura.geometry.attributes.position;for(let m=0;m<_.count;m++){const p=_.getY(m);_.setY(m,p+Math.sin(h*1.3+m+d)*.0025)}_.needsUpdate=!0,o.aura.material.opacity=.45+Math.sin(h*1.8+d)*.2}},s}function td(i,e,t="#ffe08a"){const n=document.createElement("canvas");n.width=640,n.height=192;const s=n.getContext("2d");s.clearRect(0,0,n.width,n.height);const a=s.createLinearGradient(0,30,0,160);a.addColorStop(0,"rgba(9, 13, 22, 0.82)"),a.addColorStop(1,"rgba(9, 13, 22, 0.24)"),s.fillStyle=a,Kc(s,20,24,600,130,26),s.fill(),s.strokeStyle=t,s.lineWidth=2,s.globalAlpha=.65,Kc(s,20,24,600,130,26),s.stroke(),s.globalAlpha=1,s.textAlign="center",s.fillStyle="#fff9e8",s.font="600 48px Georgia, serif",s.fillText(i,320,88),s.fillStyle=t,s.font="500 27px Inter, system-ui, sans-serif",s.fillText(e.toUpperCase(),320,128);const r=new rr(n);r.colorSpace=zt;const o=new ar({map:r,transparent:!0,depthTest:!0,depthWrite:!1}),l=new ll(o);return l.scale.set(4.2,1.26,1),l.userData.isNameplate=!0,l}function Kc(i,e,t,n,s,a){i.beginPath(),i.moveTo(e+a,t),i.arcTo(e+n,t,e+n,t+s,a),i.arcTo(e+n,t+s,e,t+s,a),i.arcTo(e,t+s,e,t,a),i.arcTo(e,t,e+n,t,a),i.closePath()}function yl(i={}){const e=new we,t=new we;e.add(t);const n=i.gender||"female",s=i.skin||"#e0a778",a=i.hairColor||"#56372a",r=i.outfit||"#e5b85f",o=i.hairStyle??2,l=ie(s,{roughness:.85}),c=ie(r,{roughness:.72}),h=ie(new Le(r).multiplyScalar(.62).getStyle(),{roughness:.8}),u=ie(a,{roughness:.68}),d=ie("#202431",{roughness:.78}),f=ie("#6b4c37",{roughness:.9}),g=ie("#f3d47a",{metalness:.45,roughness:.4,emissive:"#b78b30",emissiveIntensity:.18}),_=n==="male"?.46:.38,m=[];for(const H of[-1,1]){const k=new we;k.position.set(H*.17,.92,0);const K=q(dt(.12,.14,.6,6),d,0,-.3,0),te=q(dt(.13,.17,.32,6),f,0,-.72,0),be=q(Ae(.16,0),f,0,-.91,.08);be.scale.set(1,.55,1.5),k.add(K,te,be),t.add(k),m.push({leg:k,side:H})}const p=q(yv(.28,.52,8),c,0,1.4,0);p.scale.set(n==="male"?1.22:1.02,1,.76),t.add(p);const x=q(dt(.31,.31,.1,8),f,0,1.08,0);x.scale.z=.78,t.add(x);const b=q(Hn(.12,.09,.03),g,0,1.08,.26);t.add(b);const y=q(new St(.2,.055,4,12),h,0,1.74,0,Math.PI/2,0,0);y.scale.z=.75,t.add(y);const R=[];for(const H of[-1,1]){const k=new we;k.position.set(H*_,1.65,0),k.rotation.z=H*.08;const K=q(dt(.095,.12,.42,6),c,0,-.21,0),te=q(dt(.075,.095,.38,6),l,0,-.58,0),be=q(Ae(.09,0),l,0,-.82,0);k.add(K,te,be),t.add(k),R.push({arm:k,side:H})}const E=new we;E.position.set(0,1.98,0),t.add(E);const v=q(Ae(.235,1),l,0,0,0);v.scale.set(.95,1.06,.92),E.add(v);const w=q(ot(.045,.1,4),l,0,-.01,.22,Math.PI/2,0,0);E.add(w);const N=ie("#25212a",{roughness:.2,flatShading:!1});for(const H of[-1,1]){const k=q(Ae(.032,1),N,H*.082,.035,.205);k.castShadow=!1,E.add(k)}const P=q(Hn(.075,.012,.01),ie("#9b5d55"),0,-.095,.215);E.add(P);const L=new we;E.add(L);const I=q(new on(.247,10,6,0,Math.PI*2,0,Math.PI*.58),u,0,.035,-.015);if(I.rotation.x=-.08,L.add(I),o===1)for(let H=0;H<5;H++){const k=q(ot(.08,.26,4),u,-.16+H*.08,.18,.08-H%2*.05,-.4-H%2*.2,0,.2*(H-2));L.add(k)}else if(o===2){const H=q(Ae(.22,0),u,0,-.04,-.17);if(H.scale.set(.9,1.8,.55),L.add(H),n==="female"){const k=q(Ae(.12,0),u,.15,-.22,-.25);k.scale.set(.7,2.2,.55),L.add(k)}}else if(o===3)for(const H of[-1,1]){const k=new we;k.position.set(H*.17,-.12,-.12);for(let K=0;K<4;K++)k.add(q(Ae(.075-K*.008,0),u,0,-K*.12,-.01));L.add(k)}else if(o===4){for(let k=0;k<7;k++){const K=k/7*Math.PI*2,te=q(Ae(.11,0),u,Math.cos(K)*.18,.1+k%2*.04,Math.sin(K)*.15);L.add(te)}const H=q(Ae(.18,1),u,0,.1,-.18);L.add(H)}else if(o===5){const H=q(Ae(.13,0),u,0,.26,-.1);L.add(H);const k=q(new St(.08,.022,3,10),g,0,.2,-.08,Math.PI/2,0,0);L.add(k)}const F=new we;F.position.set(0,1.72,-.02);const T=q(new St(.21,.07,4,12),ie("#b84d4f",{roughness:.8}),0,0,0,Math.PI/2,0,0);T.scale.z=.8,F.add(T);const A=q(Hn(.14,.5,.03),ie("#b84d4f",{roughness:.8}),.15,-.25,-.06,0,0,.18);F.add(A),t.add(F);const G=q(Ae(.28,1),f,0,1.42,-.31);G.scale.set(.84,1.15,.55),t.add(G);const O=q(new St(.3,.025,4,12,Math.PI),d,0,1.6,-.22,0,.15,0);return O.scale.z=.5,t.add(O),e.userData.kind="trainer",e.userData.gender=n,e.userData.update=(H,k=!1)=>{const K=k?8:1.5;t.position.y=Math.abs(Math.sin(H*K))*(k?.045:.008),m.forEach(({leg:te,side:be})=>{te.rotation.x=Math.sin(H*K+(be>0?Math.PI:0))*(k?.65:.02)}),R.forEach(({arm:te,side:be})=>{te.rotation.x=Math.sin(H*K+(be>0?0:Math.PI))*(k?.5:.04)}),A.rotation.x=Math.sin(H*2.2)*.15+(k?.4:0),E.rotation.y=Math.sin(H*.6)*.06},e}function nd(i="#ffe9a8"){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,i),n.addColorStop(.25,i),n.addColorStop(.6,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new rr(e);return s.colorSpace=zt,s}function $s(i,e=2){const t=new ar({map:nd(i),transparent:!0,blending:Vn,depthWrite:!1}),n=new ll(t);return n.scale.set(e,e,1),n}function Lv(i){i.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n.map&&n.map.dispose(),n.dispose()}})}function qs(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function dr(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function As(i,e,t){return Math.min(t,Math.max(e,i))}function Zr(i){return i*i*(3-2*i)}function Iv(i){const e=qs(i.id)%997;return function(n,s){const a=Math.hypot(n,s);let r=Math.sin(n*.072+e)*.72+Math.cos(s*.085-e*.3)*.64;r+=Math.sin((n+s)*.043+e*.7)*.85,r+=Math.cos((n-s)*.12)*.24;const o=Zr(As((Math.abs(n)-2.2)/8,0,1)),l=Zr(As((Math.hypot(n,s+38)-8)/10,0,1)),c=Zr(As((Math.hypot(n,s-15)-6)/12,0,1));return r*=o*l*c,a>56&&(r-=(a-56)*(a-56)*.045),r}}const Hi=15,za=-38,ka=58;function id(i,e,t){const n=new on(320,32,18),s=new jt({side:Ht,uniforms:{top:{value:new Le(e.skyTop)},bottom:{value:new Le(e.skyBottom)},sunColor:{value:new Le(e.sun)}},vertexShader:"varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      varying vec3 vPos;
      uniform vec3 top; uniform vec3 bottom; uniform vec3 sunColor;
      void main(){
        float h = normalize(vPos).y;
        float t = smoothstep(-0.12, 0.62, h);
        vec3 col = mix(bottom, top, t);
        float glow = pow(max(0., 1. - length(normalize(vPos) - normalize(vec3(0.45,0.28,-0.85)))), 9.0);
        col = mix(col, sunColor, glow * 0.55);
        gl_FragColor = vec4(col, 1.0);
      }`}),a=new re(n,s);a.frustumCulled=!1,i.add(a);const r=new ll(new ar({map:nd(e.sun),transparent:!0,blending:Vn,depthWrite:!1,opacity:.9}));r.position.set(130,90,-210),r.scale.set(110,110,1),i.add(r);const o=[];if(["storm","celestial","frost","sunken"].includes(t)){const c=new Float32Array(2100);for(let d=0;d<700;d++){const f=Math.random()*Math.PI*2,g=Math.acos(Math.random()*.8+.15),_=270;c[d*3]=Math.sin(g)*Math.cos(f)*_,c[d*3+1]=Math.cos(g)*_+40,c[d*3+2]=Math.sin(g)*Math.sin(f)*_}const h=new mt;h.setAttribute("position",new an(c,3));const u=new ks(h,new as({color:"#fff6d8",size:.8,transparent:!0,opacity:.75,depthWrite:!1}));i.add(u),o.push(u)}return{sky:a,sun:r,stars:o}}function Dv(i,e,t){const n=new we,s=new ss({color:e.fog,transparent:!0,opacity:.14,depthWrite:!1,side:Tt}),a=dr(qs(t+"clouds"));for(let r=0;r<18;r++){const o=new on(7+a()*9,8,5),l=new re(o,s);l.position.set((a()-.5)*260,24+a()*32,(a()-.5)*260),l.scale.y=.24,n.add(l)}return i.add(n),n}function Nv(i,e){const s=new rs(140,140,118,118);s.rotateX(-Math.PI/2);const a=s.attributes.position,r=[],o=new Le(i.palette.ground),l=new Le(i.palette.ground2),c=new Le(i.palette.rock),h=new Le(i.palette.accent),u=new Le;for(let g=0;g<a.count;g++){const _=a.getX(g),m=a.getZ(g),p=Math.hypot(_,m);let x=e(_,m);p>ka&&(x-=Math.pow((p-ka)*.25,1.35)),a.setY(g,x);const b=(Math.sin(_*.21+m*.17)+Math.cos(_*.13-m*.25))*.5,y=As(.5+b*.8+Math.max(0,x)*.09,0,1);u.copy(o).lerp(l,y),x>1.55&&u.lerp(c,As((x-1.55)*.35,0,.65)),p>ka-3&&u.lerp(c,.55),Uv(i,_,m)&&u.lerp(h,.18),r.push(u.r,u.g,u.b)}s.setAttribute("color",new Ke(r,3)),s.computeVertexNormals();const d=new Hs({vertexColors:!0,roughness:.96,metalness:.02,flatShading:!0}),f=new re(s,d);return f.receiveShadow=!0,f.castShadow=!1,f}function Uv(i,e,t){return i.type==="ember"&&Math.abs(Math.sin(t*.18)+Math.cos(e*.17))>1.73}function Fv(i,e,t){const n=new Hs({color:e.water,transparent:!0,opacity:t.type==="tide"?.55:.25,roughness:.2,metalness:.2,emissive:e.water,emissiveIntensity:.12}),s=new re(new Gs(220,64),n);return s.rotation.x=-Math.PI/2,s.position.y=t.type==="tide"?-.75:-7.5,s.receiveShadow=!0,i.add(s),s}function ur(i){const e=i.palette;return{wood:ie("#56412f",{roughness:.95}),darkWood:ie("#3c3028",{roughness:.95}),leaf:ie(e.ground2,{roughness:.92}),leaf2:ie(e.accent,{roughness:.8,emissive:e.accent,emissiveIntensity:.04}),rock:ie(e.rock,{roughness:.88}),rockLight:ie(new Le(e.rock).lerp(new Le("#ffffff"),.15).getStyle(),{roughness:.9}),crystal:ie(e.accent,{emissive:e.glow,emissiveIntensity:1.35,roughness:.24,metalness:.22}),snow:ie("#e9f7f4",{roughness:.85}),glow:ie(e.glow,{emissive:e.glow,emissiveIntensity:2.2,roughness:.2}),metal:ie("#4b4d57",{metalness:.45,roughness:.5}),bone:ie("#d7c8a4",{roughness:.9})}}function sd(i,e,t,n=1){const s=new re(new lt(.25*n,.42*n,2.4*n,7),ie("#d6c3a1",{roughness:.9}));s.position.y=1.2*n,s.castShadow=!0,i.add(s);const a=new re(new on(1.4*n,10,6,0,Math.PI*2,0,Math.PI/2),ie(e()>.55?"#d96a5b":"#a66fd1",{roughness:.72}));a.position.y=2.4*n,a.scale.y=.5,a.castShadow=!0,i.add(a);for(let r=0;r<5;r++){const o=e()*Math.PI*2,l=new re(new rn(.12*n,0),ie("#ffefcf",{emissive:"#ffc777",emissiveIntensity:.3}));l.position.set(Math.cos(o)*.8*n,2.46*n,Math.sin(o)*.8*n),l.scale.y=.25,i.add(l)}return i}function Jr(i,e,t,n){const s=3.5+e()*5,a=new re(new lt(.28,.62,s,6),t.wood);if(a.position.y=s/2,a.rotation.z=(e()-.5)*.12,a.castShadow=!0,i.add(a),n==="pine"||n==="dead"){for(let r=0;r<4;r++){const o=new re(new Sn(1.7-r*.27,2.2,7),n==="dead"?t.darkWood:t.leaf);o.position.y=s*.42+r*1.25,o.rotation.y=e()*2,o.castShadow=!0,i.add(o)}if(n==="dead")for(let r=0;r<4;r++){const o=e()*Math.PI*2,l=new re(new lt(.08,.14,1.7,4),t.darkWood);l.position.set(Math.cos(o)*.8,s*.55+r*.8,Math.sin(o)*.8),l.rotation.z=Math.cos(o)*.9,l.rotation.x=Math.sin(o)*.9,i.add(l)}}else{const r=new re(new rn(1.8+e()*1.2,1),t.leaf);r.position.y=s,r.scale.set(1.1,.7,1),r.castShadow=!0,i.add(r);const o=new re(new rn(1.3,1),t.leaf2);if(o.position.set(.8,s+.75,.3),o.scale.set(1,.6,.8),o.castShadow=!0,i.add(o),e()>.5){const l=new re(new rn(.14,0),t.glow);l.position.set(-.7,s-.3,.9),i.add(l)}}return i}function Ga(i,e,t,n=1){for(let s=0;s<5;s++){const a=(1.1+e()*2.4)*n,r=new re(new Sn((.18+e()*.22)*n,a,5),t.crystal);r.position.set((e()-.5)*1.8*n,a/2,(e()-.5)*1.8*n),r.rotation.z=(e()-.5)*.45,r.rotation.x=(e()-.5)*.35,r.castShadow=!0,i.add(r)}return i}function ad(i,e,t,n=1){const s=4+e()*5,a=new re(new lt(.85*n,1*n,.5,8),t.rock);a.position.y=.25,a.castShadow=!0;const r=new re(new lt(.58*n,.7*n,s,8),t.rockLight);r.position.y=s/2+.4,r.rotation.z=(e()-.5)*.13,r.castShadow=!0;const o=new re(new Ln(1.7*n,.3,1.7*n),t.rock);return o.position.y=s+.45,o.rotation.y=e()*Math.PI,i.add(a,r,o),i}function qo(i,e,t,n=1){const s=2+e()*5,a=new re(new Sn(.5*n,s,4),t.rock);if(a.position.y=s/2,a.rotation.y=e()*3,a.rotation.z=(e()-.5)*.22,a.castShadow=!0,i.add(a),e()>.5){const r=new re(new Sn(.12*n,s*.45,4),t.glow);r.position.set(.1,s*.4,.22),i.add(r)}return i}function Ov(i,e,t,n=1){for(let s=0;s<5;s++){const a=(1.2+e()*3.4)*n,r=new re(new lt(.08*n,.24*n,a,5),e()>.5?t.crystal:ie("#ef8c9b",{roughness:.75}));r.position.set((e()-.5)*1.5,a/2,(e()-.5)*1.5),r.rotation.z=(e()-.5)*.7,r.rotation.x=(e()-.5)*.7,r.castShadow=!0,i.add(r)}return i}const Qr=new Map;function Bv(i,e){const t=`${i.toFixed(2)}-${e.toFixed(2)}`;if(Qr.has(t))return Qr.get(t);const n=new Ds;n.moveTo(0,0),n.bezierCurveTo(-e,i*.18,-e*.92,i*.7,0,i),n.bezierCurveTo(e*.92,i*.7,e,i*.18,0,0);const s=new ji(n,6);return Qr.set(t,s),s}function zv(i,e,t,n=1,s){const a=new re(new lt(.035*n,.075*n,1.2*n,5),t.wood);a.position.y=.6*n,a.rotation.z=(e()-.5)*.2,i.add(a);const r=ie(s,{roughness:.78,side:Tt}),o=5+Math.floor(e()*3);for(let l=0;l<o;l++){const c=(.55+e()*.6)*n,h=c*(.34+e()*.14),u=new re(Bv(c,h),r),d=l/o*Math.PI*2+e()*.5;u.position.set(Math.cos(d)*.13*n,.65*n+e()*.4*n,Math.sin(d)*.13*n),u.rotation.set(-.25+e()*1,d+Math.PI/2,(e()-.5)*.8),u.castShadow=!0,i.add(u)}if(e()>.58){const l=ie(e()>.45?"#f7b2a4":"#f6df9a",{roughness:.62,emissive:"#ffdca8",emissiveIntensity:.06});for(let h=0;h<5;h++){const u=h/5*Math.PI*2,d=new re(new on(.1*n,7,5),l);d.position.set(Math.cos(u)*.12*n,1.22*n,Math.sin(u)*.12*n),d.scale.set(1,.4,.65),i.add(d)}const c=new re(new on(.07*n,6,5),ie("#f6d36d",{emissive:"#ffd264",emissiveIntensity:.18,roughness:.5}));c.position.y=1.24*n,i.add(c)}return i}function kv(i,e,t,n){const s=ie(n,{roughness:.9,side:Tt});for(let a=0;a<5;a++){const r=new re(new Sn(.055,.5+e()*.6,3),s);r.position.set((e()-.5)*.7,.3,(e()-.5)*.7),r.rotation.z=(e()-.5)*.5,i.add(r)}return i}function Zc(i,e,t,n=1){const s=new re(new rn((.6+e()*1)*n,0),e()>.5?t.rock:t.rockLight);return s.position.y=.4*n,s.scale.set(1,.65+e()*.4,1),s.rotation.set(e()*2,e()*2,e()*2),s.castShadow=!0,s.receiveShadow=!0,i.add(s),i}function Gv(i,e,t,n,s=9){const a=new we,r=new re(new rn(1+e()*2.2,0),t.rock);r.scale.y=.7,r.castShadow=!0,a.add(r);const o=new re(new Sn(.3,2.2,5),t.crystal);return o.position.y=1.2,a.add(o),a.position.set((e()-.5)*90,s+e()*12,(e()-.5)*90),a.userData.baseY=a.position.y,a.userData.phase=e()*10,i.add(a),a}function Hv(i,e,t,n){const s=document.createElement("canvas");s.width=256,s.height=512;const a=s.getContext("2d");a.fillStyle=n,a.fillRect(0,0,256,512);const r=a.createLinearGradient(0,0,0,512);r.addColorStop(0,t+"99"),r.addColorStop(1,t+"08"),a.fillStyle=r,a.fillRect(0,0,256,512),a.strokeStyle=t,a.lineWidth=5,a.globalAlpha=.7,a.strokeRect(16,16,224,480),a.globalAlpha=1,a.fillStyle=t,a.font="700 120px Georgia, serif",a.textAlign="center",a.fillText(e,128,180),a.fillStyle="#fff6db",a.font="600 32px Georgia, serif",i.toUpperCase().split(" ").forEach((c,h)=>a.fillText(c,128,300+h*42));const l=new rr(s);return l.colorSpace=zt,new Hs({map:l,side:Tt,roughness:.9,transparent:!0})}function Vv(i,e,t){const n=new we,s=0,a=za,r=t(s,a);n.position.set(s,r,a);const o=i.palette,l=tt[i.type],c=ur(i),h=new re(new lt(10.5,11.4,1.1,22),c.rockLight);h.position.y=.3,h.receiveShadow=!0,h.castShadow=!0,n.add(h);const u=new re(new lt(8.2,8.2,.1,22),ie(o.accent,{emissive:o.glow,emissiveIntensity:.28,roughness:.4}));u.position.y=.9,n.add(u);const d=c.rockLight;for(const v of[-1,1]){const w=new re(new lt(1.15,1.45,7.5,8),d);w.position.set(v*6.4,4.6,0),w.castShadow=!0,n.add(w);const N=new re(new lt(1.55,1.7,.7,8),c.rock);N.position.set(v*6.4,1.15,0),n.add(N);const P=new re(new Ln(2.6,.45,2.2),c.rock);P.position.set(v*6.4,8.15,0),n.add(P)}const f=new re(new Ln(15.5,.9,2.2),c.rock);f.position.y=8.55,f.castShadow=!0,n.add(f);const g=new re(new St(1.35,.15,6,24),c.glow);g.position.set(0,8.55,.3),n.add(g);const _=Hv(i.name,l.sigil,l.color,l.dark);for(const v of[-1,1]){const w=new re(new rs(2.1,4.6),_);w.position.set(v*4.3,5.2,1.18),w.rotation.y=v*.04,n.add(w)}const m=new re(new lt(1.1,1.4,1.5,8),c.rock);m.position.set(0,1.4,-3.2),n.add(m);const p=new re(new $i(.58,0),c.crystal);p.position.set(0,2.55,-3.2),p.castShadow=!0,n.add(p);const x=new Wn(o.accent,8,24,2);x.position.set(0,6,3),n.add(x);const b={verdant:{gender:"female",skin:"#c68654",hairColor:"#56372a",outfit:"#4fc2a2",hairStyle:3},ember:{gender:"male",skin:"#9b5f3b",hairColor:"#241d1b",outfit:"#d76b6b",hairStyle:1},tide:{gender:"female",skin:"#e0a778",hairColor:"#3d7a72",outfit:"#4fc2a2",hairStyle:4},frost:{gender:"male",skin:"#f2c6a0",hairColor:"#b9c1c8",outfit:"#5f6a7d",hairStyle:2},sunken:{gender:"female",skin:"#6c402d",hairColor:"#7c4dc4",outfit:"#a57ae0",hairStyle:2},storm:{gender:"female",skin:"#c68654",hairColor:"#d8b869",outfit:"#e5b85f",hairStyle:5},cinder:{gender:"male",skin:"#6c402d",hairColor:"#241d1b",outfit:"#cf7f48",hairStyle:0},celestial:{gender:"female",skin:"#f2c6a0",hairColor:"#b9c1c8",outfit:"#e6e0cf",hairStyle:2}}[i.id]||{},y=yl(b);y.position.set(0,1,2.1),y.rotation.y=Math.PI,n.add(y);const R=$s(l.color,3.6);R.position.set(0,3.4,2.1),R.material.opacity=.22,n.add(R);const E=new re(new St(1.15,.05,5,32),c.glow);return E.rotation.x=Math.PI/2,E.position.set(0,1,2.1),n.add(E),e.add(n),{group:n,leader:y,sigilStone:p,leaderGlow:R,marker:E,pos:new U(s,r,a),interactPos:new U(s,r+1,a+4.5),update(v){p.rotation.y=v*.8,p.position.y=2.55+Math.sin(v*1.7)*.12,R.material.opacity=.16+Math.sin(v*1.4)*.06,E.scale.setScalar(1+Math.sin(v*2.4)*.04),y.userData.update?.(v,!1)}}}function Wv(i,e,t){const n=new we,s=0,a=Hi,r=t(s,a);n.position.set(s,r,a);const o=i.palette,l=ur(i),c=new re(new lt(3.4,3.8,.42,8),l.rock);c.position.y=.2,c.receiveShadow=!0,n.add(c);const h=new re(new St(2.8,.055,5,48),l.glow);h.rotation.x=Math.PI/2,h.position.y=.44,n.add(h);for(let _=0;_<4;_++){const m=_/4*Math.PI*2+Math.PI/4,p=new re(new lt(.18,.3,2.8,6),l.rock);p.position.set(Math.cos(m)*2.25,1.6,Math.sin(m)*2.25),p.rotation.z=Math.cos(m)*.12,n.add(p);const x=new re(new $i(.22,0),l.crystal);x.position.set(Math.cos(m)*2.25,3.1,Math.sin(m)*2.25),n.add(x)}const u=new re(new $i(.9,0),l.crystal);u.position.y=2.25,u.castShadow=!0,n.add(u);const d=new re(new $i(1.3,0),new ss({color:o.glow,transparent:!0,opacity:.12,side:Ht}));d.position.y=2.25,n.add(d);const f=new Wn(o.accent,5,18,2);f.position.y=2.4,n.add(f);const g=td("WAYSTONE","Travel the isles","#d9e6ff");return g.position.set(0,4.8,0),g.scale.set(3.6,1.08,1),n.add(g),e.add(n),{group:n,stone:u,inner:d,ringGlow:h,label:g,pos:new U(s,r,a),interactPos:new U(s,r+.5,a+2.8),update(_){u.rotation.y=_*.55,u.position.y=2.25+Math.sin(_*1.4)*.18,d.rotation.y=-_*.3,d.scale.setScalar(1+Math.sin(_*2.2)*.04),h.rotation.z=_*.2}}}function Xv(i,e,t,n,s,a,r){const o=new we,l=a(n,s);o.position.set(n,l,s);const c=_i(e,{aura:!0});c.rotation.y=Math.PI*.5+(r()-.5)*.8,o.add(c);const h=tt[Te[e].type],u=td(Te[e].name,`${h.name} · Lv ${t}`,h.color);u.position.set(0,Te[e].size*.95+1.1,0),o.add(u);const d=new ss({color:h.color,transparent:!0,opacity:.35,side:Tt}),f=new re(new Qi(1.7,1.78,48),d);f.rotation.x=-Math.PI/2,f.position.y=.08,o.add(f);const g=new Wn(h.color,1.6,9,2);return g.position.y=1.4,o.add(g),{root:o,model:c,plate:u,ring:f,ringMat:d,light:g,speciesId:e,level:t,x:n,z:s,y:l,active:!0,respawnAt:0}}function $v(i,e,t,n,s,a="plant"){const r=new we,o=n(e,t);r.position.set(e,o,t);const l=ie(i.palette.glow,{emissive:i.palette.glow,emissiveIntensity:2.5,roughness:.2}),c=ie(i.palette.accent,{emissive:i.palette.accent,emissiveIntensity:.5,roughness:.6});if(a==="crystal")for(let d=0;d<3;d++){const f=new re(new Sn(.14,.6+d*.18,5),l);f.position.set((s()-.5)*.5,.3+d*.08,(s()-.5)*.5),f.rotation.z=(s()-.5)*.5,r.add(f)}else{const d=new re(new lt(.028,.045,.75,4),c);d.position.y=.38,r.add(d);for(let g=0;g<5;g++){const _=g/5*Math.PI*2,m=new re(new on(.18,6,4),l);m.position.set(Math.cos(_)*.2,.78,Math.sin(_)*.2),m.scale.set(1,.35,.55),r.add(m)}const f=new re(new rn(.1,0),ie("#fff9dd",{emissive:"#ffefb0",emissiveIntensity:2}));f.position.y=.82,r.add(f)}const h=$s(i.palette.glow,2.1);h.position.y=.62,h.material.opacity=.36,r.add(h);const u=new Wn(i.palette.accent,1.3,7,2);return u.position.y=.7,r.add(u),{group:r,halo:h,light:u,seed:s()*10,active:!0,respawnAt:0}}function rd(i,e,t){const n=dr(qs(e.id+t)),s=t==="snow"?420:t==="rain"?360:180,a=new Float32Array(s*3),r=new Float32Array(s*3),o=new Float32Array(s*3),l=new Le(e.palette.glow),c=new Le(e.palette.accent);for(let g=0;g<s;g++){a[g*3]=(n()-.5)*110,a[g*3+1]=n()*30,a[g*3+2]=(n()-.5)*110,r[g*3]=(n()-.5)*.4,r[g*3+1]=t==="snow"?-1.2-n():t==="rain"?-6-n()*3:.2+n()*.6,r[g*3+2]=(n()-.5)*.4;const _=n()>.5?l:c;o[g*3]=_.r,o[g*3+1]=_.g,o[g*3+2]=_.b}const h=new mt;h.setAttribute("position",new an(a,3)),h.setAttribute("color",new an(o,3));const u=t==="snow"?.12:t==="rain"?.055:t==="spore"?.13:.08,d=new as({size:u,transparent:!0,opacity:t==="rain"?.45:.7,depthWrite:!1,blending:t==="rain"?Wi:Vn,vertexColors:!0}),f=new ks(h,d);return f.frustumCulled=!1,i.add(f),{points:f,positions:a,velocity:r,count:s,type:t,update(g,_){for(let m=0;m<s;m++){const p=m*3;a[p]+=r[p]*g+Math.sin(_*.6+m)*.02*g,a[p+1]+=r[p+1]*g,a[p+2]+=r[p+2]*g,a[p+1]>32&&(a[p+1]=-1),a[p+1]<-1&&(a[p+1]=32),a[p]>58&&(a[p]=-58),a[p]<-58&&(a[p]=58),a[p+2]>58&&(a[p+2]=-58),a[p+2]<-58&&(a[p+2]=58)}h.attributes.position.needsUpdate=!0}}}function qv(i){const e=tr(i),t=new Ki;t.fog=new is(e.palette.fog,.014);const n=Iv(e),s=dr(qs(e.id+"world")),a=id(t,e.palette,e.id),r=Dv(t,e.palette,e.id),o=Fv(t,e.palette,e),l=Nv(e,n);t.add(l);const c=new lr(e.palette.skyBottom,e.palette.ground,1.55);t.add(c);const h=new ri(e.palette.sun,2.8);h.position.set(32,52,18),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.left=-42,h.shadow.camera.right=42,h.shadow.camera.top=42,h.shadow.camera.bottom=-42,h.shadow.camera.near=1,h.shadow.camera.far=130,h.shadow.bias=-4e-4,t.add(h);const u=new ri(e.palette.accent,1.2);u.position.set(-40,24,-45),t.add(u);const d=ur(e),f=new we;t.add(f);const g=(F,T)=>Math.hypot(F,T+za)<14||Math.hypot(F,T-Hi)<8||Math.abs(F)<4.2&&T>za-2&&T<Hi+4,_=[e.palette.accent,e.palette.ground2,new Le(e.palette.ground).lerp(new Le("#ffffff"),.32).getStyle()];for(let F=0;F<140;F++){const T=s()*Math.PI*2,A=7+s()*49,G=Math.cos(T)*A,O=Math.sin(T)*A;if(g(G,O))continue;const H=new we;kv(H,s,d,_[Math.floor(s()*_.length)]),H.position.set(G,n(G,O),O),H.rotation.y=s()*Math.PI,f.add(H)}const m=e.type==="ember"||e.type==="stone"?[e.palette.accent,e.palette.ground2,"#d69a61","#bd6149","#e8c17d"]:e.type==="frost"||e.type==="storm"?[e.palette.ground2,e.palette.accent,"#b7ded4","#89b8ae","#ecf5e8"]:[e.palette.accent,e.palette.ground2,"#83bd6e","#d29a7a","#e0aaa9","#a6cf9b"];for(let F=0;F<92;F++){const T=s()*Math.PI*2,A=7+s()*50,G=Math.cos(T)*A,O=Math.sin(T)*A;if(g(G,O))continue;const H=new we;zv(H,s,d,.65+s()*.95,m[Math.floor(s()*m.length)]),H.position.set(G,n(G,O),O),H.rotation.y=s()*Math.PI*2,f.add(H)}for(let F=0;F<66;F++){const T=s()*Math.PI*2,A=12+s()*43,G=Math.cos(T)*A,O=Math.sin(T)*A;if(g(G,O))continue;const H=new we,k=e.id;k==="verdant"||k==="sunken"?s()>.48?sd(H,s,d,.8+s()*.9):Jr(H,s,d,"tree"):k==="ember"||k==="cinder"?s()>.5?qo(H,s,d,.65+s()*.75):Jr(H,s,d,"dead"):k==="tide"?s()>.55?Ov(H,s,d,.7+s()*.9):Zc(H,s,d,.8+s()*1.2):k==="frost"?s()>.4?Jr(H,s,d,"pine"):Ga(H,s,d,.65+s()*.75):k==="storm"?s()>.55?qo(H,s,d,.7+s()*.8):Ga(H,s,d,.55+s()*.7):k==="celestial"&&(s()>.5?ad(H,s,d,.7+s()*.8):Ga(H,s,d,.55+s()*.7)),H.position.set(G,n(G,O),O),H.rotation.y=s()*Math.PI*2,f.add(H)}for(let F=0;F<48;F++){const T=s()*Math.PI*2,A=10+s()*48,G=Math.cos(T)*A,O=Math.sin(T)*A;if(g(G,O))continue;const H=new we;Zc(H,s,d,.6+s()*1.8),H.position.set(G,n(G,O),O),H.rotation.y=s()*Math.PI,f.add(H)}for(let F=0;F<30;F++){const T=F/30*Math.PI*2+s()*.1,A=ka+2+s()*3,G=new we,O=new re(new rn(5+s()*5,0),d.rock);O.scale.set(1.4,2.8+s(),1.4),O.position.y=-2-s()*3,O.rotation.set(s(),s(),s()),O.castShadow=!0,G.add(O),G.position.set(Math.cos(T)*A,n(Math.cos(T)*A,Math.sin(T)*A),Math.sin(T)*A),f.add(G)}for(let F=0;F<20;F++){const T=Hi-4-F*2.15;if(T<za+9)break;const A=Math.sin(F*.7)*1.2,G=n(A,T),O=new re(new lt(1+s()*.22,1.08+s()*.2,.16,7),d.rockLight);O.position.set(A,G+.03,T),O.rotation.y=s()*3,O.receiveShadow=!0,f.add(O)}const p=Vv(e,t,n),x=Wv(e,t,n),b=[],y=[[16,-2],[-17,5],[25,-18],[-26,-22],[9,-28],[-8,-13],[33,12],[-38,20]],R=(e.danger>=6,5);for(let F=0;F<R;F++){const[T,A]=y[F],G=3.2,O=T+(s()-.5)*G,H=A+(s()-.5)*G,k=e.creatures[F%e.creatures.length],K=e.levelRange[0]+Math.floor(s()*(e.levelRange[1]-e.levelRange[0]+1)),te=Xv(e,k,K,O,H,n,s);t.add(te.root),b.push(te)}const E=[];for(let F=0;F<7;F++){const T=F/7*Math.PI*2+s()*.5,A=14+s()*32,G=Math.cos(T)*A,O=Math.sin(T)*A,H=s()>.55?"crystal":"plant",k=$v(e,G,O,n,s,H);t.add(k.group),E.push(k)}const v={verdant:"firefly",ember:"ember",tide:"bubble",frost:"snow",sunken:"spore",storm:"rain",cinder:"ash",celestial:"star"}[e.id]||"firefly",w=rd(t,e,v),N=[];if(["storm","celestial"].includes(e.id))for(let F=0;F<5;F++)N.push(Gv(t,s,d,e.palette,8+F*2));const P=[];if(e.id==="verdant"||e.id==="sunken")for(let F=0;F<24;F++){const T=$s(e.palette.glow,.35);T.position.set((s()-.5)*80,1+s()*6,(s()-.5)*80),T.userData.baseY=T.position.y,T.userData.phase=s()*10,t.add(T),P.push(T)}for(const F of E){const T=new Wn(e.palette.accent,1.2,6,2);T.position.copy(F.group.position).add(new U(0,.9,0)),t.add(T)}const L=new U(0,n(0,Hi+3.4),Hi+3.4);return{region:e,scene:t,camera:null,heightAt:n,gym:p,waystone:x,wilds:b,resources:E,particles:w,spawn:L,floaters:N,fireflies:P,sun:h,terrain:l,sea:o,update(F,T){w.update(F,T),p.update(T),x.update(T);for(const A of b)A.active&&(A.model.userData.update?.(T,!1),A.plate.position.y=Te[A.speciesId].size*.95+1.1+Math.sin(T*1.2+A.x)*.04,A.ringMat.opacity=.26+Math.sin(T*2+A.x)*.08,A.ring.rotation.z=T*.12);for(const A of E)A.active&&(A.group.rotation.y=T*.25+A.seed,A.group.position.y=n(A.group.position.x,A.group.position.z)+.05+Math.sin(T*1.5+A.seed)*.08,A.halo.material.opacity=.25+Math.sin(T*2+A.seed)*.12);for(const A of P)A.position.y=A.userData.baseY+Math.sin(T*.8+A.userData.phase)*.7,A.position.x+=Math.sin(T*.3+A.userData.phase)*.004,A.material.opacity=.35+Math.sin(T*1.4+A.userData.phase)*.25;for(const A of N)A.position.y=A.userData.baseY+Math.sin(T*.45+A.userData.phase)*1.1,A.rotation.y=T*.06+A.userData.phase;for(const A of E)!A.active&&A.respawnAt&&performance.now()>A.respawnAt&&(A.active=!0,A.group.visible=!0,A.respawnAt=0);for(const A of b)!A.active&&A.respawnAt&&performance.now()>A.respawnAt&&(A.active=!0,A.root.visible=!0,A.respawnAt=0);a.sun.position.x=130+Math.sin(T*.01)*4,r.rotation.y=T*.002},dispose(){Lv(t)}}}function Yv(i){const e=new Ki;e.fog=new is(i.palette.fog,.022),id(e,i.palette,i.id);const t=new lr(i.palette.skyBottom,i.palette.ground,1.25);e.add(t);const n=new ri(i.palette.sun,2.45);n.position.set(-10,22,14),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-22,n.shadow.camera.right=22,n.shadow.camera.top=22,n.shadow.camera.bottom=-22,n.shadow.camera.far=80,n.shadow.bias=-3e-4,e.add(n);const s=new ri(i.palette.accent,1.55);s.position.set(12,9,-18),e.add(s);const a=ur(i),r=new re(new lt(22,23.5,1.2,36),a.rock);r.position.y=-.6,r.receiveShadow=!0,e.add(r);const o=new re(new Qi(13.5,18,48),ie(i.palette.accent,{emissive:i.palette.glow,emissiveIntensity:.28,roughness:.5,side:Tt}));o.rotation.x=-Math.PI/2,o.position.y=.01,e.add(o);const l=new re(new Qi(2.6,2.8,48),ie(i.palette.glow,{emissive:i.palette.glow,emissiveIntensity:1.2,side:Tt}));l.rotation.x=-Math.PI/2,l.position.y=.02,e.add(l);const c=dr(qs(i.id+"arena"));for(let d=0;d<16;d++){const f=d/16*Math.PI*2,g=19+c()*4,_=new we;i.id==="verdant"||i.id==="sunken"?sd(_,c,a,.8):i.id==="frost"?Ga(_,c,a,.8):i.id==="celestial"?ad(_,c,a,.65):qo(_,c,a,.9),_.position.set(Math.cos(f)*g,0,Math.sin(f)*g),_.rotation.y=c()*6,e.add(_)}const h=rd(e,i,{verdant:"firefly",ember:"ember",tide:"bubble",frost:"snow",sunken:"spore",storm:"rain",cinder:"ash",celestial:"star"}[i.id]||"firefly"),u=new qt(46,1,.1,320);return u.position.set(0,8.2,16),u.lookAt(0,2.8,0),{scene:e,camera:u,stage:r,inlay:o,particles:h,key:n,rim:s,update(d,f){h.update(d,f),l.rotation.z=f*.1}}}function od(i,e,t,n){const s=new on(160,32,20),a=new jt({side:Ht,uniforms:{top:{value:new Le(e)},bottom:{value:new Le(t)},glow:{value:new Le(n)}},vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vPos; uniform vec3 top; uniform vec3 bottom; uniform vec3 glow;
      void main(){ vec3 n=normalize(vPos); float t=smoothstep(-0.2,0.72,n.y); vec3 c=mix(bottom,top,t);
      float g=pow(max(0.,1.-length(n-normalize(vec3(0.3,0.15,1.0)))),6.0);
      c+=glow*g*0.42; gl_FragColor=vec4(c,1.); }`});i.add(new re(s,a))}function ld(i,e,t=240,n=28){const s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*n,s[l*3+1]=Math.random()*14-2,s[l*3+2]=(Math.random()-.5)*n;const a=new mt;a.setAttribute("position",new an(s,3));const r=new as({color:e,size:.09,transparent:!0,opacity:.72,depthWrite:!1,blending:Vn}),o=new ks(a,r);return i.add(o),{pts:o,positions:s,count:t}}function Kv(){const i=new Ki;i.fog=new is("#6f7c8d",.016),od(i,"#11162f","#f0a56d","#ffd08a");const e=new lr("#ffd8a8","#1a2233",1.9);i.add(e);const t=new ri("#ffd1a0",3.8);t.position.set(-14,22,18),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-35,t.shadow.camera.right=35,t.shadow.camera.top=35,t.shadow.camera.bottom=-35,t.shadow.camera.far=120,i.add(t);const n=new ri("#7ee8dc",3);n.position.set(20,9,-22),i.add(n);const s=(()=>{let L=1234;return()=>(L=Math.imul(L^L>>>15,1|L),((L^L>>>14)>>>0)/4294967296)})(),a=new re(new lt(26,31,6,28),ie("#3b4144",{roughness:.95}));a.position.y=-3.2,a.receiveShadow=!0,i.add(a);const r=new re(new Gs(26,64),ie("#4d5a4b",{roughness:.92}));r.rotation.x=-Math.PI/2,r.position.y=-.18,r.receiveShadow=!0,i.add(r);const o=new re(new Qi(9,13,48),ie("#b49464",{roughness:.86}));o.rotation.x=-Math.PI/2,o.position.y=-.12,i.add(o);const l=new we,c=ie("#b8a176",{roughness:.65,metalness:.1}),h=ie("#7ff4d4",{emissive:"#7ff4d4",emissiveIntensity:1.6,roughness:.25});l.position.set(0,0,-13);for(const L of[-1,1]){const I=new re(new lt(1.1,1.45,13,8),c);I.position.set(L*9,6.5,0),I.castShadow=!0,l.add(I)}const u=new re(new Ln(20,1.1,2.2),c);u.position.y=13.2,l.add(u);const d=new re(new St(4.1,.15,8,64),h);d.position.y=8.3,l.add(d);const f=new re(new St(2.7,.05,4,48),h);f.position.y=8.3,l.add(f),i.add(l);const g=new we,_=ie("#2e4e3f",{roughness:.95}),m=new re(new lt(2.5,4.5,24,8),_);m.position.y=12,m.castShadow=!0,g.add(m);for(let L=0;L<5;L++){const I=new re(new rn(7-L*.7,1),ie(L%2?"#315a4b":"#3b6c52",{roughness:.9}));I.position.set((s()-.5)*6,24+L*2.2,(s()-.5)*4),I.scale.y=.6,I.castShadow=!0,g.add(I)}const p=new re(new St(5.1,.13,4,32,Math.PI),ie("#84e4a6",{emissive:"#84e4a6",emissiveIntensity:.6}));p.position.y=13,p.rotation.z=.5,g.add(p),g.position.set(-18,0,-17),i.add(g);const x=new we;for(let L=0;L<8;L++){const I=10+s()*20,F=s()*Math.PI*2,T=new re(new rn(1.5+s()*3,0),ie(L%2?"#4b5652":"#697062",{roughness:.9}));T.position.set(Math.cos(F)*I,-1+s()*1.2,Math.sin(F)*I),T.rotation.set(s()*3,s()*3,s()*3),T.castShadow=!0,x.add(T)}i.add(x);const b=[];for(let L=0;L<7;L++){const I=new we,F=new re(new rn(1.5+s()*3,0),ie("#535b58",{roughness:.92}));F.scale.y=.65,F.castShadow=!0,I.add(F);const T=new re(new Sn(.3,2+s()*2,5),ie("#8ff0d3",{emissive:"#8ff0d3",emissiveIntensity:.7}));T.position.y=1.3,I.add(T),I.position.set((s()-.5)*62,10+s()*14,-20-s()*22),I.userData.phase=s()*10,I.userData.baseY=I.position.y,i.add(I),b.push(I)}const y=_i("astraleon",{aura:!0,scale:1.85});y.position.set(8.5,0,-4.5),y.rotation.y=-.55,i.add(y);const R=_i("thornox",{aura:!0,scale:1.7});R.position.set(-9.5,0,-3.5),R.rotation.y=.55,i.add(R);const E=_i("glimmerwing",{aura:!0,scale:1.4});E.position.set(-1.5,5.6,-8.5),E.rotation.y=.2,i.add(E);const v=ld(i,"#ffe3a6",280,38),w=$s("#ffd08a",34);w.position.set(24,20,-80),i.add(w);const N=new qt(42,1,.1,260);N.position.set(0,8.5,26),N.lookAt(0,5,-5);function P(L,I){const F=Math.sin(I*.08)*1.5;N.position.set(Math.sin(F*.22)*2.6,8.2+Math.sin(I*.12)*.45,26-Math.cos(I*.08)*2.2),N.lookAt(0,5.2,-5),y.userData.update?.(I,!1),R.userData.update?.(I+2,!1),E.userData.update?.(I+1,!1),E.position.y=5.6+Math.sin(I*.65)*.5,E.rotation.y=.25+Math.sin(I*.24)*.15,y.rotation.y=-.55+Math.sin(I*.18)*.06,R.rotation.y=.55+Math.sin(I*.15+2)*.05,l.rotation.y=Math.sin(I*.1)*.02,d.rotation.z=I*.08,f.rotation.z=-I*.12;for(const A of b)A.position.y=A.userData.baseY+Math.sin(I*.3+A.userData.phase)*.8,A.rotation.y=I*.03+A.userData.phase;const T=v.positions;for(let A=0;A<v.count;A++)T[A*3+1]+=.06*L*(.4+A%5*.2),T[A*3+1]>15&&(T[A*3+1]=-2);v.pts.geometry.attributes.position.needsUpdate=!0,w.material.opacity=.36+Math.sin(I*.4)*.04}return{scene:i,camera:N,update:P}}function Zv(){const i=new Ki;i.fog=new is("#232939",.045),od(i,"#12162a","#343c55","#ffcf8a");const e=new lr("#dbe4ff","#242536",2.1);i.add(e);const t=new ri("#ffe1b1",4.4);t.position.set(5,8,8),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-8,t.shadow.camera.right=8,t.shadow.camera.top=8,t.shadow.camera.bottom=-8,t.shadow.camera.far=30,i.add(t);const n=new ri("#7fe9df",4.2);n.position.set(-6,4,-5),i.add(n);const s=new Wn("#ffb96a",12,18,2);s.position.set(2,4.5,5),i.add(s);const a=new Wn("#88c8ff",8,16,2);a.position.set(-4,3.2,2),i.add(a);const r=new re(new lt(6.2,6.6,.36,32),ie("#242735",{roughness:.45,metalness:.22}));r.position.y=-.2,r.receiveShadow=!0,i.add(r);const o=new re(new lt(4.3,4.55,.16,48),ie("#343b4e",{roughness:.35,metalness:.35}));o.position.y=.03,o.receiveShadow=!0,i.add(o);const l=new re(new St(4.2,.045,5,64),ie("#d9b86f",{emissive:"#d9b86f",emissiveIntensity:.9,roughness:.3}));l.rotation.x=Math.PI/2,l.position.y=.14,i.add(l);const c=new re(new St(5.6,.02,4,64),ie("#7fe9df",{emissive:"#7fe9df",emissiveIntensity:.7,roughness:.3}));c.rotation.x=Math.PI/2,c.position.y=.1,i.add(c);const h=new re(new Gs(18,48),new ss({color:"#0b0e19",transparent:!0,opacity:.52}));h.position.set(0,6,-13),i.add(h);const u=ld(i,"#ffe8ad",150,18),d=$s("#ffd79a",7);d.position.set(0,3,-8),d.material.opacity=.16,i.add(d);const f=new we;f.position.x=1.28,i.add(f);let g=null;function _(L){g&&(f.remove(g),g.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.dispose()):I.material.dispose())})),g=yl(L),g.rotation.y=0,f.add(g)}_({gender:"female",skin:"#e0a778",hairColor:"#56372a",outfit:"#e5b85f",hairStyle:2});const m=new we;i.add(m);const p={},x=[];["mossling","cindercub","ripplefin"].forEach((L,I)=>{const F=new we,T=new re(new lt(1.1,1.25,.35,8),ie("#2c3040",{roughness:.5,metalness:.28}));T.position.y=-.1,F.add(T);const A=new re(new St(1.08,.04,4,32),ie(["#67e8a2","#ff8659","#59d8ff"][I],{emissive:["#67e8a2","#ff8659","#59d8ff"][I],emissiveIntensity:1.3}));A.rotation.x=Math.PI/2,A.position.y=.1,F.add(A),F.position.set((I-1)*3.8,0,0),F.userData.baseX=F.position.x,m.add(F),x.push(F);const G=_i(L,{aura:!0,scale:.82});G.position.set((I-1)*4.1,.15,0),G.rotation.y=.06*(I-1),m.add(G),p[L]=G}),m.visible=!1;const b=new qt(38,1,.1,150);b.position.set(1.05,1.85,6.2),b.lookAt(1.05,1.08,0);let y="trainer",R=new U(1.05,1.85,6.2),E=new U(1.05,1.08,0),v=0;function w(L){y=L,y==="trainer"?(f.visible=!0,m.visible=!1,R.set(1.05,1.85,6.2),E.set(1.05,1.08,0)):(f.visible=!1,m.visible=!0,R.set(0,3.7,14.6),E.set(0,1.55,0))}function N(L){v=L,x.forEach((I,F)=>{I.position.y=F===L?.18:0})}function P(L,I){g?.userData.update?.(I,!1),g&&(g.rotation.y=Math.sin(I*.25)*.12);for(const[A,G]of Object.entries(p))G.userData.update?.(I+(A==="cindercub"?1.4:A==="ripplefin"?2.8:0),!1),G.rotation.y=Math.sin(I*.35+(A==="ripplefin"?2:A==="cindercub"?1:0))*.15;x.forEach((A,G)=>{A.rotation.y=I*.18+G,A.scale.setScalar(G===v?1.04:1)}),l.rotation.z=I*.1,c.rotation.z=-I*.07,b.position.lerp(R,.06);const F=b.userData.look||E.clone();F.lerp(E,.06),b.userData.look=F,b.lookAt(F);const T=u.positions;for(let A=0;A<u.count;A++)T[A*3+1]+=.1*L*(.3+A%4*.25),T[A*3+1]>9&&(T[A*3+1]=-1);u.pts.geometry.attributes.position.needsUpdate=!0,d.material.opacity=.14+Math.sin(I*1.1)*.03}return{scene:i,camera:b,setTrainer:_,setMode:w,selectStarter:N,update:P}}const _e=i=>document.getElementById(i),Tn=i=>new Promise(e=>setTimeout(e,i)),zi=(i,e,t)=>Math.min(t,Math.max(e,i)),Jv=i=>1-Math.pow(1-i,3);class Qv{constructor(e,t){this.game=e,this.config=t,this.region=tr(t.regionId||e.state.player.regionId),this.isGym=t.type==="gym",this.abort=new AbortController,this.effects=[],this.phase="intro",this.round=1,this.busy=!1,this.focus=8,this.maxFocus=10,this.shake=0,this.turnCount=0,this.playerStatuses=[],this.enemyStatuses=[],this.levelUps=[],this.logLines=[],this.tempPick=null;const n=e.state.player.party;if(this.activeIdx=n.findIndex(s=>s.hp>0),this.activeIdx<0&&(this.activeIdx=0),this.playerCreature=n[this.activeIdx],e.state.player.activeIndex=this.activeIdx,t.type==="wild"){const s=t.wild,a=Qt(Te[s.speciesId],s.level);this.enemyTeam=[{speciesId:s.speciesId,level:s.level,hp:a.hp,maxHp:a.hp,statuses:[]}],this.wild=s}else this.enemyTeam=t.gym.team.map(s=>{const a=Qt(Te[s.species],s.level);return{speciesId:s.species,level:s.level,hp:a.hp,maxHp:a.hp,statuses:[]}}),this.gym=t.gym;this.enemyIdx=0,this.enemy=this.enemyTeam[0],this.arena=Yv(this.region),this.playerModel=null,this.enemyModel=null,this.buildModels(),this.bindUI(),e.enterBattleMode(this),e.showBattleUI(!0),this.setupUI(),this.log(`A wild ${this.enemyName()} appeared!`,!1),this.isGym&&this.log(`<b>${this.gym.leader}</b> sends out ${this.enemyName()}!`,!1),this.renderMoves(),this.updateUI(),this.phase="select",setTimeout(()=>{this.destroyed||this.updateUI()},50)}enemyName(){return Te[this.enemy.speciesId].name}buildModels(){this.playerModel&&(this.arena.scene.remove(this.playerModel),this.playerModel=null),this.enemyModel&&(this.arena.scene.remove(this.enemyModel),this.enemyModel=null),this.pBase=new U(-5.2,.05,2.2),this.eBase=new U(5,.05,-2.2),this.playerModel=_i(this.playerCreature.speciesId,{aura:!0}),this.playerModel.position.copy(this.pBase),this.playerModel.lookAt(this.eBase.x,0,this.eBase.z),this.arena.scene.add(this.playerModel),this.enemyModel=_i(this.enemy.speciesId,{aura:!0}),this.enemyModel.position.copy(this.eBase),this.enemyModel.lookAt(this.pBase.x,0,this.pBase.z),this.arena.scene.add(this.enemyModel);const e=new Wn(tt[Te[this.playerCreature.speciesId].type].color,6,14,2);e.position.set(-4,3,2),this.arena.scene.add(e),this.pGlow=e;const t=new Wn(tt[Te[this.enemy.speciesId].type].color,6,14,2);t.position.set(4,3,-2),this.arena.scene.add(t),this.eGlow=t}bindUI(){const e=this.abort.signal;_e("move-grid").addEventListener("click",t=>{const n=t.target.closest("[data-move]");n&&this.useMove(n.dataset.move)},{signal:e}),_e("btn-capture").addEventListener("click",()=>this.openTreatPicker(),{signal:e}),_e("btn-swap").addEventListener("click",()=>this.openSwapPicker(),{signal:e}),_e("btn-brace").addEventListener("click",()=>this.brace(),{signal:e}),_e("btn-run").addEventListener("click",()=>this.tryFlee(),{signal:e}),_e("battle-help").addEventListener("click",()=>this.showHelp(),{signal:e}),_e("battle-sound").addEventListener("click",()=>{this.game.audio.toggle(),this.game.toast(this.game.audio.enabled?"Sound on":"Sound muted","♪")},{signal:e})}setupUI(){const e=_e("battle-region");e.textContent=`${this.region.name.toUpperCase()} · ${this.isGym?"GYM BATTLE":"WILD ENCOUNTER"}`,_e("battle-turn").textContent="1",_e("battle-feed").innerHTML="",this.logLines=[],_e("battle-result").classList.add("hidden"),_e("battle-result").innerHTML="",_e("treat-picker").classList.add("hidden"),_e("battle-command").classList.remove("hidden"),_e("enemy-panel").style.opacity="1",_e("player-panel").style.opacity="1";const t=tt[Te[this.enemy.speciesId].type];_e("enemy-panel").style.borderColor=t.color+"55",_e("player-panel").style.borderColor=tt[Te[this.playerCreature.speciesId].type].color+"55",_e("enemy-type-icon").textContent=t.icon,_e("enemy-type-icon").style.color=t.color,_e("player-type-icon").textContent=tt[Te[this.playerCreature.speciesId].type].icon,_e("player-type-icon").style.color=tt[Te[this.playerCreature.speciesId].type].color,_e("enemy-name").textContent=Te[this.enemy.speciesId].name,_e("enemy-level").textContent=`LV ${this.enemy.level}`,_e("player-battle-name").textContent=Te[this.playerCreature.speciesId].name,_e("player-level").textContent=`LV ${this.playerCreature.level}`,this.renderMoves(),this.updateTeamPips(),this.updateUI()}renderMoves(){const e=_e("move-grid"),t=Vi(Te[this.playerCreature.speciesId],this.playerCreature.level);e.innerHTML="";for(const n of t){const s=Gi[n],a=tt[s.type],r=document.createElement("button");r.className="move-btn",r.dataset.move=n,r.style.setProperty("--mc",a.color),r.disabled=this.phase!=="select"||this.focus<s.cost,r.innerHTML=`
        <div class="mv-top"><b>${s.name}</b><span class="mv-type">${a.name}</span></div>
        <div class="mv-bottom"><span>${s.power?"PWR "+s.power:s.heal?"MEND":s.selfStatus?"BUFF":"SUPPORT"}</span><span class="mv-cost">${s.signature?"✦ ":""}${s.cost} FOCUS</span></div>`,e.appendChild(r)}}updateTeamPips(){const e=_e("enemy-team");if(e.innerHTML="",this.enemyTeam.length<=1){e.style.display="none";return}e.style.display="flex",this.enemyTeam.forEach((t,n)=>{const s=document.createElement("i");s.className=t.hp>0?n===this.enemyIdx?"alive":"":"fainted",e.appendChild(s)})}updateUI(){if(this.destroyed)return;const e=Qt(Te[this.playerCreature.speciesId],this.playerCreature.level);Qt(Te[this.enemy.speciesId],this.enemy.level),_e("enemy-hp").style.width=`${zi(this.enemy.hp/this.enemy.maxHp*100,0,100)}%`,_e("player-hp").style.width=`${zi(this.playerCreature.hp/e.hp*100,0,100)}%`,_e("enemy-hp-text").textContent=`${Math.max(0,Math.round(this.enemy.hp))} / ${this.enemy.maxHp}`,_e("player-hp-text").textContent=`${Math.max(0,Math.round(this.playerCreature.hp))} / ${e.hp}`,_e("player-hp").classList.toggle("low",this.playerCreature.hp/e.hp<.25),_e("battle-turn").textContent=String(this.round),_e("enemy-level").textContent=`LV ${this.enemy.level}`,_e("player-level").textContent=`LV ${this.playerCreature.level}`,_e("enemy-name").textContent=Te[this.enemy.speciesId].name,_e("player-battle-name").textContent=Te[this.playerCreature.speciesId].name,_e("enemy-type-icon").textContent=tt[Te[this.enemy.speciesId].type].icon,_e("enemy-type-icon").style.color=tt[Te[this.enemy.speciesId].type].color,_e("player-type-icon").textContent=tt[Te[this.playerCreature.speciesId].type].icon,_e("player-type-icon").style.color=tt[Te[this.playerCreature.speciesId].type].color,_e("enemy-status").textContent=this.statusText(this.enemy.statuses),_e("player-status").textContent=this.statusText(this.playerStatuses);const t=Object.values(this.game.state.player.treats).reduce((s,a)=>s+a,0);_e("treat-count").textContent=t;const n=_e("focus-pips");n.innerHTML="";for(let s=0;s<this.maxFocus;s++){const a=document.createElement("i");s<this.focus&&(a.className="on"),n.appendChild(a)}this.renderMoves(),this.updateTeamPips(),_e("btn-capture").disabled=this.isGym,_e("btn-capture").style.opacity=this.isGym?"0.35":"1",_e("btn-run").disabled=this.isGym,_e("btn-run").style.opacity=this.isGym?"0.35":"1"}statusText(e){return e?.length?e.map(t=>`${t.icon||""} ${t.name||t.id}`.trim()).join(" · "):""}addStatus(e,t,n=3){const s=e.find(r=>r.id===t);if(s)return s.turns=Math.max(s.turns,n),!1;const a={scorch:{name:"Scorched",icon:"♨"},chill:{name:"Chilled",icon:"❄"},static:{name:"Static",icon:"ϟ"},root:{name:"Rooted",icon:"❧"},guard:{name:"Guarded",icon:"◈"},fury:{name:"Fury",icon:"⟡"},haste:{name:"Haste",icon:"»"}}[t];return e.push({id:t,turns:n,name:a?.name||t,icon:a?.icon||"•"}),!0}hasStatus(e,t){return e.some(n=>n.id===t)}log(e,t=!0){if(this.destroyed)return;const n=_e("battle-feed");this.logLines.unshift({text:e,time:performance.now()});const s=document.createElement("div");for(s.className="feed-line",s.innerHTML=e,n.prepend(s);n.children.length>4;)n.removeChild(n.lastChild);t&&this.game.audio.click()}floatText(e,t,n=""){const s=document.createElement("div");s.className=`dmg-float ${n}`,s.textContent=e,s.style.left=t==="enemy"?"62%":"38%",s.style.top=`${30+Math.random()*8}%`,_e("battle-ui").appendChild(s),setTimeout(()=>s.remove(),1200)}burst(e,t){const s=new Float32Array(78),a=[];for(let h=0;h<26;h++)s[h*3]=(Math.random()-.5)*1.2,s[h*3+1]=(Math.random()-.5)*1.2,s[h*3+2]=(Math.random()-.5)*1.2,a.push(new U((Math.random()-.5)*7,Math.random()*6,(Math.random()-.5)*7));const r=new mt;r.setAttribute("position",new an(s,3));const o=new as({color:t,size:.2,transparent:!0,opacity:1,depthWrite:!1,blending:Vn}),l=new ks(r,o),c=e==="enemy"?this.eBase:this.pBase;l.position.set(c.x,2.5,c.z),this.arena.scene.add(l),this.effects.push({pts:l,vel:a,life:.9,max:.9})}tween(e,t){return new Promise(n=>{const s=performance.now(),a=r=>{const o=zi((r-s)/e,0,1);t(Jv(o),o),o<1?requestAnimationFrame(a):n()};requestAnimationFrame(a)})}async animateAttack(e){const t=e==="player"?this.playerModel:this.enemyModel,n=e==="player"?this.pBase:this.eBase,s=e==="player"?1:-1;this.game.audio.whoosh(),await this.tween(220,a=>{t.position.x=n.x+s*a*1.4,t.position.z=n.z+(e==="player"?-a*.4:a*.4)}),await this.tween(260,a=>{t.position.x=n.x+s*(1-a)*1.4,t.position.z=n.z+(e==="player"?-1:1)*(1-a)*.4})}async useMove(e){if(this.phase!=="select"||this.busy)return;const t=Gi[e];if(!t||this.focus<t.cost){this.game.audio.error();return}if(this.busy=!0,this.phase="busy",this.focus-=t.cost,this.updateUI(),this.log(`<b>${Te[this.playerCreature.speciesId].name}</b> used ${t.name}!`),await this.animateAttack("player"),await this.resolveMove("player",t),this.phase!=="done"){if(this.enemy.hp<=0){await this.handleEnemyKO();return}await Tn(420),await this.enemyTurn(),this.phase!=="done"&&await this.endRound()}}async resolveMove(e,t){const n=e==="player",s=n?this.playerCreature:this.enemy,a=Te[s.speciesId],r=n?this.enemy:this.playerCreature,o=Te[r.speciesId],l=n?this.playerStatuses:this.enemy.statuses,c=n?this.enemy.statuses:this.playerStatuses,h=Qt(a,s.level),u=Qt(o,r.level),d=tt[t.type].color;if(t.selfStatus){this.addStatus(l,t.selfStatus,3)&&this.log(`${a.name} is now <b>${this.statusName(t.selfStatus)}</b>.`),this.burst(n?"player":"enemy",d),this.game.audio.special();return}if(t.heal){const b=Math.round(u.hp*t.heal);n?u.hp:this.enemy.maxHp,n?this.playerCreature.hp=Math.min(u.hp,this.playerCreature.hp+b):this.enemy.hp=Math.min(this.enemy.maxHp,this.enemy.hp+b),this.log(`${a.name} restored <b>${b} HP</b>.`),this.floatText(`+${b}`,n?"player":"enemy","heal"),this.updateUI(),this.game.audio.special();return}if(!t.power)return;let f=h.atk;this.hasStatus(l,"chill")&&(f*=.75),this.hasStatus(l,"fury")&&(f*=1.25);let g=u.def;this.hasStatus(c,"guard")&&(g*=1.32),this.hasStatus(c,"root")&&(g*=.74);const _=t.type===a.type?1.2:1,m=Xc(t.type,o.type),p=Math.random()<.09;let x=t.power*(.21+s.level*.0185)*(f/Math.max(12,g))*_*m;if(x*=.9+Math.random()*.18,p&&(x*=1.55),x=Math.max(1,Math.round(x)),n?this.playerCreature:this.enemy,n?this.enemy.hp=Math.max(0,this.enemy.hp-x):this.playerCreature.hp=Math.max(0,this.playerCreature.hp-x),this.burst(n?"enemy":"player",d),this.floatText(`${x}${p?"!":""}`,n?"enemy":"player",p?"crit":""),this.shake=p?.45:.26,this.game.audio.hit(p||x>35),_e("flash").classList.add("on"),setTimeout(()=>_e("flash").classList.remove("on"),90),m>1.1?this.log("It's <b>super effective</b>!"):m<.9&&this.log("It's not very effective…"),p&&this.log("A critical strike!"),t.drain){const b=Math.round(x*t.drain);n?this.playerCreature.hp=Math.min(h.hp,this.playerCreature.hp+b):this.enemy.hp=Math.min(this.enemy.maxHp,this.enemy.hp+b),this.log(`${a.name} drained <b>${b} HP</b>.`),this.floatText(`+${b}`,n?"player":"enemy","heal")}if(t.status&&Math.random()<t.status.chance){const b=n?this.enemy.statuses:this.playerStatuses;this.addStatus(b,t.status.id,3)&&this.log(`${o.name} is <b>${this.statusName(t.status.id)}</b>!`)}this.updateUI()}statusName(e){return{scorch:"Scorched",chill:"Chilled",static:"Static",root:"Rooted",guard:"Guarded",fury:"Fury",haste:"Haste"}[e]||e}async enemyTurn(){if(this.enemy.hp<=0)return;if(this.hasStatus(this.enemy.statuses,"static")&&Math.random()<.3){this.log(`${this.enemyName()} crackles with static and loses its turn!`),this.shake=.12;return}const e=Vi(Te[this.enemy.speciesId],this.enemy.level);let t=null,n=-999;const s=Te[this.playerCreature.speciesId].type;for(const a of e){const r=Gi[a];if(!r.power&&!r.selfStatus&&!r.heal)continue;let o=r.power*Xc(r.type,s);r.type===Te[this.enemy.speciesId].type&&(o*=1.15),r.status&&(o+=18),r.selfStatus&&(o+=this.enemy.hp/this.enemy.maxHp<.6?12:2),r.heal&&(o+=this.enemy.hp/this.enemy.maxHp<.45?55:0),o+=Math.random()*14,o>n&&(n=o,t=r)}t||(t=Gi[e[0]]),this.log(`<b>${this.enemyName()}</b> used ${t.name}!`),await this.animateAttack("enemy"),await this.resolveMove("enemy",t),this.playerCreature.hp<=0&&await this.handlePlayerKO()}async endRound(){if(this.phase!=="done"){this.round++,this.focus=Math.min(this.maxFocus,this.focus+2);for(const[e,t,n]of[["player",this.playerStatuses,this.playerCreature],["enemy",this.enemy.statuses,this.enemy]]){if(e==="player"&&n.hp<=0||e==="enemy"&&this.enemy.hp<=0)continue;if(this.hasStatus(t,"scorch")){const a=Qt(Te[n.speciesId],n.level).hp,r=Math.max(2,Math.round(a*.06));e==="player"?this.playerCreature.hp=Math.max(0,this.playerCreature.hp-r):this.enemy.hp=Math.max(0,this.enemy.hp-r),this.log(`${e==="player"?Te[this.playerCreature.speciesId].name:this.enemyName()} is seared for <b>${r}</b> damage.`),this.floatText(`${r}`,e,""),this.game.audio.hit(!1)}t.forEach(a=>{a.turns-=1});const s=t.filter(a=>a.turns<=0);t.splice(0,t.length,...t.filter(a=>a.turns>0));for(const a of s)this.log(`${e==="player"?Te[this.playerCreature.speciesId].name:this.enemyName()}'s ${a.name} faded.`)}if(this.updateUI(),this.enemy.hp<=0){await this.handleEnemyKO();return}if(this.playerCreature.hp<=0){await this.handlePlayerKO();return}this.phase="select",this.busy=!1,this.updateUI()}}async handleEnemyKO(){if(this.enemy.hp=0,this.updateUI(),this.game.audio.badge(),this.log(`<b>${this.enemyName()}</b> was defeated!`),this.enemyModel){const e=this.enemyModel;await this.tween(450,t=>{e.scale.setScalar(1-t*.35),e.position.y=this.eBase.y+t*.3}),e.visible=!1}if(this.enemyIdx<this.enemyTeam.length-1){this.enemyIdx++,this.enemy=this.enemyTeam[this.enemyIdx],this.enemyStatuses=[],await Tn(500),this.buildModels(),this.log(`${this.gym?.leader||"The keeper"} sends out <b>${this.enemyName()}</b>!`),this.updateUI(),this.phase="select",this.busy=!1;return}await this.win()}async handlePlayerKO(){this.playerCreature.hp=0,this.updateUI(),this.log(`<b>${Te[this.playerCreature.speciesId].name}</b> fainted!`),this.game.audio.hit(!0);const e=this.game.state.player.party.findIndex((t,n)=>t.hp>0&&n!==this.activeIdx);if(e<0){await Tn(700),this.lose();return}this.activeIdx=e,this.playerCreature=this.game.state.player.party[e],this.game.state.player.activeIndex=e,this.playerStatuses=[],this.focus=8,await Tn(700),this.buildModels(),this.log(`Go, <b>${Te[this.playerCreature.speciesId].name}</b>!`),this.updateUI(),this.phase="select",this.busy=!1}async win(){this.phase="done",this.busy=!0,this.updateUI();const e=this.isGym?Math.round(this.enemyTeam.reduce((a,r)=>a+r.level,0)*9+40):Math.round(this.enemy.level*11+18),t=[];for(const a of this.game.state.player.party){if(a.hp<=0)continue;const r=a===this.playerCreature?e:Math.round(e*.45),o=this.grantXp(a,r);t.push(...o.map(l=>({creature:a,...l})))}this.levelUps=t;let n=null;if(this.isGym){n=this.gym,this.game.state.player.badges.includes(this.region.id)||this.game.state.player.badges.push(this.region.id);const a=this.gym.reward?.materials||{};for(const[r,o]of Object.entries(a))this.game.state.player.inventory[r]=(this.game.state.player.inventory[r]||0)+o;this.game.audio.badge()}else this.wild&&(this.wild.active=!1,this.wild.root.visible=!1,this.wild.respawnAt=performance.now()+45e3);this.game.save();const s=t.length?`${t.length} level-up${t.length>1?"s":""}!`:"";this.showResult({win:!0,title:this.isGym?"Sigil Earned":"Victory",sub:this.isGym?`${this.gym.badge}`:"The wilds grow quiet",xp:e,badge:n,levels:this.levelUps,copy:this.isGym?`${this.gym.leader} bows their head. ${this.gym.quote}${s?" "+s:""}`:`Your bond deepens.${s?" "+s:""}`})}grantXp(e,t){e.xp+=t;const n=[];for(;e.xp>=Xo(e.level)&&e.level<60;){const s=Xo(e.level);e.xp-=s;const a=e.level,r=Qt(Te[e.speciesId],a);e.level++;const o=Qt(Te[e.speciesId],e.level);e.maxHp=o.hp,e.hp=Math.min(o.hp,e.hp+(o.hp-r.hp));const l=Vi(Te[e.speciesId],a),h=Vi(Te[e.speciesId],e.level).filter(u=>!l.includes(u)).map(u=>Gi[u]?.name).filter(Boolean);n.push({from:a,to:e.level,learned:h})}return n}lose(){this.phase="done",this.busy=!0,this.game.audio.error(),this.showResult({win:!1,title:"The Wilds Prevail",sub:"Your party needs rest",xp:0,copy:"Everything goes dark for a moment. You wake at the waystone, your party tended and your resolve intact. The titans will still be there tomorrow.",lost:!0})}showResult(e){this.resultData=e;const t=_e("battle-result");t.classList.remove("hidden");const n=e.badge?`<div><span>SIGIL</span><b>${e.badge.sigil} ${e.badge.badge}</b></div>`:"",s=e.levels?.length?`<div><span>LEVEL</span><b>+${e.levels.length}</b></div>`:`<div><span>PARTY</span><b>${this.game.state.player.party.filter(r=>r.hp>0).length}/${this.game.state.player.party.length}</b></div>`,a=e.levels?.slice(0,3).map(r=>`${Te[r.creature.speciesId].name} reached Lv ${r.to}${r.learned.length?" — learned "+r.learned.join(", "):""}`).join("<br>")||"";t.innerHTML=`
      <div class="result-card">
        <div class="result-sigil">${e.win?e.badge?e.badge.sigil:"✦":"◌"}</div>
        <h2>${e.title}</h2>
        <div class="result-sub">${e.sub}</div>
        <div class="result-stats">
          <div><span>EXPERIENCE</span><b>+${e.xp}</b></div>
          ${s}
          ${n}
        </div>
        <p class="result-copy">${e.copy}${a?`<br><span style="color:#f2c96d">${a}</span>`:""}</p>
        <div class="result-actions">
          <button class="btn btn-primary" id="result-continue"><span>${e.lost?"Return to the Waystone":"Return to the Wilds"}</span><i>→</i></button>
        </div>
      </div>`,e.levels?.length&&this.game.audio.levelUp(),_e("result-continue").addEventListener("click",()=>{this.game.finishBattle(this)},{once:!0})}async tryCapture(e){if(this.isGym){this.game.toast("Gym titans cannot be tamed.","◈","bad");return}const t=ja[e];if(!t||(this.game.state.player.treats[e]||0)<=0)return;this.game.state.player.treats[e]--,this.closePicker(),this.phase="busy",this.busy=!0,this.updateUI(),this.log(`You offer a <b>${t.name}</b>…`);const n=new re(new rn(.26,1),new Hs({color:tt[t.type].color,emissive:tt[t.type].color,emissiveIntensity:1.6,roughness:.3}));n.position.copy(this.pBase).add(new U(0,2.1,0)),this.arena.scene.add(n);const s=this.eBase.clone().add(new U(0,2.1,0));await this.tween(650,o=>{n.position.lerpVectors(this.pBase.clone().add(new U(0,2.1,0)),s,o),n.position.y+=Math.sin(o*Math.PI)*2.6,n.rotation.x+=.2,n.rotation.y+=.25}),this.arena.scene.remove(n),this.burst("enemy",tt[t.type].color),_e("flash").classList.add("on"),setTimeout(()=>_e("flash").classList.remove("on"),130),this.game.audio.capture();const a=this.captureChance(e);if(Math.random()<a){await Tn(500),this.enemyModel.visible=!1;const o=this.enemy.level,l=Jh(this.enemy.speciesId,o,{hp:Math.max(1,Math.round(this.enemy.maxHp*.55))}),c=this.game.addCaptured(l),h=Math.round(this.enemy.level*7+10);for(const u of this.game.state.player.party)u.hp>0&&this.grantXp(u,u===this.playerCreature?h:Math.round(h*.4));this.game.audio.levelUp(),this.phase="done",this.showResult({win:!0,title:"Bond Formed",sub:c==="party"?"A new companion joins your party":"Sent to the sanctuary",xp:h,copy:`${Te[l.speciesId].name} accepts your treat and presses its great head against your hand. You are bound now — by trust, not rope.${c==="reserve"?" Your party was full, so it waits in the sanctuary.":""}`,caught:!0}),this.game.save();return}this.log(`<b>${this.enemyName()}</b> sniffs the treat, then refuses!`),this.floatText("RESISTED","enemy",""),await Tn(450),await this.enemyTurn(),this.phase!=="done"&&await this.endRound()}captureChance(e){const t=Te[this.enemy.speciesId],n=this.enemy.hp/this.enemy.maxHp,s=t.catchRate,a=1+(1-n)*2.3,r=this.playerCreature.level,o=zi(1-Math.max(0,this.enemy.level-r)*.018,.55,1.15),l=e===t.type?1.45:.82,c=this.enemy.statuses.length?1.12:1;return zi(s*a*o*l*c,.04,.92)}openTreatPicker(){if(this.phase!=="select"||this.isGym){this.isGym&&this.game.toast("Gym titans cannot be tamed.","◈","bad");return}const e=_e("treat-picker");_e("battle-command").classList.add("hidden"),e.classList.remove("hidden");const n=Object.entries(this.game.state.player.treats).filter(([s,a])=>a>0).map(([s,a])=>{const r=ja[s],o=Math.round(this.captureChance(s)*100),l=Te[this.enemy.speciesId].favorite===s;return`<button class="treat-card" data-treat="${s}" style="--tc:${tt[s].color}">
        <div class="tc-top"><b>${r.icon} ${r.name}</b><span class="tc-count">×${a}</span></div>
        <div class="tc-type">${tt[s].name}${l?" · FAVORITE":""}</div>
        <div class="tc-rate">${o}% bond chance${l?" · +45%":""}</div>
      </button>`}).join("");e.innerHTML=`<div class="treat-head"><h4>Offer a Treat</h4><button id="close-treat">×</button></div>
      <p style="margin:0 0 10px;font-size:0.6rem;color:#aab2c5;line-height:1.5">Weaken the titan first, and match its favorite flavor to improve the bond.</p>
      <div class="treat-grid">${n||'<div class="empty-note">No treats yet. Gather ingredients and craft some at a waystone.</div>'}</div>`,_e("close-treat").onclick=()=>{this.closePicker()},e.querySelectorAll("[data-treat]").forEach(s=>{s.addEventListener("click",()=>this.tryCapture(s.dataset.treat))})}openSwapPicker(){if(this.phase!=="select")return;const e=_e("treat-picker");_e("battle-command").classList.add("hidden"),e.classList.remove("hidden");const n=this.game.state.player.party.map((s,a)=>{const r=Qt(Te[s.speciesId],s.level),o=tt[Te[s.speciesId].type],l=s.hp<=0||a===this.activeIdx;return`<button class="treat-card" data-swap="${a}" style="--tc:${o.color};opacity:${l?".36":"1"}" ${l?"disabled":""}>
        <div class="tc-top"><b>${o.icon} ${Te[s.speciesId].name}</b><span class="tc-count">LV ${s.level}</span></div>
        <div class="tc-type">${o.name} · ${s.hp}/${r.hp} HP</div>
        <div class="tc-rate">${a===this.activeIdx?"IN BATTLE":s.hp<=0?"FAINTED":"SWAP IN"}</div>
      </button>`}).join("");e.innerHTML=`<div class="treat-head"><h4>Swap Companion</h4><button id="close-treat">×</button></div>
      <div class="treat-grid">${n}</div>`,_e("close-treat").onclick=()=>this.closePicker(),e.querySelectorAll("[data-swap]").forEach(s=>{s.addEventListener("click",()=>this.doSwap(Number(s.dataset.swap)))})}closePicker(){_e("treat-picker").classList.add("hidden"),_e("treat-picker").innerHTML="",_e("battle-command").classList.remove("hidden"),this.renderMoves()}async doSwap(e){const t=this.game.state.player.party[e];!t||t.hp<=0||e===this.activeIdx||(this.closePicker(),this.phase="busy",this.busy=!0,this.activeIdx=e,this.playerCreature=t,this.game.state.player.activeIndex=e,this.playerStatuses=[],this.focus=Math.min(this.maxFocus,this.focus+2),this.buildModels(),this.log(`Go, <b>${Te[t.speciesId].name}</b>!`),this.updateUI(),await Tn(420),await this.enemyTurn(),this.phase!=="done"&&await this.endRound())}async brace(){this.phase==="select"&&(this.phase="busy",this.busy=!0,this.focus=Math.min(this.maxFocus,this.focus+4),this.addStatus(this.playerStatuses,"guard",2),this.log(`${Te[this.playerCreature.speciesId].name} braces, recovering focus and raising defense.`),this.game.audio.special(),this.updateUI(),await Tn(360),await this.enemyTurn(),this.phase!=="done"&&await this.endRound())}async tryFlee(){if(!(this.phase!=="select"||this.isGym)){if(Math.random()<.72){this.phase="done",this.busy=!0,this.log("You slipped away into the undergrowth."),await Tn(500),this.game.finishBattle(this,{fled:!0});return}this.log("You could not escape!"),this.game.audio.error(),this.phase="busy",this.busy=!0,await Tn(350),await this.enemyTurn(),this.phase!=="done"&&await this.endRound()}}showHelp(){const e=_e("battle-tooltip");e.classList.toggle("hidden"),e.innerHTML="<b>Battle basics</b> — Every ability costs Focus. Focus restores +2 each turn; Brace restores +4 and raises defense. Match a titan’s favorite treat to improve capture. Swap to a fresh companion if you are in danger.",clearTimeout(this.helpTimer),this.helpTimer=setTimeout(()=>e.classList.add("hidden"),6500)}update(e,t){if(!this.destroyed){if(this.arena.update(e,t),this.playerModel?.userData.update?.(t,!1),this.enemyModel?.userData.update?.(t+1.3,!1),this.shake>0){this.shake=Math.max(0,this.shake-e*1.8);const n=this.arena.camera;n.position.x=(Math.random()-.5)*this.shake,n.position.y=8.2+(Math.random()-.5)*this.shake,n.lookAt(0,3,0)}for(let n=this.effects.length-1;n>=0;n--){const s=this.effects[n];s.life-=e;const a=s.pts.geometry.attributes.position;for(let r=0;r<s.vel.length;r++)s.vel[r].y-=e*9,a.setXYZ(r,a.getX(r)+s.vel[r].x*e,a.getY(r)+s.vel[r].y*e,a.getZ(r)+s.vel[r].z*e);a.needsUpdate=!0,s.pts.material.opacity=zi(s.life/s.max,0,1),s.life<=0&&(this.arena.scene.remove(s.pts),s.pts.geometry.dispose(),s.pts.material.dispose(),this.effects.splice(n,1))}this.playerModel&&(this.playerModel.rotation.y=this.playerModel.rotation.y*.985+.01*Math.atan2(this.eBase.x-this.pBase.x,this.eBase.z-this.pBase.z))}}destroy(){this.destroyed=!0,this.abort.abort(),clearTimeout(this.helpTimer);for(const e of this.effects)this.arena.scene.remove(e.pts),e.pts.geometry.dispose(),e.pts.material.dispose();this.effects=[],this.arena?.scene&&this.arena.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),_e("battle-ui").querySelectorAll(".dmg-float").forEach(e=>e.remove()),_e("battle-result").innerHTML="",_e("battle-result").classList.add("hidden"),_e("treat-picker").innerHTML="",_e("treat-picker").classList.add("hidden"),_e("battle-tooltip").classList.add("hidden"),_e("battle-command").classList.remove("hidden")}}class jv{constructor(){this.ctx=null,this.enabled=!0,this.master=null,this.ambient=null,this.ambientGain=null,this.notes=[],this.region=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.42:0;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-24,t.ratio.value=4,this.master.connect(t),t.connect(this.ctx.destination),this.ambient=this.ctx.createGain(),this.ambient.gain.value=.12,this.ambient.connect(this.master),this.noiseBuffer=this.makeNoise(3),this.startWind()}makeNoise(e){const t=this.ctx.sampleRate,n=this.ctx.createBuffer(1,t*e,t),s=n.getChannelData(0);for(let a=0;a<s.length;a++)s[a]=Math.random()*2-1;return n}startWind(){const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const n=this.ctx.createGain();n.gain.value=.022,e.connect(t),t.connect(n),n.connect(this.master),e.start(),this.wind={src:e,filter:t,gain:n}}setEnabled(e){this.enabled=e,this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?.42:0,this.ctx.currentTime+.15))}toggle(){return this.setEnabled(!this.enabled),this.enabled}chordFor(e){switch(e){case"verdant":return[130.81,196,261.63,329.63];case"ember":return[98,146.83,196,246.94];case"tide":return[110,164.81,220,293.66];case"frost":return[123.47,185,246.94,311.13];case"sunken":return[92.5,138.59,185,233.08];case"storm":return[103.83,155.56,207.65,261.63];case"cinder":return[87.31,130.81,174.61,220];case"celestial":return[146.83,220,293.66,369.99];default:return[110,165,220,330]}}setRegion(e){if(!this.ctx||this.region===e||(this.region=e,!this.ambient))return;const t=this.ctx.currentTime;for(const s of this.notes){s.gain.gain.cancelScheduledValues(t),s.gain.gain.linearRampToValueAtTime(0,t+1.2);try{s.osc.stop(t+1.3)}catch{}}this.notes=[],this.chordFor(e).forEach((s,a)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();r.type=a%2?"sine":"triangle",r.frequency.value=s,r.detune.value=(a-1.5)*4,l.type="lowpass",l.frequency.value=600+a*180,o.gain.value=0,o.gain.linearRampToValueAtTime(.032/(a*.5+1),t+2),r.connect(l),l.connect(o),o.connect(this.ambient),r.start(),this.notes.push({osc:r,gain:o})})}tone(e,t=.12,n="sine",s=.1,a=0){if(!this.ctx||!this.enabled)return;const r=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(e,r),a&&o.frequency.exponentialRampToValueAtTime(Math.max(30,e+a),r+t),l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(s,r+.012),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(l),l.connect(this.master),o.start(r),o.stop(r+t+.02)}noise(e=.2,t=900,n=.12){if(!this.ctx||!this.enabled)return;const s=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(t,s),r.Q.value=.9;const o=this.ctx.createGain();o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(1e-4,s+e),a.connect(r),r.connect(o),o.connect(this.master),a.start(s),a.stop(s+e+.02)}click(){this.tone(660,.07,"triangle",.05)}select(){this.tone(520,.08,"sine",.06),setTimeout(()=>this.tone(780,.1,"sine",.04),60)}hit(e=!1){this.noise(e?.35:.2,e?380:850,e?.18:.12),this.tone(e?90:150,e?.28:.16,"sawtooth",.08,-40)}special(){this.tone(440,.2,"sine",.07,320),setTimeout(()=>this.tone(660,.25,"triangle",.055,280),80)}capture(){[523,659,784,1046].forEach((t,n)=>setTimeout(()=>this.tone(t,.22,"sine",.08),n*95))}levelUp(){[392,523,659,784,1046].forEach((t,n)=>setTimeout(()=>this.tone(t,.3,"triangle",.075),n*110))}badge(){[261,329,392,523,659].forEach((t,n)=>setTimeout(()=>this.tone(t,.5,"sine",.1),n*130))}error(){this.tone(140,.18,"square",.05,-20)}whoosh(){this.noise(.35,1600,.08)}}const ne=i=>document.getElementById(i),ys=(i,e,t)=>Math.min(t,Math.max(e,i)),Jc="titanbound.save.v1",Qc=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;class e_{constructor(){this.state=null,this.mode="loading",this.modalOpen=!1,this.dialogueOpen=!1,this.activeBattle=null,this.world=null,this.keys=new Set,this.touchMove={x:0,y:0},this.cameraYaw=0,this.cameraPitch=.17,this.cameraZoom=8.4,this.playerPos=new U,this.playerVY=0,this.jumping=!1,this.avatar=null,this.avatarFacing=Math.PI,this.nearest=null,this.playTime=0,this.saveTimer=0,this.clock=new hf,this.audio=new jv,this.isDragging=!1,this.dragLast={x:0,y:0},this.toastTimers=[],this.boundFrame=this.frame.bind(this),this.creatorStep=1,this.starterIndex=0,this.journalTab="craft",this.creator={gender:"female",skin:Ra[1],hairColor:Ca[1],outfit:Pa[0],hairStyle:2,name:"Aster"},this.initThree(),this.bindUI(),this.buildInterfaceOptions(),this.loadSave(),this.initStages(),this.resize(),requestAnimationFrame(this.boundFrame),setTimeout(()=>{ne("load-fill").style.width="100%",setTimeout(()=>this.showTitle(),450)},380)}initThree(){const e=new sv({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,Qc?1.35:1.75)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=jc,e.toneMapping=ir,e.toneMappingExposure=1.04,e.outputColorSpace=zt,e.domElement.setAttribute("aria-label","Titanbound 3D world"),ne("scene-host").appendChild(e.domElement),this.renderer=e,this.camera=new qt(52,window.innerWidth/window.innerHeight,.1,340),this.worldCamera=new qt(52,window.innerWidth/window.innerHeight,.1,340),this.composer=new hv(e),this.renderPass=new dv(new Ki,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new ts(new le(window.innerWidth,window.innerHeight),Qc?.22:.3,.55,.9),this.composer.addPass(this.bloomPass),this.composer.addPass(new fv),this.activeCamera=this.camera,this.scene=new Ki,window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.composer.setSize(e,t);for(const n of[this.camera,this.worldCamera,this.titleStage?.camera,this.stage?.camera,this.activeBattle?.arena?.camera])n&&n.isPerspectiveCamera&&(n.aspect=e/t,n.updateProjectionMatrix())}loadSave(){try{const e=localStorage.getItem(Jc);if(!e)return;const t=JSON.parse(e);if(!t||t.v!==1||!t.player?.party?.length)return;this.saved=t}catch(e){console.warn("Save could not be read",e)}}save(){if(!this.state?.player)return;const e=this.state.player;this.mode==="world"&&(e.x=this.playerPos.x,e.z=this.playerPos.z);const t={v:1,player:e,flags:this.state.flags||{},playTime:Math.round(this.playTime),savedAt:Date.now()};try{localStorage.setItem(Jc,JSON.stringify(t)),this.saved=t;const n=ne("save-state");n.textContent="SAVING…",n.classList.add("saving"),clearTimeout(this.saveFlash),this.saveFlash=setTimeout(()=>{n.textContent="AUTOSAVED",n.classList.remove("saving")},700)}catch(n){console.warn(n)}}initStages(){this.titleStage=Kv(),this.stage=Zv(),this.setScene(this.titleStage.scene,this.titleStage.camera)}setScene(e,t){this.scene=e,this.activeCamera=t,this.renderPass.scene=e,this.renderPass.camera=t}showTitle(){this.mode="title",ne("loading-screen").classList.add("out"),ne("creator-screen").classList.add("hidden"),ne("hud").classList.add("hidden"),ne("title-screen").classList.remove("hidden"),ne("btn-continue").classList.toggle("hidden",!this.saved),this.setScene(this.titleStage.scene,this.titleStage.camera),this.audio.setRegion("celestial")}startNew(){this.audio.init(),this.audio.select(),this.state={player:null,flags:{tutorial:!1,endingShown:!1}},this.creatorStep=1,this.starterIndex=0,this.creator={gender:"female",skin:Ra[1],hairColor:Ca[1],outfit:Pa[0],hairStyle:2,name:"Aster"},ne("trainer-name").value="Aster",this.mode="creator",ne("title-screen").classList.add("hidden"),ne("creator-screen").classList.remove("hidden"),ne("creator-step-1").classList.remove("hidden"),ne("creator-step-2").classList.add("hidden"),this.updateStepDots(1),this.stage.setTrainer(this.creator),this.stage.setMode("trainer"),this.setScene(this.stage.scene,this.stage.camera),this.syncCreatorUI(),this.renderStarterCards()}continueGame(){if(!this.saved)return;this.audio.init();const e=this.saved.player;this.state={player:e,flags:this.saved.flags||{}},this.playTime=this.saved.playTime||0,ne("title-screen").classList.add("hidden"),ne("creator-screen").classList.add("hidden"),this.enterRegion(e.regionId||"verdant",{x:e.x,z:e.z,silent:!0}),this.audio.select(),this.toast(`Welcome back, ${e.name}.`,"✦")}buildInterfaceOptions(){const e=ne("skin-select");e.innerHTML=Ra.map(a=>`<button class="swatch" data-skin="${a}" style="background:${a}" title="Skin tone"></button>`).join("");const t=ne("hair-color-select");t.innerHTML=Ca.map(a=>`<button class="swatch" data-hair="${a}" style="background:${a}" title="Hair color"></button>`).join("");const n=ne("outfit-select");n.innerHTML=Pa.map(a=>`<button class="swatch" data-outfit="${a}" style="background:${a}" title="Outfit color"></button>`).join("");const s=ne("hair-style-select");s.innerHTML=qc.map((a,r)=>`<button class="hair-opt" data-style="${r}">${a.slice(0,4)}</button>`).join(""),ne("gender-select").addEventListener("click",a=>{const r=a.target.closest("[data-value]");r&&(this.creator.gender=r.dataset.value,this.audio.click(),this.syncCreatorUI())}),e.addEventListener("click",a=>{const r=a.target.closest("[data-skin]");r&&(this.creator.skin=r.dataset.skin,this.audio.click(),this.syncCreatorUI())}),t.addEventListener("click",a=>{const r=a.target.closest("[data-hair]");r&&(this.creator.hairColor=r.dataset.hair,this.audio.click(),this.syncCreatorUI())}),n.addEventListener("click",a=>{const r=a.target.closest("[data-outfit]");r&&(this.creator.outfit=r.dataset.outfit,this.audio.click(),this.syncCreatorUI())}),s.addEventListener("click",a=>{const r=a.target.closest("[data-style]");r&&(this.creator.hairStyle=Number(r.dataset.style),this.audio.click(),this.syncCreatorUI())}),ne("trainer-name").addEventListener("input",a=>{this.creator.name=a.target.value.slice(0,16)}),ne("btn-randomize").addEventListener("click",()=>{const a=r=>r[Math.floor(Math.random()*r.length)];this.creator.skin=a(Ra),this.creator.hairColor=a(Ca),this.creator.outfit=a(Pa),this.creator.hairStyle=Math.floor(Math.random()*qc.length),this.creator.gender=Math.random()>.5?"female":"male",this.audio.select(),this.syncCreatorUI()}),ne("btn-to-partner").addEventListener("click",()=>{const a=ne("trainer-name").value.trim();if(!a){ne("trainer-name").focus(),this.toast("Every keeper needs a name.","!","bad"),this.audio.error();return}this.creator.name=a,this.audio.select(),this.showStarterStep()}),ne("btn-back-to-look").addEventListener("click",()=>{this.creatorStep=1,ne("creator-step-2").classList.add("hidden"),ne("creator-step-1").classList.remove("hidden"),this.updateStepDots(1),this.stage.setMode("trainer"),this.audio.click()}),ne("btn-begin").addEventListener("click",()=>this.beginJourney()),ne("creator-back").addEventListener("click",()=>{if(this.creatorStep===2){ne("btn-back-to-look").click();return}this.showTitle(),this.audio.click()})}syncCreatorUI(){const e=this.creator;document.querySelectorAll("#gender-select button").forEach(t=>t.classList.toggle("active",t.dataset.value===e.gender)),document.querySelectorAll("#skin-select .swatch").forEach(t=>t.classList.toggle("active",t.dataset.skin===e.skin)),document.querySelectorAll("#hair-color-select .swatch").forEach(t=>t.classList.toggle("active",t.dataset.hair===e.hairColor)),document.querySelectorAll("#outfit-select .swatch").forEach(t=>t.classList.toggle("active",t.dataset.outfit===e.outfit)),document.querySelectorAll("#hair-style-select .hair-opt").forEach(t=>t.classList.toggle("active",Number(t.dataset.style)===e.hairStyle)),this.stage.setTrainer(e)}updateStepDots(e){document.querySelectorAll(".step-dot").forEach(t=>t.classList.toggle("active",Number(t.dataset.step)===e))}showStarterStep(){this.creatorStep=2,ne("creator-step-1").classList.add("hidden"),ne("creator-step-2").classList.remove("hidden"),this.updateStepDots(2),this.stage.setMode("starters"),this.stage.selectStarter(this.starterIndex),this.setScene(this.stage.scene,this.stage.camera),this.renderStarterCards()}renderStarterCards(){const e=ne("starter-cards");e.innerHTML=$c.map((t,n)=>{const s=Te[t],a=tt[s.type];return`<button class="starter-card ${n===this.starterIndex?"active":""}" data-starter="${n}" style="--sc:${a.color}">
        <span class="card-num">0${n+1}</span>
        <span class="type-chip">${a.icon} ${a.name}</span>
        <h3>${s.name}</h3>
        <span class="epithet">${s.epithet}</span>
        <p>${s.desc}</p>
        <div class="pick-line"><span>${n===this.starterIndex?"CHOSEN PARTNER":"CHOOSE THIS TITAN"}</span><span>${n===this.starterIndex?"✦":"→"}</span></div>
      </button>`}).join(""),e.querySelectorAll("[data-starter]").forEach(t=>{t.addEventListener("click",()=>{this.starterIndex=Number(t.dataset.starter),this.stage.selectStarter(this.starterIndex),this.renderStarterCards(),this.audio.select()})})}beginJourney(){const e=$c[this.starterIndex],t=Te[e],n=Jh(e,5),s={name:this.creator.name||"Aster",gender:this.creator.gender,skin:this.creator.skin,hairColor:this.creator.hairColor,outfit:this.creator.outfit,hairStyle:this.creator.hairStyle,regionId:"verdant",x:0,z:18.4,badges:[],party:[n],reserve:[],activeIndex:0,inventory:{sunpetal:2,wildgrain:3},treats:{[t.type]:1},discovered:[e],seen:[e],startedAt:Date.now()};this.state.player=s,this.playTime=0,this.audio.init(),this.audio.badge(),ne("creator-screen").classList.add("hidden"),this.enterRegion("verdant",{silent:!0}),this.save(),setTimeout(()=>{this.toast("WASD or the left stick to move · drag to look","◈")},600),setTimeout(()=>{this.toast("Gather glowing plants, then craft treats in your Journal [C]","✦")},3200),setTimeout(()=>this.showIntroDialogue(),1100)}showIntroDialogue(){this.showDialogue({portrait:"W",name:"Wren Thistle",title:"Rootbound Warden",text:"So the isles have sent me a new keeper. Good. The titans are restless, and the eight sigils have gone quiet. Start at my grove beyond the path — but first, gather sunpetal. A titan trusts a full hand more than a fast one.",actions:[{label:"I understand",onClick:()=>this.toast("Objective: reach the Amberstep Grove","◇")}]})}bindUI(){ne("btn-new").addEventListener("click",()=>this.startNew()),ne("btn-continue").addEventListener("click",()=>this.continueGame()),ne("btn-atlas").addEventListener("click",()=>this.openAtlas()),ne("btn-journal").addEventListener("click",()=>this.openJournal(this.journalTab)),ne("btn-sound").addEventListener("click",()=>this.toggleSound()),ne("party-dock").addEventListener("click",()=>this.openJournal("party")),ne("dialogue-close").addEventListener("click",()=>this.closeDialogue()),ne("mobile-interact").addEventListener("click",()=>this.interact()),ne("mobile-journal").addEventListener("click",()=>this.openJournal(this.journalTab)),ne("btn-atlas").addEventListener("mouseenter",()=>this.audio.click()),ne("btn-journal").addEventListener("mouseenter",()=>this.audio.click()),ne("battle-sound")?.addEventListener("click",()=>this.toggleSound()),ne("modal-layer").addEventListener("click",e=>{e.target===ne("modal-layer")&&this.closeModal()}),window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),this.bindPointer(),this.bindJoystick()}toggleSound(){this.audio.ctx||this.audio.init();const e=this.audio.toggle();this.toast(e?"Sound on":"Sound muted",e?"♪":"◌")}bindPointer(){const e=this.renderer.domElement;e.addEventListener("pointerdown",n=>{this.mode!=="world"||this.modalOpen||this.dialogueOpen||(this.isDragging=!0,this.dragLast.x=n.clientX,this.dragLast.y=n.clientY,e.setPointerCapture?.(n.pointerId))}),e.addEventListener("pointermove",n=>{if(!this.isDragging)return;const s=n.clientX-this.dragLast.x,a=n.clientY-this.dragLast.y;this.dragLast.x=n.clientX,this.dragLast.y=n.clientY,this.cameraYaw-=s*.006,this.cameraPitch=ys(this.cameraPitch+a*.0035,-.08,.62)});const t=()=>{this.isDragging=!1};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{this.mode!=="world"||this.modalOpen||(n.preventDefault(),this.cameraZoom=ys(this.cameraZoom+n.deltaY*.006,5.8,12.5))},{passive:!1})}bindJoystick(){const e=ne("joystick"),t=ne("joystick-knob");let n=null,s=0,a=0;const r=37,o=c=>{if(n!==c.pointerId)return;let h=c.clientX-s,u=c.clientY-a;const d=Math.hypot(h,u);d>r&&(h=h/d*r,u=u/d*r),t.style.transform=`translate(${h}px, ${u}px)`,this.touchMove.x=h/r,this.touchMove.y=-u/r};e.addEventListener("pointerdown",c=>{n=c.pointerId;const h=e.getBoundingClientRect();s=h.left+h.width/2,a=h.top+h.height/2,e.setPointerCapture?.(c.pointerId),o(c)}),e.addEventListener("pointermove",o);const l=c=>{n===c.pointerId&&(n=null,t.style.transform="translate(0,0)",this.touchMove.x=0,this.touchMove.y=0)};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}onKeyDown(e){if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")){if(e.code==="Escape"){this.dialogueOpen?this.closeDialogue():this.modalOpen&&this.closeModal();return}if(this.mode==="world"&&!this.modalOpen&&!this.dialogueOpen&&!e.repeat&&(e.code==="KeyE"&&(e.preventDefault(),this.interact()),e.code==="KeyM"&&(e.preventDefault(),this.openAtlas()),e.code==="KeyC"&&(e.preventDefault(),this.openJournal(this.journalTab)),e.code==="Space"&&(e.preventDefault(),this.jump())),this.mode==="battle"&&this.activeBattle&&!this.activeBattle.busy&&["Digit1","Digit2","Digit3","Digit4"].includes(e.code)){const t=Number(e.code.slice(-1))-1,n=Vi(Te[this.activeBattle.playerCreature.speciesId],this.activeBattle.playerCreature.level);n[t]&&this.activeBattle.useMove(n[t])}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(e.code)&&this.keys.add(e.code)}}jump(){!this.jumping&&this.mode==="world"&&(this.jumping=!0,this.playerVY=5.6,this.audio.whoosh())}interact(){if(this.mode!=="world"||this.modalOpen||this.dialogueOpen)return;if(!this.nearest){this.audio.error();return}this.audio.click();const e=this.nearest;e.type==="wild"?this.startWildBattle(e.target):e.type==="resource"?this.collectResource(e.target):e.type==="waystone"?this.openAtlas():e.type==="gym"&&this.talkToGym()}enterRegion(e,t={}){const n=tr(e);this.world&&(this.world.dispose(),this.world=null),this.avatar&&(this.avatar.parent?.remove(this.avatar),this.avatar=null),this.world=qv(e),this.state.player.regionId=e,this.playerPos.set(t.x??this.world.spawn.x,0,t.z??this.world.spawn.z),t.x===void 0&&(this.playerPos.x=this.world.spawn.x,this.playerPos.z=this.world.spawn.z),this.playerPos.y=this.world.heightAt(this.playerPos.x,this.playerPos.z),this.cameraYaw=0,this.cameraPitch=.17,this.cameraZoom=8.4,this.createAvatar(),this.avatar.position.copy(this.playerPos),this.avatar.rotation.y=Math.PI,this.avatarFacing=Math.PI,this.setScene(this.world.scene,this.worldCamera),this.mode="world",this.modalOpen=!1,this.dialogueOpen=!1,this.playerVY=0,this.jumping=!1,this.nearest=null,ne("hud").classList.remove("hidden"),ne("battle-ui").classList.add("hidden"),ne("dialogue").classList.add("hidden"),this.closeModal();for(const s of n.creatures)this.state.player.seen.includes(s)||this.state.player.seen.push(s);this.state.player.activeIndex=ys(this.state.player.activeIndex||0,0,this.state.player.party.length-1),this.audio.setRegion(e),this.refreshHUD(),this.updateCamera(0,!0),t.silent||(this.toast(`${n.name} — ${n.subtitle}`,"◇"),this.save()),ne("load-fill").style.width="100%",ne("loading-screen").classList.add("out")}createAvatar(){const e=this.state.player;this.avatar=yl({gender:e.gender,skin:e.skin,hairColor:e.hairColor,outfit:e.outfit,hairStyle:e.hairStyle}),this.avatar.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),this.world.scene.add(this.avatar)}frame(e){const t=Math.min(this.clock.getDelta(),.05),n=performance.now()/1e3;this.mode==="title"?this.titleStage.update(t,n):this.mode==="creator"?this.stage.update(t,n):this.mode==="world"?(this.updateWorld(t,n),!this.modalOpen&&!this.dialogueOpen&&(this.playTime+=t)):this.mode==="battle"&&this.activeBattle&&this.activeBattle.update(t,n),this.composer.render(),requestAnimationFrame(this.boundFrame)}updateWorld(e,t){this.world&&(this.world.update(e,t),this.mode==="world"&&!this.modalOpen&&!this.dialogueOpen&&this.updatePlayer(e,t),this.updateCamera(e),this.updateInteraction(),this.updateMinimap(),this.mode==="world"&&(this.saveTimer+=e,this.saveTimer>20&&(this.saveTimer=0,this.save())))}updatePlayer(e,t){let n=0,s=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(s+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(s-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),n+=this.touchMove.x,s+=this.touchMove.y;const a=Math.hypot(n,s);a>1&&(n/=a,s/=a);const r=-Math.sin(this.cameraYaw),o=-Math.cos(this.cameraYaw),l=Math.cos(this.cameraYaw),c=-Math.sin(this.cameraYaw);let h=r*s+l*n,u=o*s+c*n;const d=Math.hypot(h,u)>.05,f=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),g=d?f?10.2:6.9:0;if(d){const m=Math.hypot(h,u);h/=m,u/=m,this.playerPos.x+=h*g*e,this.playerPos.z+=u*g*e;const p=Math.hypot(this.playerPos.x,this.playerPos.z);p>55&&(this.playerPos.x=this.playerPos.x/p*55,this.playerPos.z=this.playerPos.z/p*55);let b=Math.atan2(h,u)-this.avatarFacing;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;this.avatarFacing+=b*Math.min(1,e*12)}const _=this.world.heightAt(this.playerPos.x,this.playerPos.z);this.jumping?(this.playerVY-=16*e,this.playerPos.y+=this.playerVY*e,this.playerPos.y<=_&&(this.playerPos.y=_,this.playerVY=0,this.jumping=!1)):this.playerPos.y+=(_-this.playerPos.y)*Math.min(1,e*14),this.avatar&&(this.avatar.position.copy(this.playerPos),this.avatar.rotation.y=this.avatarFacing,this.avatar.userData.update?.(t,d)),d&&this.world.particles}updateCamera(e,t=!1){if(!this.avatar)return;const n=this.cameraZoom,s=Math.cos(this.cameraPitch),a=this.playerPos.x+Math.sin(this.cameraYaw)*n*s,r=this.playerPos.z+Math.cos(this.cameraYaw)*n*s;let o=this.playerPos.y+2.2+Math.sin(this.cameraPitch)*n*.72;const l=this.world.heightAt(a,r);o=Math.max(o,l+1.3);const c=this.playerPos.x,h=this.playerPos.y+2.2,u=this.playerPos.z;if(t)this.worldCamera.position.set(a,o,r);else{const d=1-Math.exp(-e*7.5);this.worldCamera.position.lerp(new U(a,o,r),d)}this.worldCamera.lookAt(c,h,u)}updateInteraction(){if(!this.world||this.modalOpen||this.dialogueOpen||this.mode!=="world"){ne("interact-prompt").classList.add("hidden"),this.nearest=null;return}let e=null,t=1/0;const n=(o,l,c,h,u)=>{c<t&&(t=c,e={type:o,target:l,label:h,sub:u,dist:c})};for(const o of this.world.wilds){if(!o.active)continue;const l=Math.hypot(o.x-this.playerPos.x,o.z-this.playerPos.z);l<8.4&&n("wild",o,l,`Challenge ${Te[o.speciesId].name}`,`${tt[Te[o.speciesId].type].name} · Lv ${o.level} · Wild Titan`)}for(const o of this.world.resources){if(!o.active)continue;const l=Math.hypot(o.group.position.x-this.playerPos.x,o.group.position.z-this.playerPos.z);l<4.6&&n("resource",o,l,`Gather ${Bi[this.world.region.material].name}`,`Scavenge · +2 ${Bi[this.world.region.material].name}, +1 Wildgrain`)}const s=Math.hypot(this.world.waystone.pos.x-this.playerPos.x,this.world.waystone.pos.z-this.playerPos.z);s<6.2&&n("waystone",this.world.waystone,s,"Open the Atlas","Waystone · Travel & rest");const a=Math.hypot(this.world.gym.interactPos.x-this.playerPos.x,this.world.gym.interactPos.z-this.playerPos.z);if(a<11.5){const o=this.state.player.badges.includes(this.world.region.id);n("gym",this.world.gym,a,`Challenge ${this.world.region.gym.leader}`,o?`${this.world.region.gym.name} · Sigil earned`:`${this.world.region.gym.name} · ${tt[this.world.region.type].name} Gym`)}this.nearest=e;const r=ne("interact-prompt");e?(r.classList.remove("hidden"),ne("interact-label").textContent=e.label,ne("interact-sub").textContent=e.sub):r.classList.add("hidden")}collectResource(e){if(!e.active)return;e.active=!1,e.group.visible=!1,e.respawnAt=performance.now()+5e4;const t=this.world.region.material;this.state.player.inventory[t]=(this.state.player.inventory[t]||0)+2,this.state.player.inventory.wildgrain=(this.state.player.inventory.wildgrain||0)+1,this.audio.select(),ne("flash").classList.add("on"),setTimeout(()=>ne("flash").classList.remove("on"),80),this.toast(`+2 ${Bi[t].name} · +1 Wildgrain`,Bi[t].icon,"good"),this.save()}startWildBattle(e){if(e.active){if(!this.state.player.party.some(t=>t.hp>0)){this.toast("Your party is exhausted. Rest at a waystone.","◌","bad");return}this.startBattle({type:"wild",wild:e,regionId:this.state.player.regionId})}}talkToGym(){const e=this.world.region,t=e.gym;if(this.state.player.badges.includes(e.id)){this.showDialogue({portrait:t.leader[0],name:t.leader,title:t.title,text:`The sigil is yours, and the grove remembers. ${t.quote} If you seek the rest of the circle, the waystone will carry you.`,actions:[{label:"Farewell",onClick:()=>{}}]});return}this.showDialogue({portrait:t.leader[0],name:t.leader,title:t.title,text:`I am ${t.leader}, keeper of ${t.name}. ${t.quote} My titans have held this ground for a long time. Show me a bond that can move them.`,actions:[{label:`Challenge · Lv ${Math.min(...t.team.map(s=>s.level))}–${Math.max(...t.team.map(s=>s.level))}`,onClick:()=>this.startBattle({type:"gym",gym:t,regionId:e.id})},{label:"Not yet",onClick:()=>{}}]})}startBattle(e){this.closeDialogue(),this.closeModal(),!this.modalOpen&&(this.audio.init(),this.audio.whoosh(),ne("flash").classList.add("on"),setTimeout(()=>ne("flash").classList.remove("on"),120),this.mode="battle",this.activeBattle=new Qv(this,e),this.setScene(this.activeBattle.arena.scene,this.activeBattle.arena.camera),this.resize())}enterBattleMode(e){this.mode="battle",ne("hud").classList.add("hidden"),ne("interact-prompt").classList.add("hidden")}showBattleUI(e){ne("battle-ui").classList.toggle("hidden",!e)}finishBattle(e,t={}){const n=e.resultData||{};if(e.destroy(),this.activeBattle=null,this.mode="world",this.showBattleUI(!1),this.setScene(this.world.scene,this.worldCamera),n.lost){const s=this.world.waystone.pos;this.playerPos.set(s.x,this.world.heightAt(s.x,s.z+3.2),s.z+3.2);for(const a of this.state.player.party){const r=Qt(Te[a.speciesId],a.level);a.hp=r.hp,a.maxHp=r.hp}this.toast("Your party was tended at the waystone.","✦","good")}n.badge&&(this.toast(`Sigil earned: ${n.badge.badge}`,n.badge.sigil,"good"),setTimeout(()=>this.checkEnding(),750)),n.caught,t.fled&&this.toast("You escaped the encounter.","↩"),ne("hud").classList.remove("hidden"),this.refreshHUD(),this.updateCamera(0,!0),this.save(),this.audio.setRegion(this.state.player.regionId)}checkEnding(){this.state.player.badges.length>=8&&!this.state.flags.endingShown&&(this.state.flags.endingShown=!0,this.save(),this.audio.badge(),this.openModal(`<div class="modal-shell" style="max-width:720px">
        <div class="modal-head">
          <div><div class="panel-eyebrow">THE EIGHTFOLD CIRCLE</div><h2>A Keeper of the Isles</h2><p>Eight sigils. Eight keepers. One bond.</p></div>
          <button class="modal-close" data-close>×</button>
        </div>
        <div class="modal-body" style="text-align:center;padding-bottom:40px">
          <div style="font-size:3rem;color:#f2c96d;text-shadow:0 0 40px rgba(242,201,109,.5)">✦</div>
          <p style="max-width:500px;margin:20px auto;font-size:0.82rem;line-height:1.85;color:#cfd3dd;font-weight:300">
            The last sigil settles into your keeper's ring. Somewhere beyond the fog, the titans answer with a sound like mountains remembering their names.
            <br><br>
            You came to the isles with one small friend and a handful of treats. You leave with a circle of eight, and the wilds themselves know your footsteps.
          </p>
          <button class="btn btn-primary" data-close style="margin:0 auto"><span>Keep Exploring</span><i>✦</i></button>
        </div>
      </div>`))}addCaptured(e){const t=this.state.player;return t.discovered.includes(e.speciesId)||t.discovered.push(e.speciesId),t.seen.includes(e.speciesId)||t.seen.push(e.speciesId),t.party.length<6?(t.party.push(e),"party"):(t.reserve.push(e),"reserve")}refreshHUD(){if(!this.state?.player)return;const e=this.state.player,t=tr(e.regionId),n=tt[t.type];ne("hud-region-index").textContent=String(t.number).padStart(2,"0"),ne("hud-region-name").textContent=t.name,ne("hud-region-sub").textContent=t.subtitle,ne("hud-region-type").textContent=n.name,ne("hud-region-type").style.setProperty("--type",n.color),ne("hud-region").style.borderLeftColor=n.color,ne("map-caption").textContent=t.name.toUpperCase(),ne("keeper-name").textContent=e.name,ne("keeper-initial").textContent=e.name[0]?.toUpperCase()||"A";const s=e.badges.length>=8?"Isle Champion":e.badges.length>=6?"High Keeper":e.badges.length>=3?"Sigil Seeker":e.badges.length>=1?"Trail Keeper":"Novice Keeper";ne("keeper-title").textContent=s,ne("badge-rack").innerHTML=gv.map(o=>`<div class="badge-slot ${e.badges.includes(o.id)?"earned":""}" style="--bc:${tt[o.type].color}" title="${o.name} — ${o.leader}">${o.sigil}</div>`).join(""),e.badges.includes(t.id)?e.badges.length>=8?ne("hud-objective-text").textContent="The Eightfold Circle is complete":ne("hud-objective-text").textContent="Travel onward — another sigil awaits":ne("hud-objective-text").textContent=`${t.gym.leader} waits at ${t.gym.name}`;const r=e.party;ne("party-dock").innerHTML=r.map((o,l)=>{const c=Te[o.speciesId],h=tt[c.type],u=Qt(c,o.level);return`<div class="party-pill ${l===e.activeIndex?"active":""} ${o.hp<=0?"fainted":""}" style="--bc:${h.color}" data-party="${l}">
        <div class="orb">${h.icon}</div>
        <div><b>${c.name}</b><span>Lv ${o.level}</span></div>
        <div class="mini-hp"><i style="width:${ys(o.hp/u.hp*100,0,100)}%;background:${o.hp/u.hp<.3?"#ff766b":"#78e4a2"}"></i></div>
      </div>`}).join(""),ne("party-dock").querySelectorAll("[data-party]").forEach(o=>{o.addEventListener("click",()=>{e.activeIndex=Number(o.dataset.party),this.audio.click(),this.refreshHUD(),this.save()})})}updateMinimap(){if(!this.world)return;const e=ne("minimap"),t=e.getContext("2d"),n=e.width,s=e.height,a=n/2,r=s/2,o=2.36;t.clearRect(0,0,n,s);const l=this.world.region,c=l.palette,h=t.createRadialGradient(a,r,20,a,r,154);h.addColorStop(0,"rgba(34,49,63,0.55)"),h.addColorStop(1,"rgba(6,10,18,0.25)"),t.fillStyle=h,t.beginPath(),t.arc(a,r,154,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.08)",t.lineWidth=1;for(const m of[52,100,145])t.beginPath(),t.arc(a,r,m,0,Math.PI*2),t.stroke();t.beginPath(),t.moveTo(a-150,r),t.lineTo(a+150,r),t.moveTo(a,r-150),t.lineTo(a,r+150),t.stroke();const u=(m,p)=>{const x=m-this.playerPos.x,b=p-this.playerPos.z;return[a+x*o,r+b*o]};for(const m of this.world.resources){if(!m.active)continue;const[p,x]=u(m.group.position.x,m.group.position.z);Math.hypot(p-a,x-r)>150||(t.fillStyle=c.glow,t.beginPath(),t.arc(p,x,2.4,0,Math.PI*2),t.fill())}for(const m of this.world.wilds){if(!m.active)continue;const[p,x]=u(m.x,m.z);Math.hypot(p-a,x-r)>150||(t.fillStyle=tt[Te[m.speciesId].type].color,t.beginPath(),t.arc(p,x,3.5,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(0,0,0,0.45)",t.stroke())}const[d,f]=u(this.world.gym.pos.x,this.world.gym.pos.z);Math.hypot(d-a,f-r)<150&&(t.save(),t.translate(d,f),t.rotate(Math.PI/4),t.fillStyle=this.state.player.badges.includes(l.id)?c.glow:"#f2c96d",t.fillRect(-6,-6,12,12),t.strokeStyle="#0a0f1b",t.lineWidth=2,t.strokeRect(-6,-6,12,12),t.restore());const[g,_]=u(this.world.waystone.pos.x,this.world.waystone.pos.z);Math.hypot(g-a,_-r)<150&&(t.fillStyle="#8fe8ff",t.fillRect(g-4,_-4,8,8),t.strokeStyle="rgba(10,20,30,0.7)",t.strokeRect(g-4,_-4,8,8)),t.save(),t.translate(a,r),t.rotate(-this.avatarFacing),t.fillStyle="#fff4ce",t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,7),t.lineTo(0,4),t.lineTo(-5.5,7),t.closePath(),t.fill(),t.restore(),t.strokeStyle="rgba(255,224,151,0.35)",t.lineWidth=1.5,t.beginPath(),t.arc(a,r,152,0,Math.PI*2),t.stroke()}toast(e,t="✦",n=""){const s=ne("toast-stack"),a=document.createElement("div");a.className=`toast ${n}`,a.innerHTML=`<span class="t-icon">${t}</span><span>${e}</span>`,s.appendChild(a);const r=setTimeout(()=>{a.classList.add("out"),setTimeout(()=>a.remove(),420)},3200);this.toastTimers.push(r)}showDialogue({portrait:e,name:t,title:n,text:s,actions:a=[]}){this.dialogueOpen=!0,ne("dialogue").classList.remove("hidden"),ne("dialogue-portrait").textContent=e||t?.[0]||"?",ne("dialogue-name").textContent=t,ne("dialogue-title").textContent=n,ne("dialogue-text").textContent=s;const r=ne("dialogue-actions");r.innerHTML="",a.forEach((o,l)=>{const c=document.createElement("button");c.textContent=o.label,c.onclick=()=>{this.audio.click(),this.closeDialogue(),o.onClick?.()},r.appendChild(c)}),this.audio.select()}closeDialogue(){this.dialogueOpen=!1,ne("dialogue").classList.add("hidden")}openModal(e){const t=ne("modal-layer");t.innerHTML=e,t.classList.remove("hidden"),this.modalOpen=!0,ne("interact-prompt").classList.add("hidden"),t.querySelectorAll("[data-close]").forEach(n=>n.addEventListener("click",()=>this.closeModal())),this.audio.select()}closeModal(){this.modalOpen=!1,ne("modal-layer").classList.add("hidden"),ne("modal-layer").innerHTML="",ne("interact-prompt").classList.add("hidden")}openAtlas(){if(this.mode!=="world")return;const e=this.state.player,n=`<div class="modal-shell">
      <div class="modal-head">
        <div><div class="panel-eyebrow">WAYSTONE ATLAS</div><h2>The Eight Isles</h2><p>Danger rises with each isle. Your sigils open no doors — only your bond does.</p></div>
        <button class="modal-close" data-close>×</button>
      </div>
      <div class="modal-body">
        <div class="atlas-grid">${er.map(a=>{const r=tt[a.type],o=e.badges.includes(a.id),l=e.regionId===a.id;return`<button class="region-card ${l?"current":""} ${o?"cleared":""}" data-region="${a.id}" style="--rc:${r.color}">
        <div class="rc-top"><span class="rc-num">0${a.number}</span><span class="rc-type">${r.icon} ${r.name}</span></div>
        <h3>${a.name}</h3>
        <p>${a.subtitle}</p>
        <div class="rc-meta"><span>LV ${a.levelRange[0]}–${a.levelRange[1]}</span><span class="rc-badge ${o?"":"locked"}">${a.gym.sigil} ${a.gym.badge}</span></div>
        <div class="rc-cta">${l?"You are here":`Travel · ${a.gym.leader}`}</div>
      </button>`}).join("")}</div>
        <div class="atlas-note">
          <span>${e.badges.length} / 8 sigils earned</span>
          <button class="text-btn" id="atlas-rest">✦ Rest & tend party</button>
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:14px"><button class="btn btn-primary" data-close><span>Close Atlas</span></button></div>
      </div>
    </div>`;this.openModal(n),ne("modal-layer").querySelectorAll("[data-region]").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.region;if(r===this.state.player.regionId){this.closeModal();return}this.closeModal(),ne("flash").classList.add("on"),setTimeout(()=>ne("flash").classList.remove("on"),140),this.enterRegion(r)})}),ne("atlas-rest")?.addEventListener("click",()=>{for(const a of e.party){const r=Qt(Te[a.speciesId],a.level);a.hp=r.hp,a.maxHp=r.hp}this.audio.levelUp(),this.toast("Party restored at the waystone.","✦","good"),this.save(),this.openAtlas()})}openJournal(e="craft"){if(this.mode!=="world")return;this.journalTab=e;const t=this.state.player,n=[["craft","Treat Crafting"],["party","Party"],["codex","Field Guide"]],s=t.inventory||{},a=Object.values(t.treats||{}).reduce((h,u)=>h+u,0),r=Object.values(s).reduce((h,u)=>h+u,0);let o="";if(e==="craft"){const h=Object.entries(Bi).map(([d,f])=>{const g=s[d]||0;return`<div class="ing-chip"><span>${f.icon}</span><span>${f.name}</span><b>${g}</b></div>`}).join(""),u=Object.entries(ja).map(([d,f])=>{const g=tt[d],_=Object.entries(f.recipe).every(([p,x])=>(s[p]||0)>=x),m=Object.entries(f.recipe).map(([p,x])=>`${Bi[p].name} ${s[p]||0}/${x}`).join(" · ");return`<div class="craft-card" style="--tc:${g.color}">
          <div class="craft-icon">${f.icon}</div>
          <h4>${f.name}</h4>
          <div class="craft-type">${g.name} treat · ×${f.yield}</div>
          <p>${f.desc}</p>
          <div class="recipe-line"><span>${m}</span><b>×${t.treats?.[d]||0}</b></div>
          <button class="craft-btn" data-craft="${d}" ${_?"":"disabled"}>${_?"Craft Treat":"Need ingredients"}</button>
        </div>`}).join("");o=`<div class="bag-summary">
        <div class="bag-stat"><span>READY TREATS</span><b>${a}</b></div>
        <div class="bag-stat"><span>INGREDIENTS</span><b>${r}</b></div>
        <div class="bag-stat"><span>SIGILS</span><b>${t.badges.length} / 8</b></div>
      </div>
      <h3 class="journal-title">Field Ingredients</h3>
      <div class="inv-strip">${h}</div>
      <h3 class="journal-title">Treat Recipes</h3>
      <div class="craft-grid">${u}</div>`}else if(e==="party")o=`<div class="bag-summary">
        <div class="bag-stat"><span>PARTY</span><b>${t.party.length} / 6</b></div>
        <div class="bag-stat"><span>SANCTUARY</span><b>${t.reserve.length}</b></div>
        <div class="bag-stat"><span>KNOWN TITANS</span><b>${t.discovered.length} / ${Object.keys(Te).length}</b></div>
      </div>
      <div class="party-grid">${t.party.map((h,u)=>this.partyCard(h,u,!0)).join("")}</div>
      ${t.reserve.length?`<h3 class="journal-title" style="margin-top:22px">Sanctuary</h3><div class="reserve-list">${t.reserve.map((h,u)=>{const d=Te[h.speciesId],f=tt[d.type];return`<div class="reserve-card" style="--tc:${f.color}"><div><b>${d.name}</b><span>Lv ${h.level} · ${f.name}</span></div><button class="mini-btn" data-reserve="${u}">Swap in</button></div>`}).join("")}</div>`:""}`;else{const h=Object.entries(Te).map(([u,d])=>{const f=t.discovered.includes(u),g=t.seen.includes(u)||f,_=tt[d.type];return`<div class="codex-card ${g?"seen":"empty-codex"}" style="--cc:${_.color}">
          <span>${f?"CAUGHT":g?"SEEN":"UNDISCOVERED"}</span>
          <h4>${g?d.name:"???"}</h4>
          <p>${g?d.epithet:"The wilds keep this one hidden."}</p>
        </div>`}).join("");o=`<div class="bag-summary">
        <div class="bag-stat"><span>REGISTERED</span><b>${t.discovered.length}</b></div>
        <div class="bag-stat"><span>SEEN IN THE WILD</span><b>${t.seen.length}</b></div>
        <div class="bag-stat"><span>REGIONS</span><b>${t.badges.length} / 8</b></div>
      </div><div class="codex-grid">${h}</div>`}const l=`<div class="modal-shell">
      <div class="modal-head">
        <div><div class="panel-eyebrow">KEEPER'S JOURNAL</div><h2>${t.name}'s Field Notes</h2><p>Recipes, companions, and the titans you have met.</p></div>
        <button class="modal-close" data-close>×</button>
      </div>
      <div class="modal-body">
        <div class="journal-tabs">${n.map(([h,u])=>`<button class="tab-btn ${e===h?"active":""}" data-tab="${h}">${u}</button>`).join("")}</div>
        ${o}
      </div>
    </div>`;this.openModal(l);const c=ne("modal-layer");c.querySelectorAll("[data-tab]").forEach(h=>h.addEventListener("click",()=>{this.audio.click(),this.openJournal(h.dataset.tab)})),c.querySelectorAll("[data-craft]").forEach(h=>h.addEventListener("click",()=>this.craftTreat(h.dataset.craft))),c.querySelectorAll("[data-lead]").forEach(h=>h.addEventListener("click",()=>{const u=Number(h.dataset.lead);if(t.party[u].hp<=0){this.audio.error(),this.toast("That titan needs rest first.","◌","bad");return}t.activeIndex=u,this.refreshHUD(),this.save(),this.audio.select(),this.openJournal("party")})),c.querySelectorAll("[data-reserve]").forEach(h=>h.addEventListener("click",()=>{const u=Number(h.dataset.reserve),d=t.activeIndex||0,f=t.reserve[u],g=t.party[d];t.party[d]=f,t.reserve[u]=g,this.audio.select(),this.toast(`${Te[f.speciesId].name} joins the party.`,"✦","good"),this.save(),this.openJournal("party")}))}partyCard(e,t,n){const s=Te[e.speciesId],a=tt[s.type],r=Qt(s,e.level),o=Vi(s,e.level).map(l=>{const c=Gi[l];return`<span class="pc-move" style="--mc:${tt[c.type].color}">${c.name}</span>`}).join("");return`<div class="party-card" style="--pc:${a.color}">
      <div class="party-orb">${a.icon}</div>
      <div><h4>${s.name} ${t===this.state.player.activeIndex?'<span style="color:#f2c96d;font-size:.55rem">LEAD</span>':""}</h4>
        <div class="pc-meta">${a.name} · Lv ${e.level} · ${e.nature||"Curious"}</div>
        <div class="pc-hp"><i style="width:${ys(e.hp/r.hp*100,0,100)}%;background:${e.hp/r.hp<.3?"#ff766b":"#78e4a2"}"></i></div>
        <div class="pc-info"><span>${e.hp} / ${r.hp} HP</span><span>XP ${e.xp} / ${Xo(e.level)}</span></div>
      </div>
      <div class="pc-moves">${o}</div>
      ${n?`<div class="pc-actions"><button class="mini-btn" data-lead="${t}" ${e.hp<=0?"disabled":""}>Set as lead</button></div>`:""}
    </div>`}craftTreat(e){const t=this.state.player,n=ja[e],s=t.inventory;for(const[a,r]of Object.entries(n.recipe))if((s[a]||0)<r){this.audio.error(),this.toast("Not enough ingredients.","◌","bad");return}for(const[a,r]of Object.entries(n.recipe))s[a]-=r;t.treats[e]=(t.treats[e]||0)+n.yield,this.audio.select(),this.toast(`Crafted ×${n.yield} ${n.name}`,n.icon,"good"),this.save(),this.openJournal("craft")}}window.addEventListener("DOMContentLoaded",()=>{const i=new e_;window.__TITANBOUND__=i,i.renderer.compile(i.titleStage.scene,i.titleStage.camera)});
