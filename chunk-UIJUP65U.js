import{a as j}from"./chunk-5VH5ZK4Y.js";import{b as P,h as I,i as w,j as D,k,l as L}from"./chunk-VVAA4XHU.js";import{c as A}from"./chunk-6MA4VMKD.js";import{J as N,K as $,n as y,o as F}from"./chunk-FC5TFQZO.js";import"./chunk-QWV7QBLE.js";import{b as f,c as v,d as S,e as C,g as x,i as _,j as T}from"./chunk-MRFPDRXR.js";import{$ as E,aa as b,ba as O}from"./chunk-TAMIVPP2.js";import{Hb as d,Pb as p,Qb as g,Rb as e,Sb as t,Sc as M,Tb as h,Xb as u,fb as m,gc as i,hc as l,ia as c,rb as s}from"./chunk-RZ7N5LWR.js";var H=(r,a)=>a.value;function R(r,a){if(r&1&&(e(0,"mat-option",5)(1,"div",6)(2,"mat-icon"),i(3),t(),e(4,"span"),i(5),t()()()),r&2){let n=a.$implicit;d("value",n.value),m(3),l(n.value==="auto"?"auto_mode":n.value==="light"?"light_mode":"dark_mode"),m(2),l(n.label)}}var z=class r{themeService=c(j);themeOptions=this.themeService.getThemeOptions();selectedTheme=this.themeService.themeMode;changeTheme(a){this.themeService.setTheme(a)}getSelectedThemeLabel(){let a=this.selectedTheme(),n=this.themeOptions.find(o=>o.value===a);return n?n.label:""}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=s({type:r,selectors:[["app-settings"]],decls:41,vars:3,consts:[[1,"settings-container"],[1,"settings-card"],["mat-card-avatar",""],[1,"full-width"],[3,"selectionChange","value"],[3,"value"],[1,"theme-option"],[1,"divider"]],template:function(n,o){n&1&&(e(0,"div",0)(1,"h1"),i(2,"Settings"),t(),e(3,"mat-card",1)(4,"mat-card-header")(5,"mat-icon",2),i(6,"palette"),t(),e(7,"mat-card-title"),i(8,"Appearance"),t(),e(9,"mat-card-subtitle"),i(10,"Customize your app experience"),t()(),e(11,"mat-card-content")(12,"mat-form-field",3)(13,"mat-label"),i(14,"Theme"),t(),e(15,"mat-select",4),u("selectionChange",function(B){return o.changeTheme(B.value)}),p(16,R,6,3,"mat-option",5,H),t(),e(18,"mat-select-trigger")(19,"div",6)(20,"mat-icon"),i(21),t(),e(22,"span"),i(23),t()()()()()(),e(24,"mat-card",1)(25,"mat-card-header")(26,"mat-icon",2),i(27,"info"),t(),e(28,"mat-card-title"),i(29,"About"),t(),e(30,"mat-card-subtitle"),i(31,"Application information"),t()(),e(32,"mat-card-content")(33,"p")(34,"strong"),i(35,"Contract Society"),t()(),e(36,"p"),i(37,"Version: 1.0.0"),t(),h(38,"mat-divider",7),e(39,"p"),i(40,"\xA9 2023-2024 Contract Society"),t()()()()),n&2&&(m(15),d("value",o.selectedTheme()),m(),g(o.themeOptions),m(5),l(o.selectedTheme()==="auto"?"auto_mode":o.selectedTheme()==="light"?"light_mode":"dark_mode"),m(2),l(o.getSelectedThemeLabel()))},dependencies:[M,y,F,T,f,_,S,x,C,v,O,b,E,w,I,P,L,D,k,A,$,N],styles:[".settings-container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:16px}.settings-card[_ngcontent-%COMP%]{margin-bottom:16px}.full-width[_ngcontent-%COMP%]{width:100%}.theme-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}mat-select-trigger[_ngcontent-%COMP%]   .theme-option[_ngcontent-%COMP%]{padding:2px 0}.divider[_ngcontent-%COMP%]{margin:16px 0}"]})};export{z as SettingsComponent};
