"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[328],{8328:(C,c,o)=>{o.r(c),o.d(c,{AwardModule:()=>Z});var i=o(6814),l=o(8589),h=o(3519),d=o.n(h),t=o(6689),u=o(9862),p=o(553),f=o(9626);let g=(()=>{class e{constructor(r,n){this.http=r,this.tokenService=n,this.URL=p.N.apiUrl+"/api/premio",this.URLPRIZE=p.N.apiUrl+"/canjes"}getAllPrizes(){return this.http.get(this.URL)}postPrize(r){const n=new u.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.tokenService.getToken()}`});return this.http.post(`${this.URLPRIZE}/${r}`,null,{headers:n})}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(u.eN),t.LFG(f.B))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var m=o(304);function x(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"article",9)(1,"header",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"section",12)(4,"div",13)(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"small",15),t._uU(8),t.qZA()(),t.TgZ(9,"button",16),t.NdJ("click",function(){const y=t.CHM(r).$implicit,T=t.oxw(2);return t.KtG(T.redeemAward(y.premioId))}),t._uU(10,"Canjear"),t.qZA()()()}if(2&e){const r=a.$implicit;t.xp6(2),t.Q6J("src",r.imgUrl,t.LSH),t.xp6(4),t.Oqu(r.nombrePremio),t.xp6(2),t.hij("EcoPuntos requeridos: ",r.puntos," ")}}function w(e,a){if(1&e&&(t.TgZ(0,"section",7),t.YNc(1,x,11,3,"article",8),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.awards)}}function v(e,a){1&e&&(t.TgZ(0,"div")(1,"p",17),t._uU(2,"No se encontraron premios."),t.qZA()())}const A=[{path:"",component:(()=>{class e{constructor(r,n){this.award=r,this.authService=n,this.user=null,this.awards=[],this.selectedAwardId=null}ngOnInit(){this.getAwards(),this.authService.userLogged$.subscribe(r=>this.user=r)}getAwards(){this.award.getAllPrizes().subscribe({next:r=>{this.awards=r},error:r=>alert("Error al buscar los premios"+r)})}redeemAward(r){this.award.postPrize(r).subscribe(n=>{d().fire({title:"Felicidades",html:"Revisa tu correo para confirmar <br> \xa1Has ganado un premio!",icon:"success",confirmButtonText:"Recibido"})},n=>{d().fire({title:"Operacion invalida",text:"No tienes los suficientes puntos, crea mas reciclaje para obtener mas puntos",icon:"error",confirmButtonText:"Ok"})})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(g),t.Y36(m.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-award"]],decls:10,vars:3,consts:[[1,"flex","justify-between","items-center"],[1,"text-white","font-inter","text-3xl","font-bold"],[1,"text-[#006C34]","font-bold","bg-white","py-2","px-4","rounded-xl"],[1,"text-white","font-inter","text-lg","font-semibold","my-8"],[1,"flex","flex-col","items-center","justify-center","gap-5","w-full"],["class","points flex flex-wrap gap-5 justify-center",4,"ngIf"],[4,"ngIf"],[1,"points","flex","flex-wrap","gap-5","justify-center"],["class","rounded-xl drop-shadow-lg bg-white w-[300px] hover:scale-[1.01] hover:cursor-pointer",4,"ngFor","ngForOf"],[1,"rounded-xl","drop-shadow-lg","bg-white","w-[300px]","hover:scale-[1.01]","hover:cursor-pointer"],[1,"h-56","bg-[#d9d9d9]","flex","items-center","justify-center","rounded-tl-xl","rounded-tr-xl"],["alt","Imagen del premio",1,"w-full","h-full","object-cover","rounded-tl-xl","rounded-tr-xl",3,"src"],[1,"px-3","py-4","flex","justify-between","bg-white","rounded-bl-xl","rounded-br-xl"],[1,"w-5/6"],[1,"text-gray-800","text-xl","font-semibold"],[1,"text-xs","text-gray-600"],[1,"bg-green-800","px-2","rounded-md","text-white",3,"click"],[1,"text-white"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2," Premios "),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.qZA()(),t.TgZ(5,"h3",3),t._uU(6,"Canjea tus premios"),t.qZA(),t.TgZ(7,"main",4),t.YNc(8,w,2,1,"section",5),t.qZA(),t.YNc(9,v,3,0,"div",6)),2&n&&(t.xp6(4),t.hij(" Tus EcoPuntos: ",null==s.user?null:s.user.puntos,""),t.xp6(4),t.Q6J("ngIf",s.awards.length>0),t.xp6(1),t.Q6J("ngIf",0===s.awards.length))},dependencies:[i.sg,i.O5],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-block:1rem;height:100%;background:url(/assets/img/stripe_dashboard.svg);background-repeat:no-repeat;background-size:contain cover;background-position:top right;padding-inline:1rem}@media screen and (min-width: 768px){[_nghost-%COMP%]{background-size:contain}}"]})}return e})()}];let b=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]})}return e})(),Z=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[i.ez,b]})}return e})()}}]);