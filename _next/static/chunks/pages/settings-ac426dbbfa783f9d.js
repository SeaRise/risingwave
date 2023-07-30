(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{83234:function(e,t,n){"use strict";n.d(t,{NI:function(){return I},Yp:function(){return _},lX:function(){return x}});var r=n(67294),l=n(28387),a=n(76734),i=n(32067),s=n(54520),o=n(52494),d=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,c=e=>!!e||void 0;function p(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[m,f]=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,l.k)({strict:!1,name:"FormControlContext"}),I=(0,i.Gp)(function(e,t){let n=(0,i.jC)("Form",e),l=(0,s.Lr)(e),{getRootProps:o,htmlProps:c,...p}=function(e){let{id:t,isRequired:n,isInvalid:l,isDisabled:i,isReadOnly:s,...o}=e,d=(0,r.useId)(),c=t||`field-${d}`,p=`${c}-label`,m=`${c}-feedback`,f=`${c}-helptext`,[h,v]=(0,r.useState)(!1),[I,_]=(0,r.useState)(!1),[g,E]=(0,r.useState)(!1),x=(0,r.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,a.lq)(t,e=>{e&&_(!0)})}),[f]),y=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":u(g),"data-disabled":u(i),"data-invalid":u(l),"data-readonly":u(s),id:e.id??p,htmlFor:e.htmlFor??c}),[c,i,g,l,s,p]),N=(0,r.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,a.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[m]),b=(0,r.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),k=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!i,isFocused:!!g,onFocus:()=>E(!0),onBlur:()=>E(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:I,setHasHelpText:_,id:c,labelId:p,feedbackId:m,helpTextId:f,htmlProps:o,getHelpTextProps:x,getErrorMessageProps:N,getRootProps:b,getLabelProps:y,getRequiredIndicatorProps:k}}(l),f=d("chakra-form-control",e.className);return r.createElement(h,{value:p},r.createElement(m,{value:n},r.createElement(i.m$.div,{...o({},t),className:f,__css:n.container})))});function _(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:l,...a}=function(e){let t=v(),{id:n,disabled:r,readOnly:l,required:a,isRequired:i,isInvalid:s,isReadOnly:o,isDisabled:d,onFocus:u,onBlur:c,...m}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId),{...m,"aria-describedby":f.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:l??o??(null==t?void 0:t.isReadOnly),isRequired:a??i??(null==t?void 0:t.isRequired),isInvalid:s??(null==t?void 0:t.isInvalid),onFocus:p(null==t?void 0:t.onFocus,u),onBlur:p(null==t?void 0:t.onBlur,c)}}(e);return{...a,disabled:t,readOnly:r,required:l,"aria-invalid":c(n),"aria-required":c(l),"aria-readonly":c(r)}}I.displayName="FormControl",(0,i.Gp)(function(e,t){let n=v(),l=f(),a=d("chakra-form__helper-text",e.className);return r.createElement(i.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:l.helperText,className:a})}).displayName="FormHelperText";var[g,E]=(0,l.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,i.Gp)((e,t)=>{let n=(0,i.jC)("FormError",e),l=(0,s.Lr)(e),a=v();return(null==a?void 0:a.isInvalid)?r.createElement(g,{value:n},r.createElement(i.m$.div,{...null==a?void 0:a.getErrorMessageProps(l,t),className:d("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,i.Gp)((e,t)=>{let n=E(),l=v();if(!(null==l?void 0:l.isInvalid))return null;let a=d("chakra-form__error-icon",e.className);return r.createElement(o.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:a},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var x=(0,i.Gp)(function(e,t){let n=(0,i.mq)("FormLabel",e),l=(0,s.Lr)(e),{className:a,children:o,requiredIndicator:u=r.createElement(y,null),optionalIndicator:c=null,...p}=l,m=v(),f=(null==m?void 0:m.getLabelProps(p,t))??{ref:t,...p};return r.createElement(i.m$.label,{...f,className:d("chakra-form__label",l.className),__css:{display:"block",textAlign:"start",...n}},o,(null==m?void 0:m.isRequired)?u:c)});x.displayName="FormLabel";var y=(0,i.Gp)(function(e,t){let n=v(),l=f();if(!(null==n?void 0:n.isRequired))return null;let a=d("chakra-form__required-indicator",e.className);return r.createElement(i.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:l.requiredIndicator,className:a})});y.displayName="RequiredIndicator"},20979:function(e,t,n){"use strict";n.d(t,{II:function(){return c}});var r=n(67294),l=n(83234),a=n(32067),i=n(54520),s=n(95336),o=n(28387),d=n(34031),u=n(46076),c=(0,a.Gp)(function(e,t){let{htmlSize:n,...o}=e,d=(0,a.jC)("Input",o),u=(0,i.Lr)(o),c=(0,l.Yp)(u),p=(0,s.cx)("chakra-input",e.className);return r.createElement(a.m$.input,{size:n,...c,__css:d.field,ref:t,className:p})});c.displayName="Input",c.id="Input";var[p,m]=(0,o.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "});(0,a.Gp)(function(e,t){let n=(0,a.jC)("Input",e),{children:l,className:o,...c}=(0,i.Lr)(e),m=(0,s.cx)("chakra-input__group",o),f={},h=(0,d.W)(l),v=n.field;h.forEach(e=>{n&&(v&&"InputLeftElement"===e.type.id&&(f.paddingStart=v.height??v.h),v&&"InputRightElement"===e.type.id&&(f.paddingEnd=v.height??v.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))});let I=h.map(t=>{var n,l;let a=(0,u.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(l=t.props)?void 0:l.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,a):(0,r.cloneElement)(t,Object.assign(a,f,t.props))});return r.createElement(a.m$.div,{className:m,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...c},r.createElement(p,{value:n},I))}).displayName="InputGroup";var f={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},h=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),v=(0,a.Gp)(function(e,t){let{placement:n="left",...l}=e,a=f[n]??{},i=m();return r.createElement(h,{ref:t,...l,__css:{...i.addon,...a}})});v.displayName="InputAddon";var I=(0,a.Gp)(function(e,t){return r.createElement(v,{ref:t,placement:"left",...e,className:(0,s.cx)("chakra-input__left-addon",e.className)})});I.displayName="InputLeftAddon",I.id="InputLeftAddon";var _=(0,a.Gp)(function(e,t){return r.createElement(v,{ref:t,placement:"right",...e,className:(0,s.cx)("chakra-input__right-addon",e.className)})});_.displayName="InputRightAddon",_.id="InputRightAddon";var g=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),E=(0,a.Gp)(function(e,t){let{placement:n="left",...l}=e,a=m(),i=a.field,s={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==i?void 0:i.height)??(null==i?void 0:i.h),height:(null==i?void 0:i.height)??(null==i?void 0:i.h),fontSize:null==i?void 0:i.fontSize,...a.element};return r.createElement(g,{ref:t,__css:s,...l})});E.id="InputElement",E.displayName="InputElement";var x=(0,a.Gp)(function(e,t){let{className:n,...l}=e,a=(0,s.cx)("chakra-input__left-element",n);return r.createElement(E,{ref:t,placement:"left",className:a,...l})});x.id="InputLeftElement",x.displayName="InputLeftElement";var y=(0,a.Gp)(function(e,t){let{className:n,...l}=e,a=(0,s.cx)("chakra-input__right-element",n);return r.createElement(E,{ref:t,placement:"right",className:a,...l})});y.id="InputRightElement",y.displayName="InputRightElement"},52837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(73342)}])},96756:function(e,t,n){"use strict";var r=n(85893),l=n(40639);n(67294),t.Z=function(e){let{children:t}=e;return(0,r.jsx)(l.xv,{mb:2,textColor:"teal.500",fontWeight:"semibold",lineHeight:"6",children:t})}},73342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),l=n(40639),a=n(83234),i=n(20979),s=n(9008),o=n.n(s),d=n(67294),u=n(96756);function c(){return(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Settings"})}),(0,r.jsxs)(l.xu,{p:3,children:[(0,r.jsx)(u.Z,{children:"Settings"}),(0,r.jsxs)(l.gC,{spacing:4,w:"full",children:[(0,r.jsxs)(a.NI,{children:[(0,r.jsx)(a.lX,{children:"RisingWave Meta Node HTTP API"}),(0,r.jsx)(i.II,{value:"/api"})]}),(0,r.jsxs)(a.NI,{children:[(0,r.jsx)(a.lX,{children:"Grafana HTTP API"}),(0,r.jsx)(i.II,{value:"/api"})]}),(0,r.jsxs)(a.NI,{children:[(0,r.jsx)(a.lX,{children:"Prometheus HTTP API"}),(0,r.jsx)(i.II,{value:"/api"})]})]})]})]})}},9008:function(e,t,n){e.exports=n(42636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=52837)}),_N_E=e.O()}]);