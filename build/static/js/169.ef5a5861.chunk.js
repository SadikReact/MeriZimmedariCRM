(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2460:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),i=a(16),l=a(15),c=a(0),o=a.n(c),s=a(1144),u=a(1145),d=a(1146),m=a(171),p=a(1149),g=a(787),f=a(790),h=a(788),E=a(786),v=a(1164),w=a(56),S=a(796),y=a(168),b=a(300),z=a(436),N=a(258),P=a(563),D=(a(797),a(793)),k=a.n(D),C=a(816),x=a.n(C),A=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150},{headerName:"Title",field:"title",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.title))}},{headerName:"Upload Image",field:"img",width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:" "},e.data.img[0]?o.a.createElement("img",{src:e.data.img[0],alt:"No img",width:"100%"}):o.a.createElement("span",{style:{color:"red"}},"No Image Available"))}},{headerName:"Description",field:"desc",width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,x()(e.data.desc)))}},{headerName:"Actions",field:"sortorder",width:250,cellRendererFramework:function(t){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(w.b,{render:function(e){var a=e.history;return o.a.createElement(b.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push("/app/explore/Trupee/editopportunity/".concat(t.data._id))}})}}),o.a.createElement(z.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.Opportunity=function(){P.a.get("/admin/getOportunity").then((function(t){console.log(t.data.data);var a=t.data.data;JSON.stringify(a),e.setState({rowData:a})})).catch((function(e){console.log(e.response)}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.Opportunity()}},{key:"runthisfunction",value:function(e){var t=this;k()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":P.a.get("admin/dltOportunity/".concat(e)).then((function(e){t.Opportunity()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return o.a.createElement(s.a,{className:"app-user-list"},o.a.createElement(u.a,{sm:"12"}),o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(s.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Opportunity List")),o.a.createElement(u.a,null,o.a.createElement(w.b,{render:function(e){var t=e.history;return o.a.createElement(m.a,{className:"btn btn-success float-right",onClick:function(){return t.push("/app/explore/Trupee/addOppor")}},"Add Opportunity")}}))),o.a.createElement(p.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(g.a,{className:"p-1 ag-dropdown"},o.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(N.a,{className:"ml-50",size:15})),o.a.createElement(h.a,{right:!0},o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(y.a.Consumer,null,(function(t){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=A}}]);
//# sourceMappingURL=169.ef5a5861.chunk.js.map