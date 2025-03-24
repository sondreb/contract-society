import{b as it}from"./chunk-JKYP3BO7.js";import{C as rt,P as ot,Q as at,R as st,S as ct}from"./chunk-RVIAFB4R.js";import{$a as H,Bb as h,Cb as X,Db as B,Eb as A,Fa as q,Fb as o,Gb as a,Hb as f,Ib as v,Kb as g,Lb as d,Pb as Z,Qb as W,Rb as J,Vb as l,Wb as E,Xa as s,Z as P,_ as N,aa as L,bc as tt,da as c,fc as z,hb as O,hc as V,ib as Q,ic as et,ka as _,la as b,lb as I,ta as Y,ua as G,vb as K,wb as M,xa as $,xb as R,xc as nt,yb as D,za as w,zb as U}from"./chunk-L2Q7JARO.js";function bt(e,t){e&1&&f(0,"div",2)}var vt=new L("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var mt=(()=>{class e{_elementRef=c($);_ngZone=c(G);_changeDetectorRef=c(tt);_renderer=c(H);_cleanupTransitionEnd;_animationMode=c(q,{optional:!0});constructor(){let n=c(vt,{optional:!0});this._isNoopAnimation=this._animationMode==="NoopAnimations",n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation=!1;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor="primary";get value(){return this._value}set value(n){this._value=lt(n||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=lt(n||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Y;get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=n=>{this.animationEnd.observers.length===0||!n.target||!n.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=O({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(K("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),U("mat-"+r.color),D("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",z],bufferValue:[2,"bufferValue","bufferValue",z],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(o(0,"div",0),f(1,"div",1),I(2,bt,1,0,"div",2),a(),o(3,"div",3),f(4,"span",4),a(),o(5,"div",5),f(6,"span",4),a()),i&2&&(s(),R("flex-basis",r._getBufferBarFlexBasis()),s(),h(r.mode==="buffer"?2:-1),s(),R("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height, 4px),var(--mdc-linear-progress-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height, 4px);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],encapsulation:2,changeDetection:0})}return e})();function lt(e,t=0,n=100){return Math.max(t,Math.min(n,e))}var dt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Q({type:e});static \u0275inj=N({imports:[rt]})}return e})();var y=class e{STORAGE_KEY="introductionCompleted";introductionCompleted=w(this.hasCompletedIntroduction());currentStep=w(0);totalSteps=4;constructor(){}hasCompletedIntroduction(){return localStorage.getItem(this.STORAGE_KEY)==="true"}completeIntroduction(){localStorage.setItem(this.STORAGE_KEY,"true"),this.introductionCompleted.set(!0)}resetIntroduction(){localStorage.removeItem(this.STORAGE_KEY),this.introductionCompleted.set(!1),this.currentStep.set(0)}nextStep(){this.currentStep()<this.totalSteps-1?this.currentStep.update(t=>t+1):this.completeIntroduction()}previousStep(){this.currentStep()>0&&this.currentStep.update(t=>t-1)}goToStep(t){t>=0&&t<this.totalSteps&&this.currentStep.set(t)}reopenIntroduction(){this.currentStep.set(0)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var F=class e{introService=c(y);manuallyShowIntroduction=w(!1);showIntroduction=V(()=>!this.introService.introductionCompleted()||this.manuallyShowIntroduction());hasActiveOverlay=V(()=>this.showIntroduction());constructor(){et(()=>{this.hasActiveOverlay()?this.disableScrolling():this.enableScrolling()})}disableScrolling(){document.body.classList.add("overlay-active")}enableScrolling(){document.body.classList.remove("overlay-active")}openIntroduction(){this.introService.reopenIntroduction(),this.manuallyShowIntroduction.set(!0)}closeIntroduction(){this.manuallyShowIntroduction.set(!1)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var p=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(p||{}),$t="*";function T(e,t){return{type:p.Trigger,name:e,definitions:t,options:{}}}function x(e,t=null){return{type:p.Animate,styles:t,timings:e}}function qt(e,t=null){return{type:p.Sequence,steps:e,options:t}}function u(e){return{type:p.Style,styles:e,offset:null}}function k(e,t,n){return{type:p.State,name:e,styles:t,options:n}}function S(e,t,n=null){return{type:p.Transition,expr:e,animation:t,options:n}}function ht(e,t,n=null){return{type:p.Query,selector:e,animation:t,options:n}}function ft(e,t){return{type:p.Stagger,timings:e,animation:t}}var pt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,n=0){this.totalTime=t+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},ut=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let n=0,i=0,r=0,m=this.players.length;m==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(C=>{C.onDone(()=>{++n==m&&this._onFinish()}),C.onDestroy(()=>{++i==m&&this._onDestroy()}),C.onStart(()=>{++r==m&&this._onStart()})}),this.totalTime=this.players.reduce((C,_t)=>Math.max(C,_t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let n=t*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,n/i.totalTime):1;i.setPosition(r)})}getPosition(){let t=this.players.reduce((n,i)=>n===null||i.totalTime>n.totalTime?i:n,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},Ht="!";var xt=["step"];function St(e,t){if(e&1){let n=v();o(0,"div",12),g("click",function(){let r=_(n).$index,m=d();return b(m.navigateToStep(r))}),a()}if(e&2){let n=t.$index,i=d();D("active",i.currentStep()===n)}}function Ct(e,t){if(e&1&&(o(0,"div",13,0)(2,"div",14)(3,"mat-icon",15),l(4),a(),o(5,"div",16)(6,"mat-icon",17),l(7),a()()(),o(8,"div",18)(9,"h1",19),l(10),a(),o(11,"p",19),l(12),a()()()),e&2){let n=d().$implicit;M("@slideInOut",void 0)("@staggerItems",void 0),s(2),M("@fadeInOut",void 0),s(2),E(n.icon),s(3),E(n.icon),s(3),E(n.title),s(2),E(n.content)}}function wt(e,t){if(e&1&&I(0,Ct,13,7,"div",13),e&2){let n=t.$index,i=d();h(i.currentStep()===n?0:-1)}}function It(e,t){if(e&1){let n=v();o(0,"button",20),g("click",function(){_(n);let r=d();return b(r.previousStep())}),o(1,"mat-icon"),l(2,"arrow_back"),a(),l(3," Back "),a()}}function Et(e,t){e&1&&f(0,"div")}function kt(e,t){if(e&1){let n=v();o(0,"button",21),g("click",function(){_(n);let r=d();return b(r.skipIntroduction())}),l(1," Skip "),a()}}function Pt(e,t){if(e&1){let n=v();o(0,"button",22),g("click",function(){_(n);let r=d();return b(r.nextStep())}),l(1," Next "),o(2,"mat-icon"),l(3,"arrow_forward"),a()()}}function Ot(e,t){if(e&1){let n=v();o(0,"button",22),g("click",function(){_(n);let r=d();return b(r.finishIntroduction())}),l(1," Get Started "),o(2,"mat-icon"),l(3,"rocket_launch"),a()()}}var gt=class e{introductionService=c(y);overlayService=c(F);router=c(it);stepElements;touchStartX=0;touchEndX=0;minSwipeDistance=50;currentStep=this.introductionService.currentStep;totalSteps=this.introductionService.totalSteps;steps=[{title:"Welcome to Contract Society",content:"An app for creating and managing all kinds of contracts to help a society function.",image:"assets/intro-welcome.svg",icon:"handshake"},{title:"Create Societies",content:"Form societies with shared values and goals. Define rules and agreements that work for everyone.",image:"assets/intro-societies.svg",icon:"groups"},{title:"Manage Contracts",content:"Create, sign, and manage contracts with other members. Track obligations and fulfillment.",image:"assets/intro-contracts.svg",icon:"description"},{title:"Get Started",content:"You're all set! Start exploring the app and creating your first society or joining an existing one.",image:"assets/intro-getstarted.svg",icon:"rocket_launch"}];get progressValue(){return(this.currentStep()+1)/this.totalSteps*100}onTouchStart(t){this.touchStartX=t.touches[0].clientX}onTouchEnd(t){this.touchEndX=t.changedTouches[0].clientX,this.handleSwipe()}handleSwipe(){let t=this.touchEndX-this.touchStartX;Math.abs(t)>this.minSwipeDistance&&(t>0?this.previousStep():this.nextStep())}nextStep(){this.introductionService.nextStep()}previousStep(){this.introductionService.previousStep()}skipIntroduction(){this.overlayService.closeIntroduction(),this.introductionService.introductionCompleted()||this.introductionService.completeIntroduction(),this.router.navigate(["/"])}finishIntroduction(){this.overlayService.closeIntroduction(),this.introductionService.introductionCompleted()||this.introductionService.completeIntroduction(),this.router.navigate(["/"])}navigateToStep(t){this.introductionService.goToStep(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=O({type:e,selectors:[["app-introduction"]],viewQuery:function(n,i){if(n&1&&Z(xt,5),n&2){let r;W(r=J())&&(i.stepElements=r)}},hostBindings:function(n,i){n&1&&g("touchstart",function(m){return i.onTouchStart(m)})("touchend",function(m){return i.onTouchEnd(m)})},decls:16,vars:5,consts:[["step",""],[1,"introduction-container"],[1,"progress-container"],["mode","determinate",3,"value"],[1,"step-indicators"],[1,"step-indicator",3,"active"],[1,"content-container"],[1,"step-wrapper"],[1,"action-buttons"],["mat-stroked-button","","color","primary",1,"navigation-button"],["mat-button","",1,"skip-button"],["mat-flat-button","","color","primary",1,"navigation-button"],[1,"step-indicator",3,"click"],[1,"step-content"],[1,"image-container","animate-item"],[1,"step-icon"],[1,"placeholder-image"],[1,"large-icon"],[1,"text-container"],[1,"animate-item"],["mat-stroked-button","","color","primary",1,"navigation-button",3,"click"],["mat-button","",1,"skip-button",3,"click"],["mat-flat-button","","color","primary",1,"navigation-button",3,"click"]],template:function(n,i){n&1&&(o(0,"div",1)(1,"div",2),f(2,"mat-progress-bar",3),o(3,"div",4),B(4,St,1,2,"div",5,X),a()(),o(6,"div",6)(7,"div",7),B(8,wt,1,1,null,null,X),a()(),o(10,"div",8),I(11,It,4,0,"button",9)(12,Et,1,0,"div")(13,kt,2,0,"button",10)(14,Pt,4,0,"button",11)(15,Ot,4,0,"button",11),a()()),n&2&&(s(2),M("value",i.progressValue),s(2),A(i.steps),s(4),A(i.steps),s(3),h(i.currentStep()>0?11:12),s(2),h(i.currentStep()<i.totalSteps-1?13:-1),s(),h(i.currentStep()<i.totalSteps-1?14:-1),s(),h(i.currentStep()===i.totalSteps-1?15:-1))},dependencies:[nt,at,ot,ct,st,dt,mt],styles:[".introduction-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;width:100vw;max-height:100vh;max-width:100vw;overflow:hidden;position:fixed;inset:0;background-color:var(--mat-sys-background);z-index:1000}.progress-container[_ngcontent-%COMP%]{padding:16px 16px 8px;position:relative}.step-indicators[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:16px;gap:12px}.step-indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background-color:var(--mat-sys-outline-variant);cursor:pointer;transition:background-color .3s ease,transform .3s ease}.step-indicator.active[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary);transform:scale(1.2)}.content-container[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center;padding:0}.step-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;max-width:1200px;margin:0 auto;padding:0 16px}.step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;max-width:600px;padding:16px;text-align:center;will-change:transform,opacity;position:absolute;left:0;right:0;margin:0 auto}.image-container[_ngcontent-%COMP%]{margin-bottom:32px;align-items:center;will-change:transform,opacity;height:250px;display:flex;flex-direction:column;justify-content:center}.step-icon[_ngcontent-%COMP%]{font-size:32px;height:32px;width:32px;margin-bottom:16px;color:var(--mat-sys-primary)}.placeholder-image[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--mat-sys-surface-variant);border-radius:16px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-out}.large-icon[_ngcontent-%COMP%]{font-size:100px;height:100px;width:100px;color:var(--mat-sys-primary)}.text-container[_ngcontent-%COMP%]{margin-bottom:24px;min-height:120px}.text-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--mat-sys-on-background);margin-bottom:16px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:18px;line-height:1.5;max-width:450px;margin:0 auto}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:24px;background-color:var(--mat-sys-surface);box-shadow:0 -4px 6px #0000000d}.navigation-button[_ngcontent-%COMP%]{min-width:120px}.skip-button[_ngcontent-%COMP%]{position:absolute;right:24px;top:16px}.animate-item[_ngcontent-%COMP%]{will-change:transform,opacity}@media (min-width: 768px){.step-content[_ngcontent-%COMP%]{flex-direction:row;text-align:left;gap:24px;max-width:900px}.image-container[_ngcontent-%COMP%]{margin-bottom:0;flex:.8;height:auto;min-height:250px;max-width:40%}.text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin-bottom:0;flex:1.2;min-height:150px;padding-right:24px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}}@media (max-height: 600px){.placeholder-image[_ngcontent-%COMP%]{width:120px;height:120px}.large-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}.step-icon[_ngcontent-%COMP%]{font-size:24px;height:24px;width:24px;margin-bottom:8px}.text-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:8px;font-size:24px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}}@media (max-width: 480px){.step-content[_ngcontent-%COMP%]{padding:8px}.image-container[_ngcontent-%COMP%]{height:180px}.placeholder-image[_ngcontent-%COMP%]{width:140px;height:140px}.large-icon[_ngcontent-%COMP%]{font-size:70px;height:70px;width:70px}.text-container[_ngcontent-%COMP%]{min-height:100px}.navigation-button[_ngcontent-%COMP%]{min-width:100px}}"],data:{animation:[T("slideInOut",[k("void",u({transform:"translateX(30px)",opacity:0})),k("*",u({transform:"translateX(0)",opacity:1})),S(":enter",[x("250ms 50ms cubic-bezier(0.2, 0.0, 0.1, 1)")]),S(":leave",[x("200ms cubic-bezier(0.2, 0.0, 0.1, 1)",u({transform:"translateX(-30px)",opacity:0}))])]),T("fadeInOut",[k("void",u({opacity:0,transform:"scale(0.98)"})),k("*",u({opacity:1,transform:"scale(1)"})),S(":enter",[x("200ms 80ms cubic-bezier(0.2, 0.0, 0.1, 1)")]),S(":leave",[x("180ms cubic-bezier(0.2, 0.0, 0.1, 1)",u({opacity:0,transform:"scale(0.98)"}))])]),T("staggerItems",[S(":enter",[ht(".animate-item",[u({opacity:0,transform:"translateY(10px)"}),ft(70,[x("200ms 100ms cubic-bezier(0.2, 0.0, 0.1, 1)",u({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])])]}})};export{y as a,F as b,p as c,$t as d,qt as e,u as f,pt as g,ut as h,Ht as i,gt as j};
