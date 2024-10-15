/*! For license information please see 742aa7af.b1c505ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[338379],{968264:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(785893),s=r(511151);const i={id:"plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github"},c=void 0,d={id:"reference/plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github",permalink:"/docs/reference/plugin-catalog-backend-module-github",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github"}},l={},a=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-github"})})]}),"\n",(0,t.jsx)(n.p,{children:"A Backstage catalog backend module that helps integrate towards Github"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Class"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",children:"GithubDiscoveryProcessor"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Extracts repositories out of a GitHub org."}),"\n",(0,t.jsx)(n.p,{children:"The following will create locations for all projects which have a catalog-info.yaml on the default branch. The first is shorthand for the second."}),"\n",(0,t.jsxs)(n.p,{children:['target: "',(0,t.jsx)(n.a,{href:"https://github.com/backstage",children:"https://github.com/backstage"}),'" or target: ',(0,t.jsx)(n.a,{href:"https://github.com/backstage/%5C*/blob/-/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/-/catalog-info.yaml"})]}),"\n",(0,t.jsx)(n.p,{children:"You may also explicitly specify the source branch:"}),"\n",(0,t.jsxs)(n.p,{children:["target: ",(0,t.jsx)(n.a,{href:"https://github.com/backstage/%5C*/blob/main/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/main/catalog-info.yaml"})]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubentityprovider",children:"GithubEntityProvider"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Discovers catalog files located in [GitHub](",(0,t.jsx)(n.a,{href:"https://github.com",children:"https://github.com"}),"). The provider will search your GitHub account and register catalog files matching the configured path as Location entity and via following processing steps add all contained catalog entities. This can be useful as an alternative to static locations or manually adding things to the catalog."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubentityprovider",children:"GitHubEntityProvider"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzer",children:"GithubLocationAnalyzer"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovider",children:"GithubMultiOrgEntityProvider"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Ingests org data (users and groups) from GitHub."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor",children:"GithubMultiOrgReaderProcessor"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Extracts teams and users out of a multiple GitHub orgs namespaced per org."}),"\n",(0,t.jsx)(n.p,{children:"Be aware that this processor may not be compatible with future org structures in the catalog."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GithubOrgEntityProvider"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Ingests org data (users and groups) from GitHub."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GitHubOrgEntityProvider"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor",children:"GithubOrgReaderProcessor"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Extracts teams and users out of a GitHub org."}),"\n"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Function"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.defaultusertransformer",children:"defaultUserTransformer(item, _ctx)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Default transformer for GitHub users to UserEntity"}),"\n"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions",children:"GithubMultiOrgEntityProviderOptions"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovider",children:"GithubMultiOrgEntityProvider"}),"."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions",children:"GithubOrgEntityProviderOptions"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GithubOrgEntityProvider"}),"."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.transformercontext",children:"TransformerContext"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Context passed to Transformers"}),"\n"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.defaultorganizationteamtransformer",children:"defaultOrganizationTeamTransformer"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Default transformer for GitHub Team to GroupEntity"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubcatalogmodule",children:"githubCatalogModule"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Registers the ",(0,t.jsx)(n.code,{children:"GithubEntityProvider"})," with the catalog processing extension point."]}),"\n"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzeroptions",children:"GithubLocationAnalyzerOptions"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgconfig",children:"GithubMultiOrgConfig"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The configuration parameters for a multi-org GitHub processor."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions",children:"GitHubOrgEntityProviderOptions"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubteam",children:"GithubTeam"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Github Team"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubuser",children:"GithubUser"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Github User"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.teamtransformer",children:"TeamTransformer"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Transformer for GitHub Team to an Entity"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.usertransformer",children:"UserTransformer"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Transformer for GitHub users to an Entity"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,o=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:d.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(667294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);