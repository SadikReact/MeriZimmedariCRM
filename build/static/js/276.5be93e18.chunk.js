(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[276],{2413:function(e,a,t){"use strict";t.r(a);var r=t(13),i=t(14),n=t(15),l=t(16),c=t(0),d=t.n(c),o=t(1155),s=t(1153),m=t(1154),u=t(1158),f=t(789),h=t(792),g=t(790),p=t(788),v=t(1173),N=t(172),w=t(798),E=t(564),S=t(259),b=t(169),P=(t(799),t(795)),k=t.n(P),z=(t(806),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"User ID",field:"User ID",filter:!0,width:240,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a._id)}},{headerName:"User Name",field:"UserName",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.firstName)}},{headerName:"Date of Birth",field:"dob",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"Gender",field:"Gender",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"Phone Number",field:"PhoneNumber",filter:!0,width:190,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"Email ID",field:"email",filter:!0,width:240,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.email)}},{headerName:"Email Status",field:"email",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:""}," Not Verified")}},{headerName:"Registration Date",field:"registeration",filter:!0,width:190,cellRendererFramework:function(e){return d.a.createElement("div",{className:""}," 01/02/2024")}},{headerName:"Subscription Status",field:"Subscription",filter:!0,width:230,cellRendererFramework:function(e){return d.a.createElement("div",{className:""},"Pending")}},{headerName:"Subscription Plan",field:"Plan",filter:!0,width:190,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"No.Of Nominee Added",field:"Nominee",filter:!0,width:230,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"No.Of Asset Type Added",field:"Asset",filter:!0,width:230,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"No. Of Total Asset Added",field:"Total",filter:!0,width:230,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}},{headerName:"No.Of Confidential Note Added",field:"Confidential",filter:!0,width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:""})}}]},e.userList=function(){E.a.get("/user-list").then((function(a){var t=a.data.User;e.setState({rowData:t})})).catch((function(e){k()("Something Went Wrong")}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.userList()}},{key:"runthisfunction",value:function(e){var a=this;console.log(e),k()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":E.a.delete("/admin/dlt_plantyp/".concat(e)).then((function(e){a.planTypeList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,i=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(s.a,{className:"m-1"},d.a.createElement(m.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User List")),d.a.createElement(m.a,{className:""})),d.a.createElement(u.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(f.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(S.a,{className:"ml-50",size:15})),d.a.createElement(g.a,{right:!0},d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(N.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(b.a.Consumer,null,(function(a){return d.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component));a.default=z}}]);
//# sourceMappingURL=276.5be93e18.chunk.js.map