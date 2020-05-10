function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yqEH:function(e,t,r){"use strict";r.r(t);var o,n=r("ofXK"),a=r("tyNb"),c=r("3Pt+"),i=r("PCNd"),l=r("Kj3r"),u=r("8fVf"),s=r("ySTs"),f=r("fXoL"),m=((o=function(){function e(t,r,o){_classCallCheck(this,e),this.componentFactoryResolver=t,this.applicationRef=r,this.injector=o}return _createClass(e,[{key:"addNewMenuItem",value:function(e,t,r){var o=new s.a(t[t.length-1].id+1,r.title,r.routerLink,r.href,r.icon,r.target,r.hasSubMenu,parseInt(r.parentId));t.push(o);var n=t.filter((function(e){return e.id==o.parentId}))[0];n&&(n.hasSubMenu=!0);var a=this.componentFactoryResolver.resolveComponentFactory(e).create(this.injector);this.applicationRef.attachView(a.hostView);var c=a.instance;c.menuItems=t,c.menuParentId=0;var i=a.hostView.rootNodes[0],l=document.getElementById("vertical-menu");l.replaceChild(i,l.children[0])}}]),e}()).\u0275fac=function(e){return new(e||o)(f.kc(f.l),f.kc(f.g),f.kc(f.w))},o.\u0275prov=f.Wb({token:o,factory:o.\u0275fac}),o),d=r("/RaO"),h=r("XuPb"),p=r("NObv"),b=r("dNgK"),g=r("C790"),v=r("XiUz"),k=r("Wp6s"),y=r("kmnG"),M=r("qFsG"),w=r("d3UM"),I=r("Qu3c"),C=r("bSwM"),V=r("QibW"),L=r("FKr1"),S=r("bTqV"),N=r("NFeN");function _(e,t){1&e&&(f.gc(0,"mat-error"),f.Xc(1,"Menu title is required"),f.fc())}function X(e,t){1&e&&(f.gc(0,"mat-error"),f.Xc(1,"Menu title isn't long enough, minimum of 3 characters"),f.fc())}function q(e,t){if(1&e&&(f.gc(0,"mat-option",20),f.gc(1,"mat-icon"),f.Xc(2),f.fc(),f.fc()),2&e){var r=t.$implicit;f.zc("value",r),f.Mb(2),f.Yc(r)}}function F(e,t){1&e&&(f.gc(0,"mat-error"),f.Xc(1,"Routerlink or href is required"),f.fc())}function x(e,t){1&e&&(f.gc(0,"mat-error"),f.Xc(1,"Href or routerlink is required"),f.fc())}function z(e,t){if(1&e&&(f.gc(0,"mat-option",20),f.Xc(1),f.fc()),2&e){var r=t.$implicit;f.zc("value",r.id),f.Mb(1),f.Zc(" ",r.title," ")}}var P,B=((P=function(){function e(t,r,o,n,a){_classCallCheck(this,e),this.appSettings=t,this.formBuilder=r,this.snackBar=o,this.menuService=n,this.dynamicMenuService=a,this.icons=["home","person","card_travel","delete","event","favorite","help"],this.settings=this.appSettings.settings,this.menuItems=this.menuService.getVerticalMenuItems()}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({title:["",c.v.compose([c.v.required,c.v.minLength(3)])],icon:null,routerLink:["",c.v.required],href:["",c.v.required],target:null,hasSubMenu:!1,parentId:0})}},{key:"ngAfterViewInit",value:function(){var e=this;this.form.valueChanges.pipe(Object(l.a)(500)).subscribe((function(t){t.routerLink&&""!=t.routerLink?(e.form.controls.href.setValue(null),e.form.controls.href.disable(),e.form.controls.href.clearValidators(),e.form.controls.target.setValue(null),e.form.controls.target.disable()):(e.form.controls.href.enable(),e.form.controls.href.setValidators([c.v.required]),e.form.controls.target.enable()),e.form.controls.href.updateValueAndValidity(),t.href&&""!=t.href?(e.form.controls.routerLink.setValue(null),e.form.controls.routerLink.disable(),e.form.controls.routerLink.clearValidators(),e.form.controls.hasSubMenu.setValue(!1),e.form.controls.hasSubMenu.disable()):(e.form.controls.routerLink.enable(),e.form.controls.routerLink.setValidators([c.v.required]),e.form.controls.hasSubMenu.enable()),e.form.controls.routerLink.updateValueAndValidity()}))}},{key:"onSubmit",value:function(e){this.form.valid&&(this.dynamicMenuService.addNewMenuItem(h.a,this.menuItems,e),this.snackBar.open("New menu item added successfully!",null,{duration:2e3}),this.form.reset({hasSubMenu:!1,parentId:0}))}}]),e}()).\u0275fac=function(e){return new(e||P)(f.ac(d.a),f.ac(c.d),f.ac(b.a),f.ac(u.a),f.ac(m))},P.\u0275cmp=f.Ub({type:P,selectors:[["app-dynamic-menu"]],hostVars:1,hostBindings:function(e,t){2&e&&f.bd("@blockTransition",void 0)},features:[f.Lb([m,u.a])],decls:34,vars:15,consts:[[3,"icon","title","desc","hideBreadcrumb","hasBgImage"],["fxLayout","row wrap","fxLayoutAlign","center",1,"p-2"],["fxFlex","100","fxFlex.gt-sm","50","fxFlex.sm","60",1,"p-2"],[1,"block"],[3,"formGroup","ngSubmit"],[1,"w-100"],["matInput","","placeholder","Title","formControlName","title"],[4,"ngIf"],["placeholder","Icon","formControlName","icon"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","RouterLink","formControlName","routerLink","matTooltip","e.g. /dashboard","matTooltipPosition","after"],["formControlName","hasSubMenu"],["matInput","","placeholder","Href","formControlName","href","matTooltip","e.g. http://themeseason.com","matTooltipPosition","after"],["formControlName","target"],["value","_blank"],["value","_self",1,"mx-2"],["placeholder","Parent menu","formControlName","parentId"],["value","0"],["fxLayout","row","fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(e,t){1&e&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card",3),f.gc(4,"mat-card-content"),f.gc(5,"form",4),f.oc("ngSubmit",(function(e){return t.onSubmit(t.form.value)})),f.gc(6,"mat-form-field",5),f.bc(7,"input",6),f.Vc(8,_,2,0,"mat-error",7),f.Vc(9,X,2,0,"mat-error",7),f.fc(),f.gc(10,"mat-form-field",5),f.gc(11,"mat-select",8),f.Vc(12,q,3,2,"mat-option",9),f.fc(),f.fc(),f.gc(13,"mat-form-field",5),f.bc(14,"input",10),f.Vc(15,F,2,0,"mat-error",7),f.fc(),f.gc(16,"mat-checkbox",11),f.Xc(17,"Has sub menu"),f.fc(),f.gc(18,"mat-form-field",5),f.bc(19,"input",12),f.Vc(20,x,2,0,"mat-error",7),f.fc(),f.gc(21,"mat-radio-group",13),f.gc(22,"mat-radio-button",14),f.Xc(23,"_blank"),f.fc(),f.gc(24,"mat-radio-button",15),f.Xc(25,"_self"),f.fc(),f.fc(),f.gc(26,"mat-form-field",5),f.gc(27,"mat-select",16),f.gc(28,"mat-option",17),f.Xc(29,"-- Select Parent Menu --"),f.fc(),f.Vc(30,z,2,2,"mat-option",9),f.fc(),f.fc(),f.gc(31,"div",18),f.gc(32,"button",19),f.Xc(33,"Add New Menu Item"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&e&&(f.Ob("pb-4"),f.zc("icon","format_list_bulleted")("title","Dynamic menu")("desc","Create and add menu items dynamically using following approach.")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(5),f.zc("formGroup",t.form),f.Mb(3),f.zc("ngIf",null==t.form.controls.title.errors?null:t.form.controls.title.errors.required),f.Mb(1),f.zc("ngIf",t.form.controls.title.hasError("minlength")),f.Mb(3),f.zc("ngForOf",t.icons),f.Mb(3),f.zc("ngIf",null==t.form.controls.routerLink.errors?null:t.form.controls.routerLink.errors.required),f.Mb(5),f.zc("ngIf",null==t.form.controls.href.errors?null:t.form.controls.href.errors.required),f.Mb(10),f.zc("ngForOf",t.menuItems),f.Mb(2),f.zc("disabled",!t.form.valid))},directives:[g.a,v.c,v.b,v.a,k.a,k.c,c.w,c.p,c.h,y.b,M.b,c.c,c.o,c.g,n.n,w.a,n.m,I.a,C.a,V.b,V.a,L.n,S.b,y.a,N.a],encapsulation:2,data:{animation:[p.a]}}),P);r.d(t,"routes",(function(){return T})),r.d(t,"DynamicMenuModule",(function(){return j}));var O,T=[{path:"",component:B,pathMatch:"full"}],j=((O=function e(){_classCallCheck(this,e)}).\u0275mod=f.Yb({type:O}),O.\u0275inj=f.Xb({factory:function(e){return new(e||O)},imports:[[n.c,c.j,c.t,a.f.forChild(T),i.a]]}),O)}}]);