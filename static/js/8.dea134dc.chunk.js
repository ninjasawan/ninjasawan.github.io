(this.webpackJsonpupstox=this.webpackJsonpupstox||[]).push([[8],{585:function(e,a,t){"use strict";t.r(a);var n=t(154),c=t(0),r=t.n(c),i=t(324),o=t(163),l=t(540),s=t.n(l),m=t(518),g=t.n(m),u=t(497),p=t(210),d=t(101),h=t(544),Y=t.n(h),f=t(353),N=t.n(f),M=t(542),x=t.n(M),v=t(543),b=t.n(v),y=Object(i.a)((function(e){var a,t;return{root:{},gridContainer:{marginBottom:20},paper:{padding:e.spacing(2),display:"flex",justifyContent:"space-between",alignItems:"center"},title:{fontSize:16,fontWeight:600,margin:"0 0 20px"},values:{fontSize:14,lineHeight:1.5},upArrow:(a={color:x.a[500],fontSize:100},Object(n.a)(a,e.breakpoints.down("sm"),{fontSize:70}),Object(n.a)(a,e.breakpoints.down("xs"),{fontSize:40}),a),downArrow:(t={color:b.a[500],fontSize:100},Object(n.a)(t,e.breakpoints.down("sm"),{fontSize:70}),Object(n.a)(t,e.breakpoints.down("xs"),{fontSize:40}),t)}})),E=[{title:"Date",field:"x",searchable:!1,grouping:!1,sorting:!0,type:"date",align:"center",render:function(e){return r.a.createElement("p",{style:{margin:0}},s()(e.x).format("MMM DD, YYYY"))}},{title:"Open Price",field:"open",searchable:!1,grouping:!1,sorting:!0,type:"currency",align:"center",currencySetting:{currencyCode:"INR"},cellStyle:{padding:5}},{title:"Highest Price",field:"high",searchable:!1,grouping:!1,sorting:!0,type:"currency",align:"center",currencySetting:{currencyCode:"INR"},cellStyle:{padding:5}},{title:"Lowest Price",field:"low",searchable:!1,grouping:!1,sorting:!0,type:"currency",align:"center",currencySetting:{currencyCode:"INR"},cellStyle:{padding:5}},{title:"Closed Price",field:"close",searchable:!1,grouping:!1,sorting:!0,type:"currency",align:"center",currencySetting:{currencyCode:"INR"},cellStyle:{padding:5}},{title:"Remaning Volume",field:"volume",searchable:!1,grouping:!1,sorting:!0,type:"numeric",align:"center",cellStyle:{padding:5}}];a.default=function(e){var a=e.loading,t=e.historicalData,n=e.maxMin,c=e.setCurrentPage,i=y();return r.a.createElement("section",{className:i.root},r.a.createElement(o.a,null,n&&r.a.createElement(u.a,{container:!0,className:i.gridContainer,spacing:2},r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{className:i.paper},r.a.createElement("div",{className:i.left},r.a.createElement(d.a,{variant:"h3",className:i.title},"Maximum"),r.a.createElement(d.a,{variant:"h3",className:i.values},"Open:- \u20b9".concat(n.maxOpen.open," on ").concat(s()(Number(n.maxOpen.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"High:- \u20b9".concat(n.maxHigh.high," on ").concat(s()(Number(n.maxHigh.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"Low:- \u20b9".concat(n.maxLow.low," on ").concat(s()(Number(n.maxLow.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"Close:- \u20b9".concat(n.maxClosed.open," on ").concat(s()(Number(n.maxClosed.x)).format("MMM DD, YYYY")))),r.a.createElement("div",{className:i.right},r.a.createElement(Y.a,{className:i.upArrow})))),r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{className:i.paper},r.a.createElement("div",{className:i.left},r.a.createElement(d.a,{variant:"h3",className:i.title},"Minimum"),r.a.createElement(d.a,{variant:"h3",className:i.values},"Open:- \u20b9".concat(n.minOpen.open," on ").concat(s()(Number(n.minOpen.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"High:- \u20b9".concat(n.minHigh.high," on ").concat(s()(Number(n.minHigh.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"Low:- \u20b9".concat(n.minLow.low," on ").concat(s()(Number(n.minLow.x)).format("MMM DD, YYYY"))),r.a.createElement(d.a,{variant:"h3",className:i.values},"Close:- \u20b9".concat(n.minClosed.open," on ").concat(s()(Number(n.minClosed.x)).format("MMM DD, YYYY")))),r.a.createElement("div",{className:i.right},r.a.createElement(N.a,{className:i.downArrow}))))),r.a.createElement(o.c,{title:"Historical Records",columns:E,data:t,actions:[{icon:g.a,tooltip:"Fetch More Records",isFreeAction:!0,onClick:function(e){c((function(e){return e+1}))}}],options:{maxBodyHeight:"calc(100vh - 430px)"}})),r.a.createElement(o.b,{isLoading:a}))}}}]);
//# sourceMappingURL=8.dea134dc.chunk.js.map