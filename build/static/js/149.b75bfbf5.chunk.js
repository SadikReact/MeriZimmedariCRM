(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[149],{2383:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var l=t(51),n=t(13),s=t(14),m=t(16),r=t(15),c=t(0),o=t.n(c),d=t(1144),i=t(1145),u=t(1142),p=t(1143),h=t(1146),g=t(171),b=t(1149),E=t(1162),v=t(1163),N=t(781),f=t(1164),_=t(563),C=t(793),y=t.n(C),P=t(56),S=t(800),H=t(801),D=t(806),A=t.n(D),k=(t(804),t(805),function(e){Object(m.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,short_desc:A()(Object(S.convertToRaw)(e.getCurrentContent()))})},s.changeHandler=function(e){console.log(e.target.value),s.setState(Object(l.a)({},e.target.name,e.target.value))},s.handleImage=function(e){s.setState({selectedFile:e.target.files[0]})},s.changeHandler1=function(e){console.log(e.target.value),s.setState({allPlan:e.target.value})},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("planname",s.state.allPlan),a.append("short_desc",s.state.short_desc),a.append("title",s.state.title),a.append("plan_max",Number(s.state.plan_max)),a.append("plan_deductible",Number(s.state.plan_deductible)),a.append("coverageAmt",Number(s.state.coverageAmt)),a.append("start_date",s.state.start_date),a.append("end_date",s.state.end_date),a.append("total",Number(s.state.total)),a.append("email",s.state.email),a.append("coverage_area",s.state.coverage_area),a.append("dob",s.state.dob),null!=s.state.selectedFile&&a.append("upload_pdf",s.state.selectedFile),_.a.post("/user/createBmiPlan",a).then((function(e){console.log(e.data),y()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/plans/PlanDetailList")})).catch((function(e){console.log(e)}))},s.state={planname:"",plannameList:[],short_desc:"",title:"",long_desc:"",highlight_desc:"",upload_pdf:[],selectedFile:null,plan_max:"",plan_deductible:"",coverageAmt:"",start_date:"",end_date:"",total:"",email:"",coverage_area:"",dob:"",allPlan:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("/user/infPlanList").then((function(a){console.log(a.data),e.setState({plannameList:a.data})}))}},{key:"render",value:function(){var e;return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(u.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/plans/CreatedPlanList",tag:"a"},"BmiList"),o.a.createElement(p.a,{active:!0}," AddBMIPlan"))))),o.a.createElement(h.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"AddPlan Detail")),o.a.createElement(i.a,null,o.a.createElement(P.b,{render:function(e){var a=e.history;return o.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/plans/PlanDetailList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Plan Name"),o.a.createElement(N.a,{type:"select",name:"allPlan",defaultValue:"",value:this.state.allPlan,onChange:this.changeHandler1},o.a.createElement("option",{value:"",disabled:!0},"Select Plan Name"),this.state.plannameList&&(null===(e=this.state.plannameList)||void 0===e?void 0:e.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.planName)}))))),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Title"),o.a.createElement(f.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Upload Pdf"),o.a.createElement(f.a,{className:"form-control",type:"file",name:"upload_pdf",onChange:this.handleImage})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Plan Max"),o.a.createElement(f.a,{type:"number",name:"plan_max",placeholder:"Plan Max",value:this.state.plan_max,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Plan Deductible"),o.a.createElement(f.a,{type:"number",name:"plan_deductible",placeholder:"Plan Deductible",value:this.state.plan_deductible,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"CoverageAmt"),o.a.createElement(f.a,{type:"number",name:"coverageAmt",placeholder:"CoverageAmt",value:this.state.coverageAmt,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Start Date"),o.a.createElement(f.a,{type:"date",name:"start_date",value:this.state.start_date,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"End Date"),o.a.createElement(f.a,{type:"date",name:"end_date",value:this.state.end_date,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Total"),o.a.createElement(f.a,{type:"number",name:"total",placeholder:"Total",value:this.state.total,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Email"),o.a.createElement(f.a,{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Coverage Area"),o.a.createElement(f.a,{type:"text",name:"coverage_area",placeholder:"Coverage Area",value:this.state.coverage_area,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"DOB"),o.a.createElement(f.a,{type:"date",name:"dob",value:this.state.dob,onChange:this.changeHandler})),o.a.createElement(i.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Descripition"),o.a.createElement(H.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),o.a.createElement(d.a,{className:"m-1"},o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mt-1"},o.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"AddPlanDetail")))))))}}]),t}(c.Component))}}]);
//# sourceMappingURL=149.b75bfbf5.chunk.js.map