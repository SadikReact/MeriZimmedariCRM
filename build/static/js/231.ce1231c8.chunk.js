(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[231],{2371:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(51),c=t(13),l=t(14),r=t(16),s=t(15),m=t(0),i=t.n(m),o=t(1144),u=t(1145),d=t(1142),p=t(1143),h=t(1146),E=t(171),f=t(1149),b=t(1162),g=t(1163),v=t(1164),N=t(563),y=t(56),S=t(793),x=t.n(S),O=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;N.a.post("/admin/editFnoScript/".concat(a),l.state).then((function(e){console.log(e),x()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},l.state={scriptName:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/getoneFnoScript/".concat(a)).then((function(a){console.log(a),e.setState({scriptName:a.data.data.scriptName})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/scripts/fnIndex",tag:"a"},"FNO Index List"),i.a.createElement(p.a,{active:!0},"Edit FNO Index"))))),i.a.createElement(h.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit FNO Index")),i.a.createElement(u.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/scripts/fnIndex")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(o.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Script Name"),i.a.createElement(v.a,{required:!0,type:"text",name:"scriptName",placeholder:"",value:this.state.scriptName,onChange:this.changeHandler}))),i.a.createElement(o.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=231.ce1231c8.chunk.js.map