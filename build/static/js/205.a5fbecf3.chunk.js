(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[205],{2372:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(16),i=t(15),c=t(0),o=t.n(c),d=t(1141),s=t(1142),u=t(1143),m=t(172),p=t(1146),f=t(787),g=t(790),v=t(788),h=t(786),E=t(1161),w=t(168),N=t(169),x=t(796),y=t(301),k=t(437),b=t(259),D=(t(797),t(564),t(56)),S=t(793),C=t.n(S),z=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(a){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(D.b,{render:function(e){var t=e.history;return o.a.createElement(y.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return t.push("/app/plans/editPlan/".concat(a.data._id))}})}}),o.a.createElement(k.a,{size:20,color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}},{headerName:"plan_combination_ID",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:250,filter:!0},{headerName:"policy_num",field:"EndDate",width:250,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t.policyNum))}},{headerName:"planMinDays",field:"planMinDays",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.planMinDays))}},{headerName:"planType",field:"planType",filter:!0,width:200,valueFormatter:function(e){var a,t;return(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.planType)?null===(t=e.data.planType)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.plan_type})).join(", "):null}},{headerName:"agesupportMin",field:"agesupportMin",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.agesupportMin))}},{headerName:"agesupportMax",field:"agesupportMax",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.agesupportMax))}},{headerName:"planMaximum",field:"planMaximum",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.planMaximum))}},{headerName:"planDeductible",field:"Maximum",width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.planDeductible))}},{headerName:"preexCoverage",field:"preexCoverage",width:200,cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.preexCoverage))}},{headerName:"preexDeductible",field:"preexDeductible",width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.preexDeductible))}},{headerName:"preexMaxCoverage",field:"preexMaxCoverage",width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.preexMaxCoverage))}},{headerName:"CoverageCntry",field:"Maximum",width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.CoverageCntry))}},{headerName:"policy_ID_fk",field:"policy_ID_fk",width:200,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t._id))}},{headerName:"policyName_fk",field:"Maximum",width:200,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t.policyName))}},{headerName:"policyActive_fk",field:"Maximum",width:200,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t.policyName))}},{headerName:"planBenefitsCode_fk",field:"Maximum",width:250,cellRendererFramework:function(e){var a,t;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.planBenefitsCode_fk)||void 0===t?void 0:t._id))}},{headerName:"Status",field:"status",filter:!0,width:250,cellRendererFramework:function(e){return"true"===e.value?o.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"false"===e.value?o.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}}]},e.getOptionDataList=function(){w.a.get("/plan/view-plan").then((function(a){e.setState({rowData:a.data.Plan}),console.log(a.data.Plan)}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getOptionDataList()}},{key:"runthisfunction",value:function(e){var a=this;C()("Do You Want To Delete","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":w.a.delete("/plan/delete-plan/".concat(e)).then((function(e){a.getOptionDataList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return o.a.createElement(d.a,{className:"app-user-list"},o.a.createElement(s.a,{sm:"12"}),o.a.createElement(s.a,{sm:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(s.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Plan List")),o.a.createElement(s.a,{className:"pt-4"},o.a.createElement(D.b,{render:function(e){var a=e.history;return o.a.createElement(m.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/plan/addPlan")}},"Add Plan")}}))),o.a.createElement(p.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(f.a,{className:"p-1 ag-dropdown"},o.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(b.a,{className:"ml-50",size:15})),o.a.createElement(v.a,{right:!0},o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(N.a.Consumer,null,(function(a){return o.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(o.a.Component);a.default=z}}]);
//# sourceMappingURL=205.a5fbecf3.chunk.js.map