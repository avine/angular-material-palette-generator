import{$ as Kl$2,$n as pg,$t as _p$1,A as GI,An as iD,Ar as z,At as Te,B as Ic$1,Bn as lg,Bt as Wn$2,C as Eu,Cn as gI,Cr as wD,Ct as Rp$1,D as Ft$3,Dn as hc$1,Dr as xI,Dt as TD,E as Fn$2,En as hI,Er as x,Et as T$1,F as Hh$1,Fn as jy,Fr as zv,Ft as Vh$1,G as Jg,Gn as ml$3,Gt as Yl$2,H as Ip$1,Hn as lp,Ht as Xh$1,I as Hp$1,In as kp$1,It as Vm$1,J as Jt$1,Jn as ng,Jt as ZP,K as Jh$1,Kn as mp$1,Kt as Yo$2,L as Ht$2,Ln as kt$2,Lt as Vp$1,M as Gf,Mn as ie$1,Mr as zP,Mt as UI,N as Gi$1,Nn as je$2,Nr as za$2,Nt as UP,O as G,On as hg,Or as yD,Ot as TI,P as Gm$1,Pn as jn$2,Pr as zm$1,Pt as VE,Q as Kh$1,Qn as pI,Qt as _e$1,R as ID,Rn as lI,Rt as WP,S as Es$2,Sn as gD,Sr as vt$1,St as Rm$1,T as Fe$1,Tn as gp$1,Tr as wp$1,Tt as Sp$1,U as Iu,Un as lu,Ut as Xt$2,V as Ii$2,Vn as li,Vt as XP,W as JP,Wn as me,Wt as Yg,X as KP,Xn as oh$1,Xt as Zp$1,Y as K,Yn as og,Yt as Zh$1,Z as Kg,Zn as or$2,Zt as Zv,_ as Dy,_n as en$1,_r as vD,_t as Qa$3,a as Ap$1,an as b$1,ar as qE,at as Mh$1,b as Eo$2,bn as fl$3,br as vp$2,bt as Qp$1,c as CI,cn as cg,cr as rg,ct as ND,d as Cr$3,dn as cu,dr as tD,dt as Ne$1,en as aD,er as pm,et as Ko$2,f as DD,fn as dD,fr as tE,ft as On$2,g as Du,gn as eg,gr as ug,h as Dp$1,hn as eF,hr as ue$1,ht as Q$1,i as $i$1,in as av,ir as q$1,it as Me,j as GP,jn as iI,jr as zE,jt as UE,k as GE,kn as hr$3,kr as yl$2,kt as Ta$3,l as Cl$2,ln as cp,lr as rh$1,lt as NI,m as Di$2,mn as dg,mr as tg,mt as Op$1,n as $P,nn as an$1,nr as pr$3,nt as Lo$2,o as Bh$1,on as bn$2,ot as Mp$1,p as Dc$1,pn as dI,pr as tF,pt as Oo$2,q as Jp$1,qn as nF,qt as Yp$1,r as $e$2,rn as at$2,rr as py,rt as MI,s as By,sn as bp$1,sr as qm$1,st as N,t as $E,tn as ag,tr as pp$1,tt as Ln$2,u as Cp$1,un as ct$2,ur as sD,ut as Nd$1,v as ED,vn as fI,vr as vc$1,vt as Qg,w as FE,wn as gg,wr as wI,wt as SI,x as Er$3,xn as fo$2,xr as vr$3,xt as Qs$3,y as Ec$1,yn as fg,yr as vg,yt as Qm$1,z as II,zn as le$1,zt as Wm$1}from"./chunk-DFTePz6C.js";var tr$1=null;function te(){return tr$1}function gi$1(i){tr$1??=i}var It$1=class{};var at$1=(()=>{class i{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:()=>b$1(nr$1),providedIn:`platform`})}return i})();var nr$1=(()=>{class i extends at$1{_location;_history;_doc=b$1(or$2);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return te().getBaseHref(this._doc)}onPopState(e){let n=te().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=te().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:()=>new i,providedIn:`platform`})}return i})();function rr$1(i,t){return i?t?i.endsWith(`/`)?t.startsWith(`/`)?i+t.slice(1):i+t:t.startsWith(`/`)?i+t:`${i}/${t}`:i:t}function ir$1(i){let t=i.search(/#|\?|$/);return i[t-1]===`/`?i.slice(0,t-1)+i.slice(t):i}function Ne(i){return i&&i[0]!==`?`?`?${i}`:i}var gn$2=(()=>{class i{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:()=>b$1(ps$2),providedIn:`root`})}return i})();var ms$2=new x(``);var ps$2=(()=>{class i extends gn$2{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??b$1(or$2).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rr$1(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ne(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let a=this.prepareExternalUrl(o+Ne(r));this._platformLocation.pushState(e,n,a)}replaceState(e,n,o,r){let a=this.prepareExternalUrl(o+Ne(r));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||i)(Ne$1(at$1),Ne$1(ms$2,8))};static ɵprov=ue$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var bn$1=(()=>{class i{_subject=new K;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=gs$2(ir$1(or$1(n))),this._locationStrategy.onPopState(o=>{let r={url:this.path(!0),pop:!0,state:o.state,type:o.type};o.hasUAVisualTransition&&(r.hasUAVisualTransition=!0),this._subject.next(r)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+Ne(n))}normalize(e){return i.stripTrailingSlash(fs$2(this._basePath,or$1(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,o=null){this._locationStrategy.pushState(o,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ne(n)),o)}replaceState(e,n=``,o=null){this._locationStrategy.replaceState(o,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ne(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Ne;static joinWithSlash=rr$1;static stripTrailingSlash=ir$1;static ɵfac=function(n){return new(n||i)(Ne$1(gn$2))};static ɵprov=ue$1({token:i,factory:()=>hs$2(),providedIn:`root`})}return i})();function hs$2(){return new bn$1(Ne$1(gn$2))}function fs$2(i,t){if(!i||!t.startsWith(i))return t;let e=t.substring(i.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:t}function or$1(i){return i.replace(/\/index\.html$/,``)}function gs$2(i){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var ys$2=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=b$1(ie$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static ɵfac=function(n){return new(n||i)(Cr$3(Ii$2))};static ɵdir=$E({type:i,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[pm]})}return i})();function vs$2(i,t){return new T$1(2100,!1)}var _s$2=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;var Cs$2=(()=>{class i{transform(e){return e==null?null:(Ds$2(i,e),e.replace(_s$2,n=>n[0].toUpperCase()+n.slice(1).toLowerCase()))}static ɵfac=function(n){return new(n||i)};static ɵpipe=UE({name:`titlecase`,type:i,pure:!0})}return i})();function Ds$2(i,t){if(typeof t!=`string`)throw vs$2(i,t)}function kt$1(i,t){t=encodeURIComponent(t);for(let e of i.split(`;`)){let n=e.indexOf(`=`),[o,r]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(o.trim()!==t)continue;let a=r;try{a=decodeURIComponent(r)}catch{}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var yi$1=`browser`;function ar$1(i){return i===yi$1}var Ot$1=class{_doc;constructor(t){this._doc=t}manager};var yn$2=(()=>{class i extends Ot$1{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,r){return e.addEventListener(n,o,r),()=>this.removeEventListener(e,n,o,r)}removeEventListener(e,n,o,r){return e.removeEventListener(n,o,r)}static ɵfac=function(n){return new(n||i)(Ne$1(or$2))};static ɵprov=ue$1({token:i,factory:i.ɵfac})}return i})();var Cn$2=new x(``);var Di$1=(()=>{class i{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof yn$2));this._plugins=o.slice().reverse();let r=e.find(a=>a instanceof yn$2);r&&this._plugins.push(r)}addEventListener(e,n,o,r){return this._findPluginFor(n).addEventListener(e,n,o,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(r=>r.supports(e)),!n)throw new T$1(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||i)(Ne$1(Cn$2),Ne$1(Me))};static ɵprov=ue$1({token:i,factory:i.ɵfac})}return i})();var vi$1=`ng-app-id`;function sr$2(i){for(let t of i)t.remove()}function lr$2(i,t){let e=t.createElement(`style`);return e.textContent=i,e}function xs$2(i,t,e,n){let o=i.head?.querySelectorAll(`style[${vi$1}="${t}"],link[${vi$1}="${t}"]`);if(!o||o.length===0)return!1;for(let r of o)r.removeAttribute(vi$1),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf(`/`)+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]});return!0}function Ci$1(i,t){let e=t.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,i),e}var wi$1=(()=>{class i{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(e,n,o,r={}){this.doc=e,this.appId=n,this.nonce=o,xs$2(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,lr$2);n?.forEach(o=>this.addUsage(o,this.external,Ci$1))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let r=n.get(e);r?r.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(sr$2(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])sr$2(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,lr$2(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Ci$1(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let o=[];for(let r of n.elements)r.parentNode===e?r.remove():o.push(r);n.elements=o}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||i)(Ne$1(or$2),Ne$1(Eu),Ne$1(Jg,8),Ne$1(Yg))};static ɵprov=ue$1({token:i,factory:i.ɵfac})}return i})();var _i={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Si$1=/%COMP%/g;var ur$2=`%COMP%`;var Ms$2=`_nghost-${ur$2}`;var As$2=`_ngcontent-${ur$2}`;var Ns$2=!0;var Is$2=new x(``,{factory:()=>Ns$2});var ks$2=new x(``);function Os$2(i){return As$2.replace(Si$1,i)}function Rs$2(i){return Ms$2.replace(Si$1,i)}function mr$2(i,t){return t.map(e=>e.replace(Si$1,i))}var Ei$1=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(e,n,o,r,a,l,c=null,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.cssVarNamespace=d??``,this.defaultRenderer=new Rt$1(e,a,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof _n$1?o.applyToHost(e):o instanceof Tt$1&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,r=o.get(n.id);if(!r){let a=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(n.encapsulation){case Ft$3.Emulated:r=new _n$1(c,u,n,this.appId,d,a,l,m,this.cssVarNamespace);break;case Ft$3.ShadowDom:return new vn$2(c,e,n,a,l,this.nonce,m,this.cssVarNamespace,u);case Ft$3.ExperimentalIsolatedShadowDom:return new vn$2(c,e,n,a,l,this.nonce,m,this.cssVarNamespace);default:r=new Tt$1(c,u,n,d,a,l,m,this.cssVarNamespace)}o.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||i)(Ne$1(Di$1),Ne$1(Gf),Ne$1(Eu),Ne$1(Is$2),Ne$1(or$2),Ne$1(Me),Ne$1(Jg),Ne$1(Ht$2,8),Ne$1(ks$2,8))};static ɵprov=ue$1({token:i,factory:i.ɵfac})}return i})();var Rt$1=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,o,r=``){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=o,this.cssVarNamespace=r}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(_i[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(cr$2(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){if(t){let o=cr$2(t)?t.content:t;if(n!=null&&n.parentNode!==o)throw new T$1(-5106,!1);o.insertBefore(e,n)}}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t==`string`?this.doc.querySelector(t):t;if(!n)throw new T$1(-5104,!1);return e||(n.textContent=``),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,o){if(o){e=o+`:`+e;let r=_i[o];r?t.setAttributeNS(r,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let o=_i[n];o?t.removeAttributeNS(o,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,o){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||o&(Ko$2.DashCase|Ko$2.Important)?t.style.setProperty(e,n,o&Ko$2.Important?`important`:``):t.style[e]=n}removeStyle(t,e,n){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||n&Ko$2.DashCase?t.style.removeProperty(e):t.style[e]=``}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,o){if(typeof t==`string`&&(t=te().getGlobalEventTarget(this.doc,t),!t))throw new T$1(-5102,!1);let r=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(t,e,r)),this.eventManager.addEventListener(t,e,r,o)}decoratePreventDefault(t){return e=>{if(e===`__ngUnwrap__`)return t;t(e)===!1&&e.preventDefault()}}};function cr$2(i){return i.tagName===`TEMPLATE`&&i.content!==void 0}var vn$2=class extends Rt$1{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,o,r,a,l,c,u){super(t,o,r,l,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=mr$2(n.id,d).map(w=>w.replace(/%NS%/g,c));for(let w of d){let A=document.createElement(`style`);a&&A.setAttribute(`nonce`,a),A.textContent=w,this.shadowRoot.appendChild(A)}let m=n.getExternalStyles?.();if(m)for(let w of m){let A=Ci$1(w,o);a&&A.setAttribute(`nonce`,a),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Tt$1=class extends Rt$1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,o,r,a,l,c,u){super(t,r,a,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let d=n.styles,m=u?mr$2(u,d):d;this.styles=m.map(w=>w.replace(/%NS%/g,c)),this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&jy.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var _n$1=class extends Tt$1{contentAttr;hostAttr;constructor(t,e,n,o,r,a,l,c,u){let d=o+`-`+n.id;super(t,e,n,r,a,l,c,u,d),this.contentAttr=Os$2(d),this.hostAttr=Rs$2(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,``)}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,``),n}};var Dn$1=class i extends It$1{supportsDOMEvents=!0;static makeCurrent(){gi$1(new i)}onAndCancel(t,e,n,o){return t.addEventListener(e,n,o),()=>{t.removeEventListener(e,n,o)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e===`window`?window:e===`document`?t:e===`body`?t.body:null}getBaseHref(t){let e=Fs$2();return e==null?null:Ps$2(e)}resetBaseElement(){Ft$2=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return kt$1(document.cookie,t)}};var Ft$2=null;function Fs$2(){return Ft$2=Ft$2||document.head.querySelector(`base`),Ft$2?Ft$2.getAttribute(`href`):null}function Ps$2(i){return new URL(i,document.baseURI).pathname}var pr$2=[`alt`,`control`,`meta`,`shift`];var Ls$2={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Vs$1={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey};var hr$2=(()=>{class i extends Ot$1{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,n,o,r){let a=i.parseEventName(n),l=i.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>te().onAndCancel(e,a.domEventName,l,r))}static parseEventName(e){let n=e.toLowerCase().split(`.`),o=n.shift();if(n.length===0||!(o===`keydown`||o===`keyup`))return null;let r=i._normalizeKey(n.pop()),a=``,l=n.indexOf(`code`);if(l>-1&&(n.splice(l,1),a=`code.`),pr$2.forEach(u=>{let d=n.indexOf(u);d>-1&&(n.splice(d,1),a+=u+`.`)}),a+=r,n.length!=0||r.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let o=Ls$2[e.key]||e.key,r=``;return n.indexOf(`code.`)>-1&&(o=e.code,r=`code.`),o==null||!o?!1:(o=o.toLowerCase(),o===` `?o=`space`:o===`.`&&(o=`dot`),pr$2.forEach(a=>{if(a!==o){let l=Vs$1[a];l(e)&&(r+=a+`.`)}}),r+=o,r===n)}static eventCallback(e,n,o){return r=>{i.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>n(r))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||i)(Ne$1(or$2))};static ɵprov=ue$1({token:i,factory:i.ɵfac})}return i})();async function Bs$2(i,t,e){let n=G({rootComponent:i},js$2(t,e));return JP(n)}function js$2(i,t){return{platformRef:t?.platformRef,appProviders:[...Gs$2,...i?.providers??[]],platformProviders:$s$2}}function zs$2(){Dn$1.makeCurrent()}function Us$2(){return new $e$2}function Hs$2(){return Vm$1(document),document}var $s$2=[{provide:Yg,useValue:yi$1},{provide:Iu,useValue:zs$2,multi:!0},{provide:or$2,useFactory:Hs$2}];var Gs$2=[{provide:Es$2,useValue:`root`},{provide:$e$2,useFactory:Us$2},{provide:Cn$2,useClass:yn$2,multi:!0},{provide:Cn$2,useClass:hr$2,multi:!0},Ei$1,{provide:Gf,useClass:wi$1},{provide:wi$1,useExisting:Gf},Di$1,{provide:hr$3,useExisting:Ei$1},[]];var De$2=class i{headers;normalizedNames=/* @__PURE__ */ new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t==`string`?this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<`u`&&t instanceof Headers?(this.headers=/* @__PURE__ */ new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=/* @__PURE__ */ new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:`a`})}set(t,e){return this.clone({name:t,value:e,op:`s`})}delete(t,e){return this.clone({name:t,value:e,op:`d`})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init();for(let[e,n]of t.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,t.normalizedNames.get(e))}clone(t){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case`a`:case`s`:let n=t.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let o=t.op===`a`?(this.headers.get(e)||[]).slice():[];o.push(...n),this.headers.set(e,o);break;case`d`:let r=t.value;if(r===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(r)?r:[r],l=this.headers.get(e);if(!l)return;l=l.filter(c=>a.indexOf(c)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=t.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ai$1=class{map=/* @__PURE__ */ new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};var Ni$1=class{encodeKey(t){return fr$2(t)}encodeValue(t){return fr$2(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Ys$2(i,t){let e=/* @__PURE__ */ new Map;return i.length>0&&i.replace(/^\?/,``).split(`&`).forEach(o=>{let r=o.indexOf(`=`),[a,l]=r==-1?[t.decodeKey(o),``]:[t.decodeKey(o.slice(0,r)),t.decodeValue(o.slice(r+1))],c=e.get(a)||[];c.push(l),e.set(a,c)}),e}var Xs$2=/[&+#]/g;function fr$2(i){return encodeURI(i).replace(Xs$2,encodeURIComponent)}function wn$2(i){return`${i}`}var Ce=class i{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ni$1,t.fromString){if(t.fromObject)throw new T$1(2805,!1);this.map=Ys$2(t.fromString,this.encoder)}else t.fromObject?(this.map=/* @__PURE__ */ new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],o=Array.isArray(n)?n.map(wn$2):[wn$2(n)];o.length>0&&this.map.set(e,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:`a`})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let o=t[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:`a`})}):e.push({param:n,value:o,op:`a`})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:`s`})}delete(t,e){return this.clone({param:t,value:e,op:`d`})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(t=>t!==``).join(`&`)}clone(t){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){if(this.map===null&&(this.map=/* @__PURE__ */ new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[t,e]of this.cloneFrom.map.entries())this.map.set(t,e);this.updates.forEach(t=>{switch(t.op){case`a`:case`s`:let e=t.op===`a`?(this.map.get(t.param)||[]).slice():[];e.push(wn$2(t.value)),this.map.set(t.param,e);break;case`d`:if(t.value!==void 0){let n=(this.map.get(t.param)||[]).slice(),o=n.indexOf(wn$2(t.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null}}};function Zs$2(i){switch(i){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function gr$2(i){return typeof ArrayBuffer<`u`&&i instanceof ArrayBuffer}function br$2(i){return typeof Blob<`u`&&i instanceof Blob}function yr$2(i){return typeof FormData<`u`&&i instanceof FormData}function Ks$2(i){return typeof URLSearchParams<`u`&&i instanceof URLSearchParams}var xi$1=`Content-Type`;var vr$2=`Accept`;var Dr$1=`text/plain`;var wr$2=`application/json`;var qs$1=`${wr$2}, ${Dr$1}, */*`;var st$1=class i{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,o){this.url=e,this.method=t.toUpperCase();let r;if(Zs$2(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r){if(this.reportProgress=!!r.reportProgress,this.reportUploadProgress=!!r.reportUploadProgress,this.reportDownloadProgress=!!r.reportDownloadProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout==`number`){if(r.timeout<1||!Number.isInteger(r.timeout))throw new T$1(2822,``);this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer!==void 0&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new De$2,this.context??=new Ai$1,!this.params)this.params=new Ce,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let l=e,c=``,u=e.indexOf(`#`);u!==-1&&(c=e.substring(u),l=e.substring(0,u));let d=l.indexOf(`?`),m=d===-1?`?`:d<l.length-1?`&`:``;this.urlWithParams=l+m+a+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||gr$2(this.body)||br$2(this.body)||yr$2(this.body)||Ks$2(this.body)?this.body:this.body instanceof Ce?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||yr$2(this.body)?null:br$2(this.body)?this.body.type||null:gr$2(this.body)?null:typeof this.body==`string`?Dr$1:this.body instanceof Ce?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?wr$2:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,r=t.keepalive??this.keepalive,a=t.priority||this.priority,l=t.cache||this.cache,c=t.mode||this.mode,u=t.redirect||this.redirect,d=t.credentials||this.credentials,m=t.referrer??this.referrer,w=t.integrity||this.integrity,A=t.referrerPolicy||this.referrerPolicy,L=t.transferCache??this.transferCache,R=t.timeout??this.timeout,z=t.body!==void 0?t.body:this.body,Te=t.withCredentials??this.withCredentials,le=t.reportProgress??this.reportProgress,Fe=t.reportUploadProgress??this.reportUploadProgress,Ct=t.reportDownloadProgress??this.reportDownloadProgress,we=t.headers||this.headers,Dt=t.params||this.params,wt=t.context??this.context;return t.setHeaders!==void 0&&(we=Object.keys(t.setHeaders).reduce((qe,Se)=>qe.set(Se,t.setHeaders[Se]),we)),t.setParams&&(Dt=Object.keys(t.setParams).reduce((qe,Se)=>qe.set(Se,t.setParams[Se]),Dt)),new i(e,n,z,{params:Dt,headers:we,context:wt,reportProgress:le,reportUploadProgress:Fe,reportDownloadProgress:Ct,responseType:o,withCredentials:Te,transferCache:L,keepalive:r,cache:l,priority:a,timeout:R,mode:c,redirect:u,credentials:d,referrer:m,integrity:w,referrerPolicy:A})}};var Ue=(function(i){return i[i.Sent=0]=`Sent`,i[i.UploadProgress=1]=`UploadProgress`,i[i.ResponseHeader=2]=`ResponseHeader`,i[i.DownloadProgress=3]=`DownloadProgress`,i[i.Response=4]=`Response`,i[i.User=5]=`User`,i})(Ue||{});var Pt$2=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n=`OK`){this.headers=t.headers||new De$2,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}};var Ii$1=class i extends Pt$2{constructor(t={}){super(t)}type=Ue.ResponseHeader;clone(t={}){return new i({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}};var Lt$1=class i extends Pt$2{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Ue.Response;clone(t={}){return new i({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}};var ze$1=class extends Pt$2{name=`HttpErrorResponse`;message;error;ok=!1;constructor(t){super(t,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||`(unknown url)`}`:this.message=`Http failure response for ${t.url||`(unknown url)`}: ${t.status} ${t.statusText}`,this.error=t.error||null}};var Js$2=200;var Qs$2=/^\)\]\}',?\n/;var el$1=new x(``,{factory:()=>null});var tl$2=(()=>{class i{fetchImpl=b$1(ki$1,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=b$1(Me);destroyRef=b$1(le$1);maxResponseSize=b$1(el$1);handle(e){return new N(n=>{let o=new AbortController,r=!1,a={next:c=>{c.type===Ue.Response&&(r=!0),n.next(c)},error:c=>{r=!0,n.error(c)},complete:()=>{r=!0,n.complete()}};this.doRequest(e,o.signal,a).then(Oi,c=>a.error(new ze$1({error:c})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!r&&!o.signal.aborted&&o.abort()}})}async doRequest(e,n,o){let r=this.createRequestInit(e),a;try{let z=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,G({signal:n},r)));nl$2(z),o.next({type:Ue.Sent}),a=await z}catch(z){o.error(new ze$1({error:z,status:z.status??0,statusText:z.statusText,url:e.urlWithParams,headers:z.headers}));return}let l=new De$2(a.headers),c=a.statusText,u=a.url||e.urlWithParams,d=a.status,m=null,w=e.reportProgress||e.reportDownloadProgress;if(w&&o.next(new Ii$1({headers:l,status:d,statusText:c,url:u})),a.body){let z=a.headers.get(xi$1)??``,Te=a.headers.get(`content-length`),le=Te!==null?Number(Te):NaN;this.maxResponseSize!==null&&Number.isFinite(le)&&le>this.maxResponseSize&&(await a.body.cancel(),_r$2(this.maxResponseSize));let Fe=[],Ct=a.body.getReader(),we=0,Dt,wt,qe=typeof Zone<`u`&&Zone.current,Se=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Ct.cancel(),Se=!0;break}let{done:ai,value:si}=await Ct.read();if(ai)break;if(Fe.push(si),we+=si.length,this.maxResponseSize!==null&&we>this.maxResponseSize&&(await Ct.cancel(),_r$2(this.maxResponseSize)),w){wt=e.responseType===`text`?(wt??``)+(Dt??=Cr$2(z)).decode(si,{stream:!0}):void 0;let Do=()=>o.next({type:Ue.DownloadProgress,total:Number.isFinite(le)?le:void 0,loaded:we,partialText:wt});qe?qe.run(Do):Do()}}}),Se){o.complete();return}let us=this.concatChunks(Fe,we);try{m=this.parseBody(e,us,z,d)}catch(ai){o.error(new ze$1({error:ai,headers:new De$2(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}d===0&&(d=m?Js$2:0);let A=d>=200&&d<300,L=a.redirected,R=a.type;A?(o.next(new Lt$1({body:m,headers:l,status:d,statusText:c,url:u,redirected:L,responseType:R})),o.complete()):o.error(new ze$1({error:m,headers:l,status:d,statusText:c,url:u,redirected:L,responseType:R}))}parseBody(e,n,o,r){switch(e.responseType){case`json`:let a=new TextDecoder().decode(n).replace(Qs$2,``);if(a===``)return null;try{return JSON.parse(a)}catch(l){if(r<200||r>=300)return a;throw l}case`text`:return Cr$2(o).decode(n);case`blob`:return new Blob([n],{type:o});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new T$1(2824,!1);let n={},o;if(o=e.credentials,e.withCredentials&&(o=`include`),e.headers.forEach((r,a)=>n[r]=a.join(`,`)),e.headers.has(vr$2)||(n[vr$2]=qs$1),!e.headers.has(xi$1)){let r=e.detectContentTypeHeader();r!==null&&(n[xi$1]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let a of e)o.set(a,r),r+=a.length;return o}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var ki$1=class{};function Oi(){}function nl$2(i){i.then(Oi,Oi)}function _r$2(i){throw new T$1(-2825,!1)}var il$1=/charset=\s*["']?([^;"'\s]+)["']?/i;function Cr$2(i){let t=i.match(il$1);if(t!==null)try{return new TextDecoder(t[1])}catch{}return new TextDecoder}var ol$1=new x(``,{factory:()=>!0});var rl$2=`XSRF-TOKEN`;var al$1=new x(``,{factory:()=>rl$2});var sl$1=`X-XSRF-TOKEN`;var ll$2=new x(``,{factory:()=>sl$1});var cl$2=(()=>{class i{cookieName=b$1(al$1);doc=b$1(or$2);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=kt$1(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var dl$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:function(n){let o=null;return n?o=new(n||i):o=Ne$1(cl$2),o},providedIn:`root`})}return i})();function ul$2(i,t){if(!b$1(ol$1)||i.method===`GET`||i.method===`HEAD`)return t(i);try{let o=b$1(at$1).href,{origin:r}=new URL(o),{origin:a}=new URL(i.url,r);if(r!==a)return t(i)}catch{return t(i)}let e=b$1(dl$2).getToken(),n=b$1(ll$2);return e!=null&&!i.headers.has(n)&&(i=i.clone({headers:i.headers.set(n,e)})),t(i)}function ml$2(i,t){return t(i)}function pl$2(i,t,e){return(n,o)=>Eo$2(e,()=>t(n,r=>i(r,o)))}var hl$1=new x(``,{factory:()=>[ul$2]});var Sr$2=new x(``);var fl$2=new x(``,{factory:()=>!0});var gl$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:function(n){let o=null;return n?o=new(n||i):o=Ne$1(tl$2),o},providedIn:`root`})}return i})();var bl$1=(()=>{class i{backend;injector;chain=null;pendingTasks=b$1(Qs$3);contributeToStability=b$1(fl$2);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let o=this.injector.get(Er$2,null,{skipSelf:!0}),r=o!==null&&this.backend===o,a=this.injector.get(Sr$2,[],r?{self:!0}:void 0),l=Array.from(/* @__PURE__ */ new Set([...this.injector.get(hl$1),...a]));this.chain=l.reduceRight((c,u)=>pl$2(c,u,this.injector),ml$2)}let n=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();try{return rh$1(()=>n(e,r=>this.backend.handle(r))).pipe(ag(o))}catch(r){throw o(),r}}else return rh$1(()=>n(e,o=>this.backend.handle(o)))}static ɵfac=function(n){return new(n||i)(Ne$1(gl$1),Ne$1(me))};static ɵprov=ue$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var Er$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:function(n){let o=null;return n?o=new(n||i):o=Ne$1(bl$1),o},providedIn:`root`})}return i})();function Mi$1(i,t){return G({body:t},i)}var yl$1=(()=>{class i{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof st$1)r=e;else{let c;o.headers instanceof De$2?c=o.headers:c=new De$2(o.headers);let u;o.params&&(o.params instanceof Ce?u=o.params:u=new Ce({fromObject:o.params})),r=new st$1(e,n,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:u,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||`json`,withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=Vh$1(r).pipe(tg(c=>this.handler.handle(c)));if(e instanceof st$1||o.observe===`events`)return a;let l=a.pipe(Xt$2(c=>c instanceof Lt$1));switch(o.observe||`body`){case`body`:switch(r.responseType){case`arraybuffer`:return l.pipe(_e$1(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new T$1(2806,!1);return c.body}));case`blob`:return l.pipe(_e$1(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new T$1(2807,!1);return c.body}));case`text`:return l.pipe(_e$1(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new T$1(2808,!1);return c.body}));default:return l.pipe(_e$1(c=>c.body))}case`response`:return l;default:throw new T$1(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new Ce().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,o={}){return this.request(`PATCH`,e,Mi$1(o,n))}post(e,n,o={}){return this.request(`POST`,e,Mi$1(o,n))}put(e,n,o={}){return this.request(`PUT`,e,Mi$1(o,n))}static ɵfac=function(n){return new(n||i)(Ne$1(Er$2))};static ɵprov=ue$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var vp$1=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||i)(Ne$1(or$2))};static ɵprov=ue$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var Ri$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=ue$1({token:i,factory:function(n){let o=null;return n?o=new(n||i):o=Ne$1(_l$1),o},providedIn:`root`})}return i})();var _l$1=(()=>{class i extends Ri$1{_doc=b$1(or$2);sanitize(e,n){if(n==null)return null;switch(e){case Q$1.NONE:return n;case Q$1.HTML:return za$2(n,`HTML`)?ct$2(n):py(this._doc,String(n)).toString();case Q$1.STYLE:return za$2(n,`Style`)?ct$2(n):n;case Q$1.SCRIPT:if(za$2(n,`Script`))return ct$2(n);throw new T$1(5200,!1);case Q$1.URL:return za$2(n,`URL`)?ct$2(n):Qa$3(String(n));case Q$1.RESOURCE_URL:if(za$2(n,`ResourceURL`))return ct$2(n);throw new T$1(-5201,!1);default:throw new T$1(5202,!1)}}bypassSecurityTrustHtml(e){return Wm$1(e)}bypassSecurityTrustStyle(e){return Gm$1(e)}bypassSecurityTrustScript(e){return qm$1(e)}bypassSecurityTrustUrl(e){return zm$1(e)}bypassSecurityTrustResourceUrl(e){return Qm$1(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function Vt(i){return i.buttons===0||i.detail===0}function Bt$1(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Ti$1;function xr$2(){if(Ti$1==null){let i=typeof document<`u`?document.head:null;Ti$1=!!(i&&(i.createShadowRoot||i.attachShadow))}return Ti$1}function Fi$1(i){if(xr$2()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Cl$1(){let i=typeof document<`u`&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let t=i.shadowRoot.activeElement;if(t===i)break;i=t}return i}function W$1(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var Pi;try{Pi=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Pi=!1}var O=(()=>{class i{_platformId=b$1(Yg);isBrowser=this._platformId?ar$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Pi)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var jt$1;function Mr$2(){if(jt$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>jt$1=!0}))}finally{jt$1=jt$1||!1}return jt$1}function lt$1(i){return Mr$2()?i:!!i.capture}function He(i,t=0){return Ar$2(i)?Number(i):arguments.length===2?t:0}function Ar$2(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function ne(i){return i instanceof Er$3?i.nativeElement:i}var Nr$2=new x(`cdk-input-modality-detector-options`);var Ir$1={ignoreKeys:[18,17,224,91,16]};var kr$2=650;var Li={passive:!0,capture:!0};var Or$2=(()=>{class i{_platform=b$1(O);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new On$2(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=W$1(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kr$2||(this._modality.next(Vt(e)?`keyboard`:`mouse`),this._mostRecentTarget=W$1(e))};_onTouchstart=e=>{if(Bt$1(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=W$1(e)};constructor(){let e=b$1(Me),n=b$1(or$2),o=b$1(Nr$2,{optional:!0});if(this._options=G(G({},Ir$1),o),this.modalityDetected=this._modality.pipe(dg(1)),this.modalityChanged=this.modalityDetected.pipe(og()),this._platform.isBrowser){let r=b$1(hr$3).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(n,`keydown`,this._onKeydown,Li),r.listen(n,`mousedown`,this._onMousedown,Li),r.listen(n,`touchstart`,this._onTouchstart,Li)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var zt$1=(function(i){return i[i.IMMEDIATE=0]=`IMMEDIATE`,i[i.EVENTUAL=1]=`EVENTUAL`,i})(zt$1||{});var Rr$2=new x(`cdk-focus-monitor-default-options`);var Sn$2=lt$1({passive:!0,capture:!0});var ct$1=(()=>{class i{_ngZone=b$1(Me);_platform=b$1(O);_inputModalityDetector=b$1(Or$2);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=b$1(or$2);_stopInputModalityDetector=new K;constructor(){let e=b$1(Rr$2,{optional:!0});this._detectionMode=e?.detectionMode||zt$1.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=W$1(e);for(let o=n;o;o=o.parentElement)e.type===`focus`?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,n=!1){let o=ne(e);if(!this._platform.isBrowser||o.nodeType!==1)return Vh$1();let r=Fi$1(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let l={checkChildren:n,subject:new K,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let n=ne(e),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(e,n,o){let r=ne(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,n,c)):(this._setOrigin(n),typeof r.focus==`function`&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===zt$1.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===zt$1.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?kr$2:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,n){let o=this._elementInfo.get(n),r=W$1(e);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(e,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Sn$2),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Sn$2)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pg(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Sn$2),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Sn$2),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,o){this._setClasses(e,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Dl$1=(()=>{class i{_elementRef=b$1(Er$3);_focusMonitor=b$1(ct$1);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new je$2;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return i})();var En$1=/* @__PURE__ */ new WeakMap;var Z$1=(()=>{class i{_appRef;_injector=b$1(ie$1);_environmentInjector=b$1(me);load(e){let n=this._appRef=this._appRef||this._injector.get(Di$2),o=En$1.get(n);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},En$1.set(n,o),n.onDestroy(()=>{En$1.get(n)?.refs.forEach(r=>r.destroy()),En$1.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(nF(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var dt$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=FE({type:i,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})();var xn$2;function wl$1(){if(xn$2===void 0&&(xn$2=null,typeof window<`u`)){let i=window;if(i.trustedTypes!==void 0)try{xn$2=i.trustedTypes.createPolicy(`angular#components`,{createHTML:t=>t})}catch(t){console.error(t)}}return xn$2}function Sl$1(i){return wl$1()?.createHTML(i)||i}function Tr$1(i,t,e){i.innerHTML=Sl$1(e.sanitize(Q$1.HTML,t)||``)}function ut$2(i){return Array.isArray(i)?i:[i]}var Fr$2=/* @__PURE__ */ new Set;var $e$1;var mt=(()=>{class i{_platform=b$1(O);_nonce=b$1(Jg,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xl$1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&El$1(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function El$1(i,t){if(!Fr$2.has(i))try{$e$1||($e$1=document.createElement(`style`),t&&$e$1.setAttribute(`nonce`,t),$e$1.setAttribute(`type`,`text/css`),document.head.appendChild($e$1)),$e$1.sheet&&($e$1.sheet.insertRule(`@media ${i.replace(/[{}]/g,``)} {body{ }}`,0),Fr$2.add(i))}catch(e){console.error(e)}}function xl$1(i){return{matches:i===`all`||i===``,media:i,addListener:()=>{},removeListener:()=>{}}}var Vi=(()=>{class i{_mediaMatcher=b$1(mt);_zone=b$1(Me);_queries=/* @__PURE__ */ new Map;_destroySubject=new K;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Pr$2(ut$2(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=Pr$2(ut$2(e)).map(a=>this._registerQuery(a).observable),r=Zh$1(o);return r=Jt$1(r.pipe(en$1(1)),r.pipe(dg(1),ng(0))),r.pipe(_e$1(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),r={observable:new N(a=>{let l=c=>this._zone.run(()=>a.next(c));return n.addListener(l),()=>{n.removeListener(l)}}).pipe(yl$2(n),_e$1(({matches:a})=>({query:e,matches:a})),pg(this._destroySubject)),mql:n};return this._queries.set(e,r),r}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function Pr$2(i){return i.map(t=>t.split(`,`)).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}function Ml$1(i){if(i.type===`characterData`&&i.target instanceof Comment)return!0;if(i.type===`childList`){for(let t=0;t<i.addedNodes.length;t++)if(!(i.addedNodes[t]instanceof Comment))return!1;for(let t=0;t<i.removedNodes.length;t++)if(!(i.removedNodes[t]instanceof Comment))return!1;return!0}return!1}var Lr=(()=>{class i{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Vr=(()=>{class i{_mutationObserverFactory=b$1(Lr);_observedElements=/* @__PURE__ */ new Map;_ngZone=b$1(Me);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=ne(e);return new N(o=>{let a=this._observeElement(n).pipe(_e$1(l=>l.filter(c=>!Ml$1(c))),Xt$2(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{o.next(l)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new K,o=this._mutationObserverFactory.create(r=>n.next(r));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:o}=this._observedElements.get(e);n&&n.disconnect(),o.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var _h$1=(()=>{class i{_contentObserver=b$1(Vr);_elementRef=b$1(Er$3);event=new je$2;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=He(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ng(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,XP],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return i})();var Br$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({providers:[Lr]})}return i})();var Hr=(()=>{class i{_platform=b$1(O);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return Nl$1(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Al$1(Ll$1(e));if(n&&(jr$1(n)===-1||!this.isVisible(n)))return!1;let o=e.nodeName.toLowerCase(),r=jr$1(e);return e.hasAttribute(`contenteditable`)?r!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Fl$1(e)?!1:o===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:o===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return Pl$1(e)&&!this.isDisabled(e)&&(n?.ignoreInert||!e.closest?.(`[inert]`))&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function Al$1(i){try{return i.frameElement}catch{return null}}function Nl$1(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects==`function`&&i.getClientRects().length)}function Il$1(i){let t=i.nodeName.toLowerCase();return t===`input`||t===`select`||t===`button`||t===`textarea`}function kl$1(i){return Rl(i)&&i.type==`hidden`}function Ol$1(i){return Tl$1(i)&&i.hasAttribute(`href`)}function Rl(i){return i.nodeName.toLowerCase()==`input`}function Tl$1(i){return i.nodeName.toLowerCase()==`a`}function $r(i){if(!i.hasAttribute(`tabindex`)||i.tabIndex===void 0)return!1;let t=i.getAttribute(`tabindex`);return!!(t&&!isNaN(parseInt(t,10)))}function jr$1(i){if(!$r(i))return null;let t=parseInt(i.getAttribute(`tabindex`)||``,10);return isNaN(t)?-1:t}function Fl$1(i){let t=i.nodeName.toLowerCase(),e=t===`input`&&i.type;return e===`text`||e===`password`||t===`select`||t===`textarea`}function Pl$1(i){return kl$1(i)?!1:Il$1(i)||Ol$1(i)||i.hasAttribute(`contenteditable`)||$r(i)}function Ll$1(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Mn$1=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_enabled=!0;constructor(t,e,n,o,r=!1,a){this._element=t,this._checker=e,this._ngZone=n,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener(`focus`,this.startAnchorListener),t.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){let e=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return t==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(t),!!n}return e.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){let e=this._getRegionBoundary(`start`);return e&&e.focus(t),!!e}focusLastTabbableElement(t){let e=this._getRegionBoundary(`end`);return e&&e.focus(t),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=0;n<e.length;n++){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(o)return o}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=e.length-1;n>=0;n--){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(o)return o}return null}_createAnchor(){let t=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add(`cdk-visually-hidden`),t.classList.add(`cdk-focus-trap-anchor`),t.setAttribute(`aria-hidden`,`true`),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){By(t,{injector:this._injector})}};var Vl$1=(()=>{class i{_checker=b$1(Hr);_ngZone=b$1(Me);_document=b$1(or$2);_injector=b$1(ie$1);constructor(){b$1(Z$1).load(dt$1)}create(e,n=!1){return new Mn$1(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Gr=new x(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Wr=new x(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Bl$1=0;var jl$1=(()=>{class i{_ngZone=b$1(Me);_defaultOptions=b$1(Wr,{optional:!0});_liveElement;_document=b$1(or$2);_sanitizer=b$1(Ri$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=b$1(Gr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let o=this._defaultOptions,r,a;return n.length===1&&typeof n[0]==`number`?a=n[0]:[r,a]=n,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:`polite`),a==null&&o&&(a=o.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Tr$1(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),o=this._document.createElement(`div`);for(let r=0;r<n.length;r++)n[r].remove();return o.classList.add(e),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${Bl$1++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<n.length;o++){let r=n[o],a=r.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&r.setAttribute(`aria-owns`,a+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Ie$1=(function(i){return i[i.NONE=0]=`NONE`,i[i.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,i[i.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,i})(Ie$1||{});var zr$1=`cdk-high-contrast-black-on-white`;var Ur$1=`cdk-high-contrast-white-on-black`;var Bi=`cdk-high-contrast-active`;var Yr=(()=>{class i{_platform=b$1(O);_hasCheckedHighContrastMode=!1;_document=b$1(or$2);_breakpointSubscription;constructor(){this._breakpointSubscription=b$1(Vi).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ie$1.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(e):null,r=(o&&o.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return Ie$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return Ie$1.BLACK_ON_WHITE}return Ie$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Bi,zr$1,Ur$1),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===Ie$1.BLACK_ON_WHITE?e.add(Bi,zr$1):n===Ie$1.WHITE_ON_BLACK&&e.add(Bi,Ur$1)}}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var ji=(()=>{class i{constructor(){b$1(Yr)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Br$1]})}return i})();var zl$1=200;var An$1=class{_letterKeyStream=new K;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new K;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:zl$1;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(gg(e=>this._pressedLetters.push(e)),ng(t),Xt$2(()=>this._pressedLetters.length>0),_e$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function ke(i,...t){return t.length?t.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var pt=class{_items;_activeItemIndex=Oo$2(-1);_activeItem=Oo$2(null);_wrap=!1;_typeaheadSubscription=z.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Yo$2?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):Lo$2(t)&&(this._effectRef=Du(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new K;change=new K;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new An$1(e,{debounceInterval:typeof t==`number`?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!t[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||ke(t,`shiftKey`))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t==`number`?t:e.indexOf(t),o=e[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let o=(this._activeItemIndex()+t*n+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return Lo$2(this._items)?this._items():this._items instanceof Yo$2?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var zi=class extends pt{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var Ui=class extends pt{_origin=`program`;setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};var Xr=/* @__PURE__ */ new Map;var Ge=class i{_appId=b$1(Eu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){this._appId!==`ng`&&(t+=this._appId);let n=Xr.get(t);return n===void 0?n=0:n++,Xr.set(t,n),`${t}${e?i._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})};var Kr=` `;function Ul$1(i,t,e){let n=In$1(i,t);e=e.trim(),!n.some(o=>o.trim()===e)&&(n.push(e),i.setAttribute(t,n.join(Kr)))}function Hl$1(i,t,e){let n=In$1(i,t);e=e.trim();let o=n.filter(r=>r!==e);o.length?i.setAttribute(t,o.join(Kr)):i.removeAttribute(t)}function In$1(i,t){return i.getAttribute(t)?.match(/\S+/g)??[]}var qr=`cdk-describedby-message`;var Nn$2=`cdk-describedby-host`;var $i=0;var Jr=(()=>{class i{_platform=b$1(O);_document=b$1(or$2);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${$i++}`;constructor(){b$1(Z$1).load(dt$1),this._id=b$1(Eu)+`-`+$i++}describe(e,n,o){if(!this._canBeDescribed(e,n))return;let r=Hi(n,o);typeof n!=`string`?(Zr(n,this._id),this._messageRegistry.set(r,{messageElement:n,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(n,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,n,o){if(!n||!this._isElementNode(e))return;let r=Hi(n,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof n==`string`){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Nn$2}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Nn$2);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let o=this._document.createElement(`div`);Zr(o,this._id),o.textContent=e,n&&o.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Hi(e,n),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<n.length;r++)n[r].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(e),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let n=In$1(e,`aria-describedby`).filter(o=>o.indexOf(qr)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let o=this._messageRegistry.get(n);Ul$1(e,`aria-describedby`,o.messageElement.id),e.setAttribute(Nn$2,this._id),o.referenceCount++}_removeMessageReference(e,n){let o=this._messageRegistry.get(n);o.referenceCount--,Hl$1(e,`aria-describedby`,o.messageElement.id),e.removeAttribute(Nn$2)}_isElementDescribedByMessage(e,n){let o=In$1(e,`aria-describedby`),r=this._messageRegistry.get(n),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let o=n==null?``:`${n}`.trim(),r=e.getAttribute(`aria-label`);return o?!r||r.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function Hi(i,t){return typeof i==`string`?`${t||``}/${i}`:i}function Zr(i,t){i.id||(i.id=`${qr}-${t}-${$i++}`)}var ae=(function(i){return i[i.NORMAL=0]=`NORMAL`,i[i.NEGATED=1]=`NEGATED`,i[i.INVERTED=2]=`INVERTED`,i})(ae||{});var kn$2;var We$1;function On$1(){if(We$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return We$1=!1,We$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)We$1=!0;else{let i=Element.prototype.scrollTo;i?We$1=!/\{\s*\[native code\]\s*\}/.test(i.toString()):We$1=!1}}return We$1}function ht$1(){if(typeof document!=`object`||!document)return ae.NORMAL;if(kn$2==null){let i=document.createElement(`div`),t=i.style;i.dir=`rtl`,t.width=`1px`,t.overflow=`auto`,t.visibility=`hidden`,t.pointerEvents=`none`,t.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,i.appendChild(e),document.body.appendChild(i),kn$2=ae.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,kn$2=i.scrollLeft===0?ae.NEGATED:ae.INVERTED),i.remove()}return kn$2}function Gi(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var ft$1;var Qr=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Af(){if(ft$1)return ft$1;if(typeof document!=`object`||!document)return ft$1=new Set(Qr),ft$1;let i=document.createElement(`input`);return ft$1=new Set(Qr.filter(t=>(i.setAttribute(`type`,t),i.type===t))),ft$1}var $l$1=new x(`MATERIAL_ANIMATIONS`);var ea=null;function Gl$1(){return b$1($l$1,{optional:!0})?.animationsDisabled||b$1(Kg,{optional:!0})===`NoopAnimations`?`di-disabled`:(ea??=b$1(mt).matchMedia(`(prefers-reduced-motion)`).matches,ea?`reduced-motion`:`enabled`)}function se(){return Gl$1()!==`enabled`}function j(i){return i==null?``:typeof i==`string`?i:`${i}px`}function Wi(i){return i!=null&&`${i}`!=`false`}var ie=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(ie||{});var Yi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ie.HIDDEN;constructor(t,e,n,o=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var ta=lt$1({passive:!0,capture:!0});var Xi=class{_events=/* @__PURE__ */ new Map;addHandler(t,e,n,o){let r=this._events.get(e);if(r){let a=r.get(n);a?a.add(o):r.set(n,/* @__PURE__ */ new Set([o]))}else this._events.set(e,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ta)})}removeHandler(t,e,n){let o=this._events.get(t);if(!o)return;let r=o.get(e);r&&(r.delete(n),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,ta)))}_delegateEventHandler=t=>{let e=W$1(t);e&&this._events.get(t.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(r=>r.handleEvent(t))})}};var Ut$2={enterDuration:225,exitDuration:150};var Wl=800;var na=lt$1({passive:!0,capture:!0});var ia$1=[`mousedown`,`touchstart`];var oa$2=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Yl$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=FE({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})();var Ht$1=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xi;constructor(t,e,n,o,r){this._target=t,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=ne(n)),r&&r.get(Z$1).load(Yl$1)}fadeInRipple(t,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=G(G({},Ut$2),n.animation);n.centered&&(t=o.left+o.width/2,e=o.top+o.height/2);let a=n.radius||Xl$1(t,e,o),l=t-o.left,c=e-o.top,u=r.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${l-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),w=m.transitionProperty,A=m.transitionDuration,L=w===`none`||A===`0s`||A===`0s, 0s`||o.width===0&&o.height===0,R=new Yi(this,d,n,L);d.style.transform=`scale3d(1, 1, 1)`,R.state=ie.FADING_IN,n.persistent||(this._mostRecentTransientRipple=R);let z=null;return!L&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Te=()=>{z&&(z.fallbackTimer=null),clearTimeout(Fe),this._finishRippleTransition(R)},le=()=>this._destroyRipple(R),Fe=setTimeout(le,u+100);d.addEventListener(`transitionend`,Te),d.addEventListener(`transitioncancel`,le),z={onTransitionEnd:Te,onTransitionCancel:le,fallbackTimer:Fe}}),this._activeRipples.set(R,z),(L||!u)&&this._finishRippleTransition(R),R}fadeOutRipple(t){if(t.state===ie.FADING_OUT||t.state===ie.HIDDEN)return;let e=t.element,n=G(G({},Ut$2),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,t.state=ie.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=ne(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ia$1.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{oa$2.forEach(e=>{this._triggerElement.addEventListener(e,this,na)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===ie.FADING_IN?this._startFadeOutTransition(t):t.state===ie.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=ie.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=ie.HIDDEN,e!==null&&(t.element.removeEventListener(`transitionend`,e.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Vt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Wl;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Bt$1(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===ie.VISIBLE||t.config.terminateOnPointerUp&&t.state===ie.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(ia$1.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(oa$2.forEach(e=>t.removeEventListener(e,this,na)),this._pointerUpEventsRegistered=!1))}};function Xl$1(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+o*o)}var Zi=new x(`mat-ripple-global-options`);var ra$2=(()=>{class i{_elementRef=b$1(Er$3);_animationsDisabled=se();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=b$1(Me),n=b$1(O),o=b$1(Zi,{optional:!0}),r=b$1(ie$1);this._globalOptions=o||{},this._rippleRenderer=new Ht$1(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:G(G(G({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,o){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,G(G({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,G(G({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&Hp$1(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})();var Zl$1={capture:!0};var Kl$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ki=`mat-ripple-loader-uninitialized`;var qi=`mat-ripple-loader-class-name`;var aa$2=`mat-ripple-loader-centered`;var Rn$1=`mat-ripple-loader-disabled`;var sa$2=(()=>{class i{_document=b$1(or$2);_animationsDisabled=se();_globalRippleOptions=b$1(Zi,{optional:!0});_platform=b$1(O);_ngZone=b$1(Me);_injector=b$1(ie$1);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let e=b$1(hr$3).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Kl$1.map(n=>e.listen(this._document,n,this._onInteraction,Zl$1)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Ki,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(qi))&&e.setAttribute(qi,n.className||``),n.centered&&e.setAttribute(aa$2,``),n.disabled&&e.setAttribute(Rn$1,``)}setDisabled(e,n){let o=this._hosts.get(e);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):n?e.setAttribute(Rn$1,``):e.removeAttribute(Rn$1)}_onInteraction=e=>{let n=W$1(e);if(n instanceof HTMLElement){let o=n.closest(`[${Ki}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(qi)),e.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Ut$2.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ut$2.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Rn$1),rippleConfig:{centered:e.hasAttribute(aa$2),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},c=new Ht$1(l,this._ngZone,n,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:u}),e.removeAttribute(Ki)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Tn$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=FE({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var ql$1=new x(`MAT_BUTTON_CONFIG`);function la$2(i){return i==null?void 0:eF(i)}var Fn$1=(()=>{class i{_elementRef=b$1(Er$3);_ngZone=b$1(Me);_animationsDisabled=se();_config=b$1(ql$1,{optional:!0});_focusMonitor=b$1(ct$1);_cleanupClick;_renderer=b$1(Ta$3);_rippleLoader=b$1(sa$2);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=GP(!1,{transform:XP});constructor(){b$1(Z$1).load(Tn$1);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Dp$1(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),GI(o.color?`mat-`+o.color:``),Hp$1(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,XP],disabled:[2,`disabled`,`disabled`,XP],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,la$2],_tabindex:[2,`tabindex`,`_tabindex`,la$2],showProgress:[1,`showProgress`]}})}return i})();var Jl$1=(()=>{class i extends Fn$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,a){r&1&&(Ec$1(0,`div`,1),TI(1,1),Ic$1())}return FE({type:i,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[pp$1],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,l){a&1&&(CI(e),Cp$1(0,`span`,0),TI(1),lI(2,o,2,0,`div`,1),Cp$1(3,`span`,2)(4,`span`,3)),a&2&&(av(2),dI(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();var Ql$1=new x(`cdk-dir-doc`,{providedIn:`root`,factory:()=>b$1(or$2)});var ec=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ca$1(i){let t=i?.toLowerCase()||``;return t===`auto`&&typeof navigator<`u`&&navigator?.language?ec.test(navigator.language)?`rtl`:`ltr`:t===`rtl`?`rtl`:`ltr`}var Oe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Oo$2(`ltr`);change=new je$2;constructor(){let e=b$1(Ql$1,{optional:!0});if(e){let n=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ca$1(n||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({})}return i})();var Pn$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Y]})}return i})();var da$2=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Rg=(()=>{class i extends Fn$1{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=tc(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?da$2.get(this._appearance):null,r=da$2.get(e);o&&n.remove(...o),n.add(...r),this._appearance=e}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,a){r&1&&(Ec$1(0,`div`,2),TI(1,3),Ic$1())}return FE({type:i,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[pp$1],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,l){a&1&&(CI(e),Cp$1(0,`span`,0),TI(1),Ec$1(2,`span`,1),TI(3,1),Ic$1(),TI(4,2),lI(5,o,2,0,`div`,2),Cp$1(6,`span`,3)(7,`span`,4)),a&2&&(Hp$1(`mdc-button__ripple`,!l._isFab)(`mdc-fab__ripple`,l._isFab),av(5),dI(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();function tc(i){return i.hasAttribute(`mat-raised-button`)?`elevated`:i.hasAttribute(`mat-stroked-button`)?`outlined`:i.hasAttribute(`mat-flat-button`)?`filled`:i.hasAttribute(`mat-button`)?`text`:null}var nc=new x(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Ji});var Ji={color:`accent`};var Tg=(()=>{class i extends Fn$1{_options=b$1(nc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Ji,this.color=this._options.color||Ji.color}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,a){r&1&&(Ec$1(0,`div`,2),TI(1,3),Ic$1())}return FE({type:i,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(a,l){a&2&&Hp$1(`mdc-fab--extended`,l.extended)(`mat-mdc-extended-fab`,l.extended)},inputs:{extended:[2,`extended`,`extended`,XP]},exportAs:[`matButton`,`matAnchor`],features:[pp$1],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,l){a&1&&(CI(e),Cp$1(0,`span`,0),TI(1),Ec$1(2,`span`,1),TI(3,1),Ic$1(),TI(4,2),lI(5,o,2,0,`div`,2),Cp$1(6,`span`,3)(7,`span`,4)),a&2&&(Hp$1(`mdc-button__ripple`,!l._isFab)(`mdc-fab__ripple`,l._isFab),av(5),dI(l.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return i})();var Fg=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Pn$1,Y]})}return i})();var $t$2=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var Gt=class extends $t$2{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,n,o,r,a){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=o,this.bindings=r||null,this.directives=a||null}};var gt=class extends $t$2{templateRef;viewContainerRef;context;injector;constructor(t,e,n,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var Qi=class extends $t$2{element;constructor(t){super(),this.element=t instanceof Er$3?t.nativeElement:t}};var Ln$1=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Gt)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof gt)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof Qi)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Vn$1=class extends Ln$1{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,o=n.get(bn$2,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,o=t.injector||this._defaultInjector||ie$1.NULL,r=o.get(me,n.injector);e=nF(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(n);o!==-1&&e.remove(o)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Ug=(()=>{class i extends gt{constructor(){let e=b$1(pr$3),n=b$1(Ii$2);super(e,n)}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[pp$1]})}return i})();var Hg=(()=>{class i extends Ln$1{_moduleRef=b$1(bn$2,{optional:!0});_document=b$1(or$2);_viewContainerRef=b$1(Ii$2);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new je$2;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._insertContent(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let o=this._document.createComment(`dom-portal`);e.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._insertContent(n),this._attachedPortal=e,super.setDisposeFn(()=>o.parentNode?.replaceChild(n,o))};_insertContent(e){let n=this._viewContainerRef.element.nativeElement;n.nodeType===n.ELEMENT_NODE?n.appendChild(e):n.parentNode?.insertBefore(e,n)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Rm$1(i)))(o||i)}})();static ɵdir=$E({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[pp$1]})}return i})();var ua$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({})}return i})();var ic=20;var Ye$1=(()=>{class i{_ngZone=b$1(Me);_platform=b$1(O);_renderer=b$1(hr$3).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new K;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ic){return this._platform.isBrowser?new N(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(eg(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Vh$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let o=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(Xt$2(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&n.push(r)}),n}_targetContainsElement(e,n){let o=ne(n),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var oc=(()=>{class i{elementRef=b$1(Er$3);scrollDispatcher=b$1(Ye$1);ngZone=b$1(Me);dir=b$1(Oe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new K;_renderer=b$1(Ta$3);_cleanupScroll;_elementScrolled=new K;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;e.left??=o?e.end:e.start,e.right??=o?e.start:e.end,e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),o&&ht$1()!=ae.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),ht$1()==ae.INVERTED?e.left=e.right:ht$1()==ae.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;On$1()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n=`left`,o=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return e==`start`?e=a?o:n:e==`end`&&(e=a?n:o),a&&ht$1()==ae.INVERTED?e==n?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&ht$1()==ae.NEGATED?e==n?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==n?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return i})();var rc=20;var bt=(()=>{class i{_platform=b$1(O);_listeners;_viewportSize=null;_change=new K;_document=b$1(or$2);constructor(){let e=b$1(Me),n=b$1(hr$3).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[n.listen(`window`,`resize`,o),n.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||n.scrollY||o.scrollTop||0,left:-r.left||e.body?.scrollLeft||n.scrollX||o.scrollLeft||0}}change(e=rc){return e>0?this._change.pipe(eg(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Wt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({})}return i})();var eo$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Y,Wt,Y,Wt]})}return i})();var ma$2=On$1();function _a$2(i){return new Bn(i.get(bt),i.get(or$2))}var Bn=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=j(-this._previousScrollPosition.left),t.style.top=j(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,n=t.style,o=e.style,r=n.scrollBehavior||``,a=o.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),ma$2&&(n.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ma$2&&(n.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function Ca$2(i,t){return new jn$1(i.get(Ye$1),i.get(Me),i.get(bt),t)}var jn$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,n,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Xt$2(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Yt=class{enable(){}disable(){}attach(){}};function no$2(i,t){return t.some(e=>{let n=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return n||o||r||a})}function pa$2(i,t){return t.some(e=>{let n=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return n||o||r||a})}function Zt(i,t){return new zn$1(i.get(Ye$1),i.get(bt),i.get(Me),t)}var zn$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,n,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();no$2(e,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Da$2=(()=>{class i{_injector=b$1(ie$1);noop=()=>new Yt;close=e=>Ca$2(this._injector,e);block=()=>_a$2(this._injector);reposition=e=>Zt(this._injector,e);static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Xt$1=class{positionStrategy;scrollStrategy=new Yt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var Un$1=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var wa$2=(()=>{class i{_attachedOverlays=[];_document=b$1(or$2);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Sa$2=(()=>{class i extends wa$2{_ngZone=b$1(Me);_renderer=b$1(hr$3).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let r=n[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var Ea$2=(()=>{class i extends wa$2{_platform=b$1(O);_ngZone=b$1(Me);_renderer=b$1(hr$3).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(n,`pointerdown`,this._pointerDownListener,o),r.listen(n,`click`,this._clickListener,o),r.listen(n,`auxclick`,this._clickListener,o),r.listen(n,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=W$1(e)};_clickListener=e=>{let n=W$1(e),o=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(ha$2(l.overlayElement,n)||ha$2(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();function ha$2(i,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,n=t;for(;n;){if(n===i)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var xa$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=FE({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var Ma$2=(()=>{class i{_platform=b$1(O);_containerElement;_document=b$1(or$2);_styleLoader=b$1(Z$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Gi()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let n=this._document.createElement(`div`);n.classList.add(e),Gi()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(xa$2)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var io$1=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,n,o){this._renderer=e,this._ngZone=n,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ro(i){return i&&i.nodeType===1}var to$2=Oo$2([]);var Hn$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new K;_attachments=new K;_detachments=new K;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new K;_outsidePointerEvents=new K;_afterNextRenderRef;constructor(t,e,n,o,r,a,l,c,u,d=!1,m,w){this._portalOutlet=t,this._host=e,this._pane=n,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=m,this._renderer=w,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),rh$1(()=>{to$2.update(n=>n.includes(this)?n:[...n,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=By(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let n=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>n.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),rh$1(()=>{to$2.update(e=>e.filter(n=>n!==this))}),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,rh$1(()=>{to$2.update(e=>e.filter(n=>n!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=G(G({},this._config),t),this._updateElementSize()}setDirection(t){this._config=q$1(G({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=j(this._config.width),t.height=j(this._config.height),t.minWidth=j(this._config.minWidth),t.minHeight=j(this._config.minHeight),t.maxWidth=j(this._config.maxWidth),t.maxHeight=j(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ro(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new io$1(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,n){let o=ut$2(e||[]).filter(r=>!!r);o.length&&(n?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=By(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var fa$2=`cdk-overlay-connected-position-bounding-box`;var ac=/([A-Za-z%]+)$/;function Kt$1(i,t){return new $n$1(t,i.get(bt),i.get(or$2),i.get(O),i.get(Ma$2))}var $n$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new K;_resizeSubscription=z.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,n,o,r){this._viewportRuler=e,this._document=n,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(fa$2),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,n=this._viewportRect,o=this._containerRect,r=[],a;for(let l of this._preferredPositions){let c=this._getOriginPoint(t,o,l),u=this._getOverlayPoint(c,e,l),d=this._getOverlayFit(u,e,n,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,n)){r.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:e})}if(r.length){let l=null,c=-1;for(let u of r){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Xe$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(fa$2),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Er$3?this._origin.nativeElement:ro(this._origin)?this._origin:null}_getOriginPoint(t,e,n){let o;if(n.originX==`center`)o=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,l=this._isRtl()?t.left:t.right;o=n.originX==`start`?a:l}e.left<0&&(o-=e.left);let r;return n.originY==`center`?r=t.top+t.height/2:r=n.originY==`top`?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,n){let o;n.overlayX==`center`?o=-e.width/2:n.overlayX===`start`?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return n.overlayY==`center`?r=-e.height/2:r=n.overlayY==`top`?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,n,o){let r=ba$2(e),{x:a,y:l}=t,c=this._getOffset(o,`x`),u=this._getOffset(o,`y`);c&&(a+=c),u&&(l+=u);let d=0-a,m=a+r.width-n.width,w=0-l,A=l+r.height-n.height,L=this._subtractOverflows(r.width,d,m),R=this._subtractOverflows(r.height,w,A),z=L*R;return{visibleArea:z,isCompletelyWithinViewport:r.width*r.height===z,fitsInViewportVertically:R===r.height,fitsInViewportHorizontally:L==r.width}}_canFitWithFlexibleDimensions(t,e,n){if(this._hasFlexibleDimensions){let o=n.bottom-e.y,r=n.right-e.x,a=ga$2(this._overlayRef.getConfig().minHeight),l=ga$2(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||a!=null&&a<=o,u=t.fitsInViewportHorizontally||l!=null&&l<=r;return c&&u}return!1}_pushOverlayOnScreen(t,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=ba$2(e),r=this._viewportRect,a=Math.max(t.x+o.width-r.width,0),l=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-n.top-t.y,0),u=Math.max(r.left-n.left-t.x,0),d=0,m=0;return o.width<=r.width?d=u||-a:d=t.x<this._getViewportMarginStart()?r.left-n.left-t.x:0,o.height<=r.height?m=c||-l:m=t.y<this._getViewportMarginTop()?r.top-n.top-t.y:0,this._previousPushAmount={x:d,y:m},{x:t.x+d,y:t.y+m}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!sc(this._lastScrollVisibility,n)){let o=new Un$1(t,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=t.overlayY;t.overlayX===`center`?n=`center`:this._isRtl()?n=t.overlayX===`start`?`right`:`left`:n=t.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(t,e){let n=this._viewportRect,o=this._isRtl(),r,a,l;if(e.overlayY===`top`)a=t.y,r=n.height-a+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=n.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=n.height-l+this._getViewportMarginTop();else{let A=Math.min(n.bottom-t.y+n.top,t.y),L=this._lastBoundingBoxSize.height;r=A*2,a=t.y-A,r>L&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-L/2)}let c=e.overlayX===`start`&&!o||e.overlayX===`end`&&o,u=e.overlayX===`end`&&!o||e.overlayX===`start`&&o,d,m,w;if(u)w=n.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=t.x-this._getViewportMarginStart();else if(c)m=t.x,d=n.right-t.x-this._getViewportMarginEnd();else{let A=Math.min(n.right-t.x+n.left,t.x),L=this._lastBoundingBoxSize.width;d=A*2,m=t.x-A,d>L&&!this._isInitialRender&&!this._growAfterOpen&&(m=t.x-L/2)}return{top:a,left:m,bottom:l,right:w,width:d,height:r}}_setBoundingBoxStyles(t,e){let n=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=j(n.width),o.height=j(n.height),o.top=j(n.top)||`auto`,o.bottom=j(n.bottom)||`auto`,o.left=j(n.left)||`auto`,o.right=j(n.right)||`auto`,e.overlayX===`center`?o.alignItems=`center`:o.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=j(r)),a&&(o.maxWidth=j(a))}this._lastBoundingBoxSize=n,Xe$1(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Xe$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Xe$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let n={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();Xe$1(n,this._getExactOverlayY(e,t,d)),Xe$1(n,this._getExactOverlayX(e,t,d))}else n.position=`static`;let l=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),n.transform=l.trim(),a.maxHeight&&(o?n.maxHeight=j(a.maxHeight):r&&(n.maxHeight=``)),a.maxWidth&&(o?n.maxWidth=j(a.maxWidth):r&&(n.maxWidth=``)),Xe$1(this._pane.style,n)}_getExactOverlayY(t,e,n){let o={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n)),t.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=j(r.y);return o}_getExactOverlayX(t,e,n){let o={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n));let a;if(this._isRtl()?a=t.overlayX===`end`?`left`:`right`:a=t.overlayX===`end`?`right`:`left`,a===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=j(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:pa$2(t,n),isOriginOutsideView:no$2(t,n),isOverlayClipped:pa$2(e,n),isOverlayOutsideView:no$2(e,n)}}_subtractOverflows(t,...e){return e.reduce((n,o)=>n-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+t-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ut$2(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof Er$3)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,n=t.height||0;return{top:t.y,bottom:t.y+n,left:t.x,right:t.x+e,height:n,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let n=e.getBoundingClientRect();return t&&(e.style.display=``),n}};function Xe$1(i,t){for(let e in t)Object.hasOwn(t,e)&&(i[e]=t[e]);return i}function ga$2(i){if(typeof i!=`number`&&i!=null){let[t,e]=i.split(ac);return!e||e===`px`?parseFloat(t):null}return i||null}function ba$2(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function sc(i,t){return i===t?!0:i.isOriginClipped===t.isOriginClipped&&i.isOriginOutsideView===t.isOriginOutsideView&&i.isOverlayClipped===t.isOverlayClipped&&i.isOverlayOutsideView===t.isOverlayOutsideView}var ya$2=`cdk-global-overlay-wrapper`;function Aa$2(i){return new Gn$1}var Gn$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(ya$2),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:a,maxHeight:l}=this._overlayRef.getConfig(),c=(o===`100%`||o===`100vw`)&&(!a||a===`100%`||a===`100vw`),u=(r===`100%`||r===`100vh`)&&(!l||l===`100%`||l===`100vh`),d=this._xPosition,m=this._xOffset,w=this._overlayRef.getConfig().direction===`rtl`,A=``,L=``,R=``;c?R=`flex-start`:d===`center`?(R=`center`,w?L=m:A=m):w?d===`left`||d===`end`?(R=`flex-end`,A=m):(d===`right`||d===`start`)&&(R=`flex-start`,L=m):d===`left`||d===`start`?(R=`flex-start`,A=m):(d===`right`||d===`end`)&&(R=`flex-end`,L=m),t.position=this._cssPosition,t.marginLeft=c?`0`:A,t.marginTop=u?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?`0`:L,e.justifyContent=R,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(ya$2),n.justifyContent=n.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var Na$2=(()=>{class i{_injector=b$1(ie$1);global(){return Aa$2()}flexibleConnectedTo(e){return Kt$1(this._injector,e)}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var ao$1=new x(`OVERLAY_DEFAULT_CONFIG`);function qt(i,t){i.get(Z$1).load(xa$2);let e=i.get(Ma$2),n=i.get(or$2),o=i.get(Ge),r=i.get(Di$2),a=i.get(Oe),l=i.get(Ta$3,null,{optional:!0})||i.get(hr$3).createRenderer(null,null),c=new Xt$1(t),u=i.get(ao$1,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,!n.body||!(`showPopover`in n.body)?c.usePopover=!1:c.usePopover=t?.usePopover??u;let d=n.createElement(`div`),m=n.createElement(`div`);d.id=o.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),m.appendChild(d),c.usePopover&&(m.setAttribute(`popover`,`manual`),m.classList.add(`cdk-overlay-popover`));let w=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ro(w)?w.after(m):w?.type===`parent`?w.element.appendChild(m):e.getContainerElement().appendChild(m),new Hn$1(new Vn$1(d,r,i),m,d,c,i.get(Me),i.get(Sa$2),n,i.get(bn$1),i.get(Ea$2),t?.disableAnimations??i.get(Kg,null,{optional:!0})===`NoopAnimations`,i.get(me),l)}var Ia$2=(()=>{class i{scrollStrategies=b$1(Da$2);_positionBuilder=b$1(Na$2);_injector=b$1(ie$1);create(e){return qt(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var lc=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var cc=new x(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b$1(ie$1);return()=>Zt(i)}});var oo$1=(()=>{class i{elementRef=b$1(Er$3);static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var ka$2=new x(`cdk-connected-overlay-default-config`);var dc=(()=>{class i{_dir=b$1(Oe,{optional:!0});_injector=b$1(ie$1);_overlayRef;_templatePortal;_backdropSubscription=z.EMPTY;_attachSubscription=z.EMPTY;_detachSubscription=z.EMPTY;_positionSubscription=z.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=b$1(cc);_ngZone=b$1(Me);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new je$2;positionChange=new je$2;attach=new je$2;detach=new je$2;overlayKeydown=new je$2;overlayOutsideClick=new je$2;constructor(){let e=b$1(pr$3),n=b$1(Ii$2),o=b$1(ka$2,{optional:!0}),r=b$1(ao$1,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new gt(e,n),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=lc);let e=this._overlayRef=qt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!ke(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let o=this._getOriginElement(),r=W$1(n);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Xt$1({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=Kt$1(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof oo$1?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof oo$1?this.origin.elementRef.nativeElement:this.origin instanceof Er$3?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(hg(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,XP],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,XP],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,XP],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,XP],push:[2,`cdkConnectedOverlayPush`,`push`,XP],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,e=>e===`url-change`||e===`pop-state`?e:XP(e)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,XP],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[pm]})}return i})();var so$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({providers:[Ia$2],imports:[Y,ua$2,eo$2,eo$2]})}return i})();var uc=20;var mc=new x(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b$1(ie$1);return()=>Zt(i,{scrollThrottle:uc})}});var pc=new x(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Oa$2=`tooltip-panel`;var hc={passive:!0};var fc=8;var gc=8;var bc=24;var yc=200;var vc=(()=>{class i{_elementRef=b$1(Er$3);_ngZone=b$1(Me);_platform=b$1(O);_ariaDescriber=b$1(Jr);_focusMonitor=b$1(ct$1);_dir=b$1(Oe);_injector=b$1(ie$1);_viewContainerRef=b$1(Ii$2);_mediaMatcher=b$1(mt);_document=b$1(or$2);_renderer=b$1(Ta$3);_animationsDisabled=se();_defaultOptions=b$1(pc,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ra$2;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Wi(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=Wi(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=He(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=He(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new K;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=fc}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(pg(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(n);this._detach(),this._portal=this._portal||new Gt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(pg(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof Er$3)return this._overlayRef;this._detach()}let n=this._injector.get(Ye$1).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Oa$2}`,r=Kt$1(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation(`global`);return r.positionChanges.pipe(pg(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=qt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(mc)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(pg(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(pg(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(pg(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(pg(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();n.withPositions([this._addOffset(G(G({},o.main),r.main)),this._addOffset(G(G({},o.fallback),r.fallback))])}_addOffset(e){let n=gc,o=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-n:e.originY===`bottom`?e.offsetY=n:e.originX===`start`?e.offsetX=o?-n:n:e.originX===`end`&&(e.offsetX=o?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,n=this.position,o;n==`above`||n==`below`?o={originX:`center`,originY:n==`above`?`top`:`bottom`}:n==`before`||n==`left`&&e||n==`right`&&!e?o={originX:`start`,originY:`center`}:(n==`after`||n==`right`&&e||n==`left`&&!e)&&(o={originX:`end`,originY:`center`});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,n=this.position,o;n==`above`?o={overlayX:`center`,overlayY:`bottom`}:n==`below`?o={overlayX:`center`,overlayY:`top`}:n==`before`||n==`left`&&e||n==`right`&&!e?o={overlayX:`end`,overlayY:`center`}:(n==`after`||n==`right`&&e||n==`left`&&!e)&&(o={overlayX:`start`,overlayY:`center`});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),By(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position===`above`||this.position===`below`?n===`top`?n=`bottom`:n===`bottom`&&(n=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:o,originY:r}=e,a;if(n===`center`?this._dir&&this._dir.value===`rtl`?a=o===`end`?`left`:`right`:a=o===`start`?`left`:`right`:a=n===`bottom`&&r===`top`?`above`:`below`,a!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${Oa$2}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let n=e.targetTouches?.[0],o=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;n!==o&&!o.contains(n)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,hc))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let n=this._elementRef.nativeElement,o=n.style;(e===`on`||n.nodeName!==`INPUT`&&n.nodeName!==`TEXTAREA`)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect=`none`),(e===`on`||!n.draggable)&&(o.webkitUserDrag=`none`),o.touchAction=`none`,o.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||By({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!ke(e):!0;static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(n,o){n&2&&Hp$1(`mat-mdc-tooltip-disabled`,o.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return i})();var Ra$2=(()=>{class i{_changeDetectorRef=b$1(KP);_elementRef=b$1(Er$3);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=se();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new K;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>bc&&e.width>=yc}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(n.classList.remove(e?r:o),n.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(n);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`tooltip`];return FE({type:i,selectors:[[`mat-tooltip-component`]],viewQuery:function(o,r){if(o&1&&Rp$1(e,7),o&2){let a;NI(a=MI())&&(r._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(o,r){o&1&&Mp$1(`mouseleave`,function(l){return r._handleMouseLeave(l)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(o,r){o&1&&(Ec$1(0,`div`,1,0),Sp$1(`animationend`,function(l){return r._handleAnimationEnd(l)}),Ec$1(2,`div`,2),tD(3),Ic$1()()),o&2&&(GI(r.tooltipClass),Hp$1(`mdc-tooltip--multiline`,r._isMultiline),av(3),Qp$1(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return i})();var Ey=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[ji,so$1,Y,Wt]})}return i})();var ja$2=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(n){return new(n||i)(Cr$3(Ta$3),Cr$3(Er$3))};static ɵdir=$E({type:i})}return i})();var _c=(()=>{class i extends ja$2{static ɵfac=(()=>{let e;return function(o){return(e||(e=Rm$1(i)))(o||i)}})();static ɵdir=$E({type:i,features:[pp$1]})}return i})();var za$1=new x(``);var Cc={provide:za$1,useExisting:fo$2(()=>Ua$2),multi:!0};function Dc(){let i=te()?te().getUserAgent():``;return/android (\d+)/.test(i.toLowerCase())}var wc=new x(``);var Ua$2=(()=>{class i extends ja$2{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode??=!Dc()}writeValue(e){let n=e??``;this.setProperty(`value`,n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(n){return new(n||i)(Cr$3(Ta$3),Cr$3(Er$3),Cr$3(wc,8))};static ɵdir=$E({type:i,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,o){n&1&&Mp$1(`input`,function(a){return o._handleInput(a.target.value)})(`blur`,function(){return o.onTouched()})(`compositionstart`,function(){return o._compositionStart()})(`compositionend`,function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[dD([Cc]),pp$1]})}return i})();function mo(i){return i==null||po(i)===0}function po(i){return i==null?null:Array.isArray(i)||typeof i==`string`?i.length:i instanceof Set?i.size:null}var ii$1=new x(``);var ho=new x(``);var Sc=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var lo$1=class{static min(t){return Ec(t)}static max(t){return xc(t)}static required(t){return Ha$2(t)}static requiredTrue(t){return Mc(t)}static email(t){return Ac(t)}static minLength(t){return Nc(t)}static maxLength(t){return Ic(t)}static pattern(t){return kc(t)}static nullValidator(t){return Yn$1()}static compose(t){return Za$2(t)}static composeAsync(t){return Ka$2(t)}};function Ec(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function xc(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function Ha$2(i){return mo(i.value)?{required:!0}:null}function Mc(i){return i.value===!0?null:{required:!0}}function Ac(i){return mo(i.value)||Sc.test(i.value)?null:{email:!0}}function Nc(i){return t=>{let e=t.value?.length??po(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Ic(i){return t=>{let e=t.value?.length??po(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function kc(i){if(!i)return Yn$1;let t,e;return typeof i==`string`?(e=``,i.charAt(0)!==`^`&&(e+=`^`),e+=i,i.charAt(i.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(mo(n.value))return null;let o=n.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Yn$1(i){return null}function $a$2(i){return i!=null}function Ga$2(i){return hc$1(i)?Te(i):i}function Wa$2(i){let t={};return i.forEach(e=>{t=e!=null?G(G({},t),e):t}),Object.keys(t).length===0?null:t}function Ya$2(i,t){return t.map(e=>e(i))}function Oc(i){return!i.validate}function Xa$2(i){return i.map(t=>Oc(t)?t:e=>t.validate(e))}function Za$2(i){if(!i)return null;let t=i.filter($a$2);return t.length==0?null:function(e){return Wa$2(Ya$2(e,t))}}function fo$1(i){return i!=null?Za$2(Xa$2(i)):null}function Ka$2(i){if(!i)return null;let t=i.filter($a$2);return t.length==0?null:function(e){let n=Ya$2(e,t).map(Ga$2);return Jh$1(n).pipe(_e$1(Wa$2))}}function go$1(i){return i!=null?Ka$2(Xa$2(i)):null}function Ta$2(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function qa$2(i){return i._rawValidators}function Ja$2(i){return i._rawAsyncValidators}function co$1(i){return i?Array.isArray(i)?i:[i]:[]}function Xn$1(i,t){return Array.isArray(i)?i.includes(t):i===t}function Fa$2(i,t){let e=co$1(t);return co$1(i).forEach(o=>{Xn$1(e,o)||e.push(o)}),e}function Pa$2(i,t){return co$1(t).filter(e=>!Xn$1(i,e))}var Zn$1=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=fo$1(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=go$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var Ze$2=class extends Zn$1{name;get formDirective(){return null}get path(){return null}};var Jt=`VALID`;var Wn$1=`INVALID`;var yt=`PENDING`;var Qt=`DISABLED`;var Re$1=class{};var Kn$1=class extends Re$1{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var tn$1=class extends Re$1{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var nn=class extends Re$1{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var vt=class extends Re$1{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var qn$1=class extends Re$1{source;constructor(t){super(),this.source=t}};var Ke$2=class extends Re$1{source;constructor(t){super(),this.source=t}};function bo$1(i){return(oi(i)?i.validators:i)||null}function Rc(i){return Array.isArray(i)?fo$1(i):i||null}function yo$2(i,t){return(oi(t)?t.asyncValidators:i)||null}function Tc(i){return Array.isArray(i)?go$1(i):i||null}function oi(i){return i!=null&&!Array.isArray(i)&&typeof i==`object`}function Qa$2(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new T$1(1e3,``);if(!ts$2(n,e))throw new T$1(1001,``)}function es$2(i,t,e){i._forEachChild((n,o)=>{if(e[o]===void 0)throw new T$1(-1002,``)})}var Fc=Symbol();var on$1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Oo$2(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this[Fc]=!0,this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return rh$1(this.statusReactive)}set status(t){rh$1(()=>this.statusReactive.set(t))}_status=TD(()=>this.statusReactive());statusReactive=Oo$2(void 0);get valid(){return this.status===Jt}get invalid(){return this.status===Wn$1}get pending(){return this.status===yt}get disabled(){return this.status===Qt}get enabled(){return this.status!==Qt}errors;get pristine(){return rh$1(this.pristineReactive)}set pristine(t){rh$1(()=>this.pristineReactive.set(t))}_pristine=TD(()=>this.pristineReactive());pristineReactive=Oo$2(!0);get dirty(){return!this.pristine}get touched(){return rh$1(this.touchedReactive)}set touched(t){rh$1(()=>this.touchedReactive.set(t))}_touched=TD(()=>this.touchedReactive());touchedReactive=Oo$2(!1);get untouched(){return!this.touched}_events=new K;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Fa$2(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Fa$2(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Pa$2(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Pa$2(t,this._rawAsyncValidators))}hasValidator(t){return Xn$1(this._rawValidators,t)}hasAsyncValidator(t){return Xn$1(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(q$1(G({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new nn(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new nn(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(q$1(G({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new tn$1(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new tn$1(!0,n))}markAsPending(t={}){this.status=yt;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new vt(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(q$1(G({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Qt,this.errors=null,this._forEachChild(o=>{o.disable(q$1(G({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Kn$1(this.value,n)),this._events.next(new vt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q$1(G({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Jt,this._forEachChild(n=>{n.enable(q$1(G({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(q$1(G({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Jt||this.status===yt)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Kn$1(this.value,e)),this._events.next(new vt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(q$1(G({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qt:Jt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=yt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=Ga$2(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new vt(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new je$2,this.statusChanges=new je$2}_calculateStatus(){return this._allControlsDisabled()?Qt:this.errors?Wn$1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yt)?yt:this._anyControlsHaveStatus(Wn$1)?Wn$1:Jt}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new tn$1(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new nn(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){oi(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Rc(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Tc(this._rawAsyncValidators)}_updateHasRequiredValidator(){rh$1(()=>this._hasRequired.set(this.hasValidator(lo$1.required)))}};function ts$2(i,t){return Object.hasOwn(i,t)}function Pc(i){return i.tagName===`INPUT`||i.tagName===`SELECT`||i.tagName===`TEXTAREA`}function Lc(i,t,e,n){switch(e){case`name`:i.setAttribute(t,e,n);break;case`disabled`:case`readonly`:case`required`:n?i.setAttribute(t,e,``):i.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e)}}var uo$1=class{kind;context;control;message;constructor({kind:t,context:e,control:n}){this.kind=t,this.context=e,this.control=n}};var Vc$1=new x(``);var ri=new x(``,{factory:()=>vo$2});var vo$2=`always`;function Bc$1(i,t,e=vo$2){_o$2(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(i.disabled),zc$1(i,t),Hc$1(i,t),Uc$1(i,t),jc(i,t)}function Jn$1(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),ei$1(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Qn$1(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function jc(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function _o$2(i,t){let e=qa$2(i);t.validator!==null?i.setValidators(Ta$2(e,t.validator)):typeof e==`function`&&i.setValidators([e]);let n=Ja$2(i);t.asyncValidator!==null?i.setAsyncValidators(Ta$2(n,t.asyncValidator)):typeof n==`function`&&i.setAsyncValidators([n]);let o=()=>i.updateValueAndValidity();Qn$1(t._rawValidators,o),Qn$1(t._rawAsyncValidators,o)}function ei$1(i,t){let e=!1;if(i!==null){if(t.validator!==null){let o=qa$2(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.validator);r.length!==o.length&&(e=!0,i.setValidators(r))}}if(t.asyncValidator!==null){let o=Ja$2(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.asyncValidator);r.length!==o.length&&(e=!0,i.setAsyncValidators(r))}}}let n=()=>{};return Qn$1(t._rawValidators,n),Qn$1(t._rawAsyncValidators,n),e}function zc$1(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn===`change`&&ns$2(i,t)})}function Uc$1(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&ns$2(i,t),i.updateOn!==`submit`&&i.markAsTouched()})}function ns$2(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Hc$1(i,t){let e=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function is$2(i,t){_o$2(i,t)}function $c$1(i,t){return ei$1(i,t)}function Gc(i,t){if(!Object.hasOwn(i,`model`))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Wc$1(i){return Object.getPrototypeOf(i.constructor)===_c}function os$2(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn===`submit`&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Yc$1(i,t){if(!t)return null;let e,n,o;return t.forEach(r=>{r.constructor===Ua$2?e=r:Wc$1(r)?n=r:o=r}),o||n||e||null}function Xc$1(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var Zc$1=(()=>{class i{_validator=Yn$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Yn$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,features:[pm]})}return i})();var Kc$1={provide:ii$1,useExisting:fo$2(()=>rs$1),multi:!0};var rs$1=(()=>{class i extends Zc$1{required;inputName=`required`;normalizeInput=XP;createValidator=e=>Ha$2;enabled(e){return e}static ɵfac=(()=>{let e;return function(o){return(e||(e=Rm$1(i)))(o||i)}})();static ɵdir=$E({type:i,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,o){n&2&&Dp$1(`required`,o._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[dD([Kc$1]),pp$1]})}return i})();var qc={provide:Vc$1,useFactory:()=>{let i=b$1(_t,{self:!0});return{setParseErrors:t=>{i.setParseErrorSource(t)},set onReset(t){i.onReset=t}}}};var _t=class extends Zn$1{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ke$2&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Yc$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(t,e,n){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(le$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.control,e=this.injector?.get(KP);if(!t||!e)return;let n=e.markForCheck.bind(e);if(this.subscription=new z,this.subscription.add(()=>this.discardPendingCustomValue(t)),typeof t.registerOnChange==`function`){let o=(r,a)=>{this.discardPendingCustomValue(t),a&&this.viewToModelUpdate(r),n()};t.registerOnChange(o),this.subscription.add(()=>t._unregisterOnChange(o))}this.subscription.add(t.valueChanges.subscribe(n)),this.subscription.add(t.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=t.events.subscribe(o=>{o instanceof Ke$2&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&t.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(o=>{let r=this.control;r&&(r._pendingValue=o,r._pendingChange=!0,r._pendingDirty=!0,this.pendingCustomValue=o,this.hasPendingCustomValue=!0,r.updateOn===`change`&&this.updateControlFromCustom(r))}),t.listenToCustomControlOutput(`touch`,()=>{let o=this.control;o&&(o._pendingTouched=!0,o.updateOn===`blur`&&o._pendingChange&&this.updateControlFromCustom(o),o.updateOn!==`submit`&&o.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=Pc(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof rs$1))}updateControlFromCustom(t){let e=t._pendingValue;t._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),t._pendingDirty&&t.markAsDirty(),t.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(t.value)}discardPendingCustomValue(t){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),t._pendingValue=t.value,t._pendingChange=!1,t._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let n=this.control,o=this.customControlBindings;if(!n||!o)return;this.hasPendingCustomValue&&!n._pendingChange&&(o.value=this.pendingCustomValue,this.clearPendingCustomValue()),Object.is(o.value,n.value)||(this.discardPendingCustomValue(n),o.value=n.value,t.setCustomControlModelInput(n.value)),this.bindControlProperty(t,o,`touched`,n.touched),this.bindControlProperty(t,o,`dirty`,n.dirty),this.bindControlProperty(t,o,`valid`,n.valid),this.bindControlProperty(t,o,`invalid`,n.invalid),this.bindControlProperty(t,o,`pending`,n.pending),this.bindControlProperty(t,o,`disabled`,n.disabled),this.shouldBindRequired&&this.bindControlProperty(t,o,`required`,this.isRequired);let r=n.errors;if(o.errors!==r){o.errors=r;let a=this._convertErrors(r);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,n,o){if(e[n]===o)return;e[n]=o;let r=t.setInputOnDirectives(n,o);this.isNativeFormElement&&!r&&(n===`disabled`||n===`required`)&&this.renderer&&Lc(this.renderer,t.nativeElement,n,o)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([n,o])=>new uo$1({context:o,kind:n,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,n=TD(()=>{let o=t();return o.length===0?null:o.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=()=>(e=rh$1(n),e),Du(()=>{let o=n();o!==e&&(e=o,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(KP)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var ti$1=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Uy=(()=>{class i extends ti$1{constructor(e){super(e)}static ɵfac=function(n){return new(n||i)(Cr$3(_t,2))};static ɵdir=$E({type:i,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(n,o){n&2&&Hp$1(`ng-untouched`,o.isUntouched)(`ng-touched`,o.isTouched)(`ng-pristine`,o.isPristine)(`ng-dirty`,o.isDirty)(`ng-valid`,o.isValid)(`ng-invalid`,o.isInvalid)(`ng-pending`,o.isPending)},standalone:!1,features:[pp$1]})}return i})();var Hy=(()=>{class i extends ti$1{constructor(e){super(e)}static ɵfac=function(n){return new(n||i)(Cr$3(Ze$2,10))};static ɵdir=$E({type:i,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(n,o){n&2&&Hp$1(`ng-untouched`,o.isUntouched)(`ng-touched`,o.isTouched)(`ng-pristine`,o.isPristine)(`ng-dirty`,o.isDirty)(`ng-valid`,o.isValid)(`ng-invalid`,o.isInvalid)(`ng-pending`,o.isPending)(`ng-submitted`,o.isSubmitted)},standalone:!1,features:[pp$1]})}return i})();var ni$1=class extends on$1{constructor(t,e,n){super(bo$1(e),yo$2(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){let o=this._find(t);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){rh$1(()=>{es$2(this,!0,t),Object.keys(t).forEach(n=>{Qa$2(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let o=this._find(n);o&&o.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,o)=>{n.reset(t?t[o]:null,q$1(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ke$2(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return ts$2(this.controls,t)?this.controls[t]:null}};var Jc$1={provide:Ze$2,useExisting:fo$2(()=>Qc$1)};var en=Promise.resolve();var Qc$1=(()=>{class i extends Ze$2{callSetDisabledState;get submitted(){return rh$1(this.submittedReactive)}_submitted=TD(()=>this.submittedReactive());submittedReactive=Oo$2(!1);_directives=/* @__PURE__ */ new Set;form;ngSubmit=new je$2;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new ni$1({},fo$1(e),go$1(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){en.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){en.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){en.then(()=>{let n=this._findContainer(e.path),o=new ni$1({});is$2(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){en.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){en.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),os$2(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new qn$1(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(n){return new(n||i)(Cr$3(ii$1,10),Cr$3(ho,10),Cr$3(ri,8))};static ɵdir=$E({type:i,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(n,o){n&1&&Mp$1(`submit`,function(a){return o.onSubmit(a)})(`reset`,function(){return o.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[dD([Jc$1]),pp$1]})}return i})();function La$1(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Va$1(i){return typeof i==`object`&&i!==null&&Object.keys(i).length===2&&`value`in i&&`disabled`in i}var ed$1=class extends on$1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(bo$1(e),yo$2(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Va$1(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){rh$1(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ke$2(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){La$1(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){La$1(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Va$1(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var td$1=i=>i instanceof ed$1;var nd$1=(()=>{class i extends Ze$2{callSetDisabledState;get submitted(){return rh$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=TD(()=>this._submittedReactive());_submittedReactive=Oo$2(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new T$1(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ei$1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);if(!n)throw new T$1(-1055,!1);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Jn$1(e.control||null,e,!1),Xc$1(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,os$2(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new qn$1(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(Jn$1(n||null,e),td$1(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);is$2(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&$c$1(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){_o$2(this.form,this),this._oldForm&&ei$1(this._oldForm,this)}static ɵfac=function(n){return new(n||i)(Cr$3(ii$1,10),Cr$3(ho,10),Cr$3(ri,8))};static ɵdir=$E({type:i,features:[pp$1,pm]})}return i})();var id$1={provide:Ze$2,useExisting:fo$2(()=>od$1)};var od$1=(()=>{class i extends nd$1{form=null;ngSubmit=new je$2;get control(){return this.form}static ɵfac=(()=>{let e;return function(o){return(e||(e=Rm$1(i)))(o||i)}})();static ɵdir=$E({type:i,selectors:[[``,`formGroup`,``]],hostBindings:function(n,o){n&1&&Mp$1(`submit`,function(a){return o.onSubmit(a)})(`reset`,function(){return o.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[dD([id$1]),pp$1]})}return i})();var Gy=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=$E({type:i,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return i})();var Ba$2=class extends on$1{constructor(t,e,n){super(bo$1(e),yo$2(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){rh$1(()=>{es$2(this,!1,t),t.forEach((n,o)=>{Qa$2(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(t.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,o)=>{n.reset(t[o],q$1(G({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ke$2(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var as$2=new x(``);var rd$1={provide:_t,useExisting:fo$2(()=>ad$1)};var ad$1=(()=>{class i extends _t{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new je$2;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,a,l,c){super(c,l,o),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&(Jn$1(n,this,!1),this.removeParseErrorsValidator(n)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Bc$1(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}Gc(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Jn$1(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return Object.hasOwn(e,`form`)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!0)}static ɵfac=function(n){return new(n||i)(Cr$3(ii$1,10),Cr$3(ho,10),Cr$3(za$1,10),Cr$3(as$2,8),Cr$3(ri,8),Cr$3(Ta$3,8),Cr$3(ie$1,8))};static ɵdir=$E({type:i,selectors:[[``,`formControl`,``]],inputs:{form:[0,`formControl`,`form`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},exportAs:[`ngForm`],standalone:!1,features:[dD([rd$1,qc]),pp$1,pm,qE(null)]})}return i})();var sd$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({})}return i})();var Wy=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:as$2,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:ri,useValue:e.callSetDisabledState??vo$2}]}}static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[sd$1]})}return i})();var Zy=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),o=e().touched();return n&&o}static ɵfac=function(n){return new(n||i)};static ɵprov=vr$3({token:i,factory:i.ɵfac})}return i})();var ss$2=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,n,o,r){this._defaultMatcher=t,this._parentFormGroup=n,this._parentForm=o,this._stateChanges=r,e?Lo$2(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return t?.isErrorState(n,e)??!1}};var Qy=(()=>{class i{labelPosition=`after`;static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){return FE({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(o,r){o&2&&Hp$1(`mdc-form-field--align-end`,r.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(o,r){o&1&&(CI(),TI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return i})();var ls$2=(()=>{class i{_animationsDisabled=se();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||i)};static ɵcmp=FE({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,o){n&2&&Hp$1(`mat-pseudo-checkbox-indeterminate`,o.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,o.state===`checked`)(`mat-pseudo-checkbox-disabled`,o.disabled)(`mat-pseudo-checkbox-minimal`,o.appearance===`minimal`)(`mat-pseudo-checkbox-full`,o.appearance===`full`)(`_mat-animation-noopable`,o._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var dd$1=new x(`MAT_OPTION_PARENT_COMPONENT`);var ud$1=new x(`MatOptgroup`);var Co$2=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var cs$2=(()=>{class i{_element=b$1(Er$3);_changeDetectorRef=b$1(KP);_parent=b$1(dd$1,{optional:!0});group=b$1(ud$1,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=b$1(Ge).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Oo$2(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new je$2;_text;_stateChanges=new K;constructor(){let e=b$1(Z$1);e.load(Tn$1),e.load(dt$1),this._signalDisableRipple=!!this._parent&&Lo$2(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let o=this._getHostElement();typeof o.focus==`function`&&o.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ke(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Co$2(this,e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`text`],n=[[[`mat-icon`]],`*`],o=[`mat-icon`,`*`];function r(c,u){if(c&1&&bp$1(0,`mat-pseudo-checkbox`,1),c&2){let d=wI();wp$1(`disabled`,d.disabled)(`state`,d.selected?`checked`:`unchecked`)}}function a(c,u){if(c&1&&bp$1(0,`mat-pseudo-checkbox`,3),c&2){let d=wI();wp$1(`disabled`,d.disabled)}}function l(c,u){if(c&1&&(li(0,`span`,4),tD(1),vc$1()),c&2){let d=wI();av(),Dc$1(`(`,d.group.label,`)`)}}return FE({type:i,selectors:[[`mat-option`]],viewQuery:function(u,d){if(u&1&&Rp$1(e,7),u&2){let m;NI(m=MI())&&(d._text=m.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(u,d){u&1&&Mp$1(`click`,function(){return d._selectViaInteraction()})(`keydown`,function(w){return d._handleKeydown(w)}),u&2&&(_p$1(`id`,d.id),Dp$1(`aria-selected`,d.selected)(`aria-disabled`,d.disabled.toString()),Hp$1(`mdc-list-item--selected`,d.selected)(`mat-mdc-option-multiple`,d.multiple)(`mat-mdc-option-active`,d.active)(`mdc-list-item--disabled`,d.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,XP]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:o,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(u,d){u&1&&(CI(n),lI(0,r,1,2,`mat-pseudo-checkbox`,1),TI(1),li(2,`span`,2,0),TI(4,1),vc$1(),lI(5,a,1,1,`mat-pseudo-checkbox`,3),lI(6,l,2,1,`span`,4),bp$1(7,`div`,5)),u&2&&(dI(d.multiple?0:-1),av(5),dI(!d.multiple&&d.selected&&!d.hideSingleSelectionIndicator?5:-1),av(),dI(d.group&&d.group._inert?6:-1),av(),wp$1(`matRippleTrigger`,d._getHostElement())(`matRippleDisabled`,d.disabled||d.disableRipple))},dependencies:[ls$2,ra$2],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function gv(i,t,e){if(e.length){let n=t.toArray(),o=e.toArray(),r=0;for(let a=0;a<i+1;a++)n[a].group&&n[a].group===o[r]&&r++;return r}return 0}function bv(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var ds$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Y]})}return i})();var xv=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=VE({type:i});static ɵinj=Cl$2({imports:[Pn$1,ds$2,cs$2,Y]})}return i})();var Od=new x(`MAT_BADGE_CONFIG`);var zc=`mat-badge-content`;var Ld=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=FE({type:n,selectors:[[`ng-component`]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return n})();var Bc=(()=>{class n{_ngZone=b$1(Me);_elementRef=b$1(Er$3);_ariaDescriber=b$1(Jr);_renderer=b$1(Ta$3);_animationsDisabled=se();_idGenerator=b$1(Ge);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=b$1(Hr);_document=b$1(or$2);constructor(){let e=b$1(Od,{optional:!0}),t=b$1(Z$1);t.load(Ld),t.load(dt$1),this._color=e?.color||`primary`,this.overlap=e?.overlap??!0,this.position=e?.position||`above after`,this.size=e?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement(`span`),t=`mat-badge-active`;return e.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),e.setAttribute(`aria-hidden`,`true`),e.classList.add(zc),this._animationsDisabled&&e.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??``}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${zc}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(t,a){t&2&&Hp$1(`mat-badge-overlap`,a.overlap)(`mat-badge-above`,a.isAbove())(`mat-badge-below`,!a.isAbove())(`mat-badge-before`,!a.isAfter())(`mat-badge-after`,a.isAfter())(`mat-badge-small`,a.size===`small`)(`mat-badge-medium`,a.size===`medium`)(`mat-badge-large`,a.size===`large`)(`mat-badge-hidden`,a.hidden||!a.content)(`mat-badge-disabled`,a.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,XP],disabled:[2,`matBadgeDisabled`,`disabled`,XP],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,XP]}})}return n})();var Vc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[ji,Y]})}return n})();var Hc=Symbol(`FIELD_TREE`);function pi(n){return typeof n==`function`&&n[Hc]===!0}var tn=new x(``);var _o$1={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Gd=new x(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>_o$1});var je$1=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(je$1||{});var vo$1=class{source;checked};var hi=(()=>{class n{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_ngZone=b$1(Me);_animationsDisabled=se();_options=b$1(Gd,{optional:!0});_injector=b$1(ie$1);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new vo$1;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new je$2;indeterminateChange=new je$2;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=je$1.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b$1(Z$1).load(Tn$1);let e=b$1(new oh$1(`tabindex`),{optional:!0});this._options=this._options||_o$1,this.color=this._options.color||_o$1.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b$1(Ge).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(tn,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(je$1.Indeterminate):this._transitionCheckState(this.checked?je$1.Checked:je$1.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Oo$2(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,a=this._getAnimationTargetElement();if(!(t===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?je$1.Checked:je$1.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case je$1.Init:if(t===je$1.Checked)return this._animationClasses.uncheckedToChecked;if(t==je$1.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case je$1.Unchecked:return t===je$1.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case je$1.Checked:return t===je$1.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case je$1.Indeterminate:return t===je$1.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`input`];return FE({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(o,r){if(o&1&&Rp$1(e,5),o&2){let c;NI(c=MI())&&(r._inputElement=c.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(o,r){o&2&&(_p$1(`id`,r.id),Dp$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),GI(r.color?`mat-`+r.color:`mat-accent`),Hp$1(`_mat-animation-noopable`,r._animationsDisabled)(`mdc-checkbox--disabled`,r.disabled)(`mat-mdc-checkbox-disabled`,r.disabled)(`mat-mdc-checkbox-checked`,r.checked)(`mat-mdc-checkbox-disabled-interactive`,r.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,XP],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,XP],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,a=>a==null?void 0:eF(a)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP],checked:[2,`checked`,`checked`,XP],disabled:[2,`disabled`,`disabled`,XP],indeterminate:[2,`indeterminate`,`indeterminate`,XP]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[dD([{provide:za$1,useExisting:fo$2(()=>n),multi:!0},{provide:ii$1,useExisting:n,multi:!0}]),pm],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(o,r){if(o&1&&(CI(),li(0,`label`,3),Mp$1(`click`,function(l){return r._preventBubblingFromLabel(l)}),li(1,`span`,4,0),bp$1(3,`span`,5),li(4,`input`,6,1),Mp$1(`blur`,function(){return r._onBlur()})(`click`,function(){return r._onInputClick()})(`change`,function(l){return r._onInteractionEvent(l)}),vc$1(),bp$1(6,`span`,7),li(7,`span`,8),cu(),li(8,`svg`,9),bp$1(9,`path`,10),vc$1(),lu(),bp$1(10,`span`,11),vc$1(),bp$1(11,`span`,12),vc$1(),li(12,`span`,13,2),TI(14),vc$1()()),o&2){let c=xI(2);wp$1(`labelPosition`,r.labelPosition)(`for`,r.inputId),av(4),Hp$1(`mdc-checkbox--selected`,r.checked),wp$1(`checked`,r.checked)(`indeterminate`,r.indeterminate)(`disabled`,r.disabled&&!r.disabledInteractive)(`id`,r.inputId)(`required`,r.required)(`tabIndex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex),Dp$1(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-checked`,r.indeterminate?`mixed`:null)(`aria-controls`,r.ariaControls)(`aria-disabled`,r.disabled&&r.disabledInteractive?!0:null)(`aria-expanded`,r.ariaExpanded)(`aria-owns`,r.ariaOwns)(`name`,r.name)(`value`,r.value),av(7),wp$1(`matRippleTrigger`,c)(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleCentered`,!0)}},dependencies:[ra$2,Qy],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();var aa$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[hi,Y]})}return n})();var yo$1=class{_box;_destroyed=new K;_resizeSubject=new K;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new N(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(_e$1(e=>e.filter(t=>t.target===i)),Xt$2(e=>e.length>0),ml$3({bufferSize:1,refCount:!0}),pg(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var oa$1=(()=>{class n{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=b$1(Me);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||`content-box`;return this._observers.has(a)||this._observers.set(a,new yo$1(a)),this._observers.get(a).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=vr$3({token:n,factory:n.ɵfac})}return n})();var St=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`mat-label`]]})}return n})();var Yc=new x(`MatError`);var gn$1=(()=>{class n{id=b$1(Ge).getId(`mat-mdc-error-`);static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(t,a){t&2&&_p$1(`id`,a.id)},inputs:{id:`id`},features:[dD([{provide:Yc,useExisting:n}])]})}return n})();var ui=(()=>{class n{align=`start`;id=b$1(Ge).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,a){t&2&&(_p$1(`id`,a.id),Dp$1(`align`,null),Hp$1(`mat-mdc-form-field-hint-end`,a.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Hd=new x(`MatPrefix`);var Zc=new x(`MatSuffix`);var xo$1=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[dD([{provide:Zc,useExisting:n}])]})}return n})();var Jc=new x(`FloatingLabelParent`);var Wc=(()=>{class n{_elementRef=b$1(Er$3);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=b$1(oa$1);_ngZone=b$1(Me);_parent=b$1(Jc);_resizeSubscription=new z;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return jd(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,a){t&2&&Hp$1(`mdc-floating-label--float-above`,a.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function jd(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var $c=`mdc-line-ripple--active`;var ra$1=`mdc-line-ripple--deactivating`;var Uc=(()=>{class n{_elementRef=b$1(Er$3);_cleanupTransitionEnd;constructor(){let e=b$1(Me),t=b$1(Ta$3);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ra$1),e.add($c)}deactivate(){this._elementRef.nativeElement.classList.add(ra$1)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(ra$1);e.propertyName===`opacity`&&a&&t.remove($c,ra$1)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Xc=(()=>{class n{_elementRef=b$1(Er$3);_ngZone=b$1(Me);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`notch`];return FE({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(o,r){if(o&1&&Rp$1(e,5),o&2){let c;NI(c=MI())&&(r._notch=c.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(o,r){o&2&&Hp$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(o,r){o&1&&(CI(),Cp$1(0,`div`,1),Ec$1(1,`div`,2,0),TI(3),Ic$1(),Cp$1(4,`div`,3))},encapsulation:2})})()}return n})();var fi=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n})}return n})();var gi=new x(`MatFormField`);var qd=new x(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Kc=`fill`;var Wd=`auto`;var Qc=`fixed`;var $d=`translateY(-50%)`;var Ft$1=(()=>{class n{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_platform=b$1(O);_idGenerator=b$1(Ge);_ngZone=b$1(Me);_defaults=b$1(qd,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Lo$2(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=zP(`iconPrefixContainer`);_textPrefixContainerSignal=zP(`textPrefixContainer`);_iconSuffixContainerSignal=zP(`iconSuffixContainer`);_textSuffixContainerSignal=zP(`textSuffixContainer`);_prefixSuffixContainers=TD(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ZP(St);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Wi(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Wd}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Kc;this._appearanceSignal.set(t)}_appearanceSignal=Oo$2(Kc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Qc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Qc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new K;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=se();constructor(){let e=this._defaults,t=b$1(Oe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Du(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=pi(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!pi(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=TD(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,a=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(yl$2([void 0,void 0]),_e$1(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),ug(),Xt$2(([[o,r],[c,l]])=>o!==c||r!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!pi(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(pg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Xh$1(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){tF({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=TD(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(pi(t)){let a=t();return e===`valid`?a.valid():e===`dirty`?a.dirty():e===`touched`?a.touched():e===`pending`?a.pending():e===`untouched`?!a.touched():e===`pristine`?!a.dirty():e===`invalid`?!a.valid():!1}else{let a=t;return e===`valid`?a.valid:e===`dirty`?a.dirty:e===`touched`?a.touched:e===`pending`?a.pending:e===`untouched`?a.untouched:e===`pristine`?a.pristine:e===`invalid`?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(c=>c.align===`start`):null,r=this._hintChildren?this._hintChildren.find(c=>c.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,a;if(t){let o=this._describedByIds||e;a=e.concat(t.filter(r=>r&&!o.includes(r)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,c=t?.getBoundingClientRect().width??0,l=a?.getBoundingClientRect().width??0,m=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${$d} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${r+c}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,r+c+l+m]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],a=[`iconSuffixContainer`],o=[`textSuffixContainer`],r=[`textField`],c=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],l=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function m(O,X){O&1&&bp$1(0,`span`,21)}function u(O,X){if(O&1&&(li(0,`label`,20),TI(1,1),lI(2,m,1,0,`span`,21),vc$1()),O&2){let x=wI(2);wp$1(`floating`,x._shouldLabelFloat())(`monitorResize`,x._hasOutline())(`id`,x._labelId),Dp$1(`for`,x._control.disableAutomaticLabeling?null:x._control.id),av(2),dI(!x.hideRequiredMarker&&x._unwrapMaybeSignal(x._control.required)?2:-1)}}function f(O,X){if(O&1&&lI(0,u,3,5,`label`,20),O&2){let x=wI();dI(x._hasFloatingLabel()?0:-1)}}function b(O,X){O&1&&bp$1(0,`div`,7)}function p(O,X){}function y(O,X){if(O&1&&gp$1(0,p,0,0,`ng-template`,13),O&2){wI(2);let x=xI(1);wp$1(`ngTemplateOutlet`,x)}}function v(O,X){if(O&1&&(li(0,`div`,9),lI(1,y,1,1,null,13),vc$1()),O&2){let x=wI();wp$1(`matFormFieldNotchedOutlineOpen`,x._shouldLabelFloat()),av(),dI(x._forceDisplayInfixLabel()?-1:1)}}function N(O,X){O&1&&(li(0,`div`,10,2),TI(2,2),vc$1())}function L(O,X){O&1&&(li(0,`div`,11,3),TI(2,3),vc$1())}function z(O,X){}function H(O,X){if(O&1&&gp$1(0,z,0,0,`ng-template`,13),O&2){wI();let x=xI(1);wp$1(`ngTemplateOutlet`,x)}}function ke(O,X){O&1&&(li(0,`div`,14,4),TI(2,4),vc$1())}function ye(O,X){O&1&&(li(0,`div`,15,5),TI(2,5),vc$1())}function gt(O,X){O&1&&bp$1(0,`div`,16)}function bt(O,X){O&1&&(li(0,`div`,18),TI(1,6),vc$1())}function Fe(O,X){if(O&1&&(li(0,`mat-hint`,22),tD(1),vc$1()),O&2){let x=wI(2);wp$1(`id`,x._hintLabelId),av(),Qp$1(x.hintLabel)}}function _t(O,X){if(O&1&&(li(0,`div`,19),lI(1,Fe,2,2,`mat-hint`,22),TI(2,7),bp$1(3,`div`,23),TI(4,8),vc$1()),O&2){let x=wI();av(),dI(x.hintLabel?1:-1)}}return FE({type:n,selectors:[[`mat-form-field`]],contentQueries:function(X,x,ie){if(X&1&&(Op$1(ie,x._labelChild,St,5),Ap$1(ie,fi,5)(ie,Hd,5)(ie,Zc,5)(ie,Yc,5)(ie,ui,5)),X&2){SI();let Ie;NI(Ie=MI())&&(x._formFieldControl=Ie.first),NI(Ie=MI())&&(x._prefixChildren=Ie),NI(Ie=MI())&&(x._suffixChildren=Ie),NI(Ie=MI())&&(x._errorChildren=Ie),NI(Ie=MI())&&(x._hintChildren=Ie)}},viewQuery:function(X,x){if(X&1&&(kp$1(x._iconPrefixContainerSignal,e,5)(x._textPrefixContainerSignal,t,5)(x._iconSuffixContainerSignal,a,5)(x._textSuffixContainerSignal,o,5),Rp$1(r,5)(e,5)(t,5)(a,5)(o,5)(Wc,5)(Xc,5)(Uc,5)),X&2){SI(4);let ie;NI(ie=MI())&&(x._textField=ie.first),NI(ie=MI())&&(x._iconPrefixContainer=ie.first),NI(ie=MI())&&(x._textPrefixContainer=ie.first),NI(ie=MI())&&(x._iconSuffixContainer=ie.first),NI(ie=MI())&&(x._textSuffixContainer=ie.first),NI(ie=MI())&&(x._floatingLabel=ie.first),NI(ie=MI())&&(x._notchedOutline=ie.first),NI(ie=MI())&&(x._lineRipple=ie.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(X,x){X&2&&Hp$1(`mat-mdc-form-field-label-always-float`,x._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,x._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,x._hasIconSuffix)(`mat-form-field-invalid`,x._unwrapMaybeSignal(x._control.errorState))(`mat-form-field-disabled`,x._unwrapMaybeSignal(x._control.disabled))(`mat-form-field-autofilled`,x._unwrapMaybeSignal(x._control.autofilled))(`mat-form-field-appearance-fill`,x.appearance==`fill`)(`mat-form-field-appearance-outline`,x.appearance==`outline`)(`mat-form-field-hide-placeholder`,x._hasFloatingLabel()&&!x._shouldLabelFloat())(`mat-primary`,x.color!==`accent`&&x.color!==`warn`)(`mat-accent`,x.color===`accent`)(`mat-warn`,x.color===`warn`)(`ng-untouched`,x._shouldForward(`untouched`))(`ng-touched`,x._shouldForward(`touched`))(`ng-pristine`,x._shouldForward(`pristine`))(`ng-dirty`,x._shouldForward(`dirty`))(`ng-valid`,x._shouldForward(`valid`))(`ng-invalid`,x._shouldForward(`invalid`))(`ng-pending`,x._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[dD([{provide:gi,useExisting:n},{provide:Jc,useExisting:n}])],ngContentSelectors:l,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(X,x){if(X&1&&(CI(c),gp$1(0,f,1,1,`ng-template`,null,0,ID),li(2,`div`,6,1),Mp$1(`click`,function(Ie){return x._control.onContainerClick(Ie)}),lI(4,b,1,0,`div`,7),li(5,`div`,8),lI(6,v,2,2,`div`,9),lI(7,N,3,0,`div`,10),lI(8,L,3,0,`div`,11),li(9,`div`,12),lI(10,H,1,1,null,13),TI(11),vc$1(),lI(12,ke,3,0,`div`,14),lI(13,ye,3,0,`div`,15),vc$1(),lI(14,gt,1,0,`div`,16),vc$1(),li(15,`div`,17),lI(16,bt,2,0,`div`,18)(17,_t,5,1,`div`,19),vc$1()),X&2){let ie,Ie=x._unwrapMaybeSignal(x._control.disabled);av(2),Hp$1(`mdc-text-field--filled`,!x._hasOutline())(`mdc-text-field--outlined`,x._hasOutline())(`mdc-text-field--no-label`,!x._hasFloatingLabel())(`mdc-text-field--disabled`,Ie)(`mdc-text-field--invalid`,x._unwrapMaybeSignal(x._control.errorState)),av(2),dI(!x._hasOutline()&&!Ie?4:-1),av(2),dI(x._hasOutline()?6:-1),av(),dI(x._hasIconPrefix?7:-1),av(),dI(x._hasTextPrefix?8:-1),av(2),dI(!x._hasOutline()||x._forceDisplayInfixLabel()?10:-1),av(2),dI(x._hasTextSuffix?12:-1),av(),dI(x._hasIconSuffix?13:-1),av(),dI(x._hasOutline()?-1:14),av(),Hp$1(`mat-mdc-form-field-subscript-dynamic-size`,x.subscriptSizing===`dynamic`);let Oi=x._getSubscriptMessageType();av(),dI((ie=Oi)===`error`?16:ie===`hint`?17:-1)}},dependencies:[Wc,Xc,ys$2,Uc,ui],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var wo$1=new x(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var el=new x(`MatChipAvatar`);var tl$1=new x(`MatChipTrailingIcon`);var nl$1=new x(`MatChipEdit`);var il=new x(`MatChipRemove`);var So$1=new x(`MatChip`);var al=(()=>{class n{_elementRef=b$1(Er$3);_parentChip=b$1(So$1);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){b$1(Z$1).load(Tn$1),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,a){t&2&&(Dp$1(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),Hp$1(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:eF(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var ol=(()=>{class n extends al{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,a){t&1&&Mp$1(`click`,function(r){return a._handleClick(r)})(`keydown`,function(r){return a._handleKeydown(r)}),t&2&&(Dp$1(`tabindex`,a._getTabindex()),Hp$1(`mdc-evolution-chip__action--presentational`,!1))},features:[pp$1]})}return n})();var bi=(()=>{class n{_changeDetectorRef=b$1(KP);_elementRef=b$1(Er$3);_tagName=b$1($P);_ngZone=b$1(Me);_focusMonitor=b$1(ct$1);_globalRippleOptions=b$1(Zi,{optional:!0});_document=b$1(or$2);_onFocus=new K;_onBlur=new K;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=se();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=b$1(Ge).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new je$2;destroyed=new je$2;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=b$1(sa$2);_injector=b$1(ie$1);constructor(){let e=b$1(Z$1);e.load(Tn$1),e.load(dt$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Xh$1(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let a=t._elementRef.nativeElement;return a===e||a.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],t=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(r,c){r&1&&(li(0,`span`,3),TI(1,1),vc$1())}function o(r,c){r&1&&(li(0,`span`,7),TI(1,2),vc$1())}return FE({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(c,l,m){if(c&1&&Ap$1(m,el,5)(m,nl$1,5)(m,tl$1,5)(m,il,5)(m,el,5)(m,tl$1,5)(m,nl$1,5)(m,il,5),c&2){let u;NI(u=MI())&&(l.leadingIcon=u.first),NI(u=MI())&&(l.editIcon=u.first),NI(u=MI())&&(l.trailingIcon=u.first),NI(u=MI())&&(l.removeIcon=u.first),NI(u=MI())&&(l._allLeadingIcons=u),NI(u=MI())&&(l._allTrailingIcons=u),NI(u=MI())&&(l._allEditIcons=u),NI(u=MI())&&(l._allRemoveIcons=u)}},viewQuery:function(c,l){if(c&1&&Rp$1(ol,5),c&2){let m;NI(m=MI())&&(l.primaryAction=m.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(c,l){c&1&&Mp$1(`keydown`,function(u){return l._handleKeydown(u)}),c&2&&(_p$1(`id`,l.id),Dp$1(`role`,l.role)(`aria-label`,l.ariaLabel),GI(`mat-`+(l.color||`primary`)),Hp$1(`mdc-evolution-chip`,!l._isBasicChip)(`mdc-evolution-chip--disabled`,l.disabled)(`mdc-evolution-chip--with-trailing-action`,l._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,l.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,l.leadingIcon)(`mdc-evolution-chip--with-avatar`,l.leadingIcon)(`mat-mdc-chip-with-avatar`,l.leadingIcon)(`mat-mdc-chip-highlighted`,l.highlighted)(`mat-mdc-chip-disabled`,l.disabled)(`mat-mdc-basic-chip`,l._isBasicChip)(`mat-mdc-standard-chip`,!l._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,l._hasTrailingIcon())(`_mat-animation-noopable`,l._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,XP],highlighted:[2,`highlighted`,`highlighted`,XP],disableRipple:[2,`disableRipple`,`disableRipple`,XP],disabled:[2,`disabled`,`disabled`,XP]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[dD([{provide:So$1,useExisting:n}])],ngContentSelectors:t,decls:9,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(c,l){c&1&&(CI(e),bp$1(0,`span`,0),li(1,`span`,1)(2,`span`,2),lI(3,a,2,0,`span`,3),li(4,`span`,4),TI(5),bp$1(6,`span`,5),vc$1(),bp$1(7,`span`,6),vc$1()(),lI(8,o,2,0,`span`,7)),c&2&&(av(3),dI(l.leadingIcon?3:-1),av(5),dI(l._hasTrailingIcon()?8:-1))},dependencies:[al],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var Co$1=(()=>{class n extends bi{_defaultOptions=b$1(wo$1,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new je$2;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,t,a){e!==this.selected&&(this._selected=e,a&&this.selectionChange.emit({source:this,isUserInput:t,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵcmp=(function(){let e=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],t=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(r,c){r&1&&(li(0,`span`,3),TI(1,1),li(2,`span`,8),cu(),li(3,`svg`,9),bp$1(4,`path`,10),vc$1()()())}function o(r,c){r&1&&(li(0,`span`,7),TI(1,2),vc$1())}return FE({type:n,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:37,hostBindings:function(c,l){c&2&&(_p$1(`id`,l.id),Dp$1(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,l.role),Hp$1(`mdc-evolution-chip`,!l._isBasicChip)(`mdc-evolution-chip--filter`,!l._isBasicChip)(`mdc-evolution-chip--selectable`,!l._isBasicChip)(`mat-mdc-chip-selected`,l.selected)(`mat-mdc-chip-multiple`,l._chipListMultiple)(`mat-mdc-chip-disabled`,l.disabled)(`mat-mdc-chip-with-avatar`,l.leadingIcon)(`mdc-evolution-chip--disabled`,l.disabled)(`mdc-evolution-chip--selected`,l.selected)(`mdc-evolution-chip--selecting`,!l._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,l._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,l.leadingIcon)(`mdc-evolution-chip--with-primary-graphic`,l._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,l.leadingIcon)(`mat-mdc-chip-highlighted`,l.highlighted)(`mat-mdc-chip-with-trailing-icon`,l._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,XP],selected:[2,`selected`,`selected`,XP]},outputs:{selectionChange:`selectionChange`},features:[dD([{provide:bi,useExisting:n},{provide:So$1,useExisting:n}]),pp$1],ngContentSelectors:t,decls:9,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(c,l){c&1&&(CI(e),bp$1(0,`span`,0),li(1,`span`,1)(2,`button`,2),lI(3,a,5,0,`span`,3),li(4,`span`,4),TI(5),bp$1(6,`span`,5)(7,`span`,6),vc$1()()(),lI(8,o,2,0,`span`,7)),c&2&&(av(2),wp$1(`_allowFocusWhenDisabled`,!0),Dp$1(`aria-description`,l.ariaDescription)(`aria-label`,l.ariaLabel)(`aria-selected`,l.ariaSelected),av(),dI(l._hasLeadingGraphic()?3:-1),av(5),dI(l._hasTrailingIcon()?8:-1))},dependencies:[ol],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var No$1=(()=>{class n{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_dir=b$1(Oe,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new K;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Yo$2;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(yl$2(null),fg(()=>Xh$1(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(yl$2(this._chips)).subscribe(e=>{let t=[];e.forEach(a=>a._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Ui(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(pg(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(pg(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(yl$2(null),pg(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(pg(this._destroyed)).subscribe(e=>{let a=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),c=o||r;this._isValidIndex(a)&&c&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){return FE({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(a,o,r){if(a&1&&Ap$1(r,bi,5),a&2){let c;NI(c=MI())&&(o._chips=c)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(a,o){a&1&&Mp$1(`keydown`,function(c){return o._handleKeydown(c)}),a&2&&Dp$1(`role`,o.role)},inputs:{disabled:[2,`disabled`,`disabled`,XP],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:eF(t)]},ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(CI(),Ec$1(0,`div`,0),TI(1),Ic$1())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var ko$1=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Ud={provide:za$1,useExisting:fo$2(()=>Mo$1),multi:!0};var Mo$1=(()=>{class n extends No$1{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=b$1(wo$1,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(t=>t.selected);return this.multiple?e:e[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,t)=>e===t;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new je$2;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(yl$2(null),pg(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(pg(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(pg(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(t=>{t!==e.source&&t._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,t=!0){this._clearSelection(),Array.isArray(e)?e.forEach(a=>this._selectValue(a,t)):this._selectValue(e,t)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(t=>t.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new ko$1(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(t=>{t!==e&&t.deselect()})}_selectValue(e,t){let a=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return a&&(t?a.selectViaInteraction():a.select()),a}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵcmp=(function(){return FE({type:n,selectors:[[`mat-chip-listbox`]],contentQueries:function(a,o,r){if(a&1&&Ap$1(r,Co$1,5),a&2){let c;NI(c=MI())&&(o._chips=c)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(a,o){a&1&&Mp$1(`focus`,function(){return o.focus()})(`blur`,function(){return o._blur()})(`keydown`,function(c){return o._keydown(c)}),a&2&&(_p$1(`tabIndex`,o.disabled||o.empty?-1:o.tabIndex),Dp$1(`role`,o.role)(`aria-required`,o.role?o.required:null)(`aria-disabled`,o.disabled.toString())(`aria-multiselectable`,o.multiple)(`aria-orientation`,o.ariaOrientation),Hp$1(`mat-mdc-chip-list-disabled`,o.disabled)(`mat-mdc-chip-list-required`,o.required))},inputs:{multiple:[2,`multiple`,`multiple`,XP],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,XP],compareWith:`compareWith`,required:[2,`required`,`required`,XP],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,XP],value:`value`},outputs:{change:`change`},features:[dD([Ud]),pp$1],ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(CI(),Ec$1(0,`div`,0),TI(1),Ic$1())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var rl$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({providers:[Zy,{provide:wo$1,useValue:{separatorKeyCodes:[13]}}],imports:[Pn$1,Y]})}return n})();var ot$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Br$1,Ft$1,Y]})}return n})();function cl$1(n){return Error(`Unable to find icon with the name "${n}"`)}function Kd(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function ll$1(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function sl(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var $t$1=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}};var ml$1=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,a,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=a}addSvgIcon(e,t,a){return this.addSvgIconInNamespace(``,e,t,a)}addSvgIconLiteral(e,t,a){return this.addSvgIconLiteralInNamespace(``,e,t,a)}addSvgIconInNamespace(e,t,a,o){return this._addSvgIconConfig(e,t,new $t$1(a,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,a,o){let r=this._sanitizer.sanitize(Q$1.HTML,a);if(!r)throw sl(a);let c=Sl$1(r);return this._addSvgIconConfig(e,t,new $t$1(``,c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,a){return this._addSvgIconSetConfig(e,new $t$1(t,null,a))}addSvgIconSetLiteralInNamespace(e,t,a){let o=this._sanitizer.sanitize(Q$1.HTML,t);if(!o)throw sl(t);let r=Sl$1(o);return this._addSvgIconSetConfig(e,new $t$1(``,r,a))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=Yd(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Q$1.RESOURCE_URL,e);if(!t)throw ll$1(e);let a=this._cachedIconsByUrl.get(t);return a?Vh$1(la$1(a)):this._loadSvgIconFromConfig(new $t$1(e,null)).pipe(gg(o=>this._cachedIconsByUrl.set(t,o)),_e$1(o=>la$1(o)))}getNamedSvgIcon(e,t=``){let a=dl$1(t,e),o=this._svgIconConfigs.get(a);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(a,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):Hh$1(cl$1(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Vh$1(la$1(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(_e$1(t=>la$1(t)))}_getSvgFromIconSetConfigs(e,t){let a=this._extractIconWithNameFromAnySet(e,t);if(a)return Vh$1(a);let o=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(fl$3(c=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(Q$1.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(m)),Vh$1(null)})));return Jh$1(o).pipe(_e$1(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw cl$1(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let a=t.length-1;a>=0;a--){let o=t[a];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(r,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(gg(t=>e.svgText=t),_e$1(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Vh$1(null):this._fetchIcon(e).pipe(gg(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,a){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),a);let c=this._svgElementFromString(Sl$1(`<svg></svg>`));return c.appendChild(r),this._setSvgAttributes(c,a)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let a=t.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(e){let t=this._svgElementFromString(Sl$1(`<svg></svg>`)),a=e.attributes;for(let o=0;o<a.length;o++){let{name:r,value:c}=a[o],l=r.toLowerCase();l!==`id`&&!l.startsWith(`on`)&&t.setAttribute(r,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:a}=e,o=a?.withCredentials??!1;if(!this._httpClient)throw Kd();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(Q$1.RESOURCE_URL,t);if(!r)throw ll$1(t);let c=this._inProgressUrlFetches.get(r);if(c)return c;let l=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(_e$1(m=>Sl$1(m)),ag(()=>this._inProgressUrlFetches.delete(r)),Gi$1());return this._inProgressUrlFetches.set(r,l),l}_addSvgIconConfig(e,t,a){return this._svgIconConfigs.set(dl$1(e,t),a),this}_addSvgIconSetConfig(e,t){let a=this._iconSetConfigs.get(e);return a?a.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let a=0;a<this._resolvers.length;a++){let o=this._resolvers[a](t,e);if(o)return Qd(o)?new $t$1(o.url,null,o.options):new $t$1(o,null)}}static ɵfac=function(t){return new(t||n)(Ne$1(yl$1,8),Ne$1(Ri$1),Ne$1(or$2,8),Ne$1($e$2))};static ɵprov=ue$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function la$1(n){return n.cloneNode(!0)}function dl$1(n,i){return n+`:`+i}function Qd(n){return!!(n.url&&n.options)}function Yd(n){let i=null,e=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(t=>{let a=t.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(e=!0),a.startsWith(`material symbols rounded`)?i=`rounded`:a.startsWith(`material symbols sharp`)?i=`sharp`:a.startsWith(`material symbols`)&&(i=`outlined`)}),[i&&!e?`material-symbols-${i}`:`material-icons`,`mat-ligature-font`]}var Zd=new x(`MAT_ICON_DEFAULT_OPTIONS`);var Jd=new x(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=b$1(or$2),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:``}}});var pl$1=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var em=pl$1.map(n=>`[${n}]`).join(`, `);var tm=/^url\(['"]?#(.*?)['"]?\)$/;var Ye=(()=>{class n{_elementRef=b$1(Er$3);_iconRegistry=b$1(ml$1);_location=b$1(Jd);_errorHandler=b$1($e$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=z.EMPTY;constructor(){let e=b$1(new oh$1(`aria-hidden`),{optional:!0}),t=b$1(Zd,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let a=e.childNodes[t];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),t.forEach(a=>e.classList.add(a)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences,a=e.startsWith(`//`)?`/.${e}`:e;t&&t.forEach((o,r)=>{o.forEach(c=>{r.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(em),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let o=0;o<t.length;o++)pl$1.forEach(r=>{let c=t[o],l=c.getAttribute(r),m=l?l.match(tm):null;if(m){let u=a.get(c);u||(u=[],a.set(c,u)),u.push({name:r,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,a]=this._splitIconName(e);t&&(this._svgNamespace=t),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,t).pipe(en$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${t}:${a}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){return FE({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,o){a&2&&(Dp$1(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),GI(o.color?`mat-`+o.color:``),Hp$1(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,XP],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,o){a&1&&(CI(),TI(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();var Ze$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Y]})}return n})();var hl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=FE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var nm={passive:!0};var ul$1=(()=>{class n{_platform=b$1(O);_ngZone=b$1(Me);_renderer=b$1(hr$3).createRenderer(null,null);_styleLoader=b$1(Z$1);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return vt$1;this._styleLoader.load(hl);let t=ne(e),a=this._monitoredElements.get(t);if(a)return a.subject;let o=new K,r=`cdk-text-field-autofilled`,c=m=>{m.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>o.next({target:m.target,isAutofilled:!0}))):m.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:m.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,c,nm)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=ne(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=vr$3({token:n,factory:n.ɵfac})}return n})();var fl$1=(()=>{class n{_elementRef=b$1(Er$3);_platform=b$1(O);_ngZone=b$1(Me);_renderer=b$1(Ta$3);_resizeEvents=new K;_previousValue;_initialHeight;_destroyed=new K;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=He(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=He(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=b$1(or$2);_hasFocus=!1;_isViewInited=!1;constructor(){b$1(Z$1).load(hl),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(eg(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position=`absolute`,t.visibility=`hidden`,t.border=`none`,t.padding=`0`,t.height=``,t.minHeight=``,t.maxHeight=``,t.top=t.bottom=t.left=t.right=`auto`,t.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||``,a=this._platform.FIREFOX,o=this._hasFocus,r=a?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;o&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(r);let c=e.scrollHeight-4;return e.classList.remove(r),o&&(e.style.marginBottom=t),c}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,a=t.value;if(!e&&this._minRows===this._previousMinRows&&a===this._previousValue)return;let o=this._measureScrollHeight(),r=Math.max(o,this._cachedPlaceholderHeight||0);t.style.height=`${r}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=a,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:a}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,a)}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(t,a){t&1&&Mp$1(`input`,function(){return a._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,XP],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return n})();var gl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({})}return n})();var bl=new x(`MAT_INPUT_VALUE_ACCESSOR`);var am=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var om=new x(`MAT_INPUT_CONFIG`);var Xn=(()=>{class n{_elementRef=b$1(Er$3);_platform=b$1(O);ngControl=b$1(_t,{optional:!0,self:!0});_autofillMonitor=b$1(ul$1);_ngZone=b$1(Me);_formField=b$1(gi,{optional:!0});_renderer=b$1(Ta$3);_uid=b$1(Ge).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=b$1(om,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new K;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Wi(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(lo$1.required)??!1}set required(e){this._required=Wi(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Af().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Wi(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Af().has(e));constructor(){let e=b$1(Qc$1,{optional:!0}),t=b$1(od$1,{optional:!0}),a=b$1(Zy),o=b$1(bl,{optional:!0,self:!0}),r=b$1(tn,{optional:!0,self:!0}),c=this._elementRef.nativeElement,l=c.nodeName.toLowerCase();o?Lo$2(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=c,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(c,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ss$2(a,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=c.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Du(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){am.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,a){t&1&&Mp$1(`focus`,function(){return a._focusChanged(!0)})(`blur`,function(){return a._focusChanged(!1)})(`input`,function(){return a._onInput()}),t&2&&(_p$1(`id`,a.id)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Dp$1(`name`,a.name||null)(`readonly`,a._getReadonlyAttribute())(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null)(`aria-invalid`,a.empty&&a.required?null:a.errorState)(`aria-required`,a.required)(`id`,a.id),Hp$1(`mat-input-server`,a._isServer)(`mat-mdc-form-field-textarea-control`,a._isInFormField&&a._isTextarea)(`mat-mdc-form-field-input-control`,a._isInFormField)(`mat-mdc-input-disabled-interactive`,a.disabledInteractive)(`mdc-text-field__input`,a._isInFormField)(`mat-mdc-native-select-inline`,a._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP]},exportAs:[`matInput`],features:[dD([{provide:fi,useExisting:n}]),pm]})}return n})();var Kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[ot$1,ot$1,gl,Y]})}return n})();var rm=new x(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var vl=(()=>{class n{_elementRef=b$1(Er$3);_ngZone=b$1(Me);_changeDetectorRef=b$1(KP);_renderer=b$1(Ta$3);_cleanupTransitionEnd;constructor(){let e=Gl$1(),t=b$1(rm,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=_l(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=_l(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new je$2;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,a){t&1&&Cp$1(0,`div`,2)}return FE({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(a,o){a&2&&(Dp$1(`aria-valuenow`,o._isIndeterminate()?null:o.value)(`mode`,o.mode),GI(`mat-`+o.color),Hp$1(`_mat-animation-noopable`,o._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!o._isNoopAnimation)(`mdc-linear-progress--indeterminate`,o._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,eF],bufferValue:[2,`bufferValue`,`bufferValue`,eF],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(a,o){a&1&&(Ec$1(0,`div`,0),Cp$1(1,`div`,1),lI(2,e,1,0,`div`,2),Ic$1(),Ec$1(3,`div`,3),Cp$1(4,`span`,4),Ic$1(),Ec$1(5,`div`,5),Cp$1(6,`span`,4),Ic$1()),a&2&&(av(),Vp$1(`flex-basis`,o._getBufferBarFlexBasis()),av(),dI(o.mode===`buffer`?2:-1),av(),Vp$1(`transform`,o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return n})();function _l(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var yl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Y]})}return n})();var vn$1=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new K;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,a){this._multiple=i,this._emitChanges=t,this.compareWith=a,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var To$1=(()=>{class n{_listeners=[];notify(e,t){for(let a of this._listeners)a(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=vr$3({token:n,factory:n.ɵfac})}return n})();var sa$1=class{source;value;constructor(i,e){this.source=i,this.value=e}};var lm={provide:za$1,useExisting:fo$2(()=>Eo$1),multi:!0};var xl=new x(`MatRadioGroup`);var sm=new x(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Eo$1=(()=>{class n{_changeDetector=b$1(KP);_value=null;_name=b$1(Ge).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new je$2;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new sa$1(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,a,o){if(t&1&&Ap$1(o,da$1,5),t&2){let r;NI(r=MI())&&(a._radios=r)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,XP],required:[2,`required`,`required`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[dD([lm,{provide:xl,useExisting:n}])]})}return n})();var da$1=(()=>{class n{_elementRef=b$1(Er$3);_changeDetector=b$1(KP);_focusMonitor=b$1(ct$1);_radioDispatcher=b$1(To$1);_defaultOptions=b$1(sm,{optional:!0});_ngZone=b$1(Me);_renderer=b$1(Ta$3);_uniqueId=b$1(Ge).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new je$2;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=se();_injector=b$1(ie$1);constructor(){b$1(Z$1).load(Tn$1);let e=b$1(xl,{optional:!0}),t=b$1(new oh$1(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=eF(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new sa$1(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,By(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`input`],t=[`formField`];return FE({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(r,c){if(r&1&&Rp$1(e,5)(t,7,Er$3),r&2){let l;NI(l=MI())&&(c._inputElement=l.first),NI(l=MI())&&(c._rippleTrigger=l.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(r,c){r&1&&Mp$1(`focus`,function(){return c._inputElement.nativeElement.focus()}),r&2&&(Dp$1(`id`,c.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Hp$1(`mat-primary`,c.color===`primary`)(`mat-accent`,c.color===`accent`)(`mat-warn`,c.color===`warn`)(`mat-mdc-radio-checked`,c.checked)(`mat-mdc-radio-disabled`,c.disabled)(`mat-mdc-radio-disabled-interactive`,c.disabledInteractive)(`_mat-animation-noopable`,c._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:eF(o)],checked:[2,`checked`,`checked`,XP],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,XP],required:[2,`required`,`required`,XP],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(r,c){r&1&&(CI(),li(0,`label`,2,0)(2,`span`,3),bp$1(3,`span`,4),li(4,`input`,5,1),Mp$1(`change`,function(m){return c._onInputInteraction(m)}),vc$1(),li(6,`span`,6),bp$1(7,`span`,7)(8,`span`,8),vc$1(),li(9,`span`,9),bp$1(10,`span`,10),vc$1()(),li(11,`span`,11),TI(12),vc$1()()),r&2&&(wp$1(`labelPosition`,c.labelPosition)(`for`,c.inputId),av(2),Hp$1(`mdc-radio--disabled`,c.disabled),av(2),wp$1(`id`,c.inputId)(`checked`,c.checked)(`disabled`,c.disabled&&!c.disabledInteractive)(`required`,c.required),Dp$1(`name`,c.name)(`value`,c.value)(`aria-label`,c.ariaLabel)(`aria-labelledby`,c.ariaLabelledby)(`aria-describedby`,c.ariaDescribedby)(`aria-disabled`,c.disabled&&c.disabledInteractive?`true`:null),av(5),wp$1(`matRippleTrigger`,c._rippleTrigger.nativeElement)(`matRippleDisabled`,c._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[ra$2,Qy],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return n})();var kl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Pn$1,da$1,Y]})}return n})();var mm=new x(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var ma$1=class{source;checked;constructor(i,e){this.source=i,this.checked=e}};var Ao$1=(()=>{class n{_elementRef=b$1(Er$3);_focusMonitor=b$1(ct$1);_changeDetectorRef=b$1(KP);defaults=b$1(mm);_injector=b$1(ie$1);_signalFormField=null;_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ma$1(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=se();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new je$2;toggleChange=new je$2;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){b$1(Z$1).load(Tn$1);let e=b$1(new oh$1(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=b$1(Ge).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngOnInit(){this._signalFormField=this._injector.get(tn,void 0,{optional:!0,self:!0})}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ma$1(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function a(o,r){o&1&&(li(0,`span`,11),cu(),li(1,`svg`,13),bp$1(2,`path`,14),vc$1(),li(3,`svg`,15),bp$1(4,`path`,16),vc$1()())}return FE({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(r,c){if(r&1&&Rp$1(e,5),r&2){let l;NI(l=MI())&&(c._switchElement=l.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(r,c){r&2&&(_p$1(`id`,c.id),Dp$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),GI(c.color?`mat-`+c.color:``),Hp$1(`mat-mdc-slide-toggle-focused`,c._focused)(`mat-mdc-slide-toggle-checked`,c.checked)(`mat-slide-toggle-full-width`,c.fullWidth)(`_mat-animation-noopable`,c._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,XP],color:`color`,disabled:[2,`disabled`,`disabled`,XP],fullWidth:[2,`fullWidth`,`fullWidth`,XP],disableRipple:[2,`disableRipple`,`disableRipple`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:eF(o)],checked:[2,`checked`,`checked`,XP],hideIcon:[2,`hideIcon`,`hideIcon`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[dD([{provide:za$1,useExisting:fo$2(()=>n),multi:!0},{provide:ii$1,useExisting:n,multi:!0}]),pm],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(r,c){if(r&1&&(CI(),li(0,`div`,1)(1,`button`,2,0),Mp$1(`click`,function(){return c._handleClick()}),bp$1(3,`div`,3)(4,`span`,4),li(5,`span`,5)(6,`span`,6)(7,`span`,7),bp$1(8,`span`,8),vc$1(),li(9,`span`,9),bp$1(10,`span`,10),vc$1(),lI(11,a,5,0,`span`,11),vc$1()()(),li(12,`label`,12),Mp$1(`click`,function(m){return m.stopPropagation()}),TI(13),vc$1()()),r&2){let l=xI(2);wp$1(`labelPosition`,c.labelPosition),av(),Hp$1(`mdc-switch--selected`,c.checked)(`mdc-switch--unselected`,!c.checked)(`mdc-switch--checked`,c.checked)(`mdc-switch--disabled`,c.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,c.disabledInteractive),wp$1(`tabIndex`,c.disabled&&!c.disabledInteractive?-1:c.tabIndex)(`disabled`,c.disabled&&!c.disabledInteractive),Dp$1(`id`,c.buttonId)(`name`,c.name)(`aria-label`,c.ariaLabel)(`aria-labelledby`,c._getAriaLabelledBy())(`aria-describedby`,c.ariaDescribedby)(`aria-required`,c.required||null)(`aria-checked`,c.checked)(`aria-disabled`,c.disabled&&c.disabledInteractive?`true`:null),av(9),wp$1(`matRippleTrigger`,l)(`matRippleDisabled`,c.disableRipple||c.disabled)(`matRippleCentered`,!0),av(),dI(c.hideIcon?-1:11),av(),wp$1(`for`,c.buttonId),Dp$1(`id`,c._labelId)}},dependencies:[ra$2,Qy],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return n})();var wl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Ao$1,Y]})}return n})();var hm=new x(`MatTabContent`);var um=(()=>{class n{template=b$1(pr$3);static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`matTabContent`,``]],features:[dD([{provide:hm,useExisting:n}])]})}return n})();var fm=new x(`MatTabLabel`);var Ml=new x(`MAT_TAB`);var gm=(()=>{class n extends Ug{_closestTab=b$1(Ml,{optional:!0});static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[dD([{provide:fm,useExisting:n}]),pp$1]})}return n})();var Il=new x(`MAT_TAB_GROUP`);var Lo$1=(()=>{class n{_viewContainerRef=b$1(Ii$2);_closestTabGroup=b$1(Il,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new K;position=null;origin=null;isActive=!1;constructor(){b$1(Z$1).load(Tn$1)}ngOnChanges(e){(Object.hasOwn(e,`textLabel`)||Object.hasOwn(e,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new gt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(a,o){a&1&&TI(0)}return FE({type:n,selectors:[[`mat-tab`]],contentQueries:function(o,r,c){if(o&1&&Ap$1(c,gm,5)(c,um,7,pr$3),o&2){let l;NI(l=MI())&&(r.templateLabel=l.first),NI(l=MI())&&(r._explicitContent=l.first)}},viewQuery:function(o,r){if(o&1&&Rp$1(pr$3,7),o&2){let c;NI(c=MI())&&(r._implicitContent=c.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(o,r){o&2&&Dp$1(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,XP],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[dD([{provide:Ml,useExisting:n}]),pm],ngContentSelectors:e,decls:1,vars:0,template:function(o,r){o&1&&(CI(),mp$1(0,t,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return n})();var Do$1=`mdc-tab-indicator--active`;var Sl=`mdc-tab-indicator--no-transition`;var Fo$1=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(a=>a.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let a=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}};var bm=(()=>{class n{_elementRef=b$1(Er$3);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Do$1);return}let a=t.getBoundingClientRect(),o=e.width/a.width,r=e.left-a.left;t.classList.add(Sl),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Sl),t.classList.add(Do$1),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Do$1)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement(`span`),a=this._inkBarContentElement=e.createElement(`span`);t.className=`mdc-tab-indicator`,a.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,XP]}})}return n})();var Tl=(()=>{class n extends bm{elementRef=b$1(Er$3);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(t,a){t&2&&(Dp$1(`aria-disabled`,!!a.disabled),Hp$1(`mat-mdc-tab-disabled`,a.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,XP]},features:[pp$1]})}return n})();var Cl={passive:!0};var _m=650;var vm=100;function Ro$1(n){let i=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:``}var ym=(()=>{class n{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_viewportRuler=b$1(bt);_dir=b$1(Oe,{optional:!0});_ngZone=b$1(Me);_platform=b$1(O);_sharedResizeObserver=b$1(oa$1);_injector=b$1(ie$1);_renderer=b$1(Ta$3);_animationsDisabled=se();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new K;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new K;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new je$2;indexFocused=new je$2;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Cl),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Cl))}ngAfterContentInit(){let e=this._dir?this._dir.change:Vh$1(`ltr`),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ng(32),pg(this._destroyed)),a=this._viewportRuler.change(150).pipe(pg(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ui(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),By(o,{injector:this._injector}),Xh$1(e,a,t,this._items.changes,this._itemsResized()).pipe(pg(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!=`function`?vt$1:this._items.changes.pipe(yl$2(this._items),fg(e=>new N(t=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>t.next(o));return e.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),dg(1),Xt$2(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!ke(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,a=(e==`before`?-1:1)*t/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,c,l;this._getLayoutDirection()==`ltr`?(c=o,l=c+r):(l=this._tabListInner.nativeElement.offsetWidth-o,c=l-r);let m=this.scrollDistance,u=this.scrollDistance+a;c<m?this.scrollDistance-=m-c:l>u&&(this.scrollDistance+=Math.min(l-u,c-m))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let a=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),jn$2(_m,vm).pipe(pg(Xh$1(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(e);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,XP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,eF]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var xm=(()=>{class n extends ym{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Fo$1(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵcmp=(function(){let e=[`tabListContainer`],t=[`tabList`],a=[`tabListInner`],o=[`nextPaginator`],r=[`previousPaginator`];return FE({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(m,u,f){if(m&1&&Ap$1(f,Tl,4),m&2){let b;NI(b=MI())&&(u._items=b)}},viewQuery:function(m,u){if(m&1&&Rp$1(e,7)(t,7)(a,7)(o,5)(r,5),m&2){let f;NI(f=MI())&&(u._tabListContainer=f.first),NI(f=MI())&&(u._tabList=f.first),NI(f=MI())&&(u._tabListInner=f.first),NI(f=MI())&&(u._nextPaginator=f.first),NI(f=MI())&&(u._previousPaginator=f.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(m,u){m&2&&Hp$1(`mat-mdc-tab-header-pagination-controls-enabled`,u._showPaginationControls)(`mat-mdc-tab-header-rtl`,u._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,XP]},features:[pp$1],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(m,u){m&1&&(CI(),li(0,`div`,5,0),Mp$1(`click`,function(){return u._handlePaginatorClick(`before`)})(`mousedown`,function(b){return u._handlePaginatorPress(`before`,b)})(`touchend`,function(){return u._stopInterval()}),bp$1(2,`div`,6),vc$1(),li(3,`div`,7,1),Mp$1(`keydown`,function(b){return u._handleKeydown(b)}),li(5,`div`,8,2),Mp$1(`cdkObserveContent`,function(){return u._onContentChanges()}),li(7,`div`,9,3),TI(9),vc$1()()(),li(10,`div`,10,4),Mp$1(`mousedown`,function(b){return u._handlePaginatorPress(`after`,b)})(`click`,function(){return u._handlePaginatorClick(`after`)})(`touchend`,function(){return u._stopInterval()}),bp$1(12,`div`,6),vc$1()),m&2&&(Hp$1(`mat-mdc-tab-header-pagination-disabled`,u._disableScrollBefore),wp$1(`matRippleDisabled`,u._disableScrollBefore||u.disableRipple),av(3),Hp$1(`_mat-animation-noopable`,u._animationsDisabled),av(2),Dp$1(`aria-label`,u.ariaLabel||null)(`aria-labelledby`,u.ariaLabelledby||null),av(5),Hp$1(`mat-mdc-tab-header-pagination-disabled`,u._disableScrollAfter),wp$1(`matRippleDisabled`,u._disableScrollAfter||u.disableRipple))},dependencies:[ra$2,_h$1],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})();var km=new x(`MAT_TABS_CONFIG`);var Nl=(()=>{class n extends Hg{_host=b$1(Po$1);_ngZone=b$1(Me);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(yl$2(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[pp$1]})}return n})();var Po$1=(()=>{class n{_elementRef=b$1(Er$3);_dir=b$1(Oe,{optional:!0});_ngZone=b$1(Me);_injector=b$1(ie$1);_renderer=b$1(Ta$3);_diAnimationsDisabled=se();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new je$2;_beforeCentering=new je$2;_afterLeavingCenter=new je$2;_onCentered=new je$2(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=b$1(KP);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),By(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),a.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,`transitionstart`,a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(e,`transitionend`,t),this._renderer.listen(e,`transitioncancel`,t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position===`center`;this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,e)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e==`ltr`?`left`:`right`:this._positionIndex>0?this._position=e==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),By(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`content`];function t(a,o){}return FE({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(o,r){if(o&1&&Rp$1(Nl,5)(e,5),o&2){let c;NI(c=MI())&&(r._portalHost=c.first),NI(c=MI())&&(r._contentElement=c.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(o,r){o&2&&Dp$1(`inert`,r._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(o,r){o&1&&(li(0,`div`,1,0),gp$1(2,t,0,0,`ng-template`,2),vc$1()),o&2&&Hp$1(`mat-tab-body-content-left`,r._position===`left`)(`mat-tab-body-content-right`,r._position===`right`)(`mat-tab-body-content-can-animate`,r._position===`center`||r._previousPosition===`center`)},dependencies:[Nl,oc],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var El=(()=>{class n{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_ngZone=b$1(Me);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=se();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Yo$2;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e==`object`?(this._bodyAnimationDuration=Ro$1(e.body),this._headerAnimationDuration=Ro$1(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ro$1(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new je$2;focusChange=new je$2;animationDone=new je$2;selectedTabChange=new je$2(!0);_groupId;_isServer=!b$1(O).isBrowser;constructor(){let e=b$1(km,{optional:!0});this._groupId=b$1(Ge).getId(`mat-tab-group-`),this.animationDuration=e&&e.animationDuration?e.animationDuration:`500ms`,this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((t,a)=>{t.position=a-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),a;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=t[o];break}!a&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(yl$2(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Oo$1;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Xh$1(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+`px`)}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,a){t.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){return e===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(e,t){e&&e!==`mouse`&&e!==`touch`&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,a)=>t._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`tabBodyWrapper`],t=[`tabHeader`],a=[`*`];function o(f,b){}function r(f,b){if(f&1&&gp$1(0,o,0,0,`ng-template`,12),f&2){let p=wI().$implicit;wp$1(`cdkPortalOutlet`,p.templateLabel)}}function c(f,b){if(f&1&&tD(0),f&2){let p=wI().$implicit;Qp$1(p.textLabel)}}function l(f,b){if(f&1){let p=II();li(0,`div`,7,2),Mp$1(`click`,function(){let v=Yl$2(p),N=v.$implicit,L=v.$index,z=wI(),H=xI(1);return Kl$2(z._handleClick(N,H,L))})(`cdkFocusChange`,function(v){let N=Yl$2(p).$index,L=wI();return Kl$2(L._tabFocusChanged(v,N))}),bp$1(2,`span`,8)(3,`div`,9),li(4,`span`,10)(5,`span`,11),lI(6,r,1,1,null,12)(7,c,1,1),vc$1()()()}if(f&2){let p=b.$implicit,y=b.$index,v=xI(1),N=wI();GI(p.labelClass),Hp$1(`mdc-tab--active`,N.selectedIndex===y),wp$1(`id`,N._getTabLabelId(p,y))(`disabled`,p.disabled)(`fitInkBarToContent`,N.fitInkBarToContent),Dp$1(`tabIndex`,N._getTabIndex(y))(`aria-posinset`,y+1)(`aria-setsize`,N._tabs.length)(`aria-controls`,N._getTabContentId(y))(`aria-selected`,N.selectedIndex===y)(`aria-label`,p.ariaLabel||null)(`aria-labelledby`,!p.ariaLabel&&p.ariaLabelledby?p.ariaLabelledby:null),av(3),wp$1(`matRippleTrigger`,v)(`matRippleDisabled`,p.disabled||N.disableRipple),av(3),dI(p.templateLabel?6:7)}}function m(f,b){f&1&&TI(0)}function u(f,b){if(f&1){let p=II();li(0,`mat-tab-body`,13),Mp$1(`_onCentered`,function(){Yl$2(p);let v=wI();return Kl$2(v._removeTabBodyWrapperHeight())})(`_onCentering`,function(v){Yl$2(p);let N=wI();return Kl$2(N._setTabBodyWrapperHeight(v))})(`_beforeCentering`,function(v){Yl$2(p);let N=wI();return Kl$2(N._bodyCentered(v))}),vc$1()}if(f&2){let p=b.$implicit,y=b.$index,v=wI();GI(p.bodyClass),wp$1(`id`,v._getTabContentId(y))(`content`,p.content)(`position`,p.position)(`animationDuration`,v._bodyAnimationDuration)(`preserveContent`,v.preserveContent),Dp$1(`tabindex`,v.contentTabIndex!=null&&v.selectedIndex===y?v.contentTabIndex:null)(`aria-labelledby`,v._getTabLabelId(p,y))(`aria-hidden`,v.selectedIndex!==y)}}return FE({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(b,p,y){if(b&1&&Ap$1(y,Lo$1,5),b&2){let v;NI(v=MI())&&(p._allTabs=v)}},viewQuery:function(b,p){if(b&1&&Rp$1(e,5)(t,5)(Po$1,5),b&2){let y;NI(y=MI())&&(p._tabBodyWrapper=y.first),NI(y=MI())&&(p._tabHeader=y.first),NI(y=MI())&&(p._tabBodies=y)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(b,p){b&2&&(Dp$1(`mat-align-tabs`,p.alignTabs),GI(`mat-`+(p.color||`primary`)),Vp$1(`--%NS%mat-tab-body-animation-duration`,p._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,p._headerAnimationDuration),Hp$1(`mat-mdc-tab-group-dynamic-height`,p.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,p.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,p.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,XP],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,XP],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,XP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,eF],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,eF],disablePagination:[2,`disablePagination`,`disablePagination`,XP],disableRipple:[2,`disableRipple`,`disableRipple`,XP],preserveContent:[2,`preserveContent`,`preserveContent`,XP],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[dD([{provide:Il,useExisting:n}])],ngContentSelectors:a,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(b,p){b&1&&(CI(),li(0,`mat-tab-header`,3,0),Mp$1(`indexFocused`,function(v){return p._focusChanged(v)})(`selectFocusedIndex`,function(v){return p.selectedIndex=v}),hI(2,l,8,17,`div`,4,pI),vc$1(),lI(4,m,1,0),li(5,`div`,5,1),hI(7,u,1,10,`mat-tab-body`,6,pI),vc$1()),b&2&&(wp$1(`selectedIndex`,p.selectedIndex||0)(`disableRipple`,p.disableRipple)(`disablePagination`,p.disablePagination),Ip$1(`aria-label`,p.ariaLabel)(`aria-labelledby`,p.ariaLabelledby),av(2),gI(p._tabs),av(2),dI(p._isServer?4:-1),av(),Hp$1(`_mat-animation-noopable`,p._bodyAnimationsDisabled()),av(2),gI(p._tabs))},dependencies:[xm,Tl,Dl$1,ra$2,Hg,Po$1],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Oo$1=class{index;tab};var Al=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Y]})}return n})();var Dl=class n{formControl1=new ed$1(``,[lo$1.required]);formControl2=new ed$1(``,[lo$1.required]);constructor(){this.formControl2.markAsTouched()}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-showcase`]],hostAttrs:[1,`pg-palette-gen-showcase`],decls:114,vars:3,consts:[[1,`pg-palette-gen-showcase__row`],[`matIconButton`,``],[`matFab`,``],[`matButton`,``],[`matButton`,`tonal`],[`matButton`,`filled`],[`matButton`,`elevated`],[`matButton`,`outlined`],[`matIconButton`,``,`matBadge`,`4`],[`matFab`,``,`matBadge`,`4`],[`matButton`,``,`matBadge`,`4`],[`matButton`,`tonal`,`matBadge`,`4`],[`matButton`,`filled`,`matBadge`,`4`],[`matButton`,`elevated`,`matBadge`,`4`],[`matButton`,`outlined`,`matBadge`,`4`],[`disabled`,``,`matIconButton`,``],[`disabled`,``,`matFab`,``],[`disabled`,``,`matButton`,``],[`disabled`,``,`matButton`,`tonal`],[`disabled`,``,`matButton`,`filled`],[`disabled`,``,`matButton`,`elevated`],[`disabled`,``,`matButton`,`outlined`],[`selected`,``],[`disabled`,``],[`appearance`,`fill`],[`matInput`,``,`placeholder`,`Placeholder`,3,`formControl`],[`matSuffix`,``],[`appearance`,`outline`],[`aria-label`,`Select an option`],[`value`,`1`,`checked`,``],[`value`,`2`],[`value`,`3`,`disabled`,``],[`checked`,``],[1,`pg-palette-gen-showcase__row`,`pg-palette-gen-showcase__row--nowrap`],[`mode`,`determinate`,`value`,`40`],[`mode`,`indeterminate`],[2,`width`,`100%`,3,`animationDuration`],[`label`,`First`],[`label`,`Second`],[`label`,`Third`]],template:function(e,t){e&1&&(li(0,`div`,0)(1,`button`,1)(2,`mat-icon`),tD(3,`home`),vc$1()(),li(4,`button`,2)(5,`mat-icon`),tD(6,`home`),vc$1()(),li(7,`button`,3),tD(8,`Button`),vc$1(),li(9,`button`,4),tD(10,`Button`),vc$1(),li(11,`button`,5),tD(12,`Button`),vc$1(),li(13,`button`,6),tD(14,`Button`),vc$1(),li(15,`button`,7),tD(16,`Button`),vc$1()(),li(17,`div`,0)(18,`button`,8)(19,`mat-icon`),tD(20,`home`),vc$1()(),li(21,`button`,9)(22,`mat-icon`),tD(23,`home`),vc$1()(),li(24,`button`,10),tD(25,`Button`),vc$1(),li(26,`button`,11),tD(27,`Button`),vc$1(),li(28,`button`,12),tD(29,`Button`),vc$1(),li(30,`button`,13),tD(31,`Button`),vc$1(),li(32,`button`,14),tD(33,`Button`),vc$1()(),li(34,`div`,0)(35,`button`,15)(36,`mat-icon`),tD(37,`home`),vc$1()(),li(38,`button`,16)(39,`mat-icon`),tD(40,`home`),vc$1()(),li(41,`button`,17),tD(42,`Button`),vc$1(),li(43,`button`,18),tD(44,`Button`),vc$1(),li(45,`button`,19),tD(46,`Button`),vc$1(),li(47,`button`,20),tD(48,`Button`),vc$1(),li(49,`button`,21),tD(50,`Button`),vc$1()(),li(51,`div`,0)(52,`mat-chip-listbox`)(53,`mat-chip-option`,22),tD(54,`Chip option 1`),vc$1(),li(55,`mat-chip-option`),tD(56,`Chip option 2`),vc$1(),li(57,`mat-chip-option`,23),tD(58,`Chip option 3`),vc$1()(),li(59,`mat-chip-set`)(60,`mat-chip`),tD(61,`Chip 1`),vc$1(),li(62,`mat-chip`),tD(63,`Chip 2`),vc$1(),li(64,`mat-chip`,23),tD(65,`Chip 3`),vc$1()()(),li(66,`div`,0)(67,`mat-form-field`,24)(68,`mat-label`),tD(69,`Fill form field`),vc$1(),li(70,`input`,25),zv(),vc$1(),li(71,`mat-icon`,26),tD(72,`alternate_email`),vc$1(),li(73,`mat-hint`),tD(74,`Hint`),vc$1()(),li(75,`mat-form-field`,27)(76,`mat-label`),tD(77,`Outline form field`),vc$1(),li(78,`input`,25),zv(),vc$1(),li(79,`mat-icon`,26),tD(80,`lock`),vc$1(),li(81,`mat-hint`),tD(82,`Hint`),vc$1(),li(83,`mat-error`),tD(84,`Field required`),vc$1()()(),li(85,`div`,0)(86,`mat-radio-group`,28)(87,`mat-radio-button`,29),tD(88,`Radio 1`),vc$1(),li(89,`mat-radio-button`,30),tD(90,`Radio 2`),vc$1(),li(91,`mat-radio-button`,31),tD(92,`Radio 3`),vc$1()(),li(93,`mat-checkbox`,32),tD(94,`Check 1`),vc$1(),li(95,`mat-checkbox`),tD(96,`Check 2`),vc$1(),li(97,`mat-checkbox`,23),tD(98,`Check 3`),vc$1()(),li(99,`div`,0)(100,`mat-slide-toggle`,32),tD(101,`Slide toggle`),vc$1(),li(102,`mat-slide-toggle`),tD(103,`Slide toggle`),vc$1(),li(104,`mat-slide-toggle`,23),tD(105,`Slide toggle`),vc$1()(),li(106,`div`,33),bp$1(107,`mat-progress-bar`,34)(108,`mat-progress-bar`,35),vc$1(),li(109,`div`,0)(110,`mat-tab-group`,36),bp$1(111,`mat-tab`,37)(112,`mat-tab`,38)(113,`mat-tab`,39),vc$1()()),e&2&&(av(70),wp$1(`formControl`,t.formControl1),Zv(),av(8),wp$1(`formControl`,t.formControl2),Zv(),av(32),wp$1(`animationDuration`,0))},dependencies:[Wy,Ua$2,Uy,ad$1,Vc,Bc,Fg,Rg,Jl$1,Tg,aa$1,hi,rl$1,bi,Mo$1,Co$1,No$1,ot$1,Ft$1,St,ui,gn$1,xo$1,Ze$1,Ye,Kn,Xn,yl,vl,kl,Eo$1,da$1,wl,Ao$1,Al,Lo$1,El],styles:[`.pg-palette-gen-showcase__row{max-width:820px;display:flex;flex-wrap:wrap;align-items:center;gap:2.5rem;margin-bottom:2.5rem}.pg-palette-gen-showcase__row:last-child{margin-bottom:0}.pg-palette-gen-showcase__row--nowrap{flex-wrap:nowrap}
`],encapsulation:2})};var Fl=260;var zo$1={default:[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100],neutral:[0,4,6,10,12,17,20,22,24,25,30,35,40,50,60,70,80,87,90,92,94,95,96,98,99,100]};var Yn=n=>zo$1[n?`neutral`:`default`];var Qn=(n,i=!1)=>({anchors:[{color:n,tone:null}],neutral:i});var Bo$1={primary:Qn(`#005cbb`),secondary:Qn(`#565e71`),tertiary:Qn(`#343dff`),neutral:Qn(`#5e5e62`,!0),"neutral-variant":Qn(`#5b5e66`),error:Qn(`#ba1a1a`)};var Pl=/^#?([0-9abcdef]{3}|[0-9abcdef]{6})$/i;var Sm=`hexColor`;var Ol=n=>n.value?.match(Pl)?null:{[Sm]:!0};var Ll=n=>{let i=Pl.exec(n)?.[1]?.toLowerCase();return i?`#`+(i.length===3?[...i].map(e=>e+e).join(``):i):n};var Cm=`tone`;var zl=n=>{let i=n.value,e=n.root.get(`neutral`)?.value===!0;return i===null||Yn(e).includes(i)?null:{[Cm]:!0}};var Vo$1=()=>new ni$1({color:new ed$1(``,{nonNullable:!0,validators:[lo$1.required,Ol]}),tone:new ed$1(null,{validators:[zl]})});var Go$1=()=>{let n=new ni$1({anchors:new Ba$2([Vo$1()],{validators:[lo$1.required]}),neutral:new ed$1(!1,{nonNullable:!0})});return n.controls.neutral.valueChanges.subscribe(()=>n.controls.anchors.controls.forEach(({controls:i})=>i.tone.updateValueAndValidity())),n};var Bl=(n,i)=>n!==null&&!i.includes(n)?n:null;var Vl=n=>n.controls.anchors.push(Vo$1());var Ho$1=(n,i)=>{let{anchors:e}=n.controls,t=Array.isArray(i?.anchors)?i.anchors.length:0;for(;e.length<t;)e.push(Vo$1(),{emitEvent:!1});for(;e.length>t;)e.removeAt(e.length-1,{emitEvent:!1});n.setValue(i)};var jo$1=n=>{try{let i=Go$1();return Ho$1(i,n),i.valid?n:null}catch{return null}};var pa$1=n=>{try{return jo$1(JSON.parse(n))}catch{return null}};var Nm=(n,i)=>n.color===i.color&&n.tone===i.tone;var Gl=(n,i)=>n.neutral===i.neutral&&n.anchors.length===i.anchors.length&&n.anchors.every((e,t)=>Nm(e,i.anchors[t]));var Mm=n=>[...n].sort((i,e)=>(i.tone??-1)-(e.tone??-1));var Hl=(n,i,e)=>{let t=n.anchors.filter(a=>a.tone!==i);return t.length===n.anchors.length?q$1(G({},n),{anchors:Mm([...t,{color:e,tone:i}])}):t.length===0?n:q$1(G({},n),{anchors:t})};var Im=n=>Number.isInteger(n)?`${n}`:n.toFixed(1);var jl=n=>{switch(n.type){case`duplicate-tone`:return`Several colors are pinned at tone ${n.tone}.`;case`tone-out-of-range`:return`Tone ${n.tone} is out of range (0-100).`;case`lightness-order`:return`The colors pinned at tones ${n.tones.map(Im).join(` and `)} are not ordered by lightness.`;case`non-monotonic`:return`The lightness decreases at tone ${n.tone}.`}};function qo$1(n,i){return n[0]*i[0]+n[1]*i[1]+n[2]*i[2]}function Q(n,i,e=[0,0,0]){let t=qo$1(n,i[0]),a=qo$1(n,i[1]),o=qo$1(n,i[2]);return e[0]=t,e[1]=a,e[2]=o,e}function ha$1(n){return yn$1(n)===`string`}function yn$1(n){return(Object.prototype.toString.call(n).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function ua$1(n,{precision:i=16,unit:e}){return ge(n)?`none`:(n=+Wo$1(n,i),n+(e??``))}function ge(n){return n===null}function Wo$1(n,i){if(n===0)return 0;let e=~~n,t=0;e&&i&&(t=~~Math.log10(Math.abs(e))+1);let a=10**(i-t);return Math.floor(n*a+.5)/a}function $o$1(n,i,e){return ge(n)||isNaN(n)?i:ge(i)||isNaN(i)?n:n+(i-n)*e}function Tm(n,i,e){return(e-n)/(i-n)}function Uo$1(n,i,e){return!n||!i||n===i||n[0]===i[0]&&n[1]===i[1]||isNaN(e)||e===null?e:$o$1(i[0],i[1],Tm(n[0],n[1],e))}function ht(n,i,e){return Math.max(Math.min(e,i),n)}function fa$1(n,i){return Math.sign(n)===Math.sign(i)?n:-n}function be(n,i){return fa$1(Math.abs(n)**i,n)}function Xo$1(n,i){return i===0?0:n/i}function ql(n,i,e=0,t=n.length){for(;e<t;){let a=e+t>>1;n[a]<i?e=a+1:t=a}return e}function an(n,i){if(n instanceof i)return!0;let e=i.name;for(;n;){let t=Object.getPrototypeOf(n),a=t?.constructor?.name;if(a===e)return!0;if(!a||a===`Object`)return!1;n=t}return!1}var Zn=class{type;coordMeta;coordRange;range;constructor(i,e){if(typeof i==`object`&&(this.coordMeta=i),e&&(this.coordMeta=e,this.coordRange=e.range??e.refRange),typeof i==`string`){let t=i.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw new TypeError(`Cannot parse ${i} as a type definition.`);this.type=t.groups.type;let{min:a,max:o}=t.groups;(a||o)&&(this.range=[+a,+o])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(i){if(this.type===`<angle>`)return i;let e=this.computedRange,t=this.coordRange;return this.type===`<percentage>`&&(t??=this.percentageRange()),Uo$1(e,t,i)}serialize(i,e){let t=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,a=this.unit;return i=Uo$1(this.coordRange,t,i),ua$1(i,{unit:a,precision:e})}toString(){let i=this.type;if(this.range){let[e=``,t=``]=this.range;i+=`[${e},${t}]`}return i}percentageRange(i=1){let e;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?e=[0,1]:e=[-1,1],[e[0]*i,e[1]*i]}static get(i,e){return an(i,this)?i:new this(i,e)}};var Ko$1=Symbol(`instance`);var vi=class n{type;name;spaceCoords;coords;id;alpha;constructor(i,e=i.space){i[Ko$1]=this,this.type=`function`,this.name=`color`,Object.assign(this,i),this.space=e,this.type!==`custom`&&(this.spaceCoords=Object.values(e.coords),this.coords||(this.coords=this.spaceCoords.map(t=>{let a=[`<number>`,`<percentage>`];return t.type===`angle`&&a.push(`<angle>`),a})),this.coords=this.coords.map((t,a)=>{let o=this.spaceCoords[a];return typeof t==`string`&&(t=t.trim().split(/\s*\|\s*/)),t.map(r=>Zn.get(r,o))}))}serializeCoords(i,e,t){return t=i.map((a,o)=>Zn.get(t?.[o]??this.coords[o][0],this.spaceCoords[o])),i.map((a,o)=>t[o].serialize(a,e))}coerceCoords(i,e){return Object.entries(this.space.coords).map(([t,a],o)=>{let r=i[o];if(ge(r)||isNaN(r))return r;let c=e[o],l=this.coords[o].find(m=>m.type==c);if(!l){let m=a.name||t;throw new TypeError(`${c??r?.raw??r} not allowed for ${m} in ${this.name}()`)}return r=l.resolve(r),l.range&&(e[o]=l.toString()),r})}canSerialize(){return this.type===`function`||this.serialize}parse(i){return null}static get(i,...e){return!i||an(i,this)?i:i[Ko$1]?i[Ko$1]:new n(i,...e)}};var Qo$1=class{add(i,e,t){if(typeof arguments[0]!=`string`){for(var i in arguments[0])this.add(i,arguments[0][i],arguments[1]);return}(Array.isArray(i)?i:[i]).forEach(function(a){this[a]=this[a]||[],e&&this[a][t?`unshift`:`push`](e)},this)}run(i,e){this[i]=this[i]||[],this[i].forEach(function(t){t.call(e&&e.context?e.context:e,e)})}};var xn$1=new Qo$1;var Ke$1={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function ga$1(n){return Array.isArray(n)?n:Ke$1[n]}function kn$1(n,i,e,t={}){if(n=ga$1(n),i=ga$1(i),!n||!i)throw new TypeError(`Missing white point to convert ${n?``:`from`}${!n&&!i?`/`:``}${i?``:`to`}`);if(n===i)return e;let a={W1:n,W2:i,XYZ:e,options:t};if(xn$1.run(`chromatic-adaptation-start`,a),a.M||(a.W1===Ke$1.D65&&a.W2===Ke$1.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Ke$1.D50&&a.W2===Ke$1.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xn$1.run(`chromatic-adaptation-end`,a),a.M)return Q(a.XYZ,a.M);throw new TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}var Ut$1={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!==`test`,warn:function(i){this.verbose&&globalThis?.console?.warn?.(i)}};function on(n,i){let e={str:String(n)?.trim(),options:i};if(xn$1.run(`parse-start`,e),e.color)return e.color;e.parsed=Dm(e.str);let t,a=e.options?e.options.parseMeta??e.options.meta:null;if(e.parsed){let o=e.parsed.name,r,c,l=e.parsed.args,m=l.map((b,p)=>e.parsed.argMeta[p]?.type);if(o===`color`){let b=l.shift();m.shift();let p=b.startsWith(`--`)?b.substring(2):`--${b}`,y=[b,p];if(r=C.findFormat({name:o,id:y,type:`function`}),!r){let v,N=b in C.registry?b:p;if(N in C.registry){let L=C.registry[N].formats?.color?.id;L&&(v=`Did you mean ${n.replace(`color(`+b,`color(`+L)}?`)}throw new TypeError(`Cannot parse ${e.str}. `+(v??`Missing a plugin?`))}c=r.space,r.id.startsWith(`--`)&&!b.startsWith(`--`)&&Ut$1.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${r.id}) instead of color(${b}).`),b.startsWith(`--`)&&!r.id.startsWith(`--`)&&Ut$1.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${r.id}) instead of prefixed color(${b}).`)}else r=C.findFormat({name:o,type:`function`}),c=r.space;a&&Object.assign(a,{format:r,formatId:r.name,types:m,commas:e.parsed.commas});let u=1;e.parsed.lastAlpha&&(u=e.parsed.args.pop(),a&&(a.alphaType=m.pop()));let f=r.coords.length;if(l.length!==f)throw new TypeError(`Expected ${f} coordinates for ${c.id} in ${e.str}), got ${l.length}`);l=r.coerceCoords(l,m),t={spaceId:c.id,coords:l,alpha:u}}else e:for(let o of C.all)for(let r in o.formats){let c=o.formats[r];if(c.type!==`custom`||c.test&&!c.test(e.str))continue;let l=o.getFormat(c),m=l.parse(e.str);if(m){a&&Object.assign(a,{format:l,formatId:r}),t=m;break e}}if(!t)throw new TypeError(`Could not parse ${n} as a color. Missing a plugin?`);return t.alpha=ge(t.alpha)?t.alpha:t.alpha===void 0?1:ht(0,t.alpha,1),t}var $l={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360};var ba$1={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys($l).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Am(n){let i={},e=n.match(ba$1.unitValue)?.[0],t=i.raw=n;return e?(i.type=e===`%`?`<percentage>`:`<angle>`,i.unit=e,i.unitless=Number(t.slice(0,-e.length)),t=i.unitless*$l[e]):ba$1.number.test(t)?(t=Number(t),i.type=`<number>`):t===`none`?t=null:t===`NaN`||t===`calc(NaN)`?(t=NaN,i.type=`<number>`):i.type=`<ident>`,{value:t,meta:i}}function Dm(n){if(!n)return;n=n.trim();let i=n.match(ba$1.function);if(i){let e=[],t=[],a=!1,o=i[1].toLowerCase(),r=i[2].replace(ba$1.singleArgument,(c,l)=>{let{value:m,meta:u}=Am(l);return(c.startsWith(`/`)||o!==`color`&&e.length===3)&&(a=!0),e.push(m),t.push(u),``});return{name:o,args:e,argMeta:t,lastAlpha:a,commas:r.includes(`,`),rawName:i[1],rawArgs:i[2]}}}function W(n,i){if(Array.isArray(n))return n.map(t=>W(t,i));if(!n)throw new TypeError(`Empty color reference`);ha$1(n)&&(n=on(n,i));let e=n.space||n.spaceId;return typeof e==`string`&&(n.space=C.get(e)),n.alpha===void 0&&(n.alpha=1),n}var Rm=75e-6;var C=class n{constructor(i){this.id=i.id,this.name=i.name,this.base=i.base?n.get(i.base):null,this.aliases=i.aliases,this.displaySpaces=i.displaySpaces?.map(a=>n.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);i.rgbGamut&&(this.rgbGamut=i.rgbGamut),i.linearGamut&&(this.linearGamut=i.linearGamut),this.base&&(i.fromBase&&(this.fromBase=i.fromBase),i.toBase&&(this.toBase=i.toBase));let e=i.coords??this.base.coords;for(let a in e)`name`in e[a]||(e[a].name=a);this.coords=e;let t=i.white??this.base.white??`D65`;this.white=ga$1(t),this.formats=i.formats??{};for(let a in this.formats){let o=this.formats[a];o.type||=`function`,o.name||=a}this.formats.color?.id||(this.formats.color=q$1(G({},this.formats.color??{}),{id:i.cssId||this.id})),i.gamutSpace?this.gamutSpace=i.gamutSpace===`self`?this:n.get(i.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,o)=>!0),this.M=i.M??{},this.referred=i.referred,Object.defineProperty(this,"path",{value:Fm(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xn$1.run(`colorspace-init-end`,this)}inGamut(i,{epsilon:e=Rm}={}){if(!this.equals(this.gamutSpace))return i=this.to(this.gamutSpace,i),this.gamutSpace.inGamut(i,{epsilon:e});let t=Object.values(this.coords);return i.every((a,o)=>{let r=t[o];if(r.type!==`angle`&&r.range){if(ge(a))return!0;let[c,l]=r.range;return(c===void 0||a>=c-e)&&(l===void 0||a<=l+e)}return!0})}get isUnbounded(){return Object.values(this.coords).every(i=>!(`range`in i))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let i in this.coords)if(this.coords[i].type===`angle`)return i;return null}get hueIndex(){return Object.keys(this.coords).findIndex(i=>this.coords[i].type===`angle`)}get isPolar(){return this.hueId!==null}getFormat(i){if(!i)return null;i==="default"?i=Object.values(this.formats)[0]:typeof i==`string`&&(i=this.formats[i]);let e=vi.get(i,this);return e!==i&&i.name in this.formats&&(this.formats[i.name]=e),e}equals(i){return i?this===i||this.id===i||this.id===i.id:!1}to(i,e){if(arguments.length===1){let c=W(i);[i,e]=[c.space,c.coords]}if(i=n.get(i),this.equals(i))return e;e=e.map(c=>ge(c)?0:c);let t=this.path,a=i.path,o,r;for(let c=0;c<t.length&&t[c].equals(a[c]);c++)o=t[c],r=c;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${i}: no connection space was found`);for(let c=t.length-1;c>r;c--)e=t[c].toBase(e);for(let c=r+1;c<a.length;c++)e=a[c].fromBase(e);return e}from(i,e){if(arguments.length===1){let t=W(i);[i,e]=[t.space,t.coords]}return i=n.get(i),i.to(this,e)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let i=[];for(let e in this.coords){let t=this.coords[e],a=t.range||t.refRange;i.push(a?.min??0)}return i}static registry={};static get all(){return[...new Set(Object.values(n.registry))]}static register(i,e){if(arguments.length===1&&(e=arguments[0],i=e.id),e=this.get(e),this.registry[i]&&this.registry[i]!==e)throw new Error(`Duplicate color space registration: '${i}'`);if(this.registry[i]=e,arguments.length===1&&e.aliases)for(let t of e.aliases)this.register(t,e);return e}static get(i,...e){if(!i||an(i,this))return i;if(yn$1(i)===`string`){let a=n.registry[i.toLowerCase()];if(!a)throw new TypeError(`No color space found with id = "${i}"`);return a}if(e.length)return n.get(...e);throw new TypeError(`${i} is not a valid color space`)}static findFormat(i,e=n.all){if(!i)return null;typeof i==`string`&&(i={name:i});for(let t of e)for(let[a,o]of Object.entries(t.formats)){o.name??=a,o.type??=`function`;let r=(!i.name||o.name===i.name)&&(!i.type||o.type===i.type);if(i.id){let c=o.ids||[o.id],l=Array.isArray(i.id)?i.id:[i.id];r&&=l.some(m=>c.includes(m))}if(r){let c=vi.get(o,t);return c!==o&&(t.formats[o.name]=c),c}}return null}static resolveCoord(i,e){let t=yn$1(i),a,o;if(t===`string`?i.includes(`.`)?[a,o]=i.split(`.`):[a,o]=[,i]:Array.isArray(i)?[a,o]=i:(a=i.space,o=i.coordId),a=n.get(a),a||(a=e),!a)throw new TypeError(`Cannot resolve coordinate reference ${i}: No color space specified and relative references are not allowed here`);if(t=yn$1(o),t===`number`||t===`string`&&o>=0){let l=Object.entries(a.coords)[o];if(l)return G({space:a,id:l[0],index:o},l[1])}a=n.get(a);let r=o.toLowerCase(),c=0;for(let l in a.coords){let m=a.coords[l];if(l.toLowerCase()===r||m.name?.toLowerCase()===r)return G({space:a,id:l,index:c},m);c++}throw new TypeError(`No "${o}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function Fm(n){let i=[n];for(let e=n;e=e.base;)i.push(e);return i}var De$1=new C({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]});var Xt=class extends C{constructor(i){i.coords||(i.coords={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}}),i.base||(i.base=De$1);let e=i.toXYZ_M??i.M?.toXYZ,t=i.fromXYZ_M??i.M?.fromXYZ;i.referred??=`display`,super(i),e&&t&&(this.M.toXYZ=e,this.M.fromXYZ=t)}toBase(i){let e=Q(i,this.M.toXYZ);return this.white!==this.base.white&&(e=kn$1(this.white,this.base.white,e)),e}fromBase(i){return i=kn$1(this.base.white,this.white,i),Q(i,this.M.fromXYZ)}};var Ul=new C({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:De$1,fromBase:n=>kn$1(De$1.white,`D50`,n),toBase:n=>kn$1(`D50`,De$1.white,n)});var Pm=216/24389;var Xl=24/116;var _a$1=24389/27;var Yo$1=Ke$1.D50;var ut$1=new C({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yo$1,base:Ul,fromBase(n){let e=n.map((r,c)=>r/Yo$1[c]).map(r=>r>Pm?Math.cbrt(r):(_a$1*r+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(n){let[i,e,t]=n,a=[];return a[1]=(i+16)/116,a[0]=e/500+a[1],a[2]=a[1]-t/200,[a[0]>Xl?Math.pow(a[0],3):(116*a[0]-16)/_a$1,n[0]>8?Math.pow((n[0]+16)/116,3):n[0]/_a$1,a[2]>Xl?Math.pow(a[2],3):(116*a[2]-16)/_a$1].map((r,c)=>r*Yo$1[c])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Kt(n){return typeof n!=`number`?n:(n%360+360)%360}var ft=new C({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:ut$1,fromBase(n){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange,l=c[1]-c[0];this.ε=l/1e5}let[i,e,t]=n,a=Math.abs(e)<this.ε&&Math.abs(t)<this.ε,o=a?null:Kt(Math.atan2(t,e)*180/Math.PI);return[i,a?0:Math.sqrt(e**2+t**2),o]},toBase(n){let[i,e,t]=n,a=null,o=null;return ge(t)||(e=e<0?0:e,a=e*Math.cos(t*Math.PI/180),o=e*Math.sin(t*Math.PI/180)),[i,a,o]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});var Kl=25**7;var va$1=Math.PI;var Ql=180/va$1;var Jn=va$1/180;function Yl(n){let i=n*n;return i*i*i*n}function ya$1(n,i,{kL:e=1,kC:t=1,kH:a=1}={}){[n,i]=W([n,i]);let[o,r,c]=ut$1.from(n),l=ft.from(ut$1,[o,r,c])[1],[m,u,f]=ut$1.from(i),b=ft.from(ut$1,[m,u,f])[1];l<0&&(l=0),b<0&&(b=0);let y=Yl((l+b)/2),v=.5*(1-Math.sqrt(y/(y+Kl))),N=(1+v)*r,L=(1+v)*u,z=Math.sqrt(N**2+c**2),H=Math.sqrt(L**2+f**2),ke=N===0&&c===0?0:Math.atan2(c,N),ye=L===0&&f===0?0:Math.atan2(f,L);ke<0&&(ke+=2*va$1),ye<0&&(ye+=2*va$1),ke*=Ql,ye*=Ql;let gt=m-o,bt=H-z,Fe=ye-ke,_t=ke+ye,O=Math.abs(Fe),X;z*H===0?X=0:O<=180?X=Fe:Fe>180?X=Fe-360:Fe<-180?X=Fe+360:Ut$1.warn(`the unthinkable has happened`);let x=2*Math.sqrt(H*z)*Math.sin(X*Jn/2),ie=(o+m)/2,Ie=(z+H)/2,Oi=Yl(Ie),Ot;z*H===0?Ot=_t:O<=180?Ot=_t/2:_t<360?Ot=(_t+360)/2:Ot=(_t-360)/2;let Lr=(ie-50)**2,Dd=1+.015*Lr/Math.sqrt(20+Lr),zr=1+.045*Ie,oi=1;oi-=.17*Math.cos((Ot-30)*Jn),oi+=.24*Math.cos(2*Ot*Jn),oi+=.32*Math.cos((3*Ot+6)*Jn),oi-=.2*Math.cos((4*Ot-63)*Jn);let Br=1+.015*Ie*oi,Rd=30*Math.exp(-1*((Ot-275)/25)**2),Fd=2*Math.sqrt(Oi/(Oi+Kl)),Pd=-1*Math.sin(2*Rd*Jn)*Fd,Li=(gt/(e*Dd))**2;return Li+=(bt/(t*zr))**2,Li+=(x/(a*Br))**2,Li+=Pd*(bt/(t*zr))*(x/(a*Br)),Math.sqrt(Li)}var yi={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]};var Ct=new C({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:De$1,M:yi,fromBase(n){let i=Q(n,yi.XYZtoLMS);return i[0]=Math.cbrt(i[0]),i[1]=Math.cbrt(i[1]),i[2]=Math.cbrt(i[2]),Q(i,yi.LMStoLab,i)},toBase(n){let i=Q(n,yi.LabtoLMS);return i[0]=i[0]**3,i[1]=i[1]**3,i[2]=i[2]**3,Q(i,yi.LMStoXYZ,i)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function xi(n,i){[n,i]=W([n,i]);let[e,t,a]=Ct.from(n),[o,r,c]=Ct.from(i),l=e-o,m=t-r,u=a-c;return Math.sqrt(l**2+m**2+u**2)}var Om=75e-6;function Nt$1(n,i,{epsilon:e=Om}={}){n=W(n),i||(i=n.space),i=C.get(i);let t=n.coords;return i!==n.space&&(t=i.from(n)),i.inGamut(t,{epsilon:e})}function $(n,i,{inGamut:e}={}){n=W(n),i=C.get(i);let t=i.from(n),a={space:i,coords:t,alpha:n.alpha};return e&&(a=rn(a,e===!0?void 0:e)),a}$.returns=`color`;function ki(n,i){n=W(n);let e=C.get(i,i?.space),t=i?.precision,a;return!e||n.space.equals(e)?a=n.coords.slice():a=e.from(n),t===void 0?a:a.map(o=>Wo$1(o,t))}function cn(n,i){if(n=W(n),i===`alpha`)return n.alpha??1;let{space:e,index:t}=C.resolveCoord(i,n.space);return ki(n,e)[t]}var Pt$1=new C({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:Ct,fromBase:ft.fromBase,toBase:ft.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function xa$1(n,i,e,t){return n=W(n),Array.isArray(i)&&([i,e,t]=[n.space,i,e]),i=C.get(i),n.coords=i===n.space?e.slice():i.to(n.space,e),t!==void 0&&(n.alpha=t),n}xa$1.returns=`color`;function wi(n,i,e){if(n=W(n),arguments.length===2&&yn$1(arguments[1])===`object`){let t=arguments[1];for(let a in t)wi(n,a,t[a])}else if(typeof e==`function`&&(e=e(cn(n,i))),i===`alpha`)n.alpha=e;else{let{space:t,index:a}=C.resolveCoord(i,n.space),o=ki(n,t);o[a]=e,xa$1(n,t,o)}return n}wi.returns=`color`;function ei(n){return{space:n.space,coords:n.coords.slice(),alpha:n.alpha}}function Zo$1(n,i,e=`lab`){e=C.get(e);let t=e.from(n),a=e.from(i);return Math.sqrt(t.reduce((o,r,c)=>{let l=a[c];return ge(r)||ge(l)?o:o+(l-r)**2},0))}function Jo$1(n,i){return Zo$1(n,i,`lab`)}var Zl=Math.PI/180;function Jl(n,i,{l:e=2,c:t=1}={}){[n,i]=W([n,i]);let[a,o,r]=ut$1.from(n),[,c,l]=ft.from(ut$1,[a,o,r]),[m,u,f]=ut$1.from(i),b=ft.from(ut$1,[m,u,f])[1];c<0&&(c=0),b<0&&(b=0);let p=a-m,y=c-b,v=o-u,N=r-f,L=v**2+N**2-y**2,z=.511;a>=16&&(z=.040975*a/(1+.01765*a));let H=.0638*c/(1+.0131*c)+.638,ke;ge(l)&&(l=0),l>=164&&l<=345?ke=.56+Math.abs(.2*Math.cos((l+168)*Zl)):ke=.36+Math.abs(.4*Math.cos((l+35)*Zl));let ye=Math.pow(c,4),gt=Math.sqrt(ye/(ye+1900)),bt=H*(gt*ke+1-gt),Fe=(p/(e*z))**2;return Fe+=(y/(t*H))**2,Fe+=L/bt**2,Math.sqrt(Fe)}var es$1=203;var ka$1=new C({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:De$1,fromBase(n){return n.map(i=>i*es$1)},toBase(n){return n.map(i=>i/es$1)}});var wa$1=1.15;var Sa$1=.66;var ts$1=2610/2**14;var zm=2**14/2610;var ns$1=3424/4096;var is$1=2413/128;var as$1=2392/128;var Bm=1.7*2523/32;var os$1=32/(1.7*2523);var Ca$1=-.56;var er=16295499532821565e-27;var Si={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]};var tr=new C({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:new C({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:ka$1,M:Si,fromBase(n){let[i,e,t]=n,[l,m,u]=Q(Q([wa$1*i-(wa$1-1)*t,Sa$1*e-(Sa$1-1)*i,t],Si.XYZtoCone).map(function(b){return be((ns$1+is$1*be(b/1e4,ts$1))/(1+as$1*be(b/1e4,ts$1)),Bm)}),Si.ConetoIab);return[(1+Ca$1)*l/(1+Ca$1*l)-er,m,u]},toBase(n){let[i,e,t]=n,[c,l,m]=Q(Q([(i+er)/(1+Ca$1-Ca$1*(i+er)),e,t],Si.IabtoCone).map(function(b){return 1e4*be((ns$1-be(b,os$1))/(as$1*be(b,os$1)-is$1),zm)}),Si.ConetoXYZ),u=(c+(wa$1-1)*m)/wa$1;return[u,(l+(Sa$1-1)*u)/Sa$1,m]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),fromBase:ft.fromBase,toBase:ft.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function cs$1(n,i){[n,i]=W([n,i]);let[e,t,a]=tr.from(n),[o,r,c]=tr.from(i),l=e-o,m=t-r;ge(a)&&ge(c)?(a=0,c=0):ge(a)?a=c:ge(c)&&(c=a);let u=a-c,f=2*Math.sqrt(t*r)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+m**2+f**2)}var ds$1=3424/4096;var ms$1=2413/128;var ps$1=2392/128;var ls$1=2610/16384;var Vm=2523/32;var Gm=16384/2610;var ss$1=32/2523;var Ci={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]};var nr=new C({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:ka$1,M:Ci,fromBase(n){return Hm(Q(n,Ci.XYZtoLMS))},toBase(n){return Q(jm(n),Ci.LMStoXYZ)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Hm(n){return Q(n.map(function(e){return((ds$1+ms$1*(e/1e4)**ls$1)/(1+ps$1*(e/1e4)**ls$1))**Vm}),Ci.LMStoIPT)}function jm(n){return Q(n,Ci.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**ss$1-ds$1,0)/(ms$1-ps$1*t**ss$1))**Gm})}function hs$1(n,i){[n,i]=W([n,i]);let[e,t,a]=nr.from(n),[o,r,c]=nr.from(i);return 720*Math.sqrt((e-o)**2+.25*(t-r)**2+(a-c)**2)}function us$1(n,i){[n,i]=W([n,i]);let e=2,[t,a,o]=Ct.from(n),[r,c,l]=Ct.from(i),m=t-r,u=e*(a-c),f=e*(o-l);return Math.sqrt(m**2+u**2+f**2)}var qm=Ke$1.D65;var _s$1=.42;var fs$1=1/_s$1;var ir=2*Math.PI;var Ni={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]};var Wm={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]};var wn$1={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]};var $m=180/Math.PI;var gs$1=Math.PI/180;function vs$1(n,i){return n.map(t=>{let a=be(i*Math.abs(t)*.01,_s$1);return 400*fa$1(a,t)/(a+27.13)})}function Um(n,i){let e=100/i*27.13**fs$1;return n.map(t=>{let a=Math.abs(t);return fa$1(e*be(a/(400-a),fs$1),t)})}function Xm(n){let i=Kt(n);i<=wn$1.h[0]&&(i+=360);let e=ql(wn$1.h,i)-1,[t,a]=wn$1.h.slice(e,e+2),[o,r]=wn$1.e.slice(e,e+2),c=wn$1.H[e],l=(i-t)/o;return c+100*l/(l+(a-i)/r)}function Km(n){let i=(n%400+400)%400,e=Math.floor(.01*i);i=i%100;let[t,a]=wn$1.h.slice(e,e+2),[o,r]=wn$1.e.slice(e,e+2);return Kt((i*(r*t-o*a)-100*t*r)/(i*(r-o)-100*r))}function ar(n,i,e,t,a){let o={};o.discounting=a,o.refWhite=n,o.surround=t;let r=n.map(N=>N*100);o.la=i,o.yb=e;let c=r[1],l=Q(r,Ni.cat16),m=Wm[o.surround],u=m[0];o.c=m[1],o.nc=m[2];let b=(1/(5*o.la+1))**4;o.fl=b*o.la+.1*(1-b)*(1-b)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/c,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;let p=a?1:Math.max(Math.min(u*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=l.map(N=>$o$1(1,c/N,p)),o.dRgbInv=o.dRgb.map(N=>1/N);let v=vs$1(l.map((N,L)=>N*o.dRgb[L]),o.fl);return o.aW=o.nbb*(2*v[0]+v[1]+.05*v[2]),o}var bs$1=ar(qm,64/Math.PI*.2,20,`average`,!1);function or(n,i){if(!(n.J!==void 0^n.Q!==void 0))throw new Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(n.C!==void 0^n.M!==void 0^n.s!==void 0))throw new Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(n.h!==void 0^n.H!==void 0))throw new Error(`Conversion requires one and only one: 'h' or 'H'`);if(n.J===0||n.Q===0)return[0,0,0];let e=0;n.h!==void 0?e=Kt(n.h)*gs$1:e=Km(n.H)*gs$1;let t=Math.cos(e),a=Math.sin(e),o=0;n.J!==void 0?o=be(n.J,1/2)*.1:n.Q!==void 0&&(o=.25*i.c*n.Q/((i.aW+4)*i.flRoot));let r=0;n.C!==void 0?r=n.C/o:n.M!==void 0?r=n.M/i.flRoot/o:n.s!==void 0&&(r=4e-4*n.s**2*(i.aW+4)/i.c);let c=be(r*Math.pow(1.64-Math.pow(.29,i.n),-.73),10/9),l=.25*(Math.cos(e+2)+3.8),m=i.aW*be(o,2/i.c/i.z),u=5e4/13*i.nc*i.ncb*l,f=m/i.nbb,b=23*(f+.305)*Xo$1(c,23*u+c*(11*t+108*a));return Q(Um(Q([f,b*t,b*a],Ni.m1).map(N=>N*1/1403),i.fl).map((N,L)=>N*i.dRgbInv[L]),Ni.cat16Inv).map(N=>N/100)}function rr(n,i){let t=vs$1(Q(n.map(H=>H*100),Ni.cat16).map((H,ke)=>H*i.dRgb[ke]),i.fl),a=t[0]+(-12*t[1]+t[2])/11,o=(t[0]+t[1]-2*t[2])/9,r=(Math.atan2(o,a)%ir+ir)%ir,c=.25*(Math.cos(r+2)+3.8),m=be(5e4/13*i.nc*i.ncb*Xo$1(c*Math.sqrt(a**2+o**2),t[0]+t[1]+1.05*t[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,i.n),.73),f=be(i.nbb*(2*t[0]+t[1]+.05*t[2])/i.aW,.5*i.c*i.z),b=100*be(f,2),p=4/i.c*f*(i.aW+4)*i.flRoot,y=m*f,v=y*i.flRoot,N=Kt(r*$m),L=Xm(N);return{J:b,C:y,h:N,s:50*be(i.c*m/(i.aW+4),1/2),Q:p,M:v,H:L}}new C({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:De$1,M:Ni,fromBase(n){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let i=rr(n,bs$1),e=Math.abs(i.M)<this.ε;return[i.J,e?0:i.M,e?null:i.h]},toBase(n){return or({J:n[0],M:n[1],h:n[2]},bs$1)}});var Qm=Ke$1.D65;var Ym=216/24389;var ys$1=24389/27;function Zm(n){return 116*(n>Ym?Math.cbrt(n):(ys$1*n+16)/116)-16}function cr$1(n){return n>8?Math.pow((n+16)/116,3):n/ys$1}function Jm(n,i){let[e,t,a]=n,o=[],r=0;if(a===0)return[0,0,0];let c=cr$1(a);a>0?r=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:r=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;let l=2e-12,m=15,u=0,f=1/0,b=[0,0,0];for(;u<=m;){o=or({J:r,C:t,h:e},i);let p=Math.abs(o[1]-c);if(p<f){if(p<=l)return o;b=o,f=p}r=r-(o[1]-c)*r/(2*o[1]),u+=1}return b}function ep(n,i){let e=Zm(n[1]);if(e===0)return[0,0,0];let t=rr(n,Mi);return[Kt(t.h),t.C,e]}var Mi=ar(Qm,200/Math.PI*cr$1(50),cr$1(50)*100,`average`,!1);var Ii=new C({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:De$1,fromBase(n){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let i=ep(n,Mi);return i[1]<this.ε&&(i[1]=0,i[0]=null),i},toBase(n){return Jm(n,Mi)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});var tp=Math.PI/180;var xs$1=[1,.007,.0228];function ks$1(n){n[1]<0&&(n=Ii.fromBase(Ii.toBase(n)));let i=Math.log(Math.max(1+xs$1[2]*n[1]*Mi.flRoot,1))/xs$1[2],e=n[0]*tp,t=i*Math.cos(e),a=i*Math.sin(e);return[n[2],t,a]}function ws$1(n,i){[n,i]=W([n,i]);let[e,t,a]=ks$1(Ii.from(n)),[o,r,c]=ks$1(Ii.from(i));return Math.sqrt((e-o)**2+(t-r)**2+(a-c)**2)}var{cos:J,sin:ee,sqrt:ti,atan2:qe,exp:ni,abs:hr$1,pow:Na$1,PI:np}=Math;var ip=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]];var ap=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]];var op=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]];var rp=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]];var lr$1=[.47229813098762524,.5149184096354483,.5113233386366979];var sr$1=[2.1173067060606283,1.9420552485353544,1.9557096741686448];var Sn$1={CAT_TO_HELM:ip,CAT_FROM_HELM:ap,M1:op,M1_INV:rp,M2:[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],M2_INV:[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]]};var Ss$1=-.02833024015436984;var Cs$1=-.21131429516166544;var Ns$1=.2189784817615645;var Ms$1=-.06871898981942523;var Is$1=.005506053349515315;var Ts$1=-.0641329861299175;var Es$1=-.053592461436994296;var As$1=-.00954137464208059;var Ds$1=.2676231133101982;var Rs$1=.8934892185255707;var Fs$1=.7173169828841472;var Ps$1=.6915224124600773;var Os$1=.48647127559605596;var Ls$1=.9853124591201782;var dr$1=.5385456675962418;var mr$1=.12508858146241716;var pr$1=.6768950256217603;var zs$1=-.4963251525324449;var Bs$1=-.09564696283240552;var Vs=-.029053748937210654;var Gs$1=1.3346761652952872;var Hs$1=-.1698908144723919;var sp=-.195370576218515;var dp=.5330819227283227;var mp=.08863325582067766;var pp=.9365540137751136;var hp=.13789738139719568;var up=.061650260197979936;var fp=.0641970862504494;var gp=-.027401052793571013;var bp=-.09900209889026965;var _p=.059635520647228726;var vp=-.013586499967803128;var yp=.2253393118474472;var xp=-1.5239477450767043;var kp=-1.751157310240011;var wp=-.43576378069144767;var Sp=1.060094063845983;var Cp=.47931193034584496;var Np=-.2622579649434462;var Mp=.13610794232685908;var Ip=.1168702235362288;var Tp=-.01617739641422492;var Ep=.038145638815030566;var js$1=-28.2*np/180;var Ma$1=J(js$1);var Ia$1=ee(js$1);function qs(n){return Ss$1*J(n)+Cs$1*ee(n)+Ns$1*J(2*n)+Ms$1*ee(2*n)+Is$1*J(3*n)+Ts$1*ee(3*n)+Es$1*J(4*n)+As$1*ee(4*n)}function Ap(n){return-Ss$1*ee(n)+Cs$1*J(n)+-2*Ns$1*ee(2*n)+2*Ms$1*J(2*n)+-3*Is$1*ee(3*n)+3*Ts$1*J(3*n)+-4*Es$1*ee(4*n)+4*As$1*J(4*n)}function Ws$1(n){return ni(sp*J(n)+dp*ee(n)+mp*J(2*n)+pp*ee(2*n)+hp*J(3*n)+up*ee(3*n)+fp*J(4*n)+gp*ee(4*n))}function $s$1(n){let i=n-.5;return ni(ht(-30,xp*i+kp*i*i,30))}function Us$1(n,i){let e=wp*J(n)+Sp*ee(n)+Cp*J(2*n)+Np*ee(2*n);return ni(ht(-30,(i-.5)*e,30))}function Xs$1(n){return ni(Mp*J(n)+Ip*ee(n)+Tp*J(2*n)+Ep*ee(2*n))}function Ks$1(n){return 1+bp*J(n)+_p*ee(n)+vp*J(2*n)+yp*ee(2*n)}function Dp(n,i){let e=n*(1-n),t=n+dr$1*e+mr$1*e*(.5-n)+pr$1*e*e;return t+=e*(zs$1*J(i)+Bs$1*ee(i)),t}function Rp(n,i){let e=zs$1*J(i)+Bs$1*ee(i),t=n;for(let a=0;a<15;a++){let o=t*(1-t),r=1-2*t,c=t+(dr$1+e)*o+mr$1*o*(.5-t)+pr$1*o*o-n,l=1+(dr$1+e)*r+mr$1*(r*(.5-t)-o)+pr$1*2*o*r;hr$1(l)<1e-10&&(l=1),t-=c/l}return t}function Fp(n,i){let e=Vs+Gs$1*J(i)+Hs$1*ee(i),t=n<1?1-n:0;return n*ni(ht(-30,e*n*t*t,30))}function Pp(n,i){let e=Vs+Gs$1*J(i)+Hs$1*ee(i),t=n;for(let a=0;a<12;a++){let o=t<1?1-t:0,c=ni(ht(-30,e*t*o*o,30)),l=t*c-n,m=e*o*(1-3*t),u=c*(1+t*m);hr$1(u)<1e-10&&(u=1),t-=l/u}return t}var Op=function(n){let[e,t,a]=Q(Q(n,Sn$1.CAT_TO_HELM),Sn$1.M1),[l,m,u]=Q([be(e,lr$1[0]),be(t,lr$1[1]),be(a,lr$1[2])],Sn$1.M2),f=qe(u,m),b=ti(m*m+u*u),p=qs(f),y=f+p;m=b*J(y),u=b*ee(y);let N=Ds$1*Na$1(ti(m*m+u*u),ht(.01,Rs$1,10)),L=qe(u,m),z=1+Fs$1*J(L)+Ps$1*ee(L)+Os$1*J(2*L)+Ls$1*ee(2*L);l+=N*z,f=qe(u,m),l=Dp(l,f),f=qe(u,m),l=Fp(l,f),f=qe(u,m);let H=Ws$1(f);m*=H,u*=H,f=qe(u,m),b=ti(m*m+u*u);let ke=Ks$1(f),ye=b>0?Na$1(b,ke):0;m=ye*J(f),u=ye*ee(f);let gt=$s$1(l);m*=gt,u*=gt,f=qe(u,m);let bt=Us$1(f,l);m*=bt,u*=bt,f=qe(u,m),l*=Xs$1(f);let Fe=m*Ma$1-u*Ia$1,_t=m*Ia$1+u*Ma$1;return[l,Fe,_t]};var Lp=function(n){let[i,e,t]=n,a=e*Ma$1+t*Ia$1,o=-e*Ia$1+t*Ma$1;e=a,t=o;let r=qe(t,e);i/=Xs$1(r),r=qe(t,e);let c=Us$1(r,i);e/=c,t/=c;let l=$s$1(i);e/=l,t/=l,r=qe(t,e);let m=ti(e*e+t*t),u=Ks$1(r),f=m>0?Na$1(m,1/u):0;e=f*J(r),t=f*ee(r),r=qe(t,e);let b=Ws$1(r);e/=b,t/=b,r=qe(t,e),i=Pp(i,r),r=qe(t,e),i=Rp(i,r);let y=Ds$1*Na$1(ti(e*e+t*t),ht(.01,Rs$1,10)),v=qe(t,e),N=1+Fs$1*J(v)+Ps$1*ee(v)+Os$1*J(2*v)+Ls$1*ee(2*v);i-=y*N;let L=qe(t,e);m=ti(e*e+t*t);let z=L;for(let O=0;O<8;O++){let X=z+qs(z)-L,x=1+Ap(z);hr$1(x)<1e-10&&(x=1),z-=X/x}e=m*J(z),t=m*ee(z);let[H,ke,ye]=Q([i,e,t],Sn$1.M2_INV);return Q(Q([be(H,sr$1[0]),be(ke,sr$1[1]),be(ye,sr$1[2])],Sn$1.M1_INV),Sn$1.CAT_FROM_HELM)};var ur$1=new C({id:`helmlab-metric`,name:`Helmlab MetricSpace`,cssId:`--helmlab-metric`,coords:{l:{refRange:[0,1.6],name:`Lightness`},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:`D65`,base:De$1,M:Sn$1,fromBase(n){return Op(n)},toBase(n){return Lp(n)}});var zp=-.9155125151657894;var Bp=2.9268353744941558;var Vp=3.966003089807536;var Gp=1.9737081170404969;var Hp=52.473130649294724;var jp=.47897301074925214;function Qs$1(n,i){[n,i]=W([n,i]);let[e,t,a]=ur$1.from(n),[o,r,c]=ur$1.from(i),l=e-o,m=t-r,u=a-c,b=1+zp*((e+o)*.5-.5)**2,N=1+Bp*((Math.sqrt(t**2+a**2)+Math.sqrt(r**2+c**2))*.5),L=(l**2/b**2+Vp*(m**2+u**2)/N**2)**(Gp/2);return(L/(1+Hp*L))**jp}var fr$1={deltaE76:Jo$1,deltaECMC:Jl,deltaE2000:ya$1,deltaEJz:cs$1,deltaEITP:hs$1,deltaEOK:xi,deltaEOK2:us$1,deltaEHCT:ws$1,deltaEHelmlab:Qs$1};function qp(n){return Math.max(parseFloat(`1e${(n?Math.floor(Math.log10(Math.abs(n))):0)-2}`),1e-6)}var Ys$1={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function rn(n,{method:i=Ut$1.gamut_mapping,space:e=void 0,deltaEMethod:t=``,jnd:a=2,blackWhiteClamp:o=void 0}={}){if(n=W(n),ha$1(arguments[1])?e=arguments[1]:e||(e=n.space),e=C.get(e),Nt$1(n,e,{epsilon:0}))return n;let r;if(i===`css`)r=Wp(n,{space:e});else if(i===`raytrace`)r=Up(n,{space:e});else{if(i!==`clip`){Object.prototype.hasOwnProperty.call(Ys$1,i)&&({method:i,jnd:a,deltaEMethod:t,blackWhiteClamp:o}=Ys$1[i]);let c=ya$1;if(t!==``){for(let m in fr$1)if(`deltae`+t.toLowerCase()===m.toLowerCase()){c=fr$1[m];break}}a===0&&(a=1e-16);let l=rn($(n,e),{method:`clip`,space:e});if(c(n,l)>a){if(o&&Object.keys(o).length===3){let z=C.resolveCoord(o.channel),H=cn($(n,z.space),z.id);if(ge(H)&&(H=0),H>=o.max)return $({space:`xyz-d65`,coords:Ke$1.D65},n.space);if(H<=o.min)return $({space:`xyz-d65`,coords:[0,0,0]},n.space)}let m=C.resolveCoord(i),u=m.space,f=m.id,b=$(n,u);b.coords.forEach((z,H)=>{ge(z)&&(b.coords[H]=0)});let y=(m.range||m.refRange)[0],v=qp(a),N=y,L=cn(b,f);for(;L-N>v;){let z=ei(b);z=rn(z,{space:e,method:`clip`}),c(b,z)-a<v?N=cn(b,f):L=cn(b,f),wi(b,f,(N+L)/2)}r=$(b,e)}else r=l}else r=$(n,e);if(i===`clip`||!Nt$1(r,e,{epsilon:0})){let c=Object.values(e.coords).map(l=>l.range||[]);r.coords=r.coords.map((l,m)=>{let[u,f]=c[m];return u!==void 0&&(l=Math.max(u,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return e!==n.space&&(r=$(r,n.space)),n.coords=r.coords,n}rn.returns=`color`;var Ta$1={WHITE:{space:Ct,coords:[1,0,0],alpha:1},BLACK:{space:Ct,coords:[0,0,0],alpha:1}};function Wp(n,{space:i}={}){if(n=W(n),i||(i=n.space),i=C.get(i),i.isUnbounded)return $(n,i);let a=$(n,Pt$1),o=a.coords[0];if(o>=1){let p=$(Ta$1.WHITE,i);return p.alpha=n.alpha,$(p,i)}if(o<=0){let p=$(Ta$1.BLACK,i);return p.alpha=n.alpha,$(p,i)}if(Nt$1(a,i,{epsilon:0}))return $(a,i);function r(p){let y=$(p,i),v=Object.values(i.coords);return y.coords=y.coords.map((N,L)=>{if(`range`in v[L]){let[z,H]=v[L].range;return ht(z,N,H)}return N}),y}let c=0,l=a.coords[1],m=!0,u=ei(a),f=r(u),b=xi(f,u);if(b<.02)return f;for(;l-c>1e-4;){let p=(c+l)/2;if(u.coords[1]=p,m&&Nt$1(u,i,{epsilon:0}))c=p;else if(f=r(u),b=xi(f,u),b<.02){if(.02-b<1e-4)break;m=!1,c=p}else l=p}return f}function $p(n,i,e=[0,0,0],t=[1,1,1]){let a=1/0,o=-1/0,r=[];for(let c=0;c<3;c++){let l=n[c],u=i[c]-l,f=e[c],b=t[c];if(r.push(u),Math.abs(u)>1e-12){let p=1/u,y=(f-l)*p,v=(b-l)*p;o=Math.max(Math.min(y,v),o),a=Math.min(Math.max(y,v),a)}else if(l<f||l>b)return[]}return o>a||a<0?[]:(o<0&&(o=a),isFinite(o)?[n[0]+r[0]*o,n[1]+r[1]*o,n[2]+r[2]*o]:[])}function Up(n,{space:i}={}){if(n=W(n),i||(i=n.space),i=C.get(i),i.isUnbounded)return $(n,i);let e=$(n,Pt$1),[t,a,o]=e.coords;if(t>=1){let v=$(Ta$1.WHITE,i);return v.alpha=n.alpha,$(v,i)}else if(t<=0){let v=$(Ta$1.BLACK,i);return v.alpha=n.alpha,$(v,i)}let r=i,c=i.rgbGamut;if(c!==void 0&&(i=c),!an(i,Xt))throw Error(`An RGB gamut is required`);let[l,m]=Object.values(i.coords)[0].range,u=[m,m,m],f=i.linearGamut;f!==void 0&&(m=$({space:i,coords:u,alpha:n.alpha},f).coords[0],u=[m,m,m],i=f,l=Object.values(i.coords)[0].range[0]);let b=[l,l,l],p=$(e,i);if(!p.coords.every(v=>l<=v&&v<=m)){let v=$({space:Pt$1,coords:[t,0,o]},i).coords,N=l+1e-12,L=m-1e-12,z=p.coords;for(let H=0;H<4;H++){if(H){let ye=$(p,Pt$1);ye.coords[0]=t,ye.coords[2]=o,p=$(ye,i)}let ke=$p(v,p.coords,b,u);if(ke.length===0){p.coords=[...z];break}H&&p.coords.every(ye=>N<ye&&ye<L)&&(v=[...p.coords]),z=ke,p.coords=[...ke]}}p=$(p,r);let y=Object.values(r.coords);return p.coords=p.coords.map((v,N)=>{if(`range`in y[N]){let[L,z]=y[N].range;return ht(L,v,z)}return v}),p}function Ea$1(n,i={}){let{precision:e=Ut$1.precision,format:t,inGamut:a=!0,coords:o,alpha:r,commas:c}=i,l,m=W(n),u=t,f=m.parseMeta;f&&!t&&(f.format.canSerialize()&&(t=f.format,u=f.formatId),o??=f.types,r??=f.alphaType,c??=f.commas),u&&(t=m.space.getFormat(t)??C.findFormat(u)),t||(t=m.space.getFormat(`default`)??C.DEFAULT_FORMAT,u=t.name),t&&t.space&&t.space!==m.space&&(m=$(m,t.space));let b=m.coords.slice();if(a||=t.toGamut,a&&!Nt$1(m)&&(b=rn(ei(m),a===!0?void 0:a).coords),t.type===`custom`)if(t.serialize)l=t.serialize(b,m.alpha,i);else throw new TypeError(`format ${u} can only be used to parse colors, not for serialization`);else{let p=t.name||`color`,y=t.serializeCoords(b,e,o);if(p===`color`){let H=t.id||t.ids?.[0]||m.space.cssId||m.space.id;y.unshift(H)}let v=m.alpha;r!==void 0&&typeof r!=`object`&&(r=typeof r==`string`?{type:r}:{include:r});let N=r?.type??`<number>`,L=r?.include===!0||t.alpha===!0||r?.include!==!1&&t.alpha!==!1&&v<1,z=``;if(c??=t.commas,L){if(e!==null){let H;N===`<percentage>`&&(H=`%`,v*=100),v=ua$1(v,{precision:e,unit:H})}z=`${c?`,`:` /`} ${v}`}l=`${p}(${y.join(c?`, `:` `)}${z})`}return l}var gr$1=new Xt({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,M:{toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]}});var br$1={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};var Zs$1=Array(3).fill(`<percentage> | <number>[0, 255]`);var Js$1=Array(3).fill(`<number>[0, 255]`);var Ti=new Xt({id:`srgb`,name:`sRGB`,base:gr$1,linearGamut:gr$1,fromBase:n=>n.map(i=>{let e=i<0?-1:1,t=i*e;return t>.0031308?e*(1.055*t**(1/2.4)-.055):12.92*i}),toBase:n=>n.map(i=>{let e=i<0?-1:1,t=i*e;return t<=.04045?i/12.92:e*((t+.055)/1.055)**2.4}),formats:{rgb:{coords:Zs$1},rgb_number:{name:`rgb`,commas:!0,coords:Js$1,alpha:!1},color:{},rgba:{coords:Zs$1,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:Js$1},hex:{type:`custom`,toGamut:!0,test:n=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(n),parse(n){n.length<=5&&(n=n.replace(/[a-f0-9]/gi,`$&$&`));let i=[];return n.replace(/[a-f0-9]{2}/gi,e=>{i.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:i.slice(0,3),alpha:i.slice(3)[0]}},serialize:(n,i,{collapse:e=!0,alpha:t}={})=>{(t!==!1&&i<1||t===!0)&&n.push(i),n=n.map(r=>Math.round(r*255));let a=e&&n.every(r=>r%17===0);return`#`+n.map(r=>a?(r/17).toString(16):r.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:n=>/^[a-z]+$/i.test(n),parse(n){n=n.toLowerCase();let i={spaceId:`srgb`,coords:null,alpha:1};if(n===`transparent`?(i.coords=br$1.black,i.alpha=0):i.coords=br$1[n],i.coords)return i}}}});var Kp=216/24389;var ed=24/116;var Aa$1=24389/27;var _r$1=Ke$1.D65;var Ei=new C({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_r$1,base:De$1,fromBase(n){let e=n.map((t,a)=>t/_r$1[a]).map(t=>t>Kp?Math.cbrt(t):(Aa$1*t+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(n){let i=[];return i[1]=(n[0]+16)/116,i[0]=n[1]/500+i[1],i[2]=i[1]-n[2]/200,[i[0]>ed?Math.pow(i[0],3):(116*i[0]-16)/Aa$1,n[0]>8?Math.pow((n[0]+16)/116,3):n[0]/Aa$1,i[2]>ed?Math.pow(i[2],3):(116*i[2]-16)/Aa$1].map((t,a)=>t*_r$1[a])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});C.register(Ti);C.register(Pt$1);C.register(Ei);var Da$1=n=>{let i=[...n].sort((c,l)=>c.x-l.x),e=i.length;if(e===0)throw new Error(`At least one point is required`);if(e===1)return()=>i[0].y;let t=i.map(({x:c})=>c),a=i.map(({y:c})=>c),o=t.slice(1).map((c,l)=>(a[l+1]-a[l])/(c-t[l])),r=t.map((c,l)=>{if(l===0)return o[0];if(l===e-1)return o[e-2];let[m,u]=[o[l-1],o[l]];return m*u<=0?0:2*m*u/(m+u)});return c=>{if(c<=t[0])return a[0];if(c>=t[e-1])return a[e-1];let l=t.findIndex((v,N)=>c<t[N+1]),m=t[l+1]-t[l],u=(c-t[l])/m,f=2*u**3-3*u**2+1,b=u**3-2*u**2+u,p=-2*u**3+3*u**2,y=u**3-u**2;return f*a[l]+b*m*r[l]+p*a[l+1]+y*m*r[l+1]}};var td=n=>n.reduce((i,e,t)=>{if(t===0)return[e];let a=i[t-1],o=((e-a)%360+540)%360-180;return[...i,a+o]},[]);var vr$1=n=>(n%360+360)%360;var Qp=1e-4;var Yp=.37;var nd={chroma:16,lightness:20};var yr$1=n=>({space:Pt$1,coords:n,alpha:1});var xr$1=n=>$(on(n),Ei).coords[0]??0;var kr$1=n=>{let[i,e,t]=$(on(n),Pt$1).coords;return[i??0,e??0,e&&e>Qp?t??NaN:NaN]};var id=(n,i)=>{let[e,t]=[0,Yp];for(let a=0;a<nd.chroma;a++){let o=(e+t)/2;Nt$1(yr$1([n,o,i]),Ti,{epsilon:0})?e=o:t=o}return e};var wr$1=([n,i,e])=>{if(Number.isNaN(e))return 0;let t=id(n,e);return t===0?0:Math.min(i/t,1)};var ad=(n,i,e)=>{let[t,a]=[0,1],o=[0,0,e];for(let r=0;r<nd.lightness;r++){let c=(t+a)/2;o=[c,i*id(c,e),e],($(yr$1(o),Ei).coords[0]??0)<n?t=c:a=c}return o};var Sr$1=n=>Ea$1($(typeof n==`string`?on(n):yr$1(n),Ti),{format:`hex`,collapse:!1});var od=n=>{let i=kr$1(n),e=Number.isNaN(i[2])?`-`:`${Math.round(vr$1(i[2]))}\xB0`;return`L* ${xr$1(n).toFixed(1)} \xB7 Saturation ${Math.round(wr$1(i)*100)}% \xB7 Hue ${e}`};var Cr$1=0;var Nr$1=100;var Zp=({color:n,tone:i})=>{let e=kr$1(n),t=xr$1(n);return{tone:i??t,color:n,lightness:t,relativeChroma:wr$1(e),hue:e[2]}};var Jp=n=>{let i=[];return n.forEach(({tone:e},t)=>{(e<Cr$1||e>Nr$1)&&i.push({type:`tone-out-of-range`,tone:e}),t>0&&e===n[t-1].tone&&i.push({type:`duplicate-tone`,tone:e})}),n.slice(1).forEach((e,t)=>{let a=n[t];e.tone!==a.tone&&e.lightness<=a.lightness&&i.push({type:`lightness-order`,tones:[a.tone,e.tone]})}),i};var eh=n=>{let i=n.map(({tone:t,lightness:a})=>({x:t,y:a-t}));n.some(({tone:t})=>t===Cr$1)||i.push({x:Cr$1,y:0}),n.some(({tone:t})=>t===Nr$1)||i.push({x:Nr$1,y:0});let e=Da$1(i);return t=>t+e(t)};var th=n=>{let i=Da$1(n.map(({tone:o,relativeChroma:r})=>({x:o,y:r}))),e=n.filter(({hue:o})=>!Number.isNaN(o)),t=td(e.map(({hue:o})=>o)),a=e.length===0?()=>0:Da$1(e.map(({tone:o},r)=>({x:o,y:t[r]})));return{relativeChroma:i,hue:o=>vr$1(a(o))}};var rd=(n,i)=>{if(n.length===0)throw new Error(`At least one anchor is required to build a palette`);let e=n.map(Zp).sort((m,u)=>m.tone-u.tone),t=Jp(e),a=eh(e),{relativeChroma:o,hue:r}=th(e),c=[...i].sort((m,u)=>m-u);return c.slice(1).forEach((m,u)=>{a(m)<=a(c[u])&&t.push({type:`non-monotonic`,tone:m})}),{tones:c.map(m=>{let u=e.find(f=>f.tone===m);return u?{tone:m,color:Sr$1(u.color),anchored:!0}:{tone:m,color:Sr$1(ad(a(m),o(m),r(m))),anchored:!1}}),issues:t}};var Ra$1=[`light`,`dark`];var rt$1=[`primary`,`secondary`,`tertiary`,`neutral`,`neutral-variant`,`error`];var nh=n=>n.startsWith(`#`)?n:`#${n}`;var Ai=n=>{if(!n)return{list:[],colorMap:{},issues:[]};let{anchors:i,neutral:e}=n,{tones:t,issues:a}=rd(i.map(({color:c,tone:l})=>({color:nh(c),tone:l??void 0})),Yn(e)),o=t.map(({tone:c,color:l,anchored:m})=>({percentage:c,color:l,anchored:m}));return{list:o,colorMap:o.reduce((c,{percentage:l,color:m})=>(c[l]=m,c),{}),issues:a}};var Mr$1=(n,i,e=`  `)=>{return`${e}// ${JSON.stringify(n)}
`+i.map(({percentage:o,color:r})=>`${e}${o}: ${r},
`).join(``)};var cd=(n,i)=>{return`// This file was generated by Angular Material Palette Generator.
// https://avine.github.io/angular-material-palette-generator
// Color scheme: ${i}

@use 'sass:map';

$_palettes: (
${rt$1.map(t=>{let a=n[t];return`  ${t}: (
${Mr$1(a,Ai(a).list,`    `)}  ),
`}).join(``)});

$_rest: (
  secondary: map.get($_palettes, secondary),
  neutral: map.get($_palettes, neutral),
  neutral-variant: map.get($_palettes, neutral-variant),
  error: map.get($_palettes, error),
);

$primary-palette: map.merge(map.get($_palettes, primary), $_rest);
$tertiary-palette: map.merge(map.get($_palettes, tertiary), $_rest);
`};var We=class n{document=b$1(or$2);localStorage=this.document.defaultView?.localStorage;paletteMode=Oo$2(`light`);paletteName=Oo$2(`primary`);formValueMap=rt$1.reduce((i,e)=>(i[e]=Oo$2(Bo$1[e]),i),{});formValue=TD(()=>this.formValueMap[this.paletteName()]);dataMap=rt$1.reduce((i,e)=>(i[e]=TD(()=>Ai(this.formValueMap[e]())),i),{});formValueSnapshotsMap=rt$1.reduce((i,e)=>(i[e]=Oo$2([]),i),{});reset(){rt$1.forEach(i=>{this.formValueMap[i].set(Bo$1[i]),this.formValueSnapshotsMap[i].set([])})}controlSize=Oo$2(Fl);constructor(){this.restoreFormValueMap(),Du(()=>this.storeFormValueMap()),this.restorePaletteState(),Du(()=>this.storePaletteState()),this.restoreFormValueSnapshotsMap(),Du(()=>this.storeFormValueSnapshotsMap())}sassFileToClipboard(){let i=Object.fromEntries(rt$1.map(e=>[e,this.formValueMap[e]()]));this.document.defaultView?.navigator.clipboard?.writeText(cd(i,this.paletteMode()))}formValueMapStorageKey=`pg-palette-gen-service.form-value-map`;restoreFormValueMap(){let i=this.localStorage?.getItem(this.formValueMapStorageKey);if(i)try{let e=JSON.parse(i);Object.entries(e).forEach(([t,a])=>{if(!jo$1(a))throw new Error(`Invalid form value for palette "${t}"`);this.formValueMap[t].set(a)})}catch(e){this.localStorage?.removeItem(this.formValueMapStorageKey),console.error(`PaletteGenService: unable to restore FormValueMap`,i,e)}}storeFormValueMap(){let i=Object.entries(this.formValueMap).reduce((e,[t,a])=>(e[t]=a(),e),{});this.localStorage?.setItem(this.formValueMapStorageKey,JSON.stringify(i))}formValueMapSnapshotsStorageKey=`pg-palette-gen-service.form-value-snapshots-map`;restoreFormValueSnapshotsMap(){let i=this.localStorage?.getItem(this.formValueMapSnapshotsStorageKey);if(i)try{let e=JSON.parse(i);Object.entries(e).forEach(([t,a])=>{if(!a.every(o=>pa$1(o.value)))throw new Error(`Invalid snapshot for palette "${t}"`);this.formValueSnapshotsMap[t].set(a)})}catch(e){this.localStorage?.removeItem(this.formValueMapSnapshotsStorageKey),console.error(`PaletteGenService: unable to restore FormValueSnapshotsMap`,i,e)}}storeFormValueSnapshotsMap(){let i=Object.entries(this.formValueSnapshotsMap).reduce((e,[t,a])=>(e[t]=a(),e),{});this.localStorage?.setItem(this.formValueMapSnapshotsStorageKey,JSON.stringify(i))}paletteStateStorageKey=`pg-palette-gen-service.palette-state`;restorePaletteState(){let i=this.localStorage?.getItem(this.paletteStateStorageKey);if(i)try{let{mode:e,name:t}=JSON.parse(i);if(Ra$1.includes(e)&&rt$1.includes(t))this.paletteMode.set(e),this.paletteName.set(t);else throw new Error(`Invalid palette mode and/or name`)}catch(e){this.localStorage?.removeItem(this.paletteStateStorageKey),console.error(`PaletteGenService: unable to restore PaletteState`,i,e)}}storePaletteState(){let i={mode:this.paletteMode(),name:this.paletteName()};this.localStorage?.setItem(this.paletteStateStorageKey,JSON.stringify(i))}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac,providedIn:`root`})};var ld={primary:{light:{10:[`on-primary-fixed`],30:[`on-primary-container`,`on-primary-fixed-variant`],40:[`primary`,`surface-tint`],80:[`inverse-primary`,`primary-fixed-dim`],90:[`primary-container`,`primary-fixed`],100:[`on-primary`]},dark:{10:[`on-primary-fixed`],20:[`on-primary`],30:[`on-primary-fixed-variant`,`primary-container`],40:[`inverse-primary`],80:[`primary`,`primary-fixed-dim`,`surface-tint`],90:[`on-primary-container`,`primary-fixed`]}},secondary:{light:{10:[`on-secondary-fixed`],30:[`on-secondary-container`,`on-secondary-fixed-variant`],40:[`secondary`],80:[`secondary-fixed-dim`],90:[`secondary-container`,`secondary-fixed`],100:[`on-secondary`]},dark:{10:[`on-secondary-fixed`],20:[`on-secondary`],30:[`on-secondary-fixed-variant`,`secondary-container`],80:[`secondary`,`secondary-fixed-dim`],90:[`on-secondary-container`,`secondary-fixed`]}},tertiary:{light:{10:[`on-tertiary-fixed`],30:[`on-tertiary-container`,`on-tertiary-fixed-variant`],40:[`tertiary`],80:[`tertiary-fixed-dim`],90:[`tertiary-container`,`tertiary-fixed`],100:[`on-tertiary`]},dark:{10:[`on-tertiary-fixed`],20:[`on-tertiary`],30:[`on-tertiary-fixed-variant`,`tertiary-container`],80:[`tertiary`,`tertiary-fixed-dim`],90:[`on-tertiary-container`,`tertiary-fixed`]}},neutral:{light:{0:[`scrim`,`shadow`],10:[`on-background`,`on-surface`,`neutral10`],20:[`inverse-surface`],87:[`surface-dim`],90:[`surface-container-highest`],92:[`surface-container-high`],94:[`surface-container`],95:[`inverse-on-surface`],96:[`surface-container-low`],98:[`background`,`surface`,`surface-bright`],100:[`surface-container-lowest`]},dark:{0:[`scrim`,`shadow`],4:[`surface-container-lowest`],6:[`background`,`surface`,`surface-dim`],10:[`surface-container-low`,`neutral10`],12:[`surface-container`],17:[`surface-container-high`],20:[`inverse-on-surface`],22:[`surface-container-highest`],24:[`surface-bright`],90:[`inverse-surface`,`on-background`,`on-surface`]}},"neutral-variant":{light:{20:[`neutral-variant20`],30:[`on-surface-variant`],50:[`outline`],80:[`outline-variant`],90:[`surface-variant`]},dark:{20:[`neutral-variant20`],30:[`outline-variant`,`surface-variant`],60:[`outline`],90:[`on-surface-variant`]}},error:{light:{30:[`on-error-container`],40:[`error`],90:[`error-container`],100:[`on-error`]},dark:{20:[`on-error`],30:[`error-container`],80:[`error`],90:[`on-error-container`]}}};var Fa$1={primary:{light:{"on-primary-fixed":10,"on-primary-container":30,"on-primary-fixed-variant":30,primary:40,"surface-tint":40,"inverse-primary":80,"primary-fixed-dim":80,"primary-container":90,"primary-fixed":90,"on-primary":100},dark:{"on-primary-fixed":10,"on-primary":20,"on-primary-fixed-variant":30,"primary-container":30,"inverse-primary":40,primary:80,"primary-fixed-dim":80,"surface-tint":80,"on-primary-container":90,"primary-fixed":90}},secondary:{light:{"on-secondary-fixed":10,"on-secondary-container":30,"on-secondary-fixed-variant":30,secondary:40,"secondary-fixed-dim":80,"secondary-container":90,"secondary-fixed":90,"on-secondary":100},dark:{"on-secondary-fixed":10,"on-secondary":20,"on-secondary-fixed-variant":30,"secondary-container":30,secondary:80,"secondary-fixed-dim":80,"on-secondary-container":90,"secondary-fixed":90}},tertiary:{light:{"on-tertiary-fixed":10,"on-tertiary-container":30,"on-tertiary-fixed-variant":30,tertiary:40,"tertiary-fixed-dim":80,"tertiary-container":90,"tertiary-fixed":90,"on-tertiary":100},dark:{"on-tertiary-fixed":10,"on-tertiary":20,"on-tertiary-fixed-variant":30,"tertiary-container":30,tertiary:80,"tertiary-fixed-dim":80,"on-tertiary-container":90,"tertiary-fixed":90}},neutral:{light:{scrim:0,shadow:0,"on-background":10,"on-surface":10,neutral10:10,"inverse-surface":20,"surface-dim":87,"surface-container-highest":90,"surface-container-high":92,"surface-container":94,"inverse-on-surface":95,"surface-container-low":96,background:98,surface:98,"surface-bright":98,"surface-container-lowest":100},dark:{scrim:0,shadow:0,"surface-container-lowest":4,background:6,surface:6,"surface-dim":6,"surface-container-low":10,neutral10:10,"surface-container":12,"surface-container-high":17,"inverse-on-surface":20,"surface-container-highest":22,"surface-bright":24,"inverse-surface":90,"on-background":90,"on-surface":90}},"neutral-variant":{light:{"neutral-variant20":20,"on-surface-variant":30,outline:50,"outline-variant":80,"surface-variant":90},dark:{"neutral-variant20":20,"outline-variant":30,"surface-variant":30,outline:60,"on-surface-variant":90}},error:{light:{"on-error-container":30,error:40,"error-container":90,"on-error":100},dark:{"on-error":20,"error-container":30,error:80,"on-error-container":90}}};var Pa$1=class n{injector=b$1(ie$1);renderer=b$1(hr$3).createRenderer(null,null);document=b$1(or$2);service=b$1(We);tokens={primary:this.getComputedTokens(`primary`),secondary:this.getComputedTokens(`secondary`),tertiary:this.getComputedTokens(`tertiary`),neutral:this.getComputedTokens(`neutral`),"neutral-variant":this.getComputedTokens(`neutral-variant`),error:this.getComputedTokens(`error`)};getComputedTokens(i){return TD(()=>{let{colorMap:e}=this.service.dataMap[i]();return Object.fromEntries(Object.entries(Fa$1[i][this.service.paletteMode()]).map(([t,a])=>[`--mat-sys-${t}`,e[a]]))})}getStyle(){return G(G(G(G(G(G({},this.tokens.primary()),this.tokens.secondary()),this.tokens.tertiary()),this.tokens.neutral()),this.tokens[`neutral-variant`]()),this.tokens.error())}_isPageSharingActive=Oo$2(!1);isPageSharingActive=this._isPageSharingActive.asReadonly();effectRef;enablePageSharing(){this.effectRef||(this.effectRef=Du(()=>{for(let[i,e]of Object.entries(this.getStyle()))this.renderer.setStyle(this.document.documentElement,i,e,Ko$2.DashCase)},{injector:this.injector}),this._isPageSharingActive.set(!0))}disablePageSharing(){if(this.effectRef){for(let i of Object.keys(this.getStyle()))this.renderer.removeStyle(this.document.documentElement,i,Ko$2.DashCase);this.effectRef.destroy(),this.effectRef=void 0,this._isPageSharingActive.set(!1)}}togglePageSharing(){this.effectRef?this.disablePageSharing():this.enablePageSharing()}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac,providedIn:`root`})};var sd=new x(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var dd=new x(`MatButtonToggleGroup`);var ih={provide:za$1,useExisting:fo$2(()=>Di),multi:!0};var Oa$1=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Di=(()=>{class n{_changeDetector=b$1(KP);_dir=b$1(Oe,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=b$1(Ge).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new je$2;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new je$2;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=b$1(sd,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new vn$1(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||ke(e))return;let a=e.target.id,o=this._buttonToggles.toArray().findIndex(c=>c.buttonId===a),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Oa$1(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,a=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,a)):this._updateModelValue(e,a)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let a=this._buttonToggles;for(let o=1;o<=a.length;o++){let r=(e+t*o+a.length)%a.length,c=a.get(r);if(c&&!c.disabled)return c}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(a=>this._selectValue(a,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(a=>a.tabIndex===-1)){for(let a of t)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let a of t)if(a.value===e){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,a,o){if(t&1&&Ap$1(o,ii,5),t&2){let r;NI(r=MI())&&(a._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,a){t&1&&Mp$1(`keydown`,function(r){return a._keydown(r)}),t&2&&(Dp$1(`role`,a.multiple?`group`:`radiogroup`)(`aria-disabled`,a.disabled),Hp$1(`mat-button-toggle-vertical`,a.vertical)(`mat-button-toggle-group-appearance-standard`,a.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,XP],value:`value`,multiple:[2,`multiple`,`multiple`,XP],disabled:[2,`disabled`,`disabled`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,XP],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,XP]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[dD([ih,{provide:dd,useExisting:n}])]})}return n})();var ii=(()=>{class n{_changeDetectorRef=b$1(KP);_elementRef=b$1(Er$3);_focusMonitor=b$1(ct$1);_idGenerator=b$1(Ge);_animationDisabled=se();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new je$2;constructor(){b$1(Z$1).load(Tn$1);let e=b$1(dd,{optional:!0}),t=b$1(new oh$1(`tabindex`),{optional:!0})||``,a=b$1(sd,{optional:!0});this._tabIndex=Oo$2(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=a&&a.appearance?a.appearance:`standard`,this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Oa$1(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`button`],t=[`*`];function a(o,r){if(o&1&&(li(0,`div`,2),bp$1(1,`mat-pseudo-checkbox`,6),vc$1()),o&2){let c=wI();av(),wp$1(`disabled`,c.disabled)}}return FE({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(r,c){if(r&1&&Rp$1(e,5),r&2){let l;NI(l=MI())&&(c._buttonElement=l.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(r,c){r&1&&Mp$1(`focus`,function(){return c.focus()}),r&2&&(Dp$1(`aria-label`,null)(`aria-labelledby`,null)(`id`,c.id)(`name`,null),Hp$1(`mat-button-toggle-standalone`,!c.buttonToggleGroup)(`mat-button-toggle-checked`,c.checked)(`mat-button-toggle-disabled`,c.disabled)(`mat-button-toggle-disabled-interactive`,c.disabledInteractive)(`mat-button-toggle-appearance-standard`,c.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,XP],appearance:`appearance`,checked:[2,`checked`,`checked`,XP],disabled:[2,`disabled`,`disabled`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:t,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(r,c){if(r&1&&(CI(),li(0,`button`,1,0),Mp$1(`click`,function(){return c._onButtonClick()}),lI(2,a,2,1,`div`,2),li(3,`span`,3),TI(4),vc$1()(),bp$1(5,`span`,4)(6,`span`,5)),r&2){let l=xI(1);wp$1(`id`,c.buttonId)(`disabled`,c.disabled&&!c.disabledInteractive||null),Dp$1(`role`,c.isSingleSelector()?`radio`:`button`)(`tabindex`,c.disabled&&!c.disabledInteractive?-1:c.tabIndex)(`aria-pressed`,c.isSingleSelector()?null:c.checked)(`aria-checked`,c.isSingleSelector()?c.checked:null)(`name`,c._getButtonName())(`aria-label`,c.ariaLabel)(`aria-labelledby`,c.ariaLabelledby)(`aria-disabled`,c.disabled&&c.disabledInteractive?`true`:null),av(2),dI(c.buttonToggleGroup&&(!c.buttonToggleGroup.multiple&&!c.buttonToggleGroup.hideSingleSelectionIndicator||c.buttonToggleGroup.multiple&&!c.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),av(4),wp$1(`matRippleTrigger`,l)(`matRippleDisabled`,c.disableRipple||c.disabled)}},dependencies:[ra$2,ls$2],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return n})();var Ba$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[Pn$1,ii,Y]})}return n})();var ln=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ar$1=(()=>{class n extends Ln$1{_elementRef=b$1(Er$3);_focusTrapFactory=b$1(Vl$1);_config;_interactivityChecker=b$1(Hr);_ngZone=b$1(Me);_focusMonitor=b$1(ct$1);_renderer=b$1(Ta$3);_changeDetectorRef=b$1(KP);_injector=b$1(ie$1);_platform=b$1(O);_document=b$1(or$2);_portalOutlet;_focusTrapped=new K;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=b$1(ln,{optional:!0})||new ln,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),r(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,a),r=this._renderer.listen(e,`mousedown`,a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_trapFocus(e){this._isDestroyed||By(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let a=Cl$1(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Cl$1();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Cl$1()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,a){}return FE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(a,o){if(a&1&&Rp$1(Hg,7),a&2){let r;NI(r=MI())&&(o._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(a,o){a&2&&Dp$1(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[pp$1],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&gp$1(0,e,0,0,`ng-template`,0)},dependencies:[Hg],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Cn$1=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new K;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ke(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,e=``){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}};var ah=new x(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=b$1(ie$1);return()=>_a$2(n)}});var oh=new x(`DialogData`);var rh=new x(`DefaultDialogConfig`);function ch(n){let i=Oo$2(n),e=new je$2;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Dr=(()=>{class n{_injector=b$1(ie$1);_defaultOptions=b$1(rh,{optional:!0});_parentDialog=b$1(n,{optional:!0,skipSelf:!0});_overlayContainer=b$1(Ma$2);_idGenerator=b$1(Ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=b$1(ah);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Kh$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(yl$2(void 0)));open(e,t){let a=this._defaultOptions||new ln;t=G(G({},a),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=qt(this._injector,o),c=new Cn$1(r,t),l=this._attachContainer(r,c,t);if(c.containerInstance=l,!this.openDialogs.length){let m=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(en$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(m)}):this._hideNonDialogContentFromAssistiveTechnology(m)}return this._attachDialogContent(e,c,l,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){Er$1(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Er$1(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Er$1(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Xt$1({positionStrategy:e.positionStrategy||Aa$2().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,a){let o=a.injector||a.viewContainerRef?.injector,r=[{provide:ln,useValue:a},{provide:Cn$1,useValue:t},{provide:Hn$1,useValue:e}],c;a.container?typeof a.container==`function`?c=a.container:(c=a.container.type,r.push(...a.container.providers(a))):c=Ar$1;let l=new Gt(c,a.viewContainerRef,ie$1.create({parent:o||this._injector,providers:r}));return e.attach(l).instance}_attachDialogContent(e,t,a,o){if(e instanceof pr$3){let r=this._createInjector(o,t,a,void 0),c={$implicit:o.data,dialogRef:t};o.templateContext&&(c=G(G({},c),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),a.attachTemplatePortal(new gt(e,null,c,r))}else{let r=this._createInjector(o,t,a,this._injector),c=a.attachComponentPortal(new Gt(e,o.viewContainerRef,r,null,o.bindings));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,a,o){let r=e.injector||e.viewContainerRef?.injector,c=[{provide:oh,useValue:e.data},{provide:Cn$1,useValue:t}];return e.providers&&(typeof e.providers==`function`?c.push(...e.providers(t,e,a)):c.push(...e.providers)),e.direction&&(!r||!r.get(Oe,null,{optional:!0}))&&c.push({provide:Oe,useValue:ch(e.direction)}),ie$1.create({parent:r||o,providers:c})}_removeOpenDialog(e,t){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute(`aria-hidden`,o):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let a=t.length-1;a>-1;a--){let o=t[a];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=vr$3({token:n,factory:n.ɵfac})}return n})();function Er$1(n,i){let e=n.length;for(;e--;)i(n[e])}var pd=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({providers:[Dr],imports:[so$1,ua$2,ji,ua$2]})}return n})();var Ha$1=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Rr$1=`mdc-dialog--open`;var hd=`mdc-dialog--opening`;var ud=`mdc-dialog--closing`;var lh=150;var sh=75;var dh=(()=>{class n extends Ar$1{_animationStateChanged=new je$2;_animationsEnabled=!se();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?gd(this._config.enterAnimationDuration)??lh:0;_exitAnimationDuration=this._animationsEnabled?gd(this._config.exitAnimationDuration)??sh:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(fd,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(hd,Rr$1)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Rr$1),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Rr$1),this._animationsEnabled?(this._hostElement.style.setProperty(fd,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ud)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(hd,ud)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵcmp=(function(){function e(t,a){}return FE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(a,o){a&2&&(_p$1(`id`,o._config.id),Dp$1(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),Hp$1(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[pp$1],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&(li(0,`div`,0)(1,`div`,1),gp$1(2,e,0,0,`ng-template`,2),vc$1()())},dependencies:[Hg],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var fd=`--mat-dialog-transition-duration`;function gd(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?He(n.substring(0,n.length-2)):n.endsWith(`s`)?He(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Ga$1=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Ga$1||{});var Ri=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ln$2(1);_beforeClosed=new Ln$2(1);_result;_closeFallbackTimeout;_state=Ga$1.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Xt$2(a=>a.state===`opened`),en$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Xt$2(a=>a.state===`closed`),en$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Xh$1(this.backdropClick(),this.keydownEvents().pipe(Xt$2(a=>a.keyCode===27&&!this.disableClose&&!ke(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),bd(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Xt$2(t=>t.state===`closing`),en$1(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ga$1.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,e=``){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Ga$1.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function bd(n,i,e){return n._closeInteractionType=i,n.close(e)}var mh=new x(`MatMdcDialogData`);var ph=new x(`mat-mdc-dialog-default-options`);var hh=new x(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b$1(ie$1);return()=>_a$2(n)}});var Nn$1=(()=>{class n{_defaultOptions=b$1(ph,{optional:!0});_scrollStrategy=b$1(hh);_parentDialog=b$1(n,{optional:!0,skipSelf:!0});_idGenerator=b$1(Ge);_injector=b$1(ie$1);_dialog=b$1(Dr);_animationsDisabled=se();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;dialogConfigClass=Ha$1;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Kh$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(yl$2(void 0)));constructor(){this._dialogRefConstructor=Ri,this._dialogContainerType=dh,this._dialogDataToken=mh}open(e,t){let a;t=G(G({},this._defaultOptions||new Ha$1),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,q$1(G({},t),{positionStrategy:Aa$2(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ln,useValue:t}]},templateContext:()=>({dialogRef:a}),providers:(r,c,l)=>(a=new this._dialogRefConstructor(r,t,l),a.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:a},{provide:Cn$1,useValue:null}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=vr$3({token:n,factory:n.ɵfac})}return n})();var ja$1=(()=>{class n{dialogRef=b$1(Ri,{optional:!0});_elementRef=b$1(Er$3);_dialog=b$1(Nn$1);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=vd(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&bd(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,a){t&1&&Mp$1(`click`,function(r){return a._onButtonClick(r)}),t&2&&Dp$1(`aria-label`,a.ariaLabel||null)(`type`,a.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[pm]})}return n})();var _d=(()=>{class n{_dialogRef=b$1(Ri,{optional:!0});_elementRef=b$1(Er$3);_dialog=b$1(Nn$1);ngOnInit(){this._dialogRef||(this._dialogRef=vd(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n})}return n})();var qa$1=(()=>{class n extends _d{id=b$1(Ge).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,a){t&2&&_p$1(`id`,a.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[pp$1]})}return n})();var Wa$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=$E({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[zE([oc])]})}return n})();var $a$1=(()=>{class n extends _d{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Rm$1(n)))(a||n)}})();static ɵdir=$E({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,a){t&2&&Hp$1(`mat-mdc-dialog-actions-align-start`,a.align===`start`)(`mat-mdc-dialog-actions-align-center`,a.align===`center`)(`mat-mdc-dialog-actions-align-end`,a.align===`end`)},inputs:{align:`align`},features:[pp$1]})}return n})();function vd(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var Ua$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({providers:[Nn$1],imports:[pd,so$1,ua$2,Y]})}return n})();var uh=/^[0-9a-f]{3}([0-9a-f]{3})?$/i;Object.freeze({AA:Object.freeze({normal:4.5,large:3}),AAA:Object.freeze({normal:7,large:4.5})});function fh(n){let i=n.trim().replace(/^#/,``);if(!uh.test(i))throw new Error(`Invalid HEX color. Use a 3 or 6 digit hexadecimal string.`);let e=i.length===3?i.split(``).map(a=>a+a).join(``):i,t=Number.parseInt(e,16);return[t>>16&255,t>>8&255,t&255]}function Fr$1(n,i){if(!Number.isInteger(n)||n<0||n>255)throw new Error(`Invalid RGB color. Each channel must be an integer between 0 and 255. Received ${n} at index ${i}.`);return n}function gh(n){if(n.length!==3)throw new Error(`Invalid RGB color. Expected exactly 3 channels.`);return[Fr$1(n[0],0),Fr$1(n[1],1),Fr$1(n[2],2)]}function xd(n){return typeof n==`string`?fh(n):gh(n)}function Pr$1(n){let i=n/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}function kd([n,i,e]){return Pr$1(n)*.2126+Pr$1(i)*.7152+Pr$1(e)*.0722}function bh(n,i){if(i===void 0)return n;if(!Number.isInteger(i)||i<0||i>15)throw new Error(`Invalid precision. Expected an integer between 0 and 15.`);return Number(n.toFixed(i))}function _h(n,i){let e=kd(xd(n)),t=kd(xd(i)),a=Math.max(e,t),o=Math.min(e,t);return(a+.05)/(o+.05)}function Fi(n,i,e={}){return bh(_h(n,i),e.precision)}var ai=class n{transform(i){return Fi(i,`#fff`)<Fi(i,`#000`)}static ɵfac=function(e){return new(e||n)};static ɵpipe=UE({name:`preferBlackForgroundColor`,type:n,pure:!0})};function vh(n,i){if(n&1&&(li(0,`span`,3),gD(1,`preferBlackForgroundColor`),tD(2),vc$1()),n&2){let e=wI().$implicit,t=wI(2);Vp$1(`background-color`,e.color),Hp$1(`pg-palette-gen-overview__item--prefer-black`,yD(1,8,e.color))(`pg-palette-gen-overview__item--compact`,t.compact()),wp$1(`matTooltip`,e.color),av(2),Dc$1(` `,e.percentage,` `)}}function yh(n,i){if(n&1&&lI(0,vh,3,10,`span`,2),n&2){let e=i.$implicit,t=wI(2);dI(t.percentages.includes(e.percentage)?0:-1)}}function xh(n,i){if(n&1&&(li(0,`h2`,0),tD(1),gD(2,`titlecase`),vc$1(),li(3,`div`,1),hI(4,yh,1,1,null,null,fI),vc$1()),n&2){let e=i.$implicit;av(),Qp$1(yD(2,1,e.paletteName)),av(3),gI(e.dataList)}}var Xa$1=class n{service=b$1(We);percentages=zo$1.default;overview=TD(()=>Object.entries(this.service.dataMap).reduce((i,[e,t])=>(i.push({paletteName:e,dataList:t().list}),i),[]));compact=GP(!1);static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-overview`]],hostAttrs:[1,`pg-palette-gen-overview`],inputs:{compact:[1,`compact`]},decls:2,vars:0,consts:[[1,`pg-palette-gen-overview__name`],[1,`pg-palette-gen-overview__list`],[1,`pg-palette-gen-overview__item`,3,`matTooltip`,`pg-palette-gen-overview__item--prefer-black`,`pg-palette-gen-overview__item--compact`,`background-color`],[1,`pg-palette-gen-overview__item`,3,`matTooltip`]],template:function(e,t){e&1&&hI(0,xh,6,3,null,null,fI),e&2&&gI(t.overview())},dependencies:[Ey,vc,Cs$2,ai],styles:[`.pg-palette-gen-overview__name{margin:1rem 0 .5rem;font:var(--%NS%mat-sys-title-medium);letter-spacing:var(--%NS%mat-sys-title-medium-tracking)}.pg-palette-gen-overview__list{display:flex}.pg-palette-gen-overview__item{height:4rem;line-height:4rem;flex-basis:3rem;text-align:center;font-size:var(--%NS%pl-font-size-monospace, .85rem);font-family:var(--%NS%pl-font-family-monospace, monospace);font-optical-sizing:auto;font-weight:400;font-style:normal;border:1px solid rgba(255,255,255,.1);border-width:0 0 0 1px;color:#fff;transition:all ease .1s;transform-origin:center 3.5rem}.pg-palette-gen-overview__item--prefer-black{border:1px solid rgba(0,0,0,.05);border-width:0 0 0 1px;color:#000}.pg-palette-gen-overview__item:first-child{border-radius:.25rem 0 0 .25rem}.pg-palette-gen-overview__item:last-child{border-radius:0 .25rem .25rem 0}.pg-palette-gen-overview__item:hover{z-index:1;border-radius:.25rem;border-width:1px;transform:scale(1.5)}.pg-palette-gen-overview__item--compact{height:3rem;line-height:3rem;transform-origin:center 2.5rem}
`],encapsulation:2})};var Ka$1=class n{transform(i,e){if(!e)return;let t=Fi(i,e);return t>=7?{icon:`done_all`,label:`WCAG 2 AAA Compliant`}:t>=4.5?{icon:`check`,label:`WCAG 2 AA Compliant`}:{icon:`warning`,label:`Not WCAG Compliant`}}static ɵfac=function(e){return new(e||n)};static ɵpipe=UE({name:`wcagContrastRatioCompliance`,type:n,pure:!0})};var Qa$1=class n{transform(i,{name:e,mode:t}){return e?ld[e][t][i]??[]:[]}static ɵfac=function(e){return new(e||n)};static ɵpipe=UE({name:`paletteMatchingPercentageToTokens`,type:n,pure:!0})};var Ya$1=class n{transform(i,{name:e,mode:t},a){if(e)for(let o of i){let r=o.startsWith(`on-`)?o.substring(3):`on-${o}`,c=Fa$1[e][t][r];if(!c)continue;let l=a[c];if(l)return l}}static ɵfac=function(e){return new(e||n)};static ɵpipe=UE({name:`paletteMatchingTokensToMirrorColor`,type:n,pure:!0})};var Za$1=class n{transform(i){return od(i)}static ɵfac=function(e){return new(e||n)};static ɵpipe=UE({name:`colorDetails`,type:n,pure:!0})};function kh(n,i){if(n&1){let e=II();li(0,`button`,10),Mp$1(`click`,function(){Yl$2(e);let a=wI().$implicit,o=wI();return Kl$2(o.anchorToggle.emit(a))}),li(1,`mat-icon`),tD(2,`push_pin`),vc$1()()}if(n&2){let e=wI().$implicit,t=(e.anchored?`Unpin color at tone `:`Pin color at tone `)+e.percentage;Hp$1(`pg-palette-gen-preview__pin--active`,e.anchored),wp$1(`matTooltip`,t),Dp$1(`aria-label`,t)(`aria-pressed`,e.anchored)}}function wh(n,i){if(n&1&&(li(0,`mat-icon`,12),tD(1),vc$1()),n&2){let e=i;wp$1(`matTooltip`,e.label),Dp$1(`aria-label`,e.label),av(),Dc$1(` `,e.icon,` `)}}function Sh(n,i){if(n&1&&(Jp$1(0),gD(1,`paletteMatchingTokensToMirrorColor`),li(2,`div`,11),gD(3,`preferBlackForgroundColor`),tD(4),lI(5,wh,2,3,`mat-icon`,12),gD(6,`wcagContrastRatioCompliance`),vc$1()),n&2){let e,t=wI().$implicit,a=aD(8),o=wI(),r=ED(1,6,a,o.matchingConfig(),o.data().colorMap);av(2),Vp$1(`color`,r),Hp$1(`pg-palette-gen-preview__tokens--black`,!r&&yD(3,10,t.color)),av(2),Dc$1(` `,a.join(` | `),` `),av(),dI((e=vD(6,12,t.color,r))?5:-1,e)}}function Ch(n,i){if(n&1&&(li(0,`div`,4)(1,`div`,5)(2,`span`,6),tD(3),vc$1(),li(4,`span`,7),gD(5,`colorDetails`),tD(6),vc$1(),lI(7,kh,3,5,`button`,8),vc$1(),Jp$1(8),gD(9,`paletteMatchingPercentageToTokens`),lI(10,Sh,7,15,`div`,9),vc$1()),n&2){let e=i.$implicit,t=wI();Vp$1(`--%NS%pg-palette-gen-preview-space`,t.compact()?`0rem`:`0.375rem`)(`background-color`,e.color),Hp$1(`pg-palette-gen-preview__item--mirror`,t.mirrorView()),av(3),Dc$1(``,e.percentage,`:`),av(),wp$1(`matTooltip`,yD(5,11,e.color)),av(2),Qp$1(e.color),av(),dI(t.mirrorView()?-1:7),av();let a=sD(vD(9,13,e.percentage,t.matchingConfig()));av(2),dI(!t.mirrorView()&&a.length?10:-1)}}function Nh(n,i){if(n&1){let e=II();li(0,`button`,13),Mp$1(`click`,function(){Yl$2(e);let a=wI();return Kl$2(a.action.emit())}),li(1,`mat-icon`),tD(2,`close`),vc$1()()}}function Mh(n,i){if(n&1){let e=II();li(0,`button`,14),Mp$1(`click`,function(){Yl$2(e);let a=wI();return Kl$2(a.action.emit())}),li(1,`mat-icon`),tD(2,`compare`),vc$1()()}}var Ja$1=class n{clipboard=b$1(or$2).defaultView?.navigator.clipboard;mirrorView=GP(!1,{transform:XP});formValue=GP();action=WP();anchorToggle=WP();compact=GP(!1);matchingConfig=GP({name:void 0,mode:`light`});data=TD(()=>Ai(this.formValue()));sassMapToClipboard(){let i=this.formValue();i&&this.clipboard?.writeText(Mr$1(i,this.data().list))}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-preview`]],hostAttrs:[1,`pg-palette-gen-preview`],inputs:{mirrorView:[1,`mirrorView`],formValue:[1,`formValue`],compact:[1,`compact`],matchingConfig:[1,`matchingConfig`]},outputs:{action:`action`,anchorToggle:`anchorToggle`},decls:7,vars:4,consts:[[1,`pg-palette-gen-preview__item`,3,`pg-palette-gen-preview__item--mirror`,`--%NS%pg-palette-gen-preview-space`,`backgroundColor`],[`matIconButton`,``,`matTooltip`,`Copy Sass map to clipboard`,1,`pg-palette-gen-preview__action`,3,`click`,`matTooltipPosition`],[`matIconButton`,``,`matTooltip`,`Close mirror view`,`matTooltipPosition`,`right`,1,`pg-palette-gen-preview__action`,`pg-palette-gen-preview__action--2`,`pg-palette-gen-preview__action--mirror`],[`matIconButton`,``,`matTooltip`,`Open mirror view`,`matTooltipPosition`,`left`,1,`pg-palette-gen-preview__action`,`pg-palette-gen-preview__action--2`],[1,`pg-palette-gen-preview__item`],[1,`pg-palette-gen-preview__info`],[1,`pg-palette-gen-preview__percent`],[`tabindex`,`0`,`matTooltipPosition`,`above`,`matTooltipClass`,`pg-palette-gen-preview__tooltip`,1,`pg-palette-gen-preview__color`,3,`matTooltip`],[`matIconButton`,``,`matTooltipPosition`,`right`,1,`pg-palette-gen-preview__pin`,3,`pg-palette-gen-preview__pin--active`,`matTooltip`],[1,`pg-palette-gen-preview__tokens`,`gbl-body-medium`,3,`pg-palette-gen-preview__tokens--black`,`color`],[`matIconButton`,``,`matTooltipPosition`,`right`,1,`pg-palette-gen-preview__pin`,3,`click`,`matTooltip`],[1,`pg-palette-gen-preview__tokens`,`gbl-body-medium`],[`matTooltipPosition`,`right`,3,`matTooltip`],[`matIconButton`,``,`matTooltip`,`Close mirror view`,`matTooltipPosition`,`right`,1,`pg-palette-gen-preview__action`,`pg-palette-gen-preview__action--2`,`pg-palette-gen-preview__action--mirror`,3,`click`],[`matIconButton`,``,`matTooltip`,`Open mirror view`,`matTooltipPosition`,`left`,1,`pg-palette-gen-preview__action`,`pg-palette-gen-preview__action--2`,3,`click`]],template:function(e,t){e&1&&(hI(0,Ch,11,17,`div`,0,fI),li(2,`button`,1),Mp$1(`click`,function(){return t.sassMapToClipboard()}),li(3,`mat-icon`),tD(4,`content_copy`),vc$1()(),lI(5,Nh,3,0,`button`,2)(6,Mh,3,0,`button`,3)),e&2&&(gI(t.data().list),av(2),Hp$1(`pg-palette-gen-preview__action--mirror`,t.mirrorView()),wp$1(`matTooltipPosition`,t.mirrorView()?`right`:`left`),av(3),dI(t.mirrorView()?5:6))},dependencies:[Fg,Jl$1,Ze$1,Ye,Ey,vc,Qa$1,Ya$1,ai,Ka$1,Za$1],styles:[`.pg-palette-gen-preview{display:block;position:relative}.pg-palette-gen-preview__item{display:flex}.pg-palette-gen-preview__item--mirror{justify-content:flex-end}.pg-palette-gen-preview__info{flex-shrink:0;padding:var(--%NS%pg-palette-gen-preview-space) 1rem;padding-left:0;background-color:var(--%NS%mat-sys-surface);transition:padding ease .15s;font-size:var(--%NS%pl-font-size-monospace, .85rem);font-family:var(--%NS%pl-font-family-monospace, monospace);font-optical-sizing:auto;font-weight:400;font-style:normal}.pg-palette-gen-preview__color{margin-left:1ch;border-radius:.25rem}.pg-palette-gen-preview__color:focus-visible{outline:2px solid var(--%NS%mat-sys-primary);outline-offset:2px}.pg-palette-gen-preview__tooltip .mat-mdc-tooltip-surface{max-width:none;white-space:nowrap}.pg-palette-gen-preview__pin{--%NS%mat-icon-button-state-layer-size: 1.75rem;--%NS%mat-icon-button-icon-size: 1.125rem;width:var(--%NS%mat-icon-button-state-layer-size)!important;height:var(--%NS%mat-icon-button-state-layer-size)!important;padding:0!important;margin:-.25rem 0 -.25rem .25rem;vertical-align:middle;color:var(--%NS%mat-sys-on-surface-variant)!important;opacity:.4;transition:opacity ease .15s}.pg-palette-gen-preview__pin mat-icon{width:var(--%NS%mat-icon-button-icon-size);height:var(--%NS%mat-icon-button-icon-size);font-size:var(--%NS%mat-icon-button-icon-size)}.pg-palette-gen-preview__pin:hover,.pg-palette-gen-preview__pin:focus-visible{opacity:1}.pg-palette-gen-preview__pin--active{color:var(--%NS%mat-sys-primary)!important;opacity:1}.pg-palette-gen-preview__pin--active mat-icon{font-variation-settings:"FILL" 1}.pg-palette-gen-preview__percent{display:inline-block;width:3rem;text-align:end;color:var(--%NS%mat-sys-primary)}.pg-palette-gen-preview__tokens{display:flex;align-items:center;gap:.5rem;padding:var(--%NS%pg-palette-gen-preview-space) 1rem;transition:padding ease .15s;color:#fff}.pg-palette-gen-preview__tokens--black{color:#000}.pg-palette-gen-preview__tokens mat-icon{flex-shrink:0;opacity:.65;width:auto;height:auto;font-size:1.25rem}.pg-palette-gen-preview__action{position:absolute!important;top:.5rem;right:.5rem;background-color:var(--%NS%mat-sys-surface)!important;color:var(--%NS%mat-sys-on-surface)!important;opacity:.5;transition:opacity ease .15s}.pg-palette-gen-preview__action--2{top:3.5rem}.pg-palette-gen-preview__action--mirror{left:.5rem;right:auto}.pg-palette-gen-preview__action:hover{opacity:1}
`],encapsulation:2})};var eo$1=class n{rendererService=b$1(Pa$1);static ɵfac=function(e){return new(e||n)};static ɵdir=$E({type:n,selectors:[[``,`pgPaletteGenRenderer`,``]],hostVars:2,hostBindings:function(e,t){e&2&&UI(t.rendererService.getStyle())}})};var to$1=class n{static ɵfac=function(e){return new(e||n)};static ɵdir=$E({type:n,selectors:[[``,`pgPaletteGenSelectorAfter`,``]]})};var Th=new x(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b$1(ie$1);return()=>Zt(n)}});var Eh=new x(`MAT_SELECT_CONFIG`);var Ah=new x(`MatSelectTrigger`);var Or$1=class{source;value;constructor(i,e){this.source=i,this.value=e}};var no$1=(()=>{class n{_viewportRuler=b$1(bt);_changeDetectorRef=b$1(KP);_elementRef=b$1(Er$3);_dir=b$1(Oe,{optional:!0});_idGenerator=b$1(Ge);_renderer=b$1(Ta$3);_parentFormField=b$1(gi,{optional:!0});ngControl=b$1(_t,{self:!0,optional:!0});_liveAnnouncer=b$1(jl$1);_defaultOptions=b$1(Eh,{optional:!0});_animationsDisabled=se();_popoverLocation;_initialized=new K;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,o=gv(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=bv(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Or$1(this,e)}_scrollStrategyFactory=b$1(Th);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new K;_errorStateTracker;stateChanges=new K;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Oo$2(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(lo$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Kh$1(()=>{let e=this.options;return e?e.changes.pipe(yl$2(e),fg(()=>Xh$1(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(fg(()=>this.optionSelectionChanges))});openedChange=new je$2;_openedStream=this.openedChange.pipe(Xt$2(e=>e),_e$1(()=>{}));_closedStream=this.openedChange.pipe(Xt$2(e=>!e),_e$1(()=>{}));selectionChange=new je$2;valueChange=new je$2;constructor(){let e=b$1(Zy),t=b$1(Qc$1,{optional:!0}),a=b$1(od$1,{optional:!0}),o=b$1(new oh$1(`tabindex`),{optional:!0}),r=b$1(ao$1,{optional:!0}),c=b$1(tn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ss$2(e,c||this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new vn$1(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(pg(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(pg(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(yl$2(null),pg(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute(`aria-labelledby`,e):a.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(en$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!ke(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;r.onKeydown(e);let l=this.selected;l&&c!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,o=a===40||a===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&t.activeItem&&!ke(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let c=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(c?l.select():l.deselect())})}else{let c=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==c&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ke(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof oo$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new zi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Xh$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(pg(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Xh$1(...this.options.map(t=>t._stateChanges)).pipe(pg(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=W$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],a=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function r(f,b){if(f&1&&(li(0,`span`,4),tD(1),vc$1()),f&2){let p=wI();av(),Qp$1(p.placeholder)}}function c(f,b){f&1&&TI(0)}function l(f,b){if(f&1&&(li(0,`span`,11),tD(1),vc$1()),f&2){let p=wI(2);av(),Qp$1(p.triggerValue)}}function m(f,b){if(f&1&&(li(0,`span`,5),lI(1,c,1,0)(2,l,2,1,`span`,11),vc$1()),f&2){let p=wI();av(),dI(p.customTrigger?1:2)}}function u(f,b){if(f&1){let p=II();li(0,`div`,12,1),Mp$1(`keydown`,function(v){Yl$2(p);let N=wI();return Kl$2(N._handleKeydown(v))}),TI(2,1),vc$1()}if(f&2){let p=wI();GI(p.panelClass),Hp$1(`mat-select-panel-animations-enabled`,!p._animationsDisabled)(`mat-primary`,p._parentFormField?.color===`primary`)(`mat-accent`,p._parentFormField?.color===`accent`)(`mat-warn`,p._parentFormField?.color===`warn`)(`mat-undefined`,!p._parentFormField?.color),Dp$1(`id`,p.id+`-panel`)(`aria-multiselectable`,p.multiple)(`aria-label`,p.ariaLabel||null)(`aria-labelledby`,p._getPanelAriaLabelledby())}}return FE({type:n,selectors:[[`mat-select`]],contentQueries:function(b,p,y){if(b&1&&Ap$1(y,Ah,5)(y,cs$2,5)(y,ud$1,5),b&2){let v;NI(v=MI())&&(p.customTrigger=v.first),NI(v=MI())&&(p.options=v),NI(v=MI())&&(p.optionGroups=v)}},viewQuery:function(b,p){if(b&1&&Rp$1(e,5)(t,5)(dc,5),b&2){let y;NI(y=MI())&&(p.trigger=y.first),NI(y=MI())&&(p.panel=y.first),NI(y=MI())&&(p._overlayDir=y.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(b,p){b&1&&Mp$1(`keydown`,function(v){return p._handleKeydown(v)})(`focus`,function(){return p._onFocus()})(`blur`,function(){return p._onBlur()}),b&2&&(Dp$1(`id`,p.id)(`tabindex`,p.disabled?-1:p.tabIndex)(`aria-controls`,p.panelOpen?p.id+`-panel`:null)(`aria-expanded`,p.panelOpen)(`aria-label`,p.ariaLabel||null)(`aria-required`,p.required.toString())(`aria-disabled`,p.disabled.toString())(`aria-invalid`,p.errorState)(`aria-activedescendant`,p._getAriaActiveDescendant()),Hp$1(`mat-mdc-select-disabled`,p.disabled)(`mat-mdc-select-invalid`,p.errorState)(`mat-mdc-select-required`,p.required)(`mat-mdc-select-empty`,p.empty)(`mat-mdc-select-multiple`,p.multiple)(`mat-select-open`,p.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,XP],disableRipple:[2,`disableRipple`,`disableRipple`,XP],tabIndex:[2,`tabIndex`,`tabIndex`,f=>f==null?0:eF(f)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,XP],placeholder:`placeholder`,required:[2,`required`,`required`,XP],multiple:[2,`multiple`,`multiple`,XP],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,XP],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,eF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,XP]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[dD([{provide:fi,useExisting:n},{provide:dd$1,useExisting:n}]),pm],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(b,p){if(b&1&&(CI(a),li(0,`div`,2,0),Mp$1(`click`,function(){return p.open()}),li(3,`div`,3),lI(4,r,2,1,`span`,4)(5,m,3,1,`span`,5),vc$1(),li(6,`div`,6)(7,`div`,7),cu(),li(8,`svg`,8),bp$1(9,`path`,9),vc$1()()()(),gp$1(10,u,3,16,`ng-template`,10),Mp$1(`detach`,function(){return p.close()})(`backdropClick`,function(){return p.close()})(`overlayKeydown`,function(v){return p._handleOverlayKeydown(v)})),b&2){let y=xI(1);av(3),Dp$1(`id`,p._valueId),av(),dI(p.empty?4:5),av(6),wp$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,p._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,p._scrollStrategy)(`cdkConnectedOverlayOrigin`,p._preferredOverlayOrigin||y)(`cdkConnectedOverlayPositions`,p._positions)(`cdkConnectedOverlayWidth`,p._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,p._popoverLocation)}},dependencies:[oo$1,dc],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return n})();var io=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=VE({type:n});static ɵinj=Cl$2({imports:[so$1,xv,Y,Wt,ot$1,xv]})}return n})();var Dh=[`*`,[[``,`pgPaletteGenSelectorAfter`,``]]];var Rh=[`*`,`[pgPaletteGenSelectorAfter]`];function Fh(n,i){if(n&1&&(li(0,`mat-button-toggle`,1),tD(1),gD(2,`titlecase`),vc$1()),n&2){let e=i.$implicit;wp$1(`value`,e),av(),Qp$1(yD(2,2,e))}}function Ph(n,i){if(n&1&&(li(0,`mat-option`,1),tD(1),gD(2,`titlecase`),vc$1()),n&2){let e=i.$implicit;wp$1(`value`,e),av(),Qp$1(yD(2,2,e))}}function Oh(n,i){if(n&1){let e=II();li(0,`mat-form-field`,2)(1,`mat-label`),tD(2,`Palette`),vc$1(),li(3,`mat-select`,3),Yp$1(`valueChange`,function(a){Yl$2(e);let o=wI();return iD(o.service.paletteName,a)||(o.service.paletteName=a),Kl$2(a)}),hI(4,Ph,3,4,`mat-option`,1,fI),vc$1()()}if(n&2){let e=wI();av(3),Zp$1(`value`,e.service.paletteName),av(),gI(e.paletteNames)}}var ao=class n{service=b$1(We);paletteModes=Ra$1;paletteNames=rt$1;showPaletteNamesSelector=GP(!1,{transform:XP});static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-selector`]],hostAttrs:[1,`pg-palette-gen-selector`],inputs:{showPaletteNamesSelector:[1,`showPaletteNamesSelector`]},ngContentSelectors:Rh,decls:6,vars:2,consts:[[`aria-label`,`Mode`,`hideSingleSelectionIndicator`,``,3,`valueChange`,`value`],[3,`value`],[`appearance`,`outline`,1,`pg-palette-gen-selector__no-error`],[3,`valueChange`,`value`]],template:function(e,t){e&1&&(CI(Dh),TI(0),li(1,`mat-button-toggle-group`,0),Yp$1(`valueChange`,function(o){return iD(t.service.paletteMode,o)||(t.service.paletteMode=o),o}),hI(2,Fh,3,4,`mat-button-toggle`,1,fI),vc$1(),lI(4,Oh,6,1,`mat-form-field`,2),TI(5,1)),e&2&&(av(),Zp$1(`value`,t.service.paletteMode),av(),gI(t.paletteModes),av(2),dI(t.showPaletteNamesSelector()?4:-1))},dependencies:[Ba$1,Di,ii,ot$1,Ft$1,St,io,no$1,cs$2,Cs$2],styles:[`.pg-palette-gen-selector{--%NS%mat-button-toggle-shape: 4px;display:flex;gap:1rem;align-items:center;margin-bottom:1.5rem}.pg-palette-gen-selector__no-error{margin-bottom:-20px}
`],encapsulation:2})};var Lh=[`resetTemplate`];var zh=[`*`];function Bh(n,i){if(n&1&&(li(0,`mat-button-toggle`,4),tD(1),gD(2,`titlecase`),vc$1()),n&2){let e=i.$implicit;wp$1(`value`,e),av(),Qp$1(yD(2,2,e))}}function Vh(n,i){if(n&1){let e=II();li(0,`pg-palette-gen-preview`,12),Mp$1(`action`,function(){Yl$2(e);let a=wI(2);return Kl$2(a.unsetMirror())}),vc$1()}if(n&2){let e=wI(2);wp$1(`compact`,e.compact())(`formValue`,i)}}function Gh(n,i){if(n&1){let e=II();li(0,`div`,7)(1,`pg-palette-gen-preview`,10),Mp$1(`action`,function(){Yl$2(e);let a=wI();return Kl$2(a.setMirror())})(`anchorToggle`,function(a){Yl$2(e);let o=wI();return Kl$2(o.toggleAnchor(a))}),vc$1(),lI(2,Vh,1,2,`pg-palette-gen-preview`,11),vc$1()}if(n&2){let e,t=wI();av(),wp$1(`matchingConfig`,t.matchingConfig())(`compact`,t.compact())(`formValue`,t.service.formValue()()),av(),dI((e=t.formValueMirror())?2:-1,e)}}function Hh(n,i){if(n&1&&bp$1(0,`pg-palette-gen-overview`,8),n&2){let e=wI();wp$1(`compact`,e.compact())}}function jh(n,i){n&1&&(li(0,`div`,9),TI(1),vc$1())}function qh(n,i){n&1&&(li(0,`div`,13),tD(1,`Reset to default palettes?`),vc$1(),li(2,`mat-dialog-content`),tD(3,`All changes will be lost.`),vc$1(),li(4,`mat-dialog-actions`)(5,`button`,14),tD(6,`Cancel`),vc$1(),li(7,`button`,15),tD(8,`Reset`),vc$1()()),n&2&&(av(5),wp$1(`mat-dialog-close`,!1),av(2),wp$1(`mat-dialog-close`,!0))}var Sd=class n{service=b$1(We);viewList=[`palette`,`overview`,`component`];view=Oo$2(`palette`);formValueMirror=Oo$2(void 0);setMirror(){this.formValueMirror.set(this.service.formValue()())}unsetMirror(){this.formValueMirror.set(void 0)}toggleAnchor({percentage:i,color:e}){this.service.formValue().update(t=>Hl(t,i,e))}constructor(){Du(()=>{this.service.paletteName(),this.unsetMirror()})}compact=Oo$2(!1);compactAction=TD(()=>this.compact()?`Expand preview`:`Reduce preview`);toggleCompact(){this.compact.update(i=>!i)}matchingConfig=TD(()=>({name:this.service.paletteName(),mode:this.service.paletteMode()}));resetDialog=b$1(Nn$1);resetTemplate=zP.required(`resetTemplate`);openResetDialog(){this.resetDialog.open(this.resetTemplate(),{width:`420px`}).beforeClosed().subscribe(i=>!i||this.service.reset())}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-content`]],viewQuery:function(e,t){e&1&&kp$1(t.resetTemplate,Lh,5),e&2&&SI()},hostAttrs:[1,`pg-palette-gen-content`],ngContentSelectors:zh,decls:18,vars:7,consts:[[`resetTemplate`,``],[`type`,`button`,`matIconButton`,``,3,`click`,`matTooltip`,`disabled`],[1,`pg-palette-gen-content__compact-icon`],[`aria-label`,`View selector`,`hideSingleSelectionIndicator`,``,3,`valueChange`,`value`],[3,`value`],[`pgPaletteGenSelectorAfter`,``,`matIconButton`,``,`aria-label`,`Copy Sass file to clipboard`,`matTooltip`,`Copy Sass file to clipboard`,3,`click`],[`pgPaletteGenSelectorAfter`,``,`matIconButton`,``,`aria-label`,`Reset`,`matTooltip`,`Reset`,3,`click`],[1,`pg-palette-gen-content__previews`],[3,`compact`],[`pgPaletteGenRenderer`,``,1,`pg-palette-gen-content__renderer`],[3,`action`,`anchorToggle`,`matchingConfig`,`compact`,`formValue`],[`mirrorView`,``,3,`compact`,`formValue`],[`mirrorView`,``,3,`action`,`compact`,`formValue`],[`role`,`heading`,`aria-level`,`2`,`mat-dialog-title`,``],[`matButton`,`tonal`,3,`mat-dialog-close`],[`matButton`,`filled`,3,`mat-dialog-close`]],template:function(e,t){if(e&1){let a=II();CI(),li(0,`pg-palette-gen-selector`)(1,`button`,1),Mp$1(`click`,function(){return t.toggleCompact()}),li(2,`mat-icon`,2),tD(3,` keyboard_double_arrow_up `),vc$1()(),li(4,`mat-button-toggle-group`,3),Yp$1(`valueChange`,function(r){return Yl$2(a),iD(t.view,r)||(t.view=r),Kl$2(r)}),hI(5,Bh,3,4,`mat-button-toggle`,4,fI),vc$1(),li(7,`button`,5),Mp$1(`click`,function(){return t.service.sassFileToClipboard()}),li(8,`mat-icon`),tD(9,`integration_instructions`),vc$1()(),li(10,`button`,6),Mp$1(`click`,function(){return t.openResetDialog()}),li(11,`mat-icon`),tD(12,`restart_alt`),vc$1()()(),lI(13,Gh,3,4,`div`,7)(14,Hh,1,1,`pg-palette-gen-overview`,8)(15,jh,2,0,`div`,9),gp$1(16,qh,9,2,`ng-template`,null,0,ID)}if(e&2){let a;av(),wp$1(`matTooltip`,t.compactAction())(`disabled`,t.view()===`component`),Dp$1(`aria-label`,t.compactAction()),av(),Hp$1(`pg-palette-gen-content__compact-icon--active`,t.compact()),av(2),Zp$1(`value`,t.view),av(),gI(t.viewList),av(8),dI((a=t.view())===`palette`?13:a===`overview`?14:a===`component`?15:-1)}},dependencies:[Fg,Rg,Jl$1,Ba$1,Di,ii,Ua$1,ja$1,qa$1,$a$1,Wa$1,Ze$1,Ye,Ey,vc,Xa$1,Ja$1,eo$1,to$1,ao,Cs$2],styles:[`.pg-palette-gen-content__compact-icon{transition:transform ease .15s}.pg-palette-gen-content__compact-icon--active{transform:rotateX(180deg)}.pg-palette-gen-content__previews{display:flex;gap:1px}.pg-palette-gen-content__previews>*{flex-basis:50%;flex-grow:1}.pg-palette-gen-content__renderer{background:var(--%NS%mat-sys-surface);color:var(--%NS%mat-sys-on-surface);border-radius:.5rem;padding:1.5rem}
`],encapsulation:2})};function Cd(n){n||(n=b$1(le$1));let i=new N(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(pg(i))}function Nd(n,i){let t=!i?.manualCleanup?i?.injector?.get(le$1)??b$1(le$1):null,a=Wh(i?.equal),o;i?.requireSync?o=Oo$2({kind:0},{equal:a}):o=Oo$2({kind:1,value:i?.initialValue},{equal:a});let r,c=n.subscribe({next:l=>o.set({kind:1,value:l}),error:l=>{o.set({kind:2,error:l}),r?.()},complete:()=>{r?.()}});if(i?.requireSync&&o().kind===0)throw new T$1(601,!1);return r=t?.onDestroy(c.unsubscribe.bind(c)),TD(()=>{let l=o();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new T$1(601,!1)}},{equal:i?.equal})}function Wh(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}function $h(n,i){if(n&1&&(li(0,`mat-option`,7),tD(1),gD(2,`titlecase`),vc$1()),n&2){let e=i.$implicit;wp$1(`value`,e),av(),Qp$1(yD(2,2,e))}}function Uh(n,i){if(n&1){let e=II();li(0,`mat-form-field`,0)(1,`mat-label`),tD(2,`Palette`),vc$1(),li(3,`mat-select`,6),Yp$1(`valueChange`,function(a){Yl$2(e);let o=wI();return iD(o.service.paletteName,a)||(o.service.paletteName=a),Kl$2(a)}),hI(4,$h,3,4,`mat-option`,7,fI),vc$1()()}if(n&2){let e=wI();av(3),Zp$1(`value`,e.service.paletteName),av(),gI(e.paletteNames)}}function Xh(n,i){if(n&1&&(li(0,`mat-option`,12),tD(1),vc$1()),n&2){wI();let e=aD(13);wp$1(`value`,e),Dp$1(`aria-label`,e+` (not in palette)`),av(),Dc$1(` `,e,` `)}}function Kh(n,i){if(n&1&&(li(0,`mat-option`,13),tD(1),vc$1()),n&2){let e=i.$implicit,t=wI().$index,a=wI();wp$1(`value`,e)(`disabled`,e!==a.anchorTones()[t]&&a.anchorTones().includes(e)),av(),Dc$1(` `,e,` `)}}function Qh(n,i){if(n&1){let e=II();li(0,`div`,2)(1,`mat-form-field`,8)(2,`mat-label`),tD(3,`Color`),vc$1(),li(4,`input`,9),zv(),Mp$1(`blur`,function(){let a=Yl$2(e).$index,o=wI();return Kl$2(o.normalizeColor(a))}),vc$1(),li(5,`mat-error`),tD(6,`Invalid`),vc$1()(),li(7,`mat-form-field`,10)(8,`mat-label`),tD(9,`Tone`),vc$1(),li(10,`mat-select`,11),zv(),li(11,`mat-option`,7),tD(12,`Auto`),vc$1(),Jp$1(13),lI(14,Xh,2,3,`mat-option`,12),hI(15,Kh,2,3,`mat-option`,13,pI),vc$1(),li(17,`mat-error`),tD(18,`Invalid`),vc$1()(),li(19,`button`,14),Mp$1(`click`,function(){let a=Yl$2(e).$index,o=wI();return Kl$2(o.removeAnchor(a))}),li(20,`mat-icon`),tD(21,`close`),vc$1()()()}if(n&2){let e=i.$implicit,t=i.$index,a=wI();av(4),wp$1(`formControl`,e.controls.color),Zv(),av(6),wp$1(`formControl`,e.controls.tone),Zv(),av(),wp$1(`value`,null),av(2);let o=sD(a.unavailableTones()[t]);av(),dI(o!==null?14:-1),av(),gI(a.tones()),av(4),wp$1(`disabled`,a.form.controls.anchors.length===1)}}function Yh(n,i){if(n&1&&(li(0,`li`),tD(1),vc$1()),n&2){let e=i.$implicit;av(),Qp$1(e)}}function Zh(n,i){if(n&1&&(li(0,`div`,4)(1,`p`,15),tD(2,`Palette issues`),vc$1(),li(3,`ul`,16),hI(4,Yh,2,1,`li`,null,fI),vc$1()()),n&2){let e=wI();av(4),gI(e.issues())}}var Md=class n{service=b$1(We);paletteNames=rt$1;hidePaletteNamesSelector=GP(!1,{transform:XP});form=Go$1();formValue=Nd(this.form.valueChanges.pipe(yl$2(this.form.value)),{requireSync:!0});tones=TD(()=>Yn(this.formValue().neutral??!1));anchorTones=TD(()=>(this.formValue().anchors??[]).map(i=>i?.tone??null));unavailableTones=TD(()=>this.anchorTones().map(i=>Bl(i,this.tones())));issues=TD(()=>this.service.dataMap[this.service.paletteName()]().issues.map(jl));addAnchor(){Vl(this.form)}normalizeColor(i){let{color:e}=this.form.controls.anchors.at(i).controls,t=Ll(e.value);t!==e.value&&e.setValue(t)}removeAnchor(i){this.form.controls.anchors.removeAt(i)}constructor(){this.handleFormStatusChanges(),this.handleServiceFormValue()}handleFormStatusChanges(){this.form.statusChanges.pipe(Cd(),yl$2(this.form.valid?`VALID`:`INVALID`),Xt$2(i=>i===`VALID`)).subscribe(()=>{this.service.formValue().set(this.form.value)})}handleServiceFormValue(){Du(()=>{let i=this.service.formValue()();i&&!Gl(i,this.form.value)&&(Ho$1(this.form,i),this.form.updateValueAndValidity())})}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-form`]],hostAttrs:[1,`pg-palette-gen-form`],hostVars:2,hostBindings:function(e,t){e&2&&Vp$1(`--%NS%pg-palette-gen-form-control-size`,t.service.controlSize()+`px`)},inputs:{hidePaletteNamesSelector:[1,`hidePaletteNamesSelector`]},decls:11,vars:4,consts:[[`appearance`,`outline`,1,`pg-palette-gen-form__name`],[1,`pg-palette-gen-form__form`,3,`formGroup`],[1,`pg-palette-gen-form__anchor`],[`type`,`button`,`matButton`,``,3,`click`],[`role`,`alert`,1,`pg-palette-gen-form__issues`],[3,`formControl`],[3,`valueChange`,`value`],[3,`value`],[`appearance`,`outline`,1,`pg-palette-gen-form__color`],[`matInput`,``,`placeholder`,`#666666`,3,`blur`,`formControl`],[`appearance`,`outline`,`floatLabel`,`always`,1,`pg-palette-gen-form__tone`],[`placeholder`,`Auto`,3,`formControl`],[`disabled`,``,1,`pg-palette-gen-form__unavailable-tone`,3,`value`],[3,`value`,`disabled`],[`type`,`button`,`matIconButton`,``,`aria-label`,`Remove color`,`matTooltip`,`Remove color`,1,`pg-palette-gen-form__remove`,3,`click`,`disabled`],[1,`pg-palette-gen-form__issues-title`,`gbl-title-small`],[1,`pg-palette-gen-form__issues-list`,`gbl-body-small`]],template:function(e,t){e&1&&(lI(0,Uh,6,1,`mat-form-field`,0),li(1,`form`,1),hI(2,Qh,22,6,`div`,2,fI),li(4,`button`,3),Mp$1(`click`,function(){return t.addAnchor()}),li(5,`mat-icon`),tD(6,`add`),vc$1(),tD(7,` Add color `),vc$1(),lI(8,Zh,6,0,`div`,4),li(9,`mat-checkbox`,5),zv(),tD(10,`Neutral`),vc$1()()),e&2&&(dI(t.hidePaletteNamesSelector()?-1:0),av(),wp$1(`formGroup`,t.form),av(),gI(t.form.controls.anchors.controls),av(6),dI(t.issues().length?8:-1),av(),wp$1(`formControl`,t.form.controls.neutral),Zv())},dependencies:[Wy,Gy,Ua$2,Uy,Hy,ad$1,od$1,Fg,Rg,Jl$1,aa$1,hi,ot$1,Ft$1,St,gn$1,Ze$1,Ye,Kn,Xn,io,no$1,cs$2,Ey,vc,Cs$2],styles:[`.pg-palette-gen-form{display:block;width:var(--%NS%pg-palette-gen-form-control-size)}.pg-palette-gen-form__name{width:100%;margin-bottom:calc(1.5rem - 20px)}.pg-palette-gen-form__form{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem;margin-bottom:1.5rem}.pg-palette-gen-form__anchor{display:flex;gap:.5rem;width:100%}.pg-palette-gen-form__color,.pg-palette-gen-form__tone{margin:0 0 -20px!important}.pg-palette-gen-form__color{flex:1 1 auto;min-width:0}.pg-palette-gen-form__tone{flex:0 0 6.5rem}.pg-palette-gen-form__unavailable-tone{text-decoration:line-through}.pg-palette-gen-form__remove{flex-shrink:0;margin-top:.25rem}.pg-palette-gen-form__issues{width:100%;box-sizing:border-box;padding:.75rem;border-radius:var(--%NS%mat-sys-corner-small);background-color:var(--%NS%mat-sys-error-container);color:var(--%NS%mat-sys-on-error-container)}.pg-palette-gen-form__issues-title{margin:0 0 .25rem}.pg-palette-gen-form__issues-list{margin:0;padding-left:1.25rem}
`],encapsulation:2})};var Id=n=>{let e=(n??``).split(`
`).filter(t=>t.includes(`{`)).map(t=>t.replace(`//`,``).trim()).map(pa$1).filter(t=>t!==null);switch(e.length){case 6:return{type:`formValueMap`,data:{primary:e[0],secondary:e[1],tertiary:e[2],neutral:e[3],"neutral-variant":e[4],error:e[5]}};case 1:return{type:`formValue`,data:e[0]};default:return null}};var Jh=[`importTemplate`];function eu(n,i){if(n&1){let e=II();li(0,`div`,3),tD(1,`Settings`),vc$1(),li(2,`mat-dialog-content`)(3,`mat-form-field`,4)(4,`mat-label`),tD(5,`Sass file`),vc$1(),li(6,`textarea`,5,1),zv(),Mp$1(`focus`,function(){Yl$2(e);let a=xI(7);return Kl$2(a.select())}),vc$1(),li(8,`mat-error`),tD(9,`Invalid settings`),vc$1()()(),li(10,`mat-dialog-actions`)(11,`button`,6),tD(12,`Close`),vc$1(),li(13,`button`,7),Mp$1(`click`,function(){Yl$2(e);let a=wI();return Kl$2(a.import())}),tD(14,`Import`),vc$1()()}if(n&2){let e=wI();av(6),wp$1(`formControl`,e.importCtrl),Zv(),av(7),wp$1(`disabled`,!e.importCtrl.value)}}var Td=class n{service=b$1(We);importDialog;dialog=b$1(Nn$1);importTemplate=zP.required(`importTemplate`);importCtrl=new ed$1(``);openDialog(){this.importDialog=this.dialog.open(this.importTemplate(),{width:`calc(100% - 3rem)`,maxWidth:`960px`})}import(){let i=Id(this.importCtrl.value);if(i===null){this.importCtrl.setErrors({import:!0});return}let e;switch(i.type){case`formValueMap`:Object.entries(i.data).forEach(([t,a])=>{this.service.formValueMap[t].set(a)}),e=Object.values(i.data).map(t=>JSON.stringify(t)).join(`
`);break;case`formValue`:this.service.formValue().set(i.data),e=JSON.stringify(i.data)}this.importCtrl.setValue(e),this.importDialog?.close()}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-import`]],viewQuery:function(e,t){e&1&&kp$1(t.importTemplate,Jh,5),e&2&&SI()},decls:6,vars:0,consts:[[`importTemplate`,``],[`importElement`,``],[`type`,`button`,`matButton`,``,3,`click`],[`role`,`heading`,`aria-level`,`2`,`mat-dialog-title`,``],[`appearance`,`outline`,2,`margin-top`,`0.25rem`,`width`,`100%`],[`rows`,`3`,`cdkTextareaAutosize`,``,`cdkAutosizeMaxRows`,`14`,`matInput`,``,3,`focus`,`formControl`],[`matButton`,`tonal`,`mat-dialog-close`,``],[`matButton`,`filled`,3,`click`,`disabled`]],template:function(e,t){e&1&&(li(0,`button`,2),Mp$1(`click`,function(){return t.openDialog()}),li(1,`mat-icon`),tD(2,`settings`),vc$1(),tD(3,` Import settings
`),vc$1(),gp$1(4,eu,15,2,`ng-template`,null,0,ID))},dependencies:[Wy,Ua$2,Uy,ad$1,Fg,Rg,Ua$1,ja$1,qa$1,$a$1,Wa$1,ot$1,Ft$1,St,gn$1,Ze$1,Ye,Kn,Xn,fl$1],encapsulation:2})};var Ed=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-logo`]],hostAttrs:[1,`pg-palette-gen-logo`],decls:7,vars:0,consts:[[`aria-label`,`Angular Material Palette Generator`,`matTooltip`,`Open on GitHub`,`href`,`https://github.com/avine/angular-material-palette-generator`,`target`,`_blank`,1,`pg-palette-gen-logo__link`],[1,`pg-palette-gen-logo__icon`],[1,`pg-palette-gen-logo__text`]],template:function(e,t){e&1&&(li(0,`a`,0)(1,`mat-icon`,1),tD(2,`palette`),vc$1(),li(3,`span`,2),tD(4,` Angular Material`),bp$1(5,`br`),tD(6,` Palette Generator `),vc$1()())},dependencies:[Ze$1,Ye,Ey,vc],styles:[`.pg-palette-gen-logo__link{display:flex;gap:.5rem;justify-content:center;align-items:center;color:inherit;text-decoration:none;text-wrap:balance;font:var(--%NS%mat-sys-label-medium);letter-spacing:var(--%NS%mat-sys-label-medium-tracking)}.pg-palette-gen-logo__icon{flex-shrink:0;width:auto!important;height:auto!important;font-size:1.75rem;color:var(--%NS%mat-sys-primary)}@media(width<840px){.pg-palette-gen-logo__link{line-height:0}.pg-palette-gen-logo__text{display:none}}
`],encapsulation:2})};function tu(n,i){if(n&1){let e=II();li(0,`button`,2),Mp$1(`click`,function(){Yl$2(e);let a=wI();return Kl$2(a.removeSelectedSnapshot())}),li(1,`mat-icon`),tD(2,`delete`),vc$1()()}}function nu(n,i){if(n&1){let e=II();li(0,`button`,3),Mp$1(`click`,function(){Yl$2(e);let a=wI();return Kl$2(a.takeSnapshot())}),li(1,`mat-icon`),tD(2),vc$1()()}if(n&2){let e=wI(),t=aD(0);wp$1(`disabled`,e.disabled()||t),av(2),Qp$1(t?`no_photography`:`add_a_photo`)}}function iu(n,i){if(n&1){let e=II();li(0,`button`,6),Mp$1(`click`,function(){Yl$2(e);let a=wI().$implicit,o=wI();return Kl$2(o.selectSnapshot(a.value))}),tD(1),vc$1()}if(n&2){let e=wI().$implicit;av(),Qp$1(e.id)}}function au(n,i){if(n&1){let e=II();li(0,`button`,7),Mp$1(`click`,function(){Yl$2(e);let a=wI().$implicit,o=wI();return Kl$2(o.selectSnapshot(a.value))}),tD(1),vc$1()}if(n&2){let e=wI().$implicit;av(),Qp$1(e.id)}}function ou(n,i){if(n&1&&lI(0,iu,2,1,`button`,4)(1,au,2,1,`button`,5),n&2){let e=i.$implicit,t=wI();dI(e.value===t.formValueSnapshot()?0:1)}}var Ad=class n{service=b$1(We);maxSnapshots=GP(5);disabled=GP(!1);formValueSnapshot=TD(()=>JSON.stringify(this.service.formValue()()));snapshots=TD(()=>this.service.formValueSnapshotsMap[this.service.paletteName()]);takeSnapshot(){this.snapshots().update(i=>[...i,{id:this.nextSnapshotId,value:this.formValueSnapshot()}])}hasSelectedSnapshot=TD(()=>this.snapshots()().some(({value:i})=>i===this.formValueSnapshot()));removeSelectedSnapshot(){this.snapshots().update(i=>i.filter(({value:e})=>e!==this.formValueSnapshot()))}selectSnapshot(i){this.service.formValue().set(JSON.parse(i))}get nextSnapshotId(){let i=this.snapshots()();return i.length===0?1:i[i.length-1].id+1}static ɵfac=function(e){return new(e||n)};static ɵcmp=FE({type:n,selectors:[[`pg-palette-gen-snapshots`]],hostAttrs:[1,`pg-palette-gen-snapshots`],inputs:{maxSnapshots:[1,`maxSnapshots`],disabled:[1,`disabled`]},decls:5,vars:2,consts:[[`type`,`button`,`aria-label`,`Remove selected snapshot`,`matTooltip`,`Remove selected snapshot`,`matTooltipPosition`,`above`,`matIconButton`,``],[`type`,`button`,`aria-label`,`Take a snapshot`,`matTooltip`,`Take a snapshot`,`matTooltipPosition`,`above`,`matIconButton`,``,3,`disabled`],[`type`,`button`,`aria-label`,`Remove selected snapshot`,`matTooltip`,`Remove selected snapshot`,`matTooltipPosition`,`above`,`matIconButton`,``,3,`click`],[`type`,`button`,`aria-label`,`Take a snapshot`,`matTooltip`,`Take a snapshot`,`matTooltipPosition`,`above`,`matIconButton`,``,3,`click`,`disabled`],[`type`,`button`,`matButton`,`filled`],[`type`,`button`,`matButton`,``],[`type`,`button`,`matButton`,`filled`,3,`click`],[`type`,`button`,`matButton`,``,3,`click`]],template:function(e,t){e&1&&(Jp$1(0),lI(1,tu,3,0,`button`,0)(2,nu,3,2,`button`,1),hI(3,ou,2,1,null,null,fI)),e&2&&(sD(t.snapshots()().length>=t.maxSnapshots()),av(),dI(t.hasSelectedSnapshot()?1:2),av(2),gI(t.snapshots()()))},dependencies:[Fg,Rg,Jl$1,Ze$1,Ye,Ey,vc],styles:[`.pg-palette-gen-snapshots{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}
`],encapsulation:2})};function f(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)a!==`__proto__`&&(e[a]=n[a])}return e}var y={read:function(e){return e[0]===`"`&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function d(e,r){function n(o,p,t){if(!(typeof document>`u`)){t=f({},r,t),typeof t.expires==`number`&&(t.expires=new Date(Date.now()+t.expires*864e5)),t.expires&&(t.expires=t.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i=``;for(var c in t)t[c]&&(i+=`; `+c,t[c]!==!0&&(i+=`=`+t[c].split(`;`)[0]));return document.cookie=o+`=`+e.write(p,o)+i}}function a(o){if(!(typeof document>`u`||arguments.length&&!o)){for(var p=document.cookie?document.cookie.split(`; `):[],t={},i=0;i<p.length;i++){var c=p[i].split(`=`),_=c.slice(1).join(`=`);try{var s=decodeURIComponent(c[0]);if(s in t||(t[s]=e.read(_,s)),o===s)break}catch{}}return o?t[o]:t}}return Object.create({set:n,get:a,remove:function(o,p){n(o,``,f({},p,{expires:-1}))},withAttributes:function(o){return d(this.converter,f({},this.attributes,o))},withConverter:function(o){return d(f({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}var u=d(y,{path:`/`});var l=`app-theme`;var h=class e{renderer=b$1(hr$3).createRenderer(null,null);document=b$1(or$2);_theme=Oo$2(this.getStorage()??this.getDefault());theme=this._theme.asReadonly();constructor(){Du(()=>{let r=this._theme();this.applyTheme(r),this.setStorage(r)})}switch(r){this._theme.update(n=>r??n===`light`?`dark`:`light`)}applyTheme(r){this.renderer[r===`light`?`removeClass`:`addClass`](this.document.body,`gbl-theme-dark`)}getStorage(){return u.get(l)}setStorage(r){u.set(l,r)}getDefault(){return this.document.defaultView?.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}static ɵfac=function(n){return new(n||e)};static ɵprov=ue$1({token:e,factory:e.ɵfac,providedIn:`root`})};var A=()=>GE(()=>{b$1(h)});var p=`primary`;var jt=Symbol(`RouteTitle`);var hr=class{params;constructor(r){this.params=r||{}}has(r){return Object.hasOwn(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function je(t){return new hr(t)}function sr(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],a=r[n];if(i[0]===`:`)e[i.substring(1)]=a;else if(i!==a.path)return!1}return!0}function da(t,r,e){let n=e.path.split(`/`),i=n.indexOf(`**`);if(i===-1){if(n.length>t.length||e.pathMatch===`full`&&(r.hasChildren()||n.length<t.length))return null;let s={},d=t.slice(0,n.length);return sr(n,d,s)?{consumed:d,posParams:s}:null}if(i!==n.lastIndexOf(`**`))return null;let a=n.slice(0,i),o=n.slice(i+1);if(a.length+o.length>t.length||e.pathMatch===`full`&&r.hasChildren()&&e.path!==`**`)return null;let l={};return!sr(a,t.slice(0,a.length),l)||!sr(o,t.slice(t.length-o.length),l)?null:{consumed:t,posParams:l}}function fn(t){return new Promise((r,e)=>{t.pipe(cg()).subscribe({next:n=>r(n),error:n=>e(n)})})}function fo(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!ce(t[e],r[e]))return!1;return!0}function ce(t,r){let e=t?pr(t):void 0,n=r?pr(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let a=0;a<e.length;a++)if(i=e[a],!ua(t[i],r[i]))return!1;return!0}function pr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ua(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,a)=>n[a]===i)}else return t===r}function go(t){return t.length>0?t[t.length-1]:null}function Ft(t){return Bh$1(t)?t:hc$1(t)?Te(Promise.resolve(t)):Vh$1(t)}function ha(t){return Bh$1(t)?fn(t):Promise.resolve(t)}var vo={exact:fa,subset:ga};var pa={exact:yo,subset:bo,ignored:()=>!0};var ma={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var gn={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function mr(t,r,e){let n=G(G({},gn),e||{});return vo[n.paths](t.root,r.root,n.matrixParams)&&pa[n.queryParams](t.queryParams,r.queryParams)&&!(n.fragment===`exact`&&t.fragment!==r.fragment)}function yo(t,r){return ce(t,r)}function fa(t,r,e){if(!Le(t.segments,r.segments)||!hn(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!fa(t.children[n],r.children[n],e))return!1;return!0}function bo(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>ua(t[e],r[e]))}function ga(t,r,e){return va(t,r,r.segments,e)}function va(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Le(i,e)||r.hasChildren()||!hn(i,e,n))}else if(t.segments.length===e.length){if(!Le(t.segments,e)||!hn(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!ga(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),a=e.slice(t.segments.length);return!Le(t.segments,i)||!hn(t.segments,i,n)||!t.children[p]?!1:va(t.children[p],r,a,n)}}function hn(t,r,e){return r.every((n,i)=>pa[e](t[i].parameters,n.parameters))}var V=class{root;queryParams;fragment;_queryParamMap;constructor(r=new b([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=je(this.queryParams),this._queryParamMap}toString(){return So.serialize(this)}};var b=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return pn(this)}};var Re=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=je(this.parameters),this._parameterMap}toString(){return ba(this)}};function _o(t,r){return Le(t,r)&&t.every((e,n)=>ce(e.parameters,r[n].parameters))}function Le(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function wo(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===p&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==p&&(e=e.concat(r(i,n)))}),e}var it=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:()=>new xe})}return t})();var xe=class{parse(r){let e=new gr(r);return new V(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Ke(r.root,!0)}`;Co(e)&&(e=`/`);let n=Io(r.queryParams),i=typeof r.fragment==`string`?`#${Ro(r.fragment)}`:``;return`${e}${n}${i}`}};var ra=`http://fake`;function Co(t){try{let r=new URL(t,ra);return r.origin!==ra||r.pathname.startsWith(`//`)}catch{return!0}}var So=new xe;function pn(t){return t.segments.map(r=>ba(r)).join(`/`)}function Ke(t,r){if(!t.hasChildren())return pn(t);if(r){let e=t.children[p]?Ke(t.children[p],!1):``,n=[];return Object.entries(t.children).forEach(([i,a])=>{i!==p&&n.push(`${i}:${Ke(a,!1)}`)}),n.length>0?`${e}(${n.join(`//`)})`:e}else{if(Object.keys(t.children).length===1&&t.children[p]!=null)return`${pn(t)}/${Ke(t.children[p],!1)}`;let e=wo(t,(n,i)=>i===p?[Mo(Ke(t.children[p],!1))]:[`${i}:${Ke(n,!1)}`]);return`${pn(t)}/(${e.join(`//`)})`}}function Mo(t){return t.replace(_a,r=>r.replace(/:/g,`%3A`))}function ya(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function dn(t){return ya(t).replace(/%3B/gi,`;`)}function Ro(t){return encodeURI(t)}function fr(t){return ya(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function mn(t){return decodeURIComponent(t)}function ia(t){return mn(t.replace(/\+/g,`%20`))}function ba(t){return`${fr(t.path)}${xo(t.parameters)}`}function xo(t){return Object.entries(t).map(([r,e])=>`;${fr(r)}=${fr(e)}`).join(``)}function Io(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${dn(e)}=${dn(i)}`).join(`&`):`${dn(e)}=${dn(n)}`).filter(e=>e);return r.length?`?${r.join(`&`)}`:``}var lr=1073741824;function vn(t,r,e){Number(r)>=32&&!Object.hasOwn(t,lr)&&(t[lr]=e,delete t[lr]),t[r]=e}var _a=/^[^\/()?;#]+/;function cr(t){let r=t.match(_a);return r?r[0]:``}var Do=/^[^\/()?;=#]+/;function Eo(t){let r=t.match(Do);return r?r[0]:``}var To=/^[^=?&#]+/;function ko(t){let r=t.match(To);return r?r[0]:``}var No=/^[^&#]+/;function Ao(t){let r=t.match(No);return r?r[0]:``}var gr=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new b([],{}):new b([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional(`?`))do this.parseQueryParam(r);while(this.consumeOptional(`&`));return r}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new T$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let n={};this.peekStartsWith(`/(`)&&(this.capture(`/`),n=this.parseParens(!0,r));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[p]=new b(e,n)),i}parseSegment(){let r=cr(this.remaining);if(r===``&&this.peekStartsWith(`;`))throw new T$1(4009,!1);return this.capture(r),new Re(mn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(`;`);)this.parseParam(r);return r}parseParam(r){let e=Eo(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let i=cr(this.remaining);i&&(n=i,this.capture(n))}vn(r,mn(e),mn(n))}parseQueryParam(r){let e=ko(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let o=Ao(this.remaining);o&&(n=o,this.capture(n))}let i=ia(e),a=ia(n);if(Object.hasOwn(r,i)){let o=r[i];Array.isArray(o)||(o=[o],r[i]=o),o.push(a)}else r[i]=a}parseParens(r,e){let n=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=cr(this.remaining),a=this.remaining[i.length];if(a!==`/`&&a!==`)`&&a!==`;`)throw new T$1(4010,!1);let o;i.indexOf(`:`)>-1?(o=i.slice(0,i.indexOf(`:`)),this.capture(o),this.capture(`:`)):r&&(o=p);let l=this.parseChildren(e+1),s=Object.keys(l).length===1&&l[p]?l[p]:new b([],l);vn(n,o??p,s),this.consumeOptional(`//`)}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new T$1(4011,!1)}};function wa(t){return t.segments.length>0?new b([],{[p]:t}):t}function Ca(t){let r=Object.create(null);for(let[n,i]of Object.entries(t.children)){let a=Ca(i);if(n===p&&a.segments.length===0&&a.hasChildren())for(let[o,l]of Object.entries(a.children))vn(r,o,l);else(a.segments.length>0||a.hasChildren())&&vn(r,n,a)}return Po(new b(t.segments,r))}function Po(t){if(t.numberOfChildren===1&&t.children[p]){let r=t.children[p];return new b(t.segments.concat(r.segments),r.children)}return t}function Ie(t){return t instanceof V}function Sa(t,r,e=null,n=null,i=new xe){return Ra(Ma(t),r,e,n,i)}function Ma(t){let r;function e(a){let o={};for(let s of a.children){let d=e(s);o[s.outlet]=d}let l=new b(a.url,o);return a===t&&(r=l),l}let i=wa(e(t.root));return r??i}function Ra(t,r,e,n,i){let a=t;for(;a.parent;)a=a.parent;if(r.length===0)return dr(a,a,a,e,n,i);let o=Oo(r);if(o.toRoot())return dr(a,a,new b([],{}),e,n,i);let l=Uo(o,a,t),s=l.processChildren?xt(l.segmentGroup,l.index,o.commands):Ia(l.segmentGroup,l.index,o.commands);return dr(a,l.segmentGroup,s,e,n,i)}function yn(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Tt(t){return typeof t==`object`&&t!=null&&t.outlets}function aa(t,r,e){t||=`ɵ`;let n=new V;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function dr(t,r,e,n,i,a){let o={};for(let[d,u]of Object.entries(n??{}))u!=null&&(o[d]=Array.isArray(u)?u.map(g=>aa(d,g,a)):aa(d,u,a));let l;t===r?l=e:l=xa(t,r,e);return new V(wa(Ca(l)),o,i)}function xa(t,r,e){let n=Object.create(null);return Object.entries(t.children).forEach(([i,a])=>{a===r?n[i]=e:n[i]=xa(a,r,e)}),new b(t.segments,n)}var bn=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&yn(n[0]))throw new T$1(4003,!1);let i=n.find(Tt);if(i&&i!==go(n))throw new T$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Oo(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new bn(!0,0,t);let r=0,e=!1,n=t.reduce((i,a,o)=>{if(typeof a==`object`&&a!=null){if(a.outlets){let l={};return Object.entries(a.outlets).forEach(([s,d])=>{l[s]=typeof d==`string`?d.split(`/`):d}),[...i,{outlets:l}]}if(a.segmentPath)return[...i,a.segmentPath]}return typeof a!=`string`?[...i,a]:o===0?(a.split(`/`).forEach((l,s)=>{s==0&&l===`.`||(s==0&&l===``?e=!0:l===`..`?r++:l!=``&&i.push(l))}),i):[...i,a]},[]);return new bn(e,r,n)}var Xe=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function Uo(t,r,e){if(t.isAbsolute)return new Xe(r,!0,0);if(!e)return new Xe(r,!1,NaN);if(e.parent===null)return new Xe(e,!0,0);let n=yn(t.commands[0])?0:1;return Lo(e,e.segments.length-1+n,t.numberOfDoubleDots)}function Lo(t,r,e){let n=t,i=r,a=e;for(;a>i;){if(a-=i,n=n.parent,!n)throw new T$1(4005,!1);i=n.segments.length}return new Xe(n,!1,i-a)}function jo(t){return Tt(t[0])?t[0].outlets:{[p]:t}}function Ia(t,r,e){if(t??=new b([],{}),t.segments.length===0&&t.hasChildren())return xt(t,r,e);let n=Fo(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let a=new b(t.segments.slice(0,n.pathIndex),{});return a.children[p]=new b(t.segments.slice(n.pathIndex),t.children),xt(a,0,i)}else return n.match&&i.length===0?new b(t.segments,{}):n.match&&!t.hasChildren()?vr(t,r,e):n.match?xt(t,0,i):vr(t,r,e)}function xt(t,r,e){if(e.length===0)return new b(t.segments,{});{let n=jo(e),i=Object.create(null);if(Object.keys(n).some(a=>a!==p)&&t.children[p]&&t.numberOfChildren===1&&t.children[p].segments.length===0){let a=xt(t.children[p],r,e);return new b(t.segments,a.children)}return Object.entries(n).forEach(([a,o])=>{typeof o==`string`&&(o=[o]),o!==null&&(i[a]=Ia(t.children[a],r,o))}),Object.entries(t.children).forEach(([a,o])=>{n[a]===void 0&&(i[a]=o)}),new b(t.segments,i)}}function Fo(t,r,e){let n=0,i=r,a={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return a;let o=t.segments[i],l=e[n];if(Tt(l))break;let s=`${l}`,d=n<e.length-1?e[n+1]:null;if(i>0&&s===void 0)break;if(s&&d&&typeof d==`object`&&d.outlets===void 0){if(!sa(s,d,o))return a;n+=2}else{if(!sa(s,{},o))return a;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function vr(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let a=e[i];if(Tt(a))return new b(n,Bo(a.outlets));if(i===0&&yn(e[0])){let s=t.segments[r];n.push(new Re(s.path,oa(e[0]))),i++;continue}let o=Tt(a)?a.outlets[p]:`${a}`,l=i<e.length-1?e[i+1]:null;o&&l&&yn(l)?(n.push(new Re(o,oa(l))),i+=2):(n.push(new Re(o,{})),i++)}return new b(n,{})}function Bo(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n==`string`&&(n=[n]),n!==null&&(r[e]=vr(new b([],{}),0,n))}),r}function oa(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function sa(t,r,e){return t==e.path&&ce(r,e.parameters)}var _n=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Fe(this.rootInjector)}resetChildren(){this.children=new Fe(this.rootInjector)}};var Fe=(()=>{class t{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=/* @__PURE__ */ new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new _n(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(n){return new(n||t)(Ne$1(me))};static ɵprov=ue$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var wn=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=yr(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=yr(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=br(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return br(r,this._root).map(e=>e.value)}};function yr(t,r){if(t===r.value)return r;for(let e of r.children){let n=yr(t,e);if(n)return n}return null}function br(t,r){if(t===r.value)return[r];for(let e of r.children){let n=br(t,e);if(n.length)return n.unshift(r),n}return[]}var U=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ze(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var kt=class extends wn{snapshot;constructor(r,e){super(r),this.snapshot=e,Tr(this,r)}toString(){return this.snapshot.toString()}};function Da(t,r){let e=zo(t,r),n=new On$2([new Re(``,{})]),i=new On$2({}),a=new On$2({}),s=new _e(n,i,new On$2({}),new On$2(``),a,p,t,e.root);return s.snapshot=e.root,new kt(new U(s,[]),e)}function zo(t,r){return new Nt(``,new U(new et([],{},{},``,{},p,t,null,{},r),[]))}var _e=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(r,e,n,i,a,o,l,s){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=a,this.outlet=o,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(_e$1(d=>d[jt]))??Vh$1(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(_e$1(r=>je(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(_e$1(r=>je(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(r){this._futureSnapshot=r,this.pending?.set(!0)}};var $o=`always`;function Er(t,r,e){let n,{routeConfig:i}=t;return r!==null&&(e===`always`||i?.path===``||!r.component&&!r.routeConfig?.loadComponent)?n={params:Object.keys(t.params).length===0?r.params:Object.freeze(G(G({},r.params),t.params)),data:Object.freeze(G(G({},r.data),t.data)),resolve:G(G(G(G({},t.data),r.data),i?.data),t._resolvedData)}:n={params:Object.freeze(G({},t.params)),data:Object.freeze(G({},t.data)),resolve:G(G({},t.data),t._resolvedData??{})},i&&Ta(i)&&(n.resolve[jt]=i.title),n}var et=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[jt]}constructor(r,e,n,i,a,o,l,s,d,u){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=a,this.outlet=o,this.component=l,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=je(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=je(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Nt=class extends wn{url;constructor(r,e){super(e),this.url=r,Tr(this,e)}toString(){return Ea(this._root)}};function Tr(t,r){r.value._routerState=t,r.children.forEach(e=>Tr(t,e))}function Ea(t){let r=t.children.length>0?` { ${t.children.map(Ea).join(`, `)} } `:``;return`${t.value}${r}`}function ur(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ce(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ce(r.params,e.params)||t.paramsSubject.next(e.params),fo(r.url,e.url)||t.urlSubject.next(e.url),ce(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function _r(t,r){let e=ce(t.params,r.params)&&_o(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||_r(t.parent,r.parent))}function Ta(t){return typeof t.title==`string`||t.title===null}var ka=new x(``);var $e=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=p;activateEvents=new je$2;deactivateEvents=new je$2;attachEvents=new je$2;detachEvents=new je$2;routerOutletData=GP();parentContexts=b$1(Fe);location=b$1(Ii$2);changeDetector=b$1(KP);inputBinder=b$1(Pn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new T$1(4013,!1);this._activatedRoute=e;let i=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new wr(e,l,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:s,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(n){return new(n||t)};static ɵdir=$E({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[pm]})}return t})();var wr=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===_e?this.route:r===Fe?this.childContexts:r===ka?this.outletData:this.parent.get(r,e)}};var Pn=new x(``);var kr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=FE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(n,i){n&1&&bp$1(0,`router-outlet`)},dependencies:[$e],encapsulation:2,changeDetection:1})}return t})();function Nr(t){let r=t.children&&t.children.map(Nr),e=r?q$1(G({},t),{children:r}):G({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==p&&(e.component=kr),e}var It=`imperative`;var T=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(T||{});var q=class{id;url;constructor(r,e){this.id=r,this.url=e}};var Be=class extends q{type=T.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n=`imperative`,i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var ue=class extends q{urlAfterRedirects;type=T.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var k=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(k||{});var At=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(At||{});var Z=class extends q{reason;code;type=T.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Na(t){return t instanceof Z&&(t.code===k.Redirect||t.code===k.SupersededByNewNavigation)}var we=class extends q{reason;code;type=T.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}};var ze=class extends q{error;target;type=T.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Pt=class extends q{urlAfterRedirects;state;type=T.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Cn=class extends q{urlAfterRedirects;state;type=T.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Sn=class extends q{urlAfterRedirects;state;shouldActivate;type=T.GuardsCheckEnd;constructor(r,e,n,i,a){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Mn=class extends q{urlAfterRedirects;state;type=T.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Rn=class extends q{urlAfterRedirects;state;type=T.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var xn=class{route;type=T.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var In=class{route;type=T.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Dn=class{snapshot;type=T.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var En=class{snapshot;type=T.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Tn=class{snapshot;type=T.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var kn=class{snapshot;type=T.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var tt=class{};var Ot=class{};var nt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Ho(t){return!(t instanceof tt)&&!(t instanceof nt)&&!(t instanceof Ot)}function Vo(t,r,e){let n=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:n,state:new kt(Ut(t,r._root,e?e._root:void 0,n),r)}}function Ut(t,r,e,n){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let i=e.value;i._setPending(r.value);return new U(i,qo(t,r,e,n))}else{if(t.shouldAttach(r.value)){let o=t.retrieve(r.value);if(o!==null){let l=o.route;return l.value._setPending(r.value),l.children=r.children.map(s=>Ut(t,s,void 0,n)),l}}let i=Go(r.value);i._setPending(r.value),n.add(i);return new U(i,r.children.map(o=>Ut(t,o,void 0,n)))}}function qo(t,r,e,n){return r.children.map(i=>{for(let a of e.children)if(t.shouldReuseRoute(i.value,a.value.snapshot))return Ut(t,i,a,n);return Ut(t,i,void 0,n)})}function Go(t){return new _e(new On$2(t.url),new On$2(t.params),new On$2(t.queryParams),new On$2(t.fragment),new On$2(t.data),t.outlet,t.component,t)}var De=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(r,e){super(),this.redirectTo=r,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Aa=`ngNavigationCancelingError`;function Dt(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=Ie(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=Pa(!1,k.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function Pa(t,r){let e=/* @__PURE__ */ new Error(`NavigationCancelingError: ${t||``}`);return e[Aa]=!0,e.cancellationCode=r,e}function Wo(t){return Oa(t)&&Ie(t.url)}function Oa(t){return!!t&&t[Aa]}var Cr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,a){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=a}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),ur(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=Ze(e);r.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,i[o],n),delete i[o]}),Object.values(i).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(r,e,n){let i=r.value,a=e?e.value:null;if(i===a)if(i.component){let o=n.getContext(i.outlet);o&&this.deactivateChildRoutes(r,e,o.children)}else this.deactivateChildRoutes(r,e,n);else a&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,a=Ze(r);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,i);if(n&&n.outlet){let o=n.outlet.detach(),l=n.children.contexts;n.resetChildren(),this.routeReuseStrategy.store(r.value.snapshot,{componentRef:o,route:r,contexts:l})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,a=Ze(r);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),r.value._localInjector?.destroy()}activateChildRoutes(r,e,n){let i=Ze(e);r.children.forEach(a=>{this.activateRoutes(a,i[a.value.outlet],n),this.forwardEvent(new kn(a.value.snapshot))}),r.children.length&&this.forwardEvent(new En(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,a=e?e.value:null;if(ur(i),i===a)if(i.component){let o=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,o.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let o=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let l=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),ur(l.route.value),this.activateChildRoutes(r,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(r,null,o.children)}else this.activateChildRoutes(r,null,n)}};var Nn=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}};var Je=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Qo(t,r,e){let n=t._root;return Rt(n,r?r._root:null,e,[n.value])}function Yo(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function at(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t==`function`&&!vg(t)?t:r.get(t):n}function Rt(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=Ze(r);return t.children.forEach(o=>{Ko(o,a[o.value.outlet],e,n.concat([o.value]),i),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,l])=>Et(l,e.getContext(o),e,i)),i}function Ko(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,o=r?r.value:null,l=e?e.getContext(t.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let s=Zo(o,a,a.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new Nn(n)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Rt(t,r,l?l.children:null,n,i):Rt(t,r,e,n,i),s&&l&&l.outlet&&l.outlet.isActivated&&i.canDeactivateChecks.push(new Je(l.outlet.component,o))}else o&&Et(r,l,e,i),i.canActivateChecks.push(new Nn(n)),a.component?Rt(t,null,l?l.children:null,n,i):Rt(t,null,e,n,i);return i}function Zo(t,r,e){if(typeof e==`function`)return Eo$2(r._environmentInjector,()=>e(t,r));switch(e){case`pathParamsChange`:return!Le(t.url,r.url);case`pathParamsOrQueryParamsChange`:return!Le(t.url,r.url)||!ce(t.queryParams,r.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!_r(t,r)||!ce(t.queryParams,r.queryParams);default:return!_r(t,r)}}function Et(t,r,e,n){let i=Ze(t),a=t.value;Object.entries(i).forEach(([o,l])=>{a.component?r?Et(l,r.children.getContext(o),r.children,n):Et(l,null,null,n):Et(l,e?e.getContext(o):null,e,n)}),a.component?r&&r.outlet&&r.outlet.isActivated?n.canDeactivateChecks.push(new Je(r.outlet.component,a)):n.canDeactivateChecks.push(new Je(null,a)):n.canDeactivateChecks.push(new Je(null,a))}function Bt(t){return typeof t==`function`}function Xo(t){return typeof t==`boolean`}function Jo(t){return t&&Bt(t.canLoad)}function es(t){return t&&Bt(t.canActivate)}function ts(t){return t&&Bt(t.canActivateChild)}function ns(t){return t&&Bt(t.canDeactivate)}function rs(t){return t&&Bt(t.canMatch)}function Ua(t){return t instanceof Fn$2||t?.name===`EmptyError`}var un=Symbol(`INITIAL_VALUE`);function rt(){return fg(t=>Zh$1(t.map(r=>r.pipe(en$1(1),fl$3(e=>{if(e instanceof De)return Vh$1(e);throw e}),yl$2(un)))).pipe(_e$1(r=>{for(let e of r)if(e!==!0){if(e===un)return un;if(e===!1||is(e))return e}return!0}),Xt$2(r=>r!==un),en$1(1)))}function is(t){return Ie(t)||t instanceof De}function La(t){return new N(r=>{if(t.aborted){r.next(),r.complete();return}let e=()=>{r.next(),r.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function ja(t){return pg(La(t))}function as(t){return Fe$1(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:a}}=r;return a.length===0&&i.length===0?Vh$1(q$1(G({},r),{guardsResult:!0})):os(a,e,n).pipe(Fe$1(o=>o&&Xo(o)?ss(e,i,t):Vh$1(o)),_e$1(o=>q$1(G({},r),{guardsResult:o})))})}function os(t,r,e){return Te(t).pipe(Fe$1(n=>hs(n.component,n.route,e,r)),cg(n=>n!==!0,!0))}function ss(t,r,e){return Te(r).pipe(tg(n=>Jt$1(cs(n.route.parent,e),ls(n.route,e),us(t,n.path),ds(t,n.route))),cg(n=>n!==!0,!0))}function ls(t,r){return t!==null&&r&&r(new Tn(t)),Vh$1(!0)}function cs(t,r){return t!==null&&r&&r(new Dn(t)),Vh$1(!0)}function ds(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return Vh$1(!0);let n=e.map(i=>Kh$1(()=>{let a=r._environmentInjector,o=at(i,a);return Ft(es(o)?o.canActivate(r,t):Eo$2(a,()=>o(r,t))).pipe(cg())}));return Vh$1(n).pipe(rt())}function us(t,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(a=>Yo(a)).filter(a=>a!==null).map(a=>Kh$1(()=>{let o=a.guards.map(l=>{let s=a.node._environmentInjector,d=at(l,s);return Ft(ts(d)?d.canActivateChild(e,t):Eo$2(s,()=>d(e,t))).pipe(cg())});return Vh$1(o).pipe(rt())}));return Vh$1(i).pipe(rt())}function hs(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return Vh$1(!0);let a=i.map(o=>{let l=r._environmentInjector,s=at(o,l);return Ar(()=>ns(s)?s.canDeactivate(t,r,e,n):Eo$2(l,()=>s(t,r,e,n))).pipe(cg())});return Vh$1(a).pipe(rt())}function ps(t,r,e,n,i){let a=r.canLoad;if(a===void 0||a.length===0)return Vh$1(!0);let o=a.map(l=>{let s=at(l,t),d=Ar(()=>Jo(s)?s.canLoad(r,e):Eo$2(t,()=>s(r,e)));return i?d.pipe(ja(i)):d});return Vh$1(o).pipe(rt(),Fa(n))}function Ar(t){try{return Ft(t())}catch(r){return new N(e=>e.error(r))}}function Fa(t){return Mh$1(gg(r=>{if(typeof r!=`boolean`)throw Dt(t,r)}),_e$1(r=>r===!0))}function ms(t,r,e,n,i,a){let o=r.canMatch;if(!o||o.length===0)return Vh$1(!0);let l=o.map(s=>{let d=at(s,t);return Ar(()=>rs(d)?d.canMatch(r,e,i):Eo$2(t,()=>d(r,e,i))).pipe(ja(a))});return Vh$1(l).pipe(rt(),Fa(n))}var le=class t extends Error{name=`NoMatch`;segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}};var Lt=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function fs(t){throw new T$1(4e3,!1)}function gs(t){throw Pa(!1,k.GuardRejected)}var Sr=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[p])throw fs(`${r.redirectTo}`);i=i.children[p]}}async applyRedirectCommands(r,e,n,i,a){let o=await vs(e,i,a);if(o instanceof V)throw new Lt(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),r,n);if(o[0]===`/`)throw new Lt(l);return l}applyRedirectCreateUrlTree(r,e,n,i){return new V(this.createSegmentGroup(r,e.root,n,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,a])=>{if(typeof a==`string`&&a[0]===`:`){let l=a.substring(1);n[i]=e[l]}else n[i]=a}),n}createSegmentGroup(r,e,n,i){let a=this.createSegments(r,e.segments,n,i),o=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{o[l]=this.createSegmentGroup(r,s,n,i)}),new b(a,o)}createSegments(r,e,n,i){return e.map(a=>a.path[0]===`:`?this.findPosParam(r,a,i):this.findOrReturn(a,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new T$1(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function vs(t,r,e){if(typeof t==`string`)return Promise.resolve(t);let n=t;return fn(Ft(Eo$2(e,()=>n(r))))}function ys(t,r){return t.providers&&!t._injector&&(t._injector=lp(t.providers,r,`Route: ${t.path}`)),t._injector??r}function de(t){return t.outlet||p}function bs(t,r){let e=t.filter(n=>de(n)===r);return e.push(...t.filter(n=>de(n)!==r)),e}var Mr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ba(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function _s(t,r,e,n,i,a,o){let l=za(t,r,e);if(!l.matched)return Vh$1(l);let s=Ba(a(l));return n=ys(r,n),ms(n,r,e,i,s,o).pipe(_e$1(d=>d===!0?l:G({},Mr)))}function za(t,r,e){if(r.path===``)return r.pathMatch===`full`&&(t.hasChildren()||e.length>0)?G({},Mr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||da)(e,t,r);if(!i)return G({},Mr);let a={};Object.entries(i.posParams??{}).forEach(([l,s])=>{a[l]=s.path});let o=i.consumed.length>0?G(G({},a),i.consumed[i.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function la(t,r,e,n){return e.length>0&&Ss(t,e,n)?{segmentGroup:new b(r,Cs(n,new b(e,t.children))),slicedSegments:[]}:e.length===0&&Ms(t,e,n)?{segmentGroup:new b(t.segments,ws(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new b(t.segments,t.children),slicedSegments:e}}function ws(t,r,e,n){let i={};for(let a of e)if(On(t,r,a)&&!n[de(a)]){let o=new b([],{});i[de(a)]=o}return G(G({},n),i)}function Cs(t,r){let e={};e[p]=r;for(let n of t)if(n.path===``&&de(n)!==p){let i=new b([],{});e[de(n)]=i}return e}function Ss(t,r,e){return e.some(n=>On(t,r,n)&&de(n)!==p)}function Ms(t,r,e){return e.some(n=>On(t,r,n))}function On(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Rs(t,r,e){return r.length===0&&!t.hasChildren()}var Rr=class{};async function xs(t,r,e,n,i,a,o,l){return new xr(t,r,e,n,i,o,a,l).recognize()}var Is=31;var xr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(r,e,n,i,a,o,l,s){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new Sr(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(G({},this.urlTree.queryParams))}noMatchError(r){return new T$1(4002,`'${r.segmentGroup}'`)}async recognize(){let r=la(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),a=new Nt(``,new U(n,e)),o=Sa(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(r){let e=new et([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),p,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,p,e),rootSnapshot:e}}catch(n){if(n instanceof Lt)return this.absoluteRedirectCount++,this.absoluteRedirectCount>Is&&(this.allowRedirects=!1),this.urlTree=n.urlTree,this.queryParams=Object.freeze(G({},this.urlTree.queryParams)),this.match(n.urlTree.root);throw n instanceof le?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,i,a){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,a);let o=await this.processSegment(r,e,n,n.segments,i,!0,a);return o instanceof U?[o]:[]}async processChildren(r,e,n,i){let a=[];for(let s of Object.keys(n.children))s===`primary`?a.unshift(s):a.push(s);let o=[];for(let s of a){let d=n.children[s],u=bs(e,s),g=await this.processSegment(r,u,d,d.segments,s,!0,i);g instanceof U&&o.push(g)}let l=$a(o);return Ds(l),l}async processSegment(r,e,n,i,a,o,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??r,e,s,n,i,a,o,l)}catch(d){if(d instanceof le||Ua(d))continue;throw d}if(Rs(n,i))return new Rr;throw new le(n)}async processSegmentAgainstRoute(r,e,n,i,a,o,l,s){if(de(n)!==o&&(o===p||!On(i,a,n)||!n.children?.length&&!n.loadChildren||a.length===0&&!i.hasChildren()))throw new le(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,a,o,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,a,o,s);throw new le(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,i,a,o,l){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:g,remainingSegments:m}=za(e,i,a);if(!s)throw new le(e);let M=this.createSnapshot(r,i,a,d,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let J=await this.applyRedirects.applyRedirectCommands(u,i.redirectTo,g,Ba(M),r),he=await this.applyRedirects.lineralizeSegments(i,J);return this.processSegment(r,n,e,he.concat(m),o,!1,l)}createSnapshot(r,e,n,i,a){let o=new et(n,i,this.queryParams,this.urlTree.fragment,ks(e),de(e),e.component??e._loadedComponent??null,e,Ns(e),r),l=Er(o,a,this.paramsInheritanceStrategy);return o.params=l.params,o.data=l.data,o}async matchSegmentAgainstRoute(r,e,n,i,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=Te=>this.createSnapshot(r,n,Te.consumedSegments,Te.parameters,o),s=await fn(_s(e,n,i,r,this.urlSerializer,l,this.abortSignal));if(n.path===`**`&&(e.children={}),!s?.matched)throw new le(e);r=n._injector??r;let{routes:d}=await this.getChildConfig(r,n,i),u=n._loadedInjector??r,{parameters:g,consumedSegments:m,remainingSegments:M}=s,J=this.createSnapshot(r,n,m,g,o),he=de(n)===a,{segmentGroup:ht,slicedSegments:pt}=he?la(e,m,M,d):{segmentGroup:e,slicedSegments:M};if(he&&pt.length===0&&ht.hasChildren())return new U(J,await this.processChildren(u,d,ht,J));if(he&&d.length===0&&pt.length===0)return new U(J,[]);let mt=await this.processSegment(u,d,ht,pt,he?p:a,!0,J);if(!he&&!(mt instanceof U))throw new le(e);return new U(J,mt instanceof U?[mt]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await fn(ps(r,e,n,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw gs(e)}return{routes:[],injector:r}}};function Ds(t){t.sort((r,e)=>r.value.outlet===p?-1:e.value.outlet===p?1:r.value.outlet.localeCompare(e.value.outlet))}function Es(t){let r=t.value.routeConfig;return r&&r.path===``}function $a(t){let r=[],e=/* @__PURE__ */ new Set;for(let i of t){if(!Es(i)){r.push(i);continue}let a=r.find(o=>i.value.routeConfig===o.value.routeConfig);a!==void 0?(a.children.push(...i.children),e.add(a)):r.push(i)}for(let i of e){let a=$a(i.children);r.push(new U(i.value,a))}let n=r.filter(i=>!e.has(i));return Ts(n),n}function Ts(t){let r=Object.create(null);t.forEach(e=>{let n=r[e.value.outlet];if(n){n.url.map(o=>o.toString()).join(`/`);e.value.url.map(o=>o.toString()).join(`/`);throw new T$1(4006,!1)}r[e.value.outlet]=e.value})}function ks(t){return t.data||{}}function Ns(t){return t.resolve||{}}function As(t,r,e,n,i,a,o){return Fe$1(async l=>{let{state:s,tree:d}=await xs(t,r,e,n,l.extractedUrl,i,a,o);return q$1(G({},l),{targetSnapshot:s,urlAfterRedirects:d})})}function Ps(t){return Fe$1(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return Vh$1(r);let i=new Set(n.map(l=>l.route)),a=/* @__PURE__ */ new Set;for(let l of i)if(!a.has(l))for(let s of Ha(l))a.add(s);let o=0;return Te(a).pipe(tg(l=>i.has(l)?Os(l,e,t):(l.data=Er(l,l.parent,t).resolve,Vh$1(void 0))),gg(()=>o++),lg(1),Fe$1(l=>o===a.size?Vh$1(r):vt$1))})}function Ha(t){return[t,...t.children.map(e=>Ha(e)).flat()]}function Os(t,r,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!Ta(n)&&(i[jt]=n.title),Kh$1(()=>(t.data=Er(t,t.parent,e).resolve,Us(i,t,r).pipe(_e$1(a=>(t._resolvedData=a,t.data=G(G({},t.data),a),null)))))}function Us(t,r,e){let n=pr(t);if(n.length===0)return Vh$1({});let i={};return Te(n).pipe(Fe$1(a=>Ls(t[a],r,e).pipe(cg(),gg(o=>{if(o instanceof De)throw Dt(new xe,o);i[a]=o}))),lg(1),_e$1(()=>i),fl$3(a=>Ua(a)?vt$1:Hh$1(a)))}function Ls(t,r,e){let n=r._environmentInjector,i=at(t,n);return Ft(i.resolve?i.resolve(r,e):Eo$2(n,()=>i(r,e)))}var Va=new x(``);function Ir(t){return fg(r=>{let e=t(r);return e?Te(e).pipe(_e$1(()=>r)):Vh$1(r)})}var Pr=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(a=>a.outlet===p);return n}getResolvedTitleForRoute(e){return e.data[jt]}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:()=>b$1(qa)})}return t})();var qa=(()=>{class t extends Pr{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static ɵfac=function(n){return new(n||t)(Ne$1(vp$1))};static ɵprov=ue$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ot=new x(``,{factory:()=>({})});var zt=new x(``);var Ga=(()=>{class t{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=b$1(wD);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let a=await ha(Eo$2(e,()=>n.loadComponent())),o=await Qa(UP(a));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o,o}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let a=await Wa(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();async function Wa(t,r,e,n){let i=await ha(Eo$2(e,()=>t.loadChildren())),a=await Qa(UP(i)),o;a instanceof cp||Array.isArray(a)?o=a:o=await r.compileModuleAsync(a),n&&n(t);let l,s,u;return Array.isArray(o)?s=o:(l=o.create(e).injector,u=o,s=l.get(zt,[],{optional:!0,self:!0}).flat()),{routes:s.map(Nr),injector:l,factory:u}}async function Qa(t){return t}var Un=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:()=>b$1(js)})}return t})();var js=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();var Ya=new x(``);var Fs=()=>{};var Ka=new x(``);var Za=(()=>{class t{currentNavigation=Oo$2(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Oo$2(null);events=new K;transitionAbortWithErrorSubject=new K;configLoader=b$1(Ga);environmentInjector=b$1(me);destroyRef=b$1(le$1);urlSerializer=b$1(it);rootContexts=b$1(Fe);location=b$1(bn$1);inputBindingEnabled=b$1(Pn,{optional:!0})!==null;titleStrategy=b$1(Pr);options=b$1(ot,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||$o;urlHandlingStrategy=b$1(Un);createViewTransition=b$1(Ya,{optional:!0});navigationErrorHandler=b$1(Ka,{optional:!0});routerResourcesFeature=b$1(Va,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Vh$1(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new xn(i)),n=i=>this.events.next(new In(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;rh$1(()=>{this.transitions?.next(q$1(G({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new On$2(null),this.transitions.pipe(Xt$2(n=>n!==null),fg(n=>{let i=!0,a=!1,o=new AbortController,l=()=>!a&&this.currentTransition?.id===n.id;return Vh$1(n).pipe(fg(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,``,k.SupersededByNewNavigation),vt$1;this.currentTransition=n;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?q$1(G({},d),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&g!==`reload`)return this.events.next(new we(s.id,this.urlSerializer.serialize(s.rawUrl),``,At.IgnoredSameUrlNavigation)),s.resolve(!1),vt$1;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Vh$1(s).pipe(fg(m=>(this.events.next(new Be(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?vt$1:Promise.resolve(m))),As(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),gg(m=>{n.targetSnapshot=m.targetSnapshot,n.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=m.urlAfterRedirects,M)),this.events.next(new Ot)}),fg(m=>Te(n.routesRecognizeHandler.deferredHandle??Vh$1(void 0)).pipe(_e$1(()=>m))),gg(()=>{let m=new Pt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:M,source:J,restoredState:he,extras:ht}=s,pt=new Be(m,this.urlSerializer.serialize(M),J,he);this.events.next(pt);let mt=Da(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=q$1(G({},s),{targetSnapshot:mt,urlAfterRedirects:M,extras:q$1(G({},ht),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Te=>(Te.finalUrl=M,Te)),Vh$1(n)}else return this.events.next(new we(s.id,this.urlSerializer.serialize(s.extractedUrl),``,At.IgnoredByUrlHandlingStrategy)),s.resolve(!1),vt$1}),_e$1(s=>{let d=new Cn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=n=q$1(G({},s),{guards:Qo(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),as(s=>this.events.next(s)),fg(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Dt(this.urlSerializer,s.guardsResult);let d=new Sn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!l())return vt$1;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,k.GuardRejected),vt$1;if(s.guards.canActivateChecks.length===0)return Vh$1(s);let u=new Mn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!l())return vt$1;let g=!1;return Vh$1(s).pipe(Ps(this.paramsInheritanceStrategy),gg({next:()=>{g=!0;let m=new Rn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{g||this.cancelNavigationTransition(s,``,k.NoDataFromResolver)}}))}),Ir(s=>{let d=g=>{let m=[];if(g.routeConfig?._loadedComponent)g.component=g.routeConfig?._loadedComponent;else if(g.routeConfig?.loadComponent){let M=g._environmentInjector;m.push(this.configLoader.loadComponent(M,g.routeConfig).then(J=>{g.component=J}))}for(let M of g.children)m.push(...d(M));return m},u=d(s.targetSnapshot.root);return u.length===0?Vh$1(s):Te(Promise.all(u).then(()=>s))}),fg(s=>{let{newlyCreatedRoutes:d,state:u}=Vo(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=s=q$1(G({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(g=>(g.targetRouterState=u,g)),Vh$1(s)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(s=>s),Ir(()=>this.afterPreactivation()),fg(()=>{let{currentSnapshot:s,targetSnapshot:d}=n,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root,n.hasUAVisualTransition);return u?Te(u).pipe(_e$1(()=>n)):Vh$1(n)}),en$1(1),fg(s=>{i=!1,this.events.next(new tt);let d=n.beforeActivateHandler.deferredHandle;return d?Te(d.then(()=>s)):Vh$1(s)}),gg(s=>{new Cr(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(Xa(s.targetRouterState),a=!0,this.currentNavigation.update(d=>(d.abort=Fs,d)),this.lastSuccessfulNavigation.set(rh$1(this.currentNavigation)),this.events.next(new ue(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),pg(La(o.signal).pipe(Xt$2(()=>!a&&i),gg(()=>{this.cancelNavigationTransition(n,o.signal.reason+``,k.Aborted)}))),gg({complete:()=>{a=!0}}),pg(this.transitionAbortWithErrorSubject.pipe(gg(s=>{throw s}))),ag(()=>{o.abort(),a||this.cancelNavigationTransition(n,``,k.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),fl$3(s=>{if(a=!0,ca(n),this.destroyed)return n.resolve(!1),vt$1;if(s instanceof De&&(s=Dt(this.urlSerializer,s)),Oa(s))this.events.next(new Z(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Wo(s)?this.events.next(new nt(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let d=new ze(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let u=Eo$2(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof De){let{message:g,cancellationCode:m}=Dt(this.urlSerializer,u);this.events.next(new Z(n.id,this.urlSerializer.serialize(n.extractedUrl),g,m)),this.events.next(new nt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(u)}}return vt$1}))}))}cancelNavigationTransition(e,n,i){ca(e);let a=new Z(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=rh$1(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();function Bs(t){return t!==It}function ca(t){for(let r of t.newlyCreatedRoutes??[])r._localInjector?.destroy(),r._localInjector=void 0;Xa(t.targetRouterState)}function Xa(t){if(!t)return;let r=e=>{e.value.pending?.set(!1),e.children.forEach(r)};r(t._root)}var Ja=new x(``);var eo=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:()=>b$1(zs)})}return t})();var An=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}};var zs=(()=>{class t extends An{static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();var Ln=(()=>{class t{urlSerializer=b$1(it);options=b$1(ot,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=b$1(bn$1);urlHandlingStrategy=b$1(Un);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new V;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=i??a;return o instanceof V?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=Da(null,b$1(me));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:()=>b$1($s)})}return t})();var $s=(()=>{class t extends Ln{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type===`popstate`&&setTimeout(()=>{e(n.url,n.state,`popstate`,{replaceUrl:!0},n.hasUAVisualTransition)})})}handleRouterEvent(e,n){e instanceof Be?this.updateStateMemento():e instanceof we?this.commitTransition(n):e instanceof Pt?this.urlUpdateStrategy===`eager`&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof tt?(this.commitTransition(n),this.urlUpdateStrategy===`deferred`&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Z?Na(e)?e.code===k.Redirect&&this.routerState===n.targetRouterState&&this.resetInternalState(n):this.restoreHistory(n):e instanceof ze?this.restoreHistory(n,!0):e instanceof ue&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:a}=n,{replaceUrl:o,state:l}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,d=G(G({},l),this.generateNgRouterState(a,s,n));this.location.replaceState(e,``,d)}else{let s=G(G({},l),this.generateNgRouterState(a,this.browserPageId+1,n));this.location.go(e,``,s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,a=this.currentPageId-i;a!==0&&this.lastSuccessfulId!==-1?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution===`computed`?G({navigationId:e,ɵrouterPageId:n},this.routerUrlState(i)):G({navigationId:e},this.routerUrlState(i))}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();function Or(t,r){t.events.pipe(Xt$2(e=>e instanceof ue||e instanceof Z||e instanceof ze||e instanceof we),_e$1(e=>e instanceof ue||e instanceof we?0:(e instanceof Z?e.code===k.Redirect||e.code===k.SupersededByNewNavigation:!1)?2:1),Xt$2(e=>e!==2),en$1(1)).subscribe(()=>{r()})}var st=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=b$1(iI);stateManager=b$1(Ln);options=b$1(ot,{optional:!0})||{};pendingTasks=b$1(kt$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=b$1(Za);urlSerializer=b$1(it);location=b$1(bn$1);urlHandlingStrategy=b$1(Un);injector=b$1(me);_events=new K;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=b$1(eo);injectorCleanup=b$1(Ja,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=b$1(zt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!b$1(Pn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new z;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,a=rh$1(this.navigationTransitions.currentNavigation);if(i!==null&&a!==null){if(this.stateManager.handleRouterEvent(n,a),n instanceof Z&&n.code!==k.Redirect&&n.code!==k.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ue)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof nt){let o=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),s=G({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Bs(i.source)},o);this.scheduleNavigation(l,It,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Ho(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),It,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,a,o)=>{this.navigateToSyncWithBrowser(e,i,n,a,o)})}navigateToSyncWithBrowser(e,n,i,a,o){let l=i?.navigationId?i:null,s=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(a=q$1(G({},a),{browserUrl:e})),i){let u=G({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(a.state=u)}let d=this.parseUrl(s);this.scheduleNavigation(d,n,l,a,o).catch(u=>{this.disposed||this.injector.get(at$2)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return rh$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Nr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:a,fragment:o,queryParamsHandling:l,preserveFragment:s}=n,d=s?this.currentUrlTree.fragment:o,u=null;switch(l??this.options.defaultQueryParamsHandling){case`merge`:u=G(G({},this.currentUrlTree.queryParams),a);break;case`preserve`:u=this.currentUrlTree.queryParams;break;default:u=a||null}let g;try{g=Ma(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),g=this.currentUrlTree.root}return Ra(g,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=Ie(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(a,It,null,n)}navigate(e,n={skipLocationChange:!1}){return Hs(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Wn$2(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,n){let i;if(n===!0?i=G({},ma):n===!1?i=G({},gn):i=G(G({},gn),n),Ie(e))return mr(this.currentUrlTree,e,i);let a=this.parseUrl(e);return mr(this.currentUrlTree,a,i)}scheduleNavigation(e,n,i,a,o,l){if(this.disposed)return Promise.resolve(!1);let s,d,u;l?(s=l.resolve,d=l.reject,u=l.promise):u=new Promise((m,M)=>{s=m,d=M});let g=this.pendingTasks.add();return Or(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(g))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,hasUAVisualTransition:o,resolve:s,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();function Hs(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new T$1(4008,!1)}var Gs=(()=>{class t{router=b$1(st);stateManager=b$1(Ln);fragment=Oo$2(``);queryParams=Oo$2({});path=Oo$2(``);serializer=b$1(it);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ue&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new V(n)))}static ɵfac=function(n){return new(n||t)};static ɵprov=vr$3({token:t,factory:t.ɵfac})}return t})();var lt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=b$1(new oh$1(`href`),{optional:!0});reactiveHref=ND(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=n=>n===`preserve`||n===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return rh$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return rh$1(this._target)}_target=Oo$2(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return rh$1(this._queryParams)}_queryParams=Oo$2(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return rh$1(this._fragment)}_fragment=Oo$2(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return rh$1(this._queryParamsHandling)}_queryParamsHandling=Oo$2(void 0);set state(e){this._state.set(e)}get state(){return rh$1(this._state)}_state=Oo$2(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return rh$1(this._info)}_info=Oo$2(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return rh$1(this._relativeTo)}_relativeTo=Oo$2(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return rh$1(this._preserveFragment)}_preserveFragment=Oo$2(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return rh$1(this._skipLocationChange)}_skipLocationChange=Oo$2(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return rh$1(this._replaceUrl)}_replaceUrl=Oo$2(!1);browserUrl=GP(void 0);isAnchorElement;onChanges=new K;applicationErrorHandler=b$1(at$2);options=b$1(ot,{optional:!0});reactiveRouterState=b$1(Gs);constructor(e,n,i,a,o,l){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=a,this.el=o,this.locationStrategy=l;let s=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Oo$2(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ie(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,n,i,a,o){let l=this.urlTree;if(l===null||this.isAnchorElement&&(e!==0||n||i||a||o||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),d=G({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,a=this.el.nativeElement;n!==null?i.setAttribute(a,e,n):i.removeAttribute(a,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:Ie(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return rh$1(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(n){return new(n||t)(Cr$3(st),Cr$3(_e),Nd$1(`tabindex`),Cr$3(Ta$3),Cr$3(Er$3),Cr$3(gn$2))};static ɵdir=$E({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(n,i){n&1&&Mp$1(`click`,function(o){return i.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),n&2&&Dp$1(`href`,i.reactiveHref(),Dy)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,XP],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,XP],replaceUrl:[2,`replaceUrl`,`replaceUrl`,XP],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[pm]})}return t})();var Ws=new x(``);function Ur(t,...r){return an$1([{provide:zt,multi:!0,useValue:t},{provide:_e,useFactory:Qs},{provide:vp$2,multi:!0,useFactory:Ys},r.map(e=>e.ɵproviders)])}function Qs(){return b$1(st).routerState.root}function Ys(){let t=b$1(ie$1);return r=>{let e=t.get(Di$2);if(r!==e.components[0])return;let n=t.get(st),i=t.get(Ks);t.get(Zs)===1&&n.initialNavigation(),t.get(Xs,null,{optional:!0})?.setUpPreloading(),t.get(Ws,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Ks=new x(``,{factory:()=>new K});var Zs=new x(``,{factory:()=>1});var Xs=new x(``);var jn=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,n){e&1&&bp$1(0,`router-outlet`)},dependencies:[$e],encapsulation:2})};var Js=new x(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var to=new x(`MAT_DRAWER_CONTAINER`);var $t=(()=>{class t extends oc{_platform=b$1(O);_changeDetectorRef=b$1(KP);_element=b$1(Er$3);_ngZone=b$1(Me);_isInert=!1;_container=b$1(Fr);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(rg(50),en$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let n=this._element.nativeElement;this._isInert=e,e?n.setAttribute(`inert`,`true`):n.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!==`over`&&e.opened||n!=null&&n.mode!==`over`&&n.opened}static ɵfac=(()=>{let e;return function(i){return(e||(e=Rm$1(t)))(i||t)}})();static ɵcmp=(function(){return FE({type:t,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(i,a){i&2&&(Vp$1(`margin-left`,a._container._contentMargins.left,`px`)(`margin-right`,a._container._contentMargins.right,`px`),Hp$1(`mat-drawer-content-hidden`,a._shouldBeHidden()))},features:[dD([{provide:oc,useExisting:t}]),pp$1],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,a){i&1&&(CI(),TI(0))},encapsulation:2})})()}return t})();var jr=(()=>{class t{_elementRef=b$1(Er$3);_focusTrapFactory=b$1(Vl$1);_focusMonitor=b$1(ct$1);_platform=b$1(O);_ngZone=b$1(Me);_renderer=b$1(Ta$3);_interactivityChecker=b$1(Hr);_doc=b$1(or$2);_isAnimating=!1;_container=b$1(to,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Wi(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=Wi(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Wi(e))}_opened=Oo$2(!1);_openedVia=null;_animationStarted=new K;_animationEnd=new K;openedChange=new je$2(!0);_openedStream=this.openedChange.pipe(Xt$2(e=>e),_e$1(()=>{}));openedStart=this._animationStarted.pipe(Xt$2(()=>this.opened),$i$1(void 0));_closedStream=this.openedChange.pipe(Xt$2(e=>!e),_e$1(()=>{}));closedStart=this._animationStarted.pipe(Xt$2(()=>!this.opened),$i$1(void 0));_destroyed=new K;onPositionChanged=new je$2;_content;_modeChanged=new K;_injector=b$1(ie$1);_changeDetectorRef=b$1(KP);constructor(){this.openedChange.pipe(pg(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!ke(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(n,`transitionend`,this._handleTransitionEvent),e.listen(n,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),l(),i.removeAttribute(`tabindex`)},o=this._renderer.listen(i,`blur`,a),l=this._renderer.listen(i,`mousedown`,a)})),i.focus(n))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:By(()=>{let n=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(n)&&typeof e.focus==`function`&&e.focus(n)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),i}_setOpen(e,n,i){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&n&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(en$1(1)).subscribe(o=>a(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`content`];return FE({type:t,selectors:[[`mat-drawer`]],viewQuery:function(a,o){if(a&1&&Rp$1(e,5),a&2){let l;NI(l=MI())&&(o._content=l.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(a,o){a&2&&(Dp$1(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),Vp$1(`visibility`,!o._container&&!o.opened?`hidden`:null),Hp$1(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(a,o){a&1&&(CI(),li(0,`div`,1,0),TI(2),vc$1())},dependencies:[oc],encapsulation:2})})()}return t})();var Fr=(()=>{class t{_dir=b$1(Oe,{optional:!0});_element=b$1(Er$3);_ngZone=b$1(Me);_changeDetectorRef=b$1(KP);_animationDisabled=se();_transitionsEnabled=!1;_allDrawers;_drawers=new Yo$2;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Wi(e)}_autosize=b$1(Js);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Wi(e)}_backdropOverride=null;backdropClick=new je$2;_start=null;_end=null;_left=null;_right=null;_destroyed=new K;_doCheckSubject=new K;_contentMargins={left:null,right:null};_contentMarginChanges=new K;get scrollable(){return this._userContent||this._content}_injector=b$1(ie$1);constructor(){let e=b$1(O),n=b$1(bt);this._dir?.change.pipe(pg(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(pg(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(yl$2(this._allDrawers),pg(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(yl$2(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ng(10),pg(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)n+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(pg(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(pg(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(pg(this._drawers.changes)).subscribe(()=>{By({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(pg(Xh$1(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],n=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function i(o,l){if(o&1){let s=II();li(0,`div`,1),Mp$1(`click`,function(){Yl$2(s);let u=wI();return Kl$2(u._onBackdropClicked())}),vc$1()}if(o&2){let s=wI();Hp$1(`mat-drawer-shown`,s._isShowingBackdrop())}}function a(o,l){o&1&&(li(0,`mat-drawer-content`),TI(1,2),vc$1())}return FE({type:t,selectors:[[`mat-drawer-container`]],contentQueries:function(l,s,d){if(l&1&&Ap$1(d,$t,5)(d,jr,5),l&2){let u;NI(u=MI())&&(s._content=u.first),NI(u=MI())&&(s._allDrawers=u)}},viewQuery:function(l,s){if(l&1&&Rp$1($t,5),l&2){let d;NI(d=MI())&&(s._userContent=d.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(l,s){l&2&&Hp$1(`mat-drawer-container-explicit-backdrop`,s._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[dD([{provide:to,useExisting:t}])],ngContentSelectors:n,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(l,s){l&1&&(CI(e),lI(0,i,1,2,`div`,0),TI(1),TI(2,1),lI(3,a,2,0,`mat-drawer-content`)),l&2&&(dI(s.hasBackdrop?0:-1),av(3),dI(s._content?-1:3))},dependencies:[$t],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return t})();var no=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=VE({type:t});static ɵinj=Cl$2({imports:[Wt,Y,Wt]})}return t})();var tl=[`*`];function nl(t,r){t&1&&bp$1(0,`pg-palette-gen-showcase`)}function rl(t,r){t&1&&bp$1(0,`pg-palette-gen-logo`,6)}var Fn=class t{service=b$1(We);rendererService=b$1(Pa$1);hideLogo=GP(!1,{transform:XP});drawerOpened=Oo$2(!0);toggleDrawer(){this.drawerOpened.update(r=>!r)}matchDesktop=`(min-width: 840px)`;isDesktop=Nd(b$1(Vi).observe([this.matchDesktop]).pipe(Cd(),_e$1(({breakpoints:r})=>r[this.matchDesktop]),ml$3(1)));static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`pg-palette-gen-container`]],hostAttrs:[1,`pg-palette-gen-container`],hostVars:2,hostBindings:function(e,n){e&2&&Vp$1(`--%NS%pg-palette-gen-container-control-size`,n.service.controlSize()+`px`)},inputs:{hideLogo:[1,`hideLogo`]},ngContentSelectors:tl,decls:19,vars:5,consts:[[1,`pg-palette-gen-container__main`,3,`hasBackdrop`],[1,`pg-palette-gen-container__content`],[`position`,`end`,3,`openedChange`,`mode`,`opened`],[1,`pg-palette-gen-container__aside`],[1,`pg-palette-gen-container__footer`],[1,`pg-palette-gen-container__snapshots`],[1,`pg-palette-gen-container__logo`],[1,`pg-palette-gen-container__actions`],[`matIconButton`,``,`aria-label`,`Toggle page sharing`,`matTooltip`,`Toggle page sharing`,3,`click`],[`matIconButton`,``,`aria-label`,`Toggle sidebar`,`matTooltip`,`Toggle sidebar`,3,`click`]],template:function(e,n){e&1&&(CI(),li(0,`mat-drawer-container`,0)(1,`mat-drawer-content`)(2,`pg-palette-gen-content`,1),TI(3,0,null,nl,1,0),vc$1()(),li(5,`mat-drawer`,2),Yp$1(`openedChange`,function(a){return iD(n.drawerOpened,a)||(n.drawerOpened=a),a}),li(6,`div`,3),bp$1(7,`pg-palette-gen-form`)(8,`pg-palette-gen-import`),vc$1()()(),li(9,`div`,4),bp$1(10,`pg-palette-gen-snapshots`,5),lI(11,rl,1,0,`pg-palette-gen-logo`,6),li(12,`div`,7)(13,`button`,8),Mp$1(`click`,function(){return n.rendererService.togglePageSharing()}),li(14,`mat-icon`),tD(15),vc$1()(),li(16,`button`,9),Mp$1(`click`,function(){return n.toggleDrawer()}),li(17,`mat-icon`),tD(18,`tune`),vc$1()()()()),e&2&&(wp$1(`hasBackdrop`,!n.isDesktop()),av(5),wp$1(`mode`,n.isDesktop()?`side`:`over`),Zp$1(`opened`,n.drawerOpened),av(6),dI(n.hideLogo()?-1:11),av(4),Qp$1(n.rendererService.isPageSharingActive()?`stop_screen_share`:`screen_share`))},dependencies:[Fg,Jl$1,Ze$1,Ye,no,jr,Fr,$t,Ey,vc,Sd,Md,Td,Ed,Dl,Ad],styles:[`.pg-palette-gen-container{--%NS%mat-sidenav-container-shape: 0;--%NS%mat-sidenav-container-width: calc(var(--%NS%pg-palette-gen-container-control-size) + 4rem);display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:1fr auto;grid-template-areas:"main" "footer"}.pg-palette-gen-container__main{grid-area:main}.pg-palette-gen-container__content{display:block;padding:1.5rem}.pg-palette-gen-container__aside{margin:1.5rem auto;width:var(--%NS%pg-palette-gen-container-control-size)}.pg-palette-gen-container__footer{grid-area:footer;padding:.75rem 1.5rem;display:grid;grid-template-columns:minmax(0,1fr) auto auto;grid-template-rows:auto;grid-template-areas:"snapshots logo actions";gap:1rem}.pg-palette-gen-container__snapshots{grid-area:snapshots}.pg-palette-gen-container__logo{grid-area:logo;justify-self:center}.pg-palette-gen-container__actions{grid-area:actions;display:flex;gap:1rem}
`],encapsulation:2})};var zn=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-footer`]],hostAttrs:[1,`app-footer`],decls:5,vars:0,consts:[[`href`,`https://github.com/avine/angular-material-palette-generator`,`target`,`_blank`,1,`app-footer__link`,`gbl-body-medium`]],template:function(e,n){e&1&&(li(0,`a`,0),tD(1,` Made with `),li(2,`mat-icon`),tD(3,`favorite`),vc$1(),tD(4,` by Avine
`),vc$1())},dependencies:[Ze$1,Ye],styles:[`.app-footer{display:flex;padding:1.125rem var(--%NS%gbl-spacing);background-color:var(--%NS%mat-sys-surface-container)}.app-footer__link{margin:auto;display:flex;justify-content:center;align-items:center;gap:.375rem;color:inherit;text-decoration:none}.app-footer mat-icon{width:auto;height:auto;font-size:1rem;color:var(--%NS%mat-sys-primary)}
`],encapsulation:2})};var $n=class t{themeService=b$1(h);static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-theme-switcher`]],decls:3,vars:1,consts:[[`matIconButton`,``,`aria-label`,`Toggle sidebar`,3,`click`]],template:function(e,n){e&1&&(li(0,`button`,0),Mp$1(`click`,function(){return n.themeService.switch()}),li(1,`mat-icon`),tD(2),vc$1()()),e&2&&(av(2),Qp$1(n.themeService.theme()===`light`?`dark_mode`:`light_mode`))},dependencies:[Fg,Jl$1,Ze$1,Ye],encapsulation:2})};var zr=new x(`MAT_MENU_PANEL`);var Ht=(()=>{class t{_isAnchor;_elementRef=b$1(Er$3);_document=b$1(or$2);_focusMonitor=b$1(ct$1);_parentMenu=b$1(zr,{optional:!0});_changeDetectorRef=b$1(KP);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new K;_focused=new K;_highlighted=!1;_triggersSubmenu=!1;constructor(){b$1(Z$1).load(Tn$1),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let i=0;i<n.length;i++)n[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],n=[`mat-icon, [matMenuItemIcon]`,`*`];function i(a,o){a&1&&(cu(),li(0,`svg`,2),bp$1(1,`polygon`,3),vc$1())}return FE({type:t,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,l){o&1&&Mp$1(`click`,function(d){return l._checkDisabled(d)})(`mouseenter`,function(){return l._handleMouseEnter()}),o&2&&(Dp$1(`role`,l.role)(`tabindex`,l._getTabIndex())(`aria-disabled`,l._getAriaDisabled())(`disabled`,l._getDisabled()),Hp$1(`mat-mdc-menu-item-highlighted`,l._highlighted)(`mat-mdc-menu-item-submenu-trigger`,l._triggersSubmenu)(`mat-mdc-menu-item-disabled`,l.disabled)(`mat-mdc-menu-item-disabled-interactive`,l.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,XP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,XP],disableRipple:[2,`disableRipple`,`disableRipple`,XP]},exportAs:[`matMenuItem`],ngContentSelectors:n,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,l){o&1&&(CI(e),TI(0),li(1,`span`,0),TI(2,1),vc$1(),bp$1(3,`div`,1),lI(4,i,2,0,`svg`,2)),o&2&&(av(3),wp$1(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleTrigger`,l._getHostElement()),av(),dI(l._triggersSubmenu?4:-1))},dependencies:[ra$2],encapsulation:2})})()}return t})();var ll=new x(`MatMenuContent`);var cl=new x(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Br=`_mat-menu-enter`;var Hn=`_mat-menu-exit`;var dt=(()=>{class t{_elementRef=b$1(Er$3);_changeDetectorRef=b$1(KP);_injector=b$1(ie$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=se();_allItems;_directDescendantItems=new Yo$2;_classList={};_panelAnimationState=`void`;_animationDone=new K;_isAnimating=Oo$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let n=this._previousPanelClass,i=G({},this._classList);n&&n.length&&n.split(` `).forEach(a=>{i[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new je$2;close=this.closed;panelId=b$1(Ge).getId(`mat-menu-panel-`);constructor(){let e=b$1(cl);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ui(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(yl$2(this._directDescendantItems),fg(e=>Xh$1(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let n=this._keyManager;if(this._panelAnimationState===`enter`&&n.activeItem?._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[a]&&!i[a].disabled?n.setActiveItem(a):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(yl$2(this._directDescendantItems),fg(n=>Xh$1(...n.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let n=e.keyCode,i=this._keyManager;switch(n){case 27:ke(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(n===38||n===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=By(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList=q$1(G({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":n===`above`,"mat-menu-below":n===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let n=e===Hn;(n||e===Br)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Br||e===Hn)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Hn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Br:Hn)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(yl$2(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`*`];function n(i,a){if(i&1){let o=II();Ec$1(0,`div`,0),Sp$1(`click`,function(){Yl$2(o);let s=wI();return Kl$2(s.closed.emit(`click`))})(`animationstart`,function(s){Yl$2(o);let d=wI();return Kl$2(d._onAnimationStart(s.animationName))})(`animationend`,function(s){Yl$2(o);let d=wI();return Kl$2(d._onAnimationDone(s.animationName))})(`animationcancel`,function(s){Yl$2(o);let d=wI();return Kl$2(d._onAnimationDone(s.animationName))}),Ec$1(1,`div`,1),TI(2),Ic$1()()}if(i&2){let o=wI();GI(o._classList),Hp$1(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),_p$1(`id`,o.panelId),Dp$1(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return FE({type:t,selectors:[[`mat-menu`]],contentQueries:function(a,o,l){if(a&1&&Ap$1(l,ll,5)(l,Ht,5)(l,Ht,4),a&2){let s;NI(s=MI())&&(o.lazyContent=s.first),NI(s=MI())&&(o._allItems=s),NI(s=MI())&&(o.items=s)}},viewQuery:function(a,o){if(a&1&&Rp$1(pr$3,5),a&2){let l;NI(l=MI())&&(o.templateRef=l.first)}},hostVars:3,hostBindings:function(a,o){a&2&&Dp$1(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,XP],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,i=>i==null?null:XP(i)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[dD([{provide:zr,useExisting:t}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,o){a&1&&(CI(),mp$1(0,n,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return t})();var dl=new x(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=b$1(ie$1);return()=>Zt(t)}});var ct=/* @__PURE__ */ new WeakMap;var ul=(()=>{class t{_canHaveBackdrop;_element=b$1(Er$3);_viewContainerRef=b$1(Ii$2);_menuItemInstance=b$1(Ht,{optional:!0,self:!0});_dir=b$1(Oe,{optional:!0});_focusMonitor=b$1(ct$1);_ngZone=b$1(Me);_injector=b$1(ie$1);_scrollStrategy=b$1(dl);_changeDetectorRef=b$1(KP);_animationsDisabled=se();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=z.EMPTY;_menuCloseSubscription=z.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n===`click`||n===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let n=b$1(zr,{optional:!0});this._parentMaterialMenu=n instanceof dt?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ct.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let i=ct.get(n);ct.set(n,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(n),o=a.getConfig(),l=o.positionStrategy;this._setPosition(n,l),this._canHaveBackdrop?o.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:o.hasBackdrop=n.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,e&&n.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),n instanceof dt&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(pg(n.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}_destroyMenu(e){let n=this._overlayRef,i=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof dt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(en$1(1)).subscribe(()=>{n.detach(),ct.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(n.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ct.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=qt(this._injector,n),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof dt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new Xt$1({positionStrategy:Kt$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX===`start`?`after`:`before`,o=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,o)})})}_setPosition(e,n){let[i,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,l]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[s,d]=[o,l],[u,g]=[i,a],m=0;if(this._triggersSubmenu()){if(g=i=e.xPosition===`before`?`start`:`end`,a=u=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let M=this._parentMaterialMenu.items.first;this._parentInnerPadding=M?M._getHostElement().offsetTop:0}m=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(s=o===`top`?`bottom`:`top`,d=l===`top`?`bottom`:`top`);n.withPositions([{originX:i,originY:s,overlayX:u,overlayY:o,offsetY:m},{originX:a,originY:s,overlayX:g,overlayY:o,offsetY:m},{originX:i,originY:d,overlayX:u,overlayY:l,offsetY:-m},{originX:a,originY:d,overlayX:g,overlayY:l,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Vh$1(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Xt$2(o=>this._menuOpen&&o!==this._menuItemInstance)):Vh$1();return Xh$1(e,i,a,n)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new gt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ct.get(e)===this}_triggerIsAriaDisabled(){return XP(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(n){tE()};static ɵdir=$E({type:t})}return t})();var oo=(()=>{class t extends ul{_cleanupTouchstart;_hoverSubscription=z.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new je$2;onMenuOpen=this.menuOpened;menuClosed=new je$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=b$1(Ta$3);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,n=>{Bt$1(n)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Vt(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let n=e.keyCode;(n===13||n===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(n===39&&this.dir===`ltr`||n===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(n){return new(n||t)};static ɵdir=$E({type:t,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(n,i){n&1&&Mp$1(`click`,function(o){return i._handleClick(o)})(`mousedown`,function(o){return i._handleMousedown(o)})(`keydown`,function(o){return i._handleKeydown(o)}),n&2&&Dp$1(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[pp$1]})}return t})();var so=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=VE({type:t});static ɵinj=Cl$2({imports:[Pn$1,so$1,Y,Wt]})}return t})();var Vn=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-menu`]],decls:17,vars:1,consts:[[`menu`,`matMenu`],[`matIconButton`,``,`aria-label`,`Menu`,3,`matMenuTriggerFor`],[`mat-menu-item`,``,`routerLink`,`/`],[`mat-menu-item`,``,`routerLink`,`/demo/overlay`],[`mat-menu-item`,``,`routerLink`,`/demo/cubic-bezier-control`]],template:function(e,n){if(e&1&&(li(0,`button`,1)(1,`mat-icon`),tD(2,`more_vert`),vc$1()(),li(3,`mat-menu`,null,0)(5,`button`,2)(6,`mat-icon`),tD(7,`palette`),vc$1(),tD(8,` Palette Generator `),vc$1(),li(9,`button`,3)(10,`mat-icon`),tD(11,`layers`),vc$1(),tD(12,` Palette Generator Overlay `),vc$1(),li(13,`button`,4)(14,`mat-icon`),tD(15,`draw`),vc$1(),tD(16,` Cubic Bezier Control `),vc$1()()),e&2){let i=xI(4);wp$1(`matMenuTriggerFor`,i)}},dependencies:[lt,Fg,Jl$1,Ze$1,Ye,so,dt,Ht,oo],encapsulation:2})};var pl=[`*`];var qn=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-header`]],hostAttrs:[1,`app-header`],ngContentSelectors:pl,decls:10,vars:0,consts:[[1,`app-header__title`,`gbl-title-large`],[`routerLink`,`/`],[1,`app-header__actions`]],template:function(e,n){e&1&&(CI(),li(0,`h1`,0)(1,`a`,1)(2,`mat-icon`),tD(3,`palette`),vc$1(),li(4,`span`),tD(5,`Angular Material Palette Generator`),vc$1()()(),li(6,`div`,2),TI(7),bp$1(8,`app-theme-switcher`)(9,`app-menu`),vc$1())},dependencies:[lt,Ze$1,Ye,$n,Vn],styles:[`.app-header{display:flex;justify-content:space-between;align-items:center;padding:.75rem var(--%NS%gbl-spacing);background-color:var(--%NS%mat-sys-surface-container)}.app-header__title{margin:0;white-space:nowrap}.app-header__title a{display:flex;gap:.5rem;align-items:center;text-decoration:none;color:inherit}.app-header__title mat-icon{flex-shrink:0;width:auto;height:auto;font-size:2rem;color:var(--%NS%mat-sys-primary)}@media only screen and (max-width:575.98px){.app-header__title span{display:none}}.app-header__actions{display:flex;gap:.75rem}
`],encapsulation:2})};var ml=[`*`];function fl(t,r){t&1&&bp$1(0,`app-footer`,2)}var ut=class t{fullScreen=GP(!1,{transform:XP});footerLess=GP(!1,{transform:XP});static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-layout`]],hostAttrs:[1,`app-layout`],inputs:{fullScreen:[1,`fullScreen`],footerLess:[1,`footerLess`]},ngContentSelectors:ml,decls:4,vars:3,consts:[[1,`app-layout__header`],[1,`app-layout__main`],[1,`app-layout__footer`]],template:function(e,n){e&1&&(CI(),bp$1(0,`app-header`,0),li(1,`main`,1),TI(2),vc$1(),lI(3,fl,1,0,`app-footer`,2)),e&2&&(av(),Hp$1(`app-layout__main--full-screen`,n.fullScreen()),av(2),dI(n.footerLess()?-1:3))},dependencies:[Ze$1,zn,qn],styles:[`.app-layout{height:100%;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto 1fr auto;grid-template-areas:"header" "main" "footer"}.app-layout__header{grid-area:header;position:relative;z-index:3;top:0}@media(height>620px){.app-layout__header{position:sticky}}.app-layout__main{grid-area:main;position:relative;z-index:1;padding:2rem var(--%NS%gbl-spacing)}.app-layout__main--full-screen{overflow:auto;padding:0}.app-layout__footer{grid-area:footer;position:relative;z-index:2}
`],encapsulation:2})};var Gn=class t{themeService=b$1(h);static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-palette-gen-demo`]],hostAttrs:[1,`app-palette-gen-demo`],decls:2,vars:0,consts:[[`fullScreen`,``,`footerLess`,``],[1,`app-palette-gen-demo__container`]],template:function(e,n){e&1&&(li(0,`app-layout`,0),bp$1(1,`pg-palette-gen-container`,1),vc$1())},dependencies:[Fn,ut],styles:[`.app-palette-gen-demo{display:block}@media(height>620px){.app-palette-gen-demo{height:100%}}.app-palette-gen-demo__container{height:100%}
`],encapsulation:2})};var Wn=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=FE({type:t,selectors:[[`app-router-layout`]],decls:2,vars:0,template:function(e,n){e&1&&(li(0,`app-layout`),bp$1(1,`router-outlet`),vc$1())},dependencies:[$e,ut],encapsulation:2})};var lo=[{path:``,pathMatch:`full`,component:Gn},{path:`demo`,component:Wn,children:[{path:`overlay`,loadComponent:()=>import(`./chunk-FjZtNhYP.js`)},{path:`cubic-bezier-control`,loadComponent:()=>import(`./chunk-G1bexn4b.js`)},{path:`content`,loadComponent:()=>import(`./chunk-B3IXziLF.js`)}]},{path:`**`,redirectTo:`/`}];var co=()=>GE(()=>{b$1(ml$1).setDefaultFontSetClass(`material-symbols-outlined`)});var uo={providers:[Qg(),DD(),Ur(lo),A(),co()]};Bs$2(jn,uo).catch(t=>console.error(t));export{ra$2 as A,Vt as C,_t as D,Zi as E,bt as O,Tg as S,Z$1 as T,He as _,Md as a,Oe as b,Td as c,Ze$1 as d,Bt$1 as f,Gt as g,Fi$1 as h,Ed as i,vc as j,ne as k,We as l,Fg as m,Ad as n,Pa$1 as o,Ey as p,Dl as r,Sd as s,h as t,Ye as u,Ia$2 as v,W$1 as w,Rg as x,Jl$1 as y};