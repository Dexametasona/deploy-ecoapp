"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[328],{8328:(v,a,s)=>{s.r(a),s.d(a,{AwardModule:()=>A});var i=s(6814),c=s(8589),t=s(6689),l=s(553),g=s(9862);let u=(()=>{class e{constructor(n){this.http=n,this.URL=l.N.apiUrl+"/api/premio"}getAllPrizes(){return this.http.get(this.URL)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var h=s(304);function p(e,r){if(1&e&&(t.TgZ(0,"section")(1,"h3",5),t._uU(2,"Canjeas tus premios"),t.qZA(),t.TgZ(3,"article",6)(4,"div",7),t._UZ(5,"img",8),t.qZA(),t.TgZ(6,"div",9)(7,"div",10)(8,"h3",11),t._uU(9),t.qZA(),t.TgZ(10,"p",12),t._uU(11),t.qZA()(),t.TgZ(12,"button",13),t._uU(13,"Canjear"),t.qZA()()()()),2&e){const n=r.$implicit;t.xp6(5),t.Q6J("src",n.imgUrl,t.LSH),t.xp6(4),t.Oqu(n.nombrePremio),t.xp6(2),t.hij("Puntos requeridos: ",n.puntos," ")}}function m(e,r){if(1&e&&(t.TgZ(0,"section",3),t.YNc(1,p,14,3,"section",4),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.awards)}}function f(e,r){1&e&&(t.TgZ(0,"div")(1,"p",14),t._uU(2,"No se encontraron premios."),t.qZA()())}const w=[{path:"",component:(()=>{class e{constructor(n,o){this.award=n,this.authService=o,this.user=null,this.awards=[]}ngOnInit(){this.getAwards(),this.authService.userLogged$.subscribe(n=>this.user=n)}getAwards(){this.award.getAllPrizes().subscribe({next:n=>{console.log(n),this.awards=n},error:n=>alert("Error al buscar los premios"+n)})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u),t.Y36(h.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-award"]],decls:4,vars:2,consts:[[1,"text-white","font-inter","text-3xl","font-bold","mb-5"],["class","grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 z-30 my-3",4,"ngIf"],[4,"ngIf"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4","lg:gap-8","z-30","my-3"],[4,"ngFor","ngForOf"],[1,"text-white","mb-4","lg:mb-10","px-3"],[1,"shadow-md","bg-white","lg:h-[10rem]","h-44","rounded-xl"],[1,"w-full","h-3/6","bg-[#656565]","rounded-xl"],["alt","Imagen del premio",1,"w-full","h-full","rounded-xl",3,"src"],[1,"flex","justify-between","p-3"],[1,"w-5/6"],[1,"font-bold"],[1,"truncate","w-[200px]"],[1,"bg-green-800","px-2","rounded-md","text-white"],[1,"text-white"]],template:function(o,d){1&o&&(t.TgZ(0,"h2",0),t._uU(1," Premios\n"),t.qZA(),t.YNc(2,m,2,1,"section",1),t.YNc(3,f,3,0,"div",2)),2&o&&(t.xp6(2),t.Q6J("ngIf",d.awards.length>0),t.xp6(1),t.Q6J("ngIf",0===d.awards.length))},dependencies:[i.sg,i.O5],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-block:1rem;height:100%;background:url(/assets/img/stripe_dashboard.svg);background-repeat:no-repeat;background-size:contain cover;background-position:top right;padding-inline:1rem}@media screen and (min-width: 768px){[_nghost-%COMP%]{background-size:contain}}"]})}return e})()}];let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(w),c.Bz]})}return e})(),A=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[i.ez,x]})}return e})()}}]);