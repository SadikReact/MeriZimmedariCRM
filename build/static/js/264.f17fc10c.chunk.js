(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[264],{2386:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(16),l=t(15),o=t(0),c=t.n(o),d=t(1146),m=t(1144),u=t(1145),s=t(1149),v=t(787),f=t(790),h=t(788),g=t(786),p=t(1164),N=t(171),w=t(56),E=t(796),S=t(563),b=t(303),z=t(300),P=t(436),y=t(258),k=t(168),D=(t(797),t(793)),C=t.n(D),x=(t(816),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(w.b,{render:function(e){var t=e.history;return c.a.createElement(b.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){var e;return t.push({pathname:"/app/nominee/ViewNominee/".concat(null===(e=a.data)||void 0===e?void 0:e._id),state:a})}})}}),c.a.createElement(w.b,{render:function(e){var t=e.history;return c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){var e;return t.push({pathname:"/app/nominee/EditNominee/".concat(null===(e=a.data)||void 0===e?void 0:e._id),state:a.data})}})}}),c.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t;e.runthisfunction(null===(t=a.data)||void 0===t?void 0:t._id)}}))}},{headerName:"Name",field:"name",filter:!0,width:150,cellRendererFramework:function(e){var a,t;return c.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.nomineeName})))}},{headerName:"Email",field:"email",filter:!0,width:150,cellRendererFramework:function(e){var a,t;return c.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.nomineeEmailId})))}},{headerName:"Nominee PhoneNumber",field:"NomineePhoneNumber",filter:!0,width:200,cellRendererFramework:function(e){var a,t;return c.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.NomineePhoneNumber})))}},{headerName:"Relation With Nominee",field:"relationWithNominee",filter:!0,width:200,cellRendererFramework:function(e){var a,t;return c.a.createElement("div",{className:"",style:{width:"100"}},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.relationWithNominee})))}},{headerName:"PercentageofShare",field:"relationWithNominee",filter:!0,width:200,cellRendererFramework:function(e){var a,t;return c.a.createElement("div",{className:"",style:{width:"100"}},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.percentageofShar})))}}]},e.NomineeList=function(){S.a.get("/nominee/view-nominee").then((function(a){var t,n;console.log(null===(t=a.data)||void 0===t?void 0:t.Nominee);var i=null===(n=a.data)||void 0===n?void 0:n.Nominee;e.setState({rowData:i})})).catch((function(e){C()("Something Went Wrong")}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.NomineeList()}},{key:"runthisfunction",value:function(e){var a=this;console.log(e),C()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":S.a.delete("/nominee/delete-nominee/".concat(e)).then((function(e){a.NomineeList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(m.a,{className:"m-1"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Nominee List")),c.a.createElement(u.a,{className:""})),c.a.createElement(s.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(v.a,{className:"p-1 ag-dropdown"},c.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(p.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(N.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(k.a.Consumer,null,(function(a){return c.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(c.a.Component));a.default=x}}]);
//# sourceMappingURL=264.f17fc10c.chunk.js.map