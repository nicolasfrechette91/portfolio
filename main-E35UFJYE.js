var vS=Object.defineProperty,yS=Object.defineProperties;var wS=Object.getOwnPropertyDescriptors;var Nb=Object.getOwnPropertySymbols;var CS=Object.prototype.hasOwnProperty,DS=Object.prototype.propertyIsEnumerable;var Fb=(t,i,e)=>i in t?vS(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,v=(t,i)=>{for(var e in i||={})CS.call(i,e)&&Fb(t,e,i[e]);if(Nb)for(var e of Nb(i))DS.call(i,e)&&Fb(t,e,i[e]);return t},re=(t,i)=>yS(t,wS(i));var Me=(t,i,e)=>new Promise((n,r)=>{var o=l=>{try{s(e.next(l))}catch(c){r(c)}},a=l=>{try{s(e.throw(l))}catch(c){r(c)}},s=l=>l.done?n(l.value):Promise.resolve(l.value).then(o,a);s((e=e.apply(t,i)).next())});var Qt=null,oc=!1,Rr=1,xS=null,_t=Symbol("SIGNAL");function ie(t){let i=Qt;return Qt=t,i}function cc(){return Qt}var Or={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Nr(t){if(oc)throw new Error("");if(Qt===null)return;Qt.consumerOnSignalRead(t);let i=Qt.producersTail;if(i!==void 0&&i.producer===t)return;let e,n=Qt.recomputing;if(n&&(e=i!==void 0?i.nextProducer:Qt.producers,e!==void 0&&e.producer===t)){Qt.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=Rr;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Qt&&(!n||r.knownValidAtEpoch===Rr))return;let o=Ao(Qt),a={producer:t,consumer:Qt,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:Rr,lastReadVersion:t.version,nextConsumer:void 0};Qt.producersTail=a,i!==void 0?i.nextProducer=a:Qt.producers=a,o&&Bb(t,a)}function Pb(){Rr++}function dc(t){if(!(Ao(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Rr)){if(!t.producerMustRecompute(t)&&!To(t)){lc(t);return}t.producerRecomputeValue(t),lc(t)}}function eh(t){if(t.consumers===void 0)return;let i=oc;oc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let n=e.consumer;n.dirty||ES(n)}}finally{oc=i}}function th(){return Qt?.consumerAllowSignalWrites!==!1}function ES(t){t.dirty=!0,eh(t),t.consumerMarkedDirty?.(t)}function lc(t){t.dirty=!1,t.lastCleanEpoch=Rr}function $i(t){return t&&Lb(t),ie(t)}function Lb(t){if(t.producersTail?.knownValidAtEpoch===Rr){let i=t.producers;for(;i!==void 0;)i.knownValidAtEpoch=null,i=i.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Fr(t,i){ie(i),t&&Vb(t)}function Vb(t){t.recomputing=!1;let i=t.producersTail,e=i!==void 0?i.nextProducer:t.producers;if(e!==void 0){if(Ao(t))do e=nh(e);while(e!==void 0);i!==void 0?i.nextProducer=void 0:t.producers=void 0}}function To(t){for(let i=t.producers;i!==void 0;i=i.nextProducer){let e=i.producer,n=i.lastReadVersion;if(n!==e.version||(dc(e),n!==e.version))return!0}return!1}function Gi(t){if(Ao(t)){let i=t.producers;for(;i!==void 0;)i=nh(i)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Bb(t,i){let e=t.consumersTail,n=Ao(t);if(e!==void 0?(i.nextConsumer=e.nextConsumer,e.nextConsumer=i):(i.nextConsumer=void 0,t.consumers=i),i.prevConsumer=e,t.consumersTail=i,!n)for(let r=t.producers;r!==void 0;r=r.nextProducer)Bb(r.producer,r)}function nh(t){let i=t.producer,e=t.nextProducer,n=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,n!==void 0?n.prevConsumer=r:i.consumersTail=r,r!==void 0)r.nextConsumer=n;else if(i.consumers=n,!Ao(i)){let o=i.producers;for(;o!==void 0;)o=nh(o)}return e}function Ao(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function uc(t){xS?.(t)}function mc(t,i){return Object.is(t,i)}function ts(t,i){let e=Object.create(kS);e.computation=t,i!==void 0&&(e.equal=i);let n=()=>{if(dc(e),Nr(e),e.value===es)throw e.error;return e.value};return n[_t]=e,uc(e),n}var ac=Symbol("UNSET"),sc=Symbol("COMPUTING"),es=Symbol("ERRORED"),kS=re(v({},Or),{value:ac,dirty:!0,error:null,equal:mc,kind:"computed",producerMustRecompute(t){return t.value===ac||t.value===sc},producerRecomputeValue(t){if(t.value===sc)throw new Error("");let i=t.value;t.value=sc;let e=$i(t),n,r=!1;try{n=t.computation(),ie(null),r=i!==ac&&i!==es&&n!==es&&t.equal(i,n)}catch(o){n=es,t.error=o}finally{Fr(t,e)}if(r){t.value=i;return}t.value=n,t.version++}});function SS(){throw new Error}var jb=SS;function Hb(t){jb(t)}function ih(t){jb=t}var IS=null;function rh(t,i){let e=Object.create(ns);e.value=t,i!==void 0&&(e.equal=i);let n=()=>zb(e);return n[_t]=e,uc(e),[n,a=>Ro(e,a),a=>oh(e,a)]}function zb(t){return Nr(t),t.value}function Ro(t,i){th()||Hb(t),t.equal(t.value,i)||(t.value=i,MS(t))}function oh(t,i){th()||Hb(t),Ro(t,i(t.value))}var ns=re(v({},Or),{equal:mc,value:void 0,kind:"signal"});function MS(t){t.version++,Pb(),eh(t),IS?.(t)}var ah=re(v({},Or),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function sh(t){if(t.dirty=!1,t.version>0&&!To(t))return;t.version++;let i=$i(t);try{t.cleanup(),t.fn()}finally{Fr(t,i)}}var lh;function hc(){return lh}function ni(t){let i=lh;return lh=t,i}var Ub=Symbol("NotFound");function Oo(t){return t===Ub||t?.name==="\u0275NotFound"}function $b(t){let i=ie(null);try{return t()}finally{ie(i)}}function he(t){return typeof t=="function"}function No(t){let e=t(n=>{Error.call(n),n.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var pc=No(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((n,r)=>`${r+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Pr(t,i){if(t){let e=t.indexOf(i);0<=e&&t.splice(e,1)}}var de=class t{constructor(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let i;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:n}=this;if(he(n))try{n()}catch(o){i=o instanceof pc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Gb(o)}catch(a){i=i??[],a instanceof pc?i=[...i,...a.errors]:i.push(a)}}if(i)throw new pc(i)}}add(i){var e;if(i&&i!==this)if(this.closed)Gb(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(i)}}_hasParent(i){let{_parentage:e}=this;return e===i||Array.isArray(e)&&e.includes(i)}_addParent(i){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(i),e):e?[e,i]:i}_removeParent(i){let{_parentage:e}=this;e===i?this._parentage=null:Array.isArray(e)&&Pr(e,i)}remove(i){let{_finalizers:e}=this;e&&Pr(e,i),i instanceof t&&i._removeParent(this)}};de.EMPTY=(()=>{let t=new de;return t.closed=!0,t})();var ch=de.EMPTY;function fc(t){return t instanceof de||t&&"closed"in t&&he(t.remove)&&he(t.add)&&he(t.unsubscribe)}function Gb(t){he(t)?t():t.unsubscribe()}var Ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Fo={setTimeout(t,i,...e){let{delegate:n}=Fo;return n?.setTimeout?n.setTimeout(t,i,...e):setTimeout(t,i,...e)},clearTimeout(t){let{delegate:i}=Fo;return(i?.clearTimeout||clearTimeout)(t)},delegate:void 0};function gc(t){Fo.setTimeout(()=>{let{onUnhandledError:i}=Ln;if(i)i(t);else throw t})}function is(){}var Wb=dh("C",void 0,void 0);function qb(t){return dh("E",void 0,t)}function Yb(t){return dh("N",t,void 0)}function dh(t,i,e){return{kind:t,value:i,error:e}}var Lr=null;function Po(t){if(Ln.useDeprecatedSynchronousErrorHandling){let i=!Lr;if(i&&(Lr={errorThrown:!1,error:null}),t(),i){let{errorThrown:e,error:n}=Lr;if(Lr=null,e)throw n}}else t()}function Qb(t){Ln.useDeprecatedSynchronousErrorHandling&&Lr&&(Lr.errorThrown=!0,Lr.error=t)}var Vr=class extends de{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,fc(i)&&i.add(this)):this.destination=RS}static create(i,e,n){return new Vn(i,e,n)}next(i){this.isStopped?mh(Yb(i),this):this._next(i)}error(i){this.isStopped?mh(qb(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?mh(Wb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TS=Function.prototype.bind;function uh(t,i){return TS.call(t,i)}var hh=class{constructor(i){this.partialObserver=i}next(i){let{partialObserver:e}=this;if(e.next)try{e.next(i)}catch(n){_c(n)}}error(i){let{partialObserver:e}=this;if(e.error)try{e.error(i)}catch(n){_c(n)}else _c(i)}complete(){let{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(e){_c(e)}}},Vn=class extends Vr{constructor(i,e,n){super();let r;if(he(i)||!i)r={next:i??void 0,error:e??void 0,complete:n??void 0};else{let o;this&&Ln.useDeprecatedNextContext?(o=Object.create(i),o.unsubscribe=()=>this.unsubscribe(),r={next:i.next&&uh(i.next,o),error:i.error&&uh(i.error,o),complete:i.complete&&uh(i.complete,o)}):r=i}this.destination=new hh(r)}};function _c(t){Ln.useDeprecatedSynchronousErrorHandling?Qb(t):gc(t)}function AS(t){throw t}function mh(t,i){let{onStoppedNotification:e}=Ln;e&&Fo.setTimeout(()=>e(t,i))}var RS={closed:!0,next:is,error:AS,complete:is};var Lo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function cn(t){return t}function ph(...t){return fh(t)}function fh(t){return t.length===0?cn:t.length===1?t[0]:function(e){return t.reduce((n,r)=>r(n),e)}}var pe=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,r){let o=NS(e)?e:new Vn(e,n,r);return Po(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=Kb(n),new n((r,o)=>{let a=new Vn({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[Lo](){return this}pipe(...e){return fh(e)(this)}toPromise(e){return e=Kb(e),new e((n,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>n(o))})}}return t.create=i=>new t(i),t})();function Kb(t){var i;return(i=t??Ln.Promise)!==null&&i!==void 0?i:Promise}function OS(t){return t&&he(t.next)&&he(t.error)&&he(t.complete)}function NS(t){return t&&t instanceof Vr||OS(t)&&fc(t)}function FS(t){return he(t?.lift)}function _e(t){return i=>{if(FS(i))return i.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function ve(t,i,e,n,r){return new gh(t,i,e,n,r)}var gh=class extends Vr{constructor(i,e,n,r,o,a){super(i),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){i.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){i.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(s){i.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((i=this.onFinalize)===null||i===void 0||i.call(this))}}};var Zb=No(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var k=(()=>{class t extends pe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new bc(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new Zb}next(e){Po(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){Po(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){Po(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:r,observers:o}=this;return n||r?ch:(this.currentObservers=null,o.push(e),new de(()=>{this.currentObservers=null,Pr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){let e=new pe;return e.source=this,e}}return t.create=(i,e)=>new bc(i,e),t})(),bc=class extends k{constructor(i,e){super(),this.destination=i,this.source=e}next(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.next)===null||n===void 0||n.call(e,i)}error(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.error)===null||n===void 0||n.call(e,i)}complete(){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||e===void 0||e.call(i)}_subscribe(i){var e,n;return(n=(e=this.source)===null||e===void 0?void 0:e.subscribe(i))!==null&&n!==void 0?n:ch}};var bt=class extends k{constructor(i){super(),this._value=i}get value(){return this.getValue()}_subscribe(i){let e=super._subscribe(i);return!e.closed&&i.next(this._value),e}getValue(){let{hasError:i,thrownError:e,_value:n}=this;if(i)throw e;return this._throwIfClosed(),n}next(i){super.next(this._value=i)}};var rs={now(){return(rs.delegate||Date).now()},delegate:void 0};var ii=class extends k{constructor(i=1/0,e=1/0,n=rs){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){let{isStopped:e,_buffer:n,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(n.push(i),!r&&n.push(o.now()+a)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!i.closed;a+=n?1:2)i.next(o[a]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){let{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:r}=this,o=(r?1:2)*i;if(i<1/0&&o<n.length&&n.splice(0,n.length-o),!r){let a=e.now(),s=0;for(let l=1;l<n.length&&n[l]<=a;l+=2)s=l;s&&n.splice(0,s+1)}}};var vc=class extends de{constructor(i,e){super()}schedule(i,e=0){return this}};var os={setInterval(t,i,...e){let{delegate:n}=os;return n?.setInterval?n.setInterval(t,i,...e):setInterval(t,i,...e)},clearInterval(t){let{delegate:i}=os;return(i?.clearInterval||clearInterval)(t)},delegate:void 0};var yc=class extends vc{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var n;if(this.closed)return this;this.state=i;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(i,e,n=0){return os.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,e,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return e;e!=null&&os.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(i,e);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let n=!1,r;try{this.work(i)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:i,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Pr(n,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}};var Vo=class t{constructor(i,e=t.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,n){return new this.schedulerActionCtor(this,i).schedule(n,e)}};Vo.now=rs.now;var wc=class extends Vo{constructor(i,e=Vo.now){super(i,e),this.actions=[],this._active=!1}flush(i){let{actions:e}=this;if(this._active){e.push(i);return}let n;this._active=!0;do if(n=i.execute(i.state,i.delay))break;while(i=e.shift());if(this._active=!1,n){for(;i=e.shift();)i.unsubscribe();throw n}}};var as=new wc(yc),Xb=as;var vt=new pe(t=>t.complete());function Cc(t){return t&&he(t.schedule)}function _h(t){return t[t.length-1]}function Dc(t){return he(_h(t))?t.pop():void 0}function ri(t){return Cc(_h(t))?t.pop():void 0}function Jb(t,i){return typeof _h(t)=="number"?t.pop():i}function tv(t,i,e,n){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(n.next(u))}catch(m){a(m)}}function l(u){try{c(n.throw(u))}catch(m){a(m)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((n=n.apply(t,i||[])).next())})}function ev(t){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&t[i],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function Br(t){return this instanceof Br?(this.v=t,this):new Br(t)}function nv(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,i||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(g){return function(y){return Promise.resolve(y).then(g,m)}}function s(g,y){n[g]&&(r[g]=function(R){return new Promise(function(K,le){o.push([g,R,K,le])>1||l(g,R)})},y&&(r[g]=y(r[g])))}function l(g,y){try{c(n[g](y))}catch(R){f(o[0][3],R)}}function c(g){g.value instanceof Br?Promise.resolve(g.value.v).then(u,m):f(o[0][2],g)}function u(g){l("next",g)}function m(g){l("throw",g)}function f(g,y){g(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function iv(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t[Symbol.asyncIterator],e;return i?i.call(t):(t=typeof ev=="function"?ev(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var xc=t=>t&&typeof t.length=="number"&&typeof t!="function";function Ec(t){return he(t?.then)}function kc(t){return he(t[Lo])}function Sc(t){return Symbol.asyncIterator&&he(t?.[Symbol.asyncIterator])}function Ic(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function PS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Mc=PS();function Tc(t){return he(t?.[Mc])}function Ac(t){return nv(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:n,done:r}=yield Br(e.read());if(r)return yield Br(void 0);yield yield Br(n)}}finally{e.releaseLock()}})}function Rc(t){return he(t?.getReader)}function Ze(t){if(t instanceof pe)return t;if(t!=null){if(kc(t))return LS(t);if(xc(t))return VS(t);if(Ec(t))return BS(t);if(Sc(t))return rv(t);if(Tc(t))return jS(t);if(Rc(t))return HS(t)}throw Ic(t)}function LS(t){return new pe(i=>{let e=t[Lo]();if(he(e.subscribe))return e.subscribe(i);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function VS(t){return new pe(i=>{for(let e=0;e<t.length&&!i.closed;e++)i.next(t[e]);i.complete()})}function BS(t){return new pe(i=>{t.then(e=>{i.closed||(i.next(e),i.complete())},e=>i.error(e)).then(null,gc)})}function jS(t){return new pe(i=>{for(let e of t)if(i.next(e),i.closed)return;i.complete()})}function rv(t){return new pe(i=>{zS(t,i).catch(e=>i.error(e))})}function HS(t){return rv(Ac(t))}function zS(t,i){var e,n,r,o;return tv(this,void 0,void 0,function*(){try{for(e=iv(t);n=yield e.next(),!n.done;){let a=n.value;if(i.next(a),i.closed)return}}catch(a){r={error:a}}finally{try{n&&!n.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}i.complete()})}function rn(t,i,e,n=0,r=!1){let o=i.schedule(function(){e(),r?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!r)return o}function Oc(t,i=0){return _e((e,n)=>{e.subscribe(ve(n,r=>rn(n,t,()=>n.next(r),i),()=>rn(n,t,()=>n.complete(),i),r=>rn(n,t,()=>n.error(r),i)))})}function Nc(t,i=0){return _e((e,n)=>{n.add(t.schedule(()=>e.subscribe(n),i))})}function ov(t,i){return Ze(t).pipe(Nc(i),Oc(i))}function av(t,i){return Ze(t).pipe(Nc(i),Oc(i))}function sv(t,i){return new pe(e=>{let n=0;return i.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function lv(t,i){return new pe(e=>{let n;return rn(e,i,()=>{n=t[Mc](),rn(e,i,()=>{let r,o;try{({value:r,done:o}=n.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>he(n?.return)&&n.return()})}function Fc(t,i){if(!t)throw new Error("Iterable cannot be null");return new pe(e=>{rn(e,i,()=>{let n=t[Symbol.asyncIterator]();rn(e,i,()=>{n.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function cv(t,i){return Fc(Ac(t),i)}function dv(t,i){if(t!=null){if(kc(t))return ov(t,i);if(xc(t))return sv(t,i);if(Ec(t))return av(t,i);if(Sc(t))return Fc(t,i);if(Tc(t))return lv(t,i);if(Rc(t))return cv(t,i)}throw Ic(t)}function qe(t,i){return i?dv(t,i):Ze(t)}function Q(...t){let i=ri(t);return qe(t,i)}function ss(t,i){let e=he(t)?t:()=>t,n=r=>r.error(e());return new pe(i?r=>i.schedule(n,0,r):n)}function ls(t){return!!t&&(t instanceof pe||he(t.lift)&&he(t.subscribe))}var Ci=No(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function bh(t,i){let e=typeof i=="object";return new Promise((n,r)=>{let o=new Vn({next:a=>{n(a),o.unsubscribe()},error:r,complete:()=>{e?n(i.defaultValue):r(new Ci)}});t.subscribe(o)})}function uv(t){return t instanceof Date&&!isNaN(t)}function ae(t,i){return _e((e,n)=>{let r=0;e.subscribe(ve(n,o=>{n.next(t.call(i,o,r++))}))})}var{isArray:US}=Array;function $S(t,i){return US(i)?t(...i):t(i)}function Pc(t){return ae(i=>$S(t,i))}var{isArray:GS}=Array,{getPrototypeOf:WS,prototype:qS,keys:YS}=Object;function Lc(t){if(t.length===1){let i=t[0];if(GS(i))return{args:i,keys:null};if(QS(i)){let e=YS(i);return{args:e.map(n=>i[n]),keys:e}}}return{args:t,keys:null}}function QS(t){return t&&typeof t=="object"&&WS(t)===qS}function Vc(t,i){return t.reduce((e,n,r)=>(e[n]=i[r],e),{})}function Bo(...t){let i=ri(t),e=Dc(t),{args:n,keys:r}=Lc(t);if(n.length===0)return qe([],i);let o=new pe(KS(n,i,r?a=>Vc(r,a):cn));return e?o.pipe(Pc(e)):o}function KS(t,i,e=cn){return n=>{mv(i,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)mv(i,()=>{let c=qe(t[l],i),u=!1;c.subscribe(ve(n,m=>{o[l]=m,u||(u=!0,s--),s||n.next(e(o.slice()))},()=>{--a||n.complete()}))},n)},n)}}function mv(t,i,e){t?rn(e,t,i):i()}function hv(t,i,e,n,r,o,a,s){let l=[],c=0,u=0,m=!1,f=()=>{m&&!l.length&&!c&&i.complete()},g=R=>c<n?y(R):l.push(R),y=R=>{o&&i.next(R),c++;let K=!1;Ze(e(R,u++)).subscribe(ve(i,le=>{r?.(le),o?g(le):i.next(le)},()=>{K=!0},void 0,()=>{if(K)try{for(c--;l.length&&c<n;){let le=l.shift();a?rn(i,a,()=>y(le)):y(le)}f()}catch(le){i.error(le)}}))};return t.subscribe(ve(i,g,()=>{m=!0,f()})),()=>{s?.()}}function Ot(t,i,e=1/0){return he(i)?Ot((n,r)=>ae((o,a)=>i(n,o,r,a))(Ze(t(n,r))),e):(typeof i=="number"&&(e=i),_e((n,r)=>hv(n,r,t,e)))}function Wi(t=1/0){return Ot(cn,t)}function pv(){return Wi(1)}function qi(...t){return pv()(qe(t,ri(t)))}function Bn(t){return new pe(i=>{Ze(t()).subscribe(i)})}function cs(...t){let i=Dc(t),{args:e,keys:n}=Lc(t),r=new pe(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let m=!1;Ze(e[u]).subscribe(ve(o,f=>{m||(m=!0,c--),s[u]=f},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(n?Vc(n,s):s),o.complete())}))}});return i?r.pipe(Pc(i)):r}function fv(t=0,i,e=Xb){let n=-1;return i!=null&&(Cc(i)?e=i:n=i),new pe(r=>{let o=uv(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=n?this.schedule(void 0,n):r.complete())},o)})}function vn(...t){let i=ri(t),e=Jb(t,1/0),n=t;return n.length?n.length===1?Ze(n[0]):Wi(e)(qe(n,i)):vt}function Ee(t,i){return _e((e,n)=>{let r=0;e.subscribe(ve(n,o=>t.call(i,o,r++)&&n.next(o)))})}function gv(t){return _e((i,e)=>{let n=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,n){n=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};i.subscribe(ve(e,c=>{n=!0,r=c,o||Ze(t(c)).subscribe(o=ve(e,s,l))},()=>{a=!0,(!n||!o||o.closed)&&e.complete()}))})}function Bc(t,i=as){return gv(()=>fv(t,i))}function Yi(t){return _e((i,e)=>{let n=null,r=!1,o;n=i.subscribe(ve(e,void 0,void 0,a=>{o=Ze(t(a,Yi(t)(i))),n?(n.unsubscribe(),n=null,o.subscribe(e)):r=!0})),r&&(n.unsubscribe(),n=null,o.subscribe(e))})}function Qi(t,i){return he(i)?Ot(t,i,1):Ot(t,1)}function ds(t,i=as){return _e((e,n)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,n.next(c)}};function l(){let c=a+t,u=i.now();if(u<c){r=this.schedule(void 0,c-u),n.add(r);return}s()}e.subscribe(ve(n,c=>{o=c,a=i.now(),r||(r=i.schedule(l,t),n.add(r))},()=>{s(),n.complete()},void 0,()=>{o=r=null}))})}function _v(t){return _e((i,e)=>{let n=!1;i.subscribe(ve(e,r=>{n=!0,e.next(r)},()=>{n||e.next(t),e.complete()}))})}function ot(t){return t<=0?()=>vt:_e((i,e)=>{let n=0;i.subscribe(ve(e,r=>{++n<=t&&(e.next(r),t<=n&&e.complete())}))})}function jc(t,i=cn){return t=t??ZS,_e((e,n)=>{let r,o=!0;e.subscribe(ve(n,a=>{let s=i(a);(o||!t(r,s))&&(o=!1,r=s,n.next(a))}))})}function ZS(t,i){return t===i}function bv(t=XS){return _e((i,e)=>{let n=!1;i.subscribe(ve(e,r=>{n=!0,e.next(r)},()=>n?e.complete():e.error(t())))})}function XS(){return new Ci}function jr(t){return _e((i,e)=>{try{i.subscribe(e)}finally{e.add(t)}})}function Di(t,i){let e=arguments.length>=2;return n=>n.pipe(t?Ee((r,o)=>t(r,o,n)):cn,ot(1),e?_v(i):bv(()=>new Ci))}function Hc(t){return t<=0?()=>vt:_e((i,e)=>{let n=[];i.subscribe(ve(e,r=>{n.push(r),t<n.length&&n.shift()},()=>{for(let r of n)e.next(r);e.complete()},void 0,()=>{n=null}))})}function zc(){return _e((t,i)=>{let e,n=!1;t.subscribe(ve(i,r=>{let o=e;e=r,n&&i.next([o,r]),n=!0}))})}function us(t={}){let{connector:i=()=>new k,resetOnError:e=!0,resetOnComplete:n=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},g=()=>{f(),a=l=void 0,u=m=!1},y=()=>{let R=a;g(),R?.unsubscribe()};return _e((R,K)=>{c++,!m&&!u&&f();let le=l=l??i();K.add(()=>{c--,c===0&&!m&&!u&&(s=vh(y,r))}),le.subscribe(K),!a&&c>0&&(a=new Vn({next:Je=>le.next(Je),error:Je=>{m=!0,f(),s=vh(g,e,Je),le.error(Je)},complete:()=>{u=!0,f(),s=vh(g,n),le.complete()}}),Ze(R).subscribe(a))})(o)}}function vh(t,i,...e){if(i===!0){t();return}if(i===!1)return;let n=new Vn({next:()=>{n.unsubscribe(),t()}});return i(...e).subscribe(n)}function Uc(t,i,e){let n,r=!1;return t&&typeof t=="object"?{bufferSize:n=1/0,windowTime:i=1/0,refCount:r=!1,scheduler:e}=t:n=t??1/0,us({connector:()=>new ii(n,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function ms(t){return Ee((i,e)=>t<=e)}function Xe(...t){let i=ri(t);return _e((e,n)=>{(i?qi(t,e,i):qi(t,e)).subscribe(n)})}function ht(t,i){return _e((e,n)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&n.complete();e.subscribe(ve(n,l=>{r?.unsubscribe();let c=0,u=o++;Ze(t(l,u)).subscribe(r=ve(n,m=>n.next(i?i(l,m,u,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function we(t){return _e((i,e)=>{Ze(t).subscribe(ve(e,()=>e.complete(),is)),!e.closed&&i.subscribe(e)})}function yh(t,i=!1){return _e((e,n)=>{let r=0;e.subscribe(ve(n,o=>{let a=t(o,r++);(a||i)&&n.next(o),!a&&n.complete()}))})}function yt(t,i,e){let n=he(t)||i||e?{next:t,error:i,complete:e}:t;return n?_e((r,o)=>{var a;(a=n.subscribe)===null||a===void 0||a.call(n);let s=!0;r.subscribe(ve(o,l=>{var c;(c=n.next)===null||c===void 0||c.call(n,l),o.next(l)},()=>{var l;s=!1,(l=n.complete)===null||l===void 0||l.call(n),o.complete()},l=>{var c;s=!1,(c=n.error)===null||c===void 0||c.call(n,l),o.error(l)},()=>{var l,c;s&&((l=n.unsubscribe)===null||l===void 0||l.call(n)),(c=n.finalize)===null||c===void 0||c.call(n)}))}):cn}var Kc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",N=class extends Error{code;constructor(i,e){super(oi(i,e)),this.code=i}};function JS(t){return`NG0${Math.abs(t)}`}function oi(t,i){return`${JS(t)}${i?": "+i:""}`}function Ve(t){for(let i in t)if(t[i]===Ve)return i;throw Error("")}function Dv(t,i){for(let e in i)i.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=i[e])}function bs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(bs).join(", ")}]`;if(t==null)return""+t;let i=t.overriddenName||t.name;if(i)return`${i}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n>=0?e.slice(0,n):e}function Zc(t,i){return t?i?`${t} ${i}`:t:i||""}var eI=Ve({__forward_ref__:Ve});function It(t){return t.__forward_ref__=It,t}function wt(t){return Oh(t)?t():t}function Oh(t){return typeof t=="function"&&t.hasOwnProperty(eI)&&t.__forward_ref__===It}function te(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function w(t){return{providers:t.providers||[],imports:t.imports||[]}}function vs(t){return tI(t,Xc)}function Nh(t){return vs(t)!==null}function tI(t,i){return t.hasOwnProperty(i)&&t[i]||null}function nI(t){let i=t?.[Xc]??null;return i||null}function Ch(t){return t&&t.hasOwnProperty(Gc)?t[Gc]:null}var Xc=Ve({\u0275prov:Ve}),Gc=Ve({\u0275inj:Ve}),b=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(i,e){this._desc=i,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=te({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Fh(t){return t&&!!t.\u0275providers}var Ph=Ve({\u0275cmp:Ve}),Lh=Ve({\u0275dir:Ve}),Vh=Ve({\u0275pipe:Ve}),Bh=Ve({\u0275mod:Ve}),ps=Ve({\u0275fac:Ve}),Gr=Ve({__NG_ELEMENT_ID__:Ve}),vv=Ve({__NG_ENV_ID__:Ve});function xv(t){return ed(t,"@NgModule"),t[Bh]||null}function ki(t){return ed(t,"@Component"),t[Ph]||null}function Jc(t){return ed(t,"@Directive"),t[Lh]||null}function Ev(t){return ed(t,"@Pipe"),t[Vh]||null}function ed(t,i){if(t==null)throw new N(-919,!1)}function Wr(t){return typeof t=="string"?t:t==null?"":String(t)}var kv=Ve({ngErrorCode:Ve}),iI=Ve({ngErrorMessage:Ve}),rI=Ve({ngTokenPath:Ve});function jh(t,i){return Sv("",-200,i)}function td(t,i){throw new N(-201,!1)}function Sv(t,i,e){let n=new N(i,t);return n[kv]=i,n[iI]=t,e&&(n[rI]=e),n}function oI(t){return t[kv]}var Dh;function Iv(){return Dh}function Kt(t){let i=Dh;return Dh=t,i}function Hh(t,i,e){let n=vs(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(e&8)return null;if(i!==void 0)return i;td(t,"")}var zt=globalThis;var aI={},Hr=aI,sI="__NG_DI_FLAG__",xh=class{injector;constructor(i){this.injector=i}retrieve(i,e){let n=zr(e)||0;try{return this.injector.get(i,n&8?null:Hr,n)}catch(r){if(Oo(r))return r;throw r}}};function lI(t,i=0){let e=hc();if(e===void 0)throw new N(-203,!1);if(e===null)return Hh(t,void 0,i);{let n=cI(i),r=e.retrieve(t,n);if(Oo(r)){if(n.optional)return null;throw r}return r}}function W(t,i=0){return(Iv()||lI)(wt(t),i)}function d(t,i){return W(t,zr(i))}function zr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function cI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Eh(t){let i=[];for(let e=0;e<t.length;e++){let n=wt(t[e]);if(Array.isArray(n)){if(n.length===0)throw new N(900,!1);let r,o=0;for(let a=0;a<n.length;a++){let s=n[a],l=dI(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}i.push(W(r,o))}else i.push(W(n))}return i}function dI(t){return t[sI]}function Ki(t,i){let e=t.hasOwnProperty(ps);return e?t[ps]:null}function Mv(t,i,e){if(t.length!==i.length)return!1;for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Tv(t){return t.flat(Number.POSITIVE_INFINITY)}function nd(t,i){t.forEach(e=>Array.isArray(e)?nd(e,i):i(e))}function zh(t,i,e){i>=t.length?t.push(e):t.splice(i,0,e)}function ys(t,i){return i>=t.length-1?t.pop():t.splice(i,1)[0]}function Av(t,i){let e=[];for(let n=0;n<t;n++)e.push(i);return e}function Rv(t,i,e,n){let r=t.length;if(r==i)t.push(e,n);else if(r===1)t.push(n,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>i;){let o=r-2;t[r]=t[o],r--}t[i]=e,t[i+1]=n}}function id(t,i,e){let n=zo(t,i);return n>=0?t[n|1]=e:(n=~n,Rv(t,n,i,e)),n}function rd(t,i){let e=zo(t,i);if(e>=0)return t[e|1]}function zo(t,i){return uI(t,i,1)}function uI(t,i,e){let n=0,r=t.length>>e;for(;r!==n;){let o=n+(r-n>>1),a=t[o<<e];if(i===a)return o<<e;a>i?r=o:n=o+1}return~(r<<e)}var Xi={},Ht=[],Ji=new b(""),ws=new b("",-1),Uh=new b(""),Ho=class{get(i,e=Hr){if(e===Hr){let r=Sv("",-201);throw r.name="\u0275NotFound",r}return e}};function er(t){return{\u0275providers:t}}function Ov(...t){return{\u0275providers:$h(!0,t),\u0275fromNgModule:!0}}function $h(t,...i){let e=[],n=new Set,r,o=a=>{e.push(a)};return nd(i,a=>{let s=a;Wc(s,o,[],n)&&(r||=[],r.push(s))}),r!==void 0&&Nv(r,o),e}function Nv(t,i){for(let e=0;e<t.length;e++){let{ngModule:n,providers:r}=t[e];Gh(r,o=>{i(o,n)})}}function Wc(t,i,e,n){if(t=wt(t),!t)return!1;let r=null,o=Ch(t),a=!o&&ki(t);if(!o&&!a){let l=t.ngModule;if(o=Ch(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=n.has(r);if(a){if(s)return!1;if(n.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Wc(c,i,e,n)}}else if(o){if(o.imports!=null&&!s){n.add(r);let c;nd(o.imports,u=>{Wc(u,i,e,n)&&(c||=[],c.push(u))}),c!==void 0&&Nv(c,i)}if(!s){let c=Ki(r)||(()=>new r);i({provide:r,useFactory:c,deps:Ht},r),i({provide:Uh,useValue:r,multi:!0},r),i({provide:Ji,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Gh(l,u=>{i(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Gh(t,i){for(let e of t)Fh(e)&&(e=e.\u0275providers),Array.isArray(e)?Gh(e,i):i(e)}var mI=Ve({provide:String,useValue:Ve});function Fv(t){return t!==null&&typeof t=="object"&&mI in t}function hI(t){return!!(t&&t.useExisting)}function pI(t){return!!(t&&t.useFactory)}function Ur(t){return typeof t=="function"}function Pv(t){return!!t.useClass}var Cs=new b(""),$c={},yv={},wh;function Uo(){return wh===void 0&&(wh=new Ho),wh}var Be=class{},$r=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(i,e,n,r){super(),this.parent=e,this.source=n,this.scopes=r,Sh(i,a=>this.processProvider(a)),this.records.set(ws,jo(void 0,this)),r.has("environment")&&this.records.set(Be,jo(void 0,this));let o=this.records.get(Cs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Uh,Ht,{self:!0}))}retrieve(i,e){let n=zr(e)||0;try{return this.get(i,Hr,n)}catch(r){if(Oo(r))return r;throw r}}destroy(){hs(this),this._destroyed=!0;let i=ie(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ie(i)}}onDestroy(i){return hs(this),this._onDestroyHooks.push(i),()=>this.removeOnDestroy(i)}runInContext(i){hs(this);let e=ni(this),n=Kt(void 0),r;try{return i()}finally{ni(e),Kt(n)}}get(i,e=Hr,n){if(hs(this),i.hasOwnProperty(vv))return i[vv](this);let r=zr(n),o,a=ni(this),s=Kt(void 0);try{if(!(r&4)){let c=this.records.get(i);if(c===void 0){let u=vI(i)&&vs(i);u&&this.injectableDefInScope(u)?c=jo(kh(i),$c):c=null,this.records.set(i,c)}if(c!=null)return this.hydrate(i,c,r)}let l=r&2?Uo():this.parent;return e=r&8&&e===Hr?null:e,l.get(i,e)}catch(l){let c=oI(l);throw c===-200||c===-201?new N(c,null):l}finally{Kt(s),ni(a)}}resolveInjectorInitializers(){let i=ie(null),e=ni(this),n=Kt(void 0),r;try{let o=this.get(Ji,Ht,{self:!0});for(let a of o)a()}finally{ni(e),Kt(n),ie(i)}}toString(){return"R3Injector[...]"}processProvider(i){i=wt(i);let e=Ur(i)?i:wt(i&&i.provide),n=gI(i);if(!Ur(i)&&i.multi===!0){let r=this.records.get(e);r||(r=jo(void 0,$c,!0),r.factory=()=>Eh(r.multi),this.records.set(e,r)),e=i,r.multi.push(i)}this.records.set(e,n)}hydrate(i,e,n){let r=ie(null);try{if(e.value===yv)throw jh("");return e.value===$c&&(e.value=yv,e.value=e.factory(void 0,n)),typeof e.value=="object"&&e.value&&bI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ie(r)}}injectableDefInScope(i){if(!i.providedIn)return!1;let e=wt(i.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(i){let e=this._onDestroyHooks.indexOf(i);e!==-1&&this._onDestroyHooks.splice(e,1)}};function kh(t){let i=vs(t),e=i!==null?i.factory:Ki(t);if(e!==null)return e;if(t instanceof b)throw new N(-204,!1);if(t instanceof Function)return fI(t);throw new N(-204,!1)}function fI(t){if(t.length>0)throw new N(-204,!1);let e=nI(t);return e!==null?()=>e.factory(t):()=>new t}function gI(t){if(Fv(t))return jo(void 0,t.useValue);{let i=Wh(t);return jo(i,$c)}}function Wh(t,i,e){let n;if(Ur(t)){let r=wt(t);return Ki(r)||kh(r)}else if(Fv(t))n=()=>wt(t.useValue);else if(pI(t))n=()=>t.useFactory(...Eh(t.deps||[]));else if(hI(t))n=(r,o)=>W(wt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=wt(t&&(t.useClass||t.provide));if(_I(t))n=()=>new r(...Eh(t.deps));else return Ki(r)||kh(r)}return n}function hs(t){if(t.destroyed)throw new N(-205,!1)}function jo(t,i,e=!1){return{factory:t,value:i,multi:e?[]:void 0}}function _I(t){return!!t.deps}function bI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function vI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Sh(t,i){for(let e of t)Array.isArray(e)?Sh(e,i):e&&Fh(e)?Sh(e.\u0275providers,i):i(e)}function Dt(t,i){let e;t instanceof $r?(hs(t),e=t):e=new xh(t);let n,r=ni(e),o=Kt(void 0);try{return i()}finally{ni(r),Kt(o)}}function qh(){return Iv()!==void 0||hc()!=null}var Hn=0,ee=1,se=2,Ct=3,yn=4,Ut=5,qr=6,$o=7,st=8,ai=9,zn=10,ze=11,Go=12,Yh=13,tr=14,Zt=15,nr=16,Yr=17,si=18,li=19,Qh=20,xi=21,od=22,Zi=23,dn=24,Qr=25,ci=26,et=27,Lv=1,Kh=6,ir=7,Ds=8,Kr=9,rt=10;function Si(t){return Array.isArray(t)&&typeof t[Lv]=="object"}function wn(t){return Array.isArray(t)&&t[Lv]===!0}function Zh(t){return(t.flags&4)!==0}function di(t){return t.componentOffset>-1}function Wo(t){return(t.flags&1)===1}function Un(t){return!!t.template}function qo(t){return(t[se]&512)!==0}function Zr(t){return(t[se]&256)===256}var Xh="svg",Vv="math";function Cn(t){for(;Array.isArray(t);)t=t[Hn];return t}function Jh(t,i){return Cn(i[t])}function Dn(t,i){return Cn(i[t.index])}function ad(t,i){return t.data[i]}function sd(t,i){return t[i]}function ep(t,i,e,n){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),i[e]=n}function xn(t,i){let e=i[t];return Si(e)?e:e[Hn]}function Bv(t){return(t[se]&4)===4}function ld(t){return(t[se]&128)===128}function jv(t){return wn(t[Ct])}function un(t,i){return i==null?null:t[i]}function tp(t){t[Yr]=0}function np(t){t[se]&1024||(t[se]|=1024,ld(t)&&Xr(t))}function Hv(t,i){for(;t>0;)i=i[tr],t--;return i}function xs(t){return!!(t[se]&9216||t[dn]?.dirty)}function cd(t){t[zn].changeDetectionScheduler?.notify(8),t[se]&64&&(t[se]|=1024),xs(t)&&Xr(t)}function Xr(t){t[zn].changeDetectionScheduler?.notify(0);let i=Ei(t);for(;i!==null&&!(i[se]&8192||(i[se]|=8192,!ld(i)));)i=Ei(i)}function dd(t,i){if(Zr(t))throw new N(911,!1);t[xi]===null&&(t[xi]=[]),t[xi].push(i)}function zv(t,i){if(t[xi]===null)return;let e=t[xi].indexOf(i);e!==-1&&t[xi].splice(e,1)}function Ei(t){let i=t[Ct];return wn(i)?i[Ct]:i}function ip(t){return t[$o]??=[]}function rp(t){return t.cleanup??=[]}function Uv(t,i,e,n){let r=ip(i);r.push(e),t.firstCreatePass&&rp(t).push(n,r.length-1)}var be={lFrame:ty(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ih=!1;function $v(){return be.lFrame.elementDepthCount}function Gv(){be.lFrame.elementDepthCount++}function op(){be.lFrame.elementDepthCount--}function ud(){return be.bindingsEnabled}function ap(){return be.skipHydrationRootTNode!==null}function sp(t){return be.skipHydrationRootTNode===t}function lp(){be.skipHydrationRootTNode=null}function ne(){return be.lFrame.lView}function Ye(){return be.lFrame.tView}function Re(t){return be.lFrame.contextLView=t,t[st]}function Oe(t){return be.lFrame.contextLView=null,t}function xt(){let t=cp();for(;t!==null&&t.type===64;)t=t.parent;return t}function cp(){return be.lFrame.currentTNode}function Wv(){let t=be.lFrame,i=t.currentTNode;return t.isParent?i:i.parent}function Yo(t,i){let e=be.lFrame;e.currentTNode=t,e.isParent=i}function dp(){return be.lFrame.isParent}function up(){be.lFrame.isParent=!1}function qv(){return be.lFrame.contextLView}function mp(){return Ih}function fs(t){let i=Ih;return Ih=t,i}function Es(){let t=be.lFrame,i=t.bindingRootIndex;return i===-1&&(i=t.bindingRootIndex=t.tView.bindingStartIndex),i}function Yv(){return be.lFrame.bindingIndex}function Qv(t){return be.lFrame.bindingIndex=t}function ui(){return be.lFrame.bindingIndex++}function md(t){let i=be.lFrame,e=i.bindingIndex;return i.bindingIndex=i.bindingIndex+t,e}function Kv(){return be.lFrame.inI18n}function Zv(t,i){let e=be.lFrame;e.bindingIndex=e.bindingRootIndex=t,hd(i)}function Xv(){return be.lFrame.currentDirectiveIndex}function hd(t){be.lFrame.currentDirectiveIndex=t}function Jv(t){let i=be.lFrame.currentDirectiveIndex;return i===-1?null:t[i]}function pd(){return be.lFrame.currentQueryIndex}function ks(t){be.lFrame.currentQueryIndex=t}function yI(t){let i=t[ee];return i.type===2?i.declTNode:i.type===1?t[Ut]:null}function hp(t,i,e){if(e&4){let r=i,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=yI(o),r===null||(o=o[tr],r.type&10))break;if(r===null)return!1;i=r,t=o}let n=be.lFrame=ey();return n.currentTNode=i,n.lView=t,!0}function fd(t){let i=ey(),e=t[ee];be.lFrame=i,i.currentTNode=e.firstChild,i.lView=t,i.tView=e,i.contextLView=t,i.bindingIndex=e.bindingStartIndex,i.inI18n=!1}function ey(){let t=be.lFrame,i=t===null?null:t.child;return i===null?ty(t):i}function ty(t){let i={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=i),i}function ny(){let t=be.lFrame;return be.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var pp=ny;function gd(){let t=ny();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function iy(t){return(be.lFrame.contextLView=Hv(t,be.lFrame.contextLView))[st]}function mi(){return be.lFrame.selectedIndex}function rr(t){be.lFrame.selectedIndex=t}function Qo(){let t=be.lFrame;return ad(t.tView,t.selectedIndex)}function Ne(){be.lFrame.currentNamespace=Xh}function Nt(){wI()}function wI(){be.lFrame.currentNamespace=null}function fp(){return be.lFrame.currentNamespace}var ry=!0;function _d(){return ry}function Ss(t){ry=t}function Mh(t,i=null,e=null,n){let r=gp(t,i,e,n);return r.resolveInjectorInitializers(),r}function gp(t,i=null,e=null,n,r=new Set){let o=[e||Ht,Ov(t)],a;return new $r(o,i||Uo(),a||null,r)}var Z=class t{static THROW_IF_NOT_FOUND=Hr;static NULL=new Ho;static create(i,e){if(Array.isArray(i))return Mh({name:""},e,i,"");{let n=i.name??"";return Mh({name:n},i.parent,i.providers,n)}}static \u0275prov=te({token:t,providedIn:"any",factory:()=>W(ws)});static __NG_ELEMENT_ID__=-1},X=new b(""),Mt=(()=>{class t{static __NG_ELEMENT_ID__=CI;static __NG_ENV_ID__=e=>e}return t})(),qc=class extends Mt{_lView;constructor(i){super(),this._lView=i}get destroyed(){return Zr(this._lView)}onDestroy(i){let e=this._lView;return dd(e,i),()=>zv(e,i)}};function CI(){return new qc(ne())}var _p=!1,oy=new b(""),$n=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new bt(!1);debugTaskTracker=d(oy,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new pe(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=te({token:t,providedIn:"root",factory:()=>new t})}return t})(),Th=class extends k{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(i=!1){super(),this.__isAsync=i,qh()&&(this.destroyRef=d(Mt,{optional:!0})??void 0,this.pendingTasks=d($n,{optional:!0})??void 0)}emit(i){let e=ie(null);try{super.next(i)}finally{ie(e)}}subscribe(i,e,n){let r=i,o=e||(()=>null),a=n;if(i&&typeof i=="object"){let l=i;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return i instanceof de&&i.add(s),s}wrapInTimeout(i){return e=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{i(e)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},M=Th;function Yc(...t){}function bp(t){let i,e;function n(){t=Yc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),i!==void 0&&clearTimeout(i)}catch(r){}}return i=setTimeout(()=>{t(),n()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),n()})),()=>n()}function ay(t){return queueMicrotask(()=>t()),()=>{t=Yc}}var vp="isAngularZone",gs=vp+"_ID",DI=0,B=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new M(!1);onMicrotaskEmpty=new M(!1);onStable=new M(!1);onError=new M(!1);constructor(i){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=_p}=i;if(typeof Zone>"u")throw new N(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&n,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,kI(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(vp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new N(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new N(909,!1)}run(i,e,n){return this._inner.run(i,e,n)}runTask(i,e,n,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,i,xI,Yc,Yc);try{return o.runTask(a,e,n)}finally{o.cancelTask(a)}}runGuarded(i,e,n){return this._inner.runGuarded(i,e,n)}runOutsideAngular(i){return this._outer.run(i)}},xI={};function yp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function EI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function i(){bp(()=>{t.callbackScheduled=!1,Ah(t),t.isCheckStableRunning=!0,yp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{i()}):t._outer.run(()=>{i()}),Ah(t)}function kI(t){let i=()=>{EI(t)},e=DI++;t._inner=t._inner.fork({name:"angular",properties:{[vp]:!0,[gs]:e,[gs+e]:!0},onInvokeTask:(n,r,o,a,s,l)=>{if(SI(l))return n.invokeTask(o,a,s,l);try{return wv(t),n.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&i(),Cv(t)}},onInvoke:(n,r,o,a,s,l,c)=>{try{return wv(t),n.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!II(l)&&i(),Cv(t)}},onHasTask:(n,r,o,a)=>{n.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Ah(t),yp(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(n,r,o,a)=>(n.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Ah(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function wv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Cv(t){t._nesting--,yp(t)}var _s=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new M;onMicrotaskEmpty=new M;onStable=new M;onError=new M;run(i,e,n){return i.apply(e,n)}runGuarded(i,e,n){return i.apply(e,n)}runOutsideAngular(i){return i()}runTask(i,e,n,r){return i.apply(e,n)}};function SI(t){return sy(t,"__ignore_ng_zone__")}function II(t){return sy(t,"__scheduler_tick__")}function sy(t,i){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[i]===!0}var on=class{_console=console;handleError(i){this._console.error("ERROR",i)}},En=new b("",{factory:()=>{let t=d(B),i=d(Be),e;return n=>{t.runOutsideAngular(()=>{i.destroyed&&!e?setTimeout(()=>{throw n}):(e??=i.get(on),e.handleError(n))})}}}),ly={provide:Ji,useValue:()=>{let t=d(on,{optional:!0})},multi:!0};function Y(t,i){let[e,n,r]=rh(t,i?.equal),o=e,a=o[_t];return o.set=n,o.update=r,o.asReadonly=cy.bind(o),o}function cy(){let t=this[_t];if(t.readonlyFn===void 0){let i=()=>this();i[_t]=t,t.readonlyFn=i}return t.readonlyFn}var Ii=new b("",{factory:()=>MI}),MI="ng";var bd=new b(""),Jr=new b("",{providedIn:"platform",factory:()=>"unknown"}),Is=new b(""),or=new b("",{factory:()=>d(X).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Ko=(()=>{class t{view;node;constructor(e,n){this.view=e,this.node=n}static __NG_ELEMENT_ID__=TI}return t})();function TI(){return new Ko(ne(),xt())}var jn=class{},Zo=new b("",{factory:()=>!0});var vd=new b(""),yd=(()=>{class t{static \u0275prov=te({token:t,providedIn:"root",factory:()=>new Rh})}return t})(),Rh=class{dirtyEffectCount=0;queues=new Map;add(i){this.enqueue(i),this.schedule(i)}schedule(i){i.dirty&&this.dirtyEffectCount++}remove(i){let e=i.zone,n=this.queues.get(e);n.has(i)&&(n.delete(i),i.dirty&&this.dirtyEffectCount--)}enqueue(i){let e=i.zone;this.queues.has(e)||this.queues.set(e,new Set);let n=this.queues.get(e);n.has(i)||n.add(i)}flush(){for(;this.dirtyEffectCount>0;){let i=!1;for(let[e,n]of this.queues)e===null?i||=this.flushQueue(n):i||=e.run(()=>this.flushQueue(n));i||(this.dirtyEffectCount=0)}}flushQueue(i){let e=!1;for(let n of i)n.dirty&&(this.dirtyEffectCount--,e=!0,n.run());return e}},Qc=class{[_t];constructor(i){this[_t]=i}destroy(){this[_t].destroy()}};function Mi(t,i){let e=i?.injector??d(Z),n=i?.manualCleanup!==!0?e.get(Mt):null,r,o=e.get(Ko,null,{optional:!0}),a=e.get(jn);return o!==null?(r=OI(o.view,a,t),n instanceof qc&&n._lView===o.view&&(n=null)):r=NI(t,e.get(yd),a),r.injector=e,n!==null&&(r.onDestroyFns=[n.onDestroy(()=>r.destroy())]),new Qc(r)}var dy=re(v({},ah),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=fs(!1);try{sh(this)}finally{fs(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ie(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ie(t)}}}),AI=re(v({},dy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Gi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),RI=re(v({},dy),{consumerMarkedDirty(){this.view[se]|=8192,Xr(this.view),this.notifier.notify(13)},destroy(){if(Gi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Zi]?.delete(this)}});function OI(t,i,e){let n=Object.create(RI);return n.view=t,n.zone=typeof Zone<"u"?Zone.current:null,n.notifier=i,n.fn=uy(n,e),t[Zi]??=new Set,t[Zi].add(n),n.consumerMarkedDirty(n),n}function NI(t,i,e){let n=Object.create(AI);return n.fn=uy(n,t),n.scheduler=i,n.notifier=e,n.zone=typeof Zone<"u"?Zone.current:null,n.scheduler.add(n),n.notifier.notify(12),n}function uy(t,i){return()=>{i(e=>(t.cleanupFns??=[]).push(e))}}function Gn(t){return typeof t=="function"&&t[_t]!==void 0}function wd(t){return Gn(t)&&typeof t.set=="function"}var Cd=(()=>{class t{internalPendingTasks=d($n);scheduler=d(jn);errorHandler=d(En);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let n=this.add();try{e().catch(this.errorHandler).finally(n)}catch(r){this.errorHandler(r),n()}}static \u0275prov=te({token:t,providedIn:"root",factory:()=>new t})}return t})();function Bs(t){return{toString:t}.toString()}var Fe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Fe||{}),Od=class{previousValue;currentValue;firstChange;constructor(i,e,n){this.previousValue=i,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}};function Ky(t,i,e,n){i!==null?i.applyValueToInputSignal(i,n):t[e]=n}var Zy=null,Ce=(()=>{Zy=my;let t=()=>my;return t.ngInherit=!0,t})();function $I(){return Zy}function my(t){return t.type.prototype.ngOnChanges&&(t.setInput=WI),GI}function GI(){let t=Xy(this),i=t?.current;if(i){let e=t.previous;if(e===Xi)t.previous=i;else for(let n in i)e[n]=i[n];t.current=null,this.ngOnChanges(i)}}function WI(t,i,e,n,r){let o=this.declaredInputs[n],a=Xy(t)||qI(t,{previous:Xi,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Od(c&&c.currentValue,e,l===Xi),Ky(t,i,r,e)}var Ap="__ngSimpleChanges__";function Xy(t){return Object.hasOwn(t,Ap)&&t[Ap]||null}function qI(t,i){return t[Ap]=i}var hy=[];var We=function(t,i=null,e){for(let n=0;n<hy.length;n++){let r=hy[n];r(t,i,e)}};function YI(t,i,e){let{ngOnChanges:n,ngOnInit:r,ngDoCheck:o}=i.type.prototype;if(n){let a=$I()(i);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Jy(t,i){for(let e=i.directiveStart,n=i.directiveEnd;e<n;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function Id(t,i,e){e0(t,i,3,e)}function Md(t,i,e,n){(t[se]&3)===e&&e0(t,i,e,n)}function wp(t,i){let e=t[se];(e&3)===i&&(e&=16383,e+=1,t[se]=e)}function e0(t,i,e,n){let r=n!==void 0?t[Yr]&65535:0,o=n??-1,a=i.length-1,s=0;for(let l=r;l<a;l++)if(typeof i[l+1]=="number"){if(s=i[l],n!=null&&s>=n)break}else i[l]<0&&(t[Yr]+=65536),(s<o||o==-1)&&(QI(t,e,i,l),t[Yr]=(t[Yr]&4294901760)+l+2),l++}function py(t,i){We(Fe.LifecycleHookStart,t,i);let e=ie(null);try{i.call(t)}finally{ie(e),We(Fe.LifecycleHookEnd,t,i)}}function QI(t,i,e,n){let r=e[n]<0,o=e[n+1],a=r?-e[n]:e[n],s=t[a];r?t[se]>>14<t[Yr]>>16&&(t[se]&3)===i&&(t[se]+=16384,py(s,o)):py(s,o)}var Jo=-1,eo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(i,e,n,r){this.factory=i,this.name=r,this.canSeeViewProviders=e,this.injectImpl=n}};function KI(t){return(t.flags&8)!==0}function ZI(t){return(t.flags&16)!==0}function XI(t,i,e){let n=0;for(;n<e.length;){let r=e[n];if(typeof r=="number"){if(r!==0)break;n++;let o=e[n++],a=e[n++],s=e[n++];t.setAttribute(i,a,s,o)}else{let o=r,a=e[++n];JI(o)?t.setProperty(i,o,a):t.setAttribute(i,o,a),n++}}return n}function t0(t){return t===3||t===4||t===6}function JI(t){return t.charCodeAt(0)===64}function ea(t,i){if(!(i===null||i.length===0))if(t===null||t.length===0)t=i.slice();else{let e=-1;for(let n=0;n<i.length;n++){let r=i[n];typeof r=="number"?e=r:e===0||(e===-1||e===2?fy(t,e,r,null,i[++n]):fy(t,e,r,null,null))}}return t}function fy(t,i,e,n,r){let o=0,a=t.length;if(i===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===i){a=-1;break}else if(s>i){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,i),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function n0(t){return t!==Jo}function Nd(t){return t&32767}function eM(t){return t>>16}function Fd(t,i){let e=eM(t),n=i;for(;e>0;)n=n[tr],e--;return n}var Rp=!0;function Pd(t){let i=Rp;return Rp=t,i}var tM=256,i0=tM-1,r0=5,nM=0,hi={};function iM(t,i,e){let n;typeof e=="string"?n=e.charCodeAt(0)||0:e.hasOwnProperty(Gr)&&(n=e[Gr]),n==null&&(n=e[Gr]=nM++);let r=n&i0,o=1<<r;i.data[t+(r>>r0)]|=o}function Ld(t,i){let e=o0(t,i);if(e!==-1)return e;let n=i[ee];n.firstCreatePass&&(t.injectorIndex=i.length,Cp(n.data,t),Cp(i,null),Cp(n.blueprint,null));let r=gf(t,i),o=t.injectorIndex;if(n0(r)){let a=Nd(r),s=Fd(r,i),l=s[ee].data;for(let c=0;c<8;c++)i[o+c]=s[a+c]|l[a+c]}return i[o+8]=r,o}function Cp(t,i){t.push(0,0,0,0,0,0,0,0,i)}function o0(t,i){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||i[t.injectorIndex+8]===null?-1:t.injectorIndex}function gf(t,i){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,n=null,r=i;for(;r!==null;){if(n=d0(r),n===null)return Jo;if(e++,r=r[tr],n.injectorIndex!==-1)return n.injectorIndex|e<<16}return Jo}function Op(t,i,e){iM(t,i,e)}function rM(t,i){if(i==="class")return t.classes;if(i==="style")return t.styles;let e=t.attrs;if(e){let n=e.length,r=0;for(;r<n;){let o=e[r];if(t0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<n&&typeof e[r]=="string";)r++;else{if(o===i)return e[r+1];r=r+2}}}return null}function a0(t,i,e){if(e&8||t!==void 0)return t;td(i,"NodeInjector")}function s0(t,i,e,n){if(e&8&&n===void 0&&(n=null),(e&3)===0){let r=t[ai],o=Kt(void 0);try{return r?r.get(i,n,e&8):Hh(i,n,e&8)}finally{Kt(o)}}return a0(n,i,e)}function l0(t,i,e,n=0,r){if(t!==null){if(i[se]&2048&&!(n&2)){let a=lM(t,i,e,n,hi);if(a!==hi)return a}let o=c0(t,i,e,n,hi);if(o!==hi)return o}return s0(i,e,n,r)}function c0(t,i,e,n,r){let o=aM(e);if(typeof o=="function"){if(!hp(i,t,n))return n&1?a0(r,e,n):s0(i,e,n,r);try{let a;if(a=o(n),a==null&&!(n&8))td(e);else return a}finally{pp()}}else if(typeof o=="number"){let a=null,s=o0(t,i),l=Jo,c=n&1?i[Zt][Ut]:null;for((s===-1||n&4)&&(l=s===-1?gf(t,i):i[s+8],l===Jo||!_y(n,!1)?s=-1:(a=i[ee],s=Nd(l),i=Fd(l,i)));s!==-1;){let u=i[ee];if(gy(o,s,u.data)){let m=oM(s,i,e,a,n,c);if(m!==hi)return m}l=i[s+8],l!==Jo&&_y(n,i[ee].data[s+8]===c)&&gy(o,s,i)?(a=u,s=Nd(l),i=Fd(l,i)):s=-1}}return r}function oM(t,i,e,n,r,o){let a=i[ee],s=a.data[t+8],l=n==null?di(s)&&Rp:n!=a&&(s.type&3)!==0,c=r&1&&o===s,u=Td(s,a,e,l,c);return u!==null?Rs(i,a,u,s,r):hi}function Td(t,i,e,n,r){let o=t.providerIndexes,a=i.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,m=n?s:s+u,f=r?s+u:c;for(let g=m;g<f;g++){let y=a[g];if(g<l&&e===y||g>=l&&y.type===e)return g}if(r){let g=a[l];if(g&&Un(g)&&g.type===e)return l}return null}function Rs(t,i,e,n,r){let o=t[e],a=i.data;if(o instanceof eo){let s=o;if(s.resolving)throw jh("");let l=Pd(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,m=s.injectImpl?Kt(s.injectImpl):null,f=hp(t,n,0);try{o=t[e]=s.factory(void 0,r,a,t,n),i.firstCreatePass&&e>=n.directiveStart&&YI(e,a[e],i)}finally{m!==null&&Kt(m),Pd(l),s.resolving=!1,pp()}}return o}function aM(t){if(typeof t=="string")return t.charCodeAt(0)||0;let i=t.hasOwnProperty(Gr)?t[Gr]:void 0;return typeof i=="number"?i>=0?i&i0:sM:i}function gy(t,i,e){let n=1<<t;return!!(e[i+(t>>r0)]&n)}function _y(t,i){return!(t&2)&&!(t&1&&i)}var ar=class{_tNode;_lView;constructor(i,e){this._tNode=i,this._lView=e}get(i,e,n){return l0(this._tNode,this._lView,i,zr(n),e)}};function sM(){return new ar(xt(),ne())}function nt(t){return Bs(()=>{let i=t.prototype.constructor,e=i[ps]||Np(i),n=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==n;){let o=r[ps]||Np(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Np(t){return Oh(t)?()=>{let i=Np(wt(t));return i&&i()}:Ki(t)}function lM(t,i,e,n,r){let o=t,a=i;for(;o!==null&&a!==null&&a[se]&2048&&!qo(a);){let s=c0(o,a,e,n|2,hi);if(s!==hi)return s;let l=o.parent;if(!l){let c=a[Qh];if(c){let u=c.get(e,hi,n&-5);if(u!==hi)return u}l=d0(a),a=a[tr]}o=l}return r}function d0(t){let i=t[ee],e=i.type;return e===2?i.declTNode:e===1?t[Ut]:null}function Yd(t){return rM(xt(),t)}function u0(t){let i=zt.ng;if(i&&i.\u0275compilerFacade)return i.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function O(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function cM(){return oa(xt(),ne())}function oa(t,i){return new H(Dn(t,i))}var H=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=cM}return t})();function m0(t){return t instanceof H?t.nativeElement:t}function dM(){return this._results[Symbol.iterator]()}var mn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new k}constructor(i=!1){this._emitDistinctChangesOnly=i}get(i){return this._results[i]}map(i){return this._results.map(i)}filter(i){return this._results.filter(i)}find(i){return this._results.find(i)}reduce(i,e){return this._results.reduce(i,e)}forEach(i){this._results.forEach(i)}some(i){return this._results.some(i)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(i,e){this.dirty=!1;let n=Tv(i);(this._changesDetected=!Mv(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(i){this._onDirty=i}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=dM};function h0(t){return(t.flags&128)===128}var _f=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(_f||{}),p0=new Map,uM=0;function mM(){return uM++}function hM(t){p0.set(t[li],t)}function Fp(t){p0.delete(t[li])}var by="__ngContext__";function ta(t,i){Si(i)?(t[by]=i[li],hM(i)):t[by]=i}function f0(t){return _0(t[Go])}function g0(t){return _0(t[yn])}function _0(t){for(;t!==null&&!wn(t);)t=t[yn];return t}var Pp;function bf(t){Pp=t}function b0(){if(Pp!==void 0)return Pp;if(typeof document<"u")return document;throw new N(210,!1)}var v0="r";var y0="di";var vf=new b(""),w0=!1,C0=new b("",{factory:()=>w0});var Qd=new b("");var vy=new WeakMap;function pM(t,i){if(t==null||typeof t!="object")return;let e=vy.get(t);e||(e=new WeakSet,vy.set(t,e)),e.add(i)}var fM=(t,i,e,n)=>{};function gM(t,i,e,n){fM(t,i,e,n)}function Kd(t){return(t.flags&32)===32}var _M=()=>null;function D0(t,i,e=!1){return _M(t,i,e)}function x0(t,i){let e=t.contentQueries;if(e!==null){let n=ie(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];ks(o),s.contentQueries(2,i[a],a)}}}finally{ie(n)}}}function Lp(t,i,e){ks(0);let n=ie(null);try{i(t,e)}finally{ie(n)}}function yf(t,i,e){if(Zh(i)){let n=ie(null);try{let r=i.directiveStart,o=i.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{ie(n)}}}var Yn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Yn||{});var Dd;function bM(){if(Dd===void 0&&(Dd=null,zt.trustedTypes))try{Dd=zt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Dd}function Zd(t){return bM()?.createHTML(t)||t}var xd;function vM(){if(xd===void 0&&(xd=null,zt.trustedTypes))try{xd=zt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return xd}function yy(t){return vM()?.createScriptURL(t)||t}var Ti=class{changingThisBreaksApplicationSecurity;constructor(i){this.changingThisBreaksApplicationSecurity=i}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Kc})`}},Vp=class extends Ti{getTypeName(){return"HTML"}},Bp=class extends Ti{getTypeName(){return"Style"}},jp=class extends Ti{getTypeName(){return"Script"}},Hp=class extends Ti{getTypeName(){return"URL"}},zp=class extends Ti{getTypeName(){return"ResourceURL"}};function kn(t){return t instanceof Ti?t.changingThisBreaksApplicationSecurity:t}function Ai(t,i){let e=E0(t);if(e!=null&&e!==i){if(e==="ResourceURL"&&i==="URL")return!0;throw new Error(`Required a safe ${i}, got a ${e} (see ${Kc})`)}return e===i}function E0(t){return t instanceof Ti&&t.getTypeName()||null}function wf(t){return new Vp(t)}function Cf(t){return new Bp(t)}function Df(t){return new jp(t)}function xf(t){return new Hp(t)}function Ef(t){return new zp(t)}function yM(t){let i=new $p(t);return wM()?new Up(i):i}var Up=class{inertDocumentHelper;constructor(i){this.inertDocumentHelper=i}getInertBodyElement(i){i="<body><remove></remove>"+i;try{let e=new window.DOMParser().parseFromString(Zd(i),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(i):(e.firstChild?.remove(),e)}catch(e){return null}}},$p=class{defaultDoc;inertDocument;constructor(i){this.defaultDoc=i,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(i){let e=this.inertDocument.createElement("template");return e.innerHTML=Zd(i),e}};function wM(){try{return!!new window.DOMParser().parseFromString(Zd(""),"text/html")}catch(t){return!1}}var CM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function js(t){return t=String(t),t.match(CM)?t:"unsafe:"+t}function Ri(t){let i={};for(let e of t.split(","))i[e]=!0;return i}function Hs(...t){let i={};for(let e of t)for(let n in e)e.hasOwnProperty(n)&&(i[n]=!0);return i}var k0=Ri("area,br,col,hr,img,wbr"),S0=Ri("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),I0=Ri("rp,rt"),DM=Hs(I0,S0),xM=Hs(S0,Ri("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),EM=Hs(I0,Ri("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),wy=Hs(k0,xM,EM,DM),M0=Ri("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),kM=Ri("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),SM=Ri("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),IM=Hs(M0,kM,SM),MM=Ri("script,style,template"),Gp=class{sanitizedSomething=!1;buf=[];sanitizeChildren(i){let e=i.firstChild,n=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild){r.push(e),e=RM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=AM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(i){let e=Cy(i).toLowerCase();if(!wy.hasOwnProperty(e))return this.sanitizedSomething=!0,!MM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let n=i.attributes;for(let r=0;r<n.length;r++){let o=n.item(r),a=o.name,s=a.toLowerCase();if(!IM.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;M0[s]&&(l=js(l)),this.buf.push(" ",a,'="',Dy(l),'"')}return this.buf.push(">"),!0}endElement(i){let e=Cy(i).toLowerCase();wy.hasOwnProperty(e)&&!k0.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(i){this.buf.push(Dy(i))}};function TM(t,i){return(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function AM(t){let i=t.nextSibling;if(i&&t!==i.previousSibling)throw T0(i);return i}function RM(t){let i=t.firstChild;if(i&&TM(t,i))throw T0(i);return i}function Cy(t){let i=t.nodeName;return typeof i=="string"?i:"FORM"}function T0(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var OM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,NM=/([^\#-~ |!])/g;function Dy(t){return t.replace(/&/g,"&amp;").replace(OM,function(i){let e=i.charCodeAt(0),n=i.charCodeAt(1);return"&#"+((e-55296)*1024+(n-56320)+65536)+";"}).replace(NM,function(i){return"&#"+i.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ed;function kf(t,i){let e=null;try{Ed=Ed||yM(t);let n=i?String(i):"";e=Ed.getInertBodyElement(n);let r=5,o=n;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,n=o,o=e.innerHTML,e=Ed.getInertBodyElement(n)}while(n!==o);let s=new Gp().sanitizeChildren(xy(e)||e);return Zd(s)}finally{if(e){let n=xy(e)||e;for(;n.firstChild;)n.firstChild.remove()}}}function xy(t){return"content"in t&&FM(t)?t.content:null}function FM(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var PM=/^>|^->|<!--|-->|--!>|<!-$/g,LM=/(<|>)/g,VM="\u200B$1\u200B";function BM(t){return t.replace(PM,i=>i.replace(LM,VM))}function jM(t,i){return t.createText(i)}function HM(t,i,e){t.setValue(i,e)}function zM(t,i){return t.createComment(BM(i))}function A0(t,i,e){return t.createElement(i,e)}function Vd(t,i,e,n,r){t.insertBefore(i,e,n,r)}function R0(t,i,e){t.appendChild(i,e)}function Ey(t,i,e,n,r){n!==null?Vd(t,i,e,n,r):R0(t,i,e)}function O0(t,i,e,n){t.removeChild(null,i,e,n)}function UM(t,i,e){t.setAttribute(i,"style",e)}function $M(t,i,e){e===""?t.removeAttribute(i,"class"):t.setAttribute(i,"class",e)}function N0(t,i,e){let{mergedAttrs:n,classes:r,styles:o}=e;n!==null&&XI(t,i,n),r!==null&&$M(t,i,r),o!==null&&UM(t,i,o)}var Et=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Et||{});function Oi(t){let i=F0();return i?i.sanitize(Et.URL,t)||"":Ai(t,"URL")?kn(t):js(Wr(t))}function Sf(t){let i=F0();if(i)return yy(i.sanitize(Et.RESOURCE_URL,t)||"");if(Ai(t,"ResourceURL"))return yy(kn(t));throw new N(904,!1)}function F0(){let t=ne();return t&&t[zn].sanitizer}function GM(t){return t instanceof Function?t():t}function WM(t,i,e){let n=t.length;for(;;){let r=t.indexOf(i,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=i.length;if(r+o===n||t.charCodeAt(r+o)<=32)return r}e=r+1}}var P0="ng-template";function qM(t,i,e,n){let r=0;if(n){for(;r<i.length&&typeof i[r]=="string";r+=2)if(i[r]==="class"&&WM(i[r+1].toLowerCase(),e,0)!==-1)return!0}else if(If(t))return!1;if(r=i.indexOf(1,r),r>-1){let o;for(;++r<i.length&&typeof(o=i[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function If(t){return t.type===4&&t.value!==P0}function YM(t,i,e){let n=t.type===4&&!e?P0:t.value;return i===n}function QM(t,i,e){let n=4,r=t.attrs,o=r!==null?XM(r):0,a=!1;for(let s=0;s<i.length;s++){let l=i[s];if(typeof l=="number"){if(!a&&!Wn(n)&&!Wn(l))return!1;if(a&&Wn(l))continue;a=!1,n=l|n&1;continue}if(!a)if(n&4){if(n=2|n&1,l!==""&&!YM(t,l,e)||l===""&&i.length===1){if(Wn(n))return!1;a=!0}}else if(n&8){if(r===null||!qM(t,r,l,e)){if(Wn(n))return!1;a=!0}}else{let c=i[++s],u=KM(l,r,If(t),e);if(u===-1){if(Wn(n))return!1;a=!0;continue}if(c!==""){let m;if(u>o?m="":m=r[u+1].toLowerCase(),n&2&&c!==m){if(Wn(n))return!1;a=!0}}}}return Wn(n)||a}function Wn(t){return(t&1)===0}function KM(t,i,e,n){if(i===null)return-1;let r=0;if(n||!e){let o=!1;for(;r<i.length;){let a=i[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=i[++r];for(;typeof s=="string";)s=i[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return JM(i,t)}function L0(t,i,e=!1){for(let n=0;n<i.length;n++)if(QM(t,i[n],e))return!0;return!1}function ZM(t){let i=t.attrs;if(i!=null){let e=i.indexOf(5);if((e&1)===0)return i[e+1]}return null}function XM(t){for(let i=0;i<t.length;i++){let e=t[i];if(t0(e))return i}return t.length}function JM(t,i){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let n=t[e];if(typeof n=="number")return-1;if(n===i)return e;e++}return-1}function eT(t,i){e:for(let e=0;e<i.length;e++){let n=i[e];if(t.length===n.length){for(let r=0;r<t.length;r++)if(t[r]!==n[r])continue e;return!0}}return!1}function ky(t,i){return t?":not("+i.trim()+")":i}function tT(t){let i=t[0],e=1,n=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(n&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else n&8?r+="."+a:n&4&&(r+=" "+a);else r!==""&&!Wn(a)&&(i+=ky(o,r),r=""),n=a,o=o||!Wn(n);e++}return r!==""&&(i+=ky(o,r)),i}function nT(t){return t.map(tT).join(",")}function iT(t){let i=[],e=[],n=1,r=2;for(;n<t.length;){let o=t[n];if(typeof o=="string")r===2?o!==""&&i.push(o,t[++n]):r===8&&e.push(o);else{if(!Wn(r))break;r=o}n++}return e.length&&i.push(1,...e),i}var Jt={},pi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(pi||{}),rT;function Mf(t,i){return rT(t,i)}var O8=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Wp=new WeakMap;function V0(t){return t?t[tr]??t:null}var Ms=new WeakSet;function oT(t,i,e){let n=Wp.get(t);if(!n||n.length===0)return;let r=i.parentNode,o=i.previousSibling,a=V0(e);for(let s=n.length-1;s>=0;s--){let{el:l,declarationView:c}=n[s],u=l.parentNode;l===i?(n.splice(s,1),Ms.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(n.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):u&&r&&u!==r&&(a===null||c===null||a===c)&&(n.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function aT(t,i,e){let n=V0(e),r=Wp.get(t);r?r.some(o=>o.el===i)||r.push({el:i,declarationView:n}):Wp.set(t,[{el:i,declarationView:n}])}var sr=new Set,Xd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Xd||{}),gi=new b(""),Sy=new Set;function Qn(t){Sy.has(t)||(Sy.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Jd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=te({token:t,providedIn:"root",factory:()=>new t})}return t})(),Tf=[0,1,2,3],Af=(()=>{class t{ngZone=d(B);scheduler=d(jn);errorHandler=d(on,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(gi,{optional:!0})}execute(){let e=this.sequences.size>0;e&&We(Fe.AfterRenderHooksStart),this.executing=!0;for(let n of Tf)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[n]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[n];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let n of this.sequences)n.afterRun(),n.once&&(this.sequences.delete(n),n.destroy());for(let n of this.deferredRegistrations)this.sequences.add(n);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&We(Fe.AfterRenderHooksEnd)}register(e){let{view:n}=e;n!==void 0?((n[Qr]??=[]).push(e),Xr(n),n[se]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,n){return n?n.run(Xd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=te({token:t,providedIn:"root",factory:()=>new t})}return t})(),Os=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(i,e,n,r,o,a=null){this.impl=i,this.hooks=e,this.view=n,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let i=this.view?.[Qr];i&&(this.view[Qr]=i.filter(e=>e!==this))}};function it(t,i){let e=i?.injector??d(Z);return Qn("NgAfterNextRender"),lT(t,e,i,!0)}function sT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function lT(t,i,e,n){let r=i.get(Jd);r.impl??=i.get(Af);let o=i.get(gi,null,{optional:!0}),a=e?.manualCleanup!==!0?i.get(Mt):null,s=i.get(Ko,null,{optional:!0}),l=new Os(r.impl,sT(t),s?.view,n,a,o?.snapshot(null));return r.impl.register(l),l}var Rf=new b("",{factory:()=>{let t=d(Be),i=new Set;return t.onDestroy(()=>i.clear()),{queue:i,isScheduled:!1,scheduler:null,injector:t}}});function B0(t,i,e){let n=t.get(Rf);if(Array.isArray(i))for(let r of i)n.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else n.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);n.scheduler&&n.scheduler(t)}function cT(t,i){let e=t.get(Rf);if(Array.isArray(i))for(let n of i)e.queue.delete(n);else e.queue.delete(i)}function dT(t,i){let e=t.get(Rf);if(i.detachedLeaveAnimationFns){for(let n of i.detachedLeaveAnimationFns)e.queue.delete(n);i.detachedLeaveAnimationFns=void 0}}function uT(t,i){for(let[e,n]of i)B0(t,n.animateFns)}function Iy(t,i,e,n){let r=t?.[ci]?.enter;i!==null&&r&&r.has(e.index)&&uT(n,r)}function My(t,i,e,n){try{e.get(ws)}catch(a){return n(!1)}let r=t?.[ci];r?.enter?.has(i.index)&&cT(e,r.enter.get(i.index).animateFns);let o=mT(t,i,r);if(o.size===0){let a=!1;if(t){let s=[];eu(t,i,s),a=s.length>0}if(!a)return n(!1)}t&&sr.add(t[li]),B0(e,()=>hT(t,i,r||void 0,o,n),r||void 0)}function mT(t,i,e){let n=new Map,r=e?.leave;if(r&&r.has(i.index)&&n.set(i.index,r.get(i.index)),t&&r)for(let[o,a]of r){if(n.has(o))continue;let l=t[ee].data[o].parent;for(;l;){if(l===i){n.set(o,a);break}l=l.parent}}return n}function hT(t,i,e,n,r){let o=[];if(e&&e.leave)for(let[a]of n){if(!e.leave.has(a))continue;let s=e.leave.get(a);for(let l of s.animateFns){let{promise:c}=l();o.push(c)}e.detachedLeaveAnimationFns=void 0}if(t&&eu(t,i,o),o.length>0){let a=e||t?.[ci];if(a){let s=a.running;s&&o.push(s),a.running=Promise.allSettled(o),fT(t,a.running,r)}else Promise.allSettled(o).then(()=>{t&&sr.delete(t[li]),r(!0)})}else t&&sr.delete(t[li]),r(!1)}function eu(t,i,e){if(i.type&12){let r=t[i.index];if(wn(r))for(let o=rt;o<r.length;o++){let a=r[o];a[ee].type===2&&pT(a,e)}}let n=i.child;for(;n;)eu(t,n,e),n=n.next}function pT(t,i){let e=t[ci];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:a}=o();i.push(a)}let n=t[ee].firstChild;for(;n;)eu(t,n,i),n=n.next}function fT(t,i,e){i.then(()=>{t[ci]?.running===i&&(t[ci].running=void 0,sr.delete(t[li])),e(!0)})}function Xo(t,i,e,n,r,o,a,s){if(r!=null){let l,c=!1;wn(r)?l=r:Si(r)&&(c=!0,r=r[Hn]);let u=Cn(r);t===0&&n!==null?(Iy(s,n,o,e),a==null?R0(i,n,u):Vd(i,n,u,a||null,!0)):t===1&&n!==null?(Iy(s,n,o,e),Vd(i,n,u,a||null,!0),oT(o,u,s)):t===2?(s?.[ci]?.leave?.has(o.index)&&aT(o,u,s),Ms.delete(u),My(s,o,e,m=>{if(Ms.has(u)){Ms.delete(u);return}O0(i,u,c,m)})):t===3&&(Ms.delete(u),My(s,o,e,()=>{i.destroyNode(u)})),l!=null&&ET(i,t,e,l,o,n,a)}}function gT(t,i){j0(t,i),i[Hn]=null,i[Ut]=null}function _T(t,i,e,n,r,o){n[Hn]=r,n[Ut]=i,nu(t,n,e,1,r,o)}function j0(t,i){i[zn].changeDetectionScheduler?.notify(9),nu(t,i,i[ze],2,null,null)}function bT(t){let i=t[Go];if(!i)return Dp(t[ee],t);for(;i;){let e=null;if(Si(i))e=i[Go];else{let n=i[rt];n&&(e=n)}if(!e){for(;i&&!i[yn]&&i!==t;)Si(i)&&Dp(i[ee],i),i=i[Ct];i===null&&(i=t),Si(i)&&Dp(i[ee],i),e=i&&i[yn]}i=e}}function Of(t,i){let e=t[Kr],n=e.indexOf(i);e.splice(n,1)}function tu(t,i){if(Zr(i))return;let e=i[ze];e.destroyNode&&nu(t,i,e,3,null,null),bT(i)}function Dp(t,i){if(Zr(i))return;let e=ie(null);try{i[se]&=-129,i[se]|=256,i[dn]&&Gi(i[dn]),yT(t,i),vT(t,i),i[ee].type===1&&i[ze].destroy();let n=i[nr];if(n!==null&&wn(i[Ct])){n!==i[Ct]&&Of(n,i);let r=i[si];r!==null&&r.detachView(t)}Fp(i)}finally{ie(e)}}function vT(t,i){let e=t.cleanup,n=i[$o];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?n[s]():n[-s].unsubscribe(),a+=2}else{let s=n[e[a+1]];e[a].call(s)}n!==null&&(i[$o]=null);let r=i[xi];if(r!==null){i[xi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=i[Zi];if(o!==null){i[Zi]=null;for(let a of o)a.destroy()}}function yT(t,i){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let n=0;n<e.length;n+=2){let r=i[e[n]];if(!(r instanceof eo)){let o=e[n+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];We(Fe.LifecycleHookStart,s,l);try{l.call(s)}finally{We(Fe.LifecycleHookEnd,s,l)}}else{We(Fe.LifecycleHookStart,r,o);try{o.call(r)}finally{We(Fe.LifecycleHookEnd,r,o)}}}}}function H0(t,i,e){return wT(t,i.parent,e)}function wT(t,i,e){let n=i;for(;n!==null&&n.type&168;)i=n,n=i.parent;if(n===null)return e[Hn];if(di(n)){let{encapsulation:r}=t.data[n.directiveStart+n.componentOffset];if(r===Yn.None||r===Yn.Emulated)return null}return Dn(n,e)}function z0(t,i,e){return DT(t,i,e)}function CT(t,i,e){return t.type&40?Dn(t,e):null}var DT=CT,Ty;function Nf(t,i,e,n){let r=H0(t,n,i),o=i[ze],a=n.parent||i[Ut],s=z0(a,n,i);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Ey(o,r,e[l],s,!1);else Ey(o,r,e,s,!1);Ty!==void 0&&Ty(o,n,i,e,r)}function Ts(t,i){if(i!==null){let e=i.type;if(e&3)return Dn(i,t);if(e&4)return qp(-1,t[i.index]);if(e&8){let n=i.child;if(n!==null)return Ts(t,n);{let r=t[i.index];return wn(r)?qp(-1,r):Cn(r)}}else{if(e&128)return Ts(t,i.next);if(e&32)return Mf(i,t)()||Cn(t[i.index]);{let n=U0(t,i);if(n!==null){if(Array.isArray(n))return n[0];let r=Ei(t[Zt]);return Ts(r,n)}else return Ts(t,i.next)}}}return null}function U0(t,i){if(i!==null){let n=t[Zt][Ut],r=i.projection;return n.projection[r]}return null}function qp(t,i){let e=rt+t+1;if(e<i.length){let n=i[e],r=n[ee].firstChild;if(r!==null)return Ts(n,r)}return i[ir]}function Ff(t,i,e,n,r,o,a){for(;e!=null;){let s=n[ai];if(e.type===128){e=e.next;continue}let l=n[e.index],c=e.type;if(a&&i===0&&(l&&ta(Cn(l),n),e.flags|=2),!Kd(e))if(c&8)Ff(t,i,e.child,n,r,o,!1),Xo(i,t,s,r,l,e,o,n);else if(c&32){let u=Mf(e,n),m;for(;m=u();)Xo(i,t,s,r,m,e,o,n);Xo(i,t,s,r,l,e,o,n)}else c&16?$0(t,i,n,e,r,o):Xo(i,t,s,r,l,e,o,n);e=a?e.projectionNext:e.next}}function nu(t,i,e,n,r,o){Ff(e,n,t.firstChild,i,r,o,!1)}function xT(t,i,e){let n=i[ze],r=H0(t,e,i),o=e.parent||i[Ut],a=z0(o,e,i);$0(n,0,i,e,r,a)}function $0(t,i,e,n,r,o){let a=e[Zt],l=a[Ut].projection[n.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];Xo(i,t,e[ai],r,u,n,o,e)}else{let c=l,u=a[Ct];h0(n)&&(c.flags|=128),Ff(t,i,c,u,r,o,!0)}}function ET(t,i,e,n,r,o,a){let s=n[ir],l=Cn(n);s!==l&&Xo(i,t,e,o,s,r,a);for(let c=rt;c<n.length;c++){let u=n[c];nu(u[ee],u,t,i,o,s)}}function kT(t,i,e,n,r){if(i)r?t.addClass(e,n):t.removeClass(e,n);else{let o=n.indexOf("-")===-1?void 0:pi.DashCase;r==null?t.removeStyle(e,n,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=pi.Important),t.setStyle(e,n,r,o))}}function Pf(t,i,e,n,r,o,a,s,l,c,u){let m=et+n,f=m+r,g=ST(m,f),y=typeof c=="function"?c():c;return g[ee]={type:t,blueprint:g,template:e,queries:null,viewQuery:s,declTNode:i,data:g.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:u}}function ST(t,i){let e=[];for(let n=0;n<i;n++)e.push(n<t?null:Jt);return e}function IT(t){let i=t.tView;return i===null||i.incompleteFirstPass?t.tView=Pf(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):i}function Lf(t,i,e,n,r,o,a,s,l,c,u){let m=i.blueprint.slice();return m[Hn]=r,m[se]=n|4|128|8|64|1024,(c!==null||t&&t[se]&2048)&&(m[se]|=2048),tp(m),m[Ct]=m[tr]=t,m[st]=e,m[zn]=a||t&&t[zn],m[ze]=s||t&&t[ze],m[ai]=l||t&&t[ai]||null,m[Ut]=o,m[li]=mM(),m[qr]=u,m[Qh]=c,m[Zt]=i.type==2?t[Zt]:m,m}function MT(t,i,e){let n=Dn(i,t),r=IT(e),o=t[zn].rendererFactory,a=Vf(t,Lf(t,r,null,G0(e),n,i,null,o.createRenderer(n,e),null,null,null));return t[i.index]=a}function G0(t){let i=16;return t.signals?i=4096:t.onPush&&(i=64),i}function W0(t,i,e,n){if(e===0)return-1;let r=i.length;for(let o=0;o<e;o++)i.push(n),t.blueprint.push(n),t.data.push(null);return r}function Vf(t,i){return t[Go]?t[Yh][yn]=i:t[Go]=i,t[Yh]=i,i}function h(t=1){q0(Ye(),ne(),mi()+t,!1)}function q0(t,i,e,n){if(!n)if((i[se]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Id(i,o,e)}else{let o=t.preOrderHooks;o!==null&&Md(i,o,0,e)}rr(e)}var iu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(iu||{});function Yp(t,i,e,n){let r=ie(null);try{let[o,a,s]=t.inputs[e],l=null;(a&iu.SignalBased)!==0&&(l=i[o][_t]),l!==null&&l.transformFn!==void 0?n=l.transformFn(n):s!==null&&(n=s.call(i,n)),t.setInput!==null?t.setInput(i,l,n,e,o):Ky(i,l,o,n)}finally{ie(r)}}function Y0(t,i,e,n,r){let o=mi(),a=n&2;try{rr(-1),a&&i.length>et&&q0(t,i,et,!1);let s=a?Fe.TemplateUpdateStart:Fe.TemplateCreateStart;We(s,r,e),e(n,r)}finally{rr(o);let s=a?Fe.TemplateUpdateEnd:Fe.TemplateCreateEnd;We(s,r,e)}}function ru(t,i,e){NT(t,i,e),(e.flags&64)===64&&FT(t,i,e)}function zs(t,i,e=Dn){let n=i.localNames;if(n!==null){let r=i.index+1;for(let o=0;o<n.length;o+=2){let a=n[o+1],s=a===-1?e(i,t):t[a];t[r++]=s}}}function TT(t,i,e,n){let o=n.get(C0,w0)||e===Yn.ShadowDom||e===Yn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(i,o);return AT(a),a}function AT(t){RT(t)}var RT=()=>null;function OT(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Q0(t,i,e,n,r,o){let a=i[ee];if(ou(t,a,i,e,n)){di(t)&&Z0(i,t.index);return}t.type&3&&(e=OT(e)),K0(t,i,e,n,r,o)}function K0(t,i,e,n,r,o){if(t.type&3){let a=Dn(t,i);n=o!=null?o(n,t.value||"",e):n,r.setProperty(a,e,n)}else t.type&12}function Z0(t,i){let e=xn(i,t);e[se]&16||(e[se]|=64)}function NT(t,i,e){let n=e.directiveStart,r=e.directiveEnd;di(e)&&MT(i,e,t.data[n+e.componentOffset]),t.firstCreatePass||Ld(e,i);let o=e.initialInputs;for(let a=n;a<r;a++){let s=t.data[a],l=Rs(i,t,a,e);if(ta(l,i),o!==null&&VT(i,a-n,l,s,e,o),Un(s)){let c=xn(e.index,i);c[st]=Rs(i,t,a,e)}}}function FT(t,i,e){let n=e.directiveStart,r=e.directiveEnd,o=e.index,a=Xv();try{rr(o);for(let s=n;s<r;s++){let l=t.data[s],c=i[s];hd(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&PT(l,c)}}finally{rr(-1),hd(a)}}function PT(t,i){t.hostBindings!==null&&t.hostBindings(1,i)}function Bf(t,i){let e=t.directiveRegistry,n=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];L0(i,o.selectors,!1)&&(n??=[],Un(o)?n.unshift(o):n.push(o))}return n}function LT(t,i,e,n,r,o){let a=Dn(t,i);X0(i[ze],a,o,t.value,e,n,r)}function X0(t,i,e,n,r,o,a){if(o==null)a?.(o,n||"",r),t.removeAttribute(i,r,e);else{let s=a==null?Wr(o):a(o,n||"",r);t.setAttribute(i,r,s,e)}}function VT(t,i,e,n,r,o){let a=o[i];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Yp(n,e,l,c)}}function jf(t,i,e,n,r){let o=et+e,a=i[ee],s=r(a,i,t,n,e);i[o]=s,Yo(t,!0);let l=t.type===2;return l?(N0(i[ze],s,t),($v()===0||Wo(t))&&ta(s,i),Gv()):ta(s,i),_d()&&(!l||!Kd(t))&&Nf(a,i,s,t),t}function Hf(t){let i=t;return dp()?up():(i=i.parent,Yo(i,!1)),i}function BT(t,i){let e=t[ai];if(!e)return;let n;try{n=e.get(En,null)}catch(r){n=null}n?.(i)}function ou(t,i,e,n,r){let o=t.inputs?.[n],a=t.hostDirectiveInputs?.[n],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],m=i.data[c];Yp(m,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=i.data[l];Yp(u,c,n,r),s=!0}return s}function jT(t,i){let e=xn(i,t),n=e[ee];HT(n,e);let r=e[Hn];r!==null&&e[qr]===null&&(e[qr]=D0(r,e[ai])),We(Fe.ComponentStart);try{zf(n,e,e[st])}finally{We(Fe.ComponentEnd,e[st])}}function HT(t,i){for(let e=i.length;e<t.blueprint.length;e++)i.push(t.blueprint[e])}function zf(t,i,e){fd(i);try{let n=t.viewQuery;n!==null&&Lp(1,n,e);let r=t.template;r!==null&&Y0(t,i,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),i[si]?.finishViewCreation(t),t.staticContentQueries&&x0(t,i),t.staticViewQueries&&Lp(2,t.viewQuery,e);let o=t.components;o!==null&&zT(i,o)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{i[se]&=-5,gd()}}function zT(t,i){for(let e=0;e<i.length;e++)jT(t,i[e])}function Us(t,i,e,n){let r=ie(null);try{let o=i.tView,s=t[se]&4096?4096:16,l=Lf(t,o,e,s,null,i,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),c=t[i.index];l[nr]=c;let u=t[si];return u!==null&&(l[si]=u.createEmbeddedView(o)),zf(o,l,e),l}finally{ie(r)}}function na(t,i){return!i||i.firstChild===null||h0(t)}function Ns(t,i,e,n,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=i[e.index];o!==null&&n.push(Cn(o)),wn(o)&&J0(o,n);let a=e.type;if(a&8)Ns(t,i,e.child,n);else if(a&32){let s=Mf(e,i),l;for(;l=s();)n.push(l)}else if(a&16){let s=U0(i,e);if(Array.isArray(s))n.push(...s);else{let l=Ei(i[Zt]);Ns(l[ee],l,s,n,!0)}}e=r?e.projectionNext:e.next}return n}function J0(t,i){for(let e=rt;e<t.length;e++){let n=t[e],r=n[ee].firstChild;r!==null&&Ns(n[ee],n,r,i)}t[ir]!==t[Hn]&&i.push(t[ir])}function ew(t){if(t[Qr]!==null){for(let i of t[Qr])i.impl.addSequence(i);t[Qr].length=0}}var tw=[];function UT(t){return t[dn]??$T(t)}function $T(t){let i=tw.pop()??Object.create(WT);return i.lView=t,i}function GT(t){t.lView[dn]!==t&&(t.lView=null,tw.push(t))}var WT=re(v({},Or),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Xr(t.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function qT(t){let i=t[dn]??Object.create(YT);return i.lView=t,i}var YT=re(v({},Or),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let i=Ei(t.lView);for(;i&&!nw(i[ee]);)i=Ei(i);i&&np(i)},consumerOnSignalRead(){this.lView[dn]=this}});function nw(t){return t.type!==2}function iw(t){if(t[Zi]===null)return;let i=!0;for(;i;){let e=!1;for(let n of t[Zi])n.dirty&&(e=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));i=e&&!!(t[se]&8192)}}var QT=100;function rw(t,i=0){let n=t[zn].rendererFactory,r=!1;r||n.begin?.();try{KT(t,i)}finally{r||n.end?.()}}function KT(t,i){let e=mp();try{fs(!0),Qp(t,i);let n=0;for(;xs(t);){if(n===QT)throw new N(103,!1);n++,Qp(t,1)}}finally{fs(e)}}function ZT(t,i,e,n){if(Zr(i))return;let r=i[se],o=!1,a=!1;fd(i);let s=!0,l=null,c=null;o||(nw(t)?(c=UT(i),l=$i(c)):cc()===null?(s=!1,c=qT(i),l=$i(c)):i[dn]&&(Gi(i[dn]),i[dn]=null));try{tp(i),Qv(t.bindingStartIndex),e!==null&&Y0(t,i,e,2,n);let u=(r&3)===3;if(!o)if(u){let g=t.preOrderCheckHooks;g!==null&&Id(i,g,null)}else{let g=t.preOrderHooks;g!==null&&Md(i,g,0,null),wp(i,0)}if(a||XT(i),iw(i),ow(i,0),t.contentQueries!==null&&x0(t,i),!o)if(u){let g=t.contentCheckHooks;g!==null&&Id(i,g)}else{let g=t.contentHooks;g!==null&&Md(i,g,1),wp(i,1)}eA(t,i);let m=t.components;m!==null&&sw(i,m,0);let f=t.viewQuery;if(f!==null&&Lp(2,f,n),!o)if(u){let g=t.viewCheckHooks;g!==null&&Id(i,g)}else{let g=t.viewHooks;g!==null&&Md(i,g,2),wp(i,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),i[od]){for(let g of i[od])g();i[od]=null}o||(ew(i),i[se]&=-73)}catch(u){throw o||Xr(i),u}finally{c!==null&&(Fr(c,l),s&&GT(c)),gd()}}function ow(t,i){for(let e=f0(t);e!==null;e=g0(e))for(let n=rt;n<e.length;n++){let r=e[n];aw(r,i)}}function XT(t){for(let i=f0(t);i!==null;i=g0(i)){if(!(i[se]&2))continue;let e=i[Kr];for(let n=0;n<e.length;n++){let r=e[n];np(r)}}}function JT(t,i,e){We(Fe.ComponentStart);let n=xn(i,t);try{aw(n,e)}finally{We(Fe.ComponentEnd,n[st])}}function aw(t,i){ld(t)&&Qp(t,i)}function Qp(t,i){let n=t[ee],r=t[se],o=t[dn],a=!!(i===0&&r&16);if(a||=!!(r&64&&i===0),a||=!!(r&1024),a||=!!(o?.dirty&&To(o)),a||=!1,o&&(o.dirty=!1),t[se]&=-9217,a)ZT(n,t,n.template,t[st]);else if(r&8192){let s=ie(null);try{iw(t),ow(t,1);let l=n.components;l!==null&&sw(t,l,1),ew(t)}finally{ie(s)}}}function sw(t,i,e){for(let n=0;n<i.length;n++)JT(t,i[n],e)}function eA(t,i){let e=t.hostBindingOpCodes;if(e!==null)try{for(let n=0;n<e.length;n++){let r=e[n];if(r<0)rr(~r);else{let o=r,a=e[++n],s=e[++n];Zv(a,o);let l=i[o];We(Fe.HostBindingsUpdateStart,l);try{s(2,l)}finally{We(Fe.HostBindingsUpdateEnd,l)}}}}finally{rr(-1)}}function Uf(t,i){let e=mp()?64:1088;for(t[zn].changeDetectionScheduler?.notify(i);t;){t[se]|=e;let n=Ei(t);if(qo(t)&&!n)return t;t=n}return null}function lw(t,i,e,n){return[t,!0,0,i,null,n,null,e,null,null]}function cw(t,i){let e=rt+i;if(e<t.length)return t[e]}function $s(t,i,e,n=!0){let r=i[ee];if(tA(r,i,t,e),n){let a=qp(e,t),s=i[ze],l=s.parentNode(t[ir]);l!==null&&_T(r,t[Ut],s,i,l,a)}let o=i[qr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function dw(t,i){let e=Fs(t,i);return e!==void 0&&tu(e[ee],e),e}function Fs(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e];if(n){let r=n[nr];r!==null&&r!==t&&Of(r,n),i>0&&(t[e-1][yn]=n[yn]);let o=ys(t,rt+i);gT(n[ee],n);let a=o[si];a!==null&&a.detachView(o[ee]),n[Ct]=null,n[yn]=null,n[se]&=-129}return n}function tA(t,i,e,n){let r=rt+n,o=e.length;n>0&&(e[r-1][yn]=i),n<o-rt?(i[yn]=e[r],zh(e,rt+n,i)):(e.push(i),i[yn]=null),i[Ct]=e;let a=i[nr];a!==null&&e!==a&&uw(a,i);let s=i[si];s!==null&&s.insertView(t),cd(i),i[se]|=128}function uw(t,i){let e=t[Kr],n=i[Ct];if(Si(n))t[se]|=2;else{let r=n[Ct][Zt];i[Zt]!==r&&(t[se]|=2)}e===null?t[Kr]=[i]:e.push(i)}var lr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let i=this._lView,e=i[ee];return Ns(e,i,e.firstChild,[])}constructor(i,e){this._lView=i,this._cdRefInjectingView=e}get context(){return this._lView[st]}set context(i){this._lView[st]=i}get destroyed(){return Zr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let i=this._lView[Ct];if(wn(i)){let e=i[Ds],n=e?e.indexOf(this):-1;n>-1&&(Fs(i,n),ys(e,n))}this._attachedToViewContainer=!1}tu(this._lView[ee],this._lView)}onDestroy(i){dd(this._lView,i)}markForCheck(){Uf(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[se]&=-129}reattach(){cd(this._lView),this._lView[se]|=128}detectChanges(){this._lView[se]|=1024,rw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new N(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let i=qo(this._lView),e=this._lView[nr];e!==null&&!i&&Of(e,this._lView),j0(this._lView[ee],this._lView)}attachToAppRef(i){if(this._attachedToViewContainer)throw new N(902,!1);this._appRef=i;let e=qo(this._lView),n=this._lView[nr];n!==null&&!e&&uw(n,this._lView),cd(this._lView)}};var lt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=nA;constructor(e,n,r){this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,r){let o=Us(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:r});return new lr(o)}}return t})();function nA(){return au(xt(),ne())}function au(t,i){return t.type&4?new lt(i,t,oa(t,i)):null}function aa(t,i,e,n,r){let o=t.data[i];if(o===null)o=iA(t,i,e,n,r),Kv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=n,o.attrs=r;let a=Wv();o.injectorIndex=a===null?-1:a.injectorIndex}return Yo(o,!0),o}function iA(t,i,e,n,r){let o=cp(),a=dp(),s=a?o:o&&o.parent,l=t.data[i]=oA(t,s,e,i,n,r);return rA(t,l,o,a),l}function rA(t,i,e,n){t.firstChild===null&&(t.firstChild=i),e!==null&&(n?e.child==null&&i.parent!==null&&(e.child=i):e.next===null&&(e.next=i,i.prev=e))}function oA(t,i,e,n,r,o){let a=i?i.injectorIndex:-1,s=0;return ap()&&(s|=128),{type:e,index:n,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,namespace:fp(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:i,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function aA(t){let i=t[Kh]??[],n=t[Ct][ze],r=[];for(let o of i)o.data[y0]!==void 0?r.push(o):sA(o,n);t[Kh]=r}function sA(t,i){let e=0,n=t.firstChild;if(n){let r=t.data[v0];for(;e<r;){let o=n.nextSibling;O0(i,n,!1),n=o,e++}}}var lA=()=>null,cA=()=>null;function Bd(t,i){return lA(t,i)}function mw(t,i,e){return cA(t,i,e)}var hw=class{},Tt=class{},Pe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>dA()}return t})();function dA(){let t=ne(),i=xt(),e=xn(i.index,t);return(Si(e)?e:t)[ze]}var pw=(()=>{class t{static \u0275prov=te({token:t,providedIn:"root",factory:()=>null})}return t})();function fw(t){return t.debugInfo?.className||t.type.name||null}var Ad={},jd=class{injector;parentInjector;constructor(i,e){this.injector=i,this.parentInjector=e}get(i,e,n){let r=this.injector.get(i,Ad,n);return r!==Ad||e===Ad?r:this.parentInjector.get(i,e,n)}};function $f(t,i,e){return t[i]=e}function Xt(t,i,e){if(e===Jt)return!1;let n=t[i];return Object.is(n,e)?!1:(t[i]=e,!0)}function Gf(t,i,e,n){let r=Xt(t,i,e);return Xt(t,i+1,n)||r}function uA(t,i,e,n,r){let o=Gf(t,i,e,n);return Xt(t,i+2,r)||o}function Rd(t,i,e){return function n(r){let o=n.__ngNativeEl__;o!==void 0&&pM(r,o);let a=di(t)?xn(t.index,i):i;Uf(a,5);let s=i[st],l=Ay(i,s,e,r),c=n.__ngNextListenerFn__;for(;c;)l=Ay(i,s,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function Ay(t,i,e,n){let r=ie(null);try{return We(Fe.OutputStart,i,e),e(n)!==!1}catch(o){return BT(t,o),!1}finally{We(Fe.OutputEnd,i,e),ie(r)}}function gw(t,i,e,n,r,o,a,s){let l=Wo(t),c=!1,u=null;if(!n&&l&&(u=hA(i,e,o,t.index)),u!==null){let m=u.__ngLastListenerFn__||u;m.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let m=Dn(t,e),f=n?n(m):m;gM(e,f,o,s),n||(s.__ngNativeEl__=m);let g=r.listen(f,o,s);if(!mA(o)){let y=n?R=>n(Cn(R[t.index])):t.index;_w(y,i,e,o,s,g,!1)}}return c}function mA(t){return t.startsWith("animation")||t.startsWith("transition")}function hA(t,i,e,n){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===n){let s=i[$o],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function _w(t,i,e,n,r,o,a){let s=i.firstCreatePass?rp(i):null,l=ip(e),c=l.length;l.push(r,o),s&&s.push(n,t,c,(c+1)*(a?-1:1))}function Ry(t,i,e,n,r,o){let a=i[e],s=i[ee],c=s.data[e].outputs[n],m=a[c].subscribe(o);_w(t.index,s,i,r,o,m,!0)}var Kp=Symbol("BINDING");var io=new b("");function Hd(t,i,e){let n=e?t.styles:null,r=e?t.classes:null,o=0;if(i!==null)for(let a=0;a<i.length;a++){let s=i[a];if(typeof s=="number")o=s;else if(o==1)r=Zc(r,s);else if(o==2){let l=s,c=i[++a];n=Zc(n,l+": "+c+";")}}e?t.styles=n:t.stylesWithoutHost=n,e?t.classes=r:t.classesWithoutHost=r}function ke(t,i=0){let e=ne();if(e===null)return W(t,i);let n=xt();return l0(n,e,wt(t),i)}function cr(){let t="invalid";throw new Error(t)}function bw(t,i,e,n,r){let o=n===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}gA(t,i,e,s,o,l,c)}o!==null&&n!==null&&pA(e,n,o)}function pA(t,i,e){let n=t.localNames=[];for(let r=0;r<i.length;r+=2){let o=e[i[r+1]];if(o==null)throw new N(-301,!1);n.push(i[r],o)}}function fA(t,i,e){i.componentOffset=e,(t.components??=[]).push(i.index)}function gA(t,i,e,n,r,o,a){let s=n.length,l=null;for(let f=0;f<s;f++){let g=n[f];l===null&&Un(g)&&(l=g,fA(t,e,f)),Op(Ld(e,i),t,g.type)}CA(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<s;f++){let g=n[f];g.providersResolver&&g.providersResolver(g)}let c=!1,u=!1,m=W0(t,i,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let g=n[f];if(e.mergedAttrs=ea(e.mergedAttrs,g.hostAttrs),bA(t,e,i,m,g),wA(m,g,r),a!==null&&a.has(g)){let[R,K]=a.get(g);e.directiveToIndex.set(g.type,[m,R+e.directiveStart,K+e.directiveStart])}else(o===null||!o.has(g))&&e.directiveToIndex.set(g.type,m);g.contentQueries!==null&&(e.flags|=4),(g.hostBindings!==null||g.hostAttrs!==null||g.hostVars!==0)&&(e.flags|=64);let y=g.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),m++}_A(t,e,o)}function _A(t,i,e){for(let n=i.directiveStart;n<i.directiveEnd;n++){let r=t.data[n];if(e===null||!e.has(r))Oy(0,i,r,n),Oy(1,i,r,n),Fy(i,n,!1);else{let o=e.get(r);Ny(0,i,o,n),Ny(1,i,o,n),Fy(i,n,!0)}}}function Oy(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=i.inputs??={}:a=i.outputs??={},a[o]??=[],a[o].push(n),vw(i,o)}}function Ny(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=i.hostDirectiveInputs??={}:s=i.hostDirectiveOutputs??={},s[a]??=[],s[a].push(n,o),vw(i,a)}}function vw(t,i){i==="class"?t.flags|=8:i==="style"&&(t.flags|=16)}function Fy(t,i,e){let{attrs:n,inputs:r,hostDirectiveInputs:o}=t;if(n===null||!e&&r===null||e&&o===null||If(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<n.length;){let l=n[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===i){a??=[],a.push(l,n[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===i){a??=[],a.push(c[u+1],n[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function bA(t,i,e,n,r){t.data[n]=r;let o=r.factory||(r.factory=Ki(r.type,!0)),a=new eo(o,Un(r),ke,null);t.blueprint[n]=a,e[n]=a,vA(t,i,n,W0(t,e,r.hostVars,Jt),r)}function vA(t,i,e,n,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~i.index;yA(a)!=s&&a.push(s),a.push(e,n,o)}}function yA(t){let i=t.length;for(;i>0;){let e=t[--i];if(typeof e=="number"&&e<0)return e}return 0}function wA(t,i,e){if(e){if(i.exportAs)for(let n=0;n<i.exportAs.length;n++)e[i.exportAs[n]]=t;Un(i)&&(e[""]=t)}}function CA(t,i,e){t.flags|=1,t.directiveStart=i,t.directiveEnd=i+e,t.providerIndexes=i}function Wf(t,i,e,n,r,o,a,s){let l=i[ee],c=l.consts,u=un(c,a),m=aa(l,t,e,n,u);return o&&bw(l,i,m,un(c,s),r),m.mergedAttrs=ea(m.mergedAttrs,m.attrs),m.attrs!==null&&Hd(m,m.attrs,!1),m.mergedAttrs!==null&&Hd(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function qf(t,i){Jy(t,i),Zh(i)&&t.queries.elementEnd(i)}function DA(t,i,e,n,r,o){let a=i.consts,s=un(a,r),l=aa(i,t,e,n,s);if(l.mergedAttrs=ea(l.mergedAttrs,l.attrs),o!=null){let c=un(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&Hd(l,l.attrs,!1),l.mergedAttrs!==null&&Hd(l,l.mergedAttrs,!0),i.queries!==null&&i.queries.elementStart(i,l),l}var yw=typeof ShadowRoot<"u",xA=typeof Document<"u";function EA(t){return Object.keys(t).map(i=>{let[e,n,r]=t[i],o={propName:e,templateName:i,isSignal:(n&iu.SignalBased)!==0};return r&&(o.transform=r),o})}function kA(t){return Object.keys(t).map(i=>({propName:t[i],templateName:i}))}function SA(t,i,e){let n=i instanceof Be?i:i?.injector;return n&&t.getStandaloneInjector!==null&&(n=t.getStandaloneInjector(n)||n),n?new jd(e,n):e}function IA(t){let i=t.get(Tt,null);if(i===null)throw new N(407,!1);let e=t.get(pw,null),n=t.get(jn,null),r=t.get(gi,null,{optional:!0});return{rendererFactory:i,sanitizer:e,changeDetectionScheduler:n,ngReflect:!1,tracingService:r}}function MA(t,i){let e=ww(t);return A0(i,e,e==="svg"?Xh:e==="math"?Vv:null)}function TA(t){if(t?.toLowerCase()==="script")throw new N(905,!1)}function ww(t){return(t.selectors[0][0]||"div").toLowerCase()}var to=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=EA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=kA(this.componentDef.outputs),this.cachedOutputs}constructor(i,e){this.componentDef=i,this.ngModule=e,this.componentType=i.type,this.selector=nT(i.selectors),this.ngContentSelectors=i.ngContentSelectors??[],this.isBoundToModule=!!e}create(i,e,n,r,o,a){We(Fe.DynamicComponentStart);let s=ie(null);try{let l=this.componentDef,c=SA(l,r||this.ngModule,i),u=IA(c),m=u.tracingService;return m&&m.componentCreate?m.componentCreate(fw(l),()=>this.createComponentRef(u,c,e,n,o,a)):this.createComponentRef(u,c,e,n,o,a)}finally{ie(s)}}createComponentRef(i,e,n,r,o,a){let s=this.componentDef,l=AA(r,s,a,o),c=i.rendererFactory.createRenderer(null,s),u=r?TT(c,r,s.encapsulation,e):MA(s,c);TA(u?.tagName);let m=e.get(io,null),f=RA(u,()=>e.get(X,null)??b0());m&&m.addHost(f);let g=a?.some(Py)||o?.some(K=>typeof K!="function"&&K.bindings.some(Py)),y=Lf(null,l,null,512|G0(s),null,null,i,c,e,null,D0(u,e,!0));m&&yw&&f instanceof ShadowRoot&&dd(y,()=>{m.removeHost(f)}),y[et]=u,fd(y);let R=null;try{let K=Wf(et,y,2,"#host",()=>l.directiveRegistry,!0,0);N0(c,u,K),ta(u,y),ru(l,y,K),yf(l,K,y),qf(l,K),n!==void 0&&NA(K,this.ngContentSelectors,n),R=xn(K.index,y),y[st]=R[st],zf(l,y,null)}catch(K){throw R!==null&&Fp(R),Fp(y),K}finally{We(Fe.DynamicComponentEnd),gd()}return new zd(this.componentType,y,!!g)}};function AA(t,i,e,n){let r=t?["ng-version","22.0.7"]:iT(i.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Kp].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(n)for(let u=0;u<n.length;u++){let m=n[u];if(typeof m!="function")for(let f of m.bindings){s+=f[Kp].requiredVars;let g=u+1;f.create&&(f.targetIdx=g,(o??=[]).push(f)),f.update&&(f.targetIdx=g,(a??=[]).push(f))}}let l=[i];if(n)for(let u of n){let m=typeof u=="function"?u:u.type,f=Jc(m);l.push(f)}return Pf(0,null,OA(o,a),1,s,l,null,null,null,[r],null)}function RA(t,i){let e=t.getRootNode?.();return xA&&e instanceof Document?e.head:e&&yw&&e instanceof ShadowRoot?e:i().head}function OA(t,i){return!t&&!i?null:e=>{if(e&1&&t)for(let n of t)n.create();if(e&2&&i)for(let n of i)n.update()}}function Py(t){let i=t[Kp].kind;return i==="input"||i==="twoWay"}var zd=class extends hw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(i,e,n){super(),this._rootLView=e,this._hasInputBindings=n,this._tNode=ad(e[ee],et),this.location=oa(this._tNode,e),this.instance=xn(this._tNode.index,e)[st],this.hostView=this.changeDetectorRef=new lr(e,void 0),this.componentType=i}setInput(i,e){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(i)&&Object.is(this.previousInputValues.get(i),e))return;let r=this._rootLView,o=ou(n,r[ee],r,i,e);this.previousInputValues.set(i,e);let a=xn(n.index,r);Uf(a,1)}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(i){this.hostView.onDestroy(i)}};function NA(t,i,e){let n=t.projection=[];for(let r=0;r<i.length;r++){let o=e[r];n.push(o!=null&&o.length?Array.from(o):null)}}var At=(()=>{class t{static __NG_ELEMENT_ID__=FA}return t})();function FA(){let t=xt();return Cw(t,ne())}var Zp=class t extends At{_lContainer;_hostTNode;_hostLView;constructor(i,e,n){super(),this._lContainer=i,this._hostTNode=e,this._hostLView=n}get element(){return oa(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let i=gf(this._hostTNode,this._hostLView);if(n0(i)){let e=Fd(i,this._hostLView),n=Nd(i),r=e[ee].data[n+8];return new ar(r,e)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(i){let e=Ly(this._lContainer);return e!==null&&e[i]||null}get length(){return this._lContainer.length-rt}createEmbeddedView(i,e,n){let r,o;typeof n=="number"?r=n:n!=null&&(r=n.index,o=n.injector);let a=Bd(this._lContainer,i.ssrId),s=i.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,na(this._hostTNode,a)),s}createComponent(i,e,n,r,o,a,s){let l,c=e||{};l=c.index,n=c.injector,r=c.projectableNodes,o=c.environmentInjector||c.ngModuleRef,a=c.directives,s=c.bindings;let u=new to(ki(i)),m=n||this.parentInjector;if(!o&&u.ngModule==null){let le=this.parentInjector.get(Be,null);le&&(o=le)}let f=ki(u.componentType??{}),g=Bd(this._lContainer,f?.id??null),y=g?.firstChild??null,R=u.create(m,r,y,o,a,s);return this.insertImpl(R.hostView,l,na(this._hostTNode,g)),R}insert(i,e){return this.insertImpl(i,e,!0)}insertImpl(i,e,n){let r=i._lView;if(jv(r)){let s=this.indexOf(i);if(s!==-1)this.detach(s);else{let l=r[Ct],c=new t(l,l[Ut],l[Ct]);c.detach(c.indexOf(i))}}let o=this._adjustIndex(e),a=this._lContainer;return $s(a,r,o,n),i.attachToViewContainerRef(),zh(xp(a),o,i),i}move(i,e){return this.insert(i,e)}indexOf(i){let e=Ly(this._lContainer);return e!==null?e.indexOf(i):-1}remove(i){let e=this._adjustIndex(i,-1),n=Fs(this._lContainer,e);n&&(ys(xp(this._lContainer),e),tu(n[ee],n))}detach(i){let e=this._adjustIndex(i,-1),n=Fs(this._lContainer,e);return n&&ys(xp(this._lContainer),e)!=null?new lr(n):null}_adjustIndex(i,e=0){return i??this.length+e}};function Ly(t){return t[Ds]}function xp(t){return t[Ds]||(t[Ds]=[])}function Cw(t,i){let e,n=i[t.index];return wn(n)?e=n:(e=lw(n,i,null,t),i[t.index]=e,Vf(i,e)),LA(e,i,t,n),new Zp(e,t,i)}function PA(t,i){let e=t[ze],n=e.createComment(""),r=Dn(i,t),o=e.parentNode(r);return Vd(e,o,n,e.nextSibling(r),!1),n}var LA=jA,VA=()=>!1;function BA(t,i,e){return VA(t,i,e)}function jA(t,i,e,n){if(t[ir])return;let r;e.type&8?r=Cn(n):r=PA(i,e),t[ir]=r}var Xp=class t{queryList;matches=null;constructor(i){this.queryList=i}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Jp=class t{queries;constructor(i=[]){this.queries=i}createEmbeddedView(i){let e=i.queries;if(e!==null){let n=i.contentQueries!==null?i.contentQueries[0]:e.length,r=[];for(let o=0;o<n;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(i){this.dirtyQueriesWithMatches(i)}detachView(i){this.dirtyQueriesWithMatches(i)}finishViewCreation(i){this.dirtyQueriesWithMatches(i)}dirtyQueriesWithMatches(i){for(let e=0;e<this.queries.length;e++)Qf(i,e).matches!==null&&this.queries[e].setDirty()}},Ud=class{flags;read;predicate;constructor(i,e,n=null){this.flags=e,this.read=n,typeof i=="string"?this.predicate=GA(i):this.predicate=i}},ef=class t{queries;constructor(i=[]){this.queries=i}elementStart(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(i,e)}elementEnd(i){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(i)}embeddedTView(i){let e=null;for(let n=0;n<this.length;n++){let r=e!==null?e.length:0,o=this.getByIndex(n).embeddedTView(i,r);o&&(o.indexInDeclarationView=n,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(i,e)}getByIndex(i){return this.queries[i]}get length(){return this.queries.length}track(i){this.queries.push(i)}},tf=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(i,e=-1){this.metadata=i,this._declarationNodeIndex=e}elementStart(i,e){this.isApplyingToNode(e)&&this.matchTNode(i,e)}elementEnd(i){this._declarationNodeIndex===i.index&&(this._appliesToNextNode=!1)}template(i,e){this.elementStart(i,e)}embeddedTView(i,e){return this.isApplyingToNode(i)?(this.crossesNgTemplate=!0,this.addMatch(-i.index,e),new t(this.metadata)):null}isApplyingToNode(i){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,n=i.parent;for(;n!==null&&n.type&8&&n.index!==e;)n=n.parent;return e===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(i,e){let n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){let o=n[r];this.matchTNodeWithReadOption(i,e,HA(e,o)),this.matchTNodeWithReadOption(i,e,Td(e,i,o,!1,!1))}else n===lt?e.type&4&&this.matchTNodeWithReadOption(i,e,-1):this.matchTNodeWithReadOption(i,e,Td(e,i,n,!1,!1))}matchTNodeWithReadOption(i,e,n){if(n!==null){let r=this.metadata.read;if(r!==null)if(r===H||r===At||r===lt&&e.type&4)this.addMatch(e.index,-2);else{let o=Td(e,i,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,n)}}addMatch(i,e){this.matches===null?this.matches=[i,e]:this.matches.push(i,e)}};function HA(t,i){let e=t.localNames;if(e!==null){for(let n=0;n<e.length;n+=2)if(e[n]===i)return e[n+1]}return null}function zA(t,i){return t.type&11?oa(t,i):t.type&4?au(t,i):null}function UA(t,i,e,n){return e===-1?zA(i,t):e===-2?$A(t,i,n):Rs(t,t[ee],e,i)}function $A(t,i,e){if(e===H)return oa(i,t);if(e===lt)return au(i,t);if(e===At)return Cw(i,t)}function Dw(t,i,e,n){let r=i[si].queries[n];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(UA(i,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function nf(t,i,e,n){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Dw(t,i,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)n.push(a[s/2]);else{let c=o[s+1],u=i[-l];for(let m=rt;m<u.length;m++){let f=u[m];f[nr]===f[Ct]&&nf(f[ee],f,c,n)}if(u[Kr]!==null){let m=u[Kr];for(let f=0;f<m.length;f++){let g=m[f];nf(g[ee],g,c,n)}}}}}return n}function Yf(t,i){return t[si].queries[i].queryList}function xw(t,i,e){let n=new mn((e&4)===4);return Uv(t,i,n,n.destroy),(i[si]??=new Jp).queries.push(new Xp(n))-1}function Ew(t,i,e){let n=Ye();return n.firstCreatePass&&(Sw(n,new Ud(t,i,e),-1),(i&2)===2&&(n.staticViewQueries=!0)),xw(n,ne(),i)}function kw(t,i,e,n){let r=Ye();if(r.firstCreatePass){let o=xt();Sw(r,new Ud(i,e,n),o.index),WA(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return xw(r,ne(),e)}function GA(t){return t.split(",").map(i=>i.trim())}function Sw(t,i,e){t.queries===null&&(t.queries=new ef),t.queries.track(new tf(i,e))}function WA(t,i){let e=t.contentQueries||(t.contentQueries=[]),n=e.length?e[e.length-1]:-1;i!==n&&e.push(t.queries.length-1,i)}function Qf(t,i){return t.queries.getByIndex(i)}function Iw(t,i){let e=t[ee],n=Qf(e,i);return n.crossesNgTemplate?nf(e,t,i,[]):Dw(e,t,n,i)}function Mw(t,i,e){let n,r=ts(()=>{n._dirtyCounter();let o=qA(n,t);if(i&&o===void 0)throw new N(-951,!1);return o});return n=r[_t],n._dirtyCounter=Y(0),n._flatValue=void 0,r}function Kf(t){return Mw(!0,!1,t)}function Zf(t){return Mw(!0,!0,t)}function Tw(t,i){let e=t[_t];e._lView=ne(),e._queryIndex=i,e._queryList=Yf(e._lView,i),e._queryList.onDirty(()=>e._dirtyCounter.update(n=>n+1))}function qA(t,i){let e=t._lView,n=t._queryIndex;if(e===void 0||n===void 0||e[se]&4)return i?void 0:Ht;let r=Yf(e,n),o=Iw(e,n);return r.reset(o,m0),i?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function Ni(t){return!!t&&typeof t.then=="function"}function Xf(t){return!!t&&typeof t.subscribe=="function"}var fi=class{},su=class{};var Ps=class extends fi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(i,e,n,r=!0){super(),this.ngModuleType=i,this._parent=e;let o=xv(i);this._bootstrapComponents=GM(o.bootstrap),this._r3Injector=gp(i,e,[{provide:fi,useValue:this},...n],bs(i),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let i=this._r3Injector;!i.destroyed&&i.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(i){this.destroyCbs.push(i)}},Ls=class extends su{moduleType;constructor(i){super(),this.moduleType=i}create(i){return new Ps(this.moduleType,i,[])}};function Aw(t,i,e){return new Ps(t,i,e,!1)}var $d=class extends fi{injector;instance=null;constructor(i){super();let e=new $r([...i.providers,{provide:fi,useValue:this}],i.parent||Uo(),i.debugName,new Set(["environment"]));this.injector=e,i.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(i){this.injector.onDestroy(i)}};function sa(t,i,e=null){return new $d({providers:t,parent:i,debugName:e,runEnvironmentInitializers:!0}).injector}var YA=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let n=$h(!1,e.type),r=n.length>0?sa([n],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=te({token:t,providedIn:"environment",factory:()=>new t(W(Be))})}return t})();function D(t){return Bs(()=>{let i=Rw(t),e=re(v({},i),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==_f.Eager,directiveDefs:null,pipeDefs:null,dependencies:i.standalone&&t.dependencies||null,getStandaloneInjector:i.standalone?r=>r.get(YA).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Yn.Emulated,styles:t.styles||Ht,_:null,schemas:t.schemas||null,tView:null,id:""});i.standalone&&Qn("NgStandalone"),Ow(e);let n=t.dependencies;return e.directiveDefs=Vy(n,QA),e.pipeDefs=Vy(n,Ev),e.id=XA(e),e})}function QA(t){return ki(t)||Jc(t)}function C(t){return Bs(()=>({type:t.type,bootstrap:t.bootstrap||Ht,declarations:t.declarations||Ht,imports:t.imports||Ht,exports:t.exports||Ht,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function KA(t,i){if(t==null)return Xi;let e={};for(let n in t)if(t.hasOwnProperty(n)){let r=t[n],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=iu.None,l=null),e[o]=[n,s,l],i[o]=a}return e}function ZA(t){if(t==null)return Xi;let i={};for(let e in t)t.hasOwnProperty(e)&&(i[t[e]]=e);return i}function I(t){return Bs(()=>{let i=Rw(t);return Ow(i),i})}function la(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Rw(t){let i={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:i,inputConfig:t.inputs||Xi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ht,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:KA(t.inputs,i),outputs:ZA(t.outputs),debugInfo:null}}function Ow(t){t.features?.forEach(i=>i(t))}function Vy(t,i){return t?()=>{let e=typeof t=="function"?t():t,n=[];for(let r of e){let o=i(r);o!==null&&n.push(o)}return n}:null}function XA(t){let i=0,e=typeof t.consts=="function"?"":t.consts,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of n.join("|"))i=Math.imul(31,i)+o.charCodeAt(0)<<0;return i+=2147483648,"c"+i}var Jf=new b("");function ca(t){return er([{provide:Jf,multi:!0,useValue:t}])}var eg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,n)=>{this.resolve=e,this.reject=n});appInits=d(Jf,{optional:!0})??[];injector=d(Z);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Dt(this.injector,r);if(Ni(o))e.push(o);else if(Xf(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),e.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),rf=new Map,JA=new Set;function tg(t){return Me(this,null,function*(){let i=rf;rf=new Map;let e=new Map;function n(o){let a=e.get(o);if(a)return a;let s=t(o).then(l=>eR(o,l));return e.set(o,s),s}let r=Array.from(i).map(s=>Me(null,[s],function*([o,a]){if(a.styleUrl&&a.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let l=[];a.templateUrl&&l.push(n(a.templateUrl).then(f=>{a.template=f}));let c=typeof a.styles=="string"?[a.styles]:a.styles??[];a.styles=c;let{styleUrl:u,styleUrls:m}=a;if(u&&(m=[u],a.styleUrl=void 0),m?.length){let f=Promise.all(m.map(g=>n(g))).then(g=>{c.push(...g),a.styleUrls=void 0});l.push(f)}yield Promise.all(l),JA.delete(o)}));yield Promise.all(r)})}function Nw(){return rf.size===0}function eR(t,i){return Me(this,null,function*(){if(typeof i=="string")return i;if(i.status!==void 0&&i.status!==200)throw new N(918,!1);return i.text()})}function ng(t){let i=e=>{let n=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=tR,e.hostDirectives=n?t.map(of):[t]):n?e.hostDirectives.unshift(...t.map(of)):e.hostDirectives.unshift(t)};return i.ngInherit=!0,i}function tR(t){let i=[],e=!1,n=null,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=i.length;n??=new Map,r??=new Map,Fw(a,i,n,t),r.set(a,[s,i.length-1])}o===0&&Un(a)&&(e=!0,i.push(a))}for(let o=e?1:0;o<t.length;o++)i.push(t[o]);return n!==null&&n.forEach((o,a)=>{nR(a.declaredInputs,o.inputs)}),[i,n,r]}function Fw(t,i,e,n){if(t.hostDirectives!==null)for(let r of t.hostDirectives)if(typeof r=="function"){let o=r();for(let a of o)By(of(a),i,e,n)}else By(r,i,e,n)}function By(t,i,e,n){let r=Jc(t.directive);if(Fw(r,i,e,n),e.has(r)){let o=e.get(r);jy(o,t.inputs,"input"),jy(o,t.outputs,"output")}else n.includes(r)||(e.set(r,t),i.push(r))}function jy(t,i,e){let n=e==="input"?t.inputs:t.outputs;Object.keys(i).forEach(r=>{let o=i[r];(!n.hasOwnProperty(r)||n[r]===o)&&(n[r]=o)})}function of(t){return typeof t=="function"?{directive:wt(t),inputs:{},outputs:{}}:{directive:wt(t.directive),inputs:Hy(t.inputs),outputs:Hy(t.outputs)}}function Hy(t){let i={};if(t!==void 0&&t.length>0)for(let e=0;e<t.length;e+=2)i[t[e]]=t[e+1];return i}function nR(t,i){for(let e in i)if(i.hasOwnProperty(e)){let n=i[e],r=t[e];t[n]=r}}function iR(t){return Object.getPrototypeOf(t.prototype).constructor}function ye(t){let i=iR(t.type),e=!0,n=[t];for(;i;){let r;if(Un(t))r=i.\u0275cmp||i.\u0275dir;else{if(i.\u0275cmp)throw new N(903,!1);r=i.\u0275dir}if(r){if(e){n.push(r);let a=t;a.inputs=Ep(t.inputs),a.declaredInputs=Ep(t.declaredInputs),a.outputs=Ep(t.outputs);let s=r.hostBindings;s&&lR(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&aR(t,l),c&&sR(t,c),rR(t,r),Dv(t.outputs,r.outputs),Un(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ye&&(e=!1)}}i=Object.getPrototypeOf(i)}oR(n)}function rR(t,i){for(let e in i.inputs){if(!i.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let n=i.inputs[e];n!==void 0&&(t.inputs[e]=n,t.declaredInputs[e]=i.declaredInputs[e])}}function oR(t){let i=0,e=null;for(let n=t.length-1;n>=0;n--){let r=t[n];r.hostVars=i+=r.hostVars,r.hostAttrs=ea(r.hostAttrs,e=ea(e,r.hostAttrs))}}function Ep(t){return t===Xi?{}:t===Ht?[]:t}function aR(t,i){let e=t.viewQuery;e?t.viewQuery=(n,r)=>{i(n,r),e(n,r)}:t.viewQuery=i}function sR(t,i){let e=t.contentQueries;e?t.contentQueries=(n,r,o)=>{i(n,r,o),e(n,r,o)}:t.contentQueries=i}function lR(t,i){let e=t.hostBindings;e?t.hostBindings=(n,r)=>{i(n,r),e(n,r)}:t.hostBindings=i}function Pw(t,i,e,n,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=ea(t.mergedAttrs,t.attrs);let u=t.tView=Pf(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Yo(t,!1);let l=dR(e,i,t,n);_d()&&Nf(e,i,l,t),ta(l,i);let c=lw(l,i,l,t);i[n+et]=c,Vf(i,c),BA(c,t,i)}function cR(t,i,e,n,r,o,a,s,l,c,u){let m=e+et,f;return i.firstCreatePass?(f=aa(i,m,4,a||null,s||null),ud()&&bw(i,t,f,un(i.consts,c),Bf),Jy(i,f)):f=i.data[m],Pw(f,t,i,e,n,r,o,l),Wo(f)&&ru(i,t,f),c!=null&&zs(t,f,u),f}function ia(t,i,e,n,r,o,a,s,l,c,u){let m=e+et,f;if(i.firstCreatePass){if(f=aa(i,m,4,a||null,s||null),c!=null){let g=un(i.consts,c);f.localNames=[];for(let y=0;y<g.length;y+=2)f.localNames.push(g[y],-1)}}else f=i.data[m];return Pw(f,t,i,e,n,r,o,l),c!=null&&zs(t,f,u),f}function Qe(t,i,e,n,r,o,a,s){let l=ne(),c=Ye(),u=un(c.consts,o);return cR(l,c,t,i,e,n,r,u,void 0,a,s),Qe}function dr(t,i,e,n,r,o,a,s){let l=ne(),c=Ye(),u=un(c.consts,o);return ia(l,c,t,i,e,n,r,u,void 0,a,s),dr}var dR=uR;function uR(t,i,e,n){return Ss(!0),i[ze].createComment("")}var lu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var cu=new b(""),da=new b(""),ig=new b("USE_PENDING_TASKS",{providedIn:"root",factory:()=>typeof Zone>"u"}),Gs=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=d($n);_usePendingTasks=d(ig);constructor(e,n,r){this._ngZone=e,this.registry=n,qh()&&(this._destroyRef=d(Mt,{optional:!0})??void 0),rg||(Lw(r),r.addToWindow(n)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),n,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(n=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{B.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),n?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(n=>n.updateCb&&n.updateCb(e)?(clearTimeout(n.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,n,r){let o=-1;n&&n>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),e()},n)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,n,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,n,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,n,r){return[]}static \u0275fac=function(n){return new(n||t)(W(B),W(Ws),W(da))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),Ws=(()=>{class t{_applications=new Map;registerApplication(e,n){this._applications.set(e,n)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,n=!0){return rg?.findTestabilityInTree(this,e,n)??null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Lw(t){rg=t}var rg,qs=new b("");function Vw(){ih(()=>{let t="";throw new N(600,t)})}var mR=10;function og(t,i){return Array.isArray(i)?i.reduce(og,t):v(v({},t),i)}var Ft=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(En);afterRenderManager=d(Jd);zonelessEnabled=d(Zo);rootEffectScheduler=d(yd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new k;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d($n);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ae(e=>!e))}constructor(){d(gi,{optional:!0})}whenStable(){let e;return new Promise(n=>{e=this.isStable.subscribe({next:r=>{r&&n()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,n){return this.bootstrapImpl(e,n)}bootstrapImpl(e,n,r=Z.NULL){return this._injector.get(B).run(()=>{if(We(Fe.BootstrapComponentStart),!this._injector.get(eg).done){let le="";throw new N(405,le)}let s=ki(e),l=this._injector.get(fi),c=new to(s,l);this.componentTypes.push(e);let{hostElement:u,directives:m,bindings:f}=hR(n),g=u||c.selector,y=c.create(r,[],g,l.injector,m,f),R=y.location.nativeElement,K=y.injector.get(cu,null);return K?.registerApplication(R),y.onDestroy(()=>{this.detachView(y.hostView),As(this.components,y),K?.unregisterApplication(R)}),this._loadComponent(y),We(Fe.BootstrapComponentEnd,y),y})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){We(Fe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Xd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw We(Fe.ChangeDetectionEnd),new N(101,!1);let e=ie(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ie(e),this.afterTick.next(),We(Fe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Tt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<mR;){We(Fe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{We(Fe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!n&&!xs(r))continue;let o=n&&!this.zonelessEnabled?0:1;rw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>xs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){let n=e;As(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(qs,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>As(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new N(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function hR(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function As(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Ys(t,i){let e=ne(),n=ui();if(Xt(e,n,i)){let r=Ye(),o=Qo();if(ou(o,r,e,t,i))di(o)&&Z0(e,o.index);else{let s=Dn(o,e);X0(e[ze],s,null,o.value,t,i,null)}}return Ys}function A(t,i,e,n){let r=ne(),o=ui();if(Xt(r,o,i)){let a=Ye(),s=Qo();LT(s,r,t,i,e,n)}return A}var af=class{destroy(i){}updateValue(i,e){}swap(i,e){let n=Math.min(i,e),r=Math.max(i,e),o=this.detach(r);if(r-n>1){let a=this.detach(n);this.attach(n,o),this.attach(r,a)}else this.attach(n,o)}move(i,e){this.attach(e,this.detach(i))}};function kp(t,i,e,n,r){return t===e&&Object.is(i,n)?1:Object.is(r(t,i),r(e,n))?-1:0}function pR(t,i,e,n){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(i)){ie(n);let c=i.length-1;for(ie(null);a<=s&&a<=c;){let u=t.at(a),m=i[a],f=kp(a,u,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let g=t.at(s),y=i[c],R=kp(s,g,c,y,e);if(R!==0){R<0&&t.updateValue(s,y),s--,c--;continue}let K=e(a,u),le=e(s,g),Je=e(a,m);if(Object.is(Je,le)){let mt=e(c,y);Object.is(mt,K)?(t.swap(a,s),t.updateValue(s,y),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new Gd,o??=Uy(t,a,s,e),sf(t,r,a,Je))t.updateValue(a,m),a++,s++;else if(o.has(Je))r.set(K,t.detach(a)),s--;else{let mt=t.create(a,i[a]);t.attach(a,mt),a++,s++}}for(;a<=c;)zy(t,r,e,a,i[a]),a++}else if(i!=null){ie(n);let c=i[Symbol.iterator]();ie(null);let u=c.next();for(;!u.done&&a<=s;){let m=t.at(a),f=u.value,g=kp(a,m,a,f,e);if(g!==0)g<0&&t.updateValue(a,f),a++,u=c.next();else{r??=new Gd,o??=Uy(t,a,s,e);let y=e(a,f);if(sf(t,r,a,y))t.updateValue(a,f),a++,s++,u=c.next();else if(!o.has(y))t.attach(a,t.create(a,f)),a++,s++,u=c.next();else{let R=e(a,m);r.set(R,t.detach(a)),s--}}}for(;!u.done;)zy(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function sf(t,i,e,n){return i!==void 0&&i.has(n)?(t.attach(e,i.get(n)),i.delete(n),!0):!1}function zy(t,i,e,n,r){if(sf(t,i,n,e(n,r)))t.updateValue(n,r);else{let o=t.create(n,r);t.attach(n,o)}}function Uy(t,i,e,n){let r=new Set;for(let o=i;o<=e;o++)r.add(n(o,t.at(o)));return r}var Gd=class{kvMap=new Map;_vMap=void 0;has(i){return this.kvMap.has(i)}delete(i){if(!this.has(i))return!1;let e=this.kvMap.get(i);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(i,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(i),!0}get(i){return this.kvMap.get(i)}set(i,e){if(this.kvMap.has(i)){let n=this.kvMap.get(i);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(n);)n=r.get(n);r.set(n,e)}else this.kvMap.set(i,e)}forEach(i){for(let[e,n]of this.kvMap)if(i(n,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(n);)n=r.get(n),i(n,e)}}};function U(t,i,e,n,r,o,a,s){Qn("NgControlFlow");let l=ne(),c=Ye(),u=un(c.consts,o);return ia(l,c,t,i,e,n,r,u,256,a,s),ag}function ag(t,i,e,n,r,o,a,s){Qn("NgControlFlow");let l=ne(),c=Ye(),u=un(c.consts,o);return ia(l,c,t,i,e,n,r,u,512,a,s),ag}function $(t,i){Qn("NgControlFlow");let e=ne(),n=ui(),r=e[n]!==Jt?e[n]:-1,o=r!==-1?Wd(e,et+r):void 0,a=0;if(Xt(e,n,t)){let s=ie(null);try{if(o!==void 0&&dw(o,a),t!==-1){let l=et+t,c=Wd(e,l),u=uf(e[ee],l),m=mw(c,u,e),f=Us(e,u,i,{dehydratedView:m});$s(c,f,a,na(u,m))}}finally{ie(s)}}else if(o!==void 0){let s=cw(o,a);s!==void 0&&(s[st]=i)}}var lf=class{lContainer;$implicit;$index;constructor(i,e,n){this.lContainer=i,this.$implicit=e,this.$index=n}get $count(){return this.lContainer.length-rt}};function en(t,i){return i}var cf=class{hasEmptyBlock;trackByFn;liveCollection;constructor(i,e,n){this.hasEmptyBlock=i,this.trackByFn=e,this.liveCollection=n}};function pt(t,i,e,n,r,o,a,s,l,c,u,m,f){Qn("NgControlFlow");let g=ne(),y=Ye(),R=l!==void 0,K=ne(),le=s?a.bind(K[Zt][st]):a,Je=new cf(R,le);K[et+t]=Je,ia(g,y,t+1,i,e,n,r,un(y.consts,o),256),R&&ia(g,y,t+2,l,c,u,m,un(y.consts,f),512)}var df=class extends af{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(i,e,n){super(),this.lContainer=i,this.hostLView=e,this.templateTNode=n}get length(){return this.lContainer.length-rt}at(i){return this.getLView(i)[st].$implicit}attach(i,e){let n=e[qr];this.needsIndexUpdate||=i!==this.length,$s(this.lContainer,e,i,na(this.templateTNode,n)),fR(this.lContainer,i)}detach(i){return this.needsIndexUpdate||=i!==this.length-1,gR(this.lContainer,i),_R(this.lContainer,i)}create(i,e){let n=Bd(this.lContainer,this.templateTNode.tView.ssrId);return Us(this.hostLView,this.templateTNode,new lf(this.lContainer,e,i),{dehydratedView:n})}destroy(i){tu(i[ee],i)}updateValue(i,e){this.getLView(i)[st].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let i=0;i<this.length;i++)this.getLView(i)[st].$index=i}getLView(i){return bR(this.lContainer,i)}};function ft(t){let i=ie(null),e=mi();try{let n=ne(),r=n[ee],o=n[e],a=e+1,s=Wd(n,a);if(o.liveCollection===void 0){let c=uf(r,a);o.liveCollection=new df(s,n,c)}else o.liveCollection.reset();let l=o.liveCollection;if(pR(l,t,o.trackByFn,i),l.updateIndexes(),o.hasEmptyBlock){let c=ui(),u=l.length===0;if(Xt(n,c,u)){let m=e+2,f=Wd(n,m);if(u){let g=uf(r,m),y=mw(f,g,n),R=Us(n,g,void 0,{dehydratedView:y});$s(f,R,0,na(g,y))}else r.firstUpdatePass&&aA(f),dw(f,0)}}}finally{ie(i)}}function Wd(t,i){return t[i]}function fR(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e],r=n?n[ci]:void 0;if(n&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=n[ai];dT(o,r),sr.delete(n[li]),r.detachedLeaveAnimationFns=void 0}}function gR(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e],r=n?n[ci]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function _R(t,i){return Fs(t,i)}function bR(t,i){return cw(t,i)}function uf(t,i){return ad(t,i)}function E(t,i,e){let n=ne(),r=ui();if(Xt(n,r,i)){let o=Ye(),a=Qo();Q0(a,n,t,i,n[ze],e)}return E}function mf(t,i,e,n,r){ou(i,t,e,r?"class":"style",n)}function p(t,i,e,n){let r=ne(),o=r[ee],a=t+et,s=o.firstCreatePass?Wf(a,r,2,i,Bf,ud(),e,n):o.data[a];if(di(s)){let l=r[zn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(fw(c),()=>($y(t,i,r,s,n),p))}}return $y(t,i,r,s,n),p}function $y(t,i,e,n,r){if(jf(n,e,t,i,Bw),Wo(n)){let o=e[ee];ru(o,e,n),yf(o,n,e)}r!=null&&zs(e,n)}function _(){let t=Ye(),i=xt(),e=Hf(i);return t.firstCreatePass&&qf(t,e),sp(e)&&lp(),op(),e.classesWithoutHost!=null&&KI(e)&&mf(t,e,ne(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&ZI(e)&&mf(t,e,ne(),e.stylesWithoutHost,!1),_}function V(t,i,e,n){return p(t,i,e,n),_(),V}function Se(t,i,e,n){let r=ne(),o=r[ee],a=t+et,s=o.firstCreatePass?DA(a,o,2,i,e,n):o.data[a];return jf(s,r,t,i,Bw),n!=null&&zs(r,s),Se}function Te(){let t=xt(),i=Hf(t);return sp(i)&&lp(),op(),Te}function Pt(t,i,e,n){return Se(t,i,e,n),Te(),Pt}var Bw=(t,i,e,n,r)=>(Ss(!0),A0(i[ze],n,fp()));function Qs(t,i,e){let n=ne(),r=n[ee],o=t+et,a=r.firstCreatePass?Wf(o,n,8,"ng-container",Bf,ud(),i,e):r.data[o];if(jf(a,n,t,"ng-container",vR),Wo(a)){let s=n[ee];ru(s,n,a),yf(s,a,n)}return e!=null&&zs(n,a),Qs}function Ks(){let t=Ye(),i=xt(),e=Hf(i);return t.firstCreatePass&&qf(t,e),Ks}function tn(t,i,e){return Qs(t,i,e),Ks(),tn}var vR=(t,i,e,n,r)=>(Ss(!0),zM(i[ze],""));function ct(){return ne()}function tt(t,i,e){let n=ne(),r=ui();if(Xt(n,r,i)){let o=Ye(),a=Qo();K0(a,n,t,i,n[ze],e)}return tt}var Zs="en-US";var yR=Zs;function jw(t){typeof t=="string"&&(yR=t.toLowerCase().replace(/_/g,"-"))}function j(t,i,e){let n=ne(),r=Ye(),o=xt();return Hw(r,n,n[ze],o,t,i,e),j}function ro(t,i,e){let n=ne(),r=Ye(),o=xt();return(o.type&3||e)&&gw(o,r,n,e,n[ze],t,i,Rd(o,n,i)),ro}function Hw(t,i,e,n,r,o,a){let s=!0,l=null;if((n.type&3||a)&&(l??=Rd(n,i,o),gw(n,t,i,a,e,r,o,l)&&(s=!1)),s){let c=n.outputs?.[r],u=n.hostDirectiveOutputs?.[r];if(u&&u.length)for(let m=0;m<u.length;m+=2){let f=u[m],g=u[m+1];l??=Rd(n,i,o),Ry(n,i,f,g,r,l)}if(c&&c.length)for(let m of c)l??=Rd(n,i,o),Ry(n,i,m,r,r,l)}}function x(t=1){return iy(t)}function wR(t,i){let e=null,n=ZM(t);for(let r=0;r<i.length;r++){let o=i[r];if(o==="*"){e=r;continue}if(n===null?L0(t,o,!0):eT(n,o))return r}return e}function oe(t){let i=ne()[Zt][Ut];if(!i.projection){let e=t?t.length:1,n=i.projection=Av(e,null),r=n.slice(),o=i.child;for(;o!==null;){if(o.type!==128){let a=t?wR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:n[a]=o,r[a]=o)}o=o.next}}}function q(t,i=0,e,n,r,o){let a=ne(),s=Ye(),l=n?t+1:null;l!==null&&ia(a,s,l,n,r,o,null,e);let c=aa(s,et+t,16,null,e||null);c.projection===null&&(c.projection=i),up();let m=!a[qr]||ap();a[Zt][Ut].projection[c.projection]===null&&l!==null?CR(a,s,l):m&&!Kd(c)&&xT(s,a,c)}function CR(t,i,e){let n=et+e,r=i.data[n],o=t[n],a=Bd(o,r.tView.ssrId),s=Us(t,r,void 0,{dehydratedView:a});$s(o,s,0,na(r,a))}function Ue(t,i,e,n){return kw(t,i,e,n),Ue}function ce(t,i,e){return Ew(t,i,e),ce}function P(t){let i=ne(),e=Ye(),n=pd();ks(n+1);let r=Qf(e,n);if(t.dirty&&Bv(i)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Iw(i,n);t.reset(o,m0),t.notifyOnChanges()}return!0}return!1}function L(){return Yf(ne(),pd())}function du(t,i,e,n,r){return Tw(i,kw(t,e,n,r)),du}function uu(t,i,e,n){return Tw(t,Ew(i,e,n)),uu}function mu(t=1){ks(pd()+t)}function at(t){let i=qv();return sd(i,et+t)}function kd(t,i){return t<<17|i<<2}function no(t){return t>>17&32767}function DR(t){return(t&2)==2}function xR(t,i){return t&131071|i<<17}function hf(t){return t|2}function ra(t){return(t&131068)>>2}function Sp(t,i){return t&-131069|i<<2}function ER(t){return(t&1)===1}function pf(t){return t|1}function kR(t,i,e,n,r,o){let a=o?i.classBindings:i.styleBindings,s=no(a),l=ra(a);t[n]=e;let c=!1,u;if(Array.isArray(e)){let m=e;u=m[1],(u===null||zo(m,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let f=no(t[s+1]);t[n+1]=kd(f,s),f!==0&&(t[f+1]=Sp(t[f+1],n)),t[s+1]=xR(t[s+1],n)}else t[n+1]=kd(s,0),s!==0&&(t[s+1]=Sp(t[s+1],n)),s=n;else t[n+1]=kd(l,0),s===0?s=n:t[l+1]=Sp(t[l+1],n),l=n;c&&(t[n+1]=hf(t[n+1])),Gy(t,u,n,!0),Gy(t,u,n,!1),SR(i,u,t,n,o),a=kd(s,l),o?i.classBindings=a:i.styleBindings=a}function SR(t,i,e,n,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof i=="string"&&zo(o,i)>=0&&(e[n+1]=pf(e[n+1]))}function Gy(t,i,e,n){let r=t[e+1],o=i===null,a=n?no(r):ra(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];IR(l,i)&&(s=!0,t[a+1]=n?pf(c):hf(c)),a=n?no(c):ra(c)}s&&(t[e+1]=n?hf(r):pf(r))}function IR(t,i){return t===null||i==null||(Array.isArray(t)?t[1]:t)===i?!0:Array.isArray(t)&&typeof i=="string"?zo(t,i)>=0:!1}var qn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function MR(t){return t.substring(qn.key,qn.keyEnd)}function TR(t){return AR(t),zw(t,Uw(t,0,qn.textEnd))}function zw(t,i){let e=qn.textEnd;return e===i?-1:(i=qn.keyEnd=RR(t,qn.key=i,e),Uw(t,i,e))}function AR(t){qn.key=0,qn.keyEnd=0,qn.value=0,qn.valueEnd=0,qn.textEnd=t.length}function Uw(t,i,e){for(;i<e&&t.charCodeAt(i)<=32;)i++;return i}function RR(t,i,e){for(;i<e&&t.charCodeAt(i)>32;)i++;return i}function Lt(t,i,e){return $w(t,i,e,!1),Lt}function F(t,i){return $w(t,i,null,!0),F}function je(t){NR(jR,OR,t,!0)}function OR(t,i){for(let e=TR(i);e>=0;e=zw(i,e))id(t,MR(i),!0)}function $w(t,i,e,n){let r=ne(),o=Ye(),a=md(2);if(o.firstUpdatePass&&Ww(o,t,a,n),i!==Jt&&Xt(r,a,i)){let s=o.data[mi()];qw(o,s,r,r[ze],t,r[a+1]=zR(i,e),n,a)}}function NR(t,i,e,n){let r=Ye(),o=md(2);r.firstUpdatePass&&Ww(r,null,o,n);let a=ne();if(e!==Jt&&Xt(a,o,e)){let s=r.data[mi()];if(Yw(s,n)&&!Gw(r,o)){let l=n?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Zc(l,e||"")),mf(r,s,a,e,n)}else HR(r,s,a,a[ze],a[o+1],a[o+1]=BR(t,i,e),n,o)}}function Gw(t,i){return i>=t.expandoStartIndex}function Ww(t,i,e,n){let r=t.data;if(r[e+1]===null){let o=r[mi()],a=Gw(t,e);Yw(o,n)&&i===null&&!a&&(i=!1),i=FR(r,o,i,n),kR(r,o,i,e,a,n)}}function FR(t,i,e,n){let r=Jv(t),o=n?i.residualClasses:i.residualStyles;if(r===null)(n?i.classBindings:i.styleBindings)===0&&(e=Ip(null,t,i,e,n),e=Vs(e,i.attrs,n),o=null);else{let a=i.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Ip(r,t,i,e,n),o===null){let l=PR(t,i,n);l!==void 0&&Array.isArray(l)&&(l=Ip(null,t,i,l[1],n),l=Vs(l,i.attrs,n),LR(t,i,n,l))}else o=VR(t,i,n)}return o!==void 0&&(n?i.residualClasses=o:i.residualStyles=o),e}function PR(t,i,e){let n=e?i.classBindings:i.styleBindings;if(ra(n)!==0)return t[no(n)]}function LR(t,i,e,n){let r=e?i.classBindings:i.styleBindings;t[no(r)]=n}function VR(t,i,e){let n,r=i.directiveEnd;for(let o=1+i.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;n=Vs(n,a,e)}return Vs(n,i.attrs,e)}function Ip(t,i,e,n,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=i[s],n=Vs(n,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),n}function Vs(t,i,e){let n=e?1:2,r=-1;if(i!==null)for(let o=0;o<i.length;o++){let a=i[o];typeof a=="number"?r=a:r===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),id(t,a,e?!0:i[++o]))}return t===void 0?null:t}function BR(t,i,e){if(e==null||e==="")return Ht;let n=[],r=kn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(n,r[o],!0);else if(r instanceof Set)for(let o of r)t(n,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&t(n,o,r[o]);else typeof r=="string"&&i(n,r);return n}function jR(t,i,e){let n=String(i);n!==""&&!n.includes(" ")&&id(t,n,e)}function HR(t,i,e,n,r,o,a,s){r===Jt&&(r=Ht);let l=0,c=0,u=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;u!==null||m!==null;){let f=l<r.length?r[l+1]:void 0,g=c<o.length?o[c+1]:void 0,y=null,R;u===m?(l+=2,c+=2,f!==g&&(y=m,R=g)):m===null||u!==null&&u<m?(l+=2,y=u):(c+=2,y=m,R=g),y!==null&&qw(t,i,e,n,y,R,a,s),u=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function qw(t,i,e,n,r,o,a,s){if(!(i.type&3))return;let l=t.data,c=l[s+1],u=ER(c)?Wy(l,i,e,r,ra(c),a):void 0;if(!qd(u)){qd(o)||DR(c)&&(o=Wy(l,null,e,r,s,a));let m=Jh(mi(),e);kT(n,a,m,r,o)}}function Wy(t,i,e,n,r,o){let a=i===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,m=u===null,f=e[r+1];f===Jt&&(f=m?Ht:void 0);let g=m?rd(f,n):u===n?f:void 0;if(c&&!qd(g)&&(g=rd(l,n)),qd(g)&&(s=g,a))return s;let y=t[r+1];r=a?no(y):ra(y)}if(i!==null){let l=o?i.residualClasses:i.residualStyles;l!=null&&(s=rd(l,n))}return s}function qd(t){return t!==void 0}function zR(t,i){return t==null||t===""||(typeof i=="string"?t=t+i:typeof t=="object"&&(t=bs(kn(t)))),t}function Yw(t,i){return(t.flags&(i?8:16))!==0}function T(t,i=""){let e=ne(),n=Ye(),r=t+et,o=n.firstCreatePass?aa(n,r,1,i,null):n.data[r],a=UR(n,e,o,i);e[r]=a,_d()&&Nf(n,e,a,o),Yo(o,!1)}var UR=(t,i,e,n)=>(Ss(!0),jM(i[ze],n));function Qw(t,i,e,n=""){return Xt(t,ui(),e)?i+Wr(e)+n:Jt}function $R(t,i,e,n,r,o=""){let a=Yv(),s=Gf(t,a,e,r);return md(2),s?i+Wr(e)+n+Wr(r)+o:Jt}function J(t){return He("",t),J}function He(t,i,e){let n=ne(),r=Qw(n,t,i,e);return r!==Jt&&Kw(n,mi(),r),He}function Xs(t,i,e,n,r){let o=ne(),a=$R(o,t,i,e,n,r);return a!==Jt&&Kw(o,mi(),a),Xs}function Kw(t,i,e){let n=Jh(i,t);HM(t[ze],n,e)}function ua(t,i,e){wd(i)&&(i=i());let n=ne(),r=ui();if(Xt(n,r,i)){let o=Ye(),a=Qo();Q0(a,n,t,i,n[ze],e)}return ua}function Js(t,i){let e=wd(t);return e&&t.set(i),e}function ma(t,i){let e=ne(),n=Ye(),r=xt();return Hw(n,e,e[ze],r,t,i),ma}function ur(t){return Xt(ne(),ui(),t)?Wr(t):Jt}function sg(t,i,e=""){return Qw(ne(),t,i,e)}function qy(t,i,e){let n=Ye();n.firstCreatePass&&Zw(i,n.data,n.blueprint,Un(t),e)}function Zw(t,i,e,n,r){if(t=wt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Zw(t[o],i,e,n,r);else{let o=Ye(),a=ne(),s=xt(),l=Ur(t)?t:wt(t.provide),c=Wh(t),u=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(Ur(t)||!t.multi){let g=new eo(c,r,ke,null),y=Tp(l,i,r?u:u+f,m);y===-1?(Op(Ld(s,a),o,l),Mp(o,t,i.length),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(g),a.push(g)):(e[y]=g,a[y]=g)}else{let g=Tp(l,i,u+f,m),y=Tp(l,i,u,u+f),R=g>=0&&e[g],K=y>=0&&e[y];if(r&&!K||!r&&!R){Op(Ld(s,a),o,l);let le=qR(r?WR:GR,e.length,r,n,c,t);!r&&K&&(e[y].providerFactory=le),Mp(o,t,i.length,0),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(le),a.push(le)}else{let le=Xw(e[r?y:g],c,!r&&n);Mp(o,t,g>-1?g:y,le)}!r&&n&&K&&e[y].componentProviders++}}}function Mp(t,i,e,n){let r=Ur(i),o=Pv(i);if(r||o){let l=(o?wt(i.useClass):i).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&i.multi){let u=c.indexOf(e);u===-1?c.push(e,[n,l]):c[u+1].push(n,l)}else c.push(e,l)}}}function Xw(t,i,e){return e&&t.componentProviders++,t.multi.push(i)-1}function Tp(t,i,e,n){for(let r=e;r<n;r++)if(i[r]===t)return r;return-1}function GR(t,i,e,n,r){return ff(this.multi,[])}function WR(t,i,e,n,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Rs(n,n[ee],this.providerFactory.index,r);a=l.slice(0,s),ff(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],ff(o,a);return a}function ff(t,i){for(let e=0;e<t.length;e++){let n=t[e];i.push(n())}return i}function qR(t,i,e,n,r,o){let a=new eo(t,e,ke,null);return a.multi=[],a.index=i,a.componentProviders=0,Xw(a,r,n&&!e),a}function De(t,i){return e=>{e.providersResolver=(n,r)=>qy(n,r?r(t):t,!1),i&&(e.viewProvidersResolver=(n,r)=>qy(n,r?r(i):i,!0))}}function mr(t,i,e){return Jw(ne(),Es(),t,i,e)}function lg(t,i,e,n,r){return QR(ne(),Es(),t,i,e,n,r)}function cg(t,i){let e=t[i];return e===Jt?void 0:e}function Jw(t,i,e,n,r,o){let a=i+e;return Xt(t,a,r)?$f(t,a+1,o?n.call(o,r):n(r)):cg(t,a+1)}function YR(t,i,e,n,r,o,a){let s=i+e;return Gf(t,s,r,o)?$f(t,s+2,a?n.call(a,r,o):n(r,o)):cg(t,s+2)}function QR(t,i,e,n,r,o,a,s){let l=i+e;return uA(t,l,r,o,a)?$f(t,l+3,s?n.call(s,r,o,a):n(r,o,a)):cg(t,l+3)}function ue(t,i){let e=Ye(),n,r=t+et;e.firstCreatePass?(n=KR(i,e.pipeRegistry),e.data[r]=n,n.onDestroy&&(e.destroyHooks??=[]).push(r,n.onDestroy)):n=e.data[r];let o=n.factory||(n.factory=Ki(n.type,!0)),a,s=Kt(ke);try{let l=Pd(!1),c=o();return Pd(l),ep(e,ne(),r,c),c}finally{Kt(s)}}function KR(t,i){if(i)for(let e=i.length-1;e>=0;e--){let n=i[e];if(t===n.name)return n}}function fe(t,i,e){let n=t+et,r=ne(),o=sd(r,n);return eC(r,n)?Jw(r,Es(),i,o.transform,e,o):o.transform(e)}function dg(t,i,e,n){let r=t+et,o=ne(),a=sd(o,r);return eC(o,r)?YR(o,Es(),i,a.transform,e,n,a):a.transform(e,n)}function eC(t,i){return t[ee].data[i].pure}function hr(t,i){return au(t,i)}var Sd=null;function tC(t){Sd!==null&&(t.defaultEncapsulation!==Sd.defaultEncapsulation||t.preserveWhitespaces!==Sd.preserveWhitespaces)||(Sd=t)}var nC=(()=>{class t{applicationErrorHandler=d(En);appRef=d(Ft);taskService=d($n);ngZone=d(B);zonelessEnabled=d(Zo);tracing=d(gi,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new de;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(gs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(vd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let n=this.useMicrotaskScheduler?ay:bp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>n(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>n(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(gs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.applicationErrorHandler(n)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function iC(){return[{provide:jn,useExisting:nC},{provide:B,useClass:_s},{provide:Zo,useValue:!0}]}var ug=(()=>{class t{compileModuleSync(e){return new Ls(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),rC=new b("");function ZR(){return typeof $localize<"u"&&$localize.locale||Zs}var el=new b("",{factory:()=>d(el,{optional:!0,skipSelf:!0})||ZR()});function kt(t,i){return ts(t,i?.equal)}function Ke(t){return $b(t)}var mC=Symbol("InputSignalNode#UNSET"),u1=re(v({},ns),{transformFn:void 0,applyValueToInputSignal(t,i){Ro(t,i)}});function hC(t,i){let e=Object.create(u1);e.value=t,e.transformFn=i?.transform;function n(){if(Nr(e),e.value===mC){let r=null;throw new N(-950,r)}return e.value}return n[_t]=e,n}var Vt=class{attributeName;constructor(i){this.attributeName=i}__NG_ELEMENT_ID__=()=>Yd(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function fg(t){return m1(t)?t.default:t}function m1(t){return t&&typeof t=="object"&&"default"in t}function oC(t,i){return hC(t,i)}function h1(t){return hC(mC,t)}var pr=(oC.required=h1,oC);function aC(t,i){return Kf(i)}function p1(t,i){return Zf(i)}var nl=(aC.required=p1,aC);function sC(t,i){return Kf(i)}function f1(t,i){return Zf(i)}var pC=(sC.required=f1,sC);var fC=(()=>{class t{constructor(e){}static \u0275fac=function(n){return new(n||t)(W(Ft))};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();var g1=1e4;var v9=g1-1e3;var ge=(()=>{class t{static __NG_ELEMENT_ID__=_1}return t})();function _1(t){return b1(xt(),ne(),(t&16)===16)}function b1(t,i,e){if(di(t)&&!e){let n=xn(t.index,i);return new lr(n,n)}else if(t.type&175){let n=i[Zt];return new lr(n,i)}return null}var v1=(()=>{class t{zone=d(B);changeDetectionScheduler=d(jn);applicationRef=d(Ft);applicationErrorHandler=d(En);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),y1=new b("",{factory:()=>!1});function w1({ngZoneFactory:t,scheduleInRootZone:i}){return t??=()=>new B(re(v({},_C()),{scheduleInRootZone:i})),[{provide:Zo,useValue:!1},{provide:B,useFactory:t},{provide:Ji,multi:!0,useFactory:()=>{let e=d(v1,{optional:!0});return()=>e.initialize()}},{provide:Ji,multi:!0,useFactory:()=>{let e=d(C1);return()=>{e.initialize()}}},{provide:vd,useValue:i??_p}]}function gC(t){let i=t?.scheduleInRootZone,e=w1({ngZoneFactory:()=>{let n=_C(t);return n.scheduleInRootZone=i,n.shouldCoalesceEventChangeDetection&&Qn("NgZone_CoalesceEvent"),new B(n)},scheduleInRootZone:i});return er([{provide:y1,useValue:!0},e])}function _C(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var C1=(()=>{class t{subscription=new de;initialized=!1;zone=d(B);pendingTasks=d($n);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{B.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{B.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function D1(t,i,e){let n=new Ls(e);return Promise.resolve(n)}function lC(t){for(let i=t.length-1;i>=0;i--)if(t[i]!==void 0)return t[i]}var hu=new b(""),x1=new b("");function tl(t){return!t.moduleRef}function E1(t){let i=tl(t)?t.r3Injector:t.moduleRef.injector,e=i.get(B);return e.run(()=>{tl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let n=i.get(En),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:n})}),tl(t)){let o=()=>i.destroy(),a=t.platformInjector.get(hu);a.add(o),i.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(hu);a.add(o),t.moduleRef.onDestroy(()=>{As(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return S1(n,e,()=>{let o=i.get($n),a=o.add(),s=i.get(eg);return s.runInitializers(),s.donePromise.then(()=>{let l=i.get(el,Zs);if(jw(l||Zs),!i.get(x1,!0))return tl(t)?i.get(Ft):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(tl(t)){let u=i.get(Ft);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return bC?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var bC;function cC(){bC=k1}function k1(t,i){let e=t.injector.get(Ft);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(n=>e.bootstrap(n));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new N(-403,!1);i.push(t)}function S1(t,i,e){try{let n=e();return Ni(n)?n.catch(r=>{throw i.runOutsideAngular(()=>t(r)),r}):n}catch(n){throw i.runOutsideAngular(()=>t(n)),n}}var vC=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,n){let r=[iC(),...n?.applicationProviders??[],ly],o=Aw(e.moduleType,this.injector,r);return cC(),E1({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,n=[]){let r=og({},n);return cC(),D1(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new N(404,!1);this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n());let e=this._injector.get(hu,null);e&&(e.forEach(n=>n()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(n){return new(n||t)(W(Z))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var gg=null;function I1(t){if(bg())throw new N(400,!1);Vw(),gg=t;let i=t.get(vC);return A1(t),i}function _g(t,i,e=[]){let n=`Platform: ${i}`,r=new b(n);return(o=[])=>{let a=bg();if(!a){let s=[...e,...o,{provide:r,useValue:!0}];a=t?.(s)??I1(M1(s,n))}return T1(r)}}function M1(t=[],i){return Z.create({name:i,providers:[{provide:Cs,useValue:"platform"},{provide:hu,useValue:new Set([()=>gg=null])},...t]})}function T1(t){let i=bg();if(!i)throw new N(-401,!1);return i}function bg(){return gg?.get(vC)??null}function A1(t){let i=t.get(bd,null);Dt(t,()=>{i?.forEach(e=>e())})}function G(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function dt(t,i=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):i}var mg=Symbol("NOT_SET"),yC=new Set,R1=re(v({},ns),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:mg,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==mg&&!To(this))return this.signal;try{for(let r of this.cleanup??yC)r()}finally{this.cleanup?.clear()}let i=[];t!==void 0&&i.push(t),i.push(this.registerCleanupFn);let e=$i(this),n;try{n=this.userFn.apply(null,i)}finally{Fr(this,e)}return(this.value===mg||!this.equal(this.value,n))&&(this.value=n,this.version++),this.signal}}),hg=class extends Os{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(i,e,n,r,o,a=null){super(i,[void 0,void 0,void 0,void 0],n,!1,o.get(Mt),a),this.scheduler=r;for(let s of Tf){let l=e[s];if(l===void 0)continue;let c=Object.create(R1);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(Nr(c),c.value),c.signal[_t]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let i of this.onDestroyFns)i();super.destroy();for(let i of this.nodes)if(i)try{for(let e of i.cleanup??yC)e()}finally{Gi(i)}}};function vg(t,i){let e=i?.injector??d(Z),n=e.get(jn),r=e.get(Jd),o=e.get(gi,null,{optional:!0});r.impl??=e.get(Af);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ko,null,{optional:!0}),l=new hg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,n,e,o?.snapshot(null));return r.impl.register(l),l}var wC=_g(null,"core",[]);function pu(t,i){let e=ki(t),n=i.elementInjector||Uo();return new to(e).create(n,i.projectableNodes,i.hostElement,i.environmentInjector,i.directives,i.bindings)}function CC(t){let i=ki(t);if(!i)return null;let e=new to(i);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return i.standalone},get isSignal(){return i.signals}}}var DC=null;function hn(){return DC}function yg(t){DC??=t}var il=class{},oo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:()=>d(xC),providedIn:"platform"})}return t})(),wg=new b(""),xC=(()=>{class t extends oo{_location;_history;_doc=d(X);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return hn().getBaseHref(this._doc)}onPopState(e){let n=hn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=hn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function fu(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function EC(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Kn(t){return t&&t[0]!=="?"?`?${t}`:t}var Fi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:()=>d(_u),providedIn:"root"})}return t})(),gu=new b(""),_u=(()=>{class t extends Fi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(X).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return fu(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Kn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Kn(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Kn(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(oo),W(gu,8))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _i=(()=>{class t{_subject=new k;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=F1(EC(kC(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Kn(n))}normalize(e){return t.stripTrailingSlash(N1(this._basePath,kC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kn(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kn(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Kn;static joinWithSlash=fu;static stripTrailingSlash=EC;static \u0275fac=function(n){return new(n||t)(W(Fi))};static \u0275prov=te({token:t,factory:()=>O1(),providedIn:"root"})}return t})();function O1(){return new _i(W(Fi))}function N1(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function kC(t){return t.replace(/\/index\.html$/,"")}function F1(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Dg=(()=>{class t extends Fi{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=fu(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Kn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Kn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(oo),W(gu,8))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Cg=/\s+/,SC=[],xg=(()=>{class t{_ngEl;_renderer;initialClasses=SC;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Cg):SC}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Cg):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Cg).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(ke(H),ke(Pe))};static \u0275dir=I({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var ha=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(Z);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(ke(At))};static \u0275dir=I({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();var Eg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();function kg(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Ig="browser";function IC(t){return t===Ig}var Mg=(()=>{class t{static \u0275prov=te({token:t,providedIn:"root",factory:()=>new Sg(d(X),window)})}return t})(),Sg=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(re(v({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=V1(this.document,i);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(oi(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(re(v({},e),{left:r-a[0],top:o-a[1]}))}};function V1(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${CSS.escape(i)}"]`);if(a)return a}r=n.nextNode()}}return null}var rl=class{_doc;constructor(i){this._doc=i}manager},bu=(()=>{class t extends rl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(W(X))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),wu=new b(""),Og=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof bu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof bu);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(W(wu),W(B))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),Tg="ng-app-id";function MC(t){for(let i of t)i.remove()}function TC(t,i){let e=i.createElement("style");return e.textContent=t,e}function j1(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Tg}="${i}"],link[${Tg}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Tg),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Rg(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ng=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,j1(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,TC);n?.forEach(r=>this.addUsage(r,this.external,Rg))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(MC(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])MC(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,TC(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Rg(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of n.elements)o.parentNode===e?o.remove():r.push(o);n.elements=r}}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(W(X),W(Ii),W(or,8),W(Jr))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),Ag={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Fg=/%COMP%/g;var RC="%COMP%",H1=`_nghost-${RC}`,z1=`_ngcontent-${RC}`,U1=!0,$1=new b("",{factory:()=>U1});function G1(t){return z1.replace(Fg,t)}function W1(t){return H1.replace(Fg,t)}function OC(t,i){return i.map(e=>e.replace(Fg,t))}var Pg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ol(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof yu?r.applyToHost(e):r instanceof al&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(n.encapsulation){case Yn.Emulated:o=new yu(l,c,n,this.appId,u,a,s,m);break;case Yn.ShadowDom:return new vu(l,e,n,a,s,this.nonce,m,c);case Yn.ExperimentalIsolatedShadowDom:return new vu(l,e,n,a,s,this.nonce,m);default:o=new al(l,c,n,u,a,s,m);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(W(Og),W(io),W(Ii),W($1),W(X),W(B),W(or),W(gi,8))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),ol=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Ag[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(AC(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(AC(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new N(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Ag[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Ag[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(pi.DashCase|pi.Important)?i.style.setProperty(e,n,r&pi.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&pi.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=hn().getGlobalEventTarget(this.doc,i),!i))throw new N(-5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function AC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var vu=class extends ol{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=n.styles;c=OC(n.id,c);for(let m of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let u=n.getExternalStyles?.();if(u)for(let m of u){let f=Rg(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},al=class extends ol{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=n.styles;this.styles=l?OC(l,c):c,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&sr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yu=class extends al{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let c=r+"-"+n.id;super(i,e,n,o,a,s,l,c),this.contentAttr=G1(c),this.hostAttr=W1(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Cu=class t extends il{supportsDOMEvents=!0;static makeCurrent(){yg(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=q1();return e==null?null:Y1(e)}resetBaseElement(){sl=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return kg(document.cookie,i)}},sl=null;function q1(){return sl=sl||document.head.querySelector("base"),sl?sl.getAttribute("href"):null}function Y1(t){return new URL(t,document.baseURI).pathname}var Du=class{addToWindow(i){zt.getAngularTestability=(n,r=!0)=>{let o=i.findTestabilityInTree(n,r);if(o==null)throw new N(5103,!1);return o},zt.getAllAngularTestabilities=()=>i.getAllTestabilities(),zt.getAllAngularRootElements=()=>i.getAllRootElements();let e=n=>{let r=zt.getAllAngularTestabilities(),o=r.length,a=function(){o--,o==0&&n()};r.forEach(s=>{s.whenStable(a)})};zt.frameworkStabilizers||(zt.frameworkStabilizers=[]),zt.frameworkStabilizers.push(e)}findTestabilityInTree(i,e,n){if(e==null)return null;let r=i.getTestability(e);return r??(n?hn().isShadowRoot(e)?this.findTestabilityInTree(i,e.host,!0):this.findTestabilityInTree(i,e.parentElement,!0):null)}},NC=["alt","control","meta","shift"],Q1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},K1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},FC=(()=>{class t extends rl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>hn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),NC.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),a+=c+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=Q1[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),NC.forEach(a=>{if(a!==r){let s=K1[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(W(X))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();function Z1(){Cu.makeCurrent()}function X1(){return new on}function J1(){return bf(document),document}var eO=[{provide:Jr,useValue:Ig},{provide:bd,useValue:Z1,multi:!0},{provide:X,useFactory:J1}],Lg=_g(wC,"browser",eO);var tO=[{provide:da,useClass:Du},{provide:cu,useClass:Gs,deps:[B,Ws,da]},{provide:Gs,useClass:Gs,deps:[B,Ws,da]}],nO=[{provide:Cs,useValue:"root"},{provide:on,useFactory:X1},{provide:wu,useClass:bu,multi:!0},{provide:wu,useClass:FC,multi:!0},Pg,{provide:io,useClass:Ng},{provide:Ng,useExisting:io},Og,{provide:Tt,useExisting:Pg},[]],Vg=(()=>{class t{constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[...nO,...tO],imports:[Eg,fC]})}return t})();var Li=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Hg=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},zg=class{encodeKey(i){return PC(i)}encodeValue(i){return PC(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function iO(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var rO=/%(\d[a-f0-9])/gi,oO={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function PC(t){return encodeURIComponent(t).replace(rO,(i,e)=>oO[e]??i)}function xu(t){return`${t}`}var Pi=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new zg,i.fromString){if(i.fromObject)throw new N(2805,!1);this.map=iO(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(xu):[xu(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(xu(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(xu(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function aO(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function LC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function VC(t){return typeof Blob<"u"&&t instanceof Blob}function BC(t){return typeof FormData<"u"&&t instanceof FormData}function sO(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Bg="Content-Type",jC="Accept",zC="text/plain",UC="application/json",lO=`${UC}, ${zC}, */*`,pa=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(aO(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Li,this.context??=new Hg,!this.params)this.params=new Pi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e,l="",c=e.indexOf("#");c!==-1&&(l=e.substring(c),s=e.substring(0,c));let u=s.indexOf("?"),m=u===-1?"?":u<s.length-1?"&":"";this.urlWithParams=s+m+a+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||LC(this.body)||VC(this.body)||BC(this.body)||sO(this.body)?this.body:this.body instanceof Pi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||BC(this.body)?null:VC(this.body)?this.body.type||null:LC(this.body)?null:typeof this.body=="string"?zC:this.body instanceof Pi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?UC:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,c=i.redirect||this.redirect,u=i.credentials||this.credentials,m=i.referrer??this.referrer,f=i.integrity||this.integrity,g=i.referrerPolicy||this.referrerPolicy,y=i.transferCache??this.transferCache,R=i.timeout??this.timeout,K=i.body!==void 0?i.body:this.body,le=i.withCredentials??this.withCredentials,Je=i.reportProgress??this.reportProgress,mt=i.reportUploadProgress??this.reportUploadProgress,Io=i.reportDownloadProgress??this.reportDownloadProgress,Xa=i.headers||this.headers,Tr=i.params||this.params,rc=i.context??this.context;return i.setHeaders!==void 0&&(Xa=Object.keys(i.setHeaders).reduce((Mo,Ar)=>Mo.set(Ar,i.setHeaders[Ar]),Xa)),i.setParams&&(Tr=Object.keys(i.setParams).reduce((Mo,Ar)=>Mo.set(Ar,i.setParams[Ar]),Tr)),new t(e,n,K,{params:Tr,headers:Xa,context:rc,reportProgress:Je,reportUploadProgress:mt,reportDownloadProgress:Io,responseType:r,withCredentials:le,transferCache:y,keepalive:o,cache:s,priority:a,timeout:R,mode:l,redirect:c,credentials:u,referrer:m,integrity:f,referrerPolicy:g})}},fa=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(fa||{}),ll=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Li,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Ug=class t extends ll{constructor(i={}){super(i)}type=fa.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},cl=class t extends ll{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=fa.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},ao=class extends ll{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},cO=200;var dO=/^\)\]\}',?\n/,$Y=1024*1024,uO=new b("",{factory:()=>null}),mO=(()=>{class t{fetchImpl=d($g,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=d(B);destroyRef=d(Mt);maxResponseSize=d(uO);handle(e){return new pe(n=>{let r=new AbortController;this.doRequest(e,r.signal,n).then(Gg,a=>n.error(new ao({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,n,r){return Me(this,null,function*(){let o=this.createRequestInit(e),a;try{let K=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,v({signal:n},o)));hO(K),r.next({type:fa.Sent}),a=yield K}catch(K){r.error(new ao({error:K,status:K.status??0,statusText:K.statusText,url:e.urlWithParams,headers:K.headers}));return}let s=new Li(a.headers),l=a.statusText,c=a.url||e.urlWithParams,u=a.status,m=null,f=e.reportProgress||e.reportDownloadProgress;if(f&&r.next(new Ug({headers:s,status:u,statusText:l,url:c})),a.body){let K=a.headers.get("content-length"),le=K!==null?Number(K):NaN;this.maxResponseSize!==null&&Number.isFinite(le)&&le>this.maxResponseSize&&HC(this.maxResponseSize);let Je=[],mt=a.body.getReader(),Io=0,Xa,Tr,rc=typeof Zone<"u"&&Zone.current,Mo=!1;if(yield this.ngZone.runOutsideAngular(()=>Me(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield mt.cancel(),Mo=!0;break}let{done:Ja,value:Jm}=yield mt.read();if(Ja)break;if(Je.push(Jm),Io+=Jm.length,this.maxResponseSize!==null&&Io>this.maxResponseSize&&(yield mt.cancel(),HC(this.maxResponseSize)),f){Tr=e.responseType==="text"?(Tr??"")+(Xa??=new TextDecoder).decode(Jm,{stream:!0}):void 0;let Ob=()=>r.next({type:fa.DownloadProgress,total:Number.isFinite(le)?le:void 0,loaded:Io,partialText:Tr});rc?rc.run(Ob):Ob()}}})),Mo){r.complete();return}let Ar=this.concatChunks(Je,Io);try{let Ja=a.headers.get(Bg)??"";m=this.parseBody(e,Ar,Ja,u)}catch(Ja){r.error(new ao({error:Ja,headers:new Li(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=m?cO:0);let g=u>=200&&u<300,y=a.redirected,R=a.type;g?(r.next(new cl({body:m,headers:s,status:u,statusText:l,url:c,redirected:y,responseType:R})),r.complete()):r.error(new ao({error:m,headers:s,status:u,statusText:l,url:c,redirected:y,responseType:R}))})}parseBody(e,n,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(n).replace(dO,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:r});case"arraybuffer":return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let n={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>n[o]=a.join(",")),e.headers.has(jC)||(n[jC]=lO),!e.headers.has(Bg)){let o=e.detectContentTypeHeader();o!==null&&(n[Bg]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let r=new Uint8Array(n),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),$g=class{};function Gg(){}function hO(t){t.then(Gg,Gg)}function HC(t){throw new N(-2825,!1)}function pO(t,i){return i(t)}function fO(t,i,e){return(n,r)=>Dt(e,()=>i(n,o=>t(o,r)))}var gO=new b("",{factory:()=>[]}),$C=new b(""),_O=new b("",{factory:()=>!0});var bO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(mO),r},providedIn:"root"})}return t})();var vO=(()=>{class t{backend;injector;chain=null;pendingTasks=d(Cd);contributeToStability=d(_O);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(gO),...this.injector.get($C,[])]));this.chain=r.reduceRight((o,a)=>fO(o,a,this.injector),pO)}let n=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ke(()=>n(e,o=>this.backend.handle(o))).pipe(jr(r))}else return Ke(()=>n(e,r=>this.backend.handle(r)))}static \u0275fac=function(n){return new(n||t)(W(bO),W(Be))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yO=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(vO),r},providedIn:"root"})}return t})();function jg(t,i){return v({body:i},t)}var dl=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof pa)o=e;else{let l;r.headers instanceof Li?l=r.headers:l=new Li(r.headers);let c;r.params&&(r.params instanceof Pi?c=r.params:c=new Pi({fromObject:r.params})),o=new pa(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(Qi(l=>this.handler.handle(l)));if(e instanceof pa||r.observe==="events")return a;let s=a.pipe(Ee(l=>l instanceof cl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ae(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new N(2806,!1);return l.body}));case"blob":return s.pipe(ae(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new N(2807,!1);return l.body}));case"text":return s.pipe(ae(l=>{if(l.body!==null&&typeof l.body!="string")throw new N(2808,!1);return l.body}));default:return s.pipe(ae(l=>l.body))}case"response":return s;default:throw new N(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Pi().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,jg(r,n))}post(e,n,r={}){return this.request("POST",e,jg(r,n))}put(e,n,r={}){return this.request("PUT",e,jg(r,n))}static \u0275fac=function(n){return new(n||t)(W(yO))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var WC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(W(X))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var so=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=te({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(wO),r},providedIn:"root"})}return t})(),wO=(()=>{class t extends so{_doc=d(X);sanitize(e,n){if(n==null)return null;switch(e){case Et.NONE:return n;case Et.HTML:return Ai(n,"HTML")?kn(n):kf(this._doc,String(n)).toString();case Et.STYLE:return Ai(n,"Style")?kn(n):n;case Et.SCRIPT:if(Ai(n,"Script"))return kn(n);throw new N(5200,!1);case Et.URL:return Ai(n,"URL")?kn(n):js(String(n));case Et.RESOURCE_URL:if(Ai(n,"ResourceURL"))return kn(n);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return wf(e)}bypassSecurityTrustStyle(e){return Cf(e)}bypassSecurityTrustScript(e){return Df(e)}bypassSecurityTrustUrl(e){return xf(e)}bypassSecurityTrustResourceUrl(e){return Ef(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var me="primary",Cl=Symbol("RouteTitle"),Kg=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function co(t){return new Kg(t)}function Wg(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function tD(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},c=t.slice(0,n.length);return Wg(n,c,l)?{consumed:c,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Wg(o,t.slice(0,o.length),s)||!Wg(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Au(t){return new Promise((i,e)=>{t.pipe(Di()).subscribe({next:n=>i(n),error:n=>e(n)})})}function CO(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!bi(t[e],i[e]))return!1;return!0}function bi(t,i){let e=t?Zg(t):void 0,n=i?Zg(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!nD(t[r],i[r]))return!1;return!0}function Zg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function nD(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function DO(t){return t.length>0?t[t.length-1]:null}function mo(t){return ls(t)?t:Ni(t)?qe(Promise.resolve(t)):Q(t)}function iD(t){return ls(t)?Au(t):Promise.resolve(t)}var xO={exact:aD,subset:sD},rD={exact:EO,subset:kO,ignored:()=>!0},oD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Xg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function qC(t,i,e){return xO[e.paths](t.root,i.root,e.matrixParams)&&rD[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function EO(t,i){return bi(t,i)}function aD(t,i,e){if(!lo(t.segments,i.segments)||!Iu(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!aD(t.children[n],i.children[n],e))return!1;return!0}function kO(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>nD(t[e],i[e]))}function sD(t,i,e){return lD(t,i,i.segments,e)}function lD(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!lo(r,e)||i.hasChildren()||!Iu(r,e,n))}else if(t.segments.length===e.length){if(!lo(t.segments,e)||!Iu(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!sD(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!lo(t.segments,r)||!Iu(t.segments,r,n)||!t.children[me]?!1:lD(t.children[me],i,o,n)}}function Iu(t,i,e){return i.every((n,r)=>rD[e](t[r].parameters,n.parameters))}var In=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Le([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=co(this.queryParams),this._queryParamMap}toString(){return MO.serialize(this)}},Le=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Mu(this)}},fr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=co(this.parameters),this._parameterMap}toString(){return dD(this)}};function SO(t,i){return lo(t,i)&&t.every((e,n)=>bi(e.parameters,i[n].parameters))}function lo(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function IO(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===me&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==me&&(e=e.concat(i(r,n)))}),e}var ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:()=>new Bi})}return t})(),Bi=class{parse(i){let e=new e_(i);return new In(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${ul(i.root,!0)}`,n=RO(i.queryParams),r=typeof i.fragment=="string"?`#${TO(i.fragment)}`:"";return`${e}${n}${r}`}},MO=new Bi;function Mu(t){return t.segments.map(i=>dD(i)).join("/")}function ul(t,i){if(!t.hasChildren())return Mu(t);if(i){let e=t.children[me]?ul(t.children[me],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==me&&n.push(`${r}:${ul(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=IO(t,(n,r)=>r===me?[ul(t.children[me],!1)]:[`${r}:${ul(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[me]!=null?`${Mu(t)}/${e[0]}`:`${Mu(t)}/(${e.join("//")})`}}function cD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ku(t){return cD(t).replace(/%3B/gi,";")}function TO(t){return encodeURI(t)}function Jg(t){return cD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Tu(t){return decodeURIComponent(t)}function YC(t){return Tu(t.replace(/\+/g,"%20"))}function dD(t){return`${Jg(t.path)}${AO(t.parameters)}`}function AO(t){return Object.entries(t).map(([i,e])=>`;${Jg(i)}=${Jg(e)}`).join("")}function RO(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${ku(e)}=${ku(r)}`).join("&"):`${ku(e)}=${ku(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var OO=/^[^\/()?;#]+/;function qg(t){let i=t.match(OO);return i?i[0]:""}var NO=/^[^\/()?;=#]+/;function FO(t){let i=t.match(NO);return i?i[0]:""}var PO=/^[^=?&#]+/;function LO(t){let i=t.match(PO);return i?i[0]:""}var VO=/^[^&#]+/;function BO(t){let i=t.match(VO);return i?i[0]:""}var e_=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Le([],{}):new Le([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new N(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[me]=new Le(e,n)),r}parseSegment(){let i=qg(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new N(4009,!1);return this.capture(i),new fr(Tu(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=FO(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=qg(this.remaining);r&&(n=r,this.capture(n))}i[Tu(e)]=Tu(n)}parseQueryParam(i){let e=LO(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=BO(this.remaining);a&&(n=a,this.capture(n))}let r=YC(e),o=YC(n);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=qg(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new N(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=me);let s=this.parseChildren(e+1);n[a??me]=Object.keys(s).length===1&&s[me]?s[me]:new Le([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new N(4011,!1)}};function uD(t){return t.segments.length>0?new Le([],{[me]:t}):t}function mD(t){let i=Object.create(null);for(let[n,r]of Object.entries(t.children)){let o=mD(r);if(n===me&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new Le(t.segments,i);return jO(e)}function jO(t){if(t.numberOfChildren===1&&t.children[me]){let i=t.children[me];return new Le(t.segments.concat(i.segments),i.children)}return t}function ya(t){return t instanceof In}function hD(t,i,e=null,n=null,r=new Bi){let o=pD(t);return fD(o,i,e,n,r)}function pD(t){let i;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Le(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=uD(n);return i??r}function fD(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return Yg(o,o,o,e,n,r);let a=HO(i);if(a.toRoot())return Yg(o,o,new Le([],{}),e,n,r);let s=zO(a,o,t),l=s.processChildren?hl(s.segmentGroup,s.index,a.commands):_D(s.segmentGroup,s.index,a.commands);return Yg(o,s.segmentGroup,l,e,n,r)}function Ru(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function fl(t){return typeof t=="object"&&t!=null&&t.outlets}function QC(t,i,e){t||="\u0275";let n=new In;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function Yg(t,i,e,n,r,o){let a={};for(let[c,u]of Object.entries(n??{}))a[c]=Array.isArray(u)?u.map(m=>QC(c,m,o)):QC(c,u,o);let s;t===i?s=e:s=gD(t,i,e);let l=uD(mD(s));return new In(l,a,r)}function gD(t,i,e){let n=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=gD(o,i,e)}),new Le(t.segments,n)}var Ou=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Ru(n[0]))throw new N(4003,!1);let r=n.find(fl);if(r&&r!==DO(n))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function HO(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Ou(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Ou(e,i,n)}var _a=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function zO(t,i,e){if(t.isAbsolute)return new _a(i,!0,0);if(!e)return new _a(i,!1,NaN);if(e.parent===null)return new _a(e,!0,0);let n=Ru(t.commands[0])?0:1,r=e.segments.length-1+n;return UO(e,r,t.numberOfDoubleDots)}function UO(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new N(4005,!1);r=n.segments.length}return new _a(n,!1,r-o)}function $O(t){return fl(t[0])?t[0].outlets:{[me]:t}}function _D(t,i,e){if(t??=new Le([],{}),t.segments.length===0&&t.hasChildren())return hl(t,i,e);let n=GO(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new Le(t.segments.slice(0,n.pathIndex),{});return o.children[me]=new Le(t.segments.slice(n.pathIndex),t.children),hl(o,0,r)}else return n.match&&r.length===0?new Le(t.segments,{}):n.match&&!t.hasChildren()?t_(t,i,e):n.match?hl(t,0,r):t_(t,i,e)}function hl(t,i,e){if(e.length===0)return new Le(t.segments,{});{let n=$O(e),r=Object.create(null);if(Object.keys(n).some(o=>o!==me)&&t.children[me]&&t.numberOfChildren===1&&t.children[me].segments.length===0){let o=hl(t.children[me],i,e);return new Le(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=_D(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new Le(t.segments,r)}}function GO(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(fl(s))break;let l=`${s}`,c=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!ZC(l,c,a))return o;n+=2}else{if(!ZC(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function t_(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(fl(o)){let l=WO(o.outlets);return new Le(n,l)}if(r===0&&Ru(e[0])){let l=t.segments[i];n.push(new fr(l.path,KC(e[0]))),r++;continue}let a=fl(o)?o.outlets[me]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Ru(s)?(n.push(new fr(a,KC(s))),r+=2):(n.push(new fr(a,{})),r++)}return new Le(n,{})}function WO(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=t_(new Le([],{}),0,n))}),i}function KC(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function ZC(t,i,e){return t==e.path&&bi(i,e.parameters)}var ba="imperative",St=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(St||{}),fn=class{id;url;constructor(i,e){this.id=i,this.url=e}},gr=class extends fn{type=St.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Xn=class extends fn{urlAfterRedirects;type=St.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},$t=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})($t||{}),wa=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(wa||{}),Sn=class extends fn{reason;code;type=St.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function bD(t){return t instanceof Sn&&(t.code===$t.Redirect||t.code===$t.SupersededByNewNavigation)}var vi=class extends fn{reason;code;type=St.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},uo=class extends fn{error;target;type=St.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gl=class extends fn{urlAfterRedirects;state;type=St.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Nu=class extends fn{urlAfterRedirects;state;type=St.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fu=class extends fn{urlAfterRedirects;state;shouldActivate;type=St.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pu=class extends fn{urlAfterRedirects;state;type=St.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lu=class extends fn{urlAfterRedirects;state;type=St.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vu=class{route;type=St.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bu=class{route;type=St.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ju=class{snapshot;type=St.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hu=class{snapshot;type=St.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zu=class{snapshot;type=St.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uu=class{snapshot;type=St.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ca=class{routerEvent;position;anchor;scrollBehavior;type=St.Scroll;constructor(i,e,n,r){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Da=class{},_l=class{},xa=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function qO(t){return!(t instanceof Da)&&!(t instanceof xa)&&!(t instanceof _l)}var $u=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new po(this.rootInjector)}},po=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new $u(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(W(Be))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gu=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=n_(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=n_(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=i_(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return i_(i,this._root).map(e=>e.value)}};function n_(t,i){if(t===i.value)return i;for(let e of i.children){let n=n_(t,e);if(n)return n}return null}function i_(t,i){if(t===i.value)return[i];for(let e of i.children){let n=i_(t,e);if(n.length)return n.unshift(i),n}return[]}var pn=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ga(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var bl=class extends Gu{snapshot;constructor(i,e){super(i),this.snapshot=e,m_(this,i)}toString(){return this.snapshot.toString()}};function vD(t,i){let e=YO(t,i),n=new bt([new fr("",{})]),r=new bt({}),o=new bt({}),a=new bt({}),s=new bt(""),l=new _r(n,r,a,s,o,me,t,e.root);return l.snapshot=e.root,new bl(new pn(l,[]),e)}function YO(t,i){let e={},n={},r={},a=new Ea([],e,r,"",n,me,t,null,{},i);return new vl("",new pn(a,[]))}var _r=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ae(c=>c[Cl]))??Q(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ae(i=>co(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ae(i=>co(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},QO="always";function u_(t,i,e){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:v(v({},i.params),t.params),data:v(v({},i.data),t.data),resolve:v(v(v(v({},t.data),i.data),r?.data),t._resolvedData)}:n={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},r&&wD(r)&&(n.resolve[Cl]=r.title),n}var Ea=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Cl]}constructor(i,e,n,r,o,a,s,l,c,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=co(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=co(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},vl=class extends Gu{url;constructor(i,e){super(e),this.url=i,m_(this,e)}toString(){return yD(this._root)}};function m_(t,i){i.value._routerState=t,i.children.forEach(e=>m_(t,e))}function yD(t){let i=t.children.length>0?` { ${t.children.map(yD).join(", ")} } `:"";return`${t.value}${i}`}function Qg(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,bi(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),bi(i.params,e.params)||t.paramsSubject.next(e.params),CO(i.url,e.url)||t.urlSubject.next(e.url),bi(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function r_(t,i){let e=bi(t.params,i.params)&&SO(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||r_(t.parent,i.parent))}function wD(t){return typeof t.title=="string"||t.title===null}var CD=new b(""),Dl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=me;activateEvents=new M;deactivateEvents=new M;attachEvents=new M;detachEvents=new M;routerOutletData=pr();parentContexts=d(po);location=d(At);changeDetector=d(ge);inputBinder=d(xl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new o_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ce]})}return t})(),o_=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===_r?this.route:i===po?this.childContexts:i===CD?this.outletData:this.parent.get(i,e)}},xl=new b(""),DD=(()=>{class t{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Bo([this.options.queryParams?n.queryParams:Q({}),n.params,n.data]).pipe(ht(([o,a,s],l)=>(s=v(v(v({},o),a),s),l===0?Q(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let a=CC(n.component);if(!a){this.unsubscribeFromRouteData(e);return}let s=this.outletSeenKeys.get(e);s||(s=new Set,this.outletSeenKeys.set(e,s));for(let c of Object.keys(o))s.add(c);let l=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:c}of a.inputs){let u=o[c];(u!==void 0||l==="alwaysUndefined"||s.has(c))&&e.activatedComponentRef.setInput(c,u)}});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){cr()};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),h_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&V(0,"router-outlet")},dependencies:[Dl],encapsulation:2,changeDetection:1})}return t})();function p_(t){let i=t.children&&t.children.map(p_),e=i?re(v({},t),{children:i}):v({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==me&&(e.component=h_),e}function KO(t,i,e){let n=new Set,r=yl(t,i._root,e?e._root:void 0,n);return{newlyCreatedRoutes:n,state:new bl(r,i)}}function yl(t,i,e,n){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;let o=ZO(t,i,e,n);return new pn(r,o)}else{if(t.shouldAttach(i.value)){let a=t.retrieve(i.value);if(a!==null){let s=a.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(l=>yl(t,l,void 0,n)),s}}let r=XO(i.value);n.add(r);let o=i.children.map(a=>yl(t,a,void 0,n));return new pn(r,o)}}function ZO(t,i,e,n){return i.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return yl(t,r,o,n);return yl(t,r,void 0,n)})}function XO(t){return new _r(new bt(t.url),new bt(t.params),new bt(t.queryParams),new bt(t.fragment),new bt(t.data),t.outlet,t.component,t)}var ka=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},xD="ngNavigationCancelingError";function Wu(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=ya(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ED(!1,$t.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function ED(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[xD]=!0,e.cancellationCode=i,e}function JO(t){return kD(t)&&ya(t.url)}function kD(t){return!!t&&t[xD]}var a_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Qg(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=ga(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ga(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ga(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,n){let r=ga(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new Uu(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Hu(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(Qg(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Qg(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},qu=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},va=class{component;route;constructor(i,e){this.component=i,this.route=e}};function eN(t,i,e){let n=t._root,r=i?i._root:null;return ml(n,r,e,[n.value])}function tN(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Ia(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Nh(t)?t:i.get(t):n}function ml(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ga(i);return t.children.forEach(a=>{nN(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>pl(s,e.getContext(a),r)),r}function nN(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=iN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new qu(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ml(t,i,s?s.children:null,n,r):ml(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new va(s.outlet.component,a))}else a&&pl(i,s,r),r.canActivateChecks.push(new qu(n)),o.component?ml(t,null,s?s.children:null,n,r):ml(t,null,e,n,r);return r}function iN(t,i,e){if(typeof e=="function")return Dt(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!lo(t.url,i.url);case"pathParamsOrQueryParamsChange":return!lo(t.url,i.url)||!bi(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!r_(t,i)||!bi(t.queryParams,i.queryParams);default:return!r_(t,i)}}function pl(t,i,e){let n=ga(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?pl(a,i.children.getContext(o),e):pl(a,null,e):pl(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new va(i.outlet.component,r)):e.canDeactivateChecks.push(new va(null,r)):e.canDeactivateChecks.push(new va(null,r))}function El(t){return typeof t=="function"}function rN(t){return typeof t=="boolean"}function oN(t){return t&&El(t.canLoad)}function aN(t){return t&&El(t.canActivate)}function sN(t){return t&&El(t.canActivateChild)}function lN(t){return t&&El(t.canDeactivate)}function cN(t){return t&&El(t.canMatch)}function SD(t){return t instanceof Ci||t?.name==="EmptyError"}var Su=Symbol("INITIAL_VALUE");function Sa(){return ht(t=>Bo(t.map(i=>i.pipe(ot(1),Xe(Su)))).pipe(ae(i=>{for(let e of i)if(e!==!0){if(e===Su)return Su;if(e===!1||dN(e))return e}return!0}),Ee(i=>i!==Su),ot(1)))}function dN(t){return ya(t)||t instanceof ka}function ID(t){return t.aborted?Q(void 0).pipe(ot(1)):new pe(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function MD(t){return we(ID(t))}function uN(t){return Ot(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?Q(re(v({},i),{guardsResult:!0})):mN(o,e,n).pipe(Ot(a=>a&&rN(a)?hN(e,r,t):Q(a)),ae(a=>re(v({},i),{guardsResult:a})))})}function mN(t,i,e){return qe(t).pipe(Ot(n=>bN(n.component,n.route,e,i)),Di(n=>n!==!0,!0))}function hN(t,i,e){return qe(i).pipe(Qi(n=>qi(fN(n.route.parent,e),pN(n.route,e),_N(t,n.path),gN(t,n.route))),Di(n=>n!==!0,!0))}function pN(t,i){return t!==null&&i&&i(new zu(t)),Q(!0)}function fN(t,i){return t!==null&&i&&i(new ju(t)),Q(!0)}function gN(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let n=e.map(r=>Bn(()=>{let o=i._environmentInjector,a=Ia(r,o),s=aN(a)?a.canActivate(i,t):Dt(o,()=>a(i,t));return mo(s).pipe(Di())}));return Q(n).pipe(Sa())}function _N(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>tN(o)).filter(o=>o!==null).map(o=>Bn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Ia(s,l),u=sN(c)?c.canActivateChild(e,t):Dt(l,()=>c(e,t));return mo(u).pipe(Di())});return Q(a).pipe(Sa())}));return Q(r).pipe(Sa())}function bN(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=i._environmentInjector,l=Ia(a,s),c=lN(l)?l.canDeactivate(t,i,e,n):Dt(s,()=>l(t,i,e,n));return mo(c).pipe(Di())});return Q(o).pipe(Sa())}function vN(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let l=Ia(s,t),c=oN(l)?l.canLoad(i,e):Dt(t,()=>l(i,e)),u=mo(c);return r?u.pipe(MD(r)):u});return Q(a).pipe(Sa(),TD(n))}function TD(t){return ph(yt(i=>{if(typeof i!="boolean")throw Wu(t,i)}),ae(i=>i===!0))}function yN(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(l=>{let c=Ia(l,t),u=cN(c)?c.canMatch(i,e,r):Dt(t,()=>c(i,e,r));return mo(u).pipe(MD(o))});return Q(s).pipe(Sa(),TD(n))}var Vi=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},wl=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function wN(t){throw new N(4e3,!1)}function CN(t){throw ED(!1,$t.GuardRejected)}var s_=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return Me(this,null,function*(){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[me])throw wN(`${i.redirectTo}`);r=r.children[me]}})}applyRedirectCommands(i,e,n,r,o){return Me(this,null,function*(){let a=yield DN(e,r,o);if(a instanceof In)throw new wl(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new wl(s);return s})}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new In(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a=Object.create(null);return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new Le(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new N(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function DN(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Au(mo(Dt(e,()=>n(i))))}function xN(t,i){return t.providers&&!t._injector&&(t._injector=sa(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Zn(t){return t.outlet||me}function EN(t,i){let e=t.filter(n=>Zn(n)===i);return e.push(...t.filter(n=>Zn(n)!==i)),e}var l_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function AD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function kN(t,i,e,n,r,o,a){let s=RD(t,i,e);if(!s.matched)return Q(s);let l=AD(o(s));return n=xN(i,n),yN(n,i,e,r,l,a).pipe(ae(c=>c===!0?s:v({},l_)))}function RD(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?v({},l_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||tD)(e,t,i);if(!r)return v({},l_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function XC(t,i,e,n,r){return e.length>0&&MN(t,e,n,r)?{segmentGroup:new Le(i,IN(n,new Le(e,t.children))),slicedSegments:[]}:e.length===0&&TN(t,e,n)?{segmentGroup:new Le(t.segments,SN(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Le(t.segments,t.children),slicedSegments:e}}function SN(t,i,e,n){let r={};for(let o of e)if(Qu(t,i,o)&&!n[Zn(o)]){let a=new Le([],{});r[Zn(o)]=a}return v(v({},n),r)}function IN(t,i){let e={};e[me]=i;for(let n of t)if(n.path===""&&Zn(n)!==me){let r=new Le([],{});e[Zn(n)]=r}return e}function MN(t,i,e,n){return e.some(r=>!Qu(t,i,r)||!(Zn(r)!==me)?!1:!(n!==void 0&&Zn(r)===n))}function TN(t,i,e){return e.some(n=>Qu(t,i,n))}function Qu(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function AN(t,i,e){return i.length===0&&!t.children[e]}var c_=class{};function RN(t,i,e,n,r,o,a,s){return Me(this,null,function*(){return new d_(t,i,e,n,r,a,o,s).recognize()})}var ON=31,d_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new s_(this.urlSerializer,this.urlTree)}noMatchError(i){return new N(4002,`'${i.segmentGroup}'`)}recognize(){return Me(this,null,function*(){let i=XC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=yield this.match(i),r=new pn(n,e),o=new vl("",r),a=hD(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return Me(this,null,function*(){let e=new Ea([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),me,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,me,e),rootSnapshot:e}}catch(n){if(n instanceof wl)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Vi?this.noMatchError(n):n}})}processSegmentGroup(i,e,n,r,o){return Me(this,null,function*(){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=yield this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof pn?[a]:[]})}processChildren(i,e,n,r){return Me(this,null,function*(){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=n.children[l],u=EN(e,l),m=yield this.processSegmentGroup(i,u,c,l,r);a.push(...m)}let s=OD(a);return NN(s),s})}processSegment(i,e,n,r,o,a,s){return Me(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(c){if(c instanceof Vi||SD(c))continue;throw c}if(AN(n,r,o))return new c_;throw new Vi(n)})}processSegmentAgainstRoute(i,e,n,r,o,a,s,l){return Me(this,null,function*(){if(Zn(n)!==a&&(a===me||!Qu(r,o,n)))throw new Vi(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new Vi(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){return Me(this,null,function*(){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:m,remainingSegments:f}=RD(e,r,o);if(!l)throw new Vi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ON&&(this.allowRedirects=!1));let g=this.createSnapshot(i,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,AD(g),i),R=yield this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(i,n,e,R.concat(f),a,!1,s)})}createSnapshot(i,e,n,r,o){let a=new Ea(n,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,PN(e),Zn(e),e.component??e._loadedComponent??null,e,LN(e),i),s=u_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(i,e,n,r,o,a){return Me(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=mt=>this.createSnapshot(i,n,mt.consumedSegments,mt.parameters,a),l=yield Au(kN(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new Vi(e);i=n._injector??i;let{routes:c}=yield this.getChildConfig(i,n,r),u=n._loadedInjector??i,{parameters:m,consumedSegments:f,remainingSegments:g}=l,y=this.createSnapshot(i,n,f,m,a),{segmentGroup:R,slicedSegments:K}=XC(e,f,g,c,o);if(K.length===0&&R.hasChildren()){let mt=yield this.processChildren(u,c,R,y);return new pn(y,mt)}if(c.length===0&&K.length===0)return new pn(y,[]);let le=Zn(n)===o,Je=yield this.processSegment(u,c,R,K,le?me:o,!0,y);return new pn(y,Je instanceof pn?[Je]:[])})}getChildConfig(i,e,n){return Me(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Au(vN(i,e,n,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw CN(e)}return{routes:[],injector:i}})}};function NN(t){t.sort((i,e)=>i.value.outlet===me?-1:e.value.outlet===me?1:i.value.outlet.localeCompare(e.value.outlet))}function FN(t){let i=t.value.routeConfig;return i&&i.path===""}function OD(t){let i=[],e=new Set;for(let n of t){if(!FN(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=OD(n.children);i.push(new pn(n.value,r))}return i.filter(n=>!e.has(n))}function PN(t){return t.data||{}}function LN(t){return t.resolve||{}}function VN(t,i,e,n,r,o,a){return Ot(s=>Me(null,null,function*(){let{state:l,tree:c}=yield RN(t,i,e,n,s.extractedUrl,r,o,a);return re(v({},s),{targetSnapshot:l,urlAfterRedirects:c})}))}function BN(t){return Ot(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return Q(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of ND(s))o.add(l);let a=0;return qe(o).pipe(Qi(s=>r.has(s)?jN(s,e,t):(s.data=u_(s,s.parent,t).resolve,Q(void 0))),yt(()=>a++),Hc(1),Ot(s=>a===o.size?Q(i):vt))})}function ND(t){let i=t.children.map(e=>ND(e)).flat();return[t,...i]}function jN(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!wD(n)&&(r[Cl]=n.title),Bn(()=>(t.data=u_(t,t.parent,e).resolve,HN(r,t,i).pipe(ae(o=>(t._resolvedData=o,t.data=v(v({},t.data),o),null)))))}function HN(t,i,e){let n=Zg(t);if(n.length===0)return Q({});let r={};return qe(n).pipe(Ot(o=>zN(t[o],i,e).pipe(Di(),yt(a=>{if(a instanceof ka)throw Wu(new Bi,a);r[o]=a}))),Hc(1),ae(()=>r),Yi(o=>SD(o)?vt:ss(o)))}function zN(t,i,e){let n=i._environmentInjector,r=Ia(t,n),o=r.resolve?r.resolve(i,e):Dt(n,()=>r(i,e));return mo(o)}function JC(t){return ht(i=>{let e=t(i);return e?qe(e).pipe(ae(()=>i)):Q(i)})}var f_=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===me);return n}getResolvedTitleForRoute(e){return e.data[Cl]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:()=>d(FD)})}return t})(),FD=(()=>{class t extends f_{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(W(WC))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fo=new b("",{factory:()=>({})}),Ma=new b(""),Ku=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(ug);loadComponent(e,n){return Me(this,null,function*(){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=Me(this,null,function*(){try{let o=yield iD(Dt(e,()=>n.loadComponent())),a=yield LD(fg(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}});return this.componentLoaders.set(n,r),r})}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=Me(this,null,function*(){try{let o=yield PD(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}});return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function PD(t,i,e,n){return Me(this,null,function*(){let r=yield iD(Dt(e,()=>t.loadChildren())),o=yield LD(fg(r)),a;o instanceof su||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),n&&n(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(Ma,[],{optional:!0,self:!0}).flat()),{routes:l.map(p_),injector:s,factory:u}})}function LD(t){return Me(this,null,function*(){return t})}var Zu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:()=>d(UN)})}return t})(),UN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),g_=new b(""),__=new b("");function VD(t,i,e){let n=t.get(__),r=t.get(X);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),$N(t)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=n;return l&&Dt(t,()=>l({transition:s,from:i,to:e})),a}function $N(t){return new Promise(i=>{it({read:()=>setTimeout(i)},{injector:t})})}var BD=new b(""),GN=()=>{},b_=new b(""),Xu=(()=>{class t{currentNavigation=Y(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Y(null);events=new k;transitionAbortWithErrorSubject=new k;configLoader=d(Ku);environmentInjector=d(Be);destroyRef=d(Mt);urlSerializer=d(ho);rootContexts=d(po);location=d(_i);inputBindingEnabled=d(xl,{optional:!0})!==null;titleStrategy=d(f_);options=d(fo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||QO;urlHandlingStrategy=d(Zu);createViewTransition=d(g_,{optional:!0});navigationErrorHandler=d(b_,{optional:!0});activatedRouteInjectorFeature=d(BD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Vu(r)),n=r=>this.events.next(new Bu(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;Ke(()=>{this.transitions?.next(re(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new bt(null),this.transitions.pipe(Ee(n=>n!==null),ht(n=>{let r=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===n.id;return Q(n).pipe(ht(l=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",$t.SupersededByNewNavigation),vt;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?re(v({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&m!=="reload")return this.events.next(new vi(l.id,this.urlSerializer.serialize(l.rawUrl),"",wa.IgnoredSameUrlNavigation)),l.resolve(!1),vt;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Q(l).pipe(ht(f=>(this.events.next(new gr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?vt:Promise.resolve(f))),VN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),yt(f=>{n.targetSnapshot=f.targetSnapshot,n.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(g=>(g.finalUrl=f.urlAfterRedirects,g)),this.events.next(new _l)}),ht(f=>qe(n.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(ae(()=>f))),yt(()=>{let f=new gl(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:f,extractedUrl:g,source:y,restoredState:R,extras:K}=l,le=new gr(f,this.urlSerializer.serialize(g),y,R);this.events.next(le);let Je=vD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=re(v({},l),{targetSnapshot:Je,urlAfterRedirects:g,extras:re(v({},K),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(mt=>(mt.finalUrl=g,mt)),Q(n)}else return this.events.next(new vi(l.id,this.urlSerializer.serialize(l.extractedUrl),"",wa.IgnoredByUrlHandlingStrategy)),l.resolve(!1),vt}),ae(l=>{let c=new Nu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=n=re(v({},l),{guards:eN(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),n}),uN(l=>this.events.next(l)),ht(l=>{if(n.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw Wu(this.urlSerializer,l.guardsResult);let c=new Fu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!s())return vt;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",$t.GuardRejected),vt;if(l.guards.canActivateChecks.length===0)return Q(l);let u=new Pu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(u),!s())return vt;let m=!1;return Q(l).pipe(BN(this.paramsInheritanceStrategy),yt({next:()=>{m=!0;let f=new Lu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)},complete:()=>{m||this.cancelNavigationTransition(l,"",$t.NoDataFromResolver)}}))}),JC(l=>{let c=m=>{let f=[];if(m.routeConfig?._loadedComponent)m.component=m.routeConfig?._loadedComponent;else if(m.routeConfig?.loadComponent){let g=m._environmentInjector;f.push(this.configLoader.loadComponent(g,m.routeConfig).then(y=>{m.component=y}))}for(let g of m.children)f.push(...c(g));return f},u=c(l.targetSnapshot.root);return u.length===0?Q(l):qe(Promise.all(u).then(()=>l))}),ht(l=>{let{newlyCreatedRoutes:c,state:u}=KO(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=n=l=re(v({},l),{targetRouterState:u,newlyCreatedRoutes:c}),this.currentNavigation.update(m=>(m.targetRouterState=u,m)),Q(l)}),this.activatedRouteInjectorFeature?.operator()??(l=>l),JC(()=>this.afterPreactivation()),ht(()=>{let{currentSnapshot:l,targetSnapshot:c}=n,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?qe(u).pipe(ae(()=>n)):Q(n)}),ot(1),ht(l=>{r=!1,this.events.next(new Da);let c=n.beforeActivateHandler.deferredHandle;return c?qe(c.then(()=>l)):Q(l)}),yt(l=>{new a_(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),s()&&(o=!0,this.currentNavigation.update(c=>(c.abort=GN,c)),this.lastSuccessfulNavigation.set(Ke(this.currentNavigation)),this.events.next(new Xn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),we(ID(a.signal).pipe(Ee(()=>!o&&r),yt(()=>{this.cancelNavigationTransition(n,a.signal.reason+"",$t.Aborted)}))),yt({complete:()=>{o=!0}}),we(this.transitionAbortWithErrorSubject.pipe(yt(l=>{throw l}))),jr(()=>{a.abort(),o||this.cancelNavigationTransition(n,"",$t.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Yi(l=>{if(o=!0,eD(n),this.destroyed)return n.resolve(!1),vt;if(kD(l))this.events.next(new Sn(n.id,this.urlSerializer.serialize(n.extractedUrl),l.message,l.cancellationCode)),JO(l)?this.events.next(new xa(l.url,l.navigationBehaviorOptions)):n.resolve(!1);else{let c=new uo(n.id,this.urlSerializer.serialize(n.extractedUrl),l,n.targetSnapshot??void 0);try{let u=Dt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof ka){let{message:m,cancellationCode:f}=Wu(this.urlSerializer,u);this.events.next(new Sn(n.id,this.urlSerializer.serialize(n.extractedUrl),m,f)),this.events.next(new xa(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(u){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(u)}}return vt}))}))}cancelNavigationTransition(e,n,r){eD(e);let o=new Sn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=Ke(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function WN(t){return t!==ba}function eD(t){if(t.newlyCreatedRoutes)for(let i of t.newlyCreatedRoutes)i._localInjector?.destroy()}var jD=new b("");var HD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:()=>d(qN)})}return t})(),Yu=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},qN=(()=>{class t extends Yu{static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),v_=(()=>{class t{urlSerializer=d(ho);options=d(fo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(_i);urlHandlingStrategy=d(Zu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new In;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof In?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=vD(null,d(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:()=>d(YN)})}return t})(),YN=(()=>{class t extends v_{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof gr?this.updateStateMemento():e instanceof vi?this.commitTransition(n):e instanceof gl?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Da?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Sn&&!bD(e)?this.restoreHistory(n):e instanceof uo?this.restoreHistory(n,!0):e instanceof Xn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r,id:o}=n,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=v(v({},s),this.generateNgRouterState(o,l,n));this.location.replaceState(e,"",c)}else{let l=v(v({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",l)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r){return this.canceledNavigationResolution==="computed"?v({navigationId:e,\u0275routerPageId:n},this.routerUrlState(r)):v({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function Ju(t,i){t.events.pipe(Ee(e=>e instanceof Xn||e instanceof Sn||e instanceof uo||e instanceof vi),ae(e=>e instanceof Xn||e instanceof vi?0:(e instanceof Sn?e.code===$t.Redirect||e.code===$t.SupersededByNewNavigation:!1)?2:1),Ee(e=>e!==2),ot(1)).subscribe(()=>{i()})}var br=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(lu);stateManager=d(v_);options=d(fo,{optional:!0})||{};pendingTasks=d($n);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Xu);urlSerializer=d(ho);location=d(_i);urlHandlingStrategy=d(Zu);injector=d(Be);_events=new k;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(HD);injectorCleanup=d(jD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ma,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(xl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new de;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=Ke(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Sn&&n.code!==$t.Redirect&&n.code!==$t.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Xn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof xa){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||WN(r.source)},a);this.scheduleNavigation(s,ba,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}qO(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ba,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=re(v({},o),{browserUrl:e})),r){let c=v({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,n,a,o).catch(c=>{this.disposed||this.injector.get(En)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ke(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(p_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=pD(f)}catch(f){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return fD(m,e,u,c??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=ya(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ba,null,n)}navigate(e,n={skipLocationChange:!1}){return QN(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(n){return this.console.warn(oi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=v({},oD):n===!1?r=v({},Xg):r=v(v({},Xg),n),ya(e))return qC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return qC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,f)=>{s=m,l=f});let u=this.pendingTasks.add();return Ju(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function QN(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new N(4008,!1)}var kl=class{};var zD=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ee(e=>e instanceof Xn),Qi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=sa(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return qe(r).pipe(Wi())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return Q(null);let r;n.loadChildren&&n.canLoad===void 0?r=qe(this.loader.loadChildren(e,n)):r=Q(null);let o=r.pipe(Ot(a=>a===null?Q(void 0):(n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(n.loadComponent&&!n._loadedComponent){let a=this.loader.loadComponent(e,n);return qe([o,a]).pipe(Wi())}else return o})}static \u0275fac=function(n){return new(n||t)(W(br),W(Be),W(kl),W(Ku))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),UD=new b(""),ZN=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ba;restoredId=0;store={};isHydrating=d(vf,{optional:!0})??!1;urlSerializer=d(ho);zone=d(B);viewportScroller=d(Mg);transitions=d(Xu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&d(Ft).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof gr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Xn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof vi&&e.code===wa.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ca)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){if(this.isHydrating)return;let r=Ke(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Me(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Ca(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){cr()};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();function XN(){return d(br).routerState.root}function Sl(t,i){return{\u0275kind:t,\u0275providers:i}}function JN(){let t=d(Z);return i=>{let e=t.get(Ft);if(i!==e.components[0])return;let n=t.get(br),r=t.get($D);t.get(w_)===1&&n.initialNavigation(),t.get(qD,null,{optional:!0})?.setUpPreloading(),t.get(UD,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var $D=new b("",{factory:()=>new k}),w_=new b("",{factory:()=>1});function GD(){let t=[{provide:Qd,useValue:!0},{provide:w_,useValue:0},ca(()=>{let i=d(Z);return i.get(wg,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(br),o=i.get($D);Ju(r,()=>{n(!0)}),i.get(Xu).afterPreactivation=()=>(n(!0),o.closed?Q(void 0):o),r.initialNavigation()}))})];return Sl(2,t)}function WD(){let t=[ca(()=>{d(br).setUpLocationChangeListener()}),{provide:w_,useValue:2}];return Sl(3,t)}var qD=new b("");function YD(t){return Sl(0,[{provide:qD,useExisting:zD},{provide:kl,useExisting:t}])}function QD(t={}){return Sl(8,[{provide:xl,useFactory:()=>new DD(t)}])}function KD(t){Qn("NgRouterViewTransitions");let i=[{provide:g_,useValue:VD},{provide:__,useValue:v({skipNextTransition:!!t?.skipInitialTransition},t)}];return Sl(9,i)}var ZD=[_i,{provide:ho,useClass:Bi},br,po,{provide:_r,useFactory:XN},Ku],Ta=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[ZD,[],{provide:Ma,multi:!0,useValue:e},[],n?.errorHandler?{provide:b_,useValue:n.errorHandler}:[],{provide:fo,useValue:n||{}},n?.useHash?tF():nF(),eF(),n?.preloadingStrategy?YD(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?iF(n):[],n?.bindToComponentInputs?QD(typeof n.bindToComponentInputs=="object"?n.bindToComponentInputs:{}).\u0275providers:[],n?.enableViewTransitions?KD().\u0275providers:[],rF()]}}static forChild(e){return{ngModule:t,providers:[{provide:Ma,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();function eF(){return{provide:UD,useFactory:()=>{let t=d(Mg),i=d(fo);return i.scrollOffset&&t.setOffset(i.scrollOffset),new ZN(i)}}}function tF(){return{provide:Fi,useClass:Dg}}function nF(){return{provide:Fi,useClass:_u}}function iF(t){return[t.initialNavigation==="disabled"?WD().\u0275providers:[],t.initialNavigation==="enabledBlocking"?GD().\u0275providers:[]]}var y_=new b("");function rF(){return[{provide:y_,useFactory:JN},{provide:qs,multi:!0,useExisting:y_}]}var sF=[],XD=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=w({imports:[Ta.forRoot(sF),Ta]})}}return t})();var lF="en-ca",JD="portfolio-locale",vr=(()=>{class t{constructor(e){this.http=e,this.translations={},this.activeLocale=Y("en-ca"),this.locale=this.activeLocale.asReadonly()}load(){let e=this.resolveInitialLocale();return this.loadTranslations(e).then(()=>{this.activeLocale.set(e),this.updateDocumentLanguage(e)})}setLocale(e){return e===this.activeLocale()?Promise.resolve():this.loadTranslations(e).then(()=>{this.activeLocale.set(e),localStorage.setItem(JD,e),this.updateDocumentLanguage(e)})}translate(e,n){let r=e.split(".").reduce((o,a)=>o?.[a],this.translations);return typeof r!="string"?r??e:n?Object.entries(n).reduce((o,[a,s])=>o.replaceAll(`{{${a}}}`,String(s)),r):r}loadTranslations(e){return bh(this.http.get(`assets/i18n/${e}.json`)).then(n=>{this.translations=n})}resolveInitialLocale(){let e=localStorage.getItem(JD);return this.isSupportedLocale(e)?e:lF}isSupportedLocale(e){return e==="en-ca"||e==="fr-ca"}updateDocumentLanguage(e){document.documentElement.lang=e==="fr-ca"?"fr-CA":"en-CA"}static{this.\u0275fac=function(n){return new(n||t)(W(dl))}}static{this.\u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var D_;try{D_=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){D_=!1}var xe=(()=>{class t{_platformId=d(Jr);isBrowser=this._platformId?IC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||D_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var Jn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Jn||{}),em,go;function tm(){if(go==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return go=!1,go;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)go=!0;else{let t=Element.prototype.scrollTo;t?go=!/\{\s*\[native code\]\s*\}/.test(t.toString()):go=!1}}return go}function Aa(){if(typeof document!="object"||!document)return Jn.NORMAL;if(em==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),em=Jn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,em=t.scrollLeft===0?Jn.NEGATED:Jn.INVERTED),t.remove()}return em}var x_;function ex(){if(x_==null){let t=typeof document<"u"?document.head:null;x_=!!(t&&(t.createShadowRoot||t.attachShadow))}return x_}function E_(t){if(ex()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ei(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function Bt(t){if(t.composedPath)try{return t.composedPath()[0]}catch(i){}return t.target}function k_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Il;function tx(){if(Il==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Il=!0}))}finally{Il=Il||!1}return Il}function Ra(t){return tx()?t:!!t.capture}var cF=new b("cdk-dir-doc",{providedIn:"root",factory:()=>d(X)}),dF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nx(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?dF.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var $e=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Y("ltr");change=new M;constructor(){let e=d(cF,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nx(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var z=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();var uF=["*",[["mat-toolbar-row"]]],mF=["*","mat-toolbar-row"],hF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),ix=(()=>{class t{_elementRef=d(H);_platform=d(xe);_document=d(X);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&Ue(o,hF,5),n&2){let a;P(a=L())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(je(r.color?"mat-"+r.color:""),F("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:mF,decls:2,vars:0,template:function(n,r){n&1&&(oe(uF),q(0),q(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var rx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var an=(()=>{class t{constructor(e){this.translationService=e}transform(e,n){return this.translationService.translate(e,n)}static{this.\u0275fac=function(n){return new(n||t)(ke(vr,16))}}static{this.\u0275pipe=la({name:"translate",type:t,pure:!1,standalone:!1})}}return t})();var ox=(()=>{class t{constructor(e){this.translationService=e}ScrollTo(e){document.getElementById(e).scrollIntoView()}setLocale(e){this.translationService.setLocale(e)}static{this.\u0275fac=function(n){return new(n||t)(ke(vr))}}static{this.\u0275cmp=D({type:t,selectors:[["app-navigation-bar"]],standalone:!1,decls:31,vars:12,consts:[[1,"header-toolbar"],[1,"nav-header"],[1,"logo"],[1,"menu"],[1,"profile-link","header-button",3,"click"],["href","https://github.com/nicolasfrechette91/","target","_blank",1,"profile-link","ext-link"],["fill","#000000","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","48px","height","48px"],["d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"],["href","https://www.linkedin.com/in/nicolas-frechette-422031b4/","target","_blank",1,"profile-link","ext-link"],["fill","#000000","height","36pt","viewBox","0 0 512 512","width","36pt","xmlns","http://www.w3.org/2000/svg"],["d","m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"],["type","button",1,"profile-link","header-button",3,"click"],[1,"profile-link","ext-link"]],template:function(n,r){n&1&&(p(0,"mat-toolbar",0)(1,"nav",1)(2,"div",2)(3,"a"),T(4,"Nicolas Frechette"),_()(),p(5,"ul",3)(6,"li")(7,"button",4),j("click",function(){return r.ScrollTo("skills-section")}),T(8),ue(9,"translate"),_()(),p(10,"li")(11,"button",4),j("click",function(){return r.ScrollTo("projects-section")}),T(12),ue(13,"translate"),_()(),p(14,"li")(15,"button",4),j("click",function(){return r.ScrollTo("contact-section")}),T(16),ue(17,"translate"),_()(),p(18,"li")(19,"a",5),Ne(),p(20,"svg",6),V(21,"path",7),_()()(),Nt(),p(22,"li")(23,"a",8),Ne(),p(24,"svg",9),V(25,"path",10),_()()(),Nt(),p(26,"li")(27,"button",11),j("click",function(){return r.setLocale(r.translationService.locale()==="fr-ca"?"en-ca":"fr-ca")}),p(28,"a",12),T(29),ue(30,"translate"),_()()()()()()),n&2&&(h(8),J(fe(9,4,"navigation.skills")),h(4),J(fe(13,6,"navigation.projects")),h(4),J(fe(17,8,"navigation.contact")),h(13),He(" ",fe(30,10,"navigation.switchLanguage")," "))},dependencies:[ix,an],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-weight:700;transition:all .1s ease-in-out}mat-toolbar[_ngcontent-%COMP%]{background-color:transparent}li[_ngcontent-%COMP%]:hover{transform:rotate(15deg)}ul[_ngcontent-%COMP%]{list-style-type:none}.header-button[_ngcontent-%COMP%]{background-color:unset!important;border:unset;font-family:Inter Variable;font-size:24px;font-weight:700}.header-toolbar[_ngcontent-%COMP%]{background:linear-gradient(35deg,#ffd194,#70e1f5);height:auto}.logo[_ngcontent-%COMP%]{font-size:36px}.menu[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:24px;gap:4px;justify-content:flex-end}.nav-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}@media(max-width:560px){li[_ngcontent-%COMP%]:hover{transform:rotate(0)}.ext-link[_ngcontent-%COMP%]{padding-right:16px}.logo[_ngcontent-%COMP%]{display:none}.menu[_ngcontent-%COMP%]{padding-left:0;gap:0px}.nav-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:initial;width:100%;padding-left:0}.profile-link[_ngcontent-%COMP%]{display:none}.profile-link.ext-link[_ngcontent-%COMP%]{display:block}}"],changeDetection:1})}}return t})();var ax=[{id:1,github:"https://github.com/nicolasfrechette91/nico_fanny_wedding_2020",image:"https://nicolasfrechette91.github.io/portfolio/assets/images/wedding_project.png",link:"https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index.html",linkFrench:"https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index_fr.html",translationKey:"projects.items.weddingWebsite",dialog:{translationKey:"projects.items.weddingWebsite.dialog",images:null,video:null}}];var nm=new WeakMap,Ge=(()=>{class t{_appRef;_injector=d(Z);_environmentInjector=d(Be);load(e){let n=this._appRef=this._appRef||this._injector.get(Ft),r=nm.get(n);r||(r={loaders:new Set,refs:[]},nm.set(n,r),n.onDestroy(()=>{nm.get(n)?.refs.forEach(o=>o.destroy()),nm.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function ut(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Oa(t){return Array.isArray(t)?t:[t]}function yr(t,i=0){return sx(t)?Number(t):arguments.length===2?i:0}function sx(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function yi(t){return t instanceof H?t.nativeElement:t}var gF=20,wr=(()=>{class t{_ngZone=d(B);_platform=d(xe);_renderer=d(Tt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new k;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=gF){return this._platform.isBrowser?new pe(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Bc(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(Ee(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&n.push(o)}),n}_targetContainsElement(e,n){let r=yi(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),im=(()=>{class t{elementRef=d(H);scrollDispatcher=d(wr);ngZone=d(B);dir=d($e,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new k;_renderer=d(Pe);_cleanupScroll;_elementScrolled=new k;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&Aa()!=Jn.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Aa()==Jn.INVERTED?e.left=e.right:Aa()==Jn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;tm()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&Aa()==Jn.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Aa()==Jn.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),_F=20,Mn=(()=>{class t{_platform=d(xe);_listeners;_viewportSize=null;_change=new k;_document=d(X);constructor(){let e=d(B),n=d(Tt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=_F){return e>0?this._change.pipe(Bc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var Gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})(),Ml=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z,Gt,z,Gt]})}return t})();var lx=new Map,Ie=class t{_appId=d(Ii);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let n=lx.get(i);return n===void 0?n=0:n++,lx.set(i,n),`${i}${e?t._infix+"-":""}${n}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})};var Tl=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},gn=class extends Tl{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,n,r,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}},_n=class extends Tl{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},S_=class extends Tl{element;constructor(i){super(),this.element=i instanceof H?i.nativeElement:i}},Cr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof gn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof _n)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof S_)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},rm=class extends Cr{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(fi,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||Z.NULL,o=r.get(Be,n.injector);e=pu(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var sn=(()=>{class t extends Cr{_moduleRef=d(fi,{optional:!0});_document=d(X);_viewContainerRef=d(At);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new M;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ye]})}return t})(),nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();function gt(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var cx=tm();function vo(t){return new om(t.get(Mn),t.get(X))}var om=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ut(-this._previousScrollPosition.left),i.style.top=ut(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,o=n.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),cx&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),cx&&(n.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function gx(t,i){return new am(t.get(wr),t.get(B),t.get(Mn),i)}var am=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Ee(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Al=class{enable(){}disable(){}attach(){}};function I_(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return n||r||o||a})}function dx(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return n||r||o||a})}function wi(t,i){return new sm(t.get(wr),t.get(Mn),t.get(B),i)}var sm=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();I_(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},_x=(()=>{class t{_injector=d(Z);noop=()=>new Al;close=e=>gx(this._injector,e);block=()=>vo(this._injector);reposition=e=>wi(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Tn=class{positionStrategy;scrollStrategy=new Al;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var lm=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var bx=(()=>{class t{_attachedOverlays=[];_document=d(X);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),vx=(()=>{class t extends bx{_ngZone=d(B);_renderer=d(Tt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),yx=(()=>{class t extends bx{_platform=d(xe);_ngZone=d(B);_renderer=d(Tt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Bt(e)};_clickListener=e=>{let n=Bt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(ux(s.overlayElement,n)||ux(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function ux(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var wx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})(),dm=(()=>{class t{_platform=d(xe);_containerElement;_document=d(X);_styleLoader=d(Ge);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||k_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),k_()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(wx)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),M_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function T_(t){return t&&t.nodeType===1}var Na=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new k;_attachments=new k;_detachments=new k;_positionStrategy;_scrollStrategy;_locationChanges=de.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new k;_outsidePointerEvents=new k;_afterNextRenderRef;constructor(i,e,n,r,o,a,s,l,c,u=!1,m,f){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=it(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=v(v({},this._config),i),this._updateElementSize()}setDirection(i){this._config=re(v({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ut(this._config.width),i.height=ut(this._config.height),i.minWidth=ut(this._config.minWidth),i.minHeight=ut(this._config.minHeight),i.maxWidth=ut(this._config.maxWidth),i.maxHeight=ut(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;T_(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new M_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=Oa(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=it(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},mx="cdk-overlay-connected-position-bounding-box",vF=/([A-Za-z%]+)$/;function Dr(t,i){return new Rl(i,t.get(Mn),t.get(X),t.get(xe),t.get(dm))}var Rl=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new k;_resizeSubscription=de.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(mx),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&bo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(mx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:T_(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=px(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,m=a+o.width-n.width,f=0-s,g=s+o.height-n.height,y=this._subtractOverflows(o.width,u,m),R=this._subtractOverflows(o.height,f,g),K=y*R;return{visibleArea:K,isCompletelyWithinViewport:o.width*o.height===K,fitsInViewportVertically:R===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=hx(this._overlayRef.getConfig().minHeight),s=hx(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,c=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=px(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-n.top-i.y,0),c=Math.max(o.left-n.left-i.x,0),u=0,m=0;return r.width<=o.width?u=c||-a:u=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?m=l||-s:m=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:u,y:m},{x:i.x+u,y:i.y+m}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!yF(this._lastScrollVisibility,n)){let r=new lm(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let g=Math.min(n.bottom-i.y+n.top,i.y),y=this._lastBoundingBoxSize.height;o=g*2,a=i.y-g,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,m,f;if(c)f=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)m=i.x,u=n.right-i.x-this._getViewportMarginEnd();else{let g=Math.min(n.right-i.x+n.left,i.x),y=this._lastBoundingBoxSize.width;u=g*2,m=i.x-g,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(m=i.x-y/2)}return{top:a,left:m,bottom:s,right:f,width:u,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ut(n.width),r.height=ut(n.height),r.top=ut(n.top)||"auto",r.bottom=ut(n.bottom)||"auto",r.left=ut(n.left)||"auto",r.right=ut(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ut(o)),a&&(r.maxWidth=ut(a))}this._lastBoundingBoxSize=n,bo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){bo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){bo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();bo(n,this._getExactOverlayY(e,i,u)),bo(n,this._getExactOverlayX(e,i,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=ut(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=ut(a.maxWidth):o&&(n.maxWidth="")),bo(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ut(o.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ut(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:dx(i,n),isOriginOutsideView:I_(i,n),isOverlayClipped:dx(e,n),isOverlayOutsideView:I_(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Oa(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof H)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function bo(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function hx(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(vF);return!e||e==="px"?parseFloat(i):null}return t||null}function px(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function yF(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var fx="cdk-global-overlay-wrapper";function Hi(t){return new cm}var cm=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(fx),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=n,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",g="",y="",R="";l?R="flex-start":u==="center"?(R="center",f?y=m:g=m):f?u==="left"||u==="end"?(R="flex-end",g=m):(u==="right"||u==="start")&&(R="flex-start",y=m):u==="left"||u==="start"?(R="flex-start",g=m):(u==="right"||u==="end")&&(R="flex-end",y=m),i.position=this._cssPosition,i.marginLeft=l?"0":g,i.marginTop=c?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":y,e.justifyContent=R,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(fx),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Cx=(()=>{class t{_injector=d(Z);global(){return Hi()}flexibleConnectedTo(e){return Dr(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Ol=new b("OVERLAY_DEFAULT_CONFIG");function An(t,i){t.get(Ge).load(wx);let e=t.get(dm),n=t.get(X),r=t.get(Ie),o=t.get(Ft),a=t.get($e),s=t.get(Pe,null,{optional:!0})||t.get(Tt).createRenderer(null,null),l=new Tn(i),c=t.get(Ol,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!n.body||!("showPopover"in n.body)?l.usePopover=!1:l.usePopover=i?.usePopover??c;let u=n.createElement("div"),m=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),m.appendChild(u),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return T_(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new Na(new rm(u,o,t),m,u,l,t.get(B),t.get(vx),n,t.get(_i),t.get(yx),i?.disableAnimations??t.get(Is,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var Dx=(()=>{class t{scrollStrategies=d(_x);_positionBuilder=d(Cx);_injector=d(Z);create(e){return An(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),wF=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],CF=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(Z);return()=>wi(t)}}),Fa=(()=>{class t{elementRef=d(H);static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),xx=new b("cdk-connected-overlay-default-config"),um=(()=>{class t{_dir=d($e,{optional:!0});_injector=d(Z);_overlayRef;_templatePortal;_backdropSubscription=de.EMPTY;_attachSubscription=de.EMPTY;_detachSubscription=de.EMPTY;_positionSubscription=de.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(CF);_ngZone=d(B);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new M;positionChange=new M;attach=new M;detach=new M;overlayKeydown=new M;overlayOutsideClick=new M;constructor(){let e=d(lt),n=d(At),r=d(xx,{optional:!0}),o=d(Ol,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new _n(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=wF);let e=this._overlayRef=An(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!gt(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=Bt(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Tn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Dr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Fa?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Fa?this.origin.elementRef.nativeElement:this.origin instanceof H?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(yh(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",G],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",G],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",G],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",G],push:[2,"cdkConnectedOverlayPush","push",G],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",G],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",G],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ce]})}return t})(),jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[Dx],imports:[z,nn,Ml,Ml]})}return t})();function Nl(t){return t.buttons===0||t.detail===0}function Fl(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ex=new b("cdk-input-modality-detector-options"),kx={ignoreKeys:[18,17,224,91,16]},Sx=650,A_={passive:!0,capture:!0},Ix=(()=>{class t{_platform=d(xe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new bt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Bt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Sx||(this._modality.next(Nl(e)?"keyboard":"mouse"),this._mostRecentTarget=Bt(e))};_onTouchstart=e=>{if(Fl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bt(e)};constructor(){let e=d(B),n=d(X),r=d(Ex,{optional:!0});if(this._options=v(v({},kx),r),this.modalityDetected=this._modality.pipe(ms(1)),this.modalityChanged=this.modalityDetected.pipe(jc()),this._platform.isBrowser){let o=d(Tt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,A_),o.listen(n,"mousedown",this._onMousedown,A_),o.listen(n,"touchstart",this._onTouchstart,A_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Pl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Pl||{}),Mx=new b("cdk-focus-monitor-default-options"),mm=Ra({passive:!0,capture:!0}),Wt=(()=>{class t{_ngZone=d(B);_platform=d(xe);_inputModalityDetector=d(Ix);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(X);_stopInputModalityDetector=new k;constructor(){let e=d(Mx,{optional:!0});this._detectionMode=e?.detectionMode||Pl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Bt(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=yi(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=E_(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new k,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=yi(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=yi(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Pl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Pl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Sx:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=Bt(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,mm),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,mm)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(we(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,mm),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,mm),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),R_=(()=>{class t{_elementRef=d(H);_focusMonitor=d(Wt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new M;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})(),hm;function DF(){if(hm===void 0&&(hm=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{hm=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return hm}function yo(t){return DF()?.createHTML(t)||t}function Tx(t,i,e){let n=e.sanitize(Et.HTML,i);t.innerHTML=yo(n||"")}var Ax=new Set,wo,Pa=(()=>{class t{_platform=d(xe);_nonce=d(or,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):EF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&xF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function xF(t,i){if(!Ax.has(t))try{wo||(wo=document.createElement("style"),i&&wo.setAttribute("nonce",i),wo.setAttribute("type","text/css"),document.head.appendChild(wo)),wo.sheet&&(wo.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),Ax.add(t))}catch(e){console.error(e)}}function EF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ll=(()=>{class t{_mediaMatcher=d(Pa);_zone=d(B);_queries=new Map;_destroySubject=new k;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Rx(Oa(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Rx(Oa(e)).map(a=>this._registerQuery(a).observable),o=Bo(r);return o=qi(o.pipe(ot(1)),o.pipe(ms(1),ds(0))),o.pipe(ae(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new pe(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(Xe(n),ae(({matches:a})=>({query:e,matches:a})),we(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function Rx(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var kF=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var La=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[kF]})}return t})();var F_=(()=>{class t{_platform=d(xe);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return IF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=SF(PF(e));if(n&&(Ox(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=Ox(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!NF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return FF(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function SF(t){try{return t.frameElement}catch(i){return null}}function IF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function MF(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function TF(t){return RF(t)&&t.type=="hidden"}function AF(t){return OF(t)&&t.hasAttribute("href")}function RF(t){return t.nodeName.toLowerCase()=="input"}function OF(t){return t.nodeName.toLowerCase()=="a"}function Px(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Ox(t){if(!Px(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function NF(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function FF(t){return TF(t)?!1:MF(t)||AF(t)||t.hasAttribute("contenteditable")||Px(t)}function PF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var N_=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){it(i,{injector:this._injector})}},pm=(()=>{class t{_checker=d(F_);_ngZone=d(B);_document=d(X);_injector=d(Z);constructor(){d(Ge).load(Rn)}create(e,n=!1){return new N_(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),P_=(()=>{class t{_elementRef=d(H);_focusTrapFactory=d(pm);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){d(xe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ei(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",G],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",G]},exportAs:["cdkTrapFocus"],features:[Ce]})}return t})(),Lx=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Vx=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),LF=0,Vl=(()=>{class t{_ngZone=d(B);_defaultOptions=d(Vx,{optional:!0});_liveElement;_document=d(X);_sanitizer=d(so);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(Lx,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Tx(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${LF++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var xr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(xr||{}),Nx="cdk-high-contrast-black-on-white",Fx="cdk-high-contrast-white-on-black",O_="cdk-high-contrast-active",Bx=(()=>{class t{_platform=d(xe);_hasCheckedHighContrastMode=!1;_document=d(X);_breakpointSubscription;constructor(){this._breakpointSubscription=d(Ll).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return xr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return xr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return xr.BLACK_ON_WHITE}return xr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(O_,Nx,Fx),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===xr.BLACK_ON_WHITE?e.add(O_,Nx):n===xr.WHITE_ON_BLACK&&e.add(O_,Fx)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Co=(()=>{class t{constructor(){d(Bx)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[La]})}return t})();function VF(t,i){}var Er=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var V_=(()=>{class t extends Cr{_elementRef=d(H);_focusTrapFactory=d(pm);_config;_interactivityChecker=d(F_);_ngZone=d(B);_focusMonitor=d(Wt);_renderer=d(Pe);_changeDetectorRef=d(ge);_injector=d(Z);_platform=d(xe);_document=d(X);_portalOutlet;_focusTrapped=new k;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(Er,{optional:!0})||new Er,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_trapFocus(e){this._isDestroyed||it(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let r=ei(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=ei();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ei()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,r){if(n&1&&ce(sn,7),n&2){let o;P(o=L())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,r){n&2&&A("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ye],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,r){n&1&&Qe(0,VF,0,0,"ng-template",0)},dependencies:[sn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return t})(),Bl=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new k;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!gt(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},BF=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(Z);return()=>vo(t)}}),jF=new b("DialogData"),HF=new b("DefaultDialogConfig");function zF(t){let i=Y(t),e=new M;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var B_=(()=>{class t{_injector=d(Z);_defaultOptions=d(HF,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(dm);_idGenerator=d(Ie);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new k;_afterOpenedAtThisLevel=new k;_ariaHiddenElements=new Map;_scrollStrategy=d(BF);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Bn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Xe(void 0)));open(e,n){let r=this._defaultOptions||new Er;n=v(v({},r),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),a=An(this._injector,o),s=new Bl(a,n),l=this._attachContainer(a,s,n);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(ot(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){L_(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){L_(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),L_(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new Tn({positionStrategy:e.positionStrategy||Hi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Er,useValue:r},{provide:Bl,useValue:n},{provide:Na,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=V_;let l=new gn(s,r.viewContainerRef,Z.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,n,r,o){if(e instanceof lt){let a=this._createInjector(o,n,r,void 0),s={$implicit:o.data,dialogRef:n};o.templateContext&&(s=v(v({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new _n(e,null,s,a))}else{let a=this._createInjector(o,n,r,this._injector),s=r.attachComponentPortal(new gn(e,o.viewContainerRef,a,null,o.bindings));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:jF,useValue:e.data},{provide:Bl,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get($e,null,{optional:!0}))&&s.push({provide:$e,useValue:zF(e.direction)}),Z.create({parent:a||o,providers:s})}_removeOpenDialog(e,n){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let r=n.length-1;r>-1;r--){let o=n[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function L_(t,i){let e=t.length;for(;e--;)i(t[e])}var jx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[B_],imports:[jt,nn,Co,nn]})}return t})();function jl(t){return t!=null&&`${t}`!="false"}var Hx={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var UF=new b("MATERIAL_ANIMATIONS"),zx=null;function $F(){return d(UF,{optional:!0})?.animationsDisabled||d(Is,{optional:!0})==="NoopAnimations"?"di-disabled":(zx??=d(Pa).matchMedia("(prefers-reduced-motion)").matches,zx?"reduced-motion":"enabled")}function Ae(){return $F()!=="enabled"}var GF=200,fm=class{_letterKeyStream=new k;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new k;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:GF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(yt(e=>this._pressedLetters.push(e)),ds(i),Ee(()=>this._pressedLetters.length>0),ae(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Va=class{_items;_activeItemIndex=Y(-1);_activeItem=Y(null);_wrap=!1;_typeaheadSubscription=de.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof mn?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):Gn(i)&&(this._effectRef=Mi(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new k;change=new k;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new fm(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||gt(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return Gn(this._items)?this._items():this._items instanceof mn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Hl=class extends Va{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var ym=class extends Va{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Gx=" ";function WF(t,i,e){let n=Cm(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(Gx)))}function qF(t,i,e){let n=Cm(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(Gx)):t.removeAttribute(i)}function Cm(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Wx="cdk-describedby-message",wm="cdk-describedby-host",H_=0,qx=(()=>{class t{_platform=d(xe);_document=d(X);_messageRegistry=new Map;_messagesContainer=null;_id=`${H_++}`;constructor(){d(Ge).load(Rn),this._id=d(Ii)+"-"+H_++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=j_(n,r);typeof n!="string"?($x(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=j_(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${wm}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(wm);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");$x(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(j_(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=Cm(e,"aria-describedby").filter(r=>r.indexOf(Wx)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);WF(e,"aria-describedby",r.messageElement.id),e.setAttribute(wm,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,qF(e,"aria-describedby",r.messageElement.id),e.removeAttribute(wm)}_isElementDescribedByMessage(e,n){let r=Cm(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function j_(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function $x(t,i){t.id||(t.id=`${Wx}-${i}-${H_++}`)}function YF(t,i){}var xm=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},z_="mdc-dialog--open",Yx="mdc-dialog--opening",Qx="mdc-dialog--closing",QF=150,KF=75,ZF=(()=>{class t extends V_{_animationStateChanged=new M;_animationsEnabled=!Ae();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Zx(this._config.enterAnimationDuration)??QF:0;_exitAnimationDuration=this._animationsEnabled?Zx(this._config.exitAnimationDuration)??KF:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Kx,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yx,z_)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(z_),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(z_),this._animationsEnabled?(this._hostElement.style.setProperty(Kx,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Qx)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Yx,Qx)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,r){n&2&&(tt("id",r._config.id),A("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),F("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ye],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(p(0,"div",0)(1,"div",1),Qe(2,YF,0,0,"ng-template",2),_()())},dependencies:[sn],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
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
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})}return t})(),Kx="--mat-dialog-transition-duration";function Zx(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?yr(t.substring(0,t.length-2)):t.endsWith("s")?yr(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Dm=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Dm||{}),zl=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ii(1);_beforeClosed=new ii(1);_result;_closeFallbackTimeout;_state=Dm.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(Ee(r=>r.state==="opened"),ot(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(Ee(r=>r.state==="closed"),ot(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),vn(this.backdropClick(),this.keydownEvents().pipe(Ee(r=>r.keyCode===27&&!this.disableClose&&!gt(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Xx(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Ee(n=>n.state==="closing"),ot(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=Dm.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Dm.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Xx(t,i,e){return t._closeInteractionType=i,t.close(e)}var U_=new b("MatMdcDialogData"),XF=new b("mat-mdc-dialog-default-options"),JF=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(Z);return()=>vo(t)}}),Ul=(()=>{class t{_defaultOptions=d(XF,{optional:!0});_scrollStrategy=d(JF);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(Ie);_injector=d(Z);_dialog=d(B_);_animationsDisabled=Ae();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new k;_afterOpenedAtThisLevel=new k;dialogConfigClass=xm;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Bn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Xe(void 0)));constructor(){this._dialogRefConstructor=zl,this._dialogContainerType=ZF,this._dialogDataToken=U_}open(e,n){let r;n=v(v({},this._defaultOptions||new xm),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,re(v({},n),{positionStrategy:Hi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:Er,useValue:n}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,n,l),r.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Jx=(()=>{class t{dialogRef=d(zl,{optional:!0});_elementRef=d(H);_dialog=d(Ul);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=rE(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let n=e._matDialogClose;n&&(this.dialogResult=n.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&Xx(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(n,r){n&1&&j("click",function(a){return r._onButtonClick(a)}),n&2&&A("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Ce]})}return t})(),eE=(()=>{class t{_dialogRef=d(zl,{optional:!0});_elementRef=d(H);_dialog=d(Ul);ngOnInit(){this._dialogRef||(this._dialogRef=rE(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t})}return t})(),tE=(()=>{class t extends eE{id=d(Ie).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,r){n&2&&tt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[ye]})}return t})(),nE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[ng([im])]})}return t})(),iE=(()=>{class t extends eE{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,r){n&2&&F("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[ye]})}return t})();function rE(t,i){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(n=>n.id===e.id):null}var oE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[Ul],imports:[jx,jt,nn,z]})}return t})();var On=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(On||{}),$_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=On.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},sE=Ra({passive:!0,capture:!0}),G_=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,sE)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,sE)))}_delegateEventHandler=i=>{let e=Bt(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},$l={enterDuration:225,exitDuration:150},eP=800,lE=Ra({passive:!0,capture:!0}),cE=["mousedown","touchstart"],dE=["mouseup","mouseleave","touchend","touchcancel"],tP=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),Gl=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new G_;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=yi(n)),o&&o.get(Ge).load(tP)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},$l),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||nP(i,e,r),s=i-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),f=m.transitionProperty,g=m.transitionDuration,y=f==="none"||g==="0s"||g==="0s, 0s"||r.width===0&&r.height===0,R=new $_(this,u,n,y);u.style.transform="scale3d(1, 1, 1)",R.state=On.FADING_IN,n.persistent||(this._mostRecentTransientRipple=R);let K=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let le=()=>{K&&(K.fallbackTimer=null),clearTimeout(mt),this._finishRippleTransition(R)},Je=()=>this._destroyRipple(R),mt=setTimeout(Je,c+100);u.addEventListener("transitionend",le),u.addEventListener("transitioncancel",Je),K={onTransitionEnd:le,onTransitionCancel:Je,fallbackTimer:mt}}),this._activeRipples.set(R,K),(y||!c)&&this._finishRippleTransition(R),R}fadeOutRipple(i){if(i.state===On.FADING_OUT||i.state===On.HIDDEN)return;let e=i.element,n=v(v({},$l),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=On.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=yi(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,cE.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dE.forEach(e=>{this._triggerElement.addEventListener(e,this,lE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===On.FADING_IN?this._startFadeOutTransition(i):i.state===On.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=On.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=On.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Nl(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+eP;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Fl(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===On.VISIBLE||i.config.terminateOnPointerUp&&i.state===On.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(cE.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(dE.forEach(e=>i.removeEventListener(e,this,lE)),this._pointerUpEventsRegistered=!1))}};function nP(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var W_=new b("mat-ripple-global-options"),Nn=(()=>{class t{_elementRef=d(H);_animationsDisabled=Ae();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(B),n=d(xe),r=d(W_,{optional:!0}),o=d(Z);this._globalOptions=r||{},this._rippleRenderer=new Gl(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&F("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var iP={capture:!0},rP=["focus","mousedown","mouseenter","touchstart"],q_="mat-ripple-loader-uninitialized",Y_="mat-ripple-loader-class-name",uE="mat-ripple-loader-centered",Em="mat-ripple-loader-disabled",mE=(()=>{class t{_document=d(X);_animationsDisabled=Ae();_globalRippleOptions=d(W_,{optional:!0});_platform=d(xe);_ngZone=d(B);_injector=d(Z);_eventCleanups;_hosts=new Map;constructor(){let e=d(Tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>rP.map(n=>e.listen(this._document,n,this._onInteraction,iP)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(q_,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Y_))&&e.setAttribute(Y_,n.className||""),n.centered&&e.setAttribute(uE,""),n.disabled&&e.setAttribute(Em,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Em,""):e.removeAttribute(Em)}_onInteraction=e=>{let n=Bt(e);if(n instanceof HTMLElement){let r=n.closest(`[${q_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Y_)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??$l.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??$l.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Em),rippleConfig:{centered:e.hasAttribute(uE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Gl(s,this._ngZone,n,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(q_)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var qt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
    --mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var oP=["*",[["","progressIndicator",""]]],aP=["*","[progressIndicator]"];function sP(t,i){t&1&&(Se(0,"div",1),q(1,1),Te())}var lP=new b("MAT_BUTTON_CONFIG");function hE(t){return t==null?void 0:dt(t)}var Q_=(()=>{class t{_elementRef=d(H);_ngZone=d(B);_animationsDisabled=Ae();_config=d(lP,{optional:!0});_focusMonitor=d(Wt);_cleanupClick;_renderer=d(Pe);_rippleLoader=d(mE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=pr(!1,{transform:G});constructor(){d(Ge).load(qt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(n,r){n&2&&(A("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),je(r.color?"mat-"+r.color:""),F("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",G],disabled:[2,"disabled","disabled",G],ariaDisabled:[2,"aria-disabled","ariaDisabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],tabIndex:[2,"tabIndex","tabIndex",hE],_tabindex:[2,"tabindex","_tabindex",hE],showProgress:[1,"showProgress"]}})}return t})(),Ha=(()=>{class t extends Q_{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ye],ngContentSelectors:aP,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(oe(oP),Pt(0,"span",0),q(1),U(2,sP,2,0,"div",1),Pt(3,"span",2)(4,"span",3)),n&2&&(h(2),$(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
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
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
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
`],encapsulation:2})}return t})();var Rt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var cP=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],dP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function uP(t,i){t&1&&(Se(0,"div",2),q(1,3),Te())}var pE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zi=(()=>{class t extends Q_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=mP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?pE.get(this._appearance):null,o=pE.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ye],ngContentSelectors:dP,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(oe(cP),Pt(0,"span",0),q(1),Se(2,"span",1),q(3,1),Te(),q(4,2),U(5,uP,2,0,"div",2),Pt(6,"span",3)(7,"span",4)),n&2&&(F("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),h(5),$(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
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
`],encapsulation:2})}return t})();function mP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var kr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,z]})}return t})();var gE=(()=>{class t{constructor(e){this.sanitizer=e}transform(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e)}static{this.\u0275fac=function(n){return new(n||t)(ke(so,16))}}static{this.\u0275pipe=la({name:"safe",type:t,pure:!0,standalone:!1})}}return t})();function pP(t,i){if(t&1&&(p(0,"p"),T(1,"batman"),_(),p(2,"div",9),V(3,"iframe",10),ue(4,"safe"),_()),t&2){let e=x();h(3),E("src",fe(4,1,e.data.video),Sf)}}function fP(t,i){if(t&1&&(p(0,"div",2),V(1,"img",11),_()),t&2){let e=x();h(),E("src",ur(e.data.images),Oi)}}function gP(t,i){if(t&1&&(p(0,"li"),T(1),_()),t&2){let e=i.$implicit;h(),J(e)}}var _E=(()=>{class t{constructor(e){this.data=e}static{this.\u0275fac=function(n){return new(n||t)(ke(U_))}}static{this.\u0275cmp=D({type:t,selectors:[["app-dialog-detail"]],standalone:!1,decls:27,vars:19,consts:[["mat-dialog-title",""],[1,"content"],[1,"content-image"],[1,"content-description-title"],[1,"content-description"],[1,"content-tasks-title"],[1,"content-task"],[1,"content-tasks-list"],["mat-button","","mat-dialog-close",""],[1,"content-video_container"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"content-video",3,"src"],[3,"src"]],template:function(n,r){n&1&&(p(0,"h2",0),T(1),ue(2,"translate"),_(),p(3,"mat-dialog-content")(4,"div",1),U(5,pP,5,3),U(6,fP,2,2,"div",2),p(7,"div",3)(8,"strong"),T(9),ue(10,"translate"),_()(),p(11,"div",4),T(12),ue(13,"translate"),_(),p(14,"div",5)(15,"strong"),T(16),ue(17,"translate"),_()(),p(18,"div",6)(19,"ul",7),pt(20,gP,2,1,"li",null,en),ue(22,"translate"),_()()()(),p(23,"mat-dialog-actions")(24,"button",8),T(25),ue(26,"translate"),_()()),n&2&&(h(),He(" ",fe(2,7,r.data.translationKey+".title"),`
`),h(4),$(r.data.video?5:-1),h(),$(r.data.images?6:-1),h(3),J(fe(10,9,"dialog.description")),h(3),J(fe(13,11,r.data.translationKey+".description")),h(4),J(fe(17,13,"dialog.tasks")),h(4),ft(fe(22,15,r.data.translationKey+".tasks")),h(5),J(fe(26,17,"dialog.close")))},dependencies:[zi,Jx,tE,iE,nE,gE,an],styles:[".content-description[_ngcontent-%COMP%]{padding-bottom:24px}.content-description-title[_ngcontent-%COMP%]{font-size:18px!important;padding-bottom:16px}.content-tasks-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding-left:16px}.content-tasks-title[_ngcontent-%COMP%]{font-size:18px!important}.content-video[_ngcontent-%COMP%]{height:auto;width:100%}@media only screen and (min-width:768px){.content-video[_ngcontent-%COMP%]{height:315px;width:560px}}"],changeDetection:1})}}return t})();var _P=t=>({name:t});function bP(t,i){if(t&1){let e=ct();p(0,"div",7)(1,"a",10),j("click",function(){Re(e);let r=x();return Oe(r.openDialog(r.project.dialog))}),T(2),ue(3,"translate"),_()()}t&2&&(h(2),J(fe(3,1,"projects.moreInfo")))}function vP(t,i){if(t&1&&(p(0,"div",7)(1,"a",11),ue(2,"translate"),T(3),ue(4,"translate"),_()()),t&2){let e=x();h(),E("href",e.translationService.locale()==="fr-ca"?e.project.linkFrench:e.project.link,Oi),A("alt",fe(2,3,"projects.linkAlt")),h(2),J(fe(4,5,"projects.visit"))}}function yP(t,i){if(t&1&&(p(0,"div",7)(1,"a",11),ue(2,"translate"),T(3,"Github"),_()()),t&2){let e=x();h(),E("href",ur(e.project.github),Oi),A("alt",fe(2,3,"projects.githubLinkAlt"))}}var bE=(()=>{class t{constructor(e,n){this.dialog=e,this.translationService=n}openDialog(e){this.dialog.open(_E,{data:e})}static{this.\u0275fac=function(n){return new(n||t)(ke(Ul),ke(vr))}}static{this.\u0275cmp=D({type:t,selectors:[["app-project"]],inputs:{project:"project"},standalone:!1,decls:22,vars:26,consts:[[3,"ngClass"],[1,"project-container"],[1,"project-name"],[1,"project-description","pt-1"],[1,"project-languages-header"],[1,"project-languages","pt-1"],[1,"project-links","pt-3"],[1,"more-info-button"],[1,"project-card"],[3,"src"],["mat-stroked-button","","color","accent",3,"click"],["mat-stroked-button","","color","accent","target","_blank",3,"href"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"div",1)(2,"div",2),T(3),ue(4,"translate"),_(),p(5,"div",3),T(6),ue(7,"translate"),_(),p(8,"div",4),T(9),ue(10,"translate"),_(),p(11,"div",5),T(12),ue(13,"translate"),_(),p(14,"div",6),U(15,bP,4,3,"div",7),U(16,vP,5,7,"div",7),U(17,yP,4,5,"div",7),_()(),p(18,"div",8),V(19,"img",9),ue(20,"translate"),ue(21,"translate"),_()()),n&2&&(E("ngClass",r.project.id%2==0?"project-tile-reverse":"project-tile"),h(3),J(fe(4,11,r.project.translationKey+".name")),h(3),J(fe(7,13,r.project.translationKey+".description")),h(3),J(fe(10,15,"projects.languages")),h(3),J(fe(13,17,r.project.translationKey+".languages")),h(3),$(r.project.dialog?15:-1),h(),$(r.project.link?16:-1),h(),$(r.project.github?17:-1),h(2),E("src",ur(r.project.image),Oi),A("alt",dg(21,21,"projects.imageAlt",mr(24,_P,fe(20,19,r.project.translationKey+".name")))))},dependencies:[xg,zi,an],styles:["img[_ngcontent-%COMP%]{max-width:525px;margin:8px}@media(min-width:992px){img[_ngcontent-%COMP%]{max-width:40vw;max-height:50vh}}.project-container[_ngcontent-%COMP%]{width:33%}.project-description[_ngcontent-%COMP%]{font-size:16px!important}.project-languages[_ngcontent-%COMP%]{font-size:16px}.project-languages-header[_ngcontent-%COMP%]{font-weight:700;padding-top:24px;font-size:20px}.project-links[_ngcontent-%COMP%]{display:flex;align-items:center}.project-name[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.project-tile[_ngcontent-%COMP%]{display:flex;width:100%;min-height:60vh;align-items:center;justify-content:space-evenly}.project-tile-reverse[_ngcontent-%COMP%]{display:flex;width:100%;min-height:60vh;align-items:center;justify-content:space-evenly;flex-direction:row-reverse}@media(max-width:768px){.project-tile[_ngcontent-%COMP%]{flex-direction:column}.project-container[_ngcontent-%COMP%]{width:90%;padding-left:16px}img[_ngcontent-%COMP%]{max-width:90vw}.project-links[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}}"],changeDetection:1})}}return t})();function CP(t,i){if(t&1&&(p(0,"div",3),V(1,"app-project",4),_()),t&2){let e=i.$implicit;h(),E("project",e)}}var vE=(()=>{class t{constructor(){this._projects=ax}get projects(){return this._projects}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=D({type:t,selectors:[["app-project-list"]],standalone:!1,decls:7,vars:3,consts:[["id","projects-section"],[1,"title"],[1,"title-text"],[1,"spacing-header"],[3,"project"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"h1",1)(2,"span",2),T(3),ue(4,"translate"),_()(),pt(5,CP,2,1,"div",3,en),_()),n&2&&(h(3),J(fe(4,1,"projects.title")),h(2),ft(r.projects))},dependencies:[bE,an],styles:["@media(max-width:768px){.spacing-header[_ngcontent-%COMP%]{padding-top:16px}}"],changeDetection:1})}}return t})();var yE=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=D({type:t,selectors:[["app-footer"]],standalone:!1,decls:18,vars:3,consts:[["id","contact-section"],[1,"title"],[1,"title-text"],["href","https://github.com/nicolasfrechette91","target","_blank",1,"profile-link"],["fill","#000000","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","48px","height","48px"],["d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"],["href","https://www.linkedin.com/in/nicolas-frechette-422031b4/","target","_blank",1,"profile-link"],["height","36pt","viewBox","0 0 512 512","width","36pt","xmlns","http://www.w3.org/2000/svg"],["d","m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"],["href","mailto:nicolasfrechette91@gmail.com","target","_blank",1,"profile-link"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 512 512","width","48px","height","48px",0,"xml","space","preserve",2,"enable-background","new 0 0 512 512"],["d",`M467,80.609H45c-24.813,0-45,20.187-45,45v260.782c0,24.813,20.187,45,45,45h422c24.813,0,45-20.187,45-45V125.609
            C512,100.796,491.813,80.609,467,80.609z M461.127,110.609l-6.006,5.001L273.854,266.551c-10.346,8.614-25.364,8.614-35.708,0
            L56.879,115.61l-6.006-5.001H461.127z M30,132.267L177.692,255.25L30,353.543V132.267z M467,401.391H45
            c-7.248,0-13.31-5.168-14.699-12.011l171.445-114.101l17.204,14.326c10.734,8.938,23.893,13.407,37.051,13.407
            c13.158,0,26.316-4.469,37.051-13.407l17.204-14.326l171.444,114.1C480.31,396.224,474.248,401.391,467,401.391z M482,353.543
            l-147.692-98.292L482,132.267V353.543z`]],template:function(n,r){n&1&&(p(0,"div",0)(1,"h1",1)(2,"span",2),T(3),ue(4,"translate"),_()(),p(5,"div")(6,"a",3),Ne(),p(7,"svg",4),V(8,"path",5),T(9," Github "),_()(),Nt(),p(10,"a",6),Ne(),p(11,"svg",7),V(12,"path",8),_()(),Nt(),p(13,"a",9),Ne(),p(14,"svg",10)(15,"g")(16,"g"),V(17,"path",11),_()()()()()()),n&2&&(h(3),J(fe(4,1,"footer.title")))},dependencies:[an],styles:["#contact-section[_ngcontent-%COMP%]{width:100%;min-height:25vh;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center}svg[_ngcontent-%COMP%]{padding:24px}@media(max-width:768px){#contact-section[_ngcontent-%COMP%]{min-height:0vh}}"],changeDetection:1})}}return t})();var EP=["*"];var kP=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],SP=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],IP=new b("MAT_CARD_CONFIG"),wE=(()=>{class t{appearance;constructor(){let e=d(IP,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&F("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:EP,decls:1,vars:0,template:function(n,r){n&1&&(oe(),q(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),CE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var DE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),xE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var EE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:SP,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(oe(kP),q(0),Se(1,"div",0),q(2,1),Te(),q(3,2))},encapsulation:2})}return t})();var kE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return t})();var SE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var IE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var ME=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=D({type:t,selectors:[["app-about"]],standalone:!1,decls:36,vars:27,consts:[["id","about-section"],[1,"container"],[1,"custom-card"],["mat-card-avatar","",1,"custom-header-image"],["mat-card-image","","src","https://nicolasfrechette91.github.io/portfolio/assets/images/nico.jpg"],[1,"custom-about"],[1,"custom-hello"],[1,"custom-sentence"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-header"),V(4,"div",3),p(5,"mat-card-title"),T(6,"Nicolas Frechette"),_(),p(7,"mat-card-subtitle"),T(8),ue(9,"translate"),_()(),V(10,"img",4),ue(11,"translate"),p(12,"mat-card-content")(13,"p"),T(14),ue(15,"translate"),V(16,"br"),T(17),ue(18,"translate"),_()()(),p(19,"div",5)(20,"h1",6),T(21),ue(22,"translate"),_(),p(23,"p",7),T(24),ue(25,"translate"),p(26,"strong"),T(27),ue(28,"translate"),_(),T(29,"."),_(),p(30,"p",7),T(31),ue(32,"translate"),_(),p(33,"p",7),T(34),ue(35,"translate"),_()()()()),n&2&&(h(8),J(fe(9,9,"about.role")),h(2),A("alt",fe(11,11,"about.imageAlt")),h(4),He("",fe(15,13,"about.education.institution")," "),h(3),He(" ",fe(18,15,"about.education.degree")),h(4),J(fe(22,17,"about.greeting")),h(3),He("",fe(25,19,"about.introduction.prefix")," "),h(3),J(fe(28,21,"about.introduction.emphasis")),h(4),J(fe(32,23,"about.interests")),h(3),J(fe(35,25,"about.communication")))},dependencies:[wE,SE,DE,EE,kE,xE,CE,an],styles:['#about-section[_ngcontent-%COMP%]{width:100%;min-height:50vh;display:flex;flex-direction:column;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{max-width:100%;height:auto}mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:18px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px;padding-top:4px!important;color:#767676}mat-card-content[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;font-size:12px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:48px;max-height:100%;margin:32px 24px 24px}.custom-about[_ngcontent-%COMP%]{margin:24px}.custom-card[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px;max-width:350px;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;text-align:center;transform:rotate(-5deg)}.custom-header-image[_ngcontent-%COMP%]{background-image:url("./media/profesionnalPic-HU2FD23I.png");background-size:cover}.custom-hello[_ngcontent-%COMP%]{margin:0}.custom-sentence[_ngcontent-%COMP%]{padding-top:4px;padding-bottom:4px;margin:0}@media(max-width:768px){.container[_ngcontent-%COMP%]{flex-direction:column;margin:24px 0}.custom-card[_ngcontent-%COMP%]{margin:4px;max-width:80%}.custom-about[_ngcontent-%COMP%]{max-width:100%;padding-left:16px;font-size:14px;margin-top:0}}'],changeDetection:1})}}return t})();var TE=[{icon:"https://nicolasfrechette91.github.io/portfolio/assets/images/man-developing-website-on-desk.svg",translationKey:"skills.items.frontEnd"},{icon:"https://nicolasfrechette91.github.io/portfolio/assets/images/software-engineer.svg",translationKey:"skills.items.backEnd"},{icon:"https://nicolasfrechette91.github.io/portfolio/assets/images/cloud-storage.svg",translationKey:"skills.items.database"},{icon:"https://nicolasfrechette91.github.io/portfolio/assets/images/developer-team.svg",translationKey:"skills.items.maintenance"}];function AP(t,i){if(t&1&&(p(0,"li"),T(1),_()),t&2){let e=i.$implicit;h(),J(e)}}function RP(t,i){if(t&1&&(p(0,"div",4)(1,"div"),V(2,"img",5),ue(3,"translate"),_(),p(4,"div",6),T(5),ue(6,"translate"),_(),p(7,"div",7)(8,"ul"),pt(9,AP,2,1,"li",null,en),ue(11,"translate"),_()()()),t&2){let e=i.$implicit;h(2),E("src",ur(e.icon),Oi),A("alt",fe(3,4,e.translationKey+".name")),h(3),He(" ",fe(6,6,e.translationKey+".name")," "),h(4),ft(fe(11,8,e.translationKey+".technologies"))}}var AE=(()=>{class t{constructor(){this._skills=TE}get skills(){return this._skills}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=D({type:t,selectors:[["app-skills"]],standalone:!1,decls:8,vars:3,consts:[["id","skills-section"],[1,"title"],[1,"title-text"],[1,"container-skills"],[1,"container-skill"],[3,"src"],[1,"skill-name"],[1,"tech"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"h1",1)(2,"span",2),T(3),ue(4,"translate"),_()(),p(5,"div",3),pt(6,RP,12,10,"div",4,en),_()()),n&2&&(h(3),J(fe(4,1,"skills.title")),h(3),ft(r.skills))},dependencies:[an],styles:["#skills-section[_ngcontent-%COMP%]{width:100%;min-height:50vh;text-align:center;display:flex;flex-direction:column}img[_ngcontent-%COMP%]{height:150px;width:150px}li[_ngcontent-%COMP%]{text-align:left}.container-skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:4px;margin:32px 24px 16px}.container-skill[_ngcontent-%COMP%]{display:grid;grid-template-rows:150px 48px auto;justify-content:center}.skill-name[_ngcontent-%COMP%]{margin:16px;line-height:24px;font-size:24px;padding-left:4px;text-align:left}.tech[_ngcontent-%COMP%]{display:flex}.title-text[_ngcontent-%COMP%]{background-position:top center}@media(max-width:768px){img[_ngcontent-%COMP%]{max-width:100px;max-height:100px;margin:0}li[_ngcontent-%COMP%]{font-size:14px}.container-skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;grid-gap:4px;margin:16px 8px}.container-skill[_ngcontent-%COMP%]{grid-template-rows:auto auto;margin:0}.skill-name[_ngcontent-%COMP%]{margin:0;text-align:center}}"],changeDetection:1})}}return t})();var RE=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=D({type:t,selectors:[["app-root"]],standalone:!1,decls:6,vars:0,template:function(n,r){n&1&&V(0,"app-navigation-bar")(1,"app-about")(2,"app-skills")(3,"app-project-list")(4,"app-footer")(5,"router-outlet")},dependencies:[Dl,ox,vE,yE,ME,AE],encapsulation:2,changeDetection:1})}}return t})();var km=(()=>{class t{_animationsDisabled=Ae();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&F("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
`],encapsulation:2})}return t})();var NP=["text"],FP=[[["mat-icon"]],"*"],PP=["mat-icon","*"];function LP(t,i){if(t&1&&V(0,"mat-pseudo-checkbox",1),t&2){let e=x();E("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function VP(t,i){if(t&1&&V(0,"mat-pseudo-checkbox",3),t&2){let e=x();E("disabled",e.disabled)}}function BP(t,i){if(t&1&&(p(0,"span",4),T(1),_()),t&2){let e=x();h(),He("(",e.group.label,")")}}var Z_=new b("MAT_OPTION_PARENT_COMPONENT"),X_=new b("MatOptgroup");var K_=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},za=(()=>{class t{_element=d(H);_changeDetectorRef=d(ge);_parent=d(Z_,{optional:!0});group=d(X_,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Ie).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Y(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new M;_text;_stateChanges=new k;constructor(){let e=d(Ge);e.load(qt),e.load(Rn),this._signalDisableRipple=!!this._parent&&Gn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!gt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new K_(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&ce(NP,7),n&2){let o;P(o=L())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&j("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(tt("id",r.id),A("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),F("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",G]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:PP,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(oe(FP),U(0,LP,1,2,"mat-pseudo-checkbox",1),q(1),p(2,"span",2,0),q(4,1),_(),U(5,VP,1,1,"mat-pseudo-checkbox",3),U(6,BP,2,1,"span",4),V(7,"div",5)),n&2&&($(r.multiple?0:-1),h(5),$(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),$(r.group&&r.group._inert?6:-1),h(),E("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[km,Nn],styles:[`.mat-mdc-option {
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
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
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
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();function OE(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function NE(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var HE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(ke(Pe),ke(H))};static \u0275dir=I({type:t})}return t})(),jP=(()=>{class t extends HE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,features:[ye]})}return t})(),Xl=new b("");var HP={provide:Xl,useExisting:It(()=>zE),multi:!0};function zP(){let t=hn()?hn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var UP=new b(""),zE=(()=>{class t extends HE{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!zP())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(ke(Pe),ke(H),ke(UP,8))};static \u0275dir=I({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&j("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[De([HP]),ye]})}return t})();function tb(t){return t==null||nb(t)===0}function nb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Eo=new b(""),UE=new b(""),$P=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Zl=class{static min(i){return GP(i)}static max(i){return WP(i)}static required(i){return $E(i)}static requiredTrue(i){return qP(i)}static email(i){return YP(i)}static minLength(i){return QP(i)}static maxLength(i){return KP(i)}static pattern(i){return ZP(i)}static nullValidator(i){return Im()}static compose(i){return KE(i)}static composeAsync(i){return ZE(i)}};function GP(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function WP(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function $E(t){return tb(t.value)?{required:!0}:null}function qP(t){return t.value===!0?null:{required:!0}}function YP(t){return tb(t.value)||$P.test(t.value)?null:{email:!0}}function QP(t){return i=>{let e=i.value?.length??nb(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function KP(t){return i=>{let e=i.value?.length??nb(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function ZP(t){if(!t)return Im;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(tb(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Im(t){return null}function GE(t){return t!=null}function WE(t){return Ni(t)?qe(t):t}function qE(t){let i={};return t.forEach(e=>{i=e!=null?v(v({},i),e):i}),Object.keys(i).length===0?null:i}function YE(t,i){return i.map(e=>e(t))}function XP(t){return!t.validate}function QE(t){return t.map(i=>XP(i)?i:e=>i.validate(e))}function KE(t){if(!t)return null;let i=t.filter(GE);return i.length==0?null:function(e){return qE(YE(e,i))}}function ib(t){return t!=null?KE(QE(t)):null}function ZE(t){if(!t)return null;let i=t.filter(GE);return i.length==0?null:function(e){let n=YE(e,i).map(WE);return cs(n).pipe(ae(qE))}}function rb(t){return t!=null?ZE(QE(t)):null}function FE(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function XE(t){return t._rawValidators}function JE(t){return t._rawAsyncValidators}function J_(t){return t?Array.isArray(t)?t:[t]:[]}function Mm(t,i){return Array.isArray(t)?t.includes(i):t===i}function PE(t,i){let e=J_(i);return J_(t).forEach(r=>{Mm(e,r)||e.push(r)}),e}function LE(t,i){return J_(i).filter(e=>!Mm(t,e))}var Tm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=ib(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=rb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Sr=class extends Tm{name;get formDirective(){return null}get path(){return null}};var Wl="VALID",Sm="INVALID",Ua="PENDING",ql="DISABLED",Ir=class{},Am=class extends Ir{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Ql=class extends Ir{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Kl=class extends Ir{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},$a=class extends Ir{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Rm=class extends Ir{source;constructor(i){super(),this.source=i}},Ga=class extends Ir{source;constructor(i){super(),this.source=i}};function ek(t){return(Vm(t)?t.validators:t)||null}function JP(t){return Array.isArray(t)?ib(t):t||null}function tk(t,i){return(Vm(i)?i.asyncValidators:t)||null}function eL(t){return Array.isArray(t)?rb(t):t||null}function Vm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function tL(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new N(1e3,"");if(!nk(n,e))throw new N(1001,"")}function nL(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new N(-1002,"")})}var Om=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Y(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ke(this.statusReactive)}set status(i){Ke(()=>this.statusReactive.set(i))}_status=kt(()=>this.statusReactive());statusReactive=Y(void 0);get valid(){return this.status===Wl}get invalid(){return this.status===Sm}get pending(){return this.status===Ua}get disabled(){return this.status===ql}get enabled(){return this.status!==ql}errors;get pristine(){return Ke(this.pristineReactive)}set pristine(i){Ke(()=>this.pristineReactive.set(i))}_pristine=kt(()=>this.pristineReactive());pristineReactive=Y(!0);get dirty(){return!this.pristine}get touched(){return Ke(this.touchedReactive)}set touched(i){Ke(()=>this.touchedReactive.set(i))}_touched=kt(()=>this.touchedReactive());touchedReactive=Y(!1);get untouched(){return!this.touched}_events=new k;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(PE(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(PE(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(LE(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(LE(i,this._rawAsyncValidators))}hasValidator(i){return Mm(this._rawValidators,i)}hasAsyncValidator(i){return Mm(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(re(v({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Kl(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Kl(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(re(v({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Ql(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Ql(!0,n))}markAsPending(i={}){this.status=Ua;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new $a(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(re(v({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ql,this.errors=null,this._forEachChild(r=>{r.disable(re(v({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Am(this.value,n)),this._events.next(new $a(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(re(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Wl,this._forEachChild(n=>{n.enable(re(v({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(re(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Wl||this.status===Ua)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Am(this.value,e)),this._events.next(new $a(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(re(v({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ql:Wl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Ua,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=WE(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new $a(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?ql:this.errors?Sm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ua)?Ua:this._anyControlsHaveStatus(Sm)?Sm:Wl}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Ql(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Kl(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Vm(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=JP(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=eL(this._rawAsyncValidators)}_updateHasRequiredValidator(){Ke(()=>this._hasRequired.set(this.hasValidator(Zl.required)))}};function nk(t,i){return Object.hasOwn(t,i)}function iL(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function rL(t,i,e,n){switch(e){case"name":t.setAttribute(i,e,n);break;case"disabled":case"readonly":case"required":n?t.setAttribute(i,e,""):t.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?t.setAttribute(i,e,n.toString()):t.removeAttribute(i,e);break}}var eb=class{kind;context;control;message;constructor({kind:i,context:e,control:n}){this.kind=i,this.context=e,this.control=n}};var oL=(()=>{class t{_validator=Im;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Im,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,features:[Ce]})}return t})();var aL={provide:Eo,useExisting:It(()=>ik),multi:!0};var ik=(()=>{class t extends oL{required;inputName="required";normalizeInput=G;createValidator=e=>$E;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&A("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[De([aL]),ye]})}return t})();var rk=new b("",{factory:()=>sL}),sL="always";function VE(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),Fm(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Nm(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function ok(t,i){let e=XE(t);i.validator!==null?t.setValidators(FE(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=JE(t);i.asyncValidator!==null?t.setAsyncValidators(FE(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Nm(i._rawValidators,r),Nm(i._rawAsyncValidators,r)}function Fm(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=XE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=JE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Nm(i._rawValidators,n),Nm(i._rawAsyncValidators,n),e}function ak(t,i){t==null,ok(t,i)}function lL(t,i){return Fm(t,i)}function cL(t){return Object.getPrototypeOf(t.constructor)===jP}function sk(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function dL(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===zE?e=o:cL(o)?n=o:r=o}),r||n||e||null}function uL(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Pm=class extends Tm{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ga&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=dL(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,n){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(Mt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(ge);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new de,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof Ga&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=iL(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof ik))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,i.setCustomControlModelInput(n.value)),this.bindControlProperty(i,r,"touched",n.touched),this.bindControlProperty(i,r,"dirty",n.dirty),this.bindControlProperty(i,r,"valid",n.valid),this.bindControlProperty(i,r,"invalid",n.invalid),this.bindControlProperty(i,r,"pending",n.pending),this.bindControlProperty(i,r,"disabled",n.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let o=n.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,n,r){if(e[n]===r)return;e[n]=r;let o=i.setInputOnDirectives(n,r);this.isNativeFormElement&&!o&&(n==="disabled"||n==="required")&&this.renderer&&rL(this.renderer,i.nativeElement,n,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([n,r])=>new eb({context:r,kind:n,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,n=kt(()=>{let r=i();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Mi(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var Lm=class extends Om{constructor(i,e,n){super(ek(e),tk(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let n=this._find(i);return n||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let n=this._find(i);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){Ke(()=>{nL(this,!0,i),Object.keys(i).forEach(n=>{tL(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this._find(n);r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,re(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ga(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return nk(this.controls,i)?this.controls[i]:null}};var mL={provide:Sr,useExisting:It(()=>ob)},Yl=Promise.resolve(),ob=(()=>{class t extends Sr{callSetDisabledState;get submitted(){return Ke(this.submittedReactive)}_submitted=kt(()=>this.submittedReactive());submittedReactive=Y(!1);_directives=new Set;form;ngSubmit=new M;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Lm({},ib(e),rb(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Yl.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Yl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Yl.then(()=>{let n=this._findContainer(e.path),r=new Lm({});ak(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Yl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Yl.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),sk(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Rm(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(ke(Eo,10),ke(UE,10),ke(rk,8))};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&j("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[De([mL]),ye]})}return t})();function BE(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function jE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hL=class extends Om{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(ek(e),tk(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(jE(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){Ke(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ga(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){BE(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){BE(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){jE(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var pL=t=>t instanceof hL;var fL=(()=>{class t extends Sr{callSetDisabledState;get submitted(){return Ke(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=kt(()=>this._submittedReactive());_submittedReactive=Y(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Fm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){VE(e.control||null,e,!1),uL(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,sk(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Rm(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(VE(n||null,e),pL(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);ak(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&lL(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ok(this.form,this),this._oldForm&&Fm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(ke(Eo,10),ke(UE,10),ke(rk,8))};static \u0275dir=I({type:t,features:[ye,Ce]})}return t})();var gL={provide:Sr,useExisting:It(()=>ab)},ab=(()=>{class t extends fL{form=null;ngSubmit=new M;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&j("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[De([gL]),ye]})}return t})();var sb=class{_box;_destroyed=new k;_resizeSubject=new k;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new pe(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Ee(e=>e.some(n=>n.target===i)),Uc({bufferSize:1,refCount:!0}),we(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},lk=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new sb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var _L=["notch"],bL=["*"],ck=["iconPrefixContainer"],dk=["textPrefixContainer"],uk=["iconSuffixContainer"],mk=["textSuffixContainer"],vL=["textField"],yL=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],wL=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function CL(t,i){t&1&&V(0,"span",21)}function DL(t,i){if(t&1&&(p(0,"label",20),q(1,1),U(2,CL,1,0,"span",21),_()),t&2){let e=x(2);E("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),A("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),$(!e.hideRequiredMarker&&e._control.required?2:-1)}}function xL(t,i){if(t&1&&U(0,DL,3,5,"label",20),t&2){let e=x();$(e._hasFloatingLabel()?0:-1)}}function EL(t,i){t&1&&V(0,"div",7)}function kL(t,i){}function SL(t,i){if(t&1&&Qe(0,kL,0,0,"ng-template",13),t&2){x(2);let e=at(1);E("ngTemplateOutlet",e)}}function IL(t,i){if(t&1&&(p(0,"div",9),U(1,SL,1,1,null,13),_()),t&2){let e=x();E("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),$(e._forceDisplayInfixLabel()?-1:1)}}function ML(t,i){t&1&&(p(0,"div",10,2),q(2,2),_())}function TL(t,i){t&1&&(p(0,"div",11,3),q(2,3),_())}function AL(t,i){}function RL(t,i){if(t&1&&Qe(0,AL,0,0,"ng-template",13),t&2){x();let e=at(1);E("ngTemplateOutlet",e)}}function OL(t,i){t&1&&(p(0,"div",14,4),q(2,4),_())}function NL(t,i){t&1&&(p(0,"div",15,5),q(2,5),_())}function FL(t,i){t&1&&V(0,"div",16)}function PL(t,i){t&1&&(p(0,"div",18),q(1,6),_())}function LL(t,i){if(t&1&&(p(0,"mat-hint",22),T(1),_()),t&2){let e=x(2);E("id",e._hintLabelId),h(),J(e.hintLabel)}}function VL(t,i){if(t&1&&(p(0,"div",19),U(1,LL,2,2,"mat-hint",22),q(2,7),V(3,"div",23),q(4,8),_()),t&2){let e=x();h(),$(e.hintLabel?1:-1)}}var lb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-label"]]})}return t})(),BL=new b("MatError");var cb=(()=>{class t{align="start";id=d(Ie).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(tt("id",r.id),A("align",null),F("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),jL=new b("MatPrefix");var HL=new b("MatSuffix");var vk=new b("FloatingLabelParent"),hk=(()=>{class t{_elementRef=d(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(lk);_ngZone=d(B);_parent=d(vk);_resizeSubscription=new de;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return zL(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&F("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function zL(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var pk="mdc-line-ripple--active",Bm="mdc-line-ripple--deactivating",fk=(()=>{class t{_elementRef=d(H);_cleanupTransitionEnd;constructor(){let e=d(B),n=d(Pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Bm),e.add(pk)}deactivate(){this._elementRef.nativeElement.classList.add(Bm)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Bm);e.propertyName==="opacity"&&r&&n.remove(pk,Bm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),gk=(()=>{class t{_elementRef=d(H);_ngZone=d(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&ce(_L,5),n&2){let o;P(o=L())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&F("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:bL,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(oe(),Pt(0,"div",1),Se(1,"div",2,0),q(3),Te(),Pt(4,"div",3))},encapsulation:2})}return t})(),db=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t})}return t})();var ub=new b("MatFormField"),UL=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),_k="fill",$L="auto",bk="fixed",GL="translateY(-50%)",jm=(()=>{class t{_elementRef=d(H);_changeDetectorRef=d(ge);_platform=d(xe);_idGenerator=d(Ie);_ngZone=d(B);_defaults=d(UL,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=nl("iconPrefixContainer");_textPrefixContainerSignal=nl("textPrefixContainer");_iconSuffixContainerSignal=nl("iconSuffixContainer");_textSuffixContainerSignal=nl("textSuffixContainer");_prefixSuffixContainers=kt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=pC(lb);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=jl(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||$L}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||_k;this._appearanceSignal.set(n)}_appearanceSignal=Y(_k);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bk}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||bk}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new k;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ae();constructor(){let e=this._defaults,n=d($e);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Mi(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=kt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Xe([void 0,void 0]),ae(()=>[n.errorState,n.userAriaDescribedBy]),zc(),Ee(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(we(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),vn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){vg({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=kt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,g=`calc(${u} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${GL} translateX(${g}))`,R=a+s+l+c;return[y,R]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(du(o,r._labelChild,lb,5),Ue(o,db,5)(o,jL,5)(o,HL,5)(o,BL,5)(o,cb,5)),n&2){mu();let a;P(a=L())&&(r._formFieldControl=a.first),P(a=L())&&(r._prefixChildren=a),P(a=L())&&(r._suffixChildren=a),P(a=L())&&(r._errorChildren=a),P(a=L())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(uu(r._iconPrefixContainerSignal,ck,5)(r._textPrefixContainerSignal,dk,5)(r._iconSuffixContainerSignal,uk,5)(r._textSuffixContainerSignal,mk,5),ce(vL,5)(ck,5)(dk,5)(uk,5)(mk,5)(hk,5)(gk,5)(fk,5)),n&2){mu(4);let o;P(o=L())&&(r._textField=o.first),P(o=L())&&(r._iconPrefixContainer=o.first),P(o=L())&&(r._textPrefixContainer=o.first),P(o=L())&&(r._iconSuffixContainer=o.first),P(o=L())&&(r._textSuffixContainer=o.first),P(o=L())&&(r._floatingLabel=o.first),P(o=L())&&(r._notchedOutline=o.first),P(o=L())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&F("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[De([{provide:ub,useExisting:t},{provide:vk,useExisting:t}])],ngContentSelectors:wL,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(oe(yL),Qe(0,xL,1,1,"ng-template",null,0,hr),p(2,"div",6,1),j("click",function(a){return r._control.onContainerClick(a)}),U(4,EL,1,0,"div",7),p(5,"div",8),U(6,IL,2,2,"div",9),U(7,ML,3,0,"div",10),U(8,TL,3,0,"div",11),p(9,"div",12),U(10,RL,1,1,null,13),q(11),_(),U(12,OL,3,0,"div",14),U(13,NL,3,0,"div",15),_(),U(14,FL,1,0,"div",16),_(),p(15,"div",17),U(16,PL,2,0,"div",18)(17,VL,5,1,"div",19),_()),n&2){let o;h(2),F("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),$(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),$(r._hasOutline()?6:-1),h(),$(r._hasIconPrefix?7:-1),h(),$(r._hasTextPrefix?8:-1),h(2),$(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),$(r._hasTextSuffix?12:-1),h(),$(r._hasIconSuffix?13:-1),h(),$(r._hasOutline()?-1:14),h(),F("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),$((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[hk,gk,ha,fk,cb],styles:[`.mdc-text-field {
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
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
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

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
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

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
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
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
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
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
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
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})}return t})();var Hm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var Wa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,Hm,za,z]})}return t})();var yk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[jt,Wa,Gt,Wa,z]})}return t})();var Jl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new k;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var mb=(()=>{class t{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var WL=["button"],qL=["*"];function YL(t,i){if(t&1&&(p(0,"div",2),V(1,"mat-pseudo-checkbox",6),_()),t&2){let e=x();h(),E("disabled",e.disabled)}}var QL=new b("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),KL=new b("MatButtonToggleGroup");var hb=class{source;value;constructor(i,e){this.source=i,this.value=e}};var ZL=(()=>{class t{_changeDetectorRef=d(ge);_elementRef=d(H);_focusMonitor=d(Wt);_idGenerator=d(Ie);_animationDisabled=Ae();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new M;constructor(){d(Ge).load(qt);let e=d(KL,{optional:!0}),n=d(new Vt("tabindex"),{optional:!0})||"",r=d(QL,{optional:!0});this._tabIndex=Y(parseInt(n)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new hb(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(n,r){if(n&1&&ce(WL,5),n&2){let o;P(o=L())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(n,r){n&1&&j("focus",function(){return r.focus()}),n&2&&(A("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),F("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",G],appearance:"appearance",checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:qL,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(n,r){if(n&1&&(oe(),p(0,"button",1,0),j("click",function(){return r._onButtonClick()}),U(2,YL,2,1,"div",2),p(3,"span",3),q(4),_()(),V(5,"span",4)(6,"span",5)),n&2){let o=at(1);E("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),A("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),h(2),$(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),h(4),E("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Nn,km],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
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
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
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
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
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
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
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
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
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
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
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
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return t})(),wk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,ZL,z]})}return t})();var XL=["*"],qa=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,r){n&2&&F("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:XL,decls:1,vars:0,template:function(n,r){n&1&&(oe(),q(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var JL=["input"],e2=["label"],t2=["*"],pb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},n2=new b("mat-checkbox-default-options",{providedIn:"root",factory:()=>pb}),Yt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Yt||{}),fb=class{source;checked},i2=(()=>{class t{_elementRef=d(H);_changeDetectorRef=d(ge);_ngZone=d(B);_animationsDisabled=Ae();_options=d(n2,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new fb;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new M;indeterminateChange=new M;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Yt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(Ge).load(qt);let e=d(new Vt("tabindex"),{optional:!0});this._options=this._options||pb,this.color=this._options.color||pb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(Ie).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(Yt.Indeterminate):this._transitionCheckState(this.checked?Yt.Checked:Yt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Y(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,r=this._getAnimationTargetElement();if(!(n===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Yt.Checked:Yt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case Yt.Init:if(n===Yt.Checked)return this._animationClasses.uncheckedToChecked;if(n==Yt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Yt.Unchecked:return n===Yt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Yt.Checked:return n===Yt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Yt.Indeterminate:return n===Yt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-checkbox"]],viewQuery:function(n,r){if(n&1&&ce(JL,5)(e2,5),n&2){let o;P(o=L())&&(r._inputElement=o.first),P(o=L())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,r){n&2&&(tt("id",r.id),A("tabindex",null)("aria-label",null)("aria-labelledby",null),je(r.color?"mat-"+r.color:"mat-accent"),F("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",G],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",G],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:dt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],indeterminate:[2,"indeterminate","indeterminate",G]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[De([{provide:Xl,useExisting:It(()=>t),multi:!0},{provide:Eo,useExisting:t,multi:!0}]),Ce],ngContentSelectors:t2,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,r){if(n&1&&(oe(),p(0,"div",3),j("click",function(a){return r._preventBubblingFromLabel(a)}),p(1,"div",4,0)(3,"div",5),j("click",function(){return r._onTouchTargetClick()}),_(),p(4,"input",6,1),j("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),_(),V(6,"div",7),p(7,"div",8),Ne(),p(8,"svg",9),V(9,"path",10),_(),Nt(),V(10,"div",11),_(),V(11,"div",12),_(),p(12,"label",13,2),q(14),_()()),n&2){let o=at(2);E("labelPosition",r.labelPosition),h(4),F("mdc-checkbox--selected",r.checked),E("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),A("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),h(7),E("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),h(),E("for",r.inputId)}},dependencies:[Nn,qa],styles:[`.mdc-checkbox {
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
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
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
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
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
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})(),Ck=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[i2,z]})}return t})();var Dk=new b("");var Mr=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),r=e().touched();return n&&r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var zm=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,n,r,o){this._defaultMatcher=i,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o,e?Gn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return i?.isErrorState(n,e)??!1}};var r2=new b("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var xk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[Mr,{provide:r2,useValue:{separatorKeyCodes:[13]}}],imports:[Rt,z]})}return t})();var Ya="Method not implemented",ti=class{locale;_localeChanges=new k;localeChanges=this._localeChanges;setTime(i,e,n,r){throw new Error(Ya)}getHours(i){throw new Error(Ya)}getMinutes(i){throw new Error(Ya)}getSeconds(i){throw new Error(Ya)}parseTime(i,e){throw new Error(Ya)}addSeconds(i,e){throw new Error(Ya)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareDate(i,e):n==r}return i==e}sameTime(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareTime(i,e):n==r}return i==e}clampDate(i,e,n){return e&&this.compareDate(i,e)<0?e:n&&this.compareDate(i,n)>0?n:i}},ec=new b("mat-date-formats");var o2=["tooltip"],a2=20;var s2=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(Z);return()=>wi(t,{scrollThrottle:a2})}}),l2=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ek="tooltip-panel",c2={passive:!0},d2=8,u2=8,m2=24,h2=200,Um=(()=>{class t{_elementRef=d(H);_ngZone=d(B);_platform=d(xe);_ariaDescriber=d(qx);_focusMonitor=d(Wt);_dir=d($e);_injector=d(Z);_viewContainerRef=d(At);_mediaMatcher=d(Pa);_document=d(X);_renderer=d(Pe);_animationsDisabled=Ae();_defaultOptions=d(l2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=p2;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=jl(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=jl(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=yr(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=yr(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new k;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=d2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(we(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new gn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(we(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof H)return this._overlayRef;this._detach()}let n=this._injector.get(wr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Ek}`,o=Dr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(we(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=An(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(s2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(we(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(we(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(we(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(we(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(v(v({},r.main),o.main)),this._addOffset(v(v({},r.fallback),o.fallback))])}_addOffset(e){let n=u2,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=r?-n:n:e.originX==="end"&&(e.offsetX=r?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),it(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:r,originY:o}=e,a;if(n==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=n==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${Ek}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,c2))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,r=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||it({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!gt(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&F("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),p2=(()=>{class t{_changeDetectorRef=d(ge);_elementRef=d(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ae();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new k;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>m2&&e.width>=h2}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:r),n.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(n);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&ce(o2,7),n&2){let o;P(o=L())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&j("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(Se(0,"div",1,0),ro("animationend",function(a){return r._handleAnimationEnd(a)}),Se(2,"div",2),T(3),Te()()),n&2&&(je(r.tooltipClass),F("mdc-tooltip--multiline",r._isMultiline),h(3),J(r.message))},styles:[`.mat-mdc-tooltip {
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
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
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
`],encapsulation:2})}return t})();function f2(t,i){return this._trackRow(i)}var Ak=(t,i)=>i.id;function g2(t,i){if(t&1&&(Se(0,"tr",0)(1,"td",3),T(2),Te()()),t&2){let e=x();h(),Lt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e.numCols),h(),He(" ",e.label," ")}}function _2(t,i){if(t&1&&(Se(0,"td",3),T(1),Te()),t&2){let e=x(2);Lt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e._firstRowOffset),h(),He(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function b2(t,i){if(t&1){let e=ct();Se(0,"td",6)(1,"button",7),ro("click",function(r){let o=Re(e).$implicit,a=x(2);return Oe(a._cellClicked(o,r))})("focus",function(r){let o=Re(e).$implicit,a=x(2);return Oe(a._emitActiveDateChange(o,r))}),Se(2,"span",8),T(3),Te(),Pt(4,"span",9),Te()()}if(t&2){let e=i.$implicit,n=i.$index,r=x().$index,o=x();Lt("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),A("data-mat-row",r)("data-mat-col",n),h(),je(e.cssClasses),F("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,n))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,n))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,n))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),tt("tabIndex",o._isActiveCell(r,n)?0:-1),A("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),h(),F("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),h(),He(" ",e.displayValue," ")}}function v2(t,i){if(t&1&&(Se(0,"tr",1),U(1,_2,2,6,"td",4),pt(2,b2,5,49,"td",5,Ak),Te()),t&2){let e=i.$implicit,n=i.$index,r=x();h(),$(n===0&&r._firstRowOffset?1:-1),h(),ft(e)}}function y2(t,i){if(t&1&&(p(0,"th",2)(1,"span",6),T(2),_(),p(3,"span",3),T(4),_()()),t&2){let e=i.$implicit;h(2),J(e.long),h(2),J(e.narrow)}}var w2=["*"];function C2(t,i){}function D2(t,i){if(t&1){let e=ct();p(0,"mat-month-view",4),ma("activeDateChange",function(r){Re(e);let o=x();return Js(o.activeDate,r)||(o.activeDate=r),Oe(r)}),j("_userSelection",function(r){Re(e);let o=x();return Oe(o._dateSelected(r))})("dragStarted",function(r){Re(e);let o=x();return Oe(o._dragStarted(r))})("dragEnded",function(r){Re(e);let o=x();return Oe(o._dragEnded(r))}),_()}if(t&2){let e=x();ua("activeDate",e.activeDate),E("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function x2(t,i){if(t&1){let e=ct();p(0,"mat-year-view",5),ma("activeDateChange",function(r){Re(e);let o=x();return Js(o.activeDate,r)||(o.activeDate=r),Oe(r)}),j("monthSelected",function(r){Re(e);let o=x();return Oe(o._monthSelectedInYearView(r))})("selectedChange",function(r){Re(e);let o=x();return Oe(o._goToDateInView(r,"month"))}),_()}if(t&2){let e=x();ua("activeDate",e.activeDate),E("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function E2(t,i){if(t&1){let e=ct();p(0,"mat-multi-year-view",6),ma("activeDateChange",function(r){Re(e);let o=x();return Js(o.activeDate,r)||(o.activeDate=r),Oe(r)}),j("yearSelected",function(r){Re(e);let o=x();return Oe(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){Re(e);let o=x();return Oe(o._goToDateInView(r,"year"))}),_()}if(t&2){let e=x();ua("activeDate",e.activeDate),E("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function k2(t,i){}var S2=["button"],I2=[[["","matDatepickerToggleIcon",""]]],M2=["[matDatepickerToggleIcon]"];function T2(t,i){t&1&&(Ne(),p(0,"svg",2),V(1,"path",3),_())}var Ka=(()=>{class t{changes=new k;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,n){return`${e} \u2013 ${n}`}formatYearRangeLabel(e,n){return`${e} to ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),A2=0,nc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=A2++;cssClasses;constructor(i,e,n,r,o,a=i,s){this.value=i,this.displayValue=e,this.ariaLabel=n,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},R2={passive:!1,capture:!0},$m={passive:!0,capture:!0},kk={passive:!0},Qa=(()=>{class t{_elementRef=d(H);_ngZone=d(B);_platform=d(xe);_intl=d(Ka);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new M;previewChange=new M;activeDateChange=new M;dragStarted=new M;dragEnded=new M;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(Z);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(Pe),n=d(Ie);this._startDateLabelId=n.getId("mat-calendar-body-start-"),this._endDateLabelId=n.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=n.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=n.getId("mat-calendar-body-comparison-end-"),d(Ge).load(qt),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,R2),e.listen(r,"mouseenter",this._enterHandler,$m),e.listen(r,"focus",this._enterHandler,$m),e.listen(r,"mouseleave",this._leaveHandler,$m),e.listen(r,"blur",this._leaveHandler,$m),e.listen(r,"mousedown",this._mousedownHandler,kk),e.listen(r,"touchstart",this._mousedownHandler,kk)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,n){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:n})}_emitActiveDateChange(e,n){e.enabled&&this.activeDateChange.emit({value:e.value,event:n})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let n=e.numCols,{rows:r,numCols:o}=this;(e.rows||n)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||n||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(n||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,n){let r=e*this.numCols+n;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){it(()=>{setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");n&&(e||(this._skipNextFocus=!0),n.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return bb(e,this.startValue,this.endValue)}_isRangeEnd(e){return vb(e,this.startValue,this.endValue)}_isInRange(e){return yb(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return bb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,n,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[n][r-1];if(!o){let a=this.rows[n-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,n,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[n][r+1];if(!o){let a=this.rows[n+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return vb(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return yb(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return bb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return vb(e,this.previewStart,this.previewEnd)}_isInPreview(e){return yb(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let n=this._getCellFromElement(e.target);n&&this._ngZone.run(()=>this.previewChange.emit({value:n.enabled?n:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let n=Sk(e),r=n?this._getCellFromElement(n):null;n!==e.target&&(this._didDragSinceMouseDown=!0),_b(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let n=e.target&&this._getCellFromElement(e.target);!n||!this._isInRange(n.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:n.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let n=_b(e.target);if(!n){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}n.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(n);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let n=Sk(e);n&&this._mouseupHandler({target:n})};_getCellFromElement(e){let n=_b(e);if(n){let r=n.getAttribute("data-mat-row"),o=n.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Ce],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(n,r){n&1&&(U(0,g2,3,6,"tr",0),pt(1,v2,4,1,"tr",1,f2,!0),Se(3,"span",2),T(4),Te(),Se(5,"span",2),T(6),Te(),Se(7,"span",2),T(8),Te(),Se(9,"span",2),T(10),Te()),n&2&&($(r._firstRowOffset<r.labelMinRequiredCells?0:-1),h(),ft(r.rows),h(2),tt("id",r._startDateLabelId),h(),He(" ",r.startDateAccessibleName,`
`),h(),tt("id",r._endDateLabelId),h(),He(" ",r.endDateAccessibleName,`
`),h(),tt("id",r._comparisonStartDateLabelId),h(),Xs(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),h(),tt("id",r._comparisonEndDateLabelId),h(),Xs(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return t})();function gb(t){return t?.nodeName==="TD"}function _b(t){let i;return gb(t)?i=t:gb(t.parentNode)?i=t.parentNode:gb(t.parentNode?.parentNode)&&(i=t.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function bb(t,i,e){return e!==null&&i!==e&&t<e&&t===i}function vb(t,i,e){return i!==null&&i!==e&&t>=i&&t===e}function yb(t,i,e,n){return n&&i!==null&&e!==null&&i!==e&&t>=i&&t<=e}function Sk(t){let i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Pn=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Gm=(()=>{class t{selection;_adapter;_selectionChanged=new k;selectionChanged=this._selectionChanged;constructor(e,n){this.selection=e,this._adapter=n,this.selection=e}updateSelection(e,n){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:n,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(n){cr()};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})(),O2=(()=>{class t extends Gm{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(n){return new(n||t)(W(ti))};static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var N2={provide:Gm,useFactory:()=>d(Gm,{optional:!0,skipSelf:!0})||new O2(d(ti))};var Rk=new b("MAT_DATE_RANGE_SELECTION_STRATEGY");var wb=7,F2=0,Ik=(()=>{class t{_changeDetectorRef=d(ge);_dateFormats=d(ec,{optional:!0});_dateAdapter=d(ti,{optional:!0});_dir=d($e,{optional:!0});_rangeStrategy=d(Rk,{optional:!0});_rerenderSubscription=de.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(n,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new M;_userSelection=new M;dragStarted=new M;dragEnded=new M;activeDateChange=new M;_matCalendarBody;_monthLabel=Y("");_weeks=Y([]);_firstWeekOffset=Y(0);_rangeStart=Y(null);_rangeEnd=Y(null);_comparisonRangeStart=Y(null);_comparisonRangeEnd=Y(null);_previewStart=Y(null);_previewEnd=Y(null);_isRange=Y(!1);_todayDate=Y(null);_weekdays=Y([]);constructor(){d(Ge).load(Rn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Xe(null)).subscribe(()=>this._init())}ngOnChanges(e){let n=e.comparisonStart||e.comparisonEnd;n&&!n.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let n=e.value,r=this._getDateFromDayOfMonth(n),o,a;this._selected instanceof Pn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==n||a!==n)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!gt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((wb+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%wb),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:n}){if(this._rangeStrategy){let r=n?n.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let n=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:n??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),n=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:n[s],id:F2++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),n=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==wb&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),c=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new nc(o+1,n[o],c,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,n){return!!(e&&n&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n))}_getCellCompareValue(e){if(e){let n=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(n,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Pn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-month-view"]],viewQuery:function(n,r){if(n&1&&ce(Qa,5),n&2){let o;P(o=L())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Ce],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(n,r){n&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),pt(3,y2,5,2,"th",2,Ak),_(),p(5,"tr",3),V(6,"th",4),_()(),p(7,"tbody",5),j("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),_()()),n&2&&(h(3),ft(r._weekdays()),h(4),E("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Qa],encapsulation:2})}return t})(),bn=24,Cb=4,Mk=(()=>{class t{_changeDetectorRef=d(ge);_dateAdapter=d(ti,{optional:!0});_dir=d($e,{optional:!0});_rerenderSubscription=de.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),Ok(this._dateAdapter,n,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;yearSelected=new M;activeDateChange=new M;_matCalendarBody;_years=Y([]);_todayYear=Y(0);_selectedYear=Y(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let n=this._dateAdapter.getYear(this._activeDate)-tc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<bn;o++)a.push(n+o),a.length==Cb&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let n=e.value,r=this._dateAdapter.createDate(n,0,1),o=this._getDateFromYear(n);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Cb);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Cb);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-tc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,bn-tc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-bn*10:-bn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?bn*10:bn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return tc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let n=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,n,1));return this._dateAdapter.createDate(e,n,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let n=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(n),o=this.dateClass?this.dateClass(n,"multi-year"):void 0;return new nc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(e,0,1);for(let r=n;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Pn){let n=e.start||e.end;n&&this._selectedYear.set(this._dateAdapter.getYear(n))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(n,r){if(n&1&&ce(Qa,5),n&2){let o;P(o=L())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),V(3,"th",2),_()(),p(4,"tbody",3),j("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),_()()),n&2&&(h(4),E("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Qa],encapsulation:2})}return t})();function Ok(t,i,e,n,r){let o=t.getYear(i),a=t.getYear(e),s=Nk(t,n,r);return Math.floor((o-s)/bn)===Math.floor((a-s)/bn)}function tc(t,i,e,n){let r=t.getYear(i);return P2(r-Nk(t,e,n),bn)}function Nk(t,i,e){let n=0;return e?n=t.getYear(e)-bn+1:i&&(n=t.getYear(i)),n}function P2(t,i){return(t%i+i)%i}var Tk=(()=>{class t{_changeDetectorRef=d(ge);_dateFormats=d(ec,{optional:!0});_dateAdapter=d(ti,{optional:!0});_dir=d($e,{optional:!0});_rerenderSubscription=de.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(n)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;monthSelected=new M;activeDateChange=new M;_matCalendarBody;_months=Y([]);_yearLabel=Y("");_todayMonth=Y(null);_selectedMonth=Y(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let n=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),n,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(n);this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(n=>n.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(n);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,n){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new nc(e,n.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let n=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(n,e)||this._isYearAndMonthBeforeMinDate(n,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(n,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,n){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&n>o}return!1}_isYearAndMonthBeforeMinDate(e,n){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&n<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Pn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-year-view"]],viewQuery:function(n,r){if(n&1&&ce(Qa,5),n&2){let o;P(o=L())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),V(3,"th",2),_()(),p(4,"tbody",3),j("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),_()()),n&2&&(h(4),E("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Qa],encapsulation:2})}return t})(),Fk=(()=>{class t{_intl=d(Ka);calendar=d(Db);_dateAdapter=d(ti,{optional:!0});_dateFormats=d(ec,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(Ge).load(Rn);let e=d(ge);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-bn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:bn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,n=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=n.switchToMultiYearViewLabel,this._prevButtonLabel=n.prevMonthLabel,this._nextButtonLabel=n.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevYearLabel,this._nextButtonLabel=n.nextYearLabel):(this._periodButtonText=n.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=n.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevMultiYearLabel,this._nextButtonLabel=n.nextMultiYearLabel)}_isSameView(e,n){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n):Ok(this._dateAdapter,e,n,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let n=this._dateAdapter.getYear(this.calendar.activeDate)-tc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=n+bn-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=d(Ie).getId("mat-calendar-period-label-");static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:w2,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(n,r){n&1&&(oe(),p(0,"div",0)(1,"div",1)(2,"span",2),T(3),_(),p(4,"button",3),j("click",function(){return r.currentPeriodClicked()}),p(5,"span",4),T(6),_(),Ne(),p(7,"svg",5),V(8,"polygon",6),_()(),Nt(),V(9,"div",7),q(10),p(11,"button",8),j("click",function(){return r.previousClicked()}),Ne(),p(12,"svg",9),V(13,"path",10),_()(),Nt(),p(14,"button",11),j("click",function(){return r.nextClicked()}),Ne(),p(15,"svg",9),V(16,"path",12),_()()()()),n&2&&(h(2),E("id",r._periodButtonLabelId),h(),J(r.periodButtonDescription),h(),A("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),h(2),J(r.periodButtonText),h(),F("mat-calendar-invert",r.calendar.currentView!=="month"),h(4),E("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),A("aria-label",r.prevButtonLabel),h(3),E("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),A("aria-label",r.nextButtonLabel))},dependencies:[zi,Ha,Um],encapsulation:2})}return t})(),Db=(()=>{class t{_dateAdapter=d(ti,{optional:!0});_dateFormats=d(ec,{optional:!0});_changeDetectorRef=d(ge);_elementRef=d(H);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new M;yearSelected=new M;monthSelected=new M;viewChanged=new M(!0);_userSelection=new M;_userDragDrop=new M;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let n=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),n&&(this.stateChanges.next(),this.viewChanged.emit(n))}_currentView;_activeDrag=null;stateChanges=new k;constructor(){this._intlChanges=d(Ka).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new gn(this.headerComponent||Fk),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let n=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=n||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(ei())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let n=e.value;(this.selected instanceof Pn||n&&!this._dateAdapter.sameDate(n,this.selected))&&this.selectedChange.emit(n),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,n){this.activeDate=e,this.currentView=n}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-calendar"]],viewQuery:function(n,r){if(n&1&&ce(Ik,5)(Tk,5)(Mk,5),n&2){let o;P(o=L())&&(r.monthView=o.first),P(o=L())&&(r.yearView=o.first),P(o=L())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[De([N2]),Ce],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(n,r){if(n&1&&(Qe(0,C2,0,0,"ng-template",0),p(1,"div",1),U(2,D2,1,11,"mat-month-view",2)(3,x2,1,6,"mat-year-view",3)(4,E2,1,6,"mat-multi-year-view",3),_()),n&2){let o;E("cdkPortalOutlet",r._calendarHeaderPortal),h(2),$((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[sn,R_,Ik,Tk,Mk],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var L2=(()=>{class t{_elementRef=d(H);_animationsDisabled=Ae();_changeDetectorRef=d(ge);_globalModel=d(Gm);_dateAdapter=d(ti);_ngZone=d(B);_rangeSelectionStrategy=d(Rk,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new k;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(Ge).load(Rn),this._closeButtonText=d(Ka).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,n=d(Pe);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"animationstart",this._handleAnimationEvent),n.listen(e,"animationend",this._handleAnimationEvent),n.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let n=this._model.selection,r=e.value,o=n instanceof Pn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,n,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,n))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let n=this._elementRef.nativeElement;e.target!==n||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",n.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,n){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,n&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(n,r){if(n&1&&ce(Db,5),n&2){let o;P(o=L())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(n,r){n&2&&(je(r.color?"mat-"+r.color:""),F("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"mat-calendar",1),j("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),_(),Qe(2,k2,0,0,"ng-template",2),p(3,"button",3),j("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),T(4),_()()),n&2&&(F("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),A("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),h(),je(r.datepicker.panelClass),E("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),h(),E("cdkPortalOutlet",r._actionsPortal),h(),F("cdk-visually-hidden",!r._closeButtonFocused),E("color",r.color||"primary"),h(),J(r._closeButtonText))},dependencies:[P_,Db,sn,zi],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return t})();var V2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),B2=(()=>{class t{_intl=d(Ka);_changeDetectorRef=d(ge);_stateChanges=de.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new Vt("tabindex"),{optional:!0}),n=Number(e);this.tabIndex=n||n===0?n:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Q(),n=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Q(),r=this.datepicker?vn(this.datepicker.openedStream,this.datepicker.closedStream):Q();this._stateChanges.unsubscribe(),this._stateChanges=vn(this._intl.changes,e,n,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(n,r,o){if(n&1&&Ue(o,V2,5),n&2){let a;P(a=L())&&(r._customIcon=a.first)}},viewQuery:function(n,r){if(n&1&&ce(S2,5),n&2){let o;P(o=L())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(n,r){n&1&&j("click",function(a){return r._open(a)}),n&2&&(A("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),F("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",G],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Ce],ngContentSelectors:M2,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(n,r){n&1&&(oe(I2),p(0,"button",1,0),U(2,T2,2,0,":svg:svg",2),q(3),_()),n&2&&(E("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),A("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),h(2),$(r._customIcon?-1:2))},dependencies:[Ha],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return t})();var Pk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[Ka],imports:[kr,jt,Co,nn,L2,B2,Fk,z,Gt]})}return t})();var Lk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();var Vk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Lk,nn,z]})}return t})();var ko=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[La,jm,z]})}return t})();var xb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var Bk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[xb,z,xb]})}return t})();function jk(t){return Error(`Unable to find icon with the name "${t}"`)}function j2(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Hk(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function zk(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ui=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},$k=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new Ui(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Et.HTML,r);if(!a)throw zk(r);let s=yo(a);return this._addSvgIconConfig(e,n,new Ui("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Ui(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Et.HTML,n);if(!o)throw zk(n);let a=yo(o);return this._addSvgIconSetConfig(e,new Ui("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Et.RESOURCE_URL,e);if(!n)throw Hk(e);let r=this._cachedIconsByUrl.get(n);return r?Q(Wm(r)):this._loadSvgIconFromConfig(new Ui(e,null)).pipe(yt(o=>this._cachedIconsByUrl.set(n,o)),ae(o=>Wm(o)))}getNamedSvgIcon(e,n=""){let r=Uk(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):ss(jk(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(Wm(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ae(n=>Wm(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return Q(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Yi(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Q(null)})));return cs(o).pipe(ae(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw jk(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(yt(n=>e.svgText=n),ae(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(yt(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(yo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(yo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw j2();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Et.RESOURCE_URL,n);if(!a)throw Hk(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ae(c=>yo(c)),jr(()=>this._inProgressUrlFetches.delete(a)),us());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(Uk(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return H2(o)?new Ui(o.url,null,o.options):new Ui(o,null)}}static \u0275fac=function(n){return new(n||t)(W(dl,8),W(so),W(X,8),W(on))};static \u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Wm(t){return t.cloneNode(!0)}function Uk(t,i){return t+":"+i}function H2(t){return!!(t.url&&t.options)}var z2=["*"],U2=new b("MAT_ICON_DEFAULT_OPTIONS"),$2=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(X),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Gk=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],G2=Gk.map(t=>`[${t}]`).join(", "),W2=/^url\(['"]?#(.*?)['"]?\)$/,Wk=(()=>{class t{_elementRef=d(H);_iconRegistry=d($k);_location=d($2);_errorHandler=d(on);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=de.EMPTY;constructor(){let e=d(new Vt("aria-hidden"),{optional:!0}),n=d(U2,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(G2),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)Gk.forEach(a=>{let s=n[o],l=s.getAttribute(a),c=l?l.match(W2):null;if(c){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(ot(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(A("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),je(r.color?"mat-"+r.color:""),F("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",G],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:z2,decls:1,vars:0,template:function(n,r){n&1&&(oe(),q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
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
`],encapsulation:2})}return t})(),qm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var qk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({})}return t})();var Yk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[ko,ko,qk,z]})}return t})();var Qk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var Kk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[La,Rt,Hm,z,Qk]})}return t})();var Zk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,jt,z,Gt]})}return t})();var q2=["trigger"],Y2=["panel"],Q2=[[["mat-select-trigger"]],"*"],K2=["mat-select-trigger","*"];function Z2(t,i){if(t&1&&(p(0,"span",4),T(1),_()),t&2){let e=x();h(),J(e.placeholder)}}function X2(t,i){t&1&&q(0)}function J2(t,i){if(t&1&&(p(0,"span",11),T(1),_()),t&2){let e=x(2);h(),J(e.triggerValue)}}function eV(t,i){if(t&1&&(p(0,"span",5),U(1,X2,1,0)(2,J2,2,1,"span",11),_()),t&2){let e=x();h(),$(e.customTrigger?1:2)}}function tV(t,i){if(t&1){let e=ct();p(0,"div",12,1),j("keydown",function(r){Re(e);let o=x();return Oe(o._handleKeydown(r))}),q(2,1),_()}if(t&2){let e=x();je(e.panelClass),F("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),A("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var nV=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(Z);return()=>wi(t)}}),iV=new b("MAT_SELECT_CONFIG"),rV=new b("MatSelectTrigger"),Eb=class{source;value;constructor(i,e){this.source=i,this.value=e}},Xk=(()=>{class t{_viewportRuler=d(Mn);_changeDetectorRef=d(ge);_elementRef=d(H);_dir=d($e,{optional:!0});_idGenerator=d(Ie);_renderer=d(Pe);_parentFormField=d(ub,{optional:!0});ngControl=d(Pm,{self:!0,optional:!0});_liveAnnouncer=d(Vl);_defaultOptions=d(iV,{optional:!0});_animationsDisabled=Ae();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=OE(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=NE(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Eb(this,e)}_scrollStrategyFactory=d(nV);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Y(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Zl.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Bn(()=>{let e=this.options;return e?e.changes.pipe(Xe(e),ht(()=>vn(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ht(()=>this.optionSelectionChanges))});openedChange=new M;_openedStream=this.openedChange.pipe(Ee(e=>e),ae(()=>{}));_closedStream=this.openedChange.pipe(Ee(e=>!e),ae(()=>{}));selectionChange=new M;valueChange=new M;constructor(){let e=d(Mr),n=d(ob,{optional:!0}),r=d(ab,{optional:!0}),o=d(new Vt("tabindex"),{optional:!0}),a=d(Ol,{optional:!0}),s=d(Dk,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new zm(e,s||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Jl(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(we(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(we(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Xe(null),we(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ot(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!gt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!gt(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!gt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Fa?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Hl(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=vn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(we(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),vn(...this.options.map(n=>n._stateChanges)).pipe(we(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=Bt(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-select"]],contentQueries:function(n,r,o){if(n&1&&Ue(o,rV,5)(o,za,5)(o,X_,5),n&2){let a;P(a=L())&&(r.customTrigger=a.first),P(a=L())&&(r.options=a),P(a=L())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&ce(q2,5)(Y2,5)(um,5),n&2){let o;P(o=L())&&(r.trigger=o.first),P(o=L())&&(r.panel=o.first),P(o=L())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,r){n&1&&j("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),n&2&&(A("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),F("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:dt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",G],placeholder:"placeholder",required:[2,"required","required",G],multiple:[2,"multiple","multiple",G],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",G],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",dt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",G]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[De([{provide:db,useExisting:t},{provide:Z_,useExisting:t}]),Ce],ngContentSelectors:K2,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,r){if(n&1&&(oe(Q2),p(0,"div",2,0),j("click",function(){return r.open()}),p(3,"div",3),U(4,Z2,2,1,"span",4)(5,eV,3,1,"span",5),_(),p(6,"div",6)(7,"div",7),Ne(),p(8,"svg",8),V(9,"path",9),_()()()(),Qe(10,tV,3,16,"ng-template",10),j("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),n&2){let o=at(1);h(3),A("id",r._valueId),h(),$(r.empty?4:5),h(6),E("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Fa,um],styles:[`@keyframes _mat-select-enter {
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
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
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
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
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
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return t})();var Ym=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[jt,Wa,z,Gt,ko,Wa]})}return t})();var Qm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Co,jt,z,Gt]})}return t})();function oV(t,i){if(t&1&&(p(0,"mat-option",17),T(1),_()),t&2){let e=i.$implicit;E("value",e),h(),He(" ",e," ")}}function aV(t,i){if(t&1){let e=ct();p(0,"mat-form-field",14)(1,"mat-select",16,0),j("selectionChange",function(r){Re(e);let o=x(2);return Oe(o._changePageSize(r.value))}),pt(3,oV,2,2,"mat-option",17,en),_(),p(5,"div",18),j("click",function(){Re(e);let r=at(2);return Oe(r.open())}),_()()}if(t&2){let e=x(2);E("appearance",e._formFieldAppearance)("color",e.color),h(),E("value",e.pageSize)("disabled",e.disabled),Ys("aria-labelledby",e._pageSizeLabelId),E("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),h(2),ft(e._displayedPageSizeOptions)}}function sV(t,i){if(t&1&&(p(0,"div",15),T(1),_()),t&2){let e=x(2);h(),J(e.pageSize)}}function lV(t,i){if(t&1&&(p(0,"div",3)(1,"div",13),T(2),_(),U(3,aV,6,7,"mat-form-field",14),U(4,sV,2,1,"div",15),_()),t&2){let e=x();h(),A("id",e._pageSizeLabelId),h(),He(" ",e._intl.itemsPerPageLabel," "),h(),$(e._displayedPageSizeOptions.length>1?3:-1),h(),$(e._displayedPageSizeOptions.length<=1?4:-1)}}function cV(t,i){if(t&1){let e=ct();p(0,"button",19),j("click",function(){Re(e);let r=x();return Oe(r._buttonClicked(0,r._previousButtonsDisabled()))}),Ne(),p(1,"svg",8),V(2,"path",20),_()()}if(t&2){let e=x();E("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),A("aria-label",e._intl.firstPageLabel)}}function dV(t,i){if(t&1){let e=ct();p(0,"button",21),j("click",function(){Re(e);let r=x();return Oe(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Ne(),p(1,"svg",8),V(2,"path",22),_()()}if(t&2){let e=x();E("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),A("aria-label",e._intl.lastPageLabel)}}var uV=(()=>{class t{changes=new k;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,n,r)=>{if(r==0||n==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*n,a=o<r?Math.min(o+n,r):o+n;return`${o+1} \u2013 ${a} of ${r}`};static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),mV=50;var hV=new b("MAT_PAGINATOR_DEFAULT_OPTIONS"),pV=(()=>{class t{_intl=d(uV);_changeDetectorRef=d(ge);_formFieldAppearance;_pageSizeLabelId=d(Ie).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new ii(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(n=>dt(n,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new M;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,n=d(hV,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),n){let{pageSize:r,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:s}=n;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=n?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let n=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(n/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:mV),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,n)=>e-n),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let n=this.pageIndex;e!==n&&(this.pageIndex=e,this._emitPageEvent(n))}_buttonClicked(e,n){n||this._navigate(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",dt],length:[2,"length","length",dt],pageSize:[2,"pageSize","pageSize",dt],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",G],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",G],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",G]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(n,r){n&1&&(p(0,"div",1)(1,"div",2),U(2,lV,5,4,"div",3),p(3,"div",4)(4,"div",5),T(5),_(),U(6,cV,3,5,"button",6),p(7,"button",7),j("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Ne(),p(8,"svg",8),V(9,"path",9),_()(),Nt(),p(10,"button",10),j("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Ne(),p(11,"svg",8),V(12,"path",11),_()(),U(13,dV,3,5,"button",12),_()()()),n&2&&(h(2),$(r.hidePageSize?-1:2),h(3),He(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),h(),$(r.showFirstLastButtons?6:-1),h(),E("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),A("aria-label",r._intl.previousPageLabel),h(3),E("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),A("aria-label",r._intl.nextPageLabel),h(3),$(r.showFirstLastButtons?13:-1))},dependencies:[jm,Xk,za,Ha,Um],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return t})(),Jk=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[kr,Ym,Qm,pV]})}return t})();var eS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var tS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var fV=["input"],gV=["formField"],_V=["*"],kb=class{source;value;constructor(i,e){this.source=i,this.value=e}};var bV=new b("MatRadioGroup"),vV=new b("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})});var yV=(()=>{class t{_elementRef=d(H);_changeDetector=d(ge);_focusMonitor=d(Wt);_radioDispatcher=d(mb);_defaultOptions=d(vV,{optional:!0});_ngZone=d(B);_renderer=d(Pe);_uniqueId=d(Ie).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new M;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Ae();_injector=d(Z);constructor(){d(Ge).load(qt);let e=d(bV,{optional:!0}),n=d(new Vt("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=dt(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new kb(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",n+""),this._previousTabIndex=n,it(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-radio-button"]],viewQuery:function(n,r){if(n&1&&ce(fV,5)(gV,7,H),n&2){let o;P(o=L())&&(r._inputElement=o.first),P(o=L())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(n,r){n&1&&j("focus",function(){return r._inputElement.nativeElement.focus()}),n&2&&(A("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),F("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:dt(e)],checked:[2,"checked","checked",G],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",G],required:[2,"required","required",G],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:_V,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(n,r){n&1&&(oe(),p(0,"div",2,0)(2,"div",3)(3,"div",4),j("click",function(a){return r._onTouchTargetClick(a)}),_(),p(4,"input",5,1),j("change",function(a){return r._onInputInteraction(a)}),_(),p(6,"div",6),V(7,"div",7)(8,"div",8),_(),p(9,"div",9),V(10,"div",10),_()(),p(11,"label",11),q(12),_()()),n&2&&(E("labelPosition",r.labelPosition),h(2),F("mdc-radio--disabled",r.disabled),h(2),E("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),A("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),h(5),E("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),h(2),E("for",r.inputId))},dependencies:[Nn,qa],styles:[`.mat-mdc-radio-button {
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
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
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
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
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
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})(),nS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,yV,z]})}return t})();var iS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Gt,z,Gt]})}return t})();var wV=["switch"],CV=["*"];function DV(t,i){t&1&&(p(0,"span",11),Ne(),p(1,"svg",13),V(2,"path",14),_(),p(3,"svg",15),V(4,"path",16),_()())}var xV=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Km=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},EV=(()=>{class t{_elementRef=d(H);_focusMonitor=d(Wt);_changeDetectorRef=d(ge);defaults=d(xV);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Km(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ae();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new M;toggleChange=new M;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){d(Ge).load(qt);let e=d(new Vt("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=d(Ie).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Km(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(n,r){if(n&1&&ce(wV,5),n&2){let o;P(o=L())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,r){n&2&&(tt("id",r.id),A("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),je(r.color?"mat-"+r.color:""),F("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",G],color:"color",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:dt(e)],checked:[2,"checked","checked",G],hideIcon:[2,"hideIcon","hideIcon",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[De([{provide:Xl,useExisting:It(()=>t),multi:!0},{provide:Eo,useExisting:t,multi:!0}]),Ce],ngContentSelectors:CV,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,r){if(n&1&&(oe(),p(0,"div",1)(1,"button",2,0),j("click",function(){return r._handleClick()}),V(3,"div",3)(4,"span",4),p(5,"span",5)(6,"span",6)(7,"span",7),V(8,"span",8),_(),p(9,"span",9),V(10,"span",10),_(),U(11,DV,5,0,"span",11),_()()(),p(12,"label",12),j("click",function(a){return a.stopPropagation()}),q(13),_()()),n&2){let o=at(2);E("labelPosition",r.labelPosition),h(),F("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),E("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),A("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),h(9),E("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),h(),$(r.hideIcon?-1:11),h(),E("for",r.buttonId),A("id",r._labelId)}},dependencies:[Nn,qa],styles:[`.mdc-switch {
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
  width: var(--mat-slide-toggle-track-width, 52px);
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
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
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
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
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
  width: calc(100% - var(--mat-slide-toggle-handle-width));
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
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
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
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
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
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
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
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
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
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
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
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
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
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
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
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})(),rS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[EV,z]})}return t})();var oS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Rt,z]})}return t})();function kV(t,i){if(t&1){let e=ct();p(0,"div",1)(1,"button",2),j("click",function(){Re(e);let r=x();return Oe(r.action())}),T(2),_()()}if(t&2){let e=x();h(2),He(" ",e.data.action," ")}}var SV=["label"];function IV(t,i){}var MV=Math.pow(2,31)-1,ic=class{_overlayRef;instance;containerInstance;_afterDismissed=new k;_afterOpened=new k;_onAction=new k;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,MV))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},aS=new b("MatSnackBarData"),Za=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},TV=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),AV=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),RV=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),sS=(()=>{class t{snackBarRef=d(ic);data=d(aS);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(p(0,"div",0),T(1),_(),U(2,kV,3,1,"div",1)),n&2&&(h(),He(" ",r.data.message,`
`),h(),$(r.hasAction?2:-1))},dependencies:[zi,TV,AV,RV],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return t})(),Sb="_mat-snack-bar-enter",Ib="_mat-snack-bar-exit",OV=(()=>{class t extends Cr{_ngZone=d(B);_elementRef=d(H);_changeDetectorRef=d(ge);_platform=d(xe);_animationsDisabled=Ae();snackBarConfig=d(Za);_document=d(X);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(Z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new k;_onExit=new k;_onEnter=new k;_animationState="void";_live;_label;_role;_liveElementId=d(Ie).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Ib?this._completeExit():e===Sb&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?it(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Sb)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Sb)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?it(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ib)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ib),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>e.classList.add(a)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&ce(sn,7)(SV,7),n&2){let o;P(o=L())&&(r._portalOutlet=o.first),P(o=L())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&j("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),n&2&&F("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ye],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),Qe(4,IV,0,0,"ng-template",4),_(),V(5,"div"),_()()),n&2&&(h(5),A("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[sn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return t})(),NV=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Za}),FV=(()=>{class t{_live=d(Vl);_injector=d(Z);_breakpointObserver=d(Ll);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(NV);_animationsDisabled=Ae();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=sS;snackBarContainerComponent=OV;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let o=v(v({},this._defaultConfig),r);return o.data={message:e,action:n},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=Z.create({parent:r||this._injector,providers:[{provide:Za,useValue:n}]}),a=new gn(this.snackBarContainerComponent,n.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=n,s.instance}_attach(e,n){let r=v(v(v({},new Za),this._defaultConfig),n),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new ic(a,o);if(e instanceof lt){let l=new _n(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new gn(e,void 0,l),u=a.attachComponentPortal(c);s.instance=u.instance}return this._breakpointObserver.observe(Hx.HandsetPortrait).pipe(we(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new Tn;n.direction=e.direction;let r=Hi(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,An(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Z.create({parent:r||this._injector,providers:[{provide:ic,useValue:n},{provide:aS,useValue:e.data}]})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var lS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[FV],imports:[jt,nn,kr,sS,z]})}return t})();var cS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[Ml]})}return t})();var dS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var PV=["*"];function LV(t,i){t&1&&q(0)}var Mb=(()=>{class t{_elementRef=d(H);focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),Tb=(()=>{class t{template=d(lt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var So={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},VV=new b("STEPPER_GLOBAL_OPTIONS"),Zm=(()=>{class t{_stepperOptions;_stepper=d(Xm);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Y(!1);interactedStream=new M;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Y(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Y(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=Y(null);index=Y(-1);isSelected=kt(()=>this._stepper.selectedIndex===this.index());indicatorType=kt(()=>{let e=this.isSelected(),n=this.completed,r=this._state()??So.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?So.ERROR:this._displayDefaultIndicatorType?!n||e?So.NUMBER:o?So.EDIT:So.DONE:n&&!e?So.DONE:n&&e?r:o&&e?So.EDIT:r});isNavigable=kt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Y(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=d(VV,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["cdk-step"]],contentQueries:function(n,r,o){if(n&1&&Ue(o,Tb,5)(o,Sr,5),n&2){let a;P(a=L())&&(r.stepLabel=a.first),P(a=L())&&(r._childForms=a)}},viewQuery:function(n,r){if(n&1&&ce(lt,7),n&2){let o;P(o=L())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",G],optional:[2,"optional","optional",G],completed:[2,"completed","completed",G],hasError:[2,"hasError","hasError",G]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ce],ngContentSelectors:PV,decls:1,vars:0,template:function(n,r){n&1&&(oe(),dr(0,LV,1,0,"ng-template"))},encapsulation:2})}return t})(),Xm=(()=>{class t{_dir=d($e,{optional:!0});_changeDetectorRef=d(ge);_elementRef=d(H);_destroyed=new k;_keyManager;_steps;steps=new mn;_stepHeader;_sortedHeaders=new mn;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Y(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Y(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new M;selectedIndexChange=new M;_groupId=d(Ie).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(Xe(this._steps),we(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,r)=>n.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Xe(this._stepHeader),we(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,r)=>n._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ym(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Q()).pipe(Xe(this._layoutDirection()),we(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:n[e],previouslySelectedStep:n[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=gt(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!n&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let r=n.stepControl;return(r?r.invalid||r.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=ei();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,r,o){if(n&1&&Ue(o,Zm,5)(o,Mb,5),n&2){let a;P(a=L())&&(r._steps=a),P(a=L())&&(r._stepHeader=a)}},inputs:{linear:[2,"linear","linear",G],selectedIndex:[2,"selectedIndex","selectedIndex",dt],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})();var uS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var BV=(t,i,e)=>({index:t,active:i,optional:e});function jV(t,i){if(t&1&&tn(0,2),t&2){let e=x();E("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",lg(2,BV,e.index,e.active,e.optional))}}function HV(t,i){if(t&1&&(p(0,"span",7),T(1),_()),t&2){let e=x(2);h(),J(e._getDefaultTextForState(e.state))}}function zV(t,i){if(t&1&&(p(0,"span",8),T(1),_()),t&2){let e=x(3);h(),J(e._intl.completedLabel)}}function UV(t,i){if(t&1&&(p(0,"span",8),T(1),_()),t&2){let e=x(3);h(),J(e._intl.editableLabel)}}function $V(t,i){if(t&1&&(U(0,zV,2,1,"span",8)(1,UV,2,1,"span",8),p(2,"mat-icon",7),T(3),_()),t&2){let e=x(2);$(e.state==="done"?0:e.state==="edit"?1:-1),h(3),J(e._getDefaultTextForState(e.state))}}function GV(t,i){if(t&1&&U(0,HV,2,1,"span",7)(1,$V,4,2),t&2){let e,n=x();$((e=n.state)==="number"?0:1)}}function WV(t,i){t&1&&(p(0,"div",4),tn(1,9),_()),t&2&&(h(),E("ngTemplateOutlet",i.template))}function qV(t,i){if(t&1&&(p(0,"div",4),T(1),_()),t&2){let e=x();h(),J(e.label)}}function YV(t,i){if(t&1&&(p(0,"div",5),T(1),_()),t&2){let e=x();h(),J(e._intl.optionalLabel)}}function QV(t,i){if(t&1&&(p(0,"div",6),T(1),_()),t&2){let e=x();h(),J(e.errorMessage)}}var mS=["*"];function KV(t,i){}function ZV(t,i){if(t&1&&(q(0),Qe(1,KV,0,0,"ng-template",0)),t&2){let e=x();h(),E("cdkPortalOutlet",e._portal)}}var XV=["animatedContainer"],hS=t=>({steps:t}),pS=t=>({step:t});function JV(t,i){t&1&&q(0)}function eB(t,i){if(t&1&&(p(0,"div",5),tn(1,9)(2,6),_()),t&2){let e=x(2),n=at(6);h(),E("ngTemplateOutlet",e.headerPrefix()),h(),E("ngTemplateOutlet",n)("ngTemplateOutletContext",mr(3,hS,e.steps))}}function tB(t,i){if(t&1&&tn(0,6),t&2){let e=x(2),n=at(6);E("ngTemplateOutlet",n)("ngTemplateOutletContext",mr(2,hS,e.steps))}}function nB(t,i){if(t&1&&(p(0,"div",10,2),tn(2,9),_()),t&2){let e=i.$implicit,n=i.$index,r=x(2);je("mat-horizontal-stepper-content-"+r._getAnimationDirection(n)),E("id",r._getStepContentId(n)),A("aria-labelledby",r._getStepLabelId(n))("inert",r.selectedIndex===n?null:""),h(2),E("ngTemplateOutlet",e.content)}}function iB(t,i){if(t&1&&(p(0,"div",3),U(1,eB,3,5,"div",5)(2,tB,1,4,"ng-container",6),p(3,"div",7),pt(4,nB,3,6,"div",8,en),_()()),t&2){let e=x();h(),$(e.headerPrefix()?1:2),h(3),ft(e.steps)}}function rB(t,i){if(t&1&&tn(0,9),t&2){let e=x(2);E("ngTemplateOutlet",e.headerPrefix())}}function oB(t,i){if(t&1&&(p(0,"div",11),tn(1,6),p(2,"div",12,2)(4,"div",13)(5,"div",14),tn(6,9),_()()()()),t&2){let e=i.$implicit,n=i.$index,r=i.$index,o=i.$count,a=x(2),s=at(4);h(),E("ngTemplateOutlet",s)("ngTemplateOutletContext",mr(11,pS,e)),h(),F("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",a.selectedIndex===n),A("inert",a.selectedIndex===n?null:"")("aria-label",a.ariaLabel),h(2),E("id",a._getStepContentId(n)),A("aria-labelledby",a._getStepLabelId(n)),h(2),E("ngTemplateOutlet",e.content)}}function aB(t,i){if(t&1&&(p(0,"div",4),U(1,rB,1,1,"ng-container",9),pt(2,oB,7,13,"div",11,en),_()),t&2){let e=x();h(),$(e.headerPrefix()?1:-1),h(),ft(e.steps)}}function sB(t,i){if(t&1){let e=ct();p(0,"mat-step-header",15),j("click",function(){let r=Re(e).step;return Oe(r.select())})("keydown",function(r){Re(e);let o=x();return Oe(o._onKeydown(r))}),_()}if(t&2){let e=i.step,n=x();F("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),E("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),A("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function lB(t,i){t&1&&V(0,"div",17)}function cB(t,i){if(t&1&&(tn(0,6),U(1,lB,1,0,"div",17)),t&2){let e=i.$implicit,n=i.$index,r=i.$count;x(2);let o=at(4);E("ngTemplateOutlet",o)("ngTemplateOutletContext",mr(3,pS,e)),h(),$(n!==r-1?1:-1)}}function dB(t,i){if(t&1&&(p(0,"div",16),pt(1,cB,2,5,null,null,en),_()),t&2){let e=i.steps,n=x();A("aria-label",n.ariaLabel),h(),ft(e)}}var Ab=(()=>{class t extends Tb{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","matStepLabel",""]],features:[ye]})}return t})(),uB=(()=>{class t{changes=new k;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Rb=(()=>{class t extends Mb{_intl=d(uB);_focusMonitor=d(Wt);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=d(Ge);e.load(qt),e.load(Rn);let n=d(ge);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof Ab?null:this.label}_templateLabel(){return this.label instanceof Ab?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,r){n&2&&(je("mat-"+(r.color||"primary")),F("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[ye],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,r){if(n&1&&(V(0,"div",0),p(1,"div")(2,"div",1),U(3,jV,1,6,"ng-container",2)(4,GV,2,1),_()(),p(5,"div",3),U(6,WV,2,1,"div",4)(7,qV,2,1,"div",4),U(8,YV,2,1,"div",5),U(9,QV,2,1,"div",6),_()),n&2){let o;E("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),h(),je(sg("mat-step-icon-state-",r.state," mat-step-icon")),F("mat-step-icon-selected",r.selected),h(2),$(r.iconOverrides&&r.iconOverrides[r.state]?3:4),h(2),F("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),h(),$((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),h(2),$(r._hasOptionalLabel()?8:-1),h(),$(r._hasErrorLabel()?9:-1)}},dependencies:[Nn,ha,Wk],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2})}return t})(),mB=(()=>{class t{templateRef=d(lt);name;static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),hB=(()=>{class t{_template=d(lt);static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),pB=(()=>{class t extends Zm{_errorStateMatcher=d(Mr,{skipSelf:!0});_viewContainerRef=d(At);_isSelected=de.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ht(()=>this._stepper.selectionChange.pipe(ae(e=>e.selectedStep===this),Xe(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new _n(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let r=this._errorStateMatcher.isErrorState(e,n),o=!!(e&&e.invalid&&this.interacted);return r||o}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,r=!!(e&&e().invalid()&&this.interacted);return n||r}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-step"]],contentQueries:function(n,r,o){if(n&1&&Ue(o,Ab,5)(o,hB,5),n&2){let a;P(a=L())&&(r.stepLabel=a.first),P(a=L())&&(r._lazyContent=a.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[De([{provide:Mr,useExisting:t},{provide:Zm,useExisting:t}]),ye],ngContentSelectors:mS,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,r){n&1&&(oe(),Qe(0,ZV,2,1,"ng-template"))},dependencies:[sn],encapsulation:2})}return t})(),fB=(()=>{class t extends Xm{_ngZone=d(B);_renderer=d(Pe);_animationsDisabled=Ae();_cleanupTransition;_isAnimating=Y(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new mn;_icons;animationDone=new M;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=pr(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=""}_animationDuration="";_isServer=!d(xe).isBrowser;constructor(){super();let n=d(H).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(we(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(we(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(Xe(null),we(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(s=>s.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,r,o){if(n&1&&Ue(o,pB,5)(o,mB,5),n&2){let a;P(a=L())&&(r._steps=a),P(a=L())&&(r._icons=a)}},viewQuery:function(n,r){if(n&1&&ce(Rb,5)(XV,5),n&2){let o;P(o=L())&&(r._stepHeader=o),P(o=L())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(n,r){n&2&&(Lt("--mat-stepper-animation-duration",r._getAnimationDuration()),F("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[De([{provide:Xm,useExisting:t}]),ye],ngContentSelectors:mS,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,r){if(n&1&&(oe(),U(0,JV,1,0),U(1,iB,6,1,"div",3)(2,aB,4,1,"div",4),Qe(3,sB,1,27,"ng-template",null,0,hr)(5,dB,3,1,"ng-template",null,1,hr)),n&2){let o;$(r._isServer?0:-1),h(),$((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[ha,Rb],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return t})();var fS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({providers:[Mr],imports:[nn,uS,qm,Rt,fB,Rb,z]})}return t})();var gS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[cS,z]})}return t})();var _S=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[z]})}return t})();var bS=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=C({type:t,bootstrap:[RE]})}static{this.\u0275inj=w({providers:[ca(()=>d(vr).load())],imports:[Vg,XD,Ck,kr,Yk,yk,Pk,ko,nS,Ym,oS,rS,Zk,iS,rx,Kk,Bk,IE,fS,_S,Vk,wk,xk,qm,tS,eS,oE,Qm,lS,gS,dS,Jk,Ta]})}}return t})();Lg().bootstrapModule(bS,{applicationProviders:[gC()]}).catch(t=>console.error(t));
