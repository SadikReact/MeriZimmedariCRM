(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[218],{2402:function(e,a,t){"use strict";t.r(a);var n=t(51),l=t(13),o=t(14),s=t(16),r=t(15),c=t(0),i=t.n(c),m=t(1146),d=t(1144),p=t(1145),u=t(171),b=t(1149),y=t(1162),h=t(1163),E=t(1164),g=t(56),f=t(563),N=t(800),S=t(801),v=t(806),T=t.n(v),C=(t(804),t(805),t(795)),k=t(793),P=t.n(k),j=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=a.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:T()(Object(N.convertToRaw)(e.getCurrentContent()))})},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){var a=localStorage.getItem("userId");e.preventDefault();var t={pt_type:o.state.policyType,pt_type_desc:o.state.desc};f.a.post("/admin/add_Pt/".concat(a),t).then((function(e){console.log(e),P()("Success!","Submitted SuccessFull!","success"),o.setState({desc:""}),o.props.history.push("/app/policy/PolicyTypeList")})).catch((function(e){console.log(e)}))},o.state={policyType:"",desc:""},o}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(C.a,{breadCrumbTitle:"PolicyType",breadCrumbParent:"Home",breadCrumbActive:"PolicyType "}),i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"PolityType")),i.a.createElement(p.a,null,i.a.createElement(g.b,{render:function(e){var a=e.history;return i.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/policy/PolicyTypeList")}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(h.a,null,"PolcyType "),i.a.createElement(E.a,{type:"text",name:"policyType",placeholder:"PolicyType",value:this.state.policyType,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(h.a,null,"Descripition"),i.a.createElement(S.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(i.a.Component);a.default=j}}]);
//# sourceMappingURL=218.423d311f.chunk.js.map