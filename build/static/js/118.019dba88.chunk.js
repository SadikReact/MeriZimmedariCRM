(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{2346:function(e,t,a){"use strict";a.r(t);var n=a(13),o=a(14),r=a(16),s=a(15),c=a(808),i=a.n(c),l=a(0),d=a.n(l),m=a(1143),u=a(1141),p=a(1142),b=a(172),h=a(1146),f=a(1159),E=(a(853),a(802)),N=a(803),C=(a(805),a(806),a(168)),S=(a(27),a(793)),g=a.n(S),y=a(56),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){console.log(o.state.desc),o.setState({editorState:e,desc:i()(Object(E.convertToRaw)(e.getCurrentContent()))})},o.submitHandler=function(e){e.preventDefault(),C.a.post("/admin/add_term_cond",o.state).then((function(e){console.log(e),o.props.history.push("/app/pageSetUp/termscondition/TermConditionList"),g()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={desc:"",editorState:E.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Term And Condition")),d.a.createElement(p.a,null,d.a.createElement(y.b,{render:function(e){var t=e.history;return d.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/pageSetUp/termscondition/TermConditionList")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(f.a,{onSubmit:this.submitHandler},d.a.createElement(N.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),d.a.createElement("br",null),d.a.createElement(b.a,{color:"primary"},"Add New T&C"))))}}]),a}(d.a.Component);t.default=k},853:function(e,t,a){}}]);
//# sourceMappingURL=118.019dba88.chunk.js.map