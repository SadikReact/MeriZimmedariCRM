(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[217],{2411:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var l=t(51),n=t(13),r=t(14),o=t(16),c=t(15),i=t(0),s=t.n(i),m=t(1144),d=t(1145),p=t(1142),u=t(1143),h=t(1146),y=t(171),g=t(1149),b=t(1162),E=t(1163),N=t(1164),v=(t(816),t(800)),C=t(801),f=t(806),P=t.n(f),S=t(56),k=t(563),_=(t(804),t(805),t(793)),F=t.n(_),A=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onEditorStateChangePara=function(e){r.setState({editorState:e,paraDescription:P()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.onEditorStateChangepolicy=function(e){r.setState({editorState1:e,policyDescription:P()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.handlePolicyType=function(e){r.setState({policyType:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){},r.state={policyName:"",policyNumber:"",policyUnderWriter:"",proprietary:"",policyType:"",policyAdditionalFeatures:"",policyDescription:"",paraDescription:"",policy_page:"",policy_document:"",policy_FAQ:"",purchase_link:"",plan_image:"",brochure_link:"",purchased:"",renewed:"",policyActive:"",policyTypeList:[],editorState:v.EditorState.createEmpty()},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;k.a.get("/admin/get_pt").then((function(a){e.setState({policyTypeList:a.data.data}),console.log(a.data.data)})).catch((function(e){F()("Something Went Wrong")})),k.a.get("/admin/getOnePolicy/".concat(a)).then((function(a){var t;console.log(a.data.data);var l=null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.data,n=l.paraDesc,r=l.brochureLink,o=l.planimg,c=l.policyAdtional,i=l.policyDesc,s=l.policyDocument,m=l.policyFAQ,d=l.policyName,p=l.policyPage,u=l.policyType,h=l.policyUnderWriter,y=l.purchesLink,g=l.renewed,b=l.status,E=l.purched,N=l.policyNum,C=l.proproetary,f=v.ContentState.createFromBlockArray(Object(v.convertFromHTML)(n)),P=v.ContentState.createFromBlockArray(Object(v.convertFromHTML)(i)),S=v.EditorState.createWithContent(f),k=v.EditorState.createWithContent(P);console.log(null===u||void 0===u?void 0:u.pt_type),e.setState({policyName:d,policyNumber:N,policyUnderWriter:h,proprietary:C,policyType:null===u||void 0===u?void 0:u.pt_type,policyAdditionalFeatures:c,policyDescription:i,paraDescription:n,policy_page:p,policy_document:s,policy_FAQ:m,purchase_link:y,plan_image:o[0],brochure_link:r,purchased:E,renewed:g,policyActive:b,editorState:S,editorState1:k})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a=this;return s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(p.a,{listTag:"div"},s.a.createElement(u.a,{href:"/",tag:"a"},"Home"),s.a.createElement(u.a,{active:!0},"View Policy"))))),s.a.createElement(h.a,null,s.a.createElement(m.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Policy")),s.a.createElement(d.a,null,s.a.createElement(S.b,{render:function(e){var a=e.history;return s.a.createElement(y.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/policy/PolicyList")}},"Back")}}))),s.a.createElement(g.a,null,s.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(m.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyName "),s.a.createElement(N.a,{disabled:!0,type:"text",name:"policyName",placeholder:"policyName",value:this.state.policyName,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyNumber"),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policyNumber",placeholder:"PolicyNumber",value:this.state.policyNumber,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"policyUnderWriter "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policyUnderWriter",placeholder:"PolicyUnderWriter",value:this.state.policyUnderWriter,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Proprietary "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"proprietary",placeholder:"Proprietary",value:this.state.proprietary,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyAdditionalFeatures "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policyAdditionalFeatures",placeholder:"PolicyAdditionalFeatures",value:this.state.policyAdditionalFeatures,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Page "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policy_page",placeholder:"PolicyPage",value:this.state.policy_page,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Document "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policy_document",placeholder:"Policy Document",value:this.state.policy_document,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy FAQ "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"policy_FAQ",placeholder:"Policy FAQ",value:this.state.policy_FAQ,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Purchase Link "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"purchase_link",placeholder:"Purchase_link",value:this.state.purchase_link,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Brochure Link "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"brochure_link",placeholder:"Brochure Link",value:this.state.brochure_link,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Purchased "),s.a.createElement(N.a,{type:"text",disabled:!0,name:"purchased",placeholder:"Purchased",value:this.state.purchased,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Renewed"),s.a.createElement(N.a,{type:"text",disabled:!0,name:"renewed",placeholder:"Renewed",value:this.state.renewed,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,{for:"data-category"},"Policy Type"),s.a.createElement(N.a,{type:"select",disabled:!0,id:"data-category",value:this.state.policyType,onChange:this.handlePolicyType},null===(e=this.state.policyTypeList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:e._id,value:e._id},e.pt_type)})))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Descripition"),s.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",readOnly:!0,editorState:this.state.editorState1,onEditorStateChange:this.onEditorStateChangepolicy,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Para Descripition"),s.a.createElement(C.Editor,{readOnly:!0,toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChangePara,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement("div",null,s.a.createElement(E.a,null,"Plan Image ")),s.a.createElement("div",null,s.a.createElement("img",{src:this.state.plan_image,alt:"Plan Image",width:200,height:200}))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(E.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active",checked:!0}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=217.92615879.chunk.js.map