(this.webpackJsonpupstox=this.webpackJsonpupstox||[]).push([[0],{177:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return ee})),n.d(t,"a",(function(){return oe})),n.d(t,"f",(function(){return he})),n.d(t,"e",(function(){return xe}));var a=n(340),r=n(341),o=n(361),c=n(360),i=n(0),l=n.n(i),s=n(4),f=n(454),u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(r.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(t)}},{key:"render",value:function(){var e=this.props.classes;return this.state.hasError?l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement("div",{className:e.root},l.a.createElement("h1",{className:e.errorText},"Something went wrong."))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e.message),{hasError:!0}}}]),n}(l.a.Component),m=Object(s.a)((function(e){return{root:{backgroundColor:"#dcdfce",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},errorText:{color:"#333",margin:0,lineHeight:1.5,fontSize:24}}}),{withTheme:!0})(u),d=n(439),b=n(303),g=n(302),h=Object(g.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),p=function(e){var t=e.isLoading,n=h();return l.a.createElement(d.a,{className:n.backdrop,open:t},l.a.createElement(b.a,{color:"inherit"}))};p.defaultProps={isLoading:!1};var E=p,w=n(242),v=n(362),j=n(228),O=n.n(j),x=n(345),k=n.n(x),N=n(331),y=n.n(N),C=n(346),S=n.n(C),R=n(353),L=n.n(R),P=n(239),I=n.n(P),z=n(238),W=n.n(z),T=n(347),A=n.n(T),B=n(348),D=n.n(B),F=n(350),U=n.n(F),H=n(351),J=n.n(H),M=n(352),V=n.n(M),$=n(355),q=n.n($),G=n(349),K=n.n(G),Q=n(354),X=n.n(Q),Y=n(356),Z=n.n(Y),_={Add:Object(i.forwardRef)((function(e,t){return l.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Check:Object(i.forwardRef)((function(e,t){return l.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Clear:Object(i.forwardRef)((function(e,t){return l.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Delete:Object(i.forwardRef)((function(e,t){return l.a.createElement(A.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(i.forwardRef)((function(e,t){return l.a.createElement(I.a,Object.assign({},e,{ref:t}))})),Edit:Object(i.forwardRef)((function(e,t){return l.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Export:Object(i.forwardRef)((function(e,t){return l.a.createElement(K.a,Object.assign({},e,{ref:t}))})),Filter:Object(i.forwardRef)((function(e,t){return l.a.createElement(U.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(i.forwardRef)((function(e,t){return l.a.createElement(J.a,Object.assign({},e,{ref:t}))})),LastPage:Object(i.forwardRef)((function(e,t){return l.a.createElement(V.a,Object.assign({},e,{ref:t}))})),NextPage:Object(i.forwardRef)((function(e,t){return l.a.createElement(I.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(i.forwardRef)((function(e,t){return l.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(i.forwardRef)((function(e,t){return l.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Search:Object(i.forwardRef)((function(e,t){return l.a.createElement(X.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(i.forwardRef)((function(e,t){return l.a.createElement(y.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(i.forwardRef)((function(e,t){return l.a.createElement(q.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(i.forwardRef)((function(e,t){return l.a.createElement(Z.a,Object.assign({},e,{ref:t}))}))},ee=function(e){var t=e.options,n=Object(v.a)(e,["options"]);return l.a.createElement("div",{className:"data-table"},l.a.createElement(O.a,Object.assign({icons:_,options:Object(w.a)({pageSize:10,pageSizeOptions:[10,20,30],headerStyle:{whiteSpace:"nowrap",color:"#9FA2B4",fontSize:14},rowStyle:{whiteSpace:"nowrap",color:"#000",fontSize:14},draggable:!1,toolbar:!0,search:!1},t)},n)))},te=n(245),ne=n(17),ae=n(451),re=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",backgroundColor:"#dcdfce"},header:{flex:"0 0 70px",width:"100%"},mainContent:{flex:"0 0 calc(100vh - 70px)",overflow:"hidden",display:"flex",width:"100%"},sidebar:{flex:"0 0 300px"},content:{flex:1,padding:30,overflow:"auto"}}})),oe=function(e){var t=e.children,n=Object(ne.a)(),a=Object(ae.a)(n.breakpoints.down("xs")),r=Object(i.useState)(!0),o=Object(te.a)(r,2),c=o[0],s=o[1],f=re();Object(i.useEffect)((function(){s(!a)}),[a]);var u=Object(i.useCallback)((function(){return s((function(e){return!e}))}),[]);return l.a.createElement("div",{className:f.root},l.a.createElement("div",{className:f.header},l.a.createElement(xe,{toggleSideBar:u})),l.a.createElement("div",{className:f.mainContent},c&&l.a.createElement("div",{className:f.sidebar},l.a.createElement(he,null)),l.a.createElement("div",{className:f.content},t)))},ce=n(446),ie=n(440),le=n(465),se=n(325),fe=n(89),ue=n(357),me=n.n(ue),de=n(358),be=n.n(de),ge=Object(g.a)((function(e){return{sidebarContainer:{backgroundColor:"#091f34",height:"100%"},item:{padding:0},sidebarNav:{padding:0},icon:{color:"rgba(255, 255, 255, .7)",transition:"all .2s linear"},itemLink:{display:"flex",justifyContent:"flex-start",alignItems:"center",width:"100%",padding:"16px 16px 16px 30px",borderLeft:"3px solid transparent",textDecoration:"none",color:"rgba(255, 255, 255, .7)",transition:"all .2s linear","&:hover":{backgroundColor:"#1b2a46",color:e.palette.common.white,"& svg":{color:e.palette.common.white}}},selected:{backgroundColor:"#1b2a46",borderColor:e.palette.common.white,color:e.palette.common.white,"& svg":{color:e.palette.common.white}},itemText:{margin:0},listIcon:{minWidth:40}}})),he=function(){var e=ge();return l.a.createElement("aside",{className:e.sidebarContainer},l.a.createElement(ce.a,{component:"nav",className:e.sidebarNav},l.a.createElement(ie.a,{className:e.item},l.a.createElement(fe.c,{exact:!0,to:"/",activeClassName:e.selected,className:e.itemLink},l.a.createElement(le.a,{className:e.listIcon},l.a.createElement(me.a,{className:e.icon})),l.a.createElement(se.a,{primary:"Historical Records",className:e.itemText}))),l.a.createElement(ie.a,{className:e.item},l.a.createElement(fe.c,{exact:!0,to:"/explore",activeClassName:e.selected,className:e.itemLink},l.a.createElement(le.a,{className:e.listIcon},l.a.createElement(be.a,{className:e.icon})),l.a.createElement(se.a,{primary:"Live Chart",className:e.itemText})))))},pe=n(332),Ee=n.n(pe),we=n(359),ve=n.n(we),je=n(229),Oe=Object(g.a)((function(e){return{root:{width:"100%",padding:"11px 30px",backgroundColor:"#091f34"},logo:{maxWidth:100},left:{display:"flex",alignItems:"center"},link:{display:"inline-flex"},menu:{color:e.palette.common.white,marginRight:20}}})),xe=function(e){var t=e.toggleSideBar,n=Oe();return l.a.createElement("header",{className:n.root},l.a.createElement("div",{className:n.left},l.a.createElement(je.a,{className:n.menu,onClick:t},l.a.createElement(ve.a,null)),l.a.createElement(fe.b,{to:"/",className:n.link},l.a.createElement("img",{src:Ee.a,alt:"Logo",className:n.logo}))))}},332:function(e,t,n){e.exports=n.p+"static/media/logo.552e0ee3.svg"},370:function(e,t,n){e.exports=n(437)},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=n(28),l=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,535))})),s=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,536))})),f=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,537))}));var u=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(l,null)),r.a.createElement(i.a,{exact:!0,path:"/explore"},r.a.createElement(s,null)),r.a.createElement(i.a,null,r.a.createElement(f,null)))},m=n(458),d=n(454),b=n(89),g=n(108),h=Object(g.a)({typography:{fontFamily:['"IBM Plex Sans"',"sans-serif"].join(",")}}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=n(177),v=r.a.createElement(w.d,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(w.b,{isLoading:!0})},r.a.createElement(m.a,{theme:h},r.a.createElement(b.a,null,r.a.createElement(d.a,null),r.a.createElement(u,null)))));c.a.render(v,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[370,1,2]]]);
//# sourceMappingURL=main.6deb1b61.chunk.js.map