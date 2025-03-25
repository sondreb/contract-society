import{Fa as n,Gb as l,Wb as d,Xb as m,ba as s,d as a,pb as c}from"./chunk-244ZNKJ2.js";var g=class e{societiesSignal=n([{id:"montelibero",name:"Montelibero",shortDescription:"A digital libertarian society based on blockchain",description:"Montelibero is a digital libertarian society that utilizes blockchain technology to create a decentralized community governed by voluntary agreements. It focuses on personal freedom, free markets, and minimizing coercion in social relations.",thumbnail:"logos/montelibero.png",memberCount:2500,contractCount:156,location:"Digital",founded:new Date("2018-05-12"),website:"https://montelibero.org"},{id:"liberstad",name:"Liberstad",shortDescription:"Private city project in southern Norway",description:"Liberstad is a private city project in southern Norway focused on creating a society where people can live together with real freedom. It aims to establish a voluntary, stateless society based on private property rights and non-aggression principles.",thumbnail:"logos/liberstad.png",memberCount:960,contractCount:78,location:"Norway",founded:new Date("2017-01-18"),website:"https://www.liberstad.com"},{id:"liberland",name:"Liberland",shortDescription:"Micronation on the Danube river",description:"The Free Republic of Liberland is a sovereign state located between Croatia and Serbia on the west bank of the Danube river. Liberland was founded on the principles of personal and economic freedom, with a minimal state interference.",thumbnail:"logos/liberland.png",memberCount:7500,contractCount:230,location:"Danube River",founded:new Date("2015-04-13"),website:"https://liberland.org"},{id:"fsp",name:"Free State Project",shortDescription:"Political migration movement to New Hampshire",description:"The Free State Project is a political migration movement that encourages libertarians to move to New Hampshire to create a society with minimal government oversight. The goal is to create a critical mass of liberty-minded individuals to influence state politics.",thumbnail:"logos/fsp.png",memberCount:5e3,contractCount:120,location:"New Hampshire, USA",founded:new Date("2001-09-01"),website:"https://www.fsp.org"},{id:"penadexo",name:"Penadexo",shortDescription:"Decentralized autonomous society",description:"Penadexo is a decentralized autonomous society built on blockchain technology, focused on creating a borderless community with its own digital governance and economic systems. It emphasizes privacy, autonomy, and voluntary collaboration.",thumbnail:"logos/penadexo.png",memberCount:1200,contractCount:95,location:"Digital",founded:new Date("2020-03-15"),website:"https://penadexo.org"},{id:"cryptocity",name:"Cryptocity",shortDescription:"Crypto-focused community with physical territory",description:"Cryptocity is a hybrid society with both digital presence and physical territory, focused on creating a crypto-friendly environment for businesses and residents. It aims to be a testing ground for blockchain governance and cryptocurrency adoption.",thumbnail:"logos/cryptocity.webp",memberCount:850,contractCount:65,location:"Multiple Locations",founded:new Date("2019-07-22"),website:"https://cryptocity.network"}]);verificationOptionsSignal=n([{id:"mtl-id",name:"MTL ID",description:"Verify using the Montelibero blockchain identity system. Secure and privacy-focused verification.",icon:"verified_user"},{id:"free-id",name:"FreeID",description:"Open-source distributed identity verification protocol that works across multiple platforms.",icon:"fingerprint"}]);selectedSocietySignal=n(null);joiningProcessActiveSignal=n(!1);selectedVerificationMethodSignal=n(null);constructor(){}getSocieties(){return this.societiesSignal}getSocietyById(t){return this.societiesSignal().find(i=>i.id===t)}setSelectedSociety(t){this.selectedSocietySignal.set(t)}getSelectedSociety(){return this.selectedSocietySignal}getVerificationOptions(){return this.verificationOptionsSignal}startJoiningProcess(){this.joiningProcessActiveSignal.set(!0),this.selectedVerificationMethodSignal.set(null)}cancelJoiningProcess(){this.joiningProcessActiveSignal.set(!1),this.selectedVerificationMethodSignal.set(null)}selectVerificationMethod(t){this.selectedVerificationMethodSignal.set(t)}getJoiningProcessActive(){return this.joiningProcessActiveSignal}getSelectedVerificationMethod(){return this.selectedVerificationMethodSignal}completeJoiningProcess(){return a(this,null,function*(){return yield new Promise(t=>setTimeout(t,1500)),this.joiningProcessActiveSignal.set(!1),this.selectedVerificationMethodSignal.set(null),!0})}static \u0275fac=function(i){return new(i||e)};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})};var f=["mat-internal-form-field",""],u=["*"],w=(()=>{class e{labelPosition;static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(o,r){o&2&&l("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:f,ngContentSelectors:u,decls:1,vars:0,template:function(o,r){o&1&&(d(),m(0))},styles:[".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],encapsulation:2,changeDetection:0})}return e})();export{w as a,g as b};
