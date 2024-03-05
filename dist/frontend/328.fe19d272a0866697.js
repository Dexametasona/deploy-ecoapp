"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[328],{8328:(b,d,i)=>{i.r(d),i.d(d,{AwardModule:()=>A});var s=i(6814),c=i(8589),t=i(6689),l=i(553),g=i(9862);let u=(()=>{class e{constructor(n){this.http=n,this.URL=l.N.apiUrl+"/api/premio"}getAllPrizes(){return this.http.get(this.URL)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var p=i(304);function h(e,r){if(1&e&&(t.TgZ(0,"section")(1,"h3",12),t._uU(2,"Canjeas tus premios"),t.qZA(),t.TgZ(3,"article",13)(4,"div",14),t._UZ(5,"img",15),t.qZA(),t.TgZ(6,"div",16)(7,"div",17)(8,"h3",18),t._uU(9),t.qZA(),t.TgZ(10,"p",19),t._uU(11),t.qZA()(),t.TgZ(12,"button",20),t._uU(13,"Canjear"),t.qZA()()()()),2&e){const n=r.$implicit;t.xp6(5),t.Q6J("src",n.imgUrl,t.LSH),t.xp6(4),t.Oqu(n.nombrePremio),t.xp6(2),t.hij("Puntos requeridos: ",n.puntos," ")}}function m(e,r){if(1&e&&(t.TgZ(0,"section",11),t.YNc(1,h,14,3,"section",10),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.awards)}}function f(e,r){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"No se encontraron premios."),t.qZA()())}function w(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td",21),t._uU(2),t.qZA(),t.TgZ(3,"td",22),t._uU(4),t.qZA(),t.TgZ(5,"td",21),t._uU(6),t.qZA(),t.TgZ(7,"td",23),t._UZ(8,"img",24),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" ",n.nombrePremio," "),t.xp6(2),t.hij(" ",n.cantidad," "),t.xp6(2),t.hij(" ",n.puntos," "),t.xp6(2),t.Q6J("src",n.imgUrl,t.LSH)}}const x=[{path:"",component:(()=>{class e{constructor(n,o){this.award=n,this.authService=o,this.user=null,this.awards=[]}ngOnInit(){this.getAwards(),this.authService.userLogged$.subscribe(n=>this.user=n)}getAwards(){this.award.getAllPrizes().subscribe({next:n=>{console.log(n),this.awards=n},error:n=>alert("Error al buscar los premios"+n)})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u),t.Y36(p.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-award"]],decls:21,vars:3,consts:[[1,"text-white","font-inter","text-3xl","font-bold","mb-5"],["class","grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 z-30 my-3",4,"ngIf"],[4,"ngIf"],[1,"min-w-full","h-5/6","rounded-md","bg-[#656565]","p-2","mt-3","overflow-x-auto"],[1,"text-white","text-xl","mb-2"],[1,"min-w-full","h-full","rounded-md","bg-white","overflow-x-auto"],[1,"min-w-full","border-collapse"],[1,"overflow-scroll"],[1,"px-6","py-3","bg-gray-50","text-left","text-xs","font-medium","text-gray-500","uppercase","tracking-wider"],[1,"bg-white","divide-y","divide-gray-200"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4","lg:gap-8","z-30","my-3"],[1,"text-white","mb-4","lg:mb-10","px-3"],[1,"shadow-md","bg-white","lg:h-[10rem]","h-44","rounded-xl"],[1,"w-full","h-3/6","bg-[#656565]","rounded-xl"],["alt","Imagen del premio",1,"w-full","h-full","rounded-xl",3,"src"],[1,"flex","justify-between","p-3"],[1,"w-5/6"],[1,"font-bold"],[1,"truncate","w-[200px]"],[1,"bg-green-800","px-2","rounded-md","text-white"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-500"],[1,"px-6","py-4","whitespace-nowrap","text-sm"],["alt","Imagen del premio",1,"w-10","h-10","rounded-xl",3,"src"]],template:function(o,a){1&o&&(t.TgZ(0,"h2",0),t._uU(1," Premios\n"),t.qZA(),t.YNc(2,m,2,1,"section",1),t.YNc(3,f,3,0,"div",2),t.TgZ(4,"section",3)(5,"h2",4),t._uU(6,"Listado"),t.qZA(),t.TgZ(7,"section",5)(8,"table",6)(9,"thead")(10,"tr",7)(11,"th",8),t._uU(12," Nombre de Premio "),t.qZA(),t.TgZ(13,"th",8),t._uU(14," Cantidad "),t.qZA(),t.TgZ(15,"th",8),t._uU(16," Puntos "),t.qZA(),t.TgZ(17,"th",8),t._uU(18," Imagen "),t.qZA()()(),t.TgZ(19,"tbody",9),t.YNc(20,w,9,4,"tr",10),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("ngIf",a.awards.length>0),t.xp6(1),t.Q6J("ngIf",0===a.awards.length),t.xp6(17),t.Q6J("ngForOf",a.awards))},dependencies:[s.sg,s.O5],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-block:1rem;height:100%;background:url(/assets/img/stripe_dashboard.svg);background-repeat:no-repeat;background-size:contain cover;background-position:top right;padding-inline:1rem}@media screen and (min-width: 768px){[_nghost-%COMP%]{background-size:contain}}"]})}return e})()}];let Z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]})}return e})(),A=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[s.ez,Z]})}return e})()}}]);