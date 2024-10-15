/*! For license information please see 3c8f3cee.4f3c5733.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620957],{968296:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var c=n(785893),s=n(511151);const t={id:"backend-plugin-api.schedulerservice.createscheduledtaskrunner",title:"SchedulerService.createScheduledTaskRunner()",description:"API reference for SchedulerService.createScheduledTaskRunner()"},d=void 0,a={id:"reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner",title:"SchedulerService.createScheduledTaskRunner()",description:"API reference for SchedulerService.createScheduledTaskRunner()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner",permalink:"/docs/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.schedulerservice.createscheduledtaskrunner",title:"SchedulerService.createScheduledTaskRunner()",description:"API reference for SchedulerService.createScheduledTaskRunner()"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,c.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:(0,c.jsx)(r.code,{children:"SchedulerService"})})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner",children:(0,c.jsx)(r.code,{children:"createScheduledTaskRunner"})})]}),"\n",(0,c.jsx)(r.p,{children:"Creates a scheduled but dormant recurring task, ready to be launched at a later time."}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"createScheduledTaskRunner(schedule: SchedulerServiceTaskScheduleDefinition): SchedulerServiceTaskRunner;\n"})}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"schedule"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:"SchedulerServiceTaskScheduleDefinition"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"The task schedule"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskrunner",children:"SchedulerServiceTaskRunner"})}),"\n",(0,c.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsx)(r.p,{children:"This method is useful for pre-creating a schedule in outer code to be passed into an inner implementation, such that the outer code controls scheduling while inner code controls implementation."})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},675251:(e,r,n)=>{var c=n(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var c,t={},l=null,u=null;for(c in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)d.call(r,c)&&!i.hasOwnProperty(c)&&(t[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===t[c]&&(t[c]=r[c]);return{$$typeof:s,type:e,key:l,ref:u,props:t,_owner:a.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var c=n(667294);const s={},t=c.createContext(s);function d(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);