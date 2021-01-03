(this.webpackJsonpyoubox=this.webpackJsonpyoubox||[]).push([[0],{267:function(e,t,r){},271:function(e,t,r){},273:function(e,t,r){},275:function(e,t,r){},276:function(e,t,r){},277:function(e,t,r){},278:function(e,t,r){},291:function(e,t){},293:function(e,t){},304:function(e,t){},306:function(e,t){},333:function(e,t){},335:function(e,t){},336:function(e,t){},341:function(e,t){},343:function(e,t){},362:function(e,t){},374:function(e,t){},377:function(e,t){},410:function(e,t,r){"use strict";r.r(t);var a=r(4),s=r(0),n=r.n(s),c=r(19),i=r.n(c),o=(r(267),r(111)),l=r(28),d=r(45),u=r(46),j=r(50),h=r(49),p=r(466),b=r(32),f=r(443),m=r(465),O=r(450),g=r(451),x=r(81),y=r(57),v="SET_USER",_="UNSET_USER",w="REGISTER_SUCCESS",k="REGISTER_ERROR",R="LOGIN_SUCCESS",C="LOGIN_ERROR",S="REGISTER_USER",E="LOGIN",N="FORGOT_PASSWORD";r(271);var I=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={form_error:{field1:{error:!1,msg:""},field2:{error:!1,msg:""}}},a.emailRef=Object(s.createRef)(),a.passwordRef=Object(s.createRef)(),a.loginHandler=a.loginHandler.bind(Object(b.a)(a)),a.forgetPasswordHandler=a.forgetPasswordHandler.bind(Object(b.a)(a)),a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.login_status.success&&this.props.user.userId.length>0&&this.props.history.push("/home")}},{key:"componentDidUpdate",value:function(e){e.login_status!==this.props.login_status&&this.props.login_status.success&&this.props.user.userId.length>0&&this.props.history.push("/home")}},{key:"loginHandler",value:function(){var e=this.emailRef.current?this.emailRef.current.value:void 0,t=this.passwordRef.current?this.passwordRef.current.value:void 0,r={error:!1,msg:""},a={error:!1,msg:""};e&&t&&e.length>0&&t.length>0?this.props.loginUser({email:e,password:t}):(void 0!==e&&0!==e.length||(r={error:!0,msg:"email is required"}),void 0!==t&&0!==t.length||(a={error:!0,msg:"password is required"})),this.setState({form_error:{field1:r,field2:a}})}},{key:"forgetPasswordHandler",value:function(){var e=this.emailRef.current?this.emailRef.current.value:void 0,t={error:!1,msg:""};e&&e.length>0?this.props.forgotPassword({email:e}):t={error:!0,msg:"email is required"},this.setState({form_error:{field1:t,field2:{error:!1,msg:""}}})}},{key:"render",value:function(){return Object(a.jsx)(p.a,{className:"login_pane",children:Object(a.jsxs)(f.a,{alignContent:"center",justify:"space-between",container:!0,children:[Object(a.jsx)(p.a,{className:"brand_name",children:"YouBox"}),Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(f.a,{alignContent:"center",alignItems:"center",className:"login_button_group",children:[Object(a.jsx)(m.a,{id:"username_text",label:"email",variant:"outlined",type:"email",size:"small",inputRef:this.emailRef,error:this.state.form_error.field1.error,helperText:this.state.form_error.field1.msg}),Object(a.jsx)(m.a,{id:"password_text",label:"password",variant:"outlined",type:"password",size:"small",inputRef:this.passwordRef,error:this.state.form_error.field2.error,helperText:this.state.form_error.field2.msg}),Object(a.jsx)(O.a,{variant:"contained",color:"primary",size:"medium",onClick:this.loginHandler,children:"Login"}),Object(a.jsx)(g.a,{component:"button",onClick:this.forgetPasswordHandler,children:"Forgot password?"})]}),Object(a.jsx)(p.a,{hidden:!this.props.login_status.failure,marginLeft:"1.5%",children:Object(a.jsx)(x.a,{variant:"caption",display:"block",color:"error",gutterBottom:!0,children:this.props.login_status.message})})]})]})})}}]),r}(s.Component);var T=Object(l.f)(Object(y.b)((function(e){return{user:e.user,login_status:e.user.login_status}}),(function(e){return{loginUser:function(t){return e({type:E,payload:t})},forgotPassword:function(t){return e({type:N,payload:t})}}}))(I)),V=r(452),P=r(449),A=r(453),D=r(454),L=r(455),U=r(73),H=r.n(U),z=r(72),W=r.n(z),G=r(456),F=(r(273),function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={form_validity:{cond1:!1,cond2:!0,cond3:!1,cond4:!1,cond5:!1,cond6:!1,cond7:!1},form_error:{field1:{error:!1,msg:""},field2:{error:!1,msg:""},field3:{error:!1,msg:""},field4:{error:!1,msg:""}},loading:!1},a.nameRef=Object(s.createRef)(),a.emailRef=Object(s.createRef)(),a.passwordRef=Object(s.createRef)(),a.confirmPasswordRef=Object(s.createRef)(),a.passwordValidator=a.passwordValidator.bind(Object(b.a)(a)),a.confirmPasswordHandler=a.confirmPasswordHandler.bind(Object(b.a)(a)),a.submit=a.submit.bind(Object(b.a)(a)),a}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e){e.register_status!==this.props.register_status&&this.setState({loading:!1})}},{key:"submit",value:function(){var e=!1,t={error:!1,msg:""},r={error:!1,msg:""},a={error:!1,msg:""},s={error:!1,msg:""};void 0!==this.nameRef.current&&0!==this.nameRef.current.value.length||(t={error:!0,msg:"required field"}),void 0!==this.emailRef.current&&0!==this.emailRef.current.value.length||(r={error:!0,msg:"required field"}),void 0!==this.passwordRef.current&&0!==this.passwordRef.current.value.length||(a={error:!0,msg:"required field"}),void 0!==this.confirmPasswordRef.current&&0!==this.confirmPasswordRef.current.value.length||(s={error:!0,msg:"required field"}),!t.error&&!r.error&&!a.error&&!s.error&&this.state.form_validity.cond1&&this.state.form_validity.cond2&&this.state.form_validity.cond3&&this.state.form_validity.cond4&&this.state.form_validity.cond5&&this.state.form_validity.cond6&&this.state.form_validity.cond7&&(this.props.registerUser({name:this.nameRef.current.value,email:this.emailRef.current.value,password:this.passwordRef.current.value}),e=!0),this.setState({form_error:{field1:t,field2:r,field3:a,field4:s},loading:e})}},{key:"confirmPasswordHandler",value:function(e){var t=!1;this.passwordRef.current.value===e.target.value&&(t=!0),this.setState({form_validity:{cond1:this.state.form_validity.cond1,cond2:this.state.form_validity.cond2,cond3:this.state.form_validity.cond3,cond4:this.state.form_validity.cond4,cond5:this.state.form_validity.cond5,cond6:this.state.form_validity.cond6,cond7:t}})}},{key:"passwordValidator",value:function(e){var t=e.target.value,r=!1,a=!0,s=!1,n=!1,c=!1,i=!1;t.length>=6&&(r=!0),t.length>16&&(a=!1),t.match(/(?=.*[0-9])/)&&(s=!0),t.match(/(?=.*[!@#$!])/)&&(n=!0),t.match(/[A-Z]/)&&(c=!0),t.match(/[a-z]/)&&(i=!0),this.setState({form_validity:{cond1:r,cond2:a,cond3:s,cond4:n,cond5:c,cond6:i,cond7:this.state.form_validity.cond7}})}},{key:"render",value:function(){var e=[this.state.form_validity.cond1?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond2?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond3?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond4?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond5?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond6?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{}),this.state.form_validity.cond7?Object(a.jsx)(W.a,{}):Object(a.jsx)(H.a,{})],t=[this.state.form_validity.cond1?"green":"red",this.state.form_validity.cond2?"green":"red",this.state.form_validity.cond3?"green":"red",this.state.form_validity.cond4?"green":"red",this.state.form_validity.cond5?"green":"red",this.state.form_validity.cond6?"green":"red",this.state.form_validity.cond7?"green":"red"];return Object(a.jsxs)(V.a,{fixed:!0,className:"signup",children:[Object(a.jsx)(p.a,{textAlign:"center",className:"join_text",children:"Join YouBox"}),Object(a.jsx)(p.a,{textAlign:"center",className:"subtitle",children:"download and catalog youtube videos"}),Object(a.jsx)(V.a,{className:"form",fixed:!0,children:Object(a.jsxs)(p.a,{display:"flex",children:[Object(a.jsxs)(V.a,{className:"instructions",children:[Object(a.jsx)(p.a,{className:"create_account",children:"Password Instructions"}),Object(a.jsxs)(P.a,{children:[Object(a.jsxs)(A.a,{style:{color:t[0]},children:[Object(a.jsx)(D.a,{style:{color:t[0]},children:e[0]}),Object(a.jsx)(L.a,{primary:"Should be more than 6 characters"})]}),Object(a.jsxs)(A.a,{style:{color:t[1]},children:[Object(a.jsx)(D.a,{style:{color:t[1]},children:e[1]}),Object(a.jsx)(L.a,{primary:"Should be less than 16 characters"})]}),Object(a.jsxs)(A.a,{style:{color:t[2]},children:[Object(a.jsx)(D.a,{style:{color:t[2]},children:e[2]}),Object(a.jsx)(L.a,{primary:"Should contain atleast one number"})]}),Object(a.jsxs)(A.a,{style:{color:t[3]},children:[Object(a.jsx)(D.a,{style:{color:t[3]},children:e[3]}),Object(a.jsx)(L.a,{primary:"Should contain atleast one special symbol (@, #, $, !)"})]}),Object(a.jsxs)(A.a,{style:{color:t[4]},children:[Object(a.jsx)(D.a,{style:{color:t[4]},children:e[4]}),Object(a.jsx)(L.a,{primary:"Should contain atleast one uppercase letter"})]}),Object(a.jsxs)(A.a,{style:{color:t[5]},children:[Object(a.jsx)(D.a,{style:{color:t[5]},children:e[5]}),Object(a.jsx)(L.a,{primary:"Should contain atleast one lowercase letter"})]}),Object(a.jsxs)(A.a,{style:{color:t[6]},children:[Object(a.jsx)(D.a,{style:{color:t[6]},children:e[6]}),Object(a.jsx)(L.a,{primary:"Both passwords should match"})]})]})]}),Object(a.jsxs)(V.a,{children:[Object(a.jsx)(p.a,{className:"create_account",children:"Create Account"}),Object(a.jsx)(p.a,{children:Object(a.jsx)(m.a,{id:"name_text",label:"Name",variant:"outlined",type:"username",size:"medium",fullWidth:!0,className:"form_input",inputRef:this.nameRef,error:this.state.form_error.field1.error,helperText:this.state.form_error.field1.msg})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(m.a,{id:"email_text",label:"email",variant:"outlined",type:"username",fullWidth:!0,className:"form_input",inputRef:this.emailRef,error:this.state.form_error.field2.error,helperText:this.state.form_error.field2.msg})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(m.a,{id:"password_text",label:"password",variant:"outlined",type:"password",fullWidth:!0,className:"form_input",inputRef:this.passwordRef,onChange:this.passwordValidator,error:this.state.form_error.field3.error,helperText:this.state.form_error.field3.msg})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(m.a,{id:"confirm_password_text",label:"confirm password",variant:"outlined",type:"password",fullWidth:!0,className:"form_input",inputRef:this.confirmPasswordRef,onChange:this.confirmPasswordHandler,error:this.state.form_error.field4.error,helperText:this.state.form_error.field4.msg})}),Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(O.a,{variant:"contained",color:"primary",className:"form_input",onClick:this.submit,children:"Submit"}),Object(a.jsx)(p.a,{marginTop:"2%",marginLeft:"2%",hidden:!this.state.loading,children:Object(a.jsx)(G.a,{size:"2rem"})})]}),Object(a.jsx)(p.a,{hidden:!this.props.register_status.failure,children:Object(a.jsx)(x.a,{variant:"caption",display:"block",color:"error",gutterBottom:!0,children:this.props.register_status.message})}),Object(a.jsx)(p.a,{hidden:!this.props.register_status.success,children:Object(a.jsx)(x.a,{variant:"caption",display:"block",color:"primary",gutterBottom:!0,children:this.props.register_status.message})})]})]})})]})}}]),r}(s.Component));var B=Object(y.b)((function(e){return{user:e.user,register_status:e.user.register_status}}),(function(e){return{registerUser:function(t){return e({type:S,payload:t})}}}))(F),q=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsxs)(p.a,{height:"100%",children:[Object(a.jsx)(T,{}),Object(a.jsx)(V.a,{fixed:!0,children:Object(a.jsx)(B,{})})]})}}]),r}(s.Component),M=r(224),Y=r.n(M),J=r(457),K=r(223),Z=r.n(K),$=(r(275),function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",justifyContent:"space-between",className:"home_header",children:[Object(a.jsx)(p.a,{className:"brand_name",children:"YouBox"}),Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",justifyContent:"space-between",className:"button_group",children:[Object(a.jsxs)(p.a,{className:"welcome_txt",children:["Welcome ",this.props.name]}),Object(a.jsx)(p.a,{children:Object(a.jsx)(J.a,{color:"primary","aria-label":"settings",component:"span",onClick:function(){return alert("under development")},children:Object(a.jsx)(Z.a,{})})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{variant:"contained",color:"primary",startIcon:Object(a.jsx)(Y.a,{}),onClick:this.props.logout,children:"Logout"})})]})]})}}]),r}(s.Component)),Q=r(244),X=r(225),ee=r.n(X),te=r(226),re=r.n(te),ae=r(227),se=r.n(ae),ne=r(228),ce=r.n(ne),ie=r(229),oe=r.n(ie);r(276);var le=function(e){var t=e.navigation,r=e.createHandler,n=Object(s.useState)(0),c=Object(Q.a)(n,2),i=c[0],o=c[1];return Object(a.jsxs)(p.a,{className:"home_navigation",children:[Object(a.jsxs)(p.a,{className:"home_nav_button_group",children:[Object(a.jsxs)(p.a,{className:0===i?"tab_active":"tab_inactive",onClick:function(){return l(0)},children:[Object(a.jsx)(ee.a,{}),Object(a.jsx)(p.a,{marginLeft:"0.5vw",whiteSpace:"noWrap",children:"My Collection"})]}),Object(a.jsxs)(p.a,{className:1===i?"tab_active":"tab_inactive",onClick:function(){return l(1)},children:[Object(a.jsx)(re.a,{}),Object(a.jsx)(p.a,{marginLeft:"0.5vw",children:"Favourites"})]}),Object(a.jsxs)(p.a,{className:2===i?"tab_active":"tab_inactive",onClick:function(){return l(2)},children:[Object(a.jsx)(se.a,{}),Object(a.jsx)(p.a,{marginLeft:"0.5vw",children:"Trending"})]}),Object(a.jsxs)(p.a,{className:3===i?"tab_active":"tab_inactive",onClick:function(){return l(3)},children:[Object(a.jsx)(ce.a,{}),Object(a.jsx)(p.a,{marginLeft:"0.5vw",children:"Recent"})]})]}),Object(a.jsxs)(p.a,{className:"add_new_button",onClick:function(){return r(!0)},children:[Object(a.jsx)(oe.a,{}),Object(a.jsx)(p.a,{marginLeft:"0.5vw",children:"Add new video"})]})]});function l(e){o(e),t(e)}},de=r(237),ue=r.n(de),je=r(458),he=r(459);function pe(e){var t=e.thumbnail_url,r=e.title,s=e.author_name;return Object(a.jsx)(je.a,{className:"video_capsule",children:Object(a.jsxs)(he.a,{children:[Object(a.jsx)("img",{src:t,alt:"youtube"}),Object(a.jsx)(x.a,{variant:"h6",children:r}),Object(a.jsxs)(x.a,{variant:"subtitle2",children:["Uploaded by ",s]})]})})}var be=r(230),fe=r.n(be),me=r(413),Oe=r(445),ge=r(446),xe=r(470),ye=r(460),ve=r(467);r(277);function _e(e){var t=e.categories,r=e.saveCategories,s=e.selectCategory,c=n.a.useRef();return Object(a.jsx)(me.a,{elevation:2,className:"category_explorer",children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(p.a,{className:"add_new_pane",children:[Object(a.jsx)(m.a,{label:"Add new category",variant:"outlined",size:"small",inputRef:c}),Object(a.jsx)(O.a,{color:"primary",variant:"outlined",startIcon:Object(a.jsx)(fe.a,{}),className:"add_category_btn",onClick:function(){return r(c.current&&c.current.value.length>0?c.current.value:"")},children:"Add"})]}),Object(a.jsx)(p.a,{className:"category_group",children:Object(a.jsxs)(Oe.a,{component:"fieldset",children:[Object(a.jsx)(ge.a,{component:"legend",children:"Category List"}),Object(a.jsx)(xe.a,{onChange:s,children:t.map((function(e,t){return Object(a.jsx)(ye.a,{value:e.category,control:Object(a.jsx)(ve.a,{}),label:e.category},t)}))}),Object(a.jsx)(p.a,{hidden:t.length>0,children:Object(a.jsx)(x.a,{variant:"caption",children:"No saved categories, add new categories"})})]})})]})})}var we=r(469),ke=r(461),Re=r(462),Ce=r(463),Se=r(471),Ee=r(233),Ne=r.n(Ee),Ie=r(234),Te=r.n(Ie),Ve=r(235),Pe=r.n(Ve),Ae=r(232),De=r.n(Ae);r(278);function Le(e){var t=e.collections,r=e.onPlay,s=e.downloadVideo;return Object(a.jsx)(p.a,{className:"collection_grid",children:t.map((function(e,t){return Object(a.jsx)(Se.a,{title:e.title,children:Object(a.jsxs)(me.a,{elevation:1,className:"collection_paper",children:[Object(a.jsx)("img",{src:e.thumbnail_url,alt:"thumpnail"}),Object(a.jsx)(p.a,{className:"video_title",children:e.title}),Object(a.jsxs)(p.a,{className:"video_button_group",children:[Object(a.jsx)(J.a,{onClick:function(){return r(e.url,e.title)},children:Object(a.jsx)(De.a,{})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(Ne.a,{})}),Object(a.jsx)(J.a,{onClick:function(){return s(e.url,e.title)},children:Object(a.jsx)(Te.a,{})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(Pe.a,{})})]})]},t)},t)}))})}var Ue=r(236),He=r.n(Ue),ze="FETCH_CATEGORIES",We="SAVE_CATEGORIES",Ge="SAVE_VIDEO",Fe="FETCH_VIDEO";var Be=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={videoPlayerOpen:!1,videoPlayerUrl:"",videoTitle:""},a.closeVideoPlayer=a.closeVideoPlayer.bind(Object(b.a)(a)),a.openVideoPlayer=a.openVideoPlayer.bind(Object(b.a)(a)),a.downloadVideo=a.downloadVideo.bind(Object(b.a)(a)),a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchVideos()}},{key:"openVideoPlayer",value:function(e,t){this.setState({videoPlayerOpen:!0,videoPlayerUrl:e,videoTitle:t})}},{key:"closeVideoPlayer",value:function(){this.setState({videoPlayerOpen:!1,videoPlayerUrl:"",videoTitle:""})}},{key:"downloadVideo",value:function(e,t){}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.my_collections);return t.sort(),this.props.collection_loading?Object(a.jsx)(p.a,{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"70vh",children:Object(a.jsx)(G.a,{})}):Object(a.jsxs)(p.a,{padding:"0.5vh 1vw",className:"my_collection",children:[t.map((function(t,r){return Object(a.jsxs)(p.a,{className:"collection_parent_grid",children:[Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(x.a,{variant:"h6",children:t}),Object(a.jsx)(p.a,{className:"counter_display",children:e.props.my_collections[t].length})]}),Object(a.jsx)(Le,{collections:e.props.my_collections[t],onPlay:e.openVideoPlayer,downloadVideo:e.downloadVideo})]},r)})),Object(a.jsxs)(we.a,{open:this.state.videoPlayerOpen,fullWidth:!0,fullScreen:!0,children:[Object(a.jsx)(ke.a,{children:this.state.videoTitle}),Object(a.jsx)(Re.a,{children:Object(a.jsx)(He.a,{url:this.state.videoPlayerUrl,controls:!0,playing:!0,width:"98vw",height:"86vh"})}),Object(a.jsx)(Ce.a,{children:Object(a.jsx)(O.a,{onClick:this.closeVideoPlayer,color:"primary",children:"Close"})})]})]})}}]),r}(s.Component);var qe=Object(y.b)((function(e){return{my_collections:e.collection.my_collections,collection_loading:e.collection.collection_loading}}),(function(e){return{fetchVideos:function(){return e({type:Fe})}}}))(Be),Me="SEARCH_VIDEO",Ye="SET_LOADING",Je="SEARCH_RESULT",Ke="UNSET_SEARCH_RESULT",Ze="SET_SEARCH_ERROR";var $e=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={nav_tab:0,dialogOpen:!1,selected_category:""},a.searchVideoText=Object(s.createRef)(),a.setNavTab=a.setNavTab.bind(Object(b.a)(a)),a.tabRenderer=a.tabRenderer.bind(Object(b.a)(a)),a.openDialog=a.openDialog.bind(Object(b.a)(a)),a.selectCategory=a.selectCategory.bind(Object(b.a)(a)),a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){0===this.props.user.userId.length&&this.props.history.push("/"),this.props.fetchCategories()}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&0===this.props.user.userId.length&&this.props.history.push("/"),e.my_collections!==this.props.my_collections&&this.setState({dialogOpen:!1})}},{key:"selectCategory",value:function(e){this.setState({selected_category:e.target.value})}},{key:"openDialog",value:function(e){this.setState({dialogOpen:e}),!0===e&&this.props.setSearchError({error_status:!1,error_msg:""})}},{key:"setNavTab",value:function(e){this.setState({nav_tab:e})}},{key:"tabRenderer",value:function(){return 0===this.state.nav_tab?Object(a.jsx)(qe,{}):1===this.state.nav_tab?Object(a.jsx)("div",{children:"Favourites"}):2===this.state.nav_tab?Object(a.jsx)("div",{children:"Trending"}):3===this.state.nav_tab?Object(a.jsx)("div",{children:"Recent"}):void 0}},{key:"render",value:function(){var e=this,t=null===this.searchVideoText.current||this.searchVideoText.current&&0===this.searchVideoText.current.value.length||0===this.state.selected_category.length;return Object(a.jsxs)(p.a,{children:[Object(a.jsx)($,{name:this.props.user.name,logout:this.props.unSetUser}),Object(a.jsx)(le,{navigation:this.setNavTab,createHandler:this.openDialog}),Object(a.jsx)(p.a,{children:this.tabRenderer()}),Object(a.jsxs)(we.a,{open:this.state.dialogOpen,onClose:function(){return e.openDialog(!1)},children:[Object(a.jsx)(ke.a,{children:Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(p.a,{fontWeight:"bold",fontSize:"x-large",children:"Add video to your collection"}),Object(a.jsx)(p.a,{hidden:!this.props.search_loading,marginLeft:"0.5vw",children:Object(a.jsx)(G.a,{size:"1.5rem"})})]})}),Object(a.jsxs)(Re.a,{children:[Object(a.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(m.a,{label:"youtube-url",variant:"outlined",size:"small",fullWidth:!0,style:{width:"30vw"},inputRef:this.searchVideoText}),Object(a.jsx)(J.a,{style:{marginLeft:"0.5vw"},color:"primary","aria-label":"search video",onClick:function(){return e.props.searchVideo({url:e.searchVideoText.current?e.searchVideoText.current.value:void 0})},children:Object(a.jsx)(ue.a,{})})]}),Object(a.jsx)(p.a,{display:"flex",alignItems:"center",hidden:!this.props.search_error.error,children:Object(a.jsx)(x.a,{variant:"caption",color:"error",children:this.props.search_error.msg})}),Object(a.jsxs)(p.a,{hidden:!this.props.search_status,children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)(x.a,{variant:"subtitle1",fontWeight:"bold",fontSize:"large",children:"Search Result"}),Object(a.jsx)(pe,{title:this.props.search_result.title,thumbnail_url:this.props.search_result.thumbnail_url,author_name:this.props.search_result.author_name})]}),Object(a.jsx)(p.a,{marginTop:"1vh",children:Object(a.jsx)(_e,{categories:this.props.categories,saveCategories:this.props.saveCategories,selectCategory:this.selectCategory})})]})]}),Object(a.jsxs)(Ce.a,{children:[Object(a.jsx)(O.a,{color:"secondary",onClick:function(){return e.openDialog(!1)},children:"Cancel"}),Object(a.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){return e.props.saveVideo({search_result:e.props.search_result,category:e.state.selected_category})},disabled:t,children:"Add"})]})]})]})}}]),r}(s.Component);var Qe=Object(l.f)(Object(y.b)((function(e){return{user:e.user,login_status:e.user.login_status,search_loading:e.search.loading,search_result:e.search.search_result,search_status:e.search.search_status,search_error:e.search.search_error,categories:e.collection.categories,my_collections:e.collection.my_collections}}),(function(e){return{unSetUser:function(){return e({type:_})},searchVideo:function(t){return e(function(e){return{type:Me,payload:e}}(t))},setSearchError:function(t){return e(function(e){return{type:Ze,payload:e}}(t))},fetchCategories:function(t){return e(function(e){return{type:ze,payload:e}}(t))},saveCategories:function(t){return e(function(e){return{type:We,payload:e}}(t))},saveVideo:function(t){return e(function(e){return{type:Ge,payload:e}}(t))}}}))($e));var Xe=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/home",children:Object(a.jsx)(Qe,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(q,{})})]})})},et=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,473)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),s(e),n(e),c(e)}))},tt=r(51),rt=r(148),at=r(245),st={userId:"",name:"",register_status:{success:!1,failure:!1,message:""},login_status:{success:!1,failure:!1,message:""}};var nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object.assign({},e,{userId:t.payload.userId,name:t.payload.name}):t.type===_?Object.assign({},e,{userId:"",name:""}):t.type===w?Object.assign({},e,{register_status:{success:!0,failure:!1,message:t.payload.message}}):t.type===k?Object.assign({},e,{register_status:{success:!1,failure:!0,message:t.payload.message}}):t.type===R?Object.assign({},e,{login_status:{success:!0,failure:!1,message:t.payload.message}}):t.type===C?Object.assign({},e,{login_status:{success:!1,failure:!0,message:t.payload.message}}):e},ct={loading:!1,search_result:{title:"",author_name:"",thumbnail_url:"",url:""},search_status:!1,search_error:{error:!1,msg:""}};var it=r(93),ot=r(243),lt="SET_CATEGORIES",dt="ADD_VIDEOS",ut="SET_VIDEOS",jt="SET_COLLECTION_LOADING",ht={categories:[],my_collections:{},collection_loading:!1};var pt=r(86),bt=r(21),ft=r.n(bt),mt=r(147),Ot=r.n(mt),gt=r(11),xt=r(242),yt=(r(210),r(238)),vt=r.n(yt),_t=xt.a.initializeApp({apiKey:"AIzaSyALrw8bI9OOXCbTN7KZ3pQHOnTY7IVAiMo",authDomain:"youbox-d957e.firebaseapp.com",projectId:"youbox-d957e",storageBucket:"youbox-d957e.appspot.com",messagingSenderId:"633570329777",appId:"1:633570329777:web:c3a125b7d34482b9a34e90"}),wt=new vt.a(_t),kt=ft.a.mark(Et),Rt=ft.a.mark(Nt),Ct=ft.a.mark(It),St=ft.a.mark(Tt);function Et(e){var t,r,a,s,n;return ft.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.email,a=t.password,s=Ot()(a),c.prev=4,c.next=7,Object(gt.call)(wt.auth.createUserWithEmailAndPassword,r,s.toString());case 7:return n=c.sent,c.next=10,Object(gt.call)(wt.firestore.addDocument,"users",{uid:n.user.uid,created_at:new Date,name:t.name});case 10:return c.next=12,Object(gt.call)(wt.auth.sendEmailVerification);case 12:return c.next=14,Object(gt.put)({type:v,payload:{userId:n.user.uid,name:t.name}});case 14:return c.next=16,Object(gt.put)({type:w,payload:{message:"Account created successful. Verification email is send, please follow it."}});case 16:c.next=22;break;case 18:return c.prev=18,c.t0=c.catch(4),c.next=22,Object(gt.put)({type:k,payload:{message:c.t0.message}});case 22:case"end":return c.stop()}}),kt,null,[[4,18]])}function Nt(e){var t,r,a,s,n,c,i,o;return ft.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,r=t.email,a=t.password,s=Ot()(a),l.prev=4,l.next=7,Object(gt.call)(wt.auth.signInWithEmailAndPassword,r,s.toString());case 7:if((n=l.sent).user.emailVerified){l.next=13;break}return l.next=11,Object(gt.put)({type:C,payload:{message:"verify your email to proceed."}});case 11:l.next=28;break;case 13:return c=n.user.uid,l.next=16,Object(gt.call)(wt.firestore.getCollection,"users");case 16:if(i=l.sent,o=void 0,i.forEach((function(e){var t=e.data();t.uid===c&&(o=t)})),!o){l.next=26;break}return l.next=22,Object(gt.put)({type:v,payload:{userId:o.uid,name:o.name}});case 22:return l.next=24,Object(gt.put)({type:R,payload:{message:"logged in"}});case 24:l.next=28;break;case 26:return l.next=28,Object(gt.put)({type:C,payload:{message:"user account not found."}});case 28:l.next=34;break;case 30:return l.prev=30,l.t0=l.catch(4),l.next=34,Object(gt.put)({type:C,payload:{message:l.t0.message}});case 34:case"end":return l.stop()}}),Rt,null,[[4,30]])}function It(e){var t,r;return ft.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=t.email,a.next=4,Object(gt.call)(wt.auth.sendPasswordResetEmail,r);case 4:case"end":return a.stop()}}),Ct)}function Tt(){return ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(gt.takeEvery)(S,Et);case 2:return e.next=4,Object(gt.takeEvery)(E,Nt);case 4:return e.next=6,Object(gt.takeEvery)(N,It);case 6:case"end":return e.stop()}}),St)}var Vt=r(239),Pt=r.n(Vt),At=ft.a.mark(Lt),Dt=ft.a.mark(Ut);function Lt(e){var t,r,a,s,n,c;return ft.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,r=t.url,a="https://www.youtube.com/oembed?url=".concat(r),i.next=5,Object(gt.put)({type:Ye,payload:{loading:!0}});case 5:if(void 0!==r&&0!==r.length){i.next=10;break}return i.next=8,Object(gt.put)({type:Ze,payload:{error_status:!0,error_msg:"url is required to search"}});case 8:i.next=24;break;case 10:return i.next=12,Object(gt.call)(Pt.a.get,a);case 12:if(s=i.sent,"Not Found"!==(n=s.data)){i.next=19;break}return i.next=17,Object(gt.put)({type:Ze,payload:{error_status:!0,error_msg:"video is not found, provide the entire url"}});case 17:i.next=24;break;case 19:return c={title:n.title,author_name:n.author_name,thumbnail_url:n.thumbnail_url,url:r},i.next=22,Object(gt.put)({type:Je,payload:{search_result:c}});case 22:return i.next=24,Object(gt.put)({type:Ye,payload:{loading:!1}});case 24:case"end":return i.stop()}}),At)}function Ut(){return ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(gt.takeEvery)(Me,Lt);case 2:case"end":return e.stop()}}),Dt)}var Ht=r(240),zt=r.n(Ht),Wt=ft.a.mark(Jt),Gt=ft.a.mark(Kt),Ft=ft.a.mark(Zt),Bt=ft.a.mark($t),qt=ft.a.mark(Qt),Mt=function(e){return e.user.userId},Yt=function(e){return e.collection.categories};function Jt(){var e,t,r;return ft.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(gt.call)(wt.firestore.getCollection,"categories");case 2:return e=a.sent,a.next=5,Object(gt.select)(Mt);case 5:return t=a.sent,r=[],e.forEach((function(e){var a=e.data();a.uid===t&&r.push(a)})),r=r.sort((function(e,t){return e.category<t.category?-1:1})),a.next=11,Object(gt.put)({type:lt,payload:{categories:r}});case 11:case"end":return a.stop()}}),Wt)}function Kt(e){var t,r,a,s,n;return ft.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(gt.call)(zt.a.words,t);case 3:return r=c.sent,c.next=6,Object(gt.select)(Mt);case 6:return a=c.sent,c.next=9,Object(gt.select)(Yt);case 9:if(s=c.sent,n=s.filter((function(e){return e===r})),!(r&&r.length>0&&0===n.length)){c.next=20;break}return c.next=14,Object(gt.call)(wt.firestore.addDocument,"categories",{category:r,uid:a});case 14:if(!c.sent){c.next=20;break}return s.push({category:r}),s=s.sort((function(e,t){return e.category<t.category?-1:1})),c.next=20,Object(gt.put)({type:lt,payload:{categories:s}});case 20:case"end":return c.stop()}}),Gt)}function Zt(e){var t,r,a,s,n,c;return ft.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.next=3,Object(gt.select)(Mt);case 3:if(r=i.sent,a=t.search_result,s=t.category,n=Object(it.a)(Object(it.a)({},a),{},{category:s,uid:r,created_at:new Date,favourite:!1}),!(r.length>0&&s.length>0&&a.url.length>0)){i.next=14;break}return i.next=10,Object(gt.call)(wt.firestore.addDocument,"collections",n);case 10:return c=i.sent,n.id=c.id,i.next=14,Object(gt.put)({type:dt,payload:{video_details:n}});case 14:case"end":return i.stop()}}),Ft)}function $t(){var e,t,r;return ft.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(gt.put)({type:jt,payload:!0});case 2:return a.next=4,Object(gt.select)(Mt);case 4:return e=a.sent,a.next=7,Object(gt.call)(wt.firestore.getCollection,"collections");case 7:return t=a.sent,r={},t.forEach((function(t){var a=t.data();if(a.uid===e){var s=a.category;void 0===r[s]&&(r[s]=[]),a.id=t.id,r[s].push(a)}})),a.next=12,Object(gt.put)({type:ut,payload:{collections:r}});case 12:return a.next=14,Object(gt.put)({type:jt,payload:!1});case 14:case"end":return a.stop()}}),Bt)}function Qt(){return ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(gt.takeEvery)(ze,Jt);case 2:return e.next=4,Object(gt.takeEvery)(We,Kt);case 4:return e.next=6,Object(gt.takeEvery)(Ge,Zt);case 6:return e.next=8,Object(gt.takeEvery)(Fe,$t);case 8:case"end":return e.stop()}}),qt)}var Xt=ft.a.mark(er);function er(){return ft.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(gt.all)([Tt(),Ut(),Qt()]);case 2:case"end":return e.stop()}}),Xt)}var tr=Object(pt.default)(),rr=Object(tt.c)({user:nt,search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;return t.type===Ye?Object.assign({},e,{loading:t.payload.loading}):t.type===Je?Object.assign({},e,{loading:!1,search_result:t.payload.search_result,search_status:!0,search_error:{error:!1,msg:""}}):t.type===Ke?Object.assign({},e,{loading:!1,search_result:{title:"",author_name:"",thumbnail_url:""},search_status:!1,search_error:{error:!1,msg:""}}):t.type===Ze?Object.assign({},e,{loading:!1,search_result:{title:"",author_name:"",thumbnail_url:""},search_status:!1,search_error:{error:t.payload.error_status,msg:t.payload.error_msg}}):e},collection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;if(t.type===lt)return Object.assign({},e,{categories:Object(ot.a)(t.payload.categories)});if(t.type===dt){var r=e.my_collections;return void 0===r[t.payload.video_details.category]&&(r[t.payload.video_details.category]=[]),r[t.payload.video_details.category].push(t.payload.video_details),Object.assign({},e,{my_collections:Object(it.a)({},r)})}return t.type===ut?Object.assign({},e,{my_collections:Object(it.a)({},t.payload.collections)}):t.type===jt?Object.assign({},e,{collection_loading:t.payload}):e}}),ar={key:"root",storage:at.a,blacklist:["search"]},sr=Object(rt.a)(ar,rr),nr=Object(tt.e)(sr,Object(tt.a)(tr)),cr=Object(rt.b)(nr);tr.run(er);var ir=r(241);i.a.render(Object(a.jsx)(y.a,{store:nr,children:Object(a.jsx)(ir.a,{loading:null,persistor:cr,children:Object(a.jsx)(Xe,{})})}),document.getElementById("root")),et()}},[[410,1,2]]]);
//# sourceMappingURL=main.040f4091.chunk.js.map