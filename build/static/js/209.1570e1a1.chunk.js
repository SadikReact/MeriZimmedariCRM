(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[209],{2433:function(e,a,t){"use strict";t.r(a);var l=t(51),n=t(13),s=t(14),m=t(15),i=t(16),r=t(0),c=t.n(r),o=t(1155),d=t(1153),u=t(1154),p=t(172),h=t(1158),f=t(1171),E=t(1172),b=t(1173),g=t(56),y=t(564),v=t(804),C=(t(803),t(807)),F=t.n(C),S=(t(805),t(810),t(797)),x=t(795),N=t.n(x),z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:F()(Object(v.convertToRaw)(e.getCurrentContent()))})},s.handleFileChange1=function(e){console.log(e.target.files[0]),s.setState({files:e.target.files[0]})},s.handleFileChange=function(e){console.log(e.target.value),s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler1=function(e){e.preventDefault();var a=new FormData;a.append("file",s.state.files),y.a.post("/admin/import-data",a).then((function(e){N()("Success!",e.data.message,"success")})).catch((function(e){console.error(e)}))},s.submitHandler=function(e){e.preventDefault();var a={Asset_Type:s.state.assetType,Field_1:s.state.field1,Field_2:s.state.field2,Field_3:s.state.field3,Field_4:s.state.field4,Drop_down_Menu_Options:s.state.company};console.log(a),y.a.post("/admin/save-field",a).then((function(e){console.log(e.data.message),N()("Success!",e.data.message,"success")})).catch((function(e){console.error(e)}))},s.state={planType:"",desc:""},s}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(S.a,{breadCrumbTitle:"Add Assets",breadCrumbParent:"Home",breadCrumbActive:"Add Assets"}),c.a.createElement(o.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Assets")),c.a.createElement(u.a,null,c.a.createElement(g.b,{render:function(e){var a=e.history;return c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/plan/PlanTypeList")}},"Back")}}))),c.a.createElement(h.a,null,c.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler1},c.a.createElement(d.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px",textTransform:"capitalize",marginBottom:"10px"}},"bulk upload"),c.a.createElement(b.a,{type:"file",name:"assetName",onChange:this.handleFileChange1})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))),c.a.createElement("h2",null,"Asset Fields")),c.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px"}},"Asset Name"),c.a.createElement(b.a,{style:{fontSize:"18px"},type:"text",name:"assetType",value:this.state.assetType,placeholder:"Asset Name",onChange:this.handleFileChange}))),c.a.createElement(d.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px"}},"Filed 1"),c.a.createElement(b.a,{style:{fontSize:"18px"},type:"text",placeholder:"Field 1",name:"field1",value:this.state.field1,onChange:this.handleFileChange})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px"}},"Filed 2"),c.a.createElement(b.a,{style:{fontSize:"18px"},type:"text",placeholder:"Field 2",name:"field2",value:this.state.field2,onChange:this.handleFileChange})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px"}},"Filed 3"),c.a.createElement(b.a,{style:{fontSize:"18px"},type:"text",placeholder:"Field 3",name:"field3",value:this.state.field3,onChange:this.handleFileChange})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},c.a.createElement(E.a,{style:{fontSize:"18px"}},"Filed 4"),c.a.createElement(b.a,{style:{fontSize:"18px"},type:"text",placeholder:"Field 4",name:"field4",value:this.state.field4,onChange:this.handleFileChange}))),c.a.createElement(d.a,null,c.a.createElement("div",{style:{justifyContent:"right",display:"flex"}},c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(c.a.Component);a.default=z}}]);
//# sourceMappingURL=209.1570e1a1.chunk.js.map