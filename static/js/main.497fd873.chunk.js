(this["webpackJsonpwhere-is-waldo"]=this["webpackJsonpwhere-is-waldo"]||[]).push([[0],{109:function(e,a,t){e.exports=t(124)},114:function(e,a,t){},115:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),i=(t(114),t(43)),c=t(44),m=t(55),s=t(54),u=(t(115),t(23)),d=t(89),p=t(191),h=t(4),f=t(210),E=t(194),g=t(193),b=t(195),y=t(198),w=t(181),v=t(35),k=t(197),C=t(125),O=t(196),S=t(199),T=t(190),j=t(208),x=t(82),I=t.n(x),N=t(81),B=t.n(N),F=t(209),D=t(192),A=t(63),R=t.n(A),z=t(80),W=t.n(z),Y=t(183),_=t(184),M=t(185),P=t(187),H=t(188),J=t(201),X=t(205),q=t(204),G=t(200),K=t(202),L=t(203),U=t(91),$=t(207),Q=t(186),V=t(211),Z=t(56),ee=t.n(Z),ae=t(88),te=t(182),ne=t(74),re=t.n(ne),le=function(e){var a=r.a.useState(null),t=Object(u.a)(a,2),n=t[0],l=t[1],o=r.a.useState(e.data),i=Object(u.a)(o,2),c=i[0],m=i[1],s=r.a.useState(null),d=Object(u.a)(s,2),p=d[0],h=d[1],f=r.a.useState(!1),E=Object(u.a)(f,2),g=E[0],b=E[1],y=function(e){var a=document.createElement("div");a.setAttribute("id","selection-div"),a.style.position="absolute",a.style.left=e.pageX-50+"px",a.style.top=e.pageY-50+"px",a.style.width="100px",a.style.height="100px",a.style.border="3px dashed #000",a.style.borderRadius="50%",document.body.append(a),l(a),e.target.id&&h(e.target.id)},w=function(a){a.target.dataset.id===p&&(e.markFound(a.target.dataset.id),m(c.filter((function(e){return e.id!==a.target.dataset.id}))),e.setMenuItems(e.menuItems.map((function(t){return t.id===a.target.dataset.id&&(t.found=!0,e.setRecent(t.name)),t}))),e.openNotification(!0),c.map((function(e){return e.found})).every((function(e,a,t){return e===t[0]}))&&(e.stopTimer(),b(!0)));var t=document.getElementById("selection-div");t.parentNode.removeChild(t),l(null)};return r.a.createElement("div",null,r.a.createElement("img",{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:y,src:re.a,alt:"Raid Three",useMap:"#image-map"}),r.a.createElement("map",{name:"image-map"},r.a.createElement("area",{id:"alpha-5",onClick:y,alt:"Alpha 5",title:"Alpha 5",coords:"968,862,849,941",shape:"rect"}),r.a.createElement("area",{id:"astro-boy",onClick:y,alt:"Astro Boy",title:"Astro Boy",coords:"297,1332,278,1295",shape:"rect"}),r.a.createElement("area",{id:"baby-yoda",onClick:y,alt:"Baby Yoda",title:"Baby Yoda",coords:"118,881,69,906",shape:"rect"}),r.a.createElement("area",{id:"bill-and-ted",onClick:y,alt:"Bill & Ted",title:"Bill & Ted",coords:"260,1369,98,1471",shape:"rect"}),r.a.createElement("area",{id:"owl",onClick:y,alt:"Owl",title:"Owl",coords:"30,106,62,182",shape:"rect"})),r.a.createElement(ae.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:w,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},getContentAnchorEl:null},c.map((function(e){return r.a.createElement(te.a,{"data-id":e.id,key:e.id,onClick:w},e.name)}))),r.a.createElement(Y.a,{open:g,onClose:function(){b(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(_.a,{id:"form-dialog-title"},"Congratulations!"),r.a.createElement(M.a,{style:{minWidth:550}},r.a.createElement(Q.a,null,"You found all targets in ",r.a.createElement("strong",null,e.time))),r.a.createElement(P.a,null,r.a.createElement(H.a,{onClick:function(){return document.location.reload()},color:"primary"},"Play Again"))))},oe=t(13),ie=t(206),ce=t(189),me=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={startTime:null,timeElapsed:"00:00:00"},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=setInterval((function(){if(e.props.timerIsRunning){clearInterval(a),e.setState({startTime:Object(oe.a)(new Date)});var t=setInterval((function(){e.setState({timeElapsed:Object(ie.a)(Object(ce.a)(new Date,e.state.startTime),"mm:ss:SS")}),e.props.timerIsRunning||(clearInterval(t),e.props.setTime(e.state.timeElapsed),e.props.saveData())}),1)}}),1)}},{key:"render",value:function(){return r.a.createElement(T.a,{primary:this.state.timeElapsed})}}]),t}(n.Component),se=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)},table:{minWidth:550}}})),ue=Object(h.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(j.a),de=Object(h.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(d.a)(e,["children","classes","onClose"]);return r.a.createElement(_.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(v.a,{variant:"h6"},a),n?r.a.createElement(D.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(R.a,null)):null)})),pe=Object(h.a)((function(e){return{root:{padding:e.spacing(2)}}}))(M.a),he=Object(h.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(P.a),fe=function(e){var a=se(),t=r.a.useState(e.data),n=Object(u.a)(t,2),l=n[0],o=n[1],i=r.a.useState(!1),c=Object(u.a)(i,2),m=c[0],s=c[1],d=r.a.useState(null),p=Object(u.a)(d,2),h=p[0],x=p[1],N=r.a.useState(!1),A=Object(u.a)(N,2),z=A[0],_=A[1],M=function(e,a){"clickaway"!==a&&s(!1)},P=function(){_(!1)};return r.a.createElement("div",{className:a.root},r.a.createElement(g.a,null),r.a.createElement(E.a,{position:"fixed",className:a.appBar},r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"h6",noWrap:!0},"scit (/s\u012bt/)"))),r.a.createElement(f.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement(b.a,null),r.a.createElement("div",{className:a.drawerContainer},r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(O.a,null,r.a.createElement(W.a,null)),r.a.createElement(me,{timerIsRunning:e.timerIsRunning,setTime:e.setTime,saveData:e.saveData})),r.a.createElement(C.a,{button:!0,onClick:function(){return _(!0)}},r.a.createElement(O.a,null,r.a.createElement(B.a,null)),r.a.createElement(T.a,{primary:"High Scores"}))),r.a.createElement(k.a,null),r.a.createElement(w.a,{subheader:r.a.createElement(y.a,{style:{textAlign:"start"}},"Find")},l.map((function(e){return!0===e.found?r.a.createElement(j.a,{key:e.id,title:"You already found ".concat(e.name,"!"),placement:"right"},r.a.createElement(C.a,{disabled:!0},r.a.createElement(T.a,{style:{textDecoration:"line-through"},primary:e.name}))):r.a.createElement(ue,{key:e.id,title:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{width:"100%",src:e.image,alt:e.name}),r.a.createElement(v.a,{color:"inherit"},e.name)),placement:"right"},r.a.createElement(C.a,{onClick:function(){return a=e.reference,void window.open(a);var a},button:!0},r.a.createElement(T.a,{primary:e.name}),r.a.createElement(S.a,null,r.a.createElement(I.a,{fontSize:"small"}))))})))),r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:m,autoHideDuration:3e3,onClose:M,message:"You found ".concat(h,"!"),action:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{size:"small","aria-label":"close",color:"inherit",onClick:M},r.a.createElement(R.a,{fontSize:"small"})))})),r.a.createElement("main",{className:a.content},r.a.createElement(b.a,null),r.a.createElement(v.a,{paragraph:!0},"The Raid 3: Scourge of the Machines - by Laurie Greasley"),r.a.createElement(Y.a,{open:e.form,onClose:e.closeForm,"aria-labelledby":"form-dialog-title"},r.a.createElement(de,{id:"form-dialog-title"},"Welcome!"),r.a.createElement(pe,{style:{minWidth:550}},r.a.createElement(Q.a,null,"To start playing, please enter your name here."),r.a.createElement($.a,{onChange:e.validateTextField,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,required:!0,autoComplete:"off",helperText:"Player name is required to save scores.",onKeyUp:function(a){"Enter"===a.key&&e.closeForm()}})),r.a.createElement(he,null,r.a.createElement(H.a,{onClick:e.closeForm,color:"primary",disabled:null===e.playerName},"Play"))),r.a.createElement(le,{data:e.data,markFound:e.markFound,menuItems:l,setMenuItems:o,openNotification:s,setRecent:x,stopTimer:e.stopTimer,time:e.time,playerName:e.playerName}),r.a.createElement(Y.a,{onClose:P,"aria-labelledby":"customized-dialog-title",open:z},r.a.createElement(de,{id:"customized-dialog-title",onClose:P},"High Scores"),r.a.createElement(pe,{dividers:!0},r.a.createElement(G.a,{component:U.a},r.a.createElement(J.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(K.a,null,r.a.createElement(L.a,null,r.a.createElement(q.a,null,"Rank"),r.a.createElement(q.a,null,"Name"),r.a.createElement(q.a,null,"Time"))),r.a.createElement(X.a,null,e.highScores.map((function(e,a){return 0===a?r.a.createElement(L.a,{key:a},r.a.createElement(q.a,null,r.a.createElement(V.a,{label:a+1,style:{backgroundColor:"#ffd700"},icon:r.a.createElement(ee.a,null)})),r.a.createElement(q.a,{component:"th",scope:"row"},e.player),r.a.createElement(q.a,null,e.time)):1===a?r.a.createElement(L.a,{key:a},r.a.createElement(q.a,null,r.a.createElement(V.a,{label:a+1,style:{backgroundColor:"#c0c0c0"},icon:r.a.createElement(ee.a,null)})),r.a.createElement(q.a,{component:"th",scope:"row"},e.player),r.a.createElement(q.a,null,e.time)):2===a?r.a.createElement(L.a,{key:a},r.a.createElement(q.a,null,r.a.createElement(V.a,{label:a+1,style:{backgroundColor:"#cd7f32"},icon:r.a.createElement(ee.a,null)})),r.a.createElement(q.a,{component:"th",scope:"row"},e.player),r.a.createElement(q.a,null,e.time)):r.a.createElement(L.a,{key:a},r.a.createElement(q.a,null,a+1),r.a.createElement(q.a,{component:"th",scope:"row"},e.player),r.a.createElement(q.a,null,e.time))})))))),r.a.createElement(he,null,r.a.createElement(H.a,{autoFocus:!0,onClick:P,color:"primary"},"Close")))))},Ee=t(83),ge=t.n(Ee),be=t(84),ye=t.n(be),we=t(85),ve=t.n(we),ke=t(86),Ce=t.n(ke),Oe=t(87),Se=t.n(Oe),Te=[{id:"alpha-5",name:"Alpha 5",image:ge.a,reference:"https://powerrangers.fandom.com/wiki/Alpha_5",found:!1},{id:"astro-boy",name:"Astro Boy",image:ye.a,reference:"https://astroboy.fandom.com/wiki/Astro_Boy_(character)",found:!1},{id:"baby-yoda",name:"Baby Yoda",image:ve.a,reference:"https://starwars.fandom.com/wiki/The_Child",found:!1},{id:"bill-and-ted",name:"Bill & Ted",image:Ce.a,reference:"https://www.imdb.com/title/tt0101452/",found:!1},{id:"owl",name:"Owl",image:Se.a,reference:"https://bladerunner.fandom.com/wiki/Owl",found:!1}],je=t(57);t(120);je.initializeApp({apiKey:"AIzaSyCwDNCkJ6Iu9E-leIbOyXnBo1fhSi5XtD8",authDomain:"where-is-waldo-bb433.firebaseapp.com",databaseURL:"https://where-is-waldo-bb433.firebaseio.com",projectId:"where-is-waldo-bb433",storageBucket:"where-is-waldo-bb433.appspot.com",messagingSenderId:"562674770886",appId:"1:562674770886:web:b5957f9284425e6e6fc8c7"});var xe=je.firestore(),Ie=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).markFound=function(e){var a=n.state.data.map((function(a){return a.id===e&&(a.found=!0),a}));n.setState({data:a})},n.stopTimer=function(){n.setState({timerIsRunning:!1})},n.setTime=function(e){n.setState({time:e})},n.closeForm=function(){n.state.playerName&&(n.setState({form:!1}),setTimeout((function(){n.setState({timerIsRunning:!0})}),1e3))},n.validateTextField=function(e){""!==e.target.value.trim()&&null!==e.target.value&&e.target.value.trim().length<32?n.setState({playerName:e.target.value.trim()}):n.setState({playerName:null})},n.saveData=function(){xe.collection("scores").add({player:n.state.playerName,time:n.state.time}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))},n.getData=function(){var e=[];xe.collection("scores").orderBy("time","asc").limit(10).get().then((function(a){a.forEach((function(a){e.push(a.data())}))})),n.setState({highScores:e})},n.state={data:Te,timerIsRunning:!1,time:null,form:!0,playerName:null,highScores:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(fe,{data:this.state.data,markFound:this.markFound,timerIsRunning:this.state.timerIsRunning,stopTimer:this.stopTimer,setTime:this.setTime,form:this.state.form,playerName:this.state.playerName,closeForm:this.closeForm,validateTextField:this.validateTextField,time:this.state.time,saveData:this.saveData,highScores:this.state.highScores}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t.p+"static/media/raidthree.c260966d.png"},83:function(e,a,t){e.exports=t.p+"static/media/Alpha_5.d89b8588.png"},84:function(e,a,t){e.exports=t.p+"static/media/Astro.e42031cc.png"},85:function(e,a,t){e.exports=t.p+"static/media/Baby_Yoda.0802dc4c.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/Bill_and_Ted.5fe5e4b6.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/Owl.0fe877b2.jpg"}},[[109,1,2]]]);
//# sourceMappingURL=main.497fd873.chunk.js.map