/*! For license information please see 139.74680821.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{2388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(116),a=n(32),o=n(13),i=n(14),l=n(16),c=n(15),u=n(0),s=n.n(u),h=n(1144),m=n(1145),f=n(1142),p=n(1143),d=n(1146),v=n(171),g=n(1149),y=n(1162),b=n(862),E=n(1164),w=n(781),N=(n(816),n(800),n(801),n(806),n(56)),x=n(563),L=(n(804),n(805),n(793)),O=n.n(L);function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var s={};function h(){}function m(){}function f(){}var p={};l(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==t&&n.call(v,a)&&(p=v);var g=f.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=f,l(g,"constructor",f),l(f,"constructor",m),m.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var k=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e,t){var n=Object(a.a)(r.state.listData);n[e][t.target.name]=t.target.value,console.log(n),r.setState({nominee:n})},r.submitHandler=function(e){e.preventDefault();var t={nominee:r.state.nominee};console.log(t);var n=r.props.location.pathname.split("/"),a=n[n.length-1];console.log(a),x.a.put("/nominee/update-nominee/".concat(a),t).then((function(e){O()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/nominee/NomineeList")})).catch((function(e){console.log(e.response)}))},r.state={listData:[],nominee:[{nomineeName:"",nomineeEmailId:"",percentageofShar:null,NomineePhoneNumber:null,relationWithNominee:""}]},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(j().mark((function e(){var t,n,r,a,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.pathname.split("/"),n=t[t.length-1],e.prev=2,e.next=5,x.a.get("/nominee/view-nominee-by-id/".concat(n));case 5:o=e.sent,this.setState({listData:null===o||void 0===o||null===(r=o.data)||void 0===r||null===(a=r.Nominee)||void 0===a?void 0:a.nominee}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement(m.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(f.a,{listTag:"div"},s.a.createElement(p.a,{href:"/",tag:"a"},"Home"),s.a.createElement(p.a,{active:!0}," Edit Nominee"))))),s.a.createElement(d.a,null,s.a.createElement(h.a,{className:"m-2"},s.a.createElement(m.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Nominee")),s.a.createElement(m.a,null,s.a.createElement(N.b,{render:function(e){var t=e.history;return s.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.goBack()}},"Back")}}))),s.a.createElement(g.a,null,s.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(b.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"#"),s.a.createElement("th",null,"Nominee Name"),s.a.createElement("th",null,"Relation with Nominee"),s.a.createElement("th",null,"Percentage of share"),s.a.createElement("th",null,"Nominee Phone No. "),s.a.createElement("th",null,"Nominee e-mail ID"))),s.a.createElement("tbody",null,this.state.listData.map((function(t,n){return s.a.createElement("tr",{key:n},s.a.createElement("th",{scope:"row"},n+1),s.a.createElement("td",null,s.a.createElement(E.a,{type:"text",name:"nomineeName",placeholder:"nomineeName",value:null===t||void 0===t?void 0:t.nomineeName,onChange:function(t){return e.changeHandler(n,t)}})),s.a.createElement("td",null,s.a.createElement(w.a,{type:"select",name:"relationWithNominee",value:null===t||void 0===t?void 0:t.relationWithNominee,onChange:function(t){return e.changeHandler(n,t)}},s.a.createElement("option",{value:"Father"},"Father"),s.a.createElement("option",{value:"Wife"},"Wife"),s.a.createElement("option",{value:"Son"},"Son"))),s.a.createElement("td",null,s.a.createElement(E.a,{type:"text",name:"percentageofShar",placeholder:"percentageofShar",value:null===t||void 0===t?void 0:t.percentageofShar,onChange:function(t){return e.changeHandler(n,t)}})),s.a.createElement("td",null,s.a.createElement(E.a,{type:"text",name:"NomineePhoneNumber",placeholder:"NomineePhoneNumber",value:null===t||void 0===t?void 0:t.NomineePhoneNumber,onChange:function(t){return e.changeHandler(n,t)}})),s.a.createElement("td",null,s.a.createElement(E.a,{type:"text",name:"nomineeEmailId",placeholder:"nomineeEmailId",value:null===t||void 0===t?void 0:t.nomineeEmailId,onChange:function(t){return e.changeHandler(n,t)}})))})))),s.a.createElement(h.a,null,s.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},s.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Nominee")))))))}}]),n}(u.Component)},862:function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(0),i=n.n(o),l=n(1),c=n.n(l),u=n(4),s=n.n(u),h=n(3),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],f={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:h.tagPropType,responsiveTag:h.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,n=e.cssModule,o=e.size,l=e.bordered,c=e.borderless,u=e.striped,f=e.dark,p=e.hover,d=e.responsive,v=e.tag,g=e.responsiveTag,y=e.innerRef,b=Object(a.a)(e,m),E=Object(h.mapToCssModules)(s()(t,"table",!!o&&"table-"+o,!!l&&"table-bordered",!!c&&"table-borderless",!!u&&"table-striped",!!f&&"table-dark",!!p&&"table-hover"),n),w=i.a.createElement(v,Object(r.a)({},b,{ref:y,className:E}));if(d){var N=Object(h.mapToCssModules)(!0===d?"table-responsive":"table-responsive-"+d,n);return i.a.createElement(g,{className:N},w)}return w};p.propTypes=f,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=139.74680821.chunk.js.map