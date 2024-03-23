(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{2465:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(14),s=a(16),r=a(15),o=a(0),i=a.n(o),c=a(1141),d=a(1142),u=a(1143),p=a(1144),m=a(1145),E=a(1146),h=a(874),g=a(868),b=a(966),f=a(259),O=a(399),v=a(185),y=a(4),C=a.n(y),A=a(795),T=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={collapse:!0,reload:!1,isVisible:!0,status:"Opened",isVisibleAll:!0,reloadAll:!1,collapseAll:!0,statusAll:"Opened"},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1})}),2e3)},e.refreshCardAll=function(){e.setState({reloadAll:!0}),setTimeout((function(){e.setState({reloadAll:!1})}),2e3)},e.toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.toggleAll=function(){e.setState((function(e){return{collapseAll:!e.collapseAll}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEnteredAll=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEnteringAll=function(){e.setState({statusAll:"Opening..."})},e.onEnteredAll=function(){e.setState({statusAll:"Opened"})},e.onExited=function(){e.setState({status:"Closed"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExitingAll=function(){e.setState({statusAll:"Closing..."})},e.onExitedAll=function(){e.setState({statusAll:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e.removeCardAll=function(){e.setState({isVisibleAll:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),i.a.createElement(c.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(m.a,null,"Card Actions")),i.a.createElement(E.a,null,i.a.createElement(h.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Action"),i.a.createElement("th",null,"Icon"),i.a.createElement("th",null,"Details"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Collapse"),i.a.createElement("td",{className:"text-center"},i.a.createElement(f.a,{className:"collapse-icon",size:15})),i.a.createElement("td",null," Collapse card content using collapse action.")),i.a.createElement("tr",null,i.a.createElement("td",null,"Refresh Content"),i.a.createElement("td",{className:"text-center"},i.a.createElement(O.a,{size:15})),i.a.createElement("td",null,"Refresh your card content using refresh action.")),i.a.createElement("tr",null,i.a.createElement("td",null,"Remove Card"),i.a.createElement("td",{className:"text-center"},i.a.createElement(v.a,{size:15})),i.a.createElement("td",null," Remove card from page using remove card action"))))))),i.a.createElement(d.a,{md:"6",sm:"12"},i.a.createElement(u.a,{className:C()("card-action",{"card-collapsed":"Closed"===this.state.status,"card-shown":"Opened"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status})},i.a.createElement(p.a,null,i.a.createElement(m.a,null,"Collapsible"),i.a.createElement(f.a,{className:"collapse-icon",size:15,onClick:this.toggle})),i.a.createElement(g.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},i.a.createElement(E.a,null,i.a.createElement("p",null,"You can create collapsible card using reactstrap's collapse component, to create a collapsible card you'll have to manage it's collapse state."),i.a.createElement("p",null,"Click on ",i.a.createElement(f.a,{size:15})," to see card collapse in action"))))),i.a.createElement(d.a,{md:"6",sm:"12"},i.a.createElement(u.a,{className:C()("card-reload card-action",{refreshing:this.state.reload})},i.a.createElement(p.a,null,i.a.createElement(m.a,null,"Refresh"),i.a.createElement(O.a,{size:15,onClick:this.refreshCard})),i.a.createElement(E.a,null,this.state.reload?i.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"",i.a.createElement("p",null,"You can add refresh content action to card by adding class"," ",i.a.createElement("code",null,".card-reload")," with your card tag, and add conditional spinner into card body to showp when card is refreshing."),i.a.createElement("p",null,"Click on ",i.a.createElement(O.a,{size:15})," to see card refresh in action")))),i.a.createElement(d.a,{md:"6",sm:"12"},i.a.createElement(u.a,{className:C()("card-action",{"d-none":!1===this.state.isVisible})},i.a.createElement(p.a,null,i.a.createElement(m.a,null,"Remove Card"),i.a.createElement(v.a,{size:15,onClick:this.removeCard})),i.a.createElement(E.a,null,i.a.createElement("p",null,"You can create a removable card by managing state"," ",i.a.createElement("code",null,"isVisible"),", which will add conditional d-none class which clicked on icon to remove your card."),i.a.createElement("p",null,"Click on ",i.a.createElement(v.a,{size:15})," to see card refresh in action")))),i.a.createElement(d.a,{md:"6",sm:"12"},i.a.createElement(u.a,{className:C()("card-action card-reload",{"d-none":!1===this.state.isVisibleAll,refreshing:this.state.reloadAll,"card-collapsed":"Closed"===this.state.statusAll,closing:"Closing..."===this.state.statusAll,opening:"Opening..."===this.state.statusAll})},i.a.createElement(p.a,null,i.a.createElement(m.a,null,"All Actions"),i.a.createElement("div",{className:"actions"},i.a.createElement(f.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleAll}),i.a.createElement(O.a,{className:"mr-50",size:15,onClick:this.refreshCardAll}),i.a.createElement(v.a,{size:15,onClick:this.removeCardAll}))),i.a.createElement(g.a,{isOpen:this.state.collapseAll,onExited:this.onExitedAll,onEntered:this.onEnteredAll,onExiting:this.onExitingAll,onEntering:this.onEnteringAll},i.a.createElement(E.a,null,this.state.reloadAll?i.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"","You can also add all three action together by managing all three actions's required classes and by managing their states."))))))}}]),a}(i.a.Component);t.default=T},868:function(e,t,a){"use strict";var n,l=a(5),s=a(9),r=a(11),o=a(12),i=a(34),c=a(0),d=a.n(c),u=a(1),p=a.n(u),m=a(4),E=a.n(m),h=a(91),g=a(3),b=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=O(O({},h.Transition.propTypes),{},{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:g.tagPropType,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),y=O(O({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.TransitionTimeouts.Collapse}),C=((n={})[g.TransitionStatuses.ENTERING]="collapsing",n[g.TransitionStatuses.ENTERED]="collapse show",n[g.TransitionStatuses.EXITING]="collapsing",n[g.TransitionStatuses.EXITED]="collapse",n);function A(e){return e.scrollHeight}var T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(r.a)(a))})),a}Object(o.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:A(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:A(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,r=t.className,o=t.navbar,i=t.cssModule,c=t.children,u=(t.innerRef,Object(s.a)(t,b)),p=this.state.height,m=Object(g.pick)(u,g.TransitionPropTypeKeys),f=Object(g.omit)(u,g.TransitionPropTypeKeys);return d.a.createElement(h.Transition,Object(l.a)({},m,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return C[e]||"collapse"}(t),s=Object(g.mapToCssModules)(E()(r,n,o&&"navbar-collapse"),i),u=null===p?null:{height:p};return d.a.createElement(a,Object(l.a)({},f,{style:O(O({},f.style),u),className:s,ref:e.props.innerRef}),c)}))},t}(c.Component);T.propTypes=v,T.defaultProps=y,t.a=T},874:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(0),r=a.n(s),o=a(1),i=a.n(o),c=a(4),d=a.n(c),u=a(3),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],m={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:u.tagPropType,responsiveTag:u.tagPropType,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},E=function(e){var t=e.className,a=e.cssModule,s=e.size,o=e.bordered,i=e.borderless,c=e.striped,m=e.dark,E=e.hover,h=e.responsive,g=e.tag,b=e.responsiveTag,f=e.innerRef,O=Object(l.a)(e,p),v=Object(u.mapToCssModules)(d()(t,"table",!!s&&"table-"+s,!!o&&"table-bordered",!!i&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!E&&"table-hover"),a),y=r.a.createElement(g,Object(n.a)({},O,{ref:f,className:v}));if(h){var C=Object(u.mapToCssModules)(!0===h?"table-responsive":"table-responsive-"+h,a);return r.a.createElement(b,{className:C},y)}return y};E.propTypes=m,E.defaultProps={tag:"table",responsiveTag:"div"},t.a=E},966:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(0),r=a.n(s),o=a(1),i=a.n(o),c=a(4),d=a.n(c),u=a(3),p=["className","cssModule","type","size","color","children","tag"],m={tag:u.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},E=function(e){var t=e.className,a=e.cssModule,s=e.type,o=e.size,i=e.color,c=e.children,m=e.tag,E=Object(l.a)(e,p),h=Object(u.mapToCssModules)(d()(t,!!o&&"spinner-"+s+"-"+o,"spinner-"+s,!!i&&"text-"+i),a);return r.a.createElement(m,Object(n.a)({role:"status"},E,{className:h}),c&&r.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},c))};E.propTypes=m,E.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=E}}]);
//# sourceMappingURL=113.d2c7adf0.chunk.js.map