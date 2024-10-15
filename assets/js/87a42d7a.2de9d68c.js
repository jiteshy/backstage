/*! For license information please see 87a42d7a.2de9d68c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[495567],{773155:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(785893),t=r(511151);const i={id:"plugin-events-node.defaulteventsservice.forplugin",title:"DefaultEventsService.forPlugin()",description:"API reference for DefaultEventsService.forPlugin()"},c=void 0,l={id:"reference/plugin-events-node.defaulteventsservice.forplugin",title:"DefaultEventsService.forPlugin()",description:"API reference for DefaultEventsService.forPlugin()",source:"@site/versioned_docs/version-stable/reference/plugin-events-node.defaulteventsservice.forplugin.md",sourceDirName:"reference",slug:"/reference/plugin-events-node.defaulteventsservice.forplugin",permalink:"/docs/reference/plugin-events-node.defaulteventsservice.forplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-events-node.defaulteventsservice.forplugin.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-node.defaulteventsservice.forplugin",title:"DefaultEventsService.forPlugin()",description:"API reference for DefaultEventsService.forPlugin()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-events-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-events-node"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice",children:(0,s.jsx)(n.code,{children:"DefaultEventsService"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice.forplugin",children:(0,s.jsx)(n.code,{children:"forPlugin"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns a plugin-scoped context of the ",(0,s.jsx)(n.code,{children:"EventService"})," that ensures to prefix subscriber IDs with the plugin ID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"forPlugin(pluginId: string, options?: {\n        discovery: DiscoveryService;\n        logger: LoggerService;\n        auth: AuthService;\n        lifecycle: LifecycleService;\n    }): EventsService;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"pluginId"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"string"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The plugin that the ",(0,s.jsx)(n.code,{children:"EventService"})," should be created for."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"options"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["{ discovery: ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),"; logger: ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; auth: ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.authservice",children:"AuthService"}),"; lifecycle: ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservice",children:"LifecycleService"}),"; }"]}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventsservice",children:"EventsService"})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},675251:(e,n,r)=>{var s=r(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,i={},d=null,a=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(667294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);