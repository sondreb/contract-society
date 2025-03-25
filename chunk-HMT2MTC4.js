import{a as N,b as U}from"./chunk-ZJK4WQEI.js";import{c as q}from"./chunk-NTW5ODK4.js";import{$ as G,Y as A,aa as Q,ba as H}from"./chunk-TAMIVPP2.js";import{Bc as R,Cc as K,Ha as C,Hb as E,Jb as B,Mb as g,Nb as F,Pb as M,Qb as T,Rb as r,Sb as s,Sc as Y,Tb as j,Vb as x,Xb as h,Yb as u,ac as L,bc as X,ca as P,cc as $,eb as V,fb as a,gc as l,hc as w,ia as m,ra as f,rb as z,sa as _,wb as D}from"./chunk-RZ7N5LWR.js";var v=class e{STORAGE_KEY="introductionCompleted";introductionCompleted=C(this.hasCompletedIntroduction());currentStep=C(0);totalSteps=4;constructor(){}hasCompletedIntroduction(){return localStorage.getItem(this.STORAGE_KEY)==="true"}completeIntroduction(){localStorage.setItem(this.STORAGE_KEY,"true"),this.introductionCompleted.set(!0)}resetIntroduction(){localStorage.removeItem(this.STORAGE_KEY),this.introductionCompleted.set(!1),this.currentStep.set(0)}nextStep(){this.currentStep()<this.totalSteps-1?this.currentStep.update(t=>t+1):this.completeIntroduction()}previousStep(){this.currentStep()>0&&this.currentStep.update(t=>t-1)}goToStep(t){t>=0&&t<this.totalSteps&&this.currentStep.set(t)}reopenIntroduction(){this.currentStep.set(0)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var k=class e{introService=m(v);manuallyShowIntroduction=C(!1);showIntroduction=R(()=>!this.introService.introductionCompleted()||this.manuallyShowIntroduction());hasActiveOverlay=R(()=>this.showIntroduction());constructor(){K(()=>{this.hasActiveOverlay()?this.disableScrolling():this.enableScrolling()})}disableScrolling(){document.body.classList.add("overlay-active")}enableScrolling(){document.body.classList.remove("overlay-active")}openIntroduction(){this.introService.reopenIntroduction(),this.manuallyShowIntroduction.set(!0)}closeIntroduction(){this.manuallyShowIntroduction.set(!1)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};var d=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(d||{}),yt="*";function O(e,t){return{type:d.Trigger,name:e,definitions:t,options:{}}}function y(e,t=null){return{type:d.Animate,styles:t,timings:e}}function St(e,t=null){return{type:d.Sequence,steps:e,options:t}}function p(e){return{type:d.Style,styles:e,offset:null}}function I(e,t,n){return{type:d.State,name:e,styles:t,options:n}}function S(e,t,n=null){return{type:d.Transition,expr:e,animation:t,options:n}}function tt(e,t,n=null){return{type:d.Query,selector:e,animation:t,options:n}}function et(e,t){return{type:d.Stagger,timings:e,animation:t}}var J=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,n=0){this.totalTime=t+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},Z=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let n=0,i=0,o=0,c=this.players.length;c==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(b=>{b.onDone(()=>{++n==c&&this._onFinish()}),b.onDestroy(()=>{++i==c&&this._onDestroy()}),b.onStart(()=>{++o==c&&this._onStart()})}),this.totalTime=this.players.reduce((b,it)=>Math.max(b,it.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let n=t*this.totalTime;this.players.forEach(i=>{let o=i.totalTime?Math.min(1,n/i.totalTime):1;i.setPosition(o)})}getPosition(){let t=this.players.reduce((n,i)=>n===null||i.totalTime>n.totalTime?i:n,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},bt="!";var ot=["step"];function rt(e,t){if(e&1){let n=x();r(0,"div",14),h("click",function(){let o=f(n).$index,c=u();return _(c.navigateToStep(o))}),s()}if(e&2){let n=t.$index,i=u();B("active",i.currentStep()===n)}}function st(e,t){if(e&1&&(r(0,"div",15,0)(2,"div",16)(3,"mat-icon",17),l(4),s(),r(5,"div",18)(6,"mat-icon",19),l(7),s()()(),r(8,"div",20)(9,"h1",21),l(10),s(),r(11,"p",21),l(12),s()()()),e&2){let n=u().$implicit;E("@slideInOut",void 0)("@staggerItems",void 0),a(2),E("@fadeInOut",void 0),a(2),w(n.icon),a(3),w(n.icon),a(3),w(n.title),a(2),w(n.content)}}function at(e,t){if(e&1&&D(0,st,13,7,"div",15),e&2){let n=t.$index,i=u();g(i.currentStep()===n?0:-1)}}function ct(e,t){if(e&1){let n=x();r(0,"button",22),h("click",function(){f(n);let o=u();return _(o.previousStep())}),r(1,"mat-icon"),l(2,"arrow_back"),s(),r(3,"span",23),l(4,"Back"),s()()}}function lt(e,t){e&1&&j(0,"div",10)}function ut(e,t){if(e&1){let n=x();r(0,"button",24),h("click",function(){f(n);let o=u();return _(o.skipIntroduction())}),l(1," Skip "),s()}}function dt(e,t){if(e&1){let n=x();r(0,"button",25),h("click",function(){f(n);let o=u();return _(o.nextStep())}),r(1,"span",23),l(2,"Next"),s(),r(3,"mat-icon"),l(4,"arrow_forward"),s()()}}function pt(e,t){if(e&1){let n=x();r(0,"button",26),h("click",function(){f(n);let o=u();return _(o.finishIntroduction())}),r(1,"span",23),l(2,"Get Started"),s(),r(3,"mat-icon"),l(4,"rocket_launch"),s()()}}var nt=class e{introductionService=m(v);overlayService=m(k);router=m(q);stepElements;touchStartX=0;touchEndX=0;minSwipeDistance=50;currentStep=this.introductionService.currentStep;totalSteps=this.introductionService.totalSteps;steps=[{title:"Welcome to Contract Society",content:"An app for creating and managing all kinds of contracts to help a society function.",image:"assets/intro-welcome.svg",icon:"handshake"},{title:"Create Societies",content:"Form societies with shared values and goals. Define rules and agreements that work for everyone.",image:"assets/intro-societies.svg",icon:"groups"},{title:"Manage Contracts",content:"Create, sign, and manage contracts with other members. Track obligations and fulfillment.",image:"assets/intro-contracts.svg",icon:"description"},{title:"Get Started",content:"You're all set! Start exploring the app and creating your first society or joining an existing one.",image:"assets/intro-getstarted.svg",icon:"rocket_launch"}];get progressValue(){return(this.currentStep()+1)/this.totalSteps*100}onTouchStart(t){this.touchStartX=t.touches[0].clientX}onTouchEnd(t){this.touchEndX=t.changedTouches[0].clientX,this.handleSwipe()}handleKeyDown(t){switch(t.key){case"ArrowRight":this.nextStep();break;case"ArrowLeft":this.previousStep();break;case"Escape":this.skipIntroduction();break;case"Enter":this.currentStep()===this.totalSteps-1?this.finishIntroduction():this.nextStep();break}}handleSwipe(){let t=this.touchEndX-this.touchStartX;Math.abs(t)>this.minSwipeDistance&&(t>0?this.previousStep():this.nextStep())}nextStep(){this.introductionService.nextStep()}previousStep(){this.introductionService.previousStep()}skipIntroduction(){this.overlayService.closeIntroduction(),this.introductionService.introductionCompleted()||this.introductionService.completeIntroduction(),this.router.navigate(["/"])}finishIntroduction(){this.overlayService.closeIntroduction(),this.introductionService.introductionCompleted()||this.introductionService.completeIntroduction(),this.router.navigate(["/"])}navigateToStep(t){this.introductionService.goToStep(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=z({type:e,selectors:[["app-introduction"]],viewQuery:function(n,i){if(n&1&&L(ot,5),n&2){let o;X(o=$())&&(i.stepElements=o)}},hostBindings:function(n,i){n&1&&h("touchstart",function(c){return i.onTouchStart(c)})("touchend",function(c){return i.onTouchEnd(c)})("keydown",function(c){return i.handleKeyDown(c)},!1,V)},decls:16,vars:5,consts:[["step",""],[1,"introduction-container"],[1,"progress-container"],["mode","determinate",3,"value"],[1,"step-indicators"],[1,"step-indicator",3,"active"],[1,"content-container"],[1,"step-wrapper"],[1,"action-buttons"],["mat-stroked-button","","color","primary",1,"navigation-button","back-button"],[1,"button-placeholder"],["mat-button","",1,"skip-button"],["mat-flat-button","","color","primary",1,"navigation-button","next-button"],["mat-flat-button","","color","primary",1,"navigation-button","get-started-button"],[1,"step-indicator",3,"click"],[1,"step-content"],[1,"image-container","animate-item"],[1,"step-icon"],[1,"placeholder-image"],[1,"large-icon"],[1,"text-container"],[1,"animate-item"],["mat-stroked-button","","color","primary",1,"navigation-button","back-button",3,"click"],[1,"button-text"],["mat-button","",1,"skip-button",3,"click"],["mat-flat-button","","color","primary",1,"navigation-button","next-button",3,"click"],["mat-flat-button","","color","primary",1,"navigation-button","get-started-button",3,"click"]],template:function(n,i){n&1&&(r(0,"div",1)(1,"div",2),j(2,"mat-progress-bar",3),r(3,"div",4),M(4,rt,1,2,"div",5,F),s()(),r(6,"div",6)(7,"div",7),M(8,at,1,1,null,null,F),s()(),r(10,"div",8),D(11,ct,5,0,"button",9)(12,lt,1,0,"div",10)(13,ut,2,0,"button",11)(14,dt,5,0,"button",12)(15,pt,5,0,"button",13),s()()),n&2&&(a(2),E("value",i.progressValue),a(2),T(i.steps),a(4),T(i.steps),a(3),g(i.currentStep()>0?11:12),a(2),g(i.currentStep()<i.totalSteps-1?13:-1),a(),g(i.currentStep()<i.totalSteps-1?14:-1),a(),g(i.currentStep()===i.totalSteps-1?15:-1))},dependencies:[Y,G,A,H,Q,U,N],styles:[".introduction-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;width:100vw;max-height:100vh;max-width:100vw;overflow:hidden;position:fixed;inset:0;background-color:var(--mat-sys-background);z-index:1000}.progress-container[_ngcontent-%COMP%]{padding:16px 16px 8px;position:relative}.step-indicators[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:16px;gap:12px}.step-indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background-color:var(--mat-sys-outline-variant);cursor:pointer;transition:background-color .3s ease,transform .3s ease}.step-indicator.active[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary);transform:scale(1.2)}.content-container[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center;padding:0}.step-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;max-width:1200px;margin:0 auto;padding:0 16px}.step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;max-width:600px;padding:16px;text-align:center;will-change:transform,opacity;position:absolute;left:0;right:0;margin:0 auto}.image-container[_ngcontent-%COMP%]{margin-bottom:32px;align-items:center;will-change:transform,opacity;height:250px;display:flex;flex-direction:column;justify-content:center}.step-icon[_ngcontent-%COMP%]{font-size:32px;height:32px;width:32px;margin-bottom:16px;color:var(--mat-sys-primary)}.placeholder-image[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--mat-sys-surface-variant);border-radius:16px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-out}.large-icon[_ngcontent-%COMP%]{font-size:100px;height:100px;width:100px;color:var(--mat-sys-primary)}.text-container[_ngcontent-%COMP%]{margin-bottom:24px;min-height:120px}.text-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--mat-sys-on-background);margin-bottom:16px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:18px;line-height:1.5;max-width:450px;margin:0 auto}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding:16px;box-sizing:border-box}.action-buttons[_ngcontent-%COMP%]   .button-placeholder[_ngcontent-%COMP%]{width:90px}.action-buttons[_ngcontent-%COMP%]   .skip-button[_ngcontent-%COMP%]{height:44px}.skip-button[_ngcontent-%COMP%]{position:absolute;right:24px;top:16px}.animate-item[_ngcontent-%COMP%]{will-change:transform,opacity}@media (min-width: 768px){.step-content[_ngcontent-%COMP%]{flex-direction:row;text-align:left;gap:24px;max-width:900px}.image-container[_ngcontent-%COMP%]{margin-bottom:0;flex:.8;height:auto;min-height:250px;max-width:40%}.text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin-bottom:0;flex:1.2;min-height:150px;padding-right:24px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}}@media (max-height: 600px){.placeholder-image[_ngcontent-%COMP%]{width:120px;height:120px}.large-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}.step-icon[_ngcontent-%COMP%]{font-size:24px;height:24px;width:24px;margin-bottom:8px}.text-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:8px;font-size:24px}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}}@media (max-width: 480px){.step-content[_ngcontent-%COMP%]{padding:8px}.image-container[_ngcontent-%COMP%]{height:180px}.placeholder-image[_ngcontent-%COMP%]{width:140px;height:140px}.large-icon[_ngcontent-%COMP%]{font-size:70px;height:70px;width:70px}.text-container[_ngcontent-%COMP%]{min-height:100px}.action-buttons[_ngcontent-%COMP%]{padding:12px 8px}}"],data:{animation:[O("slideInOut",[I("void",p({transform:"translateX(30px)",opacity:0})),I("*",p({transform:"translateX(0)",opacity:1})),S(":enter",[y("250ms 50ms cubic-bezier(0.2, 0.0, 0.1, 1)")]),S(":leave",[y("200ms cubic-bezier(0.2, 0.0, 0.1, 1)",p({transform:"translateX(-30px)",opacity:0}))])]),O("fadeInOut",[I("void",p({opacity:0,transform:"scale(0.98)"})),I("*",p({opacity:1,transform:"scale(1)"})),S(":enter",[y("200ms 80ms cubic-bezier(0.2, 0.0, 0.1, 1)")]),S(":leave",[y("180ms cubic-bezier(0.2, 0.0, 0.1, 1)",p({opacity:0,transform:"scale(0.98)"}))])]),O("staggerItems",[S(":enter",[tt(".animate-item",[p({opacity:0,transform:"translateY(10px)"}),et(70,[y("200ms 100ms cubic-bezier(0.2, 0.0, 0.1, 1)",p({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])])]}})};export{v as a,k as b,d as c,yt as d,St as e,p as f,J as g,Z as h,bt as i,nt as j};
