"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[599],{6599:(v,s,r)=>{r.r(s),r.d(s,{HomeModule:()=>A});var c=r(6814),l=r(8589),e=r(6689),g=r(2213);function u(t,i){1&t&&(e.TgZ(0,"a",71),e._uU(1,"Ir al dashboard"),e.qZA())}function d(t,i){1&t&&(e.ynx(0),e.TgZ(1,"a",72),e._uU(2,"Ingresar"),e.qZA(),e.TgZ(3,"a",73),e._uU(4,"Registrarse"),e.qZA(),e.BQk())}function p(t,i){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div",69),e.YNc(1,u,2,0,"a",70),e.YNc(2,d,5,0,"ng-container",13),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.isLogged),e.xp6(1),e.Q6J("ngIf",!o.isLogged)}}function m(t,i){1&t&&(e.ynx(0),e.TgZ(1,"div",74)(2,"a",75),e._uU(3,"Ir al dashboard"),e.qZA(),e._UZ(4,"div",76),e.qZA(),e.BQk())}function f(t,i){1&t&&(e.ynx(0),e.TgZ(1,"a",77),e._uU(2,"Iniciar sesion"),e.qZA(),e.TgZ(3,"a",78),e._uU(4,"Registrarse"),e.qZA(),e.BQk())}function x(t,i){1&t&&(e.TgZ(0,"a",79),e._uU(1,"Ir al dashboard"),e.qZA())}function Z(t,i){if(1&t){const o=e.EpF();e.ynx(0),e.TgZ(1,"app-button",80),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.goToRegister())}),e._uU(2,"REGISTRARSE"),e.qZA(),e.BQk()}}const h=[{path:"",component:(()=>{class t{constructor(o){this.router=o,this.isMenuOpen=!1,this.isLogged=!1,this.isLogged=!!localStorage.getItem("token")}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}goToRegister(){this.router.navigateByUrl("/auth/register")}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:154,vars:6,consts:[[1,"w-11/12","max-w-[1000px]","m-auto"],[1,"flex","justify-between","items-center","mt-5","px-4","lg:px-8","py-3"],[1,"flex","items-center"],[1,"logo-ecoapp","text-2xl","lg:text-3xl"],[1,"text-2xl","pb-4"],[1,"text-[#006C34]"],[1,"text-[#FFC107]"],[1,"lg:hidden","relative"],["id","burgerButton",1,"text-gray-700","focus:outline-none",3,"click"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],["class"," absolute top-7 right-14",4,"ngIf"],[1,"hidden","lg:flex","gap-5","uppercase"],[4,"ngIf"],[1,"px-4","lg:px-8","xl:px-16","py-12","lg:py-24"],[1,"flex","justify-center","md:justify-between","lg:items-start","w-full"],[1,"md:block","hidden","logo-item-left"],[1,"flex","flex-col","items-center"],[1,"logo-ecohero","text-5xl","lg:text-6xl","text-[#006C34]"],[1,"text-4xl","lg:text-6xl","text-center","lg:text-left"],[1,"md:block","hidden","logo-item-right"],[1,"flex","flex-col-reverse","lg:flex-row","items-center","justify-center","gap-4","mt-8","lg:mt-12"],["src","../../../assets/img/bg-main-theme.svg","alt","theme",1,"w-44","h-full"],[1,"text-black","font-roboto","text-lg","lg:text-xl","font-normal"],[1,"flex","flex-col","lg:flex-row","items-center","justify-between","gap-4","mt-8","lg:mt-12"],[1,"text-black","font-roboto","text-lg","lg:text-xl","font-normal","lg:w-96"],["src","../../../assets/img/bg_auth.png","alt","auth",1,"w-64","h-64"],[1,"my-16"],[1,"text-black","text-center","font-space-grotesk","text-2xl","font-medium"],[1,"flex","justify-around","flex-wrap","my-10"],[1,"flex","w-44","h-44","p-3","md:p-4","items-start","gap-2","md:gap-4"],["src","../../../assets/img/metal.png","alt","#",1,"w-full","h-full","object-cover"],["src","../../../assets/img/glasses.png","alt","#",1,"w-full","h-full","object-cover"],["src","../../../assets/img/plastics.png","alt","#",1,"w-full","h-full","object-cover"],["src","../../../assets/img/paper.png","alt","#",1,"w-full","h-full","object-cover"],[1,"text-black","text-center","font-space-grotesk","text-2xl","font-medium","my-6"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col","lg:flex-row","lg:items-center"],[1,"text-black","text-center","font-roboto","text-4xl","lg:text-6xl","font-normal","leading-9","lg:px-9","lg:py-3"],[1,"text-black","font-roboto","text-base","lg:text-lg","font-normal","leading-normal","py-2","lg:pl-4"],[1,"text-black","text-center","font-space-grotesk","text-2xl","font-medium","my-16"],[1,"mx-auto","w-11/12","lg:w-8/12","max-w-full"],[1,"grid","grid-cols-1","lg:grid-cols-2","lg:gap-0","gap-4"],[1,"flex","justify-start","lg:justify-start","items-center"],[1,"text-black","font-roboto","text-2xl","lg:text-3xl","font-normal","leading-normal","tracking-wide"],["src","../../../assets/img/pollution-3.png","alt","Descripci\xf3n de la imagen",1,"lg:w-[325px]","w-full","max-w-full","h-32"],[1,"flex","lg:flex-row-reverse","flex-col","justify-between","w-full","lg:my-0","my-4","lg:gap-0","gap-4"],[1,"text-black","font-roboto","text-2xl","lg:text-3xl","font-normal","leading-normal","tracking-wide","lg:px-14","lg:py-2"],["src","../../../assets/img/pollution-2.png","alt","Descripci\xf3n de la imagen",1,"lg:w-[305px]","w-full","max-w-full","h-32"],[1,"flex","justify-start","lg:justify-center","items-center"],["src","../../../assets/img/pollution.png","alt","Descripci\xf3n de la imagen",1,"lg:w-[325px]","w-full","max-w-full","h-32"],[1,"flex","items-center","flex-col","gap-3","my-20"],[1,"text-black","text-center","font-space-grotesk","text-2xl","font-medium","my-4"],["routerLink","/dashboard","class","text-[#006C34] hover:bg-green-900 hover:text-white uppercase",4,"ngIf"],[1,"background-image","flex","flex-col","lg:flex-row","justify-around","my-8","p-5"],[1,"flex","flex-col","lg:justify-center","lg:items-center"],[1,"logo-ecoapp","text-xl","lg:text-2xl"],[1,"font-bold","text-md","my-3"],[1,"list-disc"],[1,"font-bold"],[1,"w-28","h-4/6"],[1,"grid","grid-cols-3","gap-1"],[1,"text-center"],["src","../../../assets/icons/icono-fb.png","alt",""],["src","../../../assets/icons/icono-ig.png","alt",""],["src","../../../assets/icons/icono-twt.png","alt",""],["src","../../../assets/icons/icono-wts.png","alt",""],["src","../../../assets/icons/icono-yt.png","alt",""],["src","../../../assets/icons/snapchat -logo.jpg","alt",""],[1,"absolute","top-7","right-14"],["routerLink","/dashboard","class","block uppercase cursor-pointer",4,"ngIf"],["routerLink","/dashboard",1,"block","uppercase","cursor-pointer"],["routerLink","/auth/login",1,"block","py-2","px-4"],["routerLink","/auth/register",1,"block","py-2","px-4"],[1,"flex","gap-2"],["routerLink","/dashboard",1,"border","border-[#006C34]","px-4","py-2","text-[#006C34]","hover:bg-green-900","hover:text-white"],[1,"rounded-full","h-10","w-10","bg-gray-500"],["routerLink","/auth/login",1,"border","border-[#006C34]","px-4","py-2","text-[#006C34]","hover:bg-green-900","hover:text-white"],["routerLink","/auth/register",1,"border","border-[#006C34]","px-4","py-2","text-white","bg-[#FFC107]"],["routerLink","/dashboard",1,"text-[#006C34]","hover:bg-green-900","hover:text-white","uppercase"],[3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"main",0)(1,"nav",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"h1",4)(5,"strong",5),e._uU(6,"Green"),e.qZA(),e.TgZ(7,"strong",6),e._uU(8,"Point"),e.qZA()()(),e.TgZ(9,"div",7)(10,"button",8),e.NdJ("click",function(){return a.toggleMenu()}),e.O4$(),e.TgZ(11,"svg",9),e._UZ(12,"path",10),e.qZA()(),e.YNc(13,p,3,2,"div",11),e.qZA(),e.kcU(),e.TgZ(14,"div",12),e.YNc(15,m,5,0,"ng-container",13),e.YNc(16,f,5,0,"ng-container",13),e.qZA()(),e.TgZ(17,"section",14)(18,"section",15),e._UZ(19,"i",16),e.TgZ(20,"div",17),e._UZ(21,"i",18),e.TgZ(22,"h1",19)(23,"strong",5),e._uU(24,"Green"),e.qZA(),e.TgZ(25,"strong",6),e._uU(26,"Point"),e.qZA()()(),e._UZ(27,"i",20),e.qZA(),e.TgZ(28,"div",21),e._UZ(29,"img",22),e.TgZ(30,"p",23),e._uU(31," Nuestra misi\xf3n es promover la conciencia ambiental y facilitar la participaci\xf3n activa de la comunidad en la gesti\xf3n responsable de los residuos. Nos esforzamos por crear un espacio donde los ciudadanos puedan encontrar f\xe1cilmente los puntos verdes cercanos a su ubicaci\xf3n, as\xed como informaci\xf3n relevante sobre c\xf3mo separar y desechar adecuadamente sus residuos. "),e.qZA()(),e.TgZ(32,"div",24)(33,"p",25),e._uU(34,"A trav\xe9s de esta plataforma, buscamos fomentar una cultura de reciclaje y sostenibilidad, contribuyendo as\xed a un ambiente m\xe1s limpio y una comunidad m\xe1s fuerte y comprometida con el cuidado del planeta. Juntos, trabajamos por un futuro m\xe1s verde y saludable para todos"),e.qZA(),e._UZ(35,"img",26),e.qZA()(),e.TgZ(36,"section")(37,"article",27)(38,"h2",28),e._uU(39," \xbfQU\xc9 MATERIALES RECICLAMOS? "),e.qZA(),e.TgZ(40,"ul",29)(41,"li")(42,"div",17)(43,"div",30),e._UZ(44,"img",31),e.qZA(),e.TgZ(45,"span"),e._uU(46,"Metales"),e.qZA()()(),e.TgZ(47,"li")(48,"div",17)(49,"div",30),e._UZ(50,"img",32),e.qZA(),e.TgZ(51,"span"),e._uU(52,"Vidrios"),e.qZA()()(),e.TgZ(53,"li")(54,"div",17)(55,"div",30),e._UZ(56,"img",33),e.qZA(),e.TgZ(57,"span"),e._uU(58,"Plasticos"),e.qZA()()(),e.TgZ(59,"li")(60,"div",17)(61,"div",30),e._UZ(62,"img",34),e.qZA(),e.TgZ(63,"span"),e._uU(64,"Papel y cart\xf3n"),e.qZA()()()()(),e.TgZ(65,"article",27)(66,"h2",35),e._uU(67," BENEFICIOS DEL RECICLAJE "),e.qZA(),e.TgZ(68,"ol",36)(69,"li",37)(70,"span",38),e._uU(71,"1"),e.qZA(),e.TgZ(72,"p",39)(73,"strong"),e._uU(74,"Conservaci\xf3n de recursos naturales:"),e.qZA(),e._uU(75," El reciclaje ayuda a conservar recursos naturales como madera, agua y minerales al reducir la necesidad de extraer y procesar materias primas nuevas. "),e.qZA()(),e.TgZ(76,"li",37)(77,"span",38),e._uU(78,"2"),e.qZA(),e.TgZ(79,"p",39)(80,"strong"),e._uU(81,"Reducci\xf3n de la contaminaci\xf3n:"),e.qZA(),e._uU(82," Al reciclar, se reduce la cantidad de desechos que terminan en vertederos o incineradoras, lo que ayuda a prevenir la contaminaci\xf3n del aire, agua y suelo. "),e.qZA()(),e.TgZ(83,"li",37)(84,"span",38),e._uU(85,"3"),e.qZA(),e.TgZ(86,"p",39)(87,"strong"),e._uU(88,"Ahorro de energ\xeda:"),e.qZA(),e._uU(89," La fabricaci\xf3n de productos a partir de materiales reciclados suele requerir menos energ\xeda que la producci\xf3n a partir de materias primas v\xedrgenes, lo que ayuda a reducir las emisiones de gases de efecto invernadero y el consumo de recursos energ\xe9ticos. "),e.qZA()()()()(),e.TgZ(90,"section",27)(91,"h2",40),e._uU(92," GRACIAS AL ES EZFUERZO DE LA COMUNIDAS HEMOS AYUDADO A "),e.qZA(),e.TgZ(93,"section",41)(94,"article",42)(95,"div",43)(96,"p",44),e._uU(97," Reducir las emisiones de di\xf3xido de carbono en un 95% "),e.qZA()(),e._UZ(98,"img",45),e.qZA(),e.TgZ(99,"div",46)(100,"p",47),e._uU(101," Ahorrar hasta 5,774 kWh de energ\xeda "),e.qZA(),e._UZ(102,"img",48),e.qZA(),e.TgZ(103,"article",42)(104,"div",49)(105,"p",44),e._uU(106," Ahorrar hasta 5,774 kWh de energ\xeda "),e.qZA()(),e._UZ(107,"img",50),e.qZA()(),e.TgZ(108,"section",51)(109,"h2",52),e._uU(110," ANIMATE A HACER LA DIFERENCIA "),e.qZA(),e.YNc(111,x,2,0,"a",53),e.YNc(112,Z,3,0,"ng-container",13),e.qZA()(),e.TgZ(113,"section",54)(114,"div",55)(115,"div",2),e._UZ(116,"i",56),e.TgZ(117,"h1",4)(118,"strong",5),e._uU(119,"Green"),e.qZA(),e.TgZ(120,"strong",6),e._uU(121,"Point"),e.qZA()()(),e.TgZ(122,"p"),e._uU(123,"Fomentando una "),e._UZ(124,"br"),e._uU(125," cultura de reciclaje "),e._UZ(126,"br"),e._uU(127," y sostenibilidad."),e.qZA()(),e.TgZ(128,"div")(129,"h1",57),e._uU(130,"Contacto"),e.qZA(),e.TgZ(131,"ul",58)(132,"li",59),e._uU(133),e.qZA(),e.TgZ(134,"li",59),e._uU(135," 88 colin p kelly jr street San Francisco, CA 94107 "),e.qZA(),e.TgZ(136,"li",59),e._uU(137," +123456789012 "),e.qZA()()(),e.TgZ(138,"div",60)(139,"h1",57),e._uU(140,"Nuestras redes"),e.qZA(),e.TgZ(141,"div",61)(142,"div",62),e._UZ(143,"img",63),e.qZA(),e.TgZ(144,"div",62),e._UZ(145,"img",64),e.qZA(),e.TgZ(146,"div",62),e._UZ(147,"img",65),e.qZA(),e.TgZ(148,"div",62),e._UZ(149,"img",66),e.qZA(),e.TgZ(150,"div",62),e._UZ(151,"img",67),e.qZA(),e.TgZ(152,"div",62),e._UZ(153,"img",68),e.qZA()()()()()),2&n&&(e.xp6(13),e.Q6J("ngIf",a.isMenuOpen),e.xp6(2),e.Q6J("ngIf",a.isLogged),e.xp6(1),e.Q6J("ngIf",!a.isLogged),e.xp6(95),e.Q6J("ngIf",a.isLogged),e.xp6(1),e.Q6J("ngIf",!a.isLogged),e.xp6(21),e.Oqu("support@greenpoint.com"))},dependencies:[c.O5,l.rH,g.r],styles:['@charset "UTF-8";.logo-ecoapp[_ngcontent-%COMP%]{background-image:url(clip-path.a3488d66b15171c8.svg);width:3.65481rem;height:3.65481rem;background-repeat:no-repeat;background-size:contain}.logo-ecohero[_ngcontent-%COMP%]{background-image:url(clip-path.a3488d66b15171c8.svg);width:9.63206rem;height:9.63206rem;background-repeat:no-repeat;background-size:contain}.logo-item-left[_ngcontent-%COMP%]{background-image:url(icon-home-left.1de6c350aa02690f.svg);background-repeat:no-repeat;width:10rem;height:10rem;background-size:contain}.logo-item-right[_ngcontent-%COMP%]{background-image:url(icon-home-right.07fddfdc2f69595d.svg);background-repeat:no-repeat;background-size:contain;width:10rem;height:10rem}.background-image[_ngcontent-%COMP%]{background-image:url(rectangle-two.f3135a43114a730c.PNG);background-repeat:no-repeat;background-size:cover;width:100%;background-color:#fff9}.new-bg-undernooth[_ngcontent-%COMP%]{opacity:.1;width:100%}']})}return t})()}];let _=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(h),l.Bz]})}return t})();var b=r(8524);let A=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[c.ez,_,b.m]})}return t})()}}]);