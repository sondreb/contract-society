import{E as g,N as U,O as K,Q as Y,n as H,o as L,w as G,x as Q}from"./chunk-HDCUHJWO.js";import{$b as F,Da as D,Db as E,Ea as R,Eb as p,Gb as u,Jb as h,La as O,Ob as _,Pb as v,Qb as b,Tb as I,Ub as V,Vb as f,Wb as P,Xb as y,Zb as T,_b as A,ca as l,db as c,dc as j,ea as x,fc as N,ha as r,j as w,nc as z,pb as d,qb as m,qc as B,tb as k,za as S}from"./chunk-244ZNKJ2.js";var q=(()=>{class o{_animationMode=r(O,{optional:!0});state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,t){i&2&&u("mat-pseudo-checkbox-indeterminate",t.state==="indeterminate")("mat-pseudo-checkbox-checked",t.state==="checked")("mat-pseudo-checkbox-disabled",t.disabled)("mat-pseudo-checkbox-minimal",t.appearance==="minimal")("mat-pseudo-checkbox-full",t.appearance==="full")("_mat-animation-noopable",t._animationMode==="NoopAnimations")},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,t){},styles:['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],encapsulation:2,changeDetection:0})}return o})();var $=["text"],ee=[[["mat-icon"]],"*"],te=["mat-icon","*"];function oe(o,a){if(o&1&&b(0,"mat-pseudo-checkbox",1),o&2){let e=f();p("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function ie(o,a){if(o&1&&b(0,"mat-pseudo-checkbox",3),o&2){let e=f();p("disabled",e.disabled)}}function ae(o,a){if(o&1&&(_(0,"span",4),j(1),v()),o&2){let e=f();c(),N("(",e.group.label,")")}}var ne=new x("MAT_OPTION_PARENT_COMPONENT"),re=new x("MatOptgroup");var C=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},Re=(()=>{class o{_element=r(D);_changeDetectorRef=r(z);_parent=r(ne,{optional:!0});group=r(re,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_disabled=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=r(G).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled}set disabled(e){this._disabled=e}get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new S;_text;_stateChanges=new w;constructor(){let e=r(H);e.load(K),e.load(L),this._signalDisableRipple=!!this._parent&&R(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let t=this._getHostElement();typeof t.focus=="function"&&t.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Q(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new C(this,e))}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["mat-option"]],viewQuery:function(i,t){if(i&1&&T($,7),i&2){let n;A(n=F())&&(t._text=n.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,t){i&1&&V("click",function(){return t._selectViaInteraction()})("keydown",function(s){return t._handleKeydown(s)}),i&2&&(I("id",t.id),E("aria-selected",t.selected)("aria-disabled",t.disabled.toString()),u("mdc-list-item--selected",t.selected)("mat-mdc-option-multiple",t.multiple)("mat-mdc-option-active",t.active)("mdc-list-item--disabled",t.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",B]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:te,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,t){i&1&&(P(ee),k(0,oe,1,2,"mat-pseudo-checkbox",1),y(1),_(2,"span",2,0),y(4,1),v(),k(5,ie,1,1,"mat-pseudo-checkbox",3)(6,ae,2,1,"span",4),b(7,"div",5)),i&2&&(h(t.multiple?0:-1),c(5),h(!t.multiple&&t.selected&&!t.hideSingleSelectionIndicator?5:-1),c(),h(t.group&&t.group._inert?6:-1),c(),p("matRippleTrigger",t._getHostElement())("matRippleDisabled",t.disabled||t.disableRipple))},dependencies:[q,U],styles:['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}return o})();function Oe(o,a,e){if(e.length){let i=a.toArray(),t=e.toArray(),n=0;for(let s=0;s<o+1;s++)i[s].group&&i[s].group===t[n]&&n++;return n}return 0}function Ee(o,a,e,i){return o<e?o:o+a>e+i?Math.max(0,o-i+a):e}var J=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,i,t,n){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=i,this._parentForm=t,this._stateChanges=n}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,t=this.ngControl?this.ngControl.control:null,n=i?.isErrorState(t,e)??!1;n!==a&&(this.errorState=n,this._stateChanges.next())}};var W=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[g]})}return o})();var Ne=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[Y,g,W]})}return o})();export{ne as a,re as b,Re as c,Oe as d,Ee as e,J as f,W as g,Ne as h};
