(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[254],{2362:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t(51),c=t(13),l=t(14),r=t(16),s=t(15),m=t(0),i=t.n(m),u=t(1141),o=t(1142),d=t(1139),p=t(1140),h=t(1143),E=t(172),f=t(1146),b=t(1159),y=t(1160),g=t(1161),v=t(168),D=t(793),x=t.n(D),N=t(56),S=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;v.a.post("/admin/editDate/".concat(a),l.state).then((function(e){console.log(e),x()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/trade/expdate/expDateList")})).catch((function(e){console.log(e)}))},l.state={expDate:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getoneexpDate/".concat(a),{}).then((function(a){e.setState({expDate:a.data.data.expDate})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/trade/expdate/expDateList",tag:"a"},"Expiry Date List"),i.a.createElement(p.a,{active:!0},"Edit Date"))))),i.a.createElement(h.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Date")),i.a.createElement(o.a,null,i.a.createElement(N.b,{render:function(e){var a=e.history;return i.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/expdate/expDateList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Expiry Date"),i.a.createElement(g.a,{required:!0,type:"dd/mm/yyyy",name:"expDate",placeholder:"dd/mm/yyyy",value:this.state.expDate,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=254.a2d22858.chunk.js.map