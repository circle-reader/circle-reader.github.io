(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=ReactJsxRuntime,n=React,r=(0,n.createContext)({}),o=Antd;function i(){return(0,n.useContext)(r)}function a(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}function l(e){return a(e,"Undefined")}function s(e,t){return!(!e||!e.tagName)&&e.tagName.toLowerCase()===t}function c(e){return e&&e.nodeType&&1===e.nodeType}function d(e){return a(e,"Function")}const p=classNames;var u=e.n(p),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function h(e){const{type:n,width:r,children:a,placement:l,onCancel:s,className:c,rootClassName:d}=e,p=f(e,["type","width","children","placement","onCancel","className","rootClassName"]),{app:h}=i();return"toolbar"===n?(0,t.jsx)(o.Drawer,Object.assign({styles:{body:{padding:0}}},p,{mask:!1,width:r,onClose:s,className:c,rootClassName:u()("popup-toolbar",d),placement:h.device.phone?"bottom":l,children:a})):"modal"===n?(0,t.jsx)(o.Modal,Object.assign({},p,{onCancel:s,rootClassName:d,width:h.device.phone?"90%":r,className:u()(c,"popup-modal"),children:a})):(0,t.jsx)(o.Drawer,Object.assign({},p,{onClose:s,className:c,width:h.device.phone?"100%":r,rootClassName:u()("popup-drawer",d),placement:h.device.phone?"bottom":l,children:a}))}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function y(e){const{id:r,type:o,onCancel:l,onChange:s,onVisible:d,children:p,width:u=378,placement:f="right",destoryWithRender:y=!0}=e,g=m(e,["id","type","onCancel","onChange","onVisible","children","width","placement","destoryWithRender"]),x=(0,n.useRef)("0px"),b=(0,n.useRef)(null),{me:v,app:j,container:w}=i(),[C,O]=(0,n.useState)(!1),[E,k]=(0,n.useState)(8e3);return(0,n.useEffect)((()=>{const e=[];function t(e){if(e){const e=j.field("container");if(c(e)){const t=e.style.getPropertyValue("--offsetright");t&&(x.current=t)}j.fire("display",!0,"0px","offsetright"),w.style.display="none"}else j.fire("display",!0,x.current||"0px","offsetright"),x.current="",w.style.removeProperty("display")}return e.push(j.on("screenshot_change",t)),e.push(j.on("print_change",t)),e.push(j.on(r,((...e)=>{O((t=>{if(s){e.unshift(!t);if(s.apply(j,e))return t}return t||k((e=>{let t=e+10;const n=j.field("zIndex");return a(n,"Number")&&(t=n+10),j.field("zIndex",t),t})),d&&d(!t),!t}))}))),e.push(j.on(`${v.id}_enable`,(()=>{if(!j.device.phone&&!o){const e=j.field("container");if(c(e)){const t=e.style.getPropertyValue("--offsetright");t&&j.fire("display",!0,t,`offset${f}`)}}}))),()=>{e.forEach((e=>{e()}))}}),[]),(0,n.useEffect)((()=>{b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{if(C){if(!j.device.phone&&!o){const e=j.field("container");if(c(e)){const t=e.style.getPropertyValue("--offsetright");t&&(x.current=t)}j.fire("display",!0,`${u}px`,`offset${f}`)}}else j.device.phone||o||j.fire("display",!0,x.current||"0px",`offset${f}`);j.fire("toolbar_state",r,C?"active":"inactive")}),500)}),[u,C]),(0,n.useEffect)((()=>j.on("render_leave",(()=>{y&&(d&&d(!1),O(!1))}))),[y]),(0,t.jsx)(h,Object.assign({type:o,open:C,width:u,zIndex:E,onCancel:e=>{d&&d(!1),O(!1),l&&l(e)},placement:f},g,{children:p}))}const g=AntDesignIcons;function x(e){if(!c(e))return"";const t=[];for(;e;){const n=e.id;if(n){t.unshift(`#${n}`);break}const r=e.tagName.toLocaleLowerCase();if(s(e,"body")||s(e,"html")){t.unshift(r);break}let o=1,i=e.previousElementSibling;for(;i;)o++,i=i.previousElementSibling;t.unshift(`${r}:nth-child(${o})`),e=e.parentElement}return t.join(" > ")}function b(e){const t=e.field("node");return Array.isArray(t)&&t.length>0?{title:c(t[0].title)?x(t[0].title):"",cover:c(t[0].cover)?x(t[0].cover):"",content:c(t[0].content)&&c(t[0].content._mirrorElement)?x(t[0].content._mirrorElement):""}:{}}function v(e){const{id:t,table:r="option",disabled:o,defaultValue:a}=e,{app:s,me:c,container:p}=i(),[u,f]=(0,n.useState)(a),h=()=>{o||s.get(t,r).then((e=>{!l(e)&&f(e)}))};return(0,n.useEffect)(h,[t]),{me:c,app:s,value:u,refetch:h,setValue:f,onChange:(e,n)=>{o||l(e)||(e!==a?s.set(t,e,r).then((()=>{f(e),d(n)&&n()})).catch((e=>{console.error(e),d(n)&&n(e.message)})):s.remove(t,r).then((()=>{f(e),d(n)&&n()})).catch((e=>{console.error(e),d(n)&&n(e.message)})))},container:p}}function j(e=location.href){if(/circle=/.test(e)){const[t,n=""]=e.split("#");if(!n)return e;const{hashs:r}=function(e,t,n=location.hash.substring(1).split("&")){let r=[];if(n.join("").length<=0)return{hashs:[],hash:r};const o=Array.isArray(e)?e:[e],i=n.filter((e=>{if(o.findIndex((t=>e.indexOf(t)>=0))<0)return!0;r.push(e)}));if(t){const n=`${e}=${t}`;i.push(n),r=[],r.push(n)}return{hashs:i,hash:r}}(["circle","widget"],void 0,n.split("&"));return`${t}${r.length>0?"#"+r.join("&"):""}`}return e}function w(e,t){if(!e)return;let n=0;if(e.forEach){const r=e.length;if(r<=0)return;for(;n<r&&!t(e[n],n);)n++}else{const r=Object.keys(e),o=r.length;if(o<=0)return;for(;n<o&&!t(e[r[n]],r[n]);)n++}}function C(e,t,n){let r=!1;return w(e,(e=>{if(n){if(t.includes(e))return r=!1,!0}else if(!t.includes(e))return r=!0,!0})),!r}function O(e){const{app:n,onCancel:r}=e;return(0,t.jsx)(o.Alert,{showIcon:!0,closable:!0,type:"warning",className:"retry",onClose:r,message:n.i18n("enable_fields"),action:(0,t.jsx)(o.Button,{size:"small",type:"link",onClick:()=>{n.fire("setting","option","fields")},children:n.i18n("enable")})})}function E(e){const{app:r,data:i,setEdit:a,onEdit:l}=e,[s,d]=(0,n.useState)(i&&i.selector?i.selector:""),p=(0,n.useRef)(null);return(0,n.useEffect)((()=>(i&&i.selector&&d(i.selector),p.current&&p.current(),p.current=function(e,t,n){if(!e)return null;const r="circlereader_choose",o=document.createElement("style");function i(e){const t=e.target;if(t&&t.shadowRoot)return;const o=e.fromElement||e.relatedTarget;c(o)&&o.classList.remove(r),n?!n(t)&&t.classList.add(r):t.classList.add(r)}function a(e){if(e.stopPropagation(),e.preventDefault(),!t)return;const r=e.target;r&&r.shadowRoot||(n?!n(r)&&t(r):t(r))}return o.textContent=`\n    .${r}{\n      background:#ddd !important;\n      cursor:pointer !important;\n      outline:3px dashed #777 !important;\n    }';\n  `,e.appendChild(o),e.addEventListener("click",a,!0),e.addEventListener("mouseover",i),function(){o.parentElement?.removeChild(o),e.removeEventListener("click",a,!0),e.removeEventListener("mouseover",i),w(e.querySelectorAll(`.${r}`),(function(e){e.classList.remove(r)}))}}(document.body,(e=>{e&&(p.current&&p.current(),d(x(e)))}),(e=>!e||!(!i||!i.tag)&&e.tagName!==i.tag)),()=>{p.current&&p.current()})),[i]),(0,t.jsxs)(o.Typography,{style:{padding:12,width:r.device.phone?"100vw":500},children:[(0,t.jsx)(o.Typography.Paragraph,{children:(0,t.jsxs)(o.Space,{align:"start",children:[(0,t.jsx)(o.Tooltip,{title:r.i18n("back"),children:(0,t.jsx)(o.Button,{size:"small",icon:(0,t.jsx)(g.ArrowLeftOutlined,{}),onClick:()=>a("")})}),(0,t.jsx)(o.Typography.Text,{strong:!0,children:r.i18n("guide",i?.label||"")})]})}),(0,t.jsx)(o.Typography.Paragraph,{children:(0,t.jsxs)(o.Space.Compact,{block:!0,children:[(0,t.jsx)(o.Input,{value:s,onChange:e=>{d(e.target.value)}}),(0,t.jsx)(o.Button,{type:"primary",onClick:()=>{l(s)},disabled:!s,children:r.i18n("ok")})]})})]})}function k(){const{me:e,app:r}=i(),a=r.data("try"),[l,s]=(0,n.useState)(""),c=r.applyFilter("rule")||{},{value:d,refetch:p}=v({id:"parse_option",defaultValue:{fields:[]}}),u=Array.isArray(d.fields)?d.fields:[],{value:f,setValue:h}=v({table:"node",id:c.id||`rule_${j()}`,defaultValue:b(r)}),{value:m,onChange:y}=v({id:`${e.id}_option`,defaultValue:{more:!0,fields:!0}}),x=()=>{y({...m,more:!m.more})},k=e=>{h({...f,[l]:e}),s("")},_=e=>{f[e]&&(delete f[e],h({...f}))},$=()=>{r.fire("url2json",((t,n)=>{if(t)return void r.error(t);r.field("node",[n]),r.hasHook("render")&&r.fire("render_refetch"),r.fire("render",!0);const o={...f};o.id&&o.id.startsWith("rule_")&&(o.id=o.id.slice(5)),r.applyFilter(`${e.id}_done`,o),setTimeout((()=>{r.fire(e.id)}),500)}),{selector:f})},N=[{title:r.i18n("element"),width:"20%",dataIndex:"label"},{title:r.i18n("selector"),dataIndex:"selector",render:(e,n)=>(0,t.jsx)(o.Input,{value:e,onChange:e=>((e,t)=>{e?h({...f,[t]:e}):_(t)})(e.target.value,n.id)})},{width:80,title:r.i18n("action"),align:"right",dataIndex:"action",render:(e,n)=>n.selector?(0,t.jsxs)(o.Space,{size:0,children:[(0,t.jsx)(o.Tooltip,{title:r.i18n("edit"),children:(0,t.jsx)(o.Button,{type:"text",size:"small",icon:(0,t.jsx)(g.EditOutlined,{}),onClick:()=>s(n.id)})}),(0,t.jsx)(o.Popconfirm,{title:r.i18n("remove"),okText:r.i18n("ok"),cancelText:r.i18n("cancel"),trigger:["hover"],onConfirm:()=>_(n.id),children:(0,t.jsx)(o.Button,{danger:!0,type:"text",size:"small",icon:(0,t.jsx)(g.DeleteOutlined,{})})})]}):(0,t.jsx)(o.Button,{size:"small",type:"primary",onClick:()=>s(n.id),children:r.i18n("choose")})}],P=[{id:"title",label:r.i18n("heading")},{label:r.i18n("content"),id:"content"},{label:r.i18n("author"),id:"author",hidden:!0},{label:r.i18n("published"),id:"published",hidden:!0},{label:r.i18n("modified"),id:"modified",hidden:!0},{label:r.i18n("excerpt"),id:"excerpt",hidden:!0},{tag:"IMG",id:"cover",label:r.i18n("cover"),hidden:!0},{id:"tags",label:r.i18n("tags"),hidden:!0},{tag:"A",id:"next",label:r.i18n("next"),hidden:!0}],S=[];return w(P,(e=>{["title","content","next",...u].includes(e.id)&&S.push(e)})),w(f,((e,t)=>{const n=S.findIndex((e=>e.id===t));n>=0&&(S[n].selector=e)})),(0,n.useEffect)((()=>{a&&r.data("try","destory")}),[a]),(0,n.useEffect)((()=>{r.on("parse_option",p)}),[]),l?(0,t.jsx)(E,{app:r,setEdit:s,onEdit:k,data:S.find((e=>e.id===l))}):(0,t.jsxs)("div",{children:[m.fields&&C(u,["tags","cover","author","excerpt","modified","published"])&&(0,t.jsx)(O,{app:r,onCancel:()=>{y({...m,fields:!1})}}),a&&(0,t.jsx)(o.Alert,{showIcon:!0,type:"warning",className:"retry",message:r.i18n("try_manual")}),(0,t.jsx)(o.Table,{rowKey:"id",size:"small",pagination:!1,columns:N,style:{width:r.device.phone?"100vw":500},dataSource:m.more?S:S.filter((e=>!e.hidden)),footer:()=>(0,t.jsxs)(o.Space,{direction:"vertical",style:{display:"flex"},children:[(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(o.Button,{type:"text",size:"small",onClick:x,icon:m.more?(0,t.jsx)(g.CaretUpOutlined,{}):(0,t.jsx)(g.CaretDownOutlined,{}),children:r.i18n(m.more?"fold":"unfold")})}),(0,t.jsx)(o.Tooltip,{title:f.content?"":r.i18n("content_require"),children:(0,t.jsx)(o.Button,{block:!0,type:"primary",disabled:!f.content,onClick:$,children:r.i18n("ok")})})]})})]})}function _(){const{me:e,app:r}=i();return(0,n.useEffect)((()=>{r.fire("display")}),[]),(0,t.jsx)(y,{id:e.id,mask:!1,type:"toolbar",onChange:(e,t)=>{e&&t&&r.data(t,!0)},destoryWithRender:!1,onVisible:e=>{e&&r.field("running")&&r.fire("render",!1)},className:"manual-wrapper",title:`${r.i18n("title")} - ${r.i18n("name")}`,extra:(0,t.jsx)(o.Button,{type:"text",target:"_blank",icon:(0,t.jsx)(g.QuestionCircleOutlined,{}),href:r.path("docs/manual.html")}),children:(0,t.jsx)(k,{})})}window.definePlugin("manual",(function(e,n,o){let i=null;return{start(){i||(i=o.display.render((({root:i,shadow:a,container:l})=>({app:n,me:e,children:(0,t.jsx)(_,{}),provider:(0,t.jsx)(r.Provider,{value:{app:n,root:i,shadow:a,container:l,me:e,dependencies:o}})})),{style:".ant-drawer.popup-toolbar .ant-drawer-header {\n  padding: 8px 6px;\n}\n.ant-drawer.popup-toolbar .manual-wrapper.ant-drawer-content {\n  flex-direction: column;\n  align-items: normal;\n}\n.retry.ant-alert {\n  margin: 6px;\n  font-size: 12px;\n}\n\n.ant-drawer.popup-toolbar {\n  height: auto;\n  bottom: auto;\n  left: auto;\n}\n.ant-drawer.popup-toolbar .ant-drawer-content-wrapper {\n  height: auto !important;\n  width: auto !important;\n  position: static !important;\n}\n.ant-drawer.popup-toolbar .ant-drawer-content {\n  flex-direction: row-reverse;\n  align-items: start;\n}\n.ant-drawer.popup-toolbar .ant-drawer-header-close-only {\n  padding: 16px;\n  border: 0;\n}\n.ant-drawer.popup-toolbar .ant-drawer-header-close-only .ant-drawer-close {\n  margin-right: 0;\n}\n\n.mobile .ant-drawer.popup-toolbar .ant-drawer-content-wrapper {\n  overflow: auto;\n  max-height: 100vh !important;\n  width: 100vw !important;\n}\n\n",syncWithRender:!1}))},destory(){i&&(i(),i=null)}}}))})();