(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/readme.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/emotion/dist/index.es.js"),r=a("./node_modules/react/index.js"),o=a.n(r),l=a("./node_modules/@mdx-js/tag/dist/index.js"),m=a("./node_modules/docz/dist/index.m.js"),i=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function n(e){var a,t,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,r=(n.__proto__||Object.getPrototypeOf(n)).call(this,e),a=!r||"object"!==s(r)&&"function"!==typeof r?p(t):r,Object.defineProperty(p(a),"_state",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(p(a),"_handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=e.target.value,t=e.target,r=n.length>a.props.value.length,o=a.props.value===a.props.format(n);a.setState({value:n,local:!0},function(){var e=t.selectionStart,l=a.props.refuse||/[^\d]+/gi,m=n.substr(0,e).replace(l,"");if(a._state={input:t,before:m,op:r},a.props.replace&&a.props.replace(a.props.value)&&r&&!o){for(var i=-1,s=0;s!==m.length;++s)i=Math.max(i,n.indexOf(m[s],i+1));var c=n.substr(i+1).replace(l,"")[0];i=n.indexOf(c,i+1),n="".concat(n.substr(0,i)).concat(n.substr(i+1))}a.props.onChange(a.props.format(n))})}}),a.state={value:e.value,local:!1},a}var a,t,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,r["Component"]),a=n,o=[{key:"getDerivedStateFromProps",value:function(e,n){return{value:n.local?n.value:e.value,local:!1}}}],(t=[{key:"render",value:function(){var e=this._handleChange,n=this.state.value;return(0,this.props.children)({value:n,onChange:e})}},{key:"componentDidUpdate",value:function(){var e=this._state;if(e){for(var n=this.state.value,a=-1,t=0;t!==e.before.length;++t)a=Math.max(a,n.indexOf(e.before[t],a+1));if(this.props.replace&&e.op)for(;n[a+1]&&(this.props.refuse||/[^\d]+/gi).test(n[a+1]);)a+=1;e.input.selectionStart=a+1,e.input.selectionEnd=a+1}this._state=null}}])&&c(a.prototype,t),o&&c(a,o),n}();g.__docgenInfo={description:"",methods:[{name:"_handleChange",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>",alias:"SyntheticInputEvent"}}],returns:null},{name:"getDerivedStateFromProps",docblock:null,modifiers:["static"],params:[{name:"props",type:{name:"signature",type:"object",raw:"{|\n  value: string,\n  onChange: string => void,\n  format: (str: string) => string,\n  replace?: string => boolean,\n  refuse?: RegExp,\n  children: ({\n    value: string,\n    onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n  }) => React.Node,\n|}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"string => void",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"format",value:{name:"signature",type:"function",raw:"(str: string) => string",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"string"}},required:!0}},{key:"replace",value:{name:"signature",type:"function",raw:"string => boolean",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"boolean"}},required:!1}},{key:"refuse",value:{name:"RegExp",required:!1}},{key:"children",value:{name:"signature",type:"function",raw:"({\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}) => React.Node",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(evt: SyntheticInputEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>"}}],return:{name:"void"}},required:!0}}]}}}],return:{name:"ReactNode",raw:"React.Node"}},required:!0}}]},alias:"Props"}},{name:"state",type:{name:"signature",type:"object",raw:"{|\n  value: string,\n  local: boolean,\n|}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"local",value:{name:"boolean",required:!0}}]},alias:"State"}}],returns:null}],displayName:"Rifm",props:{value:{flowType:{name:"string"},required:!0,description:""},onChange:{flowType:{name:"signature",type:"function",raw:"string => void",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"void"}}},required:!0,description:""},format:{flowType:{name:"signature",type:"function",raw:"(str: string) => string",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"string"}}},required:!0,description:""},replace:{flowType:{name:"signature",type:"function",raw:"string => boolean",signature:{arguments:[{name:"",type:{name:"string"}}],return:{name:"boolean"}}},required:!1,description:""},refuse:{flowType:{name:"RegExp"},required:!1,description:""},children:{flowType:{name:"signature",type:"function",raw:"({\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}) => React.Node",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\n  value: string,\n  onChange: (evt: SyntheticInputEvent<HTMLInputElement>) => void,\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(evt: SyntheticInputEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"evt",type:{name:"SyntheticInputEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticInputEvent<HTMLInputElement>"}}],return:{name:"void"}},required:!0}}]}}}],return:{name:"ReactNode",raw:"React.Node"}}},required:!0,description:""}}};var d=function(e){var n=parseInt(e.replace(/[^\d]+/gi,""),10);return n?n.toLocaleString("en"):""},h=function(e){var n=e.replace(/[^\d-]+/gi,"");if("-"===n)return"-";var a=parseInt(n,10);return a?a.toLocaleString("en"):""},f=function(e){var n=e.replace(/[^\d.]+/gi,""),a=n.length>2?-1===n.indexOf(".")?"".concat(n.substr(0,n.length-2),".").concat(n.substr(-2)):"".concat(n.split(".")[0],".").concat(n.split(".")[1].substr(0,2)):n,t=parseFloat(a);return t?t.toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2}):""},v=function(e){return e.replace(/[^\d]+/gi,"").split("").reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"")},E=function(e){var n=e.replace(/[^\d]+/gi,"").split("").reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"");return 0===n.length?n:"".concat(n).concat("__-__-____".substr(n.length))},y=new(a("./node_modules/libphonenumber-js/index.es6.js").a)("US"),b=function(e){var n=e.replace(/[^\d]+/gi,"").substr(0,10),a=y.input(n);return y.reset(),a},M=a("./node_modules/@material-ui/core/TextField/index.js"),C=a.n(M);n.default=function(e){var n=e.components;return o.a.createElement(l.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.MDXTag,{name:"h1",components:n,props:{id:"rifm---react-input-format--mask"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#rifm---react-input-format--mask"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"RIFM - React Input Format & Mask"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"Is a tiny (\u2248 650-750b) component to transform any input component\ninto formatted or masked input."),"\n","\n",o.a.createElement("div",{"data-run":void Object(t.b)("\n    .react-prism {\n      overflow-x: auto;\n    }\n  ")}),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"In all examples:"),"\n",o.a.createElement(l.MDXTag,{name:"ul",components:n},"\n",o.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"\n",o.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/renatorib/react-powerplug/blob/master/docs/components/Value.md"}},"Value"),"\nfrom react-powerplug is used as State management Component."),"\n"),"\n",o.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"\n",o.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},"formatters is placed ",o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"here")),"\n"),"\n"),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"simple-input-number-format"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#simple-input-number-format"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Simple input number format"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm value={text.value} onChange={text.set} format={numberFormat}>\n      {({ value, onChange }) => (\n        <>\n          Int&nbsp;&nbsp;\n          <input\n            maxLength=\"20\"\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{value:e.value,onChange:e.set,format:d},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Int\xa0\xa0",o.a.createElement("input",{maxLength:"20",value:n,onChange:a,className:Object(t.a)({textAlign:"right"}),type:"tel"}))})})),"\n",o.a.createElement(l.MDXTag,{name:"pre",components:n},o.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// numberFormat from example above\nconst numberFormat = (str: string) => {\n  const r = parseInt(str.replace(/[^\\d]+/gi, ''), 10);\n  return r ? r.toLocaleString('en') : '';\n};\n")),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"to prevent parseInt overflow you can use ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"maxLength")," on input field\nor write your own numberFormat."),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"input-number-format-with-fractional-part"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#input-number-format-with-fractional-part"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Input number format with fractional part"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Float&nbsp;&nbsp;\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:f},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Float\xa0\xa0",o.a.createElement("input",{value:n,onChange:a,className:Object(t.a)({textAlign:"right"}),type:"tel"}))})})),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"By default all non digit symbols are refused to enter,\nproperty ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse"),' allows you to change this behaviour.\nIn later example "." is also added to ',o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse")," so input will accept ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"."),"\nand allows you to split numbers."),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"currencyFormat and other formatters source")),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"material-ui"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#material-ui"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Material UI"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"It can work with 3rd party Inputs without pain"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <TextField\n          value={value}\n          label={'Float'}\n          onChange={onChange}\n          className={css({ input: { textAlign: 'right' } })}\n          type=\"tel\"\n        />\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:f},function(e){var n=e.value,a=e.onChange;return o.a.createElement(C.a,{value:n,label:"Float",onChange:a,className:Object(t.a)({input:{textAlign:"right"}}),type:"tel"})})})),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"Mask mostly the same as format, the difference that at some moment\nwhen you enter symbols replace operation used instead of insert\nfor example when field value reached maximum length"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"Use ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replace")," to inform field to use replace operation"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,'<Value initial={\'18-08-1978\'}>\n  {text => (\n    <Rifm\n      replace={v => v.length >= 10}\n      value={text.value}\n      onChange={text.set}\n      format={dateFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Date&nbsp;&nbsp;\n          <input\n            placeholder="dd-mm-yyyy"\n            value={value}\n            onChange={onChange}\n            type="tel"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>'))}},o.a.createElement(i.a,{initial:"18-08-1978"},function(e){return o.a.createElement(g,{replace:function(e){return e.length>=10},value:e.value,onChange:e.set,format:v},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Date\xa0\xa0",o.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})})),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input-2"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input-2"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input 2"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      replace={v => v.substr(9, 10) !== '_'}\n      refuse={/[^d_]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={dateFormatSym}\n    >\n      {({ value, onChange }) => (\n        <>\n          Date&nbsp;&nbsp;\n          <input\n            placeholder=\"__-__-____\"\n            value={value}\n            onChange={onChange}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{replace:function(e){return"_"!==e.substr(9,10)},refuse:/[^\d_]/gi,value:e.value,onChange:e.set,format:E},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Date\xa0\xa0",o.a.createElement("input",{placeholder:"__-__-____",value:n,onChange:a,type:"tel"}))})})),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"masked-phone-input"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-phone-input"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked Phone Input"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"Example of usage with\n",o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/catamphetamine/libphonenumber-js"}},"libphonenumber-js")," formatter"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      replace={v => v.length >= 14}\n      value={text.value}\n      onChange={text.set}\n      format={formatPhone}\n    >\n      {({ value, onChange }) => (\n        <>\n          Phone&nbsp;&nbsp;+1&nbsp;\n          <input value={value} onChange={onChange} type=\"tel\" />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{replace:function(e){return e.length>=14},value:e.value,onChange:e.set,format:b},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Phone\xa0\xa0+1\xa0",o.a.createElement("input",{value:n,onChange:a,type:"tel"}))})})),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"react-async-ready"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#react-async-ready"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"React async ready"),"\n",o.a.createElement(l.MDXTag,{name:"p",components:n},"Check that it will work with new async React ",o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/strict-mode.html"}},"see strict-mode")),"\n",o.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"format-async-ready"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#format-async-ready"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Format Async Ready"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<React.StrictMode>\n  <Value initial={''}>\n    {text => (\n      <Rifm\n        refuse={/[^d.]/gi}\n        value={text.value}\n        onChange={text.set}\n        format={currencyFormat}\n      >\n        {({ value, onChange }) => (\n          <>\n            Format&nbsp;&nbsp;\n            <input\n              value={value}\n              onChange={onChange}\n              className={css({ textAlign: 'right' })}\n              type=\"tel\"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>"))}},o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:f},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Format\xa0\xa0",o.a.createElement("input",{value:n,onChange:a,className:Object(t.a)({textAlign:"right"}),type:"tel"}))})}))),"\n",o.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"mask-async-ready"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#mask-async-ready"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Mask Async Ready"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,'<React.StrictMode>\n  <Value initial={\'18-08-1978\'}>\n    {text => (\n      <Rifm\n        replace={v => v.length >= 10}\n        value={text.value}\n        onChange={text.set}\n        format={dateFormat}\n      >\n        {({ value, onChange }) => (\n          <>\n            Parse&nbsp;&nbsp;\n            <input\n              placeholder="dd-mm-yyyy"\n              value={value}\n              onChange={onChange}\n              type="tel"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>'))}},o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{initial:"18-08-1978"},function(e){return o.a.createElement(g,{replace:function(e){return e.length>=10},value:e.value,onChange:e.set,format:v},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Parse\xa0\xa0",o.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})}))),"\n",o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"negative-numbers"}},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#negative-numbers"}},o.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Negative numbers"),"\n",o.a.createElement(m.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d-]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={negNumberFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Int&nbsp;&nbsp;\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            // type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},o.a.createElement(i.a,{initial:""},function(e){return o.a.createElement(g,{refuse:/[^\d-]/gi,value:e.value,onChange:e.set,format:h},function(e){var n=e.value,a=e.onChange;return o.a.createElement(o.a.Fragment,null,"Int\xa0\xa0",o.a.createElement("input",{value:n,onChange:a,className:Object(t.a)({textAlign:"right"})}))})})))}}}]);