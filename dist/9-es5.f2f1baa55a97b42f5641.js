function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var s=0;s<a.length;s++){var c=a[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,a,s){return a&&_defineProperties(e.prototype,a),s&&_defineProperties(e,s),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{VkkC:function(e,a,s){"use strict";s.r(a);var c,t,i,n,l=s("ofXK"),r=s("tyNb"),o=s("zQsl"),h=s("PCNd"),x=[{name:"Germany",value:40632},{name:"United States",value:49737},{name:"France",value:36745},{name:"United Kingdom",value:36240},{name:"Spain",value:33e3},{name:"Italy",value:35800}],d=[{name:"Germany",series:[{name:"2017",value:71632},{name:"2010",value:40632},{name:"2000",value:76953},{name:"1990",value:31476}]},{name:"United States",series:[{name:"2017",value:82632},{name:"2010",value:49737},{name:"2000",value:55986},{name:"1990",value:37060}]},{name:"France",series:[{name:"2017",value:51732},{name:"2010",value:36745},{name:"2000",value:34774},{name:"1990",value:29476}]},{name:"United Kingdom",series:[{name:"2017",value:95652},{name:"2010",value:36240},{name:"2000",value:32543},{name:"1990",value:26424}]}],g=[{name:"Germany",series:[{name:"2009",x:new Date(2009,0,1),y:80.3,r:80.4},{name:"2006",x:new Date(2006,0,1),y:80.3,r:78},{name:"1995",x:new Date(1995,0,1),y:77.7,r:58.1},{name:"1990",x:new Date(1990,0,1),y:75.4,r:79}]},{name:"United States",series:[{name:"2010",x:new Date(2010,0,1),y:78.8,r:310},{name:"2005",x:new Date(2005,0,1),y:76.9,r:283},{name:"1996",x:new Date(1996,0,1),y:78.7,r:59.1},{name:"1990",x:new Date(1990,0,1),y:75.4,r:253}]},{name:"France",series:[{name:"2008",x:new Date(2008,0,1),y:81.4,r:63},{name:"2000",x:new Date(2e3,0,1),y:79.1,r:59.4},{name:"1994",x:new Date(1994,0,1),y:76.7,r:58.1},{name:"1990",x:new Date(1990,0,1),y:77.2,r:56.9}]},{name:"United Kingdom",series:[{name:"2007",x:new Date(2007,0,1),y:80.2,r:62.7},{name:"2003",x:new Date(2003,0,1),y:77.8,r:58.9},{name:"1995",x:new Date(1995,0,1),y:78.7,r:59.1},{name:"1990",x:new Date(1990,0,1),y:75.7,r:57.1}]}],b=s("/RaO"),u=s("fXoL"),m=s("C790"),A=s("XiUz"),f=s("Wp6s"),L=((n=function(){function e(a){_classCallCheck(this,e),this.appSettings=a,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!1,this.showXAxisLabel=!0,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="Population",this.colorScheme={domain:["#2F3E9E","#D22E2E","#378D3B","#0096A6","#F47B00","#606060"]},this.settings=this.appSettings.settings,Object.assign(this,{single:x,multi:d})}return _createClass(e,[{key:"onSelect",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||n)(u.ac(b.a))},n.\u0275cmp=u.Ub({type:n,selectors:[["app-bar"]],decls:66,vars:86,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center center"],[1,"w-100","h-300p"],[3,"scheme","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","results","select"],[3,"scheme","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","select"]],template:function(e,a){1&e&&(u.bc(0,"app-content-header",0),u.gc(1,"div",1),u.gc(2,"div",2),u.gc(3,"mat-card"),u.gc(4,"mat-card-header",3),u.gc(5,"mat-card-subtitle"),u.gc(6,"h2"),u.Xc(7,"Vertical Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(8,"div",4),u.gc(9,"ngx-charts-bar-vertical",5),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(10,"div",2),u.gc(11,"mat-card"),u.gc(12,"mat-card-header",3),u.gc(13,"mat-card-subtitle"),u.gc(14,"h2"),u.Xc(15,"Horizontal Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(16,"div",4),u.gc(17,"ngx-charts-bar-horizontal",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(18,"div",2),u.gc(19,"mat-card"),u.gc(20,"mat-card-header",3),u.gc(21,"mat-card-subtitle"),u.gc(22,"h2"),u.Xc(23,"Grouped Vertical Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(24,"div",4),u.gc(25,"ngx-charts-bar-vertical-2d",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(26,"div",2),u.gc(27,"mat-card"),u.gc(28,"mat-card-header",3),u.gc(29,"mat-card-subtitle"),u.gc(30,"h2"),u.Xc(31,"Grouped Horizontal Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(32,"div",4),u.gc(33,"ngx-charts-bar-horizontal-2d",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(34,"div",2),u.gc(35,"mat-card"),u.gc(36,"mat-card-header",3),u.gc(37,"mat-card-subtitle"),u.gc(38,"h2"),u.Xc(39,"Stacked Vertical Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(40,"div",4),u.gc(41,"ngx-charts-bar-vertical-stacked",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(42,"div",2),u.gc(43,"mat-card"),u.gc(44,"mat-card-header",3),u.gc(45,"mat-card-subtitle"),u.gc(46,"h2"),u.Xc(47,"Stacked Horizontal Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(48,"div",4),u.gc(49,"ngx-charts-bar-horizontal-stacked",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(50,"div",2),u.gc(51,"mat-card"),u.gc(52,"mat-card-header",3),u.gc(53,"mat-card-subtitle"),u.gc(54,"h2"),u.Xc(55,"Normalized Vertical Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(56,"div",4),u.gc(57,"ngx-charts-bar-vertical-normalized",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(58,"div",2),u.gc(59,"mat-card"),u.gc(60,"mat-card-header",3),u.gc(61,"mat-card-subtitle"),u.gc(62,"h2"),u.Xc(63,"Normalized Horizontal Bar Chart"),u.fc(),u.fc(),u.fc(),u.gc(64,"div",4),u.gc(65,"ngx-charts-bar-horizontal-normalized",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.fc()),2&e&&(u.Ob("pb-4"),u.zc("icon","insert_chart")("title","Bar Charts")("hideBreadcrumb",!1)("hasBgImage",!0),u.Mb(9),u.zc("scheme",a.colorScheme)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel)("results",a.single),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.single)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.yAxisLabel)("yAxisLabel",a.xAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.yAxisLabel)("yAxisLabel",a.xAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.yAxisLabel)("yAxisLabel",a.xAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.yAxisLabel)("yAxisLabel",a.xAxisLabel))},directives:[m.a,A.c,A.a,f.a,f.d,A.b,f.g,o.j,o.f,o.i,o.e,o.l,o.h,o.k,o.g],encapsulation:2}),n),w=((i=function(){function e(a){_classCallCheck(this,e),this.appSettings=a,this.legendTitle="Legend",this.showLegend=!0,this.tooltipDisabled=!1,this.showGridLines=!0,this.roundDomains=!1,this.maxRadius=10,this.minRadius=3,this.schemeType="ordinal",this.showXAxis=!0,this.showYAxis=!0,this.showXAxisLabel=!0,this.xAxisLabel="Census Date",this.showYAxisLabel=!0,this.yAxisLabel="Life expectancy [years]",this.colorScheme={domain:["#2F3E9E","#D22E2E","#378D3B","#0096A6","#F47B00","#606060"]},this.autoScale=!0,this.settings=this.appSettings.settings,Object.assign(this,{bubble:g})}return _createClass(e,[{key:"onSelect",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||i)(u.ac(b.a))},i.\u0275cmp=u.Ub({type:i,selectors:[["app-bubble"]],decls:10,vars:23,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center center"],[1,"w-100","h-300p"],[3,"results","showGridLines","legend","legendTitle","xAxis","yAxis","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale","scheme","schemeType","roundDomains","tooltipDisabled","minRadius","maxRadius"]],template:function(e,a){1&e&&(u.bc(0,"app-content-header",0),u.gc(1,"div",1),u.gc(2,"div",2),u.gc(3,"mat-card"),u.gc(4,"mat-card-header",3),u.gc(5,"mat-card-subtitle"),u.gc(6,"h2"),u.Xc(7,"Bubble Chart"),u.fc(),u.fc(),u.fc(),u.gc(8,"div",4),u.bc(9,"ngx-charts-bubble-chart",5),u.fc(),u.fc(),u.fc(),u.fc()),2&e&&(u.Ob("pb-4"),u.zc("icon","bubble_chart")("title","Bubble Charts")("hideBreadcrumb",!1)("hasBgImage",!0),u.Mb(9),u.zc("results",a.bubble)("showGridLines",a.showGridLines)("legend",a.showLegend)("legendTitle",a.legendTitle)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel)("autoScale",a.autoScale)("scheme",a.colorScheme)("schemeType",a.schemeType)("roundDomains",a.roundDomains)("tooltipDisabled",a.tooltipDisabled)("minRadius",a.minRadius)("maxRadius",a.maxRadius))},directives:[m.a,A.c,f.a,f.d,A.b,f.g,o.m],encapsulation:2}),i),p=((t=function(){function e(a){_classCallCheck(this,e),this.appSettings=a,this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!1,this.showXAxisLabel=!0,this.xAxisLabel="Year",this.showYAxisLabel=!0,this.yAxisLabel="Population",this.colorScheme={domain:["#2F3E9E","#D22E2E","#378D3B","#0096A6","#F47B00","#606060"]},this.autoScale=!0,this.settings=this.appSettings.settings,Object.assign(this,{single:x,multi:d})}return _createClass(e,[{key:"onSelect",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||t)(u.ac(b.a))},t.\u0275cmp=u.Ub({type:t,selectors:[["app-line"]],decls:34,vars:48,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center center"],[1,"w-100","h-300p"],[3,"scheme","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale","select"],[3,"scheme","results","gradient","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","select"]],template:function(e,a){1&e&&(u.bc(0,"app-content-header",0),u.gc(1,"div",1),u.gc(2,"div",2),u.gc(3,"mat-card"),u.gc(4,"mat-card-header",3),u.gc(5,"mat-card-subtitle"),u.gc(6,"h2"),u.Xc(7,"Line Chart"),u.fc(),u.fc(),u.fc(),u.gc(8,"div",4),u.gc(9,"ngx-charts-line-chart",5),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(10,"div",2),u.gc(11,"mat-card"),u.gc(12,"mat-card-header",3),u.gc(13,"mat-card-subtitle"),u.gc(14,"h2"),u.Xc(15,"Area Chart"),u.fc(),u.fc(),u.fc(),u.gc(16,"div",4),u.gc(17,"ngx-charts-area-chart",5),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(18,"div",2),u.gc(19,"mat-card"),u.gc(20,"mat-card-header",3),u.gc(21,"mat-card-subtitle"),u.gc(22,"h2"),u.Xc(23,"Stacked Area Chart"),u.fc(),u.fc(),u.fc(),u.gc(24,"div",4),u.gc(25,"ngx-charts-area-chart-stacked",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(26,"div",2),u.gc(27,"mat-card"),u.gc(28,"mat-card-header",3),u.gc(29,"mat-card-subtitle"),u.gc(30,"h2"),u.Xc(31,"Normalized Area Chart"),u.fc(),u.fc(),u.fc(),u.gc(32,"div",4),u.gc(33,"ngx-charts-area-chart-normalized",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.fc()),2&e&&(u.Ob("pb-4"),u.zc("icon","show_chart")("title","Line Charts")("hideBreadcrumb",!1)("hasBgImage",!0),u.Mb(9),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel)("autoScale",a.autoScale),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel)("autoScale",a.autoScale),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.multi)("gradient",a.gradient)("xAxis",a.showXAxis)("yAxis",a.showYAxis)("legend",a.showLegend)("showXAxisLabel",a.showXAxisLabel)("showYAxisLabel",a.showYAxisLabel)("xAxisLabel",a.xAxisLabel)("yAxisLabel",a.yAxisLabel))},directives:[m.a,A.c,A.a,f.a,f.d,A.b,f.g,o.n,o.b,o.d,o.c],encapsulation:2}),t),y=((c=function(){function e(a){_classCallCheck(this,e),this.appSettings=a,this.showLegend=!0,this.gradient=!0,this.colorScheme={domain:["#2F3E9E","#D22E2E","#378D3B","#0096A6","#F47B00","#606060"]},this.showLabels=!0,this.explodeSlices=!1,this.doughnut=!1,this.settings=this.appSettings.settings,Object.assign(this,{single:x,multi:d})}return _createClass(e,[{key:"onSelect",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||c)(u.ac(b.a))},c.\u0275cmp=u.Ub({type:c,selectors:[["app-pie"]],decls:26,vars:18,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center center"],[1,"w-100","h-300p"],[3,"scheme","results","legend","explodeSlices","labels","doughnut","gradient","select"],[3,"scheme","results","gradient","select"],[3,"scheme","results","select"]],template:function(e,a){1&e&&(u.bc(0,"app-content-header",0),u.gc(1,"div",1),u.gc(2,"div",2),u.gc(3,"mat-card"),u.gc(4,"mat-card-header",3),u.gc(5,"mat-card-subtitle"),u.gc(6,"h2"),u.Xc(7,"Pie Chart"),u.fc(),u.fc(),u.fc(),u.gc(8,"div",4),u.gc(9,"ngx-charts-pie-chart",5),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(10,"div",2),u.gc(11,"mat-card"),u.gc(12,"mat-card-header",3),u.gc(13,"mat-card-subtitle"),u.gc(14,"h2"),u.Xc(15,"Advanced Pie Chart"),u.fc(),u.fc(),u.fc(),u.gc(16,"div",4),u.gc(17,"ngx-charts-advanced-pie-chart",6),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.gc(18,"div",2),u.gc(19,"mat-card"),u.gc(20,"mat-card-header",3),u.gc(21,"mat-card-subtitle"),u.gc(22,"h2"),u.Xc(23,"Pie Grid Chart"),u.fc(),u.fc(),u.fc(),u.gc(24,"div",4),u.gc(25,"ngx-charts-pie-grid",7),u.oc("select",(function(e){return a.onSelect(e)})),u.fc(),u.fc(),u.fc(),u.fc(),u.fc()),2&e&&(u.Ob("pb-4"),u.zc("icon","pie_chart")("title","Pie Charts")("hideBreadcrumb",!1)("hasBgImage",!0),u.Mb(9),u.zc("scheme",a.colorScheme)("results",a.single)("legend",a.showLegend)("explodeSlices",a.explodeSlices)("labels",a.showLabels)("doughnut",a.doughnut)("gradient",a.gradient),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.single)("gradient",a.gradient),u.Mb(8),u.zc("scheme",a.colorScheme)("results",a.single))},directives:[m.a,A.c,f.a,f.d,A.b,f.g,o.p,o.a,o.q],encapsulation:2}),c);s.d(a,"routes",(function(){return X})),s.d(a,"ChartsModule",(function(){return S}));var v,X=[{path:"",redirectTo:"bar",pathMatch:"full"},{path:"bar",component:L,data:{breadcrumb:"Bar Charts"}},{path:"pie",component:y,data:{breadcrumb:"Pie Charts"}},{path:"line",component:p,data:{breadcrumb:"Line Charts"}},{path:"bubble",component:w,data:{breadcrumb:"Bubble Charts"}}],S=((v=function e(){_classCallCheck(this,e)}).\u0275mod=u.Yb({type:v}),v.\u0275inj=u.Xb({factory:function(e){return new(e||v)},imports:[[l.c,r.f.forChild(X),o.o,h.a]]}),v)}}]);