function _defineProperties(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{EdD2:function(t,e,c){"use strict";c.r(e);var n,a=c("ofXK"),i=c("tyNb"),o=c("3Pt+"),s=c("bFKe"),r=c("PCNd"),g=c("/RaO"),l=function t(e,c,n,a,i,o){_classCallCheck(this,t),this.image=e,this.author=c,this.authorStatus=n,this.text=a,this.date=i,this.my=o},h=c("fXoL"),f=new Date,u=f.getDate(),m=f.getMonth(),p=f.getFullYear(),d=f.getHours(),b=f.getMinutes(),M=[new l("assets/img/profile/ashley.jpg","Ashley Ahlberg","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1),new l("assets/img/profile/bruno.jpg","Bruno Vespa","Do not disturb","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1),new l("assets/img/profile/julia.jpg","Julia Aniston","Away","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1),new l("assets/img/profile/adam.jpg","Adam Sandler","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1),new l("assets/img/profile/tereza.jpg","Tereza Stiles","Offline","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1),new l("assets/img/profile/michael.jpg","Michael Blair","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,d,b),!1)],v=[new l("assets/img/profile/ashley.jpg","Ashley Ahlberg","Online","Hi, I'm looking for admin template with angular material 2 design.  What do you think about Annular Admin Template?",new Date(p,m,u-2,d,b+3),!1),new l("assets/img/users/user.jpg","Emilio Verdines","Online","Hi, Annular is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...",new Date(p,m,u-2,d,b+2),!0)],y=((n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"getChats",value:function(){return M}},{key:"getTalk",value:function(){return v}}]),t}()).\u0275fac=function(t){return new(t||n)},n.\u0275prov=h.Wb({token:n,factory:n.\u0275fac}),n),w=c("C790"),C=c("/t3+"),x=c("XiUz"),k=c("bTqV"),O=c("NFeN"),_=c("Wp6s"),P=c("XhcP"),z=c("MutI"),X=c("FKr1"),L=c("STbY"),I=c("znSr"),S=c("kmnG"),A=c("qFsG"),T=["sidenav"];function F(t,e){if(1&t){var c=h.hc();h.gc(0,"div",26),h.gc(1,"mat-list",27),h.gc(2,"mat-list-item"),h.bc(3,"img",28),h.fc(),h.fc(),h.gc(4,"span",29),h.Xc(5),h.fc(),h.gc(6,"button",30,31),h.gc(8,"mat-icon"),h.Xc(9,"more_vert"),h.fc(),h.fc(),h.gc(10,"mat-menu",32,33),h.gc(12,"span",34),h.oc("mouseleave",(function(t){return h.Nc(c),h.Kc(7).closeMenu()})),h.gc(13,"button",35),h.oc("click",(function(t){return h.Nc(c),h.sc(),h.Kc(21).toggle()})),h.gc(14,"mat-icon"),h.Xc(15,"account_circle"),h.fc(),h.gc(16,"span"),h.Xc(17,"Contact info"),h.fc(),h.fc(),h.gc(18,"button",36),h.gc(19,"mat-icon"),h.Xc(20,"volume_mute"),h.fc(),h.gc(21,"span"),h.Xc(22,"Mute"),h.fc(),h.fc(),h.gc(23,"button",36),h.gc(24,"mat-icon"),h.Xc(25,"delete_forever"),h.fc(),h.gc(26,"span"),h.Xc(27,"Clear chat"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc()}if(2&t){var n=h.Kc(11),a=h.sc();h.Mb(3),h.zc("src",a.currentChat.image,h.Qc),h.Mb(2),h.Yc(a.currentChat.author),h.Mb(1),h.zc("matMenuTriggerFor",n)}}function V(t,e){1&t&&(h.gc(0,"mat-icon",43),h.Xc(1,"check_circle"),h.fc())}function j(t,e){1&t&&(h.gc(0,"mat-icon",43),h.Xc(1,"highlight_off"),h.fc())}function D(t,e){1&t&&(h.gc(0,"mat-icon",43),h.Xc(1,"schedule"),h.fc())}function N(t,e){1&t&&(h.gc(0,"mat-icon",43),h.Xc(1,"not_interested"),h.fc())}function Y(t,e){if(1&t){var c=h.hc();h.gc(0,"mat-list-item",37),h.oc("click",(function(t){h.Nc(c);var n=e.$implicit;return h.sc().getChat(n)})),h.bc(1,"img",38),h.gc(2,"h6",25),h.Xc(3),h.fc(),h.gc(4,"p",39),h.gc(5,"span",40),h.Vc(6,V,2,0,"mat-icon",41),h.Vc(7,j,2,0,"mat-icon",41),h.Vc(8,D,2,0,"mat-icon",41),h.Vc(9,N,2,0,"mat-icon",41),h.fc(),h.gc(10,"span",42),h.Xc(11),h.fc(),h.fc(),h.fc()}if(2&t){var n=e.$implicit;h.Mb(1),h.zc("src",n.image,h.Qc),h.Mb(2),h.Zc(" ",n.author," "),h.Mb(2),h.zc("ngSwitch",n.authorStatus),h.Mb(1),h.zc("ngSwitchCase","Online"),h.Mb(1),h.zc("ngSwitchCase","Offline"),h.Mb(1),h.zc("ngSwitchCase","Away"),h.Mb(1),h.zc("ngSwitchCase","Do not disturb"),h.Mb(2),h.Yc(n.authorStatus)}}function B(t,e){if(1&t&&(h.gc(0,"mat-list-item",45),h.bc(1,"img",38),h.gc(2,"p",46),h.gc(3,"span",47),h.Xc(4),h.fc(),h.fc(),h.gc(5,"p",48),h.gc(6,"small"),h.Xc(7),h.tc(8,"date"),h.fc(),h.fc(),h.fc()),2&t){var c=e.$implicit;h.Mb(1),h.zc("src",c.image,h.Qc),h.Mb(2),h.zc("ngClass",c.my?"bg-primary":"bg-accent"),h.Mb(1),h.Yc(c.text),h.Mb(3),h.Yc(h.vc(8,4,c.date,"dd MMMM, yyyy 'at' HH:mm"))}}function G(t,e){if(1&t&&(h.gc(0,"mat-list",27),h.Vc(1,B,9,7,"mat-list-item",44),h.fc()),2&t){var c=h.sc();h.Mb(1),h.zc("ngForOf",c.talks)}}function K(t,e){1&t&&(h.gc(0,"div",49),h.gc(1,"mat-icon"),h.Xc(2,"chat"),h.fc(),h.gc(3,"p"),h.Xc(4,"Select a interlocutor for talk"),h.fc(),h.fc())}function W(t,e){if(1&t){var c=h.hc();h.gc(0,"mat-card",50),h.gc(1,"div",51),h.gc(2,"mat-form-field",52),h.gc(3,"input",53),h.oc("keyup",(function(t){return h.Nc(c),h.sc().sendMessage(t)}))("ngModelChange",(function(t){return h.Nc(c),h.sc().newMessage=t})),h.fc(),h.fc(),h.gc(4,"div",54),h.gc(5,"button",55),h.gc(6,"mat-icon"),h.Xc(7,"attach_file"),h.fc(),h.fc(),h.gc(8,"button",56),h.oc("click",(function(t){return h.Nc(c),h.sc().sendMessage(t)})),h.gc(9,"mat-icon"),h.Xc(10,"send"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc()}if(2&t){var n=h.sc();h.Mb(3),h.zc("ngModel",n.newMessage)}}function H(t,e){if(1&t&&h.bc(0,"img",57),2&t){var c=h.sc();h.zc("src",c.currentChat.image,h.Qc)}}function E(t,e){if(1&t&&(h.gc(0,"h2",58),h.Xc(1),h.fc()),2&t){var c=h.sc();h.Mb(1),h.Yc(c.currentChat.author)}}var Q,q=((Q=function(){function t(e,c){_classCallCheck(this,t),this.appSettings=e,this.chatService=c,this.userImage="assets/img/users/user.jpg",this.sidenavOpen=!0,this.settings=this.appSettings.settings}return _createClass(t,[{key:"ngOnInit",value:function(){this.chats=this.chatService.getChats(),window.innerWidth<=768&&(this.sidenavOpen=!1)}},{key:"onWindowResize",value:function(){this.sidenavOpen=!(window.innerWidth<=768)}},{key:"getChat",value:function(t){this.talks&&(this.talks.length=2),this.talks=this.chatService.getTalk(),this.talks.push(t),this.currentChat=t,this.talks.forEach((function(e){e.my||(e.image=t.image)})),window.innerWidth<=768&&this.sidenav.close()}},{key:"sendMessage",value:function(t){if((1===t.which||13===t.which)&&""!=this.newMessage.trim()&&this.talks){this.talks.push(new l("assets/img/users/user.jpg","Emilio Verdines","online",this.newMessage,new Date,!0)),this.newMessage="";var e=document.querySelector(".chat-content");e&&setTimeout((function(){var t=e.querySelectorAll(".mat-list-item");e.scrollTop=e.scrollHeight+t[t.length-1].clientHeight}))}}},{key:"ngOnDestroy",value:function(){this.talks&&(this.talks.length=2)}}]),t}()).\u0275fac=function(t){return new(t||Q)(h.ac(g.a),h.ac(y))},Q.\u0275cmp=h.Ub({type:Q,selectors:[["app-chat"]],viewQuery:function(t,e){var c;1&t&&h.cd(T,!0),2&t&&h.Jc(c=h.pc())&&(e.sidenav=c.first)},hostBindings:function(t,e){1&t&&h.oc("resize",(function(t){return e.onWindowResize()}),!1,h.Mc)},features:[h.Lb([y])],decls:48,vars:16,consts:[[3,"title","hideBreadcrumb","hasBgImage"],["color","primary","fxLayout","row","fxLayoutAlign","space-between center",1,"px-2","chat-toolbar"],["fxLayout","row"],["mat-icon-button","",3,"click"],["fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","chat"],[1,"chat-container"],["autoFocus","false",1,"chat-sidenav","mat-elevation-z1",3,"opened","mode"],["sidenav",""],["perfectScrollbar","",1,"p-0","chat-sidenav-list"],[3,"click",4,"ngFor","ngForOf"],["perfectScrollbar","",1,"chat-content"],["class","p-0",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","h-100 empty",4,"ngIf"],["class","chat-actions",4,"ngIf"],["mode","over","position","end","autoFocus","false",1,"person-info-sidenav","mat-elevation-z1"],["personInfo",""],["perfectScrollbar","",1,"p-0","h-100"],[1,"bg-primary","w-100","text-center"],["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["class","py-2",3,"src",4,"ngIf"],["class","pb-3",4,"ngIf"],["matListIcon","",1,"secondary-text-color"],["matLine",""],["fxLayout","row","fxLayoutAlign","center center"],[1,"p-0"],["matListAvatar","",1,"author-img",3,"src"],[1,"author-name"],["mat-icon-button","",3,"matMenuTriggerFor"],["personMenuTrigger","matMenuTrigger"],["xPosition","before"],["personMenu","matMenu"],[3,"mouseleave"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[3,"click"],["matListAvatar","",3,"src"],["matLine","","fxLayout","row","fxLayoutAlign","none center",1,"secondary-text-color"],[3,"ngSwitch"],["class","chat-status-icon",4,"ngSwitchCase"],[1,"author-status"],[1,"chat-status-icon"],["class","talk-item",4,"ngFor","ngForOf"],[1,"talk-item"],["matLine","",1,"message"],[3,"ngClass"],["matLine","",1,"message-date"],["fxLayout","column","fxLayoutAlign","center center",1,"h-100","empty"],[1,"chat-actions"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"w-100"],["matInput","","placeholder","Enter your text...",3,"ngModel","keyup","ngModelChange"],["fxLayout","row","fxLayoutAlign","scenter center"],["mat-icon-button","","type","button"],["mat-mini-fab","","color","primary","type","button",3,"click"],[1,"py-2",3,"src"],[1,"pb-3"]],template:function(t,e){if(1&t){var c=h.hc();h.bc(0,"app-content-header",0),h.gc(1,"mat-toolbar",1),h.gc(2,"div",2),h.gc(3,"button",3),h.oc("click",(function(t){return h.Nc(c),h.Kc(12).toggle()})),h.gc(4,"mat-icon"),h.Xc(5,"list"),h.fc(),h.fc(),h.fc(),h.Vc(6,F,28,3,"div",4),h.fc(),h.gc(7,"div",5),h.gc(8,"div",6),h.gc(9,"mat-card",7),h.gc(10,"mat-drawer-container",8),h.gc(11,"mat-drawer",9,10),h.gc(13,"mat-nav-list",11),h.Vc(14,Y,12,8,"mat-list-item",12),h.fc(),h.fc(),h.gc(15,"div"),h.gc(16,"div",13),h.Vc(17,G,2,1,"mat-list",14),h.Vc(18,K,5,0,"div",15),h.fc(),h.Vc(19,W,11,1,"mat-card",16),h.fc(),h.gc(20,"mat-drawer",17,18),h.gc(22,"div",19),h.gc(23,"div",20),h.gc(24,"div",21),h.gc(25,"h2"),h.Xc(26,"Contact Info"),h.fc(),h.gc(27,"button",3),h.oc("click",(function(t){return h.Nc(c),h.Kc(21).toggle()})),h.gc(28,"mat-icon"),h.Xc(29,"close"),h.fc(),h.fc(),h.fc(),h.Vc(30,H,1,1,"img",22),h.Vc(31,E,2,1,"h2",23),h.fc(),h.gc(32,"mat-list"),h.gc(33,"mat-list-item"),h.gc(34,"mat-icon",24),h.Xc(35,"mail_outline"),h.fc(),h.gc(36,"h3",25),h.Xc(37,"author@gmail.com"),h.fc(),h.fc(),h.gc(38,"mat-list-item"),h.gc(39,"mat-icon",24),h.Xc(40,"call"),h.fc(),h.gc(41,"h3",25),h.Xc(42,"(202) 756-9756"),h.fc(),h.fc(),h.gc(43,"mat-list-item"),h.gc(44,"mat-icon",24),h.Xc(45,"location_on"),h.fc(),h.gc(46,"h3",25),h.Xc(47,"2903 Avenue Z, Brooklyn, NY"),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc(),h.fc()}2&t&&(h.Ob("pb-5"),h.zc("title","Chat")("hideBreadcrumb",!1)("hasBgImage",!0),h.Mb(6),h.zc("ngIf",e.currentChat),h.Mb(5),h.zc("opened",e.sidenavOpen)("mode",e.sidenavOpen?"side":"over"),h.Mb(3),h.zc("ngForOf",e.chats),h.Mb(2),h.Qb("actions-visible",e.talks),h.Mb(1),h.zc("ngIf",e.talks),h.Mb(1),h.zc("ngIf",!e.talks),h.Mb(1),h.zc("ngIf",e.talks),h.Mb(11),h.zc("ngIf",e.currentChat),h.Mb(1),h.zc("ngIf",e.currentChat))},directives:[w.a,C.a,x.c,x.b,k.b,O.a,a.n,x.a,_.a,P.b,P.a,z.g,s.b,a.m,z.a,z.d,z.c,X.j,z.b,L.c,L.d,L.a,a.p,a.q,a.l,I.a,S.b,A.b,o.c,o.o,o.r],pipes:[a.e],styles:[".chat-container[_ngcontent-%COMP%]{height:calc(100vh - 260px)}.chat-toolbar[_ngcontent-%COMP%]{background:transparent!important;height:40px;margin-top:-40px}.chat-toolbar[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]{width:34px;height:34px}.chat-toolbar[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.chat[_ngcontent-%COMP%]{border-radius:0}.chat[_ngcontent-%COMP%]   .chat-actions[_ngcontent-%COMP%]{padding:12px}.chat[_ngcontent-%COMP%]   .talk-item[_ngcontent-%COMP%]{padding:6px 0;height:100%}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{white-space:unset;text-overflow:unset}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:6px 10px;border-radius:4px;display:inline-block;font-size:14px}.chat[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%]{opacity:.8}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:220px;height:220px;width:220px;opacity:.4}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;opacity:.8}.chat-status-icon[_ngcontent-%COMP%]{font-size:14px;height:14px;width:14px;line-height:22px;margin-right:6px}.author-status[_ngcontent-%COMP%]{font-size:13px}.chat-sidenav[_ngcontent-%COMP%]{border-right:1px solid transparent;overflow:hidden}.chat-content[_ngcontent-%COMP%]{padding:12px;height:calc(100vh - 286px)}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - 366px)}.chat-sidenav-list[_ngcontent-%COMP%]{height:100%}.person-info-sidenav[_ngcontent-%COMP%]{width:280px}.person-info-sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400}.person-info-sidenav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%}@media(max-width:960px){.chat-container[_ngcontent-%COMP%]{height:calc(100vh - 242px)}.chat-content[_ngcontent-%COMP%]{height:calc(100vh - 266px)}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - 348px)}}"]}),Q);c.d(e,"routes",(function(){return R})),c.d(e,"ChatModule",(function(){return $}));var J,R=[{path:"",component:q,pathMatch:"full"}],$=((J=function t(){_classCallCheck(this,t)}).\u0275mod=h.Yb({type:J}),J.\u0275inj=h.Xb({factory:function(t){return new(t||J)},imports:[[a.c,i.f.forChild(R),o.j,s.c,r.a]]}),J)}}]);