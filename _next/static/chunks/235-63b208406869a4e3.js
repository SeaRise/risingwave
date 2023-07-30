(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{83234:function(e,t,r){"use strict";r.d(t,{NI:function(){return v},Yp:function(){return y},lX:function(){return j}});var n=r(67294),o=r(28387),i=r(76734),a=r(32067),l=r(54520),c=r(52494),u=(...e)=>e.filter(Boolean).join(" "),s=e=>e?"":void 0,d=e=>!!e||void 0;function f(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[p,g]=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,h]=(0,o.k)({strict:!1,name:"FormControlContext"}),v=(0,a.Gp)(function(e,t){let r=(0,a.jC)("Form",e),o=(0,l.Lr)(e),{getRootProps:c,htmlProps:d,...f}=function(e){let{id:t,isRequired:r,isInvalid:o,isDisabled:a,isReadOnly:l,...c}=e,u=(0,n.useId)(),d=t||`field-${u}`,f=`${d}-label`,p=`${d}-feedback`,g=`${d}-helptext`,[m,h]=(0,n.useState)(!1),[v,y]=(0,n.useState)(!1),[b,O]=(0,n.useState)(!1),j=(0,n.useCallback)((e={},t=null)=>({id:g,...e,ref:(0,i.lq)(t,e=>{e&&y(!0)})}),[g]),w=(0,n.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":s(b),"data-disabled":s(a),"data-invalid":s(o),"data-readonly":s(l),id:e.id??f,htmlFor:e.htmlFor??d}),[d,a,b,o,l,f]),E=(0,n.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,i.lq)(t,e=>{e&&h(!0)}),"aria-live":"polite"}),[p]),M=(0,n.useCallback)((e={},t=null)=>({...e,...c,ref:t,role:"group"}),[c]),k=(0,n.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!o,isReadOnly:!!l,isDisabled:!!a,isFocused:!!b,onFocus:()=>O(!0),onBlur:()=>O(!1),hasFeedbackText:m,setHasFeedbackText:h,hasHelpText:v,setHasHelpText:y,id:d,labelId:f,feedbackId:p,helpTextId:g,htmlProps:c,getHelpTextProps:j,getErrorMessageProps:E,getRootProps:M,getLabelProps:w,getRequiredIndicatorProps:k}}(o),g=u("chakra-form-control",e.className);return n.createElement(m,{value:f},n.createElement(p,{value:r},n.createElement(a.m$.div,{...c({},t),className:g,__css:r.container})))});function y(e){let{isDisabled:t,isInvalid:r,isReadOnly:n,isRequired:o,...i}=function(e){let t=h(),{id:r,disabled:n,readOnly:o,required:i,isRequired:a,isInvalid:l,isReadOnly:c,isDisabled:u,onFocus:s,onBlur:d,...p}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&g.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&g.push(t.helpTextId),{...p,"aria-describedby":g.join(" ")||void 0,id:r??(null==t?void 0:t.id),isDisabled:n??u??(null==t?void 0:t.isDisabled),isReadOnly:o??c??(null==t?void 0:t.isReadOnly),isRequired:i??a??(null==t?void 0:t.isRequired),isInvalid:l??(null==t?void 0:t.isInvalid),onFocus:f(null==t?void 0:t.onFocus,s),onBlur:f(null==t?void 0:t.onBlur,d)}}(e);return{...i,disabled:t,readOnly:n,required:o,"aria-invalid":d(r),"aria-required":d(o),"aria-readonly":d(n)}}v.displayName="FormControl",(0,a.Gp)(function(e,t){let r=h(),o=g(),i=u("chakra-form__helper-text",e.className);return n.createElement(a.m$.div,{...null==r?void 0:r.getHelpTextProps(e,t),__css:o.helperText,className:i})}).displayName="FormHelperText";var[b,O]=(0,o.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,a.Gp)((e,t)=>{let r=(0,a.jC)("FormError",e),o=(0,l.Lr)(e),i=h();return(null==i?void 0:i.isInvalid)?n.createElement(b,{value:r},n.createElement(a.m$.div,{...null==i?void 0:i.getErrorMessageProps(o,t),className:u("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...r.text}})):null}).displayName="FormErrorMessage",(0,a.Gp)((e,t)=>{let r=O(),o=h();if(!(null==o?void 0:o.isInvalid))return null;let i=u("chakra-form__error-icon",e.className);return n.createElement(c.JO,{ref:t,"aria-hidden":!0,...e,__css:r.icon,className:i},n.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var j=(0,a.Gp)(function(e,t){let r=(0,a.mq)("FormLabel",e),o=(0,l.Lr)(e),{className:i,children:c,requiredIndicator:s=n.createElement(w,null),optionalIndicator:d=null,...f}=o,p=h(),g=(null==p?void 0:p.getLabelProps(f,t))??{ref:t,...f};return n.createElement(a.m$.label,{...g,className:u("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},c,(null==p?void 0:p.isRequired)?s:d)});j.displayName="FormLabel";var w=(0,a.Gp)(function(e,t){let r=h(),o=g();if(!(null==r?void 0:r.isRequired))return null;let i=u("chakra-form__required-indicator",e.className);return n.createElement(a.m$.span,{...null==r?void 0:r.getRequiredIndicatorProps(e,t),__css:o.requiredIndicator,className:i})});w.displayName="RequiredIndicator"},57026:function(e,t,r){"use strict";r.d(t,{Ph:function(){return s}});var n=r(67294),o=r(83234),i=r(32067),a=r(54520),l=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,u=(0,i.Gp)(function(e,t){let{children:r,placeholder:o,className:a,...c}=e;return n.createElement(i.m$.select,{...c,ref:t,className:l("chakra-select",a)},o&&n.createElement("option",{value:""},o),r)});u.displayName="SelectField";var s=(0,i.Gp)((e,t)=>{var r;let l=(0,i.jC)("Select",e),{rootProps:s,placeholder:d,icon:f,color:g,height:m,h,minH:v,minHeight:y,iconColor:b,iconSize:O,...j}=(0,a.Lr)(e),[w,E]=function(e,t){let r={},n={};for(let[o,i]of Object.entries(e))t.includes(o)?r[o]=i:n[o]=i;return[r,n]}(j,a.oE),M=(0,o.Yp)(E),k={paddingEnd:"2rem",...l.field,_focus:{zIndex:"unset",...null==(r=l.field)?void 0:r._focus}};return n.createElement(i.m$.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:g},...w,...s},n.createElement(u,{ref:t,height:h??m,minH:v??y,placeholder:d,...M,__css:k},e.children),n.createElement(p,{"data-disabled":c(M.disabled),...(b||g)&&{color:b||g},__css:l.icon,...O&&{fontSize:O}},f))});s.displayName="Select";var d=e=>n.createElement("svg",{viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),f=(0,i.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),p=e=>{let{children:t=n.createElement(d,null),...r}=e,o=(0,n.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return n.createElement(f,{...r,className:"chakra-select__icon-wrapper"},(0,n.isValidElement)(t)?o:null)};p.displayName="SelectIcon"},19604:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return function t(){for(var r=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function u(e){return({}).toString.call(e).includes("Object")}function s(e){return"function"==typeof e}r.d(t,{ZP:function(){return X}});var d,f,p=c(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),g={changes:function(e,t){return u(t)||p("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&p("changeField"),t},selector:function(e){s(e)||p("selectorType")},handler:function(e){s(e)||u(e)||p("handlerType"),u(e)&&Object.values(e).some(function(e){return!s(e)})&&p("handlersType")},initial:function(e){e||p("initialIsRequired"),u(e)||p("initialType"),Object.keys(e).length||p("initialContent")}};function m(e,t){return s(t)?t(e.current):t}function h(e,t){return e.current=l(l({},e.current),t),t}function v(e,t,r){return s(t)?t(e.current):Object.keys(r).forEach(function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])}),r}var y={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},b=(d=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return n.length>=d.length?d.apply(this,n):function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e.apply(t,[].concat(n,o))}})(y),O={config:function(e){return e||b("configIsRequired"),({}).toString.call(e).includes("Object")||b("configType"),e.urls?(console.warn(y.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},j=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},w={type:"cancelation",msg:"operation is manually canceled"},E=function(e){var t=!1,r=new Promise(function(r,n){e.then(function(e){return t?n(w):r(e)}),e.catch(n)});return r.cancel=function(){return t=!0},r},M=function(e){if(Array.isArray(e))return e}(f=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.initial(e),g.handler(t);var r={current:e},n=c(v)(r,t),o=c(h)(r),i=c(g.changes)(e),a=c(m)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return g.selector(e),e(r.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(n,o,i,a)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}}(f,2)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(f,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),k=M[0],_=M[1];function P(e){return document.body.appendChild(e)}function S(e){var t,r,n=k(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return o.onload=function(){return e()},o.onerror=n.reject,o}function R(){var e=k(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){T(t),e.resolve(t)},function(t){e.reject(t)})}function T(e){k().monaco||_({monaco:e})}var C=new Promise(function(e,t){return _({resolve:e,reject:t})}),I={config:function(e){var t=O.config(e),r=t.monaco,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["monaco"]);_(function(e){return{config:function e(t,r){return Object.keys(r).forEach(function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))}),o(o({},t),r)}(e.config,n),monaco:r}})},init:function(){var e=k(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(_({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),E(C);if(window.monaco&&window.monaco.editor)return T(window.monaco),e.resolve(window.monaco),E(C);j(P,S)(R)}return E(C)},__getMonacoInstance:function(){return k(function(e){return e.monaco})}},x=r(67294),N=r(45697),F=r.n(N);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let L={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var A=function({content:e}){return x.createElement("div",{style:L},e)},D={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function V({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:a}){return x.createElement("section",q({style:{...D.wrapper,width:e,height:t}},a),!r&&x.createElement(A,{content:n}),x.createElement("div",{ref:o,style:{...D.fullWidth,...!r&&D.hide},className:i}))}V.propTypes={width:F().oneOfType([F().number,F().string]).isRequired,height:F().oneOfType([F().number,F().string]).isRequired,loading:F().oneOfType([F().element,F().string]).isRequired,isEditorReady:F().bool.isRequired,className:F().string,wrapperProps:F().object};var $=(0,x.memo)(V),z=function(e){(0,x.useEffect)(e,[])},B=function(e,t,r=!0){let n=(0,x.useRef)(!0);(0,x.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function G(){}function U(e,t,r,n){return e.editor.getModel(H(e,n))||e.editor.createModel(t,r,n&&H(e,n))}function H(e,t){return e.Uri.parse(t)}function W({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:l,keepCurrentModifiedModel:c,theme:u,loading:s,options:d,height:f,width:p,className:g,wrapperProps:m,beforeMount:h,onMount:v}){let[y,b]=(0,x.useState)(!1),[O,j]=(0,x.useState)(!0),w=(0,x.useRef)(null),E=(0,x.useRef)(null),M=(0,x.useRef)(null),k=(0,x.useRef)(v),_=(0,x.useRef)(h);z(()=>{let e=I.init();return e.then(e=>(E.current=e)&&j(!1)).catch(e=>(null==e?void 0:e.type)!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>w.current?function(){var e,t;let r=w.current.getModel();l||null===(e=r.original)||void 0===e||e.dispose(),c||null===(t=r.modified)||void 0===t||t.dispose(),w.current.dispose()}():e.cancel()}),B(()=>{let e=w.current.getModifiedEditor();e.getOption(E.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],y),B(()=>{w.current.getModel().original.setValue(e)},[e],y),B(()=>{let{original:e,modified:t}=w.current.getModel();E.current.editor.setModelLanguage(e,n||r),E.current.editor.setModelLanguage(t,o||r)},[r,n,o],y),B(()=>{E.current.editor.setTheme(u)},[u],y),B(()=>{w.current.updateOptions(d)},[d],y);let P=(0,x.useCallback)(()=>{_.current(E.current);let l=U(E.current,e,n||r,i),c=U(E.current,t,o||r,a);w.current.setModel({original:l,modified:c})},[r,t,o,e,n,i,a]),S=(0,x.useCallback)(()=>{w.current=E.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...d}),P(),E.current.editor.setTheme(u),b(!0)},[d,u,P]);return(0,x.useEffect)(()=>{y&&k.current(w.current,E.current)},[y]),(0,x.useEffect)(()=>{O||y||S()},[O,y,S]),x.createElement($,{width:p,height:f,isEditorReady:y,loading:s,_ref:M,className:g,wrapperProps:m})}W.propTypes={original:F().string,modified:F().string,language:F().string,originalLanguage:F().string,modifiedLanguage:F().string,originalModelPath:F().string,modifiedModelPath:F().string,keepCurrentOriginalModel:F().bool,keepCurrentModifiedModel:F().bool,theme:F().string,loading:F().oneOfType([F().element,F().string]),options:F().object,width:F().oneOfType([F().number,F().string]),height:F().oneOfType([F().number,F().string]),className:F().string,wrapperProps:F().object,beforeMount:F().func,onMount:F().func},W.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:G,onMount:G};var Y=function(e){let t=(0,x.useRef)();return(0,x.useEffect)(()=>{t.current=e},[e]),t.current};let Z=new Map;function J({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:a,line:l,loading:c,options:u,overrideServices:s,saveViewState:d,keepCurrentModel:f,width:p,height:g,className:m,wrapperProps:h,beforeMount:v,onMount:y,onChange:b,onValidate:O}){let[j,w]=(0,x.useState)(!1),[E,M]=(0,x.useState)(!0),k=(0,x.useRef)(null),_=(0,x.useRef)(null),P=(0,x.useRef)(null),S=(0,x.useRef)(y),R=(0,x.useRef)(v),T=(0,x.useRef)(null),C=(0,x.useRef)(n),N=Y(i),F=(0,x.useRef)(!1);z(()=>{let e=I.init();return e.then(e=>(k.current=e)&&M(!1)).catch(e=>(null==e?void 0:e.type)!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{var t,r;return _.current?void(null===(t=T.current)||void 0===t||t.dispose(),f?d&&Z.set(i,_.current.saveViewState()):null===(r=_.current.getModel())||void 0===r||r.dispose(),_.current.dispose()):e.cancel()}}),B(()=>{let r=U(k.current,e||n,t||o,i);r!==_.current.getModel()&&(d&&Z.set(N,_.current.saveViewState()),_.current.setModel(r),d&&_.current.restoreViewState(Z.get(i)))},[i],j),B(()=>{_.current.updateOptions(u)},[u],j),B(()=>{_.current.getOption(k.current.editor.EditorOption.readOnly)?_.current.setValue(n):n!==_.current.getValue()&&(_.current.executeEdits("",[{range:_.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),_.current.pushUndoStop())},[n],j),B(()=>{k.current.editor.setModelLanguage(_.current.getModel(),o)},[o],j),B(()=>{void 0!==l&&_.current.revealLine(l)},[l],j),B(()=>{k.current.editor.setTheme(a)},[a],j);let q=(0,x.useCallback)(()=>{if(!F.current){R.current(k.current);let l=i||r,c=U(k.current,n||e,t||o,l);_.current=k.current.editor.create(P.current,{model:c,automaticLayout:!0,...u},s),d&&_.current.restoreViewState(Z.get(l)),k.current.editor.setTheme(a),w(!0),F.current=!0}},[e,t,r,n,o,i,u,s,d,a]);return(0,x.useEffect)(()=>{j&&S.current(_.current,k.current)},[j]),(0,x.useEffect)(()=>{E||j||q()},[E,j,q]),C.current=n,(0,x.useEffect)(()=>{if(j&&b){var e,t;null===(e=T.current)||void 0===e||e.dispose(),T.current=null===(t=_.current)||void 0===t?void 0:t.onDidChangeModelContent(e=>{b(_.current.getValue(),e)})}},[j,b]),(0,x.useEffect)(()=>{if(j){let e=k.current.editor.onDidChangeMarkers(e=>{var t;let r=null===(t=_.current.getModel())||void 0===t?void 0:t.uri;if(r){let t=e.find(e=>e.path===r.path);if(t){let e=k.current.editor.getModelMarkers({resource:r});null==O||O(e)}}});return()=>{null==e||e.dispose()}}},[j,O]),x.createElement($,{width:p,height:g,isEditorReady:j,loading:c,_ref:P,className:m,wrapperProps:h})}J.propTypes={defaultValue:F().string,defaultPath:F().string,defaultLanguage:F().string,value:F().string,language:F().string,path:F().string,theme:F().string,line:F().number,loading:F().oneOfType([F().element,F().string]),options:F().object,overrideServices:F().object,saveViewState:F().bool,keepCurrentModel:F().bool,width:F().oneOfType([F().number,F().string]),height:F().oneOfType([F().number,F().string]),className:F().string,wrapperProps:F().object,beforeMount:F().func,onMount:F().func,onChange:F().func,onValidate:F().func},J.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:G,onMount:G,onValidate:G};var X=(0,x.memo)(J)},9008:function(e,t,r){e.exports=r(42636)},92703:function(e,t,r){"use strict";var n=r(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);