(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[230],{2414:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return q}));var n=t(51),c=t(13),s=t(14),r=t(16),l=t(15),i=t(0),m=t.n(i),u=t(1144),o=t(1145),p=t(1142),h=t(1143),d=t(1146),E=t(171),f=t(1149),b=t(1162),g=t(1163),v=t(1164),y=t(563),N=t(56),S=t(793),C=t.n(S),q=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;y.a.post("admin/editCashScript/".concat(a),s.state,{}).then((function(e){C()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/scripts/cashEquity")})).catch((function(e){console.log(e)}))},s.state={status:"",scriptName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/admin/getoneCashScript/".concat(a),{}).then((function(a){e.setState({status:a.data.data.status,scriptName:a.data.data.scriptName})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(p.a,{listTag:"div"},m.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(h.a,{href:"/app/scripts/cashEquity",tag:"a"},"Equity Cash List"),m.a.createElement(h.a,{active:!0},"Edit Equity Cash"))))),m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Equity Cash")),m.a.createElement(o.a,null,m.a.createElement(N.b,{render:function(e){var a=e.history;return m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/scripts/cashEquity")}},"Back")}}))),m.a.createElement(f.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Script Name"),m.a.createElement(v.a,{required:!0,type:"text",name:"scriptName",placeholder:"",value:this.state.scriptName,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=230.1d9392cd.chunk.js.map