(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[174],{2437:function(e,t,a){"use strict";a.r(t),a.d(t,"AddFaq",(function(){return y}));var n=a(32),l=a(51),c=a(13),s=a(14),r=a(16),i=a(15),o=a(0),d=a.n(o),m=a(1143),u=a(1141),h=a(1142),p=a(172),b=a(1146),f=a(1159),E=a(1160),g=a(1161),v=a(56),x=a(168),y=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),x.a.post("/admin/addFAQ",n.state).then((function(e){console.log(e),n.props.history.push("/app/faq/faqList")})).catch((function(e){console.log(e)}))},n.state={addTextbox:[{}],title:"",desc:""},n}return Object(s.a)(a,[{key:"addControls",value:function(){this.setState({title:[].concat(Object(n.a)(this.state.title),[""]),desc:[].concat(Object(n.a)(this.state.desc),[""]),addTextbox:[].concat(Object(n.a)(this.state.addTextbox),[""])})}},{key:"delControl",value:function(e){console.log(this.state),this.state.addTextbox.splice(e,1),this.state.title.splice(e,1),this.state.desc.splice(e,1),this.setState({})}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(h.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add FAQ")),d.a.createElement(h.a,null,d.a.createElement(v.b,{render:function(e){var t=e.history;return d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/faq/faqList")}},"Back")}}))),d.a.createElement(b.a,null,d.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(u.a,{className:"mb-2"},d.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Title"),d.a.createElement(g.a,{type:"text",required:!0,placeholder:"Enter Title",name:"title",value:this.state.title,onChange:this.changeHandler})),d.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Description"),d.a.createElement(g.a,{type:"text",required:!0,placeholder:"Enter Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),d.a.createElement(u.a,null,d.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add FAQ"))))))}}]),a}(o.Component);t.default=y}}]);
//# sourceMappingURL=174.1aed31d0.chunk.js.map