(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{j6Lp:function(c,t,e){"use strict";e.r(t);var a=e("ofXK"),o=e("tyNb"),n=e("3Pt+"),i=e("bFKe"),r=e("PCNd"),l=e("JX91"),m=e("lJxs"),d=e("/RaO"),f=e("fXoL"),g=e("C790"),s=e("XiUz"),u=e("Wp6s"),p=e("kmnG"),h=e("qFsG"),b=e("/1cH"),v=e("FKr1");function M(c,t){if(1&c&&(f.gc(0,"mat-option",7),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c),f.Mb(1),f.Zc(" ",c," ")}}function k(c,t){if(1&c&&(f.gc(0,"mat-option",7),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c),f.Mb(1),f.Zc(" ",c," ")}}let x=(()=>{class c{constructor(c){this.appSettings=c,this.myControl=new n.e,this.options=["One","Two","Three"],this.filteredControl=new n.e,this.settings=this.appSettings.settings}ngOnInit(){this.filteredOptions=this.filteredControl.valueChanges.pipe(Object(l.a)(""),Object(m.a)(c=>this.filter(c)))}filter(c){return this.options.filter(t=>0===t.toLowerCase().indexOf(c.toLowerCase()))}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-autocomplete"]],decls:29,vars:14,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center"],["type","text","placeholder","Pick one","aria-label","Number","matInput","",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(c,t){if(1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header",3),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Simple autocomplete"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content",3),f.gc(9,"form"),f.gc(10,"mat-form-field"),f.bc(11,"input",4),f.gc(12,"mat-autocomplete",null,5),f.Vc(14,M,2,2,"mat-option",6),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(15,"div",2),f.gc(16,"mat-card"),f.gc(17,"mat-card-header",3),f.gc(18,"mat-card-subtitle"),f.gc(19,"h2"),f.Xc(20,"Filter autocomplete"),f.fc(),f.fc(),f.fc(),f.gc(21,"mat-card-content",3),f.gc(22,"form"),f.gc(23,"mat-form-field"),f.bc(24,"input",4),f.gc(25,"mat-autocomplete",null,5),f.Vc(27,k,2,2,"mat-option",6),f.tc(28,"async"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c){const c=f.Kc(13);f.Ob("pb-4"),f.zc("icon","short_text")("title","Autocomplete")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(11),f.zc("formControl",t.myControl)("matAutocomplete",c),f.Mb(3),f.zc("ngForOf",t.options),f.Mb(10),f.zc("formControl",t.filteredControl)("matAutocomplete",c),f.Mb(3),f.zc("ngForOf",f.uc(28,12,t.filteredOptions))}},directives:[g.a,s.c,s.a,u.a,u.d,s.b,u.g,u.c,n.w,n.p,n.q,p.b,h.b,n.c,b.c,n.o,n.f,b.a,a.m,v.n],pipes:[a.b],encapsulation:2}),c})();var z=e("bSwM"),X=e("QibW");let C=(()=>{class c{constructor(c){this.appSettings=c,this.checked=!1,this.indeterminate=!1,this.labelPosition="after",this.disabled=!1,this.settings=this.appSettings.settings}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-checkbox"]],decls:32,vars:14,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"py-3"],[1,"mx-2",3,"ngModel","ngModelChange"],[1,"mx-2"],[3,"ngModel","ngModelChange"],["value","after",1,"mx-2"],["value","before",1,"mx-2"],[1,"py-3","mx-2"],[1,"mx-2",3,"ngModel","indeterminate","labelPosition","disabled","ngModelChange","indeterminateChange"]],template:function(c,t){1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header"),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Checkbox configuration"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"section",3),f.gc(10,"mat-checkbox",4),f.oc("ngModelChange",(function(c){return t.checked=c})),f.Xc(11,"Checked"),f.fc(),f.gc(12,"mat-checkbox",4),f.oc("ngModelChange",(function(c){return t.indeterminate=c})),f.Xc(13,"Indeterminate"),f.fc(),f.fc(),f.gc(14,"section",3),f.gc(15,"label",5),f.Xc(16,"Label position:"),f.fc(),f.gc(17,"mat-radio-group",6),f.oc("ngModelChange",(function(c){return t.labelPosition=c})),f.gc(18,"mat-radio-button",7),f.Xc(19,"After"),f.fc(),f.gc(20,"mat-radio-button",8),f.Xc(21,"Before"),f.fc(),f.fc(),f.fc(),f.gc(22,"section",3),f.gc(23,"mat-checkbox",4),f.oc("ngModelChange",(function(c){return t.disabled=c})),f.Xc(24,"Disabled"),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(25,"mat-card"),f.gc(26,"mat-card-content"),f.gc(27,"h2",9),f.Xc(28,"Result"),f.fc(),f.gc(29,"section",3),f.gc(30,"mat-checkbox",10),f.oc("ngModelChange",(function(c){return t.checked=c}))("indeterminateChange",(function(c){return t.indeterminate=c})),f.Xc(31," I'm a checkbox "),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c&&(f.Ob("pb-4"),f.zc("icon","check_box")("title","Checkbox")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(10),f.zc("ngModel",t.checked),f.Mb(2),f.zc("ngModel",t.indeterminate),f.Mb(5),f.zc("ngModel",t.labelPosition),f.Mb(6),f.zc("ngModel",t.disabled),f.Mb(7),f.zc("ngModel",t.checked)("indeterminate",t.indeterminate)("labelPosition",t.labelPosition)("disabled",t.disabled))},directives:[g.a,s.c,u.a,u.d,u.g,u.c,z.a,n.o,n.r,X.b,X.a],encapsulation:2}),c})();var w=e("iadO"),I=e("bTqV");function y(c,t){if(1&c&&(f.gc(0,"div"),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.Mb(1),f.Yc(c)}}let S=(()=>{class c{constructor(c){this.appSettings=c,this.startDate=new Date(1990,0,1),this.minDate=new Date(2010,0,1),this.maxDate=new Date(2020,0,1),this.myFilter=c=>{const t=c.getDay();return 0!==t&&6!==t},this.events=[],this.settings=this.appSettings.settings}addEvent(c,t){this.events.push(`${c}: ${t.value}`)}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-datepicker"]],decls:111,vars:30,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center"],["matInput","","placeholder","Choose a date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["startView","year",3,"startAt"],["picker2",""],[1,"example-full-width"],["matInput","","placeholder","Choose a date",3,"min","max","matDatepicker"],["picker3",""],["matInput","","placeholder","Choose a date",3,"matDatepickerFilter","matDatepicker"],["picker4",""],["fxLayout","column","fxLayoutAlign","center center"],["matInput","","placeholder","Input & change events",3,"matDatepicker","dateInput","dateChange"],["picker5",""],["perfectScrollbar","",1,"w-100","mat-elevation-z4","p-1","events-list"],[4,"ngFor","ngForOf"],["matInput","","placeholder","Completely disabled","disabled","",3,"matDatepicker"],["dp1",""],["matInput","","placeholder","Popup disabled",3,"matDatepicker"],["matSuffix","","disabled","",3,"for"],["dp2",""],["matInput","","placeholder","Input disabled","disabled","",3,"matDatepicker"],["disabled","false"],["dp3",""],["touchUi","true"],["picker6",""],["fxLayoutAlign","center center"],["picker7",""],["mat-raised-button","",3,"click"]],template:function(c,t){if(1&c){const c=f.hc();f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header",3),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Basic datepicker"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content",3),f.gc(9,"mat-form-field"),f.bc(10,"input",4),f.bc(11,"mat-datepicker-toggle",5),f.bc(12,"mat-datepicker",null,6),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(14,"div",2),f.gc(15,"mat-card"),f.gc(16,"mat-card-header",3),f.gc(17,"mat-card-subtitle"),f.gc(18,"h2"),f.Xc(19,"Datepicker start date"),f.fc(),f.fc(),f.fc(),f.gc(20,"mat-card-content",3),f.gc(21,"mat-form-field"),f.bc(22,"input",4),f.bc(23,"mat-datepicker-toggle",5),f.bc(24,"mat-datepicker",7,8),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(26,"div",2),f.gc(27,"mat-card"),f.gc(28,"mat-card-header",3),f.gc(29,"mat-card-subtitle"),f.gc(30,"h2"),f.Xc(31,"Datepicker with min & max validation"),f.fc(),f.fc(),f.fc(),f.gc(32,"mat-card-content",3),f.gc(33,"mat-form-field",9),f.bc(34,"input",10),f.bc(35,"mat-datepicker-toggle",5),f.bc(36,"mat-datepicker",null,11),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(38,"div",2),f.gc(39,"mat-card"),f.gc(40,"mat-card-header",3),f.gc(41,"mat-card-subtitle"),f.gc(42,"h2"),f.Xc(43,"Datepicker with filter validation"),f.fc(),f.fc(),f.fc(),f.gc(44,"mat-card-content",3),f.gc(45,"mat-form-field",9),f.bc(46,"input",12),f.bc(47,"mat-datepicker-toggle",5),f.bc(48,"mat-datepicker",null,13),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(50,"div",2),f.gc(51,"mat-card"),f.gc(52,"mat-card-header",3),f.gc(53,"mat-card-subtitle"),f.gc(54,"h2"),f.Xc(55,"Datepicker input and change events"),f.fc(),f.fc(),f.fc(),f.gc(56,"mat-card-content",14),f.gc(57,"mat-form-field"),f.gc(58,"input",15),f.oc("dateInput",(function(c){return t.addEvent("input",c)}))("dateChange",(function(c){return t.addEvent("change",c)})),f.fc(),f.bc(59,"mat-datepicker-toggle",5),f.bc(60,"mat-datepicker",null,16),f.fc(),f.gc(62,"div",17),f.Vc(63,y,2,1,"div",18),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(64,"div",2),f.gc(65,"mat-card"),f.gc(66,"mat-card-header",3),f.gc(67,"mat-card-subtitle"),f.gc(68,"h2"),f.Xc(69,"Disabled datepicker"),f.fc(),f.fc(),f.fc(),f.gc(70,"mat-card-content",14),f.gc(71,"mat-form-field"),f.bc(72,"input",19),f.bc(73,"mat-datepicker-toggle",5),f.bc(74,"mat-datepicker",null,20),f.fc(),f.gc(76,"mat-form-field"),f.bc(77,"input",21),f.bc(78,"mat-datepicker-toggle",22),f.bc(79,"mat-datepicker",null,23),f.fc(),f.gc(81,"mat-form-field"),f.bc(82,"input",24),f.bc(83,"mat-datepicker-toggle",5),f.bc(84,"mat-datepicker",25,26),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(86,"div",2),f.gc(87,"mat-card"),f.gc(88,"mat-card-header",3),f.gc(89,"mat-card-subtitle"),f.gc(90,"h2"),f.Xc(91,"Datepicker touch UI"),f.fc(),f.fc(),f.fc(),f.gc(92,"mat-card-content",3),f.gc(93,"mat-form-field"),f.bc(94,"input",4),f.bc(95,"mat-datepicker-toggle",5),f.bc(96,"mat-datepicker",27,28),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(98,"div",2),f.gc(99,"mat-card"),f.gc(100,"mat-card-header",3),f.gc(101,"mat-card-subtitle"),f.gc(102,"h2"),f.Xc(103,"Datepicker open method"),f.fc(),f.fc(),f.fc(),f.gc(104,"mat-card-content",29),f.gc(105,"mat-form-field"),f.bc(106,"input",4),f.bc(107,"mat-datepicker",null,30),f.fc(),f.gc(109,"button",31),f.oc("click",(function(t){return f.Nc(c),f.Kc(108).open()})),f.Xc(110,"Open"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()}if(2&c){const c=f.Kc(13),e=f.Kc(25),a=f.Kc(37),o=f.Kc(49),n=f.Kc(61),i=f.Kc(75),r=f.Kc(80),l=f.Kc(85),m=f.Kc(97),d=f.Kc(108);f.Ob("pb-4"),f.zc("icon","today")("title","Datepicker")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(10),f.zc("matDatepicker",c),f.Mb(1),f.zc("for",c),f.Mb(11),f.zc("matDatepicker",e),f.Mb(1),f.zc("for",e),f.Mb(1),f.zc("startAt",t.startDate),f.Mb(10),f.zc("min",t.minDate)("max",t.maxDate)("matDatepicker",a),f.Mb(1),f.zc("for",a),f.Mb(11),f.zc("matDatepickerFilter",t.myFilter)("matDatepicker",o),f.Mb(1),f.zc("for",o),f.Mb(11),f.zc("matDatepicker",n),f.Mb(1),f.zc("for",n),f.Mb(4),f.zc("ngForOf",t.events),f.Mb(9),f.zc("matDatepicker",i),f.Mb(1),f.zc("for",i),f.Mb(4),f.zc("matDatepicker",r),f.Mb(1),f.zc("for",r),f.Mb(4),f.zc("matDatepicker",l),f.Mb(1),f.zc("for",l),f.Mb(11),f.zc("matDatepicker",m),f.Mb(1),f.zc("for",m),f.Mb(11),f.zc("matDatepicker",d)}},directives:[g.a,s.c,s.a,u.a,u.d,s.b,u.g,u.c,p.b,h.b,w.b,w.d,p.i,w.a,i.b,a.m,I.b],styles:[".events-list[_ngcontent-%COMP%]{height:97px}"]}),c})();var F=e("d3UM"),L=e("NFeN");function B(c,t){if(1&c&&(f.gc(0,"mat-error"),f.Xc(1),f.fc()),2&c){const c=f.sc();f.Mb(1),f.Yc(c.getErrorMessage())}}function O(c,t){1&c&&(f.gc(0,"mat-error"),f.Xc(1,"Min size: 10px"),f.fc())}let D=(()=>{class c{constructor(c,t){this.appSettings=c,this.formBuilder=t,this.email=new n.e("",[n.v.required,n.v.email]),this.hide=!0,this.settings=this.appSettings.settings}ngOnInit(){this.options=this.formBuilder.group({hideRequired:!1,floatLabel:"auto"}),this.themingForm=this.formBuilder.group({color:"primary",fontSize:[16,n.v.min(10)]})}getErrorMessage(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}getFontSize(){return Math.max(10,this.themingForm.value.fontSize)}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a),f.ac(n.d))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-form-field"]],decls:116,vars:24,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center"],["fxLayout","column","fxLayoutAlign","center"],["matInput","","placeholder","Input"],["matInput","","placeholder","Textarea"],["placeholder","Select"],["value","option"],[3,"formGroup"],["formControlName","hideRequired"],[1,"py-1"],["formControlName","floatLabel"],["value","auto",1,"mx-2"],["value","always",1,"mx-2"],["value","never",1,"mx-2"],[3,"hideRequiredMarker","floatLabel"],["matInput","","placeholder","Simple placeholder","required",""],["required",""],["hintLabel","Max 10 characters"],["matInput","","maxlength","10","placeholder","Enter some input"],["input",""],["align","end"],["placeholder","Select me"],["matInput","","placeholder","Enter your email","required","",3,"formControl"],[4,"ngIf"],["matInput","","placeholder","Enter your password",3,"type"],["matSuffix","",3,"click"],["matInput","","placeholder","Amount","type","number"],["matPrefix",""],["matSuffix",""],["fxLayout","column","fxLayoutAlign","center",3,"formGroup"],[3,"color"],["placeholder","Color","formControlName","color"],["value","primary"],["value","accent"],["value","warn"],["matInput","","type","number","placeholder","Font size (px)","formControlName","fontSize","min","10"]],template:function(c,t){if(1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header",3),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Simple form field"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content",4),f.gc(9,"mat-form-field"),f.bc(10,"input",5),f.fc(),f.gc(11,"mat-form-field"),f.bc(12,"textarea",6),f.fc(),f.gc(13,"mat-form-field"),f.gc(14,"mat-select",7),f.gc(15,"mat-option",8),f.Xc(16,"Option"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(17,"div",2),f.gc(18,"mat-card"),f.gc(19,"mat-card-header",3),f.gc(20,"mat-card-subtitle"),f.gc(21,"h2"),f.Xc(22,"Form field with placeholder"),f.fc(),f.fc(),f.fc(),f.gc(23,"mat-card-content",4),f.gc(24,"form",9),f.gc(25,"mat-checkbox",10),f.Xc(26,"Hide required marker"),f.fc(),f.gc(27,"div",11),f.gc(28,"label"),f.Xc(29,"Float label: "),f.fc(),f.gc(30,"mat-radio-group",12),f.gc(31,"mat-radio-button",13),f.Xc(32,"Auto"),f.fc(),f.gc(33,"mat-radio-button",14),f.Xc(34,"Always"),f.fc(),f.gc(35,"mat-radio-button",15),f.Xc(36,"Never"),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(37,"mat-form-field",16),f.bc(38,"input",17),f.fc(),f.gc(39,"mat-form-field",16),f.gc(40,"mat-select",18),f.gc(41,"mat-option"),f.Xc(42,"-- None --"),f.fc(),f.gc(43,"mat-option",8),f.Xc(44,"Option"),f.fc(),f.fc(),f.gc(45,"mat-placeholder"),f.gc(46,"mat-icon"),f.Xc(47,"favorite"),f.fc(),f.gc(48,"b"),f.Xc(49," Fancy"),f.fc(),f.gc(50,"i"),f.Xc(51," placeholder"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(52,"div",2),f.gc(53,"mat-card"),f.gc(54,"mat-card-header",3),f.gc(55,"mat-card-subtitle"),f.gc(56,"h2"),f.Xc(57,"Form field with hints"),f.fc(),f.fc(),f.fc(),f.gc(58,"mat-card-content",4),f.gc(59,"mat-form-field",19),f.bc(60,"input",20,21),f.gc(62,"mat-hint",22),f.Xc(63),f.fc(),f.fc(),f.gc(64,"mat-form-field"),f.gc(65,"mat-select",23),f.gc(66,"mat-option",8),f.Xc(67,"Option"),f.fc(),f.fc(),f.gc(68,"mat-hint",22),f.Xc(69,"Here's the dropdown arrow ^"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(70,"div",2),f.gc(71,"mat-card"),f.gc(72,"mat-card-header",3),f.gc(73,"mat-card-subtitle"),f.gc(74,"h2"),f.Xc(75,"Form field with error messages"),f.fc(),f.fc(),f.fc(),f.gc(76,"mat-card-content",4),f.gc(77,"mat-form-field"),f.bc(78,"input",24),f.Vc(79,B,2,1,"mat-error",25),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(80,"div",2),f.gc(81,"mat-card"),f.gc(82,"mat-card-header",3),f.gc(83,"mat-card-subtitle"),f.gc(84,"h2"),f.Xc(85,"Form field with prefix & suffix"),f.fc(),f.fc(),f.fc(),f.gc(86,"mat-card-content",4),f.gc(87,"mat-form-field"),f.bc(88,"input",26),f.gc(89,"mat-icon",27),f.oc("click",(function(c){return t.hide=!t.hide})),f.Xc(90),f.fc(),f.fc(),f.gc(91,"mat-form-field"),f.bc(92,"input",28),f.gc(93,"span",29),f.Xc(94,"$\xa0"),f.fc(),f.gc(95,"span",30),f.Xc(96,".00"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(97,"div",2),f.gc(98,"mat-card"),f.gc(99,"mat-card-header",3),f.gc(100,"mat-card-subtitle"),f.gc(101,"h2"),f.Xc(102,"Form field theming"),f.fc(),f.fc(),f.fc(),f.gc(103,"mat-card-content"),f.gc(104,"form",31),f.gc(105,"mat-form-field",32),f.gc(106,"mat-select",33),f.gc(107,"mat-option",34),f.Xc(108,"Primary"),f.fc(),f.gc(109,"mat-option",35),f.Xc(110,"Accent"),f.fc(),f.gc(111,"mat-option",36),f.Xc(112,"Warn"),f.fc(),f.fc(),f.fc(),f.gc(113,"mat-form-field",32),f.bc(114,"input",37),f.Vc(115,O,2,0,"mat-error",25),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c){const c=f.Kc(61);var e;const a=null==(e=t.themingForm.get("fontSize"))?null:e.invalid;f.Ob("pb-4"),f.zc("icon","view_stream")("title","Form field")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(24),f.zc("formGroup",t.options),f.Mb(13),f.zc("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),f.Mb(2),f.zc("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),f.Mb(24),f.Zc("",(null==c.value?null:c.value.length)||0,"/10"),f.Mb(15),f.zc("formControl",t.email),f.Mb(1),f.zc("ngIf",t.email.invalid),f.Mb(9),f.zc("type",t.hide?"password":"text"),f.Mb(2),f.Yc(t.hide?"visibility":"visibility_off"),f.Mb(2),f.Uc("text-align","right"),f.Mb(12),f.Uc("font-size",t.getFontSize(),"px"),f.zc("formGroup",t.themingForm),f.Mb(1),f.zc("color",t.themingForm.value.color),f.Mb(8),f.zc("color",t.themingForm.value.color),f.Mb(2),f.zc("ngIf",a)}},directives:[g.a,s.c,u.a,u.d,s.b,u.g,u.c,p.b,h.b,F.a,v.n,n.w,n.p,n.h,z.a,n.o,n.g,X.b,X.a,p.g,L.a,p.e,n.c,n.u,n.f,a.n,p.i,p.h,n.s,p.a],encapsulation:2}),c})();function V(c,t){1&c&&(f.gc(0,"mat-error"),f.Xc(1,"Please enter a valid email address"),f.fc())}function A(c,t){1&c&&(f.gc(0,"mat-error"),f.Xc(1,"Email is "),f.gc(2,"strong"),f.Xc(3,"required"),f.fc(),f.fc())}function P(c,t){if(1&c){const c=f.hc();f.gc(0,"button",24),f.oc("click",(function(t){return f.Nc(c),f.sc().value=""})),f.gc(1,"mat-icon"),f.Xc(2,"close"),f.fc(),f.fc()}}let T=(()=>{class c{constructor(c){this.appSettings=c,this.emailFormControl=new n.e("",[n.v.required,n.v.email]),this.matcher=new q,this.value="Clear me",this.settings=this.appSettings.settings}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-input"]],decls:84,vars:13,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center"],["fxLayout","column","fxLayoutAlign","center"],["matInput","","placeholder","Favorite food","value","Sushi"],["matInput","","placeholder","Leave a comment"],["matInput","","placeholder","Email",3,"formControl","errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Autosize textarea","matTextareaAutosize","","matAutosizeMinRows","2","matAutosizeMaxRows","5"],["matInput","","type","text","placeholder","Clearable input",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["matInput","","placeholder","Company (disabled)","disabled","","value","Google"],["cellspacing","0",1,"w-100"],[1,"w-100"],["matInput","","placeholder","First name"],["matInput","","placeholder","Long Last Name That Will Be Truncated"],["matInput","","placeholder","Address"],["matInput","","placeholder","Address 2"],["matInput","","placeholder","City"],["matInput","","placeholder","State"],["matInput","","maxlength","5","placeholder","Postal Code","value","94043"],["postalCode",""],["align","end"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(c,t){if(1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header",3),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Basic Inputs"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"form",4),f.gc(10,"mat-form-field"),f.bc(11,"input",5),f.fc(),f.gc(12,"mat-form-field"),f.bc(13,"textarea",6),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(14,"div",2),f.gc(15,"mat-card"),f.gc(16,"mat-card-header",3),f.gc(17,"mat-card-subtitle"),f.gc(18,"h2"),f.Xc(19,"Input with a custom ErrorStateMatcher"),f.fc(),f.fc(),f.fc(),f.gc(20,"mat-card-content"),f.gc(21,"form",4),f.gc(22,"mat-form-field"),f.bc(23,"input",7),f.gc(24,"mat-hint"),f.Xc(25,"Errors appear instantly!"),f.fc(),f.Vc(26,V,2,0,"mat-error",8),f.Vc(27,A,4,0,"mat-error",8),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(28,"div",2),f.gc(29,"mat-card"),f.gc(30,"mat-card-header",3),f.gc(31,"mat-card-subtitle"),f.gc(32,"h2"),f.Xc(33,"Auto-resizing textarea"),f.fc(),f.fc(),f.fc(),f.gc(34,"mat-card-content",4),f.gc(35,"mat-form-field"),f.bc(36,"textarea",9),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(37,"div",2),f.gc(38,"mat-card"),f.gc(39,"mat-card-header",3),f.gc(40,"mat-card-subtitle"),f.gc(41,"h2"),f.Xc(42,"Input with a clear button"),f.fc(),f.fc(),f.fc(),f.gc(43,"mat-card-content",4),f.gc(44,"mat-form-field"),f.gc(45,"input",10),f.oc("ngModelChange",(function(c){return t.value=c})),f.fc(),f.Vc(46,P,3,0,"button",11),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(47,"div",2),f.gc(48,"mat-card"),f.gc(49,"mat-card-header",3),f.gc(50,"mat-card-subtitle"),f.gc(51,"h2"),f.Xc(52,"Inputs in a form"),f.fc(),f.fc(),f.fc(),f.gc(53,"mat-card-content"),f.gc(54,"form",4),f.gc(55,"mat-form-field"),f.bc(56,"input",12),f.fc(),f.gc(57,"table",13),f.gc(58,"tr"),f.gc(59,"td"),f.gc(60,"mat-form-field",14),f.bc(61,"input",15),f.fc(),f.fc(),f.gc(62,"td"),f.gc(63,"mat-form-field",14),f.bc(64,"input",16),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(65,"mat-form-field",14),f.gc(66,"textarea",17),f.Xc(67,"1600 Amphitheatre Pkwy"),f.fc(),f.fc(),f.gc(68,"mat-form-field",14),f.bc(69,"textarea",18),f.fc(),f.gc(70,"table",13),f.gc(71,"tr"),f.gc(72,"td"),f.gc(73,"mat-form-field",14),f.bc(74,"input",19),f.fc(),f.fc(),f.gc(75,"td"),f.gc(76,"mat-form-field",14),f.bc(77,"input",20),f.fc(),f.fc(),f.gc(78,"td"),f.gc(79,"mat-form-field",14),f.bc(80,"input",21,22),f.gc(82,"mat-hint",23),f.Xc(83),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c){const c=f.Kc(81);f.Ob("pb-4"),f.zc("icon","input")("title","Inputs")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(23),f.zc("formControl",t.emailFormControl)("errorStateMatcher",t.matcher),f.Mb(3),f.zc("ngIf",t.emailFormControl.hasError("email")&&!t.emailFormControl.hasError("required")),f.Mb(1),f.zc("ngIf",t.emailFormControl.hasError("required")),f.Mb(18),f.zc("ngModel",t.value),f.Mb(1),f.zc("ngIf",t.value),f.Mb(37),f.Zc("",c.value.length," / 5")}},directives:[g.a,s.c,u.a,u.d,s.b,u.g,u.c,n.w,n.p,n.q,p.b,h.b,n.c,n.o,n.f,p.e,a.n,h.d,n.r,p.a,I.b,p.i,L.a],encapsulation:2}),c})();class q{isErrorState(c,t){return!!(c&&c.invalid&&(c.dirty||c.touched||t&&t.submitted))}}function E(c,t){if(1&c&&(f.gc(0,"mat-radio-button",8),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c),f.Mb(1),f.Zc(" ",c," ")}}let N=(()=>{class c{constructor(c){this.appSettings=c,this.seasons=["Winter","Spring","Summer","Autumn"],this.settings=this.appSettings.settings}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-radio-button"]],decls:27,vars:9,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["value","1",1,"mx-2"],["value","2",1,"mx-2"],["fxLayout","column","fxLayoutAlign","center",3,"ngModel","ngModelChange"],["class","season-item mx-2",3,"value",4,"ngFor","ngForOf"],[1,"pt-3","mx-2"],[1,"season-item","mx-2",3,"value"]],template:function(c,t){1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header"),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Basic radios"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"mat-radio-group"),f.gc(10,"mat-radio-button",3),f.Xc(11,"Option 1"),f.fc(),f.gc(12,"mat-radio-button",4),f.Xc(13,"Option 2"),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(14,"div",2),f.gc(15,"mat-card"),f.gc(16,"mat-card-header"),f.gc(17,"mat-card-subtitle"),f.gc(18,"h2"),f.Xc(19,"Radios with ngModel"),f.fc(),f.fc(),f.fc(),f.gc(20,"mat-card-content"),f.gc(21,"mat-radio-group",5),f.oc("ngModelChange",(function(c){return t.favoriteSeason=c})),f.Vc(22,E,2,2,"mat-radio-button",6),f.fc(),f.gc(23,"div",7),f.Xc(24,"Your favorite season is: "),f.gc(25,"b"),f.Xc(26),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c&&(f.Ob("pb-4"),f.zc("icon","radio_button_checked")("title","Radio button")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(21),f.zc("ngModel",t.favoriteSeason),f.Mb(1),f.zc("ngForOf",t.seasons),f.Mb(4),f.Zc(" ",t.favoriteSeason," "))},directives:[g.a,s.c,u.a,u.d,u.g,u.c,X.b,X.a,s.b,n.o,n.r,a.m],styles:[".season-item[_ngcontent-%COMP%]{margin-bottom:6px}"]}),c})();function K(c,t){if(1&c&&(f.gc(0,"mat-option",11),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c.value),f.Mb(1),f.Zc(" ",c.viewValue," ")}}function R(c,t){if(1&c&&(f.gc(0,"mat-option",11),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c.value),f.Mb(1),f.Zc(" ",c.viewValue," ")}}function U(c,t){if(1&c&&(f.gc(0,"mat-optgroup",12),f.Vc(1,R,2,2,"mat-option",5),f.fc()),2&c){const c=t.$implicit;f.zc("label",c.name)("disabled",c.disabled),f.Mb(1),f.zc("ngForOf",c.pokemon)}}function _(c,t){if(1&c&&(f.gc(0,"mat-option",11),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c),f.Mb(1),f.Yc(c)}}function $(c,t){if(1&c&&(f.gc(0,"small"),f.Xc(1),f.fc()),2&c){const c=f.sc();f.Mb(1),f.Zc(" (+",c.toppings2.value.length-1," others) ")}}function G(c,t){if(1&c&&(f.gc(0,"mat-option",11),f.Xc(1),f.fc()),2&c){const c=t.$implicit;f.zc("value",c),f.Mb(1),f.Yc(c)}}let Z=(()=>{class c{constructor(c){this.appSettings=c,this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}],this.pokemonControl=new n.e,this.pokemonGroups=[{name:"Grass",pokemon:[{value:"bulbasaur-0",viewValue:"Bulbasaur"},{value:"oddish-1",viewValue:"Oddish"},{value:"bellsprout-2",viewValue:"Bellsprout"}]},{name:"Water",pokemon:[{value:"squirtle-3",viewValue:"Squirtle"},{value:"psyduck-4",viewValue:"Psyduck"},{value:"horsea-5",viewValue:"Horsea"}]},{name:"Fire",disabled:!0,pokemon:[{value:"charmander-6",viewValue:"Charmander"},{value:"vulpix-7",viewValue:"Vulpix"},{value:"flareon-8",viewValue:"Flareon"}]},{name:"Psychic",pokemon:[{value:"mew-9",viewValue:"Mew"},{value:"mewtwo-10",viewValue:"Mewtwo"}]}],this.toppings=new n.e,this.toppingList=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.toppings2=new n.e,this.toppingList2=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.settings=this.appSettings.settings}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-select"]],decls:51,vars:17,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"mx-2"],["placeholder","Favorite food","name","food",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"pt-3","mx-2"],["placeholder","Pokemon",3,"formControl"],[3,"label","disabled",4,"ngFor","ngForOf"],["placeholder","Toppings","multiple","",3,"formControl"],[4,"ngIf"],[3,"value"],[3,"label","disabled"]],template:function(c,t){1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header"),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Basic select"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"mat-form-field",3),f.gc(10,"mat-select",4),f.oc("ngModelChange",(function(c){return t.selectedValue=c})),f.Vc(11,K,2,2,"mat-option",5),f.fc(),f.fc(),f.gc(12,"p",6),f.Xc(13," Selected value: "),f.gc(14,"b"),f.Xc(15),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(16,"div",2),f.gc(17,"mat-card"),f.gc(18,"mat-card-header"),f.gc(19,"mat-card-subtitle"),f.gc(20,"h2"),f.Xc(21,"Select with option groups"),f.fc(),f.fc(),f.fc(),f.gc(22,"mat-card-content"),f.gc(23,"mat-form-field",3),f.gc(24,"mat-select",7),f.gc(25,"mat-option"),f.Xc(26,"-- None --"),f.fc(),f.Vc(27,U,2,3,"mat-optgroup",8),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(28,"div",2),f.gc(29,"mat-card"),f.gc(30,"mat-card-header"),f.gc(31,"mat-card-subtitle"),f.gc(32,"h2"),f.Xc(33,"Select with multiple selection"),f.fc(),f.fc(),f.fc(),f.gc(34,"mat-card-content"),f.gc(35,"mat-form-field",3),f.gc(36,"mat-select",9),f.Vc(37,_,2,2,"mat-option",5),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(38,"div",2),f.gc(39,"mat-card"),f.gc(40,"mat-card-header"),f.gc(41,"mat-card-subtitle"),f.gc(42,"h2"),f.Xc(43,"Select with custom trigger text"),f.fc(),f.fc(),f.fc(),f.gc(44,"mat-card-content"),f.gc(45,"mat-form-field",3),f.gc(46,"mat-select",9),f.gc(47,"mat-select-trigger"),f.Xc(48),f.Vc(49,$,2,1,"small",10),f.fc(),f.Vc(50,G,2,2,"mat-option",5),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c&&(f.Ob("pb-4"),f.zc("icon","playlist_add_check")("title","Select")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(10),f.zc("ngModel",t.selectedValue),f.Mb(1),f.zc("ngForOf",t.foods),f.Mb(4),f.Yc(t.selectedValue),f.Mb(9),f.zc("formControl",t.pokemonControl),f.Mb(3),f.zc("ngForOf",t.pokemonGroups),f.Mb(9),f.zc("formControl",t.toppings),f.Mb(1),f.zc("ngForOf",t.toppingList),f.Mb(9),f.zc("formControl",t.toppings2),f.Mb(2),f.Zc(" ",t.toppings2.value?t.toppings2.value[0]:""," "),f.Mb(1),f.zc("ngIf",(null==t.toppings2.value?null:t.toppings2.value.length)>1),f.Mb(1),f.zc("ngForOf",t.toppingList2))},directives:[g.a,s.c,u.a,u.d,u.g,u.c,p.b,F.a,n.o,n.r,a.m,n.f,v.n,F.c,a.n,v.m],encapsulation:2}),c})();var Y=e("5RNC");function W(c,t){if(1&c){const c=f.hc();f.gc(0,"mat-checkbox",9),f.oc("ngModelChange",(function(t){return f.Nc(c),f.sc().autoTicks=t})),f.Xc(1,"Auto ticks"),f.fc()}if(2&c){const c=f.sc();f.zc("ngModel",c.autoTicks)}}function j(c,t){if(1&c){const c=f.hc();f.gc(0,"mat-form-field"),f.gc(1,"input",14),f.oc("ngModelChange",(function(t){return f.Nc(c),f.sc().tickInterval=t})),f.fc(),f.fc()}if(2&c){const c=f.sc();f.Mb(1),f.zc("ngModel",c.tickInterval)}}let H=(()=>{class c{constructor(c){this.appSettings=c,this.autoTicks=!1,this.disabled=!1,this.invert=!1,this.max=100,this.min=0,this.showTicks=!1,this.step=1,this.thumbLabel=!1,this.value=0,this.vertical=!1,this._tickInterval=1,this.settings=this.appSettings.settings}get tickInterval(){return this.showTicks?this.autoTicks?"auto":this._tickInterval:0}set tickInterval(c){this._tickInterval=Number(c)}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-slider"]],decls:39,vars:26,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"py-3"],[1,"mx-2"],["matInput","","type","number","placeholder","Value",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Min value",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Max value",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Step size",3,"ngModel","ngModelChange"],[1,"mx-2",3,"ngModel","ngModelChange"],["class","mx-2",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],[1,"py-3","mx-2"],[1,"py-3","mx-2",3,"disabled","invert","max","min","step","thumbLabel","tickInterval","ngModel","vertical","ngModelChange"],["matInput","","type","number","placeholder","Tick interval",3,"ngModel","ngModelChange"]],template:function(c,t){1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header"),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Slider configuration"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"section",3),f.gc(10,"mat-form-field",4),f.gc(11,"input",5),f.oc("ngModelChange",(function(c){return t.value=c})),f.fc(),f.fc(),f.gc(12,"mat-form-field",4),f.gc(13,"input",6),f.oc("ngModelChange",(function(c){return t.min=c})),f.fc(),f.fc(),f.gc(14,"mat-form-field",4),f.gc(15,"input",7),f.oc("ngModelChange",(function(c){return t.max=c})),f.fc(),f.fc(),f.gc(16,"mat-form-field",4),f.gc(17,"input",8),f.oc("ngModelChange",(function(c){return t.step=c})),f.fc(),f.fc(),f.fc(),f.gc(18,"section",3),f.gc(19,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.showTicks=c})),f.Xc(20,"Show ticks"),f.fc(),f.Vc(21,W,2,1,"mat-checkbox",10),f.Vc(22,j,2,1,"mat-form-field",11),f.fc(),f.gc(23,"section",3),f.gc(24,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.thumbLabel=c})),f.Xc(25,"Show thumb label"),f.fc(),f.fc(),f.gc(26,"section",3),f.gc(27,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.vertical=c})),f.Xc(28,"Vertical"),f.fc(),f.gc(29,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.invert=c})),f.Xc(30,"Inverted"),f.fc(),f.fc(),f.gc(31,"section",3),f.gc(32,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.disabled=c})),f.Xc(33,"Disabled"),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(34,"mat-card"),f.gc(35,"mat-card-content"),f.gc(36,"h2",12),f.Xc(37,"Result"),f.fc(),f.gc(38,"mat-slider",13),f.oc("ngModelChange",(function(c){return t.value=c})),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c&&(f.Ob("pb-4"),f.zc("icon","tune")("title","Slider")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(11),f.zc("ngModel",t.value),f.Mb(2),f.zc("ngModel",t.min),f.Mb(2),f.zc("ngModel",t.max),f.Mb(2),f.zc("ngModel",t.step),f.Mb(2),f.zc("ngModel",t.showTicks),f.Mb(2),f.zc("ngIf",t.showTicks),f.Mb(1),f.zc("ngIf",t.showTicks&&!t.autoTicks),f.Mb(2),f.zc("ngModel",t.thumbLabel),f.Mb(3),f.zc("ngModel",t.vertical),f.Mb(2),f.zc("ngModel",t.invert),f.Mb(3),f.zc("ngModel",t.disabled),f.Mb(6),f.zc("disabled",t.disabled)("invert",t.invert)("max",t.max)("min",t.min)("step",t.step)("thumbLabel",t.thumbLabel)("tickInterval",t.tickInterval)("ngModel",t.value)("vertical",t.vertical))},directives:[g.a,s.c,u.a,u.d,u.g,u.c,p.b,h.b,n.s,n.c,n.o,n.r,z.a,a.n,Y.a],styles:[".custom-slider[_ngcontent-%COMP%]{width:250px}"]}),c})();var J=e("1jcm");let Q=(()=>{class c{constructor(c){this.appSettings=c,this.color="accent",this.checked=!1,this.disabled=!1,this.settings=this.appSettings.settings}}return c.\u0275fac=function(t){return new(t||c)(f.ac(d.a))},c.\u0275cmp=f.Ub({type:c,selectors:[["app-slide-toggle"]],decls:32,vars:12,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"py-3"],[1,"mx-2"],[3,"ngModel","ngModelChange"],["value","primary",1,"mx-2"],["value","accent",1,"mx-2"],["value","warn",1,"mx-2"],[1,"mx-2",3,"ngModel","ngModelChange"],[1,"py-3","mx-2"],[1,"mx-2",3,"color","checked","disabled"]],template:function(c,t){1&c&&(f.bc(0,"app-content-header",0),f.gc(1,"div",1),f.gc(2,"div",2),f.gc(3,"mat-card"),f.gc(4,"mat-card-header"),f.gc(5,"mat-card-subtitle"),f.gc(6,"h2"),f.Xc(7,"Slide-toggle configuration"),f.fc(),f.fc(),f.fc(),f.gc(8,"mat-card-content"),f.gc(9,"section",3),f.gc(10,"label",4),f.Xc(11,"Color:"),f.fc(),f.gc(12,"mat-radio-group",5),f.oc("ngModelChange",(function(c){return t.color=c})),f.gc(13,"mat-radio-button",6),f.Xc(14,"Primary"),f.fc(),f.gc(15,"mat-radio-button",7),f.Xc(16,"Accent"),f.fc(),f.gc(17,"mat-radio-button",8),f.Xc(18,"Warn"),f.fc(),f.fc(),f.fc(),f.gc(19,"section",3),f.gc(20,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.checked=c})),f.Xc(21,"Checked"),f.fc(),f.fc(),f.gc(22,"section",3),f.gc(23,"mat-checkbox",9),f.oc("ngModelChange",(function(c){return t.disabled=c})),f.Xc(24,"Disabled"),f.fc(),f.fc(),f.fc(),f.fc(),f.gc(25,"mat-card"),f.gc(26,"mat-card-content"),f.gc(27,"h2",10),f.Xc(28,"Result"),f.fc(),f.gc(29,"section",3),f.gc(30,"mat-slide-toggle",11),f.Xc(31," Slide me! "),f.fc(),f.fc(),f.fc(),f.fc(),f.fc(),f.fc()),2&c&&(f.Ob("pb-4"),f.zc("icon","star_half")("title","Slide toggle")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(12),f.zc("ngModel",t.color),f.Mb(8),f.zc("ngModel",t.checked),f.Mb(3),f.zc("ngModel",t.disabled),f.Mb(7),f.zc("color",t.color)("checked",t.checked)("disabled",t.disabled))},directives:[g.a,s.c,u.a,u.d,u.g,u.c,X.b,n.o,n.r,X.a,z.a,J.a],encapsulation:2}),c})();e.d(t,"routes",(function(){return cc})),e.d(t,"FormControlsModule",(function(){return tc}));const cc=[{path:"",redirectTo:"autocomplete",pathMatch:"full"},{path:"autocomplete",component:x,data:{breadcrumb:"Autocomplete"}},{path:"checkbox",component:C,data:{breadcrumb:"Checkbox"}},{path:"datepicker",component:S,data:{breadcrumb:"Datepicker"}},{path:"form-field",component:D,data:{breadcrumb:"Form Field"}},{path:"input",component:T,data:{breadcrumb:"Input"}},{path:"radio-button",component:N,data:{breadcrumb:"Radio Button"}},{path:"select",component:Z,data:{breadcrumb:"Select"}},{path:"slider",component:H,data:{breadcrumb:"Slider"}},{path:"slide-toggle",component:Q,data:{breadcrumb:"Slide Toggle"}}];let tc=(()=>{class c{}return c.\u0275mod=f.Yb({type:c}),c.\u0275inj=f.Xb({factory:function(t){return new(t||c)},imports:[[a.c,o.f.forChild(cc),n.j,n.t,i.c,r.a]]}),c})()}}]);