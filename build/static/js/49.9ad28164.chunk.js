(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[49],{1137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=r?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(n,c,s):n[c]=e[c]}n.default=e,a&&a.set(e,n);return n}(a(0)),r=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b(e);if(t){var r=b(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m(this,a)}}function m(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e){return"object"===y(e)},O=function(e){p(a,e);var t=d(a);function a(e){var r;return l(this,a),v(h(r=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return!g(e)&&!1!==e})).join(" ")})),v(h(r),"getType",(function(){var e=r.props,t=e.isInputSecure,a=e.isInputNum;return t?"password":a?"tel":"text"})),r.input=n.default.createRef(),r}return u(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,a=e.shouldAutoFocus,n=this.input.current;n&&t&&a&&n.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,a=this.input.current;e.focus!==t&&a&&t&&(a.focus(),a.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,a=e.separator,o=e.isLastChild,l=e.inputStyle,i=e.focus,u=e.isDisabled,p=e.hasErrored,f=e.errorStyle,d=e.focusStyle,m=e.disabledStyle,h=(e.shouldAutoFocus,e.isInputNum),b=e.index,v=e.value,y=e.className,O=(e.isInputSecure,s(e,r));return n.default.createElement("div",{className:y,style:{display:"flex",alignItems:"center"}},n.default.createElement("input",c({"aria-label":"".concat(0===b?"Please enter verification code. ":"").concat(h?"Digit":"Character"," ").concat(b+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},g(l)&&l,i&&g(d)&&d,u&&g(m)&&m,p&&g(f)&&f),placeholder:t,className:this.getClasses(l,i&&d,u&&m,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:u,value:v||""},O)),!o&&a)}}]),a}(n.PureComponent),E=function(e){p(a,e);var t=d(a);function a(){var e;l(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return v(h(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),v(h(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),v(h(e),"getPlaceholderValue",(function(){var t=e.props,a=t.placeholder,n=t.numInputs;if("string"===typeof a){if(a.length===n)return a;a.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),v(h(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),v(h(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),v(h(e),"focusInput",(function(t){var a=e.props.numInputs,n=Math.max(Math.min(a-1,t),0);e.setState({activeInput:n})})),v(h(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),v(h(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),v(h(e),"changeCodeAtFocus",(function(t){var a=e.state.activeInput,n=e.getOtpValue();n[a]=t[0],e.handleOtpChange(n)})),v(h(e),"handleOnPaste",(function(t){t.preventDefault();var a=e.state.activeInput,n=e.props,r=n.numInputs;if(!n.isDisabled){for(var o=e.getOtpValue(),c=a,s=t.clipboardData.getData("text/plain").slice(0,r-a).split(""),l=0;l<r;++l)l>=a&&s.length>0&&(o[l]=s.shift(),c++);e.setState({activeInput:c},(function(){e.focusInput(c),e.handleOtpChange(o)}))}})),v(h(e),"handleOnChange",(function(t){var a=t.target.value;e.isInputValueValid(a)&&e.changeCodeAtFocus(a)})),v(h(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),v(h(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var a=t.nativeEvent;null===a.data&&"deleteContentBackward"===a.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),v(h(e),"renderInputs",(function(){for(var t=e.state.activeInput,a=e.props,r=a.numInputs,o=a.inputStyle,c=a.focusStyle,s=a.separator,l=a.isDisabled,i=a.disabledStyle,u=a.hasErrored,p=a.errorStyle,f=a.shouldAutoFocus,d=a.isInputNum,m=a.isInputSecure,h=a.className,b=[],v=e.getOtpValue(),y=e.getPlaceholderValue(),g=e.props["data-cy"],E=e.props["data-testid"],j=function(a){b.push(n.default.createElement(O,{placeholder:y&&y[a],key:a,index:a,focus:t===a,value:v&&v[a],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:a}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:s,inputStyle:o,focusStyle:c,isLastChild:a===r-1,isDisabled:l,disabledStyle:i,hasErrored:u,errorStyle:p,shouldAutoFocus:f,isInputNum:d,isInputSecure:m,className:h,"data-cy":g&&"".concat(g,"-").concat(a),"data-testid":E&&"".concat(E,"-").concat(a)}))},I=0;I<r;I++)j(I);return b})),e}return u(a,[{key:"render",value:function(){var e=this.props.containerStyle;return n.default.createElement("div",{style:Object.assign({display:"flex"},g(e)&&e),className:g(e)?"":e},this.renderInputs())}}]),a}(n.Component);v(E,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var j=E;t.default=j},2573:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),o=a(16),c=a(15),s=a(0),l=a.n(s),i=a(1144),u=a(1145),p=a(1146),f=a(1147),d=a(1148),m=a(809),h=a(783),b=a(810),v=a(811),y=a(185),g=a.n(y),O=(a(870),a(51)),E=a(41),j=a(1149),I=a(1162),N=a(807),w=a(1164),k=a(1163),C=a(171),S=a(812),x=a(348),P=a(345),T=a(257),D=a(127),M=a(26),A=a(56),F=(a(1137),a(793)),V=a.n(F),_=a(563),L=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handlechange=function(e){e.preventDefault(),r.setState(Object(O.a)({},e.target.name,e.target.value))},r.handleLogin=function(e){e.preventDefault();var t={email:r.state.email,password:r.state.password};_.a.post("/admin/signin",t).then((function(e){var t;200===e.status?(localStorage.setItem("ad-token",null===(t=e.data.Admin)||void 0===t?void 0:t.token),localStorage.setItem("AdminData",JSON.stringify(e.data)),localStorage.setItem("userId",e.data.Admin._id),window.location.replace("/#"),V()("Login Successfully")):(204===e.status||e.status,V()("Some Thing went Wrong"))})).catch((function(e){V()("error!","Invalied! Please Enter Valid Email. or Password","error")})),window.location.replace("/#")},r.state={email:"",password:"",emailotp:"",ShowScreen:!1,showDashBoard:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{className:"pt-1"},l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{onSubmit:this.handleLogin},l.a.createElement(N.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(w.a,{type:"email",name:"email",placeholder:"E-mail ",value:this.state.email,onChange:this.handlechange}),l.a.createElement("div",{className:"form-control-position"},l.a.createElement(x.a,{size:15})),l.a.createElement(k.a,null,"Email ")),l.a.createElement(N.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(w.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange}),l.a.createElement("div",{className:"form-control-position"},l.a.createElement(P.a,{size:15})),l.a.createElement(k.a,null,"Password")),l.a.createElement(N.a,{className:"d-flex justify-content-between align-items-center"},l.a.createElement(S.a,{color:"primary",icon:l.a.createElement(T.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),l.a.createElement("div",{className:"float-right"},l.a.createElement(E.b,{to:"/pages/forgot-password"},"Forgot Password?"))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(A.b,{render:function(e){e.history;return l.a.createElement(C.a.Ripple,{color:"primary",type:"submit"},"Login")}}))))))}}]),a}(l.a.Component),R=Object(M.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:D.b})(L),z=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={activeTab:"1"},e.toggle=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(p.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},l.a.createElement("img",{src:g.a,alt:"loginImg",width:"100%",style:{padding:"50px 50px"}})),l.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(p.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},l.a.createElement(f.a,{className:"pb-1"},l.a.createElement(d.a,null,l.a.createElement("h4",{className:"mb-0"},"Login"))),l.a.createElement("p",{className:"px-2 auth-title"},"Welcome back, please login to your Meri Zimmedari account."),l.a.createElement(m.a,{tabs:!0,className:"px-2"},l.a.createElement(h.a,null),l.a.createElement(h.a,null),l.a.createElement(h.a,null)),l.a.createElement(b.a,{activeTab:this.state.activeTab},l.a.createElement(v.a,{tabId:"1"},l.a.createElement(R,null)),l.a.createElement(v.a,{tabId:"2"}),l.a.createElement(v.a,{tabId:"3"}))))))))}}]),a}(l.a.Component);t.default=z},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=a.n(n).a.createContext({})},807:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(4),u=a.n(i),p=a(3),f=["className","cssModule","row","disabled","check","inline","tag"],d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,l=e.check,i=e.inline,d=e.tag,m=Object(r.a)(e,f),h=Object(p.mapToCssModules)(u()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!s)&&"disabled"),a);return"fieldset"===d&&(m.disabled=s),c.a.createElement(d,Object(n.a)({},m,{className:h}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},809:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(4),u=a.n(i),p=a(3),f=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tabs,s=e.pills,l=e.vertical,i=e.horizontal,d=e.justified,m=e.fill,h=e.navbar,b=e.card,v=e.tag,y=Object(r.a)(e,f),g=Object(p.mapToCssModules)(u()(t,h?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":o,"card-header-tabs":b&&o,"nav-pills":s,"card-header-pills":b&&s,"nav-justified":d,"nav-fill":m}),a);return c.a.createElement(v,Object(n.a)({},y,{className:g}))};m.propTypes=d,m.defaultProps={tag:"ul",vertical:!1},t.a=m},810:function(e,t,a){"use strict";var n=a(5),r=a(12),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(4),u=a.n(i),p=a(794),f=a(3),d={tag:f.tagPropType,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(f.omit)(this.props,Object.keys(d)),s=Object(f.mapToCssModules)(u()("tab-content",t),a);return c.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(n.a)({},o,{className:s})))},t}(o.Component);t.a=m,m.propTypes=d,m.defaultProps={tag:"div"}},811:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(5),r=a(9),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(4),u=a.n(i),p=a(794),f=a(3),d=["className","cssModule","tabId","tag"],m={tag:f.tagPropType,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function h(e){var t=e.className,a=e.cssModule,o=e.tabId,s=e.tag,l=Object(r.a)(e,d),i=function(e){return Object(f.mapToCssModules)(u()("tab-pane",t,{active:o===e}),a)};return c.a.createElement(p.a.Consumer,null,(function(e){var t=e.activeTabId;return c.a.createElement(s,Object(n.a)({},l,{className:i(t)}))}))}h.propTypes=m,h.defaultProps={tag:"div"}},812:function(e,t,a){"use strict";var n=a(13),r=a(14),o=a(16),c=a(15),s=a(0),l=a.n(s),i=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),a}(l.a.Component);t.a=i},870:function(e,t,a){}}]);
//# sourceMappingURL=49.9ad28164.chunk.js.map