(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{2444:function(e,t,a){"use strict";a.r(t);var o=a(51),n=a(13),r=a(14),s=a(16),i=a(15),c=a(0),l=a.n(c),d=a(1146),m=a(1149),u=a(1162),p=a(171),b=(a(853),a(800)),h=a(801),f=a(806),S=a.n(f),g=(a(804),a(805),a(563)),v=a(793),E=a.n(v),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:S()(Object(b.convertToRaw)(e.getCurrentContent()))})},r.changeHandler=function(e){r.setState(Object(o.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),g.a.post("/admin/addPrmiumSrvc",r.state).then((function(e){console.log(e),r.props.history.push("/app/premium/paidServeiceList"),E()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},r.state={desc:"",editorState:b.EditorState.createEmpty()},r.state={pack_nameM:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/admin/plan_list").then((function(t){console.log(t),e.setState({pack_nameM:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{onSubmit:this.submitHandler},l.a.createElement(h.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(p.a,{color:"primary"}," Add Paid Serveice"))))}}]),a}(l.a.Component);t.default=k},853:function(e,t,a){}}]);
//# sourceMappingURL=121.5dfa68d7.chunk.js.map