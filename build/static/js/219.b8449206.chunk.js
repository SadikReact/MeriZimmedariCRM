(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[219],{2441:function(e,t,a){"use strict";a.r(t);var n=a(51),i=a(13),r=a(14),c=a(16),l=a(15),o=a(0),s=a.n(o),u=a(1143),d=a(1141),m=a(1142),g=a(1146),f=a(787),p=a(790),h=a(788),S=a(786),v=a(1161),E=a(172),w=a(793),z=a.n(w),b=a(56),P=a(796),D=a(169),y=a(824),C=a.n(y),N=a(301),k=a(437),x=a(259),A=a(168),R=(a(797),a(802)),G=(a(803),a(808)),j=a.n(G),O=(a(805),a(806),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={rowData:[],desc:"",editorState:R.EditorState.createEmpty(),paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100},{headerName:"Descripiton",field:"desc",width:300,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,C()(e.data.desc)))}},{headerName:"Actions",width:200,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.b,{render:function(e){var a=e.history;return s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push("/app/premium/editPaidService/".concat(t.data._id))}})}}),s.a.createElement(k.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.onEditorStateChange=function(t){console.log(t),e.setState({editorState:t,desc:j()(Object(R.convertToRaw)(t.getCurrentContent()))})},e.changeHandler=function(t){e.setState(Object(n.a)({},t.target.name,t.target.value))},e.getServiceData=function(){A.a.get("/admin/serviceslist").then((function(t){var a=t.data.data;e.setState({rowData:a})})).catch((function(e){console.log(e.response)}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getServiceData()}},{key:"runthisfunction",value:function(e){var t=this;z()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":A.a.get("/admin/dltPsrvc/".concat(e)).then((function(e){t.getServiceData()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(d.a,{className:"m-2"},s.a.createElement(m.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Paid Service List"))),s.a.createElement(g.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(f.a,{className:"p-1 ag-dropdown"},s.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(x.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(D.a.Consumer,null,(function(t){return s.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(s.a.Component));t.default=O}}]);
//# sourceMappingURL=219.b8449206.chunk.js.map